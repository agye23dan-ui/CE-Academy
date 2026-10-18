# Communication Systems: Lecture Notes

A communication system moves information from a source to a destination over a noisy channel. This course covers analog modulation (AM and FM), sampling and quantisation (PCM), digital modulation (BPSK, QPSK, QAM), bit-error performance, channel capacity, error-control coding, OFDM and spread spectrum, and link budgets. All numbers were computed with numpy and scipy, and the bit-error-rate figures are Monte Carlo simulations, so the results shown are real. Prerequisites: Signals & Systems, Probability & Statistics, Digital Signal Processing and Electromagnetics (helpful for the link budget).

# Chapter 1: System Model and Noise

A transmitter (source coding, channel coding, modulation, amplification), a **channel** (cable, fibre, radio) that attenuates, distorts and adds noise, and a receiver (filtering, demodulation, detection, decoding). Performance measures: **signal-to-noise ratio (SNR)**, **bit error rate (BER)**, bandwidth and data rate, power.
**Thermal noise**: N = k T B with Boltzmann's constant k = 1.38 × 10^-23 J/K. At T = 290 K the noise power density is N0 = kT = 4.0 × 10^-21 W/Hz = **-174 dBm/Hz**; in a 1 MHz bandwidth the noise power is 4.0 × 10^-15 W = **-114 dBm**. Receiver noise figure NF adds to this. **AWGN** (additive white Gaussian noise) is the standard channel model: r = s + n with n Gaussian of variance N0/2 per real dimension.
**Decibels**: dB = 10 log10(power ratio); dBm is dB relative to 1 mW.

# Chapter 2: Analog Modulation

## 2.1 Amplitude modulation (AM)
A message m(t) with |m| <= 1 and highest frequency fm modulates a carrier of frequency fc: **s(t) = Ac (1 + m_a cos(2 pi fm t)) cos(2 pi fc t)** for a tone message, with **modulation index m_a** (m_a <= 1 avoids overmodulation and envelope distortion). Spectrum: a carrier of amplitude Ac and two sidebands at fc ± fm of amplitude m_a Ac/2 each. A numerical check (fc = 100 kHz, fm = 5 kHz, m_a = 0.8, Ac = 1): the measured spectral lines were **1.0 at 100 kHz and 0.4 at 95 kHz and 105 kHz** (0.8/2 = 0.4). **Bandwidth = 2 fm** (10 kHz here).
**Power**: carrier Pc; each sideband Pc m_a^2/4; total P = Pc (1 + m_a^2/2); the **efficiency** (power in the sidebands, which carry the information) is eta = m_a^2/(2 + m_a^2): m_a = 1: **33.3 percent**; m_a = 0.5: **11.1 percent**; m_a = 0.8: 24.2 percent. Example: Pc = 100 W, m_a = 0.8: total **132 W**, of which **32 W** is in the sidebands. Detection: an **envelope detector** (diode, RC) for AM; the RC time constant must satisfy 1/fc << RC << 1/fm.
**Variants**: **DSB-SC** (carrier suppressed: efficient, needs coherent demodulation, bandwidth 2 fm), **SSB** (one sideband: bandwidth fm, used in HF radio), **VSB** (analog TV). Coherent demodulation multiplies by a local carrier and low-pass filters; a phase error phi reduces the output by cos(phi).

## 2.2 Frequency and phase modulation
FM: **s(t) = Ac cos(2 pi fc t + beta sin(2 pi fm t))** where the instantaneous frequency is fc + delta_f cos(2 pi fm t) and the **modulation index** is **beta = delta_f/fm** (delta_f is the peak frequency deviation). The spectrum has sidebands at fc ± n fm with amplitudes Ac |J_n(beta)| (Bessel functions). Check: delta_f = 50 kHz, fm = 10 kHz gives beta = 5: measured line amplitudes at fc, fc + fm, fc + 2 fm, fc + 3 fm: **0.1776, 0.3276, 0.0466, 0.3648**, equal to |J0(5)|, |J1(5)|, |J2(5)|, |J3(5)| = 0.1776, 0.3276, 0.0466, 0.3648. At beta = 2.405 the carrier component J0 vanishes (-9 × 10^-5): all power is in the sidebands.
**Carson's rule**: BW ≈ 2 (delta_f + fm) = 2 fm (beta + 1). Broadcast FM: delta_f = 75 kHz, fm = 15 kHz: beta = **5**, BW = **180 kHz** (channels spaced by 200 kHz). Computed from the Bessel functions: the sidebands within ± 6 fm (6 pairs) contain 98 percent of the power for beta = 5 (and 2, 3 and 11 pairs for beta = 1, 2 and 10), exactly the width Carson's rule gives. FM has **constant envelope** (efficient nonlinear amplifiers), and a **noise-suppression** advantage (SNR improvement proportional to beta^2 above a **threshold**: a bandwidth-for-SNR trade), with **pre-emphasis and de-emphasis** to flatten the noise spectrum. NBFM (beta << 1) has bandwidth about 2 fm.

# Chapter 3: Digitisation (PCM)

**Sampling** at fs >= 2 fm; **quantisation** to 2^n levels; **encoding**. For a full-scale sine wave the signal-to-quantisation-noise ratio is **SQNR = 6.02 n + 1.76 dB**: 8 bits **49.9 dB**, 12 bits **74.0 dB**; to reach 40 dB you need 6.35, i.e. **7 bits**. Non-uniform quantisation (mu-law in North America, A-law in Europe) compresses the dynamic range of speech. Bit rates: telephone speech 8000 samples/s × 8 bits = **64 kb/s**; CD audio 44,100 × 16 × 2 channels = **1.4112 Mb/s**. Delta modulation and ADPCM reduce the rate; lossy codecs (MP3, AAC, Opus) use perceptual models.
**Line codes** (NRZ, RZ, Manchester, AMI) shape the spectrum, provide timing and DC balance. **Multiplexing**: FDM, TDM (T1: 24 channels × 64 kb/s + framing = 1.544 Mb/s), statistical multiplexing.

# Chapter 4: Digital Modulation and Detection

## 4.1 Signal sets
Binary phase-shift keying (**BPSK**): bits map to two antipodal waveforms ±sqrt(Eb) g(t). **QPSK**: two bits per symbol on the in-phase and quadrature carriers, with Gray mapping (adjacent points differ in one bit): same bandwidth efficiency as two BPSK channels. **M-ary PSK** and **M-QAM** (quadrature amplitude modulation: 16-QAM carries 4 bits/symbol, 64-QAM 6 bits, 256-QAM 8 bits) increase the bit rate for a given bandwidth but need a higher SNR. **FSK** (frequency-shift keying) is used for simple radios (Bluetooth uses GFSK); **MSK/GMSK** (GSM) have constant envelope. Differential schemes avoid carrier phase recovery.
**Pulse shaping and ISI**: the Nyquist criterion for zero intersymbol interference requires a pulse that is zero at the other sampling instants; the **raised-cosine** filter with roll-off alpha has bandwidth **(1 + alpha) Rs/2** (baseband) or **(1 + alpha) Rs** for a passband signal at symbol rate Rs. Example: Rs = 1 Msymbol/s, alpha = 0.35: bandwidth **1.35 MHz**; QPSK carries 2 Mb/s, a spectral efficiency of **1.48 b/s/Hz**. Square-root raised-cosine filters at the transmitter and receiver together form the Nyquist pulse (the receive filter is **matched** to the transmit pulse, which maximises the SNR at the sampling instant).

## 4.2 Error performance in AWGN
With Eb the energy per bit and N0 the noise density, the optimum (matched-filter) receiver gives for BPSK and for QPSK (per bit, with Gray mapping):
**BER = Q(sqrt(2 Eb/N0))**, where Q(x) = 0.5 erfc(x/sqrt 2).
Monte Carlo results (2 million bits per point) agree closely with the theory:
```
Eb/N0 (dB)   BPSK simulated   QPSK simulated   theory Q(sqrt(2 Eb/N0))
0            0.0787           -                0.0786
2            0.0374           -                0.0375
4            0.01251          0.01256          0.01250
6            0.00243          0.00241          0.00239
8            0.000172         0.000212         0.000191
```
**QPSK has the same BER per bit as BPSK** but twice the data rate in the same bandwidth. For **16-QAM** with Gray mapping the bit error rate is approximately **0.75 Q(sqrt(0.8 Eb/N0))**: simulated 0.0279 at 6 dB (theory 0.0279), 0.00922 at 8 dB (0.00925) and 0.00177 at 10 dB (0.00175). To get a BER of 10^-3 BPSK needs about 6.8 dB, 16-QAM about 10.5 dB: **higher-order modulation trades SNR for spectral efficiency**.

# Chapter 5: Information Theory and Capacity

**Shannon's channel capacity**: C = B log2(1 + SNR) bits per second for an AWGN channel of bandwidth B: reliable communication is possible at any rate below C (with suitable coding) and impossible above it. Examples: B = 1 MHz, SNR = 20 dB (100): C = **6.66 Mb/s**; a 3 kHz telephone line at 30 dB: 29.9 kb/s. Spectral efficiency of 4 b/s/Hz requires SNR >= 2^4 - 1 = 15 (**11.8 dB**). As the bandwidth tends to infinity C tends to 1.44 P/N0, and the minimum **Eb/N0 = ln 2 = 0.693 = -1.59 dB** (the Shannon limit): no code can work below it. Practical systems with turbo/LDPC codes approach the limit within 1 dB.
**Entropy** H = -sum p_i log2 p_i bits per symbol is the minimum average bits for lossless source coding (Huffman coding achieves within 1 bit); source coding removes redundancy, channel coding adds structured redundancy.

# Chapter 6: Error-Control Coding

## 6.1 Block codes
An (n, k) code maps k data bits to n coded bits; the rate is R = k/n. The **minimum distance d_min** determines the capability: it detects d_min - 1 errors and corrects floor((d_min - 1)/2).
**Hamming (7,4)**: 4 data bits, 3 parity bits, d_min = **3**: corrects any single-bit error. Generator (systematic): codeword = [d1 d2 d3 d4 p1 p2 p3] with p1 = d1 + d2 + d4, p2 = d1 + d3 + d4, p3 = d2 + d3 + d4 (modulo 2). The data 1011 gives the codeword **1011010**. The parity-check matrix H has columns that are all the non-zero 3-bit patterns, so the **syndrome** s = H r of a received word with one error equals the column of the erroneous position, which identifies it. Verified exhaustively: all 16 messages × 7 single-error positions = **112 of 112** errors were corrected, and the minimum distance computed over all pairs of codewords is 3. For one error at bit 4 (the 4th position) of 1011010 the syndrome is 111. Using Hamming (7,4) with BPSK (coding rate 4/7 reduces the energy per coded bit) the block error rate of 4 data bits is lower than the uncoded rate, even though each coded bit has less energy: block error 3.7 × 10^-2 coded against 4.9 × 10^-2 uncoded at Eb/N0 = 4 dB; 5.4 × 10^-3 against 9.5 × 10^-3 at 6 dB; 2.7 × 10^-4 against 7.6 × 10^-4 at 8 dB.
**Cyclic codes**: CRC for detection; **BCH and Reed-Solomon** codes correct bursts (used in CDs, QR codes and DVB); **LDPC and turbo codes** approach capacity.

## 6.2 Convolutional codes and Viterbi decoding
A rate-1/2 convolutional encoder with constraint length K = 3 and generators (7, 5) octal outputs two bits per input bit: c1 = b + s1 + s2, c2 = b + s2 (where s1, s2 are the two previous bits). Encoding 1011 followed by two tail zeros gives **11 10 00 01 01 11** (output stream 1 1 1 0 0 0 0 1 0 1 1 1). The **Viterbi algorithm** finds the maximum-likelihood path through the 4-state trellis by keeping, for each state, the survivor with the smallest accumulated Hamming (hard decision) or Euclidean (soft decision) distance. With two channel bit errors introduced (the 4th and the 9th channel bits) the decoder still returned the correct data 1 0 1 1 0 0 with path metric 2 (the two corrected errors). Simulation over a binary symmetric channel with crossover probability p: **p = 0.01: output BER 5 × 10^-5**; p = 0.03: 1.6 × 10^-3; p = 0.05: 5.9 × 10^-3: the code reduces the error rate by more than a factor of 10 at low p. Soft-decision decoding gains a further 2 dB.
**ARQ** (retransmission on error detection) and **hybrid ARQ** combine detection with correction; **interleaving** spreads burst errors; **coding gain** is the Eb/N0 saved at a given BER.

# Chapter 7: OFDM and Spread Spectrum

## 7.1 OFDM
**Orthogonal frequency-division multiplexing** splits the data over N narrowband subcarriers spaced by fs/N, generated by an inverse FFT; a **cyclic prefix** (the last L samples copied to the front) turns the channel's linear convolution into a circular one, so a multipath channel with delay spread shorter than the prefix becomes a set of flat channels, each corrected by a one-tap equaliser Y/H. Simulation: N = 64 subcarriers with QPSK, prefix of 16 samples, a multipath channel h = [1, 0.5, 0.3j, 0.2] and no noise: **0 errors in 256,000 bits** after one-tap equalisation; without the prefix: **487 errors** (inter-symbol and inter-carrier interference).
**IEEE 802.11a/g example**: 20 MHz sampling, 64-point FFT: subcarrier spacing 20 MHz/64 = **312.5 kHz**; useful symbol 3.2 μs plus 0.8 μs guard interval = **4 μs**; 48 data subcarriers with 64-QAM (6 bits) and code rate 3/4: 48 × 6 × 0.75/4 μs = **54 Mb/s**. OFDM is used in Wi-Fi, LTE/5G, DVB and DSL; its drawbacks are a high peak-to-average power ratio and sensitivity to frequency offset.

## 7.2 Spread spectrum and CDMA
**Direct-sequence spread spectrum (DSSS)** multiplies each data bit by a fast pseudo-noise (PN) chip sequence, spreading the bandwidth by the **processing gain** Gp = chip rate/bit rate. A maximal-length sequence from a 7-stage shift register has length 2^7 - 1 = **127** chips; its periodic autocorrelation is **127 at zero shift and -1 at all other shifts** (verified), giving a processing gain of 10 log10 127 = **21.0 dB** (interference and jamming are suppressed by this factor after despreading). **CDMA** assigns each user an orthogonal code: the 8 × 8 Walsh-Hadamard codes are mutually orthogonal (checked: H H^T = 8 I). Two users with codes 1 and 2 transmitting data (1, -1, 1) and (-1, -1, 1) at the same time and frequency: correlating the sum with user 1's code recovers **(1, -1, 1)**, with the other user fully rejected. Uses: GPS, 3G cellular, Bluetooth/Zigbee variants (frequency hopping), military anti-jam links.

# Chapter 8: Link Budgets and Multiple Access

**Free-space path loss**: FSPL (dB) = 20 log10(d_km) + 20 log10(f_MHz) + 32.44. A geostationary satellite link (d = 36,000 km, f = 4 GHz): **195.6 dB**; a 1 km Wi-Fi link at 2.4 GHz: **100.0 dB**; 10 km at 900 MHz: 111.5 dB. The **link budget**: P_r = P_t + G_t + G_r - L_path - other losses (all in dB). Example: P_t = 20 dBm, antenna gains 3 dBi each, 1 km at 2.4 GHz: P_r = 20 + 3 + 3 - 100.0 = **-74.0 dBm**; the noise floor for a 20 MHz channel with a 6 dB noise figure is -174 + 10 log10(20 × 10^6) + 6 = **-95.0 dBm**; SNR = **20.9 dB**; fade margin = SNR - required SNR (for example, 64-QAM needs about 22 dB). **Multiple access**: FDMA (frequency slots), TDMA (time slots: GSM), CDMA (codes), OFDMA (subcarrier groups: LTE/5G), CSMA (random access: Wi-Fi). **Cellular concepts**: frequency reuse, handover, cell sizes, and MIMO (multiple antennas multiply the capacity with spatial multiplexing: capacity grows approximately with min(Nt, Nr)).

## Quick reference
- AM: eta = m^2/(2 + m^2); BW = 2 fm. FM: beta = delta_f/fm; BW ≈ 2 (delta_f + fm).
- SQNR = 6.02 n + 1.76 dB. BPSK/QPSK BER = Q(sqrt(2 Eb/N0)). Raised-cosine BW = (1 + alpha) Rs.
- Shannon: C = B log2(1 + SNR); minimum Eb/N0 = -1.59 dB.
- Hamming (7,4): d_min = 3; corrects 1 error. OFDM spacing = fs/N; the cyclic prefix must exceed the delay spread.
- FSPL = 20 log10(d_km) + 20 log10(f_MHz) + 32.44 dB; thermal noise = -174 dBm/Hz + 10 log10 B.
