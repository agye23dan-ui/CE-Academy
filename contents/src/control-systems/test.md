# Control Systems: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** Negative feedback generally
A) increases sensitivity to parameter changes  B) reduces sensitivity to parameter variations and disturbances  C) removes the need for sensors  D) eliminates all noise

**2.** A transfer function is defined with
A) arbitrary initial conditions  B) only DC inputs  C) zero initial conditions  D) time-domain signals

**3.** The poles of a system are
A) the roots of the denominator of the transfer function  B) the roots of the numerator  C) the DC gain  D) the time constants only

**4.** The 2 percent settling time of a first-order system with time constant tau is about
A) tau  B) 2 tau  C) 3 tau  D) 4 tau

**5.** The percent overshoot of a standard second-order system depends only on
A) wn  B) the damping ratio zeta  C) the DC gain  D) the input amplitude

**6.** A system with poles at -3 ± 4j has a damping ratio of
A) 0.3  B) 0.5  C) 0.6  D) 0.8

**7.** A linear system is stable if and only if all poles lie
A) in the open left half-plane  B) on the imaginary axis  C) in the right half-plane  D) at the origin

**8.** In the Routh array the number of sign changes in the first column equals
A) the number of left-half-plane poles  B) the number of right-half-plane poles  C) the order of the system  D) the number of zeros

**9.** The type of a unity-feedback system is
A) its order  B) its number of zeros  C) the number of integrators in the open loop  D) its relative degree

**10.** For a type 1 system the steady-state error to a unit ramp is
A) 1/Kv  B) 0  C) infinite  D) 1/(1 + Kp)

**11.** The root locus branches start (K = 0) at
A) the open-loop zeros  B) the origin  C) infinity  D) the open-loop poles

**12.** The number of root-locus asymptotes is
A) the number of poles  B) n - m (poles minus zeros)  C) the number of zeros  D) n + m

**13.** The gain margin is
A) the factor by which the gain can be increased before the closed loop becomes unstable  B) the DC gain  C) the phase at crossover  D) the bandwidth

**14.** For a second-order loop the damping ratio is approximately
A) PM/10  B) PM/1000  C) PM/100  D) PM

**15.** A lead compensator
A) adds phase lead near the crossover frequency  B) reduces the steady-state error to zero  C) removes poles  D) is the same as an integrator

**16.** Integral action in a PID controller
A) speeds up the transient response  B) amplifies noise  C) reduces overshoot  D) eliminates steady-state error for constant references

**17.** The derivative term is usually filtered because it
A) amplifies high-frequency noise  B) is slow  C) causes offset  D) reduces damping

**18.** The Ziegler-Nichols closed-loop PID setting for Kp is
A) 0.5 Ku  B) 0.45 Ku  C) 0.6 Ku  D) Ku

**19.** A state-space system is controllable if
A) A is stable  B) the matrix [B, AB, ..., A^(n-1) B] has full rank n  C) C is invertible  D) D is zero

**20.** A discrete-time system is stable if and only if all poles are
A) inside the unit circle  B) outside the unit circle  C) on the real axis  D) in the left half-plane

## Section B: Problems (40 marks)

**B1. Modelling and response (10 marks)** (a) A plant G = 5/(s + 2) is in a negative feedback loop with H = 1: the closed-loop transfer function, its DC gain and its time constant [4]. (b) For 25/(s^2 + 6 s + 25): wn, zeta, the poles, the overshoot, the peak time and the settling time [6].

**B2. Stability and steady-state error (10 marks)** (a) The range of K for stability of s^3 + 4 s^2 + 5 s + K, and the oscillation frequency at the limit [5]. (b) A unity-feedback loop has L = 50/(s (s + 5)): the type, Kv and the ramp error [3]. (c) Find the step error of L = 20/((s + 1)(s + 4)) [2].

**B3. Root locus and margins (10 marks)** (a) For L = K/(s (s + 4)): the asymptote angles and centroid, the breakaway point and its K [4]. (b) The K giving poles -2 ± 2j and the resulting damping ratio and overshoot [3]. (c) For L = 20/(s (s + 1)(s + 5)) the gain margin is 1.5 and the phase margin 8.9°: interpret [3].

**B4. State space (10 marks)** A system has A = [[0, 1], [-6, -5]], B = [0; 1], C = [1, 0]. (a) Its eigenvalues and transfer function [3]. (b) Is it controllable? [2] (c) Find K to place the poles at -4 and -5 [3]. (d) Find N for unit DC gain [2].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **C** · 3 **A** · 4 **D** · 5 **B** · 6 **C** · 7 **A** · 8 **B** · 9 **C** · 10 **A** · 11 **D** · 12 **B** · 13 **A** · 14 **C** · 15 **A** · 16 **D** · 17 **A** · 18 **C** · 19 **B** · 20 **A**

Brief reasons: 4. e^{-4} = 1.8 percent. 6. wn = sqrt(9 + 16) = 5, zeta = 3/5 = 0.6. 10. ess = 1/Kv for ramp inputs. 14. zeta is roughly PM/100 (PM in degrees). 16. The integrator keeps changing the output until the error is zero.

### Section B

**B1.**
(a) Step 1: T = G/(1 + G H) with G = 5/(s + 2) and H = 1: 1 + G H = (s + 2 + 5)/(s + 2) = (s + 7)/(s + 2).
Step 2: T = (5/(s + 2)) × ((s + 2)/(s + 7)) = **5/(s + 7)**.
Step 3: DC gain = 5/7 = **0.714**; time constant = 1/7 = **0.143 s** (pole at -7).
(b) Step 1: compare 25/(s^2 + 6 s + 25) with wn^2/(s^2 + 2 zeta wn s + wn^2): wn^2 = 25, so **wn = 5 rad/s**.
Step 2: 2 zeta wn = 6, so zeta = 6/10 = **0.6**.
Step 3: poles = -zeta wn ± j wn sqrt(1 - zeta^2) = -3 ± j(5 × 0.8) = **-3 ± j4** (damped frequency wd = 4 rad/s).
Step 4: overshoot = 100 exp(-pi zeta/sqrt(1 - zeta^2)) = 100 exp(-pi × 0.6/0.8) = 100 exp(-2.356) = **9.48 percent**.
Step 5: peak time = pi/wd = pi/4 = **0.785 s**.
Step 6: settling time (2 percent) = 4/(zeta wn) = 4/3 = **1.33 s** (the simulation gives 1.21 s; the formula is a conservative estimate).

**B2.**
(a) Step 1: Routh array for s^3 + 4 s^2 + 5 s + K: s^3: [1, 5]; s^2: [4, K].
Step 2: s^1: [(4 × 5 - 1 × K)/4] = [(20 - K)/4]; s^0: [K].
Step 3: all first-column entries positive requires 20 - K > 0 and K > 0: stable for **0 < K < 20**.
Step 4: at K = 20 the auxiliary equation 4 s^2 + 20 = 0 gives s^2 = -5, s = ± j sqrt 5: oscillation at **2.236 rad/s**.
(b) Step 1: one integrator in L = 50/(s (s + 5)): **type 1**.
Step 2: Kv = lim s L(s) = 50/5 = **10**.
Step 3: ramp error = 1/Kv = **0.1**.
(c) Step 1: no integrator: type 0; Kp = L(0) = 20/(1 × 4) = 5.
Step 2: step error = 1/(1 + Kp) = 1/6 = **0.167**.

**B3.**
(a) Step 1: n = 2 poles (0 and -4), m = 0 zeros: 2 asymptotes at angles 180°/2 = 90° and 270°.
Step 2: centroid = (0 - 4)/2 = **-2**.
Step 3: the locus runs along the real axis between -4 and 0 and leaves at the breakaway point; K = -s (s + 4), dK/ds = -(2 s + 4) = 0 gives **s = -2**.
Step 4: K = |s (s + 4)| = 2 × 2 = **4**.
(b) Step 1: the closed-loop polynomial is s^2 + 4 s + K; the poles -2 ± 2j give (s + 2)^2 + 4 = s^2 + 4 s + 8, so **K = 8**.
Step 2: wn = sqrt 8 = 2.83; zeta = 2/2.83 = **0.707**.
Step 3: overshoot = 100 exp(-pi) = **4.3 percent**.
(c) L = 20/(s (s + 1)(s + 5)):
Step 1: closed-loop polynomial s^3 + 6 s^2 + 5 s + K, stable for K < 6 × 5 = 30, so GM = 30/20 = 1.5 (3.5 dB): the gain can be raised by only 50 percent before the loop goes unstable.
Step 2: PM = 8.9°: the loop is stable but nearly unstable. The closed-loop poles are -5.74 and -0.13 ± 1.86j (damping ratio 0.13/1.87 = 0.07), so the step response will oscillate violently.
Step 3: the gain is too high: reduce it or add a lead compensator.

**B4.** A = [[0, 1], [-6, -5]], B = [0; 1], C = [1, 0].
(a) Step 1: det(sI - A) = s (s + 5) + 6 = s^2 + 5 s + 6 = (s + 2)(s + 3).
Step 2: eigenvalues **-2 and -3** (stable).
Step 3: G(s) = C (sI - A)^-1 B = **1/(s^2 + 5 s + 6)**.
(b) Step 1: A B = [1; -5], so [B, A B] = [[0, 1], [1, -5]].
Step 2: determinant = 0 × (-5) - 1 × 1 = -1, rank **2**: controllable.
(c) Step 1: A - B K has the characteristic polynomial s^2 + (5 + k2) s + (6 + k1).
Step 2: the desired (s + 4)(s + 5) = s^2 + 9 s + 20.
Step 3: 5 + k2 = 9 gives k2 = **4**; 6 + k1 = 20 gives k1 = **14**: **K = [14, 4]**.
(d) Step 1: the closed loop is N/(s^2 + 9 s + 20), with DC gain N/20.
Step 2: N/20 = 1 gives **N = 20** (the response is overdamped, with no overshoot).
