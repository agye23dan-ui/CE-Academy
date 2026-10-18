# Circuit Analysis I: Assignments with Worked Solutions

Draw every circuit, label nodes and reference directions, and state which method you use. Check each answer with KCL/KVL or a power balance. All numerical results below were verified by computer.

# Assignment 1: DC Circuit Analysis (70 marks)

## Questions

**Q1. Basics (8 marks)** A 36 V source feeds 4 Ω in series with (6 Ω ∥ 12 Ω) in series with 2 Ω. Find the total resistance, the source current, the voltage across the parallel pair, the current and power in each of the 6 Ω and 12 Ω resistors, and the total power. Verify the power balance.

**Q2. Node-voltage method (10 marks)** A 5 A source drives node 1 and a 2 A source drives node 2 (currents flow into the nodes). A 2 Ω resistor connects node 1 to ground, a 4 Ω resistor connects nodes 1 and 2, and an 8 Ω resistor connects node 2 to ground. Find v1 and v2, the current in the 4 Ω resistor and the power delivered by each source.

**Q3. Mesh-current method (10 marks)** Mesh 1 contains a 10 V source, 2 Ω and the shared 4 Ω resistor; mesh 2 contains 6 Ω, the shared 4 Ω and a 4 V source whose polarity opposes the clockwise current. Find the mesh currents, the current in the shared resistor and the power of each source.

**Q4. Thevenin, Norton and maximum power (12 marks)** A 12 V source in series with 6 Ω feeds node a; 3 Ω connects a to ground; a 2 A source injects current into node a. The load is connected between a and ground. (a) Find V_th, R_th and I_N [5]. (b) Find the load voltage and power for R_L = 6 Ω [3]. (c) Find R_L for maximum power and the maximum power [2]. (d) Find the efficiency at maximum power (power in R_L as a fraction of the power generated inside the equivalent) [2].

**Q5. Dependent source (8 marks)** A 1 A source feeds node 1; 2 Ω connects node 1 to ground; 4 Ω connects nodes 1 and 2; 2 Ω connects node 2 to ground; a dependent current source of 0.5 v1 amperes flows from node 2 to ground. Find v1 and v2.

**Q6. Operational amplifiers (12 marks)** The supply rails are ±12 V. Find v_o for: (a) an inverting amplifier with R_f = 100 kΩ, R_in = 10 kΩ and v_in = 0.5 V, and again for v_in = 1.5 V [3]; (b) a non-inverting amplifier with R_f = 100 kΩ, R_g = 10 kΩ, v_in = 0.5 V [2]; (c) a summing amplifier with R_f = 100 kΩ, R1 = 50 kΩ (v1 = 1 V), R2 = 25 kΩ (v2 = 2 V) [3]; (d) a difference amplifier with R1 = 10 kΩ and R2 = 20 kΩ (gain R2/R1 on v2 - v1), v1 = 1.5 V and v2 = 2.0 V [2]; (e) an integrator with R = 10 kΩ and C = 0.1 μF with a 2 V step applied at t = 0; when does the output saturate? [2]

**Q7. Bridges and Y-Δ (10 marks)** (a) A Wheatstone bridge is driven by 10 V; the left divider is 100 Ω/100 Ω and the right divider is 100 Ω (top) and 105 Ω (bottom). Find the bridge output voltage between the divider midpoints [3]. (b) Convert a Δ of three equal 30 Ω resistors into a Y [2]. (c) A bridge has 10 Ω from the source top to node a, 20 Ω from the top to node b, 30 Ω from a to ground, 40 Ω from b to ground and a 5 Ω bridge resistor between a and b. Find the equivalent resistance seen by the source [5].

## Solutions and Marking Guide

**Q1.**
Step 1 (parallel pair): 6 Ω ∥ 12 Ω = (6 × 12)/(6 + 12) = 72/18 = 4 Ω.
Step 2 (total resistance): R_eq = 4 + 4 + 2 = **10 Ω** (series).
Step 3 (source current): I = 36/10 = **3.6 A**; this current flows through the 4 Ω, the parallel pair and the 2 Ω.
Step 4 (parallel voltage): V = I × 4 Ω = 3.6 × 4 = **14.4 V**.
Step 5 (branch currents): I₆ = 14.4/6 = **2.4 A**, I₁₂ = 14.4/12 = **1.2 A**. Check: 2.4 + 1.2 = 3.6 ✓.
Step 6 (powers, P = I²R): P₄ = 3.6² × 4 = 51.84 W; P₆ = 2.4² × 6 = 34.56 W; P₁₂ = 1.2² × 12 = 17.28 W; P₂ = 3.6² × 2 = 25.92 W.
Step 7 (balance): total absorbed = 51.84 + 34.56 + 17.28 + 25.92 = 129.6 W. Source power = 36 × 3.6 = 129.6 W ✓.
(2 marks R_eq, 2 currents, 2 voltages, 2 power balance.)

**Q2.** Unknowns v₁, v₂ (node voltages relative to ground).
Step 1 (KCL at node 1, currents leaving = 5 A entering): v₁/2 + (v₁ - v₂)/4 = 5, i.e. 0.5v₁ + 0.25v₁ - 0.25v₂ = 5, so 0.75v₁ - 0.25v₂ = 5.
Step 2 (KCL at node 2): (v₂ - v₁)/4 + v₂/8 = 2, i.e. -0.25v₁ + 0.25v₂ + 0.125v₂ = 2, so -0.25v₁ + 0.375v₂ = 2.
Step 3 (clear fractions, multiply both by 8): 6v₁ - 2v₂ = 40 and -2v₁ + 3v₂ = 16.
Step 4 (substitute): from the first, v₂ = 3v₁ - 20. Into the second: -2v₁ + 3(3v₁ - 20) = 16, so 7v₁ - 60 = 16 and 7v₁ = 76.
Step 5: **v₁ = 76/7 = 10.86 V**; v₂ = 3(76/7) - 20 = 228/7 - 140/7 = 88/7 = **12.57 V**.
Step 6 (4 Ω current from node 1 to 2): (10.857 - 12.571)/4 = **-0.429 A** (so 0.429 A actually flows from node 2 to node 1).
Step 7 (source powers, P = v × I): 5 A source: 5 × 10.857 = **54.3 W**; 2 A source: 2 × 12.571 = **25.1 W**; total 79.4 W.
Step 8 (check absorbed): 10.857²/2 = 58.9 W; 12.571²/8 = 19.8 W; 0.429² × 4 = 0.73 W; total 79.4 W ✓.

**Q3.** Clockwise mesh currents i₁ (mesh 1) and i₂ (mesh 2); the shared 4 Ω carries i₁ - i₂ (as seen from mesh 1).
Step 1 (KVL mesh 1): 2i₁ + 4(i₁ - i₂) = 10, so 6i₁ - 4i₂ = 10.
Step 2 (KVL mesh 2, the 4 V source opposes i₂ so it is a +4 V drop): 6i₂ + 4(i₂ - i₁) + 4 = 0, so -4i₁ + 10i₂ = -4.
Step 3 (solve by elimination): multiply the first by 5: 30i₁ - 20i₂ = 50; multiply the second by 2: -8i₁ + 20i₂ = -8. Add: 22i₁ = 42.
Step 4: **i₁ = 42/22 = 21/11 = 1.909 A**. From the first equation: 4i₂ = 6(1.909) - 10 = 1.455, so **i₂ = 0.364 A (= 4/11)**.
Step 5 (shared resistor): i₁ - i₂ = 1.909 - 0.364 = **1.545 A**.
Step 6 (source powers): the 10 V source delivers 10 × 1.909 = **19.09 W**. The 4 V source: the current i₂ = 0.364 A flows into its positive terminal in this loop (it opposes i₂), so it absorbs 4 × 0.364 = **1.455 W** (it is being charged).
Step 7 (check): resistor power = 1.909² × 2 + 0.364² × 6 + 1.545² × 4 = 7.29 + 0.79 + 9.55 = 17.63 W, and 19.09 - 1.455 = 17.63 W ✓.

**Q4.**
(a) Step 1 (V_th, open circuit at node a): KCL: (v_a - 12)/6 + v_a/3 = 2.
Step 2: multiply by 6: (v_a - 12) + 2v_a = 12, so 3v_a = 24 and **V_th = 8 V**.
Step 3 (R_th, sources off: voltage source shorted, current source opened): R_th = 6 ∥ 3 = 18/9 = **2 Ω**.
Step 4: I_N = V_th/R_th = 8/2 = **4 A**. (Check by shorting a to ground: 12/6 = 2 A from the voltage branch plus the 2 A source = 4 A ✓.)
(b) Step 1: R_L = 6 Ω: V_L = V_th R_L/(R_th + R_L) = 8 × 6/(2 + 6) = **6 V**.
Step 2: P_L = V_L²/R_L = 36/6 = **6 W**.
(c) Step 1: maximum power transfer when R_L = R_th = **2 Ω**.
Step 2: V_L = 8/2 = 4 V and P_max = V_th²/(4R_th) = 64/8 = **8 W**.
(d) Step 1: at R_L = R_th the current is I = 8/(2 + 2) = 2 A. The Thevenin source supplies V_th × I = 8 × 2 = 16 W.
Step 2: efficiency = 8/16 = **50 percent**. (This describes the equivalent; it does not give the real network's internal dissipation.)

**Q5.** Node 1 current sources: 1 A in. The dependent source 0.5v₁ flows from node 2 to ground.
Step 1 (KCL node 1): v₁/2 + (v₁ - v₂)/4 = 1, i.e. 0.75v₁ - 0.25v₂ = 1.
Step 2 (KCL node 2, leaving currents): (v₂ - v₁)/4 + v₂/2 + 0.5v₁ = 0, i.e. -0.25v₁ + 0.5v₁ + 0.25v₂ + 0.5v₂ = 0, so 0.25v₁ + 0.75v₂ = 0.
Step 3: from step 2, v₁ = -3v₂.
Step 4: substitute in step 1: 0.75(-3v₂) - 0.25v₂ = 1, so -2.25v₂ - 0.25v₂ = -2.5v₂ = 1 and **v₂ = -0.4 V**.
Step 5: **v₁ = -3(-0.4) = 1.2 V**.
Step 6 (check node 1): 1.2/2 + (1.2 + 0.4)/4 = 0.6 + 0.4 = 1 ✓.

**Q6.** Ideal op-amp rules: v₊ = v₋ and no input current; output limited to ±12 V.
(a) Inverting: v_o = -(R_f/R_in) v_in = -(100/10) × 0.5 = **-5 V**. For v_in = 1.5 V the ideal result is -10 × 1.5 = -15 V, which exceeds the rail, so the output **saturates at -12 V**.
(b) Non-inverting: gain = 1 + R_f/R_g = 1 + 100/10 = 11; v_o = 11 × 0.5 = **5.5 V**.
(c) Summing: v_o = -R_f(v₁/R₁ + v₂/R₂) = -100 k(1/50 k + 2/25 k) = -100(0.02 + 0.08) = **-10 V** (inside the rails).
(d) Difference amplifier: v_o = (R₂/R₁)(v₂ - v₁) = 2(2.0 - 1.5) = **1.0 V**.
(e) Integrator: RC = 10⁴ × 10⁻⁷ = 1 ms. v_o = -(1/RC) ∫ v_in dt = -(1/0.001)(2t) = -2000t volts. Set -2000t = -12: **t = 6 ms**, after which the output stays saturated at -12 V.

**Q7.**
(a) Step 1: left midpoint = 10 × 100/(100 + 100) = 5.000 V.
Step 2: right midpoint (across the lower 105 Ω) = 10 × 105/(100 + 105) = 10 × 0.51220 = 5.122 V.
Step 3: bridge output = 5.000 - 5.122 = **-0.122 V**. A 5 percent change in one arm gives only about 1.2 percent of the supply; bridges are used with an amplifier for strain gauges and sensors.
(b) Δ to Y with equal resistors: R_Y = R_Δ R_Δ/(R_Δ + R_Δ + R_Δ) = 30 × 30/90 = **10 Ω** for each leg (R_Y = R_Δ/3).
(c) Apply 1 V to the source terminal and find the current; node voltages v_a and v_b.
Step 1 (KCL at a): (v_a - 1)/10 + v_a/30 + (v_a - v_b)/5 = 0. Multiply by 30: 3(v_a - 1) + v_a + 6(v_a - v_b) = 0, so 10v_a - 6v_b = 3.
Step 2 (KCL at b): (v_b - 1)/20 + v_b/40 + (v_b - v_a)/5 = 0. Multiply by 40: 2(v_b - 1) + v_b + 8(v_b - v_a) = 0, so -8v_a + 11v_b = 2.
Step 3 (solve): from step 1, v_b = (10v_a - 3)/6. Substitute: -8v_a + 11(10v_a - 3)/6 = 2 gives -48v_a + 110v_a - 33 = 12, so 62v_a = 45 and v_a = 0.7258 V; v_b = (7.258 - 3)/6 = 0.7097 V.
Step 4 (source current): I = (1 - v_a)/10 + (1 - v_b)/20 = 0.02742 + 0.01452 = 0.04194 A.
Step 5: **R_eq = 1/0.04194 = 23.85 Ω (= 310/13)**.
Check: the bridge resistor carries (0.7258 - 0.7097)/5 = 3.2 mA from a to b.

---

# Assignment 2: Capacitors, Inductors and Transients (70 marks)

## Questions

**Q1. Storage elements (8 marks)** (a) A 2 μF capacitor has v(t) = 5t^2 V. Find i(t) and the stored energy at t = 2 s [3]. (b) Find the energy in a 0.5 H inductor carrying 4 A [1]. (c) Three capacitors of 6 μF, 3 μF and 2 μF are in series; find C_eq, and the voltage on each if the combination is charged to 12 V [4].

**Q2. RC step response (8 marks)** A 10 V source charges a 500 μF capacitor through 2 kΩ; v_C(0) = 2 V. Find v_C(t), the time to reach 9 V, the current at t = 0+ and the energy stored at 9 V.

**Q3. First-order circuit with Thevenin reduction (10 marks)** A 12 V source feeds a 6 kΩ resistor; 3 kΩ connects the node to ground, with a 100 μF capacitor across the 3 kΩ resistor. The capacitor is uncharged at t = 0 when the switch closes. Find V_th, R_th, τ, v_C(t) and the time to reach 90 percent of the final value.

**Q4. RL switching (10 marks)** A 0.4 H inductor in series with 8 Ω carries steady current from a 24 V source. At t = 0 the source is removed and an extra 8 Ω resistor is inserted in series in the closed loop. Find i(0+), τ, i(t), the inductor voltage at t = 0+ and the total energy dissipated.

**Q5. Pulse input (6 marks)** A 10 V pulse of duration 1 s is applied to an RC circuit with τ = 0.5 s (initially uncharged). Find v_C(1 s) and v_C(2 s).

**Q6. Second-order circuits (16 marks)** A series RLC circuit is driven by a 10 V step with zero initial energy; v_C is the output. (a) R = 4 Ω, L = 1 H, C = 1/5 F: classify and find v_C(t) [5]. (b) R = 6 Ω, L = 1 H, C = 1/8 F: classify and find v_C(t) [4]. (c) R = 4 Ω, L = 1 H, C = 1/4 F: classify and find v_C(t) [4]. (d) For L = 0.1 H and C = 10 μF find the value of R giving critical damping [3].

**Q7. Energy (6 marks)** A camera flash capacitor of 120 μF is charged to 300 V and discharged in 2 ms. Find the stored energy and the average power delivered.

**Q8. Measurement (6 marks)** The output of an RC circuit driven by a step to 5 V is measured on an oscilloscope: it reads 3.16 V at t = 3 ms. Find τ, and C if R = 3 kΩ; find the time to reach 99 percent of the final value.

## Solutions and Marking Guide

**Q1.**
(a) Step 1: v(t) = 5t², so dv/dt = 10t V/s.
Step 2: i = C dv/dt = (2 × 10⁻⁶)(10t) = 20 × 10⁻⁶ t = **20t μA**.
Step 3: at t = 2 s: v = 5(4) = 20 V.
Step 4: w = (1/2)Cv² = (1/2)(2 × 10⁻⁶)(20)² = (1 × 10⁻⁶)(400) = **0.4 mJ**.
(b) w = (1/2)Li² = (1/2)(0.5)(4)² = (0.25)(16) = **4 J**.
(c) Step 1: series capacitors: 1/C_eq = 1/6 + 1/3 + 1/2 = 1/6 + 2/6 + 3/6 = 6/6 = 1 μF⁻¹, so **C_eq = 1 μF**.
Step 2: series capacitors share the same charge: Q = C_eq V = 1 μF × 12 V = 12 μC.
Step 3: voltages V = Q/C: 12/6 = **2 V**, 12/3 = **4 V**, 12/2 = **6 V**. Check: 2 + 4 + 6 = 12 V ✓. The smallest capacitor takes the largest voltage.

**Q2.** RC charging with initial value 2 V and final value 10 V.
Step 1: τ = RC = (2000 Ω)(500 × 10⁻⁶ F) = **1 s**.
Step 2: v_C(t) = v(∞) + [v(0) - v(∞)]e^(-t/τ) = 10 + (2 - 10)e^(-t) = **10 - 8e^(-t) V**.
Step 3: set v_C = 9: 10 - 8e^(-t) = 9, so e^(-t) = 1/8 and t = ln 8 = **2.08 s**.
Step 4: current at 0⁺: i = (V_s - v_C(0))/R = (10 - 2)/2000 = **4 mA**.
Step 5: energy at 9 V: w = (1/2)Cv² = (1/2)(500 × 10⁻⁶)(81) = **20.25 mJ**.

**Q3.** The capacitor sees the Thevenin equivalent of the source and the divider (6 kΩ in series with the source, 3 kΩ to ground).
Step 1: V_th = 12 × 3/(6 + 3) = **4 V** (voltage divider, capacitor removed).
Step 2: R_th = 6 kΩ ∥ 3 kΩ = (6 × 3)/(6 + 3) = **2 kΩ** (source shorted).
Step 3: τ = R_th C = (2000)(100 × 10⁻⁶) = **0.2 s**.
Step 4: uncharged capacitor, so v_C(t) = V_th(1 - e^(-t/τ)) = **4(1 - e^(-5t)) V**.
Step 5: 90 percent of the final value: 1 - e^(-5t) = 0.9, so e^(-5t) = 0.1 and t = ln 10/5 = 2.303/5 = **0.461 s**.

**Q4.**
Step 1 (before t = 0, steady state, inductor is a short): i = 24/8 = 3 A.
Step 2 (continuity of inductor current): **i(0⁺) = 3 A**.
Step 3 (after the change the loop has L = 0.4 H and R = 8 + 8 = 16 Ω): **τ = L/R = 0.4/16 = 0.025 s = 25 ms**.
Step 4: i(t) = i(0⁺)e^(-t/τ) = **3e^(-40t) A**.
Step 5 (inductor voltage at 0⁺): v_L = -i R_total = -3 × 16 = **-48 V** (a large reversed voltage; switches need protection).
Step 6 (energy): all the initial stored energy is dissipated: w = (1/2)Li² = (1/2)(0.4)(9) = **1.8 J**, shared in proportion to resistance (0.9 J in each 8 Ω resistor).

**Q5.** RC circuit, τ = 0.5 s, 10 V pulse for 0 ≤ t ≤ 1 s, starting at 0 V.
Step 1 (during the pulse): v_C(t) = 10(1 - e^(-t/0.5)) = 10(1 - e^(-2t)).
Step 2: at t = 1 s: e^(-2) = 0.1353, so v_C(1) = 10(1 - 0.1353) = **8.647 V**.
Step 3 (after the pulse the source is 0 V): v_C(t) = 8.647 e^(-2(t - 1)).
Step 4: at t = 2 s: 8.647 × e^(-2) = 8.647 × 0.1353 = **1.170 V**.

**Q6.** Series RLC with step input: s² + (R/L)s + 1/(LC) = 0; final value v_C(∞) = 10 V; v_C(0) = 0 and v_C'(0) = i(0)/C = 0.
(a) Step 1: R = 4, L = 1, C = 1/5: s² + 4s + 5 = 0.
Step 2: Discriminant 16 - 20 = -4 < 0: s = (-4 ± j2)/2 = -2 ± j1.
Step 3: **Underdamped** (α = 2, ω_d = 1).
Step 1: v_C = 10 + e^(-2t)(A cos t + B sin t).
Step 2: v_C(0) = 10 + A = 0, so A = -10.
Step 3: v_C'(0) = -2A + B = 0, so B = 2A = -20.
**v_C = 10 - e^(-2t)(10 cos t + 20 sin t) V**.
(b) R = 6, L = 1, C = 1/8: s² + 6s + 8 = (s + 2)(s + 4) = 0, s = -2, -4: **overdamped**.
Step 1: v_C = 10 + Ae^(-2t) + Be^(-4t).
Step 2: v_C(0) = 10 + A + B = 0, so A + B = -10.
Step 3: v_C'(0) = -2A - 4B = 0, so A = -2B.
Step 4: -2B + B = -10, so B = 10 and A = -20.
**v_C = 10 - 20e^(-2t) + 10e^(-4t) V**. Check: v_C(0) = 10 - 20 + 10 = 0 ✓; v_C'(0) = 40 - 40 = 0 ✓.
(c) R = 4, L = 1, C = 1/4: s² + 4s + 4 = (s + 2)² = 0: repeated root -2, **critically damped**.
Step 1: v_C = 10 + (A + Bt)e^(-2t).
Step 2: v_C(0) = 10 + A = 0, so A = -10.
Step 3: v_C'(0) = -2A + B = 0, so B = 2A = -20.
**v_C = 10 - (10 + 20t)e^(-2t) V**.
(d) Critical damping needs the discriminant zero: (R/L)² = 4/(LC), i.e. R² = 4L/C.
Step 1: R = 2√(L/C) = 2√(0.1/10⁻⁵) = 2√(10⁴) = 2 × 100.
**R = 200 Ω**.

**Q7.** Step 1: w = (1/2)CV² = (1/2)(120 × 10⁻⁶)(300)² = (60 × 10⁻⁶)(90,000) = **5.4 J**.
Step 2: average power = w/t = 5.4/0.002 = **2,700 W = 2.7 kW**. (A small capacitor can deliver very large power briefly because the energy is released quickly.)

**Q8.** Step 1: the reading as a fraction of the final value: 3.16/5 = 0.632 = 1 - e^(-1), so the measurement was made at one time constant: **τ = 3 ms**.
Step 2: C = τ/R = (3 × 10⁻³)/3000 = **1 μF**.
Step 3: 99 percent of the final value: 1 - e^(-t/τ) = 0.99, so e^(-t/τ) = 0.01 and t = τ ln 100 = 4.605τ = 4.605 × 3 ms = **13.8 ms**.

---

# Assignment 3: Sinusoidal Steady State, AC Power and Frequency Response (80 marks)

## Questions

**Q1. Phasors (8 marks)** (a) Express 10 cos(1000t + 30°) V and 5 cos(1000t - 60°) V as phasors and find their sum as a time function [3]. (b) Add i1 = 4 cos(ωt + 20°) A and i2 = 3 sin(ωt) A [3]. (c) The rms value of a 325 V peak sine wave [2].

**Q2. Impedance (10 marks)** At ω = 1000 rad/s: (a) Find the impedance of a 30 Ω resistor in series with 40 mH, and the current for 100∠0° V [4]. (b) Find the impedance of a 20 mH inductor in parallel with a 100 μF capacitor, in series with 10 Ω [4]. (c) State the phase of the current relative to the voltage in each case [2].

**Q3. AC circuit analysis (10 marks)** A 100∠0° V (rms) source feeds an impedance Z1 = 10 + j10 Ω in series with the parallel combination of a -j20 Ω capacitor and a 20 Ω resistor. Find the total impedance, the source current, the voltage across the parallel part, the current in each parallel branch, and the complex power delivered by the source.

**Q4. AC power (12 marks)** (a) A load connected to 230 V rms, 50 Hz absorbs 5 kW at power factor 0.8 lagging. Find S, Q, the line current [4]. (b) Find the capacitor in parallel that raises the power factor to 0.95 lagging, and the new line current [5]. (c) Explain why utilities penalise low power factor [3].

**Q5. Resonance (10 marks)** A series RLC circuit has R = 10 Ω, L = 10 mH, C = 1 μF. Find ω0 and f0, the quality factor, the bandwidth, the current at resonance for a 1 V source and the voltages across L and C at resonance.

**Q6. Frequency response (10 marks)** An RC low-pass filter has R = 1 kΩ and C = 0.1 μF. (a) Find the cut-off frequency [2]. (b) Find the gain in dB and the phase at f_c and at 10 f_c [4]. (c) Sketch the Bode magnitude and state the roll-off [2]. (d) How would you build a high-pass filter with the same cut-off? [2]

**Q7. Maximum power transfer (6 marks)** A source has V_th = 20 V rms and Z_th = 3 + j4 Ω. Find the load impedance that receives maximum power and the power delivered. What if the load must be purely resistive?

**Q8. Three-phase (8 marks)** A balanced Y-connected load with Z = 20∠30° Ω per phase is supplied with 400 V line-to-line, 50 Hz. Find the phase voltage, line current, the total real, reactive and apparent power and the power factor.

**Q9. Transformer (6 marks)** An ideal transformer has 2300 V on the primary and 230 V on the secondary feeding a 5 Ω load. Find the secondary and primary currents, the load power and the load impedance reflected to the primary.

## Solutions and Marking Guide

**Q1.**
(a) Step 1: phasors (peak): V₁ = 10∠30°, V₂ = 5∠-60°.
Step 2: rectangular form: V₁ = 10 cos 30° + j10 sin 30° = 8.660 + j5.000; V₂ = 5 cos(-60°) + j5 sin(-60°) = 2.500 - j4.330.
Step 3: add: 8.660 + 2.500 = 11.160 and 5.000 - 4.330 = 0.670, so V = 11.160 + j0.670.
Step 4: polar: |V| = √(11.160² + 0.670²) = 11.18 and angle = arctan(0.670/11.160) = 3.44°.
**v(t) = 11.18 cos(1000t + 3.4°) V**.
(b) Step 1: convert sine to cosine: 3 sin ωt = 3 cos(ωt - 90°), so I₂ = 3∠-90° = -j3.
Step 2: I₁ = 4∠20° = 4 cos 20° + j4 sin 20° = 3.759 + j1.368.
Step 3: sum = 3.759 + (1.368 - 3)j = 3.759 - j1.632.
Step 4: magnitude √(3.759² + 1.632²) = 4.10, angle = arctan(-1.632/3.759) = -23.5°. **i = 4.10 cos(ωt - 23.5°) A**.
(c) V_rms = V_peak/√2 = 325/1.4142 = **230 V**.

**Q2.** ω = 1000 rad/s.
(a) Step 1: X_L = ωL = 1000 × 0.040 = 40 Ω, so Z = 30 + j40 Ω.
Step 2: polar: |Z| = √(30² + 40²) = 50 Ω, angle = arctan(40/30) = 53.13°. **Z = 50∠53.13° Ω**.
Step 3: I = V/Z = 100∠0°/50∠53.13° = **2∠-53.13° A** (the current lags: inductive).
(b) Step 1: Z_L = jωL = j(1000)(0.020) = j20 Ω; Z_C = 1/(jωC) = 1/(j × 1000 × 100 × 10⁻⁶) = 1/(j0.1) = -j10 Ω.
Step 2: parallel: Z_p = (j20)(-j10)/(j20 - j10) = (200)/(j10) = -j20 Ω (since (j)(-j) = 1).
Step 3: add the 10 Ω in series: **Z = 10 - j20 = 22.36∠-63.4° Ω** (capacitive, because the capacitor dominates the parallel pair).
(c) (a): current **lags** the voltage by 53.1°. (b): current **leads** the voltage by 63.4° (negative impedance angle).

**Q3.**
Step 1 (parallel part): Z_p = (20)(-j20)/(20 - j20) = -j400/(20 - j20). Multiply top and bottom by the conjugate (20 + j20): -j400(20 + j20)/(400 + 400) = (-j8000 + 8000)/800 = 10 - j10 Ω.
Step 2 (total): Z_total = (10 + j10) + (10 - j10) = **20 Ω** (purely resistive: the reactances cancel).
Step 3 (current): I = 100∠0°/20 = **5∠0° A**.
Step 4 (parallel voltage): V_p = I Z_p = 5(10 - j10) = 50 - j50 = **70.7∠-45° V**.
Step 5 (branch currents): I_R = V_p/20 = 2.5 - j2.5 = **3.54∠-45° A**. I_C = V_p/(-j20) = (50 - j50)/(-j20) = (50 - j50)(j)/20 = (j50 + 50)/20 = 2.5 + j2.5 = **3.54∠+45° A**.
Step 6 (check KCL): I_R + I_C = (2.5 - j2.5) + (2.5 + j2.5) = 5 A ✓.
Step 7 (complex power): S = V I* = (100∠0°)(5∠0°) = **500 + j0 VA** (P = 500 W, Q = 0).
Check: I²R_total = 5² × 20 = 500 W ✓.

**Q4.**
(a) Step 1: S = P/pf = 5000/0.8 = **6.25 kVA**.
Step 2: Q = √(S² - P²) = √(6250² - 5000²) = √(39.06 × 10⁶ - 25 × 10⁶) = √(14.06 × 10⁶) = **3750 var**.
Step 3: I = S/V = 6250/230 = **27.2 A**.
(b) Step 1: target pf 0.95 gives tan(arccos 0.95) = tan(18.19°) = 0.3287, so Q_new = P tan φ = 5000 × 0.3287 = 1643 var.
Step 2: the capacitor must supply Q_c = 3750 - 1643 = **2107 var**.
Step 3: Q_c = ωCV² with ω = 2π(50) = 314.16 rad/s: C = 2107/(314.16 × 230²) = 2107/(314.16 × 52,900) = 2107/16.62 × 10⁶ = **127 μF**.
Step 4: new current I = P/(V pf) = 5000/(230 × 0.95) = **22.9 A** (down from 27.2 A, a 16 percent reduction; the I²R line loss falls by 1 - (22.9/27.2)² = 29 percent).
(c) The real power delivered is the same, but a low power factor makes the line carry extra reactive current. This raises conductor and transformer losses (I²R) and voltage drop and needs larger cables and equipment, without producing useful energy, so utilities charge for kVA or reactive energy or penalise low power factor.

**Q5.**
Step 1: ω₀ = 1/√(LC) = 1/√(0.01 × 10⁻⁶) = 1/√(10⁻⁸) = **10⁴ rad/s**; f₀ = ω₀/(2π) = **1592 Hz**.
Step 2: Q = ω₀L/R = (10⁴)(0.01)/10 = **10**.
Step 3: bandwidth BW = ω₀/Q = 10⁴/10 = **1000 rad/s (159 Hz)**.
Step 4: at resonance Z = R, so I = V/R = 1/10 = **0.1 A**.
Step 5: V_L = I ω₀L = 0.1 × 100 = **10 V**; V_C = I/(ω₀C) = 0.1 × (1/(10⁴ × 10⁻⁶)) = 0.1 × 100 = **10 V**. These are 10 times the 1 V source (voltage magnification Q) and are equal and opposite in phase.

**Q6.** R = 1 kΩ, C = 0.1 μF.
(a) f_c = 1/(2πRC) = 1/(2π × 1000 × 10⁻⁷) = 1/(6.283 × 10⁻⁴) = **1.59 kHz**.
(b) H(f) = 1/(1 + j f/f_c).
At f = f_c: |H| = 1/√2 = 0.707, i.e. 20 log₁₀ 0.707 = **-3.01 dB**; phase = -arctan(1) = **-45°**.
At f = 10f_c: |H| = 1/√(1 + 100) = 1/10.05 = 0.0995, i.e. **-20.04 dB**; phase = -arctan 10 = **-84.3°**.
(c) The magnitude is flat (0 dB) below f_c, is -3 dB at f_c and then falls at **-20 dB per decade** (-6 dB per octave); the phase goes from 0° to -90°.
(d) Swap the positions of R and C, taking the output across the resistor: H = jωRC/(1 + jωRC). With the same R and C the cut-off is the same, 1.59 kHz; it passes high frequencies and rises at +20 dB per decade below f_c.

**Q7.** V_th = 20 V rms, Z_th = 3 + j4 Ω.
Step 1: maximum power transfer needs Z_L = Z_th* = **3 - j4 Ω** (the reactances cancel).
Step 2: total resistance 3 + 3 = 6 Ω, so I = 20/6 = 3.33 A.
Step 3: P = I²R_L = 3.33² × 3 = **33.3 W** (equivalently V_th²/(4R_th) = 400/12 = 33.3 W).
If the load must be purely resistive: Step 4: the best R_L = |Z_th| = √(3² + 4²) = 5 Ω.
Step 5: I = 20/|(3 + 5) + j4| = 20/√(64 + 16) = 20/8.944 = 2.236 A.
Step 6: P = I²R_L = 2.236² × 5 = **25 W**, less than the 33.3 W of the conjugate-matched load.

**Q8.** Balanced Y load, Z = 20∠30° Ω, V_L = 400 V.
Step 1: phase voltage V_ph = V_L/√3 = 400/1.732 = **231 V**.
Step 2: phase (= line) current I = V_ph/|Z| = 231/20 = **11.55 A**.
Step 3: apparent power S = √3 V_L I_L = 1.732 × 400 × 11.55 = **8.0 kVA** (equivalently 3 × 231 × 11.55).
Step 4: pf = cos 30° = **0.866 lagging**; P = S cos 30° = 8000 × 0.866 = **6.93 kW**.
Step 5: Q = S sin 30° = 8000 × 0.5 = **4.0 kvar**.

**Q9.** Ideal transformer, V₁ = 2300 V, V₂ = 230 V, so the turns ratio N₁:N₂ = 10:1.
Step 1: secondary current I₂ = V₂/R = 230/5 = **46 A**.
Step 2: primary current I₁ = I₂ × (N₂/N₁) = 46/10 = **4.6 A**.
Step 3: load power P = V₂I₂ = 230 × 46 = **10.58 kW** (= V₁I₁ = 2300 × 4.6 = 10.58 kW ✓).
Step 4: reflected impedance = (N₁/N₂)² R = 100 × 5 = **500 Ω** (= V₁/I₁ = 2300/4.6 = 500 ✓).