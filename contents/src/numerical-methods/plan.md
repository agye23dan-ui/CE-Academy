# Numerical Methods: 14-Week Study Plan and Resources

Time budget: 8 to 10 hours per week (3 reading, 5 to 6 coding and problem solving, 1 review with the app's quizzes). Numerical methods are learned by implementing them: for every algorithm, code it from scratch in Python, test it against a known answer, and then compare it with the library routine (numpy, scipy). Keep a notebook where every result is shown with its error.

## Textbooks
- Richard Burden and J. Douglas Faires, *Numerical Analysis*. The clearest step-by-step textbook for this course.
- Steven Chapra and Raymond Canale, *Numerical Methods for Engineers*. Engineering examples and code.
- Lloyd Trefethen and David Bau, *Numerical Linear Algebra*; Trefethen, *Approximation Theory and Approximation Practice* (later reading).
- Michael Heath, *Scientific Computing: An Introductory Survey*. Good for conditioning and stability.
- Jaan Kiusalaas, *Numerical Methods in Engineering with Python 3*.

## Free courses and tools
- MIT OpenCourseWare 18.330 Introduction to Numerical Analysis; 18.06 for the linear algebra.
- Python: numpy, scipy (scipy.optimize, scipy.linalg, scipy.integrate, scipy.interpolate), matplotlib, and Jupyter notebooks.
- Free online text: *Fundamentals of Numerical Computation* by Driscoll and Braun (Julia, but the ideas transfer); the *Numerical Recipes* chapters for practical advice.
- Visualise convergence: plot error against iteration number or step size on a log-log scale; the slope is the order of convergence.

## Week by week

**Week 1: Floating-point arithmetic and error (Ch 1).** Do: Assignment 1 Q1, Q7. Experiment: print machine epsilon, find the smallest n with 1 + 2^-n == 1.

**Week 2: Taylor series, truncation error and conditioning (Ch 1.3, 1.4).** Do: reproduce the cancellation examples in the notes. Plot the error of (1 - cos x)/x^2 for x from 10^-1 to 10^-9.

**Week 3: Bisection, Newton and secant methods (Ch 2.1 to 2.3).** Do: Assignment 1 Q2, Q3, Q5. Implement all three and plot error against iteration on a log scale.

**Week 4: Fixed-point iteration and systems of nonlinear equations (Ch 2.4 to 2.6).** Do: Assignment 1 Q4, Q6. Sit the **Class Test** at the end of the week (Chapters 1 to 2 plus a first look at Chapter 3 if you are ahead).

**Week 5: Gaussian elimination, pivoting and LU (Ch 3.1 to 3.3).** Do: Assignment 2 Q1, Q2. Write your own LU solver and check against numpy.linalg.solve.

**Week 6: Norms, conditioning and iterative solvers (Ch 3.4 to 3.6).** Do: Assignment 2 Q3, Q4. Compare Jacobi and Gauss-Seidel iteration counts for the same system.

**Week 7: Polynomial interpolation and splines (Ch 4.1, 4.2).** Do: Assignment 2 Q5, Q6. Reproduce the Runge phenomenon with 1/(1 + 25x^2) and fix it with Chebyshev nodes. Mock midterm: first half of the Final Exam.

**Week 8: Least squares and curve fitting (Ch 4.3).** Do: Assignment 2 Q7. Fit noisy data with polyfit, lstsq and curve_fit and compare.

**Week 9: Numerical differentiation (Ch 5.1).** Do: Assignment 3 Q1. Plot the total error against h for the forward and central differences and find the best h.

**Week 10: Numerical integration: trapezoid, Simpson, Romberg, Gauss (Ch 5.2 to 5.4).** Do: Assignment 3 Q2, Q3, Q4. Verify the error orders by halving h.

**Week 11: Euler and Runge-Kutta methods (Ch 6.1, 6.2).** Do: Assignment 3 Q5. Implement RK4 and verify that the order is 4 on a problem with a known solution.

**Week 12: Stability, stiffness and systems of ODEs (Ch 6.3, 6.4).** Do: Assignment 3 Q6. Simulate a mass-spring system and the Lorenz equations with scipy.integrate.solve_ivp.

**Week 13: Eigenvalue problems and project (Ch 7, 8).** Do: Assignment 3 Q7. Project: model a real problem (a projectile with drag, an RC circuit or a heat-conduction rod), pick the methods, and justify the step sizes with an error study.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet and a calculator only).

## Milestone checklist
- [ ] I can compute and interpret absolute and relative error, machine epsilon and cancellation.
- [ ] I can solve f(x) = 0 by bisection, Newton, secant and fixed-point iteration, and state their orders.
- [ ] I can solve linear systems by LU with pivoting and judge the answer with the condition number.
- [ ] I can apply Jacobi and Gauss-Seidel iteration and test for convergence.
- [ ] I can interpolate with Lagrange, Newton and spline forms and bound the error.
- [ ] I can fit data by least squares and explain the normal equations.
- [ ] I can differentiate and integrate numerically, estimate the error and use Richardson extrapolation.
- [ ] I can solve ODEs with Euler and Runge-Kutta methods and explain stability and stiffness.
- [ ] I can verify the order of a method experimentally.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Code it, then break it: try a bad initial guess, a tiny step, a singular matrix. Failure modes are the real content of the subject.
2. Always test on a problem with a known answer before trusting the code on a real one.
3. Plot errors on a log-log scale; read the order of convergence from the slope.
4. Use library routines in real work; use your own code to understand what the libraries do.
5. Report every answer with an error estimate and the number of significant digits you trust.
