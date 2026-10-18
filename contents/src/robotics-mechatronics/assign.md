# Robotics and Mechatronics: Assignments with Worked Solutions

Show formulas, substitute numbers and give units (angles in degrees or radians as stated). All numerical answers below were computed and checked in Python (NumPy, SciPy and the python-control library). Draw a labelled sketch for every kinematics question.

# Assignment 1: Spatial Description and Manipulator Kinematics (70 marks)

## Questions

**Q1. Rotations and transforms (18 marks)** (a) Rotate the vectors (1, 0, 0) and (0, 0, 1) about the y axis by 60° [4]. (b) Let M = Rz(45°) Rx(30°). Compute M, show that MᵀM = I and det M = 1, and find M applied to (0, 1, 0). Repeat with the product order reversed and comment [8]. (c) Frame B is obtained from A by rotating 30° about z and translating (1, 0, 0); frame C from B by rotating 60° about z and translating (0.5, 0.5, 0) (expressed in B). Find the transform from C to A and the position in A of the point (1, 0, 0) given in C [6].

**Q2. Forward and inverse kinematics (20 marks)** A planar arm has l₁ = 0.6 m and l₂ = 0.4 m. (a) Find the tip position for θ₁ = 40°, θ₂ = 60° [4]. (b) Find the workspace limits and its area [4]. (c) Solve the inverse kinematics for the target (0.7, 0.5) m, giving both solutions [8]. (d) Verify one solution with forward kinematics and explain how you choose between them [4].

**Q3. Jacobian, velocity and statics (20 marks)** For the arm of Q2 at θ₁ = 40°, θ₂ = 60°: (a) Write J and compute det J [6]. (b) Find the tip velocity for q̇ = (1, -0.5) rad/s [3]. (c) Find the joint torques needed to hold tip forces (5, 0) N and (0, -20) N [4]. (d) Find the joint rates for a tip velocity (0.1, 0) m/s here and at θ₂ = 5°, and comment [7].

**Q4. Three-link planar arm (8 marks)** Links 0.5, 0.4 and 0.2 m, joint angles 30°, 30°, 30°. Compute the tip position and orientation [6] and state the number of DOF of the end-effector pose in the plane [2].

**Q5. Concepts (4 marks)** What is a singularity and why is it dangerous? What is gimbal lock?

## Solutions

**Q1.**
(a) Ry(θ) = [[cos θ, 0, sin θ], [0, 1, 0], [-sin θ, 0, cos θ]]. (1, 0, 0) → (cos 60°, 0, -sin 60°) = **(0.5, 0, -0.866)**; (0, 0, 1) → (sin 60°, 0, cos 60°) = **(0.866, 0, 0.5)**.
(b) Step 1: M = Rz(45°) Rx(30°) = [[0.7071, -0.6124, 0.3536], [0.7071, 0.6124, -0.3536], [0, 0.5, 0.8660]].
Step 2: Each column has unit length and columns are mutually orthogonal, so MᵀM = I; det M = +1.
Step 3: M(0, 1, 0)ᵀ = the second column = **(-0.612, 0.612, 0.5)**.
Step 4: Reversed order Rx(30°) Rz(45°) gives (-0.707, 0.612, 0.354) for the same vector: a **different** result, because 3D rotations do not commute.
(c) Step 1: ᴬT_B has R = Rz(30°), p = (1, 0, 0); ᴮT_C has R = Rz(60°), p = (0.5, 0.5, 0).
Step 2: The product has rotation Rz(90°) and translation ᴬp = (1, 0, 0) + Rz(30°)(0.5, 0.5, 0) = (1 + 0.183, 0.683, 0) = **(1.183, 0.683, 0)**.
Step 3: The point (1, 0, 0) in C: rotate by Rz(90°) to (0, 1, 0) and add the translation: **(1.183, 1.683, 0)** in A.

**Q2.**
(a) x = 0.6 cos 40° + 0.4 cos 100° = 0.4596 - 0.0695 = **0.390 m**; y = 0.6 sin 40° + 0.4 sin 100° = 0.3857 + 0.3939 = **0.780 m**.
(b) Reach is between |l₁ - l₂| = **0.2 m** and l₁ + l₂ = **1.0 m** (an annulus, assuming unrestricted joints). Area = π(1.0² - 0.2²) = **3.02 m²**.
(c) Step 1: Target distance = √(0.49 + 0.25) = 0.860 m (inside the workspace). cos θ₂ = (0.74 - 0.36 - 0.16)/(2 × 0.6 × 0.4) = 0.22/0.48 = 0.4583, so θ₂ = ±62.72°.
Step 2: Elbow-down (+): θ₁ = atan2(0.5, 0.7) - atan2(0.4 sin 62.72°, 0.6 + 0.4 cos 62.72°) = 35.54° - 24.41° = **11.13°**.
Step 3: Elbow-up (-): θ₁ = 35.54° + 24.41° = **59.95°**, θ₂ = **-62.72°**.
(d) Forward kinematics of (11.13°, 62.72°): x = 0.6 cos 11.13° + 0.4 cos 73.85° = 0.5887 + 0.1113 = 0.700; y = 0.6 sin 11.13° + 0.4 sin 73.85° = 0.1158 + 0.3842 = 0.500 ✓. Choose by joint limits, obstacle clearance, the current configuration (smallest joint motion) and avoidance of singularities.

**Q3.**
(a) J = [[-0.6 sin 40° - 0.4 sin 100°, -0.4 sin 100°], [0.6 cos 40° + 0.4 cos 100°, 0.4 cos 100°]] = [[-0.780, -0.394], [0.390, -0.0695]]. det J = l₁ l₂ sin θ₂ = 0.24 sin 60° = **0.208**.
(b) v = J q̇ = (-0.780 + 0.197, 0.390 + 0.035) = **(-0.583, 0.425) m/s**.
(c) τ = Jᵀ F: for (5, 0): (-3.90, -1.97) N·m; for (0, -20): (-7.80, +1.39) N·m. (Signs show direction of the required joint torques.)
(d) Step 1: At θ₂ = 60°: q̇ = J⁻¹(0.1, 0) = **(-0.033, -0.188) rad/s**.
Step 2: At θ₂ = 5° the arm is nearly stretched: det J = 0.0209, and q̇ = **(1.35, -3.55) rad/s**, about 20 times larger.
Step 3: Near a singularity small tip motions demand huge joint speeds (and the tip cannot move along the arm's axis): avoid or use damped least squares.

**Q4.** Angles accumulate: 30°, 60°, 90°. x = 0.5 cos 30° + 0.4 cos 60° + 0.2 cos 90° = 0.433 + 0.200 + 0 = **0.633 m**; y = 0.5 sin 30° + 0.4 sin 60° + 0.2 sin 90° = 0.25 + 0.346 + 0.2 = **0.796 m**; orientation = 30° + 30° + 30° = **90°**. The planar end-effector pose has 3 DOF (x, y, φ), so a 3R arm can set all three (a non-redundant arm).

**Q5.** A singularity is a configuration where the Jacobian loses rank (det J = 0): the end-effector cannot move in some direction regardless of joint rates, and near it required joint rates and forces become very large. Gimbal lock is the loss of one rotational DOF in Euler-angle representations when two rotation axes align (for example pitch = ±90°), making the angle parameters non-unique; quaternions avoid it.

# Assignment 2: Actuators, Sensors, Dynamics and Trajectories (70 marks)

## Questions

**Q1. DC motor (18 marks)** A motor has V = 24 V, R = 2 Ω, Kt = Ke = 0.08 N·m/A, J = 5×10⁻⁵ kg·m². (a) Find the no-load speed in rpm, stall torque and stall current [4]. (b) For a 0.3 N·m load find current, speed, mechanical output, input power, efficiency and copper loss [8]. (c) Find the mechanical time constant [2]. (d) At what torque and speed is the output power maximum, and what is that power? [4]

**Q2. Gearing (12 marks)** (a) A 30:1 gearbox with 85 percent efficiency is driven by a motor producing 0.12 N·m at 4,000 rpm; find output torque and speed [4]. (b) A load of 0.9 kg·m² is attached to the output shaft; find the inertia reflected to the motor and compare it with the motor's rotor inertia of 5×10⁻⁵ kg·m² [4]. (c) What motor torque is needed to produce 6 N·m at the output? [2] (d) Name two drawbacks of high gear ratios [2].

**Q3. Stepper and encoder (10 marks)** (a) A 1.8° stepper uses 1/8 microstepping: how many steps per revolution, and what speed results from 6,400 pulses/s? [4] (b) The stepper turns a lead screw of 5 mm pitch; what pulse rate gives 20 mm/s? [2] (c) A 2,000-line quadrature encoder on a wheel of radius 0.04 m: counts per revolution, angular resolution and distance per count [4].

**Q4. Trajectories (20 marks)** A joint must move 60° in 1.5 s starting and finishing at rest. (a) Give the cubic polynomial coefficients, peak velocity and peak acceleration [6]. (b) Give the peak velocity and acceleration of the quintic and the position at mid-time for both [6]. (c) A trapezoidal profile with v_max = 80 °/s and a = 160 °/s²: find the ramp time and total time [4]. (d) For a 20° move with the same limits find the profile type, peak speed and time [4].

**Q5. Dynamic torque (10 marks)** A uniform 1.2 kg link of length 0.5 m (mass centre at 0.25 m) carries a 0.8 kg payload at its tip. (a) Find the gravity torque at the joint when the link is horizontal [4]. (b) Find the torque at 60° above horizontal [3]. (c) Why include a safety factor when selecting the motor? [3]

## Solutions

**Q1.**
(a) ω₀ = V/Ke = 24/0.08 = 300 rad/s = **2,865 rpm**. T_stall = Kt V/R = 0.08 × 24/2 = **0.96 N·m**; I_stall = 24/2 = **12 A**.
(b) I = T/Kt = 0.3/0.08 = **3.75 A**; ω = (V - I R)/Ke = (24 - 7.5)/0.08 = 206.25 rad/s = **1,970 rpm**. P_out = 0.3 × 206.25 = **61.9 W**; P_in = V I = 24 × 3.75 = **90 W**; efficiency = **68.8 percent**; copper loss = I²R = 3.75² × 2 = **28.1 W**. (Friction, iron and brush losses are ignored.)
(c) τ_m = R J/(Ke Kt) = 2 × 5×10⁻⁵/0.0064 = **15.6 ms**.
(d) Power is maximum at half the stall torque and half the no-load speed: T = **0.48 N·m**, ω = 150 rad/s = **1,432 rpm**, P_max = 0.48 × 150 = **72 W** (efficiency is only 50 percent there, so continuous operation is usually at lower torque).

**Q2.**
(a) T_out = 0.12 × 30 × 0.85 = **3.06 N·m**; speed = 4,000/30 = **133 rpm**.
(b) J_reflected = 0.9/30² = **0.001 kg·m²**, which is **20 times** the rotor inertia (5×10⁻⁵): the reflected load inertia dominates. A load-to-rotor ratio above roughly 10:1 makes the loop harder to tune and sensitive to load changes, so choose a higher gear ratio (reflected inertia falls with N²), a motor with more rotor inertia, or a stiffer, lower-inertia load.
(c) T_motor = 6/(30 × 0.85) = **0.235 N·m**.
(d) Backlash and elasticity; friction and efficiency loss; low output speed; the motor spins fast so back-drivability is lost (the load cannot move the motor), noise and wear.

**Q3.**
(a) 360/1.8 = 200 full steps × 8 = **1,600 steps/rev**; 6,400 pulses/s ÷ 1,600 = 4 rev/s = **240 rpm**.
(b) 20 mm/s ÷ 5 mm/rev = 4 rev/s × 1,600 = **6,400 pulses/s**.
(c) 2,000 × 4 = **8,000 counts/rev**; resolution 360/8,000 = **0.045°**; distance per count = 2π(0.04)/8,000 = **0.0314 mm**.

**Q4.**
(a) a₂ = 3Δq/T² = 3 × 60/2.25 = **80 °/s²**; a₃ = -2Δq/T³ = -120/3.375 = **-35.56 °/s³**. Peak velocity = 1.5 Δq/T = **60 °/s** (at mid-time); peak acceleration = 6Δq/T² = **160 °/s²** (at the ends, a discontinuity).
(b) Quintic: peak velocity = 1.875 Δq/T = **75 °/s**; peak acceleration = 5.77 Δq/T² = **154 °/s²** (smooth, continuous acceleration). At t = T/2 both are at the midpoint **30°** (symmetry).
(c) Ramp time t_b = v_max/a = 80/160 = **0.5 s**; distance in the ramps = v²/a = 40°, which is less than 60°, so a trapezoid applies; cruise distance 20° at 80 °/s = 0.25 s; total = 0.5 + 0.25 + 0.5 = **1.25 s** (= Δq/v + v/a).
(d) The ramps need 40° but the move is only 20°: **triangular** profile. Peak speed = √(Δq a) = √(20 × 160) = **56.6 °/s**; time = 2√(Δq/a) = 2√(0.125) = **0.707 s**.

**Q5.**
(a) τ = (1.2 × 0.25 + 0.8 × 0.5) × 9.81 = (0.3 + 0.4) × 9.81 = **6.87 N·m**.
(b) Torque scales with the cosine of the angle from horizontal: 6.87 cos 60° = **3.43 N·m**.
(c) Real loads add acceleration torque (J α), friction, payload and model uncertainty, supply-voltage sag, temperature, aging, and uncertainties in the weight estimate; a factor of 1.5 to 2 on torque (and a thermal check on RMS torque) prevents overheating and stalling.

# Assignment 3: Mobile Robots, Control, Estimation and Planning (70 marks)

## Questions

**Q1. Differential drive (14 marks)** r = 0.1 m, b = 0.5 m, ω_L = 6 rad/s, ω_R = 8 rad/s. (a) Find v, ω and the turning radius [4]. (b) Integrate the pose for 2 s using four Euler steps of 0.5 s starting from the origin, and compare with the exact arc [6]. (c) For a pivot turn with ω_L = -4 and ω_R = +4, find ω and the time for 180° [4].

**Q2. Ackermann and camera (10 marks)** (a) A car-like robot has wheelbase 0.6 m; find the turning radius for a steering angle of 25° and the steering angle for a 2 m radius [4]. (b) A camera with f = 600 px and principal point (320, 240) sees a point (-0.4, 0.3, 1.5) m; find its pixel coordinates [3]. (c) Stereo: f = 600 px, baseline 0.1 m, disparity 15 px; find the depth and the depth error for a one-pixel disparity error [3].

**Q3. Control (14 marks)** (a) Find ζ for 10 percent overshoot [3]. (b) A second-order loop with ω_n = 8 rad/s: for ζ = 0.4, 0.6 and 0.8 give the percent overshoot and the settling time (about 4/(ζω_n)) [5]. (c) A speed loop has G = 150/(0.04s + 1) with proportional gain 0.1: find the closed-loop DC gain, time constant and steady-state error [4]. (d) How do you remove the steady-state error? [2]

**Q4. Estimation (12 marks)** (a) One-dimensional Kalman filter with x = 0, P = 2, Q = 0.2, R = 1, motion 2 m per step and measurements 1.8, 4.3, 6.1: compute the gain, estimate and variance for each step [9]. (b) Why does the gain fall? [3]

**Q5. Occupancy grid (6 marks)** A cell starts at p = 0.5. Sensor readings give p = 0.8 (occupied), 0.8, 0.3 (free) and 0.8. Compute the cell probability after each reading using log-odds.

**Q6. Planning (14 marks)** Grid (S start, G goal, # wall; 4-connected moves of cost 1):
```
S...#...
....#.#.
..#...#.
.##.#...
....#..G
```
(a) Find the shortest path length and give one path [6]. (b) Compare nodes expanded by A* (Manhattan heuristic) and Dijkstra [4]. (c) Is the Manhattan heuristic admissible here? Why? [2] (d) Name two drawbacks of potential-field planning [2].

## Solutions

**Q1.**
(a) v = r(ω_R + ω_L)/2 = 0.1 × 14/2 = **0.70 m/s**; ω = r(ω_R - ω_L)/b = 0.1 × 2/0.5 = **0.40 rad/s**; R = v/ω = **1.75 m** (the robot circles counter-clockwise).
(b) Step 1: Euler (Δt = 0.5): step 1: x = 0.35, y = 0, θ = 0.2; step 2: x = 0.35 + 0.35 cos 0.2 = 0.693, y = 0.35 sin 0.2 = 0.0695, θ = 0.4; step 3: x = 0.693 + 0.35 cos 0.4 = 1.015, y = 0.0695 + 0.35 sin 0.4 = 0.2084, θ = 0.6; step 4: x = 1.015 + 0.35 cos 0.6 = **1.304**, y = 0.2084 + 0.35 sin 0.6 = **0.403**, θ = 0.8 rad = **45.8°**.
Step 2: Exact arc: x = R sin(ωt) = 1.75 sin 0.8 = **1.255**, y = R(1 - cos 0.8) = **0.531**.
Step 3: The Euler position is off by 0.05 m in x and 0.13 m in y after only 2 s: use midpoint integration or smaller steps, and fuse other sensors to bound drift.
(c) ω = r(8)/b = 0.1 × 8/0.5 = **1.6 rad/s**; t = π/1.6 = **1.96 s**.

**Q2.**
(a) R = L/tan δ = 0.6/tan 25° = **1.29 m**; δ = atan(0.6/2) = **16.7°**.
(b) u = 600(-0.4)/1.5 + 320 = **160 px**; v = 600(0.3)/1.5 + 240 = **360 px**.
(c) Z = f B/d = 600 × 0.1/15 = **4.0 m**; with d = 14 px: 4.29 m, an error of **+0.29 m**; the error grows as Z² (Z²/(fB) per pixel).

**Q3.**
(a) ζ = -ln(OS)/√(π² + ln²(OS)) = 2.303/√(9.870 + 5.302) = **0.591**.
(b) OS = exp(-πζ/√(1-ζ²)): ζ = 0.4: **25.3 percent**, T_s ≈ 4/(0.4 × 8) = 1.25 s (exact step response 1.07 s); ζ = 0.6: **9.5 percent**, T_s ≈ 0.83 s (0.76 s exact); ζ = 0.8: **1.5 percent**, T_s ≈ 0.625 s (0.48 s exact).
(c) Loop gain K_p K = 15; closed-loop DC gain = 15/16 = **0.9375**; time constant = 0.04/16 = **2.5 ms**; steady-state error = 1/16 = **6.25 percent**.
(d) Add integral action (PI control) so that the error is driven to zero, with anti-windup; or use feedforward of the expected steady-state input.

**Q4.**
(a) Step 1: predict x = 2, P = 2.2; K = 2.2/3.2 = **0.6875**; x = 2 + 0.6875 × (1.8 - 2) = **1.8625**; P = (1 - 0.6875) × 2.2 = **0.6875**. Step 2: predict x = 3.8625, P = 0.8875; K = 0.8875/1.8875 = **0.4702**; x = 3.8625 + 0.4702 × (4.3 - 3.8625) = **4.068**; P = **0.470**. Step 3: predict x = 6.068, P = 0.670; K = 0.670/1.670 = **0.4013**; x = 6.068 + 0.4013 × (6.1 - 6.068) = **6.081**; P = **0.401**.
(b) As the estimate becomes more certain (P falls) it trusts the prediction more and each new measurement is weighted less; the gain settles to a steady-state value set by Q and R.

**Q5.** Step 1: Log-odds l = ln(p/(1-p)): 0.8 → 1.386; 0.3 → -0.847.
Step 2: Cumulative l: 1.386 → p = **0.80**; 2.773 → **0.941**; 1.925 → **0.873**; 3.312 → **0.965**.
Step 3: The free reading lowers confidence only partly, and further occupied readings restore it.

**Q6.**
(a) The shortest path has length **11**; one path: (0,0)→(0,1)→(0,2)→(0,3)→(1,3)→(2,3)→(2,4)→(2,5)→(3,5)→(3,6)→(3,7)→(4,7). The Manhattan distance is 4 + 7 = 11, so the path is as short as possible.
(b) A* expands **25** nodes; Dijkstra **30** (uniform exploration in all directions). A good heuristic focuses the search.
(c) Yes: with unit-cost 4-connected moves the true cost can never be less than the Manhattan distance, since each step changes row or column by at most one; walls only lengthen paths. An admissible heuristic guarantees A* returns an optimal path.
(d) Local minima (the robot gets trapped in U-shaped obstacles or between obstacles), oscillation in narrow corridors, and no guarantee of reaching the goal; they also ignore kinematic and dynamic constraints.
