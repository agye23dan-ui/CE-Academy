# Digital Signal Processing: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** A 7 kHz tone sampled at 8 kHz appears at
A) 7 kHz  B) 1 kHz  C) 4 kHz  D) 15 kHz

**2.** A zero-order-hold DAC causes at the Nyquist frequency a droop of about
A) 0 dB  B) 1 dB  C) 3.9 dB  D) 6 dB

**3.** Each additional bit of an ideal ADC improves the SNR by about
A) 3 dB  B) 6 dB  C) 12 dB  D) 20 dB

**4.** A causal system is BIBO stable if and only if
A) all poles are strictly inside the unit circle  B) all zeros are inside the unit circle  C) it is FIR only  D) its gain is below 1

**5.** The region of convergence of the z-transform of a causal sequence is
A) inside the innermost pole  B) the unit circle only  C) outside the outermost pole  D) the whole plane

**6.** The DFT of a real sequence has
A) only real values  B) conjugate symmetry X[N - k] = X*[k]  C) no symmetry  D) only positive values

**7.** Zero padding before a DFT
A) interpolates the spectrum but does not improve the resolution  B) improves the resolution  C) reduces leakage  D) reduces noise

**8.** Parseval's relation for the N-point DFT is
A) sum |x|^2 = sum |X|^2  B) sum |x|^2 = N sum |X|^2  C) sum |x| = sum |X|  D) sum |x|^2 = (1/N) sum |X|^2

**9.** The number of complex multiplications of a 1024-point radix-2 FFT is about
A) 1024  B) 10,240  C) 5120  D) 1,048,576

**10.** The overlap-add method is used for
A) designing IIR filters  B) fast convolution of long signals with an FIR filter  C) sampling-rate conversion only  D) quantisation

**11.** An even-length symmetric linear-phase FIR filter always has a zero at
A) w = 0  B) w = pi/2  C) w = pi  D) none of these

**12.** The Kaiser window parameter beta controls
A) the filter length only  B) the trade-off between main-lobe width and sidelobe level  C) the sampling rate  D) the phase

**13.** Truncating the ideal impulse response without a window produces
A) aliasing  B) instability  C) a recursive filter  D) Gibbs ripples (large sidelobes)

**14.** The Parks-McClellan algorithm produces filters that are
A) equiripple (minimax optimal)  B) maximally flat  C) always IIR  D) minimum phase only

**15.** Impulse-invariance IIR design suffers from
A) frequency warping  B) instability always  C) aliasing  D) no phase

**16.** The bilinear transform introduces
A) time warping  B) frequency warping  C) amplitude warping  D) no distortion

**17.** High-order IIR filters are implemented as cascaded biquads because
A) they run faster  B) they are linear phase  C) they need no memory  D) of lower coefficient sensitivity and better numerical behaviour

**18.** A polyphase decimator by M saves a factor of about
A) M in multiplications  B) M^2  C) 2  D) none

**19.** The NLMS algorithm differs from LMS by
A) using more taps  B) normalising the step size by the input power  C) being non-adaptive  D) using a different error

**20.** Saturation arithmetic prevents
A) quantisation noise  B) aliasing  C) the sign flip caused by overflow  D) leakage

## Section B: Short Questions (40 marks)

**B1. (5)** Give the apparent frequencies of tones at 3, 6, 9 and 12 kHz when sampled at 10 kHz, and the number of bits needed for an SNR of 80 dB.

**B2. (5)** Find the poles of H(z) = 1/(1 - 0.9 z^-1 + 0.2 z^-2), decide stability and find the DC gain.

**B3. (5)** Compute the 4-point DFT of x = [1, 0, -1, 0] and verify Parseval's relation.

**B4. (5)** For N = 2048 find the radix-2 FFT multiplication count, the direct count and the ratio, and the frequency resolution at fs = 16 kHz.

**B5. (5)** Using Kaiser's formulas design a filter with 70 dB attenuation and a 300 Hz transition at fs = 8 kHz: find beta and the number of taps.

**B6. (5)** Two tones at 1000 Hz and 1030 Hz are analysed with N = 1024 at fs = 8000 Hz. Find the separation in bins and decide whether a rectangular and a Hann window (main-lobe null-to-null width 2 and 4 bins) resolve them.

**B7. (5)** Give the interpolation and decimation factors for converting 32 kHz to 48 kHz, and for 96 kHz to 8 kHz; for the latter, with a 120-tap filter, find the MAC rate with and without polyphase decimation.

**B8. (5)** An LMS filter has 8 taps and a unit-variance input. Find the stability bound for mu and the misadjustment for mu = 0.01.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. FIR design.** A low-pass filter has cutoff 1 kHz at fs = 8 kHz.
(a) A 51-tap Hamming design: the gain at 1 kHz, the stopband attenuation and the group delay [3]. (b) The number of taps needed for a 500 Hz transition with Hamming, Hann and Blackman windows [3]. (c) Kaiser: 60 dB, 500 Hz: beta and taps; the equiripple count for the same specification [2]. (d) Compare linear-phase FIR with IIR [2].

**C2. IIR design.** A first-order Butterworth low-pass with fc = 500 Hz at fs = 8 kHz via the bilinear transform.
(a) The prewarped analog cutoff [2]. (b) The coefficients of H(z) [3]. (c) The gains at DC, 500 Hz, 1 kHz and 2 kHz [3]. (d) Minimum orders for (1 dB at 1 kHz, 50 dB at 1.5 kHz): Butterworth, Chebyshev I and elliptic [2].

**C3. Spectrum analysis.** A unit-amplitude sine is analysed with N = 256 at fs = 8000 Hz.
(a) The bin spacing and the DFT peak for a tone at 1000 Hz [3]. (b) A tone at 1015.625 Hz: the peak and the leakage [3]. (c) Windows: the main-lobe width and the highest sidelobe level for rectangular, Hann, Hamming and Blackman (N = 64) [2]. (d) How would you detect a tone 60 dB below a strong one 5 bins away? [2]

**C4. Multirate and fast convolution.** (a) A 120-tap FIR decimator reduces 96 kHz to 8 kHz: the MAC rates direct and polyphase [3]. (b) A 64-tap decimator by 4 at 48 kHz input and a 128-tap interpolator by 4 with 48 kHz output: the MAC rates with and without polyphase [3]. (c) Overlap-add with a 128-tap filter and 1024-point FFT blocks: the number of new samples per block and the multiplications per output sample against direct convolution [4].

**C5. Adaptive filtering and fixed-point implementation.** (a) State the LMS update and the step-size bound for 4 taps and unit-variance input [3]. (b) The weight convergence and misadjustment observed in simulation [3]. (c) In Q15, compute 0.5 × 0.25, and 0.75 + 0.5 with wraparound and with saturation [2]. (d) Coefficient quantisation of a 51-tap Hamming filter: stopband for 16, 8 and 6 bits [2].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **C** · 3 **B** · 4 **A** · 5 **C** · 6 **B** · 7 **A** · 8 **D** · 9 **C** · 10 **B** · 11 **C** · 12 **B** · 13 **D** · 14 **A** · 15 **C** · 16 **B** · 17 **D** · 18 **A** · 19 **B** · 20 **C**

Brief reasons: 1. |7 - 8| = 1 kHz. 2. sinc(0.5) = 0.637 = -3.92 dB. 9. (1024/2) × 10 = 5120. 11. Even length and symmetric: H(pi) = 0 (the odd-numbered terms cancel). 15. Impulse invariance samples the analog response, and frequency overlap (aliasing) occurs for responses not band-limited. 18. Only the kept outputs are computed.

## Section B solutions

**B1.** Step 1: aliases with fs = 10 kHz: 3 kHz stays **3 kHz**; 6 kHz: |6 - 10| = **4 kHz**; 9 kHz: |9 - 10| = **1 kHz**; 12 kHz: |12 - 10| = **2 kHz**.
Step 2: bits: (80 - 1.76)/6.02 = 13.0: **13 bits**.

**B2.** Step 1: the denominator z² - 0.9 z + 0.2 = 0 gives z = (0.9 ± sqrt(0.81 - 0.8))/2 = (0.9 ± 0.1)/2 = **0.5 and 0.4**: both inside the unit circle: **stable**.
Step 2: DC gain = H(1) = 1/(1 - 0.9 + 0.2) = 1/0.3 = **3.33**.

**B3.** X[k] = sum x[n] (-j)^{kn}: X[0] = 1 + 0 - 1 + 0 = **0**; X[1] = 1 + 0 + (-1)(-1) + 0 = **2**; X[2] = 1 + 0 + (-1)(1) + 0 = **0**; X[3] = 1 + 0 + (-1)(-1) + 0 = **2**. X = **[0, 2, 0, 2]**. Parseval: sum |x|^2 = 1 + 0 + 1 + 0 = 2; (1/4)(0 + 4 + 0 + 4) = **2** ✓.

**B4.** Step 1: FFT: (N/2) log2 N = 1024 × 11 = **11,264** complex multiplications.
Step 2: direct: 2048² = **4,194,304**.
Step 3: ratio = 4,194,304/11,264 = **372**.
Step 4: resolution = fs/N = 16,000/2048 = **7.8125 Hz**.

**B5.** Step 1: A = 70 dB: beta = 0.1102 (A - 8.7) = 0.1102 × 61.3 = **6.76**.
Step 2: Δw = 2π × 300/8000 = 0.2356 rad.
Step 3: N ≈ (A - 7.95)/(2.285 Δw) + 1 = 62.05/0.5384 + 1 = **116** to 117 taps (scipy's kaiserord gives 117).

**B6.** Step 1: resolution = 8000/1024 = 7.8125 Hz; separation 30/7.8125 = **3.84 bins**.
Step 2: a rectangular window has a half main-lobe width of 1 bin (null-to-null 2): 3.84 > 1, so the tones are well resolved (but with high sidelobes).
Step 3: a Hann window has a half width of 2 bins: 3.84 > 2, so they are resolved, and the lower sidelobes prevent one tone's leakage hiding the other.

**B7.** Step 1: 32 kHz to 48 kHz: ratio 48/32 = 3/2: interpolate by **3**, decimate by **2**.
Step 2: 96 kHz to 8 kHz: decimate by 96/8 = **12**.
Step 3: MAC rates: direct (filter every input sample) 120 × 96,000 = **11.52 million MAC/s**.
Step 4: polyphase (only the 8 kHz outputs) 120 × 8000 = **0.96 million MAC/s**: 12 times fewer.

**B8.** Step 1: stability bound mu < 2/(N sigma_x²) = 2/(8 × 1) = **0.25**.
Step 2: misadjustment ≈ mu N sigma_x²/2 = 0.01 × 8 × 1/2 = **0.04 = 4 percent**.

## Section C solutions

**C1.**
(a) `firwin(51, 1000, window='hamming', fs=8000)`: gain at 1 kHz **-6.01 dB**; stopband attenuation (above 1518 Hz) **-55.1 dB**; group delay (51 - 1)/2 = **25 samples = 3.125 ms**.
(b) N ≈ k fs/Δf with k = 3.3, 3.1, 5.5: Hamming **53**, Hann **50**, Blackman **88** taps.
(c) Kaiser: beta = **5.65**, **60 taps** (-60.4 dB measured); equiripple: **55 taps** for -60 dB.
(d) FIR: exactly linear phase (constant group delay), always stable, insensitive to coefficient rounding, but many taps (hundreds for sharp filters); IIR: far fewer coefficients (a 5th-order elliptic does what takes 50 or more FIR taps), but non-linear phase, possible instability and limit cycles, sensitive to quantisation. Use FIR when phase matters, IIR when computation or memory is tight.

**C2.**
(a) 2 fs tan(π fc/fs) = 16,000 tan(π/16) = 16,000 × 0.19891 = **3182.6 rad/s** (instead of 2π × 500 = 3141.6).
(b) Step 1: K = tan(π fc/fs) = 0.19891.
Step 2: H(s) = Wc/(s + Wc) with s = (2/T)(z - 1)/(z + 1) gives H(z) = K (1 + z^-1)/((1 + K) + (K - 1) z^-1).
Step 3: divide by (1 + K): **0.16591 (1 + z^-1)/(1 - 0.66818 z^-1)**, that is b = [0.16591, 0.16591], a = [1, -0.66818].
(c) Step 1: DC (z = 1): 2 × 0.16591/(1 - 0.66818) = 0.33182/0.33182 = **1.000 (0 dB)**.
Step 2: 500 Hz: **-3.01 dB**; 1 kHz: **-7.27 dB**; 2 kHz: **-14.2 dB**.
Step 3: the zero at z = -1 (fs/2) gives a deep null at 4 kHz.
(d) 1 dB at 1 kHz, 50 dB at 1.5 kHz: Butterworth **14**, Chebyshev I **7**, elliptic **5**.

**C3.**
(a) Step 1: bin spacing = 8000/256 = **31.25 Hz**.
Step 2: 1000/31.25 = 32 exactly, so all the energy is in bin 32: peak magnitude A N/2 = 256/2 = **128**.
(b) 1015.625 Hz is bin 32.5: peak magnitude **82.0** (lower), the adjacent bin 33 reads 81.0, and bins 31, 34 and 30 read 27.7, 26.7 and 16.8: about **14 percent** of the energy lies outside the three central bins (leakage).
(c) N = 64: rectangular **2.0 bins, -13.3 dB**; Hann **4.06 bins, -31.5 dB**; Hamming **4.14 bins, -42.4 dB**; Blackman **6.09 bins, -58.1 dB**.
(d) Use a window whose sidelobes beyond 5 bins are below -60 dB: Blackman (-63.3 dB beyond 5 bins) or a Kaiser window with beta of 8 or more (-70 dB); the wider main lobe (6 bins) is acceptable because the tones are 5 bins apart. A Hann window (-53.9 dB beyond 5 bins) would not suffice.

**C4.**
(a) Direct: 120 × 96,000 = **11.52 million MAC/s**; polyphase decimation by 12: 120 × 8000 = **0.96 million MAC/s** (12 times fewer).
(b) 64-tap decimator by 4 (48 kHz input): direct 64 × 48,000 = **3.072 million MAC/s**, polyphase 64 × 12,000 = **0.768 million**. 128-tap interpolator by 4 (48 kHz output): direct (zero-stuffed) 128 × 48,000 = **6.144 million**, polyphase **1.536 million**.
(c) Step 1: L = N - M + 1 = 1024 - 128 + 1 = **897** new samples per block.
Step 2: cost per block: two FFTs and one product = 2 × 5120 + 1024 = 11,264 complex multiplications = 45,056 real ones.
Step 3: 45,056/897 = **50.2 real multiplications per output sample** against **128** for direct convolution (about 2.5 times cheaper), with the advantage growing for longer filters.

**C5.**
(a) e[n] = d[n] - w^T u[n]; w <- w + mu e[n] u[n]. Step-size bound: 0 < mu < 2/(N sigma_x²) = 2/(4 × 1) = **0.5**.
(b) Identifying h = [0.5, -0.3, 0.2, 0.1], the weights converged exactly to h for mu = 0.01, 0.05 and 0.2 (squared error below 10^-30); the early-time squared error (first 50 samples) was 0.197, 0.087 and 0.032: larger mu converges faster. With noise (variance 0.01) the excess MSE was 0.6 percent (mu = 0.005) and 3.8 percent (mu = 0.02), close to mu N sigma_x^2/2 = 1 and 4 percent.
(c) Step 1: 16384 × 8192 = 134,217,728 (Q30); >> 15 gives **4096 = 0.125**.
Step 2: 0.75 + 0.5: 24576 + 16384 = 40960; wraparound gives 40960 - 65536 = **-24576 = -0.75**; saturation gives **32767 = 0.99997**.
(d) Stopband attenuation: unquantised **-55.1 dB**; 16-bit (Q15) **-54.8 dB**; 8-bit **-30.5 dB**; 6-bit **-19.6 dB**. The coefficient wordlength must be chosen from the stopband specification.
