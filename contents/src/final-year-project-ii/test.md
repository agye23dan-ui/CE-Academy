# Final Year Project II: Class Test

Duration: 60 minutes. Calculator allowed, no notes. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Useful: zero-failure test time T = M ln(1/(1 - C)); CPI = EV/AC, SPI = EV/PV, EAC = BAC/CPI; DRE = found before release/total found; combined uncertainty u = √(Σu²); Bonferroni α/m; t₀.₉₇₅ with 5 df = 2.571.

## Section A: Multiple choice (20 marks)

**1.** A "walking skeleton" is
A) a thin end-to-end implementation built early to prove the architecture  B) a final report  C) a risk register  D) a skeleton key

**2.** Technical debt refers to
A) money owed to suppliers  B) the project budget  C) software licences  D) the accumulated cost of quick fixes and shortcuts that must be repaid later

**3.** Velocity in agile development is
A) lines of code per day  B) the speed of the computer  C) the number of developers  D) story points completed per sprint

**4.** A burn-down chart that stays above the ideal line shows the team is
A) finished  B) ahead of schedule  C) behind schedule  D) over budget

**5.** Verification asks
A) "Did we build the right product for the user?"  B) "Is it legal?"  C) "Did we build it to the specification?"  D) "Is it profitable?"

**6.** A traceability matrix links
A) requirements to design elements and tests  B) files to folders  C) people to tasks only  D) costs to dates

**7.** Statement coverage of 100 percent means
A) every branch was taken  B) there are no bugs  C) every statement was executed at least once  D) all requirements are met

**8.** The minimum number of tests for MC/DC of a decision with n independent conditions is
A) 2ⁿ  B) n + 1  C) n  D) n²

**9.** Defect removal efficiency is
A) defects per KLOC  B) the cost of fixing  C) the proportion of all defects found before release  D) the number of tests

**10.** The cost to fix a defect generally
A) is zero in testing  B) is independent of when it is found  C) falls the later it is found  D) rises sharply the later it is found

**11.** To show an MTBF with 90 percent confidence by a zero-failure test, the test time is
A) MTBF²  B) 10 × MTBF only  C) MTBF/ln 10  D) MTBF × ln 10

**12.** For 0 failures in n trials the "rule of three" gives a 95 percent upper bound on the failure probability of about
A) 3n  B) n/3  C) 3/n  D) 1/(3n)

**13.** A prediction interval for a new measurement is, compared with the confidence interval for the mean response,
A) the same  B) wider  C) narrower  D) unrelated

**14.** A standard uncertainty combined from independent sources is obtained by
A) multiplying them  B) root-sum-of-squares  C) taking the largest  D) adding them

**15.** The Wald interval for a proportion performs badly
A) with large samples  B) when p = 0.5  C) near 0 or 1 and with small samples  D) never

**16.** Running many hypothesis tests without correction
A) improves power  B) inflates the probability of at least one false positive  C) removes bias  D) lowers false positives

**17.** A Welch t-test is appropriate for
A) a single proportion  B) fitting a line  C) paired data only  D) comparing two means without assuming equal variances

**18.** Reporting latency by the mean only is misleading because
A) a few outliers distort the mean and tail latency matters to users  B) the mean is always wrong  C) latency has no mean  D) percentiles are slower

**19.** A good thesis conclusion
A) repeats the literature review  B) introduces new results  C) lists the references  D) answers the objectives with quantitative evidence and states limitations

**20.** The best preparation for a live demonstration includes
A) improvising on the day  B) a backup video and a rehearsed script  C) hiding the hardware  D) skipping the room test

## Section B: Problems (40 marks)

**B1. Agile and earned value (10 marks)** (a) Velocities in four sprints were 20, 22, 18, 24. The backlog is 90 points; estimate the sprints to finish with the mean velocity and with the lowest [4]. (b) A $100,000 project has PV = $40,000, EV = $30,000, AC = $36,000: compute CPI, SPI and EAC (BAC/CPI) and interpret [6].

**B2. Testing and reliability (10 marks)** (a) 90 of 100 statements and 30 of 40 branches were executed; compute both coverages [2]. (b) Testing found 8 defects before release and 2 afterwards: compute DRE [2]. (c) How long must a zero-failure test run to show an MTBF of 1,000 h with 90 percent confidence? [2] (d) A test of 60 units gave no failures: give the rule-of-three 95 percent upper bound and the exact bound 1 - 0.05^(1/60) [4].

**B3. Calibration and uncertainty (10 marks)** (a) Calibration points (x, y): (0, 0.05), (10, 2.02), (20, 3.98), (30, 6.05), (40, 8.01) give y = 0.032 + 0.1995x with R² = 0.9999. What x corresponds to y = 5.00? [3] (b) Two independent error sources have standard uncertainties of 0.4 and 0.3 units: combined standard uncertainty and worst-case sum [3] (c) Why is the quadrature sum used for independent sources? [2] (d) What does R² near 1 not prove? [2]

**B4. Statistics of results (10 marks)** (a) Six tasks timed before and after a change: before 30, 34, 29, 33, 31, 35; after 27, 31, 27, 29, 28, 32. Find the differences, the mean difference, the standard deviation of the differences, the paired t value and the 95 percent confidence interval (t = 2.571) [7]. (b) If you make 4 comparisons in a family, what is the Bonferroni significance level per test? [1] What is the chance of at least one false positive if 8 independent tests are run at 5 percent? [2]

## Answer key and solutions

### Section A
1. A 2. D 3. D 4. C 5. C 6. A 7. C 8. B 9. C 10. D 11. D 12. C 13. B 14. B 15. C 16. B 17. D 18. A 19. D 20. B

### Section B

**B1.**
(a) Mean velocity = (20 + 22 + 18 + 24)/4 = 21; sprints = 90/21 = **4.3**; with the lowest velocity 18: 90/18 = **5.0** sprints [4].
(b) CPI = 30/36 = **0.833**; SPI = 30/40 = **0.75**; EAC = 100,000/0.833 = **$120,000** [4]. The project is over budget and behind schedule: it will cost about $20,000 more and take longer unless the trend is corrected; consider cutting scope or re-planning [2].

**B2.**
(a) Statement coverage = 90/100 = **90 percent**; branch coverage = 30/40 = **75 percent** [2].
(b) DRE = 8/(8 + 2) = **80 percent** [2].
(c) T = 1,000 × ln 10 = **2,303 h** [2].
(d) Rule of three: 3/60 = **5.0 percent**; exact: 1 - 0.05^(1/60) = **4.87 percent** [4].

**B3.**
(a) x = (5.00 - 0.032)/0.1995 = **24.9** [3].
(b) u_c = √(0.4² + 0.3²) = **0.5 units**; worst-case sum = **0.7 units** [3].
(c) For independent random errors the variances add, so the standard deviations combine in quadrature; it is unlikely that all errors reach their extremes in the same direction at once, so the plain sum overstates the uncertainty [2].
(d) R² only measures how well a line fits the calibration data; it does not prove accuracy, since a systematic offset, reference error, drift or dependence on temperature can remain [2].

**B4.**
(a) Differences (before - after): 3, 3, 2, 4, 3, 3. Mean = **3.0**. The standard deviation is √(Σ(d - 3)²/5) = √(2/5) = **0.632** [2]. t = 3.0/(0.632/√6) = 3.0/0.258 = **11.6** with 5 df, p < 0.001 [2]. 95 percent CI = 3.0 ± 2.571 × 0.258 = **(2.34, 3.66)** [2]; the change significantly reduces the time by about 3 units [1].
(b) α/m = 0.05/4 = **0.0125** [1]. 1 - 0.95⁸ = **33.7 percent** [2].
