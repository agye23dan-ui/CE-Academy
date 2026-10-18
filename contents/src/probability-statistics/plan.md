# Probability and Statistics for Engineers: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 5 to 6 problems, 1 review with the app's quizzes). Learn this course with a computer in hand: simulate every probability you compute (Python with NumPy, SciPy, Matplotlib; or R) and compare the simulated frequency with your answer. That habit builds intuition faster than any amount of algebra.

## Textbooks
- Sheldon Ross, *A First Course in Probability* and *Introduction to Probability and Statistics for Engineers and Scientists*.
- Dimitri Bertsekas and John Tsitsiklis, *Introduction to Probability* (the MIT text, rigorous and clear).
- Douglas Montgomery and George Runger, *Applied Statistics and Probability for Engineers* (many engineering examples).
- Larry Wasserman, *All of Statistics* (compact, for later reading); Joseph Blitzstein and Jessica Hwang, *Introduction to Probability* (free online, with Harvard Stat 110 lectures).
- Allen Downey, *Think Stats* and *Think Bayes* (free, code-based).

## Free courses
- Harvard Stat 110 (Blitzstein): excellent lectures and problem sets.
- MIT OpenCourseWare 6.041 Probabilistic Systems Analysis and 18.05 Introduction to Probability and Statistics.
- Khan Academy Statistics and Probability; StatQuest videos (Josh Starmer) for intuition about tests and regression.
- Seeing Theory (Brown University) for interactive visualisations.

## Week by week

**Week 1: Sample spaces, axioms, counting, conditional probability (Ch 1.1, 1.2).** Do: Assignment 1 Q1, Q2. Simulate the birthday problem.

**Week 2: Independence, total probability, Bayes, reliability (Ch 1.2).** Do: Assignment 1 Q2, Q3. Checkpoint: set up any Bayes problem with a tree diagram.

**Week 3: Discrete random variables, expectation, variance (Ch 2.1).** Do: Assignment 1 Q4, Q6.

**Week 4: Binomial, geometric, Poisson (Ch 2.2).** Do: Assignment 1 Q5, Q7. Sit the **Class Test** at the end of the week.

**Week 5: Continuous distributions, uniform, exponential (Ch 2.3).** Do: Assignment 2 Q1, Q2, Q6.

**Week 6: The normal distribution and standardisation (Ch 2.3).** Do: Assignment 2 Q3. Plot histograms of simulated sums of uniform variables.

**Week 7: Joint distributions, covariance, correlation (Ch 3.1).** Do: Assignment 2 Q4.

**Week 8: Inequalities, LLN, CLT (Ch 3.2).** Do: Assignment 2 Q5. Mock midterm: first half of the Final Exam.

**Week 9: Poisson process, Markov chains, queues (Ch 4).** Do: Assignment 3 Q6, Q7. Simulate a Markov chain and watch it converge to its stationary distribution.

**Week 10: Descriptive statistics and estimation (Ch 5, 6.1).** Do: Assignment 3 Q1, Q2.

**Week 11: Confidence intervals (Ch 6.2).** Do: Assignment 3 Q3. Simulate 1000 intervals and count how many contain the true mean.

**Week 12: Hypothesis testing (Ch 7).** Do: Assignment 3 Q4. Practise choosing the right test.

**Week 13: Regression and Bayesian inference (Ch 8, 9).** Do: Assignment 3 Q5, Q7(c). Fit a line to real sensor data and examine the residuals.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet and statistical tables).

## Milestone checklist
- [ ] I can compute probabilities with counting, conditioning, independence and Bayes' theorem.
- [ ] I can find the pmf/pdf, mean and variance of the standard distributions and know when each applies.
- [ ] I can standardise and use normal tables for probabilities and percentiles.
- [ ] I can work with joint distributions, covariance and correlation.
- [ ] I can state and apply the LLN and CLT, including the normal approximation to the binomial.
- [ ] I can model arrivals with a Poisson process and analyse a simple Markov chain.
- [ ] I can compute and interpret point estimates and confidence intervals.
- [ ] I can run z, t and chi-square tests, and interpret p-values, errors and power.
- [ ] I can fit and interpret a simple linear regression.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet and tables.

## Study habits that work
1. Draw a picture (tree, Venn diagram, sketch of the density with the shaded area) before computing.
2. Identify the distribution and its parameters in words first ("number of successes in 10 independent trials with probability 0.3: binomial").
3. Always sanity-check: probabilities lie in [0, 1], variances are positive, an answer must be consistent with the mean.
4. Verify analytically derived results with a quick simulation.
5. When interpreting inference, say exactly what the p-value or interval means, and what it does not.
