# Circuit Analysis I: Complete Lecture Notes

Circuit analysis is the language of electrical and computer engineering: power supplies, sensors, amplifiers, filters, processors and communication links are all circuits. This course gives you systematic methods to predict voltages and currents in linear circuits. You met the basics in Physics II; here they are developed into complete analysis tools. Conventions: voltages in volts (V), currents in amperes (A), resistance in ohms (Ω), conductance G = 1/R in siemens (S), capacitance in farads (F), inductance in henries (H), j = sqrt(-1), phasors are written in polar form magnitude∠angle.

## Chapter 1. Fundamentals

### 1.1 Charge, current, voltage, power
- **Current** i = dq/dt (A): the flow of positive charge, with a reference direction shown by an arrow. **Voltage** v_ab = the work per unit charge moving from b to a (V), with the reference polarity marked + and -.
- **Passive sign convention:** if the current enters the + terminal of an element, then p = v i is the power **absorbed** by the element. If p < 0, the element is delivering power. In any circuit the total absorbed power is zero (conservation of energy). Energy w = ∫ p dt (J). A 100 W lamp used for 10 h uses 1 kWh = 3.6 MJ.
- **Sources:** an ideal independent voltage source holds its voltage regardless of current; an ideal current source forces its current regardless of voltage. **Dependent (controlled) sources**: VCVS, VCCS, CCVS, CCCS, whose output is proportional to a voltage or current elsewhere in the circuit; they model transistors and amplifiers.

### 1.2 Resistors and Ohm's law
v = i R (passive convention). Power p = v i = i^2 R = v^2/R. Short circuit R = 0, open circuit R = ∞. Real resistors have a tolerance (for example 5 percent) and a power rating.

### 1.3 Kirchhoff's laws
- **KCL:** the algebraic sum of currents leaving a node is zero. **KVL:** the algebraic sum of voltages around any closed loop is zero.
- **Series resistors** carry the same current: R_eq = ΣR; **voltage divider:** v_k = v R_k/ΣR. **Parallel resistors** share the same voltage: G_eq = ΣG; for two, R_eq = R1 R2/(R1 + R2); **current divider:** i_1 = i R2/(R1 + R2).
- **Example.** 36 V is applied to 4 Ω in series with (6 Ω ∥ 12 Ω) in series with 2 Ω. 6 ∥ 12 = 4 Ω, R_eq = 10 Ω, I = 3.6 A, V across the parallel pair = 14.4 V, branch currents 2.4 A and 1.2 A, total power 129.6 W.

## Chapter 2. Systematic Methods

### 2.1 Node-voltage analysis
Choose a reference (ground) node. For each other node write KCL in terms of node voltages (using conductances); solve the matrix equation **G v = i_s**. For a circuit with only resistors and independent current sources, G is symmetric with positive diagonal entries (the sum of the conductances at the node) and negative off-diagonal entries (minus the conductance between nodes). Voltage sources: a source between a node and ground fixes that node's voltage; a source between two non-reference nodes forms a **supernode** (write KCL for the combined node plus the constraint equation v_a - v_b = V).
**Example.** Source 5 A into node 1, 2 A into node 2; R = 2 Ω from node 1 to ground, 4 Ω between nodes 1 and 2, 8 Ω from node 2 to ground:
(1/2 + 1/4) v1 - (1/4) v2 = 5 and -(1/4) v1 + (1/4 + 1/8) v2 = 2, giving v1 = 76/7 = 10.86 V and v2 = 88/7 = 12.57 V.

### 2.2 Mesh-current analysis
For a planar circuit assign a clockwise current to each mesh and write KVL: **R i = v_s**, where the diagonal entries are the total resistance in each mesh and the off-diagonal entries are minus the resistance shared by two meshes. A current source on the boundary of two meshes creates a **supermesh**. **Example.** Mesh 1 has a 10 V source, 2 Ω and the shared 4 Ω; mesh 2 has 6 Ω, the shared 4 Ω and a 4 V source opposing the clockwise current: 6 i1 - 4 i2 = 10; -4 i1 + 10 i2 = -4, so i1 = 1.909 A, i2 = 0.364 A and the current in the shared resistor is i1 - i2 = 1.545 A.
Choose the method with fewer equations: nodes - 1 versus meshes. Both extend to dependent sources by adding the control variable equation.
**Dependent-source example.** 1 A into node 1; 2 Ω from node 1 to ground; 4 Ω between node 1 and node 2; 2 Ω from node 2 to ground; a dependent current source 0.5 v1 flowing from node 2 to ground. Node 1: v1/2 + (v1 - v2)/4 = 1; node 2: (v2 - v1)/4 + v2/2 + 0.5 v1 = 0. Solving: v1 = 1.2 V, v2 = -0.4 V.

### 2.3 Linearity, superposition, source transformation
- **Linearity:** a linear circuit's response is proportional to the source scaling (homogeneity) and sums (additivity).
- **Superposition:** the response to several independent sources is the sum of the responses to each acting alone, with the others turned off (voltage sources replaced by short circuits, current sources by open circuits). Dependent sources always remain. It does not apply to power.
- **Source transformation:** a voltage source V in series with R is equivalent to a current source I = V/R in parallel with R. It simplifies series-parallel networks.

### 2.4 Thevenin and Norton equivalents
Any linear two-terminal network is equivalent to a voltage source V_th in series with R_th (Thevenin), or a current source I_N = V_th/R_th in parallel with R_th (Norton). V_th is the open-circuit voltage; I_N is the short-circuit current; R_th = V_th/I_N, or the resistance seen with independent sources turned off. With dependent sources, find R_th as V_test/I_test (or V_oc/I_sc).
**Example.** 12 V source and 6 Ω in series feeding a node a; 3 Ω from a to ground; a 2 A source into node a: (v_a - 12)/6 + v_a/3 = 2 gives V_th = 8 V; R_th = 6 ∥ 3 = 2 Ω; I_N = 4 A.
**Maximum power transfer:** a load R_L receives the most power when R_L = R_th: P_max = V_th^2/(4 R_th) (here 8 W). The efficiency at maximum power is only 50 percent, so power systems do not operate there.

## Chapter 3. Operational Amplifiers

An op-amp is a high-gain differential amplifier with inputs v+ and v- and output v_o = A (v+ - v-), A ~ 10^5 or more. **Ideal model:** infinite gain, infinite input resistance, zero output resistance. With **negative feedback** this gives the **virtual short**: v+ = v- and i+ = i- = 0. The output is limited by the supply rails (saturation, for example ±12 V).
- **Inverting amplifier:** v_o = -(R_f/R_in) v_in. R_f = 100 kΩ, R_in = 10 kΩ gives gain -10: 0.5 V in produces -5 V; 1.5 V in would give -15 V, so the output saturates at -12 V.
- **Non-inverting amplifier:** v_o = (1 + R_f/R_g) v_in. **Voltage follower** (gain 1): a buffer with very high input resistance.
- **Summing amplifier:** v_o = -R_f (v1/R1 + v2/R2 + ...). **Difference amplifier:** v_o = (R2/R1)(v2 - v1) with matched resistors. **Integrator:** v_o = -(1/RC) ∫ v_in dt. **Differentiator:** v_o = -RC dv_in/dt.
- Analysis steps: assume the virtual short, write KCL at the inverting node, solve. Practical limits: gain-bandwidth product, slew rate, offset and bias currents, output swing.

## Chapter 4. Energy-Storage Elements

### 4.1 Capacitors and inductors
- **Capacitor:** i = C dv/dt; energy w = (1/2) C v^2. The voltage cannot change instantaneously. In DC steady state it acts as an open circuit. Parallel: C_eq = ΣC; series: 1/C_eq = Σ1/C.
- **Inductor:** v = L di/dt; w = (1/2) L i^2. The current cannot change instantaneously. In DC steady state it acts as a short circuit. Series: L_eq = ΣL; parallel: 1/L_eq = Σ1/L. Mutual inductance couples two coils: v_2 = M di_1/dt.
- **Example.** A 2 μF capacitor with v(t) = 5t^2 volts has i = C dv/dt = 20t μA. A 0.5 H inductor with i = 4 A stores 4 J.

### 4.2 First-order circuits
Any circuit with one energy-storage element and resistors reduces to its Thevenin equivalent (V_th, R_th) driving that element, so the response has the form
**x(t) = x(∞) + [x(0+) - x(∞)] e^(-t/τ)**, with **τ = R_th C** (RC) or **τ = L/R_th** (RL).
- **Initial value** x(0+): use continuity (v_C and i_L cannot jump). **Final value** x(∞): DC steady state (capacitors open, inductors shorted). **Time constant** τ: the time to cover 63.2 percent of the change; after 5τ the transient is within 1 percent.
- **RC example:** R = 2 kΩ, C = 500 μF (τ = 1 s), source 10 V, v_C(0) = 2 V: v_C = 10 - 8 e^(-t); it reaches 9 V at t = ln 8 = 2.08 s.
- **RL example:** V = 20 V, R = 10 Ω, L = 0.2 H: τ = 20 ms, i = 2(1 - e^(-50t)) A, final energy (1/2)(0.2)(4) = 0.4 J.
- **Switched circuits:** analyse before the switch (to get the initial value), then after (to get final value and τ). Step and pulse inputs are handled by repeating the method over each interval. **Op-amp integrators** use the same RC relation.

### 4.3 Second-order circuits
A circuit with two storage elements gives a second-order equation. For the **series RLC** circuit with a step source V: L C v_C'' + R C v_C' + v_C = V. The characteristic equation is s^2 + (R/L)s + 1/(LC) = 0 with the damping coefficient α = R/(2L) and the natural frequency ω0 = 1/sqrt(LC).
- **Overdamped** (α > ω0): two real negative roots, v = V + A1 e^(s1 t) + A2 e^(s2 t). R = 6, L = 1, C = 1/8: s = -2, -4.
- **Critically damped** (α = ω0): v = V + (A1 + A2 t) e^(-αt). R = 4, L = 1, C = 1/4: s = -2 twice.
- **Underdamped** (α < ω0): s = -α ± jω_d with ω_d = sqrt(ω0^2 - α^2), v = V + e^(-αt)(A1 cos ω_d t + A2 sin ω_d t). R = 4, L = 1, C = 1/5: s = -2 ± j1; with zero initial energy and V = 10 V: v_C = 10 - e^(-2t)(10 cos t + 20 sin t).
- **Parallel RLC:** α = 1/(2RC), the same ω0. Initial conditions come from v_C(0+) and i_L(0+) (and v_C' = i_C/C). The same mathematics governs mass-spring-damper systems.

## Chapter 5. Sinusoidal Steady State and Phasors

### 5.1 Phasors and impedance
A sinusoid v(t) = V_m cos(ωt + φ) is represented by the phasor V = V_m∠φ (peak) or V_rms = V_m/sqrt 2. Differentiation becomes multiplication by jω, so differential equations become algebraic.
- **Impedance** Z = V/I (Ω): resistor Z = R; inductor Z = jωL; capacitor Z = 1/(jωC) = -j/(ωC). Reactance X (the imaginary part): X_L = ωL, X_C = -1/(ωC). **Admittance** Y = 1/Z.
- Series and parallel combination, voltage and current dividers, node and mesh analysis, superposition (for sources at different frequencies superpose in the time domain), Thevenin and Norton all work with complex numbers.
- **Example.** 40 mH in series with 30 Ω at ω = 1000 rad/s: Z = 30 + j40 = 50∠53.13° Ω; for V = 100∠0° V, I = 2∠-53.13° A (current lags voltage). The sum of 10∠30° and 5∠-60° is 11.18∠3.4°.

### 5.2 AC power
With v = V_m cos(ωt + φ_v) and i = I_m cos(ωt + φ_i), define the phase θ = φ_v - φ_i (the impedance angle).
- **Average (real) power** P = V_rms I_rms cos θ (W). **Reactive power** Q = V_rms I_rms sin θ (var, positive for inductive loads). **Apparent power** S = V_rms I_rms (VA). **Complex power** S = V I* = P + jQ; |S|^2 = P^2 + Q^2. **Power factor** pf = cos θ (lagging for inductive, leading for capacitive).
- For a resistor P = I_rms^2 R; pure inductors and capacitors absorb no average power (they exchange it).
- **Power-factor correction:** a load of 5 kW at 230 V rms, pf 0.8 lagging (S = 6.25 kVA, Q = 3.75 kvar, I = 27.2 A) is corrected to pf 0.95 by a parallel capacitor supplying Q_c = Q - P tan(arccos 0.95) = 3750 - 1644 = 2106 var, so C = Q_c/(ω V^2) = 127 μF at 50 Hz. The line current drops to 22.9 A, which reduces losses.
- **Maximum power transfer in AC:** the load impedance should be the complex conjugate of the Thevenin impedance: Z_L = Z_th*. P_max = |V_th|^2/(8 R_th) with peak values (|V_th|^2/(4 R_th) with rms values).

### 5.3 Frequency response and resonance
- **Transfer function** H(jω) = V_out/V_in. A decibel gain is 20 log10|H|. **Bode plots** show |H| (dB) and the phase against log frequency. A first-order low-pass H = 1/(1 + jω/ω_c) with ω_c = 1/RC has -3 dB and -45° at the cut-off, then falls 20 dB per decade. R = 1 kΩ, C = 0.1 μF gives f_c = 1.59 kHz.
- **Series RLC resonance** at ω0 = 1/sqrt(LC): the reactances cancel, |Z| = R is minimum and the current is maximum. **Quality factor** Q = ω0 L/R = 1/(ω0 R C); bandwidth BW = ω0/Q. R = 10 Ω, L = 10 mH, C = 1 μF: ω0 = 10^4 rad/s (1.59 kHz), Q = 10, BW = 1000 rad/s. At resonance the inductor and capacitor voltages are Q times the source voltage. **Parallel resonance** gives maximum impedance.
- **Filters:** low-pass, high-pass, band-pass and band-stop circuits made from RC, RL and RLC networks, and active filters with op-amps.

### 5.4 Three-phase systems and transformers (introduction)
A balanced **three-phase** source has three voltages of equal magnitude 120° apart. In a Y connection the line voltage is sqrt 3 times the phase voltage. For a balanced load, total real power P = sqrt 3 V_L I_L cos θ. Example: V_L = 400 V, a Y-connected load Z = 20∠30° Ω per phase: V_phase = 231 V, I = 11.5 A, P = 6.93 kW. Three-phase power delivers constant total instantaneous power and uses less copper than single-phase. An **ideal transformer** has V2/V1 = N2/N1 and I2/I1 = N1/N2, and transforms impedances by (N1/N2)^2.

## Chapter 6. Problem-Solving Strategy and Checks
1. Redraw the circuit, label nodes and reference directions, and note what is asked.
2. Pick the method that gives the fewest equations (node, mesh, source transformation, Thevenin).
3. Solve, then **check**: KCL at a node, KVL on a loop, power balance (supplied equals absorbed), limiting cases (R → 0 or ∞), units.
4. Verify with a simulator (LTspice, Falstad, ngspice) once you have a hand solution.

## Chapter 7. Common Mistakes Checklist
1. Inconsistent sign conventions for current direction and voltage polarity (and the passive sign convention for power).
2. Turning off sources incorrectly in superposition and Thevenin (voltage sources become shorts, current sources become opens) or turning off dependent sources.
3. Forgetting to include the supernode constraint, or double counting the shared resistor in mesh analysis.
4. Treating a capacitor voltage or inductor current as discontinuous at a switching instant.
5. Using peak values where rms is needed (power) and degrees versus radians in phasor arithmetic.
6. Taking the wrong sign for the reactance of a capacitor (X_C is negative) or the sign of reactive power.
7. Adding impedances in parallel as if they were resistances without using complex arithmetic.
8. Forgetting that the ideal op-amp analysis requires negative feedback (virtual short) and checking for saturation.
