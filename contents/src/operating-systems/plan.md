# Operating Systems: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 6 to 7 programming and problem solving, 1 review with the app's quizzes). You need a Linux environment: install Ubuntu (a virtual machine, dual boot, or WSL2 on Windows) with gcc, make and gdb. Operating systems are learned by writing programs that use the kernel's services and by breaking them (races, deadlocks, leaks) on purpose.

## Textbooks
- Remzi and Andrea Arpaci-Dusseau, *Operating Systems: Three Easy Pieces* (OSTEP). Free online, the clearest modern text; the chapter on each topic matches this course.
- Abraham Silberschatz, Peter Galvin and Greg Gagne, *Operating System Concepts* (the "dinosaur book"). The standard university text.
- Andrew Tanenbaum and Herbert Bos, *Modern Operating Systems*.
- Michael Kerrisk, *The Linux Programming Interface*. The reference for system calls.
- Randal Bryant and David O'Hallaron, *Computer Systems: A Programmer's Perspective*.

## Free courses and tools
- MIT 6.S081 Operating System Engineering (xv6 labs, free videos and code); MIT 6.1810 labs.
- OSTEP homework simulators (scheduler, paging, disk, RAID simulators are free Python programs).
- Tools: gcc, gdb, `strace` (watch system calls), `ltrace`, `valgrind` and `-fsanitize=thread` (ThreadSanitizer finds data races), `perf`, `/proc` and `ps`, `top`, `vmstat`, `iostat`.
- Optional: build and boot xv6 or write a small kernel in QEMU.

## Week by week

**Week 1: Introduction, system calls, kernel and user mode (Ch 1).** Do: Assignment 1 Q1. Use `strace ls` and count the system calls; write a "hello world" using only `write`.

**Week 2: Processes: fork, exec, wait, pipes, signals (Ch 2).** Do: Assignment 1 Q2, Q7. Write a tiny shell that runs commands and supports one pipe.

**Week 3: Threads and data races (Ch 3).** Do: Assignment 1 Q3. Reproduce the lost-update counter and fix it with a mutex, an atomic and per-thread counters; time the three versions.

**Week 4: CPU scheduling (Ch 4).** Do: Assignment 1 Q4, Q5, Q6. Sit the **Class Test** at the end of the week (Chapters 1 to 4 plus a first look at synchronisation).

**Week 5: Critical sections, locks, atomic instructions (Ch 5.1).** Do: Assignment 2 Q1. Implement a spinlock with compare-and-swap and compare it to a pthread mutex.

**Week 6: Semaphores, producer-consumer, readers-writers (Ch 5.2).** Do: Assignment 2 Q2, Q3. Write the bounded buffer with semaphores and with condition variables; test with several producers and consumers.

**Week 7: Monitors, dining philosophers, classic bugs (Ch 5.3).** Do: Assignment 2 Q4. Mock midterm: first half of the Final Exam.

**Week 8: Deadlock (Ch 5.4).** Do: Assignment 2 Q5, Q6, Q7. Write a program that deadlocks, then fix it with lock ordering; run ThreadSanitizer.

**Week 9: Memory management: contiguous allocation, paging, TLBs (Ch 6.1 to 6.3).** Do: Assignment 3 Q1, Q2, Q3, Q5. Write a simulator that translates virtual to physical addresses with a two-level page table.

**Week 10: Virtual memory and page replacement (Ch 6.4, 6.5).** Do: Assignment 3 Q4. Write FIFO, LRU and OPT simulators and check them against the notes (15, 12, 9 faults); watch real faults with `/usr/bin/time -v`.

**Week 11: Mass storage, disk scheduling, RAID, I/O (Ch 7).** Do: Assignment 3 Q6. Implement SSTF, SCAN and C-SCAN and compare total head movement.

**Week 12: File systems (Ch 8).** Do: Assignment 3 Q7. Explore inodes with `stat`, hard and symbolic links; write a program that lists a directory with `opendir` and `stat`.

**Week 13: Security, virtualisation, project (Ch 9).** Project: write a shell with pipes and redirection, or a user-level thread library, or a small file system on a file image, with a design report.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can write programs with fork, exec, wait, pipes and signals and predict their output.
- [ ] I can explain a context switch and the process states.
- [ ] I can compute average waiting time for FCFS, SJF, SRTF, RR and priority scheduling and draw Gantt charts.
- [ ] I can identify data races and fix them with mutexes, semaphores and condition variables.
- [ ] I can solve producer-consumer, readers-writers and dining-philosophers problems.
- [ ] I can apply the four deadlock conditions, resource-allocation graphs and the banker's algorithm.
- [ ] I can translate addresses with single and multilevel page tables and compute TLB and page-fault effective access times.
- [ ] I can simulate FIFO, LRU and OPT replacement and explain Belady's anomaly and thrashing.
- [ ] I can compute disk scheduling distances and explain RAID levels.
- [ ] I can explain inodes, directories, links, allocation methods and journaling.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Run every example from the notes and change it: break it, measure it, explain the output.
2. Draw the state of the system (queues, frames, tables, graphs) on paper for every algorithm.
3. When code misbehaves under concurrency, assume a race first; use ThreadSanitizer and `strace`.
4. Keep a table of formulas (EAT, page-table size, disk access time, banker's checks) and derive them rather than memorising.
5. Read real kernel code in small pieces (xv6 is about 10,000 lines).
