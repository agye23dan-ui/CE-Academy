# Electronics II (Analog Design): Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks. Assume ideal op-amps unless stated.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** The closed-loop gain of a feedback amplifier is
A) A(1 + Aβ)  B) A/(1 + Aβ)  C) Aβ  D) A - β

**2.** Series mixing with shunt sampling at the output (series-shunt feedback) gives
A) low R_in and high R_out  B) high R_in and low R_out  C) low R_in and low R_out  D) high R_in and high R_out

**3.** The noise gain of a non-inverting amplifier with R_f = 99 kΩ and R_g = 1 kΩ is
A) 1  B) 99  C) 100  D) 0.01

**4.** A 1 MHz GBW op-amp with a gain of 50 has a small-signal bandwidth of
A) 20 kHz  B) 50 kHz  C) 1 MHz  D) 50 MHz

**5.** Slew-rate limiting distorts
A) small signals at low frequencies  B) large, high-frequency signals  C) DC signals  D) only square waves of low amplitude

**6.** The bias current compensation resistor in an inverting amplifier equals
A) R_f  B) R_in  C) R_in ∥ R_f  D) 0

**7.** An op-amp comparator without feedback
A) has a virtual short  B) saturates according to the sign of v+ - v-  C) amplifies linearly  D) oscillates

**8.** The thresholds of an inverting Schmitt trigger depend on
A) the supply only  B) the saturation voltage and the feedback ratio  C) the input frequency  D) the load

**9.** A unity-gain Sallen-Key low-pass with equal resistors has Q = 0.707 when
A) C_1 = C_2  B) C_1 = 2 C_2  C) C_1 = C_2/2  D) R_1 = 2 R_2

**10.** Each additional pole in a low-pass filter adds roll-off of
A) 6 dB/octave  B) 20 dB/decade  C) both of the above (they are equal)  D) 60 dB/decade

**11.** The Barkhausen criterion requires, at the oscillation frequency, a loop phase shift of
A) 90°  B) 180°  C) 0° or 360°  D) 45°

**12.** The 555 astable frequency is
A) 1.1/(RC)  B) 1.44/((R_1 + 2R_2) C)  C) 0.693 RC  D) 1/(2π RC)

**13.** A crystal oscillator is preferred in a microcontroller because of its
A) low cost only  B) high Q and frequency stability  C) large size  D) wide tolerance

**14.** The phase margin is the phase of the loop gain relative to -180° at the frequency where
A) |Aβ| = 1  B) the phase is zero  C) |Aβ| = 0  D) the gain is maximum

**15.** Miller compensation makes the amplifier stable by
A) adding a zero  B) creating a dominant low-frequency pole and pushing the second pole higher  C) removing feedback  D) increasing the supply

**16.** In class AB output stages the quiescent current is set to
A) zero  B) a small value that removes the crossover distortion  C) the maximum rating  D) the load current

**17.** The maximum efficiency of a class A stage with a resistive load is
A) 25 percent  B) 50 percent  C) 78.5 percent  D) 100 percent

**18.** Compared with a linear regulator for a large V_in - V_out, a switching regulator has
A) lower efficiency  B) higher efficiency but more noise  C) lower cost always  D) no ripple

**19.** In a buck converter V_out = D V_in. For V_in = 15 V and V_out = 5 V the duty cycle is
A) 0.25  B) 0.33  C) 0.5  D) 0.75

**20.** Thermal (Johnson) noise voltage increases with
A) the square root of resistance and bandwidth  B) 1/R  C) frequency only  D) the supply voltage

## Section B: Short Questions (40 marks)

**B1. (5)** A non-inverting amplifier has R_f = 20 kΩ and R_g = 1 kΩ. The op-amp has an input offset voltage of 2 mV. Find the ideal gain and the output offset error. If the GBW is 1 MHz, find the bandwidth.

**B2. (5)** A unity-gain Sallen-Key low-pass filter has R = 16 kΩ, C_1 = 20 nF and C_2 = 10 nF. Find f_0 and Q.

**B3. (5)** A 555 monostable uses R = 47 kΩ and C = 22 μF. Find the pulse width. What value of R gives 10 s with the same C?

**B4. (5)** An op-amp has a slew rate of 1 V/μs. Find the full-power bandwidth for a 5 V peak output. What peak amplitude can it deliver at 100 kHz?

**B5. (5)** A feedback amplifier has a crossover frequency of 1 MHz where the first pole contributes -90° and a second pole at 2.5 MHz. Find the phase margin and comment.

**B6. (5)** A class AB stage with ±15 V supplies delivers 12 V peak into 8 Ω. Estimate the efficiency (use the class B formula) and the power in the load.

**B7. (5)** A buck converter converts 12 V to 3.3 V at 500 kHz with L = 22 μH. Find the duty cycle and the inductor ripple current.

**B8. (5)** A current mirror has a 1:3 area ratio and a reference current of 0.5 mA. Find the output current (ignore base currents), and the error if β = 100 and the base currents are included for a simple two-transistor mirror with 1:1 ratio.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Sensor amplifier.** A type-K thermocouple produces 41 μV/°C. The temperature range 0 to 100 °C (0 to 4.1 mV) must be amplified to 0 to 5 V for an ADC.
(a) Find the required gain and design an instrumentation amplifier stage (R = 25 kΩ feedback resistors) giving it [4]. (b) The op-amp has a 50 μV input offset: find the equivalent temperature error [2]. (c) Why is an instrumentation amplifier chosen and which op-amp specifications matter (offset, drift, CMRR, noise)? [4]

**C2. Anti-aliasing filter.** An ADC samples at 20 kHz and the signal band is 0 to 5 kHz.
(a) Design a second-order unity-gain Sallen-Key Butterworth filter with f_c = 5 kHz using R = 10 kΩ (give C_1 and C_2) [4]. (b) Find the attenuation at 15 kHz (the lowest alias of interest, 20 - 5) for second- and fourth-order Butterworth filters [3]. (c) Choose the minimum GBW of the op-amp [2]. (d) Which filter response would you choose for pulse signals? [1]

**C3. Oscillator design.** Design a 10 kHz Wien-bridge oscillator.
(a) Choose R and C (use C = 10 nF) [2]. (b) Find the gain needed and R_f, R_g, and explain the start-up condition [3]. (c) Describe how the amplitude is stabilised [2]. (d) State the op-amp GBW and slew-rate requirements for a 5 V peak output [3].

**C4. Audio power amplifier.** Design a class AB amplifier for 10 W into 4 Ω with ±12 V supplies.
(a) Find V_p and the peak current [2]. (b) Find the supply power and the efficiency at full output [3]. (c) Find the worst-case total dissipation and the heat sink requirement for each of two transistors (T_J ≤ 125 °C at 25 °C ambient: the case-to-sink and junction-to-case resistances are 0.5 and 1.5 °C/W) [4]. (d) Explain crossover distortion [1].

**C5. Stability analysis.** A feedback amplifier has the loop gain Aβ = 1000/((1 + s/ω_1)(1 + s/ω_2)(1 + s/ω_3)) with poles at 100 Hz, 1 MHz and 5 MHz.
(a) Estimate the crossover frequency and the phase margin [4]. (b) Find the gain margin using the frequency 2.24 MHz at which the phase is -180° (|Aβ| = 0.0167 there) [3]. (c) Describe the step response and what happens if the loop gain is doubled [3].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **B** · 3 **C** · 4 **A** · 5 **B** · 6 **C** · 7 **B** · 8 **B** · 9 **B** · 10 **C** · 11 **C** · 12 **B** · 13 **B** · 14 **A** · 15 **B** · 16 **B** · 17 **A** · 18 **B** · 19 **B** · 20 **A**

Brief reasons: 3. Noise gain = 1 + R_f/R_g = 100. 4. 1 MHz/50 = 20 kHz. 9. Q = (1/2) sqrt(C_1/C_2). 19. 5/15 = 0.33.

## Section B solutions

**B1.** Step 1: ideal gain = 1 + R_f/R_g = 1 + 20/1 = **21**.
Step 2: output offset = 21 × 2 mV = **42 mV**.
Step 3: bandwidth = GBW/gain = 1 MHz/21 = **47.6 kHz**.

**B2.** Step 1: sqrt(C_1 C_2) = sqrt(20 nF × 10 nF) = 14.14 nF.
Step 2: f_0 = 1/(2π R sqrt(C_1 C_2)) = 1/(2π × 16,000 × 14.14 nF) = 1/(1.421 × 10^-3) = **703 Hz**.
Step 3: Q = (1/2) sqrt(C_1/C_2) = (1/2) sqrt 2 = **0.707** (Butterworth).

**B3.** Step 1: T = 1.1 R C = 1.1 × 47 kΩ × 22 μF = 1.1 × 1.034 = **1.14 s**.
Step 2: for 10 s: R = T/(1.1 C) = 10/(1.1 × 22 μF) = 10/(2.42 × 10^-5) = **413 kΩ** (use 390 kΩ in series with a 22 kΩ trimmer).

**B4.** Step 1: f_max = SR/(2π V_p) = 10^6/(2π × 5) = **31.8 kHz**.
Step 2: at 100 kHz: V_p = SR/(2π f) = 10^6/(2π × 10^5) = **1.59 V** peak.

**B5.** Step 1: PM = 180° - 90° - arctan(f_c/f_2) = 90° - arctan(1/2.5).
Step 2: arctan 0.4 = 21.8°, so PM = 90° - 21.8° = **68.2°**: well above 45° to 60°, a stable well-damped amplifier with little overshoot (a few percent).

**B6.** Step 1: P_out = V_p²/(2R_L) = 12²/(2 × 8) = **9 W**.
Step 2: P_supply = 2 V_cc V_p/(π R_L) = 2 × 15 × 12/(π × 8) = 14.3 W.
Step 3: efficiency = P_out/P_supply = (π/4)(V_p/V_cc) = 0.785 × 0.8 = **62.8 percent** (class AB has a slightly lower efficiency because of the quiescent current).

**B7.** Step 1: D = V_out/V_in = 3.3/12 = **0.275**.
Step 2: ΔI_L = (V_in - V_out) D/(L f) = 8.7 × 0.275/(22 μH × 500 kHz) = 2.39/11 = **0.217 A** peak-to-peak.

**B8.** Step 1: with a 1:3 ratio: I_out = 3 × 0.5 mA = **1.5 mA**.
Step 2: for the 1:1 simple mirror with base currents: I_out = I_ref/(1 + 2/β) = I_ref/1.02 = **0.98 I_ref**, an error of **2 percent**.

## Section C solutions

**C1.**
(a) Gain = 5 V/4.1 mV = **1220** (1219). An instrumentation amplifier with R = 25 kΩ: 1 + 2R/R_g = 1219, so R_g = 50 kΩ/1218 = **41 Ω** (use a 39 Ω resistor in series with a 5 Ω trimmer, or 41.2 Ω 0.1 percent); a unity-gain difference amplifier follows. (Often split into two stages to reduce the effect of the GBW and offsets.)
(b) 50 μV/41 μV per °C = **1.2 °C** error (before the gain is applied the offset is equivalent to 1.2 °C).
(c) The thermocouple signal is small (millivolts) and appears on top of a common-mode voltage from the environment, so the amplifier needs **high CMRR (over 100 dB)** and a **high input resistance**. The instrumentation amplifier's gain is set by one resistor and matched internal resistors give the CMRR. Critical specifications: **low offset and drift** (μV and μV/°C), **low noise** (nV/√Hz), high CMRR, adequate bandwidth, and input bias current (low for high-impedance sources). Add a cold-junction compensation measurement, an input RC filter against interference and a protection network.

**C2.**
(a) Step 1: Q = 0.707 requires C_1 = 2 C_2 and f_c = 1/(2π R sqrt 2 C_2).
Step 2: C_2 = 1/(2π × 10^4 × 5000 × 1.414) = **2.25 nF** (2.2 nF) and C_1 = 2 C_2 = **4.5 nF** (4.7 nF), R = 10 kΩ.
(b) |H(15 kHz)| = 1/sqrt(1 + (15/5)^(2n)):
Step 1: n = 2: 1/sqrt(1 + 3^4) = 1/sqrt 82 = 0.110 = **-19.1 dB**.
Step 2: n = 4: 1/sqrt(1 + 3^8) = 1/sqrt 6562 = 0.0123 = **-38.2 dB**.
(c) GBW ≥ 100 × f_c = 100 × 5 kHz = **0.5 MHz** (use a 1 to 10 MHz op-amp); the slew rate must support the signal.
(d) A **Bessel** filter (linear phase and no overshoot for pulses).

**C3.**
(a) f = 1/(2π RC) = 10 kHz with C = 10 nF: R = 1/(2π × 10^4 × 10^-8) = 1/(6.283 × 10^-4) = **1.59 kΩ** (use 1.58 kΩ, 1 percent).
(b) The RC network attenuates by 3 at f_0, so the amplifier gain must be **3**: 1 + R_f/R_g = 3, **R_f = 2 R_g** (for example 3.16 kΩ and 1.58 kΩ). For start-up the gain must be slightly above 3 (for example 3.1) so that the loop gain exceeds 1 and the oscillation grows from noise.
(c) An **amplitude-control** element reduces the gain as the output grows: a small incandescent lamp or a thermistor in the feedback path (the resistance rises with the signal power), or back-to-back diodes in parallel with a part of R_f (they conduct at larger amplitudes and lower the gain), settling where the loop gain is exactly 1.
(d) The amplifier has a gain of 3 at 10 kHz: GBW ≥ 3 × 10 kHz × (a margin of 10 to 100) = **0.3 to 3 MHz** (so that the phase error of the op-amp does not shift the frequency noticeably). The slew rate: SR ≥ 2π f V_p = 2π × 10^4 × 5 = **0.31 V/μs** (use at least 1 V/μs).

**C4.**
(a) Step 1: V_p = sqrt(2 P R_L) = sqrt(2 × 10 × 4) = sqrt 80 = **8.94 V**.
Step 2: I_p = V_p/R_L = 8.94/4 = **2.24 A**.
(b) Step 1: P_supply = 2 V_cc V_p/(π R_L) = 2 × 12 × 8.94/(π × 4) = **17.1 W**.
Step 2: efficiency = 10/17.1 = **58.5 percent**; total dissipation at full output = 17.1 - 10 = 7.1 W.
(c) Step 1: the worst-case total dissipation (at V_p = 2V_cc/π = 7.64 V) = 2 V_cc²/(π² R_L) = 288/39.5 = **7.3 W**, so each transistor dissipates 3.65 W.
Step 2: for T_J ≤ 125 °C at 25 °C ambient: θ_JA ≤ (125 - 25)/3.65 = 27.4 °C/W, so θ_SA ≤ 27.4 - 1.5 - 0.5 = **25.4 °C/W** (a small heat sink; with a 10 °C/W heat sink T_J = 25 + 3.65 × 12 = 69 °C for an easy margin).
(d) In class B the transistors do not conduct until the input exceeds about ±0.7 V, so the output has a dead zone at each zero crossing; class AB biasing removes it.

**C5.**
(a) Find |Aβ| = 1: |Aβ| ≈ 1000/(f/100) at f ≫ 100 Hz and well below 1 MHz: 1000/(f/100) = 10^5/f = 1 gives f ≈ 100 kHz; including the second pole slightly lowers it to **99.5 kHz**. The phase there = -(arctan(995) + arctan(0.0995) + arctan(0.0199)) = -(89.94° + 5.68° + 1.14°) = -96.8°: **PM = 180 - 96.8 = 83.2°**.
(b) The phase reaches -180° at about 2.24 MHz, where |Aβ| = 0.0167: **gain margin = 1/0.0167 = 60 = 35.6 dB**: the loop gain could be increased by a factor of 60 before the amplifier oscillates.
(c) With PM = 83° the amplifier is nearly critically damped: the step response rises smoothly with practically **no overshoot (about 1 percent)** and a rise time of about 0.35/f_c = 3.5 μs (a closed-loop bandwidth of about 100 kHz). Doubling the loop gain moves the crossover to about 200 kHz (the phase there is about -(89.97° + 11.3° + 2.3°) = -103.6°): **PM falls to about 76°**, still very stable, and the gain margin falls to 29.6 dB (the amplifier remains stable until the gain is raised by 30 times).
