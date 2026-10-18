# Electronics I (Semiconductor Devices): 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 5 to 6 problems and simulation, 1 review with the app's quizzes). Electronics is learned by **building and measuring**: buy or borrow a breadboard, a multimeter, a few resistors, diodes, an NPN transistor (2N3904) and an N-MOSFET (2N7000 or BS170), and install LTspice or ngspice. For every circuit in the notes: calculate by hand, simulate, and (if you can) build it.

## Textbooks
- Adel Sedra and Kenneth Smith (with Tony Chan Carusone and Vincent Gaudet), *Microelectronic Circuits*. The standard text.
- Behzad Razavi, *Fundamentals of Microelectronics*. Clear and intuition-driven.
- Paul Horowitz and Winfield Hill, *The Art of Electronics*. The practical engineer's reference.
- Neamen, *Microelectronics: Circuit Analysis and Design*; Millman and Halkias for device physics.
- Ben Streetman and Sanjay Banerjee, *Solid State Electronic Devices* (for the physics of the junction and the MOS structure).

## Free courses and tools
- MIT OpenCourseWare 6.002 Circuits and Electronics and 6.012 Microelectronic Devices and Circuits.
- Prof. Jim Hall's videos and "Electronics Tutorials" (electronics-tutorials.ws); All About Circuits Volume III.
- LTspice (free), ngspice, Falstad's circuit simulator (browser), KiCad for schematics.
- Datasheets from manufacturers (practise reading 1N4148, 1N4007, 2N3904, 2N7000, LM7805).

## Week by week

**Week 1: Semiconductor physics (Ch 1.1).** Do: Assignment 1 Q1. Checkpoint: explain doping, majority and minority carriers, and the mass-action law.

**Week 2: The pn junction and the diode equation (Ch 1.2).** Do: Assignment 1 Q2. Plot the diode I-V curve and its temperature dependence in a simulator.

**Week 3: Diode models and circuits (Ch 2.1).** Do: Assignment 1 Q3. Solve the same circuit with the exponential and constant-drop models and compare.

**Week 4: Rectifiers, regulators, special diodes (Ch 2.2, 2.3).** Do: Assignment 1 Q4 to Q6. Sit the **Class Test** at the end of the week.

**Week 5: BJT operation and models (Ch 3.1).** Do: Assignment 2 Q1. Measure a 2N3904's β with a multimeter.

**Week 6: BJT DC bias and the switch (Ch 3.2).** Do: Assignment 2 Q2 to Q5. Build a fixed-bias and a voltage-divider-bias circuit and compare their sensitivity.

**Week 7: BJT small-signal amplifiers (Ch 3.3).** Do: Assignment 2 Q6, Q7. Mock midterm: first half of the Final Exam.

**Week 8: MOSFET characteristics (Ch 4.1).** Do: Assignment 3 Q1. Plot I_D against V_DS and V_GS for an NMOS in a simulator.

**Week 9: MOSFET bias and amplifiers (Ch 4.2, 4.3).** Do: Assignment 3 Q2, Q3.

**Week 10: CMOS inverter and logic, power (Ch 4.4).** Do: Assignment 3 Q4. Simulate the voltage transfer characteristic and the transient delay.

**Week 11: Frequency response, Miller effect (Ch 5).** Do: Assignment 3 Q5. Obtain Bode plots from an AC simulation.

**Week 12: Differential pairs, op-amp imperfections, current mirrors (Ch 4.2, 5).** Do: Assignment 3 Q6.

**Week 13: Thermal design, datasheets, design choices (Ch 6).** Do: Assignment 3 Q7, Q8. Design a small amplifier from a specification and verify it in simulation.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can explain carriers, doping, the mass-action law, and the pn junction under bias.
- [ ] I can solve diode circuits with the exponential, constant-drop and small-signal models.
- [ ] I can design and analyse rectifiers, ripple filters and Zener regulators.
- [ ] I can find the Q-point of BJT and MOSFET circuits and check the region of operation.
- [ ] I can use the BJT as a switch and size the base resistor.
- [ ] I can derive g_m, r_π, r_o and compute gain, R_in and R_out of CE, CS, CC and CD stages.
- [ ] I can explain CMOS inverter operation, noise margins and dynamic power.
- [ ] I can find cut-off frequencies from coupling capacitors and the Miller effect.
- [ ] I can read a datasheet and do a basic thermal calculation.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Always state the assumed region of operation and verify it after solving.
2. Separate the DC (bias) analysis from the AC (small-signal) analysis, and draw both circuits.
3. Use round numbers and estimates first (I_C ≈ (V_th - 0.7)/R_E) and verify with the full equations.
4. Simulate every design and compare the simulation with your hand calculation; explain any difference.
5. Keep a table of the formulas for g_m, r_π, r_o, gains and input/output resistances for each configuration.
