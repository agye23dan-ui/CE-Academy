# Numerical Methods: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Give answers to at least 5 significant figures unless told otherwise.

## Section A: Multiple choice (20 marks)

**1.** The machine epsilon of IEEE double precision is about
A) 1.2 × 10^-7  B) 2.2 × 10^-16  C) 10^-308  D) 1.8 × 10^308

**2.** Catastrophic cancellation occurs when we
A) add a huge number and a tiny one  B) multiply two large numbers  C) subtract two nearly equal numbers  D) divide by a large number

**3.** Truncation error is the error from
A) rounding to a finite number of digits  B) storing numbers in binary  C) replacing an infinite process by a finite one  D) mistakes in the input data

**4.** After n bisection steps the interval length is
A) (b - a)/n  B) (b - a)/2^n  C) (b - a)/n^2  D) (b - a) e^(-n)

**5.** Newton's method for a simple root converges with order
A) 1  B) 1.618  C) 2  D) 3

**6.** The secant method converges with order
A) 1  B) 1.618  C) 2  D) 0.5

**7.** The iteration x = g(x) converges locally if
A) |g'(r)| > 1  B) g'(r) = 1  C) |g'(r)| < 1  D) g(r) = 0

**8.** At a double root Newton's method converges
A) quadratically  B) linearly  C) cubically  D) never

**9.** Partial pivoting
A) makes the matrix symmetric  B) swaps rows so the pivot is the largest entry in its column  C) removes zero rows  D) reduces memory use

**10.** The cost of Gaussian elimination on an n × n system grows like
A) n  B) n^2  C) n^3  D) 2^n

**11.** A large condition number of A means
A) the algorithm is unstable  B) A is exactly singular  C) small changes in the data may cause large changes in the solution  D) A is sparse

**12.** The Jacobi iteration converges from any start if A is
A) strictly diagonally dominant  B) symmetric  C) triangular  D) sparse

**13.** The interpolating polynomial through n + 1 distinct points has degree
A) exactly n  B) at most n  C) at least n  D) n + 1

**14.** The Runge phenomenon is
A) round-off in splines  B) oscillation near the ends for high-degree interpolation on equally spaced nodes  C) failure of bisection  D) divergence of Euler's method

**15.** The trapezoid rule has error of order
A) h  B) h^2  C) h^3  D) h^4

**16.** Simpson's rule is exact for polynomials up to degree
A) 1  B) 2  C) 3  D) 5

**17.** The two-point Gauss rule is exact for polynomials up to degree
A) 1  B) 2  C) 3  D) 4

**18.** The central difference approximation of f' has error of order
A) h  B) h^2  C) h^3  D) 1

**19.** The global error of Euler's method is
A) O(h)  B) O(h^2)  C) O(h^3)  D) O(h^4)

**20.** Classical RK4 evaluates f how many times per step?
A) 1  B) 2  C) 3  D) 4

## Section B: Problems (40 marks)

**B1. (10 marks)** Let f(x) = x^3 - 2x - 5.
(a) Show that f has a root in [2, 3] and perform four bisection steps, stating the final interval [4]. (b) How many bisection steps from [2, 3] guarantee an error below 10^-3? [1] (c) Perform three Newton iterations from x0 = 2 [4]. (d) State the order of each method and which converged faster here [1].

**B2. (10 marks)** Consider Ax = b with A = [[3, 1, 2], [1, 4, 1], [2, 1, 5]] and b = (10, 12, 15).
(a) Find the LU factorisation without pivoting [4]. (b) Use it to find det A [1]. (c) Perform two Gauss-Seidel iterations from the zero vector and compare with the exact solution (1.225, 2.175, 2.075) [3]. (d) The matrix has κ_1(A) = 5.8: what does this say about the accuracy of the solution? [2]

**B3. (10 marks)**
(a) Construct the divided-difference table for (0, 1), (1, 3), (2, 2), (4, 7), write the Newton polynomial and evaluate it at x = 3 [5]. (b) Estimate the integral of x e^(-x) over [0, 1] by Simpson's rule with n = 2 and n = 4 (the true value is 1 - 2/e = 0.264241) and compute the errors and their ratio [5].

**B4. (10 marks)** Solve y' = t + y, y(0) = 1 with h = 0.1.
(a) The exact solution is y = 2 e^t - t - 1: find y(0.1) and y(0.2) [2]. (b) Take two Euler steps and two Heun steps and find the errors [4]. (c) Take one RK4 step [2]. (d) For y' = -10y find the largest stable Euler step and the Euler factor and the backward Euler factor when h = 0.25 [2].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **C** · 3 **C** · 4 **B** · 5 **C** · 6 **B** · 7 **C** · 8 **B** · 9 **B** · 10 **C** · 11 **C** · 12 **A** · 13 **B** · 14 **B** · 15 **B** · 16 **C** · 17 **C** · 18 **B** · 19 **A** · 20 **D**

Brief reasons: 7. The error is multiplied by about g'(r) at each step. 8. A double root has f'(r) = 0, so the quadratic convergence is lost. 12. Strict diagonal dominance guarantees convergence of Jacobi and Gauss-Seidel. 16. The h^4 error term involves f'''', which vanishes for cubics.

### Section B

**B1.**
(a) f(2) = 8 - 4 - 5 = -1 < 0 and f(3) = 27 - 6 - 5 = 16 > 0, so there is a root in [2, 3]. Midpoints: 2.5 (f = +5.625) so [2, 2.5]; 2.25 (+1.8906) so [2, 2.25]; 2.125 (+0.3457) so [2, 2.125]; 2.0625 (-0.3513) so **[2.0625, 2.125]**.
(b) n >= log2(1/10^-3) = 9.97, so **10 steps**.
(c) f' = 3x^2 - 2. x1 = 2 - (-1)/10 = **2.1**; x2 = 2.1 - 0.061/11.23 = **2.094568**; x3 = **2.0945515** (root 2.0945514815).
(d) Bisection is linear (order 1), Newton quadratic (order 2): Newton reached 7 digits in 3 steps while bisection had less than 2 digits after 4 steps.

**B2.**
(a) Step 1: Multipliers: l21 = 1/3 = 0.33333, l31 = 2/3 = 0.66667.
Step 2: Row 2' = (1, 4, 1) - (1/3)(3, 1, 2) = (0, 3.66667, 0.33333); row 3' = (2, 1, 5) - (2/3)(3, 1, 2) = (0, 0.33333, 3.66667).
Step 3: Then l32 = 0.33333/3.66667 = 0.090909; row 3'' = 3.66667 - 0.090909 × 0.33333 = 3.63636.
```
L = [[1,       0,        0],        U = [[3, 1,       2      ],
     [0.33333, 1,        0],             [0, 3.66667, 0.33333],
     [0.66667, 0.090909, 1]]             [0, 0,       3.63636]]
```
(b) det A = 3 × 3.66667 × 3.63636 = **40**.
(c) Step 1: Gauss-Seidel: x1 = (10 - 0 - 0)/3 = 3.33333; x2 = (12 - 3.33333 - 0)/4 = 2.16667; x3 = (15 - 2 × 3.33333 - 2.16667)/5 = 1.23333.
Step 2: Second iteration: x1 = (10 - 2.16667 - 2 × 1.23333)/3 = **1.78889**; x2 = (12 - 1.78889 - 1.23333)/4 = **2.24444**; x3 = (15 - 2 × 1.78889 - 2.24444)/5 = **1.83556**.
Step 3: The exact solution (1.225, 2.175, 2.075): the errors are 0.56, 0.07, 0.24 and shrinking (third iterate (1.3615, 2.2007, 2.0153)).
Step 4: The matrix is symmetric positive definite (leading minors 3, 11, 40), so Gauss-Seidel converges.
(d) κ = 5.8 is small, so the problem is well-conditioned: a relative error of 10^-6 in the data changes the solution by at most 5.8 × 10^-6 relative, losing less than one digit.

**B3.**
(a) Step 1: First differences: (3 - 1)/1 = 2, (2 - 3)/1 = -1, (7 - 2)/2 = 2.5.
Step 2: Second: (-1 - 2)/2 = -1.5, (2.5 - (-1))/3 = 1.16667.
Step 3: Third: (1.16667 - (-1.5))/4 = 0.66667.
P(x) = 1 + 2x - 1.5 x(x - 1) + 0.66667 x(x - 1)(x - 2). P(3) = 1 + 6 - 1.5 × 6 + 0.66667 × 6 = 1 + 6 - 9 + 4 = **2**.
(b) Step 1: f(0) = 0, f(0.25) = 0.194700, f(0.5) = 0.303265, f(0.75) = 0.354275, f(1) = 0.367879.
Step 2: Simpson n = 2 (h = 0.5): (0.5/3)[0 + 4 × 0.303265 + 0.367879] = **0.263490** (error -7.51 × 10^-4).
Step 3: Simpson n = 4 (h = 0.25): (0.25/3)[0 + 4(0.194700 + 0.354275) + 2(0.303265) + 0.367879] = **0.264193** (error -4.8 × 10^-5).
Step 4: Ratio 7.5 × 10^-4/4.8 × 10^-5 = 15.6, close to 16 as expected for an O(h^4) method.

**B4.**
(a) y(0.1) = 2e^0.1 - 1.1 = **1.110342**; y(0.2) = 2e^0.2 - 1.2 = **1.242806**.
(b) Euler: y1 = 1 + 0.1(1) = **1.1**; y2 = 1.1 + 0.1(0.1 + 1.1) = **1.22** (errors 0.0103 and 0.0228). Heun: y1: k1 = 1, k2 = 0.1 + 1.1 = 1.2, y1 = 1 + 0.05(2.2) = **1.11**; y2: k1 = 0.1 + 1.11 = 1.21, predictor 1.231, k2 = 0.2 + 1.231 = 1.431, y2 = 1.11 + 0.05(2.641) = **1.24205** (errors 0.00034 and 0.00076).
(c) RK4: k1 = 1, k2 = 0.05 + 1.05 = 1.1, k3 = 0.05 + 1.055 = 1.105, k4 = 0.1 + 1.1105 = 1.2105; y1 = 1 + (0.1/6)(1 + 2.2 + 2.21 + 1.2105) = **1.1103417** (error 2 × 10^-7).
(d) Euler is stable for |1 - 10h| < 1, so **h < 0.2**. With h = 0.25 the Euler factor is 1 - 2.5 = **-1.5** (unstable) and the backward Euler factor is 1/(1 + 2.5) = **0.2857**.
