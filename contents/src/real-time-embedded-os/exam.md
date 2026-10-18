# Real-Time & Embedded OS: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** Which of these is a soft real-time application?
A) an airbag controller  B) a pacemaker  C) video streaming  D) a flight-control loop

**2.** Deadline-monotonic scheduling is used when
A) the relative deadlines are shorter than the periods  B) all periods are equal  C) tasks are aperiodic  D) there is no deadline

**3.** Rate-monotonic scheduling is optimal among
A) all algorithms  B) fixed-priority algorithms (for deadlines equal to periods)  C) dynamic-priority algorithms  D) multiprocessor algorithms

**4.** Under EDF the priority of a job is
A) fixed by its period  B) random  C) fixed by its computation time  D) dynamic, based on its absolute deadline

**5.** If the utilisation of a periodic task set exceeds 1 on one processor
A) EDF can still schedule it  B) RM can schedule it  C) no scheduling algorithm can meet all deadlines  D) it is always schedulable

**6.** The response-time equation includes the term
A) ceil(R/T_j) C_j for each higher-priority task j  B) C_j/T_j for all tasks  C) T_j - C_j  D) D_j only

**7.** In a cyclic executive the major cycle equals
A) the largest period  B) the hyperperiod  C) the smallest period  D) the frame size

**8.** A sporadic or deferrable server is used for
A) cyclic tasks  B) memory management  C) serving aperiodic requests with bounded interference  D) disabling interrupts

**9.** A drawback of basic priority inheritance is
A) it cannot bound blocking  B) it needs no mutex  C) it increases priority forever  D) chained blocking and possible deadlock

**10.** In the immediate ceiling protocol a task that locks a mutex
A) immediately runs at the mutex's ceiling priority  B) lowers its priority  C) is suspended  D) releases all locks

**11.** The POSIX attribute for priority inheritance is
A) PTHREAD_PRIO_NONE  B) PTHREAD_PRIO_INHERIT  C) PTHREAD_SCOPE_SYSTEM  D) PTHREAD_CREATE_DETACHED

**12.** A semaphore, unlike a mutex, usually has
A) priority inheritance  B) an owner  C) no owner  D) a ceiling

**13.** In FreeRTOS, an ISR must use
A) the normal API  B) blocking calls  C) malloc  D) the "FromISR" versions of the API

**14.** On Cortex-M, interrupts whose priority is higher than the kernel's maximum system-call priority
A) must not call kernel functions  B) are blocked by the kernel  C) are disabled  D) run in tasks

**15.** Double buffering with DMA means
A) two CPUs  B) one buffer filled by DMA while the other is processed  C) two ISRs  D) copying twice

**16.** CAN bus arbitration is won by the frame with the
A) longest data  B) highest bit rate  C) lowest identifier  D) lowest priority

**17.** A memory protection unit (MPU) is used to
A) speed up the CPU  B) translate virtual addresses  C) cache data  D) restrict task access to memory regions

**18.** `mlockall` in a real-time Linux program is used to
A) avoid page faults by locking the memory in RAM  B) lock files  C) lock mutexes  D) disable interrupts

**19.** A tickless kernel
A) has no timer  B) programs the timer for the next event, saving power and giving finer timing  C) runs faster only  D) disables scheduling

**20.** ISO 26262 is a functional-safety standard for
A) avionics  B) medical devices  C) road vehicles  D) railways

## Section B: Short Questions (40 marks)

**B1. (5)** Tasks (C, T = D): (2, 6), (2, 8), (3, 12) with RM priorities. Compute U, the Liu and Layland bound and the response times, and decide schedulability.

**B2. (5)** Tasks (1, 3), (2, 5), (1, 10): compute U and the RM response times and decide whether EDF is feasible.

**B3. (5)** Tasks (3, 7), (3, 10), (4, 14): compute U, the RM response time of the third task, and decide whether EDF can schedule the set.

**B4. (5)** Three SCHED_FIFO threads: L (10) holds a mutex for a 200 ms critical section starting at t = 0; H (30) requests it at t = 50 ms; M (20) becomes ready at t = 100 ms and runs 500 ms. Explain why H waited 549 ms with no protocol and 149 ms with priority inheritance.

**B5. (5)** For the set of B1 the first task shares a 1-unit critical section with the third. Compute the response times with the blocking term (use the blocking term for the first task).

**B6. (5)** An interrupt must be handled within 100 μs: hardware latency 3 μs, ISR 15 μs, context switch 6 μs, task processing 50 μs. Compute the response time and the slack; name two ways to reduce it.

**B7. (5)** A classic CAN frame with 4 data bytes has at most 47 + 8 × 4 + floor((34 + 32 - 1)/4) bits: compute it and the time at 1 Mb/s; and the bus load of one 8-byte message (135 bits) every 5 ms at 500 kb/s.

**B8. (5)** A system performs 4000 context switches per second at 4 μs each. Compute the overhead. Why use `vTaskDelayUntil` rather than `vTaskDelay` for a periodic task?

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Scheduling analysis.** (a) For tasks (3, 7), (3, 10), (4, 14): U, the RM response times, and whether EDF is feasible [4]. (b) For tasks (2, 5), (4, 7): RM response time of the second task, EDF feasibility [3]. (c) State the optimality results of RM and EDF [3].

**C2. Priority inversion.** (a) Describe unbounded priority inversion and the Mars Pathfinder incident [3]. (b) Describe priority inheritance and the ceiling protocol, with the POSIX attributes [3]. (c) Tasks H (2, 20), M (4, 30), L (6, 60) with H sharing a 3-unit critical section with L: the response times with blocking [4].

**C3. Interrupts, drivers and buses.** (a) ISR rules and the top-half/bottom-half pattern [3]. (b) The latency budget for a 100 μs response with hardware latency 2 μs, ISR 20 μs, switch 5 μs and task 40 μs [2]. (c) CAN worst-case frame bits for 0, 4 and 8 bytes; the bus load of messages 8 bytes every 10 ms, 8 bytes every 20 ms, 4 bytes every 100 ms and 6 bytes every 50 ms at 500 kb/s [3]. (d) Choose a communication mechanism for an ISR-to-task signal and for several sensors feeding one task [2].

**C4. Real-time Linux and timing.** (a) A 1 ms periodic task measured 3000 times on a virtualised Linux system showed a median of 172 to 246 μs and a maximum of 6.5 to 7.1 ms under normal scheduling, and a median of 156 to 202 μs and a maximum of 6.5 to 7.0 ms under SCHED_FIFO 80: what do you conclude? [4]. (b) The features of Linux and PREEMPT_RT for real-time work [3]. (c) Why measured execution times are not WCET bounds [3].

**C5. Design exercise.** A motor controller has tasks (C, T) in ms: control (0.2, 1), sensor fusion (2, 10), telemetry (20, 100), logging (50, 1000). (a) U and the bound for 4 tasks [2]. (b) The RM response times [3]. (c) The response times if the logger holds a 0.5 ms critical section shared with the three higher-priority tasks [3]. (d) Memory and safety design choices (static allocation, stack sizing, watchdog) [2].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **C** · 2 **A** · 3 **B** · 4 **D** · 5 **C** · 6 **A** · 7 **B** · 8 **C** · 9 **D** · 10 **A** · 11 **B** · 12 **C** · 13 **D** · 14 **A** · 15 **B** · 16 **C** · 17 **D** · 18 **A** · 19 **B** · 20 **C**

Brief reasons: 5. If U > 1 the processor cannot supply the required computation. 12. Semaphores have no notion of an owner, so they cannot implement priority inheritance. 16. A dominant 0 bit in the identifier wins arbitration.

## Section B solutions

**B1.** Step 1: U = 2/6 + 2/8 + 3/12 = 0.333 + 0.25 + 0.25 = **0.833**; the bound for n = 3 is **0.780**: inconclusive (U above the bound).
Step 2: R1 = **2**.
Step 3: R2 = 2 + ceil(R/6) × 2: 4 → 4: **4** (<= 8).
Step 4: R3 = 3 + ceil(R/6) × 2 + ceil(R/8) × 2: 3 → 7 → 9 → 11 → 11: **11** (<= 12).
Step 5: **Schedulable by RM** (exact analysis).

**B2.** Step 1: U = 1/3 + 2/5 + 1/10 = 0.333 + 0.4 + 0.1 = **0.833**.
Step 2: RM priorities by period: R1 = **1**; R2 = 2 + ceil(R/3) × 1: 2 → 3 → 3: **3**; R3 = 1 + ceil(R/3) + ceil(R/5) × 2: 1 → 4 → 5 → 5: **5** (<= 10): schedulable.
Step 3: EDF: U <= 1: **feasible**.

**B3.** Step 1: U = 3/7 + 3/10 + 4/14 = 0.429 + 0.300 + 0.286 = **1.014 > 1**.
Step 2: RM: R3 = 4 + ceil(R/7) × 3 + ceil(R/10) × 3: 4 → 10 → 13 → 16 → 19 (> 14: deadline missed; the iteration exceeds D): **R3 > D**.
Step 3: **EDF cannot schedule it either** (U > 1): no algorithm can.

**B4.** With no protocol, M (priority 20) preempts L (priority 10) at t = 100 while L holds the mutex; H (30) is waiting for L, and cannot proceed until M completes (t = 600) and L releases the mutex: H waits from t = 50 to about t = 599: **549 ms** (unbounded inversion: it grows with M's run time). With priority inheritance L runs at H's priority from t = 50, M cannot preempt it, L finishes its critical section at t = 200 and H waits only 150 ms (**149 ms** measured).

**B5.** B1 = 1: R1 = 2 + 1 = **3** (<= 6); R2 = **4**; R3 = **11**; all deadlines are met.

**B6.** Response time = 3 + 15 + 6 + 50 = **74 μs**; slack = 100 - 74 = **26 μs**. Reduce it by: shortening or splitting the ISR, handling the work inside a higher-priority task or the ISR (avoiding the context switch), optimising the task processing, raising the interrupt priority, using DMA, a faster clock.

**B7.** Bits = 47 + 32 + floor(65/4) = 47 + 32 + 16 = **95 bits**; at 1 Mb/s **95 μs**. Load of the 8-byte message: 135/500,000 = 0.27 ms every 5 ms = **5.4 percent**.

**B8.** Overhead = 4000 × 4 μs = 0.016 s per second = **1.6 percent**. `vTaskDelay` waits relative to the call, so the period equals the delay plus the execution time (drift); `vTaskDelayUntil` waits until an absolute release time, keeping a constant period.

## Section C solutions

**C1.**
(a) Step 1: U = **1.014**.
Step 2: RM response times: R1 = **3**; R2 = 3 + ceil(R/7) × 3: 3 → 6 → 6: **6** (<= 10); R3 > 14 (iteration 4 → 10 → 13 → 16 → 19): **deadline missed**.
Step 3: EDF requires U <= 1: **not feasible**: the processor is overloaded (101.4 percent): reduce computation times or lengthen periods.
(b) U = 0.971. R2 = 4 + ceil(R/5) × 2: 4 → 6 → 8 → 8 > 7: **RM misses**; EDF with U <= 1: **feasible** (the simulation over the 35-unit hyperperiod had no misses).
(c) **RM** is optimal among fixed-priority algorithms for periodic tasks with deadlines equal to periods (if any fixed-priority assignment works, RM does); **DM** is optimal for deadlines shorter than periods. **EDF** is optimal among all algorithms on one processor (feasible if and only if U <= 1 for D = T); neither is optimal on multiprocessors.

**C2.**
(a) A high-priority task blocks on a mutex held by a low-priority task, which is preempted by a medium-priority task that does not need the mutex: the high-priority task is delayed by the medium one for an unbounded time. In 1997 the Pathfinder lander's low-priority meteorological task held a mutex needed by the high-priority bus-management task; medium-priority tasks preempted it, the bus task missed its deadline and the watchdog reset the computer; enabling priority inheritance on the mutex (by a patch from Earth) fixed it.
(b) **Priority inheritance**: the holder runs at the highest priority of the tasks it blocks until it unlocks (POSIX `PTHREAD_PRIO_INHERIT`). **Immediate ceiling protocol**: the mutex has a ceiling (the highest priority of its users) and a task runs at the ceiling while it holds the mutex (`PTHREAD_PRIO_PROTECT` with `pthread_mutexattr_setprioceiling`): blocking at most once per release and no deadlock.
(c) B_H = 3: R_H = 2 + 3 = **5**; R_M = 4 + ceil(R/20) × 2: 4 → 6 → 6: **6**; R_L = 6 + ceil(R/20) × 2 + ceil(R/30) × 4: 6 → 12 → 12: **12**. All are within the deadlines (20, 30, 60).

**C3.**
(a) The ISR should acknowledge the device, capture the minimum data, defer the processing by giving a semaphore, posting to a queue or setting an event flag (interrupt-safe API), and request a context switch if a higher-priority task was woken; it must not block, allocate memory or run long. Top half: the ISR; bottom half: a task (or deferred procedure) that does the longer processing at its own priority.
(b) 2 + 20 + 5 + 40 = **67 μs**; slack **33 μs**.
(c) Bits: 0 bytes **55**, 4 bytes **95**, 8 bytes **135** (47 + 8n + floor((34 + 8n - 1)/4)); the load at 500 kb/s: 0.27 ms/10 ms + 0.27 ms/20 ms + 0.19 ms/100 ms + 0.23 ms/50 ms = 0.027 + 0.0135 + 0.0019 + 0.0046 = **4.7 percent**.
(d) ISR to task: a **binary semaphore** (or task notification); several sensors to one task: a **queue**.

**C4.**
(a) Real-time priority (SCHED_FIFO) reduced the **median** latency slightly but did **not** improve the **worst case** (about 7 ms either way): the largest delays come from outside the guest's scheduler (the hypervisor, non-preemptible sections of the stock kernel, host load), so a 1 ms deadline cannot be guaranteed on this platform. A real-time guarantee needs the whole stack to be real time: a PREEMPT_RT (or RTOS) kernel, no virtualisation interference, isolated cores, and measurement of the maximum under load.
(b) Linux: SCHED_FIFO/SCHED_RR, `mlockall`, absolute `clock_nanosleep`, priority-inheritance mutexes, CPU affinity and core isolation, high-resolution timers. PREEMPT_RT: preemptible kernel (sleeping spinlocks with priority inheritance), threaded interrupt handlers with priorities, giving worst-case latencies in the tens of microseconds on suitable hardware.
(c) A measured maximum comes only from the test runs: the true worst case may involve an input, cache state, interrupt pattern or bus contention that was not exercised; the WCET must be an upper bound derived by static analysis (path analysis plus a conservative hardware model) or measurement with a justified safety margin; hardware features such as caches, pipelines and DMA make bounding hard.

**C5.**
(a) U = 0.2 + 0.2 + 0.2 + 0.05 = **0.65**; the bound for 4 tasks is **0.757**: below the bound, so the set is schedulable by RM.
(b) R1 = **0.2 ms**; R2 = **2.6 ms**; R3 = **35.0 ms**; R4 = **150 ms** (all well within 1, 10, 100 and 1000 ms).
(c) With B = 0.5 ms for the three higher-priority tasks: R1 = **0.7 ms** (<= 1 ms), R2 = **3.3 ms**, R3 = **35.7 ms**, R4 = 150 ms: still schedulable, but the control loop margin falls from 0.8 to 0.3 ms: keep critical sections short and use priority inheritance or ceiling.
(d) Allocate all tasks, stacks, queues and buffers statically (no malloc after start-up); size stacks from worst-case call depth plus margin and monitor the high-water mark; use an MPU or canaries; a hardware watchdog serviced by a supervisor task that checks that every task has run; defined safe state on failure; the control loop at the highest priority; interrupt handlers short and deferred to tasks.
