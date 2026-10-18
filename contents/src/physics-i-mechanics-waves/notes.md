# Physics I (Mechanics and Waves): Complete Lecture Notes

Conventions: SI units throughout. g = 9.8 m/s^2 unless stated. Vectors are written in components. "Δ" means "change in". Use the structured problem method: (1) draw a diagram, (2) choose axes and a sign convention, (3) list knowns and unknowns, (4) write the governing laws, (5) solve symbolically, (6) substitute numbers and check units and limiting cases.

## Chapter 1. Measurement, Units and Vectors

### 1.1 Units and dimensional analysis
SI base units: metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole, candela. Every physical equation must be dimensionally consistent. Example: the period of a pendulum T has dimension [T]. If T depends on L [L], g [L T^-2] and m [M], then T = k sqrt(L/g) and m cannot appear. Dimensional analysis fixes the form but not the constant k (here 2π).

**Significant figures and uncertainty.** Report results to the precision of the least precise input. For products and quotients add relative uncertainties; for sums add absolute uncertainties.

### 1.2 Vectors
A vector has magnitude and direction. Components: A = (A_x, A_y) with A_x = A cos θ, A_y = A sin θ, |A| = sqrt(A_x^2 + A_y^2), tan θ = A_y/A_x. Add vectors component by component.
- **Dot product:** A · B = AB cos φ = A_x B_x + A_y B_y + A_z B_z. Gives work and projections.
- **Cross product:** |A × B| = AB sin φ, direction by the right-hand rule. Gives torque and angular momentum. Components: (A_y B_z - A_z B_y, A_z B_x - A_x B_z, A_x B_y - A_y B_x).

## Chapter 2. Kinematics in One Dimension

Position x(t); velocity v = dx/dt; acceleration a = dv/dt. Average velocity = Δx/Δt; speed is the magnitude of velocity. Displacement is not distance travelled.

### 2.1 Constant acceleration
- v = v0 + a t
- x = x0 + v0 t + (1/2) a t^2
- v^2 = v0^2 + 2a(x - x0)
- x - x0 = (1/2)(v0 + v) t

**Example.** A car brakes from 30 m/s at 6 m/s^2 in the opposite direction. Stopping time t = 30/6 = 5 s; stopping distance = 30^2/(2·6) = 75 m.

### 2.2 Free fall
Neglecting air resistance, a = -g (taking up as positive). A ball thrown upward at v0 reaches maximum height v0^2/(2g) after v0/g seconds. It returns to the launch height with speed v0.

### 2.3 Calculus approach
If a(t) is given, v(t) = v0 + ∫ a dt and x(t) = x0 + ∫ v dt. Areas under the v-t graph give displacement, and slopes give acceleration.

### 2.4 Chase problems
Write each object's position as a function of the same clock, set them equal and solve. Check which root is physical.

## Chapter 3. Motion in Two and Three Dimensions

### 3.1 Projectile motion
Horizontal and vertical motions are independent: a_x = 0, a_y = -g. With launch speed v0 at angle θ:
- x = v0 cos θ · t, y = v0 sin θ · t - (1/2) g t^2
- Time of flight (level ground) = 2 v0 sin θ / g
- Range R = v0^2 sin 2θ / g, maximum at θ = 45°
- Maximum height H = v0^2 sin^2 θ / (2g)
- Trajectory: y = x tan θ - g x^2/(2 v0^2 cos^2 θ), a parabola.

**Example.** v0 = 25 m/s at 40°: time 3.28 s, range 62.8 m, maximum height 13.2 m. For range 50 m: sin 2θ = 50 · 9.8/625 = 0.784, so θ = 25.8° or 64.2°. Complementary angles give equal ranges.

### 3.2 Relative velocity
v_(A rel C) = v_(A rel B) + v_(B rel C). Boat in a river: heading straight across takes the shortest time (width/boat speed) but drifts downstream; to land directly opposite, aim upstream at sin φ = v_river/v_boat.

### 3.3 Circular motion
Uniform circular motion at radius r and speed v: centripetal acceleration a_c = v^2/r = ω^2 r, directed to the centre, with period T = 2πr/v = 2π/ω. The net inward force is m v^2/r. It is a requirement on the net force, not a new force. Non-uniform circular motion adds a tangential acceleration a_t = dv/dt = r α.

## Chapter 4. Newton's Laws and Applications

### 4.1 The laws
1. An object stays at rest or in uniform motion unless acted on by a net force (inertial frames).
2. ΣF = m a (vector equation, applied component by component). More generally ΣF = dp/dt.
3. Forces come in equal and opposite pairs acting on **different** bodies.

### 4.2 Common forces
- **Weight** W = m g, directed downward.
- **Normal force** N, perpendicular to the surface; found from the equations, not assumed equal to mg.
- **Tension** T along a rope; the same throughout a massless rope over a frictionless pulley.
- **Friction:** static f_s ≤ μ_s N, kinetic f_k = μ_k N (μ_k < μ_s). It opposes relative (or impending) sliding.
- **Spring** (Hooke): F = -k x.
- **Drag:** F = -b v (low speed) or -(1/2) C ρ A v^2 (high speed). Terminal velocity occurs when drag equals weight: v_t = m g/b for linear drag.

### 4.3 Problem patterns
**Incline.** For angle θ, the component of gravity along the slope is m g sin θ and perpendicular is m g cos θ. N = m g cos θ. Sliding down with kinetic friction: a = g(sin θ - μ_k cos θ). At θ = 30°, μ_k = 0.2: a = 3.20 m/s^2.

**Atwood machine.** Masses m1 < m2 over a pulley: a = (m2 - m1)g/(m1 + m2), T = 2 m1 m2 g/(m1 + m2). For 3 kg and 5 kg: a = 2.45 m/s^2, T = 36.75 N.

**Apparent weight.** In an elevator with upward acceleration a, N = m(g + a). In free fall N = 0.

**Banked curve** without friction: tan θ = v^2/(r g). With friction on a flat curve, the maximum speed is v = sqrt(μ_s g r).

**Connected bodies.** Draw a free-body diagram for each body; use the same acceleration magnitude along the connection.

## Chapter 5. Work, Energy and Power

### 5.1 Work
W = ∫ F · dr. For a constant force, W = F d cos φ. Work done by a spring from x1 to x2: -(1/2)k(x2^2 - x1^2). **Work-energy theorem:** W_net = ΔK, with K = (1/2) m v^2.

### 5.2 Conservative forces and potential energy
A force is conservative if the work it does around any closed path is zero (gravity, spring, electrostatic). Then F = -dU/dx. Gravitational U = m g h (near the surface), spring U = (1/2) k x^2, universal gravitation U = -G M m/r.

**Conservation of mechanical energy:** if only conservative forces do work, K + U is constant. With non-conservative work W_nc: K_i + U_i + W_nc = K_f + U_f. Friction contributes W_nc = -f d.

**Examples.**
- A 2 kg block slides from rest down a frictionless curve of height 1.5 m: v = sqrt(2 g h) = 5.42 m/s. On a rough floor with μ = 0.3 it stops after d = h/μ = 5 m.
- A spring (k = 200 N/m) compressed 0.1 m launches a 0.5 kg block at v = x sqrt(k/m) = 2 m/s.
- To just complete a vertical loop of radius R, the cart must start from a height 2.5 R above the bottom (at the top v^2 ≥ g R).

### 5.3 Energy diagrams
Equilibrium points are where dU/dx = 0: stable at minima, unstable at maxima. The turning points are where E = U.

### 5.4 Power
P = dW/dt = F · v. Units: watt (W). Average power = W/Δt. Example: lifting 500 kg at 0.5 m/s needs P = 500 · 9.8 · 0.5 = 2450 W.

## Chapter 6. Momentum, Impulse and Collisions

### 6.1 Momentum and impulse
p = m v. Impulse J = ∫ F dt = Δp. For a system with no external net force, total momentum is conserved.

### 6.2 Collisions
- **Elastic:** momentum and kinetic energy conserved. In 1D, the relative velocity reverses: v1 - v2 = -(v1' - v2'). Solutions: v1' = ((m1 - m2)/(m1 + m2)) v1 + (2 m2/(m1 + m2)) v2, and v2' = (2 m1/(m1 + m2)) v1 + ((m2 - m1)/(m1 + m2)) v2.
- **Perfectly inelastic:** the bodies stick, v' = (m1 v1 + m2 v2)/(m1 + m2); this loses the most kinetic energy.
- **Equal masses elastic in 2D** (one at rest): the final velocities are perpendicular.

**Example.** 2 kg at 6 m/s hits a 4 kg mass at rest: elastic gives v1' = -2 m/s, v2' = 4 m/s. Perfectly inelastic gives v' = 2 m/s, losing 24 J of the initial 36 J.

**Ballistic pendulum.** Momentum conservation in the collision (inelastic), then energy conservation in the swing: v_bullet = ((m + M)/m) sqrt(2 g h).

### 6.3 Centre of mass
r_cm = Σ m_i r_i / M. Its acceleration is ΣF_ext/M, regardless of internal forces. Rocket propulsion: m dv/dt = v_ex dm/dt gives v = v_ex ln(m_i/m_f).

## Chapter 7. Rotational Dynamics

### 7.1 Kinematics
θ, ω = dθ/dt, α = dω/dt. For constant α: ω = ω0 + α t, θ = ω0 t + (1/2) α t^2. Linking: s = r θ, v = r ω, a_t = r α.

### 7.2 Torque, moment of inertia, Newton's second law for rotation
Torque τ = r × F (magnitude r F sin φ). Moment of inertia I = Σ m_i r_i^2 = ∫ r^2 dm. **Στ = I α.** Rotational kinetic energy (1/2) I ω^2.
Common results (axis through the centre unless noted): thin hoop M R^2; solid disc or cylinder (1/2) M R^2; solid sphere (2/5) M R^2; thin rod (1/12) M L^2 (about the centre), (1/3) M L^2 (about one end).
**Parallel axis theorem:** I = I_cm + M d^2.

### 7.3 Rolling without slipping
v_cm = R ω. Total kinetic energy = (1/2) M v^2 + (1/2) I_cm ω^2. A solid cylinder released from height h reaches the bottom with v = sqrt(4 g h/3) (3.96 m/s for h = 1.2 m), slower than a sliding block because part of the energy goes into rotation. Acceleration down an incline: a = g sin θ/(1 + I/(M R^2)).

### 7.4 Angular momentum
L = I ω (about a fixed axis); in general L = r × p. dL/dt = Στ. With no net external torque, L is conserved. Example: a skater's moment of inertia changes from 4 to 1.5 kg m^2 with initial ω = 2 rad/s: ω' = 5.33 rad/s, and the arms do 13.3 J of work (kinetic energy rises from 8 J to 21.3 J).

### 7.5 Static equilibrium
Σ F = 0 and Σ τ = 0 about any point. Choose the pivot to eliminate unknown forces.

## Chapter 8. Gravitation

Newton's law: F = G M m/r^2, with G = 6.674 × 10^-11 N m^2/kg^2. Surface gravity g = G M_E/R_E^2 = 9.8 m/s^2.
- **Circular orbit:** v = sqrt(G M/r), period T = 2π sqrt(r^3/(G M)). (Kepler's third law: T^2 ∝ r^3.) At 400 km altitude, v = 7.67 km/s and T = 92.4 minutes.
- **Escape speed:** v_esc = sqrt(2 G M/R) = 11.2 km/s for Earth.
- **Orbital energy:** E = -G M m/(2r) for a circular orbit. Bound orbits have E < 0.
- **Kepler's laws:** (1) orbits are ellipses with the Sun at one focus; (2) equal areas in equal times (angular momentum conservation); (3) T^2 ∝ a^3.

## Chapter 9. Oscillations

### 9.1 Simple harmonic motion
A restoring force F = -k x gives x'' = -ω^2 x with ω = sqrt(k/m). Solution x = A cos(ω t + φ). Period T = 2π/ω, frequency f = 1/T.
- v = -A ω sin(ω t + φ), a = -ω^2 x.
- v_max = A ω, a_max = A ω^2, and v = ω sqrt(A^2 - x^2).
- Total energy E = (1/2) k A^2 = (1/2) m v^2 + (1/2) k x^2 is constant.
- Amplitude and phase from initial conditions: A = sqrt(x0^2 + (v0/ω)^2).

**Examples.**
- Mass-spring: m = 0.4 kg, k = 40 N/m gives ω = 10 rad/s and T = 0.628 s.
- Simple pendulum (small angles): ω = sqrt(g/L), T = 2π sqrt(L/g). For L = 1.00 m, T = 2.007 s. A "seconds pendulum" (T = 2 s) has L = 0.993 m.
- Physical pendulum: T = 2π sqrt(I/(m g d)).
- Vertical spring: the equilibrium is shifted by m g/k but the frequency is unchanged.
- Springs in series: 1/k = 1/k1 + 1/k2; in parallel: k = k1 + k2.

### 9.2 Damped oscillations
With drag -b v: m x'' + b x' + k x = 0. Define γ = b/(2m) and ω0 = sqrt(k/m).
- **Underdamped** (γ < ω0): x = A e^(-γ t) cos(ω' t + φ), with ω' = sqrt(ω0^2 - γ^2). Energy decays as e^(-2γ t).
- **Critically damped** (γ = ω0): the fastest return to equilibrium without oscillation.
- **Overdamped** (γ > ω0): slow monotonic decay.
- Quality factor Q = ω0/(2γ) = sqrt(k m)/b.

### 9.3 Driven oscillations and resonance
For a force F0 cos(ω t): steady-state amplitude A(ω) = (F0/m)/sqrt((ω0^2 - ω^2)^2 + (2 γ ω)^2). Resonance occurs near ω ≈ ω0, where the amplitude is about F0/(2 m γ ω0) and the peak sharpens as damping decreases. Phase: the response lags the drive by 0 (low frequency) to π (high frequency), and by π/2 at resonance.
Engineering relevance: bridges, buildings, MEMS resonators, filters (RLC circuits are the same equation).

## Chapter 10. Mechanical Waves

### 10.1 Travelling waves
A wave is a disturbance propagating without net transport of matter. For a sinusoidal wave y(x, t) = A sin(k x - ω t + φ):
- wavenumber k = 2π/λ, angular frequency ω = 2π f, speed v = f λ = ω/k.
- A wave y = f(x - v t) moves right; f(x + v t) moves left.
- Particle velocity ∂y/∂t is different from wave speed; max transverse speed = A ω.

**Wave equation:** ∂²y/∂x² = (1/v²) ∂²y/∂t². **String:** v = sqrt(T/μ) (tension over linear density). **Sound in a gas:** v = sqrt(B/ρ), about 343 m/s in air at 20 °C.
**Power:** a sinusoidal string wave transmits P = (1/2) μ ω² A² v.

**Example.** y = 0.02 sin(4π x - 100π t): λ = 0.5 m, f = 50 Hz, v = 25 m/s, max transverse speed 6.28 m/s. For μ = 0.01 kg/m, T = μ v² = 6.25 N and P = 4.93 W.

### 10.2 Superposition and interference
Waves add linearly. Two identical waves with phase difference δ give amplitude 2A cos(δ/2). Constructive: path difference Δ = n λ. Destructive: Δ = (n + 1/2) λ. A phase shift of π occurs on reflection from a fixed end (none from a free end).
**Beats:** two frequencies f1, f2 give a beat frequency |f1 - f2| (440 Hz and 444 Hz beat at 4 Hz).

### 10.3 Standing waves
Counter-propagating equal waves produce y = 2A sin(k x) cos(ω t), with nodes and antinodes.
- **String fixed at both ends** (length L): λ_n = 2L/n, f_n = n v/(2L), n = 1, 2, 3, ...
- **Pipe open at both ends:** f_n = n v/(2L).
- **Pipe closed at one end:** f_n = n v/(4L), odd n only.
Example: a 0.8 m string with v = 200 m/s has harmonics 125, 250, 375 Hz. A 0.5 m open pipe resonates at 343 Hz, but a closed one at 171.5 Hz (and odd multiples).

### 10.4 Sound
- **Intensity:** I = P/A. For a point source, I = P/(4π r²) (inverse-square law).
- **Intensity level:** β = 10 log10(I/I0) dB, I0 = 10^-12 W/m². Doubling the distance lowers the level by 6 dB; doubling the intensity raises it by 3 dB.
- **Doppler effect:** f' = f (v ± v_obs)/(v ∓ v_src), with the upper signs when the observer or source approaches. Example: a 700 Hz siren approaching at 30 m/s is heard at 700 · 343/313 = 767 Hz and receding at 644 Hz.
- **Shock waves:** sin θ = v/v_src (Mach cone) for supersonic sources.

## Chapter 11. Common Mistakes Checklist
1. Mixing distance with displacement, or forgetting sign conventions (in free fall, a = -g if up is positive).
2. Assuming N = m g on an incline (it is m g cos θ) or in an accelerating elevator.
3. Treating centripetal force as an extra force on the free-body diagram.
4. Applying conservation of mechanical energy when friction or an inelastic collision is present.
5. Using conservation of kinetic energy in an inelastic collision. Momentum is conserved, kinetic energy is not.
6. Forgetting the factor of 2 in escape speed or the 1/2 in kinetic energy.
7. Confusing wave speed with particle speed, and using f = v/λ with the wrong medium.
8. Using degrees with ω t in a calculator set to radians (or vice versa).
