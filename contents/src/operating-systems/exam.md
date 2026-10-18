# Operating Systems: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** A system call causes the CPU to
A) stay in user mode  B) switch to kernel mode through a trap  C) reboot  D) flush the TLB only

**2.** After `fork()` in Linux, parent and child initially
A) share all memory writable  B) have separate address spaces (copy-on-write)  C) share the stack only  D) have no open files

**3.** `exec()` does what?
A) creates a new process  B) replaces the current program image  C) waits for a child  D) kills the parent

**4.** A pipe's reader sees end-of-file only when
A) the writer sleeps  B) the buffer is empty  C) all write ends are closed  D) the reader closes its end

**5.** Which signal cannot be caught or ignored?
A) SIGINT  B) SIGUSR1  C) SIGCHLD  D) SIGKILL

**6.** The effect of a very large round-robin quantum is that RR behaves like
A) SJF  B) FCFS  C) priority scheduling  D) SRTF

**7.** SRTF is
A) preemptive SJF  B) non-preemptive FCFS  C) round robin  D) a real-time algorithm

**8.** In a multilevel feedback queue, a process that uses its entire quantum is typically
A) moved up to a higher priority  B) moved down to a lower priority  C) terminated  D) swapped out

**9.** A race condition exists when
A) two threads run on different CPUs  B) the result depends on the relative timing of unsynchronised accesses to shared data  C) a thread sleeps  D) a mutex is locked twice

**10.** A counting semaphore initialised to N is used to
A) provide mutual exclusion only  B) count N identical resources  C) measure time  D) wake all threads

**11.** In the producer-consumer solution with semaphores, calling `lock(mutex)` before `wait(empty)` can cause
A) starvation only  B) deadlock  C) a race  D) no problem

**12.** Dining philosophers with each philosopher picking up the left fork first can
A) deadlock  B) never deadlock  C) livelock only  D) starve only the first philosopher

**13.** Breaking the circular-wait condition can be done by
A) allowing preemption  B) imposing a total order on resources  C) allocating all resources at once  D) using more memory

**14.** In a resource-allocation graph with multiple instances per resource, a cycle
A) always means deadlock  B) is necessary but not sufficient for deadlock  C) never means deadlock  D) means a safe state

**15.** The page size is 2 KB and the address 5000 lies in page number
A) 1  B) 2  C) 3  D) 5

**16.** A multilevel page table saves memory because it
A) compresses pages  B) allocates tables only for the parts of the address space in use  C) removes the TLB  D) uses larger pages

**17.** A page fault occurs when
A) the TLB hits  B) a referenced page is not in memory (valid bit clear)  C) the disk fails  D) a process ends

**18.** Which page replacement algorithm is optimal but unimplementable?
A) FIFO  B) LRU  C) OPT  D) Clock

**19.** In RAID 5 with n disks, usable capacity is
A) n  B) n - 1  C) n / 2  D) n - 2

**20.** A hard link
A) is a file containing a path name  B) is a second directory entry referring to the same inode  C) cannot be deleted  D) always crosses file systems

## Section B: Short Questions (40 marks)

**B1. (5)** How many processes exist after the loop `for (int i = 0; i < 4; i++) fork();` has been run by one initial process (count all processes, including the original)? Explain.

**B2. (5)** Two threads each execute `if (balance >= 80) balance -= 80;` with `balance = 100`, with no synchronisation. What final values are possible? Show an interleaving for each and fix the code.

**B3. (5)** Use two semaphores to make two threads print ABABAB... in strict alternation (T1 prints A, T2 prints B). Give the initial values and the code of each thread.

**B4. (5)** For each technique name the Coffman condition it breaks: (a) a process must request all its resources before it starts; (b) resources are numbered and requested in increasing order; (c) if a request cannot be granted the process releases everything it holds and retries; (d) mutual exclusion cannot be broken for a printer: why?

**B5. (5)** A system has 32-bit virtual addresses and 16 KB pages. (a) Give the number of offset bits, the number of pages and the size of a flat page table with 4-byte entries [3]. (b) Translate the address 0x00C0FFEE into its page number and offset [2].

**B6. (5)** TLB access 10 ns, memory access 80 ns, TLB hit ratio 96 percent. Find the effective access time.

**B7. (5)** A 5400 rpm disk has an average seek of 12 ms and a transfer rate of 100 MB/s. Find the average time to read one 8 KB block at a random location.

**B8. (5)** An inode has 12 direct pointers, one single and one double indirect pointer. Blocks are 2 KB and pointers 4 bytes. Find the maximum file size.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. CPU scheduling.** Processes (arrival, burst): P1 (0, 6), P2 (1, 8), P3 (2, 7), P4 (3, 3).
(a) FCFS: Gantt chart and average waiting time [2]. (b) Non-preemptive SJF [2]. (c) SRTF [2]. (d) Round robin, q = 4 (a process arriving when another is preempted joins the queue first) [3]. (e) Which algorithm is best for average waiting time and what is its drawback? [1]

**C2. Synchronisation.** (a) Write the bounded-buffer producer and consumer using two counting semaphores and a mutex, with correct ordering [4]. (b) Show the deadlock that arises if the mutex is taken first [2]. (c) Describe the experiment on an unprotected shared counter (two threads, 1,000,000 increments each) and the results of the three runs and the protected versions [2]. (d) Explain how resource ordering solves dining philosophers [2].

**C3. Deadlock.** Five processes, three resource types. Available = (2, 1, 1). Allocation: P0 (2,0,1), P1 (1,1,0), P2 (1,0,2), P3 (0,1,1), P4 (1,2,0). Max: P0 (4,2,2), P1 (3,2,1), P2 (3,1,3), P3 (1,3,2), P4 (3,3,1).
(a) Compute Need [2]. (b) Is the state safe? Give a safe sequence [4]. (c) P1 requests (1,0,1): can it be granted? [3] (d) P3 requests (2,1,0): what is wrong? [1]

**C4. Virtual memory.** Reference string 1, 2, 3, 4, 2, 1, 5, 6, 2, 1, 2, 3, 7, 6, 3, 2, 1, 2, 3, 6.
(a) Give the fault counts for FIFO, LRU and OPT with 3 frames and show the FIFO trace [5]. (b) The counts with 4 and 5 frames [3]. (c) Define thrashing and the working-set model [2].

**C5. Storage and file systems.** Disk cylinders 0 to 99, head at 50 moving up, queue 45, 21, 67, 90, 4, 50, 89, 52, 61, 87, 25.
(a) Total head movement for FCFS, SSTF, LOOK, SCAN and C-SCAN [5]. (b) Compare RAID 0, 1, 5 and 10 for four 1 TB disks (capacity and failures tolerated) [3]. (c) Explain how journaling gives crash consistency [2].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **B** · 3 **B** · 4 **C** · 5 **D** · 6 **B** · 7 **A** · 8 **B** · 9 **B** · 10 **B** · 11 **B** · 12 **A** · 13 **B** · 14 **B** · 15 **B** · 16 **B** · 17 **B** · 18 **C** · 19 **B** · 20 **B**

Brief reasons: 4. The write end may also be held open by another process, e.g. the parent, which is why it must close it. 11. A producer holding the mutex can wait for space that only a consumer (needing the mutex) can create. 15. 5000/2048 = 2.44, so page 2. 19. One disk's worth of parity.

## Section B solutions

**B1.** Each fork doubles the number of running processes: 2^4 = **16** processes (the original and 15 new ones). Process creation: iteration i is executed by every process that exists then.

**B2.** Step 1: Possible final values: **20** (serial: the first thread subtracts, the second sees 20 and does nothing) and **-60** (both threads pass the test while balance is 100, then both subtract).
Step 2: Interleaving for -60: T1 tests 100 >= 80 (true); T2 tests 100 >= 80 (true); T1 subtracts (20); T2 subtracts (-60).
Step 3: The check and the update must be one atomic step: wrap them in `lock(m); if (balance >= 80) balance -= 80; unlock(m);`.

**B3.** s1 = 1, s2 = 0. T1: loop { `wait(s1)`; print A; `signal(s2)` }. T2: loop { `wait(s2)`; print B; `signal(s1)` }. T1 can print first, then must wait for T2 to give back s1, and so on: ABABAB.

**B4.** (a) Hold and wait (the process never holds some resources while waiting for others). (b) Circular wait. (c) No preemption (the resources are effectively taken away from the waiting process). (d) A printer cannot be shared safely (interleaved output would be garbage), so mutual exclusion is intrinsic; spooling (a daemon owns the printer and queues jobs) removes the need for processes to hold it.

**B5.** (a) Step 1: 16 KB = 2^14: **14 offset bits**.
Step 2: page-number bits = 32 - 14 = 18, so **2^18 = 262,144 pages**.
Step 3: flat table = 262,144 × 4 B = **1 MB**.
(b) Step 1: 0x00C0FFEE = 12,648,430. Page number = 12,648,430 >> 14 = 12,648,430/16,384 = 771.99, so **771 = 0x303**.
Step 2: offset = 12,648,430 - 771 × 16,384 = 12,648,430 - 12,632,064 = **16,366 = 0x3FEE**.

**B6.** Step 1: TLB hit (96 percent): 10 + 80 = 90 ns. TLB miss (4 percent): 10 + 80 (page table) + 80 (data) = 170 ns.
Step 2: EAT = 0.96 × 90 + 0.04 × 170 = 86.4 + 6.8 = **93.2 ns**.

**B7.** Step 1: average rotational latency = half a rotation: 60,000 ms/5400/2 = 11.11/2 = **5.56 ms**.
Step 2: transfer of 8 KB at 100 MB/s = 8/(100 × 1024) s = 0.078 ms.
Step 3: total = 12 (seek) + 5.56 + 0.08 = **17.6 ms**.

**B8.** Step 1: 2 KB blocks with 4-byte pointers hold 2048/4 = 512 pointers.
Step 2: maximum blocks = 12 + 512 + 512² = 12 + 512 + 262,144 = 262,668.
Step 3: size = 262,668 × 2 KB = 525,336 KB = **about 513 MB** (513.02 MiB).

## Section C solutions

**C1.**
(a) FCFS: P1 [0,6], P2 [6,14], P3 [14,21], P4 [21,24]. Waiting: P1 0, P2 5, P3 12, P4 18: **average 8.75**.
(b) SJF: P1 [0,6]; at 6 the ready jobs are P2 (8), P3 (7), P4 (3): P4 [6,9], P3 [9,16], P2 [16,24]. Waiting: P1 0, P2 15, P3 7, P4 3: **average 6.25**.
(c) SRTF: no arrival has a shorter remaining time than the running job: P1 has 6 - 3 = 3 remaining when P4 (3) arrives at t = 3 (a tie, keep running P1); the schedule is the same as (b): **average 6.25**.
(d) RR q = 4: P1 [0,4], P2 [4,8], P3 [8,12], P4 [12,15], P1 [15,17], P2 [17,21], P3 [21,24]. Completion: P4 15, P1 17, P2 21, P3 24. Waiting: P1 11, P2 12, P3 15, P4 9: **average 11.75**.
(e) SJF/SRTF minimise average waiting time but need the burst length in advance and can starve long jobs. RR is fair with good response but a higher average wait.

**C2.**
(a)
```
sem empty = N, full = 0;  mutex mu;
producer: wait(empty); lock(mu); put(item); unlock(mu); signal(full);
consumer: wait(full);  lock(mu); item = get(); unlock(mu); signal(empty);
```
Tested in C with an 8-slot buffer and 100,000 items: produced sum = consumed sum = 5,000,050,000.
(b) With the mutex taken first: the buffer is full, a producer locks `mu` and blocks in `wait(empty)`; a consumer cannot lock `mu` to remove an item, so `empty` is never signalled: deadlock.
(c) Two threads each executed `counter++` one million times. Unprotected: **1,976,498, 1,976,669 and 1,971,753** (varying, always less than 2,000,000); with a mutex and with an atomic add: **2,000,000** every time.
(d) Number the forks 0 to 4 and let each philosopher take the lower-numbered fork first. Philosopher 4 (forks 4 and 0) takes fork 0 first. A cycle of waiting would need every philosopher to hold a lower fork and wait for a higher one, but the philosopher holding fork 4 would wait for a lower-numbered fork, contradicting the ordering: no circular wait is possible. Tested in C (five threads, 20,000 meals each): all finished.

**C3.**
(a) Need = Max - Allocation: P0 (2,2,1), P1 (2,1,1), P2 (2,1,1), P3 (1,2,1), P4 (2,1,1).
(b) Step 1: Work = (2,1,1).
Step 2: P0 needs (2,2,1): 2 > 1 in the second resource, no.
Step 3: P1 needs (2,1,1) <= Work: yes; Work = (2,1,1) + (1,1,0) = (3,2,1).
Step 4: P2 (2,1,1) <= (3,2,1): yes; Work = (4,2,3).
Step 5: P3 (1,2,1): yes; Work = (4,3,4).
Step 6: P4 (2,1,1): yes; Work = (5,5,4).
Step 7: P0 (2,2,1): yes; Work = (7,5,5).
Step 8: **Safe**, sequence **<P1, P2, P3, P4, P0>**.
(c) Step 1: (1,0,1) <= Need(P1) = (2,1,1) and <= Available (2,1,1): tentatively Available = (1,1,0), Allocation(P1) = (2,1,1), Need(P1) = (1,1,0).
Step 2: Safety: P1 (1,1,0) <= (1,1,0): finishes, Work = (3,2,1) (it releases its allocation (2,1,1)); then P2 (2,1,1): Work = (4,2,3); P3: (5,3,4); P4: (6,5,4); P0: (8,5,5).
Step 3: Safe: **grant**.
(d) The request (2,1,0) exceeds P3's remaining need (1,2,1) in the first resource (2 > 1): the process has **exceeded its declared maximum claim**: an error, not just a wait.

**C4.**
(a) 3 frames: FIFO **16**, LRU **15**, OPT **11**. FIFO trace (F = fault, h = hit): 1F 2F 3F 4F 2h 1F 5F 6F 2F 1F 2h 3F 7F 6F 3h 2F 1F 2h 3F 6F. Frame contents after each fault: [1], [1,2], [1,2,3], [2,3,4], hit, [3,4,1], [4,1,5], [1,5,6], [5,6,2], [6,2,1], hit, [2,1,3], [1,3,7], [3,7,6], hit, [7,6,2], [6,2,1], hit, [2,1,3], [1,3,6]: 16 faults, 4 hits.
(b) 4 frames: FIFO **14**, LRU **10**, OPT **8**. 5 frames: FIFO **10**, LRU **8**, OPT **7**. (More frames never hurt on this string.)
(c) **Thrashing**: a process (or the system) has too few frames for its working set, so it faults continuously and the CPU idles while the paging disk is saturated. The **working set** W(t, D) is the set of pages referenced in the last D references; the OS allocates each process at least |W| frames and suspends processes if the sum of working sets exceeds memory.

**C5.**
(a) FCFS **403**; SSTF **140** (50, 52, 45, 61, 67, 87, 89, 90, 25, 21, 4); LOOK (up first) **126** (40 up to 90, then 86 down to 4); SCAN (up to the end 99, then down to 4) **144**; C-SCAN (up to 99, jump to 0, up to 45) **193**. (C-LOOK gives 167.)
(b) RAID 0: 4 TB, tolerates no failure. RAID 1 (two mirrored pairs, or 4-way mirror): 2 TB (or 1 TB for 4 copies), tolerates 1 failure per pair. RAID 5: 3 TB, tolerates **1** failure. RAID 10: 2 TB, tolerates 1 failure per mirror pair (up to 2 if they are in different pairs). RAID is not a backup: it does not protect against deletion or corruption.
(c) Before changing metadata (inodes, bitmaps, directory entries) the file system writes a description of the update to a journal and commits it; only then does it write the real locations (checkpoint). After a crash, the journal is replayed (committed transactions are applied again) or discarded (incomplete ones), so the metadata is consistent within seconds without a full scan (fsck). This is the same write-ahead idea as in database logging.
