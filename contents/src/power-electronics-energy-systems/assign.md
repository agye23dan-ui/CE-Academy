# Power Electronics and Energy Systems: Assignments with Worked Solutions

Show formulas, substitute numbers and state assumptions (ideal switches and continuous conduction unless told otherwise). All numerical answers below were computed in Python; converter formulas were checked by time-domain simulation and PWM harmonic amplitudes by FFT.

# Assignment 1: Devices, Losses and Rectifiers (70 marks)

## Questions

**Q1. Linear versus switching (8 marks)** A load takes 5 V at 2 A from a 15 V source. (a) Find the power loss and efficiency of a linear regulator [3]. (b) A buck converter has 1.5 W total loss for the same load; find its efficiency [3]. (c) Give one advantage of the linear regulator [2].

**Q2. MOSFET loss and thermal design (16 marks)** A MOSFET switches 10 A at 100 V, f_s = 200 kHz, duty cycle 0.7, with R_on = 25 mΩ and t_r = t_f = 30 ns. (a) Compute the conduction loss and switching loss [6]. (b) With R_θjc = 1.0, R_θcs = 0.3 and R_θsa = 4.0 °C/W and ambient 50 °C, find the junction temperature [4]. (c) What heat sink thermal resistance R_θsa keeps T_j below 110 °C? [4] (d) Name two ways to reduce switching loss [2].

**Q3. Single-phase rectifiers (18 marks)** The supply is 120 V rms. (a) Find the average and rms output voltage of a half-wave rectifier with a resistive load [4]. (b) Repeat for a full-wave bridge [4]. (c) A 50 Ω load on the bridge: dc power, ac power at the load rms voltage and rectification efficiency [4]. (d) For a 1 A load, 60 Hz and C = 4,700 µF find the approximate ripple of a capacitor-filtered bridge [3]. (e) Why is the input current of this circuit rich in harmonics? [3]

**Q4. Controlled rectifier (8 marks)** A single-phase fully controlled bridge supplied from 120 V rms feeds a highly inductive load. (a) Find the average output for α = 0°, 45° and 90° [5]. (b) Explain what α > 90° means [3].

**Q5. Three-phase and power quality (12 marks)** (a) A three-phase six-pulse diode bridge is supplied from 208 V line-to-line: find the average dc voltage and the current in a 20 Ω load [4]. (b) A load has THD = 40 percent and displacement factor 0.92; find the distortion factor and the power factor [4]. (c) Estimate the THD of a six-pulse rectifier current using harmonics 5, 7, 11, 13, 17, 19, 23, 25 of amplitude 1/h and say how a twelve-pulse connection helps [4].

**Q6. Safety (4 marks)** Why must the dc-link capacitor of a converter be discharged before service, and how is it done?

## Solutions

**Q1.**
(a) P_loss = (V_in - V_out) I = (15 - 5) × 2 = **20 W**; efficiency = 10/30 = **33.3 percent**.
(b) η = P_out/(P_out + P_loss) = 10/(10 + 1.5) = **87.0 percent**.
(c) Simplicity, low noise and ripple (no switching), small size at low power, no EMI, fast transient response, low cost.

**Q2.**
(a) P_c = I² R_on D = 10² × 0.025 × 0.7 = **1.75 W**; P_sw = ½ V I (t_r + t_f) f_s = 0.5 × 100 × 10 × 60 ns × 200 kHz = **6.0 W**. Total = **7.75 W**.
(b) T_j = T_a + P (R_θjc + R_θcs + R_θsa) = 50 + 7.75 × 5.3 = **91.1 °C**.
(c) 110 = 50 + 7.75 (1.3 + R_θsa) → R_θsa = 60/7.75 - 1.3 = **6.44 °C/W** (any heat sink at or below this value works; use margin, e.g. 4 °C/W).
(d) Lower the switching frequency, use faster devices (SiC/GaN) or lower gate resistance (within EMI limits), soft switching (ZVS/ZCS), reduce the switched voltage or current, use a snubber that recovers energy, and minimize layout inductance.

**Q3.**
(a) V_m = 120√2 = 169.7 V. Half-wave: V_avg = V_m/π = **54.0 V**; V_rms = V_m/2 = **84.9 V**.
(b) Full-wave: V_avg = 2V_m/π = **108.0 V**; V_rms = V_m/√2 = **120 V**.
(c) P_dc = V_avg²/R = 108.0²/50 = **233 W**; P_ac = 120²/50 = **288 W**; efficiency = 233/288 = **81.1 percent**.
(d) ΔV ≈ I/(2 f C) = 1/(2 × 60 × 4,700×10⁻⁶) = **1.77 V** peak-to-peak.
(e) The diodes conduct only when the supply voltage exceeds the capacitor voltage, near the peak, so the input current is a train of narrow pulses (THD often 80 percent or more, power factor about 0.7 to 0.8). Remedies: line inductors, passive filters, or active PFC.

**Q4.**
(a) V_dc = (2V_m/π) cos α: α = 0: **108.0 V**; α = 45°: 108.0 × 0.7071 = **76.4 V**; α = 90°: **0 V**.
(b) For α > 90° the average output voltage is negative; with a load that can supply energy (a DC motor during regenerative braking or a battery/dc source) the converter operates as an inverter, returning power to the ac line; the thyristors need a safety margin on the commutation angle.

**Q5.**
(a) V_dc = 1.35 V_LL = 1.35 × 208 = **280.8 V**; I = 280.8/20 = **14.04 A**.
(b) Distortion factor = 1/√(1 + 0.4²) = **0.928**; PF = 0.928 × 0.92 = **0.854**.
(c) THD = √(1/5² + 1/7² + 1/11² + 1/13² + 1/17² + 1/19² + 1/23² + 1/25²) = √(0.04 + 0.0204 + 0.00826 + 0.00592 + 0.00346 + 0.00277 + 0.00189 + 0.0016) = **29 percent**. A twelve-pulse rectifier (two bridges fed with 30° phase-shifted voltages) cancels the 5th, 7th, 17th and 19th harmonics in the supply current, leaving 11, 13, 23, 25 and a THD of about **13 percent**.

**Q6.** Capacitors can retain a lethal charge for minutes after power is removed (energy ½ C V²; for 1,000 µF at 400 V it is 80 J). Use bleeder resistors across the capacitor and check with a meter before touching the circuit; follow lockout-tagout.

# Assignment 2: DC-DC Converters and Inverters (70 marks)

## Questions

**Q1. Buck converter design (20 marks)** Design a buck converter: V_in = 48 V, V_o = 12 V, I_o = 5 A, f_s = 200 kHz, inductor ripple 30 percent of I_o, output voltage ripple 50 mV peak-to-peak. (a) Duty cycle [2]. (b) Inductance [5]. (c) Capacitance (ignore ESR) [5]. (d) Peak inductor current and the load current below which the converter enters DCM [4]. (e) State two reasons for choosing a higher switching frequency and two against [4].

**Q2. Boost converter design (16 marks)** V_in = 5 V, V_o = 12 V, I_o = 1 A, f_s = 100 kHz, inductor ripple 0.5 A, output ripple 60 mV. (a) Duty cycle [2]. (b) Average inductor current [3]. (c) Inductance [4]. (d) Output capacitance (use ΔV = I_o D/(f_s C)) [3]. (e) Peak inductor current and input power for 92 percent efficiency [4].

**Q3. Buck-boost and isolated converters (8 marks)** (a) An inverting buck-boost converter has V_in = 12 V and requires V_o = -18 V; find D [3]. (b) A forward converter has N₂/N₁ = 0.5, V_in = 48 V and D = 0.4; find V_o [3]. (c) Why is isolation used? [2]

**Q4. Inverters (16 marks)** (a) A single-phase full bridge with V_dc = 300 V is used with SPWM, m_a = 0.9: find the fundamental rms voltage [3]. (b) The carrier ratio is m_f = 31; from a simulation the normalized harmonic amplitudes are 0.712 at h = 31, 0.268 at h = 29 and 33, and 0.255 at h = 61 and 63. Identify the harmonic groups and state the filtering consequence [5]. (c) For a three-phase SPWM inverter with V_dc = 300 V, m_a = 0.9, find the line-to-line rms voltage; in six-step operation; and the maximum with space-vector PWM (m_a up to 1.155) [6]. (d) Why is dead time needed? [2]

**Q5. Control and stability (6 marks)** (a) What is the advantage of peak current-mode control in a buck converter? [3] (b) Why does a boost converter have a right-half-plane zero and what does it limit? [3]

**Q6. Efficiency budget (4 marks)** A 100 W boost converter at 12 V in and 48 V out has losses: MOSFET 2.1 W, diode 1.4 W, inductor 1.8 W, capacitor ESR 0.4 W, gate drive 0.3 W. Find the efficiency and the input power.

## Solutions

**Q1.**
(a) D = V_o/V_in = 12/48 = **0.25**.
(b) ΔI_L = 0.3 × 5 = 1.5 A. L = (V_in - V_o) D/(f_s ΔI_L) = 36 × 0.25/(200×10³ × 1.5) = **30 µH**.
(c) C = ΔI_L/(8 f_s ΔV_o) = 1.5/(8 × 200×10³ × 0.05) = **18.75 µF** (choose at least 22 µF ceramic; with electrolytics the ESR term ΔI_L × ESR usually dominates, so choose ESR below 33 mΩ).
(d) I_pk = I_o + ΔI_L/2 = 5 + 0.75 = **5.75 A** (inductor saturation current must exceed this with margin). DCM begins when I_o < ΔI_L/2 = **0.75 A**.
(e) Higher f_s: smaller L and C, faster transient response, easier filtering. Against: higher switching loss and gate-drive loss, more EMI, shorter magnetics design margin, higher stress on layout and thermal performance.

**Q2.**
(a) D = 1 - V_in/V_o = 1 - 5/12 = **0.583**.
(b) I_L = I_o/(1 - D) = 1/0.4167 = **2.40 A**.
(c) L = V_in D/(f_s ΔI_L) = 5 × 0.583/(10⁵ × 0.5) = **58.3 µH**.
(d) C = I_o D/(f_s ΔV_o) = 1 × 0.583/(10⁵ × 0.06) = **97.2 µF**.
(e) I_pk = 2.40 + 0.25 = **2.65 A**. P_out = 12 W, P_in = 12/0.92 = **13.0 W**, so the average input current from a 5 V source is 13.04/5 = **2.61 A**, higher than the ideal 2.40 A because of the losses.

**Q3.**
(a) |V_o| = D V_in/(1 - D) → 18 = 12 D/(1 - D) → 18 - 18D = 12D → D = 18/30 = **0.60**.
(b) V_o = D (N₂/N₁) V_in = 0.4 × 0.5 × 48 = **9.6 V**.
(c) Isolation provides safety (separates mains from user-accessible circuits), breaks ground loops, allows a wide voltage ratio through the turns ratio, and permits multiple outputs.

**Q4.**
(a) V_1,rms = m_a V_dc/√2 = 0.9 × 300/1.414 = **190.9 V** (peak 270 V).
(b) Step 1: The harmonic at h = m_f = 31 (amplitude 0.712) is the carrier harmonic; h = 29 and 33 (m_f ± 2) are sidebands at 0.268; h = 61 and 63 (2m_f ± 1, the second group around twice the carrier frequency) at 0.255.
Step 2: All significant harmonics lie around multiples of the carrier frequency, 31 × 50 Hz = 1.55 kHz for a 50 Hz output, so a small LC low-pass filter with cutoff between 50 Hz and about 1 kHz removes them.
Step 3: A higher m_f moves harmonics higher (easier filtering) but raises switching loss.
(c) SPWM: V_LL = 0.612 × 0.9 × 300 = **165.2 V**; six-step: 0.78 × 300 = **234 V**; SVPWM maximum: 0.612 × 1.155 × 300 = **212.1 V** (15 percent more than linear SPWM at m_a = 1: 183.6 V).
(d) Dead time delays turn-on of the complementary switch in a leg so that both never conduct together (shoot-through would short the dc bus); it causes small voltage distortion which may be compensated.

**Q5.**
(a) An inner current loop senses the inductor current: it gives cycle-by-cycle current limiting (protection), simplifies the plant to first order so the voltage compensator is easier to design with wider bandwidth, and allows current sharing in parallel converters.
(b) In a boost converter, increasing the duty cycle first reduces the energy delivered to the output (the diode conducts for a shorter time) before the inductor current builds up, so the output voltage initially moves the wrong way: a right-half-plane zero in the control-to-output transfer function (also in buck-boost). It limits the achievable crossover frequency (to below about one fifth of the zero frequency) and so the transient response.

**Q6.** Total loss = 2.1 + 1.4 + 1.8 + 0.4 + 0.3 = **6.0 W**. η = 100/(100 + 6.0) = **94.3 percent**; P_in = **106 W** (input current 8.83 A at 12 V). The MOSFET and inductor dominate the loss; improve with lower R_on/better magnetics.

# Assignment 3: Drives, Transformers, Power Systems and Energy Sources (70 marks)

## Questions

**Q1. Induction motor (14 marks)** A 6-pole, 60 Hz, 15 kW induction motor runs at 3 percent slip at rated output. (a) Synchronous and rotor speed [3]. (b) Shaft torque [3]. (c) Air-gap power and rotor copper loss [4]. (d) With V/f control find the voltage and synchronous speed at 40 Hz and 20 Hz for a 460 V, 60 Hz motor [4].

**Q2. Transformer (14 marks)** A 25 kVA, 2400/240 V transformer has core loss 180 W and full-load copper loss 300 W. (a) Efficiency at full load, 0.75 of full load and half load at power factor 0.9 [6]. (b) The load fraction for maximum efficiency and the maximum efficiency at pf 0.9 [5]. (c) Why do distribution transformers aim for a low core loss? [3]

**Q3. Power-factor correction (14 marks)** A 250 kW load at pf 0.75 lagging is supplied at 480 V, 60 Hz three-phase. (a) Find the line current [3]. (b) Find the capacitor reactive power to correct to pf 0.95 [4]. (c) Find the new line current and the reduction in I²R losses [4]. (d) Find the delta-connected capacitance per phase [3].

**Q4. Solar PV system (14 marks)** Four 400 W panels with 5.5 peak sun hours per day and 80 percent system efficiency. (a) Compute the daily and annual energy [4]. (b) The installed cost is $1,200/kW, O&M $12/kW-year, 20 years at a 6 percent discount rate and a yield of 1,600 kWh/kW-year; compute the CRF and LCOE [6]. (c) For a 6 kWh/day load with one day of autonomy, 80 percent DoD and 90 percent efficiency, size the battery in kWh and in Ah at 48 V [4].

**Q5. Wind (8 marks)** A turbine has R = 30 m and C_p = 0.42 (ρ = 1.225 kg/m³). Compute the power at 6, 10 and 14 m/s and explain the cubic dependence.

**Q6. MPPT and storage (6 marks)** (a) Describe the perturb-and-observe algorithm and one weakness [3]. (b) Define C-rate and state the charge method for Li-ion cells [3].

## Solutions

**Q1.**
(a) N_s = 120 f/P = 120 × 60/6 = **1,200 rpm**; N_r = N_s(1 - s) = 1,200 × 0.97 = **1,164 rpm**.
(b) ω = 1,164 × 2π/60 = 121.9 rad/s; T = P/ω = 15,000/121.9 = **123 N·m**.
(c) P_ag = P_out/(1 - s) = 15,000/0.97 = **15,464 W**; rotor copper loss = s P_ag = **464 W** (friction and windage are ignored).
(d) Step 1: V/f = 460/60 = 7.67 V/Hz.
Step 2: At 40 Hz: V = **306.7 V**, N_s = 120 × 40/6 = **800 rpm**.
Step 3: At 20 Hz: V = **153.3 V**, N_s = **400 rpm** (Boost the voltage slightly at low frequency to overcome stator resistance.)

**Q2.**
(a) Step 1: η = x S cos φ/(x S cos φ + P_c + x² P_cu).
Step 2: Full load: 22,500/(22,500 + 180 + 300) = **97.9 percent**.
Step 3: At 0.75: 16,875/(16,875 + 180 + 169) = **97.98 percent**.
Step 4: At 0.5: 11,250/(11,250 + 180 + 75) = **97.78 percent**.
(b) x = √(P_c/P_cu) = √(180/300) = **0.775**; output = 0.775 × 25 × 0.9 = 17.4 kW; η_max = 17,428/(17,428 + 360) = **97.98 percent**. (At that point the copper loss equals the core loss: 180 W each.)
(c) A distribution transformer is energized 24 hours a day but loaded only part of the time (average load maybe 30 to 50 percent), so the constant core loss dominates the energy loss: design for low core loss (amorphous or grain-oriented steel) and high all-day efficiency.

**Q3.**
(a) I = P/(√3 V pf) = 250,000/(1.732 × 480 × 0.75) = **401 A**.
(b) Q₁ = P tan(cos⁻¹ 0.75) = 250 × 0.882 = 220.5 kvar; Q₂ = P tan(cos⁻¹ 0.95) = 250 × 0.3287 = 82.2 kvar; Q_c = **138.3 kvar**.
(c) I₂ = 250,000/(1.732 × 480 × 0.95) = **316.5 A**; loss ratio = (316.5/401)² = **0.623**, a 37.7 percent reduction. Apparent power falls from 333 kVA to 263 kVA.
(d) C = Q_c/(3 ω V²) = 138,308/(3 × 377 × 480²) = **531 µF** per phase (delta).

**Q4.**
(a) Array = 1.6 kW. Daily energy = 1.6 × 5.5 × 0.8 = **7.04 kWh**; annual = 7.04 × 365 = **2,570 kWh**.
(b) CRF = r(1 + r)ⁿ/((1 + r)ⁿ - 1) = 0.06 × 1.06²⁰/(1.06²⁰ - 1) = **0.0872**. LCOE = (1,200 × 0.0872 + 12)/1,600 = (104.6 + 12)/1,600 = **$0.0729/kWh**.
(c) E = 6 × 1/(0.8 × 0.9) = **8.33 kWh**; Ah at 48 V = 8,333/48 = **174 Ah**.

**Q5.** Step 1: A = π × 30² = 2,827 m². P = ½ ρ A C_p v³: at 6 m/s: 0.5 × 1.225 × 2,827 × 0.42 × 216 = **157 kW**; at 10 m/s: **727 kW**; at 14 m/s: **1,996 kW**.
Step 2: The power in the wind is the kinetic energy flux: mass flow ρ A v times ½ v², giving ∝ v³; raising the speed from 10 to 14 m/s (×1.4) increases power by 1.4³ = 2.74.
Step 3: Betz's limit (59.3 percent) bounds C_p; real turbines also limit power above rated speed by pitching blades.

**Q6.**
(a) Perturb the operating voltage (or duty cycle) by a small step and measure the power; if the power increased, continue in the same direction, otherwise reverse. It converges to the MPP and then oscillates around it (small loss; in our example about 0.3 percent). Weaknesses: oscillation, confusion during rapidly changing irradiance, and settling at a local maximum under partial shading.
(b) C-rate is the current relative to the capacity: 1C for a 3 Ah cell is 3 A (30 A on a 9 Ah pack is 3.3C). Li-ion cells are charged by **constant current (CC)** until the cell reaches 4.2 V, then **constant voltage (CV)** until the current tapers to about C/20, with a BMS for balancing and protection.
