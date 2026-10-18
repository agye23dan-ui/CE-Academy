# Circuit Analysis I: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** With the passive sign convention, an element absorbs power p = v i when the current
A) leaves the positive terminal  B) enters the positive terminal  C) is zero  D) is sinusoidal

**2.** KVL states that around any closed loop
A) the sum of currents is zero  B) the sum of voltages is zero  C) the sum of resistances is zero  D) power is zero

**3.** A 12 A current enters a 3 Ω resistor in parallel with a 6 Ω resistor. The current in the 3 Ω resistor is
A) 4 A  B) 6 A  C) 8 A  D) 12 A

**4.** A circuit has 5 nodes (including the reference) and no voltage sources. The number of node-voltage equations is
A) 5  B) 4  C) 3  D) 1

**5.** A supernode is needed when
A) a resistor is open  B) a voltage source connects two non-reference nodes  C) a current source is in parallel with a resistor  D) the circuit has an op-amp

**6.** The Norton current of a network equals
A) its open-circuit voltage  B) its short-circuit current  C) V_th × R_th  D) zero

**7.** When maximum power is transferred to the load, the efficiency of the Thevenin equivalent circuit is
A) 25 percent  B) 50 percent  C) 75 percent  D) 100 percent

**8.** A non-inverting amplifier with R_f = 20 kΩ and R_g = 10 kΩ has a gain of
A) 2  B) 3  C) -2  D) -3

**9.** For a constant (non-zero) input voltage, the output of an ideal inverting integrator is
A) a constant  B) a ramp  C) a sinusoid  D) zero

**10.** The energy stored in a 2 H inductor carrying 3 A is
A) 3 J  B) 6 J  C) 9 J  D) 18 J

**11.** The time constant of a series RL circuit with L = 0.5 H and R = 10 Ω is
A) 5 s  B) 0.5 s  C) 50 ms  D) 20 ms

**12.** A series RLC circuit is underdamped when
A) α > ω0  B) α = ω0  C) α < ω0  D) R = 0 only

**13.** The resistance that critically damps a series RLC circuit is
A) sqrt(L/C)  B) 2 sqrt(L/C)  C) L/C  D) 1/(2 sqrt(LC))

**14.** The impedance of a capacitor C at angular frequency ω is
A) jωC  B) 1/(jωC)  C) ωC  D) R

**15.** The phasor of v(t) = 10 sin(ωt) V, using cosine as the reference, is
A) 10∠0°  B) 10∠90°  C) 10∠-90°  D) 10∠180°

**16.** The unit of reactive power is
A) watt  B) VA  C) var  D) joule

**17.** A capacitive load has a power factor that is
A) lagging  B) leading  C) always 1  D) always 0

**18.** The quality factor of a series RLC circuit is
A) ω0 R/L  B) ω0 L/R  C) R/(ω0 L)  D) L/R

**19.** In a balanced Y-connected three-phase system the line voltage is
A) equal to the phase voltage  B) sqrt 3 times the phase voltage  C) 3 times the phase voltage  D) 1/sqrt 3 times the phase voltage

**20.** An ideal transformer with turns ratio N1:N2 = 10:1 reflects a secondary impedance Z to the primary as
A) Z/10  B) 10 Z  C) 100 Z  D) Z/100

## Section B: Short Questions (40 marks)

**B1. (5)** An element has 5 V across it and a current of -2 A flowing into its positive terminal. Is it absorbing or delivering power, and how much?

**B2. (5)** Convert a Δ with R_ab = 30 Ω, R_bc = 60 Ω and R_ca = 30 Ω to an equivalent Y and give the three resistances.

**B3. (5)** An op-amp summing amplifier has R_f = 40 kΩ, R1 = 10 kΩ with v1 = 2 V and R2 = 20 kΩ with v2 = -1 V. Find v_o (supply rails ±12 V).

**B4. (5)** A 12 V source is connected at t = 0 to R = 6 Ω in series with L = 0.3 H (initially zero current). Find i(t), and the current and inductor voltage at t = 50 ms.

**B5. (5)** Find the impedance of a 10 Ω resistor in parallel with a 0.1 H inductor at ω = 100 rad/s, in rectangular and polar form.

**B6. (5)** A load takes 5 A rms from a 120 V rms supply with a current lagging by 36.87°. Find P, Q and S.

**B7. (5)** A series RLC circuit has R = 20 Ω, L = 0.2 H and C = 5 μF. Find ω0, Q and the bandwidth.

**B8. (5)** An RC high-pass filter uses R = 10 kΩ and C = 15.9 nF. Find the cut-off frequency and the gain in dB at 100 Hz.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Nodal analysis with a voltage source.** A 12 V source connects node 1 to ground. A 4 Ω resistor connects node 1 to node 2; 6 Ω connects node 2 to ground; 3 Ω connects node 2 to node 3; 6 Ω connects node 3 to ground; a 2 A current source injects current into node 3.
(a) Write the node equations for v2 and v3 [4]. (b) Solve [2]. (c) Find the current delivered by the 12 V source and the power of each source [2]. (d) Verify the power balance [2].

**C2. Thevenin with a dependent source.** A 10 V source in series with 5 Ω feeds terminal a; a dependent current source of 0.2 v_a amperes flows from a to ground (v_a is the voltage of a with respect to ground). The load is connected between a and ground.
(a) Find the open-circuit voltage [3]. (b) Find the short-circuit current [2]. (c) Find R_th and draw the Thevenin equivalent [2]. (d) Find the maximum power the circuit can deliver and the load for it [3].

**C3. Second-order step response.** A series RLC circuit with R = 2 Ω, L = 1 H and C = 0.2 F is connected to a 10 V step at t = 0 with v_C(0) = 2 V and i(0) = 0.
(a) Find the roots and classify the response [3]. (b) Find v_C(t) [4]. (c) Find the time and value of the first peak, and the overshoot above the final value [3].

**C4. AC power and power-factor correction.** A 230 V rms, 50 Hz supply feeds two loads: load 1 absorbs 3 kW at 0.8 lagging; load 2 absorbs 2 kW at 0.9 leading.
(a) Find P, Q, S and the power factor of the combination [5]. (b) Find the supply current [2]. (c) Find the capacitor to make the combined power factor unity, and the resulting current [3].

**C5. Active filter.** A first-order active low-pass filter uses an inverting op-amp with an input resistor R = 10 kΩ and a feedback network of R_f = 100 kΩ in parallel with C_f = 1.59 nF.
(a) Find the DC gain [2]. (b) Find the cut-off frequency [3]. (c) Find the magnitude of the gain at 10 kHz in dB [3]. (d) State the roll-off rate and one advantage over a passive RC filter [2].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **B** · 3 **C** · 4 **B** · 5 **B** · 6 **B** · 7 **B** · 8 **B** · 9 **B** · 10 **C** · 11 **C** · 12 **C** · 13 **B** · 14 **B** · 15 **C** · 16 **C** · 17 **B** · 18 **B** · 19 **B** · 20 **C**

Brief reasons:
1. Passive sign convention: when the current enters the positive terminal the element absorbs power p = vi.
2. Kirchhoff's voltage law: the algebraic sum of voltages around any closed loop is zero.
3. Step 1: current divider: I₃ = I × R₆/(R₃ + R₆). Step 2: = 12 × 6/(3 + 6) = 12 × 6/9 = 8 A.
4. One equation is needed for each non-reference node: 5 - 1 = 4.
5. A supernode is needed when a voltage source connects two non-reference nodes, because the source current is unknown.
6. The Norton current is the short-circuit current of the network at the terminals.
7. At maximum power transfer R_L = R_th, so the same current flows through both and half of the power of the equivalent source goes to the load: 50 percent efficiency.
8. Step 1: non-inverting gain = 1 + R_f/R_g. Step 2: = 1 + 20/10 = 3.
9. Step 1: ideal inverting integrator: v_o = -(1/RC) ∫ v_in dt. Step 2: for a constant input the integral grows linearly, so the output is a ramp.
10. Step 1: w = (1/2)Li². Step 2: = (1/2)(2)(3)² = 9 J.
11. Step 1: τ = L/R. Step 2: = 0.5/10 = 0.05 s = 50 ms.
12. Underdamped when the damping rate α = R/2L is less than ω₀ = 1/√(LC) (complex roots).
13. Step 1: critical damping when R² = 4L/C. Step 2: R = 2√(L/C).
14. Capacitor impedance Z_C = 1/(jωC).
15. Step 1: sin(ωt) = cos(ωt - 90°). Step 2: so the cosine-reference phasor is 10∠-90°.
16. Reactive power is measured in volt-amperes reactive (var).
17. A capacitive load draws current that leads the voltage, so its power factor is leading.
18. Quality factor of a series RLC: Q = ω₀L/R.
19. In a balanced Y system V_line = √3 V_phase.
20. Step 1: reflected impedance Z' = (N₁/N₂)² Z. Step 2: = 10² Z = 100Z.

## Section B solutions

**B1.** Step 1: with the current entering the positive terminal the passive-sign power is p = vi = 5 × (-2) = -10 W.
Step 2: negative absorbed power means the element delivers power. **It delivers 10 W** (it is a source).

**B2.** Δ resistances R_ab = 30, R_bc = 60, R_ca = 30 Ω. Y legs: each leg = (product of the two adjacent Δ resistors)/(sum of the three).
Step 1: sum = 30 + 60 + 30 = 120 Ω.
Step 2: R_a (at node a, between R_ab and R_ca) = (30 × 30)/120 = **7.5 Ω**.
Step 3: R_b (at node b, between R_ab and R_bc) = (30 × 60)/120 = **15 Ω**.
Step 4: R_c (at node c, between R_bc and R_ca) = (60 × 30)/120 = **15 Ω**.

**B3.** Step 1: summing amplifier: v_o = -R_f(v₁/R₁ + v₂/R₂).
Step 2: v₁/R₁ = 2/10 k = 0.2 mA; v₂/R₂ = -1/20 k = -0.05 mA; sum = 0.15 mA.
Step 3: v_o = -40 k × 0.15 mA = **-6 V** (inside the ±12 V rails).

**B4.** Step 1: τ = L/R = 0.3/6 = 0.05 s.
Step 2: final current = V/R = 12/6 = 2 A, so **i(t) = 2(1 - e^(-20t)) A**.
Step 3: at t = 50 ms (one time constant): i = 2(1 - e^(-1)) = 2(0.6321) = **1.264 A**.
Step 4: inductor voltage v_L = V e^(-t/τ) = 12e^(-1) = **4.41 V**.
Check: v_L = 12 - iR = 12 - 6(1.264) = 4.41 V ✓.

**B5.** Step 1: Z_L = jωL = j(100)(0.1) = j10 Ω.
Step 2: parallel: Z = (10)(j10)/(10 + j10) = j100/(10 + j10).
Step 3: multiply by the conjugate (10 - j10): j100(10 - j10)/(100 + 100) = (j1000 + 1000)/200 = 5 + j5.
**Z = 5 + j5 Ω = 7.07∠45° Ω**.

**B6.** Step 1: S = V I = 120 × 5 = **600 VA**.
Step 2: P = S cos 36.87° = 600 × 0.8 = **480 W**.
Step 3: Q = S sin 36.87° = 600 × 0.6 = **360 var** (lagging, inductive).

**B7.** R = 20 Ω, L = 0.2 H, C = 5 μF.
Step 1: ω₀ = 1/√(LC) = 1/√(0.2 × 5 × 10⁻⁶) = 1/√(10⁻⁶) = **1000 rad/s**.
Step 2: Q = ω₀L/R = (1000)(0.2)/20 = **10**.
Step 3: BW = ω₀/Q = 1000/10 = **100 rad/s** (15.9 Hz).

**B8.** Step 1: f_c = 1/(2πRC) = 1/(2π × 10⁴ × 15.9 × 10⁻⁹) = 1/(1.0 × 10⁻³) = **1.0 kHz**.
Step 2: high-pass magnitude |H| = (f/f_c)/√(1 + (f/f_c)²); at 100 Hz, f/f_c = 0.1.
Step 3: |H| = 0.1/√(1 + 0.01) = 0.1/1.005 = 0.0995.
Step 4: 20 log₁₀(0.0995) = **-20.0 dB**.

## Section C solutions

**C1.** Node 1 is held at 12 V; unknowns v₂, v₃.
(a) Step 1 (KCL node 2): (v₂ - 12)/4 + v₂/6 + (v₂ - v₃)/3 = 0. Collect: v₂(1/4 + 1/6 + 1/3) - v₃/3 = 12/4, i.e. 0.75v₂ - 0.3333v₃ = 3.
Step 2 (KCL node 3): (v₃ - v₂)/3 + v₃/6 = 2, i.e. -0.3333v₂ + 0.5v₃ = 2.
(b) Step 3 (solve): multiply the first by 12: 9v₂ - 4v₃ = 36; the second by 6: -2v₂ + 3v₃ = 12.
Step 4: from the second, v₃ = (12 + 2v₂)/3. Substitute: 9v₂ - 4(12 + 2v₂)/3 = 36, so 27v₂ - 48 - 8v₂ = 108 and 19v₂ = 156.
**v₂ = 156/19 = 8.21 V**; v₃ = (12 + 16.42)/3 = **180/19 = 9.47 V**.
(c) Step 5: the 12 V source current into node 2 through the 4 Ω: (12 - 8.21)/4 = **0.947 A**. Power delivered by the 12 V source = 12 × 0.947 = **11.37 W**.
Step 6: the 2 A source delivers v₃ × 2 = 9.47 × 2 = **18.95 W**.
(d) Step 7 (absorbed powers): 4 Ω: 0.947² × 4 = 3.59 W; 6 Ω at node 2: 8.21²/6 = 11.24 W; 3 Ω: (8.21 - 9.47)²/3 = 0.53 W; 6 Ω at node 3: 9.47²/6 = 14.96 W. Total = 3.59 + 11.24 + 0.53 + 14.96 = **30.32 W**.
Step 8: delivered = 11.37 + 18.95 = 30.32 W ✓ (power balance).

**C2.**
(a) Open circuit (nothing connected at a): the only paths are through the 5 Ω from the 10 V source and the dependent source 0.2v_a to ground.
Step 1: KCL at a: (v_a - 10)/5 + 0.2v_a = 0.
Step 2: 0.2v_a - 2 + 0.2v_a = 0, so 0.4v_a = 2 and **V_oc = 5 V**.
(b) Step 1: short a to ground: v_a = 0, so the dependent source 0.2v_a = 0.
Step 2: the whole 10 V is across 5 Ω: **I_sc = 10/5 = 2 A**.
(c) Step 1: R_th = V_oc/I_sc = 5/2 = **2.5 Ω**. The Thevenin equivalent is a 5 V source in series with 2.5 Ω.
(The dependent source makes R_th differ from the 5 Ω one would get by simply turning off the independent source.)
(d) Step 1: maximum power at R_L = R_th = **2.5 Ω**.
Step 2: P_max = V_th²/(4R_th) = 25/(4 × 2.5) = 25/10 = **2.5 W**.

**C3.** R = 2 Ω, L = 1 H, C = 0.2 F, 10 V step, v_C(0) = 2 V, i(0) = 0.
(a) Step 1: characteristic equation s² + (R/L)s + 1/(LC) = s² + 2s + 5 = 0.
Step 2: s = [-2 ± √(4 - 20)]/2 = -1 ± j2. Complex roots: **underdamped** (α = 1, ω₀ = √5 = 2.236, ω_d = 2).
(b) Step 1: v_C = 10 + e^(-t)(A cos 2t + B sin 2t) (final value 10 V).
Step 2: v_C(0) = 10 + A = 2, so A = -8.
Step 3: v_C'(0) = i(0)/C = 0. Derivative: v_C' = e^(-t)[(-A + 2B) cos 2t + (-B - 2A) sin 2t], so v_C'(0) = -A + 2B = 0 and B = A/2 = -4.
**v_C(t) = 10 - e^(-t)(8 cos 2t + 4 sin 2t)**.
(c) Step 1: differentiate v_C: v_C' = e^(-t)(8 cos 2t + 4 sin 2t) - e^(-t)(-16 sin 2t + 8 cos 2t) = 20e^(-t) sin 2t.
Step 2: the first zero after t = 0 is where sin 2t = 0, 2t = π: **t = π/2 = 1.571 s**.
Step 3: v_C(π/2) = 10 - e^(-π/2)(8 cos π + 4 sin π) = 10 - 0.2079(-8) = 10 + 1.663 = **11.66 V**.
Step 4: overshoot above the final value = 11.66 - 10 = **1.66 V** (16.6 percent of the final value).

**C4.** V = 230 V, f = 50 Hz.
(a) Step 1 (load 1): P₁ = 3000 W; tan(arccos 0.8) = 0.75, so Q₁ = +2250 var (lagging).
Step 2 (load 2): P₂ = 2000 W; arccos 0.9 = 25.84°, tan = 0.4843, so Q₂ = -2000(0.4843) = -969 var (leading, capacitive).
Step 3 (sum): **P = 3000 + 2000 = 5000 W**; **Q = 2250 - 969 = 1281 var**.
Step 4: S = √(5000² + 1281²) = √(25.0 × 10⁶ + 1.64 × 10⁶) = **5162 VA**.
Step 5: pf = P/S = 5000/5162 = **0.969 lagging**.
(b) I = S/V = 5162/230 = **22.4 A**.
(c) Step 1: to reach unity pf the capacitor must supply the net 1281 var.
Step 2: C = Q_c/(ωV²) = 1281/(314.16 × 230²) = 1281/(314.16 × 52,900) = 1281/16.62 × 10⁶ = **77 μF**.
Step 3: new current I = P/V = 5000/230 = **21.7 A**.

**C5.** Inverting active low-pass filter, R = 10 kΩ, R_f = 100 kΩ ∥ C_f = 1.59 nF.
(a) Step 1: at DC the capacitor is open, so the feedback impedance is R_f and the gain = -R_f/R = -100/10 = **-10** (20 dB magnitude).
(b) Step 1: f_c = 1/(2πR_fC_f) = 1/(2π × 10⁵ × 1.59 × 10⁻⁹) = 1/(1.0 × 10⁻³) = **1.0 kHz**.
(c) Step 1: |H| = (R_f/R)/√(1 + (f/f_c)²); at 10 kHz, f/f_c = 10.
Step 2: |H| = 10/√(1 + 100) = 10/10.05 = 0.995.
Step 3: 20 log₁₀(0.995) = **-0.04 dB**. (The gain magnitude has fallen from 10 to about 1; relative to the DC gain of 20 dB it is 20 dB lower, as expected a decade above f_c for a first-order filter.)
(d) The roll-off is **-20 dB per decade** above f_c. Advantages of the active filter: it can provide **gain** and has a **low output impedance**, so a following stage does not change the cut-off frequency (a passive RC filter is loaded by the next stage and has no gain).