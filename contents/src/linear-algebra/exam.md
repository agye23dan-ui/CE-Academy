# Linear Algebra: Final Examination

Duration: 3 hours. No calculators or notes. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** A consistent system of 3 equations in 4 unknowns has
A) a unique solution  B) no solution  C) infinitely many solutions  D) exactly two solutions

**2.** det [[2,1],[5,3]] equals
A) 1  B) 6  C) 11  D) -1

**3.** The inverse of diag(2, 4) is
A) diag(2, 4)  B) diag(1/2, 1/4)  C) diag(4, 2)  D) it does not exist

**4.** A 4 × 6 matrix has rank 3. The dimension of its null space is
A) 1  B) 2  C) 3  D) 4

**5.** A 3 × 3 matrix A has eigenvalues 1, 2, 3. Then det(A^2) equals
A) 6  B) 12  C) 14  D) 36

**6.** For an invertible 3 × 3 matrix with det A = 5, det(adj A) equals
A) 5  B) 25  C) 125  D) 1/5

**7.** The space of 3 × 3 symmetric matrices has dimension
A) 3  B) 4  C) 6  D) 9

**8.** For any real matrix A, rank(A^T A) equals
A) rank(A)  B) 2 rank(A)  C) rank(A)^2  D) nothing in general

**9.** A projection matrix P satisfies
A) P^2 = I  B) P^2 = P  C) P^2 = 0  D) P^-1 = P^T always

**10.** The angle between (1, 1, 0) and (0, 1, 1) is
A) 0°  B) 30°  C) 45°  D) 60°

**11.** The eigenvalues of the rotation matrix [[0,-1],[1,0]] are
A) 1 and -1  B) i and -i  C) 0 and 0  D) 1 and i

**12.** The singular values of A are
A) the eigenvalues of A  B) the square roots of the eigenvalues of A^T A  C) the diagonal entries of A  D) the eigenvalues of A^T A

**13.** Which symmetric matrix is positive definite?
A) [[1,2],[2,1]]  B) [[2,1],[1,2]]  C) [[1,3],[3,1]]  D) [[0,1],[1,0]]

**14.** The eigenvalues of [[2,1],[0,3]] are
A) 2 and 3  B) 1 and 3  C) 5 and 6  D) 2 and 1

**15.** If λ is an eigenvalue of an invertible matrix A, then an eigenvalue of A^-1 is
A) λ  B) -λ  C) 1/λ  D) λ^2

**16.** For a linear map T: V → W, dim(ker T) + dim(range T) equals
A) dim W  B) dim V  C) dim V + dim W  D) 0

**17.** The matrix [[1,2],[2,4]] has singular values
A) 1 and 4  B) 5 and 0  C) 2 and 3  D) 1 and 2

**18.** If Q is orthogonal, then Q^-1 equals
A) Q  B) -Q  C) Q^T  D) Q^2

**19.** The solution of Ax = b with minimum norm (when solutions exist) is
A) A^-1 b always  B) A^+ b  C) A^T b  D) the zero vector

**20.** If A has singular values σ1 ≥ σ2 ≥ ..., the 2-norm of the error of the best rank-1 approximation is
A) σ1  B) σ2  C) σ1 - σ2  D) σ1 + σ2

## Section B: Short Questions (40 marks)

**B1. (5)** Show that {(1,0,1), (0,1,1), (1,1,0)} is a basis of R^3 and find the coordinates of (2, 3, 1) relative to it.

**B2. (5)** Find the inverse of [[1,2,3],[0,1,4],[5,6,0]].

**B3. (5)** Prove: if A is a square matrix with A^2 = 0 then I + A is invertible and find its inverse.

**B4. (5)** Let T be rotation of the plane by 45°. Write its matrix, compute T^2 and describe it, and find the smallest positive k with T^k = I.

**B5. (5)** Project b = (1, 2, 3) onto the plane spanned by (1, 0, 1) and (0, 1, 0). Verify that the residual is orthogonal to the plane.

**B6. (5)** Find the eigenvalues and eigenvectors of A = [[2,2],[1,3]] and deduce the eigenvalues of A^-1 and A^3.

**B7. (5)** For the symmetric matrix S = [[2,1],[1,2]], find the maximum and minimum of x^T S x on the unit circle and where they occur.

**B8. (5)** A 3 × 3 matrix A has singular values 4, 2 and 1. State its rank, |det A|, the condition number, the Frobenius norm, the 2-norm of the best rank-2 approximation error and the singular values of A^-1.

## Section C: Long Questions (answer any four, 10 marks each)

**C1.** Consider the system x + 2y - z = 1, 2x + 5y + a z = 3, x + 3y + 2z = c.
(a) Reduce it to echelon form. [3]
(b) Find the determinant of the coefficient matrix in terms of a. [2]
(c) For which (a, c) is there a unique solution, no solution, infinitely many solutions? [3]
(d) For a = 1, c = 2 give the general solution. [2]

**C2.** Let W be the subspace of R^4 spanned by w1 = (1,1,0,0), w2 = (0,1,1,0), w3 = (0,0,1,1).
(a) Show that dim W = 3. [2]
(b) Find a basis for the orthogonal complement W^⊥. [3]
(c) Find the projection of e1 = (1,0,0,0) onto W^⊥. [2]
(d) Hence find the projection of e1 onto W. [3]

**C3.** Let A = [[3,1],[0,2]].
(a) Find the eigenvalues and eigenvectors and diagonalise A. [4]
(b) Find a formula for A^k. [3]
(c) Solve x' = A x with x(0) = (1, 1). [2]
(d) Is the system x' = Ax stable? Is x_(k+1) = A x_k stable? [1]

**C4.** Let A = [[5,2],[2,2]].
(a) Find the eigenvalues and an orthonormal eigenbasis, and write A = Q Λ Q^T. [4]
(b) Show that A is positive definite. [2]
(c) Find the maximum of x^T A x over unit vectors. [1]
(d) The curve 5x^2 + 4xy + 2y^2 = 1 is an ellipse. Find the lengths of its semi-axes and their directions. [3]

**C5.** Let A = [[3,2,2],[2,3,-2]].
(a) Find the singular values and the full SVD of A. [6]
(b) State the rank of A and a basis for its null space. [2]
(c) Use the pseudoinverse to find the minimum-norm solution of Ax = (5, 1). [2]

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **C** · 2 **A** · 3 **B** · 4 **C** · 5 **D** · 6 **B** · 7 **C** · 8 **A** · 9 **B** · 10 **D** · 11 **B** · 12 **B** · 13 **B** · 14 **A** · 15 **C** · 16 **B** · 17 **B** · 18 **C** · 19 **B** · 20 **B**

Brief reasons:
1. Consistent, with a free variable since 3 < 4 (rank ≤ 3 < 4).
2. 2·3 - 1·5 = 1.
3. Invert each diagonal entry.
4. 6 - 3 = 3.
5. det A = 6, so det(A^2) = 36.
6. det(adj A) = (det A)^(n-1) = 25 for n = 3.
7. n(n + 1)/2 = 6.
8. The null spaces of A and A^T A coincide.
9. Idempotent.
10. cos θ = 1/2.
11. λ^2 + 1 = 0.
12. Definition.
13. Trace 4 and determinant 3 give eigenvalues 1, 3 > 0. In A the determinant is -3, in C it is -8, in D it is -1, all negative.
14. Triangular matrix.
15. A v = λ v gives A^-1 v = v/λ.
16. Rank-nullity.
17. Rank 1; A^T A = [[5,10],[10,20]] has eigenvalues 25 and 0, so σ = 5, 0.
18. Definition.
19. Pseudoinverse solution.
20. Eckart-Young.

## Section B solutions

**B1.** Step 1: Let M have the vectors as columns: M = [[1,0,1],[0,1,1],[1,1,0]]. det M = 1(0 - 1) - 0 + 1(0 - 1) = -2 ≠ 0, so the three vectors are independent and form a basis of R^3.
Step 2: Solve a(1,0,1) + b(0,1,1) + c(1,1,0) = (2,3,1): a + c = 2, b + c = 3, a + b = 1.
Step 3: Adding the first two and subtracting the third gives 2c = 4, so c = 2, then a = 0, b = 1.
Step 4: **Coordinates (0, 1, 2).** Check: (0,1,1) + 2(1,1,0) = (2,3,1) ✓. (2 marks determinant, 3 marks coordinates.)

**B2.** Row-reduce [A | I] with A = [[1,2,3],[0,1,4],[5,6,0]]:
Step 1: R3 - 5R1: (0, -4, -15 | -5, 0, 1).
Step 2: R3 + 4R2: (0, 0, 1 | -5, 4, 1), so the third pivot is 1.
Step 3: R2 - 4R3: (0, 1, 0 | 20, -15, -4).
Step 4: R1 - 3R3: (1, 2, 0 | 16, -12, -3).
Step 5: R1 - 2R2: (1, 0, 0 | -24, 18, 5).
The result is **A^-1 = [[-24, 18, 5],[20, -15, -4],[-5, 4, 1]]** (det A = 1). Verify: row 1 of A times the columns of the inverse gives 1, 0, 0; row 2 gives 0, 1, 0; row 3 gives 0, 0, 1. (3 marks method, 2 marks answer.)

**B3.** (I + A)(I - A) = I - A^2 = I, and (I - A)(I + A) = I - A^2 = I as well, so I + A is invertible with **(I + A)^-1 = I - A**. ∎

**B4.** Step 1: T = (1/sqrt 2)[[1,-1],[1,1]].
Step 2: T^2 = (1/2)[[0,-2],[2,0]] = **[[0,-1],[1,0]]**, rotation by 90° (angles add).
Step 3: T^k is rotation by 45k°, which is the identity first when 45k = 360, so **k = 8**.

**B5.** The two spanning vectors (1,0,1) and (0,1,0) are orthogonal, so the projection is the sum of the projections onto each: ((1,2,3)·(1,0,1)/2)(1,0,1) + ((1,2,3)·(0,1,0)/1)(0,1,0) = 2(1,0,1) + 2(0,1,0) = **(2, 2, 2)**. Residual e = (1,2,3) - (2,2,2) = (-1, 0, 1). e · (1,0,1) = 0 ✓ and e · (0,1,0) = 0 ✓.

**B6.** Step 1: trace 5, det 4, so λ^2 - 5λ + 4 = 0 gives **λ = 4, 1**.
Step 2: For λ = 4: A - 4I = [[-2,2],[1,-1]], v = (1, 1).
Step 3: For λ = 1: A - I = [[1,2],[1,2]], v = (2, -1).
Step 4: A^-1 has eigenvalues **1/4 and 1** (same eigenvectors) and A^3 has eigenvalues **64 and 1**.

**B7.** S has eigenvalues 3 (vector (1,1)/sqrt 2) and 1 (vector (1,-1)/sqrt 2). On the unit circle x^T S x ranges between the extreme eigenvalues: **maximum 3 at ±(1,1)/sqrt 2 and minimum 1 at ±(1,-1)/sqrt 2**. (Check: x = (1,0) gives 2, between 1 and 3.)

**B8.** Step 1: **Rank 3** (all singular values nonzero). |det A| = 4 · 2 · 1 = **8**.
Step 2: Condition number 4/1 = **4**.
Step 3: Frobenius norm sqrt(16 + 4 + 1) = **sqrt 21**.
Step 4: The best rank-2 approximation drops σ3, so its 2-norm error is **1**.
Step 5: A^-1 has singular values **1, 1/2, 1/4** (the reciprocals).

## Section C solutions

**C1.**
(a) R2 - 2R1: (0, 1, a + 2 | 1). R3 - R1: (0, 1, 3 | c - 1). R3 - R2: (0, 0, 1 - a | c - 2). The echelon form is [[1,2,-1 | 1],[0,1,a + 2 | 1],[0,0,1 - a | c - 2]].
(b) The row operations used do not change the determinant, so det = 1 · 1 · (1 - a) = **1 - a**.
(c) Step 1: If a ≠ 1: det ≠ 0, so a **unique solution** for every c.
Step 2: If a = 1 and c ≠ 2: the last row reads 0 = c - 2 ≠ 0, so **no solution**.
Step 3: If a = 1 and c = 2: the last row is zero, and there is a free variable, so **infinitely many solutions**.
(d) With a = 1, c = 2: z = t, y = 1 - 3t (from y + 3z = 1), x = 1 - 2y + z = 1 - 2 + 6t + t = -1 + 7t. **(x, y, z) = (-1, 0, 0) + t(7, -3, 1).** Check in the third equation: x + 3y + 2z = -1 + 7t + 3 - 9t + 2t = 2 ✓.

**C2.**
(a) Place w1, w2, w3 as rows: the matrix [[1,1,0,0],[0,1,1,0],[0,0,1,1]] is already in echelon form with three pivots (columns 1, 2, 3), so the vectors are independent and **dim W = 3**.
(b) Step 1: W^⊥ is the null space of this matrix: v1 + v2 = 0, v2 + v3 = 0, v3 + v4 = 0.
Step 2: With v4 = -s: v3 = s, v2 = -s, v1 = s.
Step 3: **Basis: (1, -1, 1, -1)**, and dim W^⊥ = 4 - 3 = 1 ✓.
(c) With n = (1,-1,1,-1), n · n = 4 and e1 · n = 1, so the projection onto W^⊥ is **(1/4)(1, -1, 1, -1)**.
(d) e1 = (projection onto W) + (projection onto W^⊥), so the projection onto W is e1 - (1/4)(1,-1,1,-1) = **(3/4, 1/4, -1/4, 1/4)**. Check that it lies in W: it is orthogonal to n since 3/4 - 1/4 - 1/4 - 1/4 = 0 ✓.

**C3.**
(a) Step 1: A is upper triangular, so **λ = 3 and λ = 2**.
Step 2: For λ = 3: (A - 3I) = [[0,1],[0,-1]], v = (1, 0).
Step 3: For λ = 2: (A - 2I) = [[1,1],[0,0]], v = (1, -1).
Step 4: **P = [[1,1],[0,-1]], D = diag(3, 2)** and P^-1 = [[1,1],[0,-1]] (P is its own inverse).
(b) A^k = P D^k P^-1 = [[3^k, 2^k],[0, -2^k]] [[1,1],[0,-1]] = **[[3^k, 3^k - 2^k],[0, 2^k]]**. Check k = 1: [[3,1],[0,2]] ✓.
(c) Write (1, 1) = c1(1, 0) + c2(1, -1): c2 = -1, c1 = 2. **x(t) = 2e^(3t)(1, 0) - e^(2t)(1, -1) = (2e^(3t) - e^(2t), e^(2t)).** Check: x(0) = (1, 1) ✓ and x'(0) = (6 - 2, 2) = (4, 2) = A(1, 1) ✓.
(d) x' = Ax is **unstable** (λ = 3, 2 have positive real part) and x_(k+1) = A x_k is **unstable** (|λ| > 1).

**C4.**
(a) Step 1: trace 7, det 6, so λ^2 - 7λ + 6 = 0 gives **λ = 6 and λ = 1**.
Step 2: For λ = 6: A - 6I = [[-1,2],[2,-4]], v = (2, 1), normalised (2, 1)/sqrt 5.
Step 3: For λ = 1: A - I = [[4,2],[2,1]], v = (1, -2)/sqrt 5.
Step 4: **Q = (1/sqrt 5)[[2,1],[1,-2]], Λ = diag(6, 1).** Check orthogonality: 2 - 2 = 0 ✓.
(b) Eigenvalues 6 and 1 are both positive, so A is positive definite (also: leading minors 5 and 6 are positive).
(c) The maximum of x^T A x over unit vectors is **λ_max = 6**, attained at ±(2, 1)/sqrt 5.
(d) In the eigenbasis the curve is 6u^2 + v^2 = 1, an ellipse with semi-axis 1/sqrt 6 ≈ 0.408 along **(2, 1)/sqrt 5** (short axis) and semi-axis 1 along **(1, -2)/sqrt 5** (long axis).

**C5.**
(a) Step 1: A A^T = [[17, 8],[8, 17]] has eigenvalues 25 and 9, so **σ1 = 5, σ2 = 3**.
Step 2: A^T A = [[13,12,2],[12,13,-2],[2,-2,8]] has eigenvalues 25, 9, 0 with eigenvectors v1 = (1, 1, 0)/sqrt 2, v2 = (1, -1, 4)/sqrt 18 = (1, -1, 4)/(3 sqrt 2), v3 = (2, -2, -1)/3.
Step 3: Then u1 = A v1/5 = (1, 1)/sqrt 2 and u2 = A v2/3 = (1, -1)/sqrt 2.
**A = U Σ V^T with U = (1/sqrt 2)[[1,1],[1,-1]], Σ = [[5,0,0],[0,3,0]] and V = [v1 v2 v3].** (Check: A v3 = (6 - 4 - 2, 4 - 6 + 2) = (0, 0) ✓.)
(b) **Rank 2.** The null space is one-dimensional with basis **(2, -2, -1)** (equal to 3 v3).
(c) x = A^+ b = Σ (u_i · b/σ_i) v_i. u1 · b = 6/sqrt 2, so the first term is (6/(5 sqrt 2)) v1 = (3/5)(1, 1, 0). u2 · b = 4/sqrt 2, so the second term is (4/(3 sqrt 2)) v2 = (2/9)(1, -1, 4). **x = (37/45, 17/45, 40/45) ≈ (0.822, 0.378, 0.889).** Check: Ax = ((111 + 34 + 80)/45, (74 + 51 - 80)/45) = (5, 1) ✓. It is orthogonal to the null space direction: 2·37 - 2·17 - 40 = 0 ✓.
