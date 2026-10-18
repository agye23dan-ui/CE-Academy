# Signals and Systems: Assignments with Worked Solutions

Sketch every signal and write each transform pair with its region of convergence or conditions. Numerical results below were checked with Python (NumPy, SciPy, SymPy). Frequency f is in hertz and ω = 2π f in rad/s unless stated.

# Assignment 1: Signals, Systems and Convolution (60 marks)

## Questions

**Q1. Classification (10 marks)** (a) Find the fundamental period of cos(2πt) + cos(3πt), and of the DT signal cos(0.2πn); is cos(n/3) periodic? [4] (b) Find the energy of e^(-2t)u(t) and the power of 3 cos(5t) [3]. (c) Decompose e^(-t)u(t) into its even and odd parts [3].

**Q2. Transformations (8 marks)** Let x(t) be the triangle x = t for 0 ≤ t ≤ 1, x = 2 - t for 1 ≤ t ≤ 2, and 0 otherwise. Give the support and the peak location of x(2t), x(t - 1), x(1 - t) and x(t/2).

**Q3. System properties (12 marks)** For each system state whether it is linear, time-invariant, causal, memoryless and BIBO stable: (a) y(t) = x²(t); (b) y(t) = t x(t); (c) y[n] = x[n] + x[n - 1]; (d) y(t) = x(t + 1); (e) y(t) = x(t) + 1; (f) y[n] = Σ_{k=-∞}^{n} x[k] (accumulator).

**Q4. Convolution (14 marks)** (a) Compute [1, 2, 3] * [1, 1] and [1, 2, 1] * [1, -1, 2] [4]. (b) Compute e^(-t)u(t) * u(t) and e^(-t)u(t) * e^(-2t)u(t) [6]. (c) Sketch rect(t) * rect(t) and give its height, width and area [4].

**Q5. LTI systems and difference/differential equations (10 marks)** (a) The system y' + 2y = x is at rest initially: find h(t) and the step response [4]. (b) y[n] - 0.5 y[n - 1] = x[n], at rest: find h[n], the step response for n = 0..4 and decide stability [4]. (c) An LTI system has h(t) = e^(-t)u(t) + e^(t)u(-t): is it causal? stable? [2]

**Q6. Interconnections (6 marks)** Two LTI systems have h1 = δ(t - 1) and h2 = e^(-t)u(t). Find the overall h for the series and parallel connections, and say what the order of series connection changes.

## Solutions and Marking Guide

**Q1.**
(a) Step 1: The frequencies are 1 Hz and 1.5 Hz; the common fundamental is 0.5 Hz, so **T = 2 s** (cos(2πt) repeats twice and cos(3πt) three times).
Step 2: For cos(0.2πn): ω0/2π = 0.1 = 1/10: periodic with **N = 10**.
Step 3: For cos(n/3): ω0/(2π) = 1/(6π) is irrational: **not periodic**.
(b) E = ∫(0 to ∞) e^(-4t) dt = **1/4**. P = A²/2 = 9/2 = **4.5**.
(c) x_e(t) = (x(t) + x(-t))/2 = **(1/2) e^(-|t|)** (for all t); x_o(t) = (x(t) - x(-t))/2 = **(1/2) sgn(t) e^(-|t|)**. Check: for t > 0, x_e + x_o = e^(-t) ✓; for t < 0 they cancel ✓.

**Q2.** x(t) is supported on [0, 2] with its peak 1 at t = 1.
- x(2t): compressed by 2: support **[0, 1]**, peak at **t = 0.5**.
- x(t - 1): delayed by 1: support **[1, 3]**, peak at **t = 2**.
- x(1 - t): reversed and shifted: x(u) with u = 1 - t, so t = 1 - u: support **[-1, 1]** (u in [0, 2]), peak at u = 1, i.e. **t = 0**.
- x(t/2): stretched by 2: support **[0, 4]**, peak at **t = 2**.

**Q3.**
(a) y = x²: **non-linear**, TI, causal, memoryless, stable (bounded in, bounded out).
(b) y = t x(t): **linear**, **not time-invariant** (a delay of the input does not delay the factor t), causal, memoryless, **unstable** (t x is unbounded for bounded x).
(c) y[n] = x[n] + x[n - 1]: linear, TI, causal, **not memoryless** (needs x[n - 1]), stable.
(d) y = x(t + 1): linear, TI, **non-causal** (uses the future), not memoryless, stable.
(e) y = x + 1: **non-linear** (affine: the zero input gives a non-zero output), TI, causal, memoryless, stable.
(f) Accumulator: linear, TI, causal, not memoryless, **unstable** (a constant input u[n] gives a ramp without bound).

**Q4.**
(a) [1, 2, 3] * [1, 1] = [1, 3, 5, 3]. [1, 2, 1] * [1, -1, 2]: 1·[1, -1, 2] + 2·shifted + 1·shifted: **[1, 1, 1, 3, 2]** (length 3 + 3 - 1 = 5).
(b) ∫(0 to t) e^(-τ) dτ = **(1 - e^(-t)) u(t)**. e^(-t) * e^(-2t): ∫(0 to t) e^(-τ) e^(-2(t - τ)) dτ = e^(-2t)∫ e^(τ) dτ = e^(-2t)(e^t - 1) = **(e^(-t) - e^(-2t)) u(t)**.
(c) The result is a **triangle**: rising from 0 at t = -1 to **height 1 at t = 0** and back to 0 at t = 1: **width 2**, **area 1** (the area of a convolution is the product of the areas: 1 × 1). Peak = the overlap area of two unit rectangles.

**Q5.**
(a) With x = δ: h(t) = **e^(-2t) u(t)**. The step response = ∫ h = **(1 - e^(-2t))/2 · u(t)** (steady state 1/2 = the DC gain).
(b) h[n] = (0.5)^n u[n]: 1, 0.5, 0.25, ... **Step response** s[n] = Σ_{k≤n} h = 2(1 - 0.5^(n+1)): **1, 1.5, 1.75, 1.875, 1.9375** → 2. Stable: Σ|h| = 2 < ∞.
(c) h is non-zero for t < 0: **not causal**; ∫|h| = 1 + 1 = 2 < ∞: **stable**.

**Q6.** Step 1: Series: h = h1 * h2 = δ(t - 1) * e^(-t)u(t) = **e^(-(t - 1)) u(t - 1)**.
Step 2: Parallel: h = h1 + h2 = **δ(t - 1) + e^(-t)u(t)**.
Step 3: The order of an LTI series connection does **not** matter (convolution is commutative), even though the systems are physically different.

---

# Assignment 2: Fourier Series, Fourier Transform, Filtering and Sampling (70 marks)

## Questions

**Q1. Fourier series (14 marks)** (a) Find the exponential Fourier series coefficients and the power of x(t) = 1 + 2 cos(2πt) + sin(4πt) [5]. (b) Derive the first three non-zero harmonics of a unit square wave (±1, period T) and verify Parseval's theorem numerically with the first terms [5]. (c) A symmetry argument: what harmonics can a half-wave-symmetric odd signal contain? [2] (d) Describe the Gibbs phenomenon [2].

**Q2. Fourier transform (16 marks)** (a) Find the FT of rect(t/2) (width 2) and the first zero [4]. (b) Find the FT of e^(-t)u(t) and verify the energy by Parseval [4]. (c) Find the FT of x(t) cos(2π f_c t) in terms of X(f) and draw the spectrum for a baseband triangular X(f) of bandwidth B [4]. (d) Use the time-shift property to find the FT of rect((t - 3)/2) [2] and the scaling property for rect(t) compressed to rect(2t) [2].

**Q3. Frequency response and filtering (14 marks)** An RC low-pass filter has H(jω) = 1/(1 + jωRC) with RC = 1 ms. (a) Find the cut-off frequency [2]. (b) Find the output for x(t) = cos(1000t) + cos(10000t) [6]. (c) Find the step response and the 10-90 percent rise time (2.2 RC) [4]. (d) Is the filter causal and stable? [2]

**Q4. Sampling (16 marks)** (a) A signal is bandlimited to 4 kHz: what is the minimum sampling frequency? [2] (b) A 7 kHz tone is sampled at 10 kHz: what frequency appears in the samples, and a 5 kHz tone at 8 kHz? [4] (c) A 10-bit ADC with a 3.3 V full scale: find the LSB size and the ideal SNR for a full-scale sine [4] (d) Explain the need for an anti-aliasing filter and what happens if it is omitted [3] (e) Explain how a DAC reconstructs a signal [3]

**Q5. Bandwidth and communications (10 marks)** (a) An AM signal x(t) cos(2π f_c t) with message bandwidth 5 kHz uses a 1 MHz carrier: give the transmission bandwidth and spectrum occupancy [4]. (b) Explain why a short pulse needs a large bandwidth (time-bandwidth product) with the rect-sinc example [3]. (c) What is the effect of a delay on the spectrum? [3]

## Solutions and Marking Guide

**Q1.**
(a) ω0 = 2π (period 1 s). 2 cos(2πt) = e^(j2πt) + e^(-j2πt): c_1 = c_-1 = 1. sin(4πt) = (e^(j4πt) - e^(-j4πt))/(2j): c_2 = 1/(2j) = **-j/2**, c_-2 = **j/2**. c_0 = **1**. Power = Σ|c_k|² = 1 + 1 + 1 + 0.25 + 0.25 = **3.5** (check: 1² + 2²/2 + 1²/2 = 3.5 ✓).
(b) For an odd square wave of amplitude 1: b_k = (2/T)∫ x sin(kω0 t) dt = **4/(πk)** for odd k and 0 for even k: **4/π = 1.273 (k = 1), 4/(3π) = 0.424 (k = 3), 4/(5π) = 0.255 (k = 5)**. Parseval: the power of the wave is 1; the harmonics contribute Σ b_k²/2 = (8/π²)(1 + 1/9 + 1/25 + ...): the first term 0.811, with three terms 0.811 + 0.090 + 0.032 = 0.933, and the sum over all odd k reaches 1.
(c) An odd signal has only sine terms; half-wave symmetry x(t + T/2) = -x(t) removes even harmonics: only **odd sine harmonics** remain.
(d) At a jump discontinuity, the partial sums overshoot by about **9 percent** of the jump, and the overshoot does not vanish as more terms are added (it narrows towards the jump): a consequence of approximating a discontinuity with continuous functions.

**Q2.**
(a) X(f) = ∫(-1 to 1) e^(-j2πft) dt = sin(2πf)/(πf) = **2 sinc(2f)**. The first zero is at **f = 0.5 Hz** (X(0) = 2, the area of the pulse).
(b) Step 1: X(f) = **1/(1 + j2πf)**.
Step 2: Energy in time: ∫(0 to ∞) e^(-2t) dt = **0.5**.
Step 3: Energy in frequency: ∫|X|² df = ∫ df/(1 + 4π² f²) = (1/(2π)) × π = **0.5** ✓.
(c) cos(2π f_c t) = (e^(j2πf_c t) + e^(-j2πf_c t))/2, so **FT{x cos} = [X(f - f_c) + X(f + f_c)]/2**: two copies of the baseband triangle, centred at ±f_c, each with half the height and bandwidth 2B in total around the carrier (from f_c - B to f_c + B).
(d) rect((t - 3)/2) has FT **2 sinc(2f) e^(-j6πf)**: same magnitude, linear phase -6πf. For rect(2t) (compressed by 2): X(f) = (1/2) sinc(f/2) (half as tall, twice as wide).

**Q3.**
(a) f_c = 1/(2π RC) = **159 Hz** (ω_c = 1000 rad/s).
(b) Step 1: At ω = 1000: |H| = 1/sqrt 2 = 0.707, phase -45°.
Step 2: At ω = 10,000: |H| = 1/sqrt(101) = 0.0995, phase = -arctan 10 = -84.3°.
Step 3: **y(t) = 0.707 cos(1000t - 45°) + 0.0995 cos(10,000t - 84.3°)**.
Step 4: The high-frequency component is attenuated by 20 dB.
(c) Step response y(t) = (1 - e^(-t/RC)) u(t) = **(1 - e^(-1000t))u(t)**; the 10-90 percent rise time = 2.2 RC = **2.2 ms**.
(d) h(t) = (1/RC) e^(-t/RC) u(t): **causal** and **stable** (∫|h| = 1).

**Q4.**
(a) f_s > 2B = **8 kHz** (the Nyquist rate; practical systems use 10 kHz or more with a guard band).
(b) 7 kHz at 10 kHz: the images are at 7 - 10 = -3 kHz, so it aliases to **3 kHz**. 5 kHz at 8 kHz: 5 - 8 = -3 kHz: appears at **3 kHz** (the phase is inverted).
(c) LSB = 3.3 V/2^10 = **3.22 mV**; SNR = 6.02 × 10 + 1.76 = **61.96 dB**.
(d) Components above f_s/2 would alias onto the band of interest and cannot be removed afterwards; an **analog low-pass filter** with its cut-off below f_s/2 removes them before sampling. Without it, noise and interference at (for example) 7 kHz appear as a spurious 3 kHz signal.
(e) A DAC holds each sample for one period (**zero-order hold**, a staircase with a sinc-shaped frequency response) and a **reconstruction low-pass filter** removes the spectral images centred at multiples of f_s, leaving the original band (ideally a sinc interpolation).

**Q5.**
(a) AM double-sideband spectrum: [f_c - 5 kHz, f_c + 5 kHz]: **bandwidth 10 kHz**, centred at 1 MHz (twice the message bandwidth).
(b) A narrow pulse rect(t/T) has the spectrum T sinc(fT) with the main lobe width 2/T: the shorter the pulse, the wider the spectrum (the product of duration and bandwidth is constant: time-bandwidth product). A short pulse needs a large bandwidth to be transmitted without distortion.
(c) A delay t0 multiplies the spectrum by e^(-j2πf t0): the **magnitude is unchanged** and the **phase changes linearly** with frequency (a linear-phase system has a constant group delay t0 for all components: no distortion).

---

# Assignment 3: Laplace Transform, z-Transform and the DFT (80 marks)

## Questions

**Q1. Laplace transforms (12 marks)** (a) Find L{e^(-2t) cos 3t u(t)}, L{t e^(-t) u(t)} and L{u(t - 2)} [6]. (b) Find the inverse transforms of 1/((s + 1)(s + 2)), (s + 3)/(s² + 4s + 8) and 1/((s + 1)²(s + 2)) [6].

**Q2. Transfer function (14 marks)** A system has H(s) = 1/(s² + 3s + 2). (a) Find the poles and zeros and decide stability [3]. (b) Find the impulse response and the step response [5]. (c) Find the DC gain and the magnitude at ω = 1 rad/s [3]. (d) Write the differential equation [1]. (e) Give the output for x = 2 cos t in steady state [2].

**Q3. Second-order response (12 marks)** H(s) = ω_n²/(s² + 2ζω_n s + ω_n²) with ω_n = 2 rad/s and ζ = 0.5. (a) Find the poles [2]. (b) Find the percent overshoot, peak time and 2 percent settling time [6]. (c) What happens for ζ = 1 and ζ > 1? [2] (d) Match the response to an RLC circuit: give the R, L, C relations [2].

**Q4. Circuit application (8 marks)** A series RLC circuit has R = 2 Ω, L = 1 H and C = 0.2 F; the output is the capacitor voltage. (a) Find H(s) [3]. (b) Find the poles, damping ratio and natural frequency [3]. (c) Find the response to a 10 V step with zero initial conditions [2].

**Q5. z-transform and DT systems (16 marks)** (a) Find the z-transform of a^n u[n] and its ROC, and of u[n] [3]. (b) For y[n] - 0.5 y[n - 1] = x[n]: find H(z), the pole and the stability [3]. (c) Find |H(e^(jω))| at ω = 0, π/2 and π and describe the filter type [4]. (d) For the 3-point moving average y[n] = (x[n] + x[n - 1] + x[n - 2])/3 find H(e^(jω)) at ω = 0, π/3, 2π/3 and π [4]. (e) Compare FIR and IIR filters [2].

**Q6. DFT and FFT (18 marks)** (a) Compute the 4-point DFT of [1, 2, 3, 4] and of [1, 0, -1, 0] [6]. (b) Compute the circular convolution of [1, 2, 3, 4] and [1, 1, 0, 0] using the DFT [4]. (c) A signal sampled at 8 kHz is analysed with a 1024-point FFT: find the resolution and the bin of a 1 kHz tone [3]. (d) Count the multiplications for N = 1024 with the direct DFT and with the FFT [3]. (e) Explain spectral leakage and windowing [2].

**Q7. Design and application (4 marks)** Choose a sampling frequency, filter type and FFT size to measure the 50 Hz hum and its harmonics up to 500 Hz in a sensor signal with a resolution of 1 Hz.

## Solutions and Marking Guide

**Q1.**
(a) **(s + 2)/((s + 2)² + 9)**; **1/(s + 1)²**; **e^(-2s)/s**.
(b) 1/((s + 1)(s + 2)) = 1/(s + 1) - 1/(s + 2): **(e^(-t) - e^(-2t)) u(t)**. (s + 3)/(s² + 4s + 8) = (s + 3)/((s + 2)² + 4) = (s + 2)/((s + 2)² + 4) + (1/2)·2/((s + 2)² + 4): **e^(-2t)(cos 2t + (1/2) sin 2t) u(t)**. 1/((s + 1)²(s + 2)) = 1/(s + 2) - 1/(s + 1) + 1/(s + 1)²: **(e^(-2t) - e^(-t) + t e^(-t)) u(t)**.

**Q2.**
(a) Poles: s² + 3s + 2 = (s + 1)(s + 2): **-1 and -2** (both in the left half-plane): **stable**. There are no zeros.
(b) H = 1/(s + 1) - 1/(s + 2): **h(t) = (e^(-t) - e^(-2t)) u(t)**. Step: Y = H/s = 1/(2s) - 1/(s + 1) + 1/(2(s + 2)): **y(t) = 0.5 - e^(-t) + 0.5 e^(-2t)**, which tends to 0.5.
(c) DC gain H(0) = **0.5**. At ω = 1: |H(j)| = 1/|(-1 + 2) + j3| = 1/sqrt(1 + 9) = **0.316** (phase -71.6°).
(d) **y'' + 3y' + 2y = x**.
(e) y_ss = 2 × 0.316 cos(t - 71.6°) = **0.632 cos(t - 71.6°)**.

**Q3.**
(a) s = -ζω_n ± jω_n sqrt(1 - ζ²) = **-1 ± j1.732** (ω_d = 1.732 rad/s).
(b) Step 1: Overshoot = exp(-πζ/sqrt(1 - ζ²)) = exp(-1.814) = **16.3 percent**.
Step 2: Peak time = π/ω_d = **1.81 s**.
Step 3: Settling time (2 percent) ≈ 4/(ζω_n) = **4 s**.
(c) ζ = 1: **critically damped** (a double real pole, the fastest response without overshoot); ζ > 1: **overdamped** (two real poles, slower, no overshoot).
(d) The series RLC (output across C) has ω_n = 1/sqrt(LC) and ζ = (R/2) sqrt(C/L).

**Q4.**
(a) Voltage division with impedances: H(s) = (1/(sC))/(R + sL + 1/(sC)) = 1/(LC s² + RC s + 1) = **1/(0.2 s² + 0.4 s + 1) = 5/(s² + 2s + 5)**.
(b) Poles: s² + 2s + 5 = 0 gives **-1 ± j2**; ω_n = sqrt 5 = 2.236 rad/s; ζ = 2/(2 sqrt 5) = **0.447** (underdamped).
(c) Step 10 V: Y = 50/(s(s² + 2s + 5)) = 10/s - 10(s + 2)/(s² + 2s + 5): **y(t) = 10 - e^(-t)(10 cos 2t + 5 sin 2t)** (underdamped with ζ = 0.447: the overshoot is exp(-πζ/sqrt(1 - ζ²)) = 20.8 percent, so the first peak is 10 + 2.08 = 12.08 V at t = π/2 = 1.57 s).

**Q5.**
(a) X(z) = Σ a^n z^(-n) = **1/(1 - a z^(-1)) = z/(z - a)**, ROC |z| > |a|. For a = 1: **u[n] ↔ z/(z - 1)**, |z| > 1.
(b) Taking transforms: Y(1 - 0.5 z^-1) = X, so **H(z) = 1/(1 - 0.5 z^(-1)) = z/(z - 0.5)**: a pole at **z = 0.5** inside the unit circle: **stable** (and causal).
(c) |H(e^(jω))| = 1/|1 - 0.5 e^(-jω)|: at ω = 0: 1/0.5 = **2**; at ω = π/2: 1/sqrt(1.25) = **0.894**; at ω = π: 1/1.5 = **0.667**. The gain falls with frequency: a **low-pass** filter (a one-pole smoother).
(d) H = (1 + e^(-jω) + e^(-j2ω))/3. |H| at ω = 0: **1**; ω = π/3: **0.667**; ω = 2π/3: **0** (a zero: the filter removes a component at 2π/3); ω = π: **0.333**. A low-pass filter with a null at ω = 2π/3.
(e) **FIR:** finite impulse response, no feedback, always stable, exactly linear phase possible, but needs more coefficients for sharp filters. **IIR:** feedback (poles), a sharp response with few coefficients, but can be unstable and has non-linear phase.

**Q6.**
(a) X[k] = Σ x[n] e^(-j2πkn/4). For [1, 2, 3, 4]: X[0] = 10; X[1] = 1 + 2(-j) + 3(-1) + 4(j) = -2 + 2j; X[2] = 1 - 2 + 3 - 4 = -2; X[3] = -2 - 2j. So **[10, -2 + 2j, -2, -2 - 2j]**. For [1, 0, -1, 0]: X[0] = 1 - 1 = 0; X[1] = 1 + (-1)(e^(-jπ)) = 1 + 1 = 2; X[2] = 1 + (-1)(e^(-j2π)) = 0; X[3] = 2. So **[0, 2, 0, 2]**.
(b) DFT([1, 1, 0, 0]) = [2, 1 - j, 0, 1 + j]. Multiplying term by term with [10, -2 + 2j, -2, -2 - 2j] gives [20, 4j, 0, -4j], and the inverse transform yields the circular convolution **[5, 3, 5, 7]** (direct check: y[0] = 1·1 + 4·1 = 5; y[1] = 2 + 1 = 3; y[2] = 3 + 2 = 5; y[3] = 4 + 3 = 7).
(c) Resolution Δf = f_s/N = 8000/1024 = **7.8125 Hz**; the 1 kHz tone falls in bin k = 1000/7.8125 = **128**.
(d) The direct DFT needs N² = **1,048,576** complex multiplications; the FFT needs about (N/2) log2 N = **5120**: 200 times fewer.
(e) A finite observation window multiplies the signal by a rectangle, convolving the spectrum with a sinc: a tone that does not fall exactly on a bin **leaks** into neighbouring bins (side lobes). **Windows** (Hann, Hamming, Blackman) taper the ends, reducing side lobes at the cost of a wider main lobe.

**Q7.** For harmonics up to 500 Hz choose **f_s ≥ 1 kHz plus margin: f_s = 2 kHz** with an anti-aliasing filter cut off at about 600 to 800 Hz; the resolution of 1 Hz needs **N = f_s/Δf = 2000 samples**, so use a **2048-point FFT** (resolution 0.98 Hz); apply a Hann window to reduce leakage between the 50 Hz harmonics and average several FFT frames to reduce noise.
