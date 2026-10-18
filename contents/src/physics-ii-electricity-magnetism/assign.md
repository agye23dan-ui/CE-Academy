# Physics II (Electricity and Magnetism): Assignments with Worked Solutions

Constants: k = 8.99 × 10^9 N m^2/C^2, ε0 = 8.854 × 10^-12 F/m, e = 1.602 × 10^-19 C, m_e = 9.109 × 10^-31 kg, m_p = 1.673 × 10^-27 kg, μ0 = 4π × 10^-7 T m/A, c = 3.00 × 10^8 m/s. Draw a diagram for every problem, state your sign conventions, solve symbolically, then substitute numbers and check units. All numerical answers below were verified by calculation.

# Assignment 1: Electrostatics (70 marks)

## Questions

**Q1. (8 marks)** (a) Find the force between q1 = +3.0 μC and q2 = -2.0 μC separated by 0.20 m [3]. (b) Charges +4.0 μC (at x = 0) and +1.0 μC (at x = 0.30 m) lie on the x-axis. Where on the axis between them is the electric field zero? [5]

**Q2. (8 marks)** (a) Two +4.0 nC charges are at x = -0.10 m and x = +0.10 m. Find the electric field at (0, 0.10 m) [4]. (b) A ring of radius 0.10 m carries +5.0 nC. Find E on the axis at 0.20 m from the centre and V there [4].

**Q3. (8 marks)** Find the electric field (a) at 5.0 cm from an infinitely long line with λ = 2.0 nC/m [2]; (b) near a large sheet with σ = 3.0 nC/m^2 [2]; (c) between and outside parallel plates with σ = ±3.0 nC/m^2 [2]; (d) derive the line-charge result using Gauss's law [2].

**Q4. (8 marks)** An insulating sphere of radius R = 0.10 m carries a uniform charge Q = 8.0 nC. Use Gauss's law to find E at r = 0.05 m and r = 0.20 m, and sketch E(r).

**Q5. (12 marks)** A solid conducting sphere (radius a = 0.050 m) carries +6.0 nC. It is surrounded by a concentric conducting spherical shell with inner radius b = 0.10 m and outer radius c = 0.12 m, carrying a net charge of -2.0 nC. (a) Find the charges on the inner and outer surfaces of the shell [3]. (b) Find E at r = 0.03, 0.08, 0.11 and 0.20 m [4]. (c) Find the potential of the outer shell surface and of the inner sphere (V = 0 at infinity) [5].

**Q6. (10 marks)** (a) Find the electric potential energy of three +1.0 μC charges at the corners of an equilateral triangle of side 0.10 m [3]. (b) A proton moves 0.20 m along the direction of a uniform field of 500 V/m, starting from rest. Find the potential difference, the kinetic energy gained and its speed [4]. (c) Explain why moving along an equipotential needs no work [3].

**Q7. (8 marks)** An electron is accelerated from rest through 500 V and then passes between deflection plates for a distance of 5.0 cm in a perpendicular field of 2000 V/m. Find its speed after acceleration, the time spent between the plates and the deflection.

**Q8. (8 marks)** (a) A parallel-plate capacitor has A = 0.010 m^2 and d = 1.0 mm. Find C, and Q and U at 100 V [3]. (b) A dielectric with κ = 4 fills it while it stays connected to the 100 V source. Find C, Q, U [2]. (c) If instead the capacitor is first disconnected (Q fixed) and then the dielectric is inserted, find V and U, and the work done by the field pulling the dielectric in [3].

## Solutions and Marking Guide

**Q1.**
(a) F = k |q1 q2|/r^2 = 8.99 × 10^9 (3.0 × 10^-6)(2.0 × 10^-6)/(0.20)^2 = 0.05394/0.04 = **1.35 N**, attractive (opposite signs).
(b) Step 1: Between the charges the fields point in opposite directions.
Step 2: Let x be the distance from the +4 μC charge: k(4)/x^2 = k(1)/(0.30 - x)^2, so 2/x = 1/(0.30 - x) (take square roots).
Step 3: Then 2(0.30 - x) = x, so 0.60 = 3x and **x = 0.20 m** from the larger charge (0.10 m from the smaller).
Step 4: Check: 4/0.04 = 100 and 1/0.01 = 100 ✓.

**Q2.**
(a) Each charge is at distance r = sqrt(0.10^2 + 0.10^2) = 0.1414 m, so E1 = E2 = k q/r^2 = 8.99 × 10^9 · 4.0 × 10^-9/0.020 = 1798 N/C. The x-components cancel; the y-components add: E = 2 · 1798 · cos 45° = **2543 N/C in the +y direction**.
(b) E_axis = k Q z/(a^2 + z^2)^(3/2) = 8.99 × 10^9 · 5.0 × 10^-9 · 0.20/(0.05)^(3/2) = 8.99/0.01118 = **804 N/C** (along the axis, away from the ring). V = k Q/sqrt(a^2 + z^2) = 44.95/0.2236 = **201 V**.

**Q3.**
(a) E = 2kλ/r = 2(8.99 × 10^9)(2.0 × 10^-9)/0.05 = **719 N/C** (radially outward).
(b) E = σ/(2ε0) = 3.0 × 10^-9/(1.771 × 10^-11) = **169 N/C**, uniform, perpendicular to the sheet.
(c) Between oppositely charged plates the fields add: E = σ/ε0 = **339 N/C**; outside the plates the fields cancel: **0**.
(d) Choose a coaxial cylinder of radius r and length L. The flux passes only through the curved surface (by symmetry E is radial): E (2π r L) = λ L/ε0, so **E = λ/(2π ε0 r) = 2kλ/r** ✓.

**Q4.** Step 1: Take a spherical Gaussian surface of radius r.
Step 2: Outside (r = 0.20 m): E (4π r^2) = Q/ε0, so E = k Q/r^2 = 8.99 × 10^9 · 8.0 × 10^-9/0.04 = **1798 N/C**.
Step 3: Inside (r = 0.05 m): the enclosed charge is Q (r/R)^3, so E = k Q r/R^3 = 8.99 × 10^9 · 8.0 × 10^-9 · 0.05/10^-3 = **3596 N/C**.
Step 4: The graph rises linearly from 0 to a maximum of k Q/R^2 = 7192 N/C at r = R and then falls as 1/r^2 (Marks: 3 inside, 3 outside, 2 sketch.)

**Q5.**
(a) E = 0 inside the conducting shell material, so the inner surface must carry -6.0 nC to cancel the inner sphere's +6.0 nC for a Gaussian surface within the shell. The shell's net charge is -2.0 nC, so the outer surface carries -2.0 - (-6.0) = **+4.0 nC**.
(b) r = 0.03 m (inside the solid conductor): **E = 0**. r = 0.08 m (between a and b): enclosed +6.0 nC: E = 8.99 × 10^9 · 6.0 × 10^-9/(0.08)^2 = **8.43 × 10^3 N/C** (radially outward). r = 0.11 m (inside the shell conductor): **E = 0**. r = 0.20 m: enclosed net +4.0 nC: E = 8.99 × 10^9 · 4.0 × 10^-9/0.04 = **899 N/C**.
(c) Step 1: Outer surface of the shell: V = k Q_net/c = 8.99 × 10^9 · 4.0 × 10^-9/0.12 = **300 V**.
Step 2: The shell is an equipotential, so V = 300 V at r = b also.
Step 3: For the inner sphere: V(a) = V(b) + k(6.0 nC)(1/a - 1/b) = 300 + 53.94(20 - 10) = 300 + 539 = **839 V** (Equivalently V(a) = k(6.0 nC)/a + k(-6.0 nC)/b + k(4.0 nC)/c = 1079 - 539 + 300 = 839 V.)

**Q6.**
(a) U = Σ k q_i q_j/r_ij = 3 k q^2/a = 3 · 8.99 × 10^9 · 10^-12/0.10 = **0.270 J**.
(b) ΔV = E d = 500 · 0.20 = **100 V** (the potential drops along the field, so a positive charge gains energy). The kinetic energy gained = e ΔV = **100 eV = 1.60 × 10^-17 J**, so v = sqrt(2K/m_p) = sqrt(3.204 × 10^-17/1.673 × 10^-27) = **1.38 × 10^5 m/s**.
(c) W = q ΔV and ΔV = 0 on an equipotential; equivalently the force qE is perpendicular to the displacement, so F · dl = 0.

**Q7.** v = sqrt(2 e V/m) = sqrt(2 · 1.602 × 10^-19 · 500/9.109 × 10^-31) = **1.33 × 10^7 m/s** (4.4 percent of c). t = 0.050/1.326 × 10^7 = **3.77 ns**. a = eE/m = 1.602 × 10^-19 · 2000/9.109 × 10^-31 = 3.52 × 10^14 m/s^2. Deflection y = (1/2) a t^2 = 0.5 · 3.52 × 10^14 · (3.77 × 10^-9)^2 = **2.5 mm**. (Gravity is negligible: eE/(m g) ~ 10^13.)

**Q8.**
(a) Step 1: C = ε0 A/d = 8.854 × 10^-12 · 0.010/10^-3 = **88.5 pF**.
Step 2: Q = C V = **8.85 nC**.
Step 3: U = (1/2) C V^2 = **0.443 μJ**.
(b) C = κ C0 = **354 pF**; with V = 100 V, Q = **35.4 nC** and U = **1.77 μJ** (all multiplied by 4; the battery supplies the extra charge).
(c) With Q = 8.85 nC fixed, C = 354 pF so V = Q/C = **25 V** and U = Q^2/(2C) = **0.111 μJ**. The energy decrease 0.443 - 0.111 = **0.332 μJ** is the work done by the field on the dielectric as it is pulled in.

---

# Assignment 2: DC Circuits (70 marks)

## Questions

**Q1. (8 marks)** A copper wire of length 2.0 m and diameter 1.0 mm (ρ = 1.68 × 10^-8 Ω m, n = 8.5 × 10^28 m^-3) carries 5.0 A. Find (a) its resistance [2]; (b) the voltage across it and the power dissipated [3]; (c) the drift speed of the electrons [3].

**Q2. (8 marks)** A 10 Ω resistor is in series with a parallel pair of 20 Ω and 30 Ω resistors, and the combination is connected to 44 V. Find the equivalent resistance, the total current, the current and power in each resistor.

**Q3. (12 marks)** Three branches are connected in parallel between a top node and a bottom node (taken as 0 V): branch 1 has an ideal 12 V source in series with 2.0 Ω (positive terminal toward the top node); branch 2 has an ideal 6.0 V source in series with 1.0 Ω (positive toward the top); branch 3 is a 4.0 Ω resistor. (a) Find the top-node voltage by KCL [5]. (b) Find the current in each branch and say whether each source delivers or absorbs power [4]. (c) Verify energy conservation [3].

**Q4. (12 marks)** A 100 μF capacitor charges through a 10 kΩ resistor from a 12 V source. (a) Find τ, the initial current and the time to reach 9.0 V [4]. (b) Find the capacitor voltage and current at t = 2.0 s [3]. (c) The fully charged capacitor is then discharged through the same resistor: find the voltage after 2.0 s and the time to fall to 3.0 V [3]. (d) Compare the energy stored with the energy dissipated in the resistor during charging [2].

**Q5. (10 marks)** A 10 V source feeds a divider of 6.0 kΩ (series) and 3.0 kΩ (to ground). A load R_L = 3.0 kΩ is connected across the 3.0 kΩ resistor. (a) Find the Thevenin equivalent seen by the load [4]. (b) Find the load voltage and power [3]. (c) What load resistance receives maximum power, and how much? [3]

**Q6. (6 marks)** A battery has EMF 12 V and internal resistance 0.50 Ω and drives a 5.5 Ω load. Find the current, terminal voltage, power delivered to the load, efficiency and short-circuit current.

**Q7. (6 marks)** A 1500 W heater is designed for 120 V. Find its current and resistance. If it runs 4.0 h per day for 30 days, find the energy in kWh and the cost at $0.15 per kWh. What power would it dissipate if connected to 100 V (assume constant resistance)?

**Q8. (8 marks)** (a) Choose a series resistor to run an LED (forward voltage 2.0 V, 20 mA) from 5.0 V, and find its power rating [3]. (b) Design a divider (R1, R2) to produce 3.3 V from 5.0 V for an ADC input with R2 = 3.3 kΩ [2]. (c) The ADC input has a resistance of 10 kΩ. Find the actual voltage and the percentage error, and suggest an improvement [3].

## Solutions and Marking Guide

**Q1.**
(a) A = π(0.50 × 10^-3)^2 = 7.854 × 10^-7 m^2. R = ρ L/A = 1.68 × 10^-8 · 2.0/7.854 × 10^-7 = **0.0428 Ω**.
(b) V = I R = 5.0 · 0.0428 = **0.214 V**; P = I^2 R = 25 · 0.0428 = **1.07 W**.
(c) v_d = I/(n e A) = 5.0/(8.5 × 10^28 · 1.602 × 10^-19 · 7.854 × 10^-7) = **4.7 × 10^-4 m/s (0.47 mm/s)**. Electrons drift very slowly; the signal travels as a field disturbance close to c.

**Q2.** Step 1: The parallel pair: (20 × 30)/(20 + 30) = 12 Ω.
Step 2: R_eq = 10 + 12 = **22 Ω**.
Step 3: I = 44/22 = **2.0 A**.
Step 4: The voltage across the parallel pair = 2.0 · 12 = 24 V, so I_20 = 24/20 = **1.2 A** and I_30 = 24/30 = **0.8 A** (sum 2.0 ✓).
Step 5: Powers: P_10 = 2^2 · 10 = **40 W**; P_20 = 1.2^2 · 20 = **28.8 W**; P_30 = 0.8^2 · 30 = **19.2 W**; total 88 W = 44 V · 2 A ✓.

**Q3.**
(a) Step 1: Let V be the top-node voltage.
Step 2: Currents into the node from branch 1 and 2: (12 - V)/2 and (6 - V)/1; current out through branch 3: V/4.
Step 3: KCL: (12 - V)/2 + (6 - V) = V/4.
Step 4: Multiply by 4: 2(12 - V) + 4(6 - V) = V, so 48 = 7V and **V = 6.857 V**.
(b) Step 1: I1 = (12 - 6.857)/2 = **+2.571 A** (out of the 12 V source's positive terminal); I2 = (6 - 6.857)/1 = **-0.857 A** (flowing into the positive terminal of the 6 V source, so it is **being charged and absorbs power**); I3 = 6.857/4 = **1.714 A**.
Step 2: Check: 2.571 - 0.857 = 1.714 ✓. The 12 V source delivers power (12 · 2.571 = 30.86 W).
Step 3: The 6 V source absorbs 6 · 0.857 = 5.14 W.
(c) Step 1: Power delivered = 30.86 W.
Step 2: Power dissipated: I1^2 · 2 = 13.22 W; I2^2 · 1 = 0.735 W; I3^2 · 4 = 11.76 W; the 6 V source absorbs 5.14 W.
Step 3: Total absorbed = 13.22 + 0.735 + 11.76 + 5.14 = 30.86 W ✓.

**Q4.**
(a) τ = RC = 10^4 · 100 × 10^-6 = **1.0 s**. I0 = V/R = 12/10^4 = **1.2 mA**. v_C = 12(1 - e^(-t/τ)) = 9.0 gives e^(-t) = 0.25, t = ln 4 = **1.39 s**.
(b) At t = 2.0 s: v_C = 12(1 - e^(-2)) = 12(0.8647) = **10.38 V**; I = 1.2 mA · e^(-2) = **0.162 mA**.
(c) Discharge: v = 12 e^(-t). At 2.0 s: 12 e^(-2) = **1.62 V**. v = 3.0 V: e^(-t) = 0.25, t = **1.39 s**.
(d) Energy stored = (1/2) C V^2 = 0.5 · 100 × 10^-6 · 144 = **7.2 mJ**. The source supplied Q V = (1.2 mC)(12 V) = 14.4 mJ, so the resistor dissipated **7.2 mJ**: exactly half the supplied energy, independent of R.

**Q5.**
(a) V_th = 10 · 3.0/(6.0 + 3.0) = **3.33 V**. R_th = 6.0 kΩ ∥ 3.0 kΩ = **2.0 kΩ**.
(b) V_L = V_th R_L/(R_th + R_L) = 3.33 · 3.0/5.0 = **2.0 V**. P_L = V_L^2/R_L = 4/3000 = **1.33 mW**. (Check directly: 3.0 kΩ ∥ 3.0 kΩ = 1.5 kΩ and 10 · 1.5/7.5 = 2.0 V ✓.)
(c) Maximum power when R_L = R_th = **2.0 kΩ**: P_max = V_th^2/(4 R_th) = 11.1/8000 = **1.39 mW** (a small gain over 1.33 mW; for power transmission we want efficiency, not matching).

**Q6.** Step 1: I = ε/(r + R) = 12/6.0 = **2.0 A**.
Step 2: V_terminal = ε - I r = 12 - 1.0 = **11 V** (= I R = 11 V ✓).
Step 3: P_load = I^2 R = 4 · 5.5 = **22 W**.
Step 4: Total power = ε I = 24 W, so the efficiency = 22/24 = **91.7 percent** (the 2 W is lost in the internal resistance).
Step 5: Short-circuit current = ε/r = **24 A**.

**Q7.** Step 1: I = P/V = 1500/120 = **12.5 A**; R = V^2/P = 14400/1500 = **9.6 Ω**.
Step 2: Energy = 1.5 kW · 4 h · 30 = **180 kWh**, cost = 180 · 0.15 = **$27.00**.
Step 3: At 100 V: P = V^2/R = 10,000/9.6 = **1042 W** (a drop of about 31 percent).

**Q8.**
(a) R = (5.0 - 2.0)/0.020 = **150 Ω**. P = I^2 R = (0.020)^2 · 150 = **0.060 W**, so a standard 1/4 W resistor is ample.
(b) V_out = V_in R2/(R1 + R2): 3.3 = 5.0 · 3.3/(R1 + 3.3), so R1 + 3.3 = 5.0 and **R1 = 1.7 kΩ** (nearest standard value 1.8 kΩ).
(c) With the 10 kΩ load: R2 ∥ R_in = 3.3 · 10/13.3 = 2.48 kΩ, so V = 5.0 · 2.48/(1.7 + 2.48) = **2.97 V**, an error of -10 percent. Improvement: use smaller resistors (for example 170 Ω and 330 Ω, at the cost of higher current), buffer the node with an op-amp voltage follower, or choose an ADC with a higher input impedance.

---

# Assignment 3: Magnetism, Induction, AC Circuits and Electromagnetic Waves (90 marks)

## Questions

**Q1. (10 marks)** (a) A proton moves at 2.0 × 10^6 m/s perpendicular to a 0.50 T field. Find the radius, period and frequency [4]. (b) A 0.30 m wire carries 4.0 A perpendicular to a 0.20 T field. Find the force [2]. (c) In a velocity selector E = 3000 V/m and B = 0.10 T. Which speed passes undeflected? What happens to faster particles? [4]

**Q2. (12 marks)** Find B for (a) a long straight wire with 10 A at 5.0 cm [3]; (b) a solenoid of 2000 turns/m with 2.0 A [3]; (c) the centre of a 10-turn loop of radius 5.0 cm carrying 2.0 A [3]; (d) the force per metre between two parallel wires 1.0 m apart carrying 5.0 A each in the same direction [3].

**Q3. (12 marks)** (a) A 200-turn coil of area 0.010 m^2 sees B (perpendicular) change from 0 to 0.50 T in 0.10 s. Find the induced EMF [3]. (b) A generator coil with N = 100, A = 0.020 m^2 rotates at 60 Hz in a 0.30 T field. Find the maximum EMF [3]. (c) A 0.50 m rod moves at 4.0 m/s perpendicular to a 0.20 T field on rails closed by a 2.0 Ω resistor. Find the EMF, current, magnetic force on the rod, and show that the mechanical and electrical powers agree [6].

**Q4. (14 marks)** (a) A solenoid has N = 500, A = 4.0 cm^2 and length 0.25 m. Find its inductance and the energy stored at 2.0 A [4]. (b) An RL circuit has R = 50 Ω, L = 0.10 H and V = 10 V. Find τ, the final current and the time to reach 0.15 A [4]. (c) An LC circuit has L = 10 mH and C = 10 μF. Find the resonant frequency [2]. (d) Explain why opening the switch of an inductive circuit produces a voltage spike, and how to protect against it [4].

**Q5. (14 marks)** A series RLC circuit has R = 40 Ω, L = 0.20 H, C = 50 μF, and is driven by 120 V rms at 60 Hz. Find (a) X_L, X_C, |Z| and the phase angle [4]; (b) the rms current [2]; (c) average power and power factor [3]; (d) the resonant frequency, the quality factor and the capacitor voltage at resonance [5].

**Q6. (10 marks)** A plane electromagnetic wave in vacuum has E_max = 100 V/m. (a) Find B_max and the average intensity [4]. (b) Find the radiation pressure on a perfect absorber [2]. (c) For f = 100 MHz find the wavelength [1]. (d) The wave enters glass with n = 1.5. Find its speed and, for light of vacuum wavelength 600 nm, the wavelength in the glass [3].

**Q7. (10 marks)** (a) State Maxwell's four equations in integral form and explain the physical meaning of each [4]. (b) A circular parallel-plate capacitor (plate radius 5.0 cm) is charged by a current of 2.0 A. Compute B at r = 2.0 cm inside the gap and the rate of change of E between the plates [4]. (c) Why was the displacement current necessary? [2]

**Q8. (8 marks)** (a) An ideal transformer reduces 120 V to 12 V with N1 = 500 turns. Find N2, and the primary and secondary currents for a 6.0 Ω load [4]. (b) A 100 kW load is supplied through a line with resistance 0.50 Ω at 1 kV and at 10 kV. Find the line loss and fractional loss in each case [4].

## Solutions and Marking Guide

**Q1.**
(a) r = m v/(q B) = 1.673 × 10^-27 · 2.0 × 10^6/(1.602 × 10^-19 · 0.50) = **4.18 cm**. T = 2π m/(q B) = **131 ns**, f = **7.62 MHz** (independent of speed).
(b) F = I L B = 4.0 · 0.30 · 0.20 = **0.24 N**.
(c) Undeflected when q E = q v B: v = E/B = 3000/0.10 = **3.0 × 10^4 m/s**. Faster particles feel a magnetic force q v B larger than q E and are deflected in the direction of the magnetic force; slower particles are deflected the other way.

**Q2.**
(a) B = μ0 I/(2π r) = 2 × 10^-7 · 10/0.05 = **4.0 × 10^-5 T**.
(b) B = μ0 n I = 4π × 10^-7 · 2000 · 2.0 = **5.03 × 10^-3 T**.
(c) B = μ0 N I/(2R) = 4π × 10^-7 · 10 · 2.0/0.10 = **2.51 × 10^-4 T**.
(d) F/L = μ0 I1 I2/(2π d) = 2 × 10^-7 · 25/1.0 = **5.0 × 10^-6 N/m**, attractive for currents in the same direction.

**Q3.**
(a) |ε| = N A ΔB/Δt = 200 · 0.010 · 0.50/0.10 = **10 V**.
(b) ε_max = N A B ω = 100 · 0.020 · 0.30 · (2π · 60) = 0.6 · 377 = **226 V** (peak; 160 V rms).
(c) ε = B L v = 0.20 · 0.50 · 4.0 = **0.40 V**; I = ε/R = **0.20 A**; F = I L B = 0.20 · 0.50 · 0.20 = **0.020 N** opposing the motion (Lenz). Mechanical power F v = 0.020 · 4.0 = **0.080 W**; electrical power I^2 R = 0.04 · 2.0 = **0.080 W** ✓: energy is conserved.

**Q4.**
(a) L = μ0 N^2 A/ℓ = 4π × 10^-7 · 250,000 · 4.0 × 10^-4/0.25 = **0.503 mH**. U = (1/2) L I^2 = 0.5 · 5.03 × 10^-4 · 4 = **1.01 mJ**.
(b) τ = L/R = 0.10/50 = **2.0 ms**. I_final = V/R = **0.20 A**. 0.15 = 0.20(1 - e^(-t/τ)) gives e^(-t/τ) = 0.25, t = τ ln 4 = **2.77 ms**.
(c) f = 1/(2π sqrt(LC)) = 1/(2π sqrt(10^-2 · 10^-5)) = 1/(2π · 3.162 × 10^-4) = **503 Hz**.
(d) The inductor opposes the sudden change in current: v = L dI/dt. Interrupting the current in a very short time makes dI/dt very large, producing a large voltage (a spike or arc across the switch). Protection: a flyback (freewheeling) diode across the inductor that gives the current a path, an RC snubber across the switch, or a transient voltage suppressor (TVS), and for relays or motors keep the coil current decaying through the diode.

**Q5.**
(a) Step 1: ω = 2π · 60 = 377 rad/s.
Step 2: X_L = ω L = **75.4 Ω**; X_C = 1/(ω C) = 1/(377 · 50 × 10^-6) = **53.1 Ω**. |Z| = sqrt(40^2 + (75.4 - 53.1)^2) = sqrt(1600 + 499.6) = **45.8 Ω**.
Step 3: Phase φ = arctan(22.3/40) = **29.2°** (net inductive, current lags voltage).
(b) I_rms = 120/45.8 = **2.62 A**.
(c) P = I^2 R = 6.86 · 40 = **274 W**; power factor = R/|Z| = cos φ = **0.873**. (Apparent power 314 VA.)
(d) Step 1: f0 = 1/(2π sqrt(L C)) = 1/(2π sqrt(0.20 · 50 × 10^-6)) = **50.3 Hz**.
Step 2: Q = ω0 L/R = 2π · 50.3 · 0.20/40 = **1.58**.
Step 3: At resonance I = 120/40 = 3.0 A, X_C = 1/(ω0 C) = 63.3 Ω, so V_C = 3.0 · 63.3 = **190 V**, greater than the 120 V source (voltage magnification by Q).

**Q6.**
(a) B_max = E_max/c = 100/3.00 × 10^8 = **3.33 × 10^-7 T**. I = (1/2) ε0 c E_max^2 = 0.5 · 8.854 × 10^-12 · 3.00 × 10^8 · 10^4 = **13.3 W/m^2**.
(b) Pressure on a perfect absorber = I/c = 13.3/3.00 × 10^8 = **4.43 × 10^-8 Pa** (twice that for a perfect reflector).
(c) λ = c/f = 3.00 × 10^8/10^8 = **3.0 m**.
(d) v = c/n = **2.0 × 10^8 m/s**. The frequency is unchanged, so λ_glass = λ_vacuum/n = 600/1.5 = **400 nm**.

**Q7.**
(a) Step 1: **Gauss (electric):** ∮ E · dA = Q_enc/ε0: electric charges are the sources of E field lines.
Step 2: **Gauss (magnetic):** ∮ B · dA = 0: there are no magnetic charges; B lines are closed loops.
Step 3: **Faraday:** ∮ E · dl = -dΦ_B/dt: a changing magnetic flux induces an electric field (basis of generators, transformers).
Step 4: **Ampère-Maxwell:** ∮ B · dl = μ0 (I_enc + ε0 dΦ_E/dt): currents and changing electric flux create magnetic fields.
(b) Between the plates, the displacement current equals the conduction current I = 2.0 A, spread uniformly over the plate area. For a circle of radius r < R: B (2π r) = μ0 I (π r^2/π R^2), so B = μ0 I r/(2π R^2) = 2 × 10^-7 · 2.0 · 0.020/(0.050)^2 = **3.2 × 10^-6 T**. dE/dt = I/(ε0 A) = 2.0/(8.854 × 10^-12 · 7.854 × 10^-3) = **2.9 × 10^13 V/(m s)**.
(c) Without it, Ampère's law gives different answers for different surfaces bounded by the same loop (one through the wire, one through the gap of a charging capacitor), violating charge conservation. Adding the term makes the equations consistent, and it predicts electromagnetic waves travelling at c = 1/sqrt(μ0 ε0), later confirmed by Hertz.

**Q8.**
(a) V2/V1 = N2/N1, so N2 = 500 · 12/120 = **50 turns**. I2 = V2/R = 12/6.0 = **2.0 A**; the power is 24 W, so I1 = 24/120 = **0.20 A** (= I2 N2/N1 ✓).
(b) Step 1: At 1 kV: I = P/V = 100 A, loss = I^2 R = 10,000 · 0.5 = **5.0 kW (5 percent)**.
Step 2: At 10 kV: I = 10 A, loss = 100 · 0.5 = **50 W (0.05 percent)**.
Step 3: A tenfold increase in voltage cuts the loss by a factor of 100, which is why transmission uses high voltage with step-up and step-down transformers.
