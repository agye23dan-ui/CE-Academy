# Communication Systems: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** The noise power in a 1 MHz bandwidth at 290 K is about
A) -174 dBm  B) -144 dBm  C) -114 dBm  D) -84 dBm

**2.** In AM, the sideband power for carrier power Pc and modulation index m is
A) Pc m^2/2  B) Pc m  C) Pc/m  D) 2 Pc

**3.** The envelope detector requires a time constant RC such that
A) RC >> 1/fm  B) RC << 1/fc  C) RC = 1/fc  D) 1/fc << RC << 1/fm

**4.** Which AM variant has the narrowest bandwidth?
A) DSB-SC  B) conventional AM  C) SSB  D) FM

**5.** An FM signal with delta_f = 75 kHz and fm = 15 kHz has a modulation index of
A) 0.2  B) 5  C) 15  D) 75

**6.** The carrier component of a single-tone FM wave is proportional to
A) J1(beta)  B) beta  C) J0(beta)  D) 1/beta

**7.** The SQNR of an ideal 12-bit quantiser is about
A) 49.9 dB  B) 62 dB  C) 74 dB  D) 98 dB

**8.** The Nyquist criterion for zero ISI requires a pulse that
A) has zero value at the other sampling instants  B) is rectangular  C) has infinite energy  D) is periodic

**9.** The BER of 16-QAM at a given Eb/N0 is
A) lower than QPSK  B) the same as QPSK  C) higher than QPSK  D) zero

**10.** A matched filter
A) maximises the SNR at the sampling instant  B) removes all noise  C) is a high-pass filter  D) has a flat response

**11.** Gray coding gives
A) the minimum bandwidth  B) one bit difference between adjacent constellation points  C) the maximum power  D) zero ISI

**12.** For a channel with SNR = 1 (0 dB) the capacity per hertz is
A) 0 b/s/Hz  B) 0.5 b/s/Hz  C) 1 b/s/Hz  D) 2 b/s/Hz

**13.** The minimum Eb/N0 for reliable communication is
A) -1.59 dB  B) 0 dB  C) 3 dB  D) 6 dB

**14.** A code with minimum distance 3 can
A) correct 1 error  B) correct 2 errors  C) detect 3 errors  D) correct 3 errors

**15.** The syndrome of a received Hamming word identifies
A) the data  B) the position of a single error  C) the CRC  D) the carrier

**16.** The Viterbi algorithm finds
A) the shortest path in a network  B) the maximum-likelihood path through the trellis  C) the generator polynomial  D) the interleaver

**17.** The cyclic prefix in OFDM must be at least as long as
A) the symbol  B) the sampling period  C) the delay spread of the channel  D) the carrier period

**18.** A 63-chip PN sequence gives a processing gain of about
A) 6 dB  B) 12 dB  C) 18 dB  D) 63 dB

**19.** Free-space path loss increases by about how much when the distance is doubled?
A) 3 dB  B) 6 dB  C) 12 dB  D) 20 dB

**20.** OFDMA is the multiple-access scheme of
A) AMPS  B) GSM  C) IS-95  D) LTE and 5G

## Section B: Short Questions (40 marks)

**B1. (5)** An AM transmitter sends 1000 W in total with m = 0.6. Find the carrier power, the sideband power, the efficiency and the bandwidth for a 5 kHz message.

**B2. (5)** FM broadcast: delta_f = 75 kHz and fm = 15 kHz. Find beta and the Carson bandwidth. What is the carrier amplitude relative to the unmodulated carrier when beta = 5?

**B3. (5)** How many bits are needed for an SQNR of 60 dB? Find the bit rates of telephone speech (8 kHz, 8 bits) and of CD stereo (44.1 kHz, 16 bits).

**B4. (5)** Find the Eb/N0 in dB at which BPSK achieves BER = 10^-5, and the Eb/N0 at which 16-QAM achieves 10^-3 using 0.75 Q(sqrt(0.8 Eb/N0)).

**B5. (5)** A QPSK link has Rs = 1 Msymbol/s and a raised-cosine roll-off of 0.35. Find the bandwidth, the bit rate and the spectral efficiency.

**B6. (5)** Find the capacity for B = 20 MHz and SNR = 25 dB, and the SNR required for 4 b/s/Hz.

**B7. (5)** Encode the data 1011 with the Hamming (7,4) code (p1 = d1 + d2 + d4, p2 = d1 + d3 + d4, p3 = d2 + d3 + d4) and decode the received word 1001010.

**B8. (5)** Compute the free-space path loss for 10 km at 900 MHz and the received power for Pt = 30 dBm, Gt = 10 dBi and Gr = 0 dBi.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. AM and FM.** (a) The envelope of an AM wave has maximum 12 V and minimum 4 V: m, the carrier amplitude and the sideband amplitude [3]. (b) The measured AM spectrum lines for fc = 100 kHz, fm = 5 kHz, m = 0.8 [2]. (c) FM tone with fc = 500 kHz, fm = 10 kHz, delta_f = 50 kHz: beta, the first four line amplitudes and the number of sideband pairs holding 98 percent of the power [3]. (d) Compare AM and wideband FM [2].

**C2. Digital modulation and BER.** (a) BPSK BER = Q(sqrt(2 Eb/N0)): compute the simulated and theoretical values at 4, 6 and 8 dB (simulation: 0.01251, 0.002431, 0.000172) [4]. (b) Why does QPSK match BPSK per bit? [2] (c) 16-QAM: bits per symbol, Es and Eb for levels ±1, ±3, and the Eb/N0 for 10^-3 [4].

**C3. Capacity and coding.** (a) Shannon capacity examples for 1 MHz at 20 dB and 3100 Hz at 35 dB; the Shannon limit [3]. (b) Hamming (7,4): d_min, correction capability, the result of the exhaustive single-error test [3]. (c) The rate-1/2 K = 3 convolutional code (c1 = b + s1 + s2, c2 = b + s2): encode 1011 with 2 tail zeros; the Viterbi result with 2 channel errors and the BER at p = 0.01 [4].

**C4. OFDM and spread spectrum.** (a) The role of the cyclic prefix; simulation results with 64 subcarriers: 0 errors with the prefix and 487 of 256,000 without [3]. (b) 802.11a: subcarrier spacing, symbol time and the 54 Mb/s rate [3]. (c) A 127-chip m-sequence: autocorrelation values and processing gain; two CDMA users with Walsh codes [4].

**C5. Link budgets and multiple access.** (a) FSPL for 36,000 km at 4 GHz, 1 km at 2.4 GHz and 20 km at 2 GHz [3]. (b) A 20 dBm transmitter with 3 dBi antennas at both ends over 1 km at 2.4 GHz: Pr, noise floor (20 MHz, NF 6 dB) and SNR [3]. (c) The maximum range for a 110 dB path loss at 2.4 GHz [2]. (d) Compare FDMA, TDMA, CDMA and OFDMA [2].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **C** · 2 **A** · 3 **D** · 4 **C** · 5 **B** · 6 **C** · 7 **C** · 8 **A** · 9 **C** · 10 **A** · 11 **B** · 12 **C** · 13 **A** · 14 **A** · 15 **B** · 16 **B** · 17 **C** · 18 **C** · 19 **B** · 20 **D**

Brief reasons:
1. Step 1: N = kTB; in dBm: -174 + 10 log₁₀ B(Hz). Step 2: 10 log₁₀(10⁶) = 60, so N = -174 + 60 = -114 dBm.
2. Step 1: each sideband carries P_c m²/4. Step 2: the two sidebands together carry P_c m²/2.
3. Step 1: the capacitor must follow the envelope but not the carrier. Step 2: so 1/f_c ≪ RC ≪ 1/f_m.
4. SSB transmits only one sideband, so its bandwidth is f_m, the narrowest of the AM variants (DSB-SC and AM need 2f_m).
5. Step 1: β = Δf/f_m. Step 2: = 75/15 = 5.
6. The carrier component of a single-tone FM wave is proportional to J₀(β).
7. Step 1: SQNR = 6.02n + 1.76. Step 2: = 6.02 × 12 + 1.76 = 72.24 + 1.76 = 74.0 dB.
8. The Nyquist criterion for zero ISI requires a pulse that is zero at all other sampling instants.
9. At the same E_b/N₀ 16-QAM has points closer together, so its BER is higher than QPSK.
10. A matched filter maximises the SNR at the sampling instant.
11. Gray coding makes adjacent constellation points differ in one bit.
12. Step 1: C/B = log₂(1 + SNR). Step 2: SNR = 1: log₂ 2 = 1 b/s/Hz.
13. The minimum E_b/N₀ for reliable communication (Shannon limit) is ln 2 = 0.693, that is -1.59 dB.
14. Step 1: correctable errors t = ⌊(d_min - 1)/2⌋. Step 2: ⌊(3 - 1)/2⌋ = 1; the code can detect 2.
15. The syndrome identifies the position of a single-bit error.
16. The Viterbi algorithm finds the maximum-likelihood path through the trellis.
17. The cyclic prefix must be at least as long as the delay spread of the channel.
18. Step 1: processing gain = 10 log₁₀(chips). Step 2: 10 log₁₀ 63 = 18.0 dB.
19. Step 1: FSPL ∝ 20 log₁₀ d. Step 2: doubling the distance adds 20 log₁₀ 2 = 6.02 dB.
20. OFDMA is the multiple-access scheme of LTE and 5G.

## Section B solutions

**B1.** Total power 1000 W, m = 0.6.
Step 1: carrier power P_c = P_t/(1 + m²/2) = 1000/(1 + 0.18) = **847.5 W**.
Step 2: sideband power = 1000 - 847.5 = **152.5 W**.
Step 3: efficiency η = m²/(2 + m²) = 0.36/2.36 = **15.3 percent**.
Step 4: bandwidth = 2f_m = 2 × 5 = **10 kHz**.

**B2.** Step 1: β = Δf/f_m = 75/15 = **5**.
Step 2: Carson bandwidth = 2(Δf + f_m) = 2(75 + 15) = **180 kHz**.
Step 3: carrier amplitude relative to the unmodulated carrier = |J₀(5)| = **0.178** (carrier power fraction J₀² = 0.032 = 3.2 percent).

**B3.** Step 1: SQNR = 6.02n + 1.76 ≥ 60, so n ≥ (60 - 1.76)/6.02 = 9.67, i.e. **10 bits**.
Step 2: telephone: 8000 × 8 = **64 kb/s**.
Step 3: CD stereo: 44,100 × 16 × 2 = **1,411,200 b/s = 1.4112 Mb/s**.

**B4.** Step 1 (BPSK, 10⁻⁵): Q(x) = 10⁻⁵ gives x = 4.265; E_b/N₀ = x²/2 = 9.09; in dB **9.59 dB**.
Step 2 (16-QAM, 10⁻³): 0.75 Q(√(0.8x)) = 10⁻³ gives Q = 1.333 × 10⁻³ and √(0.8x) = 3.004.
Step 3: x = 3.004²/0.8 = 11.28; in dB **10.52 dB**.

**B5.** Step 1: bandwidth = (1 + α)R_s = 1.35 × 1 MHz = **1.35 MHz**.
Step 2: QPSK carries 2 bits per symbol: bit rate = 2 × 1 = **2 Mb/s**.
Step 3: spectral efficiency = 2/1.35 = **1.48 b/s/Hz**.

**B6.** Step 1: 25 dB → SNR = 10^2.5 = 316.2.
Step 2: C = B log₂(1 + SNR) = 20 × 10⁶ × log₂(317.2) = 20 × 10⁶ × 8.309 = **166.2 Mb/s**.
Step 3: 4 b/s/Hz: 1 + SNR = 2⁴ = 16, so SNR = 15 = 10 log₁₀ 15 = **11.76 dB**.

**B7.** Encode d = 1011 (d₁ = 1, d₂ = 0, d₃ = 1, d₄ = 1):
Step 1: p₁ = 1 + 0 + 1 = 2 → 0; p₂ = 1 + 1 + 1 = 3 → 1; p₃ = 0 + 1 + 1 = 2 → 0. Codeword **1011010**.
Decode r = 1001010 (d = 1001, p = 010):
Step 2: s₁ = d₁ + d₂ + d₄ + p₁ = 1 + 0 + 1 + 0 = 2 → 0.
Step 3: s₂ = d₁ + d₃ + d₄ + p₂ = 1 + 0 + 1 + 1 = 3 → 1.
Step 4: s₃ = d₂ + d₃ + d₄ + p₃ = 0 + 0 + 1 + 0 = 1.
Step 5: syndrome **011**, the column of the 3rd bit (d₃, which appears in checks 2 and 3 only). Flip bit 3: 1011010, so the data are **1011**.

**B8.** Step 1: FSPL = 20 log₁₀(10) + 20 log₁₀(900) + 32.44 = 20 + 59.08 + 32.44 = **111.5 dB**.
Step 2: P_r = P_t + G_t + G_r - FSPL = 30 + 10 + 0 - 111.5 = **-71.5 dBm** (a margin of 28.5 dB over a receiver sensitivity of -100 dBm).

## Section C solutions

**C1.**
(a) Step 1: A_c(1 + m) = 12 and A_c(1 - m) = 4. Adding: 2A_c = 16, so **A_c = 8 V**.
Step 2: m = (12 - 4)/(12 + 4) = 8/16 = **0.5**.
Step 3: sideband amplitude = mA_c/2 = 0.5 × 8/2 = **2 V**.
(b) Lines at the carrier 100 kHz (amplitude **1.0**) and the sidebands 95 kHz and 105 kHz (each mA_c/2 = 0.8/2 = **0.4**).
(c) Step 1: β = Δf/f_m = 50/10 = **5**.
Step 2: line amplitudes at the carrier and first three sidebands: |J₀(5)| = **0.1776**, |J₁(5)| = **0.3276**, |J₂(5)| = **0.0466**, |J₃(5)| = **0.3648** (the FFT of the simulated signal matched these).
Step 3: the cumulative power in the carrier plus k sideband pairs for β = 5 is 0.517 (k = 3), 0.823 (k = 4), 0.959 (k = 5), 0.994 (k = 6): 98 percent is first reached at **6 sideband pairs** (bandwidth 12f_m = 120 kHz, as Carson's rule 2(β + 1)f_m gives).
(d) AM: narrow (2f_m), simple receivers, low efficiency (at most 33 percent), noise directly affects the envelope. Wideband FM: wide bandwidth (180 kHz against 10 kHz), constant envelope (efficient amplifiers), noise improvement proportional to β² above the threshold, more complex demodulators.

**C2.**
(a) Step 1: theory Q(√(2E_b/N₀)): 4 dB (2.512): Q(√5.02) = Q(2.24) = **0.01250**.
Step 2: 6 dB (3.981): Q(√7.96) = Q(2.82) = **0.002388**.
Step 3: 8 dB (6.310): Q(√12.62) = Q(3.55) = **0.000191**.
Step 4: simulated 0.01251, 0.002431, 0.000172: they agree within the Monte Carlo error (at 8 dB only about 340 errors were counted).
(b) QPSK is two orthogonal BPSK streams (in-phase and quadrature) with independent noise; each bit has energy E_b and the same distance-to-noise ratio as BPSK, so the BER per bit is identical; QPSK sends two bits per symbol in the same bandwidth that BPSK uses for one.
(c) Step 1: 16-QAM carries **4 bits per symbol**.
Step 2: mean square level per axis = (1 + 9 + 1 + 9)/4 = 5; E_s = 2 × 5 = **10**; E_b = E_s/4 = **2.5**.
Step 3: 0.75 Q(√(0.8E_b/N₀)) = 10⁻³ requires E_b/N₀ = 11.28 = **10.52 dB** (BPSK: 6.79 dB).
Step 4: simulated BERs of 0.0279, 0.00922 and 0.00177 at 6, 8 and 10 dB matched the approximation.

**C3.**
(a) Step 1: 1 MHz at 20 dB: C = 10⁶ log₂(1 + 100) = 10⁶ × 6.658 = **6.66 Mb/s**.
Step 2: 3100 Hz at 35 dB (SNR = 3162): C = 3100 × log₂(3163) = 3100 × 11.63 = **36.0 kb/s**.
Step 3: the Shannon limit E_b/N₀ = ln 2 = **-1.59 dB**.
(b) d_min = **3**; detects 2 errors and corrects ⌊(3 - 1)/2⌋ = **1** error; all 16 messages × 7 single-error positions = **112 of 112** were corrected (a perfect code).
(c) Step 1: encode b = 1, 0, 1, 1, 0, 0 with c₁ = b ⊕ s₁ ⊕ s₂, c₂ = b ⊕ s₂, state (s₁, s₂) → (b, s₁): outputs **11, 10, 00, 01, 01, 11**.
Step 2: with the 4th and 9th coded bits flipped, the Viterbi decoder still returned **1 0 1 1 0 0** (path metric 2): the free distance of the code is 5, so any path other than the transmitted one is at least 5 coded bits away.
Step 3: simulated output BER at p = 0.01 was **5 × 10⁻⁵** (a 200-fold reduction).

**C4.**
(a) The cyclic prefix copies the last samples of each OFDM symbol in front of it: it absorbs the multipath delay spread (no inter-symbol interference) and turns linear convolution with the channel into circular convolution, so each subcarrier sees a single complex gain H(k) and a one-tap equaliser Y/H restores the data. With 64 subcarriers, a 16-sample prefix, channel h = [1, 0.5, 0.3j, 0.2] and no noise: **0 errors** in 256,000 bits; without the prefix: **487 errors**.
(b) Step 1: spacing = 20 MHz/64 = **312.5 kHz**.
Step 2: useful symbol = 64/20 MHz = 3.2 μs; with the 0.8 μs guard interval **4.0 μs**.
Step 3: rate = 48 × 6 bits × (3/4)/4 μs = 216/4 μs = **54 Mb/s**.
(c) Step 1: a 7-stage m-sequence has 2⁷ - 1 = **127 chips**.
Step 2: the periodic autocorrelation is **127 at zero shift and -1 at every other shift**.
Step 3: processing gain = 10 log₁₀ 127 = **21.0 dB**.
Step 4: with orthogonal Walsh codes (HHᵀ = 8I) two users sending (1, -1, 1) and (-1, -1, 1) simultaneously are separated perfectly by correlating with their own code (the output for user 1 was exactly 1, -1, 1).

**C5.**
(a) Step 1: FSPL = 20 log₁₀(d_km) + 20 log₁₀(f_MHz) + 32.44.
Step 2: GEO satellite, 36,000 km at 4000 MHz: 91.1 + 72.0 + 32.44 = **195.6 dB**.
Step 3: 1 km at 2400 MHz: 0 + 67.6 + 32.44 = **100.0 dB**.
Step 4: 20 km at 2000 MHz: 26.0 + 66.0 + 32.44 = **124.5 dB**.
(b) Step 1: P_r = 20 + 3 + 3 - 100.0 = **-74.0 dBm**.
Step 2: noise floor = -174 + 10 log₁₀(20 × 10⁶) + 6 = -174 + 73.0 + 6 = **-95.0 dBm**.
Step 3: SNR = -74.0 - (-95.0) = **21.0 dB**.
(c) Step 1: 110 = 20 log₁₀(d_km) + 67.6 + 32.44, so 20 log₁₀ d = 9.96.
Step 2: d = 10^(9.96/20) = **3.15 km** (free space).
(d) **FDMA**: separate frequency bands (simple, guard bands); **TDMA**: time slots on a common carrier (GSM); **CDMA**: orthogonal or PN codes in the same time and frequency (soft capacity, power control); **OFDMA**: groups of subcarriers allocated in time and frequency (LTE, 5G, Wi-Fi 6: flexible and robust against multipath).