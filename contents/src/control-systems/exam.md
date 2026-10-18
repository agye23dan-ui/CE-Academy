# Control Systems: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** For a forward path G and a feedback path H with negative feedback the closed-loop transfer function is
A) G H/(1 + G)  B) G/(1 + G H)  C) G/(1 - G H)  D) G + H

**2.** The final-value theorem can be applied only if
A) the input is a step  B) the system is first order  C) sY(s) has all its poles in the left half-plane  D) the initial conditions are nonzero

**3.** The step response of a second-order system with 0 < zeta < 1 has poles that are
A) a complex pair with negative real part  B) two real negative poles  C) on the imaginary axis  D) in the right half-plane

**4.** The dominant poles of a system are
A) the fastest poles  B) the poles at the origin  C) the poles of the controller  D) the poles closest to the imaginary axis

**5.** A right-half-plane zero causes
A) instability  B) an initial response in the wrong direction (undershoot)  C) a lower DC gain only  D) a faster response

**6.** A row of zeros in the Routh array indicates
A) an unstable system  B) a system of order one  C) roots symmetric about the origin (for example on the imaginary axis)  D) a numerical error

**7.** For a type 2 system the steady-state error to a unit parabola is
A) 1/Ka  B) 0  C) infinite  D) 1/(1 + Kp)

**8.** Increasing the open-loop gain generally
A) increases the steady-state error  B) has no effect on stability  C) increases the damping  D) reduces the steady-state error but reduces stability margins

**9.** The root locus is symmetric about
A) the imaginary axis  B) the real axis  C) the origin only  D) no axis

**10.** Breakaway points of the root locus occur where
A) the locus crosses the imaginary axis  B) K = 0  C) dK/ds = 0  D) the phase is zero

**11.** On a Bode magnitude plot a real pole contributes a slope change of
A) -20 dB/decade  B) +20 dB/decade  C) -40 dB/decade  D) 0

**12.** The phase margin is measured at
A) the phase-crossover frequency  B) DC  C) the resonant peak  D) the gain-crossover frequency

**13.** In the Nyquist criterion Z = N + P, where N is
A) the number of poles  B) the number of clockwise encirclements of -1  C) the number of zeros  D) the order

**14.** A lag compensator mainly
A) increases the bandwidth  B) increases the damping  C) improves the steady-state accuracy (raises the low-frequency gain)  D) removes the delay

**15.** A lead compensator
A) adds phase near the crossover and raises the high-frequency gain  B) adds an integrator  C) reduces bandwidth  D) reduces noise gain

**16.** Integrator windup occurs when
A) the plant is unstable  B) the integral term keeps accumulating while the actuator is saturated  C) the derivative is unfiltered  D) the sampling is too slow

**17.** The Ziegler-Nichols PI setting for Ti is
A) Tu/2  B) Tu/8  C) Tu  D) Tu/1.2

**18.** A system is observable if
A) A is stable  B) B is invertible  C) the matrix [C; CA; ...; CA^(n-1)] has rank n  D) D is zero

**19.** The separation principle states that
A) the controller and the observer can be designed independently  B) states cannot be estimated  C) the poles cannot be moved  D) feedback is impossible with noise

**20.** A ZOH discretisation of a plant pole at s = -a gives a discrete pole at
A) z = -a  B) z = e^{-aT}  C) z = 1 - aT only  D) z = 0

## Section B: Short Questions (40 marks)

**B1. (5)** A mass-spring-damper has m = 2 kg, b = 4 N s/m and k = 8 N/m. Find G(s), wn, zeta, the overshoot and the 2 percent settling time estimate.

**B2. (5)** G = 10/(s + 1) is in a negative feedback loop with H = 0.5. Find the closed-loop transfer function, its DC gain and time constant, and compare with the open loop.

**B3. (5)** A second-order system must have overshoot at most 10 percent and settling time at most 2 s. Find the minimum zeta, the minimum real part of the poles and the boundary pole locations.

**B4. (5)** Find the range of K for stability of s^4 + 6 s^3 + 11 s^2 + 6 s + K and the roots at the upper limit.

**B5. (5)** For unity feedback find the type, error constant and steady-state error: (a) L = 10/(s (s + 2)) with a unit ramp; (b) L = 20/((s + 1)(s + 4)) with a unit step.

**B6. (5)** For L = K/(s (s + 1)(s + 2)) give the asymptote angles and centroid, the breakaway point and its K, and the K at the imaginary-axis crossing with the crossing frequency.

**B7. (5)** For L = 20/(s (s + 2)(s + 5)) the phase-crossover frequency is 3.162 rad/s. Find the Routh range of K for stability, the gain margin and comment on the phase margin of 35.8°.

**B8. (5)** For G = 1/(s + 1)^3 the closed-loop ultimate gain is Ku = 8 with period Tu = 3.628 s. Give the Ziegler-Nichols P, PI and PID settings.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Design from specifications and lead compensation.** The plant L = 10/(s (s + 2)) in a unity-feedback loop.
(a) The closed-loop wn, zeta, overshoot, and phase margin of the uncompensated loop [3]. (b) Design a lead compensator for a phase margin of 50° (use 5° extra margin): alpha, w_m and T [4]. (c) Give the PM, overshoot and settling time after compensation and the cost of the lead [3].

**C2. Root locus.** L = K/(s (s + 1)(s + 2)).
(a) Real-axis segments, asymptotes, centroid, breakaway and K, crossing [4]. (b) Closed-loop poles for K = 1, 2, 6 and 10 [3]. (c) The K for zeta = 0.5 and the resulting overshoot, Kv and ramp error; conclusion [3].

**C3. Frequency response.** G(s) = 100/((s + 1)(0.1 s + 1)(0.01 s + 1)).
(a) Corner frequencies and asymptote slopes [3]. (b) The exact magnitudes and phases at 1 and 10 rad/s [3]. (c) The margins and closed-loop assessment [2]. (d) The stability range of K for L = K/(s + 1)^3 by the Nyquist/Routh argument, and the poles at K = 8 [2].

**C4. PID control.** The plant is G = 1/(s + 1)^3.
(a) Ziegler-Nichols PID settings for Ku = 8 and Tu = 3.628 s [3]. (b) The simulated overshoot, final value and settling time for P (Kp = 4), PI and PID [3]. (c) Explain integral windup and the filtered derivative [4].

**C5. State space.** A system: x1' = x2, x2' = -2 x1 - 0.5 x2 + u, y = x1.
(a) The matrices, transfer function and eigenvalues [2]. (b) Controllability and observability [2]. (c) Find K for poles -2 ± 2j and N for unit DC gain; the overshoot [3]. (d) Find L for observer poles -8 and -10 and state the separation principle [3].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **C** · 3 **A** · 4 **D** · 5 **B** · 6 **C** · 7 **A** · 8 **D** · 9 **B** · 10 **C** · 11 **A** · 12 **D** · 13 **B** · 14 **C** · 15 **A** · 16 **B** · 17 **D** · 18 **C** · 19 **A** · 20 **B**

Brief reasons: 2. For an unstable response y(t) never settles. 5. A zero in the right half-plane gives non-minimum-phase behaviour. 8. The gain trade-off is central to control design. 12. PM = 180° + phase at the gain-crossover frequency. 20. The ZOH equivalent has the pole at e^{sT}.

## Section B solutions

**B1.** Step 1: m y'' + b y' + k y = u gives G(s) = 1/(m s^2 + b s + k) = **1/(2 s^2 + 4 s + 8)**.
Step 2: wn = sqrt(k/m) = sqrt(8/2) = sqrt 4 = **2 rad/s**.
Step 3: zeta = b/(2 sqrt(k m)) = 4/(2 × sqrt 16) = 4/8 = **0.5**.
Step 4: overshoot = 100 exp(-pi × 0.5/sqrt(0.75)) = 100 exp(-1.814) = **16.3 percent**.
Step 5: ts ≈ 4/(zeta wn) = 4/(0.5 × 2) = **4 s**.
(The DC gain of the mechanical system is 1/k = 0.125 m/N.)

**B2.** Step 1: G H = (10/(s + 1)) × 0.5 = 5/(s + 1), so 1 + G H = (s + 6)/(s + 1).
Step 2: T = G/(1 + G H) = (10/(s + 1)) × ((s + 1)/(s + 6)) = **10/(s + 6)**.
Step 3: DC gain = 10/6 = **1.667**; time constant = 1/6 = **0.167 s**.
Step 4: comparison: the open loop has DC gain 10 and time constant 1 s. Feedback makes the response six times faster and less sensitive to changes in G, at the cost of a lower gain.

**B3.** Step 1: zeta ≥ -ln 0.1/sqrt(pi^2 + ln^2 0.1) = 2.3026/sqrt(9.8696 + 5.3019) = 2.3026/3.895 = **0.591**.
Step 2: ts ≤ 2 s with ts = 4/sigma gives sigma ≥ 4/2 = **2**.
Step 3: the pole line angle is arccos(0.591) = 53.8°; the imaginary part at sigma = 2 is 2 tan(53.8°) = 2.73.
Step 4: boundary poles **-2 ± j 2.73**; wn = sigma/zeta = 2/0.591 = 3.38 rad/s.

**B4.** Step 1: Routh array for s^4 + 6 s^3 + 11 s^2 + 6 s + K: s^4: [1, 11, K]; s^3: [6, 6].
Step 2: s^2: [(6 × 11 - 1 × 6)/6, (6 × K)/6] = [10, K].
Step 3: s^1: [(10 × 6 - 6 × K)/10] = [(60 - 6K)/10]; s^0: [K].
Step 4: need 60 - 6K > 0 and K > 0: stable for **0 < K < 10**.
Step 5: at K = 10 the auxiliary polynomial 10 s^2 + 10 = 0 gives s = ± j; dividing s^4 + 6 s^3 + 11 s^2 + 6 s + 10 by (s^2 + 1) leaves s^2 + 6 s + 10 with roots -3 ± j. The roots are **-3 ± j and ± j** (a marginal pair at w = 1 rad/s).

**B5.**
(a) Step 1: one integrator: type 1.
Step 2: Kv = lim s L = 10/2 = **5**.
Step 3: ramp error = 1/Kv = **0.2**.
(b) Step 1: no integrator: type 0; Kp = L(0) = 20/4 = **5**.
Step 2: step error = 1/(1 + 5) = **0.167**.

**B6.** L = K/(s (s + 1)(s + 2)).
Step 1: n = 3, m = 0: asymptote angles 180°/3 × (1, 3, 5) = **60°, 180°, 300°**.
Step 2: centroid = (0 - 1 - 2)/3 = **-1**.
Step 3: breakaway: K = -(s^3 + 3 s^2 + 2 s), dK/ds = -(3 s^2 + 6 s + 2) = 0 gives s = -0.4226 (on the locus) and -1.577 (not on it); K = 0.4226 × 0.5774 × 1.5774 = **0.3849**.
Step 4: crossing: Routh on s^3 + 3 s^2 + 2 s + K: s^1 entry (6 - K)/3 = 0 gives **K = 6**; the auxiliary polynomial 3 s^2 + 6 = 0 gives **w = sqrt 2 = 1.414 rad/s**.

**B7.** L = 20/(s (s + 2)(s + 5)).
Step 1: closed-loop polynomial s^3 + 7 s^2 + 10 s + K; Routh: s^1 entry (70 - K)/7 > 0 and K > 0: stable for **0 < K < 70**.
Step 2: GM = K_max/K = 70/20 = 3.5, which is 20 log 3.5 = **10.9 dB**.
Step 3: PM = 35.8°: acceptable stability but a rather oscillatory response (zeta ≈ PM/100 = 0.36; overshoot around 30 percent); a phase margin of 45° to 60° is the usual target.

**B8.** Ziegler-Nichols closed-loop table with Ku = 8, Tu = 3.628 s:
Step 1: P: Kp = 0.5 Ku = 0.5 × 8 = **4**.
Step 2: PI: Kp = 0.45 Ku = 0.45 × 8 = **3.6**; Ti = Tu/1.2 = 3.628/1.2 = **3.02 s**.
Step 3: PID: Kp = 0.6 Ku = 0.6 × 8 = **4.8**; Ti = Tu/2 = **1.814 s**; Td = Tu/8 = **0.453 s**.

## Section C solutions

**C1.**
(a) Step 1: closed loop T = 10/(s^2 + 2 s + 10): wn = sqrt 10 = 3.162 rad/s.
Step 2: zeta = 2/(2 × 3.162) = **0.316**.
Step 3: overshoot = 100 exp(-pi × 0.316/sqrt(1 - 0.1)) = **35.1 percent** (settling time 3.56 s).
Step 4: gain crossover: |L| = 1 gives w^4 + 4 w^2 - 100 = 0, w = 2.86 rad/s; PM = 90° - arctan(2.86/2) = 90° - 55.1° = **34.9°**.
(b) Step 1: lead needed = 50 - 34.9 + 5 ≈ **20°**.
Step 2: alpha = (1 - sin 20°)/(1 + sin 20°) = 0.658/1.342 = **0.490**.
Step 3: place the maximum lead where |G(jw)| = sqrt(alpha) = 0.700: 10/(w sqrt(w^2 + 4)) = 0.700 gives **w_m = 3.52 rad/s**.
Step 4: T = 1/(w_m sqrt(alpha)) = 1/(3.52 × 0.700) = **0.405 s**; alpha T = 0.199 s; C(s) = (0.405 s + 1)/(0.199 s + 1).
(c) PM = **49.6°**; overshoot falls from 35.1 to **19.2 percent**; settling time from 3.56 s to **1.89 s**. Cost: the high-frequency gain rises by 1/alpha = 2.04 (6.2 dB), so measurement noise is amplified more and the actuator works harder; the low-frequency gain (and therefore Kv = 5) is unchanged.

**C2.**
(a) Step 1: real axis: **[-1, 0]** and **(-infinity, -2]** (left of an odd number of poles).
Step 2: asymptotes at 60°, 180°, 300° with centroid (0 - 1 - 2)/3 = **-1**.
Step 3: breakaway from 3 s^2 + 6 s + 2 = 0: **s = -0.4226** at **K = 0.3849**.
Step 4: imaginary-axis crossing from the Routh array: **K = 6, w = 1.414 rad/s**.
(b) Roots of s^3 + 3 s^2 + 2 s + K:
K = 1: -2.325, -0.338 ± 0.562j.
K = 2: -2.521, -0.239 ± 0.858j.
K = 6: -3, ± 1.414j (marginal).
K = 10: -3.309, 0.154 ± 1.732j (unstable).
(c) Step 1: dominant pair with zeta = 0.5: -a ± j sqrt 3 a, third pole -r; matching s^3 + 3 s^2 + 2 s + K with (s^2 + 2 a s + 4 a^2)(s + r): 2a + r = 3 and 4 a^2 + 2 a r = 2 give 6a = 2, a = 1/3, r = 7/3.
Step 2: K = 4 a^2 r = 4/9 × 7/3 = 28/27 = **1.037**; dominant poles **-0.333 ± 0.577j**, third pole -2.333.
Step 3: overshoot **15.5 percent** (simulated; the pure second-order value is 16.3).
Step 4: Kv = K/2 = 0.519, so the ramp error is 1/Kv = **1.93**.
Conclusion: with proportional control alone the damping specification gives a very large steady-state error; a lag compensator or integral action with a lead network is needed to meet both.

**C3.**
(a) Corners at **1, 10, 100 rad/s**; slopes 0, -20, -40, -60 dB/decade after each; DC gain 100 = 40 dB.
(b) Step 1: w = 1: |G| = 100/(sqrt 2 × 1.005 × 1) = 70.4 = 20 log 70.4 = **36.95 dB**; phase = -(45° + 5.7° + 0.6°) = **-51.3°**.
Step 2: w = 10: |G| = 100/(10.05 × 1.414 × 1.005) = 7.0 = **16.9 dB**; phase = -(84.3° + 45° + 5.7°) = **-135°**.
(c) Step 1: gain crossover 30.1 rad/s; phase there = -(88.1° + 71.6° + 16.8°) = -176.5°, so PM = **3.5°**.
Step 2: phase crossover 33.3 rad/s, where |G| = 0.818, so GM = 1/0.818 = **1.22 (1.74 dB)**.
Step 3: the loop is stable but the closed loop is extremely oscillatory (almost at the stability limit); the gain should be reduced (for a phase margin of 45° the gain crossover would have to move far lower) or a lead network added.
(d) Step 1: (s + 1)^3 + K = s^3 + 3 s^2 + 3 s + 1 + K.
Step 2: Routh: s^1 entry (9 - 1 - K)/3 > 0 gives K < 8; so stable for **0 < K < 8**.
Step 3: at K = 8 the auxiliary polynomial 3 s^2 + 9 = 0 gives w = sqrt 3 (the Nyquist plot passes through -1 there) and the closed-loop poles are **-3 and ± j 1.732**.

**C4.**
(a) Step 1: Kp = 0.6 Ku = 0.6 × 8 = **4.8**.
Step 2: Ti = Tu/2 = 3.628/2 = **1.814 s**; Td = Tu/8 = **0.453 s**.
Step 3: Ki = Kp/Ti = 4.8/1.814 = 2.65; Kd = Kp Td = 4.8 × 0.453 = 2.18.
(b) Unity feedback step responses (simulated, ideal PID form): **P (Kp = 4)**: overshoot 54.3 percent, final value 4/(1 + 4) = 0.8 (offset 0.2); **PI** (Kp = 3.6, Ti = 3.02 s): overshoot 56.1 percent, final value 1.000, settling time 30.8 s; **PID**: overshoot **40.6 percent**, final value 1.000, settling time **9.4 s**. The PID has the best settling time and no offset; all three show the aggressive character of Ziegler-Nichols tuning.
(c) **Windup**: when the actuator saturates (a valve fully open, a voltage limit) the loop is effectively open and the error stays large, so the integrator keeps accumulating; when the setpoint is reached the integrator is far beyond its needed value and the output stays saturated until the error has been of opposite sign long enough: large overshoot and slow recovery. Remedies: clamp the integrator, back-calculation, conditional integration. The derivative of noisy measurements has very large amplitude; a first-order filter Td s/(1 + (Td/N) s) with N of 5 to 20 limits the high-frequency gain (and applying the derivative to the measurement only avoids spikes when the setpoint steps).

**C5.**
(a) Step 1: with x1 = y, x2 = y': **A = [[0, 1], [-2, -0.5]], B = [0; 1], C = [1, 0], D = 0**.
Step 2: det(sI - A) = s (s + 0.5) + 2 = s^2 + 0.5 s + 2, so G = **1/(s^2 + 0.5 s + 2)**.
Step 3: eigenvalues = (-0.5 ± sqrt(0.25 - 8))/2 = **-0.25 ± 1.392j**.
(b) Step 1: [B, A B] = [[0, 1], [1, -0.5]], determinant -1, rank 2: controllable.
Step 2: [C; C A] = [[1, 0], [0, 1]], rank 2: observable.
(c) Step 1: A - B K has the characteristic polynomial s^2 + (0.5 + k2) s + (2 + k1).
Step 2: desired (s + 2)^2 + 4 = s^2 + 4 s + 8 gives k2 = 3.5, k1 = 6: **K = [6, 3.5]**.
Step 3: the closed loop is 1/(s^2 + 4 s + 8) with DC gain 1/8, so N = -1/(C (A - B K)^-1 B) = **8**.
Step 4: zeta = 4/(2 sqrt 8) = 0.707, overshoot = 100 exp(-pi) = **4.3 percent**.
(d) Step 1: A - L C has the polynomial s^2 + (0.5 + l1) s + (2 + 0.5 l1 + l2).
Step 2: desired (s + 8)(s + 10) = s^2 + 18 s + 80: l1 = 18 - 0.5 = **17.5**.
Step 3: l2 = 80 - 2 - 0.5 × 17.5 = 80 - 2 - 8.75 = **69.25**: L = [17.5; 69.25].
Step 4: **Separation principle**: for a linear system the closed-loop poles of the controller-observer combination are the poles of A - B K together with those of A - L C, so K and L can be designed independently.
