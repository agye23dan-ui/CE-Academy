# Final Year Project II: Assignments with Worked Solutions

These assignments mirror the work of FYP II: managing implementation, verifying against requirements, analysing results statistically and communicating them. Show formulas and state assumptions. All numerical answers below were computed in Python (SciPy, NumPy); written answers show the expected level of specificity.

# Assignment 1: Managing Implementation and Verification (70 marks)

## Questions

**Q1. Agile tracking (12 marks)** A team's completed story points in six sprints were 15, 18, 17, 20, 19, 16. The remaining backlog is 100 points and sprints last two weeks. (a) Compute the mean velocity and the standard deviation [3]. (b) Estimate the number of sprints to finish with the mean, best and worst velocity [4]. (c) Which figure should you plan to, and how long would that be in weeks? [3] (d) Give two actions if the burn-down is above the ideal line [2].

**Q2. Earned value recovery (12 marks)** A $40,000 project has PV = $25,000, EV = $20,000 and AC = $22,000. (a) Compute CV, SV, CPI, SPI [4]. (b) Compute EAC with the cost trend and with the remaining work at budget, and TCPI [5]. (c) Recommend recovery actions [3].

**Q3. Testing metrics (16 marks)** A software component has 240 statements of which 204 were executed by the tests, and 60 branches of which 42 were exercised. Testing found 57 defects before release and 3 more were found by users; the component has 8 KLOC. (a) Statement and branch coverage [4]. (b) Defect density and defect removal efficiency [4]. (c) How many tests at minimum are needed for MC/DC of a decision with five independent conditions? [2] (d) Fixing costs are 1, 5, 10 and 20 units for defects found in requirements, design, coding and test respectively: compute the cost if 4, 8, 12 and 20 defects are found in those phases; compare with finding all 44 in the field at 100 units each [4] (e) Why is high coverage not enough? [2]

**Q4. Test plan (16 marks)** Requirement R5: "The device shall report temperature within ±0.5 °C over 0 to 50 °C and transmit a reading within 10 s of a request." (a) Write two test cases (ID, procedure, expected result, pass criterion, equipment, uncertainty) [8]. (b) Show how R5 is traced to design elements and tests [4]. (c) What is the difference between a test and a measurement uncertainty budget? [4]

**Q5. Automation (6 marks)** A regression test takes 6 hours manually and 0.75 hours when automated; automation needs 40 hours to set up. Find the break-even number of releases and the net saving over 20 releases.

**Q6. Version control and CI (8 marks)** List four practices for configuration management in a project and say what a continuous integration server does.

## Solutions

**Q1.**
(a) Mean = (15 + 18 + 17 + 20 + 19 + 16)/6 = 105/6 = **17.5 points**; sample standard deviation = **1.87**.
(b) Sprints = 100/velocity: mean **5.7**; best (20) **5.0**; worst (15) **6.7**.
(c) Plan to the pessimistic figure, 6.7, rounded up to 7 sprints = **14 weeks** (with buffer for integration and the defense, perhaps 8 sprints). Use the mean only for the "expected" date and communicate the range.
(d) Reduce scope (drop "Could" items), swap work for simpler solutions, remove blockers, increase focus (fewer parallel tasks), add effort only where tasks are independent, and re-estimate remaining work with the supervisor.

**Q2.**
(a) CV = EV - AC = **-$2,000**; SV = EV - PV = **-$5,000**; CPI = 20/22 = **0.909**; SPI = 20/25 = **0.80**.
(b) EAC (trend) = BAC/CPI = **$44,000**; EAC (remaining at budget) = AC + (BAC - EV) = **$42,000**; TCPI = (BAC - EV)/(BAC - AC) = 20,000/18,000 = **1.11**.
(c) The project is behind schedule and slightly over budget. Actions: cut or defer lower-priority requirements, reuse components, remove rework through better testing, negotiate a limited extension, and re-baseline with the supervisor. A TCPI of 1.11 means 11 percent better cost efficiency than planned is needed, which is demanding.

**Q3.**
(a) Statement coverage = 204/240 = **85 percent**; branch coverage = 42/60 = **70 percent** (branches are usually harder to cover than statements, and a coverage target of at least 80 to 90 percent is common).
(b) Total defects 60: density = 60/8 = **7.5 per KLOC**; DRE = 57/(57 + 3) = **95 percent**.
(c) n + 1 = **6 tests**.
(d) Cost = 4 × 1 + 8 × 5 + 12 × 10 + 20 × 20 = 4 + 40 + 120 + 400 = **564 units**; if all 44 defects were found in the field the cost would be 44 × 100 = **4,400 units** (7.8 times more). Early reviews and testing pay off.
(e) Coverage only shows which code was executed, not whether the test checked the right result (a test with no assertions "covers" code but verifies nothing); it also says nothing about missing requirements, timing and integration problems.

**Q4.**
(a) Test case T5.1 (accuracy): *Procedure*: place the device in a temperature chamber with a calibrated reference thermometer (uncertainty ±0.1 °C) at 0, 10, 20, 30, 40 and 50 °C; let it stabilize for 30 minutes; read the device output five times at each point. *Expected*: every reading within ±0.5 °C of the reference. *Pass criterion*: |device - reference| ≤ 0.4 °C (0.5 °C minus the 0.1 °C reference uncertainty). *Equipment*: chamber, reference thermometer, logging script. Test case T5.2 (response time): *Procedure*: send 1,000 requests at random intervals and time the delay between request and received reading with a logic analyser or timestamps synchronised at the receiver. *Expected*: at least 99 percent of replies within 10 s and none above 15 s (or whatever the requirement allows). *Pass criterion*: 99th percentile ≤ 10 s. *Uncertainty*: timestamp resolution 1 ms.
(b) R5 → design elements (sensor and ADC resolution, calibration routine, radio and retry protocol, sleep/wake timing) → tests T5.1 and T5.2 → results (links to the logged data and report section). Each design element and test lists the requirement number it supports.
(c) A test checks pass/fail against a criterion; a measurement uncertainty budget quantifies how well each measured value is known (reference accuracy, resolution, repeatability) so the criterion can include a guard band and the result can be reported as value ± uncertainty.

**Q5.** Time saved per release = 6 - 0.75 = 5.25 h; break-even = 40/5.25 = **7.6 releases**; over 20 releases: 20 × 5.25 - 40 = **65 hours saved**.

**Q6.** Practices: keep everything in version control (code, firmware, CAD, documents); commit small changes with clear messages; tag releases; use branches and review before merging; maintain a bill of materials and changelog; back up to a second location; document how to build. A CI server automatically builds the project and runs the automated tests on every push, reports failures immediately and may produce release artifacts.

# Assignment 2: Reliability and Statistical Analysis of Results (70 marks)

## Questions

**Q1. Reliability demonstration (14 marks)** A product must show an MTBF of at least 2,000 h. (a) Zero-failure test time at 95 percent confidence [3]. (b) How many units are needed to complete it in 720 h (30 days)? [2] (c) With one allowed failure at 90 percent confidence, test time (χ²(0.90; 4) = 7.779) [3]. (d) A field trial accumulates 12,000 unit-hours with 4 failures: point estimate and 90 percent lower bound (χ²(0.90; 10) = 15.987) [4]. (e) Why report the bound? [2]

**Q2. Proportions (10 marks)** (a) 47 successes in 50 trials: the estimate, the Wald interval and the Wilson interval (0.838 to 0.979); comment [5]. (b) 0 failures in 100 trials: the exact 95 percent upper bound and the rule-of-three estimate [3]. (c) How many failure-free trials demonstrate 99.9 percent reliability at 95 percent confidence? [2]

**Q3. Calibration (16 marks)** Eight reference inputs x = 0, 5, ..., 35 give sensor outputs y = 0.10, 1.18, 2.31, 3.35, 4.52, 5.58, 6.71, 7.76. (a) Fit y = a + b x and give slope, intercept, R² and the residual standard deviation [6]. (b) A reading y = 5.00 is observed: find x [2]. (c) Give the 95 percent confidence interval for the slope (t = 2.447) and the prediction interval at x = 18 [4]. (d) The ADC resolution is 0.01 units; what is the resolution in x? [2] (e) Why is R² near 1 not proof that the sensor is accurate? [2]

**Q4. Hypothesis tests (14 marks)** (a) Paired data before (48, 52, 45, 50, 55, 47, 51, 49) and after (42, 47, 41, 46, 50, 44, 46, 45) an optimization: mean difference, standard deviation, t statistic (7 df) and conclusion [6]. (b) Two filters, accuracy (percent): A = 88, 90, 85, 87, 91, 86, 89 and B = 92, 95, 91, 94, 96, 93, 90: means, standard deviations, Welch's t = -4.33 (p ≈ 0.001) and Cohen's d [6]. (c) Distinguish statistical from practical significance [2].

**Q5. Several groups and power (12 marks)** Three designs, five runs each: G1 = 5.1, 5.3, 4.9, 5.2, 5.0; G2 = 5.6, 5.8, 5.5, 5.9, 5.7; G3 = 5.2, 5.4, 5.1, 5.3, 5.5. (a) The group means and why ANOVA is used (F = 18.7, p = 0.0002) [4]. (b) Tukey post-hoc results: G1-G2 p < 0.001, G2-G3 p = 0.005, G1-G3 p = 0.155; interpret [3]. (c) Bonferroni threshold for six comparisons, and the familywise error rate of 10 uncorrected tests [3]. (d) Sample size per group for d = 0.5 with power 0.9 (z = 1.96 and 1.2816) [2]

**Q6. Monte Carlo and reporting (4 marks)** Four sequential tasks with triangular durations (1, 3, 6), (2, 4, 10), (2, 3, 5) and (1, 2, 4) weeks were simulated 100,000 times: mean 14.3 weeks, σ = 2.2, P(≤ 12 weeks) = 14 percent, percentiles 50/80/90 = 14.2/16.2/17.3 weeks. What deadline would you commit to and why?

## Solutions

**Q1.**
(a) T = M ln(1/(1 - C)) = 2,000 × ln 20 = **5,991 h**.
(b) 5,991/720 = 8.3, so **9 units** run for 720 h each (6,480 unit-hours).
(c) T = M χ²(C; 2r + 2)/2 = 2,000 × 7.779/2 = **7,779 h**.
(d) Point estimate = 12,000/4 = **3,000 h**; 90 percent lower bound = 2T/χ²(0.90; 2r + 2) = 24,000/15.987 = **1,501 h**.
(e) With few failures the point estimate is highly uncertain; the lower bound is the value you can claim with the stated confidence. Claiming 3,000 h would be unsupported.

**Q2.**
(a) Step 1: p̂ = 47/50 = **0.94**.
Step 2: Wald interval: 0.94 ± 1.96√(0.94 × 0.06/50) = (0.874, **1.006**), an upper limit above 1, which is impossible: Wald fails near 0 or 1.
Step 3: Wilson interval: **(0.838, 0.979)**, always within [0, 1].
Step 4: Report the Wilson (or exact) interval.
(b) Exact upper bound = 1 - 0.05^(1/100) = **2.95 percent**; the rule of three gives 3/100 = **3 percent**.
(c) Need (0.999)ⁿ ≤ 0.05 → n = ln 0.05/ln 0.999 = **2,994 trials**.

**Q3.**
(a) Least squares: slope **0.2196**, intercept **0.0950**, R² = **0.9999**; standard errors 0.00083 (slope) and 0.0174 (intercept); residual standard deviation s = **0.0269**.
(b) x = (5.00 - 0.0950)/0.2196 = **22.33**.
(c) Slope CI = 0.2196 ± 2.447 × 0.00083 = **(0.2176, 0.2217)**. At x = 18: ŷ = 0.0950 + 0.2196 × 18 = 4.049; the prediction interval for a new reading is ±2.447 s √(1 + 1/n + (x - x̄)²/S_xx) = **±0.070**; the interval for the mean response is ±0.023.
(d) Resolution in x = 0.01/0.2196 = **0.046 units**.
(e) R² only measures the fit to the calibration data; a sensor can be highly linear but biased, drift with temperature, depend on other variables, or be calibrated against an inaccurate reference. Accuracy requires an uncertainty analysis traceable to a reference.

**Q4.**
(a) Differences (before - after) = 6, 5, 4, 4, 5, 3, 5, 4: mean **4.5**, standard deviation **0.926**, t = 4.5/(0.926/√8) = **13.75** with 7 df, p = 2.5×10⁻⁶. The optimization gives a significant reduction; the 95 percent confidence interval is **(3.73, 5.27)**; effect size d_z = 4.9 (very large).
(b) Step 1: A: mean **88.0**, s = **2.16**; B: mean **93.0**, s = **2.16**.
Step 2: Welch's t = -4.33, df ≈ 12, p ≈ 0.001: B is significantly more accurate by 5 percentage points.
Step 3: Cohen's d = 5.0/2.16 = **2.3** (a very large effect).
(c) Statistical significance says the effect is unlikely to be due to chance; practical significance asks whether the effect is large enough to matter for the application (a 0.1 percent improvement can be significant with huge samples but irrelevant). Report effect sizes and confidence intervals.

**Q5.**
(a) Means: G1 = **5.10**, G2 = **5.70**, G3 = **5.30**. ANOVA compares three or more means with a single test controlling the error rate; F = 18.7, p = 0.0002 shows that at least one mean differs.
(b) G2 differs significantly from G1 (p < 0.001) and from G3 (p = 0.005); G1 and G3 do not differ significantly (p = 0.155). Design 2 is the best (largest) here; designs 1 and 3 cannot be separated with five runs each.
(c) Bonferroni: 0.05/6 = **0.0083**; the familywise error rate for 10 independent tests at 5 percent is 1 - 0.95¹⁰ = **40 percent**.
(d) n = 2((1.96 + 1.2816)/0.5)² = **84 per group**.

**Q6.** Commit to about **17 to 18 weeks**: the 90th percentile is 17.3 weeks. The mean (14.3) has only about a 50 percent chance of being met and the original 12-week target only a 14 percent chance. Communicate the range, and the risk that drives it (the second task has the long tail).

# Assignment 3: Results Analysis, Thesis and Defense (70 marks)

## Questions

**Q1. Error budget and requirement verification (16 marks)** A measurement has independent error sources of 0.5, 0.3, 0.2 and 0.1 units (1σ). (a) Combined standard uncertainty (quadrature) and the worst-case sum [4]. (b) Expanded uncertainty with k = 2 [2]. (c) The requirement is ±1.5 units. Is it met if the measured error vs reference is 1.0? Discuss guard bands [5]. (d) Which error source should be reduced first and what happens if it is halved? [5]

**Q2. Reporting latency (8 marks)** Ten response times (ms): 8, 9, 8, 10, 9, 8, 12, 9, 8, 60. (a) Mean, median and 90th percentile (interpolated) [4]. (b) Which metric(s) would you report for a user-facing service and why? [4]

**Q3. Writing a results chapter (12 marks)** (a) Describe the structure of a results chapter for a project with eight requirements [6]. (b) Write a one-paragraph conclusion statement for a controller that achieved a settling time of 4.2 ± 0.3 s (requirement 5 s) with 3.1 percent overshoot (requirement 5 percent) [6].

**Q4. Thesis planning (12 marks)** (a) Allocate a word budget for a 15,000-word report and give the pages at 300 words per page [6]. (b) Give four rules for figures and tables [3]. (c) State three academic-integrity rules for the thesis [3].

**Q5. Presentation and defense (12 marks)** (a) Plan a 25-minute presentation: number of slides and a time allocation [5]. (b) List four likely examiner questions and how to prepare [4]. (c) What belongs in a demonstration contingency plan? [3]

**Q6. Project closure (10 marks)** List the items in a handover package, the archive checklist and three lessons-learned questions.

## Solutions

**Q1.**
(a) u_c = √(0.5² + 0.3² + 0.2² + 0.1²) = √0.39 = **0.62 units**; worst-case sum = **1.1 units**.
(b) U = 2 × 0.62 = **1.25 units** (about 95 percent coverage).
(c) A measured error of 1.0 with U = 1.25 means the true error lies between -0.25 and 2.25 units with about 95 percent confidence, so compliance with ±1.5 is not demonstrated. Apply a **guard band**: accept only if |measured error| + U ≤ limit, i.e. measured error ≤ 0.25 (strict) or use a decision rule agreed in advance (shared risk). Better, reduce the uncertainty with a better reference or averaging.
(d) Step 1: The 0.5-unit contributor dominates (variance share 0.25/0.39 = 64 percent).
Step 2: Halving it to 0.25 gives u_c = √(0.0625 + 0.09 + 0.04 + 0.01) = **0.45** (a 27 percent reduction); halving the smallest source (0.1) would only change u_c from 0.624 to 0.618.
Step 3: Always attack the largest contribution.

**Q2.**
(a) Mean = 141/10 = **14.1 ms**; median = **9.0 ms** (middle values 9 and 9); 90th percentile (linear interpolation) = **16.8 ms** (between 12 and 60).
(b) Report the median and tail percentiles (p95, p99) plus the maximum or a histogram: the mean (14.1) is distorted by a single 60 ms outlier and does not describe typical behaviour, while users notice tail latency. Also state the number of requests, load and system configuration.

**Q3.**
(a) Open with the test setup (equipment, conditions, number of runs). Present a summary table of the eight requirements with target, measured value ± uncertainty, verdict and test reference. Then one section per requirement (or group) with the method, results (tables and plots with error bars), analysis and discussion of discrepancies. Follow with comparison to baseline or prior work, an error analysis and limitations, and a summary of which requirements were met.
(b) "The controller achieved a settling time of 4.2 ± 0.3 s (95 percent confidence, five runs), meeting the 5 s requirement with a margin of 0.8 s (more than the measurement uncertainty), and an overshoot of 3.1 percent, satisfying the 5 percent limit. Both requirements were therefore met under the tested conditions (no load, 25 °C); performance under load and at temperature extremes was not tested and is listed as a limitation."

**Q4.**
(a) Example for 15,000 words: abstract 250; introduction 1,200; literature review 3,000; requirements and design 3,500; implementation 2,500; testing and results 3,000; discussion 1,000; conclusions and future work 550 (total 15,000). 15,000/300 = **50 pages** of text plus figures, tables, references and appendices.
(b) Number and caption every figure and table; refer to each in the text; label axes with quantities and units, with legible fonts and error bars; use vector graphics or high resolution; keep style consistent; do not reproduce others' figures without permission and citation.
(c) Cite all sources and quote or paraphrase correctly; do not present others' work, data or code as yours; disclose use of AI or editing tools according to the institution's rules; do not fabricate or selectively omit data; acknowledge your teammates' contributions.

**Q5.**
(a) 25 minutes at about 1.5 minutes per slide = **about 16 slides**, with 20 minutes talk and 5 minutes for the demonstration if it is separate: title (0.5 min), problem and motivation (2), objectives and requirements (2), literature gap (2), design (3), implementation (3), demonstration (4), results and analysis (5), limitations (1), conclusions and future work (2), thanks (0.5). Leave buffer time.
(b) Examples: "Why this design over alternative X?" (prepare the decision matrix and evidence); "How did you verify requirement R3 and with what uncertainty?" (traceability table, test report); "What is your own contribution?" (clear split of work and reuse); "What are the limitations and what would you do next?" (limitations slide, future work). Prepare backup slides with calibration data, error analysis and extra results; rehearse answers aloud.
(c) A recorded video of the working system; pre-loaded data and screenshots; spare parts, cables and power; a second laptop or battery; a checklist for set-up; a decision rule for when to switch to the backup (for example after 30 seconds without a response); and a clear explanation of what the audience would have seen.

**Q6.** Handover: user manual and quick start, maintenance guide, build and installation instructions, design files (schematics, CAD, source) and bill of materials, test reports and traceability matrix, list of known issues, licence information. Archive checklist: tagged repository with README, data and scripts to reproduce figures, final PDF thesis, removal of secrets, backups in two locations, ownership and permission notes. Lessons-learned questions: What went well and why? Where did estimates differ most from reality and why? Which risks occurred and how were they handled? What would you do differently with the same project?
