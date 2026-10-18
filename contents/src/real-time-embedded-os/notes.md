# Real-Time & Embedded OS: Lecture Notes

A real-time system must produce correct results **on time**: the correctness of a result depends on when it is delivered as well as on its value. This course covers real-time concepts, RTOS structure (tasks, scheduling, interrupts), scheduling theory (rate-monotonic, EDF, response-time analysis), synchronisation and priority inversion, interrupt and driver design, memory-constrained programming, embedded Linux and timing measurement. The schedulability calculations were computed and simulated with Python; the priority-inversion and timer-latency experiments are C programs run with real-time priorities (SCHED_FIFO) on Linux (WSL2), so those results are real; the FreeRTOS code is illustrative and was not compiled here. Prerequisites: Operating Systems, Microprocessors & Embedded Systems and C programming.

# Chapter 1: Real-Time Concepts

## 1.1 Hard, firm and soft
- **Hard real time**: a missed deadline is a failure with severe consequences (airbag controller, pacemaker, flight control, anti-lock brakes). Needs guaranteed worst-case behaviour.
- **Firm**: a late result is worthless but not catastrophic (a dropped video frame in a conferencing system).
- **Soft**: a late result has reduced value (a UI update, streaming audio buffer).
**Real-time does not mean fast**: it means predictable. Key quantities: **latency** (from event to response), **jitter** (variation of latency), **deadline** (D), **period** (T), **worst-case execution time** (WCET, C), **response time** (R, from release to completion). A task is schedulable if R <= D in the worst case.

## 1.2 Task models
**Periodic** tasks release a job every T time units with computation time C and relative deadline D (often D = T); **sporadic** tasks have a minimum inter-arrival time; **aperiodic** tasks arrive unpredictably (served by servers). **Utilisation** U = sum(C_i/T_i). Time is organised around the **tick** (a periodic timer interrupt, commonly 100, 250 or 1000 Hz, giving a tick of 10, 4 or 1 ms) or a tickless timer.

## 1.3 Sources of unpredictability
Interrupts, caches and branch prediction (WCET analysis must assume misses), DRAM refresh, DMA bus contention, virtual memory page faults and swapping (avoid in hard real time: lock memory), dynamic memory allocation (non-deterministic time and fragmentation), non-preemptable sections in the kernel, priority inversion, power management transitions and hypervisors.

# Chapter 2: RTOS Architecture

An **RTOS** (FreeRTOS, Zephyr, RTEMS, VxWorks, QNX, ThreadX, Linux with PREEMPT_RT) provides a small, deterministic kernel: tasks, a priority-based preemptive scheduler, synchronisation (mutexes, semaphores, event flags), communication (queues, mailboxes), timers, interrupt handling and memory management, with bounded kernel latencies and a small footprint (a few KB of RAM).
**Task states**: running, ready, blocked (waiting for a delay, queue, semaphore), suspended. The scheduler always runs the highest-priority ready task (**fixed-priority preemptive scheduling**); equal priorities may share time by round robin. **Context switch**: save registers and stack pointer of the old task and load those of the new one: typically 1 to 10 microseconds on a microcontroller.

An illustrative FreeRTOS fragment (not compiled in this course environment):
```c
void sensor_task(void *arg) {
    TickType_t last = xTaskGetTickCount();
    for (;;) {
        int sample = read_adc();
        xQueueSend(q, &sample, 0);
        vTaskDelayUntil(&last, pdMS_TO_TICKS(10));   /* absolute delay: a true 10 ms period */
    }
}
xTaskCreate(sensor_task, "sensor", 256, NULL, 3, NULL);   /* priority 3 */
vTaskStartScheduler();
```
`vTaskDelayUntil` (absolute) rather than `vTaskDelay` (relative) avoids drift in periodic tasks. The same idea in Linux is `clock_nanosleep(CLOCK_MONOTONIC, TIMER_ABSTIME, ...)`.

# Chapter 3: Scheduling Theory

## 3.1 Fixed-priority scheduling
**Rate-monotonic (RM)**: the shorter the period, the higher the priority (optimal among fixed-priority algorithms for D = T). **Deadline-monotonic (DM)**: the shorter the relative deadline, the higher the priority (D < T). **Liu and Layland bound**: n periodic tasks are schedulable by RM if U <= n (2^(1/n) - 1): n = 1: 1.000; 2: **0.828**; 3: **0.780**; 4: 0.757; 5: 0.743; and ln 2 = **0.693** as n grows. The bound is **sufficient but not necessary**; harmonic periods (each period divides the next) can reach U = 1.

## 3.2 Response-time analysis (exact)
For task i with higher-priority tasks hp(i): **R_i = C_i + B_i + sum over j in hp(i) of ceil(R_i/T_j) C_j**, solved by iteration from R = C_i + B_i until it converges; schedulable if R_i <= D_i (B_i is the blocking time, Chapter 4).
Examples (tasks given as (C, T), deadlines equal to periods, RM priorities):
- **Set A** (1, 4), (2, 6), (3, 12): U = 0.833 exceeds the bound 0.780, so the bound is inconclusive, but the exact analysis gives R = **1, 3, 10** (all within 4, 6, 12): **schedulable by RM**.
- **Set B** (2, 5), (4, 7): U = 0.971. R1 = 2; R2 = 4 + ceil(R/5) × 2: 4 → 6 → 8 → 8: **R2 = 8 > 7**: **RM misses a deadline**. The simulated schedule over the 35-unit hyperperiod (A = task 1, B = task 2) is AABBBAABBBAAB.BAABBB... and the second task misses its deadline at t = 7.
- **Set C** (1, 4), (2, 8), (4, 16): harmonic, U = 0.75: R = **1, 3, 8**: schedulable.
- **Set D** (2, 4), (4, 8): harmonic with U = **1.0**: R = 2, 8 (deadline 8 met exactly): RM reaches full utilisation.
- **Set E** (20, 100), (40, 150), (100, 350) ms: U = 0.752, R = **20, 60, 240 ms**: schedulable.

## 3.3 Earliest deadline first (EDF)
**EDF** runs the ready job with the nearest absolute deadline (dynamic priority). It is **optimal on a single processor**: for D = T, tasks are schedulable if and only if **U <= 1**. Set B (U = 0.971) fails under RM but **EDF meets every deadline** over the hyperperiod (simulated schedule AABBBBAABBBBAABAABBB..., zero misses). Costs: more complex kernel, less predictable under overload (a domino effect: many tasks can miss), and fixed priorities are better supported in practice (POSIX, AUTOSAR, OSEK). For D < T use the density test sum(C/D) <= 1 (sufficient) or the processor-demand analysis.

## 3.4 Cyclic executives, aperiodic work and multiprocessors
A **cyclic executive** (static schedule) runs a fixed sequence of procedure calls in **minor frames** inside a major cycle equal to the hyperperiod (the least common multiple of the periods): fully deterministic and no OS needed, but inflexible. Frame size f must satisfy: f >= max C, f divides the hyperperiod, and 2f - gcd(f, T) <= T for every task. For tasks (1, 4), (1, 5), (2, 10): hyperperiod 20, the only valid frame size is **2**. **Aperiodic and sporadic** work is served with **polling, deferrable or sporadic servers** (a budget replenished periodically). **Multiprocessor**: partitioned (tasks fixed to cores) or global scheduling; the problem is NP-hard; EDF and RM lose their optimality.

# Chapter 4: Synchronisation and Priority Inversion

## 4.1 Priority inversion
A high-priority task H blocks on a mutex held by a low-priority task L; a **medium**-priority task M (not using the mutex) preempts L, so H waits for M although M has lower priority: **unbounded priority inversion** (M can run arbitrarily long). The Mars Pathfinder lander suffered this in 1997 (watchdog resets on the VxWorks system); the fix was to enable priority inheritance, uploaded from Earth.

**Experiment** (C, three SCHED_FIFO threads on a single CPU: L priority 10 holds a mutex for a 200 ms critical section from t = 0; H priority 30 requests the mutex at t = 50 ms; M priority 20 becomes ready at t = 100 ms and runs 500 ms). Measured time that H waited:
- **No protocol: 549 ms**: L is preempted by M for the whole of M's run, so H waits roughly M's 500 ms plus the rest of L's work (H waited from t = 50 to t = 599).
- **Priority inheritance (PTHREAD_PRIO_INHERIT): 149 ms**: L runs at H's priority from t = 50 until it releases the mutex at t = 200, so H waits only for the **remainder of the critical section** (150 ms).
**Protocols**: **priority inheritance (PIP)**: the holder inherits the priority of the highest-priority waiting task; blocking is bounded by the sum of the lengths of the critical sections of lower-priority tasks that can block it, but chained blocking and deadlock remain possible. **Priority ceiling protocol (PCP)** and the **immediate ceiling protocol** (the "highest locker": a task that locks a mutex immediately runs at the mutex's ceiling priority, the highest priority of any task that uses it): a task is blocked **at most once** per release, for at most the longest single critical section, and deadlock is prevented. POSIX: `PTHREAD_PRIO_INHERIT`, `PTHREAD_PRIO_PROTECT`.
**Blocking in the response-time test**: for H (C = 2, T = 20), M (C = 4, T = 30), L (C = 6, T = 60) with H sharing a 3-unit critical section with L: B_H = 3: R_H = **5**, R_M = **6**, R_L = **12**: all schedulable with PIP/PCP (the blocking term B appears only for tasks that can be blocked).

## 4.2 Other primitives and pitfalls
Binary semaphores for **signalling** (an ISR gives, a task takes), counting semaphores for resources, **mutexes** (with ownership and inheritance) for mutual exclusion; never use a plain semaphore as a mutex between tasks of different priorities. **Disabling interrupts** or the scheduler gives short critical sections but increases latency. Avoid holding locks while blocking or calling unknown code; acquire locks in a fixed order (deadlock); use lock-free or single-writer designs for ISR-to-task data (ring buffers with separate head and tail indices).

# Chapter 5: Interrupts, Drivers and Communication

**Interrupt service routines** must be short: acknowledge the device, capture data, and **defer** the work to a task (give a semaphore, post to a queue, set an event flag): the **top half/bottom half** (or "deferred procedure call") pattern. Latency components: hardware interrupt latency (until the CPU takes the exception), ISR entry (saving registers), ISR execution, and then scheduling latency to the handler task. A budget example: the system must react within 100 μs: hardware latency 2 μs + ISR 20 μs + context switch to the task 5 μs + task work 40 μs = 67 μs: **33 μs slack**. In ISRs use only the interrupt-safe API (FreeRTOS: `...FromISR`), no blocking calls and no dynamic memory. Mark hardware-shared variables `volatile`, use atomic access or critical sections for multi-word data, and consider **interrupt priority** and nesting (on Cortex-M, priorities above `configMAX_SYSCALL_INTERRUPT_PRIORITY` must not call kernel functions).
**Communication**: **queues** (copy by value: simple, safe, bounded depth, a blocked sender or receiver), **mailboxes**, **event groups**, **message passing** (QNX) and **shared memory** with synchronisation. **DMA** moves data without the CPU (double buffering, completion interrupt). **Drivers**: polled, interrupt-driven, or DMA-driven; hide hardware behind a hardware abstraction layer (HAL).
**CAN bus example** (automotive): a classic CAN frame with 8 data bytes takes at most 47 + 8 × 8 + floor((34 + 64 - 1)/4) = **135 bits** (with worst-case bit stuffing), i.e. **270 μs** at 500 kb/s (135 μs at 1 Mb/s); frames of 0, 4 and 8 bytes need at most 55, 95 and 135 bits. With messages every 10 ms (8 bytes), 20 ms (8 bytes), 100 ms (4 bytes) and 50 ms (6 bytes) the bus load is only **4.7 percent** at 500 kb/s: CAN arbitration is priority-based (lowest identifier wins), so response times are analysed with the same fixed-priority theory.

# Chapter 6: Memory and Resource Management in Embedded Systems

- **Static allocation**: allocate all tasks, stacks, queues and buffers at start-up; avoid `malloc` in running code (non-deterministic, fragmentation). If dynamic allocation is unavoidable use **fixed-block memory pools** (constant-time allocate and free, no fragmentation).
- **Stack sizing**: each task has its own stack: size it from worst-case call depth and interrupt nesting plus a margin; detect overflow (stack canaries, MPU guard regions, `uxTaskGetStackHighWaterMark`). A stack overflow is the most common cause of mysterious crashes.
- **Memory protection**: an **MPU** (Cortex-M) isolates tasks and flags illegal access; a **MMU** adds virtual memory (Linux); lock pages (`mlockall`) in real-time Linux programs to avoid page faults.
- **Footprint and energy**: flash and RAM budgets, linker maps, `const` data in flash, avoiding printf and floating point where possible; **power management**: sleep modes, tickless idle, DVFS, race-to-idle.
- **Watchdogs**: hardware timers that reset the system if software fails to "kick" them: kick only from a supervisory task that verifies all critical tasks have made progress.

# Chapter 7: Embedded Linux and Real-Time Linux

Embedded Linux (Yocto, Buildroot) suits systems with an MMU, megabytes of RAM and rich software (networking, file systems, GUIs). Standard Linux is **not** hard real time, but gives **soft real-time** with POSIX priorities: `SCHED_FIFO` and `SCHED_RR` (fixed priorities above all normal tasks), `mlockall`, `clock_nanosleep` with absolute times, priority-inheritance mutexes, CPU affinity (`taskset`, `isolcpus`) and the **PREEMPT_RT** patch set (now mainline): threaded interrupts, preemptible kernel locks and priority inheritance in the kernel give worst-case latencies of tens of microseconds on suitable hardware. Alternatives: a **co-kernel** (Xenomai) or a **dual system** (a Cortex-M running an RTOS next to Linux).
**Measurement** (C, a 1 kHz periodic task using absolute `clock_nanosleep`, 3000 wake-ups, on a WSL2 virtual machine: the kernel is a stock Linux kernel running under a hypervisor, so the results include virtualisation jitter and are poor compared with a real-time board): normal scheduling: **median 172 to 246 μs, 99th percentile 2.6 to 3.9 ms, maximum 6.5 to 7.1 ms**; SCHED_FIFO priority 80: **median 156 to 202 μs, 99th percentile 3.1 to 3.4 ms, maximum 6.5 to 7.0 ms**. Real-time priority improved the median only slightly and **not the worst case**, because the delays came from outside the guest scheduler. Lesson: the **worst case**, not the mean, is what real-time design needs; measure it on the target hardware under load (tools: `cyclictest`, a logic analyser with a GPIO toggle, trace tools such as Percepio Tracealyzer or `ftrace`).

# Chapter 8: Timing Analysis and Dependability

- **WCET analysis**: measurement (high-water marks, never a proof), static analysis (path analysis plus a hardware model, tools such as aiT) or hybrid; caches, pipelines and DMA make it hard: use simpler cores, scratchpad memory or cache locking in hard real time.
- **Jitter and the tick**: a periodic task released by a tick with resolution 1 ms has up to 1 ms release jitter; with a tickless or hardware-timer design jitter falls to the interrupt latency.
- **Overload and mode changes**: shed low-criticality tasks, use mixed-criticality scheduling, graceful degradation.
- **Safety standards**: IEC 61508 (general), ISO 26262 (automotive, ASIL A to D), DO-178C (avionics, DAL A to E), IEC 62304 (medical): defined processes, traceability, coverage, certified RTOS and compilers; coding rules such as MISRA C; watchdogs, redundancy and fail-safe states.
- **OSEK/AUTOSAR** (automotive): static configuration of tasks, priorities and resources with the immediate priority ceiling protocol; **ARINC 653** (avionics): time and space partitioning.

## Quick reference
- RM bound U <= n (2^(1/n) - 1) (0.693 limit); EDF: U <= 1.
- Response time: R_i = C_i + B_i + sum ceil(R_i/T_j) C_j.
- PIP bounds blocking; PCP: one block of at most one critical section and no deadlock.
- Use absolute delays for periodic tasks; ISRs defer work; no malloc after start-up; measure the worst case.
