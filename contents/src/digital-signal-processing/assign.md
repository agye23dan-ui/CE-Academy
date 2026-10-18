# Digital Signal Processing: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. Every number in the solutions was computed with numpy and scipy; reproduce them in Python (numpy, scipy.signal, matplotlib) and plot the responses.

# Assignment 1: Sampling and Discrete-Time Systems (Chapters 1 and 2)

**Q1. Aliasing.** At what frequency does each tone appear after sampling? (a) 1 kHz at fs = 1.5 kHz [2] (b) 7 kHz at 8 kHz [2] (c) 5 kHz at 8 kHz [2] (d) 30 kHz at 44.1 kHz [2] (e) 3 kHz at 2 kHz [2]

**Q2. Bandpass sampling.** A signal occupies 20 to 25 kHz. (a) Find all valid sampling-rate ranges for k = 1 to 5 [5]. (b) Where does a 22.5 kHz tone appear when sampled at 12.5 kHz? [3] (c) Why is an analog bandpass filter still needed? [2]

**Q3. Quantisation.** (a) SNR of an ideal N-bit converter for N = 8, 12, 16 and 24 [3] (b) The number of bits for 90 dB [2] (c) A 12-bit ADC covers a 2 V range: the LSB size and the rms quantisation noise (q/sqrt 12) [3] (d) The SNR gain of 4 times oversampling [2]

**Q4. Convolution and difference equations.** (a) Convolve x = [1, 2, 3] with h = [1, 1, 1] [3] (b) For y[n] = 0.5 y[n - 1] + x[n] find the impulse response and the first five values of the step response, and the final value [4] (c) Is the system stable? FIR or IIR? [3]

**Q5. Poles and stability.** (a) Find the poles of H(z) = 1/(1 - 1.2 z^-1 + 0.32 z^-2), the stability and the first 8 impulse-response values [5] (b) The same for 1/(1 - 1.5 z^-1 + 0.9 z^-2) [3] (c) State the stability criterion [2]

**Q6. Frequency response.** (a) For y[n] = 0.5 y[n - 1] + x[n] find |H| and the phase at w = 0, pi/2 and pi [4] (b) The 5-point moving average: |H(pi/5)| and the null frequencies at fs = 1000 Hz [3] (c) The DC blocker H(z) = (1 - z^-1)/(1 - 0.9 z^-1): gains at DC, pi/2 and pi [3]

**Q7. Notch filter.** Design a notch to remove 50 Hz hum at fs = 1000 Hz with pole radius 0.95. (a) Give the zeros, poles and H(z) [4] (b) The gain at 50 Hz, DC and fs/2 [3] (c) The -3 dB bandwidth and the effect of r closer to 1 [3]

## Solutions to Assignment 1

**Q1.** Rule: the alias is |f - k fs| for the integer k nearest f/fs (the result lies between 0 and fs/2).
(a) Step 1: 1000/1500 = 0.67, nearest k = 1. Step 2: |1000 - 1500| = **500 Hz**.
(b) Step 1: 7000/8000 = 0.875, k = 1. Step 2: |7000 - 8000| = **1 kHz**.
(c) Step 1: 5000/8000 = 0.625, k = 1. Step 2: |5000 - 8000| = **3 kHz**.
(d) Step 1: 30,000/44,100 = 0.68, k = 1. Step 2: |30,000 - 44,100| = **14.1 kHz**.
(e) Step 1: 3000/2000 = 1.5; the nearest k = 2 (or 1). Step 2: |3000 - 2 × 2000| = **1 kHz** (the same as |3000 - 2000| = 1 kHz).

**Q2.** (a) Step 1: the valid ranges are 2 fH/k ≤ fs ≤ 2 fL/(k - 1) with fL = 20 kHz and fH = 25 kHz (B = 5 kHz, so k ≤ ⌊fH/B⌋ = 5).
Step 2: k = 1: fs ≥ 50 kHz.
Step 3: k = 2: 2 × 25/2 = 25 to 2 × 20/1 = 40 kHz.
Step 4: k = 3: 50/3 = 16.67 to 40/2 = 20 kHz.
Step 5: k = 4: 50/4 = **12.5** to 40/3 = **13.33 kHz**.
Step 6: k = 5: 50/5 = 10 to 40/4 = 10: exactly **10 kHz**.
(b) 22.5 kHz at fs = 12.5 kHz: 22.5 - 2 × 12.5 = **-2.5 kHz**, which appears at **2.5 kHz**.
(c) Everything outside the 20 to 25 kHz band (noise, other signals) also folds into the baseband; the analog bandpass filter before the ADC removes it.
(b) 22.5 - 2 × 12.5 = **2.5 kHz**.
(c) Everything outside the 20 to 25 kHz band (noise, other signals) also folds into the baseband; the analog bandpass filter before the ADC removes it.

**Q3.** (a) SNR = 6.02 N + 1.76 dB:
Step 1: N = 8: 48.16 + 1.76 = **49.9 dB**.
Step 2: N = 12: 72.24 + 1.76 = **74.0 dB**.
Step 3: N = 16: 96.32 + 1.76 = **98.1 dB**.
Step 4: N = 24: 144.48 + 1.76 = **146.2 dB**.
(b) N = (90 - 1.76)/6.02 = 14.66, so **15 bits**.
(c) Step 1: LSB q = 2 V/2^12 = 2/4096 = **0.488 mV**.
Step 2: rms noise = q/sqrt 12 = 0.488/3.464 = **0.141 mV**.
(d) Oversampling by 4 spreads the noise over a band 4 times wider; filtering removes 3/4 of it: 10 log10 4 = **6.02 dB** (one extra bit) if the noise is white and removed outside the signal band by digital filtering.

**Q4.** (a) Convolution y[n] = Σ x[k] h[n - k] with x = [1, 2, 3], h = [1, 1, 1] (length 3 + 3 - 1 = 5):
y[0] = 1; y[1] = 1 + 2 = 3; y[2] = 1 + 2 + 3 = 6; y[3] = 2 + 3 = 5; y[4] = 3. Result **[1, 3, 6, 5, 3]**.
(b) Step 1: impulse response of y[n] = 0.5 y[n - 1] + x[n]: h[n] = 0.5^n for n ≥ 0: 1, 0.5, 0.25, 0.125, 0.0625, ...
Step 2: the step response is the running sum of h: y[n] = 2 (1 - 0.5^{n+1}): 1, 1 + 0.5 = 1.5, 1.75, 1.875, 1.9375 (**1, 1.5, 1.75, 1.875, 1.9375**).
Step 3: final value = H(1) = 1/(1 - 0.5) = **2**.
(c) The pole is at 0.5 (inside the unit circle) so the system is **stable**; the impulse response is infinite: **IIR**.

**Q5.** (a) Step 1: poles: z² - 1.2 z + 0.32 = 0 gives z = (1.2 ± sqrt(1.44 - 1.28))/2 = (1.2 ± 0.4)/2 = **0.8 and 0.4**: both inside the unit circle, so stable.
Step 2: recursion h[n] = 1.2 h[n - 1] - 0.32 h[n - 2] + δ[n]: h[0] = 1; h[1] = 1.2; h[2] = 1.2 × 1.2 - 0.32 × 1 = 1.12; h[3] = 1.2 × 1.12 - 0.32 × 1.2 = 0.96; h[4] = 1.152 - 0.3584 = 0.7936; h[5] = 0.9523 - 0.3072 = 0.6451; h[6] = 0.7741 - 0.2540 = 0.5202; h[7] = 0.6242 - 0.2064 = 0.4178.
Values **1, 1.2, 1.12, 0.96, 0.7936, 0.6451, 0.5202, 0.4178**.
(b) Step 1: z² - 1.5 z + 0.9 = 0 gives z = 0.75 ± j sqrt(0.9 - 0.5625) = 0.75 ± 0.581j.
Step 2: magnitude sqrt(0.5625 + 0.3375) = sqrt 0.9 = **0.949**: stable but lightly damped.
Step 3: the oscillation has period about 2π/arctan(0.581/0.75) = 2π/0.659 = 9.5 samples.
(c) A causal LTI system is BIBO stable if and only if all poles lie strictly inside the unit circle, which is equivalent to an absolutely summable impulse response.
(b) z^2 - 1.5 z + 0.9 = 0 has roots 0.75 ± 0.581j, magnitude sqrt(0.5625 + 0.3375) = **0.949**: stable but lightly damped (decaying oscillation with period about 2π/arctan(0.581/0.75) = 2π/0.659 = 9.5 samples).
(c) A causal LTI system is BIBO stable if and only if all poles lie strictly inside the unit circle, which is equivalent to an absolutely summable impulse response.

**Q6.** (a) H(e^{jw}) = 1/(1 - 0.5 e^{-jw}).
Step 1: w = 0: 1/(1 - 0.5) = **2**, phase 0.
Step 2: w = π/2: e^{-jπ/2} = -j, so the denominator is 1 + 0.5j with magnitude 1.118: |H| = **0.894**, phase = -arctan 0.5 = **-26.6°**.
Step 3: w = π: e^{-jπ} = -1, denominator 1.5: |H| = **0.667**, phase 0 (a low-pass filter).
(b) Step 1: |H(w)| = |sin(5w/2)/(5 sin(w/2))|. At w = π/5: sin(π/2)/(5 sin(π/10)) = 1/(5 × 0.309) = **0.647**.
Step 2: the nulls are at w = 2πk/5, i.e. f = fs k/5 = **200 Hz and 400 Hz** (k = 1, 2).
(c) H = (1 - z^-1)/(1 - 0.9 z^-1): DC: (1 - 1)/(1 - 0.9) = **0**. w = π/2: |1 + j|/|1 + 0.9j| = 1.414/1.345 = **1.051**. w = π: |2|/|1.9| = **1.053**: it blocks DC and passes everything else with a gain of about 1.05.
(b) |H(w)| = |sin(5w/2)/(5 sin(w/2))|: at w = pi/5: sin(pi/2)/(5 sin(pi/10)) = 1/(5 × 0.309) = **0.647**. The nulls are at w = 2 pi k/5, i.e. fs k/5 = **200 Hz and 400 Hz** (for k = 1, 2).
(c) DC: (1 - 1)/(1 - 0.9) = **0**; w = pi/2: **1.051**; w = pi: 2/1.9 = **1.053**: it blocks DC and passes everything else with a gain of about 1.05.

**Q7.** (a) Step 1: θ = 2π × 50/1000 = **0.314 rad**.
Step 2: zeros at e^{±j0.314} (on the unit circle); poles at 0.95 e^{±j0.314} = 0.95 (cos 0.314 ± j sin 0.314) = 0.9035 ± 0.2936j.
Step 3: H(z) = (1 - 2 cos θ z^-1 + z^-2)/(1 - 2 r cos θ z^-1 + r² z^-2), with 2 cos θ = 1.902, 2 r cos θ = 1.807, r² = 0.9025: H(z) = (1 - 1.902 z^-1 + z^-2)/(1 - 1.807 z^-1 + 0.9025 z^-2).
(b) Step 1: gain at 50 Hz = **0** (a zero on the unit circle).
Step 2: DC (z = 1): (1 - 1.902 + 1)/(1 - 1.807 + 0.9025) = 0.098/0.0955 = **1.025**.
Step 3: fs/2 (z = -1): (1 + 1.902 + 1)/(1 + 1.807 + 0.9025) = 3.902/3.7095 = **1.052** (close to 1: the notch does not alter the rest of the spectrum much).
(c) The -3 dB bandwidth is about 2 (1 - r) = 0.1 rad = 0.1 × 1000/(2π) = **15.9 Hz** (measured numerically: 15.6 Hz, from 42.2 to 57.8 Hz). A radius closer to 1 (for example 0.99) gives a narrower notch (about 3.2 Hz) but a longer transient (the poles ring for about 1/(1 - r) = 100 samples), so choose r to balance selectivity and settling time.
(b) Gain at 50 Hz = **0** (a zero on the unit circle); DC gain **1.025**; gain at fs/2 **1.052** (close to 1: the notch does not alter the rest of the spectrum much).
(c) The -3 dB bandwidth is about 2 (1 - r) = 0.1 rad = 0.1 × 1000/(2 pi) = **15.9 Hz** (measured numerically: 15.6 Hz, from 42.2 to 57.8 Hz). A radius closer to 1 (for example 0.99) gives a narrower notch (about 3.2 Hz) but a longer transient (the poles ring for about 1/(1 - r) = 100 samples), so choose r to balance selectivity and settling time.

# Assignment 2: The DFT and FFT (Chapter 3)

**Q1. A small DFT.** Compute the DFT of x = [1, 2, 3, 4] directly from the definition [10].

**Q2. Eight-point DFT.** (a) Compute the magnitudes of the 8-point DFT of x = [1, 1, 1, 1, 0, 0, 0, 0] [5] (b) Verify Parseval's relation [3] (c) Which bins are exactly zero and why? [2]

**Q3. Circular and linear convolution.** (a) Compute the circular convolution of a = [1, 2, 3, 4] and b = [1, 0, 1, 0] using the DFT [4] (b) Compute their linear convolution [3] (c) Describe how to obtain linear convolution with the DFT [3]

**Q4. Resolution and leakage.** fs = 8000 Hz. (a) The frequency resolution for N = 1024 and N = 256 [2] (b) A unit-amplitude sine at 1000 Hz and at 1015.625 Hz is analysed with N = 256: the peak magnitude and the leakage [5] (c) How does a Hann window change this and at what cost? [3]

**Q5. FFT cost.** (a) The number of complex multiplications of a radix-2 FFT and of direct evaluation for N = 8, 1024 and 4096, with the ratio [5] (b) The cost per output sample of overlap-add filtering with a 128-tap FIR using 1024-point FFTs, compared with direct convolution [5]

**Q6. Radix-2 butterflies.** (a) Compute the DFT of x = [1, 2, 3, 4] by splitting into even and odd samples [6] (b) Compute the 8-point DFT of x = cos(2 pi n/8) [4]

**Q7. Window design trade-offs.** (a) Give the main-lobe width and the highest sidelobe level for rectangular, Hann, Hamming and Blackman windows with N = 64 [5] (b) Choose a window to detect a weak tone 60 dB below a strong tone 5 bins away, and justify your choice [3] (c) What does zero padding do? [2]

## Solutions to Assignment 2

**Q1.** X[k] = sum x[n] e^{-j 2 pi k n/4} with W = e^{-j pi/2} = -j. X[0] = 1 + 2 + 3 + 4 = **10**. X[1] = 1 + 2(-j) + 3(-1) + 4(j) = 1 - 2j - 3 + 4j = **-2 + 2j**. X[2] = 1 - 2 + 3 - 4 = **-2**. X[3] = 1 + 2(j) + 3(-1) + 4(-j) = **-2 - 2j**.

**Q2.** (a) Step 1: X[k] = Σ_{n=0}^{3} W^{kn} with W = e^{-jπ/4}; the geometric sum is X[k] = (1 - W^{4k})/(1 - W^k) = (1 - e^{-jπk})/(1 - e^{-jπk/4}).
Step 2: k = 0: X = 4 (sum of the samples).
Step 3: k odd: the numerator is 1 - (-1) = 2. k = 1: |X| = 2/|1 - e^{-jπ/4}| = 2/0.7654 = 2.613; k = 3: 2/|1 - e^{-j3π/4}| = 2/1.848 = 1.082; k = 5 and 7 mirror k = 3 and 1.
Step 4: k even and non-zero: the numerator is 1 - 1 = 0, so X[2] = X[4] = X[6] = 0.
Result |X| = **[4, 2.613, 0, 1.082, 0, 1.082, 0, 2.613]**.
(b) Step 1: Σ|x|² = 4.
Step 2: (1/8) Σ|X|² = (16 + 6.828 + 0 + 1.172 + 0 + 1.172 + 0 + 6.828)/8 = 32/8 = **4** ✓.
(c) Bins 2, 4, 6 are zero: the sequence is a rectangular pulse of length 4 whose spectrum has nulls at multiples of N/4 = 2 bins (the sinc nulls).

**Q3.** (a) Step 1: A = FFT(a) for a = [1, 2, 3, 4]: [10, -2 + 2j, -2, -2 - 2j] (Q1 above).
Step 2: B = FFT(b) for b = [1, 0, 1, 0]: B[k] = 1 + e^{-jπk}: [2, 0, 2, 0].
Step 3: product = [20, 0, -4, 0].
Step 4: inverse FFT: y[n] = (1/4)(20 - 4 (-1)^n): n even: 16/4 = 4; n odd: 24/4 = 6, so **[4, 6, 4, 6]**.
Check directly: y[0] = a0 b0 + a1 b3 + a2 b2 + a3 b1 = 1 + 0 + 3 + 0 = 4 ✓.
(b) Linear convolution: with b = [1, 0, 1, 0], y = a + (a delayed by 2): [1, 2, 3 + 1, 4 + 2, 3, 4, 0] = **[1, 2, 4, 6, 3, 4, 0]** (length 4 + 4 - 1 = 7; the last value is zero because b ends with a zero).
(c) Zero-pad both sequences to length N ≥ L + M - 1 (7 here, so N = 8) before the DFTs; then the circular convolution equals the linear convolution.

**Q4.** (a) fs/N: **7.8125 Hz** (N = 1024) and **31.25 Hz** (N = 256). (b) 1000 Hz is exactly bin 32 (1000/31.25): the peak is **128** (A N/2) and all other bins are zero: no leakage. 1015.625 Hz is bin 32.5: the peak magnitude falls to **82.0** and neighbouring bins read 81.0, 27.7, 26.7, 16.8: about **14 percent** of the energy leaks outside the three central bins. (c) With a Hann window the peak amplitude is reduced (54 against 82, since the window attenuates the average level) but only **0.05 percent** of the energy lies outside five bins: far less leakage, at the cost of a main lobe twice as wide (4 bins null to null against 2) and lower amplitude.

**Q5.** (a) Radix-2 FFT: (N/2) log2 N complex multiplications; direct DFT: N².
N = 8: (8/2) × 3 = **12** against 64 (5.3 times fewer).
N = 1024: 512 × 10 = **5120** against 1,048,576 (ratio **204.8**).
N = 4096: 2048 × 12 = **24,576** against 16,777,216 (ratio **683**).
(b) Step 1: with 1024-point FFTs and a 128-tap filter, each block yields L = 1024 - 128 + 1 = 897 new output samples.
Step 2: per block: two FFTs (forward, inverse) = 2 × 5120 = 10,240, plus 1024 spectrum products = 11,264 complex multiplications.
Step 3: 11,264 × 4 = 45,056 real multiplications, i.e. 45,056/897 = **50.2 real multiplications per output** against 128 for direct convolution (2.5 times fewer). The advantage grows with filter length.

**Q6.** (a) Even samples [1, 3]: E = [4, -2]; odd samples [2, 4]: O = [6, -2]. W_4^k = 1, -j. X[0] = E[0] + O[0] = 4 + 6 = **10**; X[1] = E[1] + W^1 O[1] = -2 + (-j)(-2) = **-2 + 2j**; X[2] = E[0] - O[0] = 4 - 6 = **-2**; X[3] = E[1] - W^1 O[1] = -2 - 2j = **-2 - 2j**. ✓ (matches Q1).
(b) cos(2 pi n/8) = (e^{j 2 pi n/8} + e^{-j 2 pi n/8})/2, so X[1] = X[7] = N/2 = **4** and all other bins are 0.

**Q7.** (a) Step 1: **Rectangular**: 2.0 bins, -13.3 dB; **Hann**: 4.06 bins, -31.5 dB; **Hamming**: 4.14 bins, -42.4 dB; **Blackman**: 6.09 bins, -58.1 dB.
(b) The strong tone's leakage at 5 or more bins away must be below -60 dB relative to its peak.
Step 2: Measured worst sidelobe levels beyond 5 bins (N = 64): rectangular **-24.6 dB**, Hamming **-42.9 dB**, Hann **-53.9 dB**, Blackman **-63.3 dB**, Kaiser (beta = 8) **-69.8 dB**, Kaiser (beta = 10) **-83.6 dB**.
Step 3: Only **Blackman or a Kaiser window** (beta of 8 or more) meets the -60 dB requirement; the price is a wider main lobe (6 bins null to null for Blackman, more for Kaiser beta = 10), acceptable because the tones are 5 bins apart
(c) Zero padding appends zeros before the DFT: it interpolates the spectrum (smoother plot, finer peak location), but it does not add information: the resolution is set by the length of the actual data.

# Assignment 3: Filter Design, Multirate and Implementation (Chapters 4 to 8)

**Q1. Window-method FIR.** Design a low-pass FIR with cutoff 1 kHz at fs = 8 kHz with 51 Hamming-windowed taps. (a) The gain at 1 kHz and at DC, and the stopband attenuation above 1.52 kHz [4] (b) The group delay in samples and milliseconds [2] (c) The number of taps needed for a 500 Hz transition width with Hamming, Hann and Blackman windows [4]

**Q2. Kaiser and equiripple.** (a) Using the Kaiser formula design a filter with 60 dB attenuation, passband to 1 kHz and stopband from 1.5 kHz at 8 kHz: taps and beta [4] (b) The stopband attenuation of an equiripple design with 25, 31, 35 and 41 taps [3] (c) The number of equiripple taps for -60 dB [3]

**Q3. IIR design.** (a) The coefficients of a 2nd-order Butterworth low-pass filter with fc = 1 kHz at fs = 8 kHz, its gain at fc and its poles [4] (b) The prewarped analog cutoff for the bilinear transform [2] (c) The minimum order of Butterworth, Chebyshev I and elliptic filters for (1 dB at 1 kHz, 40 dB at 2 kHz) and for (1 dB, 1 kHz; 50 dB, 1.5 kHz) [4]

**Q4. Cost comparison.** An audio filter at 48 kHz stereo. (a) The MAC rate of a 128-tap FIR [3] (b) The MAC rate of a 4th-order IIR as two biquads (5 multiplications each) [3] (c) Discuss phase, stability and quantisation sensitivity [4]

**Q5. Multirate.** (a) The interpolation and decimation factors for 44.1 kHz to 48 kHz [3] (b) The MAC rate of a 64-tap decimate-by-4 filter at 48 kHz input, direct and polyphase [4] (c) The same for a 128-tap interpolate-by-4 with 48 kHz output [3]

**Q6. LMS adaptive filter.** Identify the unknown system h = [0.5, -0.3, 0.2, 0.1] from white noise input of unit variance with a 4-weight LMS filter. (a) Write the algorithm and the stability bound for mu [4] (b) What results did simulation give for mu = 0.01, 0.05 and 0.2? [3] (c) With measurement noise of variance 0.01, the excess MSE for mu = 0.005 and 0.02 [3]

**Q7. Fixed-point implementation.** (a) In Q15 format compute 0.5 × 0.25 [2] (b) 0.75 + 0.5 with wraparound and with saturation [3] (c) The stopband of the 51-tap Hamming filter with Q15, 8-bit and 6-bit coefficients [3] (d) The real-time budget at 48 kHz [2]

## Solutions to Assignment 3

**Q1.** (a) `firwin(51, 1000, window='hamming', fs=8000)`: gain at 1 kHz **-6.01 dB** (half amplitude), DC gain **0.00 dB**, stopband attenuation **-55.1 dB**. (b) Group delay = (N - 1)/2 = **25 samples = 3.125 ms**. (c) N ≈ k fs/Δf with k = 3.3 (Hamming), 3.1 (Hann), 5.5 (Blackman): **53, 50, 88 taps**.

**Q2.** (a) `kaiserord(60, 500/4000)` gives **60 taps** with beta = **5.65** (the formula (A - 7.95)/(2.285 Δw) gives 58); the designed filter has -60.4 dB stopband attenuation and 0.009 dB passband ripple. (b) Equiripple: 25 taps **-32.2 dB**, 31 taps **-38.7 dB**, 35 taps **-41.8 dB**, 41 taps **-47.2 dB** (about 1 dB per tap). (c) **55 taps** for -60 dB, with a passband ripple of 0.007 dB: shorter than the Kaiser filter's 60.

**Q3.** (a) Step 1: prewarp: K = tan(π fc/fs) = tan(π/8) = 0.4142.
Step 2: for a 2nd-order Butterworth, a0 = 1 + sqrt 2 K + K² = 1 + 0.5858 + 0.1716 = 1.7574.
Step 3: b = K²/a0 × [1, 2, 1] = 0.09763 × [1, 2, 1] = **[0.09763, 0.19526, 0.09763]**.
Step 4: a = [1, 2 (K² - 1)/a0, (1 - sqrt 2 K + K²)/a0] = [1, -1.6569/1.7574, 0.5858/1.7574] = **[1, -0.94281, 0.33333]**.
Step 5: gain at 1 kHz = **-3.01 dB**; DC gain 1.0 (0.3905/0.3905); poles at **0.4714 ± 0.3333j**, magnitude sqrt(0.2222 + 0.1111) = 0.577: inside the unit circle, stable.
(b) Prewarped analog cutoff: 2 fs tan(π fc/fs) = 16,000 tan(π/8) = 16,000 × 0.4142 = **6627.4 rad/s** (against 2π fc = 6283.2 rad/s).
(c) For 1 dB/1 kHz, 40 dB/2 kHz: Butterworth **6**, Chebyshev I **4**, elliptic **4**. For 1 dB/1 kHz, 50 dB/1.5 kHz: Butterworth **14**, Chebyshev I **7**, elliptic **5**: elliptic filters are the most efficient; Butterworth needs far more as the transition narrows.

**Q4.** (a) MAC rate = fs × taps × channels = 48,000 × 128 × 2 = **12.29 million MAC/s** (6.1 million with the symmetric-coefficient trick).
(b) Step 1: two biquads = 2 × 5 = 10 multiplications per sample.
Step 2: 48,000 × 10 × 2 = **0.96 million MAC/s**, which is 12.29/0.96 = 12.8 times fewer.
(c) FIR: exactly linear phase (constant group delay, no waveform distortion), always stable, tolerant of coefficient rounding, but needs many taps. IIR: far cheaper, but non-linear phase (group delay varies, worst near the band edge), can be unstable or limit-cycle, and sensitive to coefficient quantisation (so use second-order sections). Choose FIR when phase linearity matters (data communications, audio crossovers, measurement), IIR when cost matters and phase does not.

**Q5.** (a) Step 1: 48,000/44,100 = 480/441 = 160/147 (divide by gcd 3).
Step 2: interpolate by **160**, decimate by **147** (implemented as one polyphase filter).
(b) Step 1: direct: filter every input sample: 64 × 48,000 = **3.072 million MAC/s**.
Step 2: polyphase (compute only the kept outputs, at 48,000/4 = 12 kHz): 64 × 12,000 = **0.768 million MAC/s** (4 times fewer).
(c) Step 1: interpolation by 4 with a 128-tap filter at the 48 kHz output rate: direct (filtering the zero-stuffed sequence) 128 × 48,000 = **6.144 million MAC/s**.
Step 2: polyphase: only 1 of every 4 input values is non-zero in each output, so 32 taps per output: **1.536 million MAC/s**.

**Q6.** (a) Step 1: e[n] = d[n] - w^T u[n]; w <- w + mu e[n] u[n], with u[n] the 4 most recent inputs.
Step 2: Mean convergence requires 0 < mu < 2/(N sigma_x^2) = 2/(4 × 1) = **0.5** (in practice use less than a tenth of this)
(b) The weights converged to **[0.5, -0.3, 0.2, 0.1]** exactly for all three step sizes (squared error below 10^-30 at the end); the average squared error over the first 50 samples was 0.197 (mu = 0.01), 0.087 (0.05) and 0.032 (0.2): larger mu converges faster
(c) With noise variance 0.01 the minimum MSE is 0.01.
Step 3: Measured excess: **0.6 percent** for mu = 0.005 and **3.8 percent** for mu = 0.02, close to the theoretical mu N sigma_x^2/2 = 1 percent and 4 percent: a trade-off between convergence speed and steady-state error.

**Q7.** (a) Step 1: 0.5 = 16384 and 0.25 = 8192 in Q15 (value × 2^15).
Step 2: the product 16384 × 8192 = 134,217,728 (Q30); shift right by 15 → **4096**, which is 4096/32768 = **0.125** in Q15.
(b) Step 1: 0.75 = 24576, 0.5 = 16384; sum = 40960 > 32767.
Step 2: 16-bit wraparound: 40960 - 65536 = **-24576 = -0.75** (a sign flip).
Step 3: saturation: the result is clipped to **32767 = 0.99997**.
(c) Q15 coefficients: **-54.8 dB** (almost unchanged from -55.1 dB); 8 bits: **-30.5 dB**; 6 bits: **-19.6 dB**: coefficient wordlength must be chosen from the stopband specification.
(d) Step 1: sample period = 1/48,000 = **20.8 μs per sample** (per channel).
Step 2: all processing for one sample (including loop overhead) must fit in that time.
