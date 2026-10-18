# Electromagnetics & Antennas: 14-Week Study Plan and Resources

Time budget: 10 to 12 hours per week (3 reading, 7 to 8 problems and simulation, 1 review with the app's quizzes). Electromagnetics rewards visualisation: use Python (numpy, matplotlib) to plot fields, patterns and reflection coefficients, and a free simulator for transmission lines and antennas. Optional hardware: a NanoVNA (about 50 dollars) measures impedance, VSWR and the Smith chart of real antennas and cables, and an RTL-SDR shows real signals.

## Textbooks
- David Cheng, *Field and Wave Electromagnetics*; Fawwaz Ulaby, *Fundamentals of Applied Electromagnetics* (clear, many examples).
- Matthew Sadiku, *Elements of Electromagnetics*.
- David Pozar, *Microwave Engineering* (transmission lines, waveguides, matching, Smith chart).
- Constantine Balanis, *Antenna Theory: Analysis and Design*; John Kraus and Ronald Marhefka, *Antennas for All Applications*.
- Henry Ott, *Electromagnetic Compatibility Engineering*; Howard Johnson and Martin Graham, *High-Speed Digital Design*.
- Richard Feynman, *The Feynman Lectures on Physics*, Volume II (physical intuition).

## Free courses and tools
- MIT OpenCourseWare 6.007 Electromagnetic Energy and 8.02; Walter Lewin's 8.02 lectures; Coursera/edX electromagnetics and antennas courses.
- Tools: Python (numpy, scipy, matplotlib, scikit-rf for network and Smith-chart work), Smith chart software (Smith V4.1, the Online Smith Chart Tool), openEMS and NEC2 (4nec2) for antennas, FEMM (low frequency fields), Falstad's EM simulations, QUCS and LTspice for transmission lines, a NanoVNA with NanoVNA-Saver.

## Week by week

**Week 1: Vector fields and Maxwell's equations (Ch 1.1).** Do: review div, curl and Stokes' theorem; Assignment 1 Q6 (boundary conditions).

**Week 2: Plane waves in lossless media (Ch 1.2).** Do: Assignment 1 Q1, Q5, Q7. Plot E and H of a travelling wave in Python.

**Week 3: Waves in conductors, skin effect (Ch 1.3).** Do: Assignment 1 Q2. Compute the skin depth of common metals versus frequency.

**Week 4: Reflection and refraction at boundaries (Ch 1.4).** Do: Assignment 1 Q3, Q4. Sit the **Class Test** at the end of the week (Chapters 1 to 3.1).

**Week 5: Transmission line theory (Ch 2.1).** Do: Assignment 2 Q1. Derive the telegrapher's equations; simulate a pulse on a mismatched line in LTspice.

**Week 6: Reflection, VSWR, input impedance (Ch 2.2).** Do: Assignment 2 Q2 to Q4. Measure the impedance of an antenna or a cable with a NanoVNA.

**Week 7: The Smith chart and matching (Ch 2.3).** Do: Assignment 2 Q5. Mock midterm: first half of the Final Exam. Design a single-stub match on the Smith chart and verify numerically.

**Week 8: Rectangular waveguides (Ch 3).** Do: Assignment 2 Q6, Q7. Plot the TE10 field pattern and dispersion diagram.

**Week 9: Radiation and antenna parameters (Ch 4.1, 4.2).** Do: Assignment 3 Q1, Q2. Compute the half-wave dipole pattern and directivity numerically.

**Week 10: Aperture antennas (Ch 4.3).** Do: Assignment 3 Q3. Compute dish gain and beamwidth for different diameters and frequencies.

**Week 11: Arrays and beam steering (Ch 5.1).** Do: Assignment 3 Q5. Plot array factors for different spacings and phase gradients; see grating lobes.

**Week 12: Friis, link budgets, EMC (Ch 5.2, 5.3).** Do: Assignment 3 Q4, Q6, Q7. Build a link budget spreadsheet for a Wi-Fi and a satellite link.

**Week 13: Project.** Design, simulate and (if possible) build and measure an antenna or a matching network (a dipole or a Yagi for FM or 433 MHz, a quarter-wave ground plane, a patch antenna at 2.4 GHz): compare simulation with VNA measurements and report the resonance, bandwidth, VSWR and gain estimates.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can state Maxwell's equations and boundary conditions and compute plane-wave quantities (wavelength, impedance, power density).
- [ ] I can compute skin depth and explain shielding and high-frequency resistance.
- [ ] I can compute reflection and transmission at boundaries, and Brewster and critical angles.
- [ ] I can analyse transmission lines: Z0, Gamma, VSWR, return loss, Z_in.
- [ ] I can design quarter-wave and single-stub matching and read a Smith chart.
- [ ] I can compute waveguide cutoff, guide wavelength, phase and group velocity.
- [ ] I can compute dipole and dish parameters (directivity, gain, beamwidth, effective aperture).
- [ ] I can explain arrays, beam steering and grating lobes.
- [ ] I can use the Friis equation and build a link budget; I know the main EMC practices.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Draw the picture first: fields, directions, boundaries, equivalent circuits.
2. Keep units straight, especially wavelength, dB and dBi; check results for orders of magnitude (a dipole is about 0.5 lambda long).
3. Verify analytic results numerically in Python (patterns, integrals, Smith chart points).
4. Use physical intuition: standing waves, resonance, why things radiate and why shields work.
5. Measure real things with a VNA or SDR whenever you can: the theory becomes concrete.
