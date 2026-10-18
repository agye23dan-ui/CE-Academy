# Electronics II (Analog Design): Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Assume ideal op-amps unless stated.

## Section A: Multiple choice (20 marks)

**1.** For a feedback amplifier with a large loop gain Aβ, the closed-loop gain is approximately
A) A  B) 1/β  C) Aβ  D) A + β

**2.** Negative feedback does all of the following except
A) it reduces gain sensitivity  B) it extends bandwidth  C) it reduces distortion  D) it increases the open-loop gain

**3.** The gain-bandwidth product of a single-pole op-amp is
A) proportional to the gain  B) constant  C) zero  D) infinite

**4.** An inverting amplifier with R_f = 100 kΩ and R_in = 10 kΩ has a gain of
A) +10  B) -10  C) +11  D) -11

**5.** A non-inverting amplifier with R_f = 20 kΩ and R_g = 10 kΩ has a gain of
A) 2  B) 3  C) -2  D) -3

**6.** The "virtual short" in an ideal op-amp with negative feedback means
A) v+ = v-  B) the output is shorted  C) the input current is large  D) the supply is shorted

**7.** The slew rate of an op-amp limits
A) the input resistance  B) the maximum rate of change of the output voltage  C) the supply current  D) the offset voltage

**8.** Input offset voltage in an amplifier is multiplied at the output by
A) 1  B) the noise gain  C) the slew rate  D) zero

**9.** An op-amp integrator's output for a constant positive input is
A) a constant  B) a negative ramp  C) a sine wave  D) zero

**10.** A Schmitt trigger uses
A) negative feedback  B) positive feedback giving hysteresis  C) no feedback  D) a capacitor only

**11.** An instrumentation amplifier is chosen for
A) high input resistance and high CMRR  B) high-power output  C) high-frequency generation  D) low gain only

**12.** A second-order Butterworth low-pass filter has Q equal to
A) 0.5  B) 0.707  C) 1  D) 10

**13.** A fourth-order low-pass filter has a roll-off of
A) 20 dB/decade  B) 40 dB/decade  C) 60 dB/decade  D) 80 dB/decade

**14.** The Wien-bridge oscillator frequency is
A) 1/(2π RC)  B) 1/(2π sqrt(LC))  C) 1.44/(RC)  D) 2π RC

**15.** The Wien-bridge amplifier gain at oscillation must be
A) 1  B) 3  C) 29  D) 100

**16.** A 555 timer in monostable mode has a pulse width of
A) 0.693 RC  B) 1.1 RC  C) 1.44/(RC)  D) RC/2

**17.** The maximum theoretical efficiency of a class B output stage is
A) 25 percent  B) 50 percent  C) 78.5 percent  D) 100 percent

**18.** Crossover distortion occurs in
A) class A  B) class B  C) class D only  D) linear regulators

**19.** A buck converter with D = 0.5 and V_in = 12 V has an output of about
A) 24 V  B) 12 V  C) 6 V  D) 3 V

**20.** A phase margin of 45° in a feedback amplifier gives
A) a stable but ringing step response  B) instability  C) no overshoot at all  D) infinite gain

## Section B: Problems (40 marks)

**B1. (10 marks)** An amplifier has A = 2000 and the feedback network gives β = 0.05. (a) Find the closed-loop gain, the ideal gain 1/β, and the percentage error [3]. (b) Find (1 + Aβ) and the effect on the output resistance if R_out(open loop) = 1 kΩ (voltage sampling) [3]. (c) If A drops by 10 percent, estimate the change in A_f [2]. (d) If the amplifier's GBW is 2 MHz, find the bandwidth with feedback assuming a single pole [2].

**B2. (10 marks)** (a) A summing inverting amplifier has R_f = 47 kΩ, R_1 = 10 kΩ (v_1 = 0.5 V) and R_2 = 22 kΩ (v_2 = -1 V): find v_o [3]. (b) An instrumentation amplifier has 10 kΩ feedback resistors and R_g = 200 Ω in the standard three-op-amp circuit (gain 1 + 2R/R_g): find the gain [2]. (c) A 10 V peak, 10 kHz sine wave is required from an op-amp: find the minimum slew rate [3]. (d) An integrator with R = 10 kΩ and C = 1 nF: find the unity-gain frequency [2].

**B3. (10 marks)** (a) Find the frequency of a Wien-bridge oscillator with R = 16 kΩ and C = 10 nF [2]. (b) Design R_f and R_g for the required amplifier gain [2]. (c) For a 555 astable with R_1 = 1 kΩ, R_2 = 10 kΩ and C = 0.1 μF find the frequency and the duty cycle [4]. (d) An inverting Schmitt trigger with R_1 = 10 kΩ and R_2 = 22 kΩ in the positive feedback path and ±5 V output: find the thresholds [2].

**B4. (10 marks)** A class B stage with ±15 V supplies drives an 8 Ω load to a peak of 15 V. (a) Find P_out, P_supply and the efficiency [4]. (b) Find the total transistor dissipation [2]. (c) A 7809 regulator supplies 9 V at 0.2 A from 15 V: find the power loss and the efficiency [2]. (d) A buck converter delivers 5 V from 12 V: find the duty cycle [2].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **D** · 3 **B** · 4 **B** · 5 **B** · 6 **A** · 7 **B** · 8 **B** · 9 **B** · 10 **B** · 11 **A** · 12 **B** · 13 **D** · 14 **A** · 15 **B** · 16 **B** · 17 **C** · 18 **B** · 19 **C** · 20 **A**

Brief reasons: 2. Feedback reduces the gain; it does not increase A. 13. 20 dB/decade per order: 4 × 20. 19. V_out = D V_in = 6 V.

### Section B

**B1.**
(a) Step 1: A = 2000 and β = 0.05 (from the question), so Aβ = 100.
Step 2: A_f = A/(1 + Aβ) = 2000/(1 + 100) = **19.8**.
Step 3: the ideal gain 1/β = **20**; the error = (20 - 19.8)/20 = **0.99 percent** (1/(1 + Aβ)).
(b) Step 1: 1 + Aβ = 1 + 100 = **101**.
Step 2: voltage-sampling feedback reduces the output resistance by this factor: R_out,f = 1 kΩ/101 = **9.9 Ω**.
(c) The closed-loop gain changes by (dA/A)/(1 + Aβ) = 10 percent/101 = **0.1 percent**.
(d) BW_f = GBW/A_f = 2 MHz/19.8 = **101 kHz** (equivalently f_H (1 + Aβ)).

**B2.**
(a) Step 1: v_o = -R_f (v_1/R_1 + v_2/R_2) = -47 kΩ (0.5/10 kΩ + (-1)/22 kΩ).
Step 2: = -47 (0.05 - 0.04545) = -47 × 0.00455 = **-0.214 V**.
(b) Gain = 1 + 2R/R_g = 1 + 2 × 10 kΩ/200 Ω = 1 + 100 = **101**.
(c) SR ≥ 2π f V_p = 2π × 10^4 × 10 = 6.28 × 10^5 V/s = **0.628 V/μs** (use an op-amp with at least 1 V/μs).
(d) f_unity = 1/(2π R C) = 1/(2π × 10^4 × 10^-9) = **15.9 kHz**.

**B3.**
(a) f = 1/(2π RC) = 1/(2π × 16 kΩ × 10 nF) = 1/(1.005 × 10^-3) = **995 Hz**.
(b) The gain must be 3: 1 + R_f/R_g = 3, so **R_f = 2 R_g** (for example R_g = 10 kΩ, R_f = 20 kΩ plus an amplitude-control element).
(c) Step 1: f = 1.44/((R_1 + 2R_2) C) = 1.44/(21 kΩ × 0.1 μF) = 1.44/(2.1 × 10^-3) = **686 Hz**.
Step 2: duty cycle = (R_1 + R_2)/(R_1 + 2R_2) = 11/21 = **52.4 percent**.
(d) Step 1: thresholds = ±V_sat R_1/(R_1 + R_2) = ±5 × 10/(10 + 22) = ±5 × 0.3125 = **±1.56 V**.
Step 2: hysteresis = 2 × 1.56 = 3.1 V. (Using R_1 = 10 kΩ to ground and R_2 = 22 kΩ as the feedback resistor.)

**B4.**
(a) Step 1: P_out = V_p²/(2R_L) = 225/16 = **14.06 W**.
Step 2: P_supply = 2 V_cc V_p/(π R_L) = 2 × 15 × 15/(π × 8) = 450/25.13 = **17.9 W**.
Step 3: efficiency = 14.06/17.9 = **78.5 percent**.
(b) P_D = P_supply - P_out = 17.9 - 14.06 = **3.84 W** (about 1.9 W per transistor).
(c) Step 1: P_loss = (V_in - V_out) I = (15 - 9) × 0.2 = **1.2 W**.
Step 2: efficiency = V_out/V_in = 9/15 = **60 percent**.
(d) D = V_out/V_in = 5/12 = **0.417**.
