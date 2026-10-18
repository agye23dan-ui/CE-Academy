# Operating Systems: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. The C questions should be compiled and run on Linux (gcc, or WSL on Windows); every program and number in the solutions was run or computed. Show your working for scheduling charts and tables.

# Assignment 1: Processes, Threads and CPU Scheduling (Chapters 1 to 4)

**Q1. Modes and system calls.** (a) Explain why user programs cannot execute privileged instructions directly and describe step by step what happens when a program calls `read()` [4]. (b) Give three events that cause a transfer of control to the kernel and say whether each is synchronous or asynchronous [3]. (c) Why does the kernel use a timer interrupt? [3]

**Q2. Reading fork programs.** How many lines does each program print, and what? (a) `fork() && fork(); printf("A\n");` [2] (b) `for (i = 0; i < 3; i++) if (fork() == 0) break; printf("B\n");` [3] (c) `int x = 10; if (fork() == 0) { x += 5; printf("child x=%d\n", x); } else { wait(NULL); printf("parent x=%d\n", x); }` [3] (d) `fork(); fork(); printf("D\n");` [2]

**Q3. Threads and data races.** Two threads each execute `for (i = 0; i < 1000000; i++) counter++;` on a shared `long counter`. (a) Why is the final value usually less than 2,000,000? Show an interleaving of the machine-level steps that loses an update [5]. (b) Name two ways to fix it and their costs [3]. (c) What results did the experiment give for the unprotected program and for the mutex and atomic versions? [2]

**Q4. Scheduling comparison.** Processes (arrival, burst): P1 (0, 7), P2 (2, 4), P3 (4, 1), P4 (5, 4). Draw Gantt charts and compute the waiting time of each process and the average for FCFS, non-preemptive SJF, SRTF and round robin with q = 2 [10].

**Q5. Priority scheduling and starvation.** All arrive at time 0: P1 (burst 10, priority 3), P2 (1, 1), P3 (2, 4), P4 (1, 5), P5 (5, 2); a lower number means a higher priority. (a) Non-preemptive priority: Gantt chart and average waiting time [4]. (b) Compare with FCFS, SJF and RR (q = 1) [4]. (c) Explain starvation and how aging fixes it [2].

**Q6. Estimating bursts and context-switch cost.** (a) With tau0 = 10 and alpha = 0.5 and measured bursts 6, 4, 6, 4, compute the exponential-average predictions tau1 to tau4 [4]. (b) A round-robin system has a context switch of 2 ms: what fraction of CPU time is useful for quanta of 10 ms and 50 ms? [3] (c) What is the trade-off in choosing q? [3]

**Q7. Shell pipelines.** (a) Write a C program that runs `printf "a\nb\nc\n" | wc -l` using `pipe`, `fork`, `dup2` and `exec` [6]. (b) Why must the parent close both ends of the pipe? [2] (c) What is a zombie and how did we observe one? [2]

## Solutions to Assignment 1

**Q1.** (a) Privileged instructions (I/O, changing page tables, disabling interrupts) trap in user mode, so a user program cannot take over the machine or touch other processes' memory. For `read()`: the C library places the arguments and system-call number in registers and executes a trap instruction; the CPU switches to kernel mode and jumps to the system-call handler; the kernel checks the arguments, finds the file's data (in the page cache or by starting a disk read and blocking the process), copies the bytes into the user buffer, and returns to user mode with the result.
(b) A system call (synchronous: caused by the instruction being executed), an exception such as a page fault or divide by zero (synchronous), a device or timer interrupt (asynchronous).
(c) The timer interrupt returns control to the kernel at regular intervals even if the program never makes a system call, so the scheduler can preempt it and no program can monopolise the CPU.

**Q2.** (a) `fork() && fork()`: the original process gets the child's PID (true) and runs the second fork; the first child gets 0 (false) and skips it. The second fork adds one more process: 3 processes in total, so **3 lines** ("A" three times). (Verified by running it.)
(b) Each of the three iterations the parent forks a child that immediately breaks out of the loop and prints; the parent prints after its third fork: 3 children + 1 parent = **4 lines** ("B" four times).
(c) The child prints `child x=15`; the parent waits, then prints `parent x=10` (separate address spaces). **2 lines**, in that order.
(d) Two forks give 2^2 = **4** processes, each printing "D": 4 lines.

**Q3.** (a) `counter++` is load, add, store. Interleaving: T1 loads 100; T2 loads 100; T1 stores 101; T2 stores 101. Two increments, one effect. Over two million increments many are lost.
(b) A mutex around the increment (correct, but each lock/unlock costs time and serialises the threads); an atomic fetch-and-add instruction (cheaper, still contended). Better still: give each thread a private counter and add them at the end (no sharing).
(c) Unprotected: **1,976,498**, **1,976,669**, **1,971,753** in three runs (not 2,000,000, and different each time); mutex: 2,000,000 each time; atomic: 2,000,000.

**Q4.**
FCFS: P1 [0,7], P2 [7,11], P3 [11,12], P4 [12,16]. Waiting: P1 0, P2 5, P3 7, P4 7: **average 4.75**.
SJF (non-preemptive): P1 [0,7]; at 7 the ready jobs are P2 (4), P3 (1), P4 (4): P3 [7,8], then P2 [8,12], P4 [12,16]. Waiting: P1 0, P2 6, P3 3, P4 7: **average 4.0**.
SRTF: P1 [0,2]; P2 arrives at 2 with burst 4 against P1's remaining 5, so P2 [2,4]; P3 arrives at 4 with burst 1 against P2's remaining 2, so P3 [4,5]; at 5 the ready processes are P1 (5), P2 (2), P4 (4): P2 [5,7], P4 [7,11], P1 [11,16]. Waiting: P1 9, P2 1, P3 0, P4 2: **average 3.0**.
RR (q = 2; a newly arrived process joins the queue before the preempted one): P1 [0,2], P2 [2,4], P1 [4,6], P3 [6,7], P2 [7,9], P4 [9,11], P1 [11,13], P4 [13,15], P1 [15,16]. Completion: P3 7, P2 9, P4 15, P1 16. Waiting: P1 9, P2 3, P3 2, P4 6: **average 5.0**.
SRTF is the best on average waiting time; round robin trades average waiting for better response.

**Q5.** (a) Order by priority: P2, P5, P1, P3, P4. Gantt: P2 [0,1], P5 [1,6], P1 [6,16], P3 [16,18], P4 [18,19]. Waiting: P1 6, P2 0, P3 16, P4 18, P5 1: **average 8.2**.
(b) FCFS (P1 to P5 in order): completion 10, 11, 13, 14, 19; waiting 0, 10, 11, 13, 14: **9.6**. SJF: order P2, P4, P3, P5, P1: waiting 0, 1, 2, 4, 9: **3.2**. RR with q = 1: completion P2 2, P4 4, P3 7, P5 14, P1 19: waiting P1 9, P2 1, P3 5, P4 3, P5 9: **5.4**.
(c) With a steady stream of higher-priority arrivals a low-priority process (here P4) may never run: **starvation**. Aging gradually increases the priority of a process while it waits, so eventually it runs.

**Q6.** (a) tau(n+1) = alpha t(n) + (1 - alpha) tau(n): tau1 = 0.5 × 6 + 0.5 × 10 = **8**; tau2 = 0.5 × 4 + 0.5 × 8 = **6**; tau3 = 0.5 × 6 + 0.5 × 6 = **6**; tau4 = 0.5 × 4 + 0.5 × 6 = **5**.
(b) Useful fraction = q/(q + 2): q = 10 gives 10/12 = **83.3 percent**; q = 50 gives 50/52 = **96.2 percent**.
(c) A small q gives good response times for interactive jobs but high switching overhead; a large q gives high throughput but poor response and behaviour like FCFS. A good q is longer than most CPU bursts (about 80 percent of them).

**Q7.** (a)
```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/wait.h>
#include <unistd.h>
int main(void) {
    int fd[2];
    pipe(fd);
    if (fork() == 0) {                 /* writer */
        dup2(fd[1], STDOUT_FILENO);
        close(fd[0]); close(fd[1]);
        execlp("printf", "printf", "a\\nb\\nc\\n", (char *)NULL);
        _exit(127);
    }
    if (fork() == 0) {                 /* reader */
        dup2(fd[0], STDIN_FILENO);
        close(fd[0]); close(fd[1]);
        execlp("wc", "wc", "-l", (char *)NULL);
        _exit(127);
    }
    close(fd[0]); close(fd[1]);
    while (wait(NULL) > 0) ;
    return 0;
}
```
It printed **3**.
(b) `wc` reads until end-of-file, which occurs only when **every** write end of the pipe is closed. If the parent kept its copy of fd[1] open, `wc` would wait forever. Closing the read end in the parent and the unused ends in the children also releases descriptors.
(c) A zombie is a terminated child whose parent has not yet called `wait`: the kernel keeps its exit status and PCB entry. In the experiment the child exited, the parent slept one second and `/proc/<pid>/stat` showed state **Z**; after `waitpid` the entry was gone.

# Assignment 2: Synchronisation and Deadlocks (Chapter 5)

**Q1. Peterson's algorithm.** (a) Explain why each of mutual exclusion, progress and bounded waiting holds [4]. (b) Suppose the two lines of lock(i) are swapped (`turn = j` first, then `flag[i] = 1`). Show an interleaving in which both threads enter the critical section [4]. (c) Why does a naive C implementation with ordinary variables fail on modern hardware? [2]

**Q2. Semaphore ordering.** A bounded-buffer producer executes `lock(mu); wait(empty); put(item); signal(full); unlock(mu);` and the consumer `lock(mu); wait(full); item = get(); signal(empty); unlock(mu);`. (a) Show a deadlock scenario [4]. (b) Give the correct order [3]. (c) Why do producer-consumer solutions need three synchronisation objects (two semaphores and a mutex)? [3]

**Q3. Condition variables.** (a) Write a bounded buffer (capacity 4) using one mutex and two condition variables [6]. (b) Why must the wait be inside a `while` loop, not an `if`? [2] (c) Why does `pthread_cond_wait` take the mutex as an argument? [2]

**Q4. Dining philosophers.** (a) Show how the "pick up left then right" protocol deadlocks [3]. (b) Give two deadlock-free solutions and argue why each works [4]. (c) Which Coffman condition does each break? [3]

**Q5. Deadlock detection.** Five processes, three resource types, Available = (0, 0, 0). Allocation: P0 (0,1,0), P1 (2,0,0), P2 (3,0,3), P3 (2,1,1), P4 (0,0,2). Requests: P0 (0,0,0), P1 (2,0,2), P2 (0,0,0), P3 (1,0,0), P4 (0,0,2). (a) Is the system deadlocked? [5] (b) If P2 now requests (0,0,1), what is the answer, and which processes are deadlocked? [5]

**Q6. Banker's algorithm.** Allocation: P0 (0,1,0), P1 (2,0,0), P2 (3,0,2), P3 (2,1,1), P4 (0,0,2); Max: P0 (7,5,3), P1 (3,2,2), P2 (9,0,2), P3 (2,2,2), P4 (4,3,3); Available (3,3,2). (a) Compute Need and find a safe sequence [4]. (b) P1 requests (1,0,2): grant? [2] (c) Then P4 requests (3,3,0): grant? [2] (d) Then P0 requests (0,2,0): grant? [2]

**Q7. Lock ordering in practice.** A bank function `transfer(a, b, amount)` locks `a.lock`, then `b.lock`. (a) Show how concurrent transfer(x, y) and transfer(y, x) deadlock [3]. (b) Fix it by ordering locks [3]. (c) Describe the experiment that demonstrated this and its outcome [2]. (d) Name two other strategies (trylock with backoff, a single global lock) and their drawbacks [2].

## Solutions to Assignment 2

**Q1.** (a) Step 1: Mutual exclusion: thread i enters only if flag[j] = 0 or turn = i.
Step 2: If both are in, both flags are 1, so each saw turn equal to its own number; but turn is written last by one of them (turn = j by thread i, or turn = i by thread j), so it cannot equal both.
Step 3: Progress: a thread outside the entry code has flag = 0 so it never blocks the other.
Step 4: Bounded waiting: if i waits while j is repeatedly entering, j sets turn = i when it wants in again, so i enters after at most one entry by j.
(b) Swapped: T0: turn = 1. T1: turn = 0. T1: flag[1] = 1. T1: tests flag[0] (still 0) and enters. T0: flag[0] = 1, tests flag[1] = 1 and turn == 1? turn is 0, so the wait condition is false and T0 enters too. **Both are inside the critical section.**
(c) The compiler and CPU may reorder the store to flag and the load of the other flag (store buffers: a store may not be visible to the other core before the later load executes), so both threads can see the other's flag as 0. Use sequentially consistent atomics (C11 `atomic_int`) or memory fences; the tested C11 version gave the exact count of 2,000,000.

**Q2.** (a) The buffer is full; a producer takes `mu` and blocks in `wait(empty)` while holding `mu`; the consumer needs `mu` to remove an item and call `signal(empty)`, but cannot get it: **deadlock**.
(b) Wait on the semaphore first, then lock: `wait(empty); lock(mu); put; unlock(mu); signal(full);` and `wait(full); lock(mu); get; unlock(mu); signal(empty);`.
(c) `empty` blocks producers when the buffer is full, `full` blocks consumers when it is empty; the mutex protects the buffer indices from concurrent modification by several producers or consumers. Semaphores count slots but do not by themselves make `put`/`get` atomic.

**Q3.** (a) (Tested: 100,000 items transferred, produced sum = consumed sum = 5,000,050,000.)
```c
int buf[4], in = 0, out = 0, count = 0;
pthread_mutex_t m = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t not_full = PTHREAD_COND_INITIALIZER, not_empty = PTHREAD_COND_INITIALIZER;
void put(int v) {
    pthread_mutex_lock(&m);
    while (count == 4) pthread_cond_wait(&not_full, &m);
    buf[in] = v; in = (in + 1) % 4; count++;
    pthread_cond_signal(&not_empty);
    pthread_mutex_unlock(&m);
}
int get(void) {
    pthread_mutex_lock(&m);
    while (count == 0) pthread_cond_wait(&not_empty, &m);
    int v = buf[out]; out = (out + 1) % 4; count--;
    pthread_cond_signal(&not_full);
    pthread_mutex_unlock(&m);
    return v;
}
```
(b) After a wakeup the condition may be false again: another consumer may have taken the item first, or the wakeup may be spurious. The loop re-tests the condition (Mesa semantics).
(c) Checking the condition and sleeping must be atomic: if the mutex were not released atomically with going to sleep, a signal sent between the check and the sleep would be lost. `pthread_cond_wait` atomically releases the mutex, sleeps, and re-acquires the mutex before returning.

**Q4.** (a) All five philosophers pick up their left fork at the same time. Each now holds one fork and waits for the right fork held by the neighbour: circular wait, deadlock.
(b) (1) **Resource ordering**: number the forks and always take the lower-numbered fork first; the philosopher with forks 4 and 0 takes 0 first, so a cycle is impossible. (Tested in C: five threads, 20,000 meals each, all finished with 100,000 meals.) (2) **Limit to four philosophers** at the table (a counting semaphore initialised to 4): at least one can always get both forks. Another: take both forks atomically under one mutex.
(c) Resource ordering breaks **circular wait**; limiting to four prevents the cycle (also circular wait); taking both atomically breaks **hold and wait**.

**Q5.** Step 1: Detection uses Requests: Work = (0,0,0).
Step 2: P0 holds (0,1,0) and requests nothing: finishes, Work = (0,1,0).
Step 3: P2 requests nothing: Work = (3,1,3).
Step 4: P3 requests (1,0,0) <= Work: Work = (5,2,4).
Step 5: P4 requests (0,0,2) <= Work: Work = (5,2,6).
Step 6: P1 requests (2,0,2) <= Work: Work = (7,2,6).
Step 7: All finish: **not deadlocked** (order <P0, P2, P3, P4, P1>).
(b) With P2 requesting (0,0,1): P0 finishes, giving Work = (0,1,0). No other process can have its request met: P1 needs (2,0,2), P2 (0,0,1), P3 (1,0,0), P4 (0,0,2). So **P1, P2, P3, P4 are deadlocked** (P0 is not, it holds resources but is not waiting).

**Q6.** (a) Need = Max - Allocation: P0 (7,4,3), P1 (1,2,2), P2 (6,0,0), P3 (0,1,1), P4 (4,3,1). Safe sequence **<P1, P3, P4, P0, P2>**: Work (3,3,2) → P1 → (5,3,2) → P3 → (7,4,3) → P4 → (7,4,5) → P0 → (7,5,5) → P2 → (10,5,7).
(b) (1,0,2) <= Need(P1) and <= Available: tentatively Available = (2,3,0), Allocation(P1) = (3,0,2), Need(P1) = (0,2,0). The safety algorithm finds <P1, P3, P4, P0, P2>: **safe, grant**.
(c) P4 asks for (3,3,0) but Available is only (2,3,0): **must wait** (not available).
(d) P0 asks for (0,2,0) <= Available: tentatively Available = (2,1,0), Need(P0) = (7,2,3). With Available = (2,1,0) no process can finish: P1 needs (0,2,0) (two of the second resource, only 1 free), P2 needs (6,0,0), P3 needs (0,1,1) (the third resource is exhausted), P4 needs (4,3,1) and P0 now needs (7,2,3): **unsafe, do not grant**; P0 waits. (From the original state the same request would have been safe: safety depends on the current state.)

**Q7.** (a) T1 runs transfer(x, y): locks x then waits for y. T2 runs transfer(y, x): locks y then waits for x: circular wait.
(b) Always lock in a global order, for example by account number:
```c
void transfer(account *a, account *b, long amt) {
    account *first = a->id < b->id ? a : b, *second = a->id < b->id ? b : a;
    pthread_mutex_lock(&first->lock);
    pthread_mutex_lock(&second->lock);
    a->balance -= amt; b->balance += amt;
    pthread_mutex_unlock(&second->lock);
    pthread_mutex_unlock(&first->lock);
}
```
(c) Two threads took locks A and B in opposite orders; each used a timed lock of one second: both reported a timeout (deadlock). With a consistent order both got both locks.
(d) `trylock` with backoff and retry avoids deadlock but may livelock and wastes work; a single global lock is simple and safe but serialises all transfers (no parallelism).

# Assignment 3: Memory, Storage and File Systems (Chapters 6 to 8)

**Q1. Address translation.** A 16-bit virtual address space with 1 KB pages. (a) How many pages and offset bits? [2] (b) Translate virtual address 0xB5A3 if page 45 is in frame 7 [3] (c) What happens for an address in a page with the valid bit clear? [3] (d) Explain the role of the dirty and reference bits [2]

**Q2. Page table sizes.** (a) 32-bit addresses, 4 KB pages, 4-byte entries: the size of a flat page table [2]. (b) A two-level table with a 10 + 10 + 12 split: the memory used by a process that uses only the lowest 8 MB and the top 4 MB of its address space [4]. (c) Why does x86-64 use four levels of 9 bits? [2] (d) What is internal fragmentation for a 72,766-byte program with 2048-byte pages? [2]

**Q3. Effective access time.** (a) TLB lookup 5 ns, memory access 50 ns, hit ratio 95 percent: EAT [3]. (b) Memory access 200 ns, page-fault service 8 ms: EAT for p = 1/1000 and the largest p for a 10 percent slowdown [4]. (c) Explain why locality makes (b) tolerable in practice [3].

**Q4. Page replacement.** (a) Reference string 1, 2, 3, 2, 4, 1, 5, 2, 1, 2, 3, 4, 5, 4: FIFO, LRU and OPT with 3 and 4 frames [5]. (b) Reference string 2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2: the same [5].

**Q5. Contiguous allocation.** Partitions (KB) in order: 300, 600, 350, 200, 750, 125. Requests in order: 115, 500, 358, 200, 375. Apply first fit, best fit and worst fit; which requests fail, and what is left? [10]

**Q6. Disk scheduling.** Cylinders 0 to 99, head at 50 (moving up), queue 45, 21, 67, 90, 4, 50, 89, 52, 61, 87, 25. Total head movement for FCFS, SSTF, LOOK (up first), SCAN (up first) and C-SCAN [10].

**Q7. File systems.** (a) With 1 KB blocks, 4-byte pointers and an inode with 12 direct, one single, one double and one triple indirect pointer: the maximum file size and the pointers needed for a 100 MB file [5]. (b) Hard link versus symbolic link: describe the experiment (link count, deleting the original) [3]. (c) What does journaling protect against? [2]

## Solutions to Assignment 3

**Q1.** (a) 2^16 bytes / 2^10 = 64 pages, offset 10 bits (page number 6 bits).
(b) Step 1: 0xB5A3 = 1011 0101 1010 0011 in binary.
Step 2: The top 6 bits 101101 give page **45**; the offset is the low 10 bits 01 1010 0011 = 0x1A3 = **419**.
Step 3: Frame 7: physical address = 7 × 1024 + 419 = 7587 = **0x1DA3**.
(c) The MMU raises a page fault trap: the kernel checks whether the access is legal; if so it brings the page in (finding a free frame or evicting one) and restarts the instruction; if the address is illegal the process gets SIGSEGV.
(d) The reference bit is set by hardware on any access (used by clock/LRU approximations); the dirty bit is set on a write: a clean victim page can simply be discarded, a dirty one must be written back first.

**Q2.** (a) 2^20 pages × 4 B = **4 MB** per process.
(b) Each second-level table maps 1024 pages × 4 KB = 4 MB. The lowest 8 MB needs 2 second-level tables and the top 4 MB needs 1 more, plus the single top-level table: 4 tables × 4 KB = **16 KB**, instead of the 4 MB of a flat table.
(c) Each table holds 512 eight-byte entries = 4096 bytes, exactly one page; 4 levels × 9 bits + 12 offset bits = 48 bits of virtual address.
(d) 72,766 mod 2048 = 1086, so the last page is 1086/2048 used: waste = 2048 - 1086 = **962 bytes**; the program needs 36 pages.

**Q3.** (a) EAT = 0.95 (5 + 50) + 0.05 (5 + 100) = 52.25 + 5.25 = **57.5 ns**.
(b) EAT = (1 - 0.001) × 200 + 0.001 × 8,000,000 = 199.8 + 8000 = **8199.8 ns** (a 41 times slowdown). For EAT <= 220: p <= 20/(8,000,000 - 200) = **2.5 × 10^-6** (one fault per 400,000 accesses).
(c) Programs reference a small working set repeatedly (temporal locality) and nearby addresses (spatial locality), so after the working set is loaded faults are extremely rare; the fault rate is far below 1 in 400,000 in a well-behaved program.

**Q4.** (a) Reference string 1, 2, 3, 2, 4, 1, 5, 2, 1, 2, 3, 4, 5, 4. Trace for 3 frames (frames listed oldest first for FIFO, least recently used first for LRU):
FIFO: 1: [1] fault; 2: [1, 2] fault; 3: [1, 2, 3] fault; 2: [1, 2, 3] hit; 4: [2, 3, 4] fault; 1: [3, 4, 1] fault; 5: [4, 1, 5] fault; 2: [1, 5, 2] fault; 1: [1, 5, 2] hit; 2: [1, 5, 2] hit; 3: [5, 2, 3] fault; 4: [2, 3, 4] fault; 5: [3, 4, 5] fault; 4: [3, 4, 5] hit. Total **10 faults**.
LRU: 1: [1] fault; 2: [1, 2] fault; 3: [1, 2, 3] fault; 2: [1, 3, 2] hit; 4: [3, 2, 4] fault; 1: [2, 4, 1] fault; 5: [4, 1, 5] fault; 2: [1, 5, 2] fault; 1: [5, 2, 1] hit; 2: [5, 1, 2] hit; 3: [1, 2, 3] fault; 4: [2, 3, 4] fault; 5: [3, 4, 5] fault; 4: [3, 5, 4] hit. Total **10 faults**.
OPT: 1: [1] fault; 2: [1, 2] fault; 3: [1, 2, 3] fault; 2: [1, 2, 3] hit; 4: [1, 2, 4] fault; 1: [1, 2, 4] hit; 5: [1, 2, 5] fault; 2: [1, 2, 5] hit; 1: [1, 2, 5] hit; 2: [1, 2, 5] hit; 3: [2, 5, 3] fault; 4: [5, 3, 4] fault; 5: [5, 3, 4] hit; 4: [5, 3, 4] hit. Total **7 faults**.
With 4 frames the same method gives: FIFO **10**, LRU **8**, OPT **6** faults (OPT evicts the page whose next use is farthest away).
Summary (a): 3 frames: FIFO **10**, LRU **10**, OPT **7**. 4 frames: FIFO **10**, LRU **8**, OPT **6**.
(b) Reference string 2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2. Trace for 3 frames:
FIFO: 2: [2] fault; 3: [2, 3] fault; 2: [2, 3] hit; 1: [2, 3, 1] fault; 5: [3, 1, 5] fault; 2: [1, 5, 2] fault; 4: [5, 2, 4] fault; 5: [5, 2, 4] hit; 3: [2, 4, 3] fault; 2: [2, 4, 3] hit; 5: [4, 3, 5] fault; 2: [3, 5, 2] fault. Total **9 faults**.
LRU: 2: [2] fault; 3: [2, 3] fault; 2: [3, 2] hit; 1: [3, 2, 1] fault; 5: [2, 1, 5] fault; 2: [1, 5, 2] hit; 4: [5, 2, 4] fault; 5: [2, 4, 5] hit; 3: [4, 5, 3] fault; 2: [5, 3, 2] fault; 5: [3, 2, 5] hit; 2: [3, 5, 2] hit. Total **7 faults**.
OPT: 2: [2] fault; 3: [2, 3] fault; 2: [2, 3] hit; 1: [2, 3, 1] fault; 5: [2, 3, 5] fault; 2: [2, 3, 5] hit; 4: [3, 5, 4] fault; 5: [3, 5, 4] hit; 3: [3, 5, 4] hit; 2: [5, 4, 2] fault; 5: [5, 4, 2] hit; 2: [5, 4, 2] hit. Total **6 faults**.
Summary (b): 3 frames: FIFO **9**, LRU **7**, OPT **6**. 4 frames: FIFO **6**, LRU **6**, OPT **5**.
In both cases OPT is a lower bound and LRU is at least as good as FIFO here.

**Q5.**
First fit: 115 goes to 300 (185 left), 500 goes to 600 (100 left), 358 goes to 750 (392 left), 200 goes to 350 (150 left), 375 goes to 392: **all placed**; left: 185, 100, 150, 200, 17, 125.
Best fit: 115 goes to 125 (10 left), 500 goes to 600 (100), 358 goes to 750 (392), 200 goes to 200 (0), 375 goes to 392 (17): **all placed**; left: 300, 100, 350, 0, 17, 10.
Worst fit: 115 goes to 750 (635), 500 goes to 635 (135), 358 goes to 600 (242), 200 goes to 350 (150), 375: the largest remaining is 300: **fails**. Left: 300, 242, 150, 200, 135, 125.
Worst fit fails because it keeps splitting the largest block; best fit leaves tiny holes (10 and 17 KB) of little use but placed everything here.

**Q6.** Head at 50 moving up.
FCFS: 50→45→21→67→90→4→50→89→52→61→87→25: |5| + 24 + 46 + 23 + 86 + 46 + 39 + 37 + 9 + 26 + 62 = **403**.
SSTF: 50 (0), 52, 45, 61, 67, 87, 89, 90, 25, 21, 4: **140**.
LOOK (up first): 50, 52, 61, 67, 87, 89, 90, then back 45, 25, 21, 4: (90 - 50) + (90 - 4) = 40 + 86 = **126**.
SCAN (up first, to the last cylinder 99, then back to 4): (99 - 50) + (99 - 4) = 49 + 95 = **144**.
C-SCAN (up to 99, jump to 0, then up to 45): 49 + 99 + 45 = **193**. (C-LOOK, going up to 90 then jumping to 4 and up to 45, would give 167.)

**Q7.** (a) Step 1: 1 KB blocks with 4-byte pointers: 256 pointers per block.
Step 2: Capacity in blocks: 12 + 256 + 256^2 + 256^3 = 12 + 256 + 65,536 + 16,777,216 = 16,843,020 blocks, i.e. **about 16.06 GiB**.
Step 3: A 100 MB file = 102,400 blocks: 12 direct, 256 through the single indirect block, 65,536 through the double indirect, and the remaining 102,400 - 12 - 256 - 65,536 = **36,596** blocks through the **triple indirect** pointer (which needs 1 triple-indirect block, 1 second-level block and ceil(36,596/256) = 143 blocks of data pointers).
Step 4: So a 100 MB file does use the triple indirect pointer with 1 KB blocks.
(b) Step 1: A hard link is a second directory entry pointing to the same inode: after `ln f hard`, both showed `links=2`, inode 29.
Step 2: After `rm f` the data was still readable through `hard` (links dropped to 1).
Step 3: A symbolic link is a separate small file (inode 30, size 1 = the length of the path "f") holding a path: after `rm f` the link dangled: `cat soft` failed with "No such file or directory".
(c) Journaling protects metadata consistency after a crash or power failure: intended changes are written to a log first, so recovery replays or discards complete transactions in seconds rather than scanning the whole disk with fsck.
