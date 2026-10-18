# Real-Time & Embedded OS: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** In a hard real-time system a missed deadline
A) lowers quality slightly  B) is a system failure with severe consequences  C) is ignored  D) only affects throughput

**2.** "Real time" primarily means
A) a bounded, predictable response time  B) as fast as possible  C) high throughput  D) low power

**3.** WCET stands for
A) weighted cycle execution time  B) wait-cycle event time  C) worst-case execution time  D) wake-up condition event timer

**4.** In rate-monotonic scheduling the highest priority goes to the task with the
A) longest computation time  B) shortest period  C) longest period  D) latest deadline

**5.** The Liu and Layland utilisation bound for n = 3 tasks is about
A) 0.69  B) 0.50  C) 1.00  D) 0.78

**6.** EDF schedules a set of independent periodic tasks with deadlines equal to periods on one processor if and only if
A) U <= 1  B) U <= 0.69  C) U <= 0.5  D) the periods are equal

**7.** The hyperperiod of a task set is the
A) largest period  B) sum of the periods  C) least common multiple of the periods  D) smallest period

**8.** Priority inversion occurs when
A) two tasks have the same priority  B) a task has no priority  C) an interrupt is masked  D) a high-priority task waits for a low-priority task that is preempted by a medium-priority task

**9.** In priority inheritance the mutex holder
A) is suspended  B) temporarily takes the priority of the highest-priority waiting task  C) lowers its priority  D) is deleted

**10.** The priority ceiling protocol
A) prevents deadlock and bounds blocking to one critical section  B) allows unbounded blocking  C) eliminates mutexes  D) disables interrupts

**11.** An interrupt service routine should
A) perform long computations  B) call blocking functions  C) be short and defer work to a task  D) allocate memory

**12.** vTaskDelayUntil (an absolute delay) is used to
A) sleep forever  B) implement a drift-free periodic task  C) create tasks  D) disable the scheduler

**13.** A FreeRTOS queue
A) copies the data items into the queue  B) only stores pointers  C) cannot be used from tasks  D) has unlimited size

**14.** A binary semaphore is commonly used to
A) protect data with priority inheritance  B) store data  C) measure time  D) signal an event from an ISR to a task

**15.** Dynamic memory allocation is avoided in real-time code mainly because it is
A) too fast  B) illegal  C) non-deterministic in time and can fragment  D) not available in C

**16.** A task stack overflow can be detected using
A) a canary value or the stack high-water mark  B) the clock  C) a semaphore  D) the CAN bus

**17.** SCHED_FIFO in Linux is
A) a fair-share policy  B) a fixed-priority real-time policy  C) a memory policy  D) a disk scheduler

**18.** PREEMPT_RT mainly makes the Linux kernel
A) smaller  B) faster at throughput  C) more preemptible with lower worst-case latency  D) secure

**19.** A watchdog timer
A) increases speed  B) stores logs  C) measures temperature  D) resets the system if it is not periodically serviced

**20.** DO-178C is a software standard for
A) avionics  B) automotive  C) medical devices  D) railways

## Section B: Problems (40 marks)

**B1. Concepts (10 marks)** (a) Classify an anti-lock braking controller, a video-conference frame and a thermostat display as hard, firm or soft real time [3] (b) Explain jitter and give its sources in an RTOS [4] (c) What is the difference between `vTaskDelay` and `vTaskDelayUntil`? [3]

**B2. Schedulability (10 marks)** Tasks (C, T = D): (1, 5), (2, 8), (3, 20) with RM priorities. (a) The utilisation and the Liu and Layland bound [3] (b) The response times [5] (c) Is EDF feasible? [2]

**B3. Blocking and inversion (10 marks)** (a) Explain priority inversion with three tasks [4] (b) In an experiment the high-priority task waited 549 ms with no protocol and 149 ms with priority inheritance: explain the difference [3] (c) For the task set of B2, the first task shares a 2-unit critical section with the third: the response times with the blocking term [3]

**B4. Embedded design (10 marks)** (a) A response must occur within 100 μs: hardware latency 2 μs, ISR 20 μs, context switch 5 μs and task processing 40 μs: the response time and slack [3] (b) A classic CAN frame with 8 data bytes: the worst-case bits and the time at 500 kb/s [3] (c) 2000 context switches per second at 5 μs each: the overhead [2] (d) Why should the stack of each task be measured, not guessed? [2]

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **A** · 3 **C** · 4 **B** · 5 **D** · 6 **A** · 7 **C** · 8 **D** · 9 **B** · 10 **A** · 11 **C** · 12 **B** · 13 **A** · 14 **D** · 15 **C** · 16 **A** · 17 **B** · 18 **C** · 19 **D** · 20 **A**

Brief reasons: 5. 3 (2^(1/3) - 1) = 0.78. 6. EDF is optimal on one processor. 8. The medium-priority task indirectly delays the high-priority one. 12. An absolute release time avoids accumulating drift.

### Section B

**B1.**
(a) Anti-lock braking: **hard**. Video-conference frame: **firm** (a late frame is useless but the system continues). Thermostat display: **soft**.
(b) **Jitter** is the variation in latency or period of a task's release or completion (the difference between the best and worst case). Sources: interrupts and their nesting, tick resolution (release only at tick boundaries), preemption by higher-priority tasks, blocking on shared resources (priority inversion), cache and pipeline effects, DMA bus contention, non-preemptible kernel sections, and power-management transitions.
(c) `vTaskDelay(n)` blocks for n ticks **from the call**, so the period is n plus the execution time and preemption (the period drifts); `vTaskDelayUntil(&last, n)` blocks until an **absolute time** last + n, giving a fixed period regardless of the execution time (as long as the work fits in the period).

**B2.**
(a) U = 1/5 + 2/8 + 3/20 = 0.2 + 0.25 + 0.15 = **0.60**; the bound for n = 3 is **0.780**: 0.60 is below it, so the set is schedulable by RM.
(b) Step 1: R1 = **1**.
Step 2: R2 = 2 + ceil(R/5) × 1: 2 → 3 → 3: **3** (<= 8).
Step 3: R3 = 3 + ceil(R/5) × 1 + ceil(R/8) × 2: 3 → 6 → 7 → 7: **7** (<= 20).
(c) Yes: for deadlines equal to periods, EDF is feasible if U <= 1; 0.60 <= 1.

**B3.**
(a) Low-priority task L locks a mutex; high-priority task H becomes ready, preempts L, and blocks on the mutex held by L. A medium-priority task M (which does not need the mutex) becomes ready and preempts L (M has higher priority than L). L cannot run to release the mutex, so H is delayed for as long as M runs: **unbounded priority inversion**: a lower-priority task (M) effectively delays the highest-priority task.
(b) With **no protocol** (549 ms) H waited for M's whole 500 ms run (starting while L was in its critical section) plus the delay before and after it: M preempted L and ran for 500 ms. With **priority inheritance** (149 ms) L inherited H's priority when H blocked, so M could not preempt L: L finished the remaining 150 ms of its critical section and released the mutex: H's blocking was bounded by the critical-section length.
(c) Step 1: B1 = 2 (first task blocked once by the third task's critical section): R1 = 1 + 2 = **3** (<= 5).
Step 2: R2 = **3** (no blocking, delayed only by task 1).
Step 3: R3 = **7**.
Step 4: All deadlines are still met.

**B4.**
(a) Response time = 2 + 20 + 5 + 40 = **67 μs**; slack = 100 - 67 = **33 μs**.
(b) 47 + 8 × 8 + floor((34 + 64 - 1)/4) = 47 + 64 + 24 = **135 bits**; time = 135/500,000 = **270 μs**.
(c) 2000 × 5 μs = 0.01 s per second = **1 percent**.
(d) Guessing leads either to waste (RAM is scarce) or to overflows that corrupt memory and cause rare, hard-to-reproduce crashes; measuring the high-water mark under worst-case load (and adding a margin) with canaries or an MPU gives evidence; static analysis of the call graph (`-fstack-usage`) bounds it.
