# Signals and Systems: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 5 to 6 problems, 1 review with the app's quizzes). Signals and systems rewards working in two ways at once: pencil-and-paper derivations and numerical experiments. For every transform pair you learn, plot it with Python (NumPy, SciPy, Matplotlib) or MATLAB/Octave and check it.

## Textbooks
- Alan Oppenheim, Alan Willsky and Hamid Nawab, *Signals and Systems*. The classic text.
- Simon Haykin and Barry Van Veen, *Signals and Systems*; Mitra, *Digital Signal Processing*.
- Edward Lee and Pravin Varaiya, *Structure and Interpretation of Signals and Systems*.
- B. P. Lathi and Roger Green, *Linear Systems and Signals*; Steven Smith, *The Scientist and Engineer's Guide to Digital Signal Processing* (free online).
- Karl Åström and Richard Murray, *Feedback Systems* (free) for the control view.

## Free courses
- MIT OpenCourseWare 6.003 Signals and Systems (lectures, recitations, problem sets).
- Brian McFee and others: Think DSP (Allen Downey, free book with Python code).
- 3Blue1Brown's video on the Fourier transform; Khan Academy: Differential equations (Laplace).
- Visualisations: Jupyter notebooks for convolution, aliasing and spectrograms.

## Week by week

**Week 1: Signals and elementary signals (Ch 1).** Do: Assignment 1 Q1, Q2. Plot ten signals and their transformations.

**Week 2: System properties (Ch 2).** Do: Assignment 1 Q3. Build a table of test cases for linearity and time invariance.

**Week 3: Convolution and LTI systems (Ch 3).** Do: Assignment 1 Q4 to Q6. Check with np.convolve.

**Week 4: Differential and difference equations; Fourier series (Ch 3.3, 4).** Do: Assignment 2 Q1. Sit the **Class Test** at the end of the week.

**Week 5: The Fourier transform and its properties (Ch 5.1 to 5.3).** Do: Assignment 2 Q2.

**Week 6: Frequency response and filtering (Ch 5.4).** Do: Assignment 2 Q3. Plot the Bode plot of an RC filter.

**Week 7: Sampling, aliasing, quantisation (Ch 6).** Do: Assignment 2 Q4, Q5. Record a tone and downsample it to hear aliasing. Mock midterm: first half of the Final Exam.

**Week 8: The Laplace transform (Ch 7.1).** Do: Assignment 3 Q1.

**Week 9: Transfer functions, stability, poles and zeros (Ch 7.2).** Do: Assignment 3 Q2, Q3.

**Week 10: Circuit and control applications of Laplace (Ch 7.2).** Do: Assignment 3 Q4.

**Week 11: Discrete-time systems and the z-transform (Ch 8).** Do: Assignment 3 Q5.

**Week 12: The DFT and FFT (Ch 9).** Do: Assignment 3 Q6. Compute spectra of sine sums with and without windows.

**Week 13: Applications and design (Ch 10).** Do: Assignment 3 Q7. Design and test a small filter with scipy.signal.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula and transform tables).

## Milestone checklist
- [ ] I can classify signals and systems (linear, time-invariant, causal, stable, memoryless).
- [ ] I can compute convolutions in CT and DT and find impulse and step responses.
- [ ] I can compute Fourier series coefficients and use Parseval's theorem.
- [ ] I can use Fourier transform pairs and properties, and interpret spectra.
- [ ] I can find the frequency response of a system and the output for sinusoidal inputs.
- [ ] I can apply sampling theory: Nyquist rate, aliasing, quantisation and reconstruction.
- [ ] I can use the Laplace transform for circuits and transfer functions, and judge stability from poles.
- [ ] I can use the z-transform and the DFT/FFT for discrete systems.
- [ ] I scored at least 70 percent on the Final Exam with a transform table.

## Study habits that work
1. Always sketch the signals before computing; most errors come from wrong limits in convolution integrals.
2. Learn the dozen basic transform pairs and the dozen properties; derive the rest.
3. Check every analytical result numerically on a computer.
4. Interpret results physically: what does the pole location, the cut-off frequency or the delay mean for a real system?
5. Keep a summary table of CT versus DT tools (Fourier series, FT, Laplace; DTFT, DFT, z).
