# Robotics and Mechatronics: Complete Lecture Notes

Prerequisites: linear algebra, calculus and ODEs, physics (mechanics, electricity), control systems, embedded systems, and basic probability. Every number in the worked examples (rotations, kinematics, Jacobians, motor models, trajectories, step responses, Kalman filter, A* search) was computed in Python with NumPy, SciPy and the python-control library; check them yourself and then vary the parameters.

## Chapter 1. Mechatronics and Robot Systems

### 1.1 What mechatronics is
**Mechatronics** integrates mechanical engineering, electronics, control and software to build intelligent machines (robots, printers, cars, drones, medical devices). A **robot** adds autonomy: it **senses** the world, **decides** (plans, controls) and **acts** with actuators. The key skill is system-level design: choosing sensors, actuators, structure, electronics and algorithms together, because each choice constrains the others.

### 1.2 Architecture of a robot
Mechanical structure (links, joints, wheels) → actuators and drives → sensors → signal conditioning and interfaces → computing (microcontroller for real-time loops, single-board computer or PC for perception and planning) → software layers: low-level control (1 kHz), state estimation (100 Hz), planning (1 to 10 Hz), mission/behaviour. Power system (battery, regulators, protection) and communication (CAN, UART, Ethernet, Wi-Fi) tie them together.

### 1.3 Classes of robots
- **Serial manipulators** (industrial arms), **parallel robots** (delta, Stewart platform), **SCARA** for assembly.
- **Mobile robots**: wheeled (differential drive, Ackermann, omnidirectional), legged, aerial (multirotor), underwater, and tracked.
- **Humanoids, soft robots, exoskeletons, medical and surgical robots, collaborative robots (cobots)**.
Key specifications: degrees of freedom (DOF), workspace, payload, accuracy, repeatability, speed, and safety rating.

### 1.4 Degrees of freedom and mobility
A rigid body in space has 6 DOF. A serial arm with n single-DOF joints has n DOF; a planar 2-link arm has 2. To place a tool anywhere in 3D with any orientation you need at least 6 joints. Redundant arms (more than 6) can avoid obstacles and singularities. Grübler's formula counts mobility for mechanisms with closed loops.

## Chapter 2. Sensors and Actuators

### 2.1 Proprioceptive and exteroceptive sensors
- **Joint position**: incremental encoders (quadrature gives 4 counts per line: a 1024-line encoder yields 4,096 counts/rev), absolute encoders, potentiometers, resolvers. For a wheel of radius 0.05 m one count is 2π(0.05)/4096 = **0.0767 mm**, and 1 m of travel is about **13,038 counts**.
- **Inertial**: gyroscope (angular rate, drifts), accelerometer (specific force, noisy), magnetometer (heading, disturbed by metal); combine in an IMU with a complementary or Kalman filter.
- **Force/torque and current** sensing for contact and compliance; **limit switches and bump sensors** for safety.
- **Range**: ultrasonic sensors measure the echo time t: d = c t/2 with c ≈ 343 m/s (an echo after 5.8 ms is 0.995 m; a target at 2 m returns after 11.7 ms); beam widths are wide, with specular reflection errors. **Infrared** triangulation, **time-of-flight**, **2D/3D LiDAR** (angular scan of distances), **radar**.
- **Vision**: monocular, stereo and RGB-D cameras; event cameras. GPS/GNSS outdoors, with RTK for centimetre accuracy.

### 2.2 DC motors
Electrical: V = I R + L dI/dt + Ke ω; mechanical: J dω/dt = Kt I - B ω - T_L. In SI units Kt = Ke. Example motor: V = 12 V, R = 1.2 Ω, Kt = Ke = 0.05 N·m/A (V·s/rad), J = 2×10⁻⁵ kg·m², B = 10⁻⁴ N·m·s.
- **No-load speed** ω₀ = V/Ke = 240 rad/s = **2,292 rpm**.
- **Stall torque** T_s = Kt V/R = 0.05 × 12/1.2 = **0.5 N·m**, with stall current V/R = **10 A** (drivers and thermal limits matter!).
- With a 0.1 N·m load: I = T/Kt = 2 A, ω = (V - I R)/Ke = (12 - 2.4)/0.05 = 192 rad/s = **1,833 rpm**; mechanical output power 19.2 W, electrical input 24 W, efficiency 80 percent (copper loss only).
- **Time constants**: mechanical τ_m = R J/(Ke Kt) = 1.2 × 2×10⁻⁵/0.0025 = **9.6 ms**; electrical τ_e = L/R = 1 mH/1.2 Ω = 0.83 ms (so electrical dynamics are much faster and often neglected).
- Torque-speed line: torque falls linearly with speed; choose the operating point near maximum power at half the stall torque and half the no-load speed, and keep continuous current below the rated value.
Drivers: **H-bridge** with PWM (typically 10 to 20 kHz) for speed and direction, with current sensing and flyback protection; brushless DC (BLDC) and PMSM motors with field-oriented control for high performance.

### 2.3 Gears, steppers and servos
A gearbox with ratio N multiplies torque and divides speed: a 50:1 gearbox on a 0.05 N·m, 3,000 rpm motor with 80 percent efficiency gives **2.0 N·m at 60 rpm**. Load inertia reflected to the motor is J_L/N²: 0.02 kg·m² becomes 8×10⁻⁶ kg·m² at the motor shaft, which is why high gear ratios make loads easy to control but add backlash and friction. A **stepper motor** with 200 steps/rev and 1/16 microstepping has 3,200 steps/rev (0.1125° per step); a 10 kHz step rate gives 10,000/3,200 × 60 = **187.5 rpm**. Steppers run open loop but lose steps if overloaded. **Hobby servos** have built-in position loops; **smart servos** report position, load and temperature.

### 2.4 Holding torque and sizing
A 2 kg payload at a 0.5 m lever arm needs a static torque m g L = 2 × 9.81 × 0.5 = **9.81 N·m** (when horizontal); at 30° above horizontal it is 9.81 cos 30° = 8.50 N·m. Add the link's own weight, acceleration torque J α, friction and a 1.5 to 2 safety factor.

## Chapter 3. Spatial Description

### 3.1 Rotation matrices
A rotation matrix R is orthonormal (RᵀR = I, det R = +1). Rotation about z by θ:
```
Rz(θ) = [[cos θ, -sin θ, 0], [sin θ, cos θ, 0], [0, 0, 1]]
```
Rz(30°) takes (1, 0, 0) to (0.866, 0.5, 0). Rotations in 3D **do not commute**: with R_z(90°) R_x(90°) the vector (1, 2, 3) becomes (3, 1, 2), but with R_x(90°) R_z(90°) it becomes (-2, -3, 1). Order matters, and convention (fixed versus moving axes) must be stated.

### 3.2 Homogeneous transforms
A rigid transform is the 4×4 matrix T = [[R, p], [0, 1]]. For R = Rz(90°) and p = (2, 1, 0), the point (1, 0, 0) maps to (2, 2, 0); the inverse transform [[Rᵀ, -Rᵀp], [0, 1]] recovers the original point. Compose transforms by multiplication: ᴬT_C = ᴬT_B ᴮT_C.

### 3.3 Orientation representations
Euler angles (roll-pitch-yaw) are intuitive but suffer **gimbal lock**; axis-angle and **unit quaternions** (four numbers, no singularity, easy interpolation by slerp) are preferred for computation; rotation matrices for transformation. Orientation error is often computed as a rotation vector.

## Chapter 4. Manipulator Kinematics

### 4.1 Forward kinematics
Planar two-link arm with link lengths l₁ = 1.0 and l₂ = 0.8:
x = l₁ cos θ₁ + l₂ cos(θ₁ + θ₂), y = l₁ sin θ₁ + l₂ sin(θ₁ + θ₂).
For θ₁ = 30°, θ₂ = 45° the tip is at **(1.073, 1.273)**. For general arms use the **Denavit-Hartenberg (DH)** convention: each joint has four parameters (a, α, d, θ), giving a transform Aᵢ; the end-effector pose is T = A₁A₂...Aₙ.

### 4.2 Inverse kinematics
Given a target (x, y) find the joint angles. For the two-link arm, cos θ₂ = (x² + y² - l₁² - l₂²)/(2 l₁ l₂). Example target (1.2, 0.9): cos θ₂ = (2.25 - 1.0 - 0.64)/1.6 = 0.381, so θ₂ = ±67.59°. **Elbow-down** (θ₂ = +67.59°) gives θ₁ = atan2(0.9, 1.2) - atan2(0.8 sin θ₂, 1 + 0.8 cos θ₂) = **7.33°**; **elbow-up** (θ₂ = -67.59°) gives θ₁ = **66.41°**. Both solutions reach (1.2, 0.9) (verified by forward kinematics). The target must lie in the annulus |l₁ - l₂| ≤ r ≤ l₁ + l₂, here 0.2 to 1.8; the target distance 1.5 is reachable. Six-axis arms with a spherical wrist have closed-form solutions; others use numerical methods (Jacobian pseudo-inverse, damped least squares).

### 4.3 The Jacobian and singularities
The Jacobian maps joint velocities to tip velocity: v = J(q) q̇. For the two-link arm:
```
J = [[-l1 sin θ1 - l2 sin(θ1+θ2),  -l2 sin(θ1+θ2)],
     [ l1 cos θ1 + l2 cos(θ1+θ2),   l2 cos(θ1+θ2)]]
```
At θ₁ = 30°, θ₂ = 45°: J = [[-1.273, -0.773], [1.073, 0.207]], det J = l₁ l₂ sin θ₂ = 0.8 sin 45° = **0.566**. With q̇ = (0.5, -0.2) rad/s the tip velocity is (-0.482, 0.495) m/s. **Singularities** occur where det J = 0: here θ₂ = 0 (arm fully stretched) or 180° (folded); the arm loses the ability to move in one direction and joint speeds needed for tip motion become unbounded. The condition number of J measures closeness to singularity: 27.7 at θ₂ = 10° versus 2.4 at θ₂ = 90° (best dexterity).

### 4.4 Statics: force and torque
Joint torques that support a tip force F are τ = Jᵀ F. For a downward 10 N force at the configuration above, τ = Jᵀ(0, -10) = **(-10.73, -2.07) N·m**. The same Jacobian relates velocities (J) and forces (Jᵀ): a pose with a small Jacobian yields a large mechanical advantage. Manipulability = √det(JJᵀ).

## Chapter 5. Dynamics and Actuator Selection

The equations of motion of an n-joint arm are M(q) q̈ + C(q, q̇) q̇ + g(q) = τ, where M is the inertia matrix, C the Coriolis/centrifugal terms and g gravity (derived with Lagrange's method or Newton-Euler recursion). For a single link, J q̈ = τ - m g L cos q - B q̇. Use the dynamics to compute required torques along a planned trajectory; size motors for peak and RMS torque, check gearbox limits and thermal limits, and include payload variation. Compensating gravity and inertia in the controller (computed-torque or feedforward) greatly improves accuracy.

## Chapter 6. Trajectory Generation

A path needs a time law that respects velocity, acceleration and jerk limits.
- **Cubic polynomial** q(t) = q₀ + a₂t² + a₃t³ with zero start and end velocity: a₂ = 3Δq/T², a₃ = -2Δq/T³. For Δq = 90° and T = 2 s: a₂ = **67.5 °/s²**, a₃ = **-22.5 °/s³**; peak velocity 1.5Δq/T = **67.5 °/s**; peak acceleration 6Δq/T² = 135 °/s² (acceleration is discontinuous at the ends).
- **Quintic** (zero velocity and acceleration at both ends): q = q₀ + Δq(10τ³ - 15τ⁴ + 6τ⁵), τ = t/T. Coefficients for the same move: a₃ = 112.5, a₄ = -84.375, a₅ = 16.875; peak velocity 1.875Δq/T = **84.4 °/s**; smoother, with continuous acceleration.
- **Trapezoidal velocity profile**: accelerate at a, cruise at v_max, decelerate. For Δq = 90°, v_max = 60 °/s and a = 120 °/s²: the ramp time is t_b = v/a = 0.5 s, the move takes Δq/v + t_b = 1.5 + 0.5 = **2.0 s** with a 1.0 s cruise (a trapezoid applies because Δq > v²/a = 30°; otherwise the profile is triangular).
- For Cartesian paths interpolate position and orientation (slerp), then convert with inverse kinematics; use splines through via-points, and time-optimal parametrization (TOPP) to respect actuator limits.

## Chapter 7. Robot Control

### 7.1 Joint control
Typical structure: a cascaded **current (torque) loop** (fastest, kHz), a **velocity loop**, and a **position loop**. Each is a PI or PID controller; the inner loops are tuned first and set the bandwidth available to the outer loops. Add **feedforward** (velocity, acceleration, gravity) to reduce the error that feedback must remove.

### 7.2 Second-order specifications
A position loop is often approximated as ω_n²/(s² + 2ζω_n s + ω_n²). With ω_n = 10 rad/s: ζ = 0.5 gives overshoot 16.3 percent, rise time 0.167 s and settling time 0.81 s; ζ = 0.7 gives overshoot **4.6 percent**, rise time 0.209 s, settling 0.60 s; ζ = 1 (critical damping) gives no overshoot, rise 0.335 s, settling 0.59 s (computed). Overshoot = exp(-πζ/√(1-ζ²)). For robots, overshoot may damage the environment, so a ζ of 0.7 to 1 is common.

### 7.3 Speed loop of a DC motor
Model the motor-plus-load as G(s) = K/(τs + 1), say K = 200 rpm/V and τ = 0.05 s. Proportional control with K_p = 0.04 V/rpm gives a closed-loop DC gain of K_p K/(1 + K_p K) = 8/9 = 0.889 (steady-state error 11 percent) and a faster time constant τ/(1 + K_p K) = 5.6 ms. Adding integral action removes the steady-state error. For an integrator-plus-lag plant 1/(s(s + 1)) with gain 10, the phase margin is only 18°, so the response is oscillatory: lower the gain or add derivative (lead) action.

### 7.4 Practical issues
Actuator saturation and **integrator anti-windup**, friction (stiction, Coulomb) and backlash, sensor noise (filter the derivative), sampling delay, quantization, flexible links and resonances (notch filters), and safety limits (torque, speed, workspace). Impedance and admittance control let a robot behave like a spring-damper for contact tasks, and force control is needed for assembly, polishing and human interaction.

## Chapter 8. Mobile Robot Kinematics

### 8.1 Differential drive
Two wheels of radius r separated by b: wheel speeds ω_L and ω_R give linear velocity v = r(ω_R + ω_L)/2 and angular velocity ω = r(ω_R - ω_L)/b. With r = 0.05 m, b = 0.3 m, ω_L = 10 and ω_R = 12 rad/s: v = **0.55 m/s**, ω = **0.333 rad/s**, turning radius R = v/ω = **1.65 m**. Odometry integrates: x ← x + v cos θ Δt, y ← y + v sin θ Δt, θ ← θ + ω Δt. After 1 s (ten 0.1 s Euler steps) the pose is (0.541, 0.082) m, 19.1°; the exact circular arc gives (0.540, 0.091) m, showing small integration error. Errors in wheel radius, wheel base and slip make odometry drift without bound, so correct it with other sensors.

### 8.2 Other drives
**Ackermann (car-like)** steering: turning radius R = L/tan δ; with wheelbase L = 0.4 m and steering angle 20°, R = **1.10 m**; non-holonomic, it cannot move sideways. **Omnidirectional** (mecanum, omni wheels) robots move in any direction. Differential and Ackermann robots are **non-holonomic**: they have fewer controllable DOF locally (2) than configuration variables (3: x, y, θ), so parking needs manoeuvres. Control methods: pure pursuit, Stanley controller, Lyapunov-based path tracking, model predictive control.

## Chapter 9. Perception and State Estimation

### 9.1 Camera geometry
Pinhole model: u = f X/Z + c_x, v = f Y/Z + c_y. With f = 800 px and principal point (320, 240), a point (0.5, 0.2, 2.0) m projects to **(520, 320) px**. Calibrate intrinsics (focal length, principal point, distortion) with a checkerboard. **Stereo depth** Z = f B/d (baseline B, disparity d): f = 700 px, B = 0.12 m, d = 21 px gives **Z = 4.0 m**; a one-pixel disparity error changes the depth to 4.2 m, so depth error grows with the square of distance. Visual odometry, feature matching and bundle adjustment recover motion from images.

### 9.2 The Kalman filter for localization
Predict with the motion model, correct with measurements. 1D example: position x with process noise Q = 0.1 and measurement noise R = 0.5, starting at x = 0, P = 1, commanded motion 1 m per step, measurements 0.9, 2.2, 2.8: gains K = 0.6875, 0.470, 0.401; estimates 0.931, 2.058, 2.954; variances 0.344, 0.235, 0.201. Nonlinear models use the **extended Kalman filter (EKF)** or unscented filter; multi-modal beliefs use **particle filters** (Monte Carlo localization): sample poses, weight them by measurement likelihood, resample.

### 9.3 Mapping and SLAM
An **occupancy grid** stores the probability that each cell is occupied; update in log-odds so that evidence adds: l = ln(p/(1 - p)). Starting from 0.5, three "occupied" measurements with p = 0.7 give cell probabilities 0.70, 0.84, 0.93; a following "free" reading of 0.4 reduces it to 0.89. **SLAM** (simultaneous localization and mapping) estimates the map and pose together (EKF-SLAM, particle-filter SLAM, graph-based SLAM with loop closure, visual SLAM, LiDAR SLAM). Loop closure corrects accumulated drift when the robot recognizes a revisited place.

### 9.4 Sensor fusion
Combine odometry (smooth, drifts), IMU (fast, drifts), GNSS (absolute, noisy, slow) and LiDAR/vision (absolute relative to the map). Use an EKF/UKF or factor graphs. Always synchronize timestamps and calibrate extrinsic transforms (the transform between sensor frames).

## Chapter 10. Planning and Navigation

### 10.1 Path planning
Represent the world as a grid or graph and search. **Dijkstra** expands nodes in order of cost; **A\*** adds a heuristic h (admissible: never overestimates, such as Manhattan distance on a 4-connected grid) and expands far fewer nodes. Example 5×8 grid with walls: the optimal path length is 13 steps (Manhattan lower bound 11); Dijkstra expanded 29 nodes and A\* only 20. For high-dimensional configuration spaces (arms) use sampling-based planners: **PRM** (probabilistic roadmaps) and **RRT/RRT\*** (rapidly exploring random trees), then smooth the path.

### 10.2 Local planning and obstacle avoidance
Potential fields (attraction to the goal, repulsion from obstacles: can trap the robot in local minima), the **dynamic window approach** (choose a velocity within acceleration and obstacle limits that maximizes progress and clearance), model predictive control, and reactive behaviours. A navigation stack combines a global planner, a local planner, costmaps (inflated obstacles) and recovery behaviours.

### 10.3 Decision making
Finite-state machines and **behaviour trees** organize tasks (go to a door, open it, pass through); task planners (PDDL) and reinforcement learning handle high-level choices. Always include a safe fallback behaviour (stop, retreat).

## Chapter 11. Robot Software and Safety

### 11.1 ROS 2 and software architecture
The Robot Operating System provides nodes that communicate via **topics** (publish/subscribe), **services** (request/response) and **actions** (long-running tasks with feedback); the **tf** tree tracks coordinate frames; simulators (Gazebo, Webots, Isaac Sim) let you test before touching hardware. Keep hard real-time loops (motor control) on microcontrollers or a real-time kernel; run perception and planning on a more powerful computer. Log everything (rosbag) for debugging.

### 11.2 Safety
Hazards: crushing, collisions, electric shock, stored energy, unexpected motion. Layers: mechanical design (guards, force limits), **emergency stop** that removes power independently of software, safety-rated controllers, speed and separation monitoring, power and force limiting for cobots. Standards: ISO 10218 (industrial robots), ISO/TS 15066 (collaborative), ISO 13849 and IEC 62061 (safety-related control), IEC 61508. Perform a risk assessment (severity, exposure, avoidance) and verify safety functions.

## Chapter 12. Design Method and Mistakes Checklist
1. Specify the task: payload, workspace, speed, accuracy, environment, safety, budget.
2. Choose the kinematic structure; verify reach and singularities with forward/inverse kinematics.
3. Compute torques and speeds from the dynamics and trajectory; select motors, gearboxes and drivers with margins.
4. Select sensors (resolution, rate, noise) and design the control hierarchy; tune inner loops first.
5. Add estimation (filters), planning and safety; simulate; then test on hardware in stages with an E-stop.
6. Measure performance (accuracy, repeatability, settling time) and iterate.

**Common mistakes.** Mixing rotation order conventions; forgetting that IK has multiple solutions or none; operating near singularities; ignoring stall current and motor heating; under-sizing gearboxes and ignoring backlash; tuning the outer loop before the inner loop; no anti-windup; trusting odometry without correction; ignoring sensor timestamps and frames; sampling the wrong rate; no hardware emergency stop; and testing a new controller at full power.
