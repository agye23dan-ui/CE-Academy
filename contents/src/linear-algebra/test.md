# Linear Algebra: Class Test

Duration: 60 minutes. Calculators not allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** The rank of [[1,2],[2,4]] is
A) 0  B) 1  C) 2  D) 4

**2.** det [[1,2],[3,4]] equals
A) -2  B) 2  C) 10  D) -10

**3.** If A is 4 × 4 with det A = 2, then det(3A) equals
A) 6  B) 18  C) 54  D) 162

**4.** For invertible n × n matrices A and B, (AB)^-1 equals
A) A^-1 B^-1  B) B^-1 A^-1  C) (BA)^-1 only if AB = BA  D) A^-1 + B^-1

**5.** A 3 × 5 matrix has rank 2. The dimension of its null space is
A) 1  B) 2  C) 3  D) 5

**6.** Which of these is a subspace of R^2?
A) {(x, y): x + y = 1}  B) {(x, y): x = y}  C) {(x, y): x ≥ 0}  D) {(x, y): xy = 1}

**7.** The eigenvalues of [[1,2],[2,1]] are
A) 1 and 2  B) 3 and -1  C) 3 and 1  D) 2 and -2

**8.** A 2 × 2 matrix has trace 7 and determinant 10. Its eigenvalues are
A) 1 and 10  B) 2 and 5  C) -2 and -5  D) 3 and 4

**9.** Eigenvectors of a real symmetric matrix belonging to distinct eigenvalues are
A) equal  B) orthogonal  C) parallel  D) unrelated

**10.** The dot product (1, 2, 3) · (4, -5, 6) equals
A) 0  B) 12  C) 28  D) 32

**11.** The projection of (2, 2) onto the line through (1, 0) is
A) (2, 0)  B) (0, 2)  C) (1, 0)  D) (2, 2)

**12.** If Ax = b has a solution and the null space of A is {0}, the solution is
A) not unique  B) unique  C) nonexistent  D) the zero vector

**13.** Four vectors in R^3 are always
A) independent  B) dependent  C) a basis  D) orthogonal

**14.** A 3 × 3 matrix with eigenvalues 1, 2, 3 is
A) singular and diagonalisable  B) invertible and diagonalisable  C) invertible but possibly not diagonalisable  D) singular only

**15.** The determinant of the upper triangular matrix with diagonal 2, 3, 4 is
A) 9  B) 14  C) 24  D) depends on the other entries

**16.** The singular values of diag(3, -4) are
A) 3 and -4  B) 3 and 4  C) 4 and 5  D) 1 and 7

**17.** The plane x + y + z = 0 in R^3 has dimension
A) 1  B) 2  C) 3  D) 0

**18.** If Q is an orthogonal matrix, then |Qx| equals
A) 0  B) 1  C) |x|  D) 2|x|

**19.** The normal equations for least squares are
A) A x = b  B) A^T A x = b  C) A^T A x = A^T b  D) A A^T x = A^T b

**20.** The matrix [[1,1],[0,1]] is
A) diagonalisable  B) not diagonalisable  C) singular  D) orthogonal

## Section B: Problems (40 marks)

**B1. (10 marks)** Solve x + y - z = 1, 2x + 3y + z = 9, x - y + 2z = 5 by Gaussian elimination. (a) Find the solution [6]. (b) Compute the determinant of the coefficient matrix from your pivots [2]. (c) State whether the coefficient matrix is invertible and why [2].

**B2. (10 marks)** Let A = [[1,1,2],[2,1,3],[1,0,1]]. (a) Find the rank [2]. (b) Find a basis for the column space [2]. (c) Find a basis for the null space [3]. (d) Find a basis for the left null space [3].

**B3. (10 marks)** Let A = [[4,1],[2,3]]. (a) Find the eigenvalues and eigenvectors [4]. (b) Write A = P D P^-1 [2]. (c) Find a formula for A^n [3]. (d) Is x_(k+1) = A x_k stable? [1]

**B4. (10 marks)** Fit a line y = c + dt to the data (1, 2), (2, 3), (3, 5) by least squares. (a) Set up and solve the normal equations [5]. (b) Verify that the residual is orthogonal to both columns of A [3]. (c) Predict y at t = 4 [2].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **A** · 3 **D** · 4 **B** · 5 **C** · 6 **B** · 7 **B** · 8 **B** · 9 **B** · 10 **B** · 11 **A** · 12 **B** · 13 **B** · 14 **B** · 15 **C** · 16 **B** · 17 **B** · 18 **C** · 19 **C** · 20 **B**

Brief reasons:
1. The second row is twice the first.
2. 1·4 - 2·3 = -2.
3. 3^4 · 2 = 162.
4. The order reverses.
5. n - r = 5 - 2 = 3.
6. A subspace must contain 0 and be closed under both operations; only x = y qualifies.
7. Trace 2, determinant -3: λ = 3, -1.
8. λ^2 - 7λ + 10 = 0.
9. Standard result for symmetric matrices.
10. 4 - 10 + 18 = 12.
11. ((2, 2)·(1, 0))/1 · (1, 0) = (2, 0).
12. The general solution is a particular solution plus the null space.
13. More vectors than the dimension.
14. Three distinct eigenvalues give three independent eigenvectors and a nonzero determinant.
15. The determinant is the product of the diagonal.
16. Singular values are the absolute values of the diagonal entries.
17. One linear condition removes one dimension.
18. Orthogonal maps preserve length.
19. Standard.
20. One eigenvalue (1) with a one-dimensional eigenspace.

### Section B

**B1.**
(a) Step 1: R2 - 2R1: (0, 1, 3 | 7).
Step 2: R3 - R1: (0, -2, 3 | 4).
Step 3: R3 + 2R2: (0, 0, 9 | 18).
Step 4: So z = 2, y = 7 - 6 = 1, x = 1 - 1 + 2 = 2.
Step 5: **(x, y, z) = (2, 1, 2).** Check: 2 + 1 - 2 = 1 ✓, 4 + 3 + 2 = 9 ✓, 2 - 1 + 4 = 5 ✓. (3 marks elimination, 3 back-substitution and check.)
(b) The pivots are 1, 1, 9 and no row swaps were used, so **det = 1 · 1 · 9 = 9**. (Direct cofactor expansion also gives 9.)
(c) det ≠ 0 (equivalently, three pivots), so the matrix is **invertible** and the solution is unique.

**B2.**
(a) Step 1: R2 - 2R1 = (0, -1, -1) and R3 - R1 = (0, -1, -1).
Step 2: Subtracting gives a zero row, so there are two pivots.
Step 3: **Rank 2.** (Observe that row 3 = row 2 - row 1.)
(b) Pivot columns 1 and 2: **(1, 2, 1) and (1, 1, 0)**. (Column 3 = column 1 + column 2.)
(c) The relation column 3 = column 1 + column 2 gives the single special solution **(1, 1, -1)** (free variable x3 = 1). Dimension 3 - 2 = 1 ✓.
(d) Row 3 = row 2 - row 1, so y^T A = 0 with **y = (1, -1, 1)**: row 1 - row 2 + row 3 = (1 - 2 + 1, 1 - 1 + 0, 2 - 3 + 1) = (0, 0, 0) ✓. Dimension 3 - 2 = 1 ✓.

**B3.**
(a) Step 1: trace 7, det 10, so λ^2 - 7λ + 10 = 0 gives **λ = 5 and λ = 2**.
Step 2: For λ = 5: (A - 5I) = [[-1,1],[2,-2]], v = (1, 1).
Step 3: For λ = 2: (A - 2I) = [[2,1],[2,1]], v = (1, -2).
(b) **P = [[1,1],[1,-2]], D = diag(5, 2)**, and P^-1 = (1/3)[[2,1],[1,-1]].
(c) A^n = P D^n P^-1 = **(1/3)[[2·5^n + 2^n, 5^n - 2^n],[2·5^n - 2·2^n, 5^n + 2·2^n]]**. Check n = 1: (1/3)[[12, 3],[6, 9]] = [[4,1],[2,3]] ✓.
(d) **Unstable**: the eigenvalue 5 has |λ| > 1, so the iterates grow like 5^k.

**B4.**
(a) Step 1: A = [[1,1],[1,2],[1,3]], b = (2, 3, 5).
Step 2: A^T A = [[3,6],[6,14]], A^T b = (10, 23).
Step 3: Solve: det = 42 - 36 = 6, inverse = (1/6)[[14,-6],[-6,3]] (c, d) = (1/6)(140 - 138, -60 + 69) = **(1/3, 3/2)**.
Step 4: The line is y = 1/3 + (3/2)t.
(b) Fitted values: 11/6, 10/3, 29/6. Residual e = (2 - 11/6, 3 - 10/3, 5 - 29/6) = (1/6, -1/3, 1/6). e · (1,1,1) = 0 ✓. e · (1,2,3) = 1/6 - 2/3 + 1/2 = 0 ✓.
(c) y(4) = 1/3 + 6 = **19/3 ≈ 6.33**.
