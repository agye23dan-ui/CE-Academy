# Electronics II (Analog Design): Complete Lecture Notes

Electronics II builds on the devices and single-stage amplifiers of Electronics I to design real analog systems: feedback amplifiers, operational-amplifier circuits, active filters, oscillators, power amplifiers and regulators. The unifying theme is **negative feedback**: we build precise, stable circuits from imprecise, high-gain parts. Notation: A is the open-loop (basic) gain, β the feedback factor, Aβ the loop gain, f_T (or GBW) the gain-bandwidth product, V_T the thermal voltage.

## Chapter 1. Negative Feedback

### 1.1 The basic feedback loop
A feedback amplifier has a forward gain A, a feedback network β, and a summing node: **A_f = A/(1 + Aβ)**. If the loop gain **Aβ ≫ 1** then **A_f ≈ 1/β**: the gain is set by passive components, not by the transistors. Example: A = 10^5 and β = 0.01 gives A_f = 99.9 (ideal 100); 1 + Aβ = 1001 is the **amount of feedback**.
- **Gain desensitivity:** dA_f/A_f = (dA/A)/(1 + Aβ): a 10 percent change of A (from 10^5 to 0.9 × 10^5) changes A_f by only 0.01 percent.
- **Bandwidth extension:** for a single-pole amplifier the closed-loop bandwidth is f_H(1 + Aβ), so **A_f × BW = constant = GBW**: a gain of 100 with a GBW of 1 MHz has a 10 kHz bandwidth.
- **Distortion and noise** are reduced by (1 + Aβ); **input and output resistances** are modified depending on how the feedback is connected.
- **Cost:** reduced gain and a risk of **instability** if the phase shift around the loop reaches 180° at a frequency where |Aβ| ≥ 1.

### 1.2 The four feedback topologies
The topology is named by how the output is sampled and how the feedback is mixed at the input:
- **Series-shunt** (voltage amplifier: sample voltage, mix voltage in series): increases R_in by (1 + Aβ), decreases R_out by (1 + Aβ): the non-inverting op-amp amplifier.
- **Shunt-shunt** (transresistance amplifier): decreases both R_in and R_out: the inverting op-amp amplifier (virtual ground at the input).
- **Series-series** (transconductance amplifier): increases R_in and R_out: a source-degenerated amplifier.
- **Shunt-series** (current amplifier): decreases R_in, increases R_out.
Analysis method: identify the topology, break the loop to find A and β with the loading of the feedback network included, then apply the formulas.

### 1.3 Stability and compensation
The loop is stable if, at the **gain crossover** frequency (|Aβ| = 1), the phase margin PM = 180° + ∠Aβ is positive; **PM ≥ 45° to 60°** is the usual target (a lower PM gives ringing and overshoot). A two-pole amplifier with A_0 = 10^5, a dominant pole at 10 Hz (GBW = 1 MHz) and β = 1: the crossover is at about 1 MHz, where the first pole contributes -90° and a second pole at 1 MHz another -45°: **PM = 45°**; a second pole at 2 MHz gives PM = 63°. The gain margin is the amount by which |Aβ| < 1 at the frequency where the phase is -180°.
- **Compensation:** make one pole **dominant** (low frequency) by adding a capacitor (pole splitting, **Miller compensation**: a capacitor C_c across the second gain stage gives an effective capacitance of C_c × (1 + A_2) and a dominant pole near the first stage). Op-amps such as the 741 are internally compensated so that they are stable for unity-gain feedback, at the cost of a low GBW (1 MHz). Stability with a capacitive load needs an isolation resistor.
- **Gain-bandwidth trade-off** and **slew rate** limit large-signal speed.

## Chapter 2. Operational Amplifier Circuits

### 2.1 The ideal and the real op-amp
Ideal: infinite gain, bandwidth, input resistance; zero output resistance, offset and noise. Analysis rules for negative feedback: **v+ = v-** (virtual short) and **i+ = i- = 0**.
**Real limitations:**
- **Finite gain A and GBW:** closed-loop gain 100 with A = 10^5 has a gain error of 0.1 percent; with a GBW of 1 MHz the bandwidth is 10 kHz.
- **Slew rate (SR):** the maximum rate of change of the output (for example 0.5 V/μs for a 741). A sine wave of peak V_p at frequency f needs SR ≥ 2π f V_p: the **full-power bandwidth** f_max = SR/(2π V_p) = 0.5 V/μs/(2π × 10 V) = **7.96 kHz** for V_p = 10 V (slew-rate distortion above this).
- **Input offset voltage V_os** (about 1 to 5 mV for a general-purpose op-amp) is amplified by the noise gain: with V_os = 2 mV and gain 100, the output error is 0.2 V. **Bias currents** I_B (nA to μA) cause offsets across the source resistances: add a resistor R_1 ∥ R_f at the non-inverting input to balance them.
- **CMRR and PSRR** (finite rejection of common-mode and supply signals), **output swing** (limited by the supply rails), **output current**, **input common-mode range**, and **noise** (en in nV/√Hz).
- **Rail-to-rail**, **precision**, **low-noise** and **high-speed** op-amps trade these parameters against each other.

### 2.2 Standard circuits
- **Inverting amplifier:** A_v = -R_f/R_in; R_in(circuit) = R_in. **Non-inverting:** A_v = 1 + R_f/R_g; very high R_in. **Follower:** A_v = 1 (buffer).
- **Summing amplifier:** v_o = -R_f Σ(v_i/R_i). **Difference amplifier** with R_2/R_1 ratios: v_o = (R_2/R_1)(v_2 - v_1); its CMRR is limited by resistor matching: with 1 percent resistors the CMRR is about 40 dB (the worst case of the ratio error: (1 + gain)/(4 × tolerance)).
- **Instrumentation amplifier** (two buffers plus a difference amplifier): gain = 1 + 2R/R_g (R = 25 kΩ, R_g = 1 kΩ gives 51); very high input resistance and high CMRR: used for bridges, ECG and strain gauges.
- **Integrator:** v_o = -(1/RC)∫v_in dt (with a resistor in parallel with C to limit the DC gain); **differentiator:** v_o = -RC dv_in/dt (use a series input resistor for stability). A 10 kΩ and 1 nF integrator has a unity-gain frequency of 1/(2πRC) = 15.9 kHz.
- **Precision rectifier** (the diode inside the feedback loop removes the 0.7 V drop), **peak detector**, **log and antilog amplifiers** (using diode or BJT exponentials: v_o = -V_T ln(v_in/(I_S R))), **current sources** (V-to-I converters), **voltage references** and **transimpedance amplifiers** (photodiodes: v_o = -I_ph R_f).
- **Comparators:** an op-amp without feedback compares two voltages; dedicated comparators are faster. **Schmitt trigger** (positive feedback, a hysteresis loop): inverting version with the feedback ratio R_1/(R_1 + R_2): thresholds ±V_sat R_1/(R_1 + R_2) = ±12 V × 10 k/100 k = ±1.2 V, hysteresis 2.4 V: a noisy slow input produces a clean digital edge (switch debouncing, signal conditioning).

## Chapter 3. Active Filters

### 3.1 Filter basics
A filter passes the wanted band and rejects others: **low-pass, high-pass, band-pass, band-stop (notch)**. Specified by cut-off frequency f_c, order n (the roll-off is 20n dB/decade), and the shape of the response: **Butterworth** (maximally flat magnitude), **Chebyshev** (steeper, with ripple in the passband), **Bessel** (flat group delay, best for pulses), elliptic. The second-order transfer function: H(s) = ω_0²/(s² + (ω_0/Q) s + ω_0²) with Q = 0.707 for a Butterworth (maximally flat) response, Q > 0.707 for a peaking response.
- **First-order active filters:** an inverting integrator-type low-pass with the corner f_c = 1/(2π R_f C_f) and a gain -R_f/R: with R_f = 100 kΩ, C_f = 1.59 nF, f_c = 1 kHz (see Electronics I).

### 3.2 The Sallen-Key low-pass filter
A unity-gain Sallen-Key stage: two equal resistors R in series, a capacitor C_2 from the non-inverting input to ground, and a capacitor C_1 from the junction of the resistors back to the op-amp output (a voltage follower). **H(s) = 1/(s² R² C_1 C_2 + 2 s R C_2 + 1)**, so **f_0 = 1/(2π R sqrt(C_1 C_2))** and **Q = (1/2) sqrt(C_1/C_2)**. For a Butterworth response Q = 0.707 requires **C_1 = 2 C_2**. Example: R = 10 kΩ, C_2 = 10 nF, C_1 = 20 nF: f_0 = 1.125 kHz, Q = 0.707: the gain at f_0 is -3 dB (0.707), at 10 f_0 it is -40 dB with a phase of -172°. Cascade stages for higher orders (a fourth-order Butterworth uses two stages with Q = 0.54 and 1.31). **Multiple feedback (MFB)** and **state-variable / biquad** filters give band-pass and notch responses and a high Q.
- Design hints: use the op-amp's GBW at least 20 to 100 times f_0; use 1 percent resistors and C0G/NP0 capacitors; scale impedances for noise and loading; **switched-capacitor** filters realise resistors with switches and capacitors (IC filters).

## Chapter 4. Differential Amplifiers, Current Mirrors and Multistage Design

- **Differential pair:** two matched transistors sharing a tail current source I_EE. A BJT pair: differential gain A_d = g_m R_C (single-ended output), differential input resistance 2 r_π; the common-mode gain is small when the tail source is a high-impedance current source, so **CMRR = A_d/A_cm** is large (often 80 to 120 dB). The input offset arises from mismatches.
- **Current mirrors** copy a reference current: output current I_out = I_ref (for matched transistors; the ratio of areas scales it); output resistance r_o; the Wilson and cascode mirrors raise the output resistance. **Active loads** (a current mirror as the load of a differential pair) give a high gain from one stage with a small supply.
- **A typical op-amp architecture:** the **input differential stage** (high input resistance, rejects common-mode), the **voltage-gain stage** with Miller compensation (high gain, dominant pole), the **output stage** (class AB push-pull buffer, low output resistance). Open-loop gain 10^5 to 10^6, GBW from 1 MHz to GHz.
- **Cascades:** gains multiply but bandwidth shrinks; each stage must be biased and AC-coupled or directly coupled with level shifting.

## Chapter 5. Oscillators and Timing Circuits

### 5.1 Sinusoidal oscillators
The **Barkhausen criterion:** oscillation starts at the frequency where the loop gain Aβ = 1∠0° (the total phase shift is 0° or 360°) and |Aβ| ≥ 1 initially (growing), with a gain-limiting mechanism to stabilise the amplitude.
- **Wien-bridge oscillator:** an RC series-parallel network (R, C in series and in parallel) with an attenuation of 1/3 at **f_0 = 1/(2π RC)** (R = 10 kΩ and C = 15.9 nF give 1 kHz); the non-inverting amplifier must have a gain of 3 (R_f = 2 R_g); a lamp or a diode network provides the amplitude control. Good for audio.
- **RC phase-shift oscillator:** three RC sections give 180° at f = 1/(2π RC sqrt 6) and the amplifier must have a gain of at least 29 (inverting).
- **LC oscillators** (high frequency): **Colpitts** (a capacitive divider), **Hartley** (a tapped inductor): f_0 = 1/(2π sqrt(LC)); **crystal oscillators** (quartz resonator with a very high Q, accuracy 10 to 50 ppm; the Pierce circuit) set the clocks of microcontrollers. **Voltage-controlled oscillators** (VCO) and the **phase-locked loop** (PLL) synthesise frequencies.

### 5.2 Relaxation oscillators and the 555 timer
- **Astable multivibrator with an op-amp:** an RC integrator and a Schmitt trigger produce a square wave.
- **The 555 timer:** two comparators, an SR flip-flop and a discharge transistor with thresholds 1/3 and 2/3 V_cc. **Astable:** f = 1.44/((R_1 + 2 R_2) C), duty cycle = (R_1 + R_2)/(R_1 + 2 R_2). With R_1 = 1 kΩ, R_2 = 10 kΩ, C = 0.1 μF: f = 1.44/(21 kΩ × 0.1 μF) = **686 Hz**, duty cycle 11/21 = **52.4 percent**. **Monostable:** the pulse width T = 1.1 R C: R = 100 kΩ, C = 10 μF gives **1.1 s**. Used for delays, flashers, pulse stretching and PWM.

## Chapter 6. Power Amplifiers and Power Supplies

### 6.1 Output stages and classes
- **Class A:** the transistor conducts for the whole cycle; excellent linearity, poor efficiency: the maximum efficiency is **25 percent** (resistive load) or 50 percent (transformer/inductor coupling). **Class B** (complementary push-pull): each transistor conducts for half the cycle; the maximum efficiency is π/4 = **78.5 percent**, but there is **crossover distortion** because of the V_BE dead zone. **Class AB:** a small bias current (two diode drops) removes the crossover distortion with an efficiency between 50 and 78 percent: the standard for audio. **Class D:** switching (PWM) with a filter at the output: efficiency over 90 percent (audio amplifiers, motor drives).
- **Example (class B, V_cc = 12 V supplies, 8 Ω load, peak output 12 V):** P_out = V_p²/(2R_L) = 9 W, P_supply = 2 V_cc V_p/(π R_L) = 11.46 W, efficiency 78.5 percent; the **maximum device dissipation** occurs at V_p = 2 V_cc/π = 7.6 V: P_D,max (total of both devices) = 2 V_cc²/(π² R_L) = 3.65 W (not at full output): size the heat sink for it.
- **Thermal design:** T_J = T_A + P_D (θ_JC + θ_CS + θ_SA); thermal runaway in BJTs is avoided with emitter resistors and thermal tracking of the bias diodes.

### 6.2 Voltage regulators
- **Linear regulators** (zener reference plus a pass transistor, or IC types 78xx and LDOs): a series pass element dissipates P = (V_in - V_out) I: a 12 V input and 5 V at 0.5 A wastes 3.5 W (efficiency 5/12 = 42 percent). Specifications: **dropout voltage, line and load regulation, ripple rejection, quiescent current**.
- **Switching regulators:** the **buck (step-down) converter** switches V_in with duty cycle D through an inductor and a capacitor: **V_out = D V_in** (continuous conduction): 12 V to 5 V needs D = 0.417; the inductor ripple current ΔI_L = (V_in - V_out) D/(L f) = 7 × 0.417/(47 μH × 100 kHz) = **0.62 A**; the output ripple voltage ≈ ΔI_L/(8 f C) = 0.62/(8 × 100 kHz × 100 μF) = 7.8 mV. Efficiency 85 to 95 percent. **Boost** (V_out = V_in/(1 - D)), **buck-boost** and **flyback** (isolated). The trade-off: efficiency, size, noise (EMI).
- **References:** bandgap (about 1.25 V, temperature-stable: PTAT + CTAT).

## Chapter 7. Noise, Precision and Practical Design

- **Noise:** thermal (Johnson) noise voltage v_n = sqrt(4 k T R Δf): a 10 kΩ resistor over a 20 kHz bandwidth at 300 K gives 1.82 μV rms; shot noise, flicker (1/f) noise, the equivalent input noise of op-amps (nV/√Hz) and the **signal-to-noise ratio**. Reduce noise with lower resistor values, a narrower bandwidth, low-noise devices and good shielding and grounding.
- **Layout and grounding:** decouple every supply pin (100 nF ceramic close to the chip plus bulk capacitance), separate analog and digital grounds joined at one point, short feedback paths, guard rings for high impedances; beware of parasitic capacitance and inductance.
- **Simulation (SPICE) and measurement:** DC operating point, AC sweep (Bode plot, phase margin), transient (slew, overshoot), noise and Monte Carlo analyses; verify against the hand calculations; measure with a scope using proper probe compensation.
- **Design flow:** specification → topology choice → hand design with the approximate formulas → simulation including component tolerances → prototype → test → iterate.

## Chapter 8. Common Mistakes Checklist
1. Applying the ideal op-amp rules without checking for negative feedback (a comparator has none), or forgetting saturation at the supply rails.
2. Ignoring the GBW: a gain of 100 stage from a 1 MHz GBW op-amp has only a 10 kHz bandwidth.
3. Forgetting the loading of the feedback network when computing A and β.
4. Using the closed-loop gain instead of the **noise gain** for offset and stability calculations.
5. Designing filters with an op-amp whose GBW is too low at the cut-off frequency, or with large resistors that add noise.
6. Confusing the maximum efficiency (at peak output) with the maximum dissipation (at an intermediate output) in class B stages.
7. Neglecting phase margin: ringing and oscillation in a "stable on paper" design.
8. Forgetting supply decoupling and the thermal limits of power devices.
