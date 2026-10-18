# Digital Signal Processing: Lecture Notes

Digital signal processing (DSP) analyses and modifies signals as sequences of numbers: filtering audio, compressing images, recovering radio signals, cancelling noise. This course covers sampling and quantisation, discrete-time systems and the z-transform, the DFT and FFT, FIR and IIR filter design, multirate processing, adaptive filters and fixed-point implementation. Every number below was computed with numpy and scipy (Python), and the code shown was run. Prerequisites: Signals & Systems, Linear Algebra, Numerical Methods and programming.

# Chapter 1: Sampling and Quantisation

## 1.1 Sampling and aliasing
Sampling a continuous signal x(t) every T = 1/fs seconds gives x[n] = x(nT). A sinusoid of frequency f sampled at fs is indistinguishable from sinusoids at f + k fs. The **sampling theorem**: a signal containing no frequencies above B is completely recovered from its samples if fs > 2B (the **Nyquist rate**; fs/2 is the Nyquist frequency). Sampling too slowly causes **aliasing**: frequency f appears at |f - k fs| for the integer k nearest f/fs.
- 1 kHz sampled at 1.5 kHz appears at |1000 - 1500| = **500 Hz**.
- 7 kHz sampled at 8 kHz appears at **1 kHz**.
- 5 kHz sampled at 8 kHz appears at **3 kHz** (5 kHz is above the 4 kHz Nyquist frequency).
- 30 kHz sampled at 44.1 kHz appears at **14.1 kHz**.
Before sampling, an **anti-aliasing low-pass filter** removes everything above fs/2 (it cannot be done afterwards).

**Bandpass sampling.** A band from fL to fH with bandwidth B = fH - fL can be sampled below 2 fH if 2 fH/k <= fs <= 2 fL/(k - 1) for an integer k (k <= floor(fH/B)). For the band 20 to 25 kHz: k = 4 gives 12.5 kHz <= fs <= 13.33 kHz; k = 5 gives exactly 10 kHz. A 22.5 kHz tone sampled at 12.5 kHz appears at 22.5 - 2 × 12.5 = 2.5 kHz: the band is folded down without overlap.

## 1.2 Reconstruction
A DAC with a **zero-order hold** produces a staircase whose spectrum is multiplied by a sinc: at fs/2 the gain is sinc(0.5) = 0.637, a droop of **3.92 dB** at the Nyquist frequency, corrected with an equaliser and smoothed by an analog reconstruction filter.

## 1.3 Quantisation
An N-bit converter has 2^N levels. For a full-scale sine wave and uniform quantisation noise the **signal-to-quantisation-noise ratio** is SNR = 6.02 N + 1.76 dB: 8 bits 49.9 dB, 12 bits 74.0 dB, **16 bits 98.1 dB**, 24 bits 146 dB. Reaching 90 dB needs (90 - 1.76)/6.02 = 14.7, so **15 bits**. **Oversampling** by a factor of 4 spreads the noise over four times the bandwidth, so filtering to the signal band gains 10 log10 4 = 6 dB (one bit); noise shaping (sigma-delta converters) does much better.

# Chapter 2: Discrete-Time Systems

## 2.1 LTI systems and convolution
A system is **linear** (superposition), **time-invariant** (a delayed input gives a delayed output), **causal** (output depends only on present and past inputs), **BIBO stable** (bounded input gives bounded output; for LTI systems: the impulse response is absolutely summable). An LTI system is characterised by its **impulse response** h[n]; y[n] = sum_k x[k] h[n - k] = (x * h)[n].
Example: x = [1, 2, 3], h = [1, 1, 1] gives y = **[1, 3, 6, 5, 3]** (length 3 + 3 - 1 = 5).
- **FIR** (finite impulse response): y[n] = sum_{k=0}^{M} b_k x[n - k]; always stable; can have exactly linear phase.
- **IIR**: has feedback: y[n] = -sum a_k y[n - k] + sum b_k x[n - k]; efficient but may be unstable.
Example: y[n] = 0.5 y[n - 1] + x[n]. For an impulse input: y = 1, 0.5, 0.25, 0.125, 0.0625, ... so h[n] = 0.5^n u[n] (infinite, decaying: stable).

## 2.2 The z-transform
X(z) = sum x[n] z^-n. A delay by one sample multiplies by z^-1. The **transfer function** H(z) = Y(z)/X(z) = B(z)/A(z) is a ratio of polynomials in z^-1; its roots are **zeros** (B) and **poles** (A). The **region of convergence (ROC)** of a causal sequence is outside the outermost pole: |z| > r_max.
- **Stability**: a causal system is stable if and only if **all poles lie strictly inside the unit circle**.
- H(z) = 1/(1 - 1.2 z^-1 + 0.32 z^-2) has poles at **0.8 and 0.4**: stable; its impulse response begins 1, 1.2, 1.12, 0.96, 0.794, 0.645, 0.520, 0.418, ...
- H(z) = 1/(1 - 1.5 z^-1 + 0.9 z^-2) has poles 0.75 ± 0.581j with magnitude 0.949: stable, a lightly damped oscillation.

## 2.3 Frequency response
Substituting z = e^{jw} gives H(e^{jw}), periodic in w with period 2π; w = π is the Nyquist frequency; w = 2π f/fs.
- y[n] = 0.5 y[n - 1] + x[n]: |H| = 1/|1 - 0.5 e^{-jw}|: 2 at w = 0, 0.894 at w = π/2 (phase -26.6°), 0.667 at w = π: a low-pass filter.
- **Moving average** of 5 samples: |H(w)| = |sin(5w/2)/(5 sin(w/2))|, with zeros at w = 2π k/5; at w = π/5 it is **0.647**; at fs = 1000 Hz it nulls 200 Hz and 400 Hz.
- **DC blocker** H(z) = (1 - z^-1)/(1 - 0.9 z^-1): gain 0 at DC, 1.05 at fs/4 and 1.05 at fs/2.
- **Notch filter** to remove 50 Hz hum at fs = 1000 Hz: theta = 2π 50/1000 = 0.314 rad; H(z) = (1 - 2 cos(theta) z^-1 + z^-2)/(1 - 2 r cos(theta) z^-1 + r^2 z^-2) puts zeros on the unit circle at e^{±j theta} (gain exactly 0 at 50 Hz) and poles at radius r = 0.95 on the same angles to keep the rest of the spectrum flat: gain at DC 1.025 and at fs/2 1.052; the -3 dB bandwidth is about 2(1 - r) rad/sample = 0.1 rad = **15.9 Hz** (measured 15.6 Hz). A pole radius closer to 1 gives a narrower notch but a longer ringing transient.

# Chapter 3: The DFT and Spectrum Analysis

## 3.1 Definitions
The N-point **DFT** X[k] = sum_{n=0}^{N-1} x[n] e^{-j2πkn/N}, k = 0..N-1; inverse x[n] = (1/N) sum X[k] e^{j2πkn/N}. Bin k corresponds to frequency k fs/N; the **frequency resolution** is fs/N: for fs = 8000 Hz and N = 1024 it is **7.8125 Hz**.
Examples: x = [1, 2, 3, 4]: X = **[10, -2 + 2j, -2, -2 - 2j]**. x = [1, 1, 1, 1, 0, 0, 0, 0]: |X| = [4, 2.613, 0, 1.082, 0, 1.082, 0, 2.613]. Parseval: sum |x|^2 = (1/N) sum |X|^2 (4 = 4).
For x = [1, 2, 3, 4, 0, 0, 0, 0] the 8-point DFT is X[0] = 10, X[1] = -0.414 - 7.243j, X[2] = -2 + 2j, X[3] = 2.414 - 1.243j, X[4] = -2.
Properties: linearity, circular time shift (multiplies by a phase), **circular convolution** (the DFT turns circular convolution into multiplication). For a = [1, 2, 3, 4] and b = [1, 0, 1, 0] the circular convolution is [4, 6, 4, 6], whereas the linear convolution is [1, 2, 4, 6, 3, 4, 0]: to get linear convolution from the DFT, **zero-pad** both sequences to length >= L + M - 1.

## 3.2 Leakage and windows
The DFT assumes the N samples are one period of a periodic signal. If a sinusoid does not complete a whole number of cycles in the window, its energy **leaks** into other bins. Example: N = 256, fs = 8000 Hz, a sine of amplitude 1: at 1000 Hz (exactly bin 32) all the energy is in bin 32 (magnitude 128 = A N/2); at 1015.625 Hz (bin 32.5) the peak falls to 82 and neighbouring bins carry 81, 27.7, 26.7, 16.8, spreading about **14 percent of the energy** outside the three central bins. A **window** w[n] tapers the ends:
```
window      main lobe (null to null, bins)   highest sidelobe
rectangular      2.0                           -13.3 dB
Hann             4.06                          -31.5 dB
Hamming          4.14                          -42.4 dB
Blackman         6.09                          -58.1 dB
```
(N = 64.) The trade-off: low sidelobes (less leakage) cost a wider main lobe (poorer resolution). With a Hann window the same off-bin tone leaks only **0.05 percent** of its energy outside five bins. **Zero-padding** interpolates the displayed spectrum but does not improve resolution, which depends on the data length.

## 3.3 The FFT
The fast Fourier transform computes the DFT with about (N/2) log2 N complex multiplications instead of N^2 by repeatedly splitting into even and odd samples (**radix-2 decimation in time**): X[k] = E[k] + W_N^k O[k], X[k + N/2] = E[k] - W_N^k O[k] with W_N = e^{-j2π/N}; each such pair is a **butterfly**. Counts: N = 8: 12 multiplications instead of 64 (5.3 times fewer); N = 1024: **5120 against 1,048,576** (204.8 times fewer); N = 4096: 24,576 against 16,777,216 (683 times). N must be a power of two (or use mixed-radix algorithms).
**Fast convolution (overlap-add)**: to filter with an M = 128 tap FIR using N = 1024 FFTs, each block handles L = N - M + 1 = 897 new samples with two FFTs and one product: 11,264 complex multiplications = 45,056 real ones, about **50 real multiplications per output sample against 128** for direct convolution; the advantage grows with M.

```python
import numpy as np
x = np.array([1, 2, 3, 4, 0, 0, 0, 0.])
print(np.fft.fft(x))          # the 8-point DFT above
```

# Chapter 4: FIR Filter Design

## 4.1 Linear phase
An FIR filter with symmetric coefficients h[n] = h[N - 1 - n] has exactly **linear phase**: all frequencies are delayed by the same (N - 1)/2 samples (group delay), so the waveform shape is preserved. A 51-tap filter at fs = 8000 Hz delays by 25 samples = **3.125 ms**. Four types exist (odd/even length × symmetric/antisymmetric); type II (even length, symmetric) has a zero at w = π and cannot be a high-pass.

## 4.2 Window method
Design the ideal low-pass impulse response h_d[n] = sin(w_c n)/(π n), truncate to N taps with a window. Window choice sets the stopband attenuation (about 21 dB rectangular, 44 Hann, 53 Hamming, 74 Blackman) and the transition width (about 0.9, 3.1, 3.3 and 5.5 fs/N respectively).
```python
import scipy.signal as sg
h = sg.firwin(51, 1000, window='hamming', fs=8000)   # 51-tap low-pass, fc = 1 kHz
```
Result: gain at 1 kHz = **-6.01 dB** (half amplitude at the cutoff, characteristic of the window method), DC gain 0.000 dB, stopband attenuation above 1518 Hz **-55.1 dB**, coefficients symmetric. The Hamming transition width estimate is 3.3 × 8000/51 = 518 Hz. To get a 500 Hz transition: N ≈ 3.3 × 8000/500 = **53** taps with Hamming, 50 with Hann, 88 with Blackman.

**Kaiser window**: A (dB) of attenuation and transition width Δf: beta = 0.1102 (A - 8.7) for A > 50; N ≈ (A - 7.95)/(2.285 Δw) + 1 where Δw = 2π Δf/fs. For A = 60 dB and Δf = 500 Hz at fs = 8000: scipy gives **60 taps** with beta = 5.65 (the formula gives 58); the designed filter measured -60.4 dB stopband and 0.009 dB passband ripple.

## 4.3 Equiripple (Parks-McClellan) design
`remez` minimises the maximum error, giving the shortest filter for a spec (equal-height ripples in both bands). With a passband to 1000 Hz and stopband from 1500 Hz at fs = 8000, the stopband attenuation obtained by taps: 25 taps **-32.2 dB**, 31: -38.7 dB, 35: -41.8 dB, **41: -47.2 dB**. For -60 dB the Kaiser design needed 60 taps; the equiripple design reached -60 dB with **55** taps (about 8 percent fewer, and with a smaller passband ripple of 0.007 dB); the saving is larger for tighter specifications.

**Implementation cost**: an N-tap FIR needs N multiply-accumulates per output sample; for N = 128 at 48 kHz stereo: 48,000 × 128 × 2 = **12.3 million MAC/s**. A symmetric filter can share multiplications (half as many).

# Chapter 5: IIR Filter Design

## 5.1 From analog prototypes
Design an analog low-pass prototype (Butterworth: maximally flat; Chebyshev I: ripple in passband, steeper; Chebyshev II: ripple in stopband; elliptic: ripple in both, steepest), then map to the z-domain.
- **Impulse invariance**: h[n] = T h_a(nT); preserves the impulse response but aliases (unsuited to high-pass).
- **Bilinear transform**: s = (2/T)(1 - z^-1)/(1 + z^-1). It maps the entire analog axis onto the unit circle (no aliasing) but **warps frequency**: w_analog = (2/T) tan(w_digital/2). **Prewarp** the critical frequencies: for fc = 1000 Hz and fs = 8000 Hz, the analog cutoff must be 2 fs tan(π fc/fs) = 16,000 tan(π/8) = **6627.4 rad/s** (instead of 2π × 1000 = 6283.2).

## 5.2 Example and order comparison
```python
b, a = sg.butter(2, 1000, fs=8000)
```
gives b = [0.09763, 0.19526, 0.09763], a = [1, -0.94281, 0.33333]: gain -3.01 dB at 1 kHz, DC gain 1, poles 0.471 ± 0.333j with magnitude 0.577 (stable).

Minimum order for a passband edge of 1000 Hz (1 dB) and a stopband edge of 2000 Hz (40 dB) at fs = 8000: Butterworth **6**, Chebyshev I **4**, elliptic **4**. For a tighter spec (stopband edge 1500 Hz and 50 dB): Butterworth **14**, Chebyshev I **7**, elliptic **5**. Butterworth order formula: n = log10((10^{A/10} - 1)/(10^{Ap/10} - 1))/(2 log10(Ws/Wp)) using prewarped frequencies (6627 and 16,000 rad/s here): 5.99, rounded up to 6.

**FIR versus IIR**: IIR meets a magnitude spec with far fewer coefficients (a 4th-order elliptic against 40 or more FIR taps), but has non-linear phase, can be unstable, is sensitive to coefficient quantisation, and may limit-cycle. FIR has linear phase and guaranteed stability. Implement high-order IIRs as **cascaded second-order sections (biquads)** (`sg.sosfilt`), never as one high-order polynomial.

# Chapter 6: Multirate Signal Processing

- **Decimation by M**: low-pass filter at fs/(2M), then keep every Mth sample (the filter prevents aliasing). **Interpolation by L**: insert L - 1 zeros, then low-pass filter at the lower of the two Nyquist frequencies and scale by L.
- **Rational conversion by L/M**: 44.1 kHz to 48 kHz: 48,000/44,100 = 160/147 (gcd 300), so interpolate by 160 then decimate by 147 (in practice a polyphase filter).
- **Polyphase implementation** computes only the outputs that are kept: a 64-tap decimator by 4 at 48 kHz input needs 64 × 12,000 = **768,000 MAC/s** instead of 64 × 48,000 = 3,072,000 (a factor of M saved); a 128-tap interpolator by 4 needs 1,536,000 instead of 6,144,000 MAC/s at the output rate (a factor of L).
- Uses: sample-rate conversion in audio, software radio, oversampled ADCs (sigma-delta) and DACs, filter banks, wavelets.

# Chapter 7: Adaptive Filters

An adaptive filter adjusts its coefficients to minimise an error signal, tracking an unknown or changing system: echo cancellation, noise cancellation, equalisation of communication channels, system identification.

**LMS algorithm** (least mean squares, Widrow-Hoff): for input vector u[n] (the last N samples), weights w, desired signal d[n]: e[n] = d[n] - w^T u[n]; w <- w + mu e[n] u[n]. Cost: 2N multiplications per sample. **Step size**: stable on average if 0 < mu < 2/(N sigma_x^2) (N sigma_x^2 is the total input power); a larger mu converges faster but gives more steady-state error ("misadjustment" about mu N sigma_x^2/2).
```python
import numpy as np
def lms(x, d, N, mu):
    w = np.zeros(N)
    for n in range(N - 1, len(x)):
        u = x[n - N + 1:n + 1][::-1]
        e = d[n] - w @ u
        w = w + mu * e * u
    return w
```
Experiment (unknown system h = [0.5, -0.3, 0.2, 0.1], white input of unit variance, 4 weights, 4000 samples, no noise): for mu = 0.01, 0.05 and 0.2 the weights converged to exactly [0.5, -0.3, 0.2, 0.1] (squared error below 10^-30 at the end); the squared error averaged over the first 50 samples fell as mu increased (0.197, 0.087, 0.032), showing faster convergence. The stability limit is 2/(4 × 1) = 0.5. With measurement noise of variance 0.01 the excess error (misadjustment) was 0.6 percent for mu = 0.005 and **3.8 percent** for mu = 0.02, matching the theory mu N sigma_x^2/2 = 1 percent and 4 percent. **Other algorithms**: NLMS (normalised, step independent of input power), RLS (faster, O(N^2) cost), Kalman filters.

# Chapter 8: Implementation

## 8.1 Fixed-point arithmetic
Embedded DSPs use integer arithmetic. **Q15** format: a 16-bit two's-complement integer representing x/32768, range [-1, 1). 0.5 = 16384, 0.25 = 8192. Multiplying two Q15 numbers gives a Q30 result; shift right 15: 16384 × 8192 >> 15 = **4096** = 0.125. **Overflow**: 0.75 (24576) + 0.5 (16384) = 40960 wraps to **-24576 = -0.75**, a catastrophic error; hardware offers **saturation** (clipping to 0.99997) and wide accumulators (the MAC accumulator is 32 to 40 bits). Scale signals and use guard bits.

**Coefficient quantisation**: rounding the 51-tap Hamming filter to Q15 coefficients leaves a stopband attenuation of **-54.8 dB** (from -55.1 dB: negligible), but rounding to 8 bits gives **-30.5 dB** and to 6 bits only **-19.6 dB**. IIR filters are far more sensitive (poles near the unit circle shift): use second-order sections.

## 8.2 Real-time constraints
Processing must finish within one sampling period. For fs = 48 kHz the budget is 20.8 μs per sample (per channel); a 128-tap FIR stereo filter needs 12.3 MMAC/s, easy for a DSP or even a microcontroller with a MAC instruction. Block processing with FFTs reduces cost for long filters; **circular buffers** avoid copying data; DMA moves samples without the CPU; latency equals the block size plus filter delay.

## Quick reference
- Alias: f_a = |f - k fs|. SNR = 6.02 N + 1.76 dB. Resolution = fs/N.
- Poles inside the unit circle means stable. Linear-phase delay = (N - 1)/2 samples.
- Hamming: -53 dB, transition 3.3 fs/N. Kaiser beta = 0.1102 (A - 8.7).
- Bilinear prewarp: Omega = 2 fs tan(pi f/fs). LMS: 0 < mu < 2/(N sigma^2).
- FFT: (N/2) log2 N complex multiplications.
