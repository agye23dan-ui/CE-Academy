# Digital Signal Processing: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 6 to 7 problems and coding, 1 review with the app's quizzes). DSP is learned by processing real signals: record audio, filter it, look at its spectrum, and listen to the result. Set up Python with numpy, scipy, matplotlib and Jupyter, and an audio editor such as Audacity. A cheap microcontroller board or a phone gives real signals to practise on.

## Textbooks
- Alan Oppenheim and Ronald Schafer, *Discrete-Time Signal Processing*. The classic reference.
- John Proakis and Dimitris Manolakis, *Digital Signal Processing: Principles, Algorithms and Applications*.
- Sanjit Mitra, *Digital Signal Processing: A Computer-Based Approach*.
- Steven Smith, *The Scientist and Engineer's Guide to Digital Signal Processing* (free online, very readable).
- Richard Lyons, *Understanding Digital Signal Processing*. Intuitive explanations.
- Simon Haykin, *Adaptive Filter Theory* (for the adaptive-filter chapter).

## Free courses and tools
- MIT OpenCourseWare 6.341 Discrete-Time Signal Processing and 6.003; Stanford EE 264 / the Julius O. Smith "Mathematics of the DFT" online books (free); Coursera "Digital Signal Processing" (EPFL).
- Python: `numpy.fft`, `scipy.signal` (firwin, remez, butter, cheby1, ellip, freqz, sosfilt, resample_poly, spectrogram), `matplotlib`; also GNU Octave and MATLAB.
- Real-time practice: PyAudio or sounddevice for live audio, a Raspberry Pi or Arduino/ESP32 for embedded filters, CMSIS-DSP for ARM Cortex-M fixed-point code.

## Week by week

**Week 1: Sampling, aliasing, quantisation (Ch 1).** Do: Assignment 1 Q1 to Q3. Record a tone, resample it at different rates and listen to the aliases.

**Week 2: Discrete-time systems, convolution, difference equations (Ch 2.1).** Do: Assignment 1 Q4. Implement convolution without `np.convolve` and compare.

**Week 3: The z-transform, poles and zeros, stability (Ch 2.2).** Do: Assignment 1 Q5. Plot pole-zero diagrams with `scipy.signal.zpk2tf` and `freqz`.

**Week 4: Frequency response and simple filters (Ch 2.3).** Do: Assignment 1 Q6, Q7. Sit the **Class Test** at the end of the week (Chapters 1 to 3.1). Build the 50 Hz notch and apply it to a recording with hum.

**Week 5: The DFT (Ch 3.1).** Do: Assignment 2 Q1 to Q3. Write a DFT from the definition and compare with `np.fft.fft`.

**Week 6: Leakage and windows, spectrum analysis (Ch 3.2).** Do: Assignment 2 Q4, Q7. Compute spectra of a two-tone signal with different windows.

**Week 7: The FFT and fast convolution (Ch 3.3).** Do: Assignment 2 Q5, Q6. Mock midterm: first half of the Final Exam. Time `np.fft.fft` for N = 2^10 to 2^20.

**Week 8: FIR filter design (Ch 4).** Do: Assignment 3 Q1, Q2. Design filters with `firwin` and `remez`; compare orders and responses.

**Week 9: IIR filter design (Ch 5).** Do: Assignment 3 Q3, Q4. Design Butterworth, Chebyshev and elliptic filters for one specification and compare orders, phase and group delay.

**Week 10: Multirate processing (Ch 6).** Do: Assignment 3 Q5. Convert an audio file from 44.1 to 48 kHz with `resample_poly`; implement your own polyphase decimator.

**Week 11: Adaptive filters (Ch 7).** Do: Assignment 3 Q6. Implement LMS and NLMS for system identification and for echo cancellation on a synthetic echo.

**Week 12: Implementation: fixed point and real time (Ch 8).** Do: Assignment 3 Q7. Quantise a filter's coefficients and study the effect on its response; implement a biquad cascade in C with Q15 arithmetic.

**Week 13: Project.** Build a small application: a guitar tuner, a noise-reduction filter, a voice effect, a spectrum analyser or an ECG/EEG filter; report with design choices and measurements.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can find aliases, choose sampling rates (including bandpass sampling) and compute quantisation SNR.
- [ ] I can compute convolutions, difference-equation responses and frequency responses.
- [ ] I can use poles and zeros to judge stability and shape a frequency response (notch, DC blocker).
- [ ] I can compute and interpret DFTs, including leakage, resolution and windows.
- [ ] I can explain the FFT and estimate its cost and the cost of fast convolution.
- [ ] I can design FIR filters with windows, Kaiser and equiripple methods and choose the number of taps.
- [ ] I can design IIR filters with the bilinear transform, including prewarping, and compare filter families.
- [ ] I can design multirate systems (decimation, interpolation, rational rates, polyphase).
- [ ] I can implement and analyse an LMS adaptive filter.
- [ ] I can implement filters in fixed point and judge overflow and coefficient-quantisation effects.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Plot everything: time signal, spectrum (dB), pole-zero diagram, frequency response, group delay.
2. Write each algorithm from scratch once (DFT, FFT, convolution, LMS, a biquad), then use the library.
3. Always check a design against its specification numerically (ripple, attenuation, band edges).
4. Listen to your processing results; your ears catch artifacts that plots hide.
5. Keep units straight: Hz, rad/sample, rad/s, bins; convert explicitly.
