# Real-Time & Embedded OS: 14-Week Study Plan and Resources

Time budget: 10 to 12 hours per week (3 reading, 7 to 8 hands-on work and analysis, 1 review with the app's quizzes). You need a target to run an RTOS on: a development board (STM32 Nucleo or Discovery, Raspberry Pi Pico, ESP32, nRF52) with FreeRTOS or Zephyr, plus a logic analyser or an oscilloscope to see timing. If you have no board, use the FreeRTOS POSIX/Windows simulator port, QEMU, Wokwi (online simulator), and a Linux PC for the POSIX real-time exercises (`chrt`, `taskset`, `cyclictest`).

## Textbooks
- Jane Liu, *Real-Time Systems*; Giorgio Buttazzo, *Hard Real-Time Computing Systems* (scheduling theory in depth).
- Alan Burns and Andy Wellings, *Real-Time Systems and Programming Languages*.
- Richard Barry, *Mastering the FreeRTOS Real Time Kernel* (free PDF) and the FreeRTOS reference manual.
- Qing Li and Caroline Yao, *Real-Time Concepts for Embedded Systems*.
- Joseph Yiu, *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors*.
- Elecia White, *Making Embedded Systems*; Michael Barr, *Programming Embedded Systems*.
- Michael Kerrisk, *The Linux Programming Interface* (POSIX real-time features).

## Free courses and tools
- Zephyr documentation and tutorials, FreeRTOS tutorials, Quantum Leaps' "Modern Embedded Systems Programming" video course (free), MIT 6.S081 for OS background, Coursera/edX embedded systems courses (UT Austin "Real-Time Bluetooth Networks").
- Tools: FreeRTOS, Zephyr, RIOT; Percepio Tracealyzer or SEGGER SystemView (task traces); `cyclictest` and `rt-tests`; Linux `ftrace`; gdb/OpenOCD; Python for schedulability analysis (use the response-time iteration in this course); Cheddar or MAST for schedulability tools.

## Week by week

**Week 1: Real-time concepts, deadlines, jitter, WCET (Ch 1).** Do: Assignment 1 Q1. Blink an LED from a hardware timer and measure the jitter on a logic analyser.

**Week 2: RTOS architecture; tasks, states, context switch (Ch 2).** Do: create three FreeRTOS tasks of different priorities; trace them with SystemView or by toggling GPIO pins.

**Week 3: Fixed-priority scheduling and utilisation bounds (Ch 3.1).** Do: Assignment 1 Q2. Write a Python script computing the Liu and Layland bound.

**Week 4: Response-time analysis (Ch 3.2).** Do: Assignment 1 Q3, Q5, Q6. Sit the **Class Test** at the end of the week (Chapters 1 to 4). Implement the response-time iteration in Python.

**Week 5: RM versus EDF; cyclic executives (Ch 3.3, 3.4).** Do: Assignment 1 Q4, Q7. Simulate schedules over a hyperperiod and draw Gantt charts.

**Week 6: Synchronisation primitives (Ch 4.2).** Do: build a producer-consumer pipeline with a queue and a binary semaphore signalled from an ISR.

**Week 7: Priority inversion, inheritance and ceiling protocols (Ch 4.1).** Do: Assignment 2 Q1 to Q3. Mock midterm: first half of the Final Exam. Reproduce priority inversion with three SCHED_FIFO threads and measure the effect of `PTHREAD_PRIO_INHERIT`.

**Week 8: Interrupts and drivers (Ch 5).** Do: Assignment 2 Q4, Q6. Write an interrupt-driven UART driver with a ring buffer; measure interrupt latency.

**Week 9: Communication buses and timing: CAN, SPI, I2C (Ch 5).** Do: Assignment 2 Q5, Q7. Compute the bus load for a message set; send CAN frames with a USB adapter or a simulator.

**Week 10: Memory and resource management (Ch 6).** Do: Assignment 3 Q1. Measure stack high-water marks; replace malloc by a block pool.

**Week 11: Embedded and real-time Linux (Ch 7).** Do: Assignment 3 Q2, Q3. Run `cyclictest` with and without load, with and without SCHED_FIFO; (if possible) on a PREEMPT_RT kernel.

**Week 12: Timing analysis, power, safety standards (Ch 8).** Do: Assignment 3 Q4 to Q6. Implement a watchdog supervisor that checks the progress of all tasks.

**Week 13: Project.** Design, analyse and implement a small real-time system (motor control loop with a PID task, sensor fusion and telemetry; a drone attitude loop; a data logger), with a documented task set, a response-time analysis (Assignment 3 Q7 style) and measured timing on the target.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can classify real-time requirements and define latency, jitter, deadline, period and WCET.
- [ ] I can explain RTOS task states, priority preemption and context switching.
- [ ] I can apply the RM utilisation bound and exact response-time analysis, with and without blocking.
- [ ] I can analyse a task set under EDF and compare it with RM; I can design a cyclic executive.
- [ ] I can explain and reproduce priority inversion and use inheritance or ceiling protocols.
- [ ] I can design ISRs with deferred processing and budget interrupt latency.
- [ ] I can compute CAN frame sizes and bus load.
- [ ] I can manage memory deterministically (static allocation, pools, stack sizing, MPU).
- [ ] I can use real-time features of Linux and measure latency.
- [ ] I can explain WCET analysis difficulties, watchdogs and the main safety standards.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Always draw the timeline (Gantt chart) for a task set before trusting a formula.
2. Measure the worst case on the real target with a scope or logic analyser; do not trust averages.
3. Keep ISRs tiny and make every shared resource's priority protocol explicit.
4. Check every period and delay for drift: use absolute delays.
5. Read the kernel's source (FreeRTOS is under 10,000 lines) to see what each API call really costs.
