# Electronics I (Semiconductor Devices): Assignments with Worked Solutions

Use V_T = 25.85 mV, n_i = 1.5 × 10^10 cm^-3 and q = 1.602 × 10^-19 C unless stated. Show the model you are using (ideal, 0.7 V drop, exponential, small-signal), the region of operation of each device and the check that confirms it. All numbers below were computed and checked by solving the equations numerically.

# Assignment 1: Semiconductors, Diodes and Rectifiers (70 marks)

## Questions

**Q1. Semiconductor physics (10 marks)** (a) In n-type silicon with N_D = 5 × 10^15 cm^-3 find the hole concentration at 300 K and the resistivity (μ_n = 1350 cm²/(V s)) [4]. (b) Find the built-in potential of a pn junction with N_A = 10^17 and N_D = 10^16 cm^-3 [3]. (c) Find the diffusion coefficients of electrons and holes (μ_p = 480 cm²/(V s)) [3].

**Q2. The diode equation (10 marks)** A diode has I_S = 10^-14 A and n = 1. (a) Find the current at 0.60 V, 0.65 V and 0.70 V [3]. (b) Find the voltage for I = 1 mA [2]. (c) By what voltage must V_D increase to raise the current by a factor of 10, and of 2? [2] (d) Find the small-signal resistance at 1 mA [1]. (e) The forward voltage at a fixed current falls about 2 mV per °C: find its change from 25 °C to 75 °C [2].

**Q3. Diode circuits (14 marks)** (a) A 5 V source drives a 1 kΩ resistor in series with a silicon diode. Find the diode voltage and current using the exponential model and compare with the 0.7 V model [4]. (b) Two silicon diodes in series with 10 V and 2.2 kΩ: find the current [2]. (c) A diode OR gate has inputs of 5 V and 3 V, each through a diode to a common output with a 10 kΩ load to ground: find the output and the state of each diode [4]. (d) A 10 V peak sine wave drives an output node through a series resistor; from the output node a diode (anode at the node) in series with a 3 V battery (positive terminal at the diode's cathode) returns to ground. Describe the output waveform and give its peak [4].

**Q4. Rectifiers (14 marks)** A transformer delivers 12 V rms at 50 Hz. (a) Find the peak output of a full-wave bridge rectifier (0.7 V per diode) and the unfiltered average [3]. (b) With a 500 Ω load find the capacitor needed for a ripple of 1 percent of the peak [3]. (c) For a half-wave rectifier with a 2200 μF capacitor and a 200 Ω load find the peak, ripple and average output, and the PIV required [5]. (d) Compare the half-wave and full-wave circuits [3].

**Q5. Zener regulator (10 marks)** A 12 V supply feeds a 5.1 V Zener (in reverse breakdown) through R_s = 220 Ω; the load is 470 Ω. (a) Find the currents in R_s, the load and the Zener, and the Zener power [4]. (b) What happens if the load is 100 Ω? [3] (c) State the design rule for choosing R_s [3].

**Q6. LEDs and applications (12 marks)** (a) Choose the series resistor for a red LED (V_F = 2.0 V, 15 mA) from 5 V and find its power [3]. (b) Three LEDs (2.0 V each) in series at 20 mA from 12 V: find the resistor [3]. (c) A 3.3 V microcontroller drives a 1.8 V LED at 10 mA: find the resistor [2]. (d) Explain how a diode clamper and a diode clipper differ and give one application of each [4].

## Solutions and Marking Guide

**Q1.**
(a) Step 1: mass action: p = n_i²/N_D = (1.5 × 10^10)²/(5 × 10^15) = 2.25 × 10^20/(5 × 10^15) = **4.5 × 10^4 cm^-3** (about 10^-11 of the electron concentration).
Step 2: since n ≈ N_D = 5 × 10^15 cm^-3, the resistivity is ρ = 1/(q μ_n n) = 1/(1.602 × 10^-19 × 1350 × 5 × 10^15) = 1/1.081 = **0.925 Ω cm**.
(b) Step 1: N_A N_D = 10^17 × 10^16 = 10^33 cm^-6 (values from the question) and n_i² = 2.25 × 10^20.
Step 2: V_0 = V_T ln(N_A N_D/n_i²) = 0.02585 × ln(10^33/(2.25 × 10^20)) = 0.02585 × ln(4.44 × 10^12) = 0.02585 × 29.12 = **0.753 V**.
(c) Einstein relation D = μ V_T: D_n = 1350 × 0.02585 = **34.9 cm²/s**; D_p = 480 × 0.02585 = **12.4 cm²/s**.

**Q2.**
(a) I = I_S e^(V/V_T) with I_S = 10^-14 A and V_T = 0.02585 V:
0.60 V: V/V_T = 23.21, e^23.21 = 1.20 × 10^10, so I = 10^-14 × 1.20 × 10^10 = **0.120 mA**.
0.65 V: V/V_T = 25.15, e^25.15 = 8.32 × 10^10, so I = **0.832 mA**.
0.70 V: V/V_T = 27.08, e^27.08 = 5.76 × 10^11, so I = **5.76 mA**.
(b) V = V_T ln(I/I_S) = 0.02585 × ln(10^-3/10^-14) = 0.02585 × ln(10^11) = 0.02585 × 25.33 = **0.655 V**.
(c) Step 1: per decade of current ΔV = V_T ln 10 = 0.02585 × 2.303 = **59.5 mV**.
Step 2: for a factor of 2: V_T ln 2 = 0.02585 × 0.693 = **17.9 mV**.
(d) r_d = V_T/I = 25.85 mV/1 mA = **25.9 Ω**.
(e) ΔV = -2 mV/°C × 50 °C = **-100 mV**: a 0.70 V drop becomes about 0.60 V at 75 °C. (This property is used in temperature sensors; it also warns against parallel diodes or BJTs sharing current without matching or emitter resistors: thermal runaway.)

**Q3.**
(a) Step 1: KVL: 5 - V_D = I R with I = I_S (e^(V_D/V_T) - 1) = 10^-14 (e^(V_D/0.02585) - 1) and R = 1 kΩ.
Step 2: solve numerically (iterate): start with V_D = 0.7: I = 4.3 mA; the diode equation gives V_D = V_T ln(I/I_S) = 0.02585 × ln(4.3 × 10^-3/10^-14) = 0.6925 V; repeating gives **V_D = 0.6925 V, I = (5 - 0.6925)/1000 = 4.31 mA**.
Step 3: the 0.7 V model gives I = (5 - 0.7)/1000 = 4.30 mA: the simple model is accurate to 0.2 percent for this circuit, because the exponential makes V_D insensitive to the current.
(b) I = (10 - 2 × 0.7)/2.2 kΩ = 8.6/2200 = **3.91 mA**.
(c) The diode from the 5 V input conducts (assume the diode on): V_out = 5 - 0.7 = **4.3 V**, I = 0.43 mA. The 3 V diode is **reverse-biased** (anode 3 V, cathode 4.3 V): off. Check: the 5 V diode current is positive and the other has a reverse voltage of 1.3 V: consistent. The gate outputs the larger input minus 0.7 V (a logic OR with a 0.7 V loss).
(d) The diode conducts only when the output node exceeds 3 + 0.7 = 3.7 V. Below that it is off and the output follows the input (no current in the series resistor). When the input rises above 3.7 V the diode conducts and holds the output at **3.7 V** (the excess voltage drops across the series resistor). The negative half-cycle passes unchanged down to -10 V. This is a **positive clipper (limiter)**: output peak **+3.7 V**, negative peak -10 V.

**Q4.**
(a) Step 1: V_p = 12 sqrt 2 = 16.97 V.
Step 2: bridge (two diode drops): **peak = 16.97 - 1.4 = 15.57 V**.
Step 3: unfiltered average = 2 V_peak/π = 2 × 15.57/π = **9.91 V**.
(b) Step 1: full-wave ripple V_r = V_p/(2 f R C); for V_r = 0.01 × 15.57 = 0.1557 V.
Step 2: C = V_p/(2 f R V_r) = 15.57/(2 × 50 × 500 × 0.1557) = 15.57/7785 = **2.0 × 10^-3 F = 2000 μF** (values f = 50 Hz and R = 500 Ω from the question).
(c) Step 1: half-wave: peak = 16.97 - 0.7 = **16.27 V**.
Step 2: ripple V_r = V_p/(f R C) = 16.27/(50 × 200 × 2200 × 10^-6) = 16.27/22 = **0.74 V**.
Step 3: average ≈ 16.27 - 0.74/2 = **15.9 V**.
Step 4: **PIV**: with a capacitor the reverse voltage across the diode at the negative peak is V_s,peak + V_C ≈ 16.97 + 16.27 = **33.2 V** (about 2 V_p), so use a diode rated for at least 50 V.
(d) The full-wave bridge delivers twice the ripple frequency (100 Hz), so for the same ripple it needs **half the capacitance**; its output is larger on average; it uses the transformer in both half-cycles (better utilisation) but loses 1.4 V in two diodes; half-wave is cheaper (one diode) but has twice the ripple and may saturate the transformer with dc.

**Q5.**
(a) Step 1: I_Rs = (12 - 5.1)/220 = **31.4 mA**.
Step 2: I_L = 5.1/470 = **10.9 mA**.
Step 3: I_Z = I_Rs - I_L = 31.4 - 10.9 = **20.5 mA**.
Step 4: P_Z = 5.1 × 20.5 mA = **105 mW** (a 0.5 W Zener is adequate).
(b) Step 1: for a 100 Ω load the load would need 5.1/100 = 51 mA, but the series resistor can supply at most 31.4 mA (with the Zener off).
Step 2: the output falls to 12 × 100/(220 + 100) = **3.75 V**, below the Zener voltage: the Zener stops conducting and **regulation is lost**.
(c) Choose R_s so that I_Z stays above the minimum knee current (a few mA) at the **maximum load current and minimum input voltage**, and so that the Zener power rating is not exceeded at **no load and maximum input voltage**: R_s ≤ (V_in,min - V_Z)/(I_L,max + I_Z,min) and R_s ≥ (V_in,max - V_Z)/(I_Z,max). For higher efficiency and heavier loads use a linear regulator IC or a switching regulator.

**Q6.**
(a) Step 1: R = (5 - 2)/15 mA = **200 Ω**.
Step 2: P = I² R = (0.015)² × 200 = **45 mW** (a 1/4 W resistor is ample).
(b) Step 1: R = (12 - 3 × 2)/20 mA = 6/0.02 = **300 Ω** (three LEDs of 2 V in series).
Step 2: P = 0.02² × 300 = 0.12 W.
(c) R = (3.3 - 1.8)/10 mA = **150 Ω**.
(d) A **clipper** removes the part of a waveform above (or below) a reference level (the signal is limited): used for input protection (diodes to the supply rails) and waveform shaping. A **clamper** adds a dc level to an ac signal with a capacitor and a diode (the waveform keeps its shape but its peaks are shifted to a reference level): used for dc restoration in video and level shifting.

---

# Assignment 2: Bipolar Junction Transistors (70 marks)

## Questions

**Q1. BJT fundamentals (8 marks)** A silicon npn BJT has β = 100 and operates in the active region. (a) For I_B = 40 μA find I_C, I_E and α [3]. (b) By how much must V_BE increase to double I_C? [2] (c) State the bias conditions of the four modes of operation (active, saturation, cutoff, reverse-active) [3].

**Q2. Fixed bias (8 marks)** V_CC = 12 V, R_B = 282 kΩ, R_C = 2 kΩ, V_BE = 0.7 V. (a) Find I_B, I_C and V_CE for β = 100 [3]. (b) Repeat for β = 50 and β = 200 and comment on the sensitivity [5].

**Q3. Voltage-divider bias (14 marks)** V_CC = 12 V, R_1 = 47 kΩ, R_2 = 10 kΩ, R_C = 4.7 kΩ, R_E = 1 kΩ, β = 100. (a) Find the Thevenin equivalent of the base network [3]. (b) Find I_B, I_C and V_CE [5]. (c) Repeat for β = 50 and 200 and compare with Q2 [4]. (d) State the design rule that makes the circuit insensitive to β [2].

**Q4. Load line and Q-point (8 marks)** For the circuit of Q2 with R_C = 2 kΩ and V_CC = 12 V: (a) draw (give the endpoints of) the DC load line [2]. (b) Locate the Q-point for I_C = 4 mA and find the maximum symmetric collector-voltage swing before clipping (assume V_CE(sat) = 0.2 V) [4]. (c) Find the value of β at which the transistor saturates in the fixed bias circuit [2].

**Q5. BJT as a switch (8 marks)** A 5 V logic signal switches a 20 mA load from a 12 V supply using an npn transistor with a forced β of 10. (a) Find the base current and the base resistor [4]. (b) Find the power dissipated in the transistor when on (V_CE(sat) = 0.2 V) and when off [2]. (c) Why is a protection diode used across an inductive load? [2]

**Q6. Small-signal amplifier (16 marks)** For the voltage-divider circuit of Q3 (β = 100, I_C = 1.29 mA, V_A = 100 V), with the emitter bypassed: (a) find g_m, r_π and r_o [3]. (b) Draw the small-signal model and find A_v for R_L = 10 kΩ (including r_o) [4]. (c) Find R_in and R_out [3]. (d) Repeat A_v approximately when the emitter resistor is not bypassed (R_E = 1 kΩ) [3]. (e) Find the voltage gain and input resistance of an emitter follower with R_E = 1 kΩ and R_L = 1 kΩ [3].

**Q7. Gain in decibels and cascading (8 marks)** (a) Express a gain of -159 in dB [2]. (b) A two-stage amplifier has stage gains of -159 and +0.96. Find the overall gain in V/V and dB [3]. (c) A stage with R_out = 4.4 kΩ drives a 10 kΩ load: find the gain loss from loading [3].

## Solutions and Marking Guide

**Q1.**
(a) Step 1: I_C = β I_B = 100 × 40 μA = **4.0 mA**.
Step 2: I_E = (β + 1) I_B = 101 × 40 μA = **4.04 mA**.
Step 3: α = β/(β + 1) = 100/101 = **0.990**.
(b) I_C ∝ e^(V_BE/V_T), so doubling requires ΔV_BE = V_T ln 2 = **17.9 mV**.
(c) **Active:** BE forward, BC reverse (amplifier). **Saturation:** both forward (switch on, V_CE ≈ 0.2 V). **Cutoff:** both reverse (switch off). **Reverse-active:** BE reverse, BC forward (poor gain, rarely used).

**Q2.**
(a) Step 1: I_B = (V_CC - V_BE)/R_B = (12 - 0.7)/282 kΩ = **40.1 μA**.
Step 2: I_C = β I_B = 100 × 40.1 μA = **4.0 mA**.
Step 3: V_CE = V_CC - I_C R_C = 12 - 4.0 mA × 2 kΩ = **4.0 V** (active).
(b) Step 1: β = 50: I_C = 50 × 40.1 μA = 2.0 mA, V_CE = 12 - 2.0 × 2 = **8.0 V**.
Step 2: β = 200: I_C would be 200 × 40.1 μA = 8.0 mA and V_CE = 12 - 16 = -4 V: impossible, so the transistor **saturates** (V_CE ≈ 0.2 V, I_C ≈ (12 - 0.2)/2 kΩ = 5.9 mA).
The collector current and Q-point change by a factor of four over the β range: **fixed bias is unusable for linear amplifiers** (it is acceptable for switches with a large forced overdrive).

**Q3.**
(a) Step 1: V_th = V_CC R_2/(R_1 + R_2) = 12 × 10/(47 + 10) = **2.105 V**.
Step 2: R_th = R_1 ∥ R_2 = 47 × 10/57 = **8.25 kΩ**.
(b) Step 1: KVL on the base loop: V_th = I_B R_th + V_BE + (β + 1) I_B R_E.
Step 2: I_B = (2.105 - 0.7)/(8.25 kΩ + 101 × 1 kΩ) = 1.405/109.25 kΩ = **12.9 μA**.
Step 3: **I_C = β I_B = 1.29 mA**; I_E = 1.30 mA.
Step 4: V_CE = V_CC - I_C R_C - I_E R_E = 12 - 6.05 - 1.30 = **4.66 V** (active, near the centre of the supply).
(c) β = 50: I_B = 1.405/(8.25 + 51) kΩ = 23.7 μA, **I_C = 1.19 mA**, V_CE = 5.22 V. β = 200: I_B = 1.405/(8.25 + 201) kΩ = 6.7 μA, **I_C = 1.34 mA**, V_CE = 4.34 V. A fourfold change in β changes I_C by only 13 percent (±6 percent), compared with a fourfold change of I_C in the fixed-bias circuit.
(d) Make **R_th ≪ (β + 1) R_E** (about R_th ≤ 0.1(β + 1) R_E, here 8.25 kΩ against 101 kΩ), so that I_C ≈ (V_th - V_BE)/R_E = 1.4 mA, independent of β; the emitter resistor provides negative (DC) feedback.

**Q4.**
(a) The load line joins (V_CE = 12 V, I_C = 0) and (V_CE = 0, I_C = V_CC/R_C = 12/2 kΩ = 6 mA).
(b) Step 1: At I_C = 4 mA: V_CE = 12 - 8 = 4 V.
Step 2: The collector voltage can swing down to V_CE(sat) = 0.2 V (a decrease of 3.8 V) and up to V_CC = 12 V (an increase of 8 V towards cutoff): the symmetric swing is limited by the smaller side: **±3.8 V** (signal peak of 3.8 V).
Step 3: Centring the Q-point at V_CE = 6.1 V (I_C = 2.95 mA) would give ±5.9 V.
(c) Step 1: saturation begins when I_C = (12 - 0.2)/2 kΩ = 5.9 mA.
Step 2: with I_B = 40.1 μA the required β = I_C/I_B = 5.9 mA/40.1 μA = **147** (above this the transistor saturates).

**Q5.**
(a) Step 1: forced β = 10: I_B = I_C/10 = 20 mA/10 = **2 mA**.
Step 2: R_B = (5 - 0.7)/2 mA = **2.15 kΩ** (use 2.2 kΩ).
(b) On: P = V_CE(sat) I_C + V_BE I_B = 0.2 × 20 mA + 0.7 × 2 mA = 4 + 1.4 = **5.4 mW**. Off: I_C ≈ 0, so P ≈ **0**. (A switch dissipates little in either state: the heating occurs during the transitions.)
(c) When the transistor turns off, the inductor current cannot change instantly: L di/dt creates a large voltage spike (hundreds of volts) that would destroy the transistor. A **flyback (freewheeling) diode** across the coil provides a path for the current and clamps the voltage to about 0.7 V above the supply.

**Q6.**
(a) Step 1: g_m = I_C/V_T = 1.29 mA/25.85 mV = **49.8 mS**.
Step 2: r_π = β/g_m = 100/49.8 mS = **2.01 kΩ**.
Step 3: r_o = V_A/I_C = 100/1.29 mA = **77.7 kΩ**.
(b) The small-signal model: a source v_be controlling a current g_m v_be from collector to emitter, with r_π between base and emitter, r_o between collector and emitter. With the coupling capacitors as shorts, the output sees R_C ∥ R_L ∥ r_o = 4.7 k ∥ 10 k ∥ 77.7 k = 3.07 kΩ: **A_v = -g_m (R_C ∥ R_L ∥ r_o) = -49.8 mS × 3.07 kΩ = -153** (without r_o: -159).
(c) **R_in** = R_1 ∥ R_2 ∥ r_π = 8.25 k ∥ 2.01 k = **1.62 kΩ**; **R_out** = R_C ∥ r_o = **4.43 kΩ**.
(d) Unbypassed R_E: **A_v ≈ -R_C ∥ R_L/R_E = -3.2** (more precisely -g_m R_C'/(1 + g_m R_E) = -153/(1 + 49.8) ≈ -3.0): much smaller, but stable and almost independent of β and temperature; R_in rises to R_th ∥ [r_π + (β + 1) R_E] = 8.25 k ∥ 103 k = 7.6 kΩ.
(e) Step 1: r_e = 1/g_m = 20.1 Ω; R_L' = R_E ∥ R_L = 500 Ω.
Step 2: **A_v = R_L'/(R_L' + r_e) = 500/520 = 0.961**.
Step 3: input resistance at the base: **R_in(base) = (β + 1)(r_e + R_L') = 101 × 520 = 52.5 kΩ**; the output resistance is small (about r_e + R_s/(β + 1)). It is a buffer: nearly unity gain, high input and low output resistance.

**Q7.**
(a) 20 log10(159) = 20 × 2.2014 = **44.0 dB** (and the phase is inverted: -159 or 44 dB with a 180° shift).
(b) Step 1: overall gain = (-159)(0.96) = **-153 V/V**.
Step 2: in dB: 44.0 + 20 log10(0.96) = 44.0 - 0.35 = **43.7 dB**.
(c) Step 1: the load divides the open-circuit output: R_L/(R_out + R_L) = 10/(4.4 + 10) = **0.69**.
Step 2: loss = 20 log10(0.69) = -3.2 dB. This is why a buffer (emitter follower or source follower) is placed between a high-output-resistance stage and a low-resistance load.

---

# Assignment 3: MOSFETs, CMOS, Amplifiers and Frequency Response (80 marks)

## Questions

**Q1. MOSFET regions (12 marks)** An NMOS transistor has V_t = 1 V and k_n = 2 mA/V² (I_D = (1/2) k_n V_ov² in saturation). (a) Find the region and drain current for V_GS = 0.5 V; for V_GS = 3 V and V_DS = 0.5 V; for V_GS = 3 V and V_DS = 5 V [6]. (b) Find the on-resistance for small V_DS at V_GS = 5 V [2]. (c) Explain the pinch-off condition and why the current saturates [2]. (d) How does a PMOS device differ? [2]

**Q2. DC bias (12 marks)** (a) V_DD = 10 V, V_GS = 3 V, R_D = 1 kΩ: find I_D, V_DS and verify saturation [4]. (b) A voltage-divider circuit has R_1 = 2 MΩ, R_2 = 1 MΩ, R_S = 1 kΩ, R_D = 3 kΩ, V_DD = 10 V: find V_G, I_D, V_S and V_DS [6]. (c) Why does the source resistor stabilise the bias? [2]

**Q3. Common-source amplifier (14 marks)** The transistor of Q2(a) has λ = 0.02 V^-1. (a) Find g_m and r_o at I_D = 4 mA [3]. (b) Find the gain for R_D = 1 kΩ with R_L = ∞ and with R_L = 1 kΩ (including r_o) [5]. (c) State R_in and R_out [2]. (d) Find the gain of the source follower with R_S = 1 kΩ and R_L = ∞ [2]. (e) Compare CS and CE amplifiers [2].

**Q4. CMOS inverter (12 marks)** V_DD = 3.3 V, V_tn = 0.6 V, V_tp = -0.6 V. (a) Explain the operation for V_in = 0 and V_in = V_DD and why static power is near zero [3]. (b) Find the switching threshold V_M for k_n = k_p, and for k_p = k_n/4 [4]. (c) A gate with 20 fF load switches at 1 GHz with activity 0.1: find the dynamic power [2]. (d) Estimate the propagation delay for R_on = 10 kΩ [1]. (e) Draw the transistor-level structure of a 2-input NAND [2].

**Q5. Frequency response (10 marks)** (a) A CE amplifier has an input coupling capacitor of 1 μF seeing 11 kΩ: find the low-frequency cut-off [2]. (b) A stage with gain -10, C_gd = 2 pF and C_gs = 10 pF is driven from 10 kΩ: find the Miller input capacitance and the upper cut-off [4]. (c) An op-amp has a gain-bandwidth product of 1 MHz: find the bandwidth for a closed-loop gain of 100 [2]. (d) Define the unity-gain frequency [2].

**Q6. Differential pair and op-amps (10 marks)** (a) A MOS differential pair has g_m = 4 mS and R_D = 5 kΩ: find the differential gain [2]. (b) If the common-mode gain is 0.01, find the CMRR in dB [3]. (c) Name four non-ideal properties of a real op-amp and the effect of each [4]. (d) What does the tail current source do? [1]

**Q7. Power and thermal design (6 marks)** A transistor dissipates 2 W with θ_JA = 50 °C/W in a 25 °C ambient. (a) Find the junction temperature [2]. (b) What heat-sink thermal resistance is needed to keep T_J ≤ 100 °C at 5 W with θ_JC = 5 °C/W and θ_CS = 1 °C/W, ambient 40 °C? [4]

**Q8. Design choice (4 marks)** For (i) a high-gain low-noise audio preamplifier, (ii) a microprocessor and (iii) a relay driver, choose BJT or MOSFET and justify.

## Solutions and Marking Guide

**Q1.**
(a) Case 1: V_GS = 0.5 V < V_t: **cutoff**, I_D = 0.
Case 2: V_GS = 3 V: V_ov = 3 - 1 = 2 V; V_DS = 0.5 V < 2 V: **triode**: I_D = k_n [V_ov V_DS - V_DS²/2] = 2 mA × (2 × 0.5 - 0.125) = 2 mA × 0.875 = **1.75 mA**.
Case 3: V_GS = 3 V and V_DS = 5 V ≥ 2 V: **saturation**: I_D = 0.5 × 2 mA × 2² = **4.0 mA**.
(b) At V_GS = 5 V: V_ov = 4 V; r_on = 1/(k_n V_ov) = 1/(2 mA/V² × 4 V) = **125 Ω**.
(c) When V_DS reaches V_ov the channel depth at the drain end falls to zero (**pinch-off**); further increase of V_DS drops across the pinched-off region and does not increase the current significantly (the current is set by the charge in the rest of the channel, controlled by V_GS). The small remaining slope is channel-length modulation (λ).
(d) A PMOS device has holes as carriers, V_t negative, and V_GS, V_DS, I_D reversed (current flows from source to drain; the source is connected to the supply). For the same size its current is about 2 to 3 times lower, so PMOS transistors are made wider in CMOS.

**Q2.**
(a) Step 1: I_D = 0.5 k_n (V_GS - V_t)² = 0.5 × 2 mA × (3 - 1)² = **4 mA**.
Step 2: V_DS = V_DD - I_D R_D = 10 - 4 mA × 1 kΩ = **6 V**.
Step 3: V_ov = 2 V ≤ V_DS = 6 V: **saturation confirmed**.
(b) Step 1: V_G = 10 × 1/(2 + 1) = **3.33 V**.
Step 2: I_D = (1/2)(2 mA)(V_G - I_D R_S - V_t)² = 1 mA × (2.333 - I_D × 1 kΩ)²; with I_D in mA: I = (2.333 - I)², so I² - 5.667 I + 5.444 = 0.
Step 3: I = (5.667 ± sqrt(32.11 - 21.78))/2 = (5.667 ± 3.214)/2, giving **I_D = 1.23 mA** (the other root, 4.44 mA, would give V_GS below V_t).
Step 4: V_S = 1.23 V, V_GS = 3.33 - 1.23 = 2.11 V, V_ov = 1.11 V. V_D = 10 - 1.23 × 3 = 6.31 V, **V_DS = 6.31 - 1.23 = 5.08 V ≥ V_ov**: saturation confirmed.
(c) If k_n or V_t increases, the current tends to rise; the larger drop I_D R_S reduces V_GS and counteracts the rise (negative DC feedback), so the bias current varies much less than in the circuit without R_S.

**Q3.**
(a) Step 1: g_m = k_n V_ov = 2 mA/V² × 2 V = **4 mS** (= 2 I_D/V_ov = 8 mA/2 V ✓).
Step 2: r_o = 1/(λ I_D) = 1/(0.02 × 4 mA) = **12.5 kΩ**.
(b) Step 1: R_L = ∞: R_D ∥ r_o = 1 k ∥ 12.5 k = 0.926 kΩ; A_v = -g_m (R_D ∥ r_o) = -4 mS × 0.926 kΩ = **-3.70**.
Step 2: R_L = 1 kΩ: R_D ∥ R_L ∥ r_o = 1 ∥ 1 ∥ 12.5 = 0.481 kΩ: **A_v = -4 mS × 0.481 kΩ = -1.92**.
(c) **R_in = R_G** (the gate draws no current: megohms, set by the bias resistors, here 2 M ∥ 1 M = 667 kΩ); **R_out = R_D ∥ r_o = 926 Ω**.
(d) A_v = g_m R_S/(1 + g_m R_S) = 4/(1 + 4) = **0.80**; R_out ≈ 1/g_m = 250 Ω.
(e) Both stages invert the signal. For the same bias current a BJT has a much higher g_m (g_m = I_C/V_T = 38.7 mS per mA) than a MOSFET (g_m = 2 I_D/V_ov = 10 mS per mA at V_ov = 0.2 V, 1 mS per mA at V_ov = 2 V), so the CE stage gives more gain. The CS stage has an essentially infinite input resistance at low frequencies (it loads the source far less), while the CE input resistance is r_π (a few kΩ).

**Q4.**
(a) **V_in = 0:** the NMOS is off (V_GS = 0 < V_t) and the PMOS is on (V_SG = V_DD > |V_t|): the output is pulled up to V_DD. **V_in = V_DD:** the NMOS is on and the PMOS off: the output is pulled to 0. In each steady state one transistor is off, so there is **no path from V_DD to ground**: the static current is only leakage, and power is consumed essentially only when the output switches (charging and discharging C_L).
(b) V_M = (V_tn + r (V_DD - |V_tp|))/(1 + r) with r = sqrt(k_p/k_n).
Step 1: equal k: r = 1: V_M = (0.6 + 2.7)/2 = **1.65 V** (V_DD/2).
Step 2: k_p = k_n/4: r = 0.5: V_M = (0.6 + 0.5 × 2.7)/1.5 = 1.95/1.5 = **1.30 V** (the weaker PMOS lowers the threshold).
(c) P = α C V_DD² f = 0.1 × 20 × 10^-15 × 3.3² × 10^9 = 0.1 × 20 × 10^-15 × 10.89 × 10^9 = **21.8 μW**.
(d) t_p ≈ 0.69 R_on C_L = 0.69 × 10 kΩ × 20 fF = **0.14 ns**.
(e) NAND2: two NMOS in **series** between the output and ground; two PMOS in **parallel** between V_DD and the output; each input drives one NMOS and one PMOS. The output is low only when both inputs are high.

**Q5.**
(a) f_L = 1/(2π R C) = 1/(2π × 11 kΩ × 1 μF) = 1/(0.0691) = **14.5 Hz**.
(b) Step 1: Miller: C_in = C_gs + C_gd (1 - A_v) = 10 + 2 × (1 + 10) = **32 pF**.
Step 2: f_H = 1/(2π R_s C_in) = 1/(2π × 10 kΩ × 32 pF) = **497 kHz**.
(c) GBW = A × BW: BW = 1 MHz/100 = **10 kHz**.
(d) The **unity-gain frequency** f_T is where the open-loop gain magnitude falls to 1 (0 dB); for a single-pole op-amp it equals the gain-bandwidth product; it measures the speed of the device.

**Q6.**
(a) A_d = g_m R_D = 4 mS × 5 kΩ = **20** (26 dB).
(b) CMRR = |A_d/A_cm| = 20/0.01 = 2000; in dB: 20 log10(2000) = **66 dB**.
(c) Examples: **finite gain and bandwidth** (the gain falls with frequency: GBW limits the closed-loop bandwidth); **input offset voltage and bias currents** (a dc error at the output, proportional to the gain); **limited slew rate** (the output cannot change faster than a V/μs limit, distorting large fast signals); **limited output swing and drive current** (clipping near the rails, low-impedance loads); finite input resistance and noise. (Any four with effects.)
(d) The tail current source fixes the sum of the two branch currents (a high-impedance source rejects common-mode signals and sets the bias of the pair).

**Q7.**
(a) T_J = T_A + P θ_JA = 25 + 2 × 50 = **125 °C** (near the 150 °C maximum; a heat sink or lower power is advisable).
(b) Step 1: T_J - T_A = P (θ_JC + θ_CS + θ_SA): 100 - 40 = 60 °C = 5 W × (5 + 1 + θ_SA).
Step 2: θ_JC + θ_CS + θ_SA = 60/5 = 12 °C/W, so θ_SA = 12 - 6 = 6 °C/W: **θ_SA ≤ 6 °C/W**.

**Q8.**
(i) A **BJT** (or a JFET) front end: higher g_m per current and lower noise for low-frequency, low-impedance sources; (ii) **MOSFETs (CMOS)**: negligible static power, high density, easy integration of billions of switches; (iii) a **BJT or a power MOSFET**: a BJT with a base resistor and a flyback diode is cheap and simple for small relays, a logic-level MOSFET gives a lower on-resistance and no base current for larger loads. (1 mark each for choice and reason; 1 mark for the relay diode.)
