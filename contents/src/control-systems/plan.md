# Control Systems: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 6 to 7 problems and simulation, 1 review with the app's quizzes). Control is a design discipline: you analyse a model, choose a controller, and check the result by simulation. Install Python with the `control` package (plus numpy, scipy and matplotlib), or MATLAB/Octave with the Control Toolbox. A DC motor kit, an Arduino with a small motor and encoder, or a simulated pendulum gives you something real to control.

## Textbooks
- Norman Nise, *Control Systems Engineering*. Clear worked examples; the closest match to this course.
- Katsuhiko Ogata, *Modern Control Engineering*.
- Gene Franklin, J. David Powell and Abbas Emami-Naeini, *Feedback Control of Dynamic Systems*.
- Richard Dorf and Robert Bishop, *Modern Control Systems*.
- Karl Astrom and Richard Murray, *Feedback Systems: An Introduction for Scientists and Engineers* (free online).
- Brian Douglas's YouTube series on control theory (free, intuitive).

## Free courses and tools
- MIT OpenCourseWare 6.003 and 2.14 Analysis and Design of Feedback Control Systems; Caltech CDS 110 (Murray); Stanford EE 363.
- Tools: python-control, scipy.signal, Octave, Simulink/Xcos, PID autotuning in Arduino libraries; the Control Tutorials for MATLAB and Simulink (University of Michigan, CTMS) website, free with worked examples (cruise control, motor speed and position, inverted pendulum).

## Week by week

**Week 1: Introduction, modelling, transfer functions (Ch 1).** Do: Assignment 1 Q1 to Q2. Build transfer functions of an RLC circuit and a mass-spring-damper in Python and plot the step responses.

**Week 2: Block diagrams and first/second-order responses (Ch 1.3, 2).** Do: Assignment 1 Q3, Q4. Verify the overshoot, peak time and settling-time formulas against simulation.

**Week 3: Specifications and pole locations (Ch 2.2).** Do: Assignment 1 Q5, Q6. Draw the allowed region of the s-plane for given overshoot and settling time.

**Week 4: Stability and Routh-Hurwitz (Ch 3).** Do: Assignment 1 Q7. Sit the **Class Test** at the end of the week (Chapters 1 to 4).

**Week 5: Steady-state error and system type (Ch 4).** Do: Assignment 2 Q1. Simulate type 0, 1 and 2 loops with step, ramp and parabola inputs and read the errors.

**Week 6: Root locus I: rules and sketching (Ch 5).** Do: Assignment 2 Q2, Q3. Use `ct.root_locus` to check your hand sketches.

**Week 7: Root locus II: design with gain; Bode plots (Ch 5, 6.1).** Do: Assignment 2 Q4. Mock midterm: first half of the Final Exam.

**Week 8: Gain and phase margins, Nyquist (Ch 6.2, 6.3).** Do: Assignment 2 Q5 to Q7. Plot Bode and Nyquist diagrams and measure the margins.

**Week 9: Lead and lag compensation (Ch 7.1).** Do: Assignment 3 Q1. Design a lead compensator and compare step responses before and after.

**Week 10: PID control and tuning (Ch 7.2).** Do: Assignment 3 Q2, Q3. Implement a PID loop for a simulated motor; add anti-windup and a derivative filter.

**Week 11: State-space models, controllability and observability (Ch 8.1, 8.2).** Do: Assignment 3 Q4. Convert between transfer functions and state-space.

**Week 12: State feedback, observers (Ch 8.3).** Do: Assignment 3 Q5, Q6. Design and simulate a full-state-feedback controller plus observer for the mass-spring-damper and an inverted pendulum.

**Week 13: Digital control and the project (Ch 9).** Do: Assignment 3 Q7. Project: model, design and simulate (or build) a controller for a real or simulated system (motor speed, temperature, ball-and-beam, drone altitude) with a report comparing at least two designs.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can derive transfer functions of simple electrical and mechanical systems and reduce block diagrams.
- [ ] I can predict overshoot, peak time and settling time of second-order systems and translate specifications into pole regions.
- [ ] I can use Routh-Hurwitz to find stability ranges.
- [ ] I can compute steady-state errors from the system type and error constants.
- [ ] I can sketch and use root loci, including breakaway points and imaginary-axis crossings.
- [ ] I can draw Bode plots and compute gain and phase margins; I understand the Nyquist criterion.
- [ ] I can design lead and lag compensators.
- [ ] I can tune a PID controller (Ziegler-Nichols and manual) and handle windup and derivative filtering.
- [ ] I can analyse and design state feedback and observers (pole placement).
- [ ] I can discretise a controller and judge the choice of sampling period.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Always simulate: confirm every hand calculation with a step response, a Bode plot or a root locus.
2. Sketch before computing: root locus rules, Bode asymptotes and pole-region pictures catch mistakes.
3. State the trade-off of every design choice: gain versus stability, speed versus noise, accuracy versus margin.
4. Check robustness: perturb plant parameters by 20 to 30 percent and watch the margins and responses.
5. Learn the physical meaning of each term (P, I, D, poles, zeros), not only the formulas.
