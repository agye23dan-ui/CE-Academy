# Linear Algebra: Complete Lecture Notes

How to use these notes: work through each worked example by hand before reading the answer. Matrices are written row by row: [[a, b],[c, d]] is the matrix with rows (a, b) and (c, d). A^T is the transpose, A^-1 the inverse, and det A the determinant. Vectors are columns unless stated.

## Chapter 1. Linear Systems and Gaussian Elimination

### 1.1 Systems and matrices
A linear system of m equations in n unknowns can be written Ax = b, with A the m × n coefficient matrix, x the unknown vector and b the right-hand side. The augmented matrix [A | b] stores the whole system.

Three **elementary row operations** do not change the solution set:
1. Swap two rows.
2. Multiply a row by a nonzero constant.
3. Add a multiple of one row to another.

### 1.2 Echelon forms
- **Row echelon form (REF):** all zero rows at the bottom, each leading entry (pivot) to the right of the pivot above.
- **Reduced row echelon form (RREF):** REF with every pivot equal to 1 and zeros above and below each pivot. The RREF of a matrix is unique.
- Pivot columns correspond to **basic variables**. Non-pivot columns correspond to **free variables**.

### 1.3 Solving: the three possible outcomes
Reduce [A | b] to echelon form.
- A row of the form [0 0 ... 0 | c] with c ≠ 0 means the system is **inconsistent** (no solution).
- Otherwise it is consistent. If there are no free variables the solution is **unique**; if there are free variables there are **infinitely many** solutions, described by parameters.

**Example.** x + y + z = 2, 2x - y + z = -1, x + 3y - 2z = 9. R2 - 2R1 gives -3y - z = -5, R3 - R1 gives 2y - 3z = 7. From the first z = 5 - 3y, then 2y - 3(5 - 3y) = 7 gives 11y = 22, so y = 2, z = -1, x = 1. Unique solution (1, 2, -1).

A homogeneous system Ax = 0 always has the trivial solution x = 0. It has nontrivial solutions iff there is a free variable, which is guaranteed when m < n.

### 1.4 Rank
The **rank** of A is the number of pivots. For an m × n matrix, rank ≤ min(m, n). A system Ax = b is consistent iff rank A = rank [A | b]. For a square n × n matrix, rank n means a unique solution for every b.

## Chapter 2. Matrix Algebra

### 2.1 Operations
- Addition and scalar multiplication are entrywise.
- Product: (AB)_ij = row i of A dotted with column j of B. It requires (m × n)(n × p) and gives m × p. Matrix multiplication is **associative** and **distributive**, but **not commutative** in general: AB ≠ BA.
- Column view: Ax is a linear combination of the columns of A with weights from x. Row view: each row of AB is a combination of the rows of B.
- Transpose rules: (A^T)^T = A, (A + B)^T = A^T + B^T, (AB)^T = B^T A^T.

### 2.2 Inverse
A square matrix A is **invertible** if some B satisfies AB = BA = I; then B = A^-1. Facts:
- (AB)^-1 = B^-1 A^-1 (note the reversed order). (A^T)^-1 = (A^-1)^T.
- For a 2 × 2 matrix [[a, b],[c, d]] with ad - bc ≠ 0: inverse = (1/(ad - bc)) [[d, -b],[-c, a]].
- To compute A^-1: row-reduce [A | I] to [I | A^-1]. If A cannot be reduced to I, it is singular.
- **Invertible matrix theorem** (n × n): the following are equivalent: A is invertible; RREF is I; rank A = n; Ax = 0 has only x = 0; Ax = b has a unique solution for each b; columns are independent; columns span R^n; det A ≠ 0; 0 is not an eigenvalue.

### 2.3 Elementary matrices and LU factorisation
Each row operation is multiplication on the left by an elementary matrix. If elimination needs no row swaps, A = LU with L lower triangular (1s on the diagonal, holding the multipliers) and U upper triangular (the echelon form). With swaps: PA = LU.

To solve Ax = b: solve Ly = b by forward substitution, then Ux = y by back substitution. Cost is about (2/3)n^3 operations for the factorisation, but each extra right-hand side costs only O(n^2). This is why LU is the workhorse of numerical linear algebra.

**Example.** A = [[2,1,1],[4,3,3],[8,7,9]] has L = [[1,0,0],[2,1,0],[4,3,1]] and U = [[2,1,1],[0,1,1],[0,0,2]].

## Chapter 3. Determinants

### 3.1 Definition and computation
det [[a, b],[c, d]] = ad - bc. For 3 × 3, expand along a row using cofactors: det A = Σ_j a_ij C_ij with C_ij = (-1)^(i+j) M_ij, where M_ij is the minor (determinant after deleting row i and column j). Choose the row or column with the most zeros.

**Properties.**
- Swapping two rows multiplies det by -1. Scaling a row by c scales det by c. Adding a multiple of one row to another leaves det unchanged.
- det of a triangular matrix = product of the diagonal entries. Hence det A = ± (product of pivots) from elimination. This is the efficient method.
- det(AB) = det A det B. det(A^T) = det A. det(A^-1) = 1/det A. det(cA) = c^n det A for n × n.
- det A = 0 iff A is singular.

### 3.2 Geometric meaning
|det A| is the factor by which the linear map x → Ax scales volume (area in 2D). The sign records orientation (a negative determinant means a reflection is involved). For vectors u, v in R^3, the volume of the parallelepiped is |u · (v × w)| = |det [u v w]|.

### 3.3 Cramer's rule and the adjugate
If det A ≠ 0 then x_i = det(A_i)/det(A), where A_i is A with column i replaced by b. Also A^-1 = (1/det A) adj(A), where adj(A) is the transpose of the cofactor matrix. Both are elegant but expensive for large n; use elimination in practice.

## Chapter 4. Vector Spaces

### 4.1 Definition and subspaces
A **vector space** V over R is a set with addition and scalar multiplication satisfying the eight axioms (closure, commutativity, associativity, zero vector, additive inverses, distributive laws, scalar associativity, and 1v = v). Examples: R^n; the space of m × n matrices; polynomials of degree ≤ n (P_n); continuous functions on [a, b].

A **subspace** W of V is a subset that is itself a vector space. The **subspace test**: W is nonempty (contains 0) and is closed under addition and scalar multiplication.
- The set {(x, y, z): x + y + z = 0} is a subspace of R^3 (a plane through the origin).
- The set {(x, y): x ≥ 0} is not (not closed under negative scalars).
- The set of singular 2 × 2 matrices is not (the sum of two singular matrices can be invertible).

### 4.2 Span, independence, basis, dimension
- **Span** of v_1, ..., v_k: all linear combinations. It is a subspace.
- **Linearly independent:** c_1 v_1 + ... + c_k v_k = 0 only for all c_i = 0. Test: put the vectors as columns of a matrix and check that every column has a pivot.
- A **basis** is an independent spanning set. Every basis of V has the same number of vectors, called the **dimension** dim V.
- In an n-dimensional space: any n independent vectors form a basis, any n spanning vectors form a basis, and any set with more than n vectors is dependent.
- **Coordinates:** relative to a basis B = {b_1, ..., b_n}, the vector v = c_1 b_1 + ... + c_n b_n has coordinate vector [v]_B = (c_1, ..., c_n). If P_B has the basis vectors as columns, then v = P_B [v]_B.

### 4.3 The four fundamental subspaces
For an m × n matrix A of rank r:
- **Column space** C(A) ⊆ R^m: dimension r. Basis: the pivot columns of A (original columns, not the echelon ones).
- **Null space** N(A) ⊆ R^n: dimension n - r. Basis: one special solution for each free variable.
- **Row space** C(A^T) ⊆ R^n: dimension r. Basis: the nonzero rows of the echelon form.
- **Left null space** N(A^T) ⊆ R^m: dimension m - r.

**Rank-nullity theorem:** rank A + nullity A = n (the number of columns). **Orthogonality:** the row space is the orthogonal complement of the null space (in R^n), and the column space is the orthogonal complement of the left null space (in R^m).

**Example.** A = [[1,2,0,1],[2,4,1,4],[1,2,1,3]] reduces to [[1,2,0,1],[0,0,1,2],[0,0,0,0]], so r = 2. Pivot columns 1 and 3 give a column-space basis (1,2,1), (0,1,1). Free variables x2 = s, x4 = t give x1 = -2s - t, x3 = -2t, so the null space basis is (-2,1,0,0) and (-1,0,-2,1). Check: 2 + 2 = 4 columns.

## Chapter 5. Linear Transformations

A map T: V → W is **linear** if T(u + v) = T(u) + T(v) and T(cu) = cT(u). Every linear map R^n → R^m is multiplication by an m × n matrix whose columns are T(e_1), ..., T(e_n).
- **Kernel** ker T = {v: T(v) = 0}; **range** = {T(v)}. T is injective iff ker T = {0}; surjective iff range = codomain. Rank-nullity: dim ker + dim range = dim V.
- **Composition** corresponds to matrix product: T_A ∘ T_B has matrix AB. Order matters. Rotation by 90° after reflection in the line y = x gives a different map from reflection after rotation.
- **Standard matrices in R^2:** rotation by θ is [[cos θ, -sin θ],[sin θ, cos θ]]; reflection in the x-axis is [[1,0],[0,-1]]; scaling by (a, b) is diag(a, b); projection onto the x-axis is [[1,0],[0,0]]; shear is [[1,k],[0,1]].
- **Change of basis:** if A represents T in the standard basis, then in basis B it is represented by B^-1 A B (where B has the basis vectors as columns). Similar matrices represent the same map in different bases and share eigenvalues, trace and determinant.
- **Example (calculus):** the derivative on P_3 with basis {1, x, x^2, x^3} has matrix [[0,1,0,0],[0,0,2,0],[0,0,0,3],[0,0,0,0]]. Its kernel is the constants, its rank is 3.

## Chapter 6. Orthogonality, Projections and Least Squares

### 6.1 Inner product and norm
u · v = Σ u_i v_i, |v| = sqrt(v · v), and the angle satisfies cos θ = (u · v)/(|u||v|). **Cauchy-Schwarz:** |u · v| ≤ |u||v|. **Triangle inequality:** |u + v| ≤ |u| + |v|. Vectors are orthogonal if u · v = 0. An **orthonormal** set has unit vectors that are mutually orthogonal. A matrix Q with orthonormal columns satisfies Q^T Q = I; if square it is **orthogonal** and Q^-1 = Q^T. Orthogonal maps preserve lengths and angles.

### 6.2 Projections
The projection of b onto the line through a is p = (a · b)/(a · a) a. The projection onto the column space of A (A with independent columns) solves the **normal equations** A^T A x̂ = A^T b, with p = A x̂ and the projection matrix P = A (A^T A)^-1 A^T. Properties: P^2 = P, P^T = P. The residual e = b - p is orthogonal to the column space.

### 6.3 Least squares
When Ax = b has no solution (more equations than unknowns), minimise |b - Ax|. The minimiser x̂ satisfies A^T A x̂ = A^T b.
**Example (line fit).** Fit y = c + dx to (0, 1), (1, 3), (2, 4). A = [[1,0],[1,1],[1,2]], b = (1,3,4). A^T A = [[3,3],[3,5]], A^T b = (8, 11). Solving: c = 7/6, d = 3/2. The residual (-1/6, 1/3, -1/6) is orthogonal to both columns of A.

### 6.4 Gram-Schmidt and QR
Given independent v_1, v_2, ..., build orthonormal q_1, q_2, ...: q_1 = v_1/|v_1|; u_k = v_k - Σ_(j<k) (v_k · q_j) q_j; q_k = u_k/|u_k|. In matrix form A = QR with Q orthonormal columns and R upper triangular with positive diagonal. QR gives a numerically stable least-squares solution: solve R x̂ = Q^T b.

## Chapter 7. Eigenvalues and Eigenvectors

### 7.1 Definition and computation
A nonzero vector v with Av = λv is an eigenvector with eigenvalue λ. Eigenvalues are the roots of the **characteristic polynomial** det(A - λI) = 0. For each λ, the eigenspace is N(A - λI).
- Sum of eigenvalues = trace A; product = det A.
- Triangular matrices have their diagonal entries as eigenvalues.
- Eigenvectors for distinct eigenvalues are linearly independent.
- **Algebraic multiplicity** = multiplicity of λ as a root; **geometric multiplicity** = dim of the eigenspace; geometric ≤ algebraic.

### 7.2 Diagonalisation
A is diagonalisable iff it has n independent eigenvectors (geometric = algebraic multiplicity for every eigenvalue). Then A = P D P^-1 with the eigenvectors in the columns of P. Consequence: A^k = P D^k P^-1.

**Example.** A = [[2,1],[1,2]]. λ = 3 with (1,1) and λ = 1 with (1,-1). A^10 = (1/2)[[3^10 + 1, 3^10 - 1],[3^10 - 1, 3^10 + 1]] = [[29525, 29524],[29524, 29525]].

**Defective matrix.** A = [[1,1],[0,1]] has λ = 1 with algebraic multiplicity 2 but only one eigenvector direction, so it is not diagonalisable.

### 7.3 Symmetric matrices and the spectral theorem
A real symmetric matrix has real eigenvalues and orthogonal eigenvectors for distinct eigenvalues. **Spectral theorem:** every real symmetric A can be written A = Q Λ Q^T with Q orthogonal and Λ diagonal. Equivalently A = Σ λ_i q_i q_i^T.

A symmetric matrix is **positive definite** if x^T A x > 0 for all x ≠ 0, equivalently all eigenvalues > 0, equivalently all pivots > 0, equivalently all leading principal minors > 0. The quadratic form x^T A x on the unit sphere has maximum λ_max and minimum λ_min (Rayleigh quotient).

### 7.4 Applications
- **Markov chains.** A column-stochastic matrix P has λ = 1; the steady state is the corresponding eigenvector scaled to sum to 1. Example: P = [[0.9, 0.5],[0.1, 0.5]] has steady state (5/6, 1/6), and the other eigenvalue 0.4 controls the speed of convergence.
- **Linear differential equations.** x' = A x has solution x(t) = Σ c_i e^(λ_i t) v_i. The system is stable iff all Re(λ_i) < 0. Discrete systems x_(k+1) = A x_k are stable iff all |λ_i| < 1.
- **Fibonacci numbers.** With A = [[1,1],[1,0]], (F_(n+1), F_n)^T = A^n (1, 0)^T. The eigenvalues are φ = (1 + sqrt 5)/2 and ψ = (1 - sqrt 5)/2, giving Binet's formula F_n = (φ^n - ψ^n)/sqrt(5).
- **Vibrations and structures:** eigenvectors are mode shapes, eigenvalues give squared natural frequencies.

## Chapter 8. Singular Value Decomposition (SVD)

### 8.1 Statement
Every m × n real matrix A has a factorisation A = U Σ V^T, where U (m × m) and V (n × n) are orthogonal and Σ (m × n) is diagonal with σ_1 ≥ σ_2 ≥ ... ≥ σ_r > 0 (the **singular values**, r = rank A).

### 8.2 Computing the SVD
1. Find the eigenvalues of A^T A (symmetric, positive semidefinite). Singular values are σ_i = sqrt(λ_i).
2. The eigenvectors of A^T A (orthonormal) are the columns of V.
3. For each σ_i > 0, set u_i = A v_i/σ_i. Complete U to an orthonormal basis if needed.

**Example.** A = [[3,0],[4,5]]. A^T A = [[25,20],[20,25]] has eigenvalues 45 and 5. So σ_1 = 3 sqrt 5, σ_2 = sqrt 5. V columns: (1,1)/sqrt 2 and (1,-1)/sqrt 2. Then u_1 = (1,3)/sqrt 10 and u_2 = (3,-1)/sqrt 10. Check: σ_1 σ_2 = 15 = |det A|.

### 8.3 Meaning and applications
- The columns of V and U are orthonormal bases for the row space and column space (the first r) and the null spaces (the rest). A maps v_i to σ_i u_i: any matrix is a rotation, a stretch along axes, and another rotation.
- **Condition number** κ(A) = σ_1/σ_r measures sensitivity of Ax = b to errors. κ near 1 is well-conditioned.
- **Low-rank approximation (Eckart-Young):** the best rank-k approximation to A in the 2-norm and Frobenius norm is A_k = Σ(i = 1 to k) σ_i u_i v_i^T, with 2-norm error σ_(k+1). Used for image compression and denoising.
- **PCA:** for centred data X (rows are samples), the principal components are the right singular vectors of X (the eigenvectors of the covariance matrix X^T X/(n - 1)), and the variance along component i is σ_i^2/(n - 1).
- **Pseudoinverse:** A^+ = V Σ^+ U^T, where Σ^+ inverts the nonzero singular values. x = A^+ b is the least-squares solution of minimum norm.
- ||A||_2 = σ_1 and the Frobenius norm is sqrt(σ_1^2 + ... + σ_r^2).

## Chapter 9. Common Mistakes Checklist
1. Assuming AB = BA, or (AB)^-1 = A^-1 B^-1 (the order reverses).
2. Using the echelon form's columns, instead of the original columns, as a basis for the column space.
3. Calling a subset a subspace without checking that it contains 0 and is closed under both operations.
4. Forgetting that det(A + B) ≠ det A + det B.
5. Forgetting to normalise eigenvectors in the spectral theorem and SVD.
6. Believing every matrix is diagonalisable, or that repeated eigenvalues always give a defect.
7. Mixing up the rank-nullity theorem: rank + nullity = number of columns n, not rows.
8. In least squares, forgetting that A^T A is invertible only when the columns of A are independent.
