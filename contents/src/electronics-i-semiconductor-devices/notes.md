# Electronics I (Semiconductor Devices): Complete Lecture Notes

Electronics I explains how the devices at the heart of every circuit work (diodes, bipolar transistors and MOSFETs) and how to use them in rectifiers, switches and amplifiers. You will combine device physics, circuit analysis (Circuit Analysis I) and approximate models. Constants: thermal voltage V_T = kT/q = 25.85 mV at 300 K (use 25 or 26 mV for quick work), q = 1.602 × 10^-19 C, intrinsic silicon concentration n_i = 1.5 × 10^10 cm^-3 at 300 K. Convention: DC quantities in capital letters with capital subscripts (I_C, V_BE), small-signal quantities in lower case (i_c, v_be), total instantaneous quantities in lower case with capital subscripts (i_C = I_C + i_c).

## Chapter 1. Semiconductor Physics

### 1.1 Intrinsic and doped silicon
Silicon (group IV) forms a crystal with a **band gap** of 1.12 eV. At 300 K a few electrons are thermally excited into the conduction band, leaving holes in the valence band: **n = p = n_i** in an intrinsic crystal.
- **Doping:** donors (phosphorus, arsenic: group V) create **n-type** material with majority carriers electrons, n ≈ N_D; acceptors (boron: group III) create **p-type** material with majority carriers holes, p ≈ N_A. The **mass-action law**: n p = n_i² holds in equilibrium, so in n-type silicon with N_D = 10^16 cm^-3, p = n_i²/N_D = 2.25 × 10^4 cm^-3.
- **Currents:** **drift** (carriers move in an electric field: J = q(μ_n n + μ_p p) E, with mobilities μ_n ≈ 1350 and μ_p ≈ 480 cm²/(V s)) and **diffusion** (carriers move from high to low concentration: J_n = q D_n dn/dx). The Einstein relation D/μ = V_T. Resistivity falls with doping; temperature raises n_i exponentially.

### 1.2 The pn junction
Joining p and n regions creates a **depletion region** with fixed ionised dopants and a **built-in potential** V_0 = V_T ln(N_A N_D/n_i²). For N_A = 10^17 and N_D = 10^16 cm^-3: V_0 = 0.753 V. The depletion width widens under **reverse bias** and narrows under **forward bias**: w ∝ sqrt(V_0 + V_R).
- **Forward bias** lowers the barrier, and minority carriers are injected across it: current rises exponentially. **Reverse bias** gives only a tiny saturation current I_S (pA to nA), which doubles about every 5 °C.
- **Diode equation:** **i = I_S (e^(v/(n V_T)) - 1)**, with the ideality factor n between 1 and 2. For I_S = 10^-14 A: i = 0.83 mA at 0.65 V and 5.76 mA at 0.70 V (a factor of ten per 60 mV). The forward voltage drops about 2 mV per °C (at constant current).
- **Junction capacitances:** depletion capacitance C_j = C_j0/sqrt(1 + V_R/V_0) (varactors) and diffusion capacitance in forward bias. **Breakdown:** Zener (tunnelling, below about 5 V) and avalanche (above about 7 V); breakdown is non-destructive if the power is limited.

## Chapter 2. Diodes and Diode Circuits

### 2.1 Models
- **Ideal diode:** a short when forward-biased, an open circuit when reverse-biased.
- **Constant-voltage-drop model:** forward-conducting diode = voltage source of 0.7 V (silicon) in series with the circuit (0.2 to 0.3 V for germanium or Schottky, about 1.8 to 3 V for LEDs).
- **Exponential model with graphical or iterative solution:** a 5 V source with 1 kΩ: solving 5 - v = 1000 I_S (e^(v/V_T) - 1) gives V_D = 0.6925 V and I = 4.31 mA (the 0.7 V model gives 4.30 mA: excellent).
- **Small-signal model:** at a bias current I_D the incremental resistance r_d = n V_T/I_D (6 Ω at 4.3 mA). Use it for ac signals riding on a dc bias.
- **Analysis method:** guess the state of each diode (on or off), analyse, then check the assumption (current > 0 for diodes assumed on; reverse voltage for diodes assumed off).

### 2.2 Rectifiers and power supplies
- **Half-wave rectifier:** one diode in series with the load: peak output V_p - 0.7 V, conducting half of each cycle. **Full-wave bridge:** four diodes; two conduct in each half-cycle: peak output V_p - 1.4 V; average (unfiltered) 2 V_peak/π.
- **Example.** A 12 V rms transformer secondary: V_p = 12 sqrt 2 = 16.97 V; the bridge output peaks at 15.57 V; the unfiltered average is 2(15.57)/π = 9.91 V.
- **Smoothing capacitor:** the capacitor charges to the peak and discharges through the load: **ripple V_r ≈ V_p/(f R C)** (half-wave) and **V_p/(2 f R C)** (full-wave, f = mains frequency). For f = 50 Hz, R = 500 Ω, C = 1000 μF and V_p = 15.57 V (bridge): V_r = 15.57/(2 × 50 × 500 × 10^-3) = 0.311 V (2 percent ripple). The diodes conduct in short pulses (the conduction angle is small), so the peak diode current is much larger than the average load current. Diode ratings: **PIV** (peak inverse voltage) and surge current.
- **Voltage regulation:** the Zener regulator: V_in = 12 V through R_s = 220 Ω to a 5.1 V Zener in parallel with a 470 Ω load: I_in = (12 - 5.1)/220 = 31.4 mA; I_L = 5.1/470 = 10.9 mA; I_Z = 20.5 mA; P_Z = 105 mW. Regulation holds if I_Z stays within its limits as V_in and the load change. Modern supplies use linear regulators (LM7805, LDOs) and switching regulators (buck, boost, flyback), which are far more efficient.
- **Other circuits:** **clippers/limiters** (a diode with a bias voltage limits the output; protection of inputs); **clampers** (a capacitor and a diode shift the dc level of a waveform); **voltage doublers** and charge pumps; **peak detectors**; diode logic (AND/OR); **logarithmic amplifiers**.

### 2.3 Special diodes
**Schottky** (metal-semiconductor, V_F about 0.3 V and very fast, used in power supplies and RF), **LED** (light by recombination: R = (V_S - V_F)/I_F, for example (5 - 2)/20 mA = 150 Ω), **photodiode** (reverse-biased, current proportional to light), **solar cell**, **Zener**, **varactor**, **TVS** (transient voltage suppressor), **laser diode**.

## Chapter 3. The Bipolar Junction Transistor (BJT)

### 3.1 Structure and operation
An **npn** BJT has an emitter (heavily doped), a thin base and a collector. Terminal currents: I_E = I_C + I_B. **Active mode** (forward-active): the base-emitter junction is forward-biased and the base-collector junction is reverse-biased: **I_C = I_S e^(V_BE/V_T)** (the transconductance property), **I_C = β I_B**, I_E = (β + 1) I_B, α = I_C/I_E = β/(β + 1). Typical β = 50 to 300 (it varies widely between devices and with temperature, so good designs do not depend on it). V_BE ≈ 0.7 V.
- **Cutoff:** both junctions reverse-biased (I_C ≈ 0, the switch is off). **Saturation:** both forward-biased (V_CE(sat) ≈ 0.2 V, I_C < β I_B, the switch is on). **Early effect:** I_C increases slightly with V_CE: I_C = I_S e^(V_BE/V_T)(1 + V_CE/V_A), with output resistance r_o = V_A/I_C. pnp transistors work with all polarities reversed.

### 3.2 DC bias circuits
- **Fixed bias:** R_B from V_CC to the base: I_B = (V_CC - 0.7)/R_B; I_C = β I_B. With V_CC = 12 V and R_B = 282 kΩ: I_B = 40 μA, I_C = 4.0 mA (β = 100); with R_C = 2 kΩ, V_CE = 12 - 4(2) = 4 V (about the middle of the supply: good for symmetric swing). The Q-point moves in proportion to β: unacceptable.
- **Voltage-divider (universal) bias with an emitter resistor:** R_1 = 47 kΩ, R_2 = 10 kΩ, V_CC = 12 V: V_th = 12 × 10/57 = 2.105 V, R_th = R_1 ∥ R_2 = 8.25 kΩ. KVL around the base-emitter loop: V_th = I_B R_th + 0.7 + (β + 1) I_B R_E, so with R_E = 1 kΩ and β = 100: I_B = (2.105 - 0.7)/(8.25k + 101k) = 12.9 μA, **I_C = 1.29 mA**, V_CE = V_CC - I_C R_C - I_E R_E = 12 - 1.29(4.7) - 1.30(1) = 4.66 V (with R_C = 4.7 kΩ). Stability design rule: R_th ≪ (β + 1) R_E (here 8.25 kΩ versus 101 kΩ), so I_C ≈ (V_th - 0.7)/R_E almost independent of β.
- **Load line and Q-point:** plot I_C = (V_CC - V_CE)/R_C on the output characteristics; the Q-point sets the swing limits. **Thermal runaway** is prevented by emitter feedback.
- **BJT as a switch:** choose I_B for forced saturation: to switch I_C = 20 mA with a forced β of 10, I_B = 2 mA and R_B = (5 - 0.7)/2 mA = 2.15 kΩ (use 2.2 kΩ); add a diode across relay coils.

### 3.3 Small-signal model and amplifiers
At a bias I_C: **g_m = I_C/V_T**, **r_π = β/g_m**, **r_o = V_A/I_C**. For I_C = 1.29 mA: g_m = 49.8 mS and r_π = 2.0 kΩ. The hybrid-π model: i_c = g_m v_be (a voltage-controlled current source), with input resistance r_π.
- **Common-emitter (CE) amplifier** (emitter bypassed): **A_v = -g_m (R_C ∥ R_L ∥ r_o)**, large gain with phase inversion, R_in = R_th ∥ r_π, R_out ≈ R_C. For R_C = 4.7 kΩ, R_L = 10 kΩ: A_v = -49.8 mS × 3.2 kΩ = -159.
- **CE with an unbypassed emitter resistor:** A_v ≈ -R_C/R_E (here -4.7): much lower gain but stable and linear (negative feedback); R_in increases to about r_π + (β + 1) R_E = 103 kΩ.
- **Common-collector (emitter follower):** A_v ≈ 1 (slightly less), high input resistance, low output resistance (r_e + R_s/(β + 1)): a **buffer**. **Common-base:** A_v ≈ g_m R_C, low R_in, good high-frequency performance.
- **Capacitors:** coupling capacitors block dc; a bypass capacitor across R_E restores the gain at signal frequencies. The low-frequency cut-off from a coupling capacitor is f_L = 1/(2π R C): 13 Hz for 12 kΩ and 1 μF.
- **Multistage amplifiers:** gains multiply (and add in dB); loading between stages must be included.

## Chapter 4. The MOS Field-Effect Transistor (MOSFET)

### 4.1 Structure and I-V characteristics
An **n-channel enhancement MOSFET** has a gate separated by an oxide from a p-type body; a positive gate voltage above the **threshold voltage V_t** (about 0.5 to 1 V) induces an n-type channel between source and drain. The gate draws no dc current (insulated): I_G = 0. Let V_ov = V_GS - V_t (the overdrive voltage).
- **Cutoff:** V_GS < V_t: I_D = 0.
- **Triode (linear) region:** V_DS < V_ov: I_D = k_n[(V_GS - V_t) V_DS - V_DS²/2] where k_n = μ_n C_ox (W/L). For small V_DS the device is a voltage-controlled resistor r_ds = 1/(k_n V_ov): for k_n = 2 mA/V² and V_GS = 5 V, V_t = 1 V: 125 Ω.
- **Saturation (active) region:** V_DS ≥ V_ov: **I_D = (1/2) k_n V_ov² (1 + λ V_DS)**: the drain current is set by V_GS (a square law). For k_n = 2 mA/V², V_GS = 3 V, V_t = 1 V: I_D = 4 mA; with V_DD = 10 V and R_D = 1 kΩ: V_DS = 6 V ≥ V_ov = 2 V, so the device is in saturation.
- **p-channel (PMOS)**: all polarities reversed (V_GS, V_t, V_DS negative). **Depletion-mode** and JFET devices are other kinds. **Body effect** shifts V_t. **Channel-length modulation** gives r_o = 1/(λ I_D). Scaling (Moore's law) and short-channel effects (velocity saturation, leakage).

### 4.2 DC bias
- **Gate voltage divider with a source resistor:** V_G = V_DD R_2/(R_1 + R_2) = 3.33 V (R_1 = 2 MΩ, R_2 = 1 MΩ, V_DD = 10 V); with R_S = 1 kΩ solve I_D = (1/2) k_n (V_G - I_D R_S - V_t)²: I_D = 1.23 mA and V_S = 1.23 V. Using R_S stabilises the bias against variations in k_n and V_t.
- **Current mirror:** a diode-connected MOSFET sets V_GS and a matched transistor copies the current: I_out = I_ref (W/L)_2/(W/L)_1 in saturation; the basic building block of analog ICs (biasing and active loads).

### 4.3 Small-signal model and amplifiers
**g_m = k_n V_ov = 2 I_D/V_ov** (4 mS for the 4 mA example); **r_o = 1/(λ I_D)**.
- **Common-source (CS) amplifier:** **A_v = -g_m (R_D ∥ R_L ∥ r_o)** = -4 mS × 1 kΩ = -4 (R_L = ∞), and -2 with R_L = 1 kΩ; R_in = R_G (very high); R_out ≈ R_D. With an unbypassed source resistor A_v ≈ -g_m R_D/(1 + g_m R_S).
- **Source follower (common-drain):** A_v = g_m R/(1 + g_m R) < 1; very high input resistance and low output resistance (≈ 1/g_m): a buffer. **Common-gate** for high-frequency use. Compared with BJTs, MOSFETs have a lower g_m for the same current but infinite dc input resistance and are easy to integrate.

### 4.4 The MOSFET as a switch and CMOS logic
In digital circuits the transistors act as switches (cutoff or triode). **CMOS inverter:** a PMOS pull-up and an NMOS pull-down driven by the same input: V_out = V_DD when V_in = 0 and V_out = 0 when V_in = V_DD; there is no static current path (only leakage), so **static power is almost zero**. The transfer curve has a sharp transition at the threshold V_M ≈ V_DD/2 for balanced devices. **Noise margins:** NM_H = V_OH - V_IH, NM_L = V_IL - V_OL. **Dynamic power:** **P = α C V_DD² f** (switching activity α, load capacitance C): for α = 0.1, C = 1 nF, V_DD = 1 V and f = 2 GHz: 0.2 W. **Delay** t_p ≈ 0.69 R_on C_L. **NAND** gates have series NMOS and parallel PMOS; **NOR** gates the reverse. Transmission gates, pass-transistor logic, and the DRAM and SRAM cells are also MOS circuits.

## Chapter 5. Amplifier Concepts and Frequency Response

- **Amplifier models:** voltage amplifier (R_in, A_vo, R_out): v_o = A_vo v_i R_L/(R_L + R_out) (loading); gain in decibels: A_v(dB) = 20 log10|A_v| (-159 is 44 dB); power gain 10 log10 P_out/P_in; cascade by multiplying gains.
- **Frequency response:** low-frequency cut-off from coupling and bypass capacitors; high-frequency cut-off from transistor capacitances (C_π, C_μ for BJTs; C_gs, C_gd for MOSFETs). The **Miller effect** multiplies the feedback capacitance by (1 - A_v): C_gd = 2 pF with A_v = -10 gives an input capacitance contribution of 22 pF, which limits the bandwidth of high-gain stages. The **gain-bandwidth product** of a single-pole amplifier is constant (op-amp GBW).
- **Differential pair:** two matched transistors sharing a tail current; it amplifies the difference v_1 - v_2 (differential gain A_d = g_m R_D for a MOS pair) and rejects the common-mode signal (CMRR); it is the input stage of every op-amp. A real op-amp has finite gain and bandwidth, offset voltage, bias current, slew rate and output swing limits.
- **Distortion and linearity:** small-signal analysis is valid for signals smaller than about 10 mV for a BJT (V_T) and a fraction of V_ov for a MOSFET. **Class A, B, AB** power amplifiers differ in conduction angle (efficiency 25 percent, 78.5 percent, and between).

## Chapter 6. Practical Matters
- **Datasheets:** absolute maximum ratings (V_CEO, I_C(max), P_D), typical and minimum β (h_FE), V_CE(sat), V_th, R_DS(on), capacitances, thermal resistance.
- **Thermal design:** junction temperature T_J = T_A + P_D θ_JA; dissipating 2 W with θ_JA = 50 °C/W at 25 °C ambient gives T_J = 125 °C (the usual limit is 150 °C); heat sinks lower θ.
- **Simulation:** SPICE (LTspice, ngspice) for DC operating point, transient and AC analysis; always check the simulator against hand calculations.
- **Safety and ESD:** MOS gates are destroyed by electrostatic discharge; use grounding and protection diodes.

## Chapter 7. Common Mistakes Checklist
1. Using the 0.7 V model for a diode that is in fact reverse-biased, and not checking the assumed state afterwards.
2. Confusing DC and small-signal analysis: capacitors are open for DC and short (at mid-band) for AC; DC sources become ground in the small-signal circuit.
3. Using r_π = V_T/I_C instead of β V_T/I_C, or computing g_m from the wrong bias current.
4. Applying the saturation equation without verifying V_DS ≥ V_ov (or V_CE > V_CE(sat) for the BJT).
5. Forgetting the sign of the gain (inversion) and the loading by R_L or by the next stage.
6. Taking β as a precise number in a design: bias circuits must tolerate its variation.
7. Neglecting the direction conventions of pnp and p-channel devices.
8. Ignoring power and temperature limits.
