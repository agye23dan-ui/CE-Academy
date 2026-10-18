# Physics II (Electricity and Magnetism): Complete Lecture Notes

Constants used: Coulomb constant k = 1/(4π ε0) = 8.99 × 10^9 N m^2/C^2; permittivity ε0 = 8.854 × 10^-12 C^2/(N m^2); permeability μ0 = 4π × 10^-7 T m/A; elementary charge e = 1.602 × 10^-19 C; electron mass 9.109 × 10^-31 kg; proton mass 1.673 × 10^-27 kg; speed of light c = 1/sqrt(μ0 ε0) = 3.00 × 10^8 m/s. Vectors are bold in textbooks; here they are described in words or components. Prefixes: n = 10^-9, μ = 10^-6, m = 10^-3, k = 10^3, M = 10^6.

## Chapter 1. Electric Charge and Coulomb's Law

### 1.1 Charge
Charge is conserved and quantised (multiples of e). Like charges repel, unlike attract. Conductors let charge move freely; insulators do not. Charging by friction, conduction, and induction. The unit is the coulomb (C): one coulomb is 6.24 × 10^18 elementary charges; typical static charges are nC to μC.

### 1.2 Coulomb's law
The force between two point charges q1 and q2 separated by r is F = k |q1 q2|/r^2, along the line joining them, repulsive for like charges and attractive for unlike. The principle of **superposition** says that the net force on a charge is the vector sum of the forces from all others.
**Example.** +3 μC and -2 μC separated by 0.20 m: F = 8.99 × 10^9 (3 × 10^-6)(2 × 10^-6)/0.04 = 1.35 N (attractive). Gravity between two electrons is about 10^-43 times the electric force, so electricity dominates at atomic scales.

## Chapter 2. The Electric Field and Gauss's Law

### 2.1 The electric field
E = F/q0 (force per unit positive test charge), units N/C = V/m. A point charge q produces E = k q/r^2 directed away from a positive charge. Field lines start on positive charges and end on negative ones; their density shows field strength and they never cross.
**Example.** Two +4 nC charges at x = ±0.1 m: at the point (0, 0.1 m), each contributes 8.99 × 10^9 · 4 × 10^-9/0.02 = 1798 N/C; the x-components cancel and the y-components add: E = 2 · 1798 · cos 45° = 2543 N/C along +y.

### 2.2 Continuous charge distributions
Divide into elements dq and integrate dE = k dq/r^2 (by components and symmetry).
- **Ring** of charge Q and radius a, on the axis at distance z: E = k Q z/(a^2 + z^2)^(3/2) (zero at the centre, k Q/z^2 far away). For Q = 5 nC, a = 0.10 m, z = 0.20 m: E = 804 N/C.
- **Infinite line** with linear density λ: E = 2kλ/r = λ/(2π ε0 r), pointing radially. For λ = 2 nC/m at r = 0.05 m: 719 N/C.
- **Infinite sheet** with surface density σ: E = σ/(2ε0), uniform. For σ = 3 nC/m^2: 169 N/C.
- **Parallel plates:** between oppositely charged plates E = σ/ε0 (uniform), and zero outside.

### 2.3 Dipoles
A dipole (charges ±q separated by d) has dipole moment p = q d (from - to +). In a uniform field it feels torque τ = p × E and has potential energy U = -p · E; there is no net force in a uniform field. Far away the dipole field falls as 1/r^3. Molecules such as water are permanent dipoles; nonpolar molecules acquire induced dipoles.

### 2.4 Gauss's law
The electric flux through a surface is Φ_E = ∫ E · dA. **Gauss's law:** the net flux through any closed surface equals the enclosed charge divided by ε0: ∮ E · dA = Q_enc/ε0. It is always true; it is useful for finding E when the symmetry (spherical, cylindrical, planar) lets E be pulled out of the integral.
- **Point charge or any spherically symmetric distribution** outside: E = k Q/r^2.
- **Uniformly charged insulating sphere** (radius R, charge Q): inside E = k Q r/R^3 (grows linearly), outside E = k Q/r^2. For Q = 8 nC, R = 0.10 m: at r = 0.05 m, E = 3596 N/C; at r = 0.20 m, E = 1798 N/C.
- **Conductors in electrostatic equilibrium:** E = 0 inside; excess charge resides on the surface; the field just outside is σ/ε0 and perpendicular to the surface; a hollow conductor shields its interior (Faraday cage). Charge enclosed in a cavity induces equal and opposite charge on the cavity wall.
- **Infinite line:** choose a coaxial cylinder: E (2π r L) = λ L/ε0, giving E = λ/(2π ε0 r).

## Chapter 3. Electric Potential and Energy

### 3.1 Potential energy and potential
The electric force is conservative. Potential energy of a charge q in a field: ΔU = -W. The **electric potential** V = U/q (volts, 1 V = 1 J/C). The potential difference V_b - V_a = -∫(a to b) E · dl. Moving a charge q through a potential difference ΔV changes its potential energy by q ΔV.
- Point charge: V = k q/r (zero at infinity). Superposition: V is a scalar sum.
- Uniform field E: V changes by E d over a distance d along the field.
- **Ring on axis:** V = k Q/sqrt(a^2 + z^2). For the earlier ring at z = 0.2 m: 201 V.
- **Potential energy of a system of point charges:** U = Σ over pairs k q_i q_j/r_ij. Three 1 μC charges at the corners of an equilateral triangle of side 0.10 m: U = 3 k q^2/a = 0.27 J.

### 3.2 Relations between E and V
E = -∇V (E is the negative gradient of potential): E_x = -∂V/∂x. Field lines are perpendicular to **equipotential surfaces**, and E points from high to low potential. A conductor in equilibrium is an equipotential.

### 3.3 Charged particles in fields
Acceleration through a potential difference ΔV: (1/2) m v^2 = q ΔV. The electron-volt (eV) is the energy gained by a charge e through 1 V: 1 eV = 1.602 × 10^-19 J.
**Example.** An electron accelerated from rest through 500 V reaches v = sqrt(2 e V/m) = 1.33 × 10^7 m/s (4.4 percent of c, so the non-relativistic formula is adequate). If it then crosses a 5.0 cm region with a perpendicular field of 2000 V/m, a = eE/m = 3.52 × 10^14 m/s^2, t = 0.05/1.33 × 10^7 = 3.77 ns, and the deflection is (1/2) a t^2 = 2.5 mm. This is the principle of the cathode-ray tube and the oscilloscope.

## Chapter 4. Capacitance and Dielectrics

### 4.1 Capacitors
C = Q/V (farads). A parallel-plate capacitor of plate area A and separation d: C = ε0 A/d. Cylindrical and spherical capacitors: C = 4π ε0 R (isolated sphere); concentric spheres C = 4π ε0 ab/(b - a).
**Energy stored:** U = (1/2) C V^2 = Q^2/(2C) = (1/2) Q V. **Energy density** of an electric field: u = (1/2) ε0 E^2 (J/m^3). A field of 10^6 V/m stores 4.4 J/m^3. Air breaks down near 3 × 10^6 V/m.
**Example.** A = 0.010 m^2, d = 1.0 mm: C = 88.5 pF. At 100 V: Q = 8.85 nC, U = 0.44 μJ.

### 4.2 Combinations
- **Parallel:** C_eq = C1 + C2 + ... (same V, charges add).
- **Series:** 1/C_eq = 1/C1 + 1/C2 + ... (same Q, voltages add). 2 μF and 3 μF: series 1.2 μF, parallel 5 μF.

### 4.3 Dielectrics
Inserting an insulator of dielectric constant κ between the plates reduces the field (the molecules polarise) and multiplies the capacitance by κ: C = κ C0. With the battery connected (V fixed): Q and U increase by κ. With the charge fixed (battery removed): V and E decrease by κ and the stored energy decreases by κ (the dielectric is pulled in). Typical κ: air 1.0006, paper 3.7, glass 5 to 10, water 80, ceramics (BaTiO3) over 1000.
**Example.** The capacitor above with κ = 4 and V = 100 V maintained: C = 354 pF, Q = 35.4 nC, U = 1.77 μJ.
Capacitors in engineering: filtering, timing, decoupling, energy storage (supercapacitors), touchscreens, DRAM cells.

## Chapter 5. Current, Resistance and DC Circuits

### 5.1 Current and resistivity
Current I = dq/dt (amperes); conventional current flows from + to -. **Drift velocity:** I = n q v_d A. In a 1.0 mm copper wire at 5 A (n = 8.5 × 10^28 m^-3), v_d = 0.47 mm/s: signals travel fast because the field propagates at nearly c, not because the electrons do.
**Ohm's law:** V = I R (for ohmic materials). **Resistance** R = ρ L/A, with resistivity ρ (copper 1.68 × 10^-8 Ω m; silicon about 640 Ω m intrinsic; glass about 10^12). Resistance increases with temperature for metals: R = R0[1 + α(T - T0)]. Conductivity σ = 1/ρ. The current density form is J = σ E.
**Power:** P = V I = I^2 R = V^2/R (watts). Energy in kWh: 1 kWh = 3.6 MJ. A 1500 W heater at 120 V draws 12.5 A, R = 9.6 Ω; used 4 h per day for 30 days it consumes 180 kWh.

### 5.2 Sources and circuits
A real source (battery) has EMF ε and internal resistance r: terminal voltage V = ε - I r. Resistors in **series**: R_eq = R1 + R2 + ... (same current). In **parallel**: 1/R_eq = 1/R1 + 1/R2 + ... (same voltage); for two, R_eq = R1 R2/(R1 + R2). Voltage divider: V_out = V_in R2/(R1 + R2).
**Example.** 10 Ω in series with (20 Ω ∥ 30 Ω): the parallel pair is 12 Ω, the total 22 Ω; at 44 V the current is 2 A, the parallel voltage 24 V and the branch currents 1.2 A and 0.8 A.

### 5.3 Kirchhoff's rules
- **Junction rule (KCL):** the algebraic sum of currents at a node is zero (charge conservation).
- **Loop rule (KVL):** the sum of potential changes around any closed loop is zero (energy conservation).
**Method:** label the currents, choose loop directions, write KVL/KCL, solve. Alternatively use **node voltages** or **mesh currents**. Example (three parallel branches: 12 V with 2 Ω; 6 V with 1 Ω; and a 4 Ω load): the top-node voltage satisfies (12 - V)/2 + (6 - V)/1 = V/4, so V = 48/7 = 6.857 V; the currents are 2.57 A, -0.86 A (the 6 V source is being charged) and 1.71 A.
**Thevenin's theorem:** any linear two-terminal network is equivalent to a voltage source V_th in series with R_th. For a divider (10 V, 6 kΩ and 3 kΩ) feeding a 3 kΩ load: V_th = 3.33 V, R_th = 2 kΩ, so V_load = 2 V. **Maximum power transfer** occurs when R_load = R_th: P_max = V_th^2/(4 R_th). **Superposition** (linear circuits) and **Norton equivalents** are related tools.

### 5.4 RC circuits
Charging through R from a source V: q(t) = C V (1 - e^(-t/RC)), I = (V/R) e^(-t/RC). Discharging: q = Q0 e^(-t/RC). The **time constant** τ = R C is the time to reach 63.2 percent of the final value; after 5 τ the transient is over (99.3 percent). **Example:** R = 10 kΩ, C = 100 μF: τ = 1 s; v_C reaches 9 V (of 12 V) at t = τ ln 4 = 1.39 s. Energy: the capacitor stores (1/2) C V^2 = 7.2 mJ and an equal amount is dissipated in R during charging (half the supplied energy). RC circuits are timers, filters (cut-off f_c = 1/(2π RC)) and debouncing circuits.
Instruments: an ammeter is placed in series (low resistance); a voltmeter in parallel (high resistance); an oscilloscope probe adds capacitance, which matters at high frequency. Safety: current through the body of about 10 mA causes loss of muscle control, and 100 mA across the chest can be fatal.

## Chapter 6. Magnetic Fields and Forces

### 6.1 Magnetic force on charges and currents
Magnetic fields B (tesla, T; 1 T = 10^4 gauss) are produced by moving charges. The **Lorentz force** on a charge q moving with velocity v is F = q v × B (magnitude q v B sin θ, perpendicular to both v and B, so it does no work). In a uniform field a charge moving perpendicular to B follows a circle: **r = m v/(q B)** with period T = 2π m/(q B) (the cyclotron frequency f = qB/(2π m) is independent of speed). With both E and B: F = q(E + v × B). In crossed fields, v = E/B passes undeflected (velocity selector).
**Example.** A proton at 2.0 × 10^6 m/s in a 0.50 T field: r = 4.18 cm, T = 131 ns, f = 7.62 MHz. Applications: mass spectrometers, cyclotrons, the Hall effect (sensors; carrier sign and density: V_H = I B/(n q t)).
**Force on a current-carrying wire:** F = I L × B (magnitude I L B sin θ). A 0.30 m wire carrying 4.0 A perpendicular to 0.20 T experiences 0.24 N. A current loop in a field feels torque τ = N I A B sin θ (the basis of DC motors and galvanometers); the magnetic moment is μ = N I A.

### 6.2 Sources of magnetic fields
- **Biot-Savart law:** dB = (μ0/4π) I dl × r̂/r^2.
- **Long straight wire:** B = μ0 I/(2π r), circling the wire (right-hand rule). 10 A at 5 cm: 4.0 × 10^-5 T (comparable to the Earth's field of about 5 × 10^-5 T).
- **Centre of a circular loop** (N turns, radius R): B = μ0 N I/(2R). Ten turns of radius 5 cm at 2 A: 0.25 mT.
- **Solenoid:** B = μ0 n I inside (n turns per metre), approximately zero outside. 2000 turns/m at 2 A: 5.03 mT. A toroid has B = μ0 N I/(2π r). Ferromagnetic cores multiply B by the relative permeability (hundreds to thousands).
- **Force between parallel wires** carrying I1 and I2 at separation d: F/L = μ0 I1 I2/(2π d), attractive for parallel currents. This defines the ampere historically: two wires 1 m apart carrying 1 A each experience 2 × 10^-7 N/m.

### 6.3 Ampère's law and Gauss's law for magnetism
**Ampère's law:** ∮ B · dl = μ0 I_enc (for steady currents; extended by Maxwell in Chapter 9). It gives B for symmetric configurations (wire, solenoid, toroid, coaxial cable). **Gauss's law for magnetism:** ∮ B · dA = 0: there are no magnetic monopoles; field lines form closed loops.

### 6.4 Magnetic materials
Diamagnetic (weakly repelled), paramagnetic (weakly attracted) and ferromagnetic (strongly attracted, with domains, hysteresis, saturation and Curie temperature) materials. Soft ferromagnets (iron-silicon, ferrites) are used in transformers and inductors; hard ones (NdFeB) in permanent magnets and data storage.

## Chapter 7. Electromagnetic Induction

### 7.1 Faraday's law and Lenz's law
Magnetic flux Φ_B = ∫ B · dA (weber, Wb = T m^2). **Faraday's law:** the induced EMF in a loop is ε = -dΦ_B/dt (for a coil of N turns, ε = -N dΦ_B/dt). **Lenz's law** (the minus sign): the induced current opposes the change in flux that produces it (conservation of energy).
- A coil with N = 200 turns and area 0.010 m^2 with B rising from 0 to 0.50 T in 0.10 s: ε = 200 · 0.010 · 5.0 = 10 V.
- **Motional EMF:** a conductor of length L moving at v across a field B: ε = B L v. For L = 0.50 m, v = 4.0 m/s, B = 0.20 T: 0.40 V; with a 2.0 Ω circuit the current is 0.20 A, the magnetic force on the rod is I L B = 0.020 N, and the mechanical power F v = 0.020 × 4.0 = 0.080 W equals the electrical power I^2 R = 0.080 W (energy is conserved).
- **Generator:** a loop rotating at angular speed ω in a field B has ε = N A B ω sin ω t. N = 100, A = 0.020 m^2, B = 0.30 T, f = 60 Hz: ε_max = 226 V.
- **Induced electric fields:** a changing B produces a non-conservative E with ∮ E · dl = -dΦ_B/dt. Eddy currents are induced in bulk metal; they cause heating (induction cooking) and braking, and laminated cores reduce them.

### 7.2 Inductance
Self-inductance L = N Φ_B/I (henry). A changing current induces ε = -L dI/dt. **Solenoid:** L = μ0 N^2 A/ℓ. For N = 500, A = 4.0 cm^2, ℓ = 0.25 m: L = 0.503 mH. **Energy stored:** U = (1/2) L I^2 (at 2 A, 1.0 mJ); **magnetic energy density** u = B^2/(2 μ0). **Mutual inductance** M: ε2 = -M dI1/dt; for a transformer, V2/V1 = N2/N1 and I2/I1 = N1/N2 (ideal), so power is preserved.
**Transformer example.** 120 V to 12 V with N1 = 500, N2 = 50: a 6 Ω load draws 2.0 A on the secondary and 0.20 A on the primary (24 W). High-voltage power transmission: 100 kW over a 0.5 Ω line loses I^2 R = 5 kW at 1 kV (100 A) but only 50 W at 10 kV (10 A). That is why grids use high voltages.

### 7.3 RL, LC and RLC circuits
- **RL circuit** connected to a source V: I(t) = (V/R)(1 - e^(-t/τ)), τ = L/R. R = 50 Ω, L = 0.10 H, V = 10 V: τ = 2 ms, final current 0.20 A, and I = 0.15 A after τ ln 4 = 2.77 ms. Opening a switch in an inductive circuit makes a large voltage spike (flyback), so protection diodes are used.
- **LC circuit:** energy oscillates between E and B fields: ω0 = 1/sqrt(LC). L = 10 mH, C = 10 μF: f = 503 Hz.
- **Series RLC:** L q'' + R q' + q/C = 0, the same equation as the damped mass-spring: underdamped if R < 2 sqrt(L/C), with damped frequency sqrt(ω0^2 - (R/2L)^2).

## Chapter 8. Alternating-Current Circuits

### 8.1 AC quantities
v(t) = V_p sin(ω t), ω = 2π f. The rms value is V_rms = V_p/sqrt 2 (mains 230 V rms is 325 V peak; 120 V rms is 170 V peak). Power calculations use rms values.

### 8.2 Phasors and impedance
Represent v(t) = Re{V e^(j ω t)} and use complex numbers (j = sqrt(-1), engineers' notation). **Impedance:** Z_R = R; Z_L = j ω L (inductive reactance X_L = ω L; current lags voltage by 90°); Z_C = 1/(j ω C) = -j/(ω C) (capacitive reactance X_C = 1/(ω C); current leads voltage by 90°). Series impedances add; parallel combine as admittances. Ohm's law for phasors: V = I Z.
- **Series RLC:** Z = R + j(X_L - X_C), |Z| = sqrt(R^2 + (X_L - X_C)^2), phase φ = arctan((X_L - X_C)/R) (positive means current lags).
- **Example.** V = 120 V rms, f = 60 Hz, R = 40 Ω, L = 0.20 H, C = 50 μF: X_L = 75.4 Ω, X_C = 53.1 Ω, |Z| = 45.8 Ω, I = 2.62 A rms, φ = 29.2° (inductive, current lags).

### 8.3 Power in AC circuits
Average power P = V_rms I_rms cos φ = I_rms^2 R. **Power factor** cos φ; apparent power S = V_rms I_rms (VA); reactive power Q = V_rms I_rms sin φ (var). For the example, P = 274 W, power factor 0.873. Industry penalises low power factor; capacitor banks correct it. Complex power S = P + jQ = V I*.

### 8.4 Resonance and filters
Series RLC resonance at ω0 = 1/sqrt(LC), f0 = 50.3 Hz for the example: X_L = X_C, Z = R (minimum), and current is maximum. **Quality factor** Q = ω0 L/R (the example gives 1.58); bandwidth Δf = f0/Q. Parallel RLC resonance gives maximum impedance. **First-order filters:** RC low-pass (output across C) has H(jω) = 1/(1 + j ω R C) with cut-off f_c = 1/(2π R C) where the gain falls to 1/sqrt 2 (-3 dB); RC high-pass is the reverse. Radio tuning, crossover networks and sensor conditioning use these.

## Chapter 9. Maxwell's Equations and Electromagnetic Waves

### 9.1 Displacement current
Ampère's law is inconsistent for a capacitor being charged: there is current in the wire but none in the gap, so the result would depend on the surface chosen. Maxwell added the **displacement current** I_d = ε0 dΦ_E/dt. The corrected law: ∮ B · dl = μ0 (I + ε0 dΦ_E/dt).
**Example.** A circular parallel-plate capacitor (plate radius 5.0 cm) is charged with I = 2.0 A. At a radius 2.0 cm inside the gap, B = μ0 I r/(2π R^2) = 3.2 μT, and dE/dt = I/(ε0 A) = 2.9 × 10^13 V/(m s).

### 9.2 Maxwell's equations
- **Gauss (electric):** ∮ E · dA = Q_enc/ε0. Charges are sources of E.
- **Gauss (magnetic):** ∮ B · dA = 0. No magnetic monopoles.
- **Faraday:** ∮ E · dl = -dΦ_B/dt. A changing B produces E.
- **Ampère-Maxwell:** ∮ B · dl = μ0 I_enc + μ0 ε0 dΦ_E/dt. Currents and a changing E produce B.
Together with the Lorentz force F = q(E + v × B), these four equations describe all classical electromagnetism. In differential form: ∇·E = ρ/ε0, ∇·B = 0, ∇×E = -∂B/∂t, ∇×B = μ0 J + μ0 ε0 ∂E/∂t. In vacuum they combine to the wave equation ∇²E = μ0 ε0 ∂²E/∂t², predicting waves at v = 1/sqrt(μ0 ε0) = c.

### 9.3 Electromagnetic waves
A plane wave travelling along +x: E = E_max sin(kx - ωt) in one transverse direction and B = B_max sin(kx - ωt) in the perpendicular transverse direction, in phase, with **E/B = c** and E × B along the propagation direction. Speed c = f λ = 3.00 × 10^8 m/s in vacuum; in a medium v = c/n with refractive index n = sqrt(κ μ_r).
- **The spectrum:** radio (λ > 1 mm), microwaves, infrared, visible (400 to 700 nm), ultraviolet, X-rays, gamma rays. Wi-Fi at 2.4 GHz has λ = 12.5 cm; FM radio at 100 MHz has λ = 3.0 m; photons carry E = h f.
- **Energy and intensity:** energy density u = ε0 E^2 (electric and magnetic parts equal). **Poynting vector** S = (1/μ0) E × B gives power per unit area; the average intensity is I = (1/2) ε0 c E_max^2 = E_max^2/(2 μ0 c). For E_max = 100 V/m: B_max = 3.3 × 10^-7 T, I = 13.3 W/m^2. Radiation pressure on a perfect absorber is I/c = 4.4 × 10^-8 Pa.
- **Generation and reception:** accelerating charges radiate; an antenna of length about λ/2 radiates efficiently. Intensity falls as 1/r^2 from a point source (Friis equation for links). Skin effect: high-frequency currents flow near the surface of conductors (skin depth δ = sqrt(2/(ω μ σ))).
- **Reflection and refraction:** Snell's law n1 sin θ1 = n2 sin θ2; total internal reflection beyond the critical angle sin θ_c = n2/n1 (optical fibres); polarisation and Malus's law I = I0 cos^2 θ.
- **Transmission lines and waveguides** carry guided EM waves at microwave frequencies. EM compatibility (EMC) standards govern unwanted emissions and immunity of electronic equipment.

## Chapter 10. Common Mistakes Checklist
1. Using E = k q/r^2 for extended distributions without integrating, or applying Gauss's law without enough symmetry.
2. Confusing potential and potential energy, or forgetting that V is a scalar and E a vector.
3. Treating the voltage across a capacitor as instantly changing (it is continuous), or the current through an inductor.
4. Adding series capacitors like series resistors (the rules are reversed).
5. Mixing peak and rms values in AC power calculations, and degrees with radians in phase calculations.
6. Using the right-hand rule inconsistently (for the force on a negative charge reverse the direction).
7. Applying the magnetic force formula for a charge moving parallel to B (the force is zero).
8. Forgetting the minus sign (Lenz's law) in Faraday's law, and its role in conservation of energy.
