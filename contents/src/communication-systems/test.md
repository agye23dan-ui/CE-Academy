# Communication Systems: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** The thermal noise power density at 290 K is about
A) -204 dBm/Hz  B) -174 dBm/Hz  C) -144 dBm/Hz  D) -114 dBm/Hz

**2.** The bandwidth of a conventional AM signal with message bandwidth fm is
A) fm  B) 2 fm  C) 4 fm  D) fm/2

**3.** The power efficiency of AM with modulation index m = 1 is
A) 100 percent  B) 66.7 percent  C) 33.3 percent  D) 11.1 percent

**4.** Overmodulation of AM occurs when
A) m > 1  B) m < 1  C) m = 0  D) fc < fm

**5.** The spectrum of a single-tone AM wave has a carrier and
A) one sideband  B) two sidebands of amplitude m Ac/2 each  C) infinitely many sidebands  D) no sidebands

**6.** The modulation index of FM is
A) delta_f × fm  B) delta_f / fm  C) fm / delta_f  D) fc / fm

**7.** Carson's rule gives the FM bandwidth as
A) 2 (delta_f + fm)  B) delta_f  C) 2 fm  D) fm

**8.** Compared with AM, wideband FM
A) needs less bandwidth  B) has better noise performance at the cost of bandwidth  C) has no constant envelope  D) is simpler to demodulate

**9.** The SQNR of an n-bit quantiser for a full-scale sine wave is about
A) 3 n dB  B) 6.02 n + 1.76 dB  C) 20 n dB  D) n^2 dB

**10.** Telephone speech sampled at 8 kHz with 8 bits has a bit rate of
A) 8 kb/s  B) 16 kb/s  C) 64 kb/s  D) 128 kb/s

**11.** The bit error rate of BPSK in AWGN is
A) Q(sqrt(Eb/N0))  B) Q(sqrt(2 Eb/N0))  C) exp(-Eb/N0)  D) 1/(1 + Eb/N0)

**12.** QPSK compared with BPSK in the same bandwidth gives
A) twice the bit rate at the same BER per bit  B) the same bit rate  C) half the BER  D) half the bandwidth

**13.** Gray coding of constellation points ensures that
A) neighbouring points differ in one bit  B) all points have equal energy  C) the bandwidth is minimal  D) ISI is zero

**14.** The raised-cosine pulse with roll-off alpha and symbol rate Rs needs a passband bandwidth of
A) Rs  B) alpha Rs  C) (1 + alpha) Rs  D) 2 Rs

**15.** The Shannon capacity of an AWGN channel is
A) B SNR  B) B log2(1 + SNR)  C) B log10 SNR  D) SNR / B

**16.** The Shannon limit for Eb/N0 is
A) 0 dB  B) -1.59 dB  C) 3 dB  D) 10 dB

**17.** The minimum distance of the Hamming (7,4) code is
A) 1  B) 2  C) 3  D) 4

**18.** A code with minimum distance d_min = 5 can correct
A) 1 error  B) 2 errors  C) 4 errors  D) 5 errors

**19.** In OFDM the cyclic prefix is used to
A) increase the data rate  B) remove noise  C) absorb multipath delay spread and keep subcarriers orthogonal  D) reduce power

**20.** The processing gain of a direct-sequence system with a 127-chip code is about
A) 7 dB  B) 12 dB  C) 21 dB  D) 127 dB

## Section B: Problems (40 marks)

**B1. AM and FM (10 marks)** (a) A transmitter has Pc = 200 W and m = 0.5: the total power, the sideband power and the efficiency [4] (b) FM with delta_f = 30 kHz and fm = 5 kHz: beta and Carson's bandwidth [3] (c) The AM bandwidth for fm = 5 kHz [1] (d) The SQNR for 10 bits [2]

**B2. Digital modulation (10 marks)** (a) The Eb/N0 in dB needed for BPSK BER = 10^-3 [3] (b) Why QPSK has the same BER as BPSK per bit [3] (c) QPSK at Rs = 2 Msymbol/s with raised-cosine alpha = 0.25: the bit rate, bandwidth and spectral efficiency [4]

**B3. Capacity and coding (10 marks)** (a) The capacity of a channel with B = 4 MHz and SNR = 15 dB [3] (b) The SNR needed for 4 b/s/Hz [2] (c) Decode the Hamming (7,4) word 1011110 (parity p1 = d1 + d2 + d4, p2 = d1 + d3 + d4, p3 = d2 + d3 + d4; word [d1 d2 d3 d4 p1 p2 p3]) [5]

**B4. OFDM, spread spectrum and link budget (10 marks)** (a) An OFDM system with 256 subcarriers and fs = 20 MHz: the subcarrier spacing and symbol duration [3] (b) A 5-stage m-sequence: the length and the processing gain [3] (c) A 5.8 GHz link of 100 m, Pt = 10 dBm, antenna gains 3 dBi each: the free-space path loss and the received power [4]

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **B** · 3 **C** · 4 **A** · 5 **B** · 6 **B** · 7 **A** · 8 **B** · 9 **B** · 10 **C** · 11 **B** · 12 **A** · 13 **A** · 14 **C** · 15 **B** · 16 **B** · 17 **C** · 18 **B** · 19 **C** · 20 **C**

Brief reasons:
1. Step 1: N₀ = kT = 1.38 × 10⁻²³ × 290 = 4.0 × 10⁻²¹ W/Hz. Step 2: in dBm/Hz: 10 log₁₀(4.0 × 10⁻¹⁸) = -174 dBm/Hz.
2. AM has two sidebands, each of width f_m, around the carrier: bandwidth 2f_m.
3. Step 1: efficiency η = m²/(2 + m²). Step 2: m = 1: 1/3 = 33.3 percent.
4. Overmodulation occurs when m > 1: the envelope would go negative and the wave is distorted.
5. A single-tone AM wave contains the carrier plus two sidebands at f_c ± f_m, each of amplitude mA_c/2.
6. FM modulation index β = Δf/f_m (peak deviation divided by message frequency).
7. Carson's rule: B ≈ 2(Δf + f_m).
8. Wideband FM trades bandwidth for noise performance (the FM improvement), and has a constant envelope.
9. SQNR of an n-bit quantiser for a full-scale sine wave: 6.02n + 1.76 dB.
10. Step 1: bit rate = sampling rate × bits per sample. Step 2: 8000 × 8 = 64,000 b/s = 64 kb/s.
11. BPSK in AWGN: BER = Q(√(2E_b/N₀)).
12. QPSK sends 2 bits per symbol on orthogonal carriers, giving twice the bit rate of BPSK in the same bandwidth at the same BER per bit.
13. Gray coding makes neighbouring constellation points differ in exactly one bit.
14. Raised-cosine pulse bandwidth: (1 + α)R_s.
15. Shannon capacity: C = B log₂(1 + SNR).
16. The Shannon limit on E_b/N₀ as bandwidth → ∞ is ln 2 = 0.693, i.e. -1.59 dB.
17. The Hamming (7,4) code has minimum distance d_min = 3.
18. Step 1: correctable errors t = ⌊(d_min - 1)/2⌋. Step 2: ⌊(5 - 1)/2⌋ = 2.
19. The cyclic prefix absorbs the multipath delay spread and keeps the subcarriers orthogonal.
20. Step 1: processing gain = 10 log₁₀(chips). Step 2: 10 log₁₀ 127 = 21 dB.

### Section B

**B1.**
(a) Step 1: P_t = P_c(1 + m²/2) = 200(1 + 0.25/2) = 200 × 1.125 = **225 W**.
Step 2: sideband power = 225 - 200 = **25 W**.
Step 3: efficiency = 25/225 = **11.1 percent** (= m²/(2 + m²) = 0.25/2.25).
(b) Step 1: β = Δf/f_m = 30/5 = **6**.
Step 2: Carson bandwidth = 2(Δf + f_m) = 2(30 + 5) = **70 kHz**.
(c) AM bandwidth = 2f_m = 2 × 5 = **10 kHz**.
(d) SQNR = 6.02n + 1.76 = 6.02(10) + 1.76 = 60.2 + 1.76 = **62.0 dB**.

**B2.**
(a) Step 1: BER = Q(√(2E_b/N₀)) = 10⁻³ requires √(2E_b/N₀) = 3.09.
Step 2: E_b/N₀ = 3.09²/2 = 9.55/2 = 4.77; in dB: 10 log₁₀ 4.77 = **6.79 dB**.
(b) QPSK sends two bits on orthogonal (in-phase and quadrature) carriers. With Gray mapping each bit is detected independently with the same distance-to-noise ratio as BPSK (energy per bit E_b and independent noise in each quadrature), so BER = Q(√(2E_b/N₀)). The symbol rate is half the bit rate, so for the same bit rate QPSK needs half the bandwidth.
(c) Step 1: bit rate = 2R_s = 2 × 2 = **4 Mb/s**.
Step 2: bandwidth = (1 + α)R_s = 1.25 × 2 = **2.5 MHz**.
Step 3: spectral efficiency = 4/2.5 = **1.6 b/s/Hz**.

**B3.**
(a) Step 1: SNR = 10^(15/10) = 10^1.5 = 31.62.
Step 2: C = B log₂(1 + SNR) = 4 × 10⁶ × log₂(32.62) = 4 × 10⁶ × 5.028.
**C = 20.1 Mb/s**.
(b) Step 1: 4 b/s/Hz = log₂(1 + SNR), so 1 + SNR = 2⁴ = 16 and SNR = 15.
Step 2: in dB: 10 log₁₀ 15 = **11.76 dB**.
(c) Received word r = 1011110: d₁d₂d₃d₄ = 1011 and p₁p₂p₃ = 110.
Step 1: s₁ = d₁ + d₂ + d₄ + p₁ = 1 + 0 + 1 + 1 = 3 → 1.
Step 2: s₂ = d₁ + d₃ + d₄ + p₂ = 1 + 1 + 1 + 1 = 4 → 0.
Step 3: s₃ = d₂ + d₃ + d₄ + p₃ = 0 + 1 + 1 + 0 = 2 → 0.
Step 4: syndrome [1, 0, 0], the column belonging to parity bit p₁ (the 5th bit), the only bit that appears in check 1 alone.
Step 5: flip bit 5: 1011010, so the data are **1011** (the error was in a parity bit).

**B4.**
(a) Step 1: subcarrier spacing = f_s/N = 20 MHz/256 = **78.125 kHz**.
Step 2: useful symbol duration = N/f_s = 256/(20 × 10⁶) = **12.8 μs** (plus the guard interval).
(b) Step 1: length of a 5-stage m-sequence = 2⁵ - 1 = **31** chips.
Step 2: processing gain = 10 log₁₀ 31 = **14.9 dB**.
(c) Step 1: FSPL = 20 log₁₀(d_km) + 20 log₁₀(f_MHz) + 32.44 with d = 0.1 km, f = 5800 MHz: -20 + 75.27 + 32.44 = **87.7 dB**.
Step 2: received power = 10 dBm + 3 dBi + 3 dBi - 87.7 dB = **-71.7 dBm**.
(With a noise floor of about -91 dBm in 40 MHz and a 7 dB noise figure, the SNR is 19.3 dB.)