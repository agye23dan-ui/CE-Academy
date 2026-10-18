# Probability and Statistics for Engineers: Class Test

Duration: 60 minutes. Calculator and normal tables allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Useful values: Φ(1) = 0.8413, Φ(2) = 0.9772, Φ(0.5) = 0.6915, z_0.025 = 1.96, z_0.05 = 1.645, z_0.10 = 1.2816.

## Section A: Multiple choice (20 marks)

**1.** For any two events, P(A ∪ B) equals
A) P(A) + P(B)  B) P(A) + P(B) - P(A ∩ B)  C) P(A) P(B)  D) P(A) - P(B)

**2.** Events A and B are independent if
A) they cannot both occur  B) P(A ∩ B) = P(A) P(B)  C) P(A) = P(B)  D) P(A ∪ B) = 1

**3.** The probability of two heads in two independent fair coin flips is
A) 1/2  B) 1/4  C) 1/3  D) 3/4

**4.** Bayes' theorem expresses P(A | B) as
A) P(B | A) P(A)/P(B)  B) P(A) P(B)  C) P(A ∩ B) P(B)  D) P(B)/P(A)

**5.** The expected value of one roll of a fair six-sided die is
A) 3  B) 3.5  C) 4  D) 6

**6.** If Var(X) = 3, then Var(2X) equals
A) 6  B) 9  C) 12  D) 3

**7.** The mean of a Binomial(n, p) variable is
A) p  B) np  C) np(1 - p)  D) n/p

**8.** For a Poisson random variable
A) the mean is twice the variance  B) the mean equals the variance  C) the variance is 1  D) the mean is zero

**9.** The mean of an exponential variable with rate λ is
A) λ  B) 1/λ  C) λ²  D) 1/λ²

**10.** About what fraction of a normal distribution lies within one standard deviation of the mean?
A) 50 percent  B) 68 percent  C) 95 percent  D) 99.7 percent

**11.** For a standard normal variable Z, P(Z < 0) equals
A) 0  B) 0.25  C) 0.5  D) 1

**12.** The standard error of the sample mean of n observations with standard deviation σ is
A) σ  B) σ/n  C) σ/sqrt n  D) σ²/n

**13.** The central limit theorem says that the distribution of the sample mean tends to
A) uniform  B) normal  C) exponential  D) binomial

**14.** The unbiased sample variance divides the sum of squared deviations by
A) n  B) n - 1  C) n + 1  D) n²

**15.** The critical z value for a 95 percent confidence interval is about
A) 1.28  B) 1.645  C) 1.96  D) 2.58

**16.** A p-value is
A) the probability that H0 is true  B) the probability of data at least as extreme as observed, assuming H0  C) the significance level  D) the power

**17.** A Type I error is
A) failing to reject a false H0  B) rejecting a true H0  C) an arithmetic mistake  D) rejecting a false H0

**18.** The correlation coefficient always lies in
A) [0, 1]  B) [-1, 1]  C) (-∞, ∞)  D) [0, 100]

**19.** In least squares regression y = β0 + β1 x, a negative slope means
A) y tends to decrease as x increases  B) y is negative  C) the fit is poor  D) x is negative

**20.** A stationary distribution π of a Markov chain satisfies
A) π P = π  B) P π = 0  C) π + P = 1  D) P² = P

## Section B: Problems (40 marks)

**B1. (10 marks)** Machine M1 makes 60 percent of the items, of which 3 percent are defective; machine M2 makes 40 percent, of which 5 percent are defective. (a) Find P(defective) [3]. (b) An item is found defective; find P(it came from M1) [3]. (c) Two items are selected at random from a large production run (independent): find the probability that both are defective [2]. (d) Find the probability that exactly one of the two is defective [2].

**B2. (10 marks)** (a) X takes the values 1, 2, 3 with probabilities 0.2, 0.5, 0.3. Find E[X], E[X²] and Var(X) [4]. (b) X ~ Binomial(5, 0.4): find P(X = 2) [2]. (c) X ~ Poisson(2): find P(X = 0) and P(X ≥ 2) [4].

**B3. (10 marks)** X ~ N(50, 8²). (a) Find P(X < 42) [2]. (b) Find P(X > 66) [2]. (c) Find P(46 < X < 58) [3]. (d) Find the 90th percentile [1]. (e) For a sample of n = 64 independent observations find P(X̄ > 51) [2].

**B4. (10 marks)** A sample of n = 36 measurements has mean 48 and standard deviation 9. (a) Find the standard error [1]. (b) Find the 95 percent confidence interval for the mean (t_35, 0.025 = 2.03) [3]. (c) Test H0: μ = 50 against H1: μ ≠ 50 at the 5 percent level: give the test statistic, the decision and the approximate p-value (0.19) [4]. (d) Explain the meaning of a 95 percent confidence interval [2].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **B** · 3 **B** · 4 **A** · 5 **B** · 6 **C** · 7 **B** · 8 **B** · 9 **B** · 10 **B** · 11 **C** · 12 **C** · 13 **B** · 14 **B** · 15 **C** · 16 **B** · 17 **B** · 18 **B** · 19 **A** · 20 **A**

Brief reasons: 3. (1/2)(1/2). 6. Var(aX) = a² Var(X) = 4 × 3. 8. Both equal λ. 9. E[X] = 1/λ. 12. SE = σ/√n. 14. The n - 1 divisor makes it unbiased.

### Section B

**B1.**
(a) P(D) = 0.6 × 0.03 + 0.4 × 0.05 = 0.018 + 0.020 = **0.038**.
(b) P(M1 | D) = 0.018/0.038 = **0.474**.
(c) P(both defective) = 0.038² = **0.001444**.
(d) P(exactly one) = 2 × 0.038 × 0.962 = **0.0731**.

**B2.**
(a) E[X] = 0.2 + 1.0 + 0.9 = **2.1**; E[X²] = 0.2 + 2.0 + 2.7 = **4.9**; Var = 4.9 - 4.41 = **0.49**.
(b) P(X = 2) = C(5, 2)(0.4)²(0.6)³ = 10 × 0.16 × 0.216 = **0.3456**.
(c) P(X = 0) = e^-2 = **0.1353**; P(X ≥ 2) = 1 - e^-2(1 + 2) = 1 - 0.406 = **0.594**.

**B3.**
(a) z = (42 - 50)/8 = -1: P = **0.1587**.
(b) z = (66 - 50)/8 = 2: P = 1 - 0.9772 = **0.0228**.
(c) z from -0.5 to 1: 0.8413 - 0.3085 = **0.5328**.
(d) 50 + 1.2816 × 8 = **60.25**.
(e) The standard error is 8/sqrt 64 = 1, so P(X̄ > 51) = P(Z > 1) = **0.1587**.

**B4.**
(a) SE = 9/sqrt 36 = **1.5**.
(b) 48 ± 2.03 × 1.5 = 48 ± 3.05: **(44.95, 51.05)**.
(c) t = (48 - 50)/1.5 = **-1.33** with 35 degrees of freedom; the critical value is ±2.03 and the two-sided p-value is about **0.19** > 0.05: **do not reject H0** (no significant evidence that the mean differs from 50; indeed 50 lies inside the interval of part (b)).
(d) If we repeated the sampling many times and built an interval each time the same way, about 95 percent of these intervals would contain the true mean. It does not mean there is a 95 percent probability that the true mean lies in this one computed interval.
