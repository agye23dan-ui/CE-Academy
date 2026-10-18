# Power Electronics and Energy Systems: Class Test

Duration: 60 minutes. Calculator allowed, no notes. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Useful: buck V_o = D V_in, ΔI_L = (V_in - V_o) D/(L f_s), ΔV_o = ΔI_L/(8 f_s C); boost V_o = V_in/(1 - D); bridge rectifier V_avg = 2V_m/π; controlled bridge V_dc = (2V_m/π) cos α; wind P = ½ ρ A C_p v³.

## Section A: Multiple choice (20 marks)

**1.** A linear regulator dissipates power equal to
A) V_out I  B) zero  C) V_in² / R  D) (V_in - V_out) I

**2.** A thyristor (SCR) turns off when
A) the gate voltage is removed  B) the anode current falls below the holding current  C) the temperature falls  D) the gate is reversed

**3.** Compared with a MOSFET, an IGBT is generally preferred for
A) very high frequency, low voltage  B) logic circuits  C) high voltage and high current at moderate frequency  D) signal amplification

**4.** The main advantage of silicon carbide (SiC) devices is
A) no gate drive  B) lower losses, faster switching and higher temperature capability  C) lower cost  D) they need no heat sink

**5.** Switching loss is approximately proportional to
A) the ambient temperature  B) the switching frequency  C) the load resistance  D) the capacitor value

**6.** The average output of a single-phase full-wave bridge rectifier with resistive load is
A) 2V_m/π  B) V_m/π  C) V_m/2  D) V_m

**7.** A fully controlled single-phase bridge with highly inductive load has zero average output voltage at
A) α = 45°  B) α = 90°  C) α = 180°  D) α = 0°

**8.** For an ideal buck converter in CCM the output voltage is
A) V_in/(1 - D)  B) D V_in  C) -D V_in  D) V_in/D

**9.** For an ideal boost converter in CCM the output voltage is
A) V_in/(1 - D)  B) D V_in  C) V_in(1 - D)  D) -V_in D/(1 - D)

**10.** A buck converter enters discontinuous conduction mode when the load current is
A) less than half the inductor current ripple  B) above the peak current  C) zero volts  D) equal to the input current

**11.** An advantage of peak current-mode control is
A) no feedback is needed  B) inherent cycle-by-cycle current limiting and simpler compensation  C) it eliminates the inductor  D) it increases ripple

**12.** Dead time in an inverter leg is used to
A) improve the power factor  B) increase output voltage  C) prevent both switches of a leg conducting at once (shoot-through)  D) reduce frequency

**13.** In SPWM the frequency modulation ratio m_f is
A) the duty cycle  B) V_dc/V_ac  C) V_ref/V_carrier  D) carrier frequency divided by the reference (fundamental) frequency

**14.** The line-to-line rms voltage of a three-phase six-step inverter is about
A) 1.35 V_dc  B) 0.5 V_dc  C) 0.78 V_dc  D) 1.0 V_dc

**15.** The synchronous speed of an induction motor is
A) P/f  B) 120 f/P  C) 60 P/f  D) f P

**16.** Constant V/f control of an induction motor aims to
A) keep the air-gap flux approximately constant  B) increase slip  C) reduce frequency only  D) raise the power factor to unity

**17.** Shunt capacitors for power-factor correction
A) supply reactive power locally, reducing line current  B) increase harmonics always  C) consume real power  D) reduce the supply voltage

**18.** A transformer has maximum efficiency when
A) the load is at twice rating  B) the load is zero  C) copper loss is zero  D) copper loss equals core loss

**19.** The Betz limit for a wind turbine is
A) 0.30  B) 1.00  C) 0.593  D) 0.80

**20.** The purpose of MPPT in a PV system is to
A) operate the module at its maximum-power point  B) increase irradiance  C) reduce module temperature  D) store energy

## Section B: Problems (40 marks)

**B1. Buck converter (10 marks)** V_in = 20 V, V_o = 5 V, I_o = 2 A, f_s = 100 kHz, L = 50 µH, C ripple target 20 mV. (a) Duty cycle [2]. (b) Inductor ripple ΔI_L and peak current [3]. (c) The load current at the CCM/DCM boundary [2]. (d) Required capacitance [3].

**B2. Rectifiers (10 marks)** The supply is 230 V rms, 50 Hz. (a) Average output of a half-wave and a full-wave bridge rectifier (resistive load) [4]. (b) Average output of a fully controlled bridge (inductive load) at α = 60° [3]. (c) The average dc output of a three-phase six-pulse diode bridge fed from 400 V line-to-line [3].

**B3. Inverters and power factor (10 marks)** (a) A single-phase full bridge with V_dc = 400 V: fundamental rms voltage with square-wave operation and with SPWM at m_a = 0.8 [4]. (b) The THD of a square wave [2]. (c) A load has distortion THD of 30 percent and displacement factor 0.95: find the power factor [2]. (d) State two advantages of SPWM over square-wave operation [2].

**B4. Energy systems (10 marks)** (a) A 100 kW load at pf 0.8 lagging is corrected to 0.95; find the capacitor kvar [4]. (b) A 300 W panel receives 5 peak sun hours with 80 percent system efficiency; find the daily energy [2]. (c) A wind turbine produces 300 kW at 8 m/s; what does it produce at 4 m/s and 16 m/s (same C_p, ignoring limits)? [2] (d) A 14s3p lithium pack uses 3.7 V, 3 Ah cells; find nominal voltage and energy [2].

## Answer key and solutions

### Section A
1. D 2. B 3. C 4. B 5. B 6. A 7. B 8. B 9. A 10. A 11. B 12. C 13. D 14. C 15. B 16. A 17. A 18. D 19. C 20. A

### Section B

**B1.**
(a) D = V_o/V_in = 5/20 = **0.25** [2].
(b) ΔI_L = (V_in - V_o) D/(L f_s) = 15 × 0.25/(50×10⁻⁶ × 10⁵) = 3.75/5 = **0.75 A** [2]; I_pk = 2 + 0.375 = **2.375 A** [1].
(c) I_boundary = ΔI_L/2 = **0.375 A** [2].
(d) C = ΔI_L/(8 f_s ΔV) = 0.75/(8 × 10⁵ × 0.02) = **46.9 µF** [3].

**B2.**
(a) V_m = 230√2 = 325.3 V. Half-wave: V_m/π = **103.5 V**; full-wave: 2V_m/π = **207.1 V** [4].
(b) V_dc = 207.1 cos 60° = **103.5 V** [3].
(c) V_dc = 1.35 V_LL = 1.35 × 400 = **540 V** [3].

**B3.**
(a) Square wave: V_1,rms = 4V_dc/(π√2) = 0.9 × 400 = **360 V** [2]. SPWM m_a = 0.8: V_1,rms = 0.8 × 400/√2 = **226 V** [2].
(b) THD = √(π²/8 - 1) = √(1.2337 - 1) = **48.3 percent** [2].
(c) Distortion factor = 1/√(1 + 0.3²) = 0.958; PF = 0.958 × 0.95 = **0.91** [2].
(d) SPWM allows output voltage control (m_a) and moves harmonics to high frequencies near the carrier so a small filter suffices; the low-order harmonics are removed [2].

**B4.**
(a) Q₁ = 100 tan(cos⁻¹ 0.8) = 75 kvar; Q₂ = 100 tan(cos⁻¹ 0.95) = 32.9 kvar; Q_c = **42.1 kvar** [4].
(b) 0.3 kW × 5 h × 0.8 = **1.2 kWh/day** [2].
(c) Power ∝ v³: at 4 m/s (half the speed) P = 300/8 = **37.5 kW**; at 16 m/s (double) P = 300 × 8 = **2,400 kW** (in practice limited by the rated power and pitch control) [2].
(d) Voltage = 14 × 3.7 = **51.8 V**; capacity 3 × 3 = 9 Ah; energy = 51.8 × 9 = **466 Wh** [2].
