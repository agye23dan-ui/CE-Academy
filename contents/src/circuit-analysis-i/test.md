# Circuit Analysis I: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** The power dissipated when 12 V is applied across a 6 Ω resistor is
A) 2 W  B) 12 W  C) 24 W  D) 72 W

**2.** Resistors of 4 Ω and 6 Ω in series have an equivalent resistance of
A) 2.4 Ω  B) 10 Ω  C) 24 Ω  D) 5 Ω

**3.** Resistors of 6 Ω and 3 Ω in parallel have an equivalent resistance of
A) 9 Ω  B) 4.5 Ω  C) 2 Ω  D) 18 Ω

**4.** Kirchhoff's current law states that
A) the sum of voltages around a loop is zero  B) the sum of currents leaving a node is zero  C) current is proportional to voltage  D) power is conserved only in loops

**5.** 12 V is applied across 2 kΩ in series with 4 kΩ. The voltage across the 4 kΩ resistor is
A) 4 V  B) 6 V  C) 8 V  D) 12 V

**6.** The Thevenin resistance of a network is found by
A) shorting the load and measuring current  B) turning off independent sources and finding the resistance seen at the terminals  C) adding all resistors  D) opening all sources

**7.** Maximum power is transferred to a load when
A) R_L = 0  B) R_L = R_th  C) R_L is very large  D) R_L = 2 R_th

**8.** In superposition, an independent voltage source that is turned off is replaced by
A) an open circuit  B) a short circuit  C) a resistor  D) a current source

**9.** An inverting amplifier has R_f = 50 kΩ and R_in = 10 kΩ. Its voltage gain is
A) 5  B) -5  C) 6  D) -6

**10.** The "virtual short" of an ideal op-amp with negative feedback means
A) v+ = v- (the inputs are at the same voltage)  B) the output is zero  C) the supply is shorted  D) the input current is large

**11.** In DC steady state a capacitor behaves like
A) a short circuit  B) an open circuit  C) a resistor  D) a voltage source

**12.** Which quantity cannot change instantaneously?
A) capacitor current  B) inductor current  C) resistor voltage  D) inductor voltage

**13.** The time constant of 10 kΩ in series with 10 μF is
A) 1 ms  B) 10 ms  C) 0.1 s  D) 100 s

**14.** After 5 time constants an RC charging transient has completed about
A) 63 percent  B) 86 percent  C) 95 percent  D) 99 percent

**15.** The energy stored in a 4 μF capacitor at 10 V is
A) 0.2 mJ  B) 2 mJ  C) 40 μJ  D) 0.4 J

**16.** At ω = 1000 rad/s the impedance of a 1 μF capacitor is
A) j1000 Ω  B) -j1000 Ω  C) 1000 Ω  D) -j0.001 Ω

**17.** At ω = 100 rad/s the impedance of a 0.1 H inductor is
A) j10 Ω  B) -j10 Ω  C) 10 Ω  D) j0.1 Ω

**18.** A sinusoid with a peak value of 10 V has an rms value of
A) 5 V  B) 7.07 V  C) 10 V  D) 14.1 V

**19.** A load with R = 3 Ω and X_L = 4 Ω has a power factor of
A) 0.6  B) 0.75  C) 0.8  D) 1.33

**20.** The resonant frequency (in rad/s) of L = 1 mH and C = 1 μF is about
A) 1000  B) 31,600  C) 10^6  D) 159

## Section B: Problems (40 marks)

**B1. (10 marks)** A 6 A source feeds node 1. A 3 Ω resistor connects node 1 to ground, a 6 Ω resistor connects nodes 1 and 2, and a 3 Ω resistor connects node 2 to ground. (a) Write the node-voltage equations and find v1 and v2 [6]. (b) Find the power delivered by the source and verify it equals the power absorbed by the resistors [4].

**B2. (10 marks)** A 10 V source in series with 5 Ω drives node a; 20 Ω connects a to ground. The load is connected between a and ground. (a) Find the Thevenin and Norton equivalents [4]. (b) Find the load voltage and power for R_L = 12 Ω [3]. (c) Find the maximum power and the load that receives it [3].

**B3. (10 marks)** A 12 V source charges a 50 μF capacitor through 2 kΩ; the capacitor is initially uncharged. (a) Find τ and v_C(t) [3]. (b) Find the time to reach 6 V [2]. (c) Find v_C at t = 0.2 s [2]. (d) Find the initial current and the final stored energy [3].

**B4. (10 marks)** A series circuit has R = 30 Ω and L = 0.1 H connected to 100 V rms at ω = 400 rad/s. (a) Find the impedance and the current phasor [4]. (b) Find P, Q, S and the power factor [3]. (c) Find the parallel capacitor that makes the power factor unity [3].

---

## Answer Key and Solutions

### Section A
1 **C** · 2 **B** · 3 **C** · 4 **B** · 5 **C** · 6 **B** · 7 **B** · 8 **B** · 9 **B** · 10 **A** · 11 **B** · 12 **B** · 13 **C** · 14 **D** · 15 **A** · 16 **B** · 17 **A** · 18 **B** · 19 **A** · 20 **B**

Brief reasons:
1. Step 1: P = V²/R. Step 2: = 12²/6 = 144/6 = 24 W.
2. Step 1: series resistances add. Step 2: 4 + 6 = 10 Ω.
3. Step 1: parallel: R = (R₁R₂)/(R₁ + R₂). Step 2: (6 × 3)/(6 + 3) = 18/9 = 2 Ω.
4. KCL: the algebraic sum of currents leaving (or entering) a node is zero (the loop law is KVL).
5. Step 1: voltage divider: V = 12 × 4k/(2k + 4k). Step 2: = 12 × 4/6 = 8 V.
6. The Thevenin resistance is found by turning off independent sources (voltage sources shorted, current sources opened) and finding the resistance seen at the terminals.
7. Maximum power transfer occurs when R_L = R_th.
8. A turned-off ideal voltage source has zero volts across it, which is a short circuit (a turned-off current source is an open circuit).
9. Step 1: inverting amplifier gain = -R_f/R_in. Step 2: = -50/10 = -5.
10. With negative feedback and high gain the input voltage difference is driven to zero: v₊ = v₋ (virtual short).
11. In DC steady state dv/dt = 0, so i = C dv/dt = 0: the capacitor acts like an open circuit.
12. The inductor current cannot change instantaneously (v = L di/dt would be infinite); the capacitor voltage also cannot jump, but capacitor and inductor voltages/currents of the other kind can.
13. Step 1: τ = RC. Step 2: = (10 × 10³)(10 × 10⁻⁶) = 0.1 s.
14. Step 1: fraction complete = 1 - e^(-5) = 1 - 0.0067. Step 2: = 0.9933, about 99 percent.
15. Step 1: w = (1/2)CV². Step 2: = (1/2)(4 × 10⁻⁶)(10)² = (2 × 10⁻⁶)(100) = 2 × 10⁻⁴ J = 0.2 mJ.
16. Step 1: Z_C = 1/(jωC). Step 2: = 1/(j × 1000 × 10⁻⁶) = 1/(j0.001) = -j1000 Ω.
17. Step 1: Z_L = jωL. Step 2: = j(100)(0.1) = j10 Ω.
18. Step 1: V_rms = V_peak/√2. Step 2: = 10/1.414 = 7.07 V.
19. Step 1: |Z| = √(3² + 4²) = 5 Ω. Step 2: pf = R/|Z| = 3/5 = 0.6.
20. Step 1: ω₀ = 1/√(LC). Step 2: = 1/√(10⁻³ × 10⁻⁶) = 1/√(10⁻⁹) = 31,623 rad/s.

### Section B

**B1.**
(a) Step 1 (KCL node 1): v₁/3 + (v₁ - v₂)/6 = 6.
Step 2 (KCL node 2): (v₂ - v₁)/6 + v₂/3 = 0. Multiply by 6: (v₂ - v₁) + 2v₂ = 0, so -v₁ + 3v₂ = 0 and **v₂ = v₁/3**.
Step 3: substitute into node 1: v₁/3 + (v₁ - v₁/3)/6 = v₁/3 + (2v₁/3)/6 = v₁/3 + v₁/9 = 4v₁/9 = 6.
Step 4: **v₁ = 6 × 9/4 = 13.5 V**, and **v₂ = 13.5/3 = 4.5 V**.
(b) Step 1: the source delivers P = v₁ × 6 = 13.5 × 6 = **81 W**.
Step 2 (resistor powers, P = v²/R): 3 Ω at node 1: 13.5²/3 = 60.75 W; 6 Ω: (13.5 - 4.5)²/6 = 81/6 = 13.5 W; 3 Ω at node 2: 4.5²/3 = 6.75 W.
Step 3: total = 60.75 + 13.5 + 6.75 = **81 W** ✓ equals the source power.

**B2.**
(a) Step 1: V_th is the open-circuit voltage at a: divider 20/(5 + 20) × 10 = 0.8 × 10 = **8 V**.
Step 2: R_th with the source shorted: 5 ∥ 20 = (5 × 20)/(25) = **4 Ω**.
Step 3: Norton current I_N = V_th/R_th = 8/4 = **2 A**. Check: short-circuit current = 10/5 = 2 A ✓.
(b) Step 1: V_L = V_th R_L/(R_th + R_L) = 8 × 12/(4 + 12) = 8 × 0.75 = **6 V**.
Step 2: P = V_L²/R_L = 36/12 = **3 W**.
(c) Step 1: maximum power when R_L = R_th = **4 Ω**.
Step 2: P_max = V_th²/(4R_th) = 64/16 = **4 W** (V_L = 4 V, I = 1 A, P = 4 × 1 ✓).

**B3.**
(a) Step 1: τ = RC = (2000)(50 × 10⁻⁶) = **0.1 s**.
Step 2: uncharged capacitor charging to 12 V: **v_C(t) = 12(1 - e^(-t/0.1)) = 12(1 - e^(-10t)) V**.
(b) Step 1: set 6 = 12(1 - e^(-10t)): 1 - e^(-10t) = 0.5, so e^(-10t) = 0.5.
Step 2: t = ln 2/10 = 0.6931/10 = **0.0693 s**.
(c) Step 1: at t = 0.2 s: e^(-10 × 0.2) = e^(-2) = 0.1353.
Step 2: v_C = 12(1 - 0.1353) = **10.38 V**.
(d) Step 1: initial current: I(0⁺) = V/R = 12/2000 = **6 mA** (the capacitor is a short at t = 0).
Step 2: final stored energy: w = (1/2)CV² = (1/2)(50 × 10⁻⁶)(12)² = (25 × 10⁻⁶)(144) = **3.6 mJ**.

**B4.** R = 30 Ω, L = 0.1 H, V = 100 V rms, ω = 400 rad/s.
(a) Step 1: X_L = ωL = 400 × 0.1 = 40 Ω, so Z = 30 + j40.
Step 2: |Z| = √(30² + 40²) = 50 Ω, angle = arctan(40/30) = 53.13°. **Z = 50∠53.13° Ω**.
Step 3: I = V/Z = 100∠0°/50∠53.13° = **2∠-53.13° A** (lagging).
(b) Step 1: P = I²R = 2² × 30 = **120 W**.
Step 2: Q = I²X = 4 × 40 = **160 var**.
Step 3: S = VI = 100 × 2 = **200 VA**.
Step 4: pf = P/S = 120/200 = **0.6 lagging**.
(c) Step 1: unity power factor needs the capacitor to supply all 160 var.
Step 2: Q_c = ωCV², so C = Q_c/(ωV²) = 160/(400 × 100²) = 160/4,000,000 = **40 μF**.