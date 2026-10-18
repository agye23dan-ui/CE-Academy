# Communication Systems: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 6 to 7 problems and simulation, 1 review with the app's quizzes). Communications is learned by simulating: generate a signal, add noise, demodulate, count errors, and compare with theory. Use Python (numpy, scipy, matplotlib) or MATLAB/Octave; an inexpensive software-defined radio (RTL-SDR, about 30 dollars) lets you receive real FM, AM aviation and ADS-B signals.

## Textbooks
- Simon Haykin and Michael Moher, *Communication Systems*. The classic university text for analog and digital communications.
- John Proakis and Masoud Salehi, *Digital Communications*.
- Bernard Sklar, *Digital Communications: Fundamentals and Applications*. Practical and example-rich.
- Andrea Goldsmith, *Wireless Communications*; David Tse and Pramod Viswanath, *Fundamentals of Wireless Communication* (free online).
- Thomas Cover and Joy Thomas, *Elements of Information Theory*.
- Richard Lyons, *Understanding Digital Signal Processing* (for the DSP side).

## Free courses and tools
- MIT OpenCourseWare 6.02 Introduction to EECS II: Digital Communication Systems; Stanford EE 359; Coursera "Wireless Communications for Everybody".
- GNU Radio (graphical SDR toolkit), GNU Octave, the Python `commpy` and `scipy.signal` packages, gqrx and SDR# for the RTL-SDR; Pavan Kumar Vemuri and Dr. Mark Wickert's *Signals and Systems for Dummies* style scripts (scikit-dsp-comm).

## Week by week

**Week 1: Communication system model, noise, decibels (Ch 1).** Do: Assignment 1 Q1. Compute noise floors and practise dB arithmetic.

**Week 2: Amplitude modulation (Ch 2.1).** Do: Assignment 1 Q2, Q3, Q7(a). Generate and demodulate AM in Python; look at the spectrum.

**Week 3: Frequency modulation (Ch 2.2).** Do: Assignment 1 Q4, Q5, Q7(b, c). Verify the Bessel-function line amplitudes.

**Week 4: Sampling, quantisation, PCM (Ch 3).** Do: Assignment 1 Q6. Sit the **Class Test** at the end of the week (Chapters 1 to 4.1). Quantise an audio file to different bit depths and listen.

**Week 5: Digital modulation: BPSK, QPSK, QAM (Ch 4.1).** Do: Assignment 2 Q7. Plot constellations with noise.

**Week 6: Detection and BER in AWGN (Ch 4.2).** Do: Assignment 2 Q1 to Q3. Simulate BPSK, QPSK and 16-QAM and compare with theory.

**Week 7: Pulse shaping, ISI, Nyquist criteria (Ch 4.1).** Do: Assignment 2 Q4, Q6. Mock midterm: first half of the Final Exam. Draw an eye diagram with raised-cosine pulses.

**Week 8: Information theory and Shannon capacity (Ch 5).** Do: Assignment 2 Q5. Compute the capacity of real channels (ADSL, Wi-Fi).

**Week 9: Block codes (Ch 6.1).** Do: Assignment 3 Q1, Q2. Implement Hamming (7,4) encoding and syndrome decoding.

**Week 10: Convolutional codes and the Viterbi algorithm (Ch 6.2).** Do: Assignment 3 Q3. Implement the encoder and decoder and plot BER versus p.

**Week 11: OFDM (Ch 7.1).** Do: Assignment 3 Q4. Simulate OFDM through a multipath channel with and without the cyclic prefix.

**Week 12: Spread spectrum, CDMA, multiple access, link budgets (Ch 7.2, 8).** Do: Assignment 3 Q5 to Q7. Compute the link budget of a satellite or Wi-Fi link.

**Week 13: Project.** Build and simulate an end-to-end digital link (source, coder, modulator, channel, receiver) in Python or GNU Radio, or receive a real signal with an SDR (FM broadcast, ADS-B, weather satellite images); report BER curves or decoded results.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can compute noise power, SNR and link budgets in decibels.
- [ ] I can analyse AM and FM signals: spectra, bandwidth, power and modulation index.
- [ ] I can compute PCM bit rates and SQNR.
- [ ] I can compute the BER of BPSK, QPSK and QAM in AWGN and explain Gray coding, matched filtering and the Nyquist criterion.
- [ ] I can compute channel capacity and relate spectral efficiency to required SNR.
- [ ] I can encode and decode Hamming codes and explain convolutional coding and Viterbi decoding.
- [ ] I can explain OFDM, the cyclic prefix and the 802.11 numbers.
- [ ] I can explain spread spectrum, processing gain and CDMA.
- [ ] I can compare multiple-access methods and explain cellular reuse.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Always simulate: a Monte Carlo BER curve next to the theoretical curve catches algebra mistakes.
2. Keep units straight: dB, dBm, linear ratios; Eb/N0 versus SNR; bit versus symbol.
3. Sketch spectra for every modulation: where are the carrier, sidebands, and the occupied bandwidth?
4. Use the bandwidth/power/complexity trade-off as the lens for every scheme.
5. Listen to and look at real signals with an SDR: it makes the theory concrete.
