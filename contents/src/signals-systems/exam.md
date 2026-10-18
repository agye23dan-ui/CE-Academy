# Signals and Systems: Final Examination

Duration: 3 hours. Calculator and a table of transforms and properties allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** A signal x(t) is periodic with period T if
A) x(t + T) = x(t) for all t  B) x(t) = 0 outside [0, T]  C) x(-t) = x(t)  D) ∫ x dt = 0

**2.** The even part of x(t) is
A) x(t) + x(-t)  B) (x(t) + x(-t))/2  C) (x(t) - x(-t))/2  D) x(-t)

**3.** The system y[n] = x[n]² is
A) linear  B) non-linear  C) non-causal  D) unstable

**4.** The convolution of x with an impulse delayed by t0 gives
A) x(t)  B) x(t - t0)  C) x(t + t0)  D) t0 x(t)

**5.** The step response of an LTI system equals
A) the derivative of h  B) the running integral of h  C) h squared  D) the FT of h

**6.** The Fourier series coefficients of a real signal satisfy
A) c_-k = c_k  B) c_-k = conj(c_k)  C) c_-k = -c_k  D) c_k = 0

**7.** Parseval's theorem relates
A) energy (power) in time and frequency  B) input and output  C) sampling and aliasing  D) poles and zeros

**8.** The FT of δ(t) is
A) δ(f)  B) 1  C) 1/f  D) sinc f

**9.** Compressing a signal in time by a factor of 2
A) halves its bandwidth  B) doubles its bandwidth  C) does not change its spectrum  D) shifts its spectrum

**10.** The frequency response of an LTI system is the
A) FT of the impulse response  B) FT of the step response  C) derivative of h  D) integral of x

**11.** A system has distortionless transmission if
A) its gain is constant and its phase is linear in frequency  B) its gain is zero  C) it is non-causal  D) its phase is constant and non-zero

**12.** A tone at 6 kHz sampled at 8 kHz appears at
A) 6 kHz  B) 2 kHz  C) 14 kHz  D) 4 kHz

**13.** The ideal SNR of an N-bit ADC for a full-scale sine is about
A) 3N dB  B) 6.02 N + 1.76 dB  C) 20 N dB  D) N dB

**14.** The Laplace transform of e^(-at)u(t) is
A) 1/(s - a)  B) 1/(s + a)  C) a/s  D) s/(s + a)

**15.** A causal LTI system with a pole at s = +1 is
A) stable  B) unstable  C) marginally stable  D) non-causal

**16.** The poles of H(s) = 1/(s² + 2s + 5) are
A) -1 ± j2  B) 1 ± j2  C) -2, -5  D) ±j sqrt 5

**17.** A causal DT system is stable if all poles of H(z) lie
A) outside the unit circle  B) inside the unit circle  C) on the real axis  D) at z = 1

**18.** The DFT bin spacing for an N-point DFT of a signal sampled at f_s is
A) f_s N  B) f_s/N  C) N/f_s  D) 2 f_s/N

**19.** The FFT reduces the cost of the DFT from
A) N² to N log N  B) N to log N  C) N³ to N²  D) N to N/2

**20.** A DT FIR filter
A) has a finite-length impulse response and is always stable  B) has poles outside the unit circle  C) must be non-causal  D) is always IIR

## Section B: Short Questions (40 marks)

**B1. (5)** Find the average power of x(t) = 2 + 3 cos(4t) and its rms value.

**B2. (5)** Compute [1, 1, 1] * [1, 2, 1] and state the length of the result.

**B3. (5)** Find the Fourier transform of e^(-3t)u(t) and its magnitude at f = 0 and at f = 3/(2π) Hz.

**B4. (5)** A 10 kHz tone is sampled at 12 kHz. Which frequency appears in the samples? What anti-aliasing filter cut-off would you use for f_s = 12 kHz?

**B5. (5)** Find the inverse Laplace transform of 2/(s(s + 2)).

**B6. (5)** Determine the stability of H(s) = (s + 1)/(s² - s - 2) from its poles and say whether a pole-zero cancellation could help.

**B7. (5)** Find the pole of H(z) = 1/(1 + 0.5 z^-1), decide stability and give the first four values of the impulse response.

**B8. (5)** Compute the DFT of [2, 0, 0, 0] and the number of complex multiplications needed for a 16-point radix-2 FFT, (N/2) log2 N.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Convolution.** An input x(t) = rect(t - 1/2) (equal to 1 for 0 ≤ t ≤ 1, zero elsewhere) drives a system with h(t) = e^(-t)u(t).
(a) Find y(t) for 0 ≤ t ≤ 1 [3]. (b) Find y(t) for t > 1 [3]. (c) Find y(1) and the maximum of y [2]. (d) Use the system's differential equation to check y' + y = x at t = 0.5 [2].

**C2. Fourier analysis and sampling.** A signal has a triangular spectrum with bandwidth 3 kHz.
(a) State the Nyquist rate [1]. (b) Sketch the spectrum of the sampled signal for f_s = 8 kHz and f_s = 5 kHz, and explain what happens at 5 kHz [4]. (c) Find the frequency to which a 4 kHz interferer aliases when f_s = 5 kHz and say how to prevent this [3]. (d) Write the reconstruction formula in terms of sinc functions [2].

**C3. Laplace analysis of a circuit.** A series RLC circuit with R = 4 Ω, L = 1 H, C = 1/3 F has the capacitor voltage as output.
(a) Find H(s) and its poles [3]. (b) Find the unit-step response [4]. (c) Find the steady-state output for x = cos t [3].

**C4. Discrete-time system.** H(z) = (1 + z^-1)/(1 - 0.5 z^-1).
(a) Write the difference equation [2]. (b) Find the first five values of the impulse response [3]. (c) Find |H| at ω = 0 and ω = π and describe the filter [3]. (d) Is the system stable and causal? [2]

**C5. Spectral analysis.** An 8-point signal is x = [1, 1, 1, 1, 0, 0, 0, 0].
(a) State the DFT X[0] and X[4] and find |X[1]| [4]. (b) What is the frequency resolution if f_s = 8 kHz? [2] (c) Explain how zero padding and windowing change the spectrum [4].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **A** · 2 **B** · 3 **B** · 4 **B** · 5 **B** · 6 **B** · 7 **A** · 8 **B** · 9 **B** · 10 **A** · 11 **A** · 12 **B** · 13 **B** · 14 **B** · 15 **B** · 16 **A** · 17 **B** · 18 **B** · 19 **A** · 20 **A**

Brief reasons: 9. x(2t) has a spectrum twice as wide. 12. |6 - 8| = 2 kHz. 16. s = -1 ± j2. 18. Δf = f_s/N.

## Section B solutions

**B1.** Power = 2² + 3²/2 = 4 + 4.5 = **8.5**; rms = sqrt 8.5 = **2.92**.

**B2.** [1, 1, 1] * [1, 2, 1]: 1·[1, 2, 1] + 1·[0, 1, 2, 1] + 1·[0, 0, 1, 2, 1] = **[1, 3, 4, 3, 1]**; length 3 + 3 - 1 = **5**.

**B3.** **X(f) = 1/(3 + j2πf)**. |X(0)| = **1/3**. At f = 3/(2π): j2πf = j3, so |X| = 1/|3 + j3| = 1/(3 sqrt 2) = **0.236** (0.707 × 1/3: the -3 dB point).

**B4.** 10 kHz at 12 kHz aliases to |10 - 12| = **2 kHz**. The anti-aliasing cut-off should be below f_s/2 = 6 kHz, for example about **4.5 to 5 kHz**, if the wanted band extends to 4 kHz.

**B5.** 2/(s(s + 2)) = 1/s - 1/(s + 2): **(1 - e^(-2t)) u(t)**.

**B6.** s² - s - 2 = (s - 2)(s + 1): poles **+2 and -1**; the pole at +2 is in the right half-plane: **unstable**. The zero at -1 cancels the pole at -1 but not the unstable pole, so the system remains unstable (and cancelling an unstable pole by a zero is never a safe design because of the slightest mismatch).

**B7.** H(z) = z/(z + 0.5): the pole is at **z = -0.5** (inside the unit circle: **stable**). The impulse response is (-0.5)^n u[n]: **1, -0.5, 0.25, -0.125**.

**B8.** DFT of an impulse of height 2 at n = 0: X[k] = 2 for all k: **[2, 2, 2, 2]**. A 16-point radix-2 FFT needs (16/2) log2 16 = 8 × 4 = **32** complex multiplications (against 256 for the direct DFT).

## Section C solutions

**C1.**
(a) For 0 ≤ t ≤ 1: y(t) = ∫(0 to t) e^(-(t - τ)) dτ = e^(-t)(e^t - 1) = **1 - e^(-t)**.
(b) For t > 1: y(t) = ∫(0 to 1) e^(-(t - τ)) dτ = e^(-t)(e - 1) = **(e - 1) e^(-t)** (the response to the pulse then decays naturally).
(c) y(1) = 1 - e^(-1) = **0.632**, which is the maximum (the output rises while the input is on and decays afterwards).
(d) At t = 0.5: y = 1 - e^(-0.5) = 0.3935; y' = e^(-0.5) = 0.6065; y' + y = 1.0 = x(0.5) ✓.

**C2.**
(a) Nyquist rate = 2 × 3 kHz = **6 kHz**.
(b) Step 1: The sampled spectrum is the original repeated at multiples of f_s.
Step 2: For f_s = 8 kHz the copies occupy [-3, 3] kHz, [5, 11] kHz, ...: they do not overlap (a gap from 3 to 5 kHz): the signal can be recovered by a low-pass filter.
Step 3: For f_s = 5 kHz < 6 kHz the copies [2, 8] kHz and [-3, 3] kHz **overlap between 2 and 3 kHz**: aliasing, and the original cannot be recovered.
(c) 4 kHz at f_s = 5 kHz aliases to |4 - 5| = **1 kHz** (inside the band of interest). Prevent it with an **anti-aliasing low-pass filter** before sampling, or use a higher sampling rate.
(d) x(t) = Σ x[n] sinc((t - nT_s)/T_s) where T_s = 1/f_s and sinc(u) = sin(πu)/(πu): **ideal band-limited interpolation**; in practice a DAC with a zero-order hold followed by a low-pass filter.

**C3.**
(a) H(s) = 1/(LC s² + RC s + 1) = 1/(s²/3 + 4s/3 + 1) = **3/(s² + 4s + 3) = 3/((s + 1)(s + 3))**; poles **-1 and -3** (stable, overdamped).
(b) Step: Y = 3/(s(s + 1)(s + 3)) = 1/s - 3/(2(s + 1)) + 1/(2(s + 3)): **y(t) = 1 - 1.5 e^(-t) + 0.5 e^(-3t)** (check y(0) = 0, y'(0) = 1.5 - 1.5 = 0 ✓).
(c) H(j1) = 3/(3 - 1 + j4) = 3/(2 + j4): |H| = 3/4.47 = 0.671, phase = -arctan(2) = -63.4°. **y_ss = 0.671 cos(t - 63.4°)**.

**C4.**
(a) Y(1 - 0.5 z^-1) = X(1 + z^-1), so **y[n] = 0.5 y[n - 1] + x[n] + x[n - 1]**.
(b) h[n]: h[0] = 1; h[1] = 0.5(1) + 1 = 1.5; h[2] = 0.5(1.5) = 0.75; h[3] = 0.375; h[4] = 0.1875: **1, 1.5, 0.75, 0.375, 0.1875**.
(c) At ω = 0: H = 2/0.5 = **4**; at ω = π: z = -1 gives numerator 1 + (-1) = 0: **|H| = 0**. The gain falls from 4 to 0: a **low-pass filter** (a zero at z = -1 and a pole at 0.5).
(d) The pole 0.5 lies inside the unit circle and the system is implemented as causal: **stable and causal**.

**C5.**
(a) X[0] = sum of the samples = **4**. X[4] = 1 - 1 + 1 - 1 = **0** (alternating signs over the four ones). |X[1]| = |1 - j2.414| = sqrt(1 + 5.83) = **2.61**.
(b) Δf = f_s/N = 8000/8 = **1 kHz** (very coarse).
(c) **Zero padding** (appending zeros before the FFT) evaluates the same spectrum at more frequency points (a smoother plot, interpolation) but does **not** improve the true resolution (which depends on the observation time). A **window** (Hann, Hamming) tapers the signal ends, which reduces the side lobes (spectral leakage) caused by the abrupt rectangular truncation at the cost of a wider main lobe (poorer resolution of closely spaced tones).
