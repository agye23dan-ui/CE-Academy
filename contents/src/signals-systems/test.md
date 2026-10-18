# Signals and Systems: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** The fundamental period of cos(2πt) + cos(3πt) is
A) 1 s  B) 2 s  C) 3 s  D) 6 s

**2.** The energy of e^(-2t) u(t) is
A) 1/2  B) 1/4  C) 1  D) infinite

**3.** The average power of 4 cos(5t) is
A) 4  B) 8  C) 16  D) 2

**4.** The system y(t) = t x(t) is
A) linear and time-invariant  B) linear but time-varying  C) non-linear  D) non-causal

**5.** The system y(t) = x(t) + 1 is
A) linear  B) non-linear  C) non-causal  D) unstable

**6.** An LTI system is causal if and only if
A) h(t) = 0 for t < 0  B) h(t) = 0 for t > 0  C) ∫ h dt = 1  D) h is even

**7.** An LTI system is BIBO stable if and only if
A) h(t) is bounded  B) ∫|h(t)| dt is finite  C) h(t) is causal  D) h(t) is periodic

**8.** x(t) * δ(t - 2) equals
A) x(t)  B) x(t - 2)  C) x(t + 2)  D) 2x(t)

**9.** The convolution of [1, 2, 3] and [1, 1] has length
A) 3  B) 4  C) 5  D) 6

**10.** The Fourier series coefficient c_0 represents
A) the fundamental  B) the average value  C) the power  D) the phase

**11.** A unit-amplitude square wave contains
A) only even harmonics  B) only odd harmonics  C) all harmonics  D) no harmonics

**12.** The Fourier transform of a rectangular pulse is a
A) rectangle  B) sinc function  C) impulse  D) Gaussian

**13.** A time delay t0 changes the Fourier transform by
A) a factor e^(-j2πft0) (a linear phase)  B) scaling the magnitude  C) nothing  D) a shift in frequency

**14.** Multiplying a signal by cos(2π f_c t) in the time domain
A) shifts its spectrum to ±f_c  B) delays the signal  C) integrates it  D) filters it

**15.** The minimum sampling frequency for a signal bandlimited to 5 kHz is
A) 2.5 kHz  B) 5 kHz  C) greater than 10 kHz  D) 20 kHz

**16.** A 7 kHz tone sampled at 10 kHz appears at
A) 7 kHz  B) 3 kHz  C) 17 kHz  D) 0 Hz

**17.** The Laplace transform of u(t) is
A) 1  B) 1/s  C) s  D) 1/s²

**18.** A causal LTI system is stable if all poles lie
A) in the right half-plane  B) in the left half-plane  C) on the real axis  D) at the origin

**19.** The z-transform of a^n u[n] is
A) 1/(1 - a z)  B) z/(z - a)  C) z - a  D) a/z

**20.** The FFT of N points requires about
A) N operations  B) N log N operations  C) N² operations  D) 2^N operations

## Section B: Problems (40 marks)

**B1. (10 marks)** (a) Find the period of cos(0.2πn) [1]. (b) For the system y[n] = x[n] + x[n - 1] decide linearity, time-invariance, causality and stability, giving reasons [4]. (c) Compute [1, 2, 3] * [1, -1] [3]. (d) Find the impulse and step response of y' + 2y = x [2].

**B2. (10 marks)** (a) Find the exponential Fourier series of x(t) = 2 + 4 cos(2πt) + 2 sin(6πt) and its power [5]. (b) Find the FT of e^(-2t)u(t) [2]. (c) An RC low-pass filter has H(jω) = 1/(1 + jω/1000): find the output for cos(1000t) [3].

**B3. (10 marks)** (a) A 3 kHz signal is sampled at 4 kHz: find the aliased frequency [2]. (b) What anti-aliasing cut-off frequency would you use for f_s = 8 kHz? [2] (c) A 12-bit ADC with 5 V full scale: find the LSB and the ideal SNR [3]. (d) What is the Nyquist rate of a signal containing frequencies up to 20 kHz? [1] (e) Explain what a DAC reconstruction filter does [2].

**B4. (10 marks)** H(s) = 10/(s² + 4s + 8). (a) Find the poles and say if the system is stable [3]. (b) Find ω_n, ζ and the percent overshoot [4]. (c) Find the DC gain and the steady-state output for a 1 V step [2]. (d) For the DT system y[n] = 0.8 y[n - 1] + x[n], give H(z) and the stability [1].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **B** · 3 **B** · 4 **B** · 5 **B** · 6 **A** · 7 **B** · 8 **B** · 9 **B** · 10 **B** · 11 **B** · 12 **B** · 13 **A** · 14 **A** · 15 **C** · 16 **B** · 17 **B** · 18 **B** · 19 **B** · 20 **B**

Brief reasons: 1. Frequencies 1 and 1.5 Hz, fundamental 0.5 Hz. 3. A²/2 = 8. 9. 3 + 2 - 1 = 4. 15. Strictly greater than twice the bandwidth.

### Section B

**B1.**
(a) ω0/(2π) = 0.1 = 1/10: **N = 10**.
(b) **Linear** (a sum of linear operations), **time-invariant** (delaying the input delays the output), **causal** (uses only the present and past samples), **stable** (|y| ≤ 2 max|x|).
(c) [1, 2, 3] * [1, -1] = **[1, 1, 1, -3]**.
(d) **h(t) = e^(-2t) u(t)**; step response **(1 - e^(-2t))/2 u(t)**.

**B2.**
(a) ω0 = 2π. 4 cos(2πt) = 2e^(j2πt) + 2e^(-j2πt): c_±1 = 2. 2 sin(6πt) = (e^(j6πt) - e^(-j6πt))/j: c_3 = **-j**, c_-3 = **j**. c_0 = **2**. Power = 2² + 2² + 2² + 1 + 1 = 4 + 4 + 4 + 1 + 1 = **14** (check: 4 + 4²/2 + 2²/2 = 4 + 8 + 2 = 14 ✓).
(b) **1/(2 + j2πf)** (that is 1/(a + jω) with a = 2).
(c) At ω = 1000: |H| = 1/sqrt 2 = 0.707, phase -45°: **y = 0.707 cos(1000t - 45°)**.

**B3.**
(a) 3 kHz at f_s = 4 kHz: the alias is |3 - 4| = **1 kHz**.
(b) Below f_s/2 = 4 kHz, for example **3.4 kHz** (leaving a transition band).
(c) LSB = 5/4096 = **1.22 mV**; SNR = 6.02 × 12 + 1.76 = **74 dB**.
(d) **40 kHz**.
(e) A DAC holds each sample (staircase), which creates spectral images at multiples of f_s; the **reconstruction low-pass filter** removes them and smooths the staircase into a continuous signal.

**B4.**
(a) s² + 4s + 8 = 0 gives s = -2 ± j2: both poles in the left half-plane: **stable**.
(b) ω_n² = 8, so ω_n = **2.83 rad/s**; 2ζω_n = 4, ζ = **0.707**; overshoot = exp(-πζ/sqrt(1 - ζ²)) = exp(-π) = **4.3 percent**.
(c) DC gain = H(0) = 10/8 = **1.25**; the steady-state output for a 1 V step is **1.25 V**.
(d) **H(z) = 1/(1 - 0.8 z^-1)**: the pole at 0.8 is inside the unit circle: **stable**.
