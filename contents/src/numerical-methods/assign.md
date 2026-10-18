# Numerical Methods: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. Show working, state the error of every answer, and check coding questions by running them (Python with numpy). Work to at least six significant figures unless told otherwise.

# Assignment 1: Error Analysis and Nonlinear Equations (Chapters 1 and 2)

**Q1. Errors and floating point.**
(a) Compare 22/7 and 355/113 as approximations of π = 3.14159265: find the absolute and relative error of each [4]. (b) Explain why 0.1 + 0.2 == 0.3 is False in Python and write a safe comparison [3]. (c) Give the machine epsilon of double precision and what it means [3].

**Q2. Bisection and Newton.** Let f(x) = e^(-x) - x, which has one root in [0, 1].
(a) Perform five bisection steps and state the interval [3]. (b) How many bisection steps guarantee an error below 10^-8 starting from [0, 1]? [2] (c) Perform three Newton iterations from x0 = 0.5 [4]. (d) Compare the two methods [1].

**Q3. Square roots by Newton.** (a) Derive the iteration for the square root of a from f(x) = x^2 - a [2]. (b) Compute the square root of 5 from x0 = 2 for three iterations and list the errors [4]. (c) Show that the errors behave quadratically (e_{n+1} ≈ e_n^2/(2 sqrt 5)) [4].

**Q4. Fixed-point iteration.** (a) Show that x = e^(-x) has a fixed point in [0, 1] and that g(x) = e^(-x) is a contraction near it [3]. (b) Perform eight iterations from x0 = 0.5 [3]. (c) Estimate the convergence factor and how many iterations are needed for 10^-6 [4].

**Q5. Secant method.** Solve x - cos x = 0 with x0 = 0, x1 = 1 for five iterations. State the order of convergence and compare the cost per iteration with Newton's method [10].

**Q6. Newton's method for systems.** Solve x^2 + y^2 = 4 and xy = 1 from (2, 0.5): write the Jacobian and compute three iterations [10].

**Q7. Cancellation.** (a) Evaluate sqrt(x + 1) - sqrt(x) at x = 10^12 naively and by the rationalised form 1/(sqrt(x + 1) + sqrt(x)); compare [5]. (b) Explain, for the quadratic x^2 - 10^8 x + 1 = 0, how to compute both roots accurately [5].

## Solutions to Assignment 1

**Q1.** (a) Step 1: 22/7 = 3.142857; absolute error = |3.142857 - 3.141593| = 1.264 × 10^-3; relative error = 1.264 × 10^-3/3.141593 = 4.02 × 10^-4 (about 3 significant digits).
Step 2: 355/113 = 3.14159292; absolute error = 2.67 × 10^-7; relative error = 2.67 × 10^-7/3.141593 = 8.49 × 10^-8 (about 7 digits).
(b) 0.1, 0.2 and 0.3 have no exact binary representation, so each is stored with a small rounding error and the sum is 0.30000000000000004. Use abs(a - b) <= tol * max(1, abs(a), abs(b)), or math.isclose.
(c) Machine epsilon = 2^-52 = 2.22 × 10^-16: the spacing of doubles just above 1, so the relative rounding error of a stored number is at most epsilon/2 and doubles carry 15 to 16 significant decimal digits.

**Q2.** f(0) = 1 > 0, f(1) = -0.632 < 0.
(a) Midpoints: 0.5 (f = +0.1065) so root in [0.5, 1]; 0.75 (f = -0.2776) so [0.5, 0.75]; 0.625 (-0.0897) so [0.5, 0.625]; 0.5625 (+0.00728) so [0.5625, 0.625]; 0.59375 (-0.0415) so **[0.5625, 0.59375]** (width 0.03125).
(b) Step 1: after n steps the interval width is 1/2^n; require 2^-n < 10^-8, so n > log2(10^8) = 26.6.
Step 2: **27 steps** (measuring the error as the interval width; using the midpoint error bound half the width needs 26).
(c) Newton: x_{n+1} = x_n - f(x_n)/f'(x_n) with f' = -e^(-x) - 1.
Step 1: f(0.5) = e^-0.5 - 0.5 = 0.10653, f'(0.5) = -1.60653: x1 = 0.5 + 0.10653/1.60653 = **0.566311**.
Step 2: x2 = **0.5671432** (0.56714317).
Step 3: x3 = **0.5671432904**. The root is 0.567143290409784.
(d) Newton reaches 10 digits in 3 steps and bisection has only 2 digits after 5 steps, but bisection needs no derivative and is guaranteed to converge.

**Q3.** (a) x_{n+1} = x_n - (x_n^2 - a)/(2 x_n) = (x_n + a/x_n)/2.
(b) Iteration x_{n+1} = (x_n + 5/x_n)/2 from x0 = 2:
Step 1: x1 = (2 + 2.5)/2 = 2.25 (error 1.39 × 10^-2).
Step 2: x2 = (2.25 + 5/2.25)/2 = (2.25 + 2.2222)/2 = 2.236111 (error 4.31 × 10^-5).
Step 3: x3 = 2.2360679779 (error 4.16 × 10^-10). The root is 2.2360679775.
(c) Ratios e_{n+1}/e_n²: 4.31 × 10^-5/(1.39 × 10^-2)² = 0.222; 4.16 × 10^-10/(4.31 × 10^-5)² = 0.224; and the predicted constant 1/(2 sqrt 5) = 0.2236. This confirms **order 2**: each step roughly squares the error.

**Q4.** (a) g(0) = 1 and g(1) = 0.368 lie in [0, 1], so g maps [0, 1] into itself and has a fixed point; |g'(x)| = e^(-x) <= 1 and at the root g' = -0.567, so |g'| < 1 near the root: a contraction.
(b) 0.606531, 0.545239, 0.579703, 0.560065, 0.571172, 0.564863, 0.568438, 0.566409. (They oscillate around 0.567143 because g' is negative.)
(c) Step 1: Factor ≈ |g'(r)| = 0.5671.
Step 2: Error after n steps ≈ 0.5671^n × 0.067 (initial error 0.0671): need 0.5671^n < 10^-6/0.067 = 1.49 × 10^-5, so n > ln(1.49 × 10^-5)/ln 0.5671 = 19.6, about **20 iterations**.
Step 3: This is far slower than Newton.

**Q5.** Let f(x) = x - cos x, f(0) = -1, f(1) = 0.4597. Secant: x_{n+1} = x_n - f(x_n)(x_n - x_{n-1})/(f(x_n) - f(x_{n-1})).
Step 1: x2 = 1 - 0.4597 × (1 - 0)/(0.4597 + 1) = 1 - 0.3150 = **0.685073**.
Step 2: x3 = **0.736299**.
Step 3: x4 = **0.739119**.
Step 4: x5 = **0.7390851**.
Step 5: x6 = **0.7390851332**.
Order (1 + sqrt 5)/2 = 1.618. The secant method needs one new function evaluation per iteration and no derivative; Newton needs f and f' each time. Per function evaluation, secant converges faster (efficiency 1.618 against 1.414 for Newton if f' costs as much as f).

**Q6.** Step 1: J = [[2x, 2y], [y, x]].
Step 2: At (2, 0.5): F = (4 + 0.25 - 4, 1 - 1) = (0.25, 0), J = [[4, 1], [0.5, 2]].
Step 3: Solve J δ = -F: 4δ1 + δ2 = -0.25, 0.5δ1 + 2δ2 = 0, so δ1 = -0.0667, δ2 = 0.01667; x1 = **(1.933333, 0.516667)**.
Step 4: Next iterates: **(1.931853, 0.517637)** and **(1.931852, 0.517638)**.
Step 5: Check: 1.931852^2 + 0.517638^2 = 3.732051 + 0.267949 = 4.000000 and the product = 1.000000.

**Q7.** (a) Step 1: naive: sqrt(10^12 + 1) - sqrt(10^12) = 5.00003807 × 10^-7 (only 5 correct digits, relative error 7.6 × 10^-6): the subtraction cancels about 12 digits.
Step 2: rationalised: 1/(sqrt(10^12 + 1) + sqrt(10^12)) = 1/(2 × 10^6 + 5 × 10^-7) = 4.99999999999875 × 10^-7 (correct to all digits).
(b) Step 1: The large root: x1 = (10^8 + sqrt(10^16 - 4))/2 ≈ 10^8 (no cancellation because both terms are added).
Step 2: The small root from the product of roots x1 x2 = c = 1: x2 = 1/x1 = 1.0 × 10^-8.
Step 3: The textbook formula for x2 yields 7.45 × 10^-9 (25 percent error).

# Assignment 2: Linear Systems, Interpolation and Least Squares (Chapters 3 and 4)

**Q1. LU factorisation.** Solve Ax = b with A = [[2, 1, 1], [4, 3, 3], [8, 7, 9]], b = (4, 10, 24) by Gaussian elimination with partial pivoting. Give L, U and P (as the row order), find det A and solve a second system with b = (1, 2, 3) using the stored factors [10].

**Q2. Why pivot?** Solve 0.0001 x + y = 1, x + y = 2 using 3-significant-digit arithmetic (a) without pivoting and (b) with partial pivoting. Compare with the true solution [10].

**Q3. Iterative methods.** For A = [[4, -1, 0], [-1, 4, -1], [0, -1, 4]], b = (2, 6, 2): (a) check diagonal dominance [2]; (b) perform three Jacobi and three Gauss-Seidel iterations from zero [5]; (c) the spectral radii of the iteration matrices are 0.3536 (Jacobi) and 0.125 (Gauss-Seidel): estimate the iterations needed for a reduction by 10^-6 [3].

**Q4. Conditioning.** (a) Find the infinity-norm condition number of A = [[1, 2], [3, 4]] [4]. (b) For B = [[1, 1], [1, 1.01]], solve Bx = (2, 2.01) and Bx = (2, 2.02) and explain the result using κ(B) [6].

**Q5. Interpolation.** (a) Find the quadratic through (0, 1), (1, 3), (3, 2) with Lagrange or Newton form and evaluate it at x = 2 [5]. (b) Use the nodes 0, π/6, π/2 to approximate sin(π/4) and compare with the error formula [5].

**Q6. Divided differences and splines.** (a) Build the divided-difference table for (0, 1), (1, 2), (2, 9), (3, 28) and write the Newton polynomial [5]. (b) The natural cubic spline through (0, 0), (1, 1), (2, 0) is S(x) = 1.5x - 0.5x^3 on [0, 1]. Verify continuity of S' and S'' at x = 1 and the end condition [5].

**Q7. Least squares.** (a) Fit a line to x = 0, 1, 2, 3, 4 and y = 1.1, 2.9, 5.2, 6.8, 9.1 and give the residual sum of squares [5]. (b) Fit y = a e^(bx) to (0, 2.0), (1, 3.1), (2, 4.6), (3, 7.0) by linearising [5].

## Solutions to Assignment 2

**Q1.** Step 1: Column 1: the largest entry is 8 (row 3).
Step 2: Multipliers: row 2: 4/8 = 0.5, row 1: 2/8 = 0.25.
Step 3: Row 2' = (4, 3, 3) - 0.5(8, 7, 9) = (0, -0.5, -1.5); row 1' = (2, 1, 1) - 0.25(8, 7, 9) = (0, -0.75, -1.25).
Step 4: Column 2: the larger magnitude is -0.75 (row 1').
Step 5: Multiplier for row 2': (-0.5)/(-0.75) = 0.6667; row 2'' = -1.5 - 0.6667(-1.25) = -0.6667.
Row order (3, 1, 2):
```
U = [[8,  7,     9    ],
     [0, -0.75, -1.25 ],
     [0,  0,    -0.6667]]
L = [[1,    0,      0],
     [0.25, 1,      0],
     [0.5,  0.6667, 1]]
```
det A = (+1)(8)(-0.75)(-0.6667) = **4** (the row order (3, 1, 2) is an even permutation, a 3-cycle, so the sign is +; direct expansion: 2(27 - 21) - 1(36 - 24) + 1(28 - 24) = 12 - 12 + 4 = 4).
Solve with b = (4, 10, 24): permuted b = (24, 4, 10); forward: y1 = 24, y2 = 4 - 0.25 × 24 = -2, y3 = 10 - 0.5 × 24 - 0.6667(-2) = -0.6667; back: z = -0.6667/-0.6667 = 1; y: -0.75 y - 1.25 = -2 gives y = 1; x = (24 - 7 - 9)/8 = 1. **x = (1, 1, 1)**.
Step 1: With b = (1, 2, 3): permuted (3, 1, 2); forward: 3, 1 - 0.75 = 0.25, 2 - 1.5 - 0.6667 × 0.25 = 0.3333; back: z2 = 0.3333/-0.6667 = -0.5; then -0.75 y - 1.25(-0.5) = 0.25 gives y = 0.5; x = (3 - 3.5 + 4.5)/8 = 0.5.
Step 2: **x = (0.5, 0.5, -0.5)**.
Step 3: Check row 1: 2(0.5) + 0.5 - 0.5 = 1 ✓; row 3: 8(0.5) + 7(0.5) + 9(-0.5) = 3 ✓.

**Q2.** True solution: x = 1.0001, y = 0.9999 (subtract the equations: 0.9999x = 1.0, then y = 2 - x).
(a) Without pivoting: multiplier m = 1/0.0001 = 10^4. a22 = 1 - 10^4 = -9999, rounded to 3 digits: -1.00 × 10^4. b2 = 2 - 10^4 × 1 = -9998, rounded: -1.00 × 10^4. So y = 1.00 and x = (1 - 1.00)/0.0001 = **0**: x is completely wrong.
(b) Swap rows: x + y = 2, 0.0001x + y = 1. m = 0.0001: a22 = 1 - 0.0001 = 0.9999, rounded 1.00; b2 = 1 - 0.0002 = 0.9998, rounded 1.00. y = 1.00, x = 2 - 1.00 = **1.00**. Correct to 3 digits.
The tiny pivot produced a huge multiplier that swamped the other entries.

**Q3.** (a) 4 > 1, 4 > 2, 4 > 1: strictly diagonally dominant, so both methods converge.
(b) Exact x = (1, 2, 1). Jacobi: k1 (0.5, 1.5, 0.5), k2 (0.875, 1.75, 0.875), k3 (0.9375, 1.9375, 0.9375). Gauss-Seidel: k1 (0.5, 1.625, 0.90625), k2 (0.90625, 1.953125, 0.988281), k3 (0.988281, 1.994141, 0.998535). Gauss-Seidel is clearly ahead.
(c) Step 1: Jacobi: n >= ln(10^-6)/ln(0.3536) = 13.82/1.040 = 13.3, so **14**.
Step 2: Gauss-Seidel: 13.82/2.079 = 6.6, so **7**.
Step 3: Gauss-Seidel needs half as many (its spectral radius is the square of Jacobi's for this matrix).

**Q4.** (a) ||A||_inf = max(3, 7) = 7. A^-1 = [[-2, 1], [1.5, -0.5]], ||A^-1||_inf = max(3, 2) = 3. κ_inf = **21**.
(b) Step 1: ||B||_inf = 2.01, B^-1 = [[101, -100], [-100, 100]] with ||B^-1||_inf = 201, so **κ = 2.01 × 201 = 404**.
Step 2: For b = (2, 2.01): x = (1, 1).
Step 3: For b = (2, 2.02): x = (0, 2).
Step 4: A change of 0.5 percent in one entry of b changes the solution completely (relative change in x about 1 against 0.005 in b: amplification 200, below the bound κ = 404).
Step 5: This is the signature of an ill-conditioned matrix: the two rows are nearly parallel.

**Q5.** (a) Step 1: Lagrange: P(x) = 1 (x - 1)(x - 3)/((0 - 1)(0 - 3)) + 3 (x - 0)(x - 3)/((1 - 0)(1 - 3)) + 2 (x - 0)(x - 1)/((3 - 0)(3 - 1)) = (1/3)(x - 1)(x - 3) - (3/2) x (x - 3) + (1/3) x (x - 1).
Step 2: Expanding: P(x) = -(5/6) x^2 + (17/6) x + 1.
Step 3: P(2) = -10/3 + 17/3 + 1 = **3.3333**.
(b) Step 1: The data (0, 0), (π/6, 0.5), (π/2, 1).
Step 2: Interpolating polynomial at π/4 gives **0.6875**; sin(π/4) = 0.70711, error **0.0196**.
Step 3: Error formula: |f'''| <= 1 and |(π/4)(π/4 - π/6)(π/4 - π/2)| = 0.7854 × 0.2618 × 0.7854 = 0.1615; divided by 3! gives a bound of **0.0269**, and the actual error is below it.

**Q6.** (a) f[0,1] = 1, f[1,2] = 7, f[2,3] = 19; second differences: (7 - 1)/2 = 3, (19 - 7)/2 = 6; third: (6 - 3)/3 = 1. P(x) = 1 + 1·x + 3 x (x - 1) + 1·x (x - 1)(x - 2) = **x^3 + 1** (check: P(2) = 9, P(3) = 28).
(b) Step 1: By symmetry the second piece is S(x) = 1.5(2 - x) - 0.5(2 - x)^3 on [1, 2].
Step 2: At x = 1: S(1) = 1.5 - 0.5 = 1 from both.
Step 3: S'(x) on [0, 1] = 1.5 - 1.5 x^2 gives 0 at x = 1; on [1, 2] it equals -1.5 + 1.5(2 - x)^2, which is 0 at x = 1. ✓. S'' on [0, 1] = -3x gives -3; on [1, 2]: S'' = -3(2 - x), which is -3 at x = 1 ✓. End condition: S''(0) = 0 and S''(2) = 0 ✓.

**Q7.** (a) Step 1: n = 5, Σx = 10, Σy = 25.1, Σxy = 0 + 2.9 + 10.4 + 20.4 + 36.4 = 70.1, Σx² = 30.
Step 2: slope b = (n Σxy - Σx Σy)/(n Σx² - (Σx)²) = (5 × 70.1 - 10 × 25.1)/(5 × 30 - 100) = (350.5 - 251)/50 = **1.99**.
Step 3: intercept a = ȳ - b x̄ = 5.02 - 1.99 × 2 = **1.04**. Line: y = 1.04 + 1.99x.
Step 4: residuals y - fit: 0.06, -0.13, 0.18, -0.21, 0.10; sum of squares = 0.0036 + 0.0169 + 0.0324 + 0.0441 + 0.01 = **0.107**.
(b) Step 1: ln y: 0.6931, 1.1314, 1.5261, 1.9459.
Step 2: Fit ln y = ln a + b x: slope **b = 0.4153**, intercept ln a = 0.7012, **a = 2.016**.
Step 3: So y = 2.016 e^(0.4153 x) (The linearisation weights the points differently from a direct nonlinear fit; for a final answer refine with scipy.optimize.curve_fit.)

# Assignment 3: Calculus, Quadrature, ODEs and Eigenvalues (Chapters 5 to 7)

**Q1. Differentiation.** (a) For f = sin x at x = 1 compute forward and central difference approximations with h = 0.1 and h = 0.01 and report the errors; what orders do they show? [5] (b) Derive the three-point forward formula f'(x) ≈ (-3f(x) + 4f(x+h) - f(x+2h))/(2h) from Taylor series (its error is O(h^2)) and apply it with h = 0.1 [5].

**Q2. Trapezoid and Simpson.** (a) For the integral of e^(-x^2) over [0, 1] (true value 0.746824) compute the trapezoid rule with n = 4 and Simpson with n = 2 and 4, and the errors [5]. (b) A sensor logs (0, 1), (0.5, 2.1), (1, 2.9), (1.5, 4.2), (2, 5.0): estimate the integral by the trapezoid and Simpson rules [3]. (c) How many trapezoid subintervals guarantee an error below 10^-6 for the integral of 1/x over [1, 2]? [2]

**Q3. Gaussian quadrature.** (a) Use the two-point Gauss rule for the integral of sin x over [0, π] [4]. (b) Show the rule is exact for x^3 on [0, 1] [3]. (c) Compare cost and accuracy with Simpson n = 2 [3].

**Q4. Romberg.** Use T1, T2, T4 for the integral of sin x over [0, π] and apply Richardson extrapolation twice [10].

**Q5. ODE methods.** y' = -2y + t, y(0) = 1, h = 0.1. (a) The exact solution is y = t/2 - 1/4 + (5/4) e^(-2t): evaluate y at 0.1, 0.2, 0.3 [2]. (b) Take three Euler steps [3]. (c) Take three Heun steps [3]. (d) Take one RK4 step and compare [2].

**Q6. Order and stability.** (a) For y' = y, y(0) = 1 compute Euler at t = 1 with h = 0.1 and 0.05, find the errors and the observed order [5]. (b) For y' = -50y find the largest stable Euler step, the factor with h = 0.05 and the backward-Euler factor with h = 0.05 [3]. (c) Write y'' + y = 0, y(0) = 0, y'(0) = 1 as a first-order system and take two Euler steps with h = 0.1; compare with sin(0.2) [2].

**Q7. Power method.** (a) Apply three power iterations (Rayleigh quotient estimates) to A = [[2, -1, 0], [-1, 2, -1], [0, -1, 2]] with v0 = (1, 1, 1) [6]. (b) The eigenvalues are 2 + √2, 2, 2 - √2: what is the convergence ratio and what does it say about the speed? [2] (c) Write a Python function that computes the dominant eigenvalue to a tolerance [2].

## Solutions to Assignment 3

**Q1.** (a) Step 1: cos 1 = 0.540302.
Step 2: Forward: h = 0.1 gives (sin 1.1 - sin 1)/0.1 = 0.497364, error **-0.04294**; h = 0.01: error **-0.004216**.
Step 3: Ratio 10.2: **first order**.
Step 4: Central: h = 0.1: error **-9.00 × 10^-4**; h = 0.01: **-9.00 × 10^-6**.
Step 5: Ratio 100: **second order**.
(b) Step 1: Expand f(x+h) = f + h f' + h^2 f''/2 + h^3 f'''/6 and f(x+2h) = f + 2h f' + 2h^2 f'' + 4h^3 f'''/3.
Step 2: Then -3f + 4f(x+h) - f(x+2h) = 2h f' + (4/6 - 4/3) h^3 f''' + ... = 2h f' - (2/3) h^3 f''' so f' = (...)/(2h) + (h^2/3) f''' + ...: error O(h^2).
Step 3: Applying to sin at 1 with h = 0.1: (-3(0.841471) + 4(0.891207) - 0.932039)/0.2 = **0.541887** (error 1.58 × 10^-3).

**Q2.** (a) Step 1: Trapezoid n = 4 (h = 0.25): **0.742984** (error -3.84 × 10^-3).
Step 2: Simpson n = 2: **0.747180** (error +3.56 × 10^-4).
Step 3: Simpson n = 4: **0.746855** (error +3.1 × 10^-5).
(b) Trapezoid: 0.5 [1/2 + 2.1 + 2.9 + 4.2 + 5.0/2] = 0.5 × 12.2 = **6.1**. Simpson: (0.5/3)[1 + 4(2.1) + 2(2.9) + 4(4.2) + 5.0] = (0.5/3)(37.0) = **6.1667**.
(c) |f''| = 2/x^3 <= 2 on [1, 2]. Error <= (b - a) h^2 max|f''|/12 = h^2/6 <= 10^-6 gives h <= 2.45 × 10^-3, so n >= 408.2: **n = 409**.

**Q3.** (a) Map [0, π] to [-1, 1]: integral ≈ (π/2)[sin(π/2 (1 - 1/√3)) + sin(π/2 (1 + 1/√3))] = the two nodes are x = 0.66390 and 2.47770, and sin x = 0.61619 at both, so the integral ≈ 1.5708 × 1.23238 = **1.9358** (error -0.064).
(b) On [0, 1]: nodes (1 ± 1/√3)/2 = 0.21132 and 0.78868; weights 1/2 each: 0.5(0.21132^3 + 0.78868^3) = 0.5(0.009436 + 0.490564) = **0.25** exactly. ✓ (degree 3 = 2n - 1.)
(c) Gauss: two evaluations, error 0.064. Simpson n = 2 needs three evaluations and gives 2.0944 (error +0.094), so Gauss is more accurate with fewer evaluations. This holds for smooth integrands.

**Q4.** Step 1: T1 = (π/2)(0 + 0) = 0; T2 = 1.570796; T4 = 1.896119.
Step 2: First extrapolation R(2) = (4 T2 - T1)/3 = **2.094395** (this equals Simpson n = 2); R(4) = (4 T4 - T2)/3 = **2.004560**.
Step 3: Second: (16 × 2.004560 - 2.094395)/15 = **1.998571** (true value 2; error 1.4 × 10^-3, starting from a trapezoid sequence with errors 2, 0.43 and 0.10).

**Q5.** (a) Exact: y(0.1) = 0.823413, y(0.2) = 0.687900, y(0.3) = 0.586015.
(b) Euler: y1 = 1 + 0.1(-2) = **0.8**; y2 = 0.8 + 0.1(-1.6 + 0.1) = **0.65**; y3 = 0.65 + 0.1(-1.3 + 0.2) = **0.54** (errors 0.0234, 0.0379, 0.0460).
(c) Heun: y1: k1 = -2, k2 = -2(0.8) + 0.1 = -1.5, y1 = 1 + 0.05(-3.5) = **0.825**; y2: k1 = -2(0.825) + 0.1 = -1.55, predictor 0.825 - 0.155 = 0.67, k2 = -2(0.67) + 0.2 = -1.14; y2 = 0.825 + 0.05(-2.69) = **0.6905**; y3 = **0.58921** (errors 0.0016, 0.0026, 0.0032).
(d) RK4: k1 = -2, k2 = -2(0.9) + 0.05 = -1.75, k3 = -2(0.9125) + 0.05 = -1.775, k4 = -2(0.8225) + 0.1 = -1.545; y1 = 1 + (0.1/6)(-2 - 3.5 - 3.55 - 1.545) = 1 - 0.17658 = **0.823417** (error 4 × 10^-6).

**Q6.** (a) Step 1: Euler on y' = y gives y(1) = (1 + h)^(1/h): h = 0.1: 1.1^10 = 2.593742 (error 2.718282 - 2.593742 = 0.124539).
Step 2: h = 0.05: 1.05^20 = 2.653298 (error 0.064984).
Step 3: ratio of errors 0.124539/0.064984 = 1.917, order log2(1.917) = **0.94**, approaching 1: **first order**.
(b) Step 1: Stable if |1 - 50h| < 1: h < **0.04**.
Step 2: With h = 0.05: factor 1 - 2.5 = **-1.5** (unstable: the numerical solution grows and alternates in sign).
Step 3: Backward Euler: 1/(1 + 2.5) = **0.2857** (stable and decaying).
(c) u1 = y, u2 = y': u1' = u2, u2' = -u1. Step 1: (0 + 0.1 × 1, 1 + 0.1 × 0) = (0.1, 1.0); step 2: (0.1 + 0.1 × 1, 1 - 0.1 × 0.1) = **(0.2, 0.99)**. sin(0.2) = 0.19867 (Euler error 1.3 × 10^-3; Euler also slowly increases the amplitude of the oscillation).

**Q7.** (a) Step 1: v0 = (1, 1, 1): A v0 = (1, 0, 1); Rayleigh quotient = (1, 0, 1)·(1, 1, 1)/3 = 2/3 = **0.6667** (a poor first estimate).
Step 2: Normalise v1 = (1, 0, 1): A v1 = (2, -2, 2), quotient = (v1·Av1)/(v1·v1) = 4/2 = **2.0**; v2 = (1, -1, 1).
Step 3: A v2 = (3, -4, 3); quotient = 10/3 = **3.3333**; v3 = (0.75, -1, 0.75).
Step 4: The exact value 3.4142.
(b) Ratio |λ2/λ1| = 2/3.4142 = 0.586: each step reduces the error by about 0.586, so about 4 steps per decimal digit. Slow when the two largest eigenvalues are close.
(c)
```python
import numpy as np
def power(A, tol=1e-10, maxit=1000):
    v = np.ones(A.shape[0])
    lam = 0.0
    for _ in range(maxit):
        w = A @ v
        lam_new = (v @ w) / (v @ v)
        v = w / np.max(np.abs(w))
        if abs(lam_new - lam) < tol:
            return lam_new, v
        lam = lam_new
    raise RuntimeError("no convergence")
```
