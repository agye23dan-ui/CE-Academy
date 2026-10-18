# Physics I (Mechanics and Waves): Assignments with Worked Solutions

Use g = 9.8 m/s^2 and the speed of sound 343 m/s unless told otherwise. For every problem draw a diagram, state your axes, write the law you use, solve symbolically, then substitute numbers and check units. Marks are for method as well as the final answer.

# Assignment 1: Kinematics and Newton's Laws (60 marks)

## Questions

**Q1. (8 marks)** (a) A car moving at 30 m/s brakes uniformly at 6 m/s^2. Find the stopping time and distance [3]. (b) Car A moves at constant 20 m/s. Car B starts from rest at the same point 5 s after A passes, accelerating at 4 m/s^2. When and where does B catch A, and how fast is B moving then? [5]

**Q2. (7 marks)** A ball is thrown vertically upward at 15 m/s from the edge of a 30 m cliff. (a) How long until it lands at the bottom? [4] (b) What is its speed on impact? [2] (c) What maximum height above the cliff top does it reach? [1]

**Q3. (8 marks)** A projectile is launched from level ground at 25 m/s at 40° above horizontal. Find (a) the time of flight, (b) the maximum height, (c) the range [4 total]. (d) At what two launch angles would the range be 50 m? [4]

**Q4. (7 marks)** (a) What is the greatest speed at which a car can round a flat curve of radius 50 m if μ_s = 0.6? [3] (b) At what angle should a frictionless curve of radius 50 m be banked for a design speed of 20 m/s? [4]

**Q5. (8 marks)** (a) An Atwood machine has masses 3 kg and 5 kg. Find the acceleration and the tension [4]. (b) A block slides down a 30° incline with μ_k = 0.2. Find its acceleration and the time to slide 4 m from rest [4].

**Q6. (8 marks)** A 4 kg block rests on a table (μ_k = 0.25) and is connected by a rope over a frictionless pulley to a 2 kg hanging mass. Find the acceleration and the rope tension. Also check whether the system starts moving if μ_s = 0.4.

**Q7. (7 marks)** A river 200 m wide flows at 3 m/s. A boat has speed 5 m/s relative to the water. (a) Find the minimum crossing time and the downstream drift [3]. (b) At what angle must it be aimed to land directly opposite, and how long does that take? [4]

**Q8. (7 marks)** A 70 kg person stands on a scale in an elevator. Find the scale reading when the elevator (a) accelerates upward at 2 m/s^2, (b) accelerates downward at 2 m/s^2, (c) is in free fall, (d) moves at constant velocity. Sketch the free-body diagram for (a).

## Solutions and Marking Guide

**Q1.**
(a) Step 1: t = v0/a = 30/6 = **5 s**.
Step 2: d = v0²/(2a) = 900/12 = **75 m**. (1 mark each for time and distance, 1 for correct formula.)
(b) Step 1: take t = 0 when A passes the origin: x_A = 20 t. For t ≥ 5: x_B = (1/2)(4)(t - 5)² = 2(t - 5)².
Step 2: set equal: 20 t = 2(t² - 10 t + 25), so t² - 20 t + 25 = 0.
Step 3: t = 10 ± sqrt 75 = 18.66 s or 1.34 s. Only t > 5 is valid: **t = 18.7 s**.
Step 4: position x = 20 × 18.66 = **373 m**.
Step 5: B's speed v = 4(18.66 - 5) = **54.6 m/s**. (1 mark setup, 1 equations, 1 quadratic, 1 root selection, 1 speed.)

**Q2.** Take up as positive, origin at the cliff top: y = 15 t - 4.9 t^2, landing at y = -30.
(a) Step 1: 4.9 t² - 15 t - 30 = 0.
Step 2: t = (15 + sqrt(225 + 4 × 4.9 × 30))/9.8 = (15 + sqrt(813))/9.8 = (15 + 28.51)/9.8 = **4.44 s** (discard the negative root).
(b) v = 15 - 9.8(4.44) = -28.5 m/s, so the speed is **28.5 m/s** (check: sqrt(15^2 + 2 · 9.8 · 30) = 28.5 ✓).
(c) H = v0^2/(2g) = 225/19.6 = **11.5 m**.

**Q3.** Step 0: v0 sin θ = 25 sin 40° = 16.07 m/s, v0 cos θ = 25 cos 40° = 19.15 m/s.
(a) T = 2 v0 sin θ/g = 2(16.07)/9.8 = **3.28 s**.
(b) H = (v0 sin θ)²/(2g) = 16.07²/19.6 = **13.2 m**.
(c) R = v0 cos θ × T = 19.15 × 3.28 = **62.8 m** (check: v0² sin 80°/g = 625 × 0.9848/9.8 = 62.8 ✓).
(a) T = 2(16.07)/9.8 = **3.28 s**.
(b) H = 16.07^2/19.6 = **13.2 m**.
(c) R = 19.15 · 3.28 = **62.8 m** (check: v0^2 sin 80°/g = 625 · 0.9848/9.8 = 62.8 ✓).
(d) Step 1: sin 2θ = R g/v0² = 50 × 9.8/625 = 0.784.
Step 2: 2θ = 51.6° or 128.4°, giving **θ = 25.8° or 64.2°**.

**Q4.**
(a) Step 1: friction supplies the centripetal force: μ_s m g = m v²/r.
Step 2: v = sqrt(μ_s g r) = sqrt(0.6 × 9.8 × 50) = sqrt 294 = **17.1 m/s (61.7 km/h)**.
(b) Step 1: N cos θ = m g and N sin θ = m v²/r.
Step 2: divide: tan θ = v²/(r g) = 400/490 = 0.816.
Step 3: **θ = 39.2°**.

**Q5.**
(a) Step 1: a = (m2 - m1) g/(m1 + m2) = 2 × 9.8/8 = **2.45 m/s²**.
Step 2: T = m1 (g + a) = 3 × 12.25 = **36.75 N** (check with m2: 5(9.8 - 2.45) = 36.75 ✓).
(b) Step 1: along the slope: m a = m g sin θ - μ_k m g cos θ, so a = 9.8 (0.5 - 0.2 × 0.866) = **3.20 m/s²**.
Step 2: from d = (1/2) a t²: t = sqrt(2 × 4/3.20) = **1.58 s**.

**Q6.** Step 1: check static friction first: the hanging weight is 2 × 9.8 = 19.6 N, while the maximum static friction is 0.4 × 4 × 9.8 = 15.7 N. Since 19.6 N > 15.7 N, the system **does start to move**.
Step 2: once sliding, f_k = 0.25 × 4 × 9.8 = 9.8 N.
Step 3: for the hanging mass: m2 g - T = m2 a; for the block: T - f_k = m1 a.
Step 4: adding: a = (19.6 - 9.8)/6 = **1.63 m/s²**.
Step 5: T = m2 (g - a) = 2(9.8 - 1.633) = **16.3 N**. (2 marks free-body diagrams, 2 equations, 2 solution, 2 static check.)

**Q7.**
(a) Aim straight across: t = 200/5 = **40 s**. Drift = 3 · 40 = **120 m**.
(b) Step 1: the upstream component of the boat's velocity must cancel the current: 5 sin φ = 3, φ = **36.9° upstream of the perpendicular**.
Step 2: crossing speed = 5 cos φ = 4 m/s, so t = 200/4 = **50 s**.

**Q8.** N - m g = m a (up positive).
(a) N = 70(9.8 + 2) = **826 N**.
(b) N = 70(9.8 - 2) = **546 N**.
(c) a = -g, so N = **0** (apparent weightlessness).
(d) N = m g = **686 N**.
Free-body diagram for (a): N upward (longer arrow), m g downward, net force upward.

---

# Assignment 2: Energy, Momentum, Rotation and Gravitation (80 marks)

## Questions

**Q1. (8 marks)** A 2 kg block slides from rest down a frictionless curved ramp of height 1.5 m onto a rough horizontal floor with μ_k = 0.3. Find the speed at the bottom and how far it slides before stopping.

**Q2. (8 marks)** (a) A spring (k = 200 N/m) is compressed 0.10 m and launches a 0.5 kg block along a frictionless table. Find the launch speed [3]. (b) A roller-coaster car starts from rest at height h above the bottom of a frictionless loop of radius R = 4 m. What is the minimum h to complete the loop? [5]

**Q3. (6 marks)** (a) A motor lifts a 500 kg load at constant speed 0.5 m/s. Find the power [2]. (b) A 1200 kg car accelerates from rest to 27 m/s in 8 s. Find the average power delivered to the car's kinetic energy [4].

**Q4. (8 marks)** A 2 kg cart moving at 6 m/s hits a stationary 4 kg cart. Find the final velocities and the kinetic energy lost if the collision is (a) perfectly elastic and (b) perfectly inelastic.

**Q5. (8 marks)** A 10 g bullet is fired into a 2 kg wooden block suspended as a ballistic pendulum. The block (with the bullet) swings up 0.20 m. Find the bullet's speed and the fraction of kinetic energy lost.

**Q6. (8 marks)** A 0.5 kg ball moving at 4 m/s strikes an identical stationary ball in an elastic glancing collision. The first ball is deflected 30° from its original direction. Find both final velocities (speed and direction) and show that the angle between them is 90°.

**Q7. (12 marks)** (a) A solid cylinder (M = 10 kg, R = 0.20 m) rolls without slipping down an incline from a height of 1.2 m. Find its speed at the bottom and compare with a frictionless sliding block [5]. (b) Find the moment of inertia of the cylinder, and the angular acceleration produced by a constant torque of 5 N m [3]. (c) Find the acceleration of the cylinder down a 30° incline [4].

**Q8. (6 marks)** A skater spins at 2.0 rad/s with moment of inertia 4.0 kg m^2. She pulls in her arms so that I = 1.5 kg m^2. Find the new angular speed, the change in kinetic energy, and explain where the energy comes from.

**Q9. (10 marks)** Using G M_E = 3.986 × 10^14 m^3/s^2 and R_E = 6.371 × 10^6 m: (a) find the escape speed from Earth's surface [3]; (b) find the speed and period of a satellite in a circular orbit 400 km above the surface [5]; (c) find the orbital total energy per unit mass at that altitude [2].

**Q10. (6 marks)** A uniform 6.0 m beam of mass 20 kg rests on two supports at its ends. A 60 kg person stands 2.0 m from the left end. Find the support forces.

## Solutions and Marking Guide

**Q1.** Step 1: energy conservation on the ramp: m g h = (1/2) m v², so v = sqrt(2 g h) = sqrt(29.4) = **5.42 m/s**.
Step 2: on the floor, friction does work -μ m g d, so (1/2) m v² = μ m g d and d = v²/(2 μ g) = h/μ = 1.5/0.3 = **5.0 m**. (3 marks speed, 3 marks distance, 2 marks method statement.)

**Q2.**
(a) (1/2) k x^2 = (1/2) m v^2, so v = x sqrt(k/m) = 0.10 sqrt(400) = **2.0 m/s**.
(b) Step 1: at the top of the loop the minimum condition is N = 0, so m g = m v_top²/R and v_top² = g R.
Step 2: energy from the start: m g h = m g (2R) + (1/2) m v_top² = m g (2R) + (1/2) m g R = 2.5 m g R.
Step 3: **h = 2.5 R = 10 m**.

**Q3.**
(a) P = F v = m g v = 500 · 9.8 · 0.5 = **2450 W**.
(b) Step 1: ΔK = (1/2)(1200)(27)² = 437,400 J.
Step 2: P_avg = 437,400/8 = **54.7 kW** (about 73 hp).

**Q4.** Initial momentum 2 · 6 = 12 kg m/s, initial KE = (1/2)(2)(36) = 36 J.
(a) Elastic: v1' = ((m1 - m2)/(m1 + m2)) v1 = ((2 - 4)/6)(6) = **-2 m/s**; v2' = (2 m1/(m1 + m2)) v1 = (4/6)(6) = **+4 m/s**. Check: momentum 2(-2) + 4(4) = 12 ✓, KE = 4 + 32 = 36 ✓. **Energy lost: 0.**
(b) Step 1: inelastic: v' = 12/6 = **2 m/s** for both.
Step 2: KE after = (1/2)(6)(4) = 12 J, so **energy lost 36 - 12 = 24 J (67%)**.

**Q5.** Step 1: after the collision, energy conservation gives v' = sqrt(2 g h) = sqrt(3.92) = 1.98 m/s.
Step 2: momentum in the collision: m v = (m + M) v', so v = (2.01/0.010)(1.98) = **398 m/s**.
Step 3: initial KE = (1/2)(0.010)(398)² = 792 J; KE just after = (1/2)(2.01)(1.98)² = 3.94 J.
Step 4: fraction lost = 1 - 3.94/792 = **99.5%**. (2 marks each for the two stages, 2 for the bullet speed, 2 for the fraction.)

**Q6.** Step 1: For equal masses, an elastic collision with one at rest gives perpendicular outgoing velocities.
Step 2: Ball 1: v1' = 4 cos 30° = **3.46 m/s at 30° from the original direction**.
Step 3: Ball 2: v2' = 4 sin 30° = **2.0 m/s at 60° on the other side** (-60°).
Step 4: Verification: momentum along the original axis: 3.46 cos 30° + 2 cos 60° = 3.0 + 1.0 = 4.0 ✓; transverse: 3.46 sin 30° - 2 sin 60° = 1.73 - 1.73 = 0 ✓; energy: 3.46^2 + 2^2 = 12 + 4 = 16 = 4^2 ✓. The angle between the two velocities is 30° + 60° = 90°. ✓

**Q7.**
(a) Step 1: I = (1/2) M R², so energy conservation: M g h = (1/2) M v² + (1/2) I ω² = (1/2) M v² + (1/4) M v² = (3/4) M v².
Step 2: v = sqrt(4 g h/3) = sqrt(4 × 9.8 × 1.2/3) = sqrt(15.68) = **3.96 m/s**.
Step 3: a sliding block reaches sqrt(2 g h) = 4.85 m/s; the cylinder is slower because a third of the energy goes into rotation.
(b) I = (1/2)(10)(0.04) = **0.20 kg m^2**. α = τ/I = **25 rad/s^2**.
(c) a = g sin θ/(1 + 1/2) = (2/3) g sin 30° = **3.27 m/s^2**.

**Q8.** Step 1: L conserved: ω' = I ω/I' = 4(2)/1.5 = **5.33 rad/s**.
Step 2: K_i = (1/2)(4)(4) = 8 J; K_f = (1/2)(1.5)(5.33)² = 21.3 J. **ΔK = +13.3 J.**
Step 3: the energy comes from the work her muscles do pulling the arms inward against the (apparent) centrifugal tendency; angular momentum is conserved but kinetic energy is not.

**Q9.**
(a) v_esc = sqrt(2 G M/R) = sqrt(2 × 3.986 × 10^14/6.371 × 10^6) = sqrt(1.251 × 10^8) = **11.19 km/s**.
(b) Step 1: r = 6.371 × 10^6 + 4.00 × 10^5 = 6.771 × 10^6 m.
Step 2: v = sqrt(G M/r) = sqrt(5.887 × 10^7) = **7.67 km/s**.
Step 3: T = 2π r/v = 2π × 6.771 × 10^6/7672 = 5545 s = **92.4 minutes**.
(c) E/m = -G M/(2 r) = -3.986 × 10^14/(1.354 × 10^7) = **-2.94 × 10^7 J/kg**.

**Q10.** Step 1: take torques about the left support. The beam's weight (20 × 9.8 = 196 N) acts at 3.0 m, the person (60 × 9.8 = 588 N) at 2.0 m, and the right support force N_R at 6.0 m.
Step 2: 6 N_R = 196(3) + 588(2) = 588 + 1176 = 1764, so **N_R = 294 N**.
Step 3: vertical balance: N_L = 784 - 294 = **490 N**.

---

# Assignment 3: Oscillations and Waves (80 marks)

## Questions

**Q1. (10 marks)** A 0.40 kg mass on a spring (k = 40 N/m) oscillates with amplitude 0.050 m. Find (a) ω, T, f [3]; (b) maximum speed and maximum acceleration [2]; (c) total energy [1]; (d) the speed at x = 0.030 m [2]; (e) x(t) if at t = 0 the mass is at x = 0.030 m moving in the +x direction at 0.40 m/s [2].

**Q2. (6 marks)** (a) Find the period of a 1.00 m simple pendulum [2]. (b) What length gives a period of exactly 2 s? [2] (c) What is the period of that pendulum on the Moon (g = 1.62 m/s^2)? [2]

**Q3. (10 marks)** A 1 kg mass on a spring with k = 100 N/m is damped with b = 2 kg/s. Find (a) ω0 and γ = b/(2m) [2]; (b) the damped angular frequency [2]; (c) the time for the amplitude to halve [2]; (d) the quality factor Q [2]; (e) the damping coefficient b that gives critical damping [2].

**Q4. (6 marks)** An oscillator with ω0 = 5 rad/s, m = 1 kg and γ = 0.1 s^-1 is driven by F0 cos(ω t) with F0 = 2 N. Find the steady-state amplitude at resonance and at ω = 2 rad/s.

**Q5. (12 marks)** A string wave is described by y = 0.020 sin(4π x - 100π t) (SI units). Find (a) the amplitude, wavelength, frequency, period, speed [5]; (b) the maximum transverse speed of a string element [2]; (c) the tension if μ = 0.010 kg/m [2]; (d) the average power transmitted [3].

**Q6. (10 marks)** (a) A 0.80 m string fixed at both ends supports waves at v = 200 m/s. Find the first three harmonic frequencies and wavelengths [4]. (b) Find the fundamental of a 0.50 m pipe open at both ends and of the same pipe closed at one end (v = 343 m/s) [3]. (c) Which harmonics are present in each? [3]

**Q7. (10 marks)** (a) A sound has intensity 1.0 × 10^-6 W/m^2. Find its level in dB [2]. (b) A 100 W point source radiates uniformly; find the intensity and level at 10 m, and at 20 m [4]. (c) Two incoherent 60 dB sources sound together; find the total level [2]. (d) How many identical machines of 85 dB each produce 95 dB? [2]

**Q8. (10 marks)** (a) An ambulance siren (700 Hz) moves at 30 m/s toward a stationary observer, then away; find both frequencies [4]. (b) The observer now moves at 20 m/s toward the stationary siren; find the frequency [2]. (c) Two tuning forks, 440 Hz and 444 Hz, sound together; find the beat frequency and period [2]. (d) A jet moves at Mach 2; find the Mach cone half-angle [2].

**Q9. (6 marks)** Two in-phase loudspeakers emit 200 Hz tones. A listener is 3.00 m from one and 3.86 m from the other. Is the interference constructive or destructive? Find the frequencies near 200 Hz that would give exact destructive interference at that point.

## Solutions and Marking Guide

**Q1.**
(a) ω = sqrt(k/m) = sqrt(100) = **10 rad/s**, T = 2π/ω = **0.628 s**, f = **1.59 Hz**.
(b) v_max = A ω = 0.050 · 10 = **0.50 m/s**; a_max = A ω^2 = **5.0 m/s^2**.
(c) E = (1/2) k A^2 = 0.5 · 40 · 0.0025 = **0.050 J**.
(d) v = ω sqrt(A² - x²) = 10 sqrt(0.0025 - 0.0009) = 10 × 0.040 = **0.40 m/s**.
(e) Step 1: x = A cos(ω t + φ) with v = -A ω sin(ω t + φ).
Step 2: At t = 0: A cos φ = 0.030 and -A ω sin φ = 0.40, so sin φ = -0.8, cos φ = 0.6, φ = **-0.927 rad (-53.1°)** and A = sqrt(0.03^2 + 0.04^2) = 0.050 m.
Step 3: So **x(t) = 0.050 cos(10 t - 0.927) m**.

**Q2.**
(a) T = 2π sqrt(L/g) = 2π sqrt(1/9.8) = **2.007 s**.
(b) L = g T^2/(4π^2) = 9.8 · 4/39.48 = **0.993 m**.
(c) T = 2π sqrt(0.993/1.62) = 2π(0.783) = **4.92 s** (the Moon's low gravity makes the pendulum slower).

**Q3.**
(a) ω0 = sqrt(k/m) = **10 rad/s**; γ = 2/(2 · 1) = **1.0 s^-1**.
(b) ω' = sqrt(ω0^2 - γ^2) = sqrt(99) = **9.95 rad/s**.
(c) The amplitude decays as e^(-γ t). Halving: e^(-γ t) = 1/2, t = ln 2/γ = **0.693 s**.
(d) Q = ω0/(2γ) = 10/2 = **5**.
(e) Critical damping: γ = ω0, so b = 2 m ω0 = **20 kg/s**.

**Q4.** A(ω) = (F0/m)/sqrt((ω0² - ω²)² + (2 γ ω)²).
Step 1: at resonance ω = ω0 = 5: A = 2/sqrt(0 + (2 × 0.1 × 5)²) = 2/1 = **2.0 m**.
Step 2: at ω = 2: ω0² - ω² = 21, 2γω = 0.4; A = 2/sqrt(441 + 0.16) = 2/21.0 = **0.0952 m**.
Step 3: the response at resonance is about 21 times larger.

**Q5.** Compare with y = A sin(k x - ω t): A = 0.020 m, k = 4π rad/m, ω = 100π rad/s.
(a) **A = 0.020 m, λ = 2π/k = 0.50 m, f = ω/2π = 50 Hz, T = 0.020 s, v = f λ = 25 m/s.** (The wave moves in the +x direction.)
(b) v_max = A ω = 0.020 · 314.2 = **6.28 m/s**.
(c) v = sqrt(T/μ), so T = μ v^2 = 0.010 · 625 = **6.25 N**.
(d) P = (1/2) μ ω² A² v = 0.5 × 0.010 × (314.2)² × (0.020)² × 25: (314.2)² = 98,722; × 0.0004 = 39.49; × 0.005 = 0.1974; × 25 = **4.93 W**.

**Q6.**
(a) f_n = n v/(2L) = n · 200/1.6 = 125 n Hz. **125, 250, 375 Hz** with wavelengths λ_n = 2L/n = **1.6, 0.8, 0.533 m**.
(b) Open: f1 = v/(2L) = 343/1.0 = **343 Hz**. Closed: f1 = v/(4L) = 343/2.0 = **171.5 Hz**.
(c) The open pipe has **all harmonics** (343, 686, 1029, ... Hz). The closed pipe has **only odd harmonics** (171.5, 514.5, 857.5, ... Hz).

**Q7.**
(a) β = 10 log10(10^-6/10^-12) = 10(6) = **60 dB**.
(b) Step 1: at 10 m: I = P/(4π r²) = 100/(4π × 100) = **0.0796 W/m²**.
Step 2: β = 10 log10(0.0796/10^-12) = 10(10.90) = **109 dB**.
Step 3: at 20 m: I = 0.0199 W/m², β = **103 dB** (6 dB lower, the inverse-square law).
(c) Intensities add: 2 × 10^-6 W/m^2 gives β = 60 + 10 log 2 = **63 dB**.
(d) A 10 dB increase means ten times the intensity, so **10 machines**.

**Q8.** Use v = 343 m/s.
(a) Step 1: approaching: f' = f v/(v - v_s) = 700 × 343/(343 - 30) = 700 × 343/313 = **767 Hz**.
Step 2: receding: f' = 700 × 343/(343 + 30) = 700 × 343/373 = **644 Hz**.
(b) Moving observer: f' = f (v + v_o)/v = 700 × 363/343 = **741 Hz**.
(c) f_beat = |444 - 440| = **4 Hz**, a beat period of **0.25 s**.
(d) sin θ = 1/Mach = 0.5, so **θ = 30°**.

**Q9.** Path difference Δ = 3.86 - 3.00 = 0.86 m. λ = v/f = 343/200 = 1.715 m, so Δ/λ = 0.501, essentially one half wavelength: **destructive interference** (the tone is very faint). Exact destructive interference needs Δ = (n + 1/2) λ = (n + 1/2) v/f, so f = (n + 1/2) v/Δ = (n + 1/2)(343/0.86) = 199.4 Hz, 598 Hz, 997 Hz, ... for n = 0, 1, 2 (the first is the one near 200 Hz).
