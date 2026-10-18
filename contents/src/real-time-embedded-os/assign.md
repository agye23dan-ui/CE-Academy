# Real-Time & Embedded OS: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. The schedulability numbers were computed with Python (response-time iteration and simulation over the hyperperiod); the priority-inversion and wake-up latency results were measured by running C programs with SCHED_FIFO priorities on Linux (WSL2). Reproduce them with Python and, on any Linux machine, `chrt`, `taskset` and `cyclictest`.

# Assignment 1: Real-Time Concepts and Scheduling Theory (Chapters 1 to 3)

**Q1. Classification.** Classify as hard, firm or soft real time and justify: (a) an airbag controller [2] (b) an MP3 player's audio buffer [2] (c) a video-conference frame [2] (d) a digital thermostat display refresh [2] (e) Why is "real time" not "fast"? [2]

**Q2. Utilisation bounds.** (a) Compute the Liu and Layland bound n (2^(1/n) - 1) for n = 1 to 5 and the limit [4] (b) Compute the utilisation of (1, 4), (2, 6), (3, 12) and compare with the bound [3] (c) Is passing the bound necessary for schedulability? [3]

**Q3. Response-time analysis.** Tasks (C, T = D): (1, 4), (2, 6), (3, 12) with rate-monotonic priorities. Compute the response times by iteration and decide schedulability [10]

**Q4. RM versus EDF.** Tasks (2, 5) and (4, 7). (a) The utilisation [2] (b) The response time of the second task under RM [4] (c) Whether EDF can schedule them and why [4]

**Q5. Harmonic task sets.** (a) Analyse (1, 4), (2, 8), (4, 16) under RM [5] (b) Analyse (2, 4), (4, 8) under RM [5]

**Q6. A realistic set.** Tasks (C, T) in ms: (20, 100), (40, 150), (100, 350). Compute U and the response times [10]

**Q7. Cyclic executive.** Tasks (C, T): (1, 4), (1, 5), (2, 10). (a) The hyperperiod [2] (b) The conditions for a frame size f and the valid frame sizes [5] (c) The advantages and disadvantages of a cyclic executive [3]

## Solutions to Assignment 1

**Q1.** (a) **Hard**: a late firing causes injury or death. (b) **Soft** (or firm): an underrun causes an audible glitch but no harm; the buffer lets it recover. (c) **Firm to soft**: a late frame is useless and is dropped, quality degrades gradually. (d) **Soft**: a delayed refresh is hardly noticeable. (e) Real time is about **bounded, predictable response**, not average speed: a fast system with occasional unbounded delays (garbage collection, page faults, priority inversion) is not real time; a slow but deterministic system is.

**Q2.** (a) n = 1: **1.000**; 2: **0.828**; 3: **0.780**; 4: **0.757**; 5: **0.743**; limit ln 2 = **0.693**. (b) U = 1/4 + 2/6 + 3/12 = 0.25 + 0.333 + 0.25 = **0.833**, above the bound 0.780: the test is inconclusive. (c) **No**, the bound is only sufficient: sets above it can be schedulable (this one is, see Q3); sets with harmonic periods may be schedulable up to U = 1; the exact test is the response-time analysis.

**Q3.** Step 1: RM priorities by period: T = 4 (highest), 6, 12.
Step 2: R1 = **1** (<= 4).
Step 3: R2: R = 2; then 2 + ceil(2/4) × 1 = 3; 2 + ceil(3/4) × 1 = 3: **R2 = 3** (<= 6).
Step 4: R3: R = 3; 3 + ceil(3/4) × 1 + ceil(3/6) × 2 = 6; 3 + ceil(6/4) × 1 + ceil(6/6) × 2 = 3 + 2 + 2 = 7; 3 + ceil(7/4) + ceil(7/6) × 2 = 3 + 2 + 4 = 9; 3 + ceil(9/4) + ceil(9/6) × 2 = 3 + 3 + 4 = 10; 3 + ceil(10/4) + ceil(10/6) × 2 = 3 + 3 + 4 = 10: **R3 = 10** (<= 12).
Step 5: All deadlines are met: **schedulable by RM**.

**Q4.** (a) Step 1: U = 2/5 + 4/7 = 0.4 + 0.571 = **0.971**
(b) Task 1 (T = 5) has the higher priority.
Step 2: R2: R = 4; 4 + ceil(4/5) × 2 = 6; 4 + ceil(6/5) × 2 = 8; 4 + ceil(8/5) × 2 = 8: **R2 = 8 > D = 7**: **RM misses the deadline** (the simulation shows task 2 unfinished at t = 7).
Step 3: The Liu-Layland bound for n = 2 is 0.828: the set exceeds it and indeed fails
(c) **EDF can**: for implicit deadlines EDF is schedulable if and only if U <= 1, and 0.971 <= 1; the simulated schedule over the 35-unit hyperperiod had **no deadline misses** (Price: dynamic priorities, a more complex kernel and poorer behaviour under overload.)

**Q5.** (a) U = 0.25 + 0.25 + 0.25 = **0.75**; the periods 4, 8, 16 are harmonic. R1 = 1, R2 = 2 + ceil(R/4) × 1 = 3, R3 = 4 + ceil(R/4) × 1 + ceil(R/8) × 2: 4 → 7 → 8 → 8: **R3 = 8**: schedulable (and 0.75 is below the bound 0.780 anyway). (b) U = 0.5 + 0.5 = **1.0**: R1 = 2; R2 = 4 + ceil(R/4) × 2: 4 → 6 → 8 → 8: **R2 = 8 = D**: schedulable (just): harmonic periods allow RM to reach 100 percent utilisation, far above the bound of 0.828.

**Q6.** Step 1: U = 20/100 + 40/150 + 100/350 = 0.200 + 0.267 + 0.286 = **0.752** (about the bound 0.780).
Step 2: R1 = **20 ms**.
Step 3: R2 = 40 + ceil(R/100) × 20: 40 → 60 → 60: **60 ms** (<= 150).
Step 4: R3 = 100 + ceil(R/100) × 20 + ceil(R/150) × 40: 100 → 160 → 100 + 40 + 80 = 220 → 100 + 60 + 80 = 240 → 100 + 60 + 80 = 240: **R3 = 240 ms** (<= 350): schedulable, with slack of 110 ms for the third task.

**Q7.** (a) Step 1: lcm(4, 5, 10) = **20**
(b) The frame size f must: be at least the largest computation time (f >= 2), divide the hyperperiod (f in {1, 2, 4, 5, 10, 20}), and satisfy 2f - gcd(f, T_i) <= T_i for each task: f = 2: 4 - 2 = 2 <= 4, 4 - 1 = 3 <= 5, 4 - 2 = 2 <= 10 ✓; f = 4: 8 - 4 = 4 <= 4 ✓, 8 - 1 = 7 > 5 ✗; larger values fail.
Step 2: The only valid size is **f = 2** (a major cycle of 10 frames)
(c) Advantages: completely deterministic, no scheduler or context switches, no synchronisation problems, simple to verify.
Step 3: Disadvantages: inflexible (any change to a task requires rebuilding the schedule), long tasks must be split, poor handling of aperiodic events and of non-harmonic periods, large hyperperiods.

# Assignment 2: Synchronisation, Interrupts and Communication (Chapters 4 and 5)

**Q1. Priority inversion experiment.** Three SCHED_FIFO threads share one CPU: L (priority 10) holds a mutex for a 200 ms critical section from t = 0; H (priority 30) requests the mutex at t = 50 ms; M (priority 20) becomes ready at t = 100 ms and runs for 500 ms. (a) Explain the sequence with no protocol [4] (b) The measured waiting times were 549 ms and 149 ms: which is which and why? [4] (c) Relate this to the Mars Pathfinder failure [2]

**Q2. PIP and PCP.** (a) Describe priority inheritance and the immediate ceiling protocol [4] (b) State the blocking bounds and whether each prevents deadlock [3] (c) Give the POSIX mutex attributes that enable them [3]

**Q3. Response time with blocking.** Tasks (C, T): H (2, 20), M (4, 30), L (6, 60), with H and L sharing a 3-unit critical section. Compute the response times with the blocking term [10]

**Q4. ISR design.** (a) What should an interrupt service routine do and not do? [4] (b) A system must respond within 100 μs of an interrupt: hardware latency 2 μs, ISR 20 μs, context switch 5 μs, task processing 40 μs: the response time and the slack [3] (c) Explain the top-half/bottom-half pattern [3]

**Q5. CAN bus.** (a) The worst-case number of bits and the time at 500 kb/s and 1 Mb/s for an 8-byte frame [4] (b) The bits for frames of 0, 4 and 8 data bytes [3] (c) The bus load for messages of 8 bytes every 10 ms, 8 bytes every 20 ms, 4 bytes every 100 ms and 6 bytes every 50 ms at 500 kb/s [3]

**Q6. Communication choices.** Choose a mechanism (queue, binary semaphore, mutex, event group, shared memory with ring buffer) for: (a) an ISR signalling a task that a DMA transfer completed [2] (b) several sensors sending samples to one processing task [2] (c) two tasks updating a shared configuration structure [2] (d) a task waiting for either of two conditions [2] (e) a high-rate UART receive path [2]

**Q7. Pitfalls.** (a) Why is `vTaskDelay` wrong for a strict 10 ms period and what is the remedy? [3] (b) Why must a plain semaphore not be used as a mutex between tasks of different priorities? [3] (c) Give three ways to avoid deadlock [4]

## Solutions to Assignment 2

**Q1.** (a) Step 1: L takes the mutex at t = 0 and runs in the critical section.
Step 2: H becomes ready at t = 50, preempts L (higher priority), requests the mutex and blocks.
Step 3: L resumes.
Step 4: At t = 100 M becomes ready, and since M's priority (20) is higher than L's (10), M preempts L and runs for 500 ms: **H (waiting for L) is effectively delayed by M**, although M has lower priority than H: **unbounded priority inversion** (M could run for any length of time).
Step 5: L only finishes its critical section after M ends
(b) **No protocol: 549 ms**: H waited from t = 50 until about t = 599: M's entire 500 ms run (t = 100 to 600) lies inside H's waiting time.
Step 6: **Priority inheritance: 149 ms**: when H blocks, L inherits priority 30, so M (20) cannot preempt L; L completes the critical section at t = 200 and H gets the mutex: H waits only for the **remaining 150 ms** of the critical section (bounded by the critical section length)
(c) In 1997 the Pathfinder lander's low-priority meteorological task held a mutex used by a high-priority bus-management task; medium-priority tasks preempted the low-priority holder, the high-priority task missed its deadline and a watchdog reset the computer repeatedly; engineers enabled the priority-inheritance option of the VxWorks mutex by a patch uploaded from Earth.

**Q2.** (a) **Priority inheritance**: while a task holds a mutex and a higher-priority task blocks on it, the holder temporarily executes at the **highest priority among its waiters** and drops back when it unlocks. **Immediate ceiling protocol (priority ceiling emulation)**: each mutex has a ceiling = the highest priority of any task that ever locks it; a task that locks the mutex immediately runs at that ceiling until it unlocks. (b) PIP: a task can be blocked by each lower-priority task for at most one critical section, and by each mutex at most once: blocking is bounded by the sum of those critical sections, but **chained blocking** occurs and **deadlock is possible** (with nested locks). Ceiling protocols: a task is blocked **at most once** per release, for at most the **longest single critical section** of a lower-priority task, and **deadlock cannot occur** (the nested locking is serialised by the ceilings). (c) POSIX: `pthread_mutexattr_setprotocol(&attr, PTHREAD_PRIO_INHERIT)` for PIP, `PTHREAD_PRIO_PROTECT` with `pthread_mutexattr_setprioceiling` for the ceiling protocol; `PTHREAD_PRIO_NONE` is the default (no protection). FreeRTOS mutexes implement inheritance; AUTOSAR/OSEK use the immediate ceiling.

**Q3.** Step 1: Priorities by period: H (T = 20), M (30), L (60).
Step 2: The blocking term applies to H: it can be blocked once by L's 3-unit critical section (B_H = 3).
Step 3: **H**: R = 2 + 3 = **5** (<= 20).
Step 4: **M**: it does not use the mutex, so it has no blocking term and is delayed only by H: R = 4 + ceil(R/20) × 2: 4 → 6 → 6: **6** (<= 30).
Step 5: **L**: R = 6 + ceil(R/20) × 2 + ceil(R/30) × 4: 6 → 12 → 6 + 2 + 4 = 12: **12** (<= 60).
Step 6: All schedulable.
Step 7: Without a protocol (unbounded inversion by M) H's response would be unbounded.

**Q4.** (a) **Do**: acknowledge/clear the interrupt source, copy the minimum data (a register, a DMA flag), set a flag or give a semaphore/post to a queue using the interrupt-safe API (the `...FromISR` functions), and request a context switch if a higher-priority task was woken. **Do not**: block, wait for locks, call non-interrupt-safe functions, allocate memory, print, loop for long, or do heavy processing. (b) Response time = 2 + 20 + 5 + 40 = **67 μs**; slack = 100 - 67 = **33 μs** (33 percent margin). (c) The **top half** (the ISR) runs with interrupts masked/prioritised and does only the urgent minimal work; the **bottom half** (a task or deferred procedure) performs the longer processing at task level, scheduled by priority, keeping interrupt latency low for other devices.

**Q5.** (a) Step 1: An 8-byte classic CAN frame has at most 47 + 8 × 8 + floor((34 + 64 - 1)/4) = 47 + 64 + 24 = **135 bits** with worst-case bit stuffing: at 500 kb/s **270 μs**; at 1 Mb/s **135 μs**
(b) 47 + 8n + floor((34 + 8n - 1)/4): n = 0: **55 bits**; n = 4: **95 bits**; n = 8: **135 bits**
(c) Frame bits: 8 bytes **135**; 4 bytes **95**; 6 bytes **115**.
Step 2: Load = 135/500,000/0.010 + 135/500,000/0.020 + 95/500,000/0.100 + 115/500,000/0.050 = 0.027 + 0.0135 + 0.0019 + 0.0046 = **0.047 (4.7 percent)**: the bus is lightly loaded.
Step 3: Since arbitration is by priority (lowest identifier wins) the response times are analysed with the fixed-priority equations plus blocking by one lower-priority frame in transmission (non-preemptive).

**Q6.** (a) A **binary semaphore** given from the ISR (or a task notification): the lightest signalling mechanism. (b) A **queue** (many senders, one receiver; copies samples, bounded and thread safe). (c) A **mutex** (with priority inheritance) protecting the structure (or double-buffering with an atomic pointer swap). (d) An **event group** (or event flags): wait on a bitmask with OR semantics. (e) A **ring buffer** filled by the ISR/DMA (single producer, single consumer with separate head and tail indices needs no lock) plus a semaphore or notification to wake the consumer when data are available.

**Q7.** (a) `vTaskDelay(10 ms)` waits 10 ms **after** the task's work, so the period is 10 ms plus the execution time and any preemption (drift); use `vTaskDelayUntil(&last, period)` (an absolute release time), or `clock_nanosleep` with `TIMER_ABSTIME` in POSIX. (b) A plain semaphore has **no owner**, so it gives **no priority inheritance** (unbounded priority inversion) and can be released by a task that does not hold it; use a mutex for mutual exclusion. (c) Impose a **global lock order**; use **ceiling protocols** (which prevent deadlock); hold only one lock at a time or take all locks at once; use timeouts and recovery; avoid calling unknown code while holding a lock; prefer message passing between tasks.

# Assignment 3: Memory, Embedded Linux and Dependability (Chapters 6 to 8)

**Q1. Memory.** (a) Why avoid malloc in a real-time system, and what are the alternatives? [4] (b) How do you size a task stack and detect overflow? [3] (c) What are the roles of an MPU and of `mlockall`? [3]

**Q2. Latency measurement.** A 1 ms periodic task (absolute `clock_nanosleep`) was measured 3000 times on a virtualised Linux system: normal scheduling gave a median of 172 to 246 μs and a maximum of 6.5 to 7.1 ms; SCHED_FIFO priority 80 gave a median of 156 to 202 μs and a maximum of 6.5 to 7.0 ms. (a) What conclusions do you draw about real-time priority here? [4] (b) Why is the worst case important? [3] (c) How would you measure latency on real hardware? [3]

**Q3. Real-time Linux.** (a) List the Linux features that give soft real-time behaviour [4] (b) What does PREEMPT_RT change? [3] (c) When would you choose an RTOS rather than Linux? [3]

**Q4. Tick and jitter.** (a) The tick period for 100, 250 and 1000 Hz [3] (b) The effect of a 1 ms tick on release jitter of a periodic task [3] (c) What is a tickless kernel and why use it? [4]

**Q5. Context-switch overhead.** (a) A system performs 2000 context switches per second at 5 μs each: the overhead in percent [3] (b) How does the overhead change with a 1 kHz tick and round-robin time slicing? [3] (c) How could you reduce it? [4]

**Q6. Standards and WCET.** (a) Why is measuring execution time not a proof of the WCET? [4] (b) Name three safety standards and their domains [3] (c) What are MISRA C and ARINC 653 for? [3]

**Q7. Design exercise.** A motor controller has tasks (C, T) in ms: control loop (0.2, 1), sensor fusion (2, 10), telemetry (20, 100), logging (50, 1000). (a) The utilisation and the RM bound for 4 tasks [3] (b) The response times under RM [4] (c) If the logger holds a mutex for 0.5 ms that the control, fusion and telemetry tasks also use, find the response times with blocking [3]

## Solutions to Assignment 3

**Q1.** (a) `malloc` and `free` take a variable, **non-deterministic** time, and fragmentation can make an allocation fail after a long run (a failure that cannot be recovered in a safety system). Alternatives: **static allocation** at start-up; **fixed-size block pools** (constant-time allocate and free without fragmentation); allocate during initialisation and never free. (b) Estimate the worst-case stack depth (call tree, local variables, saved registers, interrupt nesting), add a margin of 20 to 30 percent, then **measure the high-water mark** under stress (`uxTaskGetStackHighWaterMark`), fill the stack with a pattern at creation, use a canary word at the end, MPU guard regions, and compiler options such as `-fstack-usage`. (c) An **MPU** (memory protection unit) restricts each task's access to defined regions, detecting overflows and wild pointers and isolating faults; **`mlockall(MCL_CURRENT | MCL_FUTURE)`** in real-time Linux locks all pages in RAM so no page fault (disk access) can delay a task.

**Q2.** (a) The **median** improved a little with SCHED_FIFO (156 to 202 μs against 172 to 246 μs) but the **99th percentile and the maximum (6.5 to 7 ms) did not**: on a virtual machine with a stock kernel the large delays come from outside the guest scheduler (the hypervisor deschedules the virtual CPU; non-preemptible kernel sections; other host activity). A real-time priority cannot remove such delays: the system as a whole must be real time (PREEMPT_RT kernel, no hypervisor interference, isolated CPUs). (b) Deadlines are missed by the **worst** case, not the average: a 1 ms deadline is violated by a 7 ms outlier even if 99 percent of wake-ups take under 4 ms (or under 0.3 ms at the median); a real-time design needs a bound. (c) Use `cyclictest` under load on the target board; toggle a GPIO pin at the task's start and observe it with an oscilloscope or logic analyser, or use a hardware timer capture; run long enough (hours) and under stress (CPU, I/O, network load) and record the maximum and the histogram.

**Q3.** (a) **SCHED_FIFO/SCHED_RR** fixed priorities above normal tasks; **mlockall**; **clock_nanosleep** with absolute times; **priority-inheritance mutexes**; **CPU affinity** and isolated cores (`taskset`, `isolcpus`, `cpuset`); high-resolution timers; avoiding page faults and dynamic allocation in the real-time path. (b) **PREEMPT_RT** makes almost all of the kernel preemptible: spinlocks become sleeping (priority-inheriting) locks, interrupt handlers run as schedulable kernel threads with priorities, and high-resolution timers are used: worst-case latencies fall from milliseconds to tens of microseconds on suitable hardware. (c) Choose an **RTOS/microcontroller** when hard deadlines in the microsecond range must be guaranteed, the code and memory footprint must be small (kilobytes), the hardware has no MMU, power is very limited, or certification is required; choose Linux when rich functionality (networking, file systems, GUI, drivers) matters and soft or firm real time is enough (often with a microcontroller handling the hard real-time part).

**Q4.** (a) 100 Hz: **10 ms**; 250 Hz: **4 ms**; 1000 Hz: **1 ms**. (b) A task that is delayed through the tick is released only at the next tick boundary: the release jitter is up to **one tick (1 ms)**, so a 1 ms tick cannot give sub-millisecond timing; a faster tick reduces jitter but increases the interrupt overhead. (c) A **tickless** kernel programs the hardware timer for the next required event instead of a fixed periodic tick: precise timing (microsecond resolution), no useless wake-ups, and **lower power** because the processor can stay in deep sleep.

**Q5.** (a) 2000 × 5 μs = 10 ms per second = **1.0 percent**. (b) With a 1 kHz tick and time slicing, if a switch happens at every tick, there are 1000 switches per second: 5 ms per second = **0.5 percent** (plus the tick interrupt itself); more frequent switching (shorter slices) increases the overhead in proportion. (c) Fewer, longer time slices; fewer tasks switching (combine tasks); event-driven design (switch only when needed); cooperative scheduling for non-critical tasks; efficient context saving (lazy floating-point stacking); avoid priority ping-pong between tightly coupled tasks.

**Q6.** (a) Measurement only observes the paths and data used in the test: the worst case may need an unusual path, cache misses, bus contention or interrupt interference not exercised; a measured maximum is a lower bound of the WCET (the **high-water mark**), whereas a proof requires static path and hardware analysis (or a safety margin plus argued coverage). (b) **IEC 61508** (general functional safety), **ISO 26262** (automotive, ASIL A to D), **DO-178C** (airborne software, DAL A to E), **IEC 62304** (medical device software), EN 50128 (railway). (c) **MISRA C** is a coding standard that restricts C to a safer subset (no dynamic memory in many rules, no recursion, defined behaviour); **ARINC 653** defines **time and space partitioning** for avionics so that applications of different criticality share a processor without interfering with each other.

**Q7.** (a) Step 1: U = 0.2/1 + 2/10 + 20/100 + 50/1000 = 0.2 + 0.2 + 0.2 + 0.05 = **0.65**; the bound for n = 4 is 4 (2^(1/4) - 1) = **0.757**: 0.65 is below it, so the set is schedulable by RM.
(b) Priorities by period (1, 10, 100, 1000 ms).
Step 2: R1 = **0.2 ms**.
Step 3: R2 = 2 + ceil(R/1) × 0.2: 2 → 2.4 → 2.6 → 2.6: **2.6 ms** (<= 10).
Step 4: R3 = 20 + ceil(R/1) × 0.2 + ceil(R/10) × 2: 20 → 28 → 31.6 → 34.4 → 35 → 35: **35.0 ms** (<= 100).
Step 5: R4 = 50 + ceil(R/1) × 0.2 + ceil(R/10) × 2 + ceil(R/100) × 20: converges to **150 ms** (<= 1000)
(c) With a 0.5 ms critical section shared with the logger (B = 0.5 ms for the three higher-priority tasks that use the mutex): R1 = 0.2 + 0.5 = **0.7 ms** (still <= 1), R2 = **3.3 ms**, R3 = **35.7 ms**, R4 = 150 ms (the logger has no lower-priority blockers).
Step 6: Even the control loop meets its 1 ms deadline, but its margin shrinks from 0.8 ms to 0.3 ms: keep critical sections short and use priority inheritance or ceiling.
