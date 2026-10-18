# Final Year Project II: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

Formulas: zero-failure test time T = M ln(1/(1 - C)); with r failures T = M χ²(C; 2r + 2)/2; CPI = EV/AC, SPI = EV/PV, EAC = BAC/CPI, TCPI = (BAC - EV)/(BAC - AC); DRE = found before release/total found; u_c = √(Σu²); Wilson interval for a proportion; regression slope b = S_xy/S_xx; sample size per group n = 2((z_α/2 + z_β)/d)²; Bonferroni α/m. Useful: χ²(0.90; 4) = 7.779, t₀.₉₇₅ with 4 df = 2.776, z₀.₉₇₅ = 1.96, z₀.₈₀ = 0.842.

## Section A: Multiple Choice (20 marks)

**1.** Building the riskiest parts of a project first is sensible because
A) it is more fun  B) it reduces the budget  C) it removes the need for testing  D) it exposes problems while there is still time to react

**2.** Version control tags are used to
A) compress the repository  B) encrypt files  C) delete old code  D) mark released or milestone versions that can be recovered later

**3.** A continuous integration server
A) replaces the supervisor  B) writes the report  C) builds the project and runs automated tests on each change  D) sells the product

**4.** Validation checks that
A) the documents are signed  B) the schedule is met  C) the code is formatted  D) the product meets the real needs of the user

**5.** A test case without an expected result and pass criterion is
A) ideal  B) a regression test  C) a unit test  D) incomplete, because it cannot objectively pass or fail

**6.** Regression testing is done to
A) check that changes have not broken existing functionality  B) test new features only  C) measure speed only  D) replace acceptance testing

**7.** Branch coverage of 100 percent implies
A) every statement was executed  B) every input combination was tested  C) all requirements are met  D) there are no defects

**8.** In HIL (hardware-in-the-loop) testing
A) humans test the hardware by hand  B) no hardware is used  C) the hardware is replaced by software only  D) the hardware is tested against a simulated environment

**9.** With zero failures, a longer test time gives
A) no information  B) a lower demonstrated MTBF  C) a higher demonstrated lower bound on MTBF  D) a higher failure rate

**10.** A 95 percent prediction interval for a new measurement from a regression line is
A) the same as the confidence interval for the slope  B) unrelated to the residual scatter  C) narrower than the confidence interval for the mean response  D) wider than the confidence interval for the mean response

**11.** An effect with p < 0.05 but a tiny effect size is
A) proof of causation  B) impossible  C) always important  D) statistically significant but possibly of little practical importance

**12.** The Bonferroni correction controls
A) the familywise error rate in multiple comparisons  B) the sample size  C) the variance  D) the mean

**13.** Underpowered studies tend to
A) be unbiased and precise  B) miss real effects and exaggerate those found  C) always find the truth  D) have no errors

**14.** An error budget identifies
A) the contribution of each error source to the total uncertainty  B) the number of bugs  C) the money spent on repairs  D) the test schedule

**15.** In a thesis the abstract should
A) summarise the problem, method, main quantitative results and conclusion  B) list the references  C) contain only background  D) be written first and never changed

**16.** The conclusions chapter must
A) introduce new data  B) list the budget  C) repeat the introduction  D) answer the stated objectives with evidence and state limitations

**17.** Which is academically dishonest?
A) reporting only the favourable runs and hiding the others  B) citing your sources  C) acknowledging teammates  D) disclosing tool use as required

**18.** A demo contingency plan should include
A) hoping for the best  B) a longer talk  C) skipping the questions  D) a recorded video and spare equipment

**19.** In a defense, when you do not know an answer you should
A) blame a teammate  B) invent one  C) change the subject  D) say so honestly and explain how you would find out

**20.** The most valuable item in a handover package is
A) the chat history  B) the invoices  C) documentation that lets someone else build, use and maintain the system  D) the logbook of lunch breaks

## Section B: Short Questions (40 marks)

**B1. Agile forecast (5 marks)** Sprint velocities were 24, 26, 22, 28, 25. A backlog of 160 points remains. Estimate the number of sprints with the mean, the lowest and the highest velocity, and say which you would plan to.

**B2. Earned value (5 marks)** BAC = $120,000, PV = $72,000, EV = $60,000, AC = $66,000. Compute CPI, SPI, EAC (trend) and TCPI.

**B3. Testing metrics (5 marks)** Statement coverage: 450 of 500 statements; branch coverage: 96 of 120 branches; 93 defects found before release and 7 afterwards in 12.5 KLOC. Compute the coverages, DRE and defect density.

**B4. Reliability (5 marks)** How long must a zero-failure test run to demonstrate an MTBF of 1,500 h at 90 percent confidence and at 95 percent? How long if one failure is allowed at 90 percent?

**B5. Proportion (5 marks)** A classifier is correct on 76 of 80 test cases. Give the point estimate and explain why you would use the Wilson interval (0.878 to 0.980) rather than the Wald interval (0.902 to 0.998).

**B6. Uncertainty (5 marks)** Independent error contributions are 0.6, 0.4 and 0.3 units. Compute the combined standard uncertainty, the expanded uncertainty (k = 2) and the worst-case sum.

**B7. Multiple tests (5 marks)** You compare ten design variants against a control, running ten t-tests at the 5 percent level. What is the probability of at least one false positive, and what significance level would the Bonferroni correction require per test?

**B8. Trial size (5 marks)** A system passes 120 failure-free trials. Give the 95 percent upper bound on its failure probability and the number of failure-free trials needed to demonstrate 99.5 percent reliability at 95 percent confidence.

## Section C: Long Questions (answer any four, 40 marks)

**C1. Calibration (10 marks)** Reference inputs x = 0, 20, 40, 60, 80, 100 gave sensor outputs y = 1.0, 5.1, 8.9, 13.2, 17.0, 21.1. (a) The least-squares line is y = 1.014 + 0.2007x with R² = 0.9998, residual standard deviation 0.113 and standard error of the slope 0.00136. Find x for a reading y = 12.0 [3]. (b) The 95 percent confidence interval for the slope [2]. (c) The prediction at x = 50 with a 95 percent prediction interval (±0.340) [2]. (d) Name two checks you would do before trusting the calibration in the field [3].

**C2. Comparing designs (10 marks)** Accuracy (percent) of design A: 71, 74, 69, 72, 75, 70; design B: 78, 80, 76, 79, 82, 77. (a) Means and standard deviations [3]. (b) Welch's t = -5.28 (about 10 df, p = 0.0004): conclusion, and the 95 percent CI of the difference (use SE = 1.28 and t = 2.228) [4]. (c) For three groups with means 10.125, 10.850 and 10.250 (four runs each) ANOVA gives F = 28.8, p = 0.0001 and Tukey p-values 0.0001 (G1-G2), 0.001 (G2-G3), 0.469 (G1-G3). Interpret [3].

**C3. Schedule risk (10 marks)** Three sequential tasks have triangular durations (2, 3, 6), (3, 5, 9) and (1, 2, 5) weeks; a Monte Carlo simulation of 100,000 runs gave mean 12.0 weeks, standard deviation 1.73, P(≤ 12 weeks) = 52 percent and 50th/80th/90th percentiles of 11.9, 13.5 and 14.3 weeks. (a) What deadline do you commit to and why? [3] (b) Compute the PERT mean of each task, (o + 4m + p)/6, and the chain mean; compare with the simulation [4]. (c) Describe three schedule-recovery options for a project that is two weeks behind with six weeks left [3].

**C4. Verification plan (10 marks)** A battery-powered sensor node must (R1) run for at least 1 year, (R2) measure temperature within ±0.5 °C, (R3) deliver 99 percent of readings within 60 s, and (R4) have an MTBF of at least 1,500 h at 90 percent confidence. (a) For each requirement state a verification method, the acceptance criterion and the main uncertainty [8]. (b) The MTBF test uses 10 units: how many hours does each run for zero failures? (T = 3,454 h) [2]

**C5. Thesis, defense and closure (10 marks)** (a) Give a word budget for a 12,000-word report and describe what each results subsection must contain [4]. (b) Plan a 20-minute talk (slides and timing) and name four likely questions [3]. (c) List five items for the project handover and archive [3].

## Answer key and mark scheme

### Section A
1. D 2. D 3. C 4. D 5. D 6. A 7. A 8. D 9. C 10. D 11. D 12. A 13. B 14. A 15. A 16. D 17. A 18. D 19. D 20. C

### Section B

**B1.** Mean velocity = (24 + 26 + 22 + 28 + 25)/5 = 25: sprints = 160/25 = **6.4**; lowest (22): **7.3**; highest (28): **5.7** [3]. Plan to the pessimistic estimate, about 7 to 8 sprints, because slippage is more common than speed-up [2].

**B2.** CPI = 60/66 = **0.909**; SPI = 60/72 = **0.833**; EAC = 120,000/0.909 = **$132,000**; TCPI = (120,000 - 60,000)/(120,000 - 66,000) = **1.11** [5].

**B3.** Statement coverage = 450/500 = **90 percent**; branch coverage = 96/120 = **80 percent** [2]; DRE = 93/(93 + 7) = **93 percent** [1.5]; defect density = 100/12.5 = **8 per KLOC** [1.5].

**B4.** T = 1,500 ln 10 = **3,454 h** (90 percent); 1,500 ln 20 = **4,494 h** (95 percent); with one failure at 90 percent: 1,500 × 7.779/2 = **5,835 h** [5].

**B5.** p̂ = 76/80 = **0.95** [1]. The Wald interval p̂ ± 1.96 √(p̂(1 - p̂)/n) = (0.902, 0.998) is too narrow near 1 (its true coverage falls below 95 percent and for p̂ = 1 or very small n it collapses or exceeds the valid range); Wilson has better coverage for small n or p near 0 or 1 and stays inside [0, 1]: (0.878, 0.980) [4].

**B6.** u_c = √(0.36 + 0.16 + 0.09) = √0.61 = **0.78 units** [2]; U (k = 2) = **1.56 units** [2]; worst-case sum = 0.6 + 0.4 + 0.3 = **1.3 units** [1]. (The expanded 95 percent uncertainty can exceed the worst-case linear sum of standard uncertainties because k = 2 scales the standard uncertainty; do not mix the two concepts.)

**B7.** 1 - 0.95¹⁰ = **40.1 percent** [3]; Bonferroni: 0.05/10 = **0.005** per test [2].

**B8.** Rule of three: 3/120 = **2.5 percent** (exact 2.47 percent) [2]; trials for 99.5 percent at 95 percent confidence: n = ln 0.05/ln 0.995 = **598** trials [3].

### Section C

**C1.**
(a) x = (12.0 - 1.014)/0.2007 = **54.7** [3].
(b) Slope CI = 0.2007 ± 2.776 × 0.00136 = 0.2007 ± 0.0038 = **(0.1969, 0.2045)** [2].
(c) ŷ(50) = 1.014 + 0.2007 × 50 = **11.05**, so the 95 percent prediction interval for a new reading is **11.05 ± 0.34** (10.71 to 11.39) [2].
(d) Examples: check residuals for curvature or a pattern; verify with an independent reference point not used in fitting; test over the full range of temperature and supply voltage and for drift over time; repeat after power cycling; quantify the uncertainty of the reference; confirm that the field range lies inside the calibration range [3].

**C2.**
(a) A: mean **71.8**, s = **2.32**; B: mean **78.7**, s = **2.16** [3].
(b) The p-value (0.0004) is far below 0.05: B is significantly more accurate. Difference = 78.67 - 71.83 = 6.83; CI = 6.83 ± 2.228 × 1.28 = 6.83 ± 2.85 = **(3.98, 9.68) percentage points**; report the effect size too (d = 3.0) [4].
(c) ANOVA shows that not all means are equal; Tukey shows G2 (10.85) differs significantly from both G1 and G3, while G1 and G3 (10.125 and 10.25) cannot be distinguished (p = 0.469): G2 is the outlier design [3].

**C3.**
(a) Commit to about **14 to 15 weeks** (the 90th percentile is 14.3 weeks, the 80th is 13.5), not the 12-week mean, which has only about a 52 percent chance of being met; communicate the range and the main risks [3].
(b) Task 1: (2 + 12 + 6)/6 = 3.33; task 2: (3 + 20 + 9)/6 = 5.33; task 3: (1 + 8 + 5)/6 = 2.33. PERT chain mean = **11.0 weeks**; the triangular distributions' means are (2 + 3 + 6)/3 + (3 + 5 + 9)/3 + (1 + 2 + 5)/3 = 3.67 + 5.67 + 2.67 = **12.0 weeks**, which agrees with the simulation; the PERT formula (11.0) weights the most likely value more heavily than the triangular mean (12.0), so it is slightly more optimistic here [4].
(c) Examples: reduce scope using MoSCoW (defer "Could" items); parallelize independent tasks or add help for tasks with no dependencies; simplify the design or reuse existing modules; reduce rework by testing earlier; remove blockers (parts, access); renegotiate the deadline with the supervisor with evidence [3].

**C4.**
(a) R1: compute the average current from measurements (power analyser over 24 h in all operating modes), derive the life with battery capacity derated for temperature and self-discharge; criterion: predicted life ≥ 1.2 years (20 percent margin); uncertainty: current measurement, capacity tolerance, temperature profile [2]. R2: compare with a calibrated reference thermometer at several points over the range in a chamber; criterion: error ≤ 0.4 °C (0.5 minus the reference uncertainty); uncertainty: reference, chamber gradient, resolution [2]. R3: send 1,000 readings in realistic radio conditions and measure delivery delay; criterion: at least 99 percent within 60 s (use a confidence bound on the proportion); uncertainty: clock synchronisation, sample size [2]. R4: run a zero-failure test (or accelerated test with a validated model) of at least 3,454 unit-hours; criterion: no failures; uncertainty: assumption of a constant failure rate and representativeness of the test conditions [2].
(b) 3,454/10 = **345 h** per unit (about 14.4 days), if the units are identical and the failure rate is constant [2].

**C5.**
(a) Example (12,000 words): abstract 250; introduction 1,000; literature review 2,500; requirements, design and implementation 3,500; testing and results 3,000; discussion 1,000; conclusions and future work 750. Each results subsection should contain: the requirement and acceptance criterion; the test setup and procedure; the data with uncertainties (tables or plots with error bars); the statistical analysis; the comparison with the baseline or the requirement; and the interpretation (including anomalies) [4].
(b) About 13 slides at 1.5 minutes each: title; problem; objectives and requirements; related work and gap; design overview; implementation; demo; verification results; analysis against baseline; limitations; conclusions; future work; questions. Likely questions: Why this design? How did you verify requirement X and with what uncertainty? What is your own contribution? What would you do differently or next? [3]
(c) Any five: user manual; maintenance guide; build and installation instructions; design files and bill of materials; source code with README and licence; test reports and traceability matrix; list of known issues; archived data and scripts; final thesis PDF; lessons-learned report [3].
