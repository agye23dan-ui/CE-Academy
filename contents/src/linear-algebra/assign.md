# Linear Algebra: Assignments with Worked Solutions

Do each assignment without the solutions, then mark yourself. Show every row operation: method marks are awarded even when an arithmetic slip gives a wrong final answer.

# Assignment 1: Linear Systems, Matrices and Determinants (60 marks)

## Questions

**Q1. (6 marks)** Solve by Gauss-Jordan elimination: x + y + z = 2, 2x - y + z = -1, x + 3y - 2z = 9.

**Q2. (6 marks)** Find the complete solution of x + 2y + z + w = 4, 2x + 4y + 3z + 4w = 9. Identify the basic and free variables and write the solution in parametric vector form.

**Q3. (8 marks)** Let A = [[2,1,1],[4,3,3],[8,7,9]]. (a) Find the LU factorisation (no row swaps) [4]. (b) Use it to solve Ax = b with b = (4, 10, 24) [4].

**Q4. (8 marks)** (a) Find the inverse of [[1,2],[3,7]] [2]. (b) Find the inverse of B = [[1,0,2],[0,1,0],[1,1,3]] by row reduction of [B | I] [4]. (c) Use B^-1 to solve Bx = (1, 2, 3) [2].

**Q5. (10 marks)** (a) Compute det [[2,0,1],[1,3,2],[0,5,1]] by cofactor expansion [3]. (b) Compute det [[1,2,3,4],[0,2,1,0],[0,0,3,5],[1,2,3,5]] using row operations [3]. (c) If A is 3 × 3 with det A = 3, find det(2A), det(A^-1), det(A^2) and det(A^T A) [4].

**Q6. (4 marks)** Solve 2x + y = 4, x + 3y = 7 by Cramer's rule.

**Q7. (10 marks)** Prove each statement. (a) If A is invertible and A^2 = A then A = I [2]. (b) If A and B are invertible n × n matrices, then AB is invertible and (AB)^-1 = B^-1 A^-1 [3]. (c) If A^3 = 0 then I - A is invertible with inverse I + A + A^2 [3]. (d) Give a 2 × 2 example with AB ≠ BA [2].

**Q8. (8 marks)** For which values of k does the system x + y + z = 1, x + 2y + 4z = k, x + 4y + 10z = k^2 have (i) no solution, (ii) a unique solution, (iii) infinitely many solutions? Find the solutions in case (iii).

## Solutions and Marking Guide

**Q1.** Augmented matrix (1,1,1 | 2), (2,-1,1 | -1), (1,3,-2 | 9).
Step 1: R2 - 2R1: (0, -3, -1 | -5). R3 - R1: (0, 2, -3 | 7).
Step 2: divide R2 by -3: (0, 1, 1/3 | 5/3).
Step 3: R3 - 2R2: (0, 0, -3 - 2/3 | 7 - 10/3) = (0, 0, -11/3 | 11/3), so z = -1.
Step 4: back-substitute: y = 5/3 - (1/3)(-1) = 2, then x = 2 - y - z = 2 - 2 + 1 = 1.
**(x, y, z) = (1, 2, -1).** Check: 2 - 2 - 1 = -1 ✓, 1 + 6 + 2 = 9 ✓. (2 marks elimination, 2 back-substitution, 2 correct answer and check.)

**Q2.** Step 1: R2 - 2R1: (0, 0, 1, 2 | 1).
Step 2: So z + 2w = 1.
Step 3: Pivot columns: x and z (basic); y and w are free. z = 1 - 2w and x = 4 - 2y - z - w = 3 - 2y + w.
Step 4: Parametric vector form:
(x, y, z, w) = (3, 0, 1, 0) + y(-2, 1, 0, 0) + w(1, 0, -2, 1).
Check: y = w = 0 gives 3 + 0 + 1 + 0 = 4 ✓ and 6 + 3 = 9 ✓. (2 marks echelon form, 2 basic/free, 2 parametric form.)

**Q3.**
(a) Step 1: Multipliers: l21 = 4/2 = 2, l31 = 8/2 = 4.
Step 2: After R2 - 2R1 and R3 - 4R1: rows (0, 1, 1) and (0, 3, 5).
Step 3: Multiplier l32 = 3.
Step 4: R3 - 3R2 gives (0, 0, 2).
Step 5: So **L = [[1,0,0],[2,1,0],[4,3,1]], U = [[2,1,1],[0,1,1],[0,0,2]]**.
Step 6: Verify the product row by row.
(b) Step 1: Ly = b: y1 = 4; y2 = 10 - 2(4) = 2; y3 = 24 - 4(4) - 3(2) = 2.
Step 2: Ux = y: 2x3 = 2, x3 = 1; x2 + x3 = 2, x2 = 1; 2x1 + x2 + x3 = 4, x1 = 1.
Step 3: **x = (1, 1, 1).**

**Q4.**
(a) det = 7 - 6 = 1, so the inverse is **[[7, -2],[-3, 1]]**.
(b) Step 1: [B | I]: R3 - R1: (0, 1, 1 | -1, 0, 1).
Step 2: R3 - R2: (0, 0, 1 | -1, -1, 1).
Step 3: R1 - 2R3: (1, 0, 0 | 3, 2, -2).
Step 4: So **B^-1 = [[3,2,-2],[0,1,0],[-1,-1,1]]**.
Step 5: Check the first row of B times the columns of B^-1: 3 - 2 = 1, 2 - 2 = 0, -2 + 2 = 0 ✓.
(c) x = B^-1 (1, 2, 3) = (3 + 4 - 6, 2, -1 - 2 + 3) = **(1, 2, 0)**. Check: row 3 of B gives 1 + 2 + 0 = 3 ✓.

**Q5.**
(a) Step 1: expand along the first column: 2·(3·1 - 2·5) - 1·(0·1 - 1·5) + 0·(...).
Step 2: = 2(3 - 10) - (0 - 5) = 2(-7) + 5 = **-9**.
(b) R4 - R1 gives (0, 0, 0, 1) as the last row, leaving an upper triangular matrix with diagonal 1, 2, 3, 1. det = **6** (a row-addition leaves det unchanged).
(c) Step 1: det(2A) = 2³ det A = 8 × 3 = **24** (each of the 3 rows is doubled).
Step 2: det(A^-1) = 1/det A = **1/3**.
Step 3: det(A²) = (det A)² = **9**.
Step 4: det(A^T A) = det(A^T) det A = 3 × 3 = **9**.

**Q6.** Step 1: det = 2·3 - 1·1 = 5.
Step 2: x = det[[4,1],[7,3]]/5 = (4·3 - 1·7)/5 = **1**; y = det[[2,4],[1,7]]/5 = (2·7 - 1·4)/5 = **2**.
Check: 2 + 2 = 4 ✓, 1 + 6 = 7 ✓.

**Q7.**
(a) Multiply A^2 = A on the left by A^-1: A = I. ∎
(b) (AB)(B^-1 A^-1) = A(B B^-1)A^-1 = A A^-1 = I, and (B^-1 A^-1)(AB) = B^-1 (A^-1 A) B = I. ∎
(c) (I - A)(I + A + A^2) = I + A + A^2 - A - A^2 - A^3 = I - A^3 = I, and the product commutes, so it is a two-sided inverse. ∎
(d) A = [[0,1],[0,0]], B = [[0,0],[1,0]]: AB = [[1,0],[0,0]] but BA = [[0,0],[0,1]].

**Q8.** R2 - R1: (0, 1, 3 | k - 1). R3 - R1: (0, 3, 9 | k^2 - 1). R3 - 3R2: (0, 0, 0 | k^2 - 1 - 3k + 3) = (0, 0, 0 | k^2 - 3k + 2) = (0, 0, 0 | (k - 1)(k - 2)).
(i) **No solution** when k ≠ 1 and k ≠ 2 (inconsistent row).
(ii) **Unique solution: never**, since the third column has no pivot (rank at most 2 < 3).
Step 1: (iii) **Infinitely many solutions** when k = 1 or k = 2. z = t is free, y = k - 1 - 3t, x = 1 - y - z = 2 - k + 2t.
Step 2: For k = 1: (x, y, z) = (1, 0, 0) + t(2, -3, 1).
Step 3: For k = 2: (0, 1, 0) + t(2, -3, 1).

---

# Assignment 2: Vector Spaces, Subspaces and Linear Maps (70 marks)

## Questions

**Q1. (10 marks)** Decide, with proof or counterexample, whether each is a subspace of the stated space.
(a) {(x, y, z) in R^3: x + y + z = 0}  [2]
(b) {(x, y) in R^2: xy ≥ 0}  [2]
(c) {2 × 2 matrices A: det A = 0}  [2]
(d) {p in P_3: p(1) = 0}, and its dimension [2]
(e) the symmetric n × n matrices, and its dimension [2]

**Q2. (5 marks)** Are v1 = (1,2,3), v2 = (2,1,0), v3 = (0,3,6) linearly independent? If not, write one as a combination of the others and state the dimension of their span.

**Q3. (14 marks)** For A = [[1,2,0,1],[2,4,1,4],[1,2,1,3]] find (a) the RREF and the rank [3], (b) a basis for the column space [2], (c) a basis for the row space [2], (d) a basis for the null space [3], (e) a basis for the left null space [3], and (f) verify rank-nullity [1].

**Q4. (8 marks)** (a) Find the coordinates of (3, 1) relative to the basis B = {(1,1), (1,-1)} of R^2 [3]. (b) Show that {1, 1 + x, 1 + x + x^2} is a basis of P_2 and find the coordinates of p(x) = 2 + 3x + x^2 [5].

**Q5. (9 marks)** T: R^2 → R^3 is T(x, y) = (x + y, x - y, 2x). (a) Find its standard matrix [2]. (b) Find ker T and range T and decide whether T is injective or surjective [4]. (c) Let R be rotation by 90° and F be reflection in the line y = x. Compute RF and FR and describe each geometrically [3].

**Q6. (6 marks)** The differentiation operator D acts on P_3 (basis {1, x, x^2, x^3}). Find its matrix, kernel and range, and verify rank-nullity.

**Q7. (10 marks)** Apply Gram-Schmidt to v1 = (1,1,0), v2 = (1,0,1), v3 = (0,1,1). Verify that the result is orthonormal and write the QR factorisation of A = [v1 v2 v3] (only state R in terms of dot products; you need not multiply out).

**Q8. (8 marks)** (a) Find the least-squares line y = c + dx through (0, 1), (1, 3), (2, 4) and verify that the residual is orthogonal to the columns of A [5]. (b) Project b = (3, 0, 3) onto the line through a = (1, 2, 2) and give the projection matrix [3].

## Solutions and Marking Guide

**Q1.**
(a) **Subspace.** It contains 0; if x + y + z = 0 and x' + y' + z' = 0 then the sums add to 0, and c(x + y + z) = 0. It is a plane through the origin of dimension 2.
(b) **Not a subspace.** (1, 0) and (0, -1) are in the set, but (1, 0) + (0, -1) = (1, -1) has xy = -1 < 0.
(c) **Not a subspace.** [[1,0],[0,0]] and [[0,0],[0,1]] are singular but their sum is I, which has det 1.
(d) **Subspace**, since p(1) = 0 and q(1) = 0 give (p + q)(1) = 0 and (cp)(1) = 0. It is the kernel of the evaluation map p → p(1), which is surjective onto R, so dim = 4 - 1 = **3** (basis x - 1, x^2 - 1, x^3 - 1).
(e) **Subspace** since (A + B)^T = A + B and (cA)^T = cA. Dimension = n(n + 1)/2 (choose the n diagonal and n(n - 1)/2 upper entries freely).

**Q2.** Solve a v1 + b v2 = v3 coordinate by coordinate. 3rd coordinate: 3a = 6, so a = 2. 1st coordinate: a + 2b = 0, so b = -1. 2nd coordinate: 2a + b = 3 ✓. So **v3 = 2v1 - v2**: (2, 4, 6) - (2, 1, 0) = (0, 3, 6) ✓. They are **dependent**, and the span has **dimension 2** (v1, v2 are independent since neither is a multiple of the other).

**Q3.**
(a) Step 1: R2 - 2R1 = (0, 0, 1, 2).
Step 2: R3 - R1 = (0, 0, 1, 2).
Step 3: R3 - R2 = 0.
Step 4: **RREF = [[1,2,0,1],[0,0,1,2],[0,0,0,0]], rank 2** (pivots in columns 1 and 3).
(b) The pivot columns of the **original** A: **(1,2,1) and (0,1,1)**.
(c) The nonzero rows of the RREF: **(1,2,0,1) and (0,0,1,2)**.
(d) Free variables x2 = s, x4 = t. x1 = -2s - t, x3 = -2t. Basis: **(-2, 1, 0, 0) and (-1, 0, -2, 1)**.
(e) The left null space has dimension 3 - 2 = 1. The row operations show R1 - R2 + R3 = 0 (that is, (1, 2, 0, 1) - (2, 4, 1, 4) + (1, 2, 1, 3) = 0), so a basis is **(1, -1, 1)**.
(f) rank + nullity = 2 + 2 = 4 = number of columns ✓.

**Q4.**
(a) Solve a(1,1) + b(1,-1) = (3,1): a + b = 3, a - b = 1, so a = 2, b = 1. **[v]_B = (2, 1).**
(b) Step 1: Three vectors in the 3-dimensional space P_2, so it suffices to show independence: a + b(1 + x) + c(1 + x + x^2) = (a + b + c) + (b + c)x + c x^2 = 0 forces c = 0, then b = 0, then a = 0.
Step 2: So it is a basis.
Step 3: For 2 + 3x + x^2: c = 1; b + c = 3 gives b = 2; a + b + c = 2 gives a = -1.
Step 4: **Coordinates (-1, 2, 1).** Check: -1 + 2(1 + x) + (1 + x + x^2) = 2 + 3x + x^2 ✓.

**Q5.**
(a) Columns T(e1) = (1, 1, 2) and T(e2) = (1, -1, 0): **[[1,1],[1,-1],[2,0]]**.
(b) Step 1: T(x, y) = 0 forces x + y = 0, x - y = 0, so x = y = 0.
Step 2: **ker T = {0}**, so T is **injective**.
Step 3: The range is the column space, a plane in R^3 of dimension 2, so T is **not surjective**.
(c) Step 1: R = [[0,-1],[1,0]], F = [[0,1],[1,0]].
Step 2: RF = [[-1,0],[0,1]] (reflection in the y-axis).
Step 3: FR = [[1,0],[0,-1]] (reflection in the x-axis).
Step 4: So RF ≠ FR.

**Q6.** Step 1: D(1) = 0, D(x) = 1, D(x^2) = 2x, D(x^3) = 3x^2, so the matrix is **[[0,1,0,0],[0,0,2,0],[0,0,0,3],[0,0,0,0]]**.
Step 2: Kernel = constants (dimension 1).
Step 3: Range = P_2 (dimension 3). 1 + 3 = 4 = dim P_3 ✓.

**Q7.** q1 = (1,1,0)/sqrt 2. v2 · q1 = 1/sqrt 2, so u2 = (1,0,1) - (1/2)(1,1,0) = (1/2, -1/2, 1), |u2|^2 = 3/2, q2 = (1, -1, 2)/sqrt 6. v3 · q1 = 1/sqrt 2 and v3 · q2 = 1/sqrt 6, so u3 = (0,1,1) - (1/2, 1/2, 0) - (1/6, -1/6, 1/3) = (-2/3, 2/3, 2/3), |u3|^2 = 4/3, q3 = (-1, 1, 1)/sqrt 3.
Verification: q1 · q2 = (1 - 1)/sqrt 12 = 0, q1 · q3 = (-1 + 1)/sqrt 6 = 0, q2 · q3 = (-1 - 1 + 2)/sqrt 18 = 0, and each has unit length. ✓
R = [[|v1|, q1·v2, q1·v3],[0, |u2|, q2·v3],[0, 0, |u3|]] = [[sqrt 2, 1/sqrt 2, 1/sqrt 2],[0, sqrt(3/2), 1/sqrt 6],[0, 0, 2/sqrt 3]].

**Q8.**
(a) Step 1: A = [[1,0],[1,1],[1,2]], b = (1,3,4).
Step 2: A^T A = [[3,3],[3,5]], A^T b = (8, 11).
Step 3: Solve: det = 6, inverse = (1/6)[[5,-3],[-3,3]], so (c, d) = (1/6)(40 - 33, -24 + 33) = **(7/6, 3/2)**.
Step 4: The line is **y = 7/6 + (3/2)x**.
Step 5: Fitted values: 7/6, 8/3, 25/6; residual e = (1 - 7/6, 3 - 8/3, 4 - 25/6) = (-1/6, 1/3, -1/6).
Step 6: Check: e · (1,1,1) = 0 and e · (0,1,2) = 1/3 - 1/3 = 0 ✓.
(b) a · b = 3 + 0 + 6 = 9, a · a = 9, so the projection is p = a = **(1, 2, 2)** (b already has this component; indeed b - p = (2, -2, 1) is orthogonal to a). The projection matrix is P = a a^T/9 = **(1/9)[[1,2,2],[2,4,4],[2,4,4]]**.

---

# Assignment 3: Eigenvalues, Spectral Theory, SVD and Applications (70 marks)

## Questions

**Q1. (12 marks)** (a) Find the eigenvalues and eigenvectors of A = [[2,0,0],[1,3,1],[-1,1,3]], and decide if A is diagonalisable [7]. (b) For B = [[2,1],[1,2]] find P and D with B = PDP^-1 and compute B^10 [5].

**Q2. (8 marks)** A Markov chain has transition matrix P = [[0.9, 0.5],[0.1, 0.5]] (columns sum to 1). (a) Find its eigenvalues [2]. (b) Find the steady state [3]. (c) Starting from (0, 1), find the state after 2 steps and the long-run state [3].

**Q3. (8 marks)** Using A = [[1,1],[1,0]], derive Binet's formula for the Fibonacci numbers F_n (F_0 = 0, F_1 = 1), and use it to explain why F_(n+1)/F_n converges to the golden ratio.

**Q4. (8 marks)** Solve x' = A x with A = [[0,1],[-2,-3]] and x(0) = (1, 0). Is the system stable?

**Q5. (12 marks)** Let S = [[2,-1,0],[-1,2,-1],[0,-1,2]]. (a) Find the eigenvalues and an orthonormal set of eigenvectors [6]. (b) Write the spectral decomposition S = Q Λ Q^T [2]. (c) Is S positive definite? [2] (d) Find the minimum of x^T S x over unit vectors x [2].

**Q6. (12 marks)** Find the full SVD of A = [[3,0],[4,5]]. Then state the condition number, the best rank-1 approximation and its error.

**Q7. (6 marks)** A data set has centred points (2,1), (-2,-1), (1,2), (-1,-2). Find the principal components and the fraction of the variance captured by the first one.

**Q8. (4 marks)** Prove: (a) A and A^T have the same eigenvalues [1]; (b) eigenvectors of a symmetric matrix belonging to distinct eigenvalues are orthogonal [2]; (c) if A is orthogonal and λ is a real eigenvalue then λ = ±1 [1].

## Solutions and Marking Guide

**Q1.**
(a) Expanding det(A - λI) along the first row (only the entry 2 - λ survives): (2 - λ)[(3 - λ)^2 - 1] = (2 - λ)(2 - λ)(4 - λ). So **λ = 2 (algebraic multiplicity 2) and λ = 4**.
For λ = 4: A - 4I = [[-2,0,0],[1,-1,1],[-1,1,-1]]. The first row gives x = 0, the second gives -y + z = 0, so **v = (0, 1, 1)**.
Step 1: For λ = 2: A - 2I = [[0,0,0],[1,1,1],[-1,1,1]].
Step 2: Adding the second and third rows: 2y + 2z = 0 so z = -y, and then x + y + z = 0 gives x = 0.
Step 3: Null space spanned by **(0, 1, -1)** only: geometric multiplicity 1 < 2.
Step 4: So **A is not diagonalisable** (defective).
(b) Step 1: B has λ = 3 with (1,1) and λ = 1 with (1,-1) (trace 4, det 3).
Step 2: P = [[1,1],[1,-1]], D = diag(3, 1).
Step 3: B^10 = P D^10 P^-1 = (1/2)[[3^10 + 1, 3^10 - 1],[3^10 - 1, 3^10 + 1]].
Step 4: With 3^10 = 59049: **[[29525, 29524],[29524, 29525]]**.

**Q2.**
(a) trace = 1.4, det = 0.45 - 0.05 = 0.4, so λ^2 - 1.4λ + 0.4 = 0 gives **λ = 1 and λ = 0.4**.
(b) Solve (P - I)x = 0: -0.1 x1 + 0.5 x2 = 0, so x1 = 5 x2. Normalising so the entries sum to 1: **(5/6, 1/6)**.
(c) Step 1: After 1 step: P(0, 1) = (0.5, 0.5).
Step 2: After 2 steps: P(0.5, 0.5) = (0.45 + 0.25, 0.05 + 0.25) = **(0.7, 0.3)**.
Step 3: The long-run state is **(5/6, 1/6) ≈ (0.833, 0.167)**, approached at the rate 0.4^k.

**Q3.** Step 1: (F_(n+1), F_n)^T = A^n (1, 0)^T. Characteristic polynomial λ^2 - λ - 1 = 0, so λ = φ = (1 + sqrt 5)/2 and ψ = (1 - sqrt 5)/2 with eigenvectors (φ, 1) and (ψ, 1).
Step 2: Write (1, 0) = c1 (φ, 1) + c2 (ψ, 1): c1 + c2 = 0 and c1 φ + c2 ψ = 1, so c1 = 1/(φ - ψ) = 1/sqrt 5 = -c2.
Step 3: Then the second component after n steps is F_n = (φ^n - ψ^n)/sqrt 5.
Step 4: Since |ψ| = 0.618 < 1, ψ^n → 0, so F_n ≈ φ^n/sqrt 5 and **F_(n+1)/F_n → φ ≈ 1.618**.
Step 5: Check: n = 10 gives (122.99 - 0.008)/2.236 = 55 ✓.

**Q4.** Step 1: Eigenvalues: λ^2 + 3λ + 2 = 0, so λ = -1, -2.
Step 2: For λ = -1: (A + I)v = 0 gives v = (1, -1).
Step 3: For λ = -2: (A + 2I)v = 0 gives v = (1, -2). x(0) = c1(1, -1) + c2(1, -2) = (1, 0): c1 + c2 = 1 and -c1 - 2c2 = 0, so c1 = 2, c2 = -1.
**x(t) = 2e^(-t)(1, -1) - e^(-2t)(1, -2) = (2e^(-t) - e^(-2t), -2e^(-t) + 2e^(-2t)).** Check at t = 0: (1, 0) ✓. Both eigenvalues are negative, so the system is **asymptotically stable** (x → 0).

**Q5.**
(a) Expanding det(S - λI) along the first row gives (2 - λ)[(2 - λ)^2 - 1] - (-1)(-1)(2 - λ) = (2 - λ)[(2 - λ)^2 - 2] = 0. So **λ = 2, 2 + sqrt 2, 2 - sqrt 2**.
Eigenvectors: λ = 2: (1, 0, -1)/sqrt 2. λ = 2 + sqrt 2: (1, -sqrt 2, 1)/2. λ = 2 - sqrt 2: (1, sqrt 2, 1)/2. Check for λ = 2 + sqrt 2: first row gives 2 + sqrt 2 = λ ✓; second row -1 - 2 sqrt 2 - 1 = -2 - 2 sqrt 2 = λ(-sqrt 2) ✓. Orthogonality: (1,0,-1)·(1,-sqrt 2,1) = 0 ✓ and (1,-sqrt 2,1)·(1,sqrt 2,1) = 1 - 2 + 1 = 0 ✓.
(b) Q has these three vectors as columns, Λ = diag(2, 2 + sqrt 2, 2 - sqrt 2); S = Q Λ Q^T.
(c) All eigenvalues are positive (the smallest is 2 - sqrt 2 ≈ 0.586), so **S is positive definite**. (Alternatively the leading minors 2, 3, 4 are all positive.)
(d) The minimum of x^T S x over unit vectors is the smallest eigenvalue, **2 - sqrt 2 ≈ 0.586**.

**Q6.** A^T A = [[25,20],[20,25]], eigenvalues 45 (vector (1,1)/sqrt 2) and 5 (vector (1,-1)/sqrt 2). Singular values σ1 = sqrt 45 = 3 sqrt 5 ≈ 6.708 and σ2 = sqrt 5 ≈ 2.236. u1 = A v1/σ1 = (3, 9)/sqrt 2/(3 sqrt 5) = (1, 3)/sqrt 10. u2 = A v2/σ2 = (3, -1)/sqrt 2/sqrt 5 = (3, -1)/sqrt 10.
**A = U Σ V^T with U = (1/sqrt 10)[[1,3],[3,-1]], Σ = diag(3 sqrt 5, sqrt 5), V = (1/sqrt 2)[[1,1],[1,-1]].**
Check: σ1 σ2 = 15 = |det A| ✓.
Step 1: Condition number κ = σ1/σ2 = **3**.
Step 2: Best rank-1 approximation A_1 = σ1 u1 v1^T = 3 sqrt 5 · (1,3)^T (1,1)/(sqrt 10 sqrt 2) = (3 sqrt 5/(2 sqrt 5)) [[1,1],[3,3]] = **(3/2)[[1,1],[3,3]]**, and its 2-norm error is σ2 = **sqrt 5 ≈ 2.236**.
Step 3: Check: A - A_1 = [[1.5, -1.5],[-0.5, 0.5]] has rank 1 and Frobenius norm sqrt(2.25 + 2.25 + 0.25 + 0.25) = sqrt 5 = σ2 ✓.

**Q7.** Step 1: Covariance = (1/(n - 1)) X^T X with n = 4: Σ x^2 = 4 + 4 + 1 + 1 = 10, Σ y^2 = 1 + 1 + 4 + 4 = 10, Σ xy = 2 + 2 + 2 + 2 = 8.
Step 2: C = (1/3)[[10, 8],[8, 10]].
Step 3: Eigenvalues of [[10,8],[8,10]] are 18 and 2, so C has eigenvalues **6 and 2/3** with eigenvectors **PC1 = (1, 1)/sqrt 2** and **PC2 = (1, -1)/sqrt 2**.
Step 4: The first component captures 6/(6 + 2/3) = **90%** of the variance.

**Q8.**
(a) det(A^T - λI) = det((A - λI)^T) = det(A - λI), so the characteristic polynomials agree. ∎
(b) If Av = λv, Aw = μw, A = A^T, λ ≠ μ: λ(v · w) = (Av) · w = v · (A^T w) = v · (Aw) = μ(v · w). So (λ - μ)(v · w) = 0, hence v · w = 0. ∎
(c) |Av| = |v| for orthogonal A, and |Av| = |λ||v|, so |λ| = 1 and a real λ is ±1. ∎
