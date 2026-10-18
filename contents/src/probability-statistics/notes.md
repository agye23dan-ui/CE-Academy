# Probability and Statistics for Engineers: Complete Lecture Notes

Engineers deal with uncertainty everywhere: noise in signals, component failures, network traffic, measurement error, machine-learning data. **Probability** gives the mathematical model of randomness; **statistics** uses data to learn about the model. Notation: P(A) probability of an event, E[X] expected value, Var(X) variance, σ standard deviation, X ~ N(μ, σ²) means "X is normally distributed", x̄ the sample mean, s the sample standard deviation.

## Chapter 1. Probability Foundations

### 1.1 Sample spaces, events and axioms
A **sample space** S is the set of all possible outcomes; an **event** is a subset of S. Kolmogorov's axioms: (1) P(A) ≥ 0; (2) P(S) = 1; (3) for mutually exclusive events P(A ∪ B) = P(A) + P(B). Consequences: P(A') = 1 - P(A); P(∅) = 0; **P(A ∪ B) = P(A) + P(B) - P(A ∩ B)**; if A ⊆ B then P(A) ≤ P(B). For equally likely outcomes P(A) = |A|/|S|, and counting (permutations, combinations) does the work.
- **Examples.** Two aces drawn without replacement from a 52-card deck: (4/52)(3/51) = 1/221 = 0.00452. A five-card full house: 3744/2,598,960 = 0.00144. A 6/49 lottery jackpot: 1/13,983,816. **Birthday problem:** with 23 people the probability that some two share a birthday is 1 - Π(365 - i)/365 = 0.507.

### 1.2 Conditional probability, independence, total probability, Bayes
- **Conditional probability:** P(A | B) = P(A ∩ B)/P(B). **Multiplication rule:** P(A ∩ B) = P(B) P(A | B).
- **Independence:** P(A ∩ B) = P(A) P(B) (equivalently P(A | B) = P(A)). Independent does not mean mutually exclusive.
- **Law of total probability:** for a partition B_1, ..., B_n: P(A) = Σ P(A | B_i) P(B_i).
- **Bayes' theorem:** P(B_i | A) = P(A | B_i) P(B_i)/P(A).
- **Example (medical test).** Prevalence 1 percent, sensitivity P(+ | D) = 0.95, false-positive rate P(+ | not D) = 0.10: P(D | +) = 0.95 × 0.01/(0.95 × 0.01 + 0.10 × 0.99) = 0.0876. Even a good test gives mostly false positives for a rare condition (the base-rate effect).
- **Example (factories).** A makes 50 percent of the items with 2 percent defects, B 30 percent with 3 percent, C 20 percent with 5 percent: P(defect) = 0.01 + 0.009 + 0.01 = 0.029, and P(A | defect) = 0.01/0.029 = 0.345.
- **Reliability of systems:** components in series (all must work) multiply: 0.9 × 0.8 × 0.95 = 0.684; in parallel (at least one) use the complement: 1 - (0.1)(0.2)(0.05) = 0.999 (assuming independence).

## Chapter 2. Random Variables

### 2.1 Discrete random variables
A **random variable** X is a function from outcomes to numbers. A discrete X has a **probability mass function** p(x) = P(X = x) with Σ p(x) = 1, and a **cumulative distribution function** F(x) = P(X ≤ x).
- **Expected value** E[X] = Σ x p(x). **Linearity:** E[aX + bY + c] = a E[X] + b E[Y] + c (always, even for dependent variables). E[g(X)] = Σ g(x) p(x).
- **Variance** Var(X) = E[(X - μ)²] = E[X²] - (E[X])². Var(aX + b) = a² Var(X). For independent X and Y, Var(X + Y) = Var(X) + Var(Y). The standard deviation σ = sqrt(Var).
- **Example:** one fair die: E = 3.5, Var = 35/12 = 2.92. The sum of two dice: E = 7, Var = 35/6 = 5.83.
- **Indicator variables** make hard expectations easy: the expected number of fixed points of a random permutation of n items is n × (1/n) = 1; the coupon-collector expectation for n = 6 faces of a die is 6(1 + 1/2 + ... + 1/6) = 14.7 throws to see every face.

### 2.2 Important discrete distributions
- **Bernoulli(p):** one trial, E = p, Var = p(1 - p).
- **Binomial(n, p):** number of successes in n independent trials: P(X = k) = C(n, k) p^k (1 - p)^(n-k); E = np, Var = np(1 - p). Binomial(10, 0.3): P(X = 3) = 0.2668, P(X ≤ 2) = 0.3828, E = 3, Var = 2.1.
- **Geometric(p):** number of trials to the first success: P(X = k) = (1 - p)^(k-1) p; E = 1/p, Var = (1 - p)/p². For p = 0.2: P(X = 5) = 0.0819, E = 5. Memoryless.
- **Poisson(λ):** counts of rare events in a fixed interval: P(X = k) = e^(-λ) λ^k/k!; E = Var = λ. For λ = 4: P(X = 2) = 0.1465, P(X ≥ 1) = 0.9817. It approximates Binomial(n, p) when n is large and p small (λ = np).
- **Hypergeometric** (sampling without replacement), **negative binomial**, **uniform** on {1, ..., n}.

### 2.3 Continuous random variables
A continuous X has a **probability density function** f(x) ≥ 0 with ∫ f = 1; P(a ≤ X ≤ b) = ∫(a to b) f dx; P(X = x) = 0 for every single x. F(x) = ∫(-∞ to x) f; f = F'. E[X] = ∫ x f(x) dx; Var(X) = E[X²] - μ².
- **Example:** f(x) = x²/9 on [0, 3]: P(1 ≤ X ≤ 2) = (8 - 1)/27 = 0.259; E = 2.25; E[X²] = 5.4, Var = 0.3375.
- **Uniform(a, b):** f = 1/(b - a); E = (a + b)/2; Var = (b - a)²/12.
- **Exponential(λ):** f = λ e^(-λx), x ≥ 0; F = 1 - e^(-λx); E = 1/λ; Var = 1/λ². **Memoryless:** P(X > s + t | X > s) = P(X > t). Models lifetimes and inter-arrival times: for a mean of 2 hours, P(T > 3) = e^(-1.5) = 0.223 and the median is 2 ln 2 = 1.386 hours.
- **Normal N(μ, σ²):** f = (1/(σ sqrt(2π))) exp(-(x - μ)²/(2σ²)). **Standardise:** Z = (X - μ)/σ ~ N(0, 1); use tables or software for Φ(z). **68-95-99.7 rule:** within 1, 2, 3 standard deviations. For X ~ N(100, 15²): P(X > 130) = P(Z > 2) = 0.0228; P(85 < X < 115) = 0.6827; the 95th percentile is 100 + 1.645 × 15 = 124.7. Sums of independent normals are normal: N(μ1 + μ2, σ1² + σ2²). Noise in electronic systems is usually modelled as Gaussian.
- **Others:** gamma, chi-square, Student's t, F, beta, Weibull (reliability), log-normal.
- **Transformations:** if Y = g(X) with g monotonic, f_Y(y) = f_X(g^-1(y)) |d g^-1/dy|. For X ~ U(0, 1) and Y = X², f_Y(y) = 1/(2 sqrt y) on (0, 1) and E[Y] = 1/3.

## Chapter 3. Several Random Variables

### 3.1 Joint, marginal and conditional distributions
For discrete X, Y: p(x, y) = P(X = x, Y = y); marginals p_X(x) = Σ_y p(x, y); conditional p(y | x) = p(x, y)/p_X(x). X and Y are **independent** iff p(x, y) = p_X(x) p_Y(y) for all x, y. Continuous: joint density f(x, y), marginals by integration.
- **Covariance:** Cov(X, Y) = E[XY] - E[X] E[Y]. **Correlation** ρ = Cov/(σ_X σ_Y) ∈ [-1, 1]. Independent implies uncorrelated, **not the converse**. Var(X + Y) = Var X + Var Y + 2 Cov(X, Y).
- **Example.** p(0,0) = 0.1, p(0,1) = 0.2, p(0,2) = 0.1, p(1,0) = 0.2, p(1,1) = 0.3, p(1,2) = 0.1. Marginals: P(X = 0) = 0.4, P(X = 1) = 0.6; P(Y = 0, 1, 2) = 0.3, 0.5, 0.2. E[X] = 0.6, E[Y] = 0.9, E[XY] = 0.5, so Cov = 0.5 - 0.54 = -0.04, ρ = -0.117. They are not independent (p(0,0) = 0.1 ≠ 0.4 × 0.3 = 0.12).

### 3.2 Inequalities and limit theorems
- **Markov:** for X ≥ 0, P(X ≥ a) ≤ E[X]/a. **Chebyshev:** P(|X - μ| ≥ kσ) ≤ 1/k². With μ = 50 and σ = 5: P(|X - 50| ≥ 15) ≤ 1/9.
- **Law of large numbers:** the sample mean converges to μ as n → ∞ (justifies Monte Carlo estimation and relative frequencies).
- **Central limit theorem (CLT):** for i.i.d. variables with mean μ and variance σ², the standardised mean (X̄ - μ)/(σ/sqrt n) tends to N(0, 1). So X̄ is approximately N(μ, σ²/n) for large n (n ≥ 30 as a rule of thumb). Examples: n = 36, μ = 50, σ = 12: P(X̄ > 53) = P(Z > 1.5) = 0.0668. **Normal approximation to the binomial** with a continuity correction: for X ~ Bin(100, 0.5), P(X ≥ 60) ≈ P(Z > (59.5 - 50)/5) = P(Z > 1.9) = 0.0287 (exact 0.0284).
- The CLT explains why noise and measurement errors, which are sums of many small effects, are Gaussian.

## Chapter 4. Random Processes: Poisson and Markov Chains

### 4.1 Poisson process
Events occur at rate λ per unit time: counts in disjoint intervals are independent, N(t) ~ Poisson(λt), and inter-arrival times are independent Exponential(λ). If calls arrive at 3 per minute, P(no call in a minute) = e^(-3) = 0.0498 and P(next call takes more than 30 s) = e^(-1.5) = 0.223. Used for traffic, failures, photon counts and queues.

### 4.2 Discrete-time Markov chains
A **Markov chain** has the property P(X_(n+1) | X_n, X_(n-1), ...) = P(X_(n+1) | X_n). It is described by a **transition matrix** P (rows sum to 1): the distribution after n steps is π_0 P^n. A **stationary distribution** π satisfies π P = π (with Σ π = 1). For P = [[0.8, 0.2],[0.4, 0.6]] (sunny/rainy): P² = [[0.72, 0.28],[0.56, 0.44]] and π = (2/3, 1/3); the mean return time to state i is 1/π_i. An irreducible aperiodic chain converges to its unique stationary distribution. **Absorbing chains** model gambling and reliability: the fair gambler's ruin starting with 2 units, target 4, has win probability 2/4 = 0.5. Applications: PageRank, queues, protocols, hidden Markov models in speech recognition.

### 4.3 Queues (M/M/1)
Poisson arrivals at rate λ and exponential service at rate μ: utilisation ρ = λ/μ < 1; mean number in system L = ρ/(1 - ρ); mean time W = 1/(μ - λ) (Little's law L = λW). With λ = 8 and μ = 10 per second: ρ = 0.8, L = 4, W = 0.5 s; delays blow up as ρ → 1.

## Chapter 5. Descriptive Statistics

- **Centre:** mean x̄ = Σx/n, median (robust to outliers), mode. **Spread:** range, **sample variance** s² = Σ(x - x̄)²/(n - 1), standard deviation, **quartiles** Q1, Q3, interquartile range IQR = Q3 - Q1. **Outliers** (rule of thumb): below Q1 - 1.5 IQR or above Q3 + 1.5 IQR.
- **Example.** Data 12, 15, 11, 18, 14, 15, 13, 40, 16, 14: mean 16.8, median 14.5, bimodal (14 and 15), s² = 70.4, s = 8.39, Q1 = 13.25, Q3 = 15.75, IQR = 2.5, fences 9.5 and 19.5, so 40 is an outlier. The outlier pulls the mean up but not the median.
- **Graphs:** histogram, box plot, scatter plot, normal probability plot. Choose the summary to match the distribution (skewed data: median and IQR).

## Chapter 6. Estimation

### 6.1 Point estimators
A statistic θ̂ estimates a parameter θ. **Unbiased:** E[θ̂] = θ; **consistent:** θ̂ → θ as n grows; **efficient:** small variance (Cramér-Rao bound). The sample mean is unbiased for μ; **s² with the n - 1 divisor is unbiased for σ²** (dividing by n underestimates). Standard error of the mean: σ/sqrt n.
- **Method of moments:** equate sample and population moments (for Exponential(λ): λ̂ = 1/x̄).
- **Maximum likelihood estimation (MLE):** choose θ to maximise the likelihood L(θ) = Π f(x_i; θ) (or the log-likelihood). Bernoulli: p̂ = x̄ (the sample proportion); Exponential: λ̂ = 1/x̄; Normal: μ̂ = x̄ and σ̂² = Σ(x - x̄)²/n (biased); Poisson: λ̂ = x̄. MLEs are consistent and asymptotically efficient.

### 6.2 Confidence intervals
A 95 percent confidence interval is produced by a procedure that captures the true parameter in 95 percent of repeated samples (it does not say the parameter is in this particular interval with probability 0.95).
- **Mean, σ known (or large n):** x̄ ± z_(α/2) σ/sqrt n (z = 1.96 for 95 percent, 2.576 for 99 percent).
- **Mean, σ unknown, normal data:** x̄ ± t_(n-1, α/2) s/sqrt n. n = 25, x̄ = 52, s = 10: t_(24, 0.025) = 2.064, interval 52 ± 4.13 = (47.87, 56.13).
- **Proportion:** p̂ ± z sqrt(p̂(1 - p̂)/n). 230 of 400: p̂ = 0.575, SE = 0.0247, interval (0.527, 0.623).
- **Sample size** for margin of error E: n = z² p(1 - p)/E² (using p = 0.5 if unknown): for E = 0.03 at 95 percent, n = 1068.
- Width shrinks as 1/sqrt n: four times the data halves the width.

## Chapter 7. Hypothesis Testing

### 7.1 The framework
State H0 (null) and H1 (alternative); choose the significance level α (usually 0.05); compute a **test statistic**; get the **p-value** (the probability under H0 of a result at least as extreme as observed); reject H0 if p < α. **Type I error:** rejecting a true H0 (probability α). **Type II error:** failing to reject a false H0 (probability β); **power** = 1 - β. A small p-value is evidence against H0; it is not the probability that H0 is true. Statistical significance is not practical significance.

### 7.2 Common tests
- **z-test for a mean** (σ known): z = (x̄ - μ0)/(σ/sqrt n). H0: μ = 100, n = 49, x̄ = 103, σ = 14: z = 1.5, two-sided p = 0.134, so do not reject at 5 percent.
- **t-test** (σ unknown): t = (x̄ - μ0)/(s/sqrt n) with n - 1 degrees of freedom; **paired t-test** for before/after data; **two-sample t-test** (Welch) for two means.
- **Test for a proportion**, **chi-square goodness-of-fit:** χ² = Σ(O - E)²/E. A die rolled 60 times with counts 8, 12, 9, 11, 13, 7 against expected 10 each: χ² = 2.8 with 5 degrees of freedom (critical value 11.07, p = 0.73), so no evidence that the die is unfair. **Chi-square test of independence** for contingency tables. **ANOVA** compares several means.
- **A/B testing** applies two-sample proportion or mean tests to compare designs; plan the sample size to achieve the required power, and beware repeated looks at the data (multiple testing).

## Chapter 8. Regression and Correlation

**Simple linear regression:** model y = β0 + β1 x + ε with errors of mean 0 and constant variance. **Least squares:** β̂1 = S_xy/S_xx = Σ(x - x̄)(y - ȳ)/Σ(x - x̄)², β̂0 = ȳ - β̂1 x̄. The **correlation coefficient** r = S_xy/sqrt(S_xx S_yy) and **R² = r²** is the fraction of variance explained. Residuals e = y - ŷ should have no pattern (check with a residual plot). Example: x = 1 to 5, y = 2.1, 3.9, 6.2, 7.8, 10.1 gives ŷ = 0.05 + 1.99x, r = 0.9987, R² = 0.9973. Correlation is not causation; extrapolation is risky. Extensions: multiple regression, polynomial regression, logistic regression (classification), confidence intervals for the slope. This is the basis of curve fitting, calibration of sensors and machine learning.

## Chapter 9. Bayesian Inference (introduction)
Treat the parameter as random: posterior ∝ likelihood × prior. For a Bernoulli probability p with a Beta(a, b) prior and s successes in n trials the posterior is Beta(a + s, b + n - s). With a Beta(2, 2) prior and 7 successes in 10 trials: Beta(9, 5), mean 9/14 = 0.643 (the MLE is 0.7; the prior shrinks the estimate), MAP = 8/12 = 0.667. Credible intervals; priors encode earlier knowledge; Bayesian filters (Kalman filter) are central to engineering.

## Chapter 10. Engineering Applications
- **Communications:** bit error rate p = 10^-3 and a 1000-bit packet: P(no errors) = (1 - p)^1000 = 0.3677 ≈ e^-1 (Poisson approximation), expected errors 1.
- **Reliability:** exponential lifetime with mean time to failure MTTF; series/parallel structures; Weibull.
- **Quality control:** control charts (x̄ ± 3σ/sqrt n), acceptance sampling, six-sigma.
- **Signal processing and machine learning:** Gaussian noise, estimation theory, Bayes classifiers, cross-validation.

## Chapter 11. Common Mistakes Checklist
1. Treating independent and mutually exclusive events as the same thing.
2. Dividing by n instead of n - 1 for the sample variance; using the population formula for a sample.
3. Forgetting to standardise (or to use the continuity correction) in normal approximations.
4. Saying "the probability that the true mean lies in this interval is 95 percent".
5. Interpreting a p-value as the probability that the null hypothesis is true, or accepting H0 instead of "failing to reject".
6. Confusing correlation with causation, and using regression far outside the data range.
7. Ignoring the base rate in Bayes problems.
8. Computing Var(X + Y) = Var X + Var Y without independence (the covariance term).
