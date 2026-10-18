# Robotics and Mechatronics: Class Test

Duration: 60 minutes. Calculator allowed, no notes. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Useful: planar two-link arm x = l₁ cos θ₁ + l₂ cos(θ₁ + θ₂), y = l₁ sin θ₁ + l₂ sin(θ₁ + θ₂); DC motor T = Kt I, V = I R + Ke ω; differential drive v = r(ω_R + ω_L)/2, ω = r(ω_R - ω_L)/b.

## Section A: Multiple choice (20 marks)

**1.** Mechatronics is best described as
A) mechanical design only  B) the integration of mechanics, electronics, control and software  C) software only  D) a type of motor

**2.** To place a tool anywhere in 3D space with any orientation, a serial arm needs at least
A) 4 joints  B) 5 joints  C) 3 joints  D) 6 joints

**3.** A 1,024-line quadrature encoder gives how many counts per revolution?
A) 4,096  B) 1,024  C) 512  D) 2,048

**4.** An ultrasonic sensor measuring the round-trip echo time t gives the distance
A) c t  B) c/t  C) c t/2  D) 2 c t

**5.** The stall torque of a DC motor is
A) Ke R/V  B) Kt V/R  C) J ω  D) V/Ke

**6.** A gearbox with ratio N and efficiency η multiplies motor torque by
A) N  B) η/N  C) η N  D) N/η

**7.** Inertia reflected from the load to the motor through a gearbox of ratio N is
A) J_L N  B) J_L/N  C) J_L N²  D) J_L/N²

**8.** A rotation matrix R satisfies
A) R = Rᵀ always  B) RᵀR = I and det R = +1  C) det R = -1  D) det R = 0

**9.** Rotations in 3D
A) cannot be composed  B) are only defined in 2D  C) always commute  D) in general do not commute

**10.** Gimbal lock is a problem of
A) encoders  B) Euler-angle representations  C) rotation matrices  D) quaternions

**11.** For a two-link arm the inverse kinematics generally has
A) no solution  B) infinitely many solutions always  C) exactly one solution  D) up to two solutions (elbow up and elbow down) inside the workspace

**12.** A kinematic singularity occurs where the Jacobian
A) has all positive entries  B) loses rank (det J = 0)  C) is symmetric  D) equals the identity

**13.** Joint torques needed to support an end-effector force F are
A) τ = F/J  B) τ = Jᵀ F  C) τ = J⁻¹ F²  D) τ = J F

**14.** A cubic trajectory with zero start and end velocity has peak velocity
A) 1.5 Δq/T  B) Δq/T  C) 3 Δq/T  D) 0.5 Δq/T

**15.** A quintic trajectory is preferred over a cubic one because it
A) specifies acceleration as well, giving smoother motion  B) avoids all errors  C) is shorter  D) needs no computation

**16.** Overshoot of a second-order system depends mainly on
A) the sensor mass  B) the sample rate only  C) the damping ratio ζ  D) the cable length

**17.** Integrator anti-windup is needed when
A) the system has no feedback  B) the motor is stepper  C) the actuator saturates while the integrator keeps accumulating  D) the encoder is absolute

**18.** A differential-drive robot with both wheels at the same speed moves
A) in place  B) in a circle  C) in a straight line  D) sideways

**19.** Dead-reckoning odometry drifts because of
A) wireless interference only  B) an absolute encoder  C) too much light  D) wheel slip and calibration errors accumulating

**20.** A* is guaranteed to find an optimal path if the heuristic is
A) larger than the true cost  B) admissible (never overestimates)  C) random  D) always zero

## Section B: Problems (40 marks)

**B1. Transforms (10 marks)** (a) Rotate the vector (1, 2, 0) about the z axis by 90° [3]. (b) A frame is rotated 90° about z and translated by (3, 0, 0). Find the coordinates in the base frame of the point (1, 2, 0) given in the moving frame [4]. (c) Find the inverse transform of the rotation Rz(90°) [3].

**B2. Two-link arm (10 marks)** Both links are 1 m long. (a) Find the tip position for θ₁ = 0, θ₂ = 90° [3]. (b) Solve the inverse kinematics for the target (1, 1) (both solutions) [4]. (c) At θ₁ = 0, θ₂ = 90° give the Jacobian and its determinant, and say where the singular configurations are [3].

**B3. DC motor and gearbox (10 marks)** A motor has V = 12 V, R = 3 Ω, Kt = Ke = 0.1 N·m/A. (a) Find the no-load speed (rpm), stall torque and stall current [4]. (b) For a 0.1 N·m load find current, speed (rpm) and efficiency [4]. (c) A 20:1 gearbox with 90 percent efficiency is attached; find output torque for the 0.1 N·m motor torque [2].

**B4. Trajectory and mobile robot (10 marks)** (a) Find the cubic coefficients, peak velocity and peak acceleration for a 90° joint move in 3 s from rest to rest [4]. (b) A differential-drive robot has r = 0.05 m and b = 0.2 m. Find v, ω and turning radius for ω_L = 8 rad/s, ω_R = 12 rad/s [4]. (c) What happens if ω_L = ω_R = 10 rad/s? [2]

## Answer key and solutions

### Section A
1. B 2. D 3. A 4. C 5. B 6. C 7. D 8. B 9. D 10. B 11. D 12. B 13. B 14. A 15. A 16. C 17. C 18. C 19. D 20. B

### Section B

**B1.**
(a) Rz(90°)(x, y, z) = (-y, x, z), so (1, 2, 0) → **(-2, 1, 0)** [3].
(b) p_base = R p + t = (-2, 1, 0) + (3, 0, 0) = **(1, 1, 0)** [4].
(c) Inverse of a rotation is its transpose: Rz(90°)⁻¹ = Rz(-90°) = [[0, 1, 0], [-1, 0, 0], [0, 0, 1]] [3]. (For a full transform [R t; 0 1] the inverse is [Rᵀ -Rᵀt; 0 1].)

**B2.**
(a) x = cos 0 + cos 90° = **1**; y = sin 0 + sin 90° = **1**: tip at **(1, 1)** [3].
(b) cos θ₂ = (1 + 1 - 1 - 1)/2 = 0, so θ₂ = ±90°. θ₂ = +90°: θ₁ = atan2(1, 1) - atan2(1, 1 + 0) = 45° - 45° = **0°**. θ₂ = -90°: θ₁ = 45° + 45° = **90°** [4].
(c) J = [[-sin θ₁ - sin(θ₁ + θ₂), -sin(θ₁ + θ₂)], [cos θ₁ + cos(θ₁ + θ₂), cos(θ₁ + θ₂)]] = [[-1, -1], [1, 0]]; det J = 0 + 1 = **1** (= l₁ l₂ sin θ₂ = 1) [2]. Singular configurations: θ₂ = 0° (arm stretched, reach 2 m) and θ₂ = 180° (folded, reach 0) [1].

**B3.**
(a) ω₀ = V/Ke = 120 rad/s = **1,146 rpm**; T_stall = Kt V/R = 0.1 × 12/3 = **0.4 N·m**; I_stall = V/R = **4 A** [4].
(b) I = T/Kt = **1 A**; ω = (V - I R)/Ke = (12 - 3)/0.1 = 90 rad/s = **859 rpm**; efficiency = T ω/(V I) = 0.1 × 90/12 = **75 percent** [4].
(c) T_out = 0.1 × 20 × 0.9 = **1.8 N·m** (speed 859/20 = 43 rpm) [2].

**B4.**
(a) a₂ = 3Δq/T² = 270/9 = **30 °/s²**; a₃ = -2Δq/T³ = -180/27 = **-6.67 °/s³**; peak velocity = 1.5 × 90/3 = **45 °/s**; peak acceleration = 6 × 90/9 = **60 °/s²** [4].
(b) v = 0.05 × (8 + 12)/2 = **0.5 m/s**; ω = 0.05 × (12 - 8)/0.2 = **1.0 rad/s**; R = v/ω = **0.5 m** [4].
(c) With equal wheel speeds ω = 0 and v = 0.05 × 10 = 0.5 m/s: the robot moves in a **straight line** at 0.5 m/s [2].
