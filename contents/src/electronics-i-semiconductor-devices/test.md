# Electronics I (Semiconductor Devices): Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Use V_T = 25 mV, V_BE = 0.7 V and a 0.7 V diode drop unless stated.

## Section A: Multiple choice (20 marks)

**1.** In n-type silicon the majority carriers are
A) holes  B) electrons  C) ions  D) neutrons

**2.** The mass-action law states that in equilibrium
A) n + p = n_i  B) n p = n_i²  C) n = p always  D) n p = N_D

**3.** The forward voltage drop of a silicon pn diode is about
A) 0.2 V  B) 0.7 V  C) 1.5 V  D) 5 V

**4.** Increasing the reverse bias of a pn junction
A) narrows the depletion region  B) widens the depletion region  C) removes the depletion region  D) forward-biases it

**5.** In a full-wave bridge rectifier, during each half-cycle
A) one diode conducts  B) two diodes conduct  C) all four conduct  D) none conducts

**6.** Increasing the filter capacitor of a rectifier
A) increases the ripple  B) decreases the ripple  C) has no effect  D) lowers the frequency

**7.** A Zener diode in a voltage regulator operates
A) forward-biased  B) in reverse breakdown  C) at zero bias  D) as an open circuit always

**8.** An npn BJT in the active region has
A) BE forward-biased and BC reverse-biased  B) both junctions forward-biased  C) both reverse-biased  D) BE reverse and BC forward

**9.** In the active region the collector current is
A) β I_B  B) I_B/β  C) V_BE/R  D) zero

**10.** The BJT transconductance g_m at I_C = 1 mA (V_T = 25 mV) is
A) 4 mS  B) 40 mS  C) 100 mS  D) 1 S

**11.** A common-emitter amplifier produces
A) no phase change  B) a 180° phase inversion  C) a 90° phase shift  D) a gain of exactly 1

**12.** The voltage gain of an emitter follower is about
A) -100  B) 0  C) 1  D) 100

**13.** An NMOS transistor is in saturation when
A) V_DS < V_GS - V_t  B) V_DS ≥ V_GS - V_t and V_GS > V_t  C) V_GS < V_t  D) V_DS = 0

**14.** The dc gate current of a MOSFET is
A) large  B) equal to I_D  C) essentially zero  D) equal to I_S

**15.** The channel of an enhancement NMOS forms when
A) V_GS > V_t  B) V_GS < 0  C) V_DS = 0  D) V_GS = V_t - 1

**16.** The static power consumption of a CMOS inverter is
A) large  B) approximately zero (leakage only)  C) equal to the dynamic power  D) infinite

**17.** The Miller effect
A) reduces the input capacitance  B) multiplies the feedback capacitance by (1 + |A_v|), increasing the input capacitance  C) removes the poles  D) only affects diodes

**18.** For a single-pole amplifier the gain-bandwidth product is
A) constant  B) proportional to gain  C) zero  D) infinite

**19.** A high CMRR in a differential amplifier means
A) it amplifies common-mode signals  B) it rejects common-mode signals compared with differential ones  C) a large offset  D) low gain

**20.** The junction temperature is T_J =
A) T_A + P θ_JA  B) T_A - P θ_JA  C) P/θ_JA  D) θ_JA/P

## Section B: Problems (40 marks)

**B1. (10 marks)** (a) Find the hole concentration in n-type silicon with N_D = 10^16 cm^-3 (n_i = 1.5 × 10^10 cm^-3) [3]. (b) A diode with I_S = 10^-14 A: find the current at 0.65 V (V_T = 25.85 mV) [2]. (c) A 9 V supply, a 1.8 kΩ resistor and a silicon diode in series: find the current and the resistor power (0.7 V model) [3]. (d) A silicon diode's forward voltage changes by about -2 mV/°C: find the change for +40 °C [2].

**B2. (10 marks)** A Zener regulator uses V_in = 15 V, a 9.1 V Zener and a load that draws up to 20 mA. The minimum Zener current for regulation is 5 mA. (a) Find the largest series resistor [3]. (b) Choose the standard value 220 Ω and find the Zener current at full load and at no load [4]. (c) Find the power in the Zener at no load [2]. (d) What is the effect of an input voltage drop to 11 V? [1]

**B3. (10 marks)** A BJT with β = 150 has I_B = 20 μA, V_CC = 10 V and R_C = 2 kΩ. (a) Find I_C and V_CE [3]. (b) Find g_m and r_π at this bias [3]. (c) Estimate the gain of a CE stage with an R_L of 2 kΩ and a bypassed emitter [2]. (d) Is the transistor in the active region? Justify [2].

**B4. (10 marks)** An NMOS has V_t = 0.7 V and k_n = 1 mA/V² (I_D = (1/2) k_n (V_GS - V_t)² in saturation). (a) Find I_D for V_GS = 2.7 V and V_DS = 4 V [3]. (b) Find g_m [2]. (c) With V_DD = 10 V and R_D = 2 kΩ find V_DS and check the region [3]. (d) Give the dynamic power of a CMOS gate with α = 0.2, C = 500 pF, V = 1.2 V and f = 1 GHz [2].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **B** · 3 **B** · 4 **B** · 5 **B** · 6 **B** · 7 **B** · 8 **A** · 9 **A** · 10 **B** · 11 **B** · 12 **C** · 13 **B** · 14 **C** · 15 **A** · 16 **B** · 17 **B** · 18 **A** · 19 **B** · 20 **A**

Brief reasons: 10. g_m = I_C/V_T = 1 mA/25 mV = 40 mS. 16. Only leakage flows when the input is static.

### Section B

**B1.**
(a) Step 1: mass action: p = n_i²/N_D = (1.5 × 10^10)²/10^16 = 2.25 × 10^20/10^16 = **2.25 × 10^4 cm^-3**.
(b) Step 1: 0.65/0.02585 = 25.15 and e^25.15 = 8.32 × 10^10.
Step 2: I = 10^-14 × 8.32 × 10^10 = **0.83 mA**.
(c) Step 1: I = (9 - 0.7)/1.8 kΩ = 8.3/1800 = **4.61 mA**.
Step 2: P_R = I² R = (4.61 mA)² × 1.8 kΩ = **38 mW**.
(d) ΔV = -2 mV/°C × 40 °C = **-80 mV** (0.7 V falls to about 0.62 V).

**B2.**
(a) Step 1: at full load the series resistor carries I_L + I_Z,min = 20 + 5 = 25 mA.
Step 2: R_s ≤ (V_in - V_Z)/25 mA = (15 - 9.1)/25 mA = 5.9/0.025 = **236 Ω**.
(b) Step 1: with 220 Ω: I_Rs = 5.9/220 = 26.8 mA.
Step 2: full load: I_Z = 26.8 - 20 = **6.8 mA** (above 5 mA: regulating).
Step 3: no load: I_Z = **26.8 mA**.
(c) P_Z = V_Z I_Z = 9.1 V × 26.8 mA = **244 mW** (use a 0.5 W Zener).
(d) Step 1: at V_in = 11 V: I_Rs = (11 - 9.1)/220 = 8.6 mA.
Step 2: this cannot supply a 20 mA load plus the Zener: **regulation is lost** (the Zener turns off and the output falls).

**B3.**
(a) Step 1: I_C = β I_B = 150 × 20 μA = **3 mA**.
Step 2: V_CE = V_CC - I_C R_C = 10 - 3 mA × 2 kΩ = **4 V**.
(b) Step 1: g_m = I_C/V_T = 3 mA/25 mV = **120 mS**.
Step 2: r_π = β/g_m = 150/0.12 = **1.25 kΩ**.
(c) A_v = -g_m (R_C ∥ R_L) = -0.12 S × 1 kΩ = **-120** (R_C ∥ R_L = 1 kΩ from the question).
(d) Yes: V_CE = 4 V ≫ 0.2 V (not saturated) and V_BE = 0.7 V (the base-emitter junction is forward-biased, the collector is reverse-biased since V_C = 4 V > V_B = 0.7 V): **active**.

**B4.**
(a) Step 1: V_ov = V_GS - V_t = 2.7 - 0.7 = 2 V.
Step 2: V_DS = 4 V ≥ 2 V: saturation.
Step 3: I_D = 0.5 k_n V_ov² = 0.5 × 1 mA/V² × 4 V² = **2 mA**.
(b) g_m = k_n V_ov = 1 mA/V² × 2 V = **2 mS** (= 2 I_D/V_ov).
(c) V_DS = 10 - 2 mA × 2 kΩ = **6 V** ≥ V_ov = 2 V: **saturation confirmed**.
(d) P = α C V² f = 0.2 × 500 × 10^-12 × 1.44 × 10^9 = 0.2 × 500 × 10^-12 = 10^-10; × 1.44 × 10^9 = **0.144 W**.
