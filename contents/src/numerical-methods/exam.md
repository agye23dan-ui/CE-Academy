# Numerical Methods: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks. Give numerical answers to at least 5 significant figures unless told otherwise.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** The relative error in approximating 100 by 99.5 is
A) 0.5  B) 0.005  C) 0.05  D) 0.0005

**2.** The number of bisection steps needed to shrink [0, 1] to a width below 10^-6 is
A) 10  B) 14  C) 20  D) 100

**3.** One Newton step for f(x) = x^2 - 2 from x0 = 1 gives
A) 1.25  B) 1.4  C) 2  D) 1.5

**4.** The secant method needs
A) the derivative f'  B) a bracketing interval  C) the Jacobian  D) two starting values

**5.** A sufficient condition for fixed-point convergence on [a, b] is that
A) g maps [a, b] into itself and |g'| <= L < 1  B) g'(x) = 0  C) g is increasing  D) g(a) = a

**6.** In the factorisation PA = LU, the matrix L is
A) upper triangular  B) unit lower triangular  C) diagonal  D) orthogonal

**7.** If PA = LU with one row swap and U has diagonal entries 2, 3, 4 (L has unit diagonal), then det A is
A) 24  B) -24  C) 9  D) 0

**8.** The 1-norm of the vector (3, -7, 2) is
A) 2  B) 3  C) 7  D) 12

**9.** The infinity-norm of the matrix [[1, -2], [3, 4]] is
A) 4  B) 5  C) 7  D) 10

**10.** The Gauss-Seidel method differs from Jacobi in that it
A) uses the newest component values immediately  B) uses only old values  C) needs a symmetric matrix  D) is a direct method

**11.** The interpolation error at x is
A) f'(ξ)(x - x0)  B) f^(n)(ξ)/n!  C) f^(n+1)(ξ)/(n+1)! × product of (x - x_i)  D) f(ξ)

**12.** A natural cubic spline has
A) zero first derivative at the ends  B) zero second derivative at the ends  C) zero value at the ends  D) discontinuous derivatives

**13.** The normal equations for least squares are
A) A^T A c = A^T y  B) A c = y  C) A A^T c = y  D) A^T c = y

**14.** Richardson extrapolation of a central difference D(h) (error ∝ h^2) is
A) D(h/2) - D(h)  B) (4 D(h/2) - D(h))/3  C) (D(h/2) + D(h))/2  D) 2 D(h/2) - D(h)

**15.** Simpson's rule with n = 4 subintervals evaluates the integrand at
A) 3 points  B) 4 points  C) 5 points  D) 9 points

**16.** The three-point Gauss rule is exact for polynomials up to degree
A) 3  B) 4  C) 5  D) 6

**17.** Euler's method for y' = -λy (λ > 0) is stable if and only if
A) h < λ  B) h < 2/λ  C) h < 1/λ^2  D) always

**18.** The local truncation error of Euler's method is
A) O(h)  B) O(h^2)  C) O(h^3)  D) O(1)

**19.** A stiff differential equation is one with
A) discontinuities  B) widely separated time scales  C) no solution  D) nonlinearity

**20.** The power method converges to
A) the smallest eigenvalue  B) the dominant eigenvalue  C) all eigenvalues  D) the trace

## Section B: Short Questions (40 marks)

**B1. (5)** Evaluating (1 - cos x)/x^2 in double precision at x = 10^-8 gives 0. Explain why and give a formula that returns the correct value (the true limit as x → 0), with its value.

**B2. (5)** Use Newton's method on f(x) = x^2 - 3 from x0 = 2 to compute the first three iterates and the error of each.

**B3. (5)** A root of f lies in [1, 2]. How many bisection steps guarantee an error below 10^-5? State the interval width after that many steps.

**B4. (5)** Find the least-squares line y = a + b x for (0, 1), (1, 2), (2, 2), (3, 4) by writing and solving the normal equations.

**B5. (5)** Estimate sin(0.75) by quadratic interpolation through x = 0, 0.5, 1. Give the value, the actual error and the theoretical error bound.

**B6. (5)** For the integral of 1/x over [1, 2] the trapezoid values are T1 = 0.75, T2 = 0.708333 and T4 = 0.697024. Apply Romberg extrapolation twice and compare with ln 2 = 0.693147.

**B7. (5)** Take one RK4 step with h = 0.5 for y' = -y, y(0) = 1, and compare with the exact value.

**B8. (5)** Apply three iterations of the power method to A = [[4, 1], [1, 3]] with v0 = (1, 0), using Rayleigh quotients. The exact dominant eigenvalue is (7 + √5)/2.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Nonlinear equation.** f(x) = e^x - 3x has two positive roots.
(a) Show by sign changes that there is a root in [0, 1] and one in [1, 2] [2]. (b) Perform three Newton iterations for each root from x0 = 0.5 and x0 = 1.5 [3]. (c) The iteration x_{n+1} = ln(3 x_n) has the fixed points of f. Which root does it find, and why does it fail to find the other? Use g' to explain [3]. (d) Estimate the iterations needed to reach an error of 10^-6 starting from x0 = 1.5 [2].

**C2. Linear system.** A = [[10, 2, 1], [1, 5, 1], [2, 3, 10]], b = (7, -8, 6).
(a) Find the LU factorisation without pivoting and det A [3]. (b) Perform three iterations of Jacobi and Gauss-Seidel from zero [4]. (c) The spectral radii are 0.394 (Jacobi) and 0.0894 (Gauss-Seidel): estimate the iterations for a 10^-6 reduction [2]. (d) Given κ_inf(A) = 3.86, comment on the accuracy [1].

**C3. Fitting and interpolation.** Data: (1, 0.5), (2, 0.8), (3, 1.1), (4, 1.5), (5, 1.6).
(a) Fit a line by least squares, give the residuals and their sum of squares [4]. (b) Predict y at x = 6 [1]. (c) Find the Newton interpolating cubic through the first four points, evaluate it at 2.5 and compare with the line [3]. (d) Evaluate the cubic at x = 6 and comment on extrapolation [2].

**C4. Integration.** I = the integral of e^(x^2) over [0, 1] (accurate value 1.462652).
(a) Compute the trapezoid rule for n = 4 and the errors for n = 2, 4, 8 [3]. (b) Compute Simpson's rule for n = 2, 4, 8 with errors and observe the error ratio [3]. (c) Evaluate the error bounds for n = 4 using max f'' = 6e and max f'''' = 76e on [0, 1] [2]. (d) Use the two-point Gauss rule and compare [2].

**C5. Differential equation.** y' = t - y, y(0) = 1, exact y = t - 1 + 2 e^(-t).
(a) Take two steps with h = 0.2 of Euler, Heun and RK4 and compute the errors [6]. (b) Euler at t = 1 with h = 0.2 and 0.1: compute the errors and the observed order [3]. (c) For y' = -30y find the largest stable Euler step [1].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **C** · 3 **D** · 4 **D** · 5 **A** · 6 **B** · 7 **B** · 8 **D** · 9 **C** · 10 **A** · 11 **C** · 12 **B** · 13 **A** · 14 **B** · 15 **C** · 16 **C** · 17 **B** · 18 **B** · 19 **B** · 20 **B**

Brief reasons: 1. 0.5/100 = 0.005. 2. log2(10^6) = 19.9. 3. 1 - (1 - 2)/2 = 1.5. 7. det A = det P × det L × det U = (-1)(24) = -24. 8. 3 + 7 + 2 = 12. 9. Maximum row sum: 3 + 4 = 7. 15. n + 1 = 5. 16. n-point Gauss is exact to degree 2n - 1 = 5. 17. |1 - λh| < 1.

## Section B solutions

**B1.** For x = 10^-8, cos x = 1 - x^2/2 = 1 - 5 × 10^-17 rounds to exactly 1 in double precision (the spacing of doubles just below 1 is 1.1 × 10^-16), so the numerator is 0: **catastrophic cancellation**. Use 1 - cos x = 2 sin^2(x/2): (1 - cos x)/x^2 = 2 sin^2(x/2)/x^2 = **0.5** (the limit as x → 0).

**B2.** Step 1: x_{n+1} = (x_n + 3/x_n)/2. x1 = (2 + 1.5)/2 = **1.75** (error 0.0179); x2 = (1.75 + 1.714286)/2 = **1.732143** (error 9.2 × 10^-5); x3 = **1.7320508** (error 2.4 × 10^-9).
Step 2: The root is √3 = 1.7320508.
Step 3: The error is roughly squared at each step (quadratic convergence).

**B3.** The width after n steps is 1/2^n. Need 2^n >= 10^5: n >= log2(10^5) = 16.61, so **17 steps**; the width is 1/2^17 = **7.6 × 10^-6**.

**B4.** Step 1: With the columns (1, x): A^T A = [[4, 6], [6, 14]] and A^T y = [Σy, Σxy] = [9, 18].
Step 2: Solve 4a + 6b = 9 and 6a + 14b = 18: multiply the first by 1.5: 6a + 9b = 13.5; subtract: 5b = 4.5, so **b = 0.9** and a = (9 - 5.4)/4 = **0.9**.
Step 3: The line is **y = 0.9 + 0.9x**.

**B5.** Step 1: Nodes (0, 0), (0.5, 0.479426), (1, 0.841471).
Step 2: Newton form: f[0, 0.5] = 0.958851, f[0.5, 1] = 0.724090, f[0, 0.5, 1] = (0.724090 - 0.958851)/1 = -0.234761.
Step 3: P(0.75) = 0 + 0.958851(0.75) - 0.234761(0.75)(0.25) = 0.719138 - 0.044018 = **0.675121**. sin(0.75) = 0.681639, actual error **0.006518**.
Step 4: Bound: max|f'''| = 1 and |(0.75)(0.25)(-0.25)| = 0.046875, divided by 3! gives **0.0078125**, which exceeds the actual error ✓.

**B6.** Step 1: First level: R2 = (4 T2 - T1)/3 = (2.833333 - 0.75)/3 = **0.694444**; R4 = (4 T4 - T2)/3 = (2.788095 - 0.708333)/3 = **0.693254**.
Step 2: Second level: (16 R4 - R2)/15 = (11.092063 - 0.694444)/15 = **0.693175**.
Step 3: The true value 0.693147: the error falls from 3.9 × 10^-3 (T4 alone) to 2.8 × 10^-5 after two extrapolations.

**B7.** k1 = -1; y + (h/2) k1 = 1 - 0.25 = 0.75, so k2 = -0.75; k3: y + (h/2) k2 = 1 - 0.1875 = 0.8125, k3 = -0.8125; k4: y + h k3 = 1 - 0.40625 = 0.59375, k4 = -0.59375. y1 = 1 + (0.5/6)(-1 - 1.5 - 1.625 - 0.59375) = 1 - 0.083333 × 4.71875 = **0.606771**. Exact e^-0.5 = 0.606531, error **2.4 × 10^-4** (this equals the Taylor polynomial of degree 4).

**B8.** Step 1: v0 = (1, 0): A v0 = (4, 1); Rayleigh quotient = v0·A v0/v0·v0 = **4**; v1 = (1, 0.25).
Step 2: A v1 = (4.25, 1.75); quotient = (4.25 + 0.4375)/1.0625 = **4.4118**; v2 = (1, 0.41176).
Step 3: A v2 = (4.41176, 2.23529); quotient = (4.41176 + 0.92042)/1.16955 = **4.5592**; v3 = (1, 0.50667).
Step 4: The exact value (7 + √5)/2 = **4.618034**; the errors are 0.618, 0.206 and 0.0588, a factor of about 0.28 per step.
Step 5: This matches (λ2/λ1)^2 = (2.382/4.618)^2 = 0.266: for a symmetric matrix the Rayleigh quotient error is the square of the eigenvector error, which falls by λ2/λ1 = 0.516 per step.

## Section C solutions

**C1.**
(a) f(0) = 1 > 0, f(1) = 2.71828 - 3 = -0.28172 < 0, f(2) = 7.38906 - 6 = 1.38906 > 0. So roots lie in **(0, 1)** and **(1, 2)**.
(b) Step 1: f' = e^x - 3.
Step 2: From x0 = 0.5: x1 = **0.610060**, x2 = **0.618997**, x3 = **0.619061**; root 0.6190613.
Step 3: From x0 = 1.5: x1 = **1.512358**, x2 = **1.512135**, x3 = **1.5121346** (root 1.5121346); the errors from 1.5 are 1.2 × 10^-2, 2.2 × 10^-4, 7.4 × 10^-8: quadratic convergence.
(c) Step 1: g(x) = ln(3x), g'(x) = 1/x.
Step 2: At the larger root 1.51213, g' = 0.661 < 1, so the iteration **converges** (linearly).
Step 3: At the smaller root 0.61906, g' = 1.615 > 1, so the iteration **diverges** away from it (starting at 0.6 the iterates fall: 0.588, 0.567, 0.532, 0.467, moving away from 0.619).
(d) Error after n steps ≈ 0.01213 × 0.6613^n < 10^-6 gives n > ln(8.24 × 10^-5)/ln(0.6613) = 22.7, so about **23 iterations**, against 3 for Newton.

**C2.**
(a) l21 = 0.1, l31 = 0.2. Row 2' = (1, 5, 1) - 0.1(10, 2, 1) = (0, 4.8, 0.9); row 3' = (2, 3, 10) - 0.2(10, 2, 1) = (0, 2.6, 9.8). l32 = 2.6/4.8 = 0.541667; row 3'' = 9.8 - 0.541667 × 0.9 = 9.3125.
```
L = [[1,   0,        0],        U = [[10, 2,   1     ],
     [0.1, 1,        0],             [0,  4.8, 0.9   ],
     [0.2, 0.541667, 1]]             [0,  0,   9.3125]]
```
det A = 10 × 4.8 × 9.3125 = **447**.
(b) The exact solution is (1, -2, 1). Jacobi: k1 (0.7, -1.6, 0.6); k2 (0.96, -1.86, 0.94); k3 (0.978, -1.98, 0.966). Gauss-Seidel: k1 (0.7, -1.74, 0.982); k2 (0.9498, -1.98636, 1.005948); k3 (0.996677, -2.000525, 1.000822).
(c) Jacobi: ln(10^-6)/ln(0.394) = 13.82/0.931 = 14.8, so **15** iterations; Gauss-Seidel: 13.82/2.414 = 5.7, so **6**.
(d) κ_inf = 3.86 is small, so the problem is well-conditioned: a relative data error of 10^-8 gives a solution error below 4 × 10^-8; the solution is as accurate as the arithmetic allows.

**C3.**
(a) Step 1: Σx = 15, Σy = 5.5, Σxy = 0.5 + 1.6 + 3.3 + 6.0 + 8.0 = 19.4, Σx^2 = 55. b = (5 × 19.4 - 15 × 5.5)/(5 × 55 - 225) = (97 - 82.5)/50 = **0.29**; a = 1.1 - 0.29 × 3 = **0.23**.
Step 2: Line y = 0.23 + 0.29x.
Step 3: Fitted: 0.52, 0.81, 1.10, 1.39, 1.68, so residuals y - fit = **-0.02, -0.01, 0.00, 0.11, -0.08**; the sum of squares = 0.0004 + 0.0001 + 0 + 0.0121 + 0.0064 = **0.0190**.
(b) y(6) = 0.23 + 1.74 = **1.97**.
(c) Step 1: Divided differences: 0.3, 0.3, 0.4; second: 0, 0.05; third: 0.05/3 = 0.016667.
Step 2: P(x) = 0.5 + 0.3(x - 1) + 0·(x - 1)(x - 2) + 0.016667(x - 1)(x - 2)(x - 3).
Step 3: P(2.5) = 0.5 + 0.45 + 0.016667(1.5)(0.5)(-0.5) = **0.94375**.
Step 4: The line gives 0.23 + 0.725 = 0.955: they agree to 0.011 (the data are noisy; interpolation reproduces the noise exactly at the nodes, while the line smooths it).
(d) P(6) = 0.5 + 1.5 + 0.016667 × 5 × 4 × 3 = **3.0**, against 1.97 from the line (and the actual last data point at x = 5 was 1.6, which the cubic through the first four points predicts as 0.5 + 1.2 + 0.016667 × 4 × 3 × 2 = 2.1). **Extrapolating a polynomial is dangerous**: the error grows rapidly outside the data range; prefer a low-order least-squares model for prediction.

**C4.**
(a) Trapezoid errors (T - I): n = 2: 1.571583 - 1.462652 = **+0.108931**; n = 4: 1.490679 - 1.462652 = **+0.028027**; n = 8: 1.469712 - 1.462652 = **+0.007061**. Ratios 3.89 and 3.97: order **h^2** (the factor 4 per halving).
(b) Simpson: n = 2: 1.475731 (error +0.013079); n = 4: 1.463711 (error +0.001059); n = 8: 1.462723 (error +7.17 × 10^-5). The ratios are 12.4 and 14.8, approaching 16: order **h^4**.
(c) Trapezoid, n = 4: (b - a) h^2 max f''/12 = 1 × 0.0625 × 16.31/12 = **0.0849** (the actual error 0.0280 is below). Simpson, n = 4: (b - a) h^4 max f''''/180 = 0.00390625 × 206.59/180 = **0.00448** (actual 0.00106).
(d) Two-point Gauss on [0, 1]: nodes (1 ± 1/√3)/2 = 0.211325 and 0.788675, weights 0.5: 0.5[e^0.044658 + e^0.622008] = 0.5[1.045671 + 1.862665] = **1.454168** (error -0.00848). Two evaluations give an error (0.0085) smaller than the trapezoid rule with n = 4 (five evaluations, error 0.0280) and than Simpson with n = 2 (three evaluations, error 0.0131), but not as small as Simpson with n = 4 (0.0011).

**C5.** Exact: y(0.2) = 0.837462, y(0.4) = 0.740640.
(a) Euler (h = 0.2): y1 = 1 + 0.2(0 - 1) = **0.8**; y2 = 0.8 + 0.2(0.2 - 0.8) = **0.68**. Errors (exact - numerical): **0.0375** and **0.0606**.
Heun: y1: k1 = -1, k2 = f(0.2, 0.8) = -0.6, y1 = 1 + 0.1(-1.6) = **0.84**; y2: k1 = f(0.2, 0.84) = -0.64, predictor 0.84 - 0.128 = 0.712, k2 = f(0.4, 0.712) = -0.312, y2 = 0.84 + 0.1(-0.952) = **0.7448**. Errors **-0.0025** and **-0.0042** (the numerical values are slightly too high).
RK4: y1 = **0.837467** (error -5.2 × 10^-6), y2 = **0.740649** (error -8.5 × 10^-6).
(b) Euler at t = 1 (exact 0.735759): h = 0.2 gives 0.65536 (error 0.0804); h = 0.1 gives 0.697357 (error 0.0384). Ratio 2.09, order log2(2.09) = **1.07**, so first order.
(c) Stable if |1 - 30h| < 1: **h < 2/30 = 0.0667**.
