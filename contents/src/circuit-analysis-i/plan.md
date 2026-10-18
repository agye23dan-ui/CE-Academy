# Circuit Analysis I: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 5 to 6 problems, 1 review with the app's quizzes). Circuit analysis is a problem-solving skill: aim for 10 or more complete circuits per week, solved by hand and then checked in a simulator. Install a free simulator now: LTspice, ngspice (with KiCad or Qucs-S) or the browser-based Falstad circuit simulator.

## Textbooks
- James Nilsson and Susan Riedel, *Electric Circuits* (Pearson). The standard text.
- Charles Alexander and Matthew Sadiku, *Fundamentals of Electric Circuits*. Many worked examples.
- Agarwal and Lang, *Foundations of Analog and Digital Electronic Circuits*.
- Paul Horowitz and Winfield Hill, *The Art of Electronics* (read for intuition; the practical reference for later courses).
- Ulaby and Maharbiz, *Circuits* (free sample chapters online) for an alternative explanation of phasors.

## Free courses
- MIT OpenCourseWare 6.002 Circuits and Electronics and 6.003 Signals and Systems (for later).
- Khan Academy Electrical Engineering; The Organic Chemistry Tutor and Eugene Khutoryansky videos for visual explanations.
- All About Circuits (free textbook-style site) and the EEVblog fundamentals series.

## Week by week

**Week 1: Basics: charge, current, voltage, power, sources, Ohm's law (Ch 1.1, 1.2).** Do: Assignment 1 Q1. Checkpoint: determine whether an element absorbs or delivers power.

**Week 2: Kirchhoff's laws, dividers, series/parallel reduction (Ch 1.3).** Practise reducing 20 resistor networks. Habit: always do a power-balance check.

**Week 3: Node-voltage method (Ch 2.1).** Do: Assignment 1 Q2. Include voltage sources (supernodes).

**Week 4: Mesh-current method and dependent sources (Ch 2.2).** Do: Assignment 1 Q3, Q5. Sit the **Class Test** at the end of the week.

**Week 5: Linearity, superposition, source transformation, Thevenin and Norton, maximum power (Ch 2.3, 2.4).** Do: Assignment 1 Q4, Q7.

**Week 6: Operational amplifiers (Ch 3).** Do: Assignment 1 Q6. Build an inverting amplifier in a simulator and observe saturation.

**Week 7: Capacitors and inductors (Ch 4.1).** Do: Assignment 2 Q1, Q7. Mock midterm: first half of the Final Exam.

**Week 8: First-order transients (Ch 4.2).** Do: Assignment 2 Q2 to Q5, Q8. Simulate each with a transient analysis and compare with your equations.

**Week 9: Second-order circuits (Ch 4.3).** Do: Assignment 2 Q6. Vary R in a simulator to see overdamped, critical and underdamped step responses.

**Week 10: Phasors, impedance and AC analysis (Ch 5.1).** Do: Assignment 3 Q1 to Q3. Practise complex arithmetic by hand and with a calculator.

**Week 11: AC power and power-factor correction (Ch 5.2).** Do: Assignment 3 Q4, Q7.

**Week 12: Frequency response, resonance and filters (Ch 5.3).** Do: Assignment 3 Q5, Q6. Plot Bode diagrams with Python (scipy.signal) and in a simulator.

**Week 13: Three-phase systems and transformers (Ch 5.4).** Do: Assignment 3 Q8, Q9.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can analyse resistive circuits with node-voltage and mesh-current methods, including supernodes and dependent sources.
- [ ] I can find Thevenin and Norton equivalents and apply maximum power transfer.
- [ ] I can analyse ideal op-amp circuits (inverting, non-inverting, summing, difference, integrator).
- [ ] I can solve first-order RC and RL circuits using initial value, final value and time constant.
- [ ] I can solve series and parallel RLC step responses and classify the damping.
- [ ] I can analyse AC circuits with phasors and impedances.
- [ ] I can compute real, reactive, apparent and complex power and correct the power factor.
- [ ] I can find resonance, Q and the frequency response of RC and RLC circuits.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Label everything (nodes, currents, polarities) before writing a single equation.
2. Always verify with at least one independent check: power balance, KCL at another node, or a simulator.
3. Keep a list of standard results (divider formulas, time-constant formulas, phasor impedances).
4. Estimate before computing: guess the order of magnitude and sign of each answer.
5. Redo each assignment problem a week later with the solution covered.
