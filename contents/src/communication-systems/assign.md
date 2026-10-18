# Communication Systems: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. Every number in the solutions was computed with numpy and scipy (the BER values are Monte Carlo simulations with 10^6 to 2 × 10^6 bits per point); reproduce them in Python.

# Assignment 1: Noise, Analog Modulation and PCM (Chapters 1 to 3)

**Q1. Noise.** (a) The thermal noise density at 290 K in W/Hz and dBm/Hz [3] (b) The noise power in 1 MHz and in 20 MHz (dBm) [3] (c) The noise floor of a receiver with a 6 dB noise figure in 20 MHz [4]

**Q2. AM waveform.** The envelope of an AM wave has a maximum of 12 V and a minimum of 4 V. (a) The modulation index and the carrier amplitude [4] (b) The sideband amplitudes [2] (c) The bandwidth for a 5 kHz message [2] (d) The efficiency [2]

**Q3. AM power.** (a) A carrier of 50 W with m = 1: total power and sideband power [3] (b) The same with m = 0.5 [3] (c) A transmitter of total power 1000 W with m = 0.6: the carrier power and sideband power [4]

**Q4. FM.** Find the modulation index and Carson bandwidth for (a) delta_f = 75 kHz, fm = 15 kHz [3] (b) delta_f = 5 kHz, fm = 3 kHz [3] (c) delta_f = 25 kHz, fm = 5 kHz [2] (d) Explain the significance of the Bessel zero at beta = 2.405 [2]

**Q5. AM versus FM.** Compare AM and wideband FM in bandwidth, power efficiency, noise performance, circuit complexity and uses [10]

**Q6. PCM.** (a) The SQNR for 8, 12, 16 and 24 bits [3] (b) The number of bits needed for 40 dB and 60 dB [3] (c) The bit rates of telephone speech (8 kHz, 8 bits) and CD stereo audio (44.1 kHz, 16 bits) [2] (d) The T1 line rate (24 channels plus 8 kb/s framing) [2]

**Q7. Spectrum check.** (a) An AM signal with fc = 100 kHz, fm = 5 kHz and m = 0.8 is analysed with an FFT: what are the spectral lines? [4] (b) An FM signal with fc = 500 kHz, fm = 10 kHz and delta_f = 50 kHz: the amplitudes of the carrier and of the first three sidebands [4] (c) How many sideband pairs contain 98 percent of the power for beta = 5? [2]

## Solutions to Assignment 1

**Q1.**
(a) Step 1: thermal noise power density N₀ = kT, with k = 1.38 × 10⁻²³ J/K and T = 290 K.
Step 2: N₀ = 1.38 × 10⁻²³ × 290 = **4.0 × 10⁻²¹ W/Hz**.
Step 3: convert to dBm/Hz: 10 log₁₀(4.0 × 10⁻²¹ W / 1 mW) = 10 log₁₀(4.0 × 10⁻¹⁸) = **-174 dBm/Hz**.
(b) Step 1: N = kTB = N₀B.
Step 2 (1 MHz): N = 4.0 × 10⁻²¹ × 10⁶ = 4.0 × 10⁻¹⁵ W = **-114 dBm** (-174 + 10 log₁₀ 10⁶ = -174 + 60).
Step 3 (20 MHz): -174 + 10 log₁₀(20 × 10⁶) = -174 + 73 = **-101 dBm**.
(c) Step 1: noise floor = thermal noise + noise figure.
Step 2: -174 + 10 log₁₀(20 × 10⁶) + NF = -174 + 73.0 + 6 = **-95.0 dBm**.

**Q2.** Envelope of an AM wave: maximum A_c(1 + m) = 12 V, minimum A_c(1 - m) = 4 V.
(a) Step 1: add the two: 2A_c = 16, so **A_c = 8 V**.
Step 2: subtract: 2mA_c = 8, so m = 8/16 = **0.5** (or m = (12 - 4)/(12 + 4)).
(b) Step 1: each sideband has amplitude mA_c/2 = 0.5 × 8/2 = **2 V**.
(c) Step 2: bandwidth = 2f_m = 2 × 5 kHz = **10 kHz**.
(d) Step 3: efficiency η = m²/(2 + m²) = 0.25/2.25 = **11.1 percent** (the share of power in the sidebands).

**Q3.**
(a) Step 1: total power P_t = P_c(1 + m²/2) = 50(1 + 1/2) = 50 × 1.5 = **75 W**.
Step 2: sideband power = P_t - P_c = 75 - 50 = **25 W**.
(b) Step 1: m = 0.5: P_t = 50(1 + 0.25/2) = 50 × 1.125 = **56.25 W**.
Step 2: sideband power = 56.25 - 50 = **6.25 W**.
(c) Step 1: P_t = 1000 W, m = 0.6: P_c = P_t/(1 + m²/2) = 1000/(1 + 0.18) = 1000/1.18 = **847.5 W**.
Step 2: sideband power = 1000 - 847.5 = **152.5 W** (15.3 percent of the total).

**Q4.** FM: β = Δf/f_m; Carson bandwidth B = 2(Δf + f_m).
(a) β = 75/15 = **5**; B = 2(75 + 15) = 2 × 90 = **180 kHz**.
(b) β = 5/3 = **1.67**; B = 2(5 + 3) = **16 kHz**.
(c) β = 25/5 = **5**; B = 2(25 + 5) = **60 kHz**.
(d) The carrier amplitude of a single-tone FM signal is proportional to |J₀(β)|. J₀ is zero at β = 2.405 (the computed value there is about -9 × 10⁻⁵ ≈ 0), so at that modulation index all of the power is in the sidebands. The zeros of J₀ at 2.405, 5.52, 8.65 are used to calibrate frequency deviation (the Bessel-null method).

**Q5.** **Bandwidth**: AM needs 2f_m (narrow); wideband FM needs 2(Δf + f_m), about 12f_m for β = 5 (broadcast FM: 180 kHz against 10 kHz for AM).
**Power efficiency**: AM wastes at least 67 percent of its power in the carrier (efficiency at most 33 percent); FM is constant envelope, so all power is useful and efficient class C nonlinear amplifiers can be used.
**Noise**: FM gives a noise reduction ("FM improvement") proportional to β² above a threshold SNR (about 10 dB), at the cost of bandwidth; AM has no such trade and its envelope is directly corrupted by noise and interference; FM also rejects amplitude noise (limiter) and shows the capture effect.
**Complexity**: AM demodulation is simplest (envelope detector, one diode); FM needs a discriminator or PLL.
**Uses**: AM for medium-wave broadcasting and aviation voice; FM for high-quality broadcasting, two-way radio and analogue TV sound.

**Q6.**
(a) Step 1: SQNR = 6.02n + 1.76 dB.
Step 2: n = 8: 48.16 + 1.76 = **49.9 dB**; n = 12: 72.24 + 1.76 = **74.0 dB**; n = 16: 96.32 + 1.76 = **98.1 dB**; n = 24: 144.48 + 1.76 = **146.2 dB**.
(b) Step 1: solve n = (SQNR - 1.76)/6.02. For 40 dB: (40 - 1.76)/6.02 = 6.35, round up to **7 bits**.
Step 2: for 60 dB: (60 - 1.76)/6.02 = 9.67, round up to **10 bits**.
(c) Step 1: bit rate = sampling rate × bits per sample (× channels). Telephone: 8000 × 8 = **64 kb/s**.
Step 2: CD stereo: 44,100 × 16 × 2 = **1,411,200 b/s = 1.4112 Mb/s**.
(d) T1: 24 channels × 64 kb/s = 1536 kb/s, plus 8 kb/s framing: **1544 kb/s**.

**Q7.**
(a) Step 1: an AM spectrum has a carrier and two sidebands at f_c ± f_m.
Step 2: the carrier is at 100 kHz with amplitude **1.0** (normalised); the sidebands are at 100 - 5 = **95 kHz** and 100 + 5 = **105 kHz**, each of amplitude mA_c/2 = 0.8/2 = **0.4**.
(b) Step 1: β = Δf/f_m = 50/10 = 5.
Step 2: Bessel function amplitudes: carrier |J₀(5)| = **0.1776**; first sideband pair |J₁(5)| = **0.3276**; second |J₂(5)| = **0.0466**; third |J₃(5)| = **0.3648**. (The simulated FFT amplitudes matched these values.)
(c) Step 1: the power in the carrier and n sideband pairs is J₀² + 2ΣJₙ² (n = 1 to k).
Step 2: cumulative power for β = 5: k = 3: 0.517; k = 4: 0.823; k = 5: 0.959; k = 6: 0.994.
Step 3: 98 percent is first exceeded at k = 6: **6 pairs**, a bandwidth of 12f_m, as Carson's rule 2(β + 1)f_m = 12f_m predicts.

# Assignment 2: Digital Modulation and Channel Capacity (Chapters 4 and 5)

**Q1. BER theory.** BER = Q(sqrt(2 Eb/N0)) for BPSK. Find the Eb/N0 (dB) needed for BER 10^-3, 10^-5 and 10^-6 [10]

**Q2. BPSK and QPSK.** A simulation of 2 million bits gave BPSK BER 0.0374 at 2 dB, 0.01251 at 4 dB, 0.002431 at 6 dB and 0.000172 at 8 dB. (a) Compare with theory at these points [5] (b) Explain why QPSK has the same BER per bit as BPSK [3] (c) What does QPSK gain? [2]

**Q3. 16-QAM.** (a) Number of bits per symbol and Eb/Es relation for the constellation with levels ±1, ±3 on each axis [3] (b) The approximate BER 0.75 Q(sqrt(0.8 Eb/N0)): the Eb/N0 required for 10^-3 and 10^-5 [4] (c) Simulation gave 0.0279 at 6 dB, 0.00922 at 8 dB and 0.00177 at 10 dB: compare [3]

**Q4. Bandwidth.** (a) A QPSK link with Rs = 1 Msymbol/s and raised-cosine roll-off 0.35: the bandwidth, the bit rate and the spectral efficiency [4] (b) 64-QAM with Rs = 10 Msymbols/s and alpha = 0.2: the bit rate and bandwidth [3] (c) A baseband channel of 4 kHz and alpha = 0.25: the maximum symbol rate [3]

**Q5. Shannon capacity.** Find C for (a) 1 MHz at 20 dB [2] (b) 20 MHz at 25 dB [2] (c) 3100 Hz at 35 dB [2] (d) 5 MHz at 10 dB [2] (e) the SNR needed for 4 b/s/Hz, and the Shannon limit on Eb/N0 [2]

**Q6. Detection principles.** (a) What is a matched filter and why does it maximise the SNR? [4] (b) What is intersymbol interference and the Nyquist criterion? [3] (c) Why is Gray coding used? [3]

**Q7. Constellations.** (a) For QPSK with symbol energy Es express the minimum distance and the energy per bit [4] (b) For 16-QAM with levels ±1 and ±3 compute the average symbol energy, Eb and the minimum distance [4] (c) Why does a larger constellation need more SNR? [2]

## Solutions to Assignment 2

**Q1.** BPSK: BER = Q(√(2E_b/N₀)). Invert: let x = Q⁻¹(BER); then E_b/N₀ = x²/2.
Step 1 (BER = 10⁻³): x = 3.090; E_b/N₀ = 3.090²/2 = 4.775; in dB: 10 log₁₀ 4.775 = **6.79 dB**.
Step 2 (BER = 10⁻⁵): x = 4.265; E_b/N₀ = 4.265²/2 = 9.095; **9.59 dB**.
Step 3 (BER = 10⁻⁶): x = 4.753; E_b/N₀ = 4.753²/2 = 11.30; **10.53 dB**.

**Q2.**
(a) Step 1: theoretical BPSK BER = Q(√(2E_b/N₀)) with E_b/N₀ = 10^(dB/10).
Step 2: 2 dB (1.585): Q(√3.17) = Q(1.78) = **0.0375**; 4 dB (2.512): Q(2.24) = **0.01250**; 6 dB (3.981): Q(2.82) = **0.00239**; 8 dB (6.310): Q(3.55) = **0.000191**.
Step 3: the simulated values 0.0374, 0.01251, 0.002431 and 0.000172 agree within the Monte Carlo error (at 8 dB only about 340 errors were counted in 2 × 10⁶ bits, so the statistical uncertainty is about 5 percent).
(b) Step 1: QPSK is two independent BPSK signals on the in-phase and quadrature carriers, which are orthogonal.
Step 2: each bit uses half the symbol energy, E_b = E_s/2, and the noise in the two quadratures is independent, so each bit has the same decision statistic as BPSK: BER = Q(√(2E_b/N₀)). The simulation confirmed it: 0.01256 at 4 dB, 0.00241 at 6 dB, 0.000212 at 8 dB.
(c) QPSK sends twice the bit rate in the same bandwidth (twice the spectral efficiency) with no loss of BER per bit.

**Q3.**
(a) Step 1: 16 points, so log₂ 16 = **4 bits per symbol** (2 bits on each axis).
Step 2: mean square level per axis = (1² + 3² + (-1)² + (-3)²)/4 = (1 + 9 + 1 + 9)/4 = 5.
Step 3: E_s = 2 × 5 = **10** (two axes) and E_b = E_s/4 = **2.5**.
(b) Step 1: 0.75 Q(√(0.8x)) = 10⁻³, so Q(√(0.8x)) = 1.333 × 10⁻³ and √(0.8x) = 3.004.
Step 2: 0.8x = 9.02, so x = 11.28 = **10.52 dB**.
Step 3: for 10⁻⁵: Q(·) = 1.333 × 10⁻⁵, argument 4.200, 0.8x = 17.64, x = 22.05 = **13.43 dB**.
Step 4: compared with BPSK (6.79 and 9.59 dB), 16-QAM needs about 3.7 dB more E_b/N₀ for four times the bits per symbol.
(c) Step 1: approximation at 6 dB (3.981): 0.75 Q(√3.185) = 0.75 Q(1.785) = 0.0279; at 8 dB: 0.00925; at 10 dB: 0.00175.
Step 2: simulation: 0.0279, 0.00922, 0.00177: excellent agreement.

**Q4.**
(a) Step 1: bandwidth of a raised-cosine pulse: B = (1 + α)R_s = 1.35 × 1 MHz = **1.35 MHz**.
Step 2: QPSK sends 2 bits per symbol: R_b = 2R_s = **2 Mb/s**.
Step 3: spectral efficiency = 2 Mb/s / 1.35 MHz = **1.48 b/s/Hz**.
(b) Step 1: 64-QAM carries log₂ 64 = 6 bits per symbol: R_b = 6 × 10 = **60 Mb/s**.
Step 2: B = (1 + 0.2) × 10 MHz = **12 MHz** (5 b/s/Hz).
(c) Step 1: for a baseband channel of bandwidth B, B = (1 + α)R_s/2.
Step 2: R_s = 2B/(1 + α) = 2 × 4000/1.25 = **6400 symbols/s** (the ideal Nyquist rate 2B = 8000 is reached only with α = 0).

**Q5.** C = B log₂(1 + SNR), with SNR as a ratio: SNR = 10^(dB/10).
(a) SNR = 100: C = 10⁶ log₂ 101 = 10⁶ × 6.658 = **6.66 Mb/s**.
(b) SNR = 316.2: C = 20 × 10⁶ × log₂ 317.2 = 20 × 10⁶ × 8.309 = **166.2 Mb/s**.
(c) SNR = 3162: C = 3100 × log₂ 3163 = 3100 × 11.63 = **36.0 kb/s**.
(d) SNR = 10: C = 5 × 10⁶ × log₂ 11 = 5 × 10⁶ × 3.459 = **17.3 Mb/s**.
(e) Step 1: for spectral efficiency 4 b/s/Hz: SNR = 2⁴ - 1 = 15 = 10 log₁₀ 15 = **11.76 dB**.
Step 2: the Shannon limit (infinite bandwidth) on E_b/N₀ is ln 2 = 0.693, which is **-1.59 dB**.

**Q6.** (a) A **matched filter** has impulse response h(t) = s(T - t), the time-reversed signal; its output at t = T is the correlation of the received signal with the expected pulse. By the Cauchy-Schwarz inequality it gives the maximum output SNR, 2E/N₀ for white noise (the energy-to-noise-density ratio), so it is the optimum detector for AWGN.
(b) Step 1: **ISI**: dispersion makes the response of one symbol overlap neighbouring symbol periods.
Step 2: **Nyquist criterion**: the overall pulse p(t) must satisfy p(kT) = 0 for non-zero integers k (and 1 for k = 0); in the frequency domain the sum of the spectrum shifted by multiples of 1/T must be constant.
Step 3: The minimum bandwidth is 1/(2T), reached by the sinc pulse; raised-cosine pulses trade extra bandwidth for faster-decaying tails.
(c) With **Gray coding** neighbouring constellation points differ in exactly one bit, so the most likely symbol error (to a neighbour) causes only one bit error: BER ≈ SER/log₂ M.

**Q7.**
(a) Step 1: QPSK points (±a, ±a): E_s = a² + a² = 2a².
Step 2: the minimum distance d = 2a = √(2E_s) (using a = √(E_s/2)).
Step 3: two bits per symbol, so E_b = E_s/2.
(b) Step 1: 16-QAM levels ±1, ±3: the mean square level per axis is 5, so average symbol energy E_s = **10**.
Step 2: E_b = E_s/4 = **2.5**.
Step 3: minimum distance (adjacent levels differ by 2) d = **2**.
Step 4: d²/E_b = 4/2.5 = 1.6, compared with 4 for BPSK/QPSK: 2.5 times smaller (4 dB), which is why 16-QAM needs more SNR.
(c) For a given average energy the points of a bigger constellation are closer together (smaller minimum distance), so a smaller noise amplitude causes decision errors; the SNR must grow by roughly 6 dB for each additional bit per symbol in QAM.

# Assignment 3: Coding, OFDM, Spread Spectrum and Link Budgets (Chapters 6 to 8)

**Q1. Hamming (7,4).** With parity p1 = d1 + d2 + d4, p2 = d1 + d3 + d4, p3 = d2 + d3 + d4 and codeword [d1 d2 d3 d4 p1 p2 p3]: (a) Encode 1011 [3] (b) Decode the received word 1001010 [4] (c) Decode the received word 1011000 (the codeword 1011010 with its 6th bit flipped) and explain the syndrome method [3]

**Q2. Code capability.** (a) The minimum distance and rate of the Hamming (7,4) code, and its detection and correction capability [4] (b) How many errors can a code with d_min = 5 detect and correct? [3] (c) What does an exhaustive test of all single errors show? [3]

**Q3. Convolutional code.** For the rate-1/2 K = 3 encoder with c1 = b + s1 + s2 and c2 = b + s2: (a) Encode 1011 followed by two zeros [4] (b) Describe how the Viterbi decoder corrects two errors [3] (c) What BER did simulation give at p = 0.01, 0.03 and 0.05? [3]

**Q4. OFDM.** (a) Describe the role of the cyclic prefix [3] (b) The simulation with 64 subcarriers and a 4-tap channel: results with and without the prefix [3] (c) Wi-Fi 802.11a: the subcarrier spacing, symbol duration and the 54 Mb/s rate [4]

**Q5. Spread spectrum.** (a) The length and autocorrelation of a 7-stage m-sequence and its processing gain [4] (b) Show how Walsh codes separate two CDMA users [4] (c) What is frequency hopping? [2]

**Q6. Link budget.** (a) Compute the free-space path loss for 36,000 km at 4 GHz, 1 km at 2.4 GHz, 10 km at 900 MHz, 20 km at 2 GHz and 384,400 km at 2.2 GHz [5] (b) A 20 dBm transmitter with 3 dBi antennas at both ends over 1 km at 2.4 GHz: the received power, the noise floor (20 MHz, NF 6 dB) and the SNR [3] (c) The maximum range for a path loss of 110 dB at 2.4 GHz [2]

**Q7. Multiple access.** (a) Compare FDMA, TDMA, CDMA and OFDMA [5] (b) Explain frequency reuse in cellular networks [3] (c) What is the benefit of MIMO? [2]

## Solutions to Assignment 3

**Q1.** Parity rules: p₁ = d₁ ⊕ d₂ ⊕ d₄, p₂ = d₁ ⊕ d₃ ⊕ d₄, p₃ = d₂ ⊕ d₃ ⊕ d₄ (⊕ = addition mod 2); codeword [d₁ d₂ d₃ d₄ p₁ p₂ p₃].
(a) Data 1011 means d₁ = 1, d₂ = 0, d₃ = 1, d₄ = 1.
Step 1: p₁ = 1 + 0 + 1 = 2 → **0**.
Step 2: p₂ = 1 + 1 + 1 = 3 → **1**.
Step 3: p₃ = 0 + 1 + 1 = 2 → **0**.
Step 4: codeword **1011010**.
(b) Received r = 1001010: d₁ = 1, d₂ = 0, d₃ = 0, d₄ = 1, p₁ = 0, p₂ = 1, p₃ = 0.
Step 1: syndrome bits s₁ = d₁ + d₂ + d₄ + p₁ = 1 + 0 + 1 + 0 = 2 → 0.
Step 2: s₂ = d₁ + d₃ + d₄ + p₂ = 1 + 0 + 1 + 1 = 3 → 1.
Step 3: s₃ = d₂ + d₃ + d₄ + p₃ = 0 + 0 + 1 + 0 = 1.
Step 4: syndrome [0, 1, 1]. The bit that takes part in checks 2 and 3 only is d₃ (bit 3), so the error is in bit 3: flip it to get 1011010.
Step 5: the data are **1011**.
(c) Received 1011000 (the codeword 1011010 with bit 6 flipped): d = 1, 0, 1, 1; p₁ = 0, p₂ = 0, p₃ = 0.
Step 1: s₁ = 1 + 0 + 1 + 0 = 2 → 0; s₂ = 1 + 1 + 1 + 0 = 3 → 1; s₃ = 0 + 1 + 1 + 0 = 2 → 0. Syndrome [0, 1, 0].
Step 2: [0, 1, 0] is the column belonging to p₂ (bit 6). Flip bit 6: 1011010 ✓.
Method: compute s = H r (mod 2); if s = 0 accept; otherwise find the column of H equal to s: that bit is in error.

**Q2.**
(a) Step 1: compute the Hamming distance between all pairs of the 16 codewords: the smallest non-zero distance is **d_min = 3**.
Step 2: rate = k/n = **4/7 = 0.571**.
Step 3: detection capability = d_min - 1 = **2** errors; correction capability = ⌊(d_min - 1)/2⌋ = **1** error.
(b) d_min = 5: detects 5 - 1 = **4** errors and corrects ⌊(5 - 1)/2⌋ = **2** errors.
(c) Testing all 16 messages × 7 single-error positions = 112 cases, **112 of 112** were corrected: a perfect code, since each of the 2³ - 1 = 7 non-zero syndromes corresponds to exactly one single-bit error.

**Q3.** Encoder: c₁ = b ⊕ s₁ ⊕ s₂, c₂ = b ⊕ s₂, with state (s₁, s₂) starting at (0, 0); after each bit the state becomes (b, s₁).
(a) Step 1 (b = 1, state 00): c₁ = 1, c₂ = 1 → **11**; new state (1, 0).
Step 2 (b = 0, state 10): c₁ = 0 + 1 + 0 = 1, c₂ = 0 + 0 = 0 → **10**; state (0, 1).
Step 3 (b = 1, state 01): c₁ = 1 + 0 + 1 = 0, c₂ = 1 + 1 = 0 → **00**; state (1, 0).
Step 4 (b = 1, state 10): c₁ = 1 + 1 + 0 = 0, c₂ = 1 + 0 = 1 → **01**; state (1, 1).
Step 5 (b = 0, flush, state 11): c₁ = 0 + 1 + 1 = 0, c₂ = 0 + 1 = 1 → **01**; state (0, 1).
Step 6 (b = 0, flush, state 01): c₁ = 0 + 0 + 1 = 1, c₂ = 0 + 1 = 1 → **11**; state (0, 0).
Output stream: 11 10 00 01 01 11 = 1 1 1 0 0 0 0 1 0 1 1 1.
(b) The Viterbi decoder keeps, for each of the 4 trellis states, the path with the smallest Hamming distance to the received bits; at the end it picks the state with the smallest metric and traces back. With two received bits flipped (the 4th and 9th), the correct path still has the smallest total distance (**metric 2**, the two corrupted bits) because any other path differs from the transmitted one in at least 5 coded bits (the free distance of this code is 5), so the decoded data were **1 0 1 1 0 0**.
(c) Simulated output BER after decoding: p = 0.01: **5 × 10⁻⁵**; p = 0.03: **1.6 × 10⁻³**; p = 0.05: **5.9 × 10⁻³**, against uncoded 0.01, 0.03, 0.05.

**Q4.**
(a) The cyclic prefix (a copy of the end of each symbol placed in front) absorbs the delay spread of the multipath channel so that echoes of one symbol do not leak into the next, and it makes the channel look like a circular convolution: the receiver's FFT then sees H(k)X(k) on every subcarrier, which a one-tap equaliser inverts. The prefix must be longer than the delay spread; it costs bandwidth and energy (16/64 = 25 percent overhead here).
(b) With a 16-sample prefix, channel h = [1, 0.5, 0.3j, 0.2], no noise, 2000 symbols × 64 subcarriers × 2 bits = 256,000 bits: **0 errors**. Without the prefix: **487 errors**.
(c) Step 1: subcarrier spacing = sampling rate / FFT size = 20 MHz/64 = **312.5 kHz**.
Step 2: useful symbol duration = 64/20 MHz = **3.2 μs**; adding the 0.8 μs guard interval gives **4.0 μs**.
Step 3: rate = 48 data subcarriers × 6 bits (64-QAM) × (3/4 code rate) / 4 μs = 216 bits/4 μs = **54 Mb/s**.

**Q5.**
(a) Step 1: a 7-stage LFSR gives a maximal-length sequence of 2⁷ - 1 = **127 chips**.
Step 2: the periodic autocorrelation is **127** at zero shift and **-1** at every other shift (verified numerically).
Step 3: other shifts, other users, noise and jammers are 127 times (21 dB) weaker than the wanted peak: processing gain = 10 log₁₀ 127 = **21.0 dB**.
(b) Rows of the 8 × 8 Hadamard matrix are orthogonal (HHᵀ = 8I). User 1 uses row 1, user 2 uses row 2. If the users send bits (1, -1, 1) and (-1, -1, 1) at the same time, the received signal is the sum of the two spread signals. Correlating each bit period with row 1 and dividing by 8 returns **1, -1, 1** exactly (the contribution of user 2 correlates to zero); correlating with row 2 returns user 2's data. This works only when the users are chip-synchronised (otherwise PN codes with low cross-correlation are used).
(c) **Frequency hopping**: the carrier frequency changes pseudo-randomly among many channels (Bluetooth: 1600 hops/s over 79 channels); it resists narrowband interference and eavesdropping.

**Q6.** Free-space path loss: FSPL(dB) = 20 log₁₀(d_km) + 20 log₁₀(f_MHz) + 32.44.
(a) Geostationary satellite, d = 36,000 km, f = 4000 MHz: 91.1 + 72.0 + 32.44 = **195.6 dB**.
1 km at 2400 MHz: 0 + 67.6 + 32.44 = **100.0 dB**.
10 km at 900 MHz: 20 + 59.1 + 32.44 = **111.5 dB**.
20 km at 2000 MHz: 26.0 + 66.0 + 32.44 = **124.5 dB**.
Moon, 384,400 km at 2200 MHz: 111.7 + 66.8 + 32.44 = **211.0 dB**.
(b) Step 1: received power = 20 dBm + 3 dBi + 3 dBi - 100.0 dB = **-74.0 dBm**.
Step 2: noise floor = -174 + 10 log₁₀(20 × 10⁶) + 6 = -174 + 73.0 + 6 = **-95.0 dBm**.
Step 3: SNR = -74.0 - (-95.0) = **21.0 dB**.
(c) Step 1: 110 = 20 log₁₀ d + 67.6 + 32.44, so 20 log₁₀ d = 110 - 100.04 = 9.96.
Step 2: d = 10^(9.96/20) = **3.15 km** (free space; real obstacles shorten it).

**Q7.** (a) **FDMA**: each user has its own frequency band (analog cellular, radio): simple, needs guard bands. **TDMA**: users share a carrier in time slots (GSM: 8 slots): needs synchronisation, flexible rates. **CDMA**: users share time and frequency but are separated by orthogonal or PN codes (3G, GPS): soft capacity, rake receivers, power control needed. **OFDMA**: groups of subcarriers are assigned to users in time and frequency (LTE, 5G, Wi-Fi 6): flexible, efficient scheduling, robust to multipath.
(b) The spectrum is divided into groups of channels; the same channel set is reused in cells far enough apart (reuse distance) that co-channel interference is acceptable. A cluster of N cells (N = 3, 4, 7) gives each cell 1/N of the channels; smaller cells give more capacity per area at the price of more base stations and handovers.
(c) **MIMO** (multiple antennas at both ends) exploits multipath: spatial multiplexing sends independent streams (capacity grows roughly with min(N_t, N_r) at the same bandwidth and power), and diversity and beamforming improve reliability and SNR.
