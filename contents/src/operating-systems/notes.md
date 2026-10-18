# Operating Systems: Lecture Notes

An operating system (OS) manages the hardware of a computer and gives programs a clean, protected and efficient environment to run in. This course covers processes and threads, CPU scheduling, synchronisation and deadlocks, memory management and virtual memory, storage and file systems. Examples use Linux and C. All the C programs below were compiled with gcc on Ubuntu (WSL2) and run; the outputs shown are real. All scheduling, paging, deadlock and disk numbers were computed with scripts. Prerequisites: Computer Organization, Data Structures and Algorithms, and C programming.

# Chapter 1: Introduction

## 1.1 What an OS does
- **Resource manager**: shares the CPU, memory, disks and devices among programs fairly and efficiently.
- **Abstraction provider**: hides hardware detail (a file instead of disk blocks, a process instead of raw CPU state, virtual memory instead of physical RAM).
- **Protector**: one program cannot read or corrupt another or the kernel.

## 1.2 Kernel, user mode and system calls
The CPU has at least two modes. In **kernel mode** all instructions and memory are accessible; in **user mode** privileged instructions (I/O, changing page tables, halting) trap. A program asks the kernel for a service through a **system call** (open, read, write, fork, exec, wait, mmap, ...), which executes a trap instruction, switches to kernel mode, runs the kernel handler and returns. **Interrupts** (timer, device) and **exceptions** (page fault, divide by zero) also enter the kernel. The **timer interrupt** lets the OS take the CPU back from a running program (preemption).

Kernel structures: **monolithic** (Linux: everything in one privileged image, with loadable modules), **microkernel** (minimal kernel, servers in user space), **hybrid** (Windows, macOS), and **virtual machines / containers**. A container shares the host kernel but isolates processes with namespaces and control groups.

## 1.3 Boot sequence
Firmware (UEFI) initialises hardware, loads the bootloader from disk, which loads the kernel; the kernel initialises memory management, devices and the first user process (init/systemd, PID 1) which starts the rest.

# Chapter 2: Processes

## 2.1 The process abstraction
A **process** is a program in execution: an address space (code, data, heap, stack), CPU registers (program counter, stack pointer), open files and other resources. The kernel keeps a **process control block (PCB)** for each: PID, state, saved registers, scheduling information, memory-management information, open-file table.

**States**: new, ready, running, waiting (blocked on I/O or an event), terminated. Transitions: the scheduler dispatches ready to running; a timer interrupt moves running to ready; an I/O request moves running to waiting; I/O completion moves waiting to ready.

**Context switch**: save the registers of the old process in its PCB, load the new process's registers and page table. It is pure overhead (typically microseconds). If a round-robin quantum is 10 ms and a switch costs 2 ms, only 10/12 = 83 percent of the CPU does useful work.

## 2.2 Creating processes on Unix
`fork()` creates a copy of the calling process. It returns 0 in the child and the child's PID in the parent. The child has its own copy of the address space (implemented lazily with copy-on-write). `exec()` replaces the current program image with a new program. `wait()` lets a parent collect a child's exit status.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/wait.h>
#include <unistd.h>
int x = 10;
int main(void) {
    int fd[2];
    pipe(fd);
    pid_t pid = fork();
    if (pid == 0) {
        x += 5;                       /* the child has a private copy of x */
        close(fd[0]);
        char msg[64];
        snprintf(msg, sizeof msg, "child sees x=%d", x);
        write(fd[1], msg, strlen(msg) + 1);
        close(fd[1]);
        exit(42);
    }
    close(fd[1]);
    char buf[64];
    read(fd[0], buf, sizeof buf);
    int status;
    waitpid(pid, &status, 0);
    printf("parent got: \"%s\"; parent x=%d; child exit status=%d\n", buf, x, WEXITSTATUS(status));
    return 0;
}
```
Output: `parent got: "child sees x=15"; parent x=10; child exit status=42`. The child's change to x is invisible to the parent: separate address spaces. The pipe is the communication channel.

**How many processes?** Each `fork()` doubles the number of processes that execute the following code. Three consecutive `fork()` calls give 2^3 = **8** processes (the test program printed exactly 8 lines). A loop `for (i = 0; i < n; i++) fork();` also creates 2^n processes in total.

Running another program:
```c
pid_t pid = fork();
if (pid == 0) {
    execlp("echo", "echo", "hello from the child program", (char *)NULL);
    perror("execlp");          /* reached only if exec fails */
    _exit(127);
}
int status;
waitpid(pid, &status, 0);
```
Output: `hello from the child program` and then `child exited with status 0`. This fork-then-exec split is how a shell runs commands: it forks, the child sets up redirection (`dup2`) and execs, the parent waits.

**Pipes in a shell.** `printf "a\nb\nc\n" | wc -l` is two processes connected by a pipe; `dup2` makes the pipe the child's stdout or stdin, and the parent must close both pipe ends, otherwise the reader never sees end-of-file. The program printed **3**. The pipe buffer on Linux is 65,536 bytes by default: a writer blocks when it is full.

**Zombies and orphans.** A terminated child stays a **zombie** (state Z, only its PCB entry remains) until the parent calls `wait`. Test: the child exited, the parent slept 1 s and looked at `/proc/<pid>/stat`: state `Z`; after `waitpid` the entry disappeared. An **orphan** (parent died first) is adopted by init, which reaps it.

## 2.3 Signals
A **signal** is an asynchronous software notification (SIGINT from Ctrl-C, SIGSEGV for a bad memory access, SIGCHLD when a child ends, SIGKILL which cannot be caught, SIGUSR1 for the user). A process installs a handler with `sigaction`. A test program sent SIGUSR1 to itself and its handler ran (signal number 10 on Linux). Handlers must only call async-signal-safe functions and should set a `volatile sig_atomic_t` flag.

## 2.4 Interprocess communication
- **Pipes** and FIFOs: byte streams. **Message queues**. **Shared memory** (fastest; needs synchronisation). **Sockets**: local or network. **Signals**: notifications only.

# Chapter 3: Threads

A **thread** is a unit of execution inside a process: it has its own stack and registers but shares code, heap, globals and open files with the other threads of the process. Benefits: cheap creation and switching, simple sharing, parallelism on multicore CPUs. Cost: shared memory means **races**.

Models: user-level threads (one kernel entity, fast but one blocking call blocks all), kernel threads (one-to-one, used by Linux and Windows), many-to-many. POSIX threads (pthreads) is the standard C API: `pthread_create`, `pthread_join`, `pthread_mutex_*`, `pthread_cond_*`.

## 3.1 A data race, measured
```c
long counter = 0;
void *work(void *arg) {
    for (int i = 0; i < 1000000; i++) counter++;
    return NULL;
}
/* two threads each run work(); expected final value 2,000,000 */
```
`counter++` compiles to load, add, store; two threads can both load the same value and one increment is lost. The measured results of three runs of the unprotected counter were **1,976,498**, **1,976,669** and **1,971,753** (about 24,000 to 28,000 updates lost, different each time). The same loop protected with a mutex gave 2,000,000 every time, as did an atomic add. A race produces wrong answers that vary from run to run, which is what makes them hard to debug.

# Chapter 4: CPU Scheduling

## 4.1 Concepts and metrics
The **short-term scheduler** picks which ready process runs. CPU-bound processes run long bursts, I/O-bound ones short bursts. A scheduler may be **non-preemptive** (a process runs until it blocks or finishes) or **preemptive** (it can be interrupted). Metrics:
- **Turnaround time** = completion - arrival. **Waiting time** = turnaround - burst. **Response time** = first run - arrival. **Throughput**, **CPU utilisation**, **fairness**.

## 4.2 The algorithms, worked on one example
Processes (arrival, burst): P1 (0, 8), P2 (1, 4), P3 (2, 9), P4 (3, 5).

**FCFS** (first come, first served, non-preemptive): order P1, P2, P3, P4. Completion times 8, 12, 21, 26. Waiting times 0, 7, 10, 18: **average 8.75**. Simple, but short jobs wait behind long ones (**convoy effect**).

**SJF** (shortest job first, non-preemptive): at t = 8 the shortest ready is P2 (4), then P4 (5), then P3 (9). Completion: P1 8, P2 12, P4 17, P3 26. Waiting: 0, 7, 15 (P3), 9 (P4): **average 7.75**. Provably minimal average waiting among non-preemptive schedules, but needs the burst length in advance (estimated by exponential averaging: tau_next = a t_last + (1 - a) tau_old) and can starve long jobs.

**SRTF** (shortest remaining time first = preemptive SJF): timeline P1 [0,1], P2 [1,5], P4 [5,10], P1 [10,17], P3 [17,26]. Completion: P2 5, P4 10, P1 17, P3 26. Waiting: P1 9, P2 0, P3 15, P4 2: **average 6.5**.

**Round robin** (preemptive, time quantum q = 3): Gantt chart P1 [0,3], P2 [3,6], P3 [6,9], P4 [9,12], P1 [12,15], P2 [15,16], P3 [16,19], P4 [19,21], P1 [21,23], P3 [23,26]. Completion: P2 16, P4 21, P1 23, P3 26. Waiting: P1 15, P2 11, P3 15, P4 13: **average 13.5**. RR gives good response time and fairness. A very large q degenerates to FCFS; a very small q wastes time on context switches. A rule of thumb: about 80 percent of CPU bursts should be shorter than q.

**Priority scheduling**: run the highest-priority ready process; may starve low-priority processes, fixed by **aging** (raise priority with waiting time). Example, all arriving at 0 (burst, priority; lower number means higher priority): P1 (10, 3), P2 (1, 1), P3 (2, 4), P4 (1, 5), P5 (5, 2). Order P2, P5, P1, P3, P4, completion 1, 6, 16, 18, 19, waiting 0, 1, 6, 16, 18: **average 8.2**.

**Multilevel feedback queue (MLFQ)**: several queues with different priorities and quanta; a process that uses its whole quantum drops a level (CPU-bound), one that blocks early stays high (interactive); periodic boosting prevents starvation. This is the basis of schedulers in Windows, macOS and (as CFS, which uses virtual runtime and a red-black tree) Linux.

**Real-time**: rate-monotonic (shorter period, higher priority) and earliest-deadline-first scheduling (see Real-Time courses). Rate-monotonic is schedulable if utilisation <= n(2^(1/n) - 1) (69.3 percent as n grows).

**Multiprocessor** scheduling: per-CPU run queues, processor affinity, load balancing.

# Chapter 5: Synchronisation

## 5.1 The critical-section problem
A **critical section** is code that accesses shared data. A solution must provide **mutual exclusion**, **progress** (the decision of who enters cannot be postponed forever by processes outside), and **bounded waiting** (no starvation).

**Peterson's algorithm** (two threads, shared `flag[2]` and `turn`):
```c
lock(i): flag[i] = 1; turn = j; while (flag[j] && turn == j) ;   /* spin */
unlock(i): flag[i] = 0;
```
It satisfies all three conditions, but on modern CPUs it works only with sequentially consistent atomics (plain variables can be reordered by the compiler and CPU). A C11 version using `atomic_int` ran with two threads, one million entries each: counter = **2,000,000**.

**Hardware support**: atomic **test-and-set**, **compare-and-swap**, fetch-and-add; used to build **spinlocks** (busy waiting, good for very short sections on multicore) and the blocking locks below. Disabling interrupts works only on a single CPU kernel.

## 5.2 Mutexes and semaphores
A **mutex** gives exclusive access: `lock()` blocks if held, `unlock()` wakes a waiter. A **semaphore** is an integer S with atomic operations: `wait(S)` (P): if S > 0 then S = S - 1 else block; `signal(S)` (V): S = S + 1 and wake a waiter. A **binary** semaphore (0 or 1) acts as a lock; a **counting** semaphore counts resources.

**Producer-consumer (bounded buffer)** with semaphores `empty` (initially N) and `full` (initially 0) and a mutex for the buffer:
```
producer:  wait(empty); lock(mu); put(item); unlock(mu); signal(full);
consumer:  wait(full);  lock(mu); item = get(); unlock(mu); signal(empty);
```
Tested in C with an 8-slot buffer and 100,000 items: the sum produced equaled the sum consumed (5,000,050,000 = 100,000 × 100,001/2). **Order matters**: acquiring the mutex before `wait(empty)` can deadlock (a producer holding the mutex waits forever for space while the consumer cannot get the mutex).

**Readers-writers**: many readers or one writer. A POSIX read-write lock (`pthread_rwlock_t`) provides it. Policies can starve writers or readers.

**Dining philosophers**: five philosophers, five forks. If everyone picks up the left fork first, all may hold one fork and wait forever (deadlock). Solutions: **resource ordering** (always pick up the lower-numbered fork first; this breaks circular wait), allow at most four at the table, or an arbiter. The ordered version in C finished 5 × 20,000 meals with no deadlock.

## 5.3 Monitors and condition variables
A **monitor** bundles shared data, the procedures that access it and implicit mutual exclusion; **condition variables** (`wait`, `signal`/`notify`) let a thread sleep inside a monitor until a condition holds. In pthreads, always re-check the condition in a loop:
```c
pthread_mutex_lock(&m);
while (!ready) pthread_cond_wait(&c, &m);   /* releases m while sleeping */
/* use shared data */
pthread_mutex_unlock(&m);
```
The loop is required because of spurious wakeups and because another thread may have changed the condition before this one runs.

## 5.4 Deadlock
A set of processes is **deadlocked** if each waits for a resource held by another in the set. **Four necessary conditions** (Coffman): (1) mutual exclusion, (2) hold and wait, (3) no preemption, (4) circular wait. Break any one to prevent deadlock.

Experiment (C, two threads, opposite lock orders with a 1-second timed lock to detect it): T1 locks A then wants B; T2 locks B then wants A: both **timed out (deadlock)**. With the consistent order (A then B for both) both got both locks. Resource ordering is the standard fix.

**Resource-allocation graph**: edges request (process to resource) and assignment (resource to process). With single-instance resources a cycle means deadlock; with multiple instances a cycle is necessary but not sufficient.

**Handling**: prevention (attack a condition), avoidance (banker's algorithm), detection and recovery (abort or preempt), or ignore it (the "ostrich" approach used by most general-purpose systems).

**Banker's algorithm** (avoidance). Data: Available (a vector), Max, Allocation, Need = Max - Allocation. A state is **safe** if there is an order in which each process can finish with the resources currently free plus those released by the earlier ones. Safety algorithm: Work = Available; repeatedly find a process with Need <= Work, add its Allocation to Work, mark it finished; the state is safe if all finish.

Classic example: 5 processes, 3 resource types with totals (10, 5, 7).

```
        Allocation   Max       Need
P0      0 1 0        7 5 3     7 4 3
P1      2 0 0        3 2 2     1 2 2
P2      3 0 2        9 0 2     6 0 0
P3      2 1 1        2 2 2     0 1 1
P4      0 0 2        4 3 3     4 3 1
Available = (3, 3, 2)
```
Safe sequence: Work = (3,3,2). P1 can run (need (1,2,2) <= work): Work = (5,3,2). P3 (need (0,1,1)): Work = (7,4,3). P4 (need (4,3,1)): Work = (7,4,5). P0 (need (7,4,3)): Work = (7,5,5). P2 (need (6,0,0)): Work = (10,5,7). **Safe sequence <P1, P3, P4, P0, P2>**. Resource-request algorithm: P1 requests (1,0,2): it is <= Need and <= Available, so pretend to grant it; the new state is still safe (same sequence), so **grant**. P0 requests (0,2,0) in the original state: the new state is safe too (sequence <P3, P1, P2, P0, P4>), so it could be granted. But **after P1's request has been granted** (Available = (2,3,0)), the same request by P0 would leave Available = (2,1,0) and no process could then finish: the state is **unsafe**, so P0 must wait. Likewise P4's request (3,3,0) at that point exceeds Available and must wait. Whether a request is granted depends on the current state, not only on the request.

**Detection**: the same algorithm using current requests instead of Need; processes that cannot finish are deadlocked. **Recovery**: abort all deadlocked processes, abort one at a time, or preempt resources with rollback.

# Chapter 6: Memory Management

## 6.1 Address spaces
A program uses **logical (virtual) addresses**; the **memory-management unit (MMU)** translates them to **physical addresses** using page tables. Protection: each process can touch only its own mapped pages.

## 6.2 Contiguous allocation and fragmentation
Variable partitions with placement policies. Example: free partitions 100, 500, 200, 300, 600 KB; requests 212, 417, 112, 426 KB in order.
- **First fit** (first partition big enough): 212 goes into 500 (leaving 288), 417 into 600 (leaving 183), 112 into 288 (leaving 176), 426 **cannot be placed**.
- **Best fit** (smallest sufficient): 212 into 300, 417 into 500, 112 into 200, 426 into 600: **all placed**.
- **Worst fit** (largest): 212 into 600 (388 left), 417 into 500, 112 into 388, 426 **cannot be placed**.
**External fragmentation**: enough free memory in total but not contiguous (fixed by compaction or paging). **Internal fragmentation**: waste inside an allocated unit.

## 6.3 Paging
Physical memory is divided into **frames** and the logical address space into **pages** of the same size (a power of two, typically 4 KB). The address splits into a **page number** (index into the page table) and an **offset**. The page table entry gives the frame number plus bits: valid, read/write, user/supervisor, accessed (reference), dirty.

Example: 32-bit virtual addresses, 4 KB pages. The offset is 12 bits and the page number 20 bits, so a process has 2^20 = 1,048,576 pages. With 4-byte entries a flat page table is 4 MB per process. Address 0x1A2B3C: page number 0x1A2, offset 0xB3C. If page 0x1A2 is in frame 0x0F7 the physical address is 0x0F7B3C.

Internal fragmentation: a 72,766-byte process with 2048-byte pages needs 36 pages, wasting 2048 - (72,766 mod 2048) = 2048 - 1086 = **962 bytes** in its last page (on average half a page).

**Multilevel page tables** keep only the needed parts: a two-level scheme with 32-bit addresses splits 10 + 10 + 12 bits; each second-level table has 1024 entries × 4 B = 4096 B = exactly one page. x86-64 uses four levels of 9 bits (512 entries × 8 bytes = one 4 KB page per table) plus a 12-bit offset for 48-bit virtual addresses. **Inverted** and hashed page tables index by frame instead.

**TLB** (translation lookaside buffer): a small associative cache of recent translations. **Effective access time** with a hit ratio h, TLB lookup 10 ns and memory access 100 ns: EAT = h (10 + 100) + (1 - h)(10 + 200). For h = 0.98: 0.98 × 110 + 0.02 × 210 = **112 ns**; for h = 0.90: 0.9 × 110 + 0.1 × 210 = **120 ns**.

## 6.4 Virtual memory and demand paging
Pages are loaded only when touched. A reference to a page whose valid bit is clear causes a **page fault**: the OS finds the page on disk, picks a free frame (evicting a victim if necessary), reads the page, updates the table and restarts the instruction. Test: a program touched every page of a 100 MB mapping once: 100 MB / 4096 B = **25,600 pages** and the kernel reported **25,600 minor page faults** (each first touch allocated a zero-filled frame).

**Cost**: with a memory access of 200 ns, a fault service of 8 ms and fault rate p: EAT = (1 - p) × 200 + p × 8,000,000 ns. For p = 1/1000: **8199.8 ns**, a 41 times slowdown. To keep the slowdown below 10 percent (EAT <= 220 ns) p must be below (220 - 200)/(8,000,000 - 200) = **2.5 × 10^-6**: fewer than one fault per 400,000 references.

**Copy-on-write**: after `fork` parent and child share frames marked read-only; the first write to a page faults and the kernel copies it.

## 6.5 Page replacement
When no frame is free the OS evicts a page. Reference string 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1 with 3 frames:
- **FIFO** (evict the oldest): **15 faults**.
- **LRU** (evict the least recently used): **12 faults**.
- **OPT** (Belady's optimal, evict the page used farthest in the future; impossible to implement but the benchmark): **9 faults**.
- **Clock** (second chance, approximates LRU with a reference bit): 14 faults here.

By number of frames (FIFO, LRU, OPT): 3 frames 15, 12, 9; 4 frames 10, 8, 8; 5 frames 9, 7, 7.

**Belady's anomaly**: with FIFO, more frames can mean more faults. String 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5: FIFO with 3 frames = **9** faults but with 4 frames = **10**. LRU and OPT are **stack algorithms** and never show it (LRU: 10 with 3 frames, 8 with 4).

**Thrashing**: if a process has fewer frames than its **working set** (the pages it uses in a recent window), it faults constantly and CPU use collapses. Remedies: working-set or page-fault-frequency allocation; reduce the degree of multiprogramming. **Locality** (temporal and spatial) is what makes paging work at all.

**Other**: global versus local replacement, prepaging, huge pages (2 MB reduce TLB pressure), memory-mapped files, swapping and the OOM killer.

# Chapter 7: Mass Storage and I/O

## 7.1 Disks
A hard disk's access time = seek + rotational latency + transfer. At 7200 rpm one rotation takes 8.33 ms, so the average rotational latency is **4.17 ms**; with a 9 ms average seek and a 4 KB transfer at 200 MB/s (0.02 ms) a random read takes about **13.2 ms**, which is why sequential access (no seeks) matters. SSDs have no seek time but pages must be erased in blocks (write amplification, wear levelling, TRIM).

## 7.2 Disk scheduling
Cylinders 0 to 199, head at 53, request queue 98, 183, 37, 122, 14, 124, 65, 67:
- **FCFS**: total head movement **640** cylinders.
- **SSTF** (shortest seek time first): order 65, 67, 37, 14, 98, 122, 124, 183: **236** (can starve far requests).
- **SCAN** (elevator): moving toward 0 first: 37, 14, 0, then 65, 67, 98, 122, 124, 183: **236**.
- **LOOK** (SCAN that turns back at the last request): moving down first: **208**; moving up first: 299.
- **C-SCAN** moves in one direction and jumps back, giving more uniform waiting.
Modern SSDs and NVMe devices do their own scheduling; the OS uses simple schedulers (for example none or mq-deadline in Linux).

## 7.3 RAID
**RAID 0** striping (speed, no redundancy); **RAID 1** mirroring; **RAID 5** striping with distributed parity (n disks give n - 1 of capacity and survive one failure); **RAID 6** two parity blocks (survive two failures); **RAID 10** striped mirrors. Example: four 1 TB disks: RAID 0 = 4 TB (no fault tolerance), RAID 5 = 3 TB, RAID 10 = 2 TB. RAID is not a backup.

## 7.4 I/O mechanisms
Programmed I/O (polling), **interrupt-driven I/O**, and **DMA** (the controller transfers data to memory without the CPU). Drivers hide device differences behind a uniform interface; buffering and caching (the page cache) hide latency.

# Chapter 8: File Systems

## 8.1 Concepts
A **file** is a named sequence of bytes with attributes (size, owner, permissions, times). A **directory** maps names to files; hierarchical namespace; **hard links** (several names for one inode) and **symbolic links** (a file holding a path). Unix permissions: read, write, execute for owner, group, others (for example 0644 = rw-r--r--). The file API: open, read, write, lseek, close; the kernel keeps a per-process file-descriptor table pointing into the system-wide open-file table.

## 8.2 Allocation methods
- **Contiguous**: fast, but external fragmentation and growth problems.
- **Linked** (FAT): each block holds the next block number, kept in a table (the file allocation table in memory). FAT32 with 4 KB clusters on a 1 TB volume has 2^40/2^12 = 268,435,456 entries = **1 GiB** of table at 4 bytes each: it is large.
- **Indexed / inode-based** (Unix ext4, with extents): the inode holds attributes and block pointers: 12 direct pointers, 1 single-indirect, 1 double-indirect, 1 triple-indirect. With 4 KB blocks and 4-byte pointers a block holds 1024 pointers. Maximum file size = (12 + 1024 + 1024^2 + 1024^3) × 4 KB: direct 48 KiB, single indirect 4 MiB, double indirect 4 GiB, triple indirect 4 TiB, total about **4.004 TiB (4100.004 GiB)**. A 5 MiB file needs 1280 blocks: 12 direct, so 1268 through indirect blocks (the single indirect covers 1024, the rest through the double indirect).

**Free-space management**: bitmaps or free lists. **Journaling** (ext4, NTFS): write intended metadata changes to a log before applying them, so after a crash the file system replays or discards the log instead of scanning the whole disk; same idea as write-ahead logging in databases. **Copy-on-write file systems** (ZFS, Btrfs) never overwrite live data and add snapshots and checksums.

## 8.3 Performance
The **page cache** keeps recently used file blocks in RAM; read-ahead prefetches sequentially; writes are buffered and flushed later (`fsync` forces them to disk). Sequential access avoids seeks.

# Chapter 9: Protection, Security and Virtualisation (overview)
- **Access control**: ACLs and capabilities; the principle of least privilege; users, groups, root.
- **Common attacks**: buffer overflow (mitigations: stack canaries, ASLR, non-executable stacks), privilege escalation, race conditions in file access (TOCTOU), malware.
- **Authentication**: salted password hashes, multi-factor.
- **Virtualisation**: a hypervisor runs several guest OSs using hardware support (VT-x, AMD-V) and nested page tables; **containers** (Docker) isolate processes with namespaces and cgroups but share the kernel and are lighter than VMs.

## Quick reference
- Waiting time = turnaround - burst; turnaround = completion - arrival.
- Four deadlock conditions: mutual exclusion, hold and wait, no preemption, circular wait.
- Page number = address / page size; offset = address mod page size. Pages for n address bits and a p-bit offset: 2^(n - p).
- EAT (TLB) = h (t_tlb + t_mem) + (1 - h)(t_tlb + 2 t_mem). EAT (faults) = (1 - p) t_mem + p t_fault.
- Disk access = seek + rotational latency (half a rotation on average) + transfer.
