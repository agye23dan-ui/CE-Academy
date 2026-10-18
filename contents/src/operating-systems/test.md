# Operating Systems: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** Which of these is NOT a standard process state?
A) ready  B) running  C) compiling  D) waiting

**2.** In the child process, `fork()` returns
A) 0  B) the child's PID  C) -1  D) the parent's PID

**3.** A zombie process is one that
A) is running very slowly  B) has terminated but has not yet been waited for by its parent  C) has lost its parent  D) is blocked on I/O

**4.** Threads of the same process share
A) their stacks  B) their registers  C) the heap and global variables  D) their program counters

**5.** Which of these is a non-preemptive scheduling algorithm?
A) round robin  B) SRTF  C) FCFS  D) multilevel feedback queue

**6.** Which non-preemptive algorithm gives the smallest average waiting time?
A) FCFS  B) round robin  C) priority  D) SJF

**7.** The convoy effect occurs in
A) FCFS  B) round robin  C) SRTF  D) multilevel queues

**8.** Aging is used to prevent
A) deadlock  B) starvation  C) thrashing  D) fragmentation

**9.** Which of these is NOT a requirement of a critical-section solution?
A) mutual exclusion  B) progress  C) bounded waiting  D) maximum parallelism

**10.** A semaphore initialised to 1 is normally used as
A) a counter of free slots  B) a barrier  C) a mutual-exclusion lock  D) a condition variable

**11.** A call to `pthread_cond_wait` should be placed
A) inside a while loop that re-checks the condition  B) inside an if statement  C) outside the mutex  D) in a signal handler

**12.** Which is NOT one of the four Coffman conditions for deadlock?
A) mutual exclusion  B) hold and wait  C) circular wait  D) preemption of resources

**13.** The banker's algorithm is a method of deadlock
A) prevention  B) avoidance  C) detection  D) recovery

**14.** A safe state is one in which
A) deadlock is certain  B) there is an order in which all processes can finish  C) no resources are allocated  D) all processes are waiting

**15.** With 4 KB pages the offset of a virtual address has
A) 10 bits  B) 11 bits  C) 12 bits  D) 13 bits

**16.** A TLB is
A) a disk cache  B) a type of page table stored on disk  C) a CPU register  D) a cache of recent page-table translations

**17.** Belady's anomaly can occur with
A) FIFO replacement  B) LRU replacement  C) OPT replacement  D) all of these

**18.** Thrashing happens when
A) the disk is full  B) processes spend most of their time paging because they lack frames for their working sets  C) the CPU overheats  D) too many files are open

**19.** Which disk scheduling algorithm can starve requests?
A) FCFS  B) SCAN  C) SSTF  D) C-SCAN

**20.** A Unix inode contains
A) the file name  B) the directory path  C) the file data only  D) the file attributes and block pointers

## Section B: Problems (40 marks)

**B1. Scheduling (10 marks)** Processes (arrival, burst): P1 (0, 5), P2 (1, 3), P3 (2, 8), P4 (3, 6). Draw Gantt charts and compute the waiting time of each process and the average for (a) FCFS, (b) non-preemptive SJF, (c) SRTF, (d) round robin with q = 3 (a process arriving at the same instant that another is preempted joins the queue first) [10].

**B2. Synchronisation (10 marks)** (a) Two threads share `int balance = 100`. T1 executes `balance += 50` and T2 executes `balance -= 30`, each compiled to load, modify, store. List every possible final value and give an interleaving for each [4]. (b) Using semaphores, force statement S1 in thread T1 to run before statement S2 in thread T2 [2]. (c) A bounded buffer has 5 slots. Give the initial values of the semaphores `empty`, `full` and the mutex [2]. (d) Why is a spinlock wasteful on a single CPU? [2]

**B3. Deadlock (10 marks)** Four processes and three resource types. Available = (1, 1, 2). Allocation: P0 (1,0,1), P1 (2,1,0), P2 (0,1,1), P3 (1,1,0). Max: P0 (3,2,2), P1 (4,2,1), P2 (1,2,2), P3 (3,2,1). (a) Compute Need [2]. (b) Is the state safe? Show the safety algorithm [5]. (c) Does an unsafe state mean the system is deadlocked? [1] (d) State the four conditions for deadlock and which one resource ordering breaks [2].

**B4. Memory (10 marks)** (a) A system has 4 KB pages and a page table maps page 0x1A to frame 0x3C. Translate the virtual address 0x1A6F3 [3]. (b) A machine has 32-bit virtual addresses and 8 KB pages with 4-byte page-table entries: the number of pages and the size of a flat page table [3]. (c) Reference string 2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2 with 3 frames: the number of faults for FIFO and LRU [4].

---

## Answer Key and Solutions

### Section A
1 **C** · 2 **A** · 3 **B** · 4 **C** · 5 **C** · 6 **D** · 7 **A** · 8 **B** · 9 **D** · 10 **C** · 11 **A** · 12 **D** · 13 **B** · 14 **B** · 15 **C** · 16 **D** · 17 **A** · 18 **B** · 19 **C** · 20 **D**

Brief reasons: 3. The parent has not called wait; only the PCB entry remains. 7. Short jobs wait behind a long one. 12. The condition is "no preemption", not preemption. 14. A safe state has a safe sequence; an unsafe state may or may not lead to deadlock. 17. FIFO is not a stack algorithm. 19. SSTF keeps serving nearby requests and far ones may wait indefinitely. 20. The file name is stored in the directory entry, not the inode.

### Section B

**B1.**
(a) FCFS: P1 [0,5], P2 [5,8], P3 [8,16], P4 [16,22]. Waiting: P1 0, P2 4, P3 6, P4 13: **average 5.75**.
(b) SJF: P1 [0,5]; at 5 the ready jobs are P2 (3), P3 (8), P4 (6): P2 [5,8], P4 [8,14], P3 [14,22]. Waiting: P1 0, P2 4, P3 12, P4 5: **average 5.25**.
(c) SRTF: P1 [0,1]; P2 arrives at 1 with burst 3 < 4 remaining: P2 [1,4]; at 4 the ready jobs are P1 (4), P3 (8), P4 (6): P1 [4,8], P4 [8,14], P3 [14,22]. Completion: P2 4, P1 8, P4 14, P3 22. Waiting: P1 3, P2 0, P3 12, P4 5: **average 5.0**.
(d) RR q = 3: P1 [0,3], P2 [3,6], P3 [6,9], P4 [9,12], P1 [12,14], P3 [14,17], P4 [17,20], P3 [20,22]. Completion: P2 6, P1 14, P4 20, P3 22. Waiting: P1 9, P2 2, P3 12, P4 11: **average 8.5**.

**B2.**
(a) Correct serial results give 100 + 50 - 30 = **120**. If both load 100 and T1 stores last: **150**; if T2 stores last: **70**. Interleavings: T1 loads 100; T2 loads 100; T2 stores 70; T1 stores 150 gives 150. T1 loads 100; T2 loads 100; T1 stores 150; T2 stores 70 gives 70. All three values {120, 150, 70} are possible.
(b) A semaphore `sync` initialised to 0. T1: S1; `signal(sync)`. T2: `wait(sync)`; S2.
(c) `empty` = 5 (free slots), `full` = 0 (filled slots), `mutex` = 1.
(d) The thread that spins consumes its whole time slice waiting for a lock that is held by a thread that cannot run (it is not scheduled while the spinner has the only CPU). The lock holder only makes progress when the spinner is preempted. A blocking lock would sleep immediately.

**B3.**
(a) Need = Max - Allocation: P0 (2,2,1), P1 (2,1,1), P2 (1,1,1), P3 (2,1,1).
(b) Step 1: Work = Available = (1,1,2).
Step 2: P0 needs (2,2,1): 2 > 1, no.
Step 3: P1 needs (2,1,1): 2 > 1, no.
Step 4: P2 needs (1,1,1) <= (1,1,2): yes.
Step 5: P2 finishes: Work = (1,1,2) + (0,1,1) = (1,2,3).
Step 6: P0 (2,2,1): 2 > 1, no.
Step 7: P1 (2,1,1): no.
Step 8: P3 (2,1,1): no.
Step 9: No other process can finish: there is no safe sequence.
Step 10: The state is **unsafe**.
(c) **No**: unsafe means deadlock is possible, not certain (processes may not use their maximum claims at the same time). The banker's algorithm refuses to enter unsafe states.
(d) Mutual exclusion, hold and wait, no preemption, circular wait. Resource ordering breaks **circular wait**.

**B4.**
(a) Step 1: 4 KB pages: offset is 12 bits (3 hex digits). 0x1A6F3: page number = 0x1A6F3 >> 12 = **0x1A**, offset = **0x6F3**.
Step 2: frame 0x3C: physical address = (0x3C << 12) + 0x6F3 = 0x3C000 + 0x6F3 = **0x3C6F3**.
(b) Step 1: 8 KB pages: offset 13 bits, page number 32 - 13 = 19 bits.
Step 2: 2^19 = **524,288 pages**; the table = 524,288 × 4 B = **2 MB**.
(c) FIFO: 2 F, 3 F, 2 hit, 1 F, 5 F (evict 2), 2 F (evict 3), 4 F (evict 1), 5 hit, 3 F (evict 5), 2 hit, 5 F (evict 2), 2 F (evict 4): **9 faults**. LRU: 2 F, 3 F, 2 hit, 1 F, 5 F (evict 3), 2 hit, 4 F (evict 1), 5 hit, 3 F (evict 2), 2 F (evict 4), 5 hit, 2 hit: **7 faults**. (OPT gives 6.)
