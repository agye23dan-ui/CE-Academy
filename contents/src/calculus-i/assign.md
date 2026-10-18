# Calculus I: Assignments with Worked Solutions

Work each assignment without looking at the solutions, then mark yourself against the guide. Marks are shown per question. Show every step: in a university marking scheme, method marks are awarded even when the final answer is wrong.

# Assignment 1: Limits, Continuity and the Derivative (50 marks)

## Questions

**Q1. (12 marks)** Evaluate each limit, or state that it does not exist.
(a) lim(x→3) (x^2 - 9)/(x - 3)  [2]
(b) lim(x→0) (sqrt(1 + x) - 1)/x  [2]
(c) lim(x→∞) (2x^3 - x)/(5x^3 + 7)  [2]
(d) lim(x→0) sin(3x)/sin(5x)  [2]
(e) lim(x→0) (1 - cos x)/x^2  [2]
(f) lim(x→0) x^2 cos(1/x)  [2]

**Q2. (6 marks)** Using the epsilon-delta definition, prove (a) lim(x→2) (3x - 1) = 5 [2] and (b) lim(x→1) x^2 = 1 [4].

**Q3. (6 marks)** (a) Find k so that f is continuous at x = 1, where f(x) = (x^2 - 1)/(x - 1) for x ≠ 1 and f(1) = k [2]. (b) Find a and b so that g is continuous everywhere, where g(x) = ax + 1 for x < 2, g(2) = 3, and g(x) = x^2 - b for x > 2 [4].

**Q4. (4 marks)** Use the Intermediate Value Theorem to show that (a) cos x = x has a solution in (0, 1) [2], and (b) x^5 + x + 1 = 0 has a real root in (-1, 0) [2].

**Q5. (6 marks)** From the limit definition of the derivative, find f'(x) for (a) f(x) = x^3 [3] and (b) f(x) = 1/x [3].

**Q6. (6 marks)** (a) Is f(x) = |x - 2| differentiable at x = 2? Justify [2]. (b) Let f(x) = x^2 sin(1/x) for x ≠ 0 and f(0) = 0. Show f is differentiable at 0, find f'(0), and show f' is not continuous at 0 [4].

**Q7. (4 marks)** (a) Find the tangent line to y = x e^x at x = 1 [2]. (b) Find dy/dx at (3, 3) on the folium x^3 + y^3 = 6xy [2].

**Q8. (6 marks)** Differentiate, simplifying where sensible.
(a) y = (3x^2 + 1)^5 sin 2x  [2]
(b) y = x^(sin x)  [2]
(c) y = arctan(sqrt(x))  [2]

## Solutions and Marking Guide

**Q1.**
(a) Direct substitution gives 0/0, so factor first.
Step 1: x² - 9 = (x - 3)(x + 3).
Step 2: cancel the common factor (x - 3), valid because x ≠ 3 in a limit: (x² - 9)/(x - 3) = x + 3.
Step 3: let x → 3: 3 + 3 = **6**.
(b) Direct substitution gives 0/0, so multiply by the conjugate.
Step 1: (√(1 + x) - 1)/x × (√(1 + x) + 1)/(√(1 + x) + 1) = ((1 + x) - 1)/(x(√(1 + x) + 1)).
Step 2: simplify the numerator: (1 + x) - 1 = x, so the fraction is x/(x(√(1 + x) + 1)) = 1/(√(1 + x) + 1).
Step 3: let x → 0: 1/(√1 + 1) = 1/2. Answer **1/2**.
(c) The highest power of x is x³ (a rational function at infinity).
Step 1: divide numerator and denominator by x³: (2x³ - x)/x³ = 2 - 1/x², and (5x³ + 7)/x³ = 5 + 7/x³.
Step 2: as x → ∞, 1/x² → 0 and 7/x³ → 0.
Step 3: the limit is 2/5. Answer **2/5**.
(d) Use lim sin(u)/u = 1 as u → 0.
Step 1: write sin(3x)/sin(5x) = [sin(3x)/(3x)] · [5x/sin(5x)] · (3x/5x). The factor 3x/5x = 3/5.
Step 2: as x → 0, sin(3x)/(3x) → 1 and 5x/sin(5x) → 1.
Step 3: product = 1 · 1 · 3/5. Answer **3/5**.
(e) Direct substitution gives 0/0. Multiply top and bottom by (1 + cos x).
Step 1: (1 - cos x)(1 + cos x) = 1 - cos² x = sin² x.
Step 2: the fraction becomes sin² x/(x²(1 + cos x)) = [sin x/x]² · 1/(1 + cos x).
Step 3: as x → 0, [sin x/x]² → 1 and 1/(1 + cos x) → 1/(1 + 1) = 1/2. Answer **1/2**.
(f) cos(1/x) has no limit, so use the squeeze theorem.
Step 1: -1 ≤ cos(1/x) ≤ 1 for every x ≠ 0.
Step 2: multiply by x² ≥ 0 (the inequality direction is kept): -x² ≤ x² cos(1/x) ≤ x².
Step 3: both -x² and x² → 0 as x → 0, so the middle term is squeezed to **0**.
(1 mark for correct method, 1 for correct value in each.)

**Q2.**
(a) Goal: for every ε > 0 find δ > 0 with 0 < |x - 2| < δ ⟹ |(3x - 1) - 5| < ε.
Step 1 (scratch work): |(3x - 1) - 5| = |3x - 6| = 3|x - 2|. We need 3|x - 2| < ε, so |x - 2| < ε/3.
Step 2: choose δ = ε/3.
Step 3 (verify): if 0 < |x - 2| < δ then |(3x - 1) - 5| = 3|x - 2| < 3δ = 3(ε/3) = ε. ∎
(1 mark choice of δ, 1 mark verification.)
(b) Goal: for every ε > 0 find δ with 0 < |x - 1| < δ ⟹ |x² - 1| < ε.
Step 1: factor: |x² - 1| = |x - 1||x + 1|.
Step 2: bound |x + 1|. If δ ≤ 1 then |x - 1| < 1, so 0 < x < 2 and therefore |x + 1| < 3.
Step 3: then |x² - 1| < 3|x - 1|. We need 3|x - 1| ≤ ε, i.e. |x - 1| ≤ ε/3.
Step 4: choose δ = min(1, ε/3), which satisfies both requirements.
Step 5 (verify): if 0 < |x - 1| < δ, then |x² - 1| = |x - 1||x + 1| < (ε/3)(3) = ε. ∎
(1 mark factoring, 1 mark bounding, 1 mark δ, 1 mark conclusion.)

**Q3.**
(a) For continuity at 1 we need lim(x→1) f(x) = f(1) = k.
Step 1: for x ≠ 1, f(x) = (x² - 1)/(x - 1) = (x - 1)(x + 1)/(x - 1) = x + 1.
Step 2: lim(x→1) (x + 1) = 1 + 1 = 2.
Step 3: set k equal to this limit: **k = 2**.
(b) Continuity at x = 2 needs left limit = g(2) = right limit. (For x ≠ 2 each piece is a polynomial, hence continuous.)
Step 1 (left): lim(x→2⁻) (ax + 1) = 2a + 1. Set 2a + 1 = g(2) = 3, so 2a = 2 and **a = 1**.
Step 2 (right): lim(x→2⁺) (x² - b) = 4 - b. Set 4 - b = g(2) = 3, so **b = 1**.
Step 3 (check): left limit = 2(1) + 1 = 3, right limit = 4 - 1 = 3, g(2) = 3 ✓.

**Q4.**
(a) Step 1: let f(x) = cos x - x, which is continuous on [0, 1].
Step 2: f(0) = cos 0 - 0 = 1 - 0 = 1 > 0.
Step 3: f(1) = cos 1 - 1 = 0.5403 - 1 = -0.4597 < 0 (angle in radians).
Step 4: f changes sign, so by the IVT there is a c in (0, 1) with f(c) = 0, i.e. cos c = c. ∎
(b) Step 1: let f(x) = x⁵ + x + 1, a polynomial, hence continuous.
Step 2: f(-1) = (-1)⁵ + (-1) + 1 = -1 - 1 + 1 = -1 < 0.
Step 3: f(0) = 0 + 0 + 1 = 1 > 0.
Step 4: by the IVT there is a root in (-1, 0). ∎

**Q5.** Use f'(x) = lim(h→0) [f(x + h) - f(x)]/h.
(a) f(x) = x³.
Step 1: expand (x + h)³ = x³ + 3x²h + 3xh² + h³.
Step 2: f(x + h) - f(x) = 3x²h + 3xh² + h³.
Step 3: divide by h: 3x² + 3xh + h².
Step 4: let h → 0: **f'(x) = 3x²**.
(b) f(x) = 1/x.
Step 1: 1/(x + h) - 1/x = [x - (x + h)]/[x(x + h)] = -h/[x(x + h)].
Step 2: divide by h: -1/[x(x + h)].
Step 3: let h → 0: **f'(x) = -1/x²**.

**Q6.**
(a) Step 1: right-hand difference quotient at 2: for h > 0, |h|/h = 1.
Step 2: left-hand difference quotient: for h < 0, |h|/h = -1.
Step 3: the one-sided limits (+1 and -1) differ, so the limit does not exist: **not differentiable** at 2 (a corner).
(b) Step 1: f'(0) = lim(h→0) [h² sin(1/h) - 0]/h = lim h sin(1/h).
Step 2: -|h| ≤ h sin(1/h) ≤ |h|, and |h| → 0, so by the squeeze theorem the limit is 0. Hence f is differentiable at 0 with **f'(0) = 0**.
Step 3: for x ≠ 0 the product and chain rules give f'(x) = 2x sin(1/x) + x² cos(1/x)·(-1/x²) = 2x sin(1/x) - cos(1/x).
Step 4: as x → 0, 2x sin(1/x) → 0 but cos(1/x) keeps oscillating between -1 and 1, so lim(x→0) f'(x) does not exist.
Step 5: since lim f'(x) ≠ f'(0), f' is not continuous at 0.

**Q7.**
(a) y = x eˣ.
Step 1: product rule: y' = 1·eˣ + x·eˣ = eˣ(1 + x).
Step 2: at x = 1: slope m = e¹(1 + 1) = 2e; the point is y(1) = 1·e = e.
Step 3: point-slope form: y - e = 2e(x - 1) = 2ex - 2e.
Step 4: **y = 2e x - e**.
(b) Differentiate x³ + y³ = 6xy implicitly with respect to x.
Step 1: 3x² + 3y² y' = 6y + 6x y' (product rule on 6xy).
Step 2: substitute (3, 3): 3(9) + 3(9)y' = 6(3) + 6(3)y', i.e. 27 + 27y' = 18 + 18y'.
Step 3: collect: 27y' - 18y' = 18 - 27, so 9y' = -9.
Step 4: **y' = -1**.

**Q8.**
(a) y = (3x² + 1)⁵ sin 2x. Product rule with the chain rule.
Step 1: d/dx (3x² + 1)⁵ = 5(3x² + 1)⁴ · 6x = 30x(3x² + 1)⁴.
Step 2: d/dx sin 2x = 2 cos 2x.
Step 3: y' = 30x(3x² + 1)⁴ sin 2x + (3x² + 1)⁵ · 2 cos 2x.
Step 4: factor (3x² + 1)⁴: **y' = (3x² + 1)⁴ [30x sin 2x + 2(3x² + 1) cos 2x]**.
(b) y = x^(sin x). Use logarithmic differentiation.
Step 1: ln y = sin x · ln x.
Step 2: differentiate both sides: y'/y = cos x · ln x + sin x · (1/x).
Step 3: multiply by y: **y' = x^(sin x) (cos x ln x + sin x / x)**.
(c) y = arctan(√x).
Step 1: d/du arctan u = 1/(1 + u²), with u = √x so u² = x.
Step 2: du/dx = 1/(2√x).
Step 3: **y' = 1/(1 + x) · 1/(2√x) = 1/(2√x (1 + x))**.

---
# Assignment 2: Applications of Differentiation (60 marks)

## Questions

**Q1. (5 marks)** A spherical balloon is inflated so its volume grows at 100 cm^3/s. How fast is the radius increasing when the radius is 10 cm?

**Q2. (6 marks)** Water is poured at 2 m^3/min into an inverted cone with height 10 m and top radius 4 m. How fast is the water level rising when the depth is 5 m?

**Q3. (5 marks)** A car travels north at 60 km/h and a second car travels east at 80 km/h, both away from an intersection. When the first is 4 km and the second 3 km from the intersection, how fast is the distance between them increasing?

**Q4. (6 marks)** (a) Use the linearisation of f(x) = x^(1/3) at a = 8 to estimate the cube root of 8.06 [3]. (b) Is the estimate an over- or under-estimate? Justify using f'' [3].

**Q5. (8 marks)** (a) Use the Mean Value Theorem to prove |sin a - sin b| ≤ |a - b| for all real a, b [4]. (b) Show that x^3 - 15x + c = 0 has at most one root in [-2, 2] for any constant c [4].

**Q6. (10 marks)** Sketch f(x) = x e^(-x). Find intercepts, intervals of increase and decrease, local extrema, concavity, inflection points and asymptotic behaviour.

**Q7. (8 marks)** (a) An open box is made from a 12 cm by 12 cm square by cutting equal squares from the corners and folding up the sides. Find the cut size that maximises the volume [5]. (b) Find the point on y = sqrt(x) nearest to (4, 0) [3].

**Q8. (10 marks)** Evaluate using L'Hôpital's rule where appropriate.
(a) lim(x→0) (x - sin x)/x^3  [2]
(b) lim(x→∞) (1 + 2/x)^x  [2]
(c) lim(x→0+) (1/x - 1/sin x)  [2]
(d) lim(x→0+) x^(sin x)  [2]
(e) lim(x→∞) x^(1/x)  [2]

**Q9. (2 marks)** Apply Newton's method to f(x) = x^3 - 2 starting at x_0 = 1.5 and give x_1, x_2, x_3 to 4 decimal places.

## Solutions and Marking Guide

**Q1.** Related rates: relate V and r, then differentiate with respect to t.
Step 1: V = (4/3)π r³.
Step 2: differentiate: dV/dt = 4π r² dr/dt.
Step 3: substitute dV/dt = 100 cm³/s and r = 10 cm: 100 = 4π(10)² dr/dt = 400π dr/dt.
Step 4: solve: dr/dt = 100/(400π) = 1/(4π).
**dr/dt ≈ 0.0796 cm/s.** (2 marks relation, 2 marks differentiation, 1 mark value.)

**Q2.** Step 1: similar triangles: r/h = 4/10, so r = 0.4h.
Step 2: V = (1/3)π r² h = (1/3)π(0.4h)² h = (1/3)π(0.16h²)h = (0.16π/3) h³.
Step 3: differentiate: dV/dt = 3 · (0.16π/3) h² dh/dt = 0.16π h² dh/dt.
Step 4: substitute dV/dt = 2 m³/min and h = 5 m: 2 = 0.16π(25) dh/dt = 4π dh/dt.
Step 5: dh/dt = 2/(4π) = 1/(2π).
**dh/dt ≈ 0.159 m/min.**

**Q3.** Step 1: let x = east distance, y = north distance and z the distance between the cars: z² = x² + y².
Step 2: differentiate: 2z dz/dt = 2x dx/dt + 2y dy/dt, so z dz/dt = x dx/dt + y dy/dt.
Step 3: at x = 3 km, y = 4 km: z = √(3² + 4²) = √25 = 5 km. Also dx/dt = 80 km/h and dy/dt = 60 km/h.
Step 4: dz/dt = (x dx/dt + y dy/dt)/z = (3 · 80 + 4 · 60)/5 = (240 + 240)/5 = 480/5.
**dz/dt = 96 km/h.**

**Q4.**
(a) Step 1: f(x) = x^(1/3), so f'(x) = (1/3)x^(-2/3).
Step 2: f(8) = 8^(1/3) = 2 and f'(8) = (1/3)(8)^(-2/3) = (1/3)(1/4) = 1/12.
Step 3: linearisation L(x) = f(8) + f'(8)(x - 8) = 2 + (x - 8)/12.
Step 4: L(8.06) = 2 + 0.06/12 = 2 + 0.005 = **2.005**. (True value 2.004988.)
(b) Step 1: f''(x) = (1/3)(-2/3)x^(-5/3) = -(2/9)x^(-5/3).
Step 2: for x > 0, x^(-5/3) > 0, so f'' < 0: f is concave down.
Step 3: a concave-down curve lies **below** its tangent line, so the tangent-line estimate 2.005 is an **over-estimate** (true value 2.004988 < 2.005).

**Q5.**
(a) Step 1: if a = b both sides are 0, so the claim holds.
Step 2: otherwise sin is continuous and differentiable everywhere, so by the Mean Value Theorem there is a c between a and b with (sin a - sin b)/(a - b) = cos c.
Step 3: take absolute values: |sin a - sin b| = |cos c||a - b|.
Step 4: since |cos c| ≤ 1, |sin a - sin b| ≤ |a - b|. ∎
(b) Step 1: let f(x) = x³ - 15x + c, so f'(x) = 3x² - 15.
Step 2: on [-2, 2], x² ≤ 4, so 3x² ≤ 12 < 15 and f'(x) = 3x² - 15 ≤ 12 - 15 = -3 < 0.
Step 3: suppose there were two roots r₁ < r₂ in [-2, 2]. Then f(r₁) = f(r₂) = 0, and Rolle's theorem gives a ξ in (r₁, r₂) with f'(ξ) = 0.
Step 4: this contradicts f' < 0 everywhere on [-2, 2]. So there is at most one root. ∎

**Q6.** f(x) = x e^(-x).
Step 1 (intercepts): f(x) = 0 only at x = 0 since e^(-x) is never 0; so the only intercept is (0, 0).
Step 2 (first derivative): f'(x) = e^(-x) - x e^(-x) = e^(-x)(1 - x).
Step 3 (monotonicity): e^(-x) > 0, so the sign of f' is the sign of (1 - x): f' > 0 for x < 1 (increasing) and f' < 0 for x > 1 (decreasing).
Step 4 (extremum): the sign change from + to - at x = 1 gives a **local (and global) maximum**, f(1) = 1/e ≈ 0.368.
Step 5 (second derivative): f''(x) = -e^(-x)(1 - x) + e^(-x)(-1) = e^(-x)(x - 1 - 1) = e^(-x)(x - 2).
Step 6 (concavity): f'' < 0 for x < 2 (concave down) and f'' > 0 for x > 2 (concave up), so there is an **inflection point at x = 2**, f(2) = 2/e² ≈ 0.271.
Step 7 (asymptotes): as x → ∞, x/eˣ → 0 (L'Hôpital: 1/eˣ → 0), so y = 0 is a horizontal asymptote; as x → -∞, x → -∞ and e^(-x) → ∞, so f → -∞ (no asymptote).
(2 marks first derivative analysis, 2 marks extremum, 2 marks second derivative, 2 marks asymptotes, 2 marks sketch.)

**Q7.**
(a) Step 1: cut squares of side x, so the base side is 12 - 2x and the height is x: V(x) = x(12 - 2x)² for 0 < x < 6.
Step 2: V'(x) = (12 - 2x)² + x · 2(12 - 2x)(-2) = (12 - 2x)² - 4x(12 - 2x) = (12 - 2x)[(12 - 2x) - 4x] = (12 - 2x)(12 - 6x).
Step 3: V' = 0 at x = 6 (V = 0, a minimum) or x = 2.
Step 4: check x = 2: V(1) = 1 · 10² = 100, V(2) = 2 · 8² = 128, V(3) = 3 · 6² = 108, so V is largest at x = 2 (V' changes from + to -).
**Cut 2 cm squares; maximum volume 128 cm³.**
(b) Step 1: a point on the curve is (x, √x). Its squared distance to (4, 0) is d² = (x - 4)² + (√x)² = (x - 4)² + x.
Step 2: differentiate: d(d²)/dx = 2(x - 4) + 1 = 0, so x = 4 - 1/2 = 3.5.
Step 3: second derivative = 2 > 0, so this is a minimum.
Step 4: y = √3.5 ≈ 1.871 and d = √((3.5 - 4)² + 3.5) = √(0.25 + 3.5) = √3.75 ≈ 1.936.
**Nearest point (3.5, √3.5) ≈ (3.5, 1.871).**

**Q8.**
(a) Step 1: direct substitution gives 0/0. Apply L'Hôpital: (1 - cos x)/(3x²), still 0/0.
Step 2: apply again: sin x/(6x), still 0/0.
Step 3: apply again: cos x/6 → 1/6. Answer **1/6**.
(b) Step 1: the form is 1^∞. Let L = lim x ln(1 + 2/x) = lim ln(1 + 2/x)/(1/x), which is 0/0.
Step 2: L'Hôpital: numerator derivative = (1/(1 + 2/x))(-2/x²); denominator derivative = -1/x². Ratio = 2/(1 + 2/x).
Step 3: as x → ∞, 2/(1 + 0) = 2, so L = 2.
Step 4: the original limit is e^L = **e²**.
(c) Step 1: the form is ∞ - ∞. Combine: 1/x - 1/sin x = (sin x - x)/(x sin x), which is 0/0.
Step 2: L'Hôpital: (cos x - 1)/(sin x + x cos x), still 0/0.
Step 3: L'Hôpital again: -sin x/(cos x + cos x - x sin x) = -sin x/(2 cos x - x sin x).
Step 4: at x = 0: -0/(2 - 0) = 0. Answer **0**.
(d) Step 1: the form is 0⁰. Let y = x^(sin x); ln y = sin x · ln x = (ln x)/(1/sin x), which is (-∞)/∞.
Step 2: L'Hôpital: (1/x)/(-cos x/sin² x) = -sin² x/(x cos x).
Step 3: write as -(sin x/x) · (sin x/cos x) → -(1)(0) = 0.
Step 4: ln y → 0, so y → e⁰ = **1**.
(e) Step 1: the form is ∞⁰. ln y = (ln x)/x, which is ∞/∞.
Step 2: L'Hôpital: (1/x)/1 = 1/x → 0.
Step 3: y → e⁰ = **1**.

**Q9.** Newton's method: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ) = xₙ - (xₙ³ - 2)/(3xₙ²), starting at x₀ = 1.5.
Step 1: x₀³ = 3.375, f(x₀) = 1.375, f'(x₀) = 3(2.25) = 6.75. x₁ = 1.5 - 1.375/6.75 = 1.5 - 0.2037 = **1.2963**.
Step 2: x₁³ = 2.17828, f(x₁) = 0.17828, f'(x₁) = 3(1.68032) = 5.04115. x₂ = 1.2963 - 0.17828/5.04115 = 1.2963 - 0.03536 = **1.2609**.
Step 3: x₂³ = 2.00482, f(x₂) = 0.00482, f'(x₂) = 3(1.58985) = 4.76985. x₃ = 1.2609 - 0.00482/4.76985 = 1.2609 - 0.00101 = **1.2599**.
Check: the true cube root of 2 is 1.259921, and the error shrinks very quickly (quadratic convergence).

---
# Assignment 3: Integration, Applications and Series (70 marks)

## Questions

**Q1. (5 marks)** Compute ∫(0 to 2) (x^2 + 1) dx directly as the limit of right-endpoint Riemann sums (use Σ i^2 = n(n + 1)(2n + 1)/6), then confirm with the FTC.

**Q2. (6 marks)** (a) If g(x) = ∫(0 to x^2) sqrt(1 + t^4) dt, find g'(x) [3]. (b) If h(x) = ∫(x to 2x) dt/(1 + t^2), find h'(x) [3].

**Q3. (12 marks)** Evaluate.
(a) ∫(0 to 1) x sqrt(1 + x^2) dx  [2]
(b) ∫ sin^3 x cos x dx  [2]
(c) ∫ e^(sqrt x)/sqrt(x) dx  [2]
(d) ∫(0 to π/2) sin x/(1 + cos^2 x) dx  [3]
(e) ∫ dx/(x ln x)  [3]

**Q4. (12 marks)** Integration by parts.
(a) ∫ x ln x dx  [3]
(b) ∫ x^2 e^x dx  [3]
(c) ∫ e^x sin x dx  [3]
(d) ∫(0 to 1) arctan x dx  [3]

**Q5. (9 marks)** The region R lies between y = x^2 and y = 2x. Find (a) its area [3], (b) the volume when R is revolved about the x-axis [3], (c) the volume when R is revolved about the y-axis [3].

**Q6. (6 marks)** (a) Find the average value of sin^2 x on [0, π] [2]. (b) Find the arc length of y = (2/3)x^(3/2) from x = 0 to x = 3 [2]. (c) A spring needs force F = 100x newtons to hold it stretched x metres beyond its natural length. Find the work done stretching it from 0.1 m to 0.3 m beyond natural length [2].

**Q7. (12 marks)** Decide whether each series converges absolutely, converges conditionally or diverges, or find its sum where asked. Name the test.
(a) Σ(n=1 to ∞) n/(n^2 + 1)  [2]
(b) Σ n!/n^n  [2]
(c) Σ(-1)^n/sqrt(n)  [2]
(d) Σ(n=2 to ∞) 1/(n ln n)  [2]
(e) Sum Σ(n=0 to ∞) (2^n + 1)/3^n  [2]
(f) Sum Σ(n=1 to ∞) 1/(n^2 + n)  [2]

**Q8. (4 marks)** Find the radius and interval of convergence of (a) Σ(n=1 to ∞) (x - 2)^n/(n 3^n) [3] and (b) Σ x^n/n! [1].

**Q9. (4 marks)** (a) Write the Maclaurin series of e^(-x^2) to the x^6 term, then integrate to approximate ∫(0 to 1) e^(-x^2) dx within 0.001 [3]. (b) Use Maclaurin series to find lim(x→0) (cos x - 1 + x^2/2)/x^4 [1].

## Solutions and Marking Guide

**Q1.** Right-endpoint sum with n rectangles.
Step 1: Δx = (2 - 0)/n = 2/n and the right endpoints are xᵢ = 2i/n.
Step 2: f(xᵢ) = (2i/n)² + 1 = 4i²/n² + 1.
Step 3: sum = Σ f(xᵢ)Δx = Σ (4i²/n² + 1)(2/n) = (8/n³) Σ i² + (2/n) Σ 1 = (8/n³) Σ i² + 2 (since Σ 1 = n).
Step 4: use Σ i² = n(n + 1)(2n + 1)/6: (8/n³) · n(n + 1)(2n + 1)/6 = (4/3)(n + 1)(2n + 1)/n² = (4/3)(1 + 1/n)(2 + 1/n).
Step 5: sum = (4/3)(1 + 1/n)(2 + 1/n) + 2. Let n → ∞: (4/3)(1)(2) + 2 = 8/3 + 2 = **14/3**.
FTC check: ∫₀² (x² + 1) dx = [x³/3 + x]₀² = 8/3 + 2 = 14/3 ✓.

**Q2.**
(a) Step 1: write g(x) = F(u(x)) with u = x² and F(u) = ∫₀ᵘ √(1 + t⁴) dt, so F'(u) = √(1 + u⁴) by FTC part 1.
Step 2: chain rule: g'(x) = F'(u) · u'(x) = √(1 + (x²)⁴) · 2x.
**g'(x) = 2x √(1 + x⁸)**.
(b) Step 1: with F(u) = ∫ dt/(1 + t²), h(x) = F(2x) - F(x) (split the integral at any constant).
Step 2: h'(x) = F'(2x)·2 - F'(x)·1, where F'(u) = 1/(1 + u²).
Step 3: h'(x) = 2/(1 + (2x)²) - 1/(1 + x²).
**h'(x) = 2/(1 + 4x²) - 1/(1 + x²)**.

**Q3.**
(a) Step 1: let u = 1 + x², du = 2x dx, so x dx = du/2. Limits: x = 0 → u = 1; x = 1 → u = 2.
Step 2: ∫₀¹ x√(1 + x²) dx = (1/2) ∫₁² u^(1/2) du = (1/2) [(2/3)u^(3/2)]₁² = (1/3)(2^(3/2) - 1).
Step 3: 2^(3/2) = 2.8284, so (2.8284 - 1)/3 = 0.6095. **(2√2 - 1)/3 ≈ 0.609**.
(b) Step 1: let u = sin x, du = cos x dx.
Step 2: ∫ u³ du = u⁴/4. **sin⁴x/4 + C**.
(c) Step 1: let u = √x, du = dx/(2√x), so dx/√x = 2 du.
Step 2: ∫ e^u · 2 du = 2e^u. **2e^(√x) + C**.
(d) Step 1: let u = cos x, du = -sin x dx. Limits: x = 0 → u = 1; x = π/2 → u = 0.
Step 2: ∫₀^(π/2) sin x/(1 + cos² x) dx = ∫₁⁰ (-du)/(1 + u²) = ∫₀¹ du/(1 + u²).
Step 3: = [arctan u]₀¹ = arctan 1 - arctan 0 = π/4 - 0. **π/4**.
(e) Step 1: let u = ln x, du = dx/x.
Step 2: ∫ du/u = ln|u|. **ln|ln x| + C**.

**Q4.** Integration by parts: ∫ u dv = uv - ∫ v du.
(a) Step 1: u = ln x, dv = x dx, so du = dx/x and v = x²/2.
Step 2: ∫ x ln x dx = (x²/2) ln x - ∫ (x²/2)(1/x) dx = (x²/2) ln x - ∫ x/2 dx.
Step 3: ∫ x/2 dx = x²/4. **(x²/2) ln x - x²/4 + C**.
(b) Step 1: u = x², dv = eˣ dx: du = 2x dx, v = eˣ. ∫ x² eˣ dx = x² eˣ - 2 ∫ x eˣ dx.
Step 2: again with u = x, dv = eˣ dx: ∫ x eˣ dx = x eˣ - ∫ eˣ dx = x eˣ - eˣ.
Step 3: combine: x² eˣ - 2(x eˣ - eˣ) = eˣ(x² - 2x + 2). **eˣ(x² - 2x + 2) + C**.
(c) Step 1: let I = ∫ eˣ sin x dx. Take u = sin x, dv = eˣ dx: I = eˣ sin x - ∫ eˣ cos x dx.
Step 2: parts again on ∫ eˣ cos x dx with u = cos x: = eˣ cos x + ∫ eˣ sin x dx = eˣ cos x + I.
Step 3: so I = eˣ sin x - (eˣ cos x + I) = eˣ sin x - eˣ cos x - I.
Step 4: 2I = eˣ(sin x - cos x), so **I = eˣ(sin x - cos x)/2 + C**.
(d) Step 1: u = arctan x, dv = dx: du = dx/(1 + x²), v = x. ∫ arctan x dx = x arctan x - ∫ x/(1 + x²) dx.
Step 2: ∫ x/(1 + x²) dx = (1/2) ln(1 + x²).
Step 3: evaluate from 0 to 1: [x arctan x - (1/2) ln(1 + x²)]₀¹ = (π/4 - (1/2) ln 2) - 0.
Step 4: π/4 = 0.7854 and (1/2) ln 2 = 0.3466, so the value is **0.4388**.

**Q5.** The curves meet where x² = 2x, so x = 0 and x = 2; on (0, 2), 2x ≥ x², so 2x is the upper curve.
(a) Area = ∫₀² (2x - x²) dx = [x² - x³/3]₀² = 4 - 8/3 = **4/3**.
(b) Washers about the x-axis: outer radius 2x, inner radius x².
Step 1: V = π ∫₀² [(2x)² - (x²)²] dx = π ∫₀² (4x² - x⁴) dx.
Step 2: = π [4x³/3 - x⁵/5]₀² = π (32/3 - 32/5).
Step 3: common denominator 15: 32/3 = 160/15 and 32/5 = 96/15, so V = π (64/15). **64π/15 ≈ 13.40**.
(c) Shells about the y-axis: radius x, height 2x - x².
Step 1: V = 2π ∫₀² x(2x - x²) dx = 2π ∫₀² (2x² - x³) dx.
Step 2: = 2π [2x³/3 - x⁴/4]₀² = 2π (16/3 - 4).
Step 3: 16/3 - 4 = 4/3, so V = 2π (4/3). **8π/3 ≈ 8.38**.

**Q6.**
(a) Step 1: average value = (1/(b - a)) ∫ f dx = (1/π) ∫₀^π sin² x dx.
Step 2: sin² x = (1 - cos 2x)/2, so ∫₀^π sin² x dx = [x/2 - sin 2x/4]₀^π = π/2.
Step 3: average = (1/π)(π/2) = **1/2**.
(b) Step 1: y = (2/3)x^(3/2), so y' = x^(1/2) and 1 + (y')² = 1 + x.
Step 2: L = ∫₀³ √(1 + x) dx = [(2/3)(1 + x)^(3/2)]₀³.
Step 3: (1 + 3)^(3/2) = 4^(3/2) = 8 and (1 + 0)^(3/2) = 1, so L = (2/3)(8 - 1) = (2/3)(7) = **14/3 ≈ 4.67**.
(c) Step 1: work = ∫ F dx = ∫₀.₁^0.3 100x dx.
Step 2: = 50x² evaluated from 0.1 to 0.3 = 50(0.09) - 50(0.01) = 4.5 - 0.5.
**W = 4 J**.

**Q7.**
(a) Step 1: compare with the harmonic series Σ 1/n using the limit comparison test: lim (n/(n² + 1))/(1/n) = lim n²/(n² + 1) = 1 (finite and positive).
Step 2: Σ 1/n diverges, so the series **diverges**.
(b) Step 1: ratio test: aₙ = n!/nⁿ, so aₙ₊₁/aₙ = [(n + 1)!/(n + 1)ⁿ⁺¹] · [nⁿ/n!] = (n + 1)nⁿ/(n + 1)ⁿ⁺¹ = nⁿ/(n + 1)ⁿ = (n/(n + 1))ⁿ.
Step 2: (n/(n + 1))ⁿ = 1/(1 + 1/n)ⁿ → 1/e ≈ 0.368 < 1.
Step 3: the series **converges (absolutely)**.
(c) Step 1: alternating series test: bₙ = 1/√n is positive, decreasing and tends to 0, so Σ(-1)ⁿ/√n converges.
Step 2: absolute values: Σ 1/√n = Σ 1/n^(1/2), a p-series with p = 1/2 ≤ 1, which diverges.
Step 3: **conditionally convergent**.
(d) Step 1: integral test with f(x) = 1/(x ln x), positive and decreasing for x ≥ 2.
Step 2: ∫₂^∞ dx/(x ln x) = [ln(ln x)]₂^∞ = ∞.
Step 3: the series **diverges**.
(e) Step 1: split: Σ (2ⁿ + 1)/3ⁿ = Σ (2/3)ⁿ + Σ (1/3)ⁿ, both geometric from n = 0.
Step 2: Σ (2/3)ⁿ = 1/(1 - 2/3) = 3 and Σ (1/3)ⁿ = 1/(1 - 1/3) = 3/2.
Step 3: sum = 3 + 3/2 = **9/2**.
(f) Step 1: partial fractions: 1/(n² + n) = 1/(n(n + 1)) = 1/n - 1/(n + 1).
Step 2: the partial sum telescopes: S_N = (1 - 1/2) + (1/2 - 1/3) + ... + (1/N - 1/(N + 1)) = 1 - 1/(N + 1).
Step 3: as N → ∞, S_N → **1**.

**Q8.**
(a) Step 1: ratio test: |aₙ₊₁/aₙ| = |x - 2|ⁿ⁺¹/((n + 1)3ⁿ⁺¹) · n3ⁿ/|x - 2|ⁿ = |x - 2| · n/(3(n + 1)).
Step 2: limit as n → ∞ is |x - 2|/3. Convergence requires |x - 2|/3 < 1, so |x - 2| < 3: **R = 3**, centred at 2, giving -1 < x < 5.
Step 3 (endpoints): at x = 5 the series is Σ 3ⁿ/(n3ⁿ) = Σ 1/n, which diverges. At x = -1 it is Σ (-3)ⁿ/(n3ⁿ) = Σ (-1)ⁿ/n, which converges (alternating series test).
Step 4: **interval of convergence [-1, 5)**.
(b) Step 1: ratio |xⁿ⁺¹/(n + 1)!| · n!/|xⁿ| = |x|/(n + 1) → 0 for every x.
Step 2: **R = ∞**, interval (-∞, ∞).

**Q9.**
(a) Step 1: substitute -x² into eᵘ = Σ uⁿ/n!: e^(-x²) = Σ (-1)ⁿ x^(2n)/n! = 1 - x² + x⁴/2 - x⁶/6 + ...
Step 2: integrate term by term from 0 to 1: Σ (-1)ⁿ/(n!(2n + 1)) = 1 - 1/3 + 1/10 - 1/42 + 1/216 - 1/1320 + ...
Step 3: term values: 1, -0.33333, +0.10000, -0.02381, +0.00463, -0.00076.
Step 4: it is an alternating series with decreasing terms, so the error is less than the first omitted term. After the 1/216 term the first omitted term is 0.00076 < 0.001.
Step 5: partial sum = 1 - 0.33333 + 0.10000 - 0.02381 + 0.00463 = **0.7475** (true value 0.74682, error 0.0007 ✓).
(b) Step 1: cos x = 1 - x²/2 + x⁴/24 - x⁶/720 + ...
Step 2: numerator cos x - 1 + x²/2 = x⁴/24 - x⁶/720 + ...
Step 3: divide by x⁴: 1/24 - x²/720 + ... → 1/24 as x → 0. **1/24**.