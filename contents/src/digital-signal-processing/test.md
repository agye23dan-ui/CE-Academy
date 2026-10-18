# Digital Signal Processing: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** To avoid aliasing the sampling rate must exceed
A) the signal bandwidth  B) twice the highest frequency in the signal  C) half the highest frequency  D) the number of bits

**2.** A 6 kHz tone sampled at 10 kHz appears at
A) 4 kHz  B) 6 kHz  C) 2 kHz  D) 16 kHz

**3.** The ideal SNR of a 16-bit converter for a full-scale sine wave is about
A) 48 dB  B) 72 dB  C) 98 dB  D) 144 dB

**4.** An LTI system is completely characterised by its
A) impulse response  B) step size  C) sampling rate  D) word length

**5.** An FIR filter is always stable because
A) its poles lie on the unit circle  B) it has no feedback  C) its coefficients are small  D) it has linear phase

**6.** A causal LTI system is stable if and only if all its poles lie
A) on the unit circle  B) strictly inside the unit circle  C) outside the unit circle  D) on the real axis

**7.** In the z-domain a delay of one sample corresponds to multiplication by
A) z^-1  B) z  C) 1/z^2  D) e^{jw}

**8.** The DC gain of y[n] = 0.8 y[n - 1] + x[n] is
A) 0.8  B) 1  C) 1.8  D) 5

**9.** The frequency resolution of an N-point DFT of data sampled at fs is
A) N fs  B) fs N^2  C) fs/N  D) 1/fs

**10.** Spectral leakage occurs when
A) the signal does not contain a whole number of cycles in the window  B) the sampling rate is too high  C) the FFT length is a power of two  D) the signal is real

**11.** Which window has the lowest sidelobes?
A) rectangular  B) Hann  C) Hamming  D) Blackman

**12.** The complexity of an N-point FFT is proportional to
A) N  B) N log N  C) N^2  D) 2^N

**13.** Multiplying two DFTs corresponds to
A) linear convolution always  B) addition in time  C) circular convolution in time  D) correlation only

**14.** A linear-phase FIR filter requires coefficients that are
A) symmetric or antisymmetric  B) all positive  C) random  D) integers

**15.** The Hamming window gives a stopband attenuation of about
A) 21 dB  B) 53 dB  C) 74 dB  D) 100 dB

**16.** The bilinear transform
A) preserves the impulse response  B) is used only for FIR filters  C) maps the whole analog frequency axis onto the unit circle with frequency warping  D) needs no prewarping

**17.** For a given filter order, which IIR type has the sharpest transition?
A) Butterworth  B) Chebyshev I  C) Chebyshev II  D) elliptic

**18.** Before decimating by M one must
A) low-pass filter to prevent aliasing  B) add M zeros  C) multiply by M  D) square the signal

**19.** If the LMS step size is too large, the algorithm
A) converges faster without penalty  B) becomes unstable  C) stops adapting  D) needs no input

**20.** Adding two large positive Q15 numbers with wraparound arithmetic produces
A) the correct larger value  B) zero  C) a negative number (overflow)  D) an error flag only

## Section B: Problems (40 marks)

**B1. Sampling (10 marks)** (a) Give the apparent frequency of tones at 3, 6, 9 and 12 kHz sampled at 10 kHz [4]. (b) The number of bits for an SNR of 80 dB [2]. (c) A 10-bit ADC spans 0 to 5 V: the LSB size [2]. (d) Why must the anti-aliasing filter be analog? [2]

**B2. Systems (10 marks)** (a) Convolve [1, 2, 1] with [1, -1] [2]. (b) For y[n] = 0.8 y[n - 1] + x[n]: the pole, the stability, the first four impulse-response values and the final value of the step response [4]. (c) |H| at w = 0 and w = pi, and the phase at w = pi/2 [4].

**B3. DFT (10 marks)** (a) Compute the 4-point DFT of x = [2, 0, 1, 1] [4]. (b) Verify Parseval's relation [3]. (c) For fs = 16 kHz and N = 512 find the resolution and the bin of a 1 kHz tone, and compare the FFT and direct DFT multiplication counts [3].

**B4. Filters and implementation (10 marks)** (a) The number of Hamming-window taps for a 400 Hz transition at fs = 8 kHz, and the delay of a 67-tap filter [3]. (b) A first-order Butterworth low-pass filter with fc = 500 Hz at 8 kHz using the bilinear transform: the prewarped analog frequency and the coefficients [4]. (c) In Q15, the representation of 0.6 and the product of 0.6 and 0.5 [3].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **A** · 3 **C** · 4 **A** · 5 **B** · 6 **B** · 7 **A** · 8 **D** · 9 **C** · 10 **A** · 11 **D** · 12 **B** · 13 **C** · 14 **A** · 15 **B** · 16 **C** · 17 **D** · 18 **A** · 19 **B** · 20 **C**

Brief reasons: 2. |6 - 10| = 4 kHz. 3. 6.02 × 16 + 1.76 = 98.1 dB. 8. 1/(1 - 0.8) = 5. 13. Products of DFTs correspond to circular convolution; zero-padding makes it linear. 20. Wraparound turns a large positive sum into a negative number.

### Section B

**B1.**
(a) Rule: alias = |f - k fs| with k the integer nearest f/fs (fs = 10 kHz).
Step 1: 3 kHz: below fs/2 = 5 kHz, so **3 kHz**.
Step 2: 6 kHz: |6 - 10| = **4 kHz**.
Step 3: 9 kHz: |9 - 10| = **1 kHz**.
Step 4: 12 kHz: |12 - 10| = **2 kHz**.
(b) Step 1: SNR = 6.02 N + 1.76 ≥ 80, so N ≥ (80 - 1.76)/6.02 = 13.0.
Step 2: **13 bits** (check: 6.02 × 13 + 1.76 = 80.0 dB).
(c) LSB = range/2^N = 5 V/2^10 = 5/1024 = **4.88 mV**.
(d) Aliasing cannot be undone: once out-of-band components fold into the signal band they are indistinguishable from real signal; the filter must act before sampling, and only an analog filter can.

**B2.**
(a) Convolve x = [1, 2, 1] with h = [1, -1] (length 3 + 2 - 1 = 4): y[n] = Σ x[k] h[n - k].
Step 1: y[0] = 1 × 1 = 1.
Step 2: y[1] = 2 × 1 + 1 × (-1) = 1.
Step 3: y[2] = 1 × 1 + 2 × (-1) = -1.
Step 4: y[3] = 1 × (-1) = -1.
Result **[1, 1, -1, -1]**.
(b) Step 1: the pole is at z = **0.8** (inside the unit circle): **stable**.
Step 2: impulse response h[n] = 0.8^n: **1, 0.8, 0.64, 0.512**.
Step 3: step response final value = H(1) = 1/(1 - 0.8) = **5**.
(c) |H| = 1/|1 - 0.8 e^{-jw}|:
Step 1: w = 0: 1/(1 - 0.8) = 1/0.2 = **5**.
Step 2: w = π: 1/(1 + 0.8) = 1/1.8 = **0.556**.
Step 3: w = π/2: H = 1/(1 + 0.8j): magnitude 1/sqrt(1.64) = 0.781, phase = -arctan(0.8) = **-38.7°**.

**B3.**
(a) X[0] = 2 + 0 + 1 + 1 = **4**. X[1] = 2 + 0(-j) + 1(-1) + 1(j) = **1 + j**. X[2] = 2 + 0 + 1(1) + 1(-1) = **2**. (W = -j.) X[3] = 2 + 0 + 1 (W^6 = -1) + 1 (W^9 = W = -j) = **1 - j**. Result **[4, 1 + j, 2, 1 - j]**.
(b) sum |x|^2 = 4 + 0 + 1 + 1 = 6; (1/4) sum |X|^2 = (16 + 2 + 4 + 2)/4 = 24/4 = **6** ✓.
(c) Step 1: resolution = fs/N = 16,000/512 = **31.25 Hz**; 1000/31.25 = **bin 32** (exactly, so no leakage).
Step 2: FFT: (N/2) log2 N = 256 × 9 = **2304** complex multiplications.
Step 3: direct DFT: N² = **262,144**, which is 262,144/2304 = 113.8 times more.

**B4.**
(a) Step 1: N ≈ 3.3 fs/Δf = 3.3 × 8000/400 = **66** taps (use 67 for a type I filter).
Step 2: group delay of a 67-tap linear-phase filter: (67 - 1)/2 = **33 samples** = 33/8000 = 4.1 ms.
(b) Step 1: prewarped analog cutoff = 2 fs tan(π fc/fs) = 16,000 tan(π/16) = 16,000 × 0.19891 = **3182.6 rad/s**.
Step 2: with K = tan(π fc/fs) = 0.19891: b0 = b1 = K/(1 + K) = 0.19891/1.19891 = **0.16591**; a1 = (K - 1)/(1 + K) = -0.80109/1.19891 = **-0.66818**.
Step 3: H(z) = 0.16591 (1 + z^-1)/(1 - 0.66818 z^-1). Check: gain at 500 Hz = -3.01 dB; at 1 kHz -7.27 dB; at 2 kHz -14.2 dB.
(c) Step 1: 0.6 × 32768 = 19660.8, so the Q15 value is **19661**; 0.5 = 16384.
Step 2: product: 19661 × 16384 = 322,125,824 (Q30).
Step 3: shift right 15: **9830**, which is 9830/32768 = **0.29999** (the exact answer is 0.3).
