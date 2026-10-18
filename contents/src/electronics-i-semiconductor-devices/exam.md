# Electronics I (Semiconductor Devices): Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks. Use V_T = 25 mV, V_BE = 0.7 V, a 0.7 V silicon diode drop and n_i = 1.5 × 10^10 cm^-3 unless stated.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** Doping silicon with phosphorus produces
A) p-type material  B) n-type material  C) an insulator  D) intrinsic material

**2.** The reverse saturation current of a diode roughly doubles every
A) 1 °C  B) 5 to 10 °C  C) 50 °C  D) never

**3.** The depletion region of a pn junction under forward bias
A) widens  B) narrows  C) disappears and the diode breaks down  D) is unchanged

**4.** For a bridge rectifier from a transformer with peak secondary voltage 20 V and silicon diodes, the peak output is
A) 20 V  B) 19.3 V  C) 18.6 V  D) 10 V

**5.** In a capacitor-filtered full-wave rectifier the ripple frequency (50 Hz mains) is
A) 25 Hz  B) 50 Hz  C) 100 Hz  D) 200 Hz

**6.** A Zener diode regulates the output voltage because in breakdown
A) the current is constant  B) the voltage stays nearly constant while the current changes  C) it is an open circuit  D) it conducts only for forward bias

**7.** The current gain β of a BJT is the ratio
A) I_E/I_B  B) I_C/I_B  C) I_C/I_E  D) I_B/I_C

**8.** A BJT saturates when
A) both junctions are forward-biased  B) both are reverse-biased  C) only BE is reverse-biased  D) V_CE is very large

**9.** A BJT bias circuit is insensitive to β if
A) R_th ≪ (β + 1) R_E  B) R_th ≫ (β + 1) R_E  C) R_E = 0  D) R_C = 0

**10.** The small-signal input resistance r_π of a BJT equals
A) V_T/I_C  B) β/g_m  C) V_A/I_C  D) β V_T

**11.** The Early voltage V_A describes
A) the supply voltage  B) the finite output resistance r_o = V_A/I_C  C) the base current  D) the breakdown voltage

**12.** The input resistance of a common-collector stage is
A) very low  B) high  C) zero  D) equal to R_C

**13.** An NMOS transistor with V_GS = 3 V, V_t = 1 V and V_DS = 0.5 V is in the
A) cutoff region  B) triode region  C) saturation region  D) breakdown region

**14.** The saturation drain current of a MOSFET is proportional to
A) V_ov  B) V_ov²  C) 1/V_ov  D) V_DS

**15.** The transconductance of a MOSFET in saturation is g_m =
A) I_D/V_ov  B) 2 I_D/V_ov  C) I_D V_ov  D) V_ov/I_D

**16.** In a CMOS NAND gate the NMOS transistors are
A) in parallel  B) in series  C) absent  D) replaced by resistors

**17.** Dynamic power in CMOS is proportional to
A) V_DD  B) V_DD²  C) 1/V_DD  D) independent of V_DD

**18.** The bandwidth of an op-amp circuit with a gain-bandwidth product of 1 MHz and a closed-loop gain of 10 is
A) 10 kHz  B) 100 kHz  C) 1 MHz  D) 10 MHz

**19.** A current mirror copies a reference current using
A) two transistors with the same V_GS  B) a resistor only  C) a capacitor  D) a diode only

**20.** The junction temperature of a device dissipating P with thermal resistance θ_JA is
A) T_A + P/θ_JA  B) T_A + P θ_JA  C) T_A - P θ_JA  D) P θ_JA only

## Section B: Short Questions (40 marks)

**B1. (5)** n-type silicon has N_D = 2 × 10^16 cm^-3. Find the electron and hole concentrations at 300 K. Then, for p-type silicon with N_A = 2 × 10^16 cm^-3, find the hole and electron concentrations.

**B2. (5)** A diode with a 0.7 V drop is in series with a 1.8 kΩ resistor and a 9 V supply. Find the current, the power in the resistor, and the current if a second identical diode is added in series.

**B3. (5)** Design the series resistor (nearest standard value from 220, 240, 270 Ω) for a Zener regulator: V_in = 15 V, V_Z = 9.1 V, I_L,max = 20 mA, I_Z,min = 5 mA. Check the Zener current at full load and at no load.

**B4. (5)** A BJT (β = 150) has I_B = 20 μA, V_CC = 10 V, R_C = 2 kΩ. Find I_C, V_CE, g_m and r_π.

**B5. (5)** A BJT at I_C = 0.5 mA has β = 100 and V_A = 80 V. Find g_m, r_π and r_o.

**B6. (5)** An NMOS with V_t = 0.7 V and k_n = 1 mA/V² has V_GS = 2.7 V and V_DS = 4 V. Find I_D and g_m, and check the region.

**B7. (5)** A chip has 10^7 gates switching with activity 0.2, load 5 fF each, V_DD = 1.2 V and f = 1 GHz. Find the dynamic power.

**B8. (5)** (a) Express a voltage gain of 100 in dB. (b) Three identical stages each with a gain of 10 V/V are cascaded (ignore loading): give the total gain in V/V and in dB.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Power supply design.** A 5 V, 0.5 A supply is built from a 50 Hz transformer with a 9 V rms secondary, a bridge rectifier (0.7 V per diode), a smoothing capacitor and a 7805 linear regulator that needs at least 7 V at its input.
(a) Find the peak of the rectified voltage [2]. (b) Find the capacitor for a peak-to-peak ripple of 1 V at 0.5 A (ripple = I/(2 f C)) [3]. (c) Find the minimum input voltage to the regulator and confirm that the regulator works [2]. (d) Find the power dissipated in the regulator, using the average input voltage (peak minus half the ripple) [2]. (e) Suggest an efficiency improvement [1].

**C2. BJT amplifier design.** Design a common-emitter stage with V_CC = 15 V, β = 120, I_C = 2 mA, R_E = 1 kΩ and V_CE = 7 V.
(a) Find I_E, V_E, V_B and R_C [4]. (b) Choose R_th = 0.1(β + 1) R_E and find R_1 and R_2 [3]. (c) Find g_m, r_π and the gain for R_L = 10 kΩ with the emitter bypassed (take R_C = 3 kΩ) [3].

**C3. MOSFET amplifier design.** A common-source stage has V_DD = 12 V, k_n = 0.5 mA/V², V_t = 1 V and I_D = 1 mA.
(a) Find V_ov, V_GS and g_m [3]. (b) Choose R_S = 1 kΩ and R_D for V_D = 8 V; find V_G and the divider (R_1 = 2 MΩ, R_2 = 1 MΩ) [4]. (c) Find the gain (R_L = ∞) and the output resistance [3].

**C4. CMOS and power.** A processor has 10^8 gates, each with an effective switched capacitance of 2 fF, activity 0.1, V_DD = 0.9 V, f = 3 GHz.
(a) Find the dynamic power [3]. (b) By how much does the power change if V_DD is lowered to 0.8 V at the same frequency, and why can't voltage be lowered freely? [4] (c) Explain why CMOS draws almost no static current and name one source of static power in modern chips [3].

**C5. Frequency response.** An amplifier has a midband gain of -100 (40 dB), a low-frequency pole at 100 Hz (coupling capacitor) and a high-frequency pole at 1 MHz.
(a) Find the gain in dB at 10 Hz, 100 Hz, 10 kHz and 10 MHz (single-pole approximations) [4]. (b) Find the bandwidth [2]. (c) Estimate the high-frequency pole when the source resistance is 10 kΩ and the input capacitance is 32 pF (including the Miller effect) [2]. (d) Explain how negative feedback trades gain for bandwidth [2].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **B** · 3 **B** · 4 **C** · 5 **C** · 6 **B** · 7 **B** · 8 **A** · 9 **A** · 10 **B** · 11 **B** · 12 **B** · 13 **B** · 14 **B** · 15 **B** · 16 **B** · 17 **B** · 18 **B** · 19 **A** · 20 **B**

Brief reasons: 4. 20 - 1.4 = 18.6 V. 5. A full-wave rectifier doubles the frequency. 13. V_ov = 2 V and V_DS = 0.5 V < V_ov. 18. 1 MHz/10 = 100 kHz.

## Section B solutions

**B1.** n-type: Step 1: n ≈ N_D = **2 × 10^16 cm^-3**.
Step 2: p = n_i²/n = 2.25 × 10^20/(2 × 10^16) = **1.125 × 10^4 cm^-3**.
p-type with N_A = 2 × 10^16: Step 3: the majority holes p ≈ **2 × 10^16 cm^-3**. Step 4: the minority electrons n = n_i²/p = **1.125 × 10^4 cm^-3**.

**B2.** Step 1: I = (9 - 0.7)/1.8 kΩ = **4.61 mA**.
Step 2: P_R = I² R = (4.61 mA)² × 1.8 kΩ = **38 mW**.
Step 3: with two diodes: I = (9 - 1.4)/1.8 kΩ = **4.22 mA**.

**B3.** Step 1: R_s ≤ (15 - 9.1)/(20 + 5) mA = 5.9/0.025 = 236 Ω, so choose the next lower standard value **220 Ω**.
Step 2: I_Rs = 5.9/220 = 26.8 mA.
Step 3: full load: I_Z = 26.8 - 20 = **6.8 mA** (> 5 mA ✓).
Step 4: no load: I_Z = **26.8 mA** (P_Z = 9.1 × 26.8 mA = 244 mW: use a 0.5 W Zener).

**B4.** Step 1: I_C = β I_B = 150 × 20 μA = **3 mA**.
Step 2: V_CE = 10 - 3 mA × 2 kΩ = **4 V**.
Step 3: g_m = I_C/V_T = 3 mA/25 mV = **120 mS**.
Step 4: r_π = β/g_m = 150/0.12 = **1.25 kΩ**.

**B5.** Step 1: g_m = 0.5 mA/25 mV = **20 mS**.
Step 2: r_π = β/g_m = 100/0.02 = **5 kΩ**.
Step 3: r_o = V_A/I_C = 80/0.5 mA = **160 kΩ**.

**B6.** Step 1: V_ov = V_GS - V_t = 2.7 - 0.7 = 2 V; V_DS = 4 V ≥ 2 V: **saturation**.
Step 2: I_D = (1/2)(1 mA/V²)(2 V)² = **2 mA**.
Step 3: g_m = k_n V_ov = 1 × 2 = **2 mS**.

**B7.** P = α N C V² f = 0.2 × 10^7 × 5 × 10^-15 × 1.44 × 10^9: 0.2 × 10^7 = 2 × 10^6; × 5 × 10^-15 = 10^-8; × 1.44 = 1.44 × 10^-8; × 10^9 = **14.4 W**.

**B8.** (a) 20 log10(100) = 20 × 2 = **40 dB**.
(b) Total gain 10 × 10 × 10 = **1000 V/V = 60 dB** (the dB gains add: 3 × 20 dB).

## Section C solutions

**C1.**
(a) Step 1: V_p(secondary) = 9 sqrt 2 = 12.73 V.
Step 2: the bridge output peak = 12.73 - 1.4 = **11.33 V**.
(b) C = I/(2 f V_r) = 0.5/(2 × 50 × 1) = 0.005 F = **5000 μF** (full-wave: ripple frequency 100 Hz).
(c) The minimum input voltage = 11.33 - 1.0 = **10.33 V** > 7 V (the regulator's dropout requirement): the regulator works (with a 3.3 V margin).
(d) Step 1: average input ≈ 11.33 - 0.5 = 10.83 V.
Step 2: P = (V_in - V_out) I = (10.83 - 5) × 0.5 = **2.9 W**: the regulator needs a heat sink (T_J = T_A + 2.9 θ_JA).
(e) Use a **switching (buck) regulator** (efficiency over 85 percent) or a low-dropout regulator with a lower transformer voltage to reduce the wasted power.

**C2.**
(a) Step 1: I_E = I_C (β + 1)/β = 2 mA × 121/120 = 2.017 mA.
Step 2: V_E = I_E R_E = 2.017 mA × 1 kΩ = **2.02 V**; V_B = V_E + 0.7 = **2.72 V**.
Step 3: from V_CC = I_C R_C + V_CE + I_E R_E: R_C = (15 - 7 - 2.02)/2 mA = 5.98/2 mA = **2.99 kΩ ≈ 3 kΩ**.
(b) Step 1: design rule R_th = 0.1 (β + 1) R_E = 0.1 × 121 × 1 kΩ = **12.1 kΩ**.
Step 2: R_1 = R_th V_CC/V_B = 12.1 × 15/2.72 = **66.8 kΩ** (68 kΩ); R_2 = R_th V_CC/(V_CC - V_B) = 12.1 × 15/12.28 = **14.8 kΩ** (15 kΩ).
Step 3: with the standard values 68 kΩ and 15 kΩ: V_th = 15 × 15/83 = 2.71 V, I_B = 15.1 μA, I_C = 1.81 mA and V_CE = 7.74 V: close to the design.
(c) Step 1: g_m = 2 mA/25 mV = **80 mS** (77 mS at 1.93 mA); r_π = β/g_m = **1.5 kΩ**.
Step 2: A_v = -g_m (R_C ∥ R_L) = -0.08 × (3 k ∥ 10 k = 2.31 kΩ) = **-185**.
Step 3: with the standard resistors of part (b), I_C = 1.81 mA and g_m = 72 mS, so the gain is about -167.

**C3.**
(a) Step 1: V_ov = sqrt(2 I_D/k_n) = sqrt(2 × 1 mA/0.5 mA/V²) = **2 V**.
Step 2: V_GS = V_t + V_ov = **3 V**.
Step 3: g_m = 2 I_D/V_ov = 2 mA/2 V = **1 mS**.
(b) Step 1: V_S = I_D R_S = 1 V, so V_G = V_GS + V_S = **4 V**; the divider R_1 = 2 MΩ, R_2 = 1 MΩ gives 12 × 1/3 = 4 V ✓.
Step 2: for V_D = 8 V: R_D = (12 - 8)/1 mA = **4 kΩ**.
Step 3: check V_DS = 8 - 1 = 7 V ≥ V_ov: saturation ✓.
(c) A_v = -g_m R_D = -1 mS × 4 kΩ = **-4** (with the source bypassed; without bypass A_v ≈ -g_m R_D/(1 + g_m R_S) = -2). R_out ≈ R_D = **4 kΩ** (in parallel with r_o).

**C4.**
(a) P = α N C V² f = 0.1 × 10^8 × 2 × 10^-15 × 0.81 × 3 × 10^9: 0.1 × 10^8 = 10^7; × 2 × 10^-15 = 2 × 10^-8; × 0.81 = 1.62 × 10^-8; × 3 × 10^9 = **48.6 W**.
(b) Step 1: P ∝ V²: (0.8/0.9)² = 0.79, so P = 0.79 × 48.6 = **38.4 W** (21 percent less).
Step 2: the supply cannot be lowered freely because the gate delay increases as V_DD approaches the threshold voltage (the overdrive V_DD - V_t shrinks, so the drive current and the maximum frequency fall), noise margins shrink, and variations and leakage become more important. Designers use dynamic voltage and frequency scaling (DVFS).
(c) In each steady state one transistor of the complementary pair is off, so there is no direct path from V_DD to ground; current flows only when the output switches. **Subthreshold leakage** (the off transistor still conducts a small current, which grows exponentially as V_t is reduced), gate-oxide tunnelling and junction leakage are sources of static power; in modern nanometre chips they can be 20 to 40 percent of the total.

**C5.**
(a) |H| = 100/sqrt(1 + (f_L/f)²)/sqrt(1 + (f/f_H)²) with f_L = 100 Hz and f_H = 1 MHz.
Step 1: at 10 Hz: 100/sqrt(1 + 100) = 9.95: **20.0 dB**.
Step 2: at 100 Hz: 100/sqrt 2 = 70.7: **37.0 dB** (-3 dB).
Step 3: at 10 kHz: **40.0 dB** (midband).
Step 4: at 10 MHz: 100/sqrt(1 + 100) = 9.95: **20.0 dB**.
(b) The bandwidth between the -3 dB points: f_H - f_L = 1 MHz - 100 Hz = **about 1 MHz** (999.9 kHz). The gain-bandwidth product is 100 × 1 MHz = 100 MHz.
(c) f_H = 1/(2π R_s C_in) = 1/(2π × 10 kΩ × 32 pF) = 1/(2.01 × 10^-6) = **497 kHz**.
(d) With negative feedback of the feedback factor β_f, the closed-loop gain falls by the factor (1 + A β_f) while all the bandwidth poles move out by the same factor: gain × bandwidth stays constant (A_f = A/(1 + Aβ_f), f_H,f = f_H(1 + Aβ_f)). A gain of 100 reduced to 10 gives a bandwidth of 10 MHz instead of 1 MHz. Feedback also reduces distortion and makes the gain insensitive to the device parameters.
