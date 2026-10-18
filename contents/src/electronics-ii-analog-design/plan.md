# Electronics II (Analog Design): 14-Week Study Plan and Resources

Time budget: 10 to 12 hours per week (3 reading, 6 to 7 design problems and simulation, 1 review with the app's quizzes). Analog design is learned by designing, simulating and measuring. Install LTspice (or ngspice) and build at least one real circuit each week from a handful of op-amps (for example the TL072, LM358, OP07), a 555 timer, resistors, capacitors, transistors and a breadboard.

## Textbooks
- Adel Sedra and Kenneth Smith, *Microelectronic Circuits* (the feedback, filter, oscillator and output-stage chapters).
- Paul Horowitz and Winfield Hill, *The Art of Electronics*. The practical reference.
- Sergio Franco, *Design with Operational Amplifiers and Analog Integrated Circuits*.
- Behzad Razavi, *Fundamentals of Microelectronics* and *Design of Analog CMOS Integrated Circuits* (later).
- Walt Jung (ed.), *Op Amp Applications Handbook* (free from Analog Devices); Texas Instruments' *Op Amps for Everyone*.

## Free courses and tools
- MIT OpenCourseWare 6.301/6.071; Analog Devices' ADALM2000 active-learning labs; TI Precision Labs (free videos).
- LTspice, ngspice, Falstad's circuit simulator; TI's WEBENCH and Analog Devices' filter design tools for active filters and regulators.
- Application notes from TI, Analog Devices and Maxim on filters, stability and layout.

## Week by week

**Week 1: Feedback fundamentals (Ch 1.1, 1.2).** Do: Assignment 1 Q1. Verify the gain-bandwidth trade-off in a simulator.

**Week 2: Op-amp circuits and real op-amp limits (Ch 2).** Do: Assignment 1 Q2, Q3. Measure the slew rate of an op-amp on the bench.

**Week 3: Instrumentation amplifiers, integrators, differentiators (Ch 2.2).** Do: Assignment 1 Q4, Q5.

**Week 4: Comparators, Schmitt triggers, transimpedance amplifiers (Ch 2.2).** Do: Assignment 1 Q6, Q7. Sit the **Class Test** at the end of the week.

**Week 5: Active filters I: first and second order, Sallen-Key (Ch 3).** Do: Assignment 2 Q1. Build and measure a 1 kHz Butterworth filter.

**Week 6: Active filters II: higher order, band-pass, filter types (Ch 3).** Do: Assignment 2 Q2.

**Week 7: Oscillators: Wien-bridge, RC, LC, crystal (Ch 5.1).** Do: Assignment 2 Q3, Q5. Mock midterm: first half of the Final Exam.

**Week 8: The 555 timer and relaxation oscillators (Ch 5.2).** Do: Assignment 2 Q4, Q6.

**Week 9: Stability, phase margin and compensation (Ch 1.3).** Do: Assignment 3 Q1, Q2. Plot the loop gain and phase margin with an AC simulation.

**Week 10: Output stages and power amplifiers (Ch 6.1).** Do: Assignment 3 Q3. Simulate class B crossover distortion and its cure.

**Week 11: Linear and switching regulators (Ch 6.2).** Do: Assignment 3 Q4, Q5. Build a buck converter module and measure its efficiency.

**Week 12: Differential pairs, current mirrors, op-amp internals (Ch 4).** Do: Assignment 3 Q6.

**Week 13: Noise, layout and a design project (Ch 7).** Do: Assignment 3 Q7. Design, simulate and build a small analog front end (sensor amplifier plus filter plus ADC driver).

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can analyse feedback amplifiers: gain, desensitivity, bandwidth, input/output resistance.
- [ ] I can design and analyse op-amp circuits and account for offset, bias, GBW and slew rate.
- [ ] I can design second-order active filters (Sallen-Key) to a specification.
- [ ] I can design Wien-bridge, LC and 555-based oscillators and timers.
- [ ] I can determine the stability of a feedback amplifier from the phase margin and compensate it.
- [ ] I can analyse class A, B and AB output stages (efficiency, dissipation, distortion).
- [ ] I can design linear and buck regulators with thermal and ripple calculations.
- [ ] I can explain differential pairs and current mirrors and estimate their gain and errors.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. For every design, calculate by hand, then simulate (including tolerances), then build if you can.
2. Always check the op-amp's datasheet limits (GBW, slew rate, supply, output swing, input common-mode range).
3. Ask "what could go wrong?" (saturation, oscillation, thermal limits) before finishing a design.
4. Keep a catalogue of building blocks with their gain formulas and input/output resistances.
5. Read application notes: practical analog design lives in them.
