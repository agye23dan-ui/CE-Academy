# Numerical Methods: Lecture Notes

Numerical methods turn mathematics into algorithms a computer can run: solving equations, linear systems, interpolating data, integrating and differentiating, and solving differential equations. Every method trades accuracy, speed and robustness, and every answer carries an error you must be able to estimate. Prerequisites: Calculus I and II, Linear Algebra, and one programming language (examples use Python).

# Chapter 1: Computer Arithmetic and Error

## 1.1 Types of error
- **Absolute error** = |x - x_approx|, where x_approx is the approximation. **Relative error** = |x - x_approx|/|x|.
- **Round-off error** comes from storing numbers with finite precision.
- **Truncation error** comes from cutting an infinite process short (a Taylor series, a step size, a finite sum).
- **Significant digits**: x_approx has d correct significant digits if the relative error is below 0.5 × 10^(1-d).

## 1.2 Floating-point numbers
IEEE 754 double precision stores a sign bit, 11 exponent bits and 52 fraction bits. The **machine epsilon** (the gap between 1 and the next number) is 2^-52 = 2.22 × 10^-16, so doubles carry about 15 to 16 decimal digits. Single precision has epsilon 2^-23 = 1.19 × 10^-7.

Consequences you will meet constantly:

```python
>>> 0.1 + 0.2 == 0.3
False
>>> 0.1 + 0.2
0.30000000000000004
```

0.1 has no exact binary representation (it repeats, as 1/3 does in decimal). **Never compare floating-point numbers for equality**; test abs(a - b) <= tol.

## 1.3 Cancellation and conditioning
Subtracting two nearly equal numbers destroys significant digits (**catastrophic cancellation**). Rewrite the formula to avoid it.

Example. For small x, (1 - cos x)/x^2 evaluated directly at x = 10^-8 gives 0.0 in double precision (cos x rounds to exactly 1), but the true value is about 0.5. The identity 1 - cos x = 2 sin^2(x/2) gives 2 sin^2(x/2)/x^2 = 0.5.

Example. The quadratic x^2 - 10^8 x + 1 = 0 has a small root near 10^-8. The formula (-b - sqrt(b^2 - 4c))/2 gives 7.45 × 10^-9 (25 percent wrong), because sqrt(b^2 - 4) is almost b and the subtraction cancels. Instead use the product of roots c/a: x_small = 2c/(-b + sqrt(b^2 - 4c)) with b = -10^8, which gives 1.0 × 10^-8 and adds two positive numbers.

A problem is **well-conditioned** if small input changes give small output changes; **ill-conditioned** otherwise. The **condition number** of evaluating f at x is approximately |x f'(x)/f(x)|. An **algorithm** is **stable** if it does not amplify round-off beyond what the problem's conditioning demands. Conditioning belongs to the problem; stability belongs to the algorithm.

## 1.4 Taylor series and truncation error
If f has n+1 derivatives, f(x) = sum_{k=0}^{n} f^(k)(a)(x - a)^k/k! + R_n, with remainder R_n = f^(n+1)(ξ)(x - a)^(n+1)/(n+1)! for some ξ between a and x.

Example: sin(0.5) with terms up to x^3 gives 0.5 - 0.5^3/6 = 0.479167; adding the x^5 term gives 0.479427; the true value is 0.4794255. The error after the x^5 term is bounded by the next term, 0.5^7/5040 = 1.55 × 10^-6.

**Order notation.** An error E(h) = O(h^p) means E(h) ≤ C h^p for small h. Halving h divides a p-th order error by 2^p. This is how you check an implementation: compute errors at h and h/2, then p ≈ log2(E(h)/E(h/2)).

# Chapter 2: Solving Nonlinear Equations f(x) = 0

## 2.1 Bisection
If f is continuous and f(a) f(b) < 0 there is a root in [a, b]. Halve the interval and keep the half where the sign changes.

```python
def bisect(f, a, b, tol=1e-6):
    fa = f(a)
    while (b - a) / 2 > tol:
        c = (a + b) / 2
        fc = f(c)
        if fa * fc <= 0:
            b = c
        else:
            a, fa = c, fc
    return (a + b) / 2
```

After n steps the interval has length (b - a)/2^n, so the iterations needed for tolerance tol are n >= log2((b - a)/tol). For [1, 2] and 10^-6: 20 iterations. Bisection always converges but gains only about 0.3 digits per step (**linear convergence**).

Example f(x) = x^3 - x - 2 on [1, 2] (f(1) = -2, f(2) = 4). Midpoints: 1.5 (f = -0.125), 1.75 (+1.609), 1.625 (+0.666), 1.5625 (+0.252), 1.53125 (+0.059), 1.515625 (-0.034), 1.5234375 (+0.012). The root is 1.52138.

## 2.2 Newton's method
From the tangent line at x_n: x_{n+1} = x_n - f(x_n)/f'(x_n).

Example: the same f, f'(x) = 3x^2 - 1, x0 = 1.5: x1 = 1.5217391, x2 = 1.5213798, x3 = 1.5213797068 (full double precision by the fourth step). The number of correct digits roughly doubles each step.

Square roots: applying Newton to x^2 - a gives x_{n+1} = (x_n + a/x_n)/2 (the Babylonian method). For a = 2 and x0 = 1: 1.5, 1.416667, 1.414216, 1.41421356237, 1.414213562373095.

**Convergence.** If the root r is simple (f'(r) ≠ 0) and x0 is close enough, then e_{n+1} ≈ (f''(r)/(2 f'(r))) e_n^2. This is **quadratic convergence** (order 2). At a **multiple root** (for example f = x^2 at 0) Newton converges only linearly (the error halves each step: 1, 0.5, 0.25, ...). Newton can also diverge or cycle if x0 is poor or f' is near zero. It requires the derivative.

## 2.3 Secant method
Replace f' with a finite difference: x_{n+1} = x_n - f(x_n)(x_n - x_{n-1})/(f(x_n) - f(x_{n-1})). No derivative is needed, one function evaluation per step, and the order is (1 + sqrt 5)/2 = 1.618 (**superlinear**).

Example: f = x^3 - x - 2, x0 = 1, x1 = 2: 1.33333, 1.46269, 1.53117, 1.52093, 1.521376, 1.5213797080.

## 2.4 Fixed-point iteration
Rewrite f(x) = 0 as x = g(x) and iterate x_{n+1} = g(x_n). If |g'(x)| <= L < 1 near the root, the iteration converges linearly with ratio about |g'(r)|.

Example: x = (x + 2)^(1/3) from x0 = 1.5 gives 1.518294, 1.520935, 1.521316, 1.521370, 1.521378, 1.5213795. Here g'(r) = 1/(3 (r + 2)^(2/3)) = 0.1767, so each step gains about 0.75 digits.

Example: solve cos x = x. Newton on f = cos x - x from x0 = 1: x1 = 0.750364, x2 = 0.739113, x3 = 0.7390851, x4 = 0.73908513322.

## 2.5 Choosing a method and stopping
Use bisection to bracket (safe), then Newton or secant to polish (fast). Brent's method (scipy.optimize.brentq) combines them. Stop when |x_{n+1} - x_n| < tol and |f(x_n)| is small; never rely on only one test, and always set a maximum iteration count.

## 2.6 Newton's method for systems
For F(x) = 0 with Jacobian J: solve J(x_n) δ = -F(x_n), then x_{n+1} = x_n + δ.

Example: x^2 + y^2 = 4, xy = 1, start (2, 0.5): J = [[2x, 2y], [y, x]]. Iterates: (1.933333, 0.516667), (1.931853, 0.517637), (1.931852, 0.517638).

# Chapter 3: Linear Systems Ax = b

## 3.1 Gaussian elimination
Reduce A to upper-triangular form with row operations, then back-substitute. Cost: about (2/3) n^3 floating-point operations for elimination plus n^2 for substitution.

Example:
```
 2x +  y -  z =   8
-3x -  y + 2z = -11
-2x +  y + 2z =  -3
```
The solution is x = 2, y = 3, z = -1.

## 3.2 Pivoting
A zero (or tiny) pivot ruins elimination. **Partial pivoting** swaps rows so that the pivot is the largest-magnitude entry in its column. Without it, a system such as [[10^-20, 1], [1, 1]] gives wildly wrong answers because the multiplier 10^20 swamps the other entries. With pivoting the method is stable in practice.

## 3.3 LU factorisation
PA = LU where L is unit lower triangular (it stores the multipliers), U is upper triangular and P is a permutation. Factor once at cost (2/3) n^3, then each new right-hand side costs only 2 n^2 (two triangular solves). For the example above, partial pivoting chooses the row with -3 first, and the factors are:

```
U = [[-3,  -1,     2    ],
     [ 0,   1.667, 0.667],
     [ 0,   0,     0.2  ]]

L = [[ 1,      0,   0],
     [ 0.667,  1,   0],
     [-0.667,  0.2, 1]]
```
The determinant is ± the product of U's diagonal: (-3)(1.6667)(0.2) = -1, with the sign fixed by the row swaps.

## 3.4 Norms and condition number
Vector norms: ||x||_1 = sum |x_i|, ||x||_2 = sqrt(sum x_i^2), ||x||_inf = max |x_i|. The matrix infinity-norm is the maximum absolute row sum; the 1-norm is the maximum absolute column sum.

The **condition number** is κ(A) = ||A|| ||A^-1||. If Ax = b and we perturb b by δb, then ||δx||/||x|| <= κ(A) ||δb||/||b||. A rule of thumb: you lose log10 κ(A) digits of accuracy.

Example: A = [[1, 1], [1, 1.0001]]. κ_inf(A) = 40004, so a relative perturbation of 10^-4 in the data can change the answer by a relative amount of order 4. The 2 × 2 Hilbert matrix [[1, 1/2], [1/2, 1/3]] has κ_2 = 19.3, while the 10 × 10 Hilbert matrix has κ about 10^13, so double precision yields only about 3 digits.

The **residual** r = b - A x_approx can be tiny even if x_approx is far from the solution when κ is large. A small residual does not prove a small error.

## 3.5 Iterative methods
For large sparse systems, split A = D + L + U (diagonal, strictly lower, strictly upper).
- **Jacobi**: x_i^(k+1) = (b_i - sum_{j≠i} a_ij x_j^(k))/a_ii (uses only old values).
- **Gauss-Seidel**: the same, but uses the newest values immediately (usually converges about twice as fast).

Both converge for any starting vector if A is **strictly diagonally dominant** (|a_ii| > sum_{j≠i} |a_ij| in every row), and Gauss-Seidel also converges if A is symmetric positive definite.

Example: A = [[10, -1, 2], [-1, 11, -1], [2, -1, 10]], b = (6, 25, -11), x0 = 0. The exact solution is (1.043269, 2.269231, -1.081731).
- Jacobi: k=1 (0.6, 2.2727, -1.1); k=2 (1.0473, 2.2273, -0.9927); k=3 (1.0213, 2.2777, -1.0867); k=4 (1.0451, 2.2668, -1.0765).
- Gauss-Seidel: k=1 (0.6, 2.3273, -0.9873); k=2 (1.0302, 2.2766, -1.0784); k=3 (1.0433, 2.2695, -1.0817); k=4 (1.0433, 2.2692, -1.0817).

## 3.6 Software practice
Never form A^-1 to solve Ax = b: use numpy.linalg.solve (LU with partial pivoting). For many right-hand sides, factor once with scipy.linalg.lu_factor and reuse. For sparse systems use scipy.sparse.linalg.

# Chapter 4: Interpolation and Curve Fitting

## 4.1 Polynomial interpolation
Given n+1 points with distinct x, there is exactly one polynomial of degree at most n through them.

**Lagrange form**: P(x) = sum y_i L_i(x), with L_i(x) = prod_{j≠i} (x - x_j)/(x_i - x_j).

**Newton form** with divided differences: P(x) = f[x0] + f[x0, x1](x - x0) + f[x0, x1, x2](x - x0)(x - x1) + ..., where f[x_i, ..., x_j] = (f[x_{i+1}, ..., x_j] - f[x_i, ..., x_{j-1}])/(x_j - x_i). Adding a point adds one term; nothing is recomputed.

Example: points (1, 0), (2, 3), (4, 15), (5, 24). First differences: 3, 6, 9. Second: (6 - 3)/(4 - 1) = 1 and (9 - 6)/(5 - 2) = 1. Third: 0. So P(x) = 0 + 3(x - 1) + 1(x - 1)(x - 2) = x^2 - 1.

**Error**: f(x) - P(x) = f^(n+1)(ξ)/(n+1)! × prod (x - x_i). Example: interpolating e^x at x = 0, 1, 2 with a quadratic and evaluating at 1.5 gives 4.6846 against e^1.5 = 4.4817 (error 0.203). The bound: max f''' = e^2 = 7.389 and |(1.5)(0.5)(-0.5)| = 0.375, so the bound is 7.389 × 0.375/6 = 0.462, which is consistent.

**Runge phenomenon.** High-degree interpolation on equally spaced nodes oscillates wildly near the interval ends (for example 1/(1 + 25x^2) on [-1, 1]). Remedies: use **Chebyshev nodes** x_k = cos((2k+1)π/(2n+2)), or use piecewise low-degree polynomials.

## 4.2 Splines
A **cubic spline** is piecewise cubic with continuous value, first derivative and second derivative at the knots. A **natural spline** sets the second derivative to zero at the ends. Splines avoid the Runge problem and the error is O(h^4).

Example: the natural spline through (0, 0), (1, 1), (2, 0) has S(0.5) = S(1.5) = 0.6875. On [0, 1], S(x) = 1.5x - 0.5x^3.

## 4.3 Least squares
For noisy data do not interpolate: fit. The **line of best fit** y = a + b x minimises the sum of squared residuals. The **normal equations** A^T A c = A^T y define the coefficients for a general linear model (the columns of A are the basis functions evaluated at the data). For a straight line: b = (n Σxy - Σx Σy)/(n Σx^2 - (Σx)^2) and a = ȳ - b x̄.

Example: x = 1, 2, 3, 4, 5 and y = 2.2, 2.8, 3.6, 4.5, 5.1. Then Σx = 15, Σy = 18.2, Σxy = 2.2 + 5.6 + 10.8 + 18.0 + 25.5 = 62.1, Σx^2 = 55. So b = (5 × 62.1 - 15 × 18.2)/(5 × 55 - 225) = (310.5 - 273)/50 = 0.75 and a = 3.64 - 0.75 × 3 = 1.39. The line is y = 1.39 + 0.75x (matching numpy.polyfit).

The normal equations square the condition number, so prefer QR factorisation (numpy.linalg.lstsq) for ill-conditioned fits.

# Chapter 5: Numerical Differentiation and Integration

## 5.1 Finite differences
From Taylor series:
- Forward: f'(x) ≈ (f(x+h) - f(x))/h, error O(h).
- Central: f'(x) ≈ (f(x+h) - f(x-h))/(2h), error O(h^2).
- Second derivative: f''(x) ≈ (f(x+h) - 2f(x) + f(x-h))/h^2, error O(h^2).

Example: f = e^x at x = 1, h = 0.1 (true f' = 2.718282). Forward: 2.858842 (error 0.1406). Central: 2.722815 (error 0.0045). Second derivative: 2.720548.

**The step size dilemma.** Truncation error falls as h shrinks but round-off error grows as epsilon/h. The best h for the forward difference is about sqrt(epsilon) = 10^-8; for the central difference about epsilon^(1/3) = 6 × 10^-6.

**Richardson extrapolation.** If D(h) = D + c h^2 + ..., then (4 D(h/2) - D(h))/3 removes the h^2 term. With D(0.1) = 2.722815 and D(0.05) = 2.719415 you get 2.7182813 (error 5 × 10^-7).

## 5.2 Quadrature rules
Approximate the integral of f over [a, b] with n equal subintervals of width h = (b - a)/n.

- **Trapezoid**: T = h [f0/2 + f1 + ... + f_{n-1} + f_n/2]. Error = -(b - a) h^2 f''(ξ)/12, so O(h^2).
- **Simpson's 1/3** (n even): S = (h/3)[f0 + 4(f1 + f3 + ...) + 2(f2 + f4 + ...) + f_n]. Error = -(b - a) h^4 f''''(ξ)/180, so O(h^4). It is exact for cubics.

Example: the integral of 4/(1 + x^2) over [0, 1] equals π = 3.14159265.

```
n    trapezoid   Simpson
2    3.100000    3.133333
4    3.131176    3.141569
8    3.138988    3.141593
```
Doubling n cuts the trapezoid error by about 4 and the Simpson error by about 16.

Example: the integral of sin x over [0, π] is exactly 2. Trapezoid n = 2: 1.5708; n = 4: 1.8961. Simpson n = 2: 2.0944; n = 4: 2.00456.

Example error bound: trapezoid for e^x on [0, 1] with n = 4 has |E| <= (1)(0.25)^2 e/12 = 0.01416. The actual error is 0.00894.

## 5.3 Gaussian quadrature
Choosing both nodes and weights gives exactness up to degree 2n - 1 with n points. On [-1, 1] the two-point rule is the integral ≈ f(-1/√3) + f(1/√3), exact for cubics. For [a, b] map t = (b - a)/2 · s + (a + b)/2.

Example: the integral of e^x over [0, 1] with two Gauss points: 0.5 [e^0.2113 + e^0.7887] = 1.717896 against the exact 1.718282 (error 3.9 × 10^-4 with only two evaluations).

## 5.4 Practical quadrature
Use **adaptive** routines (scipy.integrate.quad), which refine the step where f varies quickly. For integrals with singularities or infinite ranges, change variables first. For high-dimensional integrals use Monte Carlo (error O(1/√N) independent of dimension).

# Chapter 6: Ordinary Differential Equations (Initial Value Problems)

Solve y' = f(t, y), y(t0) = y0 on a grid t_n = t0 + n h.

## 6.1 Euler's method
y_{n+1} = y_n + h f(t_n, y_n). It follows the tangent line. The **local truncation error** (error per step) is O(h^2) and the **global error** over a fixed interval is O(h): first order.

Example: y' = y - t^2 + 1, y(0) = 0.5; the exact solution is y = (t + 1)^2 - 0.5 e^t, so y(0.5) = 1.425639 and y(1) = 2.640859.
- Euler, h = 0.5, one step: y(0.5) = 0.5 + 0.5 (1.5) = 1.25 (error 0.176).
- Euler to t = 1: h = 0.5 gives 2.25; h = 0.25 gives 2.41895. Halving h roughly halves the error (0.391 to 0.222).

## 6.2 Runge-Kutta methods
**Heun / RK2**: k1 = f(t_n, y_n), k2 = f(t_n + h, y_n + h k1), y_{n+1} = y_n + (h/2)(k1 + k2). Second order. With h = 0.5: y(0.5) = 1.375 and y(1) = 2.515625.

**Classical RK4**:
```
k1 = f(t, y)
k2 = f(t + h/2, y + h k1/2)
k3 = f(t + h/2, y + h k2/2)
k4 = f(t + h, y + h k3)
y_next = y + (h/6)(k1 + 2 k2 + 2 k3 + k4)
```

Fourth order: global error O(h^4), four evaluations per step. Example: h = 0.5, one step gives y(0.5) = 1.425130 (error 5 × 10^-4); two steps give y(1) = 2.639603 (error 1.3 × 10^-3); h = 0.25 gives y(1) = 2.640772 (error 8.7 × 10^-5), a drop by a factor of about 15, as expected for order 4.

```python
def rk4(f, t, y, h, n):
    for _ in range(n):
        k1 = f(t, y)
        k2 = f(t + h/2, y + h/2*k1)
        k3 = f(t + h/2, y + h/2*k2)
        k4 = f(t + h,   y + h*k3)
        y += h/6*(k1 + 2*k2 + 2*k3 + k4)
        t += h
    return y
```

## 6.3 Stability and stiff equations
Apply Euler to the test equation y' = -λ y (λ > 0): y_{n+1} = (1 - λh) y_n. The numerical solution decays only if |1 - λh| < 1, that is **h < 2/λ**. For λ = 20, h = 0.1 gives the factor -1 (it oscillates without decaying), and h = 0.15 gives -2 (it blows up) even though the true solution decays quickly. For RK4 the limit is about h < 2.78/λ.

A problem is **stiff** when it contains widely different time scales (a large λ alongside slow dynamics), so explicit methods need a very small h only for stability. The **backward (implicit) Euler** method, y_{n+1} = y_n + h f(t_{n+1}, y_{n+1}), is stable for any h on the test equation (the factor is 1/(1 + λh)) at the price of solving an equation at each step. Use implicit solvers (scipy's Radau or BDF) for stiff systems.

## 6.4 Systems and higher-order equations
Write y'' = g(t, y, y') as a system with u1 = y, u2 = y': u1' = u2, u2' = g(t, u1, u2). All the methods above apply with vectors.

# Chapter 7: Eigenvalues (Power Method)
For a matrix with a dominant eigenvalue |λ1| > |λ2|, iterate v_{k+1} = A v_k (normalised). The Rayleigh quotient v^T A v / v^T v converges to λ1 with ratio about |λ2/λ1|.

Example: A = [[2, 1], [1, 3]], v0 = (1, 1). Estimates: 3.5, 3.6, 3.6154, 3.6176, 3.61798; the exact eigenvalues are (5 ± √5)/2 = 3.618034 and 1.381966. The eigenvector tends to (0.618, 1). The ratio 1.382/3.618 = 0.382 explains the fast convergence. For all eigenvalues use the QR algorithm (numpy.linalg.eig).

# Chapter 8: Choosing and Validating Methods
1. Check against a case with a known answer (a manufactured test).
2. Check the convergence order by halving h and computing log2 of the error ratio.
3. Check conditioning (the condition number) before trusting a linear solve.
4. Prefer library routines (LAPACK, SciPy): they are fast, tested and stable. Write your own to learn, not to ship.
5. Report results with an error estimate, never just a number.

## Formula summary
- Bisection steps: n >= log2((b - a)/tol). Newton: x - f/f'. Secant order 1.618.
- Condition: κ(A) = ||A|| ||A^-1||; digits lost ≈ log10 κ.
- Trapezoid error O(h^2), Simpson O(h^4), n-point Gauss exact to degree 2n - 1.
- Euler O(h), Heun O(h^2), RK4 O(h^4). Euler stability h < 2/λ.
