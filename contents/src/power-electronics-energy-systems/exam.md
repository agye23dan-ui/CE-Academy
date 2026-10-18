# Power Electronics and Energy Systems: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

Formulas: buck V_o = D V_in, ΔI_L = (V_in - V_o) D/(L f_s), ΔV_o = ΔI_L/(8 f_s C); boost V_o = V_in/(1 - D), I_L = I_o/(1 - D), ΔI_L = V_in D/(L f_s), ΔV_o = I_o D/(f_s C); MOSFET P_c = I² R_on D, P_sw = ½ V I (t_r + t_f) f_s; T_j = T_a + P R_θ; bridge V_avg = 2V_m/π; three-phase bridge V_dc = 1.35 V_LL; V_LL(SPWM) = 0.612 m_a V_dc; N_s = 120 f/P; transformer η = x S cos φ/(x S cos φ + P_c + x² P_cu); Q_c = P (tan φ₁ - tan φ₂); wind P = ½ ρ A C_p v³.

## Section A: Multiple Choice (20 marks)

**1.** Two cascaded converter stages with efficiencies 0.95 and 0.92 have overall efficiency
A) 0.935  B) 0.874  C) 1.87  D) 0.03

**2.** The form factor of a waveform is
A) V_rms²  B) V_rms/V_avg  C) V_peak/V_rms  D) V_avg/V_rms

**3.** Conduction loss of a MOSFET is
A) I_rms² R_on  B) Q_g V_g f_s  C) proportional to switching frequency  D) independent of current

**4.** A Schottky diode is used in low-voltage converters mainly because of its
A) large reverse recovery  B) slow switching  C) low forward voltage drop and no reverse recovery  D) high reverse voltage

**5.** Junction temperature is calculated as
A) T_a R_θ  B) T_a + P Σ R_θ  C) P/R_θ  D) T_a - P R_θ

**6.** In a six-pulse rectifier the dominant input current harmonics are
A) 2nd and 4th  B) none  C) 5th, 7th, 11th, 13th  D) 3rd and 9th

**7.** A twelve-pulse rectifier reduces the harmonic distortion because it
A) doubles the frequency  B) cancels the 5th and 7th harmonics  C) removes the transformer  D) uses higher voltage

**8.** In a buck converter the inductor current ripple decreases when
A) the inductance or switching frequency increases  B) the capacitor increases  C) the input voltage rises  D) the load increases

**9.** The right-half-plane zero of a boost converter
A) removes the need for feedback  B) is irrelevant  C) improves transient response  D) limits the achievable control bandwidth

**10.** In a flyback converter the transformer
A) carries current only in the diode  B) stores energy in its magnetizing inductance during the on-time and delivers it during the off-time  C) never saturates  D) is not needed

**11.** Space-vector PWM compared with SPWM
A) halves the bus voltage  B) eliminates the inverter  C) gives about 15 percent higher dc-bus utilization  D) increases the harmonics

**12.** A grid-tied inverter synchronizes to the grid using
A) a transformer tap  B) a phase-locked loop  C) a diode bridge  D) a battery

**13.** The slip of an induction motor running at 1,440 rpm with a 1,500 rpm synchronous speed is
A) 0.04 percent  B) 0.4 percent  C) 4 percent  D) 40 percent

**14.** A regenerative drive returns energy to the supply when
A) the supply is off  B) the load drives the motor above synchronous speed or in generating mode  C) the motor is accelerating  D) the frequency is zero

**15.** The power factor of a diode rectifier with a capacitor filter is low mainly because of
A) a leading displacement angle  B) a transformer ratio  C) a lagging displacement angle  D) a high distortion factor from pulsed input current

**16.** The kvar needed to correct power factor from pf₁ to pf₂ for real power P is
A) P (cos φ₁ - cos φ₂)  B) P / pf  C) P sin φ  D) P (tan φ₁ - tan φ₂)

**17.** Raising transmission voltage for the same power
A) increases real power  B) increases current  C) reduces current and I²R losses  D) has no effect

**18.** The fill factor of a PV module is
A) the efficiency  B) V_oc / I_sc  C) P_mp / (V_oc I_sc)  D) I_sc / V_oc

**19.** Peukert's law shows that a lead-acid battery delivers
A) less usable capacity at higher discharge currents  B) more capacity at high current  C) no capacity  D) the same capacity at all currents

**20.** A battery management system (BMS) provides
A) AC output  B) higher cell voltage  C) cell balancing, protection and state-of-charge estimation  D) cooling only

## Section B: Short Questions (40 marks)

**B1. Buck converter (5 marks)** V_in = 36 V, V_o = 5 V, I_o = 3 A, f_s = 250 kHz, ripple 40 percent of I_o. Find D, L, peak inductor current and the DCM boundary load current.

**B2. Boost converter (5 marks)** V_in = 12 V, V_o = 30 V, I_o = 1 A. Find D, the average inductor current and the average diode current.

**B3. MOSFET loss and temperature (5 marks)** A MOSFET carries 15 A at 60 V with R_on = 15 mΩ, D = 0.5, t_r = t_f = 25 ns and f_s = 150 kHz. Find conduction loss, switching loss and the junction temperature if T_a = 35 °C and the total thermal resistance is 4.1 °C/W.

**B4. Three-phase inverter (5 marks)** V_dc = 540 V, m_a = 0.85. Find the SPWM line-to-line rms voltage, the six-step value and the maximum with SVPWM (m_a = 1.155).

**B5. Induction motor (5 marks)** A 6-pole, 60 Hz motor runs at 3.5 percent slip. Find the synchronous and rotor speeds and the voltage at 45 Hz for a 480 V, 60 Hz motor under V/f control.

**B6. Transformer (5 marks)** A 50 kVA transformer has P_c = 250 W and full-load P_cu = 600 W. Find its efficiency at full load and 0.9 power factor and the load fraction for maximum efficiency.

**B7. Power-factor correction (5 marks)** A 300 kW load at pf 0.8 is corrected to 0.95. Find the capacitor kvar.

**B8. Battery (5 marks)** A 200 Ah (20-hour rate) lead-acid battery has Peukert exponent 1.15. Find the runtime and delivered capacity at a 40 A discharge (t = H (C/(I H))^k).

## Section C: Long Questions (answer any four, 40 marks)

**C1. Boost converter design (10 marks)** Design a boost converter: V_in = 24 V, V_o = 48 V, P_o = 200 W, f_s = 80 kHz, inductor ripple 30 percent of the average inductor current, output ripple 0.2 V. (a) Duty cycle, output current, average inductor current [3]. (b) Inductance and capacitance [3]. (c) Peak inductor current, switch rms current and diode voltage and average current rating [3]. (d) Find the load current at the CCM/DCM boundary and state what happens below it [1].

**C2. Inverter and filter (10 marks)** A three-phase inverter has V_dc = 540 V and uses SPWM with m_a = 0.9 and m_f = 31 for a 50 Hz output. (a) Compute V_LL (rms) [2]. (b) From simulation, the normalized harmonic amplitudes (relative to V_dc/2) are 0.712 at h = 31, 0.268 at h = 29 and 33, 0.255 at h = 61 and 63. State the frequencies of the carrier group [2]. (c) Design an LC low-pass filter with L = 2 mH and cutoff 300 Hz: find C and the attenuation at 1.55 kHz [4]. (d) Explain the trade-off in choosing m_f [2].

**C3. Power quality and transformer loading (10 marks)** (a) A 500 kW load at pf 0.7 lagging is fed at 690 V three-phase. Find the line current, the capacitor kvar to reach pf 0.95, the new current and the ratio of line losses [5]. (b) A 100 kVA transformer has P_c = 400 W and P_cu = 1,200 W at full load. Find its efficiency at full load and at half load (pf 0.8), and the load fraction of maximum efficiency [5].

**C4. Motor drive (10 marks)** A 4-pole, 50 Hz, 11 kW induction motor runs at 4 percent slip at rated output. (a) Synchronous and rotor speed, shaft torque [3]. (b) Air-gap power and rotor copper loss [2]. (c) The V/f voltage and synchronous speed at 35 Hz for a 400 V, 50 Hz motor, and why V/f is kept constant [3]. (d) Describe how a DC chopper drive controls a DC motor's speed and how regeneration is achieved [2].

**C5. Renewable energy system (10 marks)** (a) A PV system costs $900/kW with O&M of $10/kW-year, a yield of 1,500 kWh/kW-year, a 25-year life and an 8 percent discount rate. Compute CRF and LCOE [4]. (b) A wind turbine of 45 m radius has C_p = 0.40 and wind speed 11 m/s (ρ = 1.225); find its power [3]. (c) A 12 kWh/day load needs 1.5 days of autonomy with 80 percent depth of discharge and 92 percent efficiency; size the battery [3].

## Answer key and mark scheme

### Section A
1. B 2. B 3. A 4. C 5. B 6. C 7. B 8. A 9. D 10. B 11. C 12. B 13. C 14. B 15. D 16. D 17. C 18. C 19. A 20. C

### Section B

**B1.** D = 5/36 = **0.139** [1]. ΔI_L = 0.4 × 3 = 1.2 A; L = (36 - 5) × 0.139/(250×10³ × 1.2) = 4.306/300,000 = **14.4 µH** [2]. I_pk = 3 + 0.6 = **3.6 A** [1]. DCM boundary: ΔI_L/2 = **0.6 A** [1].

**B2.** D = 1 - 12/30 = **0.60** [2]. I_L = I_o/(1 - D) = 1/0.4 = **2.5 A** [2]. Average diode current = I_o = **1 A** [1].

**B3.** P_c = 15² × 0.015 × 0.5 = **1.69 W** [1.5]; P_sw = 0.5 × 60 × 15 × 50 ns × 150 kHz = **3.38 W** [1.5]; total 5.06 W; T_j = 35 + 5.06 × 4.1 = **55.8 °C** [2].

**B4.** SPWM: V_LL = 0.612 × 0.85 × 540 = **281 V**; six-step: 0.78 × 540 = **421 V**; SVPWM maximum: 0.612 × 1.155 × 540 = **382 V** [5].

**B5.** N_s = 120 × 60/6 = **1,200 rpm**; N_r = 1,200 × 0.965 = **1,158 rpm** [3]. V/f = 480/60 = 8 V/Hz; at 45 Hz: **360 V** [2].

**B6.** Output = 50,000 × 0.9 = 45,000 W; η = 45,000/(45,000 + 250 + 600) = **98.1 percent** [3]. x = √(250/600) = **0.645** [2].

**B7.** Q_c = 300 (tan 36.87° - tan 18.19°) = 300 (0.75 - 0.3287) = **126.4 kvar** [5].

**B8.** t = 20 × (200/(40 × 20))^1.15 = 20 × 0.25^1.15 = 20 × 0.2030 = **4.06 h** [3]; delivered capacity = 40 × 4.06 = **162 Ah** (81 percent of rated) [2].

### Section C

**C1.**
(a) D = 1 - 24/48 = **0.50**; I_o = 200/48 = **4.17 A**; I_L = I_o/(1 - D) = **8.33 A** [3].
(b) ΔI_L = 0.3 × 8.33 = 2.5 A; L = V_in D/(f_s ΔI_L) = 24 × 0.5/(80×10³ × 2.5) = **60 µH**; C = I_o D/(f_s ΔV_o) = 4.17 × 0.5/(80×10³ × 0.2) = **130 µF** [3].
(c) I_pk = 8.33 + 1.25 = **9.58 A**; switch rms ≈ I_L √D = 8.33 × 0.707 = **5.9 A**; the diode blocks about 48 V (select 80 V or more) and carries an average of I_o = **4.17 A** (peak 9.6 A) [3].
(d) Boundary when ΔI_L/2 = I_L (average) → load current I_o = (1 - D) ΔI_L/2 = 0.5 × 1.25 = **0.625 A**; below this the inductor current reaches zero each cycle (DCM) and the voltage gain depends on the load (rising without a control loop) [1].

**C2.**
(a) V_LL = 0.612 × 0.9 × 540 = **297.4 V** [2].
(b) Carrier frequency = m_f × 50 = **1,550 Hz**; sidebands at 29 and 33 times 50 Hz = **1,450 and 1,650 Hz**; second group around 2 f_c = 3,100 Hz at 61 and 63 times 50 = **3,050 and 3,150 Hz** [2].
(c) C = 1/((2π f_c)² L) = 1/((1885)² × 0.002) = **141 µF**. At 1.55 kHz the second-order filter attenuates approximately by (f_c/f)² = (300/1550)² = 0.0375, i.e. **-28.5 dB** [4].
(d) A higher m_f pushes harmonics up so a smaller filter is needed and the current ripple falls, but the switching frequency (and so switching losses, EMI and dead-time distortion) increases; a low m_f needs a larger filter and gives low-order sidebands near the fundamental; choose m_f odd and (for three-phase) a multiple of 3 for symmetry [2].

**C3.**
(a) I = 500,000/(√3 × 690 × 0.7) = **597.7 A**; Q₁ = 500 tan(45.57°) = 510.1 kvar; Q₂ = 500 tan(18.19°) = 164.3 kvar; Q_c = **345.8 kvar**; new current = 500,000/(√3 × 690 × 0.95) = **440.4 A**; loss ratio = (0.7/0.95)² = **0.543** (a 46 percent loss reduction) [5].
(b) Full load pf 0.8: out = 80,000 W; η = 80,000/(80,000 + 400 + 1,200) = **98.04 percent**. Half load: out = 40,000 W, losses = 400 + 0.25 × 1,200 = 700 W; η = 40,000/40,700 = **98.28 percent**. Maximum efficiency at x = √(400/1200) = **0.577** (about 98.3 percent) [5].

**C4.**
(a) N_s = 120 × 50/4 = **1,500 rpm**; N_r = 1,500 × 0.96 = **1,440 rpm**; ω = 150.8 rad/s; T = 11,000/150.8 = **72.9 N·m** [3].
(b) P_ag = 11,000/0.96 = **11.46 kW**; rotor copper loss = 0.04 × 11.46 = **458 W** [2].
(c) V = (400/50) × 35 = **280 V**; N_s = 120 × 35/4 = **1,050 rpm**. Constant V/f keeps the air-gap flux (V ≈ 4.44 f N Φ) constant so torque capability is maintained without saturating the core at low frequency [3].
(d) A chopper varies the armature voltage by PWM duty cycle (V_a = D V_s), so speed is proportional to D (the back-emf follows). Regeneration: a two- or four-quadrant (H-bridge) chopper lets the current reverse, returning braking energy from the motor to the source (boost action) [2].

**C5.**
(a) CRF = 0.08 × 1.08²⁵/(1.08²⁵ - 1) = **0.0937**; LCOE = (900 × 0.0937 + 10)/1,500 = (84.3 + 10)/1,500 = **$0.0629/kWh** [4].
(b) A = π × 45² = 6,362 m²; P = 0.5 × 1.225 × 6,362 × 0.4 × 11³ = **2.07 MW** [3].
(c) E = 12 × 1.5/(0.8 × 0.92) = **24.5 kWh** [3].
