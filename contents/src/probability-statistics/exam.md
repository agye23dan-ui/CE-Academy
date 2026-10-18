# Probability and Statistics for Engineers: Final Examination

Duration: 3 hours. Calculator, normal and t tables and a one-page formula sheet allowed. Total: 100 marks. Useful values: Φ(1) = 0.8413, Φ(1.5) = 0.9332, Φ(2) = 0.9772, z_0.025 = 1.96, z_0.005 = 2.576, t_(3, 0.025) = 3.182, χ²_(1, 0.05) = 3.84.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** If P(A) = 0.3, P(B) = 0.5 and A, B are independent, then P(A ∪ B) is
A) 0.15  B) 0.65  C) 0.8  D) 0.2

**2.** The total probability theorem for a partition B_1, ..., B_n gives P(A) =
A) Σ P(A | B_i) P(B_i)  B) Σ P(A) P(B_i)  C) Π P(B_i)  D) P(A) + P(B_i)

**3.** The variance of a Bernoulli(p) random variable is
A) p  B) p²  C) p(1 - p)  D) 1/p

**4.** For X ~ Geometric(p) (number of trials to the first success), E[X] =
A) p  B) 1/p  C) 1 - p  D) p/(1 - p)

**5.** The exponential distribution is called memoryless because
A) it has no mean  B) P(X > s + t | X > s) = P(X > t)  C) it is discrete  D) it is symmetric

**6.** If X and Y are independent, Var(X - Y) equals
A) Var X - Var Y  B) Var X + Var Y  C) 0  D) (Var X)(Var Y)

**7.** Two variables with correlation 0 are
A) always independent  B) always dependent  C) uncorrelated, but not necessarily independent  D) identical

**8.** By Chebyshev's inequality P(|X - μ| ≥ 2σ) is at most
A) 1/2  B) 1/4  C) 1/8  D) 0.05

**9.** The sample mean of n independent observations with variance σ² has variance
A) σ²  B) σ²/n  C) σ/n  D) nσ²

**10.** The normal approximation to Binomial(n, p) works well when
A) n is small  B) np and n(1 - p) are both large (say above 10)  C) p = 0  D) n = 1

**11.** In a Poisson process with rate λ, the time between events has
A) a Poisson distribution  B) an exponential distribution with mean 1/λ  C) a uniform distribution  D) a normal distribution

**12.** The maximum likelihood estimator of p for Bernoulli data is
A) the sample median  B) the sample proportion  C) 1/n  D) the sample variance

**13.** A 99 percent confidence interval is, compared with a 95 percent interval from the same data,
A) narrower  B) wider  C) the same  D) of random width

**14.** The power of a test is
A) the probability of a Type I error  B) the probability of rejecting H0 when it is false  C) the p-value  D) the significance level

**15.** A chi-square goodness-of-fit statistic with k categories has how many degrees of freedom (no estimated parameters)?
A) k  B) k - 1  C) k + 1  D) 1

**16.** For simple linear regression with r = 0.8, R² equals
A) 0.8  B) 0.64  C) 0.4  D) 0.2

**17.** The stationary distribution π of an irreducible aperiodic Markov chain
A) depends on the starting state  B) is unique and satisfies π = π P  C) does not exist  D) is always uniform

**18.** For an M/M/1 queue with ρ = 0.5 the mean number in system is
A) 0.5  B) 1  C) 2  D) 0.25

**19.** The posterior of a Beta(a, b) prior after s successes and f failures is
A) Beta(a, b)  B) Beta(a + s, b + f)  C) Beta(s, f)  D) Normal

**20.** Statistical significance means
A) the effect is large  B) the result is unlikely under H0 at the chosen level  C) H0 is true  D) the sample is large

## Section B: Short Questions (40 marks)

**B1. (5)** A fair die is rolled 4 times. Find the probability of at least one six.

**B2. (5)** Two fair dice are rolled. Given that the first die is even, find the probability that the sum is 8.

**B3. (5)** The time between calls is exponential with rate 0.2 per minute. Find P(T < 5 minutes) and the mean time.

**B4. (5)** Faults occur as a Poisson process with rate 3 per hour. Find the probability of at least 4 faults in an hour.

**B5. (5)** A task time is X ~ N(10, 2²) minutes. Find P(8 < X < 13).

**B6. (5)** A manufacturing process has 30 percent defectives. In a sample of 100 items, use the normal approximation to find the probability that the sample proportion exceeds 0.35.

**B7. (5)** A survey cross-classifies 100 people by preference (A, B) and age group (young, old) with counts young: A 30, B 20; old: A 20, B 30. Test independence at the 5 percent level (χ² with 1 degree of freedom).

**B8. (5)** A fitted regression line is ŷ = 12 + 0.5x with r = 0.8. Interpret the slope and R², and predict y at x = 20. What is the danger of predicting at x = 200?

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Joint distribution.** X ∈ {1, 2} and Y ∈ {1, 2, 3} have the joint pmf p(1,1) = 0.15, p(1,2) = 0.10, p(1,3) = 0.05, p(2,1) = 0.10, p(2,2) = 0.30, p(2,3) = 0.30.
(a) Find the marginal pmfs [2]. (b) Find E[X], E[Y], E[XY], Cov(X, Y) and the correlation coefficient [4]. (c) Are X and Y independent? [1] (d) Find the conditional pmf of Y given X = 2 and E[Y | X = 2] [3].

**C2. Estimation and inference.** A sensor's defect counts per board in 10 boards were 0, 2, 1, 3, 0, 1, 2, 1, 0, 2 and are modelled as Poisson(λ).
(a) Derive the MLE of λ and compute it [3]. (b) Estimate the probability that a board has no defects [2]. (c) Give an approximate 95 percent confidence interval for λ using λ̂ ± 1.96 sqrt(λ̂/n) [3]. (d) The specification states λ ≤ 1. Test H0: λ = 1 against H1: λ > 1 at the 5 percent level using the normal approximation (z = (λ̂ - 1)/sqrt(1/n)) [2].

**C3. Markov reliability model.** A machine is Working (W), Degraded (D) or Failed (F, absorbing). Daily transitions: W → W 0.9, W → D 0.08, W → F 0.02; D → W 0.1, D → D 0.7, D → F 0.2; F → F 1.
(a) Write the transition matrix and find the probability of failure within two days starting from W [3]. (b) Find the expected number of days to failure from W and from D [5]. (c) Is there a non-trivial stationary distribution? [1] (d) Suggest how a maintenance policy changes the model [1].

**C4. Regression analysis.** Calibration data: x = 2, 4, 6, 8, 10 and y = 5.1, 9.8, 15.2, 19.9, 25.3.
(a) Compute the least squares line and r [4]. (b) Compute the residuals and the residual standard error s = sqrt(SSE/(n - 2)) [3]. (c) The slope has standard error 0.035: test H0: β1 = 0 at 5 percent (t_(3, 0.025) = 3.182) and state a 95 percent confidence interval for the slope [3].

**C5. Quality control and the CLT.** A process fills bags with mean 500 g and standard deviation 10 g.
(a) Find the probability that one bag weighs less than 485 g (assume a normal distribution) [2]. (b) For the mean of 25 bags find the standard error and P(X̄ < 497) [3]. (c) Design a control chart: give the centre line and 3-sigma limits for X̄ with n = 25 [2]. (d) The sample mean shifts to 504 g: find the probability that a sample mean falls outside the limits [3].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **A** · 3 **C** · 4 **B** · 5 **B** · 6 **B** · 7 **C** · 8 **B** · 9 **B** · 10 **B** · 11 **B** · 12 **B** · 13 **B** · 14 **B** · 15 **B** · 16 **B** · 17 **B** · 18 **B** · 19 **B** · 20 **B**

Brief reasons: 1. 0.3 + 0.5 - 0.15 = 0.65. 6. Variances add for the difference of independent variables. 8. 1/k² with k = 2. 18. L = ρ/(1 - ρ) = 1. 15. The degrees of freedom are k - 1.

## Section B solutions

**B1.** P(no six in 4 rolls) = (5/6)^4 = 0.4823, so P(at least one) = **0.5177**.

**B2.** The first die is even in 18 of the 36 outcomes. Among them the sum is 8 for (2, 6), (4, 4), (6, 2): 3 outcomes. P = 3/18 = **1/6 = 0.167** (the unconditional probability of a sum of 8 is 5/36 = 0.139).

**B3.** P(T < 5) = 1 - e^(-0.2 × 5) = 1 - e^-1 = **0.632**. The mean time is 1/0.2 = **5 minutes**.

**B4.** P(X ≥ 4) = 1 - P(X ≤ 3) = 1 - e^-3 (1 + 3 + 4.5 + 4.5) = 1 - 0.0498 × 13 = 1 - 0.6472 = **0.3528**.

**B5.** z from (8 - 10)/2 = -1 to (13 - 10)/2 = 1.5: Φ(1.5) - Φ(-1) = 0.9332 - 0.1587 = **0.7745**.

**B6.** The standard deviation of the sample proportion is sqrt(0.3 × 0.7/100) = 0.0458, so z = (0.35 - 0.30)/0.0458 = 1.09 and P = **0.138**. (With the continuity correction (0.345) it would be about 0.163; the standard approximation is acceptable.)

**B7.** Expected counts under independence: each cell = 50 × 50/100 = 25. χ² = (30 - 25)²/25 + (20 - 25)²/25 + (20 - 25)²/25 + (30 - 25)²/25 = 4 × 1 = **4.0** with 1 degree of freedom. Since 4.0 > 3.84 (p = 0.0455), **reject independence** at 5 percent: preference and age group are associated (young people favour A, older people favour B).

**B8.** Step 1: The slope: for each unit increase in x, the predicted y increases by **0.5**.
Step 2: R² = 0.8² = **0.64**: 64 percent of the variation in y is explained by x.
Step 3: At x = 20: ŷ = 12 + 10 = **22**.
Step 4: Predicting at x = 200 (ŷ = 112) is an **extrapolation** far outside the range of the data, where the linear relationship may not hold; the prediction is unreliable.

## Section C solutions

**C1.**
(a) P(X = 1) = 0.30, **P(X = 2) = 0.70**. P(Y = 1) = **0.25**, P(Y = 2) = **0.40**, P(Y = 3) = **0.35**.
(b) Step 1: E[X] = 0.3 + 1.4 = **1.7**; E[Y] = 0.25 + 0.8 + 1.05 = **2.1**; E[XY] = 1(0.15 + 0.20 + 0.15) + 2(0.10 + 0.60 + 0.90) = 0.50 + 3.20 = **3.7**.
Step 2: Cov = 3.7 - 1.7 × 2.1 = 3.7 - 3.57 = **0.13**.
Step 3: Var(X) = 0.21 and Var(Y) = E[Y²] - 4.41 = (0.25 + 1.6 + 3.15) - 4.41 = 0.59, so **ρ = 0.13/sqrt(0.21 × 0.59) = 0.369**.
(c) **Not independent**: p(1,1) = 0.15 but P(X = 1) P(Y = 1) = 0.3 × 0.25 = 0.075.
(d) Given X = 2: P(Y = y | X = 2) = p(2, y)/0.7 = **1/7, 3/7, 3/7** for y = 1, 2, 3. E[Y | X = 2] = 1/7 + 6/7 + 9/7 = 16/7 = **2.286**.

**C2.**
(a) L(λ) = Π e^(-λ) λ^(x_i)/x_i!, so ln L = -nλ + (Σx) ln λ - Σ ln x_i!. Setting the derivative to zero: -n + Σx/λ = 0, so **λ̂ = x̄**. The sum is 12 and n = 10: **λ̂ = 1.2** defects per board.
(b) P(X = 0) = e^(-λ̂) = e^(-1.2) = **0.301**.
(c) SE = sqrt(1.2/10) = 0.346: 1.2 ± 1.96 × 0.346 = **(0.521, 1.879)**.
(d) z = (1.2 - 1)/sqrt(1/10) = 0.2/0.316 = **0.63**; the one-sided critical value is 1.645 (p = 0.26): **do not reject H0**: there is no significant evidence that the defect rate exceeds 1 (the interval from (c) also contains 1).

**C3.**
(a) P = [[0.90, 0.08, 0.02], [0.10, 0.70, 0.20], [0, 0, 1]]. Probability of being failed within two days from W: P(F after 2 steps) = 0.02 + 0.9 × 0.02 + 0.08 × 0.2 = 0.02 + 0.018 + 0.016 = **0.054** (the second row of P² has F-entry 0.054).
(b) Let t_W, t_D be the expected times to absorption. t_W = 1 + 0.9 t_W + 0.08 t_D and t_D = 1 + 0.1 t_W + 0.7 t_D. The second gives 0.3 t_D = 1 + 0.1 t_W, so t_D = (1 + 0.1 t_W)/0.3. Substituting into the first: 0.1 t_W = 1 + 0.08(1 + 0.1 t_W)/0.3 = 1.2667 + 0.02667 t_W, so 0.07333 t_W = 1.2667 and **t_W = 17.27 days**, **t_D = 9.09 days**.
(c) The only stationary distribution is the degenerate one concentrated on the absorbing state F: π = (0, 0, 1). The chain is not irreducible, so there is no distribution with all states positive.
(d) **Preventive maintenance** adds an action that moves D (or W) to a better state with some probability, which lowers the transition probabilities to F and increases the expected time to failure; the model can then be used to compare policies by cost (a Markov decision process).

**C4.**
(a) x̄ = 6, ȳ = 15.06; S_xy = 101, S_xx = 40: **β̂1 = 2.525**, **β̂0 = 15.06 - 2.525 × 6 = -0.09**: **ŷ = -0.09 + 2.525x**. The correlation r = **0.9997** (R² = 0.9994).
(b) Fitted values: 4.96, 10.01, 15.06, 20.11, 25.16. Residuals y - ŷ: **0.14, -0.21, 0.14, -0.21, 0.14** (sum 0). SSE = 0.0196 + 0.0441 + 0.0196 + 0.0441 + 0.0196 = 0.147, so **s = sqrt(0.147/3) = 0.221**.
(c) t = 2.525/0.035 = **72.1** ≫ 3.182: **reject H0**, the slope is significantly different from 0 (p < 0.001). 95 percent CI for the slope: 2.525 ± 3.182 × 0.035 = **(2.41, 2.64)**.

**C5.**
(a) z = (485 - 500)/10 = -1.5: P = **0.0668**.
(b) SE = 10/sqrt 25 = **2**; P(X̄ < 497) = P(Z < -1.5) = **0.0668**.
(c) Centre line **500 g**; control limits 500 ± 3 × 2 = **494 g and 506 g** (the 3-sigma limits give a false alarm probability of 0.0027 per sample).
(d) With the mean shifted to 504 g: the sample mean ~ N(504, 2²). P(X̄ > 506) = P(Z > 1) = 0.1587 and P(X̄ < 494) = P(Z < -5) ≈ 0, so the probability of an out-of-limits point per sample is about **0.159**: the average run length to detection is 1/0.159 ≈ 6.3 samples.
