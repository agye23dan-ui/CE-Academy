# Control Systems: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. Verify your answers with Python: `import control as ct` provides `tf`, `step_info`, `margin`, `root_locus`, `bode`, `place` and `ss`. Every number in the solutions was computed with these tools.

# Assignment 1: Modelling, Time Response and Stability (Chapters 1 to 3)

**Q1. Circuit and mechanical models.** (a) For a series RLC circuit with R = 2 Ω, L = 1 H and C = 0.25 F find the transfer function from input voltage to capacitor voltage, wn and zeta [4]. (b) For a mass-spring-damper with m = 2 kg, b = 4 N s/m, k = 8 N/m find G(s) = Y(s)/U(s), wn and zeta [3]. (c) Compare the two [3].

**Q2. Block diagrams.** (a) A plant G = 10/(s + 1) is placed in a negative feedback loop with H = 0.5: find the closed-loop transfer function, its DC gain and time constant [5]. (b) Find the DC gain and time constant of the open loop and explain the effect of feedback [3]. (c) A motor G = 10/(s (0.5 s + 1)) with unity feedback: find the closed-loop transfer function, wn and zeta [2].

**Q3. First-order systems.** A thermal process has the step response y(t) = 1 - e^{-t/tau} and the measured rise time (10 to 90 percent) of 1.1 s. (a) Find tau [2]. (b) The 2 percent settling time [2]. (c) The time to reach 63.2 percent [2]. (d) The response to a unit step applied to 1/(0.5 s + 1) at t = 1 s: the value at t = 2 s [4].

**Q4. Second-order specifications.** For wn^2/(s^2 + 2 zeta wn s + wn^2) with zeta = 0.5 and wn = 4: (a) the pole locations [2]; (b) the overshoot, peak time and settling time [4]; (c) the same for zeta = 0.2 and wn = 10 [4].

**Q5. Design from specifications.** A second-order system must have overshoot at most 10 percent and settling time at most 2 s. (a) The minimum zeta and the angle of the pole line [4] (b) The minimum real part of the poles [2] (c) The boundary pole locations and wn [2] (d) Why is the settling-time formula only approximate? [2]

**Q6. Final value and DC gain.** (a) The final value of the step response of 5/(s^2 + 3 s + 5) [3] (b) The system with poles -0.25 ± 1.392j and DC gain 0.5 from the mass-spring-damper m = 1, b = 0.5, k = 2: its damping ratio and its step response final value [4] (c) Why can the final-value theorem not be applied to an unstable system? [3]

**Q7. Routh-Hurwitz.** (a) How many right-half-plane poles does s^4 + 2 s^3 + 3 s^2 + 4 s + 5 have? Build the array [4] (b) The range of K for stability of s^3 + 3 s^2 + 2 s + K, and the oscillation frequency at the limit [3] (c) The range of K for s^4 + 6 s^3 + 11 s^2 + 6 s + K [3]

## Solutions to Assignment 1

**Q1.**
(a) Step 1: series RLC, output across C: G(s) = (1/(sC))/(R + sL + 1/(sC)) = 1/(LC s² + RC s + 1).
Step 2: substitute LC = 1 × 0.25 = 0.25 and RC = 2 × 0.25 = 0.5: G = 1/(0.25 s² + 0.5 s + 1) = **4/(s² + 2 s + 4)** (multiply numerator and denominator by 4).
Step 3: compare with wn²/(s² + 2 zeta wn s + wn²): wn² = 4, so wn = 1/sqrt(LC) = **2 rad/s**; 2 zeta wn = 2 gives zeta = 2/(2 × 2) = **0.5** (check: (R/2) sqrt(C/L) = 1 × 0.5 = 0.5).
(b) Step 1: m y'' + b y' + k y = u gives G(s) = 1/(m s² + b s + k) = 1/(2 s² + 4 s + 8).
Step 2: factor out 1/8 so that the form is DC gain × wn²/(...): 1/(2 s² + 4 s + 8) = (1/8) × 4/(s² + 2 s + 4).
Step 3: wn = sqrt(k/m) = sqrt(8/2) = **2 rad/s**; zeta = b/(2 sqrt(k m)) = 4/(2 × 4) = **0.5**; DC gain = 1/k = **0.125 m/N**.
(c) The two systems are **analogs**: both have wn = 2 and zeta = 0.5 (mass to inductance, damper to resistance, spring stiffness to inverse capacitance); only the DC gain differs (1 for the circuit and 0.125 m/N for the mechanical system).

**Q2.**
(a) Step 1: T = G/(1 + G H) with G = 10/(s + 1) and H = 0.5.
Step 2: G H = 5/(s + 1), so 1 + G H = (s + 1 + 5)/(s + 1) = (s + 6)/(s + 1).
Step 3: T = (10/(s + 1)) × ((s + 1)/(s + 6)) = **10/(s + 6)**.
Step 4: DC gain = T(0) = 10/6 = **1.667**; time constant = 1/6 = **0.167 s** (pole at -6).
(b) Open loop: DC gain 10, time constant 1 s (pole at -1). Feedback made the response six times faster (pole moved from -1 to -6) at the cost of lowering the gain from 10 to 1.667: gain is traded for speed. It also reduces sensitivity to changes in G: if G changes by 10 percent, T changes by only about 1/(1 + G H(0)) × 10 = 10/6 = 1.7 percent.
(c) Step 1: T = G/(1 + G) = [10/(s (0.5 s + 1))]/[1 + 10/(s (0.5 s + 1))] = 10/(s (0.5 s + 1) + 10).
Step 2: denominator 0.5 s² + s + 10; divide by 0.5: T = **20/(s² + 2 s + 20)**.
Step 3: wn = sqrt 20 = **4.47 rad/s**; zeta = 2/(2 × 4.47) = **0.224** (lightly damped).

**Q3.**
(a) Step 1: for a first-order step response the 10 to 90 percent rise time is tr = 2.2 tau (t90 = 2.303 tau, t10 = 0.105 tau).
Step 2: tau = 1.1/2.2 = **0.5 s**.
(b) The 2 percent settling time ts = 4 tau = 4 × 0.5 = **2.0 s** (e^-4 = 0.018).
(c) At t = tau, y = 1 - e^-1 = 0.632, so the time is **0.5 s**.
(d) Step 1: 1/(0.5 s + 1) has tau = 0.5 s; the step applied at t = 1 s gives y(t) = 1 - e^{-(t - 1)/0.5} for t ≥ 1.
Step 2: at t = 2 s: (t - 1)/0.5 = 2, so y = 1 - e^-2 = 1 - 0.1353 = **0.8647**.

**Q4.**
(a) Step 1: poles at s = -zeta wn ± j wn sqrt(1 - zeta²) with zeta = 0.5, wn = 4.
Step 2: real part = -0.5 × 4 = -2; wd = 4 × sqrt(0.75) = 3.464: poles **-2 ± j 3.464**.
(b) Step 1: Mp = 100 exp(-pi zeta/sqrt(1 - zeta²)) = 100 exp(-pi × 0.5/0.866) = 100 exp(-1.814) = **16.3 percent**.
Step 2: tp = pi/wd = pi/3.464 = **0.907 s**.
Step 3: ts = 4/(zeta wn) = 4/(0.5 × 4) = **2.0 s** (simulated 2.02 s; rise time 0.419 s).
(c) zeta = 0.2, wn = 10:
Step 1: real part = -2; wd = 10 sqrt(1 - 0.04) = 9.798: poles **-2 ± j 9.80**.
Step 2: Mp = 100 exp(-pi × 0.2/0.9798) = 100 exp(-0.6413) = **52.7 percent** (simulated 52.6).
Step 3: tp = pi/9.798 = **0.321 s** (simulated 0.325).
Step 4: ts = 4/(0.2 × 10) = **2.0 s** (simulated 1.98).

**Q5.**
(a) Step 1: Mp ≤ 10 percent means exp(-pi zeta/sqrt(1 - zeta²)) ≤ 0.1. Taking logarithms and solving gives zeta ≥ -ln 0.1/sqrt(pi² + ln² 0.1).
Step 2: ln 0.1 = -2.3026, so zeta ≥ 2.3026/sqrt(9.8696 + 5.3019) = 2.3026/3.895 = **0.591**.
Step 3: the pole line makes the angle arccos(zeta) = arccos(0.591) = **53.8°** with the negative real axis: the poles must lie within ±53.8° of the negative real axis.
(b) ts = 4/sigma ≤ 2 s gives sigma ≥ 4/2 = **2**: poles to the left of s = -2.
(c) Step 1: boundary: sigma = 2 on the 53.8° line.
Step 2: imaginary part = sigma tan(53.8°) = 2 × 1.364 = **2.73**: s = **-2 ± j 2.73**.
Step 3: wn = sigma/zeta = 2/0.591 = **3.38 rad/s**.
(d) The formula 4/(zeta wn) is derived for the envelope e^{-sigma t} of a pure second-order system and assumes no extra poles or zeros; for real systems with additional dynamics the actual settling time can differ (for zeta = 0.7, wn = 5 the formula gives 4/3.5 = 1.14 s but simulation gives 1.20 s).

**Q6.**
(a) Step 1: the poles of s² + 3 s + 5 are -1.5 ± 1.66j: left half-plane, so the final-value theorem applies.
Step 2: final value = lim s→0 of s × (1/s) × 5/(s² + 3 s + 5) = 5/5 = **1**.
(b) Step 1: m = 1, b = 0.5, k = 2: G = 1/(s² + 0.5 s + 2), so wn = sqrt 2 = 1.414.
Step 2: zeta = b/(2 sqrt(k m)) = 0.5/(2 × 1.414) = **0.177**.
Step 3: poles -zeta wn ± j wd = -0.25 ± 1.392j (as given).
Step 4: final value = DC gain = 1/k = **0.5**. The response overshoots by 57 percent (zeta = 0.177: 100 exp(-pi × 0.177/0.984) = 56.9), to about 1.57 times that value, and rings for many cycles since zeta is small.
(c) The theorem requires that sY(s) has all its poles in the left half-plane; for an unstable system y(t) does not settle, so the limit as s tends to 0 gives a number that has no meaning. Example: Y(s) = 1/(s (s - 1)) gives lim s→0 of s Y(s) = 1/(0 - 1) = -1, but y(t) = e^t - 1 grows without bound.

**Q7.**
(a) Polynomial s⁴ + 2 s³ + 3 s² + 4 s + 5. Routh array:
Step 1: first two rows from the coefficients: s⁴: [1, 3, 5]; s³: [2, 4].
Step 2: s²: [(2 × 3 - 1 × 4)/2, (2 × 5 - 1 × 0)/2] = [1, 5].
Step 3: s¹: [(1 × 4 - 2 × 5)/1] = [-6].
Step 4: s⁰: [5].
Step 5: the first column 1, 2, 1, -6, 5 has **two sign changes** (+ to - and - to +), so **two RHP poles** (computed: 0.288 ± 1.416j).
(b) Polynomial s³ + 3 s² + 2 s + K:
Step 1: s³: [1, 2]; s²: [3, K].
Step 2: s¹: [(3 × 2 - 1 × K)/3] = [(6 - K)/3]; s⁰: [K].
Step 3: all first-column entries positive requires 6 - K > 0 and K > 0: stable if and only if **0 < K < 6**.
Step 4: at K = 6 the s² row gives the auxiliary polynomial 3 s² + 6 = 0, so s² = -2 and s = ± j sqrt 2: the oscillation frequency is **1.414 rad/s**.
(c) Polynomial s⁴ + 6 s³ + 11 s² + 6 s + K:
Step 1: s⁴: [1, 11, K]; s³: [6, 6].
Step 2: s²: [(6 × 11 - 1 × 6)/6, (6 × K - 0)/6] = [10, K].
Step 3: s¹: [(10 × 6 - 6 × K)/10] = [(60 - 6K)/10]; s⁰: [K].
Step 4: need 60 - 6K > 0 and K > 0: stable if and only if **0 < K < 10**. At K = 10 the auxiliary polynomial 10 s² + 10 = 0 gives ± j (the roots are -3 ± j and ± j).

# Assignment 2: Steady-State Error, Root Locus and Frequency Response (Chapters 4 to 6)

**Q1. Steady-state errors.** For unity feedback find the system type, error constant and steady-state error for (a) L = 20/((s + 1)(s + 4)) with a unit step [3] (b) L = 10/(s (s + 2)) with a unit ramp [3] (c) L = K (s + 1)/(s^2 (s + 10)) with a unit parabola [2] (d) L = 4/(s + 1) with a unit ramp [2]

**Q2. Root locus.** For L = K/(s (s + 1)(s + 2)): (a) the real-axis segments, asymptote angles and centroid [4] (b) the breakaway point and its K [3] (c) the imaginary-axis crossing [3]

**Q3. Gain selection.** For the same L: (a) the closed-loop poles for K = 0.3849, 1, 2, 6 and 10 [4] (b) the K giving a dominant damping ratio of 0.5, the poles and the simulated overshoot [4] (c) The velocity constant and ramp error at that K and your conclusion [2]

**Q4. Bode plot.** G(s) = 100/((s + 1)(0.1 s + 1)(0.01 s + 1)). (a) Corner frequencies and slopes [3] (b) |G| in dB and the phase at 0.1, 1, 10 and 100 rad/s [4] (c) The margins and the quality of the closed loop [3]

**Q5. Margins and gain.** L = K/(s (s + 2)(s + 5)). (a) The Routh range for stability [3] (b) The margins for K = 10, 20, 50 [4] (c) The phase-crossover frequency [1] (d) Choose K for a phase margin of about 55° [2]

**Q6. Nyquist criterion.** L = K/(s + 1)^3. (a) The range of K for closed-loop stability [4] (b) The closed-loop poles for K = 4, 8, 10 [4] (c) The number of unstable poles for K = 10 [2]

**Q7. Margins and damping.** (a) For L = 10/(s (s + 2)) compute the phase margin and the gain-crossover frequency [3] (b) Estimate the damping and overshoot from PM [3] (c) The exact closed-loop zeta and overshoot [2] (d) For L = wn^2/(s (s + 2 zeta wn)) with zeta = 0.5, wn = 4, the phase margin [2]

## Solutions to Assignment 2

**Q1.** Type = number of integrators (poles at s = 0) in L; Kp = L(0), Kv = lim s L, Ka = lim s² L.
(a) Step 1: no integrator: **type 0**.
Step 2: Kp = L(0) = 20/((1)(4)) = **5**.
Step 3: ess (step) = 1/(1 + Kp) = 1/6 = **0.167**.
(b) Step 1: one integrator: **type 1**.
Step 2: Kv = lim s L = 10/2 = **5**.
Step 3: ess (ramp) = 1/Kv = **0.2**.
(c) Step 1: s² in the denominator: **type 2**.
Step 2: Ka = lim s² L = K × 1/10 = K/10.
Step 3: ess (parabola) = 1/Ka = **10/K**.
(d) Type 0 with a ramp input: Kv = lim s L = 0, so the error grows without limit: **infinite** (the output follows the ramp but with an ever-increasing error).

**Q2.** L = K/(s (s + 1)(s + 2)): three poles, no zeros.
(a) Step 1: real-axis locus lies to the left of an odd number of poles and zeros: **[-1, 0]** and **(-infinity, -2]**.
Step 2: n - m = 3 asymptotes at angles (2k + 1) × 180°/3 = 60°, 180°, 300°.
Step 3: centroid = (sum of poles - sum of zeros)/(n - m) = (0 - 1 - 2)/3 = **-1**.
(b) Step 1: the characteristic equation 1 + L = 0 gives K = -s (s + 1)(s + 2) = -(s³ + 3 s² + 2 s).
Step 2: dK/ds = -(3 s² + 6 s + 2) = 0 gives s = (-6 ± sqrt(36 - 24))/6 = -1.577 and **-0.4226**.
Step 3: only -0.4226 is on the locus (between -1 and 0).
Step 4: K = |s (s + 1)(s + 2)| = 0.4226 × 0.5774 × 1.5774 = **0.3849**.
(c) Step 1: closed-loop polynomial s³ + 3 s² + 2 s + K; Routh: s¹ entry (3 × 2 - K)/3 = (6 - K)/3.
Step 2: it vanishes at K = 6; the auxiliary polynomial 3 s² + 6 = 0 gives **s = ± j 1.414**: the loop is stable for 0 < K < 6.

**Q3.**
(a) Roots of s³ + 3 s² + 2 s + K (numerical):
K = 0.3849: -2.155, -0.423, -0.422 (double root at breakaway).
K = 1: -2.325, -0.338 ± 0.562j.
K = 2: -2.521, -0.239 ± 0.858j.
K = 6: -3, ± 1.414j (marginal).
K = 10: -3.309, +0.154 ± 1.732j (unstable).
(b) Step 1: let the dominant pair with zeta = 0.5 be -a ± j sqrt 3 a, i.e. s² + 2 a s + 4 a², and the third pole be -r.
Step 2: (s² + 2 a s + 4 a²)(s + r) = s³ + (2a + r) s² + (4a² + 2 a r) s + 4 a² r. Match with s³ + 3 s² + 2 s + K.
Step 3: 2a + r = 3 gives r = 3 - 2a; then 4a² + 2a(3 - 2a) = 6a = 2, so a = 1/3 and r = 7/3.
Step 4: K = 4a² r = 4/9 × 7/3 = 28/27 = **1.037**. Poles: **-0.333 ± 0.577j** and -2.333.
Step 5: simulated overshoot **15.5 percent** (the third pole is far enough to the left that the system is approximately second order: the pure second-order value would be 16.3 percent); settling time 12.5 s (the dominant poles have a small real part).
(c) Step 1: Kv = lim s L = K/(1 × 2) = 1.037/2 = 0.519.
Step 2: ess (ramp) = 1/Kv = **1.93**: a very large ramp error.
Conclusion: with a single gain the system cannot satisfy both damping and accuracy: raising K to improve accuracy reduces damping and eventually destabilises the loop. A compensator (lag for accuracy, lead for speed) or a PID is needed.

**Q4.** G(s) = 100/((s + 1)(0.1 s + 1)(0.01 s + 1)).
(a) Step 1: corner frequencies are 1/(time constants): 1, 10 and 100 rad/s.
Step 2: DC gain 100 = 20 log 100 = 40 dB. The slope is 0 dB/decade below 1 rad/s, then -20, -40 and -60 dB/decade after each corner.
(b) Evaluate |G(jw)| and the phase = -(arctan w + arctan 0.1 w + arctan 0.01 w):
w = 0.1: |G| = 100/(1.005 × 1.00005 × 1) = 99.5 → **39.96 dB**; phase = -(5.71° + 0.57° + 0.06°) = **-6.3°**.
w = 1: |G| = 100/(1.414 × 1.005 × 1) = 70.4 → **36.95 dB**; phase = -(45° + 5.71° + 0.57°) = **-51.3°**.
w = 10: |G| = 100/(10.05 × 1.414 × 1.005) = 7.0 → **16.9 dB**; phase = -(84.3° + 45° + 5.7°) = **-135°**.
w = 100: |G| = 100/(100.005 × 10.05 × 1.414) = 0.0704 → **-23.05 dB**; phase = -(89.4° + 84.3° + 45°) = **-218.7°** (the phase passes through -180° at 33.3 rad/s).
(c) Step 1: gain crossover (|G| = 1) at **30.1 rad/s**; the phase there is -(88.1° + 71.6° + 16.8°) = -176.5°, so PM = 180° - 176.5° = **3.5°**.
Step 2: phase crossover (phase = -180°) at **33.3 rad/s**, where |G| = 0.818, so the gain margin is 1/0.818 = **1.22 (1.74 dB)**.
Step 3: the closed loop is stable but nearly unstable (extremely oscillatory, with a large resonant peak). The gain (100) is too high for these three poles: reduce the gain or add a lead network.

**Q5.** L = K/(s (s + 2)(s + 5)).
(a) Step 1: closed-loop polynomial s (s + 2)(s + 5) + K = s³ + 7 s² + 10 s + K.
Step 2: Routh: s³ [1, 10]; s² [7, K]; s¹ [(70 - K)/7]; s⁰ [K].
Step 3: stable for **0 < K < 70**.
(b) Step 1: the phase crossover frequency is found below; at that frequency |L| = K/70, so GM = 70/K.
Step 2: K = 10: GM = 7 = **16.9 dB**; gain crossover at 0.898 rad/s; PM = **55.6°**.
Step 3: K = 20: GM = 3.5 = **10.88 dB**; PM = **35.8°**.
Step 4: K = 50: GM = 1.4 = **2.92 dB**; PM = **9.0°**.
(c) Step 1: L(jw) denominator = jw (jw + 2)(jw + 5) = jw (10 - w² + 7 jw) = -7 w² + j w (10 - w²).
Step 2: the phase is -180° when the imaginary part vanishes: 10 - w² = 0, so w = **sqrt 10 = 3.162 rad/s** for every K.
(d) K = 10 gives PM = 55.6° (and K = 20 only 35.8°), so **K ≈ 10** (the gain crossover is at 0.90 rad/s).

**Q6.** L = K/(s + 1)³.
(a) Step 1: the characteristic equation (s + 1)³ + K = 0 gives s³ + 3 s² + 3 s + (1 + K).
Step 2: Routh: s³ [1, 3]; s² [3, 1 + K]; s¹ [(9 - 1 - K)/3] = [(8 - K)/3]; s⁰ [1 + K].
Step 3: need 8 - K > 0 and 1 + K > 0: stable for **-1 < K < 8** (K > 0 in practice, so **0 < K < 8**).
Step 4: at K = 8 the auxiliary polynomial 3 s² + 9 = 0 gives s = ± j sqrt 3: the Nyquist plot passes through -1 at w = sqrt 3 (where |L| = 8/(1 + 3)^{3/2} = 1).
(b) Roots of s³ + 3 s² + 3 s + 1 + K (numerical):
K = 4: -2.587, -0.206 ± 1.375j (stable).
K = 8: -3, ± 1.732j (marginal).
K = 10: -3.154, +0.077 ± 1.866j (unstable).
(c) For K = 10 the open loop has no unstable poles (P = 0). The closed loop has **two** unstable poles (the complex pair with positive real part), so by the Nyquist criterion Z = N + P = 2: the Nyquist plot encircles -1 twice (clockwise).

**Q7.**
(a) L = 10/(s (s + 2)).
Step 1: |L(jw)| = 10/(w sqrt(w² + 4)) = 1 gives w² (w² + 4) = 100, so w⁴ + 4 w² - 100 = 0 and w² = (-4 + sqrt(16 + 400))/2 = 8.198: **wgc = 2.863 rad/s**.
Step 2: phase = -90° - arctan(w/2) = -90° - arctan(1.4315) = -90° - 55.1° = -145.1°.
Step 3: PM = 180° - 145.1° = **34.9°**.
(b) Step 1: rule of thumb zeta ≈ PM/100 = **0.35**.
Step 2: Mp = 100 exp(-pi × 0.35/sqrt(1 - 0.1225)) = 100 exp(-1.174) = **30.9 percent**.
(c) Step 1: closed loop T = 10/(s² + 2 s + 10): wn = sqrt 10 = 3.162.
Step 2: zeta = 2/(2 × 3.162) = **0.316**.
Step 3: Mp = 100 exp(-pi × 0.316/sqrt(1 - 0.1)) = **35.1 percent**: the rule of thumb is accurate within a few percent.
(d) L = wn²/(s (s + 2 zeta wn)) = 16/(s (s + 4)):
Step 1: |L| = 1: w² (w² + 16) = 256, so w² = (-16 + sqrt(256 + 1024))/2 = 9.89 and **wgc = 3.14 rad/s**.
Step 2: PM = 90° - arctan(3.14/4) = 90° - 38.2° = **51.8°** (the rule gives 50°).

# Assignment 3: Compensation, PID, State Space and Digital Control (Chapters 7 to 9)

**Q1. Lead compensator.** Plant L = 10/(s (s + 2)) has PM = 34.9° and overshoot 35.1 percent. Design a lead compensator for PM of about 50°. (a) The phase needed and alpha [4] (b) w_m and T [3] (c) The achieved PM, overshoot and settling time [3]

**Q2. Ziegler-Nichols.** The plant is G = 1/(s + 1)^3. (a) Find Ku and Tu [4] (b) The ZN settings for P, PI and PID [3] (c) The simulated overshoot and error of each [3]

**Q3. Understanding PID.** (a) Why does P control leave an offset and how large is it for the plant above with Kp = 4? [3] (b) What does the integral term do and what is windup? [4] (c) Why is the derivative term filtered? [3]

**Q4. State-space model.** For a mass-spring-damper with m = 1, b = 0.5, k = 2 (states: position and velocity): (a) the A, B, C, D matrices and the transfer function [4] (b) the eigenvalues and stability [2] (c) controllability and observability [4]

**Q5. State feedback.** For the system of Q4: (a) Find K to place the poles at -2 ± 2j [4] (b) the reference gain N for unit DC gain [3] (c) the closed-loop step response overshoot [3]

**Q6. Observer.** For the same system measuring only position: (a) design L to place the observer poles at -8 and -10 [5] (b) Why must the observer be faster than the controller? [2] (c) State the separation principle [3]

**Q7. Digital control.** (a) Discretise G(s) = 1/(s + 1) with a ZOH at T = 0.1 s [3] (b) Compare with the Tustin transform [3] (c) The stability condition in the z-plane [2] (d) How to choose the sampling period [2]

## Solutions to Assignment 3

**Q1.** Plant L = 10/(s (s + 2)): PM = 34.9° at wgc = 2.863 rad/s.
(a) Step 1: required lead = PM_target - PM_actual + a margin for the crossover shift = 50 - 34.9 + 5 ≈ **20°**.
Step 2: sin(phi_m) = (1 - alpha)/(1 + alpha), so alpha = (1 - sin 20°)/(1 + sin 20°) = (1 - 0.342)/(1 + 0.342) = 0.658/1.342 = **0.490**.
(b) Step 1: the lead raises the gain by 1/sqrt(alpha) = 1.428 at w_m, so choose w_m where |G| = sqrt(alpha) = 0.700. Solving 10/(w sqrt(w² + 4)) = 0.700 gives **w_m = 3.52 rad/s** (check: |G(j3.52)| = 10/(3.52 × 4.05) = 0.702).
Step 2: T = 1/(w_m sqrt(alpha)) = 1/(3.52 × 0.700) = **0.405 s**; alpha T = 0.490 × 0.405 = 0.199 s.
Step 3: C(s) = (0.405 s + 1)/(0.199 s + 1).
(c) Step 1: at w = 3.52 rad/s the phase of G is -90° - arctan(3.52/2) = -90° - 60.4° = -150.4°, and the lead adds 20°: the phase of the loop is -130.4°.
Step 2: PM ≈ **49.6°** (computed 49.5° with the rounded values) at the new crossover 3.52 rad/s.
Step 3: the overshoot falls from 35.1 to **19.2 percent** and the settling time from 3.56 s to **1.89 s**.
(A lead compensator also raises the high-frequency gain by 1/alpha = 2.04 (6.2 dB), amplifying sensor noise.)

**Q2.** G = 1/(s + 1)³.
(a) Step 1: the phase of G(jw) = -3 arctan(w) equals -180° when arctan(w) = 60°, i.e. w = tan 60° = sqrt 3 = 1.732 rad/s.
Step 2: |G| there = 1/(1 + w²)^{3/2} = 1/(1 + 3)^{3/2} = 1/8, so **Ku = 8**.
Step 3: Tu = 2 pi/w = 2 pi/1.732 = **3.628 s**.
(b) Ziegler-Nichols closed-loop table:
P: Kp = 0.5 Ku = 0.5 × 8 = **4**.
PI: Kp = 0.45 Ku = **3.6**; Ti = Tu/1.2 = 3.628/1.2 = **3.02 s**.
PID: Kp = 0.6 Ku = **4.8**; Ti = Tu/2 = **1.814 s**; Td = Tu/8 = **0.453 s** (so Ki = Kp/Ti = 2.65 and Kd = Kp Td = 2.18).
(c) Unity feedback step responses (ideal PID form, simulated): **P**: overshoot 54.3 percent, final value 0.8 (error **0.2**); **PI**: overshoot 56.1 percent, final value 1.000, settling time 30.8 s; **PID**: overshoot **40.6 percent**, final value 1.000, settling time **9.4 s**. Ziegler-Nichols gives quarter-decay (aggressive) tuning: retune for less overshoot.

**Q3.**
(a) Step 1: with proportional control u = Kp e, so a non-zero output needs a non-zero error.
Step 2: for this plant (DC gain 1) the closed-loop DC gain is Kp/(1 + Kp): with Kp = 4 it is 4/5 = 0.8.
Step 3: offset = 1 - 0.8 = **0.2** (and with Kp = 1: 1 - 0.5 = 0.5).
(b) The integral term accumulates the error: the control signal keeps changing until the error is zero, removing steady-state errors for constant references and disturbances, at the cost of phase lag (less stability margin, often more overshoot). **Windup**: if the actuator saturates, the integrator keeps accumulating, so when the error changes sign the output stays saturated for a long time (large overshoot): use anti-windup (clamping or back-calculation).
(c) A pure derivative has a gain that increases without limit with frequency, so it amplifies measurement noise and quantisation: use a filtered derivative Td s/(1 + (Td/N) s) with N of 5 to 20, and often differentiate only the measurement (not the reference) to avoid kicks.

**Q4.** m = 1, b = 0.5, k = 2.
(a) Step 1: states x1 = y, x2 = y'. Then x1' = x2 and x2' = (-k x1 - b x2 + u)/m = -2 x1 - 0.5 x2 + u.
Step 2: **A = [[0, 1], [-2, -0.5]], B = [0; 1], C = [1, 0], D = 0**.
Step 3: G(s) = C (sI - A)⁻¹ B; sI - A = [[s, -1], [2, s + 0.5]] with determinant s (s + 0.5) + 2 = s² + 0.5 s + 2; the (1,2) entry of the inverse numerator is 1, so **G = 1/(s² + 0.5 s + 2)**.
(b) Step 1: det(sI - A) = s² + 0.5 s + 2 = 0 gives s = (-0.5 ± sqrt(0.25 - 8))/2.
Step 2: eigenvalues **-0.25 ± 1.392j**: stable (left half-plane), lightly damped (zeta = 0.177).
(c) Step 1: controllability matrix [B, A B] with A B = [1; -0.5]: [[0, 1], [1, -0.5]], determinant -1, rank **2**: controllable.
Step 2: observability matrix [C; C A] = [[1, 0], [0, 1]], rank **2**: observable.

**Q5.** State feedback u = -K x + N r.
(a) Step 1: with K = [k1, k2], A - B K = [[0, 1], [-2 - k1, -0.5 - k2]].
Step 2: characteristic polynomial s² + (0.5 + k2) s + (2 + k1).
Step 3: desired polynomial (s + 2 - 2j)(s + 2 + 2j) = (s + 2)² + 4 = s² + 4 s + 8.
Step 4: match: 0.5 + k2 = 4 gives **k2 = 3.5**; 2 + k1 = 8 gives **k1 = 6**. **K = [6, 3.5]**.
(b) Step 1: DC gain of the closed loop without N: C (-(A - B K))⁻¹ B = 1/8 (the transfer function is 1/(s² + 4 s + 8)).
Step 2: N = 1/(1/8) = **8** (i.e. N = -1/(C (A - B K)⁻¹ B)); the closed loop 8/(s² + 4 s + 8) has DC gain 1.
(c) Step 1: wn = sqrt 8 = 2.83; zeta = 4/(2 × 2.83) = 0.707.
Step 2: overshoot = 100 exp(-pi × 0.707/0.707) = 100 exp(-pi) = **4.3 percent** (simulated 4.32 percent); the final value is 1.

**Q6.** Observer with measurement y = x1.
(a) Step 1: with L = [l1; l2]: A - L C = [[-l1, 1], [-2 - l2, -0.5]].
Step 2: characteristic polynomial: (s + l1)(s + 0.5) + (2 + l2) = s² + (l1 + 0.5) s + (0.5 l1 + 2 + l2).
Step 3: desired (s + 8)(s + 10) = s² + 18 s + 80.
Step 4: l1 + 0.5 = 18 gives **l1 = 17.5**; 0.5 × 17.5 + 2 + l2 = 80 gives 8.75 + 2 + l2 = 80, so **l2 = 69.25**.
Step 5: **L = [17.5; 69.25]** (verified with `ct.place`: eigenvalues -10 and -8).
(b) The estimation error must die out quickly compared with the plant dynamics, otherwise the controller acts on bad estimates; typically observer poles are 3 to 5 times faster than the controller poles (here -8 and -10 against -2 ± 2j), limited by measurement noise (faster observers amplify it).
(c) **Separation principle** (for linear systems): the closed-loop eigenvalues of the combined controller-observer system are the union of the eigenvalues of A - B K and A - L C, so K and L can be designed independently.

**Q7.**
(a) Step 1: ZOH equivalent of 1/(s + 1): G(z) = (1 - e^{-T})/(z - e^{-T}).
Step 2: e^{-0.1} = 0.9048, so 1 - 0.9048 = 0.09516: **G(z) = 0.09516/(z - 0.9048)** (pole at e^{-0.1}).
(b) Step 1: Tustin: s = (2/T)(z - 1)/(z + 1) = 20 (z - 1)/(z + 1).
Step 2: G = 1/(20 (z - 1)/(z + 1) + 1) = (z + 1)/(20 z - 20 + z + 1) = (z + 1)/(21 z - 19) = **0.04762 (z + 1)/(z - 0.9048)**: the same pole (19/21 = 0.9048), with a zero at z = -1.
Step 3: DC gain check: ZOH 0.09516/(1 - 0.9048) = 1; Tustin 0.04762 × 2/(1 - 0.9048) = 0.09524/0.0952 = 1.
(c) A discrete-time system is stable if and only if **all poles lie strictly inside the unit circle**, |z| < 1 (the left half of the s-plane maps to the interior via z = e^{sT}).
(d) Choose T so that there are 10 to 30 samples in the closed-loop rise time (or sample at 20 or more times the closed-loop bandwidth); a too-slow rate adds delay (phase loss approximately w T/2 at crossover) and may need an anti-aliasing filter; too fast wastes computation and amplifies quantisation noise in the derivative term.