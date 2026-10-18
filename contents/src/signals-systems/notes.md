# Signals and Systems: Complete Lecture Notes

A **signal** carries information as a function of time (or another variable): voltage from a microphone, a sampled sensor reading, an image. A **system** transforms input signals into output signals: an amplifier, a filter, a communication channel, a control loop. This course gives the mathematics (convolution, Fourier, Laplace and z transforms) used in circuits, communications, control, DSP and machine learning. Notation: x(t) continuous-time (CT), x[n] discrete-time (DT), u(t) unit step, δ(t) unit impulse, j = sqrt(-1), ω = 2π f.

## Chapter 1. Signals

### 1.1 Classification
- **CT versus DT:** x(t), t real; x[n], n integer. **Analog versus digital** (amplitude continuous or quantised).
- **Periodic:** x(t + T) = x(t); the smallest T is the fundamental period. A sum of sinusoids is periodic if the frequency ratio is rational: cos(2πt) + cos(3πt) has frequencies 1 and 1.5 Hz, common fundamental 0.5 Hz, so T = 2 s. A DT sinusoid cos(ω0 n) is periodic only if ω0/(2π) is rational: cos(0.2πn) has period 10.
- **Even** x(-t) = x(t), **odd** x(-t) = -x(t); any signal splits as x = x_e + x_o with x_e = (x(t) + x(-t))/2.
- **Energy and power:** E = ∫|x|² dt; P = lim (1/2T)∫|x|² dt. Energy signals (finite E, zero power): e^(-2t)u(t) has E = 1/4. Power signals (finite P): A cos(ω0 t) has P = A²/2. Sinusoids with amplitude A have rms value A/sqrt 2.
- **Deterministic versus random** signals (noise).

### 1.2 Elementary signals
- Unit step u(t); rectangle rect(t/T); ramp r(t) = t u(t).
- **Unit impulse** δ(t): zero for t ≠ 0, ∫δ = 1. **Sifting:** ∫x(t) δ(t - t0) dt = x(t0). δ(t) = du/dt. DT: δ[n] = 1 for n = 0, else 0; u[n] = Σ_{k≤n} δ[k].
- **Complex exponential** e^(st) with s = σ + jω: growing/decaying sinusoids (σ the rate, ω the frequency). e^(jω0 t) = cos ω0 t + j sin ω0 t (Euler).
- **Sinc** sinc(x) = sin(πx)/(πx); **Gaussian**; DT exponentials a^n u[n].

### 1.3 Transformations of the independent variable
x(t - t0) (delay), x(at) (scaling: compression if |a| > 1), x(-t) (reversal). Order matters: x(at + b) = x(a(t + b/a)): shift first or scale first, then check with a point.

## Chapter 2. Systems and Their Properties

A system maps an input x to an output y. Key properties:
- **Memoryless:** y(t) depends only on x(t) at the same time (y = x²). **Causal:** y(t) depends only on x at times ≤ t (needed for real-time processing); y(t) = x(t + 1) is non-causal.
- **Linear:** superposition: T{a x1 + b x2} = a T{x1} + b T{x2}. y = x² and y = x + 1 are **not** linear. **Time-invariant (TI):** a delayed input gives a delayed output. y(t) = t x(t) is linear but **not** time-invariant. y[n] = x[n] + x[n - 1] is linear, TI, causal.
- **Stable (BIBO):** a bounded input gives a bounded output. **Invertible:** distinct inputs give distinct outputs.
- **LTI systems** (linear time-invariant) are completely characterised by the **impulse response** h(t) (the output for x = δ), and they have the powerful transform tools below.

## Chapter 3. Convolution and LTI Systems

### 3.1 The convolution integral and sum
For LTI systems **y(t) = x(t) * h(t) = ∫ x(τ) h(t - τ) dτ** and **y[n] = Σ_k x[k] h[n - k]**. Properties: commutative, associative (series systems multiply transfer functions), distributive (parallel systems add), x * δ = x, delay property x * δ(t - t0) = x(t - t0).
- **DT example:** x = [1, 2, 3] and h = [1, 1] give y = [1, 3, 5, 3]. Another: [1, 2, 1] * [1, -1, 2] = [1, 1, 1, 3, 2].
- **Method (graphical):** flip h, slide it, multiply and sum. The length of the output is N_x + N_h - 1.
- **CT examples:** rect(t) * rect(t) is a triangle of height 1 (duration 2); e^(-t)u(t) * u(t) = (1 - e^(-t)) u(t). The step response is the running integral of the impulse response: s(t) = ∫ h; h = ds/dt.

### 3.2 System properties from h
- Causal ⇔ h(t) = 0 for t < 0. BIBO stable ⇔ ∫|h(t)| dt < ∞ (Σ|h[n]| < ∞). Memoryless ⇔ h = K δ.
- **FIR** (finite impulse response) and **IIR** systems in DT.

### 3.3 Differential and difference equations
- First-order RC circuit: y' + 2y = x gives h(t) = e^(-2t)u(t) and the step response (1 - e^(-2t))/2 u(t).
- DT: y[n] - 0.5 y[n - 1] = x[n] gives h[n] = (0.5)^n u[n] (IIR, stable since |0.5| < 1); the step response is 2(1 - 0.5^(n+1)): 1, 1.5, 1.75, 1.875, ... → 2.
- The total solution = zero-input response + zero-state response; initial conditions matter; the transforms below solve these equations algebraically.

## Chapter 4. Fourier Series

### 4.1 Periodic signals
A periodic x(t) with period T and ω0 = 2π/T can be written **x(t) = Σ c_k e^(jkω0 t)**, with **c_k = (1/T) ∫_T x(t) e^(-jkω0 t) dt**. Trigonometric form: x = a0 + Σ [a_k cos kω0 t + b_k sin kω0 t]. c_0 is the average value; c_k and c_-k are complex conjugates for real signals; harmonics are multiples of the fundamental.
- **Square wave** of amplitude ±1: only odd harmonics: b_k = 4/(πk) for odd k (so x = (4/π)(sin ω0 t + (1/3) sin 3ω0 t + ...)); the **Gibbs phenomenon** overshoots about 9 percent at discontinuities.
- **Parseval's theorem:** the average power equals Σ|c_k|². For the unit square wave the power is 1 and Σ(8/(π²k²)) over odd k = 1 (first term 0.81).
- **Symmetry shortcuts:** even signals have only cosines, odd only sines, half-wave symmetry only odd harmonics.
- **LTI response to a periodic input:** each harmonic is multiplied by H(jkω0).

## Chapter 5. The Fourier Transform

### 5.1 Definition
**X(f) = ∫ x(t) e^(-j2πft) dt**, **x(t) = ∫ X(f) e^(j2πft) df** (or in ω with a 1/2π factor). It extends Fourier series to non-periodic signals: X(f) is the **spectrum** (amplitude and phase) of the signal. Existence: absolutely integrable signals (and generalised transforms with impulses for periodic and constant signals).

### 5.2 Common pairs (frequency in Hz)
- δ(t) ↔ 1; 1 ↔ δ(f); **rect(t/T) ↔ T sinc(fT)** (first zero at f = 1/T); e^(-at)u(t) ↔ 1/(a + j2πf); cos(2πf0 t) ↔ [δ(f - f0) + δ(f + f0)]/2; e^(-πt²) ↔ e^(-πf²); sgn, u(t) ↔ 1/(j2πf) + δ(f)/2.

### 5.3 Properties
Linearity; **time shift** x(t - t0) ↔ X(f) e^(-j2πft0) (a delay is a phase change; the magnitude is unchanged); **frequency shift/modulation** x(t) e^(j2πf0 t) ↔ X(f - f0); **scaling** x(at) ↔ (1/|a|) X(f/a) (compressing in time spreads the spectrum); **convolution ↔ multiplication:** x * h ↔ X H; multiplication in time ↔ convolution in frequency; **differentiation** dx/dt ↔ j2πf X; **duality**; **Parseval** (Rayleigh): ∫|x|² dt = ∫|X|² df.
- **Modulation:** x(t) cos(2πf_c t) ↔ [X(f - f_c) + X(f + f_c)]/2: shifts the spectrum to the carrier (AM radio).

### 5.4 Frequency response and filtering
For an LTI system **H(f) = FT{h}**; for input e^(j2πft) the output is H(f) e^(j2πft): complex exponentials are the **eigenfunctions** of LTI systems. For a sinusoid cos(ωt) the output is |H(jω)| cos(ωt + ∠H(jω)). **Example (RC low-pass):** H(jω) = 1/(1 + jωRC) with RC = 1 ms: at ω = 1000 rad/s, |H| = 0.707 and the phase is -45°; the -3 dB frequency is 1/(2π RC) = 159 Hz.
- **Ideal filters** (low-pass, high-pass, band-pass, band-stop) have a non-causal sinc impulse response and cannot be built; practical filters (Butterworth, Chebyshev) approximate them. **Bandwidth**, group delay, distortionless transmission (constant gain, linear phase).
- **Signal bandwidth** and the time-bandwidth trade-off: a short pulse has a wide spectrum.

## Chapter 6. Sampling and Reconstruction

- **Ideal sampling** multiplies by an impulse train: the spectrum repeats every f_s. **Nyquist-Shannon theorem:** a signal bandlimited to B can be recovered exactly if **f_s > 2B**; the Nyquist rate is 2B. A 4 kHz signal needs more than 8 kHz.
- **Aliasing:** a component at f is indistinguishable from f - k f_s: a 7 kHz tone sampled at 10 kHz appears at |7 - 10| = **3 kHz**. Prevent with an **anti-aliasing filter** before the ADC. Reconstruction uses an ideal low-pass (sinc interpolation) or in practice a DAC with a zero-order hold and a reconstruction filter.
- **Quantisation:** an N-bit ADC has 2^N levels; the quantisation error is uniform with the step Δ = V_FS/2^N and **SNR ≈ 6.02 N + 1.76 dB** for a full-scale sine (12 bits: 74 dB). **Oversampling** and dither improve resolution.
- DT-CT relationships: ω = 2π f/f_s (rad/sample).

## Chapter 7. The Laplace Transform

### 7.1 Definition and region of convergence
**X(s) = ∫ x(t) e^(-st) dt**, s = σ + jω. The bilateral transform needs the **ROC**; the unilateral (from 0) is used for causal signals and initial conditions. Pairs: u(t) ↔ 1/s; e^(-at)u(t) ↔ 1/(s + a); t u(t) ↔ 1/s²; cos(ω0 t)u(t) ↔ s/(s² + ω0²); e^(-at) cos(bt) u(t) ↔ (s + a)/((s + a)² + b²); δ(t) ↔ 1.
**Properties:** linearity, shift (s-domain e^(-st0)), s-shift, differentiation (s X - x(0)), integration (X/s), convolution ↔ product, initial and final value theorems.

### 7.2 Transfer function and poles
For an LTI system with zero initial conditions **H(s) = Y(s)/X(s)** = Laplace transform of h(t). For a differential equation (a_n s^n + ... + a_0) Y = (b_m s^m + ... + b_0) X. **Poles** (roots of the denominator) and **zeros**.
- **Stability:** a causal LTI system is BIBO stable iff all poles lie in the **open left half-plane**; poles on the imaginary axis give marginal stability.
- **Example.** H(s) = 1/(s² + 3s + 2) = 1/((s + 1)(s + 2)): poles -1, -2 (stable). The step response: Y = H/s = 1/(2s) - 1/(s + 1) + 1/(2(s + 2)), so y(t) = 0.5 - e^(-t) + 0.5 e^(-2t). The DC gain is H(0) = 0.5.
- **Second-order systems:** H(s) = ω_n²/(s² + 2ζω_n s + ω_n²): poles at -ζω_n ± jω_n sqrt(1 - ζ²). Overshoot = exp(-πζ/sqrt(1 - ζ²)): ζ = 0.5 gives 16.3 percent. 1/((s + 1)² + 4) has the impulse response (1/2) e^(-t) sin 2t.
- **Frequency response** H(jω) is H(s) on the imaginary axis: magnitude and phase; **Bode plots**.
- **Block diagrams:** series H1 H2, parallel H1 + H2, feedback H = G/(1 + GH_f). The Laplace transform solves circuits (impedances R, sL, 1/(sC)) with initial conditions.

## Chapter 8. Discrete-Time Systems and the z-Transform

- **z-transform:** X(z) = Σ x[n] z^(-n). Pairs: δ[n] ↔ 1; a^n u[n] ↔ z/(z - a) = 1/(1 - a z^-1), |z| > |a|; u[n] ↔ z/(z - 1); delay x[n - 1] ↔ z^-1 X(z); convolution ↔ product.
- **Transfer function:** y[n] - 0.5 y[n - 1] = x[n] gives H(z) = 1/(1 - 0.5 z^-1) with a pole at z = 0.5. A causal DT system is **stable iff all poles lie inside the unit circle**.
- **Frequency response:** H(e^(jω)) = H(z) at z = e^(jω); periodic in ω with period 2π. **FIR filters** (no poles except at the origin; always stable; linear phase possible) and **IIR filters** (from analog prototypes by the bilinear transform).
- **Examples.** The 3-tap filter h = [1, 2, 1]/4 has |H| = 1 at ω = 0, 0.5 at ω = π/2 and 0 at ω = π (a low-pass filter). A 4-point moving average has a zero at ω = π/2.

## Chapter 9. The DFT and FFT

- **Discrete Fourier transform:** X[k] = Σ_{n=0}^{N-1} x[n] e^(-j2πkn/N), a sampled version of the spectrum. **Inverse:** x[n] = (1/N) Σ X[k] e^(j2πkn/N). Frequency of bin k is k f_s/N; resolution f_s/N.
- **Examples.** x = [1, 2, 3, 4]: X = [10, -2 + 2j, -2, -2 - 2j]. A unit impulse has a flat spectrum (all ones). A rectangular window of four ones in eight samples has X[0] = 4, X[2] = 0, X[4] = 0, X[6] = 0 and X[1] = 1 - 2.414j.
- **FFT** (Cooley-Tukey): computes the N-point DFT in **O(N log N)** instead of O(N²) by splitting into even and odd samples. For N = 10^6 it is about 50,000 times faster.
- **Spectral analysis issues:** leakage and windowing (Hann, Hamming), zero padding, **circular convolution** (use zero-padding to get linear convolution), the **short-time Fourier transform** and spectrograms. Applications: audio, OFDM (Wi-Fi, LTE), image compression (DCT), radar.

## Chapter 10. Applications and Tools
- **Communications:** modulation (AM, FM), channel filtering, equalisation, matched filters. **Control:** transfer functions, stability by pole location, step response specifications. **Audio and images:** filtering, compression. **Biomedical:** ECG filtering.
- **Software:** Python (NumPy `np.convolve`, `np.fft`, SciPy `signal.lfilter`, `signal.freqz`, `signal.bode`), MATLAB. Always check results against a hand calculation on a small example.

## Chapter 11. Common Mistakes Checklist
1. Forgetting to flip and shift correctly in convolution, or using the wrong output length (N + M - 1).
2. Confusing linear with affine (y = x + 1), and time-invariant with time-varying (y = t x(t)).
3. Mixing f (Hz) and ω (rad/s), forgetting the 2π and the 1/2π factors.
4. Sampling at exactly twice the bandwidth or ignoring the anti-aliasing filter.
5. Deciding stability from the numerator or from the sign of the real part of a zero; poles decide it.
6. Using the z-plane unit circle for CT systems or the left half-plane for DT systems.
7. Ignoring the region of convergence when inverting transforms.
8. Treating the DFT as the continuous spectrum without considering leakage and resolution.
