# Calculus I: Complete Lecture Notes

How to use these notes: read a chapter, close the page, and re-derive every boxed result yourself. Then do the matching assignment problems. Maths is written in plain text: x^2 is x squared, sqrt(x) is the square root, lim(x→a) is a limit, and ∫ f(x) dx is an integral.

## Chapter 1. Functions and Models

### 1.1 Functions
A function f: A → B assigns to each x in the domain A exactly one value f(x) in the range. Key vocabulary:
- **Domain**: the allowed inputs. For f(x) = sqrt(x - 2)/(x - 5), we need x ≥ 2 and x ≠ 5.
- **Even** if f(-x) = f(x) (symmetric about the y-axis, e.g. x^2, cos x). **Odd** if f(-x) = -f(x) (symmetric about the origin, e.g. x^3, sin x).
- **Composition**: (f∘g)(x) = f(g(x)). The domain is the set of x in the domain of g with g(x) in the domain of f.
- **One-to-one** (injective): f(a) = f(b) implies a = b. Only one-to-one functions have inverses. The graph of f^-1 is the reflection of the graph of f in the line y = x.

### 1.2 The standard families
Polynomials, rational functions, algebraic functions (roots), exponentials a^x, logarithms log_a x, trigonometric functions. You must know:
- e^x and ln x are inverses: e^(ln x) = x for x > 0, ln(e^x) = x.
- ln(ab) = ln a + ln b, ln(a/b) = ln a - ln b, ln(a^r) = r ln a.
- sin^2 x + cos^2 x = 1, sin 2x = 2 sin x cos x, cos 2x = cos^2 x - sin^2 x = 2cos^2 x - 1 = 1 - 2 sin^2 x.
- Inverse trig: arcsin: [-1,1] → [-π/2, π/2]; arccos: [-1,1] → [0, π]; arctan: R → (-π/2, π/2).

## Chapter 2. Limits

### 2.1 The idea
lim(x→a) f(x) = L means f(x) can be made as close to L as we like by taking x sufficiently close to a (x ≠ a). The value of f at a itself is irrelevant to the limit.

**One-sided limits.** lim(x→a-) is the limit from the left, lim(x→a+) from the right. The two-sided limit exists if and only if both one-sided limits exist and are equal.

### 2.2 The formal (epsilon-delta) definition
lim(x→a) f(x) = L if for every ε > 0 there exists δ > 0 such that 0 < |x - a| < δ implies |f(x) - L| < ε.

**Worked proof.** Show lim(x→3) (2x + 1) = 7.
Given ε > 0, we need |2x + 1 - 7| = 2|x - 3| < ε. Choose δ = ε/2. Then |x - 3| < δ gives 2|x - 3| < ε. ∎

**Harder proof.** Show lim(x→2) x^2 = 4.
|x^2 - 4| = |x - 2||x + 2|. Restrict δ ≤ 1, so 1 < x < 3 and |x + 2| < 5. Then |x^2 - 4| < 5|x - 2|. Choose δ = min(1, ε/5). ∎ The "min" trick (first bound the awkward factor, then choose δ) is the standard method.

### 2.3 Limit laws
If lim f = L and lim g = M, then the limit of a sum, difference, product, constant multiple, and (if M ≠ 0) quotient is the corresponding combination of L and M, and lim [f(x)]^n = L^n. For polynomials and rational functions with nonzero denominator, just substitute.

### 2.4 Techniques for indeterminate forms 0/0
1. **Factor and cancel:** lim(x→2) (x^2 - 4)/(x - 2) = lim (x + 2) = 4.
2. **Rationalise:** lim(x→0) (sqrt(x + 4) - 2)/x. Multiply by the conjugate: (x + 4 - 4)/(x(sqrt(x + 4) + 2)) = 1/(sqrt(x + 4) + 2) → 1/4.
3. **Common denominator:** lim(h→0) (1/(x + h) - 1/x)/h = lim -1/(x(x + h)) = -1/x^2.
4. **Squeeze theorem:** if g(x) ≤ f(x) ≤ h(x) near a and lim g = lim h = L, then lim f = L. Example: -x^2 ≤ x^2 sin(1/x) ≤ x^2 gives limit 0 at x = 0.

### 2.5 Two fundamental trigonometric limits
lim(x→0) sin x / x = 1 and lim(x→0) (1 - cos x)/x = 0.

Proof idea of the first: in the unit circle, area of triangle < area of sector < area of larger triangle gives (1/2) sin x < (1/2) x < (1/2) tan x for 0 < x < π/2, hence cos x < sin x / x < 1. Squeeze as x → 0.

Using it: lim(x→0) sin(5x)/(3x) = (5/3)·lim sin(5x)/(5x) = 5/3.

### 2.6 Limits at infinity and infinite limits
- For a rational function, divide numerator and denominator by the highest power of x in the denominator. lim(x→∞) (3x^2 - x)/(5x^2 + 4) = 3/5.
- lim(x→∞) (sqrt(x^2 + x) - x) = lim x/(sqrt(x^2 + x) + x) = lim 1/(sqrt(1 + 1/x) + 1) = 1/2.
- A **vertical asymptote** x = a occurs when f(x) → ±∞ as x → a from at least one side. A **horizontal asymptote** y = L occurs when lim(x→±∞) f(x) = L.
- The number e: lim(n→∞) (1 + 1/n)^n = e, and more generally lim(x→0) (1 + x)^(1/x) = e.

## Chapter 3. Continuity

f is **continuous at a** if (i) f(a) is defined, (ii) lim(x→a) f(x) exists, (iii) the limit equals f(a). Polynomials, rational functions (on their domains), trig, exponential, log and root functions are continuous on their domains. Sums, products, quotients and compositions of continuous functions are continuous.

**Types of discontinuity:** removable (limit exists but ≠ f(a) or f(a) undefined), jump (one-sided limits differ), infinite (vertical asymptote).

**Intermediate Value Theorem (IVT).** If f is continuous on [a, b] and N is between f(a) and f(b), then f(c) = N for some c in (a, b).
*Application:* x^3 + x - 1 = 0 has a root in (0, 1) because f(0) = -1 < 0 < 1 = f(1). The bisection method repeatedly halves the interval using this fact.

**Extreme Value Theorem.** A continuous function on a closed bounded interval [a, b] attains an absolute maximum and minimum there.

## Chapter 4. The Derivative

### 4.1 Definition
f'(a) = lim(h→0) [f(a + h) - f(a)]/h = lim(x→a) [f(x) - f(a)]/(x - a).
Geometric meaning: slope of the tangent line at (a, f(a)). Physical meaning: instantaneous rate of change (velocity if f is position). The tangent line is y - f(a) = f'(a)(x - a).

**From the definition:** f(x) = x^2 gives [(x + h)^2 - x^2]/h = 2x + h → 2x. For f(x) = sqrt(x): [sqrt(x + h) - sqrt(x)]/h = 1/(sqrt(x + h) + sqrt(x)) → 1/(2 sqrt(x)).

### 4.2 Differentiability implies continuity
If f is differentiable at a, then f is continuous at a. The converse is false: f(x) = |x| is continuous but not differentiable at 0 (left slope -1, right slope +1). A function also fails to be differentiable at a vertical tangent or a discontinuity.

### 4.3 Differentiation rules
- Constant: (c)' = 0. Power: (x^n)' = n x^(n-1) for any real n.
- Sum and constant multiple: linear.
- **Product:** (fg)' = f'g + fg'.
- **Quotient:** (f/g)' = (f'g - fg')/g^2.
- **Chain rule:** (f(g(x)))' = f'(g(x)) · g'(x). In Leibniz notation, dy/dx = (dy/du)(du/dx).
- (sin x)' = cos x, (cos x)' = -sin x, (tan x)' = sec^2 x, (sec x)' = sec x tan x.
- (e^x)' = e^x, (a^x)' = a^x ln a, (ln x)' = 1/x, (log_a x)' = 1/(x ln a).
- (arcsin x)' = 1/sqrt(1 - x^2), (arccos x)' = -1/sqrt(1 - x^2), (arctan x)' = 1/(1 + x^2).

**Examples.**
- d/dx [x^2 sin(3x)] = 2x sin 3x + 3x^2 cos 3x.
- d/dx [(x^2 + 1)/(x - 1)] = [2x(x - 1) - (x^2 + 1)]/(x - 1)^2 = (x^2 - 2x - 1)/(x - 1)^2.
- d/dx [e^(x^2)] = 2x e^(x^2). d/dx ln(cos x) = -tan x.

### 4.4 Implicit differentiation
Differentiate both sides with respect to x, treating y as a function of x, then solve for dy/dx.
Circle x^2 + y^2 = 25: 2x + 2y y' = 0, so y' = -x/y. At (3, 4) the slope is -3/4.

### 4.5 Logarithmic differentiation
For y = x^x: ln y = x ln x, so y'/y = ln x + 1, giving y' = x^x (1 + ln x). Also useful for long products and quotients.

### 4.6 Higher derivatives
f'' = d/dx (f'). Position s(t): velocity v = s', acceleration a = s''. Notation: f^(n)(x).

## Chapter 5. Applications of Differentiation

### 5.1 Related rates
Recipe: (1) draw and name variables, (2) write an equation relating them, (3) differentiate with respect to time t, (4) substitute known values only after differentiating.
*Example.* A 5 m ladder slides down a wall. The base moves out at 1 m/s. How fast does the top fall when the base is 3 m out? x^2 + y^2 = 25, so 2x x' + 2y y' = 0. At x = 3, y = 4: 6(1) + 8 y' = 0, y' = -3/4 m/s. The top falls at 0.75 m/s.

### 5.2 Linearisation and differentials
L(x) = f(a) + f'(a)(x - a) approximates f near a. sqrt(4.1) ≈ 2 + (1/4)(0.1) = 2.025 (true value 2.02485). Differential: dy = f'(x) dx.

### 5.3 Mean Value Theorem
**Rolle's theorem:** if f is continuous on [a, b], differentiable on (a, b), and f(a) = f(b), then f'(c) = 0 for some c in (a, b).
**MVT:** under the same hypotheses without f(a) = f(b), there is c with f'(c) = [f(b) - f(a)]/(b - a).
Consequences: f' = 0 on an interval means f is constant; f' > 0 means f is increasing; two functions with equal derivatives differ by a constant. *Application:* if a car travels 150 km in 2 hours, at some instant its speed was exactly 75 km/h.

### 5.4 Curve sketching
1. Domain, intercepts, symmetry, asymptotes.
2. **First derivative test:** critical points are where f' = 0 or f' is undefined. If f' changes + to -, local max. If - to +, local min.
3. **Second derivative test:** at a critical point c, f''(c) > 0 gives a local min, f''(c) < 0 a local max, and f''(c) = 0 is inconclusive.
4. Concave up where f'' > 0, concave down where f'' < 0. **Inflection points** are where concavity changes.

*Example:* f(x) = x^3 - 3x. f' = 3x^2 - 3 = 0 at x = ±1. f'' = 6x: f''(-1) = -6 (local max, value 2), f''(1) = 6 (local min, value -2). Inflection at x = 0.

### 5.5 Optimisation
Recipe: define the quantity to optimise, express it in one variable using a constraint, find critical points, test them and the endpoints.
*Example.* Maximise the area of a rectangle with perimeter 40: A = x(20 - x), A' = 20 - 2x = 0, x = 10, a 10 by 10 square, A = 100.
*Example.* A closed cylinder holds volume V. Minimise the surface area S = 2πr^2 + 2πrh with h = V/(πr^2): S = 2πr^2 + 2V/r, S' = 4πr - 2V/r^2 = 0, so r^3 = V/(2π) and h = 2r. The optimal can has height equal to its diameter.

### 5.6 L'Hôpital's rule
If lim f/g is of the form 0/0 or ∞/∞ and lim f'/g' exists (or is ±∞), then lim f/g = lim f'/g'.
- lim(x→0) (e^x - 1 - x)/x^2 = lim (e^x - 1)/(2x) = lim e^x/2 = 1/2.
- lim(x→∞) ln x / x = lim (1/x)/1 = 0 (logarithms grow slower than any power).
- lim(x→∞) x^n / e^x = 0 (exponentials beat any polynomial).
- **0·∞ forms:** rewrite as a quotient. lim(x→0+) x ln x = lim ln x/(1/x) = lim (1/x)/(-1/x^2) = lim (-x) = 0.
- **1^∞, 0^0, ∞^0 forms:** take logs. lim(x→0+) x^x = e^0 = 1.

### 5.7 Newton's method
x_(n+1) = x_n - f(x_n)/f'(x_n). To compute sqrt(2) use f(x) = x^2 - 2: x_(n+1) = (x_n + 2/x_n)/2. From x_0 = 1: 1.5, 1.41667, 1.414216. Convergence is quadratic when it works. It can fail if f'(x_n) ≈ 0 or the start is poor.

### 5.8 Antiderivatives
F is an antiderivative of f if F' = f. The general antiderivative is F(x) + C. A table: ∫ x^n dx = x^(n+1)/(n + 1) + C (n ≠ -1), ∫ 1/x dx = ln|x| + C, ∫ e^x dx = e^x + C, ∫ cos x dx = sin x + C, ∫ sin x dx = -cos x + C, ∫ sec^2 x dx = tan x + C, ∫ 1/(1 + x^2) dx = arctan x + C, ∫ 1/sqrt(1 - x^2) dx = arcsin x + C.

## Chapter 6. Integration

### 6.1 The definite integral
Partition [a, b] into n subintervals of width Δx = (b - a)/n and form the Riemann sum Σ f(x_i*) Δx. The definite integral is the limit as n → ∞: ∫(a to b) f(x) dx. It measures signed area (area above the axis counts positive, below counts negative). Every continuous function on [a, b] is integrable.

Useful sums: Σ i = n(n + 1)/2, Σ i^2 = n(n + 1)(2n + 1)/6, Σ i^3 = [n(n + 1)/2]^2.
*Example.* ∫(0 to 1) x^2 dx using right endpoints: Σ (i/n)^2 (1/n) = (1/n^3) n(n + 1)(2n + 1)/6 → 1/3.

**Properties.** Linearity; ∫(a to b) + ∫(b to c) = ∫(a to c); reversing limits flips the sign; if f ≥ g then ∫f ≥ ∫g; |∫f| ≤ ∫|f|. For odd f on [-a, a] the integral is 0; for even f it is 2∫(0 to a).

### 6.2 The Fundamental Theorem of Calculus
**FTC Part 1.** If f is continuous on [a, b] and g(x) = ∫(a to x) f(t) dt, then g'(x) = f(x). With a variable upper limit u(x): d/dx ∫(a to u(x)) f(t) dt = f(u(x)) u'(x).
**FTC Part 2.** If F' = f, then ∫(a to b) f(x) dx = F(b) - F(a).

*Examples.* ∫(0 to π) sin x dx = [-cos x] from 0 to π = 1 + 1 = 2. d/dx ∫(1 to x^2) sqrt(1 + t^3) dt = 2x sqrt(1 + x^6).

### 6.3 Substitution
∫ f(g(x)) g'(x) dx = ∫ f(u) du with u = g(x). For definite integrals, change the limits too.
- ∫ 2x cos(x^2) dx: u = x^2 gives sin(x^2) + C.
- ∫(0 to 1) x/(x^2 + 1) dx: u = x^2 + 1, du = 2x dx, so (1/2) ln(x^2 + 1) from 0 to 1 = (1/2) ln 2.
- ∫ tan x dx = -ln|cos x| + C.

### 6.4 Integration by parts
∫ u dv = uv - ∫ v du. Choose u by LIATE (Logarithmic, Inverse trig, Algebraic, Trig, Exponential).
- ∫ x e^x dx = x e^x - e^x + C.
- ∫ ln x dx = x ln x - x + C.
- ∫ x^2 sin x dx: apply twice, giving -x^2 cos x + 2x sin x + 2 cos x + C.

### 6.5 Other techniques you should recognise
- Trig identities: sin^2 x = (1 - cos 2x)/2, cos^2 x = (1 + cos 2x)/2.
- Partial fractions: 1/((x - 1)(x + 2)) = (1/3)[1/(x - 1) - 1/(x + 2)], integral (1/3) ln|(x - 1)/(x + 2)| + C.
- Trig substitution x = a sin θ for sqrt(a^2 - x^2).

### 6.6 Numerical integration
Trapezoid: T_n = (Δx/2)[f_0 + 2f_1 + ... + 2f_(n-1) + f_n]. Simpson (n even): S_n = (Δx/3)[f_0 + 4f_1 + 2f_2 + ... + 4f_(n-1) + f_n]. Simpson's rule is exact for cubics and its error scales like Δx^4.

## Chapter 7. Applications of Integration
- **Area between curves:** ∫(a to b) [top - bottom] dx.
- **Volumes by discs:** V = ∫ π [R(x)]^2 dx. **Washers:** V = ∫ π (R^2 - r^2) dx. **Shells:** V = ∫ 2π x f(x) dx about the y-axis.
- **Average value:** f_avg = (1/(b - a)) ∫(a to b) f(x) dx. The **Mean Value Theorem for Integrals** says a continuous f attains this value at some c.
- **Arc length:** L = ∫ sqrt(1 + [f'(x)]^2) dx.
- **Work** W = ∫ F(x) dx; displacement = ∫ v dt; total distance = ∫ |v| dt.

*Example.* Volume of the solid from rotating y = sqrt(x) on [0, 4] about the x-axis: π ∫(0 to 4) x dx = π [x^2/2] = 8π.

## Chapter 8. Sequences and Series

### 8.1 Sequences
A sequence {a_n} converges to L if lim(n→∞) a_n = L. A bounded monotonic sequence converges (Monotone Convergence Theorem). Limits of a_n = f(n) can use L'Hôpital on f(x).

### 8.2 Series and convergence
The series Σ a_n converges if its partial sums S_N converge.
- **Divergence test:** if a_n does not tend to 0, then Σ a_n diverges. (If a_n → 0 the test is silent, e.g. the harmonic series Σ 1/n diverges.)
- **Geometric series:** Σ(n=0 to ∞) a r^n = a/(1 - r) if |r| < 1, diverges otherwise.
- **Telescoping:** Σ 1/(n(n + 1)) = Σ (1/n - 1/(n + 1)) = 1.
- **p-series:** Σ 1/n^p converges iff p > 1.
- **Integral test:** for positive decreasing f, Σ f(n) and ∫ f(x) dx converge or diverge together.
- **Comparison test:** 0 ≤ a_n ≤ b_n: if Σ b_n converges then Σ a_n converges; if Σ a_n diverges then Σ b_n diverges. **Limit comparison:** if a_n/b_n → c with 0 < c < ∞, they behave alike.
- **Alternating series test:** if b_n decreases to 0 then Σ (-1)^n b_n converges, with error ≤ the first omitted term.
- **Ratio test:** with L = lim |a_(n+1)/a_n|: converges absolutely if L < 1, diverges if L > 1, inconclusive if L = 1. Ideal for factorials and exponentials.
- **Root test:** with L = lim |a_n|^(1/n), same conclusions.
- **Absolute vs conditional convergence:** Σ|a_n| converges means absolute convergence, which implies convergence. The alternating harmonic series converges conditionally.

### 8.3 Power series
Σ c_n (x - a)^n has a radius of convergence R (found by the ratio test) and converges for |x - a| < R, with endpoints checked separately. Within the radius, power series can be differentiated and integrated term by term.

### 8.4 Taylor and Maclaurin series
f(x) = Σ f^(n)(a)/n! (x - a)^n. Maclaurin (a = 0) series to memorise:
- e^x = Σ x^n/n! = 1 + x + x^2/2! + x^3/3! + ...  (all x)
- sin x = x - x^3/3! + x^5/5! - ...  (all x)
- cos x = 1 - x^2/2! + x^4/4! - ...  (all x)
- 1/(1 - x) = Σ x^n  (|x| < 1)
- ln(1 + x) = x - x^2/2 + x^3/3 - ...  (-1 < x ≤ 1)
- arctan x = x - x^3/3 + x^5/5 - ...  (|x| ≤ 1)

**Taylor's inequality:** if |f^(n+1)(x)| ≤ M on the interval, the remainder satisfies |R_n(x)| ≤ M|x - a|^(n+1)/(n + 1)!. Taylor polynomials give limits too: (1 - cos x)/x^2 → 1/2.

## Chapter 9. Common Mistakes Checklist
1. Writing (f g)' = f' g'. Use the product rule.
2. Forgetting the chain rule factor, e.g. d/dx sin(3x) = 3 cos 3x.
3. Using L'Hôpital when the form is not 0/0 or ∞/∞.
4. Forgetting + C, or forgetting to change limits after a substitution.
5. Concluding convergence from a_n → 0 alone.
6. Dropping absolute values: ∫ 1/x dx = ln|x| + C.
7. Treating the ratio test result L = 1 as convergence. It is inconclusive.
8. Using f''(c) = 0 to claim an inflection point without checking that concavity changes.
