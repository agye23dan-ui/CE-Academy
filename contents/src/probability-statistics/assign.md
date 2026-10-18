# Probability and Statistics for Engineers: Assignments with Worked Solutions

State each event or variable clearly, name the distribution you use and its parameters, and give a numerical answer with an interpretation. All numerical answers below were computed and checked with software (Python, SciPy). Use tables or a calculator for normal and t values.

# Assignment 1: Probability and Discrete Random Variables (70 marks)

## Questions

**Q1. Basic probability (10 marks)** (a) Two cards are drawn without replacement from a 52-card deck. Find the probability that both are aces [2]. (b) In a group of 23 people, find the probability that at least two share a birthday (365 equally likely days) [3]. (c) Find the probability of a five-card full house (total hands C(52,5) = 2,598,960) [3]. (d) Find the probability of winning a 6/49 lottery jackpot [2].

**Q2. Conditional probability and Bayes (12 marks)** (a) A disease affects 1 percent of a population. A test is positive with probability 0.95 for a sick person and 0.10 for a healthy person. Find P(sick | positive) and explain the result [4]. (b) Factory A makes 50 percent of the items with 2 percent defective, B makes 30 percent with 3 percent defective, C makes 20 percent with 5 percent defective. Find P(defective) and P(made by A | defective) [4]. (c) Monty Hall: a prize is behind one of three doors; you choose one, the host opens a goat door among the other two, then offers a switch. Find the probability of winning by switching [4].

**Q3. Reliability (8 marks)** Three independent components have reliabilities 0.9, 0.8 and 0.95. Find the reliability if they are (a) in series [2], (b) in parallel [2], (c) arranged as component 1 in series with the parallel pair of components 2 and 3 [4].

**Q4. Discrete random variables (10 marks)** (a) A random variable X takes the values 0, 1, 2, 3 with probabilities 0.1, 0.3, 0.4, 0.2. Find E[X], Var(X), P(X ≥ 2) and the CDF [5]. (b) Let S be the sum of two fair dice. Find P(S = 7), E[S] and Var(S) [3]. (c) Find E[3X - 2] and Var(3X - 2) for the X of part (a) [2].

**Q5. Standard discrete distributions (14 marks)** (a) X ~ Binomial(10, 0.3): find P(X = 3), P(X ≤ 2), E[X] and Var(X) [4]. (b) X ~ Poisson(4): find P(X = 2) and P(X ≥ 1) [3]. (c) A bit is flipped with probability p = 0.2 each time, independently: find the probability that the first success is on the 5th trial and the expected number of trials [3]. (d) A packet of 1000 bits has a bit error probability 10^-3 per bit. Find the probability of no error exactly and with the Poisson approximation [4].

**Q6. Expectation techniques (8 marks)** (a) Using indicator variables, find the expected number of fixed points of a random permutation of n objects [3]. (b) How many throws of a fair die are needed on average to see all six faces? [3] (c) Find E[X] for a game that pays $10 with probability 0.1, $2 with probability 0.4 and loses $5 otherwise [2].

**Q7. Inequalities (8 marks)** (a) A non-negative variable has mean 50: bound P(X ≥ 100) with Markov's inequality [2]. (b) A variable has mean 50 and standard deviation 5: bound P(|X - 50| ≥ 15) with Chebyshev [2]. (c) Compare the Chebyshev bound with the exact value if X is normal [2]. (d) Why are these bounds useful although they are loose? [2]

## Solutions and Marking Guide

**Q1.**
(a) P = (4/52)(3/51) = 12/2652 = 1/221 = **0.00452**.
(b) P(no match) = Π_{i=0}^{22} (365 - i)/365 = 0.4927, so **P(match) = 0.507**: more likely than not with just 23 people.
(c) Choose the rank of the triple (13), its suits C(4,3) = 4, the rank of the pair (12) and its suits C(4,2) = 6: 13 × 4 × 12 × 6 = 3744. P = 3744/2,598,960 = **0.00144** (about 1 in 694).
(d) 1/C(49, 6) = 1/13,983,816 = **7.15 × 10^-8**.

**Q2.**
(a) Step 1: P(+) = 0.95 × 0.01 + 0.10 × 0.99 = 0.0095 + 0.099 = 0.1085.
Step 2: P(sick | +) = 0.0095/0.1085 = **0.0876 (8.8 percent)**.
Step 3: Although the test is "95 percent sensitive", most positives are false because the disease is rare (many healthy people × a 10 percent false-positive rate): the base-rate effect.
Step 4: Repeating the test or using a more specific test is needed.
(b) P(defective) = 0.5(0.02) + 0.3(0.03) + 0.2(0.05) = 0.01 + 0.009 + 0.01 = **0.029**. P(A | defective) = 0.01/0.029 = **0.345**.
(c) Your first choice is right with probability 1/3. The host's action (always revealing a goat) gives no information about your door, so staying wins with 1/3 and **switching wins with 2/3**. (Enumerating the three equally likely prize positions shows switching wins in two of them.)

**Q3.**
(a) Series: 0.9 × 0.8 × 0.95 = **0.684**.
(b) Parallel (at least one works): 1 - (0.1)(0.2)(0.05) = **0.999**.
(c) The parallel pair works with probability 1 - (0.2)(0.05) = 0.99; in series with component 1: 0.9 × 0.99 = **0.891**.

**Q4.**
(a) Step 1: E[X] = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = **1.7**.
Step 2: E[X²] = 0.3 + 1.6 + 1.8 = 3.7, so Var = 3.7 - 2.89 = **0.81** (σ = 0.9).
Step 3: P(X ≥ 2) = 0.4 + 0.2 = **0.6**.
Step 4: CDF: F(0) = 0.1, F(1) = 0.4, F(2) = 0.8, F(3) = 1.
(b) 6 of the 36 outcomes give 7: **P = 1/6**. E[S] = 3.5 + 3.5 = **7**; the dice are independent, so Var(S) = 2 × 35/12 = **35/6 = 5.83**.
(c) E[3X - 2] = 3(1.7) - 2 = **3.1**; Var(3X - 2) = 9 Var(X) = **7.29** (the constant does not change the variance).

**Q5.**
(a) Step 1: P(X = 3) = C(10,3)(0.3)^3(0.7)^7 = 120 × 0.027 × 0.0823543 = **0.2668**.
Step 2: P(X ≤ 2) = 0.0282 + 0.1211 + 0.2335 = **0.3828**.
Step 3: E = np = **3**; Var = np(1 - p) = **2.1**.
(b) P(X = 2) = e^-4 4²/2! = 0.01832 × 8 = **0.1465**. P(X ≥ 1) = 1 - e^-4 = **0.9817**.
(c) P(first success on trial 5) = (0.8)^4 (0.2) = **0.0819**; E[trials] = 1/p = **5**.
(d) Step 1: Exactly: (1 - 10^-3)^1000 = **0.3677**.
Step 2: Poisson with λ = np = 1: e^-1 = **0.3679** (very close, since n is large and p is small).
Step 3: The expected number of errors is 1.

**Q6.**
(a) Let I_k = 1 if element k is in its own position. P(I_k = 1) = 1/n, so by linearity E[number of fixed points] = n × (1/n) = **1** (for every n), even though the I_k are dependent.
(b) Waiting for the k-th new face when k - 1 have been seen takes on average 6/(7 - k) throws: 6/6 + 6/5 + 6/4 + 6/3 + 6/2 + 6/1 = 6(1 + 1/2 + ... + 1/6) = **14.7 throws**.
(c) The loss probability is 1 - 0.1 - 0.4 = 0.5: E[X] = 10(0.1) + 2(0.4) - 5(0.5) = 1 + 0.8 - 2.5 = **-0.7 dollars** (the game is unfavourable).

**Q7.**
(a) P(X ≥ 100) ≤ 50/100 = **0.5**.
(b) k = 15/5 = 3, so P ≤ 1/9 = **0.111**.
(c) For a normal variable P(|Z| ≥ 3) = **0.0027**, so the bound is about 40 times too large.
(d) They hold for **any** distribution with the given mean (and variance), so they give safe worst-case guarantees when the distribution is unknown (and Markov/Chebyshev are used in proofs of the law of large numbers).

---

# Assignment 2: Continuous Distributions, Joint Distributions and the CLT (70 marks)

## Questions

**Q1. Probability density functions (12 marks)** A density is f(x) = c x² for 0 ≤ x ≤ 3 and 0 otherwise. (a) Find c [2]. (b) Find P(1 ≤ X ≤ 2) [2]. (c) Find the CDF [2]. (d) Find E[X] and Var(X) [4]. (e) Find the median [2].

**Q2. Uniform and exponential (10 marks)** (a) A router's packet arrival time is uniform on (0, 10) ms: find P(X > 7) and E, Var [3]. (b) A device lifetime is exponential with mean 2 hours: find P(T > 3), the median lifetime and P(T > 5 | T > 2) [4]. (c) A series system has three independent exponential components with failure rates 0.01, 0.02 and 0.03 per hour: find the system failure rate, MTTF and reliability at 10 h [3].

**Q3. The normal distribution (14 marks)** X ~ N(100, 15²). (a) Find P(X > 130) [2]. (b) Find P(85 < X < 115) [2]. (c) Find the 95th percentile [2]. (d) The lengths of two parts are independent N(5, 2²) and N(3, 1.5²): find the distribution of the difference X - Y and P(X > Y) [4]. (e) A voltage is N(0, 1) volts; find the probability that its absolute value exceeds 2 and 3 volts [2]. (f) Explain standardisation and the 68-95-99.7 rule [2].

**Q4. Joint distributions (14 marks)** X and Y have the joint pmf p(0,0) = 0.1, p(0,1) = 0.2, p(0,2) = 0.1, p(1,0) = 0.2, p(1,1) = 0.3, p(1,2) = 0.1. (a) Find the marginals [3]. (b) Are X and Y independent? [2] (c) Find E[X], E[Y], E[XY], Cov(X, Y) and the correlation [6]. (d) Find P(Y = 1 | X = 1) and E[Y | X = 1] [3].

**Q5. Law of large numbers and CLT (12 marks)** (a) A population has mean 50 and standard deviation 12. For samples of size 36 find P(X̄ > 53) [3]. (b) X ~ Binomial(100, 0.5): approximate P(X ≥ 60) with the normal distribution and the continuity correction, and compare with the exact value 0.0284 [4]. (c) How large must n be so that the standard error of a mean with σ = 12 is at most 1? [2] (d) State the CLT and why it justifies Gaussian noise models [3].

**Q6. Transformations and processes (8 marks)** (a) X ~ Uniform(0, 1) and Y = X²: find f_Y and E[Y] [3]. (b) Calls arrive as a Poisson process with rate 3 per minute: find P(no calls in a minute) and the probability that the next call takes more than 30 s [3]. (c) State two properties of the Poisson process [2].

## Solutions and Marking Guide

**Q1.**
(a) ∫(0 to 3) c x² dx = c (27/3) = 9c = 1, so **c = 1/9**.
(b) P = ∫(1 to 2) x²/9 dx = (8 - 1)/27 = **7/27 = 0.259**.
(c) F(x) = ∫(0 to x) t²/9 dt = **x³/27** for 0 ≤ x ≤ 3 (0 below, 1 above).
(d) Step 1: E[X] = ∫ x · x²/9 dx = (1/9)(81/4) = **2.25**.
Step 2: E[X²] = ∫ x⁴/9 dx = (1/9)(243/5) = 5.4.
Step 3: Var = 5.4 - 5.0625 = **0.3375**.
(e) F(m) = 1/2: m³ = 13.5, **m = 2.381**.

**Q2.**
(a) P(X > 7) = 3/10 = **0.3**; E = 5 ms; Var = (b - a)²/12 = 100/12 = **8.33** ms².
(b) Step 1: The rate is λ = 0.5: P(T > 3) = e^(-1.5) = **0.223**.
Step 2: Median: 1 - e^(-0.5 t) = 0.5, t = 2 ln 2 = **1.386 h**.
Step 3: Memoryless: P(T > 5 | T > 2) = P(T > 3) = **0.223**.
(c) The system fails when any component fails: the rates add, **λ_sys = 0.06/h**; MTTF = 1/0.06 = **16.7 h**; R(10) = e^(-0.6) = **0.549**.

**Q3.**
(a) Z = (130 - 100)/15 = 2: P = **0.0228**.
(b) z = ±1: P = **0.6827**.
(c) 100 + 1.645 × 15 = **124.7**.
(d) D = X - Y is normal with mean 5 - 3 = 2 and variance 4 + 2.25 = 6.25 (variances add for the difference of independent variables): **D ~ N(2, 2.5²)**. P(X > Y) = P(D > 0) = Φ(2/2.5) = Φ(0.8) = **0.788**.
(e) P(|Z| > 2) = **0.0455**; P(|Z| > 3) = **0.0027**.
(f) Standardisation Z = (X - μ)/σ turns any normal variable into N(0, 1), so one table serves all normal distributions. About 68 percent of values lie within 1σ of the mean, 95 percent within 2σ and 99.7 percent within 3σ.

**Q4.**
(a) P(X = 0) = 0.1 + 0.2 + 0.1 = **0.4**; P(X = 1) = **0.6**. P(Y = 0) = 0.3, P(Y = 1) = 0.5, P(Y = 2) = **0.2** (sum 1).
(b) If independent, p(0,0) would equal P(X = 0) P(Y = 0) = 0.4 × 0.3 = 0.12, but it is 0.1: **not independent**.
(c) E[X] = **0.6**; E[Y] = 0.5 + 0.4 = **0.9**; E[XY] = 1×1×0.3 + 1×2×0.1 = **0.5**; Cov = 0.5 - 0.6 × 0.9 = **-0.04**. Var(X) = 0.6 × 0.4 = 0.24; E[Y²] = 0.5 + 0.8 = 1.3 so Var(Y) = 1.3 - 0.81 = 0.49. ρ = -0.04/sqrt(0.24 × 0.49) = **-0.117** (very weak negative correlation).
(d) P(Y = 1 | X = 1) = 0.3/0.6 = **0.5**. The conditional pmf of Y given X = 1 is (1/3, 1/2, 1/6) for y = 0, 1, 2, so E[Y | X = 1] = 0.5 + 1/3 = **0.833**.

**Q5.**
(a) The standard error is 12/sqrt 36 = 2, so P(X̄ > 53) = P(Z > 1.5) = **0.0668**.
(b) Step 1: For Binomial(100, 0.5): μ = 50, σ = 5.
Step 2: P(X ≥ 60) = P(X > 59.5) ≈ P(Z > 1.9) = **0.0287**.
Step 3: The exact value is 0.0284: an excellent approximation.
(c) σ/sqrt n ≤ 1 gives n ≥ 144.
(d) **CLT:** the standardised mean of n i.i.d. variables with finite variance tends to N(0, 1) as n → ∞. Noise in electronic systems is the sum of many tiny independent contributions (thermal motion of electrons), so it is well modelled as Gaussian regardless of the distribution of each contribution.

**Q6.**
(a) For 0 < y < 1: F_Y(y) = P(X² ≤ y) = P(X ≤ sqrt y) = sqrt y, so **f_Y(y) = 1/(2 sqrt y)** and E[Y] = ∫ y/(2 sqrt y) dy = **1/3** (the same as E[X²] = ∫ x² dx).
(b) P(no call in 1 minute) = e^(-3) = **0.0498**. The time to the next call is Exponential(3 per minute): P(T > 0.5 min) = e^(-1.5) = **0.223**.
(c) Increments over disjoint intervals are **independent**; the number of events in an interval of length t is **Poisson(λt)**; inter-arrival times are independent Exponential(λ) (memoryless).

---

# Assignment 3: Statistics, Inference, Regression and Markov Chains (80 marks)

## Questions

**Q1. Descriptive statistics (10 marks)** Data: 12, 15, 11, 18, 14, 15, 13, 40, 16, 14. Find the mean, median, mode(s), sample variance and standard deviation, quartiles (linear interpolation), the IQR and the outlier fences. Identify any outlier and discuss which summary statistics you would report.

**Q2. Estimation (10 marks)** (a) Derive the maximum likelihood estimator of λ for n independent Exponential(λ) observations and compute it for the data 1.2, 0.8, 3.5, 2.1, 4.9 [4]. (b) Show that the MLE of the Bernoulli parameter p is the sample proportion [3]. (c) Explain why the sample variance uses n - 1 and compute both versions for the data of (a) [3].

**Q3. Confidence intervals (12 marks)** (a) n = 25, x̄ = 52, s = 10 (normal data): find the 95 percent confidence interval for μ [3]. (b) The same x̄ with σ = 10 known [2]. (c) 230 of 400 people prefer a design: find a 95 percent confidence interval for the proportion [3]. (d) How many people are needed for a margin of error of 3 percentage points at 95 percent confidence? [2] (e) Interpret a confidence interval correctly [2].

**Q4. Hypothesis tests (18 marks)** (a) H0: μ = 100, H1: μ ≠ 100, n = 49, x̄ = 103, σ = 14: z-test [4]. (b) n = 16, x̄ = 52.5, s = 6, H0: μ = 50: t-test [4]. (c) Paired data (before minus after) 2, 1, 3, 0, 2, 4, 1, 3: test whether the mean difference is zero [4]. (d) A die is rolled 60 times with face counts 8, 12, 9, 11, 13, 7: chi-square goodness of fit [3]. (e) A one-sided z-test (α = 0.05, σ = 10, n = 25) of H0: μ = 100 against H1: μ > 100 when the true mean is 104: find β and the power [3].

**Q5. Regression (10 marks)** x = 1, 2, 3, 4, 5; y = 2.1, 3.9, 6.2, 7.8, 10.1. (a) Compute the least-squares line [4]. (b) Compute r and R² [3]. (c) Predict y at x = 6 and comment on extrapolation [3].

**Q6. Markov chains (14 marks)** (a) Weather: sunny → sunny 0.8, sunny → rainy 0.2, rainy → sunny 0.4, rainy → rainy 0.6. Find the two-step transition matrix, the probability of rain two days after a sunny day, the stationary distribution and the mean number of days between rainy days (mean return time) [7]. (b) A three-state chain has P = [[0.5, 0.5, 0], [0.25, 0.5, 0.25], [0, 0.5, 0.5]]: find the stationary distribution [3]. (c) A gambler with 2 units bets 1 unit at a time on a coin with winning probability 0.4 and stops at 0 or 4 units: find the probability of reaching 4 [4].

**Q7. Applications (6 marks)** (a) A link has a 10^-3 bit error rate: find the expected number of errors in a 1000-bit packet and the probability that a packet is error-free [2]. (b) An M/M/1 server has arrival rate 8 and service rate 10 per second: find ρ, L and W [2]. (c) A Beta(2, 2) prior is updated with 7 successes in 10 trials: give the posterior and its mean [2].

## Solutions and Marking Guide

**Q1.** Step 1: n = 10.
Step 2: **Mean** = 168/10 = **16.8**.
Step 3: Sorted: 11, 12, 13, 14, 14, 15, 15, 16, 18, 40: **median** = (14 + 15)/2 = **14.5**.
Step 4: **Mode:** **14 and 15** (both occur twice: bimodal).
Step 5: **Variance** s² = Σ(x - 16.8)²/9 = 633.6/9 = **70.4**, **s = 8.39**.
Step 6: Quartiles (linear interpolation): **Q1 = 13.25, Q3 = 15.75**, **IQR = 2.5**.
Step 7: Fences: 13.25 - 3.75 = **9.5** and 15.75 + 3.75 = **19.5**: the value **40 is an outlier** (it is far above 19.5).
Step 8: The outlier inflates the mean (without 40 the mean is 14.2) and the standard deviation (without it s = 2.1).
Step 9: **Report the median and IQR** (robust statistics), and mention the outlier (check for a measurement error before removing it).

**Q2.**
(a) L(λ) = Π λ e^(-λ x_i) = λ^n e^(-λ Σx). ln L = n ln λ - λ Σx; d/dλ = n/λ - Σx = 0, so **λ̂ = n/Σx = 1/x̄**. The data sum to 12.5, x̄ = 2.5, so **λ̂ = 0.4** (a mean life of 2.5 units).
(b) For Bernoulli data with s successes: ln L = s ln p + (n - s) ln(1 - p); setting the derivative to zero gives s/p = (n - s)/(1 - p), so **p̂ = s/n**, the sample proportion.
(c) Σ(x_i - x̄)² has expectation (n - 1)σ² because the deviations are measured from x̄ (fitted from the same data), which makes them smaller than deviations from μ by the amount n(x̄ - μ)². Dividing by n - 1 gives an **unbiased** estimator. For the data: Σ(x - 2.5)² = 1.69 + 2.89 + 1.00 + 0.16 + 5.76 = 11.5, so s² = 11.5/4 = **2.875** (unbiased) and the divisor-n version is 11.5/5 = **2.3** (the MLE of the normal variance is biased low by the factor (n - 1)/n).

**Q3.**
(a) SE = 10/5 = 2, t_(24, 0.025) = 2.064: 52 ± 4.13: **(47.87, 56.13)**.
(b) z = 1.96: 52 ± 3.92 = **(48.08, 55.92)** (narrower, because σ is known).
(c) p̂ = 230/400 = 0.575, SE = sqrt(0.575 × 0.425/400) = 0.0247: 0.575 ± 1.96 × 0.0247 = **(0.527, 0.623)**.
(d) n = z² p(1 - p)/E² = 1.96² × 0.25/0.03² = 1067.1, so **n = 1068** (using the worst case p = 0.5).
(e) If the procedure is repeated on many samples, **95 percent of the intervals so constructed contain the true parameter**. For one computed interval the parameter is either inside or outside; the 95 percent describes the method, not this interval.

**Q4.**
(a) z = (103 - 100)/(14/7) = **1.5**; two-sided p = 2 × 0.0668 = **0.134** > 0.05: **do not reject H0** (insufficient evidence of a difference).
(b) t = (52.5 - 50)/(6/4) = **1.667** with 15 degrees of freedom; the critical value is 2.131 and p = **0.116**: **do not reject H0**.
(c) Differences d = 2, 1, 3, 0, 2, 4, 1, 3: mean = 2, s = 1.309, SE = 1.309/sqrt 8 = 0.463, **t = 4.32** with 7 degrees of freedom (critical 2.365), p = **0.0035**: **reject H0**; the treatment changes the measurement (by about 2 units on average).
(d) Expected 10 per face: χ² = (4 + 4 + 1 + 1 + 9 + 9)/10 = **2.8** with 5 degrees of freedom; the critical value at 5 percent is 11.07 and p = **0.73**: **no evidence that the die is unfair**.
(e) The rejection region is x̄ > 100 + 1.645 × 10/5 = 103.29. If the true mean is 104: β = P(x̄ < 103.29 | μ = 104) = Φ((103.29 - 104)/2) = Φ(-0.355) = **0.361**; **power = 1 - β = 0.639**. (A larger sample or a larger effect raises the power.)

**Q5.**
(a) x̄ = 3, ȳ = 6.02. S_xy = Σ(x - 3)(y - ȳ) = 19.9 and S_xx = 10, so **β̂1 = 1.99** and **β̂0 = 6.02 - 1.99 × 3 = 0.05**: **ŷ = 0.05 + 1.99x**.
(b) S_yy = Σ(y - 6.02)² = 39.71; r = 19.9/sqrt(10 × 39.71) = **0.9987** and **R² = 0.9973**: 99.7 percent of the variation in y is explained by the linear relationship.
(c) ŷ(6) = 0.05 + 11.94 = **11.99**. This is an extrapolation (x = 6 lies outside the observed range 1 to 5): the linear relationship may not continue, so the prediction should be used with caution.

**Q6.**
(a) Step 1: P² = [[0.8 × 0.8 + 0.2 × 0.4, 0.8 × 0.2 + 0.2 × 0.6],[0.4 × 0.8 + 0.6 × 0.4, 0.4 × 0.2 + 0.6 × 0.6]] = **[[0.72, 0.28],[0.56, 0.44]]**.
Step 2: The probability of rain two days after a sunny day is **0.28**.
Step 3: Stationary: π = (π_S, π_R) with π_S = 0.8π_S + 0.4π_R, so 0.2π_S = 0.4π_R and π_S = 2π_R: **π = (2/3, 1/3)**.
Step 4: The mean return time to the rainy state is 1/π_R = **3 days** (After ten days the chain is already close to π: P^10 first row = (0.6667, 0.3333).)
(b) Step 1: From π = πP: π_1 = 0.5π_1 + 0.25π_2, π_3 = 0.25π_2 + 0.5π_3 and π_2 = 0.5π_1 + 0.5π_2 + 0.5π_3.
Step 2: The first gives π_1 = 0.5π_2, the third π_3 = 0.5π_2.
Step 3: So π ∝ (0.5, 1, 0.5): **π = (0.25, 0.5, 0.25)**.
(c) For the gambler's ruin with p = 0.4 and q = 0.6, r = q/p = 1.5: P(reach N = 4 from i = 2) = (1 - r^i)/(1 - r^N) = (1 - 2.25)/(1 - 5.0625) = **0.308** (compared with 0.5 for a fair coin): a slightly unfair game makes ruin much more likely.

**Q7.**
(a) The expected number of errors is 1000 × 10^-3 = **1**; P(no error) = (0.999)^1000 = **0.3677**.
(b) ρ = 8/10 = **0.8**; L = ρ/(1 - ρ) = **4** packets in the system; W = 1/(μ - λ) = **0.5 s** (Little's law: L = λ W = 8 × 0.5 = 4 ✓).
(c) Posterior = Beta(2 + 7, 2 + 3) = **Beta(9, 5)**, with mean 9/14 = **0.643** (between the prior mean 0.5 and the sample proportion 0.7).
