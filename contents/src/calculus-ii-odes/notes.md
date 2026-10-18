# Calculus II and Differential Equations: Complete Lecture Notes

Prerequisite: Calculus I (limits, derivatives, basic integration, series). Maths is in plain text: ∫(a to b) f dx is a definite integral, ∂f/∂x a partial derivative, ∇ is the gradient operator, i, j, k are unit vectors, and F = (P, Q, R) is a vector field.

## Chapter 1. Techniques of Integration and Improper Integrals

### 1.1 Strategy
Look for, in order: (1) a simple substitution, (2) an algebraic simplification, (3) a trig identity, (4) integration by parts, (5) partial fractions for rational functions, (6) a trig substitution for sqrt(a^2 - x^2), sqrt(a^2 + x^2) or sqrt(x^2 - a^2).

### 1.2 Trigonometric integrals
- ∫ sin^m x cos^n x dx: if n is odd, split off one cos x and let u = sin x; if m is odd, split off sin x and let u = cos x; if both are even, use half-angle identities sin^2 x = (1 - cos 2x)/2, cos^2 x = (1 + cos 2x)/2.
 Example: ∫ sin^2 x cos^3 x dx = ∫ u^2 (1 - u^2) du with u = sin x = sin^3 x/3 - sin^5 x/5 + C.
- ∫ tan^m x sec^n x dx: if n is even, u = tan x; if m is odd, u = sec x.
- ∫ sec x dx = ln|sec x + tan x| + C; ∫ sec^3 x dx = (1/2)(sec x tan x + ln|sec x + tan x|) + C (by parts).

### 1.3 Trigonometric substitution
- sqrt(a^2 - x^2): x = a sin θ.  sqrt(a^2 + x^2): x = a tan θ.  sqrt(x^2 - a^2): x = a sec θ.
- Example: ∫ dx/(x^2 sqrt(x^2 + 9)) with x = 3 tan θ gives (1/9)∫ cos θ/sin^2 θ dθ = -1/(9 sin θ) + C = -sqrt(x^2 + 9)/(9x) + C.
- Completing the square reduces ∫ dx/(x^2 + 2x + 5) to (1/2) arctan((x + 1)/2) + C.

### 1.4 Partial fractions
For a proper rational function factor the denominator: distinct linear factors give A/(x - a); repeated factors give A/(x - a) + B/(x - a)^2; irreducible quadratics give (Ax + B)/(x^2 + bx + c). If the degree of the numerator is not smaller than that of the denominator, divide first.
Example: (3x + 5)/((x - 1)(x + 2)) = (8/3)/(x - 1) + (1/3)/(x + 2). The cover-up method: at x = 1, A = (3 + 5)/(1 + 2) = 8/3; at x = -2, B = (-6 + 5)/(-2 - 1) = 1/3.

### 1.5 Improper integrals
- **Infinite limits:** ∫(a to ∞) f dx = lim(b→∞) ∫(a to b) f dx.
- **Unbounded integrand:** ∫(a to b) f dx with a singularity at an endpoint is defined by a limit.
- **p-integrals:** ∫(1 to ∞) dx/x^p converges iff p > 1 (value 1/(p - 1)); ∫(0 to 1) dx/x^p converges iff p < 1.
- Examples: ∫(0 to ∞) x e^(-x^2) dx = 1/2. ∫(0 to 1) ln x dx = -1.
- **Comparison test:** if 0 ≤ f ≤ g and ∫ g converges, then ∫ f converges; if ∫ f diverges, so does ∫ g.
- The Gaussian integral ∫(-∞ to ∞) e^(-x^2) dx = sqrt(π) (see the polar coordinates example in Chapter 7).

## Chapter 2. Parametric Curves and Polar Coordinates

### 2.1 Parametric curves
A curve x = x(t), y = y(t). Slope dy/dx = (dy/dt)/(dx/dt); second derivative d²y/dx² = (d/dt(dy/dx))/(dx/dt). **Arc length** L = ∫ sqrt((dx/dt)^2 + (dy/dt)^2) dt. Example: x = 3t^2, y = 2t^3 for 0 ≤ t ≤ 1: speed = 6t sqrt(1 + t^2), L = [2(1 + t^2)^(3/2)] from 0 to 1 = 4 sqrt 2 - 2 ≈ 3.657. The cycloid x = a(t - sin t), y = a(1 - cos t) has one arch of length 8a.

### 2.2 Polar coordinates
x = r cos θ, y = r sin θ, r^2 = x^2 + y^2, tan θ = y/x. **Area** A = (1/2) ∫ r^2 dθ. **Arc length** L = ∫ sqrt(r^2 + (dr/dθ)^2) dθ.
- Cardioid r = 2 + 2 cos θ has area (1/2) ∫(0 to 2π) (2 + 2 cos θ)^2 dθ = 6π.
- One petal of r = cos 2θ (θ from -π/4 to π/4) has area π/8.
- Find intersections by solving r1(θ) = r2(θ), and also check the origin.

## Chapter 3. Vectors and Three-Dimensional Geometry

### 3.1 Vectors in R^3
Components a = (a1, a2, a3); length |a|; unit vector a/|a|. **Dot product** a · b = a1 b1 + a2 b2 + a3 b3 = |a||b| cos θ: gives angles, projections (comp_b a = a · b/|b|) and orthogonality (a · b = 0). **Cross product** a × b = (a2 b3 - a3 b2, a3 b1 - a1 b3, a1 b2 - a2 b1); it is perpendicular to both, with |a × b| = |a||b| sin θ equal to the area of the parallelogram. The scalar triple product a · (b × c) is the volume of the parallelepiped.
Example: a = (1, 2, -1), b = (2, 0, 3): a · b = -1, a × b = (6, -5, -4), |a × b| = sqrt 77, and the angle is arccos(-1/sqrt 78) = 96.5°.

### 3.2 Lines and planes
- Line through P0 in direction d: r(t) = P0 + t d (parametric), or symmetric equations (x - x0)/d1 = (y - y0)/d2 = (z - z0)/d3.
- Plane through P0 with normal n: n · (r - r0) = 0, i.e. a(x - x0) + b(y - y0) + c(z - z0) = 0. Three points: find the normal as a cross product of two edge vectors.
- Distance from point P to the plane ax + by + cz = d: |a x_P + b y_P + c z_P - d|/sqrt(a^2 + b^2 + c^2).
- Angle between planes = angle between normals. Line-plane intersection: substitute the line into the plane equation.

### 3.3 Surfaces and coordinate systems
Quadric surfaces: ellipsoid, hyperboloids of one and two sheets, elliptic paraboloid z = x^2/a^2 + y^2/b^2, hyperbolic paraboloid (saddle), cones, cylinders. Identify them by their traces.
- **Cylindrical** (r, θ, z): x = r cos θ, y = r sin θ; volume element dV = r dr dθ dz.
- **Spherical** (ρ, θ, φ), φ measured from the positive z-axis: x = ρ sin φ cos θ, y = ρ sin φ sin θ, z = ρ cos φ; dV = ρ^2 sin φ dρ dφ dθ.
- Example: (1, 1, sqrt 2) has cylindrical (sqrt 2, π/4, sqrt 2) and spherical (2, π/4, π/4).

## Chapter 4. Vector-Valued Functions

r(t) = (x(t), y(t), z(t)). Derivative r'(t) = velocity (tangent), |r'| = speed, r'' = acceleration. Unit tangent T = r'/|r'|. Arc length s = ∫ |r'| dt. **Curvature** κ = |T'|/|r'| = |r' × r''|/|r'|^3. For the helix r = (cos t, sin t, t): r' = (-sin t, cos t, 1), speed sqrt 2, arc length 2π sqrt 2 per turn, curvature 1/2. For a circle of radius R, κ = 1/R. The acceleration splits into tangential and normal parts: a = (d|v|/dt) T + κ|v|^2 N.
Projectile and orbital motion are examples of integrating r'' twice from initial conditions.

## Chapter 5. Partial Derivatives

### 5.1 Functions of several variables and partial derivatives
f(x, y): level curves f = c; level surfaces for three variables. The partial derivative f_x treats the other variables as constants. Example: f = x^2 y + e^(xy) gives f_x = 2xy + y e^(xy), f_y = x^2 + x e^(xy). Mixed partials are equal (f_xy = f_yx) when they are continuous (Clairaut).
**Limits and continuity** in two variables: the limit must be the same along every path. Showing different limits along two paths proves non-existence: (x^2 - y^2)/(x^2 + y^2) tends to 1 along y = 0 and to -1 along x = 0.

### 5.2 Linearisation, differentials and the chain rule
Tangent plane to z = f(x, y) at (a, b): z = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b). It gives the linear approximation. The differential dz = f_x dx + f_y dy estimates errors.
**Chain rule:** if z = f(x, y) with x(t), y(t): dz/dt = f_x x' + f_y y'. If x(s, t), y(s, t): ∂z/∂s = f_x x_s + f_y y_s. Check: z = x^2 y with x = t^2, y = t^3 gives dz/dt = 2xy(2t) + x^2(3t^2) = 7t^6.
**Implicit differentiation:** if F(x, y) = 0, then dy/dx = -F_x/F_y.

### 5.3 Gradient and directional derivatives
∇f = (f_x, f_y, f_z). The directional derivative in the unit direction u is D_u f = ∇f · u. The gradient points in the direction of steepest ascent, with maximum rate |∇f|, and is perpendicular to level curves and surfaces. Example: f = x^2 + 3xy - y^2 at (1, 2): ∇f = (8, -1); in the direction (3, 4)/5 the rate is (24 - 4)/5 = 4; the maximum rate is sqrt 65.

### 5.4 Optimisation
- **Critical points:** ∇f = 0. **Second derivative test:** D = f_xx f_yy - (f_xy)^2. If D > 0 and f_xx > 0: local minimum; D > 0 and f_xx < 0: local maximum; D < 0: saddle; D = 0: inconclusive.
 Example: f = x^3 + y^3 - 3xy: critical points (0, 0) (D = -9, saddle) and (1, 1) (D = 27, f_xx = 6: local minimum, f = -1).
- **Absolute extrema on a closed bounded region:** compare critical points inside with extrema on the boundary.
- **Lagrange multipliers:** optimise f subject to g = k by solving ∇f = λ ∇g and g = k.
 Example: maximise xy on x^2 + y^2 = 8: y = 2λx and x = 2λy give x = ±y, so (2, 2) and (-2, -2) give the maximum 4 and (2, -2), (-2, 2) the minimum -4. Example: a box with surface area 24 has maximum volume at the cube with side 2 (V = 8).
- **Least squares** fitting is an optimisation problem (see Linear Algebra).

## Chapter 6. Multiple Integrals

### 6.1 Double integrals
∬_R f dA is the limit of Riemann sums; it gives volume under a surface. **Fubini:** for a rectangle or a type I/II region the integral can be computed as an iterated integral; choose the order that makes the limits or the integrand simpler.
- Rectangle: ∫(0 to 2)∫(0 to 1) (x + 2y) dy dx = ∫(0 to 2) (x + 1) dx = 4.
- Type I: region between y = x^2 and y = x: ∫(0 to 1)∫(x^2 to x) xy dy dx = ∫ x(x^2 - x^4)/2 dx = 1/24.
- Reversing the order: ∫(0 to 1)∫(x to 1) sin(y^2) dy dx cannot be done in the given order, but changing to ∫(0 to 1)∫(0 to y) sin(y^2) dx dy = ∫ y sin(y^2) dy = (1 - cos 1)/2.
- **Polar coordinates:** dA = r dr dθ. ∬ e^(-(x^2 + y^2)) dA over the disk of radius 2 = ∫(0 to 2π)∫(0 to 2) e^(-r^2) r dr dθ = π(1 - e^(-4)). Letting the radius go to infinity gives π, and hence ∫(-∞ to ∞) e^(-x^2) dx = sqrt(π).
- Applications: area (f = 1), average value (1/A) ∬ f dA, mass ∬ ρ dA, centre of mass (x̄ = (1/m) ∬ x ρ dA), moments of inertia, surface area ∬ sqrt(1 + f_x^2 + f_y^2) dA.

### 6.2 Triple integrals
∭_E f dV, in rectangular, cylindrical or spherical coordinates.
- Sphere of radius a: ∫(0 to 2π)∫(0 to π)∫(0 to a) ρ^2 sin φ dρ dφ dθ = 4πa^3/3.
- Solid under z = 4 and above z = x^2 + y^2: volume = ∫(0 to 2π)∫(0 to 2)∫(r^2 to 4) r dz dr dθ = 2π(8 - 4) = 8π. The centroid has z̄ = (∭ z dV)/V = (64π/3)/(8π) = 8/3.
- Choose cylindrical coordinates when there is an axis of symmetry and spherical when there is a centre of symmetry.

### 6.3 Change of variables
x = x(u, v), y = y(u, v): dA = |∂(x, y)/∂(u, v)| du dv, where the Jacobian is the determinant x_u y_v - x_v y_u. Polar coordinates have Jacobian r; spherical, ρ^2 sin φ.

## Chapter 7. Vector Calculus

### 7.1 Vector fields, divergence and curl
F = (P, Q, R). **Divergence** div F = ∇ · F = P_x + Q_y + R_z (sources and sinks, expansion). **Curl** curl F = ∇ × F = (R_y - Q_z, P_z - R_x, Q_x - P_y) (rotation). For F = (x^2 y, yz, xz^2): div F = 2xy + z + 2xz, curl F = (-y, -z^2, -x^2). Identities: curl(grad f) = 0 and div(curl F) = 0.

### 7.2 Line integrals
- **Scalar:** ∫_C f ds = ∫ f(r(t)) |r'(t)| dt (mass of a wire).
- **Vector (work):** ∫_C F · dr = ∫ F(r(t)) · r'(t) dt = ∫ P dx + Q dy + R dz.
- **Fundamental theorem:** if F = ∇f (a conservative field), then ∫_C F · dr = f(end) - f(start), independent of the path. In the plane, F = (P, Q) on a simply connected region is conservative iff P_y = Q_x. Example: F = (y, x) = ∇(xy): the work from (0, 0) to (2, 3) is 6.

### 7.3 Green's theorem
For a positively oriented (anticlockwise) simple closed curve C bounding the region D: ∮_C P dx + Q dy = ∬_D (Q_x - P_y) dA. Taking P = -y/2, Q = x/2 gives area = (1/2) ∮ x dy - y dx. Example: ∮ (-y dx + x dy) around a circle of radius 3 = ∬ 2 dA = 18π.

### 7.4 Surface integrals, Stokes' theorem and the divergence theorem
- A surface S parametrised by r(u, v): dS = |r_u × r_v| du dv; the flux of F through S is ∬ F · n dS = ∬ F · (r_u × r_v) du dv.
- **Stokes' theorem:** ∮_C F · dr = ∬_S (curl F) · n dS, for a surface S bounded by C (orientation by the right-hand rule). Example: F = (-y, x, 0) has curl (0, 0, 2); the circulation around the unit circle in the xy-plane is 2π.
- **Divergence (Gauss) theorem:** ∯_S F · n dS = ∭_E div F dV for a closed surface with outward normal. Example: F = (x, y, z) through a sphere of radius 2 has flux ∭ 3 dV = 3(4π · 8/3) = 32π.
- These theorems underlie Maxwell's equations (Physics II) and fluid dynamics.

## Chapter 8. First-Order Differential Equations

### 8.1 Basic ideas
An ODE relates a function to its derivatives. The **order** is the highest derivative. A general solution contains arbitrary constants; an initial-value problem (IVP) fixes them. **Direction fields** show the slope y' = f(x, y) at each point. **Existence and uniqueness:** if f and ∂f/∂y are continuous near (x0, y0), the IVP y' = f(x, y), y(x0) = y0 has a unique local solution.

### 8.2 Separable equations
dy/dx = g(x) h(y): separate to dy/h(y) = g(x) dx and integrate. Example: dy/dx = x y^2, y(0) = 1: -1/y = x^2/2 - 1, so y = 2/(2 - x^2), which blows up at x = sqrt 2. (Check constant solutions such as y = 0, which are lost on division.)

### 8.3 Linear first-order equations
y' + p(x) y = q(x). **Integrating factor** μ = e^(∫p dx): (μ y)' = μ q, so y = (1/μ)(∫ μ q dx + C). Example: y' + 2y = e^(-x), y(0) = 3: μ = e^(2x), (e^(2x) y)' = e^x, y = e^(-x) + C e^(-2x); with y(0) = 3, C = 2, so y = e^(-x) + 2e^(-2x).

### 8.4 Exact equations and Bernoulli equations
M dx + N dy = 0 is **exact** if M_y = N_x. Then there is ψ with ψ_x = M, ψ_y = N and the solution is ψ = C. Example: (2xy + 3) dx + (x^2 + 4y) dy = 0 has ψ = x^2 y + 3x + 2y^2 = C. Bernoulli: y' + p y = q y^n is reduced to a linear equation by v = y^(1 - n).

### 8.5 Modelling
- **Exponential growth and decay:** y' = ky gives y = y0 e^(kt). Half-life T = ln 2/|k|.
- **Newton's law of cooling:** T' = -k(T - T_a), T = T_a + (T0 - T_a) e^(-kt). Example: coffee at 90 °C in a 20 °C room reaches 70 °C after 5 min: e^(-5k) = 50/70, k = 0.0673 per minute; it reaches 40 °C after ln(3.5)/k = 18.6 min.
- **Mixing:** dS/dt = (rate in) - (rate out). A 100 L tank with 0.5 kg/L brine entering at 4 L/min and the mixture leaving at 4 L/min, starting with 10 kg of salt: S' = 2 - 0.04 S, S = 50 - 40 e^(-0.04t); S = 25 kg at t = 25 ln(1.6) = 11.75 min.
- **RC circuit:** R q' + q/C = V gives v_C(t) = V(1 - e^(-t/RC)) from rest; τ = RC.
- **Logistic growth:** P' = rP(1 - P/K), P(t) = K/(1 + ((K - P0)/P0) e^(-rt)).
- **Euler's method:** y_(n+1) = y_n + h f(x_n, y_n), a first-order accurate numerical scheme (error ∝ h); improved Euler/Heun and Runge-Kutta 4 are more accurate.

## Chapter 9. Second-Order Linear Differential Equations

### 9.1 Homogeneous equations with constant coefficients
a y'' + b y' + c y = 0. Try y = e^(λx): the characteristic equation aλ^2 + bλ + c = 0.
- Distinct real roots λ1, λ2: y = c1 e^(λ1 x) + c2 e^(λ2 x). Example: y'' + 4y' + 3y = 0 gives roots -1, -3.
- Repeated root λ: y = (c1 + c2 x) e^(λx). Example: y'' + 2y' + y = 0 gives (c1 + c2 x) e^(-x).
- Complex roots α ± iβ: y = e^(αx)(c1 cos βx + c2 sin βx). Example: y'' + 4y' + 13y = 0 gives roots -2 ± 3i and y = e^(-2x)(c1 cos 3x + c2 sin 3x).
The solutions form a two-dimensional vector space; the **Wronskian** W = y1 y2' - y1' y2 ≠ 0 shows independence. Superposition holds for linear homogeneous equations.

### 9.2 Nonhomogeneous equations
General solution y = y_h + y_p.
- **Undetermined coefficients** for forcing terms that are polynomials, exponentials, sines, cosines or products: guess y_p of the same form; if the guess duplicates a homogeneous solution, multiply by x (or x^2).
 Example: y'' - y' - 2y = 4x^2. Try y_p = Ax^2 + Bx + C: -2A = 4, -2A - 2B = 0, 2A - B - 2C = 0 give A = -2, B = 2, C = -3. With y_h = c1 e^(-x) + c2 e^(2x): y = c1 e^(-x) + c2 e^(2x) - 2x^2 + 2x - 3.
- **Variation of parameters:** y_p = -y1 ∫ (y2 g/W) dx + y2 ∫ (y1 g/W) dx for y'' + p y' + q y = g. Example: y'' + y = sec x gives y_p = cos x ln|cos x| + x sin x.

### 9.3 Mechanical and electrical oscillations
- **Spring-mass-damper:** m y'' + c y' + k y = F(t). Undamped natural frequency ω0 = sqrt(k/m). Damping ratio ζ = c/(2 sqrt(km)): underdamped (ζ < 1), critically damped (ζ = 1), overdamped (ζ > 1).
- **Series RLC circuit:** L q'' + R q' + q/C = V(t), with the same mathematics: L ↔ m, R ↔ c, 1/C ↔ k. Example: L = 1 H, R = 2 Ω, C = 0.2 F gives λ^2 + 2λ + 5 = 0, λ = -1 ± 2i (underdamped).
- **Resonance:** y'' + ω0^2 y = cos(ω0 t) has y_p = (t/(2ω0)) sin(ω0 t), growing without bound. With damping the amplitude is large but finite. Example: y'' + 4y = cos 2t with zero initial data gives y = (t/4) sin 2t.
- Steady-state response of a driven damped system: amplitude F0/sqrt((k - mω^2)^2 + (cω)^2).

### 9.4 Higher-order equations
The same method works: the characteristic polynomial of degree n; each root of multiplicity m contributes e^(λx), x e^(λx), ..., x^(m-1) e^(λx).

## Chapter 10. The Laplace Transform

### 10.1 Definition and basic transforms
L{f}(s) = F(s) = ∫(0 to ∞) e^(-st) f(t) dt, for s large enough. Key transforms:
- L{1} = 1/s; L{t^n} = n!/s^(n+1); L{e^(at)} = 1/(s - a).
- L{sin ωt} = ω/(s^2 + ω^2); L{cos ωt} = s/(s^2 + ω^2); L{sinh ωt} = ω/(s^2 - ω^2); L{cosh ωt} = s/(s^2 - ω^2).
- L{δ(t - a)} = e^(-as) (Dirac delta, unit impulse); L{u(t - a)} = e^(-as)/s (unit step).

### 10.2 Properties
- **Linearity.** **First shift:** L{e^(at) f(t)} = F(s - a). Example: L{t^3 e^(2t)} = 6/(s - 2)^4.
- **Second shift:** L{u(t - a) f(t - a)} = e^(-as) F(s).
- **Derivatives:** L{f'} = s F(s) - f(0), L{f''} = s^2 F(s) - s f(0) - f'(0).
- **Integral:** L{∫(0 to t) f} = F(s)/s. **Multiplication by t:** L{t f(t)} = -F'(s). Example: L{t sin 2t} = 4s/(s^2 + 4)^2.
- **Convolution:** L{f * g} = F(s) G(s), where (f * g)(t) = ∫(0 to t) f(τ) g(t - τ) dτ.
- **Periodic functions** of period T: F(s) = (1/(1 - e^(-sT))) ∫(0 to T) e^(-st) f(t) dt.
- **Initial and final value theorems:** f(0+) = lim(s→∞) sF(s); lim(t→∞) f(t) = lim(s→0) sF(s) if the limit exists and all poles lie in the left half-plane.

### 10.3 Inverse transforms
Use partial fractions, completing the square and the table.
- (3s + 1)/(s^2 + 2s + 5) = [3(s + 1) - 2]/((s + 1)^2 + 4), so f(t) = e^(-t)(3 cos 2t - sin 2t).
- 1/(s^2(s + 3)) = (1/3)/s^2 - (1/9)/s + (1/9)/(s + 3), so f(t) = t/3 - 1/9 + e^(-3t)/9.
- 1/(s^2(s^2 + 1)) = 1/s^2 - 1/(s^2 + 1), so f(t) = t - sin t (also by convolution).

### 10.4 Solving initial-value problems
Transform the ODE, solve algebraically for Y(s), invert. Example: y'' - 3y' + 2y = 4e^(3t), y(0) = 1, y'(0) = 0. Then (s^2 - 3s + 2) Y = s - 3 + 4/(s - 3), so Y = (s^2 - 6s + 13)/((s - 1)(s - 2)(s - 3)) = 4/(s - 1) - 5/(s - 2) + 2/(s - 3), and y = 4e^t - 5e^(2t) + 2e^(3t). Check: y(0) = 4 - 5 + 2 = 1; y'(0) = 4 - 10 + 6 = 0.
- Discontinuous forcing: y' + y = u(t - 2), y(0) = 0 gives y = (1 - e^(-(t - 2))) u(t - 2).
- Impulse: y'' + 4y = δ(t - π), y(0) = y'(0) = 0 gives y = (1/2) sin 2(t - π) u(t - π) = (1/2) sin 2t · u(t - π).

### 10.5 Transfer functions and engineering meaning
For a linear time-invariant system with zero initial conditions, the **transfer function** is G(s) = Y(s)/U(s). The poles of G are the roots of the characteristic equation; the system is **stable** iff all poles have negative real parts. The impulse response is L^-1{G}, and the response to any input is the convolution of the input with the impulse response. For G(s) = 1/(s^2 + 2s + 5), poles -1 ± 2i: a decaying oscillation at 2 rad/s. This connects directly to circuit analysis, control systems and signal processing.

## Chapter 11. Systems of Linear Differential Equations
x' = A x. If A has an eigenpair (λ, v), then e^(λt) v is a solution; the general solution for distinct eigenvalues is x = Σ c_i e^(λ_i t) v_i. Complex eigenvalues α ± iβ give e^(αt) times sines and cosines.
Example: A = [[1, 2],[2, 1]] has λ = 3 with (1, 1) and λ = -1 with (1, -1). With x(0) = (2, 0): x = e^(3t)(1, 1) + e^(-t)(1, -1).
**Phase plane classification** of the origin for a 2 × 2 system: both eigenvalues real and negative: stable node; both real and positive: unstable node; real of opposite sign: saddle; complex with negative real part: stable spiral; complex with positive real part: unstable spiral; purely imaginary: centre. Nonlinear systems are analysed by linearising near equilibria (Jacobian matrix).
Any n-th order equation can be written as a first-order system; this is the form numerical solvers use.

## Chapter 12. Common Mistakes Checklist
1. Forgetting that the order of integration needs limits to be swapped consistently, or integrating over the wrong region in polar form (the Jacobian r is missing).
2. Using the second derivative test with D = 0, or forgetting to check boundaries in constrained optimisation.
3. Using Green's theorem with the wrong orientation (the curve must be anticlockwise).
4. Dropping constant solutions after dividing by h(y) in a separable equation.
5. Forgetting the integrating factor's constant, or applying the formula before putting the equation in standard form (coefficient of y' equal to 1).
6. Forgetting to multiply the guess by x when it duplicates a homogeneous solution.
7. Forgetting initial conditions in the Laplace derivative formulas, or mixing t and (t - a) in the second shift theorem.
8. Writing the general solution of a nonhomogeneous equation without the homogeneous part, or applying initial conditions before adding y_p.
