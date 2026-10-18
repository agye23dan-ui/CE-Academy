# Power Electronics and Energy Systems: Complete Lecture Notes

Prerequisites: circuit analysis, electronics, signals and systems (Fourier series), electromagnetics basics, and control systems. Numbers in the worked examples were computed in Python; the buck and boost converters were also simulated in the time domain (switch-by-switch integration of the circuit equations) and the simulated averages and ripples match the formulas below. PWM harmonic amplitudes come from an FFT of a simulated waveform.

## Chapter 1. Power Conversion Fundamentals

### 1.1 What power electronics does
Power electronics processes electrical energy with **semiconductor switches** to convert voltage, current and frequency efficiently. Four conversion types: **AC-DC** (rectifiers), **DC-DC** (choppers, switch-mode supplies), **DC-AC** (inverters) and **AC-AC** (cycloconverters, matrix converters, AC regulators). Switches operate either fully ON (small voltage drop) or fully OFF (small current), so ideally they dissipate no power. Efficiency η = P_out/P_in; cascaded stages multiply: 0.95 × 0.97 × 0.96 = **0.885**.

### 1.2 Design drivers
Efficiency, power density, cost, reliability, EMI, power factor and harmonic limits, thermal limits, and safety. Linear regulators waste (V_in - V_out) I; a 12 V to 3.3 V linear regulator at 5 A burns 43.5 W with 27.5 percent efficiency, while a switching converter achieves 90 to 95 percent (a synchronous buck delivering 16.5 W with 1.1 W loss has η = **93.75 percent**).

### 1.3 Averages, rms and harmonics
Average value (the dc component), rms value (heating effect), form factor FF = V_rms/V_avg, ripple factor RF = √(FF² - 1). For periodic waveforms use Fourier series; real power only arises from voltage and current harmonics of the same order.

## Chapter 2. Power Semiconductor Devices

### 2.1 Device types
- **Power diode**: uncontrolled, reverse recovery limits speed; Schottky diodes have a low forward drop (0.3 to 0.5 V) and no recovery but low voltage ratings.
- **Thyristor (SCR)**: turned on by a gate pulse, turns off when current falls below the holding value (line commutation); used at high power in rectifiers and HVDC.
- **Power MOSFET**: voltage-controlled, fast (hundreds of kHz to MHz), conduction loss I²R_on; best below about 600 V.
- **IGBT**: voltage-controlled with a bipolar output; low conduction drop at high voltage/current (600 V to 6.5 kV), switching up to tens of kHz.
- **Wide-bandgap devices (SiC MOSFETs, GaN HEMTs)**: lower R_on and faster switching, higher temperature capability; allow smaller magnetics and higher efficiency.

### 2.2 Losses
**Conduction loss** P_c = I_rms² R_on (or V_F I_avg for diodes); **switching loss** P_sw ≈ ½ V I (t_r + t_f) f_s; gate-drive loss Q_g V_g f_s; diode recovery loss. Example: MOSFET with R_on = 10 mΩ carrying 20 A at duty cycle 0.5: P_c = 20² × 0.010 × 0.5 = **2.0 W**; switching at 48 V, 20 A, t_r = t_f = 20 ns, f_s = 100 kHz: P_sw = 0.5 × 48 × 20 × 40 ns × 100 kHz = **1.92 W**; total 3.9 W; gate drive for Q_g = 40 nC at 10 V: 0.04 W.

### 2.3 Thermal design
Steady-state junction temperature T_j = T_a + P (R_θjc + R_θcs + R_θsa). With R_θjc = 0.5, R_θcs = 0.2, R_θsa = 2.3 °C/W and T_a = 40 °C: T_j = 40 + 3.92 × 3.0 = **51.8 °C** (comfortable). Without a heat sink (R_θja about 62 °C/W) the same device would reach 285 °C, far beyond the 150 to 175 °C limit. The maximum dissipation for T_j = 125 °C is (125 - 40)/3.0 = **28 W**. Use thermal derating, check transient thermal impedance for pulses, and allow for temperature-dependent R_on (it rises about 1 percent per °C).

### 2.4 Gate drive, protection, snubbers
Gate drivers supply peak current to charge C_iss quickly (ns) with isolation for high-side switches (bootstrap or isolated supply). Protect against over-current (desaturation detection, shunt sensing), over-voltage (snubbers, TVS diodes), shoot-through (dead time) and dv/dt. Layout with low loop inductance matters: V = L di/dt spikes of 20 nH × 1 A/ns = 20 V.

## Chapter 3. Rectifiers and AC-DC Conversion

### 3.1 Uncontrolled rectifiers
For a sinusoidal source with rms voltage V_rms = 230 V (V_m = 325.3 V) feeding a resistor:
- **Half-wave**: V_avg = V_m/π = **103.5 V**, V_rms,out = V_m/2 = 162.6 V, FF = π/2 = 1.571, RF = 1.21.
- **Full-wave (bridge)**: V_avg = 2V_m/π = **207.1 V**, V_rms,out = V_m/√2 = 230 V, FF = 1.111, RF = 0.483. Rectification efficiency P_dc/P_ac = (2V_m/π)²/(V_rms²) = **81 percent** (the ripple power is wasted in the load but is not useful dc).
- **Three-phase six-pulse bridge**: V_avg = 3V_m,LL/π = 1.35 V_LL: for 400 V line-to-line, **540 V**; output ripple at 6 f = 300 Hz, much smaller than single-phase.
A **capacitor filter** holds the output near V_m: ripple ΔV ≈ I/(2 f C) for a full-wave rectifier. For I_dc = 2 A, f = 50 Hz and C = 2,200 µF: ΔV = 9.1 V and V_dc ≈ 320.7 V. The input current becomes narrow peaks (high harmonics), with THD of 80 percent or more and power factor near 0.78.

### 3.2 Phase-controlled rectifiers
A fully controlled thyristor bridge delays firing by angle α: V_dc = (2V_m/π) cos α (continuous current). For V_m = 325 V: α = 0 → 207.1 V; 30° → **179.3 V**; 60° → **103.5 V**; 90° → 0 V; α > 90° makes V_dc negative (inversion, regenerating energy to the supply if the load can provide it). The price is a lagging displacement power factor cos α and harmonic currents. Used for DC motor drives, battery chargers and HVDC.

### 3.3 Input current harmonics and power factor correction
For non-sinusoidal current the power factor PF = P/(V_rms I_rms) = (I₁/I_rms) cos φ₁ = distortion factor × displacement factor, with distortion factor 1/√(1 + THD²). THD = 30 percent → 0.958; THD = 80 percent (simple diode-capacitor input) → 0.781. With a displacement factor of 0.95 and THD 30 percent: PF = 0.95 × 0.958 = **0.910**. A six-pulse converter has current harmonics 5, 7, 11, 13, ... of amplitude about 1/h, giving THD ≈ 29 percent; a twelve-pulse arrangement cancels the 5th and 7th harmonics (THD ≈ 13 percent). **Active power-factor correction** uses a boost converter to force the input current to follow the voltage, achieving PF above 0.99 (required in supplies above 75 W by IEC 61000-3-2).

## Chapter 4. DC-DC Converters

### 4.1 Buck converter (step-down)
In continuous conduction mode (CCM) V_o = D V_in. Inductor current ripple ΔI_L = (V_in - V_o) D/(L f_s); output voltage ripple ΔV_o ≈ ΔI_L/(8 f_s C). **Worked example.** V_in = 24 V, D = 0.5, L = 100 µH, C = 47 µF, f_s = 100 kHz, load 6 Ω. Then V_o = **12 V**, I_o = 2 A, ΔI_L = 12 × 0.5 × 10 µs/100 µH = **0.6 A**, ΔV_o = 0.6/(8 × 10⁵ × 47×10⁻⁶) = **16 mV**. A switch-by-switch simulation gave V_o = 11.996 V, I_L,avg = 2.0006 A, ripple 0.600 A and 16.1 mV, confirming the formulas. CCM holds while I_o > ΔI_L/2 = 0.3 A; below that the converter enters **discontinuous mode (DCM)** and the gain depends on load. The minimum inductance for CCM at I_o = 0.5 A is L = (1 - D) V_in D/(2 f_s I_o) = 0.5 × 24 × 0.5/(2 × 10⁵ × 0.5) = **60 µH**. Switch current peak = I_o + ΔI_L/2.

### 4.2 Boost converter (step-up)
V_o = V_in/(1 - D); inductor current average I_L = I_o/(1 - D) = V_in/(R(1 - D)²); ΔI_L = V_in D/(L f_s); ΔV_o ≈ I_o D/(f_s C). **Worked example.** V_in = 12 V, D = 0.6, L = 150 µH, C = 100 µF, f_s = 50 kHz, R = 30 Ω: V_o = **30 V**, I_o = 1 A, I_L = 2.5 A, ΔI_L = 12 × 0.6/(50 kHz × 150 µH) = **0.96 A**, ΔV_o = 1 × 0.6/(50 kHz × 100 µF) = **0.12 V**. Simulation: V_o = 29.995 V, I_L = 2.495 A, ΔI_L = 0.960 A, ripple 0.120 V. Because the input current is the inductor current (continuous) boost converters are used for power-factor correction and for step-up in PV and battery systems. The right-half-plane zero limits the control bandwidth. Do not run a boost converter open loop into a light load: output voltage can rise dangerously.

### 4.3 Buck-boost and other topologies
Inverting buck-boost: V_o = -D V_in/(1 - D); for D = 0.4 and V_in = 12 V, V_o = **-8 V**. Non-inverting four-switch buck-boost, Ćuk and SEPIC converters regulate across the input range of a battery. **Isolated** converters use a transformer: **flyback** (low power, up to about 100 W), **forward**, **push-pull**, **half/full bridge**, and resonant **LLC** (high efficiency with soft switching). Transformer turns ratio provides isolation for safety and wide voltage ratios: V_o = D (N₂/N₁) V_in for a forward converter.

### 4.4 Control of converters
Voltage-mode control (PWM compares an error amplifier output with a ramp) and **peak current-mode control** (inner current loop, easier compensation, automatic over-current limit). Design the compensator for the small-signal control-to-output transfer function; target a crossover frequency around f_s/10 to f_s/5, a phase margin of 45° or more. Include slope compensation for current mode at D > 0.5. Digital control (DSP/MCU) adds sampling delay; consider quantization and limit cycles.

### 4.5 Practical design notes
Select L for ripple of 20 to 40 percent of I_o, C for ripple including ESR (ΔV = ΔI_L × ESR often dominates for electrolytics), diodes or synchronous MOSFETs for efficiency, inductor saturation current above the peak, and input capacitors for the pulsed current. The energy stored in the inductor ½ L I² = 0.31 mJ for 100 µH at 2.5 A; in the capacitor ½ C V² = 3.4 mJ for 47 µF at 12 V. Layout: keep high di/dt loops small; use a solid ground plane.

## Chapter 5. Inverters (DC-AC)

### 5.1 Single-phase inverters
A full-bridge inverter with dc bus V_dc: **square-wave** operation gives an output of ±V_dc whose fundamental has peak (4/π) V_dc, i.e. rms 0.9 V_dc: for V_dc = 400 V, V_1,rms = **360 V**. Harmonics are odd with amplitude 1/h (the third is exactly one third of the fundamental, verified by FFT), and THD = √(π²/8 - 1) = **48.3 percent**. Bipolar or unipolar **sinusoidal PWM (SPWM)** compares a sinusoidal reference with a triangular carrier: the amplitude modulation index m_a = V_ref/V_carrier and frequency ratio m_f = f_carrier/f_ref. In the linear range (m_a ≤ 1) the fundamental amplitude is m_a V_dc: for m_a = 0.8 and V_dc = 400 V, V_1,rms = 0.8 × 400/√2 = **226 V**.

### 5.2 PWM harmonics
SPWM pushes harmonics to sidebands around multiples of m_f, which are easy to filter with a small LC filter. From a simulated waveform (normalized to V_dc, m_f = 21): for m_a = 0.8 the fundamental is 0.800 and the harmonic at h = m_f is **0.818**, at m_f ± 2 (19 and 23) **0.220**, and at 2m_f ± 1 (41 and 43) **0.314**; for m_a = 1.0 the component at m_f is 0.601 and at m_f ± 2 it is 0.318. Doubling m_f to 41 moves the same clusters to h = 41, 39 and 43, and 81 and 83. The higher the carrier frequency the smaller the output filter, but switching loss rises with f_s. Over-modulation (m_a > 1) increases the fundamental until six-step (square) operation but adds low-order harmonics.

### 5.3 Three-phase inverters
Six switches in three legs. With sinusoidal PWM in the linear region the line-to-line rms voltage is V_LL = 0.612 m_a V_dc; at V_dc = 600 V and m_a = 0.9: **330 V**. **Six-step** operation gives V_LL = 0.78 V_dc = 468 V at V_dc = 600 V. **Space vector PWM** uses the eight switching states to utilize the dc bus 15 percent better than SPWM (maximum m_a = 1.155). Dead time prevents shoot-through; output filters (LC or LCL) reduce dv/dt and harmonics. Applications: motor drives, UPS, grid-tied PV and wind inverters, electric vehicles.

### 5.4 Grid-connected inverters
Control a current in phase with the grid voltage using a phase-locked loop (PLL) and a dq-frame PI controller; support anti-islanding, ride-through and reactive power per grid codes (IEEE 1547, IEC 61727). A 5 kW inverter with 96.5 percent efficiency delivers 4.825 kW to the grid. LCL filters need damping to avoid resonance.

## Chapter 6. Electric Drives

### 6.1 DC motor drives
Armature voltage control: a chopper (buck) with duty D from a 220 V supply gives V_a = D × 220 V; D = 0.6 → **132 V**. Four-quadrant H-bridge allows reversal and regenerative braking. A cascaded current loop, speed loop and optional position loop control the motor; field weakening extends the speed range.

### 6.2 AC induction motor drives
Synchronous speed N_s = 120 f/P: a 4-pole machine at 50 Hz turns the field at **1,500 rpm** (2-pole: 3,000 rpm; 6-pole: 1,000 rpm; 4-pole at 60 Hz: 1,800 rpm). With slip s = 4 percent the rotor speed is 1,440 rpm and the slip speed 60 rpm. For a 7.5 kW shaft output: torque = P/ω = 7,500/150.8 = **49.7 N·m**, air-gap power P/(1 - s) = 7.81 kW and rotor copper loss s P_ag = **312 W**. **Scalar V/f control** keeps V/f constant to maintain flux: at 30 Hz a 400 V/50 Hz motor receives 240 V and has N_s = 900 rpm; boost the voltage at low frequency to overcome stator resistance. **Vector (field-oriented) control** decouples flux and torque in a rotating dq frame for fast torque response; **direct torque control** is an alternative.

### 6.3 BLDC and PMSM drives
Permanent-magnet machines with inverter commutation by Hall sensors (six-step) or sinusoidal field-oriented control; high torque density and efficiency, used in EVs, robots and appliances.

## Chapter 7. Magnetics and Passive Components

### 7.1 Transformers
Ideal ratio V₁/V₂ = N₁/N₂. Real losses: core (iron) loss P_c roughly constant, copper loss P_cu ∝ load². **Example.** 10 kVA, 2400/240 V transformer with P_c = 100 W and P_cu(full load) = 150 W. Efficiency = x S cos φ/(x S cos φ + P_c + x² P_cu): at full load and 0.8 pf: 8000/(8000 + 100 + 150) = **96.97 percent**; at half load: **96.68 percent**; at full load and unity pf: 97.56 percent. Maximum efficiency occurs when copper loss equals core loss, at load fraction √(P_c/P_cu) = **0.816**, where η = 97.03 percent at 0.8 pf. All-day efficiency matters for distribution transformers.
**Voltage regulation.** With equivalent impedance referred to the secondary of 1 percent resistance and 3 percent reactance (R_eq = 0.0576 Ω, X_eq = 0.1728 Ω on the 240 V side, rated current 41.7 A), the no-load voltage required for 240 V at the load is 246.3 V at 0.8 lagging pf (regulation **2.62 percent**), 242.5 V at unity (1.04 percent) and 237.7 V at 0.8 leading (-0.95 percent, a rise in voltage on load).

### 7.2 Inductors and high-frequency magnetics
Design for the required inductance and peak current without saturation (B_max below the saturation flux density with an air gap for energy storage), losses (core loss increases with frequency and ripple, copper loss from skin and proximity effects), and thermal limits. Litz wire reduces high-frequency copper loss. Capacitors: electrolytic (large C, high ESR, limited life that halves per 10 °C rise), film (low loss, ripple current), ceramic (low ESR, voltage coefficient). Select by ripple-current rating and ESR.

## Chapter 8. Three-Phase Power, Power Quality and Per-Unit Analysis

### 8.1 Three-phase power
P = √3 V_LL I_L cos φ; Q = √3 V_LL I_L sin φ; S = √3 V_LL I_L. A 100 kW load at 400 V and pf 0.8 draws I = 100,000/(√3 × 400 × 0.8) = **180.4 A**. Balanced three-phase systems carry constant instantaneous power, reducing torque ripple in motors.

### 8.2 Power-factor correction with capacitors
To raise pf from 0.8 to 0.95 at P = 100 kW: Q₁ = P tan(cos⁻¹ 0.8) = 75 kvar; Q₂ = P tan(cos⁻¹ 0.95) = 32.9 kvar; capacitor bank Q_c = **42.1 kvar**. For delta-connected capacitors at 400 V, 50 Hz: C = Q_c/(3 ω V²) = **279 µF per phase**. The line current falls from 180.4 A to 151.9 A (a 16 percent reduction), and I²R line losses fall to **71 percent** of their original value. Beware of resonance with harmonics (detuned reactors) and over-correction.

### 8.3 Transmission and per-unit
Raising voltage reduces current for the same power and cuts I²R loss: transmitting 1 MW at unity pf over a line with 2 Ω per phase costs 3I²R = 16.5 kW at 11 kV (I = 52.5 A) but only **1.8 kW at 33 kV** (I = 17.5 A), a factor of 9. In the **per-unit system**, choose S_base and V_base; Z_base = V_base²/S_base. For 10 MVA and 11 kV, Z_base = 12.1 Ω, so 5 Ω is 0.413 pu. Per-unit quantities remove transformer ratios and simplify analysis of large systems.

## Chapter 9. Renewable Energy and Storage Systems

### 9.1 Photovoltaic (PV) systems
A cell is modelled as a current source in parallel with a diode: I = I_ph - I_0 (e^(V/V_t) - 1) (plus series and shunt resistance in refined models). For a 60-cell module with I_sc = 9.5 A and V_oc = 40 V, the model gives a maximum power point (MPP) near **34.5 V and 9.0 A, about 311 W**, a fill factor FF = P_mp/(V_oc I_sc) ≈ 0.82 (real modules with series resistance have FF ≈ 0.72 to 0.80, hence the 300 W rating). Current is proportional to irradiance; at 50 percent irradiance I_sc halves while V_oc falls only logarithmically (to 38.7 V) so the maximum power is **48 percent** of its full value. Voltage falls with temperature and power by about 0.35 percent per °C: a cell at 65 °C produces 300 × (1 - 0.0035 × 40) = **258 W**. A 300 W panel with 5 peak sun hours and 80 percent system efficiency yields **1.2 kWh/day** (438 kWh/year).
**MPPT.** The perturb-and-observe algorithm changes the operating voltage by a small step and keeps moving in the direction that increases power. Starting at 30 V with a 0.5 V step, our simulation climbed to the MPP and then oscillated between 34.0 and 35.0 V (power 310 W, a loss under 0.3 percent); incremental conductance and constant-voltage methods are alternatives. MPPT is implemented by a boost or buck converter (or the inverter itself). Partial shading creates multiple power peaks: use bypass diodes and global search.

### 9.2 Wind energy
P = ½ ρ A C_p v³ with air density ρ = 1.225 kg/m³, swept area A = π R² and power coefficient C_p ≤ 0.593 (the Betz limit). For R = 40 m (A = 5,027 m²), C_p = 0.45 and v = 12 m/s: P = 0.5 × 1.225 × 5,027 × 0.45 × 12³ = **2.39 MW**. Power scales with v³: doubling the wind speed gives eight times the power. Modern turbines use variable speed with a power-electronic converter (DFIG with partial-scale converter, or full-scale converter with PMSG), pitch control to limit power above rated speed, and maximum power point tracking below rated.

### 9.3 Energy storage
- **Batteries**: lithium-ion (high energy density, 3.7 V nominal cells; a 14s3p pack of 3 Ah cells has 51.8 V nominal, 9 Ah, 466 Wh, 58.8 V full, 42 V cutoff; 30 A is a 3.3C discharge; runtime at 500 W with 90 percent usable energy is 0.84 h), lead-acid (cheap, heavy), flow batteries, sodium-ion. Charge Li-ion with **CC-CV** (constant current to 4.2 V per cell, then constant voltage until the current tapers); a battery management system (BMS) provides cell balancing, protection and state-of-charge estimation (coulomb counting plus voltage models/Kalman filtering). The charging time to 80 percent at 0.5C for a 3 Ah cell is 1.6 h.
- **Peukert's law** for lead-acid: t = H (C/(I H))^k. A 100 Ah (20-hour) battery with k = 1.2: at 5 A it lasts 20 h (100 Ah); at 20 A, 3.8 h (75.8 Ah delivered); at 50 A, 1.26 h (63 Ah): high currents reduce usable capacity.
- **Sizing**: for a 10 kWh/day load with two days of autonomy, 80 percent depth of discharge and 90 percent round-trip efficiency: 10 × 2/(0.8 × 0.9) = **27.8 kWh**.
- Other storage: supercapacitors (fast, low energy), flywheels, pumped hydro, hydrogen.

### 9.4 Microgrids, standards and economics
A microgrid combines sources, storage, loads and a controller that can operate grid-connected or islanded. Droop control shares power among inverters without communication. Economic evaluation: capital recovery factor CRF = r(1 + r)ⁿ/((1 + r)ⁿ - 1); for 7 percent and 25 years CRF = 0.0858. A PV system costing $1,000/kW with $15/kW-year O&M and 1,700 kWh/kW-year yield has LCOE = (1000 × 0.0858 + 15)/1700 = **$0.059/kWh**. Compare with grid tariffs, include degradation, inverter replacement and incentives.

## Chapter 10. Safety, EMC and Standards
- **Safety**: high voltages and stored energy (capacitors stay charged: bleeder resistors, discharge before service), isolation barriers, creepage and clearance distances, ground-fault protection, fuses/breakers, interlocks, lockout-tagout. Standards: IEC 62477-1 (power converter safety), IEC 60950/62368 (equipment), UL 1741 and IEEE 1547 (grid interconnection).
- **EMI/EMC**: fast edges cause conducted and radiated noise; reduce with soft switching, slower edges where acceptable, input filters (common-mode choke, X and Y capacitors), shielding, small loop areas, proper grounding. Limits: CISPR 11/32, FCC Part 15.
- **Reliability**: derate components (60 to 80 percent of ratings), thermal cycling, electrolytic capacitor life, test under abnormal conditions (short circuit, over-temperature, start-up).

## Chapter 11. Design Method and Mistakes Checklist
1. Specify input and output ranges, power, efficiency, ripple, isolation, environment and standards.
2. Choose the topology (buck, boost, flyback, bridge, inverter) from the voltage ratio, power and isolation needs.
3. Compute duty cycle, inductor and capacitor values, device stresses (voltage, peak and rms current), and losses; select devices with 20 to 30 percent margin.
4. Do the thermal analysis and heat sink design; check worst-case ambient temperature.
5. Design the control loop and protections; simulate (SPICE, PLECS, Simulink); then build a prototype and measure efficiency, ripple, transient response and EMI.
6. Review safety, reliability and manufacturability.

**Common mistakes.** Using linear regulators where losses are unacceptable; ignoring inductor saturation or ripple current in capacitors; not allowing for light-load DCM operation; running a boost converter open loop; omitting dead time, gate-drive protection or snubbers; neglecting layout inductance; forgetting temperature effects on R_on and magnetics; connecting capacitor banks without considering harmonic resonance; mixing line-to-line and phase quantities; and measuring waveforms with ground-lead artifacts.
