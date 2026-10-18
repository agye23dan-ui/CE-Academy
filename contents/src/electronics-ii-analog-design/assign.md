# Electronics II (Analog Design): Assignments with Worked Solutions

State the circuit topology, the assumptions (ideal or real op-amp, region of operation) and check the results (saturation, bandwidth, slew rate, power). All numerical results below were computed with Python (NumPy/SciPy) and checked by hand.

# Assignment 1: Feedback and Operational Amplifier Circuits (70 marks)

## Questions

**Q1. Feedback theory (12 marks)** An amplifier has A = 10^5. (a) Find the closed-loop gain and (1 + Aβ) for β = 0.01, 0.1 and 1 [4]. (b) If A falls by 20 percent, find the closed-loop gain for β = 0.01 and the percentage change [3]. (c) The amplifier has a single pole with GBW = 1 MHz: find the closed-loop bandwidth for a gain of 100 and of 10 [3]. (d) Explain how feedback changes input and output resistance in the four topologies [2].

**Q2. Non-inverting amplifier with a real op-amp (10 marks)** R_f = 99 kΩ, R_g = 1 kΩ, GBW = 1 MHz, A_0 = 10^5, slew rate 0.5 V/μs, ±12 V rails. (a) Find the ideal gain and the gain error due to the finite A_0 [3]. (b) Find the bandwidth [2]. (c) Find the largest 20 kHz sine amplitude without slew-rate distortion, and the full-power bandwidth for a 5 V peak output [3]. (d) What input amplitude saturates the output? [2]

**Q3. Offset and bias errors (10 marks)** An inverting amplifier has R_in = 1 kΩ and R_f = 100 kΩ with an op-amp having V_os = 3 mV and I_B = 80 nA (both inputs equal). (a) Find the noise gain and the output offset due to V_os [3]. (b) Find the output error due to the bias current without compensation [3]. (c) Where would you place a compensating resistor and what value? What effect remains? [4]

**Q4. Instrumentation amplifier (10 marks)** The classic three-op-amp instrumentation amplifier has two input buffers with a gain-setting resistor R_g between them and 25 kΩ feedback resistors, followed by a unity-gain difference amplifier. (a) Find the gain for R_g = 1 kΩ [2]. (b) Find R_g for a gain of 1001 [2]. (c) A strain-gauge bridge excited at 5 V changes by ΔR/R = 0.1 percent in one arm: find the bridge output (V_ex ΔR/(4R)) and R_g for an output of 1 V [4]. (d) Why is the instrumentation amplifier better than a single difference amplifier for this job? [2]

**Q5. Integrators and differentiators (10 marks)** (a) An inverting integrator has R = 10 kΩ and C = 10 nF. Find v_o for a 1 V step at t = 0 and the time to saturate at -12 V [4]. (b) Find its unity-gain frequency [2]. (c) Why does a practical integrator include a resistor in parallel with C? [2] (d) What does a differentiator do to a triangular wave and why is it noise-sensitive? [2]

**Q6. Comparators and the Schmitt trigger (10 marks)** An inverting Schmitt trigger uses R_1 = 10 kΩ (to ground) and R_2 = 90 kΩ (positive feedback) with ±12 V saturation. (a) Find the thresholds and the hysteresis [4]. (b) Describe the output for a sine input of 3 V peak [3]. (c) Why does hysteresis help with a noisy input? [3]

**Q7. Other circuits (8 marks)** (a) A transimpedance amplifier has R_f = 1 MΩ: find the output for a 2 μA photodiode current and the corner frequency with C_f = 1 pF [4]. (b) Show why a precision half-wave rectifier avoids the 0.7 V diode drop [2]. (c) What is the CMRR limit of a difference amplifier with 1 percent resistors and a gain of 10? [2]

## Solutions and Marking Guide

**Q1.**
(a) A_f = A/(1 + Aβ) with A = 10^5:
β = 0.01: Aβ = 1000, 1 + Aβ = **1001**, A_f = 10^5/1001 = **99.9**.
β = 0.1: Aβ = 10^4, 1 + Aβ = **10,001**, A_f = **9.999**.
β = 1: Aβ = 10^5, 1 + Aβ = **100,001**, A_f = **0.99999** (a follower).
In each case A_f ≈ 1/β.
(b) Step 1: A = 0.8 × 10^5 = 80,000: A_f = 80,000/(1 + 800) = **99.875**.
Step 2: change = (99.875 - 99.900)/99.900 = **-0.025 percent** for a 20 percent change in A: the desensitivity factor is 1/(1 + Aβ) = 1/1001 (20 percent/1001 = 0.02 percent).
(c) GBW = A_f × BW, so BW = GBW/A_f: gain 100: 1 MHz/100 = **10 kHz**; gain 10: 1 MHz/10 = **100 kHz**.
(d) **Series mixing** at the input (feedback voltage in series with the input) **raises R_in** by (1 + Aβ); **shunt mixing** (feedback current at the input node) **lowers R_in**. **Voltage sampling** at the output **lowers R_out** by (1 + Aβ); **current sampling raises R_out**. So series-shunt (non-inverting amplifier): high R_in, low R_out; shunt-shunt (inverting): low R_in, low R_out; series-series: high/high; shunt-series: low/high.

**Q2.**
(a) Step 1: ideal gain = 1 + R_f/R_g = 1 + 99/1 = **100**.
Step 2: β = R_g/(R_f + R_g) = 0.01, so the loop gain Aβ = 10^5 × 0.01 = 1000.
Step 3: exact closed-loop gain = A/(1 + Aβ) = 10^5/1001 = 99.9: a **gain error of 0.1 percent**.
(b) BW = GBW/gain = 1 MHz/100 = **10 kHz**.
(c) Step 1: slew rate limit: 2π f V_p ≤ 0.5 V/μs, so V_p ≤ 0.5 × 10^6/(2π × 20,000) = **3.98 V** peak at 20 kHz.
Step 2: full-power bandwidth for a 5 V peak output: f_max = SR/(2π V_p) = 0.5 × 10^6/(2π × 5) = **15.9 kHz** (the small-signal bandwidth of 10 kHz is lower: here the gain-bandwidth limit applies first).
(d) The output saturates at ±12 V: the input amplitude = 12/100 = **0.12 V**.

**Q3.**
(a) Step 1: the noise gain for the offset = 1 + R_f/R_in = 1 + 100 = **101**.
Step 2: output offset = 101 × 3 mV = **0.303 V** (about 0.3 V: far larger than the 1 mV of a precision application; use a low-offset op-amp or an adjustment).
(b) The bias current of the inverting input flows through R_f (the inverting node is at virtual ground): v_o error = I_B R_f = 80 nA × 100 kΩ = **8 mV** (without a compensation resistor).
(c) Add a resistor **R_3 = R_in ∥ R_f = 1 k ∥ 100 k = 990 Ω** between the non-inverting input and ground: both inputs then see the same resistance, so the equal bias currents produce equal voltage drops that cancel (the common-mode part). The error left is proportional to the **offset current** I_os = |I_B+ - I_B-| (typically 10 to 20 percent of I_B), for example 10 nA × 100 kΩ = 1 mV, plus the input offset voltage which is not removed by R_3.

**Q4.**
(a) Gain = 1 + 2R/R_g = 1 + 50 kΩ/1 kΩ = 1 + 50 = **51**.
(b) 1001 = 1 + 50 kΩ/R_g → R_g = 50 kΩ/1000 = **50 Ω**.
(c) Step 1: bridge output = V_ex ΔR/(4R) = 5 V × 0.001/4 = **1.25 mV**.
Step 2: for 1 V output the gain is 1 V/1.25 mV = 800.
Step 3: 1 + 50 kΩ/R_g = 800, so R_g = 50 kΩ/799 = **62.6 Ω** (62 Ω or a trimmer).
(d) The input buffers give **very high and equal input resistances**, so the source impedance (the bridge) does not unbalance the circuit, and the gain is set by a **single resistor** without matching pairs; the common-mode rejection is high (80 to 120 dB) because the first stage amplifies only the difference signal while passing the common-mode signal with unity gain: a single difference amplifier has a low input resistance and its CMRR is limited by the match of four resistors.

**Q5.**
(a) Step 1: RC = 10 kΩ × 10 nF = 10^-4 s.
Step 2: v_o = -(1/RC) ∫ v_in dt = -(1/10^-4) × 1 V × t = **-10,000 t volts** (-10 V/ms).
Step 3: it reaches -12 V at t = 12/10,000 = **1.2 ms** and stays saturated.
(b) f_unity = 1/(2π R C) = 1/(2π × 10^4 × 10^-8) = 1/(6.283 × 10^-4) = **1.59 kHz**.
(c) With the capacitor alone, the DC gain is infinite: the input offset voltage and the bias current integrate until the output saturates. A resistor in parallel with C (R_p ≫ R) limits the DC gain to R_p/R and lets the output settle; the circuit then integrates only above 1/(2π R_p C).
(d) The differentiator's output is -RC times the slope: a **triangular wave becomes a square wave**. Its gain rises at 20 dB/decade with frequency, so it amplifies noise and can oscillate with the op-amp's phase lag: practical designs add a series input resistor and a feedback capacitor to limit the high-frequency gain.

**Q6.**
(a) Step 1: β = R_1/(R_1 + R_2) = 10/100 = 0.1.
Step 2: thresholds ±β V_sat = **±0.1 × 12 V = ±1.2 V**.
Step 3: hysteresis = 2 × 1.2 = **2.4 V**.
(b) The input is a 3 V peak sine. When the input rises above +1.2 V the output switches to -12 V; the output stays at -12 V until the input falls below -1.2 V, then switches to +12 V. The output is a **square wave of ±12 V** with the same frequency as the input and inverted (the switching instants occur when the sine crosses ±1.2 V, slightly after the zero crossings).
(c) Noise of less than 2.4 V peak-to-peak riding on a slow signal that crosses a threshold cannot cause repeated switching, because after a transition the threshold moves to the other side by 2.4 V: the output makes one clean transition per crossing (a comparator with a single threshold would chatter).

**Q7.**
(a) Step 1: v_o = -I_ph R_f = -2 μA × 1 MΩ = **-2 V**.
Step 2: the feedback pole f = 1/(2π R_f C_f) = 1/(2π × 10^6 × 10^-12) = **159 kHz**. (The feedback capacitor also stabilises the amplifier against the photodiode's capacitance.)
(b) In the precision half-wave rectifier the diode is inside the feedback loop of the op-amp. For a positive input the op-amp output rises to v_in + 0.7 V so that the diode conducts and the signal at the diode's cathode (the circuit output) equals v_in: the loop gain removes the 0.7 V drop (the effective drop is about 0.7 V divided by the open-loop gain). For a negative input the diode is off and the output stays at zero. The circuit therefore rectifies signals of only a few millivolts, which a simple diode circuit cannot.
(c) Step 1: with resistor tolerance t = 1 percent, the worst-case CMRR ≈ (1 + G)/(4t).
Step 2: = 11/0.04 = 275 = 20 log10(275) = **48.8 dB** (about 49 dB).

---

# Assignment 2: Active Filters, Oscillators and Timers (70 marks)

## Questions

**Q1. Sallen-Key low-pass design (14 marks)** Design a unity-gain second-order Butterworth low-pass filter with f_0 = 1 kHz using R = 10 kΩ (H = 1/(s² R² C_1 C_2 + 2 s R C_2 + 1), f_0 = 1/(2π R sqrt(C_1 C_2)), Q = (1/2) sqrt(C_1/C_2)). (a) Find C_1 and C_2 for Q = 0.707 [5]. (b) With the standard values 22 nF and 10 nF, find the actual f_0 and Q [3]. (c) Find the attenuation at 2 kHz and 10 kHz for the ideal Butterworth response [4]. (d) What op-amp GBW is needed? [2]

**Q2. Higher orders and types (8 marks)** (a) Find the Q values of the two stages of a fourth-order Butterworth filter and the slope of the roll-off [3]. (b) Describe a band-pass filter with f_0 = 1 kHz and Q = 10: find the bandwidth [2]. (c) Compare Butterworth, Chebyshev and Bessel responses [3].

**Q3. Wien-bridge oscillator (10 marks)** R = 10 kΩ and C = 15.9 nF in the RC network. (a) Find the oscillation frequency [2]. (b) State the amplifier gain needed and design R_f and R_g [3]. (c) What happens if the gain is 2.9 or 3.2? [3] (d) Find the capacitor for a 340 Hz oscillator with the same resistors [2].

**Q4. The 555 timer (14 marks)** (a) Astable: R_1 = 1 kΩ, R_2 = 10 kΩ, C = 0.1 μF. Find the frequency, the high time and the duty cycle [5]. (b) Monostable: R = 100 kΩ, C = 10 μF: find the pulse width [2]. (c) Design an astable for 1 kHz at 60 percent duty cycle with C = 0.1 μF [5]. (d) How could a duty cycle below 50 percent be obtained? [2]

**Q5. Relaxation and LC oscillators (14 marks)** (a) An op-amp astable with R = 10 kΩ, C = 0.1 μF and the feedback ratio β = 0.5 has f = 1/(2RC ln((1 + β)/(1 - β))): find f; repeat for β = 0.1 [4]. (b) A Colpitts or Hartley oscillator has L = 10 μH and an effective capacitance of 100 pF: find f [2]. (c) State the Barkhausen criterion and how amplitude is stabilised [4]. (d) Why are crystals used in microcontroller clocks? [4]

**Q6. PLL and VCO concept (10 marks)** Describe the blocks of a phase-locked loop, the lock condition, and give two applications.

## Solutions and Marking Guide

**Q1.**
(a) Step 1: Q = (1/2) sqrt(C_1/C_2) = 0.707 gives sqrt(C_1/C_2) = 1.414, so C_1 = 2 C_2.
Step 2: f_0 = 1/(2π R sqrt(C_1 C_2)) = 1/(2π R sqrt(2) C_2), so C_2 = 1/(2π × 10^4 × 1000 × 1.414) = **11.25 nF**.
Step 3: C_1 = 2 C_2 = **22.5 nF**.
(b) Step 1: sqrt(22 nF × 10 nF) = sqrt(220) nF = 14.83 nF.
Step 2: f_0 = 1/(2π × 10^4 × 14.83 nF) = **1073 Hz**.
Step 3: Q = 0.5 sqrt(22/10) = 0.5 × 1.483 = **0.742** (the response is slightly peaked; the 5 percent error in f_0 from the standard values is acceptable; use E24 parts of 22 nF and 11 nF in practice, or paralleled capacitors).
(c) Butterworth: |H| = 1/sqrt(1 + (f/f_0)^4).
Step 1: at 2 kHz: 1/sqrt(1 + 16) = 1/sqrt 17 = 0.2425 = **-12.3 dB**.
Step 2: at 10 kHz: 1/sqrt(10^4 + 1) = 0.01 = **-40 dB** (40 dB per decade).
(d) The op-amp (a follower) must have a gain much larger than 1 at the highest frequency of interest: **GBW ≥ 20 to 100 × f_0 = 20 to 100 kHz** at least, and the slew rate must support the signal amplitude; a 1 MHz GBW op-amp is ample.

**Q2.**
(a) A fourth-order Butterworth filter has two second-order sections with **Q = 0.541 and Q = 1.307**; the roll-off is **80 dB per decade** (24 dB per octave).
(b) Q = f_0/BW, so BW = 1000/10 = **100 Hz** (a narrow-band filter; use a multiple-feedback or state-variable biquad).
(c) **Butterworth:** the flattest passband, a moderate roll-off, some overshoot in the step response. **Chebyshev:** a steeper roll-off for a given order but with ripple in the passband (and more ringing). **Bessel:** the flattest group delay (best pulse response, minimal overshoot) but the slowest roll-off.

**Q3.**
(a) f_0 = 1/(2π RC) = 1/(2π × 10^4 × 15.9 × 10^-9) = 1/(9.99 × 10^-4) = **1001 Hz**.
(b) The RC network attenuates the signal by 3 at f_0 with zero phase, so the amplifier needs a gain of **3** (a non-inverting amplifier with 1 + R_f/R_g = 3, i.e. **R_f = 2 R_g**, for example R_g = 10 kΩ and R_f = 20 kΩ), slightly more than 3 to start the oscillation.
(c) With a gain of **2.9** (loop gain < 1) any oscillation **dies out**; with **3.2** (loop gain > 1) the amplitude grows until the op-amp clips (saturates), producing a distorted waveform. A practical circuit uses an amplitude-control element (a lamp, diodes or an FET) so that the gain falls as the amplitude rises, reaching exactly 3.
(d) C = 1/(2π R f) = 1/(2π × 10^4 × 340) = 1/(2.136 × 10^7) = **46.8 nF** (use 47 nF: 338.6 Hz).

**Q4.**
(a) Step 1: f = 1.44/((R_1 + 2R_2) C) = 1.44/((1 k + 20 k) × 0.1 μF) = 1.44/(2.1 × 10^-3) = **685.7 Hz**.
Step 2: high time = 0.693 (R_1 + R_2) C = 0.693 × 11 kΩ × 0.1 μF = **0.762 ms**.
Step 3: low time = 0.693 R_2 C = 0.693 ms; period = 1.455 ms (685.7 Hz ✓).
Step 4: duty cycle = (R_1 + R_2)/(R_1 + 2R_2) = 11/21 = **52.4 percent**.
(b) T = 1.1 R C = 1.1 × 100 kΩ × 10 μF = **1.1 s**.
(c) Step 1: duty = (R_1 + R_2)/(R_1 + 2R_2) = 0.6 gives R_1 + R_2 = 0.6 R_1 + 1.2 R_2, so 0.4 R_1 = 0.2 R_2 and **R_2 = 2 R_1**.
Step 2: f = 1.44/((R_1 + 2R_2) C) = 1.44/(5 R_1 C) = 1000 Hz, so 5 R_1 = 1.44/(1000 × 10^-7) = 14.4 kΩ.
Step 3: **R_1 = 2.88 kΩ and R_2 = 5.76 kΩ** (use 2.87 kΩ and 5.76 kΩ, 1 percent values).
(d) Place a **diode in parallel with R_2** (anode towards the capacitor-discharge pin) so that charging bypasses R_2: the high time becomes 0.693 R_1 C and the low time 0.693 R_2 C, so the duty can be below 50 percent if R_1 < R_2.

**Q5.**
(a) Step 1: β = 0.5: (1 + β)/(1 - β) = 3, ln 3 = 1.0986: f = 1/(2 × 10^4 × 10^-7 × 1.0986) = 1/(2.197 × 10^-3) = **455 Hz**.
Step 2: β = 0.1: ln(1.1/0.9) = 0.2007: f = 1/(2 × 10^-3 × 0.2007) = **2.49 kHz**. (Hysteresis sets the swing of the capacitor voltage and therefore the frequency.)
(b) f = 1/(2π sqrt(LC)) = 1/(2π sqrt(10^-5 × 10^-10)) = 1/(2π × 3.16 × 10^-8) = **5.03 MHz**.
(c) **Barkhausen:** the loop gain A β must have magnitude at least 1 (exactly 1 in steady state) and the total loop phase shift must be 0° (a multiple of 360°) at the oscillation frequency. Start-up needs |Aβ| slightly above 1; the amplitude is stabilised by a **non-linearity** (clipping or a gain-control element such as a lamp, thermistor or diode network) that reduces the gain as the amplitude grows until |Aβ| = 1.
(d) A **quartz crystal** has a very high Q (10^4 to 10^6) and a frequency stable to 10 to 50 ppm, vastly better than RC or LC oscillators (about 1 to 5 percent), a necessity for accurate baud rates, timers, USB and radio; it is inexpensive and small.

**Q6.** A **PLL** has a **phase detector** (compares the phase of the input with that of the VCO output), a **loop (low-pass) filter** (smooths the error to a control voltage) and a **voltage-controlled oscillator** (whose frequency depends on the control voltage), with an optional divider in the feedback path. The loop **locks** when the VCO frequency equals the input frequency (or N times it with a divider) and the phase error is constant (zero or a fixed offset): the control voltage then holds the VCO at the right frequency. Applications: **frequency synthesis** (a stable crystal reference multiplied to the GHz clock of a processor or a radio local oscillator), **clock recovery and clean-up**, **FM demodulation**, motor speed control, carrier recovery in receivers.

---

# Assignment 3: Stability, Power Stages, Regulators and Integrated-Circuit Building Blocks (80 marks)

## Questions

**Q1. Phase margin (14 marks)** An op-amp has A_0 = 10^5 with a dominant pole at 10 Hz and a second pole at f_2. (a) Find the unity-gain (crossover) frequency with β = 1 [2]. (b) Compute the phase margin for f_2 = 1, 2, 5 and 10 MHz [6]. (c) Which values are acceptable? Describe the closed-loop step response for PM = 45° and PM = 80° [4]. (d) What is the effect of a capacitive load on stability and the remedy? [2]

**Q2. Compensation (8 marks)** Explain pole splitting and Miller compensation, with a numerical example: a second-stage gain of -100 and C_c = 10 pF.

**Q3. Output stages (18 marks)** A class B push-pull stage uses ±12 V supplies and an 8 Ω load. (a) Find the output power, supply power and efficiency at a peak output of 12 V [4]. (b) Find the maximum device dissipation (total) and the output voltage at which it occurs [4]. (c) Explain crossover distortion and how class AB solves it [4]. (d) Design a class AB stage for 20 W into 8 Ω: find V_p, the peak current, the supply voltage (add a 4 V margin), supply power and efficiency [6]

**Q4. Linear regulators and thermal design (10 marks)** A 7805 regulator supplies 5 V at 0.5 A from 12 V. (a) Find the power dissipation and the efficiency [3]. (b) If θ_JA = 65 °C/W without a heat sink, find the junction temperature at 25 °C ambient and comment [3]. (c) With a heat sink: θ_JC = 5, θ_CS = 1, θ_SA = 8 °C/W at 3.5 W: find T_J at 40 °C ambient [4]

**Q5. Switching regulator (10 marks)** A buck converter converts 12 V to 5 V with L = 47 μH at 100 kHz. (a) Find the duty cycle [2]. (b) Find the inductor ripple current [3]. (c) Find the output ripple for C = 100 μF [3]. (d) Compare the efficiency with a linear regulator at 0.5 A (assume the buck is 90 percent efficient) [2]

**Q6. Differential pair and current mirrors (10 marks)** (a) A BJT differential pair has a tail current of 1 mA and R_C = 10 kΩ (single-ended output): find g_m and the differential gain [4]. (b) A simple BJT current mirror with β = 100 has I_ref = 1 mA: find the output current error from the base currents [3]. (c) Why do op-amps use active loads? [3]

**Q7. Noise and precision (10 marks)** (a) Find the thermal noise voltage of 1 kΩ and 100 kΩ resistors over a 1 kHz bandwidth at 300 K [4]. (b) Find the SNR in dB of a 1 V rms signal and 10 μV rms noise [2]. (c) List four design measures to reduce noise and interference [4]

## Solutions and Marking Guide

**Q1.**
(a) The first pole is at 10 Hz, so |A| = 10^5/sqrt(1 + (f/10)²) ≈ 10^6/f: unity at about **1 MHz** (GBW = 10^5 × 10 Hz = 1 MHz), slightly lower with the second pole.
(b) PM = 180° - arctan(f/10) - arctan(f/f_2) at f = 1 MHz; the first arctan is 90° (practically 89.99°).
Step 1: f_2 = 1 MHz: 180 - 90 - 45 = **45°**.
Step 2: f_2 = 2 MHz: 180 - 90 - arctan 0.5 = 180 - 90 - 26.6 = **63.4°**.
Step 3: f_2 = 5 MHz: 180 - 90 - 11.3 = **78.7°**.
Step 4: f_2 = 10 MHz: 180 - 90 - 5.7 = **84.3°**.
(c) PM ≥ 45° to 60° is acceptable; **45°** gives a step response with about 20 to 25 percent overshoot and some ringing (the closed-loop peaking); **63°** gives 5 to 10 percent; **80°** is nearly critically damped (about 1 percent overshoot) but a slower response.
(d) A capacitive load with the op-amp's output resistance adds a pole (a phase lag) inside the loop, reducing the phase margin and causing ringing. Remedies: an **isolation resistor** (10 to 100 Ω) in series with the output and a feedback capacitor/resistor around it, a lower closed-loop bandwidth, or an op-amp designed for capacitive loads.

**Q2.** Step 1: A two-stage amplifier without compensation has two poles close in frequency, giving a phase margin near zero for unity feedback.
Step 2: **Pole splitting:** adding a capacitor C_c across the second gain stage (between its input and output) produces the Miller effect: the effective capacitance at the first stage's output is C_c (1 + |A_2|) = 10 pF × 101 = **1010 pF**, which moves the first (dominant) pole to a much lower frequency, while the feedback at the second stage's output **pushes the non-dominant pole to a much higher frequency** (the poles split apart).
Step 3: The result is a single dominant pole with the second pole well above the crossover frequency, so the PM exceeds 60°.
Step 4: The price is a lower GBW (g_m1/(2π C_c)) and a limited slew rate (I/C_c).

**Q3.**
(a) Step 1: V_p = 12 V: P_out = V_p²/(2R_L) = 144/16 = **9 W**.
Step 2: P_supply = 2 V_cc V_p/(π R_L) = 2 × 12 × 12/(π × 8) = 288/25.13 = **11.46 W**.
Step 3: efficiency = 9/11.46 = **78.5 percent** (π/4).
(b) The total dissipation P_D = P_supply - P_out = (2 V_cc V_p)/(π R_L) - V_p²/(2R_L) is a maximum at V_p = 2 V_cc/π = **7.64 V** (about 64 percent of V_cc): **P_D,max = 2 V_cc²/(π² R_L) = 2 × 144/(9.87 × 8) = 3.65 W** (1.8 W per transistor), which is less than at full output (2.46 W) but is the worst case for the heat sink design (music signals have a high crest factor).
(c) A class B stage has a dead zone: until the input exceeds about ±0.6 to 0.7 V, neither transistor conducts, so the output has a flat spot at each zero crossing (**crossover distortion**), most visible at low signal levels. **Class AB:** two diodes (or a V_BE multiplier) between the bases bias both transistors just on (a quiescent current of a few mA to tens of mA), so one takes over smoothly from the other and the dead zone disappears; the cost is a small quiescent dissipation. Add negative feedback around the amplifier to reduce the distortion further.
(d) Step 1: V_p = sqrt(2 P R_L) = sqrt(2 × 20 × 8) = sqrt 320 = **17.9 V**.
Step 2: I_p = V_p/R_L = 17.9/8 = **2.24 A**.
Step 3: V_cc = 17.9 + 4 V = about **22 V** (±22 V supplies).
Step 4: P_supply = 2 V_cc V_p/(π R_L) = 2 × 22 × 17.9/(π × 8) = **31.3 W**.
Step 5: efficiency = 20/31.3 = **63.9 percent**; the total dissipation in the transistors = 31.3 - 20 = 11.3 W at full power (the heat sinks must handle the worst case 2 V_cc²/(π² R_L) = 12.3 W at V_p = 14 V).

**Q4.**
(a) Step 1: P = (V_in - V_out) I = (12 - 5) × 0.5 = **3.5 W**.
Step 2: efficiency = P_out/P_in = 2.5 W/6 W = 5/12 = **41.7 percent**.
(b) T_J = T_A + P θ_JA = 25 + 3.5 × 65 = **252 °C**: far above the 125 to 150 °C limit; the regulator would shut down by thermal protection. A heat sink is needed (or a lower input voltage or a switching regulator).
(c) Step 1: θ_JA(total) = θ_JC + θ_CS + θ_SA = 5 + 1 + 8 = 14 °C/W.
Step 2: T_J = 40 + 3.5 × 14 = **89 °C**: acceptable.

**Q5.**
(a) D = V_out/V_in = 5/12 = **0.417**.
(b) Step 1: ΔI_L = (V_in - V_out) D/(L f) = 7 × 0.417/(47 × 10^-6 × 10^5) = 2.92/4.7 = **0.62 A peak-to-peak**.
Step 2: with an average current of 0.5 A the peak is 0.5 + 0.31 = 0.81 A and the valley 0.19 A: still continuous conduction.
(c) ΔV_o = ΔI_L/(8 f C) = 0.62/(8 × 10^5 × 100 × 10^-6) = 0.62/80 = **7.8 mV** (ignoring the capacitor's ESR, which often dominates in real designs).
(d) Step 1: input power for the buck = 2.5 W/0.9 = 2.78 W, loss 0.28 W.
Step 2: the linear regulator draws 12 V × 0.5 A = 6 W, loss 3.5 W.
Step 3: the buck wastes 3.5/0.28 = **12 times less**, at the cost of complexity and switching noise.

**Q6.**
(a) Step 1: each transistor carries 0.5 mA: g_m = 0.5 mA/25 mV = **20 mS**.
Step 2: the single-ended output differential gain A_d = g_m R_C = 20 mS × 10 kΩ = **200** (46 dB) (the differential output would be 400).
(b) Step 1: the mirror reference current I_ref supplies the collector current and the two base currents: I_ref = I_C + 2 I_C/β.
Step 2: I_out = I_ref/(1 + 2/β) = 1 mA/1.02 = **0.980 mA** (a 2 percent error).
(c) A current-mirror **active load** presents a very high small-signal resistance (r_o) while needing only a small DC voltage, so a single stage obtains a gain of g_m r_o (hundreds), and it converts the differential output to single-ended without losing half the signal; it saves chip area (no large resistors).

**Q7.**
(a) v_n = sqrt(4 k T R Δf):
Step 1: 1 kΩ: sqrt(4 × 1.38 × 10^-23 × 300 × 1000 × 1000) = sqrt(1.656 × 10^-14) = **0.129 μV** rms.
Step 2: 100 kΩ: 0.129 × sqrt 100 = **1.29 μV** rms (a factor of 10 for a factor of 100 in R).
(b) SNR = 20 log10(1 V/10 μV) = 20 log10(10^5) = 20 × 5 = **100 dB**.
(c) Use **lower resistor values** where possible (less thermal noise), **limit the bandwidth** to what the signal needs, choose **low-noise devices** (low e_n and i_n), use **shielding and twisted pairs**, separate analog and digital grounds and **decouple** supplies, put the **gain early** in the signal chain, and use differential signalling and instrumentation amplifiers for low-level signals.
