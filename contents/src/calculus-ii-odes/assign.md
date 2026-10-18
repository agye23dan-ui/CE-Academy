# Calculus II and Differential Equations: Assignments with Worked Solutions

Show every step. Where a numerical value is asked for, give an exact form and a decimal. Solutions here were checked with computer algebra, but you should still verify each answer by differentiating (for integrals and ODEs) or substituting back.

# Assignment 1: Integration Techniques, Parametric and Polar Curves, Vectors (60 marks)

## Questions

**Q1. (14 marks)** Evaluate.
(a) ∫ sin^2 x cos^3 x dx  [2]
(b) ∫ dx/(x^2 sqrt(x^2 + 9))  [3]
(c) ∫ (3x + 5)/((x - 1)(x + 2)) dx  [3]
(d) ∫ sec^3 x dx  [3]
(e) ∫(0 to ∞) x e^(-x^2) dx and ∫(0 to 1) ln x dx  [3]

**Q2. (6 marks)** Determine whether each improper integral converges and find its value if it does: (a) ∫(1 to ∞) dx/x^2 [1]; (b) ∫(1 to ∞) dx/sqrt(x) [1]; (c) ∫(0 to 1) dx/sqrt(x) [2]; (d) ∫(2 to ∞) dx/(x^2 - 1), using partial fractions [2].

**Q3. (8 marks)** For the curve x = t^2, y = t^3: (a) find dy/dx and d²y/dx² at t = 1 [3]; (b) find the equation of the tangent at t = 1 [2]. (c) Find the length of the curve x = 3t^2, y = 2t^3 for 0 ≤ t ≤ 1 [3].

**Q4. (8 marks)** (a) Find the area enclosed by the cardioid r = 2 + 2 cos θ [3]. (b) Find the area of one petal of r = cos 2θ [2]. (c) Find the area inside r = 3 cos θ and outside r = 1 (first find the intersection angles) [3].

**Q5. (10 marks)** Let a = (1, 2, -1) and b = (2, 0, 3). Find (a) a · b and the angle between a and b [3]; (b) a × b and the area of the parallelogram [3]; (c) the projection of a onto b [2]; (d) a vector orthogonal to both and of length 5 [2].

**Q6. (8 marks)** (a) Find the equation of the plane through P(1, 0, 2), Q(0, 1, 1) and R(2, 2, 0) [4]. (b) Find the distance from the origin to this plane [2]. (c) Find where the line r(t) = (t, 1 + t, 2t) meets the plane [2].

**Q7. (6 marks)** (a) Convert (1, 1, sqrt 2) to cylindrical and spherical coordinates [3]. (b) For r(t) = (cos t, sin t, t), find the velocity, speed, acceleration, the arc length for 0 ≤ t ≤ 2π and the curvature [3].

## Solutions and Marking Guide

**Q1.**
(a) Step 1: the power of cosine is odd, so save one cos x and write cos³x = cos²x · cos x = (1 - sin²x) cos x.
Step 2: let u = sin x, du = cos x dx: ∫ u²(1 - u²) du = ∫ (u² - u⁴) du = u³/3 - u⁵/5.
Step 3: back-substitute: **sin³x/3 - sin⁵x/5 + C**.
(b) Step 1: the form √(x² + 9) suggests x = 3 tan θ, so dx = 3 sec²θ dθ and √(x² + 9) = 3 sec θ.
Step 2: the integral becomes ∫ 3 sec²θ dθ/(9 tan²θ · 3 sec θ) = (1/9) ∫ sec θ/tan²θ dθ = (1/9) ∫ cos θ/sin²θ dθ (since sec θ/tan²θ = cos θ/sin²θ).
Step 3: let w = sin θ: (1/9) ∫ dw/w² = -1/(9w) = -1/(9 sin θ).
Step 4: from the triangle with opposite x and hypotenuse √(x² + 9): sin θ = x/√(x² + 9). So **-√(x² + 9)/(9x) + C**.
(c) Step 1: partial fractions: (3x + 5)/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2), so 3x + 5 = A(x + 2) + B(x - 1).
Step 2: x = 1: 8 = 3A, so A = 8/3. x = -2: -1 = -3B, so B = 1/3.
Step 3: integrate: **(8/3) ln|x - 1| + (1/3) ln|x + 2| + C**.
(d) Step 1: by parts with u = sec x, dv = sec²x dx: du = sec x tan x dx, v = tan x. ∫ sec³x dx = sec x tan x - ∫ sec x tan²x dx.
Step 2: use tan²x = sec²x - 1: ∫ sec x tan²x dx = ∫ sec³x dx - ∫ sec x dx.
Step 3: let I = ∫ sec³x dx. Then I = sec x tan x - I + ∫ sec x dx, so 2I = sec x tan x + ln|sec x + tan x|.
Step 4: **I = (1/2)(sec x tan x + ln|sec x + tan x|) + C**.
(e) First integral: Step 1: u = x², du = 2x dx; limits 0 → 0 and ∞ → ∞. ∫₀^∞ x e^(-x²) dx = (1/2) ∫₀^∞ e^(-u) du.
Step 2: = (1/2)[-e^(-u)]₀^∞ = (1/2)(0 + 1) = **1/2**.
Second integral (improper at 0): Step 1: ∫ ln x dx = x ln x - x. Step 2: ∫ₐ¹ ln x dx = [x ln x - x]ₐ¹ = (0 - 1) - (a ln a - a) = -1 - a ln a + a. Step 3: as a → 0⁺, a ln a → 0, so the limit is **-1**.

**Q2.**
(a) Step 1: ∫₁^∞ x⁻² dx = [-1/x]₁^∞ = 0 - (-1) = **1** (converges).
(b) Step 1: ∫₁^∞ x^(-1/2) dx = [2√x]₁^∞ = ∞. **Diverges** (p = 1/2 ≤ 1).
(c) Step 1: ∫₀¹ x^(-1/2) dx = lim(a→0⁺) [2√x]ₐ¹ = 2 - 0 = **2** (converges, since p = 1/2 < 1 at 0).
(d) Step 1: partial fractions: 1/(x² - 1) = (1/2)[1/(x - 1) - 1/(x + 1)].
Step 2: antiderivative (1/2) ln((x - 1)/(x + 1)).
Step 3: at ∞: (x - 1)/(x + 1) → 1, ln 1 = 0. At x = 2: (1/2) ln(1/3).
Step 4: value = 0 - (1/2) ln(1/3) = (1/2) ln 3 ≈ 0.5493. **Converges to (1/2) ln 3 ≈ 0.549**.

**Q3.**
(a) Step 1: dx/dt = 2t, dy/dt = 3t². dy/dx = (dy/dt)/(dx/dt) = 3t²/(2t) = 3t/2.
Step 2: at t = 1: **dy/dx = 3/2**.
Step 3: second derivative: d²y/dx² = [d/dt(dy/dx)]/(dx/dt) = (3/2)/(2t) = 3/(4t).
Step 4: at t = 1: **d²y/dx² = 3/4**.
(b) Step 1: the point at t = 1 is (1, 1) and the slope is 3/2.
Step 2: y - 1 = (3/2)(x - 1), i.e. **y = 1.5x - 0.5**.
(c) Step 1: dx/dt = 6t, dy/dt = 6t². Speed = √(36t² + 36t⁴) = 6t√(1 + t²) for t ≥ 0.
Step 2: L = ∫₀¹ 6t√(1 + t²) dt. Let u = 1 + t², du = 2t dt: = 3 ∫₁² u^(1/2) du = 3 · (2/3)[u^(3/2)]₁² = 2(2^(3/2) - 1).
Step 3: 2^(3/2) = 2.828, so L = 2(1.828) = **4√2 - 2 ≈ 3.657**.

**Q4.**
(a) Step 1: area in polar form A = (1/2) ∫ r² dθ over 0 to 2π.
Step 2: r² = (2 + 2 cos θ)² = 4(1 + 2 cos θ + cos²θ).
Step 3: A = (1/2) · 4 ∫₀^(2π) (1 + 2 cos θ + cos²θ) dθ = 2[2π + 0 + π] (∫cos θ = 0 and ∫cos²θ over a full period = π).
Step 4: A = 2(3π) = **6π ≈ 18.85**.
(b) Step 1: one petal is traced for -π/4 ≤ θ ≤ π/4 (where cos 2θ ≥ 0).
Step 2: A = (1/2) ∫₋π/4^(π/4) cos²2θ dθ = (1/2) ∫ (1 + cos 4θ)/2 dθ = (1/4)[θ + sin 4θ/4]₋π/4^(π/4).
Step 3: the sine terms vanish at ±π/4 (sin(±π) = 0), leaving (1/4)(π/4 + π/4) = (1/4)(π/2). **A = π/8 ≈ 0.393**.
(c) Step 1: intersection: 3 cos θ = 1, so cos θ = 1/3 and θ = ±α with α = arccos(1/3) = 1.2310 rad.
Step 2: the region inside r = 3 cos θ and outside r = 1 is A = (1/2) ∫₋α^α (9cos²θ - 1) dθ = ∫₀^α (9cos²θ - 1) dθ (by symmetry).
Step 3: 9cos²θ = (9/2)(1 + cos 2θ), so the integrand is 9/2 + (9/2) cos 2θ - 1 = 7/2 + (9/2) cos 2θ. Antiderivative: (7/2)θ + (9/4) sin 2θ.
Step 4: sin α = √(1 - 1/9) = 2√2/3, so sin 2α = 2 sin α cos α = 2(2√2/3)(1/3) = 4√2/9 ≈ 0.6285.
Step 5: A = (7/2)(1.2310) + (9/4)(0.6285) = 4.3085 + 1.4142 = **5.723** (exactly (7/2) arccos(1/3) + √2).

**Q5.** a = (1, 2, -1), b = (2, 0, 3).
(a) Step 1: a · b = (1)(2) + (2)(0) + (-1)(3) = 2 + 0 - 3 = **-1**.
Step 2: |a| = √(1 + 4 + 1) = √6 and |b| = √(4 + 0 + 9) = √13.
Step 3: cos θ = (a · b)/(|a||b|) = -1/√78 = -1/8.832 = -0.1132.
Step 4: θ = arccos(-0.1132) = **96.5°**.
(b) Step 1: a × b = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁) = (2·3 - (-1)·0, (-1)·2 - 1·3, 1·0 - 2·2) = (6, -5, -4).
Step 2: area = |a × b| = √(36 + 25 + 16) = √77 = **8.77**.
(c) Step 1: proj_b a = ((a · b)/|b|²) b = (-1/13)(2, 0, 3).
Step 2: **(-2/13, 0, -3/13) ≈ (-0.154, 0, -0.231)**.
(d) Step 1: a × b is orthogonal to both a and b; its length is √77.
Step 2: scale to length 5: (5/√77)(6, -5, -4) with 5/√77 = 0.5698. **≈ (3.42, -2.85, -2.28)**.

**Q6.**
(a) Step 1: PQ = Q - P = (-1, 1, -1) and PR = R - P = (1, 2, -2).
Step 2: n = PQ × PR = (1·(-2) - (-1)·2, (-1)·1 - (-1)(-2), (-1)·2 - 1·1) = (-2 + 2, -1 - 2, -2 - 1) = (0, -3, -3). Divide by -3 to simplify: n = (0, 1, 1).
Step 3: plane through P: 0(x - 1) + 1(y - 0) + 1(z - 2) = 0, i.e. y + z = 2.
Step 4 (check): Q: 1 + 1 = 2 ✓; R: 2 + 0 = 2 ✓. **y + z = 2.**
(b) Step 1: distance from the origin to ax + by + cz = d is |d|/√(a² + b² + c²).
Step 2: = |2|/√(0 + 1 + 1) = 2/√2 = **√2 ≈ 1.414**.
(c) Step 1: substitute (t, 1 + t, 2t) into y + z = 2: (1 + t) + 2t = 2.
Step 2: 1 + 3t = 2, so t = 1/3.
Step 3: the point is **(1/3, 4/3, 2/3)**. Check: 4/3 + 2/3 = 2 ✓.

**Q7.**
(a) Step 1 (cylindrical): r = √(x² + y²) = √2, θ = arctan(y/x) = arctan 1 = π/4, z = √2. **(√2, π/4, √2)**.
Step 2 (spherical): ρ = √(x² + y² + z²) = √(1 + 1 + 2) = 2. cos φ = z/ρ = √2/2, so φ = π/4. **(2, π/4, π/4)**.
(b) Step 1: v = r'(t) = (-sin t, cos t, 1); speed |v| = √(sin²t + cos²t + 1) = √2.
Step 2: a = r''(t) = (-cos t, -sin t, 0).
Step 3: arc length L = ∫₀^(2π) √2 dt = 2π√2 ≈ 8.886.
Step 4: v × a = (cos t · 0 - 1·(-sin t), 1·(-cos t) - (-sin t)·0, (-sin t)(-sin t) - cos t(-cos t)) = (sin t, -cos t, 1); |v × a| = √2.
Step 5: curvature κ = |v × a|/|v|³ = √2/(√2)³ = √2/(2√2) = **1/2**.

---
# Assignment 2: Partial Derivatives, Multiple Integrals and Vector Calculus (80 marks)

## Questions

**Q1. (8 marks)** (a) Find f_x and f_y for f = x^2 y + e^(xy) [2]. (b) With z = x^2 y, x = t^2, y = t^3, find dz/dt by the chain rule and check by substitution [3]. (c) Show that the limit of (x^2 - y^2)/(x^2 + y^2) as (x, y) → (0, 0) does not exist [3].

**Q2. (10 marks)** For f(x, y) = x^2 + 3xy - y^2: (a) find the gradient at (1, 2) [2]; (b) the directional derivative in the direction (3, 4) [2]; (c) the direction and size of maximum increase [2]; (d) the tangent plane of the surface z = x^2 + y^2 at (1, 2, 5) and use it to estimate 1.02^2 + 1.97^2 [4].

**Q3. (12 marks)** (a) Find and classify all critical points of f = x^3 + y^3 - 3xy [6]. (b) Use Lagrange multipliers to find the extreme values of xy on x^2 + y^2 = 8 [4]. (c) Find the dimensions of the closed rectangular box of maximum volume with surface area 24 [2].

**Q4. (14 marks)** Evaluate. (a) ∬_R (x + 2y) dA, R = [0, 2] × [0, 1] [2]. (b) ∬ xy dA over the region between y = x^2 and y = x [3]. (c) ∫(0 to 1)∫(x to 1) sin(y^2) dy dx by reversing the order [3]. (d) ∬ e^(-(x^2 + y^2)) dA over the disk of radius 2, and deduce ∫(-∞ to ∞) e^(-x^2) dx [4]. (e) The area inside r = 1 + cos θ using a double integral [2].

**Q5. (12 marks)** (a) Find the volume of the solid bounded below by z = x^2 + y^2 and above by z = 4, in cylindrical coordinates [3]. (b) Find the z-coordinate of its centroid [3]. (c) Find the volume of a sphere of radius a in spherical coordinates [3]. (d) Find the mass of a sphere of radius 1 whose density is ρ = 1 + (distance from the centre) [3].

**Q6. (16 marks)** (a) For F = (x^2 y, yz, xz^2) find div F and curl F [4]. (b) Show that F = (y, x) is conservative, find a potential, and compute the work done from (0, 0) to (2, 3) [3]. (c) Use Green's theorem to evaluate ∮ (-y dx + x dy) around the circle of radius 3, and to find the area of an ellipse x^2/a^2 + y^2/b^2 = 1 [4]. (d) Use the divergence theorem to find the flux of F = (x, y, z) out of the sphere of radius 2 [2]. (e) Use Stokes' theorem to find the circulation of F = (-y, x, 0) around the unit circle in the xy-plane [3].

**Q7. (8 marks)** Use the change of variables u = x + y, v = x - y to evaluate ∬_D (x + y)^2 (x - y) dA, where D is the region bounded by x + y = 1, x + y = 3, x - y = 0 and x - y = 2. Include the Jacobian.

## Solutions and Marking Guide

**Q1.**
(a) Treat the other variable as a constant. f = x²y + e^(xy).
Step 1: f_x = 2xy + y e^(xy) (chain rule on e^(xy) gives y e^(xy)).
Step 2: f_y = x² + x e^(xy).
**f_x = 2xy + y e^(xy), f_y = x² + x e^(xy)**.
(b) Step 1: chain rule: dz/dt = z_x dx/dt + z_y dy/dt, with z_x = 2xy, z_y = x², dx/dt = 2t, dy/dt = 3t².
Step 2: substitute x = t², y = t³: z_x = 2t²t³ = 2t⁵ and z_y = t⁴.
Step 3: dz/dt = (2t⁵)(2t) + (t⁴)(3t²) = 4t⁶ + 3t⁶ = **7t⁶**.
Check: z = x²y = (t²)²t³ = t⁷, so dz/dt = 7t⁶ ✓.
(c) Step 1: along the x-axis (y = 0): (x² - 0)/(x² + 0) = 1, so the limit along this path is 1.
Step 2: along the y-axis (x = 0): (0 - y²)/(0 + y²) = -1, so the limit is -1.
Step 3: the two path limits differ, so **the limit does not exist**.

**Q2.** f = x² + 3xy - y².
(a) Step 1: f_x = 2x + 3y and f_y = 3x - 2y.
Step 2: at (1, 2): f_x = 2 + 6 = 8, f_y = 3 - 4 = -1. **∇f = (8, -1)**.
(b) Step 1: unit vector u = (3, 4)/|(3, 4)| = (3, 4)/5.
Step 2: D_u f = ∇f · u = (8)(3/5) + (-1)(4/5) = (24 - 4)/5 = 20/5 = **4**.
(c) Step 1: the maximum rate of increase is |∇f| in the direction of ∇f.
Step 2: |∇f| = √(64 + 1) = √65. **Direction (8, -1), rate √65 ≈ 8.06**.
(d) Step 1: z = x² + y² at (1, 2): z = 1 + 4 = 5; z_x = 2x = 2; z_y = 2y = 4.
Step 2: tangent plane: z = 5 + 2(x - 1) + 4(y - 2) = 2x + 4y - 5.
Step 3: estimate 1.02² + 1.97² at (1.02, 1.97): dx = 0.02, dy = -0.03, so the plane gives 5 + 2(0.02) + 4(-0.03) = 5 + 0.04 - 0.12 = **4.92**.
Check: exact value 1.0404 + 3.8809 = 4.9213 ✓.

**Q3.**
(a) f = x³ + y³ - 3xy.
Step 1: f_x = 3x² - 3y = 0 gives y = x². f_y = 3y² - 3x = 0 gives x = y².
Step 2: substitute y = x² into x = y²: x = x⁴, so x⁴ - x = x(x³ - 1) = 0, giving x = 0 or x = 1. Then y = 0 or y = 1. **Critical points (0, 0) and (1, 1)**.
Step 3 (Hessian): f_xx = 6x, f_yy = 6y, f_xy = -3. D = f_xx f_yy - f_xy² = 36xy - 9.
Step 4: at (0, 0): D = -9 < 0, so a **saddle point**.
Step 5: at (1, 1): D = 36 - 9 = 27 > 0 and f_xx = 6 > 0, so a **local minimum**, with f(1, 1) = 1 + 1 - 3 = **-1**.
(b) Maximise f = xy subject to g = x² + y² = 8.
Step 1: ∇f = λ∇g: (y, x) = λ(2x, 2y), so y = 2λx and x = 2λy.
Step 2: substitute y = 2λx into x = 2λy: x = 4λ²x, so (for x ≠ 0) λ² = 1/4 and λ = ±1/2. Hence y = ±x.
Step 3: constraint: x² + x² = 8, so x² = 4 and x = ±2.
Step 4: points with y = x: (2, 2), (-2, -2), xy = 4 (**maximum**); points with y = -x: (2, -2), (-2, 2), xy = -4 (**minimum**).
(c) Step 1: maximise V = xyz subject to surface area 2(xy + yz + zx) = 24, i.e. xy + yz + zx = 12.
Step 2: Lagrange conditions: yz = λ(y + z), xz = λ(x + z), xy = λ(x + y). Subtracting pairs shows x = y = z.
Step 3: 3x² = 12, so x² = 4 and x = 2.
**A cube of side 2, volume V = 8.**

**Q4.**
(a) Step 1: inner integral over y: ∫₀¹ (x + 2y) dy = [xy + y²]₀¹ = x + 1.
Step 2: outer: ∫₀² (x + 1) dx = [x²/2 + x]₀² = 2 + 2 = **4**.
(b) Step 1: the curves y = x² and y = x meet at x = 0 and x = 1; y = x is above for 0 < x < 1.
Step 2: inner: ∫ₓ² ˣ xy dy = x[y²/2] from x² to x = x(x² - x⁴)/2 = (x³ - x⁵)/2.
Step 3: outer: ∫₀¹ (x³ - x⁵)/2 dx = (1/2)(1/4 - 1/6) = (1/2)(1/12) = **1/24**.
(c) Step 1: the region is 0 ≤ x ≤ 1, x ≤ y ≤ 1, i.e. 0 ≤ x ≤ y ≤ 1. sin(y²) has no elementary antiderivative in y, so reverse the order.
Step 2: ∫₀¹ ∫₀ʸ sin(y²) dx dy = ∫₀¹ y sin(y²) dy (inner integral over x gives y).
Step 3: let u = y², du = 2y dy: (1/2) ∫₀¹ sin u du = (1/2)[-cos u]₀¹ = (1/2)(1 - cos 1).
Step 4: cos 1 = 0.5403, so the value is **0.2298**.
(d) Step 1: polar coordinates: x² + y² = r², dA = r dr dθ, disc 0 ≤ r ≤ 2, 0 ≤ θ ≤ 2π.
Step 2: ∬ e^(-r²) r dr dθ = ∫₀^(2π) dθ ∫₀² e^(-r²) r dr = 2π · [-e^(-r²)/2]₀² = 2π · (1 - e^(-4))/2 = π(1 - e^(-4)).
Step 3: e^(-4) = 0.0183, so the value is **π(0.9817) ≈ 3.084**.
Step 4 (deduction): as the radius → ∞ the integral → π. The same integral over the whole plane equals ∫∫ e^(-x²) e^(-y²) dx dy = (∫ e^(-x²) dx)², so (∫ e^(-x²) dx)² = π and **∫₋∞^∞ e^(-x²) dx = √π**.
(e) Step 1: A = ∬ dA = ∫₀^(2π) ∫₀^(1+cos θ) r dr dθ.
Step 2: inner = (1 + cos θ)²/2; outer: (1/2) ∫₀^(2π) (1 + 2 cos θ + cos²θ) dθ = (1/2)(2π + 0 + π).
Step 3: **A = 3π/2 ≈ 4.71**.

**Q5.**
(a) Cylindrical coordinates: z = r² to z = 4; the paraboloid meets z = 4 at r = 2.
Step 1: V = ∫₀^(2π) ∫₀² ∫_{r²}⁴ r dz dr dθ.
Step 2: inner: ∫ dz from r² to 4 = 4 - r²; so ∫₀² (4 - r²) r dr = [2r² - r⁴/4]₀² = 8 - 4 = 4.
Step 3: V = 2π · 4 = **8π ≈ 25.13**.
(b) Step 1: ∭ z dV = ∫₀^(2π) ∫₀² r [z²/2]_{r²}⁴ dr dθ = 2π ∫₀² r (16 - r⁴)/2 dr.
Step 2: ∫₀² (16r - r⁵) dr = [8r² - r⁶/6]₀² = 32 - 64/6 = 32 - 10.667 = 64/3.
Step 3: ∭ z dV = 2π · (1/2) · (64/3) = 64π/3.
Step 4: z̄ = (64π/3)/(8π) = **8/3 ≈ 2.67**.
(c) Step 1: V = ∫₀^(2π) ∫₀^π ∫₀ᵃ ρ² sin φ dρ dφ dθ.
Step 2: ∫₀ᵃ ρ² dρ = a³/3; ∫₀^π sin φ dφ = 2; ∫₀^(2π) dθ = 2π.
Step 3: V = (a³/3)(2)(2π) = **4πa³/3**.
(d) Step 1: mass = ∭ (1 + ρ) ρ² sin φ dρ dφ dθ over ρ in [0, 1].
Step 2: angular parts give 2 · 2π = 4π; radial part ∫₀¹ (ρ² + ρ³) dρ = 1/3 + 1/4 = 7/12.
Step 3: m = 4π · 7/12 = **7π/3 ≈ 7.33**.

**Q6.**
(a) F = (x²y, yz, xz²).
Step 1: div F = ∂/∂x(x²y) + ∂/∂y(yz) + ∂/∂z(xz²) = 2xy + z + 2xz. **div F = 2xy + z + 2xz**.
Step 2: curl F = (R_y - Q_z, P_z - R_x, Q_x - P_y) with P = x²y, Q = yz, R = xz²: R_y = 0, Q_z = y; P_z = 0, R_x = z²; Q_x = 0, P_y = x².
Step 3: **curl F = (0 - y, 0 - z², 0 - x²) = (-y, -z², -x²)**.
(b) Step 1: F = (P, Q) = (y, x): P_y = 1 and Q_x = 1, equal on the whole plane, so F is conservative.
Step 2: find f with f_x = y: f = xy + g(y); f_y = x + g'(y) = x gives g' = 0. Potential **f = xy**.
Step 3: work = f(2, 3) - f(0, 0) = 6 - 0 = **6**.
(c) Step 1: Green's theorem: ∮ P dx + Q dy = ∬ (Q_x - P_y) dA. Here P = -y, Q = x: Q_x - P_y = 1 - (-1) = 2.
Step 2: ∮ = 2 · Area = 2 · π(3)² = **18π**.
Step 3 (ellipse area): choose P = -y/2, Q = x/2 so Q_x - P_y = 1 and Area = ∮ (x dy - y dx)/2. Parametrise x = a cos t, y = b sin t: x dy - y dx = (a cos t)(b cos t) dt - (b sin t)(-a sin t) dt = ab dt.
Step 4: Area = (1/2) ∫₀^(2π) ab dt = **πab**.
(d) Step 1: div F = 1 + 1 + 1 = 3.
Step 2: divergence theorem: flux = ∭ div F dV = 3 · (volume of sphere radius 2) = 3 · (4/3)π(2)³ = 3 · 32π/3 = **32π**.
(e) Step 1: F = (-y, x, 0): curl F = (0, 0, Q_x - P_y) = (0, 0, 1 - (-1)) = (0, 0, 2).
Step 2: Stokes: circulation = ∬ curl F · n dS over the unit disk with n = k: 2 · Area = 2π.
Step 3 (direct check): r(t) = (cos t, sin t, 0), r' = (-sin t, cos t, 0), F · r' = sin²t + cos²t = 1, and ∫₀^(2π) 1 dt = **2π** ✓.

**Q7.** Let u = x + y and v = x - y.
Step 1: solve for x and y: x = (u + v)/2 and y = (u - v)/2.
Step 2: Jacobian ∂(x, y)/∂(u, v) = (∂x/∂u)(∂y/∂v) - (∂x/∂v)(∂y/∂u) = (1/2)(-1/2) - (1/2)(1/2) = -1/4 - 1/4 = -1/2. Use the absolute value: dA = (1/2) du dv.
Step 3: the bounding lines become u = 1, u = 3, v = 0, v = 2, so D maps to the rectangle 1 ≤ u ≤ 3, 0 ≤ v ≤ 2.
Step 4: ∬ (x + y)²(x - y) dA = ∫₁³ ∫₀² u² v (1/2) dv du = (1/2) [∫₁³ u² du][∫₀² v dv].
Step 5: ∫₁³ u² du = (27 - 1)/3 = 26/3 and ∫₀² v dv = 2.
Step 6: value = (1/2)(26/3)(2) = **26/3 ≈ 8.67**. (Marks: 2 for the Jacobian, 2 for the transformed region, 4 for the integral.)

---
# Assignment 3: Differential Equations and Laplace Transforms (90 marks)

## Questions

**Q1. (14 marks)** Solve. (a) dy/dx = x y^2, y(0) = 1; state where the solution exists [3]. (b) y' + 2y = e^(-x), y(0) = 3 [3]. (c) (2xy + 3) dx + (x^2 + 4y) dy = 0 [3]. (d) y' + y = y^2 (a Bernoulli equation; find the general solution with v = 1/y) [3]. (e) Use Euler's method with h = 0.1 for y' = x + y, y(0) = 1 to estimate y(0.3), and compare with the exact solution [2].

**Q2. (14 marks)** (a) A 100 L tank initially holds 10 kg of salt dissolved in water. Brine of concentration 0.5 kg/L flows in at 4 L/min and the well-mixed solution flows out at 4 L/min. Find S(t) and the time at which S = 25 kg [5]. (b) Coffee at 90 °C is placed in a 20 °C room and cools to 70 °C in 5 minutes. When does it reach 40 °C? [4] (c) A capacitor C = 100 μF charges through R = 10 kΩ from a 12 V source. Find v_C(t) and the time to reach 90 percent of 12 V [3]. (d) Solve the logistic equation P' = 0.5P(1 - P/100), P(0) = 10, and find when P = 50 [2].

**Q3. (18 marks)** (a) Solve y'' + 4y' + 3y = 0; y'' + 2y' + y = 0; y'' + 4y' + 13y = 0 [6]. (b) Solve y'' - y' - 2y = 4x^2 by undetermined coefficients [4]. (c) Solve y'' + y = sec x by variation of parameters [4]. (d) Solve y'' + 4y = cos 2t, y(0) = y'(0) = 0 and explain the physical phenomenon [4].

**Q4. (10 marks)** A mass-spring-damper has m = 1 kg, c = 2 N s/m, k = 5 N/m, with y(0) = 1 and y'(0) = 0 (free vibration). (a) Find the solution and classify the damping [4]. (b) Find the damped frequency, the damping ratio, the logarithmic decrement and the time for the amplitude to fall below 1 percent of its initial value [4]. (c) An RLC circuit has L = 1 H, R = 2 Ω and C = 0.2 F. Show that it is analogous and find its natural frequency [2].

**Q5. (20 marks)** Laplace transforms. (a) Find L{t^3 e^(2t)} and L{t sin 2t} [4]. (b) Find the inverse transforms of (3s + 1)/(s^2 + 2s + 5), 1/(s^2(s + 3)) and 1/(s^2(s^2 + 1)) [6]. (c) Solve y'' - 3y' + 2y = 4e^(3t), y(0) = 1, y'(0) = 0 [4]. (d) Solve y' + y = u(t - 2), y(0) = 0 and y'' + 4y = δ(t - π), y(0) = y'(0) = 0 [4]. (e) Find the transfer function of y'' + 2y' + 5y = u(t) and decide stability [2].

**Q6. (14 marks)** (a) Solve x' = A x with A = [[1, 2],[2, 1]], x(0) = (2, 0) and classify the origin [6]. (b) Convert y'' + 3y' + 2y = 0 to a first-order system and find the eigenvalues [3]. (c) Classify the origin for A = [[0, 1],[-4, 0]], A = [[-1, 2],[-2, -1]] and A = [[1, 0],[0, -2]] [3]. (d) What is the interpretation of the eigenvalues for a stable control system? [2]

## Solutions and Marking Guide

**Q1.**
(a) dy/dx = x y², y(0) = 1.
Step 1: separate variables: dy/y² = x dx.
Step 2: integrate: -1/y = x²/2 + C.
Step 3: y(0) = 1 gives -1 = 0 + C, so C = -1.
Step 4: -1/y = x²/2 - 1, so y = 1/(1 - x²/2) = **2/(2 - x²)**.
Step 5: the solution is defined while 2 - x² ≠ 0 and contains x = 0, so it exists on **-√2 < x < √2** (it blows up at x = ±√2). (The constant solution y = 0 was lost in the division but does not satisfy y(0) = 1.)
(b) y' + 2y = e^(-x), y(0) = 3 (linear first order).
Step 1: integrating factor μ = e^(∫2 dx) = e^(2x).
Step 2: (e^(2x) y)' = e^(2x) e^(-x) = eˣ.
Step 3: integrate: e^(2x) y = eˣ + C, so y = e^(-x) + C e^(-2x).
Step 4: y(0) = 1 + C = 3 gives C = 2.
**y = e^(-x) + 2e^(-2x)**.
(c) (2xy + 3) dx + (x² + 4y) dy = 0.
Step 1: M = 2xy + 3, N = x² + 4y. M_y = 2x and N_x = 2x, equal, so the equation is exact.
Step 2: ψ = ∫ M dx = x²y + 3x + g(y).
Step 3: ψ_y = x² + g'(y) must equal N = x² + 4y, so g'(y) = 4y and g = 2y².
Step 4: **x²y + 3x + 2y² = C**.
(d) y' + y = y² (Bernoulli).
Step 1: let v = 1/y, so v' = -y'/y².
Step 2: y' = y² - y, so v' = -(y² - y)/y² = -1 + 1/y = v - 1.
Step 3: v' - v = -1: integrating factor e^(-x): (e^(-x) v)' = -e^(-x), so e^(-x) v = e^(-x) + C and v = 1 + C eˣ.
Step 4: **y = 1/(1 + C eˣ)** (plus the constant solution y = 0).
Check: y' = -C eˣ/(1 + C eˣ)², and y² - y = [1 - (1 + C eˣ)]/(1 + C eˣ)² = -C eˣ/(1 + C eˣ)² ✓.
(e) Euler: yₙ₊₁ = yₙ + h f(xₙ, yₙ) with f = x + y, h = 0.1.
Step 1: y₁ = 1 + 0.1(0 + 1) = 1.1 (at x = 0.1).
Step 2: y₂ = 1.1 + 0.1(0.1 + 1.1) = 1.1 + 0.12 = 1.22 (at x = 0.2).
Step 3: y₃ = 1.22 + 0.1(0.2 + 1.22) = 1.22 + 0.142 = **1.362** (at x = 0.3).
Step 4 (exact): the linear equation y' - y = x has solution y = 2eˣ - x - 1. y(0.3) = 2(1.349859) - 0.3 - 1 = **1.3997**.
Step 5: error = 1.3997 - 1.362 = 0.038, from Euler's first-order accuracy (halving h roughly halves the error).

**Q2.**
(a) Step 1: rate in = 0.5 kg/L × 4 L/min = 2 kg/min. Rate out = (S/100 kg/L) × 4 L/min = 0.04 S.
Step 2: S' = 2 - 0.04 S, S(0) = 10. The equilibrium is S = 2/0.04 = 50.
Step 3: solution S = 50 + (10 - 50) e^(-0.04t) = **50 - 40 e^(-0.04t)**.
Step 4: S = 25: 40 e^(-0.04t) = 25, e^(-0.04t) = 0.625, so t = -ln(0.625)/0.04 = 0.4700/0.04.
**t ≈ 11.75 min**. (2 marks model, 2 solution, 1 time.)
(b) Newton's law of cooling: T(t) = 20 + 70 e^(-kt).
Step 1: at t = 5, T = 70: 70 e^(-5k) = 50, so e^(-5k) = 5/7.
Step 2: k = (1/5) ln(7/5) = (1/5)(0.33647) = **0.0673 min⁻¹**.
Step 3: T = 40: 70 e^(-kt) = 20, so e^(-kt) = 2/7 and t = ln(7/2)/k = 1.2528/0.0673.
**t ≈ 18.6 min**.
(c) Step 1: time constant τ = RC = (10,000 Ω)(100 × 10⁻⁶ F) = 1 s.
Step 2: v_C(t) = 12(1 - e^(-t/τ)) = 12(1 - e^(-t)) V.
Step 3: 90 percent of 12 V: 1 - e^(-t) = 0.9, e^(-t) = 0.1, t = ln 10.
**t ≈ 2.30 s** (2.3 time constants).
(d) Step 1: logistic solution P(t) = K/(1 + ((K - P₀)/P₀) e^(-rt)) with K = 100, P₀ = 10, r = 0.5: P = 100/(1 + 9e^(-0.5t)).
Step 2: P = 50: 1 + 9e^(-0.5t) = 2, so e^(-0.5t) = 1/9 and t = 2 ln 9.
**t ≈ 4.39**.

**Q3.**
(a) (i) Step 1: characteristic equation λ² + 4λ + 3 = (λ + 1)(λ + 3) = 0, so λ = -1, -3. **y = c₁e^(-t) + c₂e^(-3t)**.
(ii) λ² + 2λ + 1 = (λ + 1)² = 0: repeated root -1. **y = (c₁ + c₂t)e^(-t)**.
(iii) λ² + 4λ + 13 = 0: λ = [-4 ± √(16 - 52)]/2 = -2 ± 3i. **y = e^(-2t)(c₁ cos 3t + c₂ sin 3t)**.
(b) y'' - y' - 2y = 4x².
Step 1: homogeneous: λ² - λ - 2 = (λ - 2)(λ + 1) = 0, so y_h = c₁e^(2x) + c₂e^(-x).
Step 2: try y_p = Ax² + Bx + C; y_p' = 2Ax + B; y_p'' = 2A.
Step 3: y_p'' - y_p' - 2y_p = 2A - (2Ax + B) - 2(Ax² + Bx + C) = -2Ax² + (-2A - 2B)x + (2A - B - 2C).
Step 4: match to 4x²: x²: -2A = 4, A = -2; x: -2A - 2B = 0, so B = -A = 2; constant: 2A - B - 2C = 0, so -4 - 2 - 2C = 0, C = -3.
**y = c₁e^(2x) + c₂e^(-x) - 2x² + 2x - 3**.
(c) y'' + y = sec x. Step 1: y₁ = cos x, y₂ = sin x, W = y₁y₂' - y₂y₁' = cos²x + sin²x = 1.
Step 2: y_p = -y₁ ∫ y₂ g/W dx + y₂ ∫ y₁ g/W dx = -cos x ∫ sin x sec x dx + sin x ∫ cos x sec x dx.
Step 3: sin x sec x = tan x, ∫ tan x dx = -ln|cos x|; cos x sec x = 1, ∫ 1 dx = x.
Step 4: y_p = -cos x(-ln|cos x|) + sin x · x = cos x ln|cos x| + x sin x.
**y = c₁ cos x + c₂ sin x + cos x ln|cos x| + x sin x**.
(d) y'' + 4y = cos 2t, y(0) = y'(0) = 0.
Step 1: y_h = c₁ cos 2t + c₂ sin 2t. The forcing cos 2t duplicates y_h, so try y_p = t(A cos 2t + B sin 2t).
Step 2: y_p'' = 2(-2A sin 2t + 2B cos 2t) + t(-4)(A cos 2t + B sin 2t), so y_p'' + 4y_p = -4A sin 2t + 4B cos 2t.
Step 3: match cos 2t: 4B = 1, B = 1/4; sin 2t: -4A = 0, A = 0. y_p = (t/4) sin 2t.
Step 4: y(0) = c₁ = 0. y' = 2c₂ cos 2t + (1/4) sin 2t + (t/2) cos 2t, so y'(0) = 2c₂ = 0, c₂ = 0.
**y = (t/4) sin 2t.** This is **resonance**: forcing at the natural frequency 2 rad/s makes the amplitude t/4 grow linearly without bound (in a real system damping and nonlinearity limit it).

**Q4.**
(a) m y'' + c y' + k y = 0 with m = 1, c = 2, k = 5.
Step 1: λ² + 2λ + 5 = 0, λ = [-2 ± √(4 - 20)]/2 = -1 ± 2i. Complex roots: **underdamped**.
Step 2: y = e^(-t)(c₁ cos 2t + c₂ sin 2t). y(0) = c₁ = 1.
Step 3: y' = e^(-t)[(-c₁ + 2c₂) cos 2t + (-c₂ - 2c₁) sin 2t], so y'(0) = -c₁ + 2c₂ = 0, c₂ = 1/2.
**y = e^(-t)(cos 2t + (1/2) sin 2t)**.
(b) Step 1: damped frequency ω_d = 2 rad/s (the imaginary part), period T_d = 2π/ω_d = π s.
Step 2: natural frequency ω₀ = √(k/m) = √5 = 2.236 rad/s and damping ratio ζ = c/(2√(km)) = 2/(2√5) = **0.447**.
Step 3: logarithmic decrement δ = ln(yₙ/yₙ₊₁) = α T_d = (1)(π) = **3.14**.
Step 4: the envelope is √(c₁² + c₂²) e^(-t) = √(1 + 0.25) e^(-t) = 1.118 e^(-t). Set 1.118 e^(-t) < 0.01: e^(-t) < 0.008944, t > ln(111.8) = **4.72 s**.
(c) Step 1: the RLC equation L q'' + R q' + q/C = V becomes (L = 1, R = 2, C = 0.2) q'' + 2q' + 5q = V, the same coefficients as the mechanical system: L ↔ m, R ↔ c, 1/C ↔ k.
Step 2: natural frequency ω₀ = √(1/(LC)) = √(1/0.2) = √5 = 2.236 rad/s; damped frequency 2 rad/s, ζ = 0.447. The circuit and the mass-spring-damper are identical mathematically.

**Q5.**
(a) Step 1: L{t³e^(2t)}: the shift theorem replaces s by s - 2 in L{t³} = 3!/s⁴. **6/(s - 2)⁴**.
Step 2: L{t sin 2t} = -d/ds L{sin 2t} = -d/ds [2/(s² + 4)] = -2(-1)(2s)/(s² + 4)² = **4s/(s² + 4)²**.
(b) (i) Step 1: complete the square: s² + 2s + 5 = (s + 1)² + 4. Step 2: 3s + 1 = 3(s + 1) - 2. Step 3: (3s + 1)/((s + 1)² + 4) = 3(s + 1)/((s + 1)² + 4) - 2/((s + 1)² + 4) = 3(s + 1)/(...) - 1 · 2/(...). **e^(-t)(3 cos 2t - sin 2t)**.
(ii) Step 1: 1/(s²(s + 3)) = A/s + B/s² + C/(s + 3). Step 2: multiply out: 1 = A s(s + 3) + B(s + 3) + C s². s = 0: 1 = 3B, B = 1/3. s = -3: 1 = 9C, C = 1/9. s² coefficient: 0 = A + C, so A = -1/9. **t/3 - 1/9 + e^(-3t)/9**.
(iii) Step 1: 1/(s²(s² + 1)) = 1/s² - 1/(s² + 1) (since 1/s² - 1/(s² + 1) = 1/(s²(s² + 1))). **t - sin t**.
(c) y'' - 3y' + 2y = 4e^(3t), y(0) = 1, y'(0) = 0.
Step 1: transform: (s²Y - s·1 - 0) - 3(sY - 1) + 2Y = 4/(s - 3).
Step 2: (s² - 3s + 2)Y = s - 3 + 4/(s - 3) = [(s - 3)² + 4]/(s - 3).
Step 3: Y = (s² - 6s + 13)/((s - 1)(s - 2)(s - 3)) (since s² - 3s + 2 = (s - 1)(s - 2)).
Step 4: residues: at s = 1: (1 - 6 + 13)/((1 - 2)(1 - 3)) = 8/2 = 4; at s = 2: (4 - 12 + 13)/((2 - 1)(2 - 3)) = 5/(-1) = -5; at s = 3: (9 - 18 + 13)/((3 - 1)(3 - 2)) = 4/2 = 2.
**y = 4eᵗ - 5e^(2t) + 2e^(3t)**. Check: y(0) = 4 - 5 + 2 = 1 ✓; y'(0) = 4 - 10 + 6 = 0 ✓.
(d) (i) y' + y = u(t - 2), y(0) = 0. Step 1: (s + 1)Y = e^(-2s)/s. Step 2: Y = e^(-2s)/(s(s + 1)) = e^(-2s)[1/s - 1/(s + 1)]. Step 3: **y = (1 - e^(-(t - 2))) u(t - 2)**.
(ii) y'' + 4y = δ(t - π). Step 1: (s² + 4)Y = e^(-πs). Step 2: Y = e^(-πs)/(s² + 4), and L⁻¹{1/(s² + 4)} = (1/2) sin 2t. Step 3: **y = (1/2) sin 2(t - π) u(t - π) = (1/2) sin 2t · u(t - π)** (sin 2(t - π) = sin 2t).
(e) Step 1: with zero initial conditions (s² + 2s + 5)Y = 1/s for u(t); the transfer function is Y/U with U = 1/s: **G(s) = 1/(s² + 2s + 5)**.
Step 2: poles: s = -1 ± 2i, real parts -1 < 0, so the system is **stable** (decaying oscillation).

**Q6.**
(a) A = [[1, 2],[2, 1]].
Step 1: characteristic equation: (1 - λ)² - 4 = 0, so 1 - λ = ±2, λ = -1 or 3.
Step 2: eigenvectors: λ = 3: (A - 3I)v = 0 gives -2v₁ + 2v₂ = 0, v = (1, 1). λ = -1: 2v₁ + 2v₂ = 0, v = (1, -1).
Step 3: x(t) = c₁e^(3t)(1, 1) + c₂e^(-t)(1, -1). At t = 0: c₁ + c₂ = 2, c₁ - c₂ = 0, so c₁ = c₂ = 1.
**x(t) = (e^(3t) + e^(-t), e^(3t) - e^(-t))**.
Step 4: eigenvalues of opposite signs: the origin is a **saddle** (unstable).
(b) Step 1: let x₁ = y and x₂ = y', then x₁' = x₂ and x₂' = y'' = -3y' - 2y = -2x₁ - 3x₂, so A = [[0, 1],[-2, -3]].
Step 2: characteristic equation λ² + 3λ + 2 = (λ + 1)(λ + 2) = 0. **λ = -1, -2** (a stable node).
(c) A = [[0, 1],[-4, 0]]: λ² + 4 = 0, λ = ±2i, purely imaginary: **centre** (closed orbits, neutrally stable).
A = [[-1, 2],[-2, -1]]: (−1 − λ)² + 4 = 0, λ = -1 ± 2i: **stable spiral**.
A = [[1, 0],[0, -2]]: λ = 1, -2 (opposite signs): **saddle**.
(d) For asymptotic stability all eigenvalues (poles) must have negative real parts. The real part sets the decay rate, the imaginary part the oscillation frequency; poles close to the imaginary axis give slow, lightly damped responses.