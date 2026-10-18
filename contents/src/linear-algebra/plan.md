# Linear Algebra: 14-Week Study Plan and Resources

Time budget: 8 to 10 hours per week (3 reading, 4 to 5 problems, 1 review with the app's quizzes). Linear algebra is a skill subject: you learn it by solving many small systems by hand until row reduction is automatic.

## Textbooks
- Gilbert Strang, *Introduction to Linear Algebra* (Wellesley-Cambridge). The best intuition-first text and the companion to the MIT course below.
- David Lay, *Linear Algebra and Its Applications*. Clear, many exercises, strong on applications.
- Sheldon Axler, *Linear Algebra Done Right* (free online). Proof-based, for depth after you finish the course.
- Trefethen and Bau, *Numerical Linear Algebra*, for SVD, QR and conditioning as engineers use them (read later).

## Free courses
- MIT OpenCourseWare 18.06 Linear Algebra (Gilbert Strang). Watch every lecture and do the problem sets.
- 3Blue1Brown, *Essence of Linear Algebra* (watch in week 1 for geometric intuition).
- Khan Academy Linear Algebra for extra drills.

## Week by week

**Week 1: Systems and elimination (Ch 1).** Objectives: row operations, REF and RREF, classify solutions. Do: Assignment 1 Q1, Q2. Checkpoint: solve a 4 × 4 system in under 8 minutes.

**Week 2: Matrix algebra and inverses (Ch 2.1, 2.2).** Do: Assignment 1 Q4. Practise the column and row pictures of Ax.

**Week 3: LU factorisation and rank (Ch 1.4, 2.3).** Do: Assignment 1 Q3, Q8.

**Week 4: Determinants (Ch 3).** Do: Assignment 1 Q5, Q6, Q7. Checkpoint: det of a 4 × 4 by elimination in 5 minutes.

**Week 5: Vector spaces and subspaces (Ch 4.1, 4.2).** Do: Assignment 2 Q1, Q2, Q4. Sit the **Class Test** (60 minutes) at the end of the week.

**Week 6: The four fundamental subspaces (Ch 4.3).** Do: Assignment 2 Q3. Draw the "big picture" diagram of the four subspaces from memory.

**Week 7: Linear transformations and change of basis (Ch 5).** Do: Assignment 2 Q5, Q6.

**Week 8: Orthogonality, projections, least squares (Ch 6.1 to 6.3).** Do: Assignment 2 Q8. Mock midterm: first half of the Final Exam.

**Week 9: Gram-Schmidt and QR (Ch 6.4).** Do: Assignment 2 Q7. Code Gram-Schmidt in Python and compare with numpy.linalg.qr.

**Week 10: Eigenvalues and diagonalisation (Ch 7.1, 7.2).** Do: Assignment 3 Q1. Checkpoint: eigenpairs of a 3 × 3 in 10 minutes.

**Week 11: Symmetric matrices, definiteness, Markov chains, ODEs (Ch 7.3, 7.4).** Do: Assignment 3 Q2 to Q5.

**Week 12: SVD (Ch 8.1, 8.2).** Do: Assignment 3 Q6. Compute an SVD by hand, then verify with numpy.linalg.svd.

**Week 13: SVD applications: PCA, low-rank approximation, pseudoinverse (Ch 8.3).** Do: Assignment 3 Q7, Q8. Project: compress a grayscale image with a rank-k SVD and plot error against k.

**Week 14: Revision.** Redo missed Class Test questions, then sit the full **Final Exam** under exam conditions (3 hours, no notes, no calculator).

## Milestone checklist
- [ ] I can row-reduce any system and describe its full solution set.
- [ ] I can compute an LU factorisation and use it to solve systems.
- [ ] I can find bases and dimensions of all four fundamental subspaces.
- [ ] I can test a set for being a subspace and prove it.
- [ ] I can write the matrix of a linear map and change basis.
- [ ] I can solve a least-squares problem with the normal equations.
- [ ] I can diagonalise a matrix or show that it cannot be diagonalised.
- [ ] I can compute a 2 × 2 SVD by hand and explain what the singular values mean.
- [ ] I scored at least 70 percent on the Final Exam without notes.

## Study habits that work
1. Always compute by hand first, then verify in Python (numpy, sympy). Never the other way round.
2. For every theorem, write one example and one non-example.
3. Keep an error log of arithmetic slips versus conceptual mistakes, and fix the pattern.
4. Link to engineering as you go: least squares for sensor fitting, eigenvalues for stability, SVD for compression, QR inside numerical solvers.
