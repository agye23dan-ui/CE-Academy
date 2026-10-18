# Control Systems: Lecture Notes

A control system makes a physical quantity (speed, temperature, position, voltage) follow a desired value in spite of disturbances and uncertainty, by measuring the result and correcting the input: **feedback**. This course covers modelling with transfer functions, time and frequency response, stability, steady-state error, root locus, Bode and Nyquist methods, PID and lead/lag compensation, state-space design (state feedback and observers) and an introduction to digital control. Every number below was computed with the Python control library, scipy and numpy. Prerequisites: Signals & Systems, Calculus II & ODEs, Linear Algebra and Circuit Analysis.

# Chapter 1: Introduction and Modelling

## 1.1 Open loop and closed loop
An **open-loop** controller applies a pre-computed input (a toaster timer); a **closed-loop** (feedback) controller measures the output y, compares it with the reference r, and acts on the error e = r - y. Feedback reduces sensitivity to parameter changes and disturbances and can stabilise an unstable plant, but it can also cause oscillation and instability, and it needs sensors (which add noise). Components: plant G(s), controller C(s), sensor H(s), actuator.

## 1.2 Transfer functions
For a linear time-invariant system the Laplace transform with zero initial conditions gives G(s) = Y(s)/U(s). Poles are the roots of the denominator, zeros of the numerator; the **DC gain** is G(0). The **final-value theorem**: if sY(s) has all poles in the left half-plane, y(infinity) = lim_{s to 0} s Y(s).

Examples of modelling:
- **Series RLC circuit** (output: voltage across C): G(s) = 1/(LC s^2 + RC s + 1). With R = 2 Ω, L = 1 H, C = 0.25 F: G = 4/(s^2 + 2s + 4), natural frequency wn = 1/sqrt(LC) = **2 rad/s**, damping ratio zeta = (R/2) sqrt(C/L) = **0.5**.
- **Mass-spring-damper** m y'' + b y' + k y = u: G(s) = 1/(m s^2 + b s + k). With m = 2 kg, b = 4 N s/m, k = 8 N/m: wn = sqrt(k/m) = **2 rad/s**, zeta = b/(2 sqrt(k m)) = **0.5**. With m = 1, b = 0.5, k = 2: G = 1/(s^2 + 0.5 s + 2): poles -0.25 ± 1.392j, DC gain 0.5, zeta = 0.177 (very oscillatory).
- **DC motor** (armature-controlled, simplified): G(s) = K/(s (tau s + 1)): the output position is the integral of velocity. The closed loop with unity feedback and K = 10, tau = 0.5 is 10/(0.5 s^2 + s + 10) = 20/(s^2 + 2s + 20): wn = **4.47 rad/s**, zeta = **0.224**.

## 1.3 Block diagrams
Series: G1 G2. Parallel: G1 + G2. **Feedback loop** with forward path G and feedback H: T = G/(1 + G H) (negative feedback). Example: G = 10/(s + 1) with H = 0.5 gives T = 10/(s + 1 + 5) = 10/(s + 6): DC gain **1.667** and time constant 1/6 s (feedback has speeded up the response from 1 s to 0.167 s and reduced the gain from 10: the classical trade of gain for speed and accuracy). Mason's gain formula handles general signal-flow graphs.

# Chapter 2: Time Response

## 2.1 First-order systems
G(s) = 1/(tau s + 1): step response y = 1 - e^{-t/tau}. The time constant tau is the time to reach 63.2 percent. The **rise time** (10 to 90 percent) is 2.2 tau and the **2 percent settling time** is 4 tau. For tau = 0.5 s: rise time **1.08 s** (numerically; 2.2 × 0.5 = 1.1) and settling time **1.99 s** (about 2.0).

## 2.2 Second-order systems
G(s) = wn^2/(s^2 + 2 zeta wn s + wn^2). Poles at -zeta wn ± j wn sqrt(1 - zeta^2) (for zeta < 1): real part sigma = zeta wn and damped frequency wd = wn sqrt(1 - zeta^2). Underdamped (0 < zeta < 1) step response specifications:
- **Percent overshoot** Mp = 100 exp(-pi zeta/sqrt(1 - zeta^2)).
- **Peak time** tp = pi/wd.
- **Settling time (2 percent)** ts ≈ 4/(zeta wn).
- **Rise time** about (1.8 / wn) for zeta near 0.5 to 0.7.
```
zeta   wn    Mp (sim/formula)   tp (sim/formula)   ts (sim / 4/(zeta wn))
0.5    4     16.3% / 16.3%      0.907 / 0.907      2.02 / 2.00
0.2    10    52.6% / 52.7%      0.325 / 0.321      1.98 / 2.00
0.7    5     4.6%  / 4.6%       0.877 / 0.880      1.20 / 1.14
1.0    3     0%                 -                  1.95 / (critical)
```
Mp depends only on zeta (poles on a radial line from the origin at angle theta = arccos zeta from the negative real axis); ts on sigma (a vertical line); wd and tp on the imaginary part.

**Design from specifications.** Mp <= 10 percent requires zeta >= **0.591** (zeta = -ln(Mp/100)/sqrt(pi^2 + ln^2(Mp/100)); for 5 percent: 0.690), which means the poles must lie within an angle arccos(0.591) = **53.8°** of the negative real axis. ts <= 2 s requires sigma = zeta wn >= 4/2 = **2**. The poles must therefore lie to the left of s = -2 and inside the 53.8° wedge: for the boundary case, s = -2 ± j 2.73 (wn = 3.38 rad/s). A unity-feedback loop wn^2/(s(s + 2 zeta wn)) with these values has velocity constant Kv = wn/(2 zeta) = 2.86.

**Higher-order systems and dominant poles**: poles more than about 5 times further left than the dominant pair have little influence; extra zeros increase overshoot; right-half-plane zeros give non-minimum-phase behaviour (an initial response in the wrong direction).

# Chapter 3: Stability

A linear system is **BIBO stable** if and only if all poles are in the open left half-plane. A pole on the imaginary axis gives sustained oscillation (marginal stability); any pole in the right half-plane gives unbounded growth.

## 3.1 Routh-Hurwitz criterion
Build the Routh array from the characteristic polynomial. The number of **sign changes in the first column** equals the number of right-half-plane roots; zeros and a row of zeros need special handling (auxiliary polynomial).

Example 1: s^4 + 2 s^3 + 3 s^2 + 4 s + 5.
```
s^4:  1    3    5
s^3:  2    4
s^2:  1    5            (2·3 - 1·4)/2 = 1, (2·5 - 0)/2 = 5
s^1: -6                 (1·4 - 2·5)/1
s^0:  5
```
First column 1, 2, 1, -6, 5: two sign changes, so **two right-half-plane poles** (computed: 0.288 ± 1.416j), unstable.

Example 2: s^3 + 3 s^2 + 2 s + K.
```
s^3: 1        2
s^2: 3        K
s^1: (6 - K)/3
s^0: K
```
Stable if and only if **0 < K < 6**. At K = 6 the s^1 row is zero: the auxiliary polynomial 3 s^2 + 6 = 0 gives s = ± j 1.414 (sustained oscillation at 1.414 rad/s); the roots are -3 and ± 1.414j. For K = 7: 0.043 ± 1.505j (unstable, growing oscillation).

Example 3: s^4 + 6 s^3 + 11 s^2 + 6 s + K: stable for **0 < K < 10**; at K = 10 the roots are -3 ± j and ± j (marginal), for K = 11 the right-half-plane pair 0.025 ± 1.037j.

# Chapter 4: Steady-State Error

For a unity-feedback system with open-loop L(s) = G(s) C(s), the **system type** is the number of integrators (poles at s = 0) in L. The error constants: Kp = lim_{s to 0} L(s), Kv = lim s L(s), Ka = lim s^2 L(s). Steady-state error: step input: ess = 1/(1 + Kp); ramp (unit slope): ess = 1/Kv; parabola: ess = 1/Ka.
```
type   step     ramp     parabola
0      1/(1+Kp) infinite infinite
1      0        1/Kv     infinite
2      0        0        1/Ka
```
Examples: L = 20/((s + 1)(s + 4)): type 0, Kp = 5, ess(step) = 1/6 = **0.167**. L = 10/(s (s + 2)): type 1, Kv = **5**, ess(ramp) = **0.2**. L = K (s + 1)/(s^2 (s + 10)): type 2, Ka = K/10.
A higher gain reduces ess but reduces stability margins (the central trade-off of control design). **Disturbance rejection**: an integrator *before* the point where the disturbance enters removes its steady-state effect. The error constants hold only if the closed loop is stable: check stability first.

# Chapter 5: Root Locus

The **root locus** plots the closed-loop poles (roots of 1 + K L(s) = 0) as the gain K varies from 0 to infinity. Rules: branches start at open-loop poles (K = 0) and end at open-loop zeros or at infinity; the locus on the real axis lies to the left of an odd number of poles and zeros; n - m asymptotes with angles (2k + 1) 180°/(n - m) and centroid (sum of poles - sum of zeros)/(n - m); breakaway points where dK/ds = 0; imaginary-axis crossings from the Routh array; angle of departure from complex poles.

Example: L(s) = K/(s (s + 1)(s + 2)).
- n = 3, m = 0: 3 asymptotes at **60°, 180°, 300°** with centroid (0 - 1 - 2)/3 = **-1**.
- Real-axis locus: [-1, 0] and (-infinity, -2].
- **Breakaway** from [-1, 0]: 3 s^2 + 6 s + 2 = 0, s = **-0.4226** (the other root, -1.577, is not on the locus), at K = |s(s + 1)(s + 2)| = **0.3849**.
- **Imaginary-axis crossing** at K = **6**, w = **1.414 rad/s** (Routh: s^3 + 3 s^2 + 2 s + K). Stable for 0 < K < 6.
Closed-loop poles: K = 0.3849: -2.155, -0.423 (double); K = 1: -2.325, -0.338 ± 0.562j; K = 2: -2.521, -0.239 ± 0.858j; K = 6: -3, ± 1.414j; K = 10: -3.309, 0.154 ± 1.732j (unstable).
**For zeta = 0.5** (a radial line at 60°) the locus crosses at K = **1.037** with poles -0.333 ± 0.577j and a third pole at -2.333; the simulated step response has Mp = **15.5 percent** (close to the 16.3 percent of a pure second-order system, since the third pole is far left) but ts = 12.5 s (the dominant poles are slow, wn = 0.667); Kv = K/2 = 0.52, so the ramp error is 1/Kv = **1.93**: with this plant, a single gain can give acceptable damping or acceptable accuracy, not both: compensators solve this.

# Chapter 6: Frequency Response

## 6.1 Bode plots
For s = jw, |G(jw)| in dB and the phase against log w. Each real pole at w = a contributes -20 dB/decade above a and up to -90° (-45° at a); each zero the opposite; an integrator contributes -20 dB/decade and -90°. Straight-line (asymptotic) approximations are accurate to 3 dB at the corners.
Example: G(s) = 100/((s + 1)(0.1 s + 1)(0.01 s + 1)): DC gain 100 (40 dB); corners at 1, 10, 100 rad/s; slope -20, -40, -60 dB/decade. Exact values: w = 0.1: 39.96 dB, -6.3°; w = 1: **36.95 dB**, -51.3°; w = 10: **16.9 dB**, -135°; w = 100: -23.05 dB.

## 6.2 Gain and phase margin
The **gain-crossover frequency** wgc has |L| = 1; the **phase margin** PM = 180° + angle L(j wgc). The **phase-crossover frequency** wpc has angle L = -180°; the **gain margin** GM = 1/|L(j wpc)| (in dB: -20 log10|L|). The closed loop is stable (for a minimum-phase open loop) if both margins are positive. Typical goals: PM 45 to 60° and GM 6 to 12 dB. Rule of thumb for a second-order loop: **zeta ≈ PM/100** (PM in degrees), so Mp ≈ 100 exp(...) follows.
Example: L = K/(s (s + 2)(s + 5)):
```
K     GM (dB)   PM       wpc     wgc
10    16.9      55.6°    3.162   0.898
20    10.88     35.8°    3.162   1.522
50    2.92       9.0°    3.162   2.656
70    0          0°      3.162   3.162   (marginal: the Routh limit K = 7 × 10 = 70)
100  -3.1       -8.9°    3.162   3.757   (unstable)
```
(The phase-crossover frequency is sqrt(10) = 3.162 rad/s for every K; the closed loop is stable for K < 70 since s^3 + 7 s^2 + 10 s + K has the Routh limit 7 × 10 = 70.) The example from the Bode formula above, G = 100/((s + 1)(0.1 s + 1)(0.01 s + 1)): gain margin **4.8 dB** (1.74), phase margin only **3.5°**, wgc = 30.1 rad/s, wpc = 33.3 rad/s: nearly unstable, with a very oscillatory closed loop. For L = 10/(s (s + 2)): PM = 34.9° at wgc = 2.86 rad/s; the closed loop 10/(s^2 + 2 s + 10) has zeta = 0.316 and an actual overshoot of 35.1 percent, consistent with the rule zeta ≈ PM/100 = 0.35.
```python
import control as ct
s = ct.tf('s')
L = 20 / (s * (s + 2) * (s + 5))
gm, pm, wpc, wgc = ct.margin(L)     # gm = 3.5 (10.9 dB), pm = 35.8 deg
```

## 6.3 Nyquist criterion
For an open loop with P right-half-plane poles, the closed loop has Z = N + P right-half-plane poles, where N is the number of clockwise encirclements of -1 by the Nyquist plot of L(jw). Example L = K/(s + 1)^3: the closed-loop poles solve (s + 1)^3 + K = 0: K = 4: -2.587, -0.206 ± 1.375j (stable); **K = 8: -3, ± 1.732j** (marginal: the Nyquist plot passes through -1 at w = sqrt 3); K = 10: -3.154, 0.077 ± 1.866j (two unstable poles). Stable for K < 8.

# Chapter 7: Compensator Design and PID

## 7.1 Lead and lag compensation
- **Lead** compensator C(s) = (T s + 1)/(alpha T s + 1) with alpha < 1: adds phase (maximum phi_m = arcsin((1 - alpha)/(1 + alpha)) at w_m = 1/(T sqrt alpha)) and bandwidth: improves transient response and phase margin.
- **Lag** compensator: raises the low-frequency gain (reduces steady-state error) with little change at the crossover.
**Lead design example.** Plant L = 10/(s (s + 2)): PM = 34.9° at wgc = 2.86, overshoot 35.1 percent, ts = 3.56 s. Target PM = 50°: need about 50 - 34.9 + 5 (margin for the crossover shift) = **20°** of lead: alpha = (1 - sin 20°)/(1 + sin 20°) = **0.490**. Place w_m where |G| = sqrt(alpha) = 0.700: w_m = **3.52 rad/s**, T = 1/(w_m sqrt alpha) = 0.405 s: C(s) = (0.405 s + 1)/(0.199 s + 1). Result: PM = **49.6°**, crossover 3.52 rad/s, overshoot **19.2 percent** (from 35.1) and ts = **1.89 s** (from 3.56): both better.

## 7.2 PID control
u = Kp e + Ki integral(e) + Kd de/dt = Kp (1 + 1/(Ti s) + Td s) e. **P** gives fast action but leaves an offset; **I** removes steady-state error but reduces stability margin (and can wind up when the actuator saturates: use anti-windup); **D** adds damping/anticipation but amplifies noise (use a filtered derivative).
**Ziegler-Nichols closed-loop tuning**: raise Kp (P-only) until sustained oscillation: ultimate gain Ku and period Tu; then P: Kp = 0.5 Ku; PI: Kp = 0.45 Ku, Ti = Tu/1.2; PID: Kp = 0.6 Ku, Ti = Tu/2, Td = Tu/8.
Example: plant G = 1/(s + 1)^3: Ku = **8** and the oscillation frequency sqrt 3 give Tu = 2π/sqrt 3 = **3.628 s**. PID: Kp = **4.8**, Ti = 1.814 s, Td = 0.453 s (Ki = 2.65, Kd = 2.18). Simulated unity-feedback step responses (derivative filtered):
```
controller   overshoot   final value   settling time (2%)
P  (Kp=4)     54.3%       0.800          offset 0.2
PI            56.2%       0.999          30.8 s
PID           41.6%       1.000           9.3 s
```
Ziegler-Nichols gives aggressive tuning (about 25 to 50 percent overshoot): treat it as a starting point and fine-tune. With P-control and Kp = 1 the final value is 0.5, an error of 0.5.

# Chapter 8: State-Space Methods

## 8.1 Models
x' = A x + B u, y = C x + D u. For a system with transfer function G(s): G(s) = C (sI - A)^-1 B + D; the eigenvalues of A are the poles. Example (mass-spring-damper, m = 1, b = 0.5, k = 2; states x1 = position, x2 = velocity): A = [[0, 1], [-2, -0.5]], B = [0; 1], C = [1, 0]: G = 1/(s^2 + 0.5 s + 2), eigenvalues -0.25 ± 1.392j.

## 8.2 Controllability and observability
The system is **controllable** if the controllability matrix [B, A B, ..., A^{n-1} B] has rank n, and **observable** if [C; C A; ...; C A^{n-1}] has rank n. In the example [B, A B] = [[0, 1], [1, -0.5]] and [C; C A] = [[1, 0], [0, 1]] both have rank 2.

## 8.3 State feedback and observers
With u = -K x + N r the closed-loop matrix is A - B K: **pole placement** chooses K so that its eigenvalues are at the desired locations (possible for all locations if and only if controllable). Example: place poles at -2 ± 2j (zeta = 0.707, wn = 2.83): the characteristic polynomial of A - B K is s^2 + (0.5 + k2) s + (2 + k1) = s^2 + 4 s + 8, giving **K = [6, 3.5]** (verified with `ct.place`). For zero steady-state error N = -1/(C (A - B K)^-1 B) = **8**; the closed loop 8/(s^2 + 4 s + 8) has overshoot **4.3 percent**, as the 0.707 damping predicts.
```python
K = ct.place(A, B, [-2 + 2j, -2 - 2j])      # [[6.0, 3.5]]
```
When the states are not measured, an **observer** (Luenberger) x_hat' = A x_hat + B u + L (y - C x_hat) estimates them; the estimation error decays with the eigenvalues of A - L C, chosen faster than the controller (typically 3 to 5 times). For observer poles -8 and -10: the polynomial is s^2 + (0.5 + l1) s + (2 + 0.5 l1 + l2) = s^2 + 18 s + 80: **L = [17.5; 69.25]**. The **separation principle**: the controller and the observer can be designed independently and the combined poles are the union of the two sets. Extensions: LQR (optimal K minimising a quadratic cost) and the Kalman filter (optimal observer for noisy systems).

# Chapter 9: Digital Control (introduction)
A computer samples the output every T seconds and holds the control constant (zero-order hold). The discrete equivalent of G(s) = 1/(s + 1) with T = 0.1 s is G(z) = **0.09516/(z - 0.9048)** (pole at e^{-aT} = 0.9048; exact for the ZOH); the **Tustin (bilinear)** approximation gives 0.04762 (z + 1)/(z - 0.9048). A discrete system is stable if and only if all poles are **inside the unit circle**. The sampling period should be 10 to 30 times smaller than the closed-loop rise time (roughly 20 times the closed-loop bandwidth); delays reduce phase margin. Digital PID: u[k] = u[k - 1] + Kp (e[k] - e[k - 1]) + Ki T e[k] + (Kd/T)(e[k] - 2 e[k - 1] + e[k - 2]). Practical issues: quantisation, aliasing (anti-alias filters), anti-windup, bumpless transfer, computation delay.

## Quick reference
- Second-order: Mp = 100 exp(-pi zeta/sqrt(1 - zeta^2)); tp = pi/wd; ts ≈ 4/(zeta wn); zeta ≈ PM/100.
- Error constants: ess = 1/(1 + Kp), 1/Kv, 1/Ka for step, ramp, parabola.
- Margins: PM = 180° + angle L at |L| = 1; GM = 1/|L| at angle -180°.
- Lead: alpha = (1 - sin phi)/(1 + sin phi). ZN PID: Kp = 0.6 Ku, Ti = Tu/2, Td = Tu/8.
- State feedback: controllable means rank [B, AB, ...] = n; observer poles faster than controller poles.
