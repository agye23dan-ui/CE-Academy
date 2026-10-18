# Robotics and Mechatronics: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

Formulas: planar two-link arm x = l₁ cos θ₁ + l₂ cos(θ₁ + θ₂), y = l₁ sin θ₁ + l₂ sin(θ₁ + θ₂); cos θ₂ = (x² + y² - l₁² - l₂²)/(2 l₁ l₂); DC motor V = I R + Ke ω, T = Kt I, τ_m = R J/(Ke Kt); differential drive v = r(ω_R + ω_L)/2, ω = r(ω_R - ω_L)/b; overshoot = exp(-πζ/√(1-ζ²)); stereo Z = f B/d; Kalman K = P/(P + R).

## Section A: Multiple Choice (20 marks)

**1.** A robot differs from an automated machine mainly because it
A) has a motor  B) uses electricity  C) has wheels  D) senses its environment and makes decisions to act

**2.** The repeatability of a robot refers to
A) how closely it returns to the same commanded pose  B) its weight  C) its maximum payload  D) its top speed

**3.** The correct relation between a gearbox's output speed and torque is
A) speed falls by the ratio and torque rises by the ratio (less losses)  B) neither changes  C) both increase  D) both decrease

**4.** A stepper motor driven open loop can
A) lose steps if overloaded  B) never lose steps  C) measure its own position  D) exceed stall torque

**5.** The mechanical time constant of a DC motor is
A) Kt/Ke  B) L/R  C) J/B²  D) R J/(Ke Kt)

**6.** A homogeneous transform matrix is a
A) 4 × 4 matrix with a rotation and a translation  B) 1 × 6 vector  C) 3 × 3 rotation only  D) 2 × 2 matrix

**7.** Quaternions are preferred for interpolation of orientation because they
A) have no singularity and interpolate smoothly (slerp)  B) are Euler angles  C) use fewer multiplications always  D) are easier to read

**8.** The workspace of a planar two-link arm with unrestricted joints is
A) an annulus between |l₁ - l₂| and l₁ + l₂  B) a cube  C) a line  D) a point

**9.** The Jacobian relates
A) mass to inertia  B) joint velocities to end-effector velocities  C) sensor noise to range  D) joint torques to currents

**10.** Near a singularity the joint velocities needed for a tip velocity
A) become negative  B) become zero  C) become very large  D) are unaffected

**11.** A trapezoidal velocity profile has
A) constant acceleration, a cruise at constant velocity, then constant deceleration  B) constant jerk  C) a sine-wave shape  D) zero velocity

**12.** The damping ratio for no overshoot in a second-order system is
A) ζ = 0  B) ζ < 0.1  C) ζ ≥ 1  D) ζ = 0.5

**13.** Feedforward control in robotics is used to
A) add noise  B) remove the need for a model  C) replace sensors  D) supply the expected torque (gravity, acceleration) so feedback only corrects errors

**14.** In a differential-drive robot, unequal wheel speeds produce
A) a curved path with radius R = v/ω  B) no motion  C) only straight motion  D) sideways motion

**15.** A non-holonomic robot such as a car
A) cannot translate sideways and needs manoeuvres to park  B) has no kinematics  C) can move in any direction instantly  D) has no wheels

**16.** The Kalman gain decreases as the estimate variance
A) is infinite  B) decreases  C) is unrelated  D) increases

**17.** In an occupancy grid using log-odds, repeated "occupied" evidence
A) resets the cell  B) adds, increasing the occupied log-odds  C) is ignored  D) subtracts

**18.** A* with an admissible heuristic
A) needs negative costs  B) finds an optimal path while usually expanding fewer nodes than Dijkstra  C) never terminates  D) is faster than Dijkstra but not optimal

**19.** A hardware emergency stop must
A) remove power to the actuators independently of the control software  B) work only when the network is up  C) be optional  D) depend on the robot software

**20.** In ROS, long-running goals with feedback and cancellation use
A) bags  B) topics  C) actions  D) parameters only

## Section B: Short Questions (40 marks)

**B1. Rotation order (5 marks)** Compute Rz(90°) applied to Rx(90°) applied to the vector (0, 1, 0), i.e. Rz(90°)[Rx(90°)(0, 1, 0)ᵀ], and the result with the order swapped. What does this show?

**B2. Inverse kinematics (5 marks)** A planar arm has l₁ = 0.5 m and l₂ = 0.3 m. For the target (0.6, 0.2) m compute cos θ₂ and both sets of joint angles.

**B3. Jacobian (5 marks)** For the same arm at θ₁ = 20°, θ₂ = 50°, det J = l₁ l₂ sin θ₂. Compute it, and explain what happens as θ₂ → 0.

**B4. DC motor (5 marks)** A motor has V = 48 V, R = 1.5 Ω, Kt = Ke = 0.12 N·m/A. Find the no-load speed (rpm), stall torque and stall current.

**B5. Gearbox (5 marks)** A load needs 12 N·m at 25 rpm. The motor runs at 3,000 rpm. Find the gear ratio and the motor torque needed if the gearbox efficiency is 80 percent.

**B6. Trajectories (5 marks)** A joint moves 120° in 2 s from rest to rest. Give the cubic's peak velocity and peak acceleration, the quintic's peak velocity and the time of a trapezoidal move with v_max = 90 °/s and a = 180 °/s².

**B7. Control specification (5 marks)** A position loop must have at most 5 percent overshoot and a 2 percent settling time of 1 s. Find the required damping ratio and the minimum natural frequency (use T_s ≈ 4/(ζ ω_n)).

**B8. Odometry (5 marks)** r = 0.08 m, b = 0.4 m, ω_L = 5 rad/s, ω_R = 7 rad/s. Find v, ω and the radius of the path, and explain why odometry drifts.

## Section C: Long Questions (answer any four, 40 marks)

**C1. Arm kinematics and statics (10 marks)** The arm of B2 (l₁ = 0.5 m, l₂ = 0.3 m). (a) Verify one inverse-kinematics solution for (0.6, 0.2) by forward kinematics and give the other solution [3]. (b) At θ₁ = 20°, θ₂ = 50° compute J and the tip velocity for q̇ = (0.8, 0.4) rad/s [4]. (c) Compute the joint torques needed to hold a downward 15 N tip force [3].

**C2. Actuator selection (10 marks)** (a) For the motor of B4 and a 0.6 N·m load find the current, speed (rpm), output power, input power, efficiency and copper loss [5]. (b) With rotor inertia J = 10⁻⁴ kg·m² find the mechanical time constant [2]. (c) For the gear problem of B5 (ratio 120, 80 percent efficiency) check that the motor can deliver the required torque at the current limit [3].

**C3. Mobile robot estimation (10 marks)** (a) For the robot of B8, integrate the pose for 1 s with two Euler steps of 0.5 s starting at the origin facing +x, and compare with the exact circular arc [5]. (b) A 1D Kalman filter has x = 1, P = 1, Q = 0.1, R = 0.4 and receives the measurement z = 1.5 (no motion): find K, the new estimate and the new variance [3]. (c) Name two sensors to fuse with odometry and why [2].

**C4. Perception and planning (10 marks)** (a) A stereo camera with f = 500 px and baseline 0.2 m measures a disparity of 25 px: find the depth and the error caused by a 1-pixel disparity error [3]. (b) A cell starts at p = 0.5 and receives readings p = 0.7, 0.7, 0.7: compute the log-odds and probability after each [3]. (c) Explain why A* with the Manhattan heuristic is optimal on a 4-connected unit-cost grid and when it fails to be [4].

**C5. System design of a warehouse robot (10 marks)** A 40 kg differential-drive robot has two wheels of radius 0.1 m, rolling-resistance coefficient 0.02, maximum speed 1.5 m/s, acceleration 0.5 m/s², drive efficiency 0.8, a 24 V 20 Ah battery and an average power draw of 50 W. (a) Compute the rolling resistance force and the mechanical power at constant speed [2]. (b) Compute the total force during acceleration and the peak electrical drive power [3]. (c) Estimate the battery energy and runtime at 50 W [2]. (d) The robot decelerates at 1.0 m/s² with a 0.2 s reaction latency; find the stopping distance from full speed and state the safety implication [3].

## Answer key and mark scheme

### Section A
1. D 2. A 3. A 4. A 5. D 6. A 7. A 8. A 9. B 10. C 11. A 12. C 13. D 14. A 15. A 16. B 17. B 18. B 19. A 20. C

### Section B

**B1.** Rx(90°)(0, 1, 0) = (0, cos 90°, sin 90°) = (0, 0, 1); then Rz(90°)(0, 0, 1) = (0, 0, 1): result **(0, 0, 1)** [2]. Swapped: Rz(90°)(0, 1, 0) = (-1, 0, 0); Rx(90°)(-1, 0, 0) = **(-1, 0, 0)** [2]. The results differ, so 3D rotations do not commute [1].

**B2.** cos θ₂ = (0.36 + 0.04 - 0.25 - 0.09)/(2 × 0.5 × 0.3) = 0.06/0.30 = **0.20**, θ₂ = ±78.46° [2]. Elbow-down (θ₂ = +78.46°): θ₁ = atan2(0.2, 0.6) - atan2(0.3 sin 78.46°, 0.5 + 0.3 cos 78.46°) = 18.43° - 27.69° = **-9.26°**. Elbow-up (θ₂ = -78.46°): θ₁ = 18.43° + 27.69° = **46.13°** [3].

**B3.** det J = 0.5 × 0.3 × sin 50° = **0.115** [2]. As θ₂ → 0 the arm stretches out, det J → 0 (singularity): the tip cannot move along the arm and joint speeds for finite tip velocity grow without bound; the arm should avoid or damp this region [3].

**B4.** No-load speed = V/Ke = 48/0.12 = 400 rad/s = **3,820 rpm** [2]; stall torque = Kt V/R = 0.12 × 48/1.5 = **3.84 N·m** [2]; stall current = V/R = **32 A** [1].

**B5.** Ratio = 3,000/25 = **120** [2]. Motor torque = 12/(120 × 0.8) = **0.125 N·m** [3].

**B6.** Cubic: peak velocity = 1.5 × 120/2 = **90 °/s**; peak acceleration = 6 × 120/4 = **180 °/s²** [2]. Quintic: peak velocity = 1.875 × 120/2 = **112.5 °/s** [1.5]. Trapezoid: ramp time 90/180 = 0.5 s; ramp distance v²/a = 45° ≤ 120°, so total time = Δq/v + v/a = 1.333 + 0.5 = **1.83 s** [1.5].

**B7.** ζ = -ln(0.05)/√(π² + ln²(0.05)) = 2.996/√(9.870 + 8.974) = **0.69** [3]. ω_n ≥ 4/(ζ T_s) = 4/(0.69 × 1) = **5.8 rad/s** [2].

**B8.** v = 0.08 × (5 + 7)/2 = **0.48 m/s**; ω = 0.08 × (7 - 5)/0.4 = **0.40 rad/s**; R = 0.48/0.40 = **1.2 m** [3]. Odometry integrates small errors (wheel radius and base errors, slip, encoder quantization, uneven floors) with no external correction, so the position error grows without bound [2].

### Section C

**C1.**
(a) For θ₂ = +78.46°, θ₁ = -9.26°: x = 0.5 cos(-9.26°) + 0.3 cos(69.2°) = 0.4935 + 0.1065 = 0.600 ✓; y = 0.5 sin(-9.26°) + 0.3 sin(69.2°) = -0.0805 + 0.2805 = 0.200 ✓. The other solution is θ₁ = 46.13°, θ₂ = -78.46° [3].
(b) J = [[-0.5 sin 20° - 0.3 sin 70°, -0.3 sin 70°], [0.5 cos 20° + 0.3 cos 70°, 0.3 cos 70°]] = [[-0.453, -0.282], [0.572, 0.103]] [2]. v = J q̇ = (-0.453 × 0.8 - 0.282 × 0.4, 0.572 × 0.8 + 0.103 × 0.4) = **(-0.475, 0.499) m/s** [2].
(c) τ = Jᵀ F = Jᵀ(0, -15) = (0.572 × -15, 0.103 × -15) = **(-8.59, -1.54) N·m** [3].

**C2.**
(a) I = T/Kt = 0.6/0.12 = **5 A**; ω = (V - I R)/Ke = (48 - 7.5)/0.12 = 337.5 rad/s = **3,223 rpm**; P_out = 0.6 × 337.5 = **202.5 W**; P_in = 48 × 5 = **240 W**; efficiency = **84.4 percent**; copper loss = I²R = 25 × 1.5 = **37.5 W** [5].
(b) τ_m = R J/(Ke Kt) = 1.5 × 10⁻⁴/0.0144 = **10.4 ms** [2].
(c) Required motor torque 0.125 N·m needs I = 0.125/0.12 = 1.04 A, far below the 32 A stall current and any reasonable current limit: adequate; the motor speed at that load is near 3,820 rpm minus a small drop, matching the 3,000 rpm requirement with margin (the speed is set by the supply voltage) [3].

**C3.**
(a) v = 0.48, ω = 0.40. Euler steps (Δt = 0.5): step 1: x = 0.24, y = 0, θ = 0.2; step 2: x = 0.24 + 0.24 cos 0.2 = **0.475**, y = 0.24 sin 0.2 = **0.048**, θ = 0.4 rad. Exact arc (R = 1.2): x = 1.2 sin 0.4 = **0.467**, y = 1.2(1 - cos 0.4) = **0.095**. The Euler heading and y are off (0.048 versus 0.095) because the heading is updated after using the old value; midpoint integration reduces this error [5].
(b) P = 1 + 0.1 = 1.1; K = 1.1/(1.1 + 0.4) = **0.733**; x = 1 + 0.733 × (1.5 - 1) = **1.367**; P = (1 - 0.733) × 1.1 = **0.293** [3].
(c) IMU (gyro gives accurate short-term heading and rotation rate), LiDAR or camera (absolute landmarks, scan matching and loop closure), GNSS outdoors (global position): each has complementary error characteristics [2].

**C4.**
(a) Z = f B/d = 500 × 0.2/25 = **4.0 m**; with d = 24 px: 4.17 m, an error of **0.17 m** (grows as Z²/(fB)) [3].
(b) l = ln(p/(1-p)) = ln(0.7/0.3) = 0.847 each: after one reading l = 0.847 (p = **0.70**); two: 1.695 (p = **0.845**); three: 2.542 (p = **0.927**) [3].
(c) On a 4-connected unit-cost grid the Manhattan distance never overestimates the true remaining cost (admissible) and is consistent, so A* returns an optimal path. It is no longer admissible if diagonal moves are allowed (cost √2 or 1 per diagonal can make the heuristic overestimate when the diagonal costs 1), if move costs can be less than 1, or if the heuristic is scaled up; then A* may return a non-optimal path [4].

**C5.**
(a) F_roll = μ m g = 0.02 × 40 × 9.81 = **7.85 N**; mechanical power at 1.5 m/s = 7.85 × 1.5 = **11.8 W** [2].
(b) F_total = m a + F_roll = 20 + 7.85 = **27.85 N**; mechanical power at 1.5 m/s = 41.8 W; electrical = 41.8/0.8 = **52.2 W** (per wheel: torque = 27.85 × 0.1/2 = 1.39 N·m at 143 rpm) [3].
(c) Energy = 24 V × 20 Ah = **480 Wh**; runtime = 480/50 = **9.6 h** (derate for battery ageing, depth of discharge and temperature: use perhaps 80 percent, 7.7 h) [2].
(d) Stopping distance = v²/(2a) + v t_r = 1.5²/2 + 1.5 × 0.2 = 1.125 + 0.30 = **1.43 m** [2]. Safety fields of the LiDAR/bumper must trigger at more than this distance (plus margins), and the speed must be reduced in crowded areas, where the required stopping distance must fit within the sensing range; the emergency stop circuit must cut drive power independently of the software [1].
