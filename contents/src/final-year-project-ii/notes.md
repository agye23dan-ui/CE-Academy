# Final Year Project II: Complete Lecture Notes

Prerequisites: Final Year Project I (an approved proposal, requirements, design and plan), probability and statistics, and the engineering management course. Final Year Project II (FYP II) is the implementation, verification, evaluation, writing and defense phase. Every number in the worked examples (coverage, reliability demonstration, confidence intervals, hypothesis tests, calibration, burn-down) was computed in Python so you can reproduce it with your own data.

## Chapter 1. What FYP II Asks of You

### 1.1 Deliverables and assessment
Typical deliverables: a working prototype or complete study (hardware, software or analysis) that meets the agreed requirements; a verification and validation report with evidence; a thesis (often 8,000 to 15,000 words for a design project, about 30 to 60 pages plus appendices); an oral defense and demonstration; a poster or short paper; archived code, data and design files; a logbook. Assessment criteria usually weigh technical achievement and depth, verification and analysis of results, planning and independence, quality of the thesis and the defense.

### 1.2 Phases of the semester
1. **Implementation** (weeks 1 to 8): build in increments, riskiest parts first, with early integration.
2. **Verification and evaluation** (weeks 7 to 12): test against the requirements, measure, compare with baselines, analyse errors.
3. **Writing** (throughout, with a concentrated block in weeks 10 to 13): draft chapters as results arrive.
4. **Defense** (weeks 14 to 15): rehearse the talk and demonstration, prepare for questions.
Hold back a **buffer of two weeks** for integration surprises, late parts and revisions.

### 1.3 Working with your supervisor
Send a short written update before each meeting (done, planned, problems, decisions needed); agree the "definition of done" for each milestone; show failures early; never present the supervisor with a surprise in the last two weeks. Record decisions in the logbook.

## Chapter 2. Managing Implementation

### 2.1 Incremental, risk-first development
Build a thin end-to-end skeleton (a "walking skeleton") early: sensor to processing to output, or data to model to result. Then add features in priority order (MoSCoW). Integrate weekly. Test each increment before building on it. Keep the prototype demonstrable at every stage so that something always works.

### 2.2 Configuration and version control
Use Git for code, firmware, CAD, schematics and documents; commit small changes with meaningful messages; tag releases (v0.1 skeleton, v0.5 integrated, v1.0 final); keep a bill of materials and a changelog; back up to a second location; store build instructions so anyone can reproduce the build. Use branches for experiments and merge only after tests pass. Continuous integration (CI) runs the automated tests on every push.

### 2.3 Technical debt and quality
Quick fixes accumulate as technical debt. A debt ratio can be tracked as remediation effort divided by total development effort: 120 hours of rework against 880 hours of feature work is 120/1,000 = **12 percent**. Pay it down regularly by refactoring, documenting and adding tests; do not leave cleanup for the last week.

### 2.4 Tracking progress with agile measures
Break work into sprints of one or two weeks with a prioritized backlog. **Velocity** is the story points completed per sprint. Example velocities 18, 22, 20, 24, 21 give a mean of **21** points per sprint. A backlog of 130 points needs 130/21 = **6.2 sprints**; the range using the best (24) and worst (18) velocities is **5.4 to 7.2 sprints**, so plan for the pessimistic figure plus buffer. A burn-down chart that stays above the ideal line shows slippage early.

### 2.5 Recovering from slippage
Use earned value: BAC = $60,000, PV = $30,000, EV = $24,000, AC = $30,000 gives SPI = 0.80, CPI = 0.80, EAC = BAC/CPI = **$75,000** and TCPI = (BAC - EV)/(BAC - AC) = 36,000/30,000 = **1.20**. If eight weeks of work remain at an SPI of 0.8, they will take 8/0.8 = **10 weeks**. Options: reduce scope (drop "Could" requirements), add parallel effort where tasks are independent, reuse existing components, simplify the design, or extend the schedule with the supervisor's agreement. Never silently drop requirements: document and justify every change.

### 2.6 Monte Carlo schedule forecast
Replace point estimates with ranges. Three sequential tasks with triangular durations (2, 4, 8), (3, 5, 13) and (1, 2, 3) weeks simulated 100,000 times gave a mean total of **13.7 weeks**, standard deviation 2.5 weeks, a probability of **58 percent** of finishing within 14 weeks, and a 90th-percentile duration of **17.2 weeks**. Plan to the 80 or 90 percent figure, not the mean.

## Chapter 3. Verification and Validation

### 3.1 Verification versus validation, test levels
**Verification** asks "did we build it right?" (against the specification); **validation** asks "did we build the right thing?" (against real needs). Test levels: **unit** (single function or circuit block), **integration** (interfaces between blocks), **system** (the whole against the requirements), **acceptance** (with the user or client). For hardware add bench tests, environmental tests (temperature, vibration, humidity), electromagnetic tests, safety tests and burn-in. Use hardware-in-the-loop (HIL) simulation where the real plant is dangerous or expensive.

### 3.2 The test plan and traceability
For every requirement define a **test case** with: ID, requirement traced, preconditions, procedure, expected result, pass/fail criterion with tolerance, equipment and the uncertainty of the measurement. Maintain a traceability matrix (requirement → design element → test → result). A requirement without a test is unverified; a test without a requirement is a waste. Prepare the tests while writing the requirements; run them as soon as each feature is built.

### 3.3 Coverage and defect metrics
Software coverage: **statement coverage** = executed statements/total (172 of 200 = **86 percent**); **branch coverage** = executed branches/total (38 of 50 = **76 percent**); **modified condition/decision coverage (MC/DC)** needs at least n + 1 tests for a decision with n independent conditions (5 tests for 4 conditions) and is required in safety-critical avionics (DO-178C). High coverage does not guarantee correctness (it measures what was executed, not what was checked). Defect density = defects/KLOC (46 defects in 12.5 KLOC = **3.68 per KLOC**). **Defect removal efficiency** DRE = defects found before release/(found before + found after): 92/(92 + 8) = **92 percent**; an escape rate of 8 percent signals weak testing.

### 3.4 Economics of finding defects early
The cost of fixing a defect rises with the phase in which it is found: roughly 1× in requirements, 5× in design, 10× in coding, 20× in testing and 100× in the field. Ten defects found at each of the first three stages cost 10 × 1 + 10 × 5 + 10 × 10 = **160 units**; the same ten found in the field would cost 1,000. Review requirements and designs, test early and often, and automate regression tests. If a regression test takes 4 hours manually and 0.5 hours automated, with a 30-hour setup, automation breaks even after 30/3.5 = **8.6 releases** and saves 40 hours over 20 releases.

### 3.5 Debugging methods
Reproduce the failure, minimize the test case, form a hypothesis and test it (change one thing at a time), use logging, assertions, a debugger, a logic analyser or an oscilloscope, binary search over versions (`git bisect`), and write a regression test for each fixed bug. Record the root cause in the logbook.

## Chapter 4. Reliability and Statistical Verification

### 4.1 Demonstrating a failure rate
To show with confidence C that the MTBF is at least M with zero failures in the test, the required test time is T = M ln(1/(1 - C)). For M = 1,000 h: C = 80 percent → **1,609 h**; 90 percent → **2,303 h**; 95 percent → **2,996 h**. If failures are allowed, T = M χ²(C; 2r + 2)/2: for r = 0, 1, 2 failures at 90 percent confidence T = **2,303, 3,890 and 5,322 h**. Testing many units in parallel reduces calendar time (100 units for 24 h = 2,400 unit-hours). Accelerated life testing (higher temperature or stress) shortens tests but needs a validated acceleration model (Arrhenius for temperature).
**Lower confidence bound from observed data:** 5,000 unit-hours with 2 failures gives a point estimate of 2,500 h but a 90 percent lower bound of 2 × 5,000/χ²(0.90; 6) = **939 h**; report the bound, not just the point estimate.

### 4.2 Pass/fail data and proportions
If 50 trials produce zero failures, the 95 percent upper bound on the failure probability is 1 - 0.05^(1/50) = **5.8 percent** (the "rule of three": about 3/n = 6 percent). For 92 successes out of 100 trials the accuracy estimate is 0.92 with a 95 percent **Wilson** interval **(0.85, 0.96)**; the simple Wald interval (0.867, 0.973) is too optimistic near the extremes. Use enough trials for the claim you want to make: demonstrating 99 percent reliability with 95 percent confidence needs about 300 failure-free trials.

### 4.3 Availability
Availability = MTBF/(MTBF + MTTR): MTBF 1,000 h and MTTR 4 h gives **0.996** (about 35 hours of downtime per year). Include repair time in the design (modularity, spares, diagnostics).

## Chapter 5. Measurement, Calibration and Uncertainty

### 5.1 Calibration by linear regression
Seven reference inputs x (0 to 60) and sensor readings y (0.02, 1.05, 1.98, 3.10, 4.02, 4.95, 6.11) give by least squares: slope **0.1004**, intercept **0.0211**, R² = **0.9993**, standard error of the slope 0.0012 and of the intercept 0.043, residual standard deviation s = 0.0637 (maximum residual 0.091). The calibration model is y = 0.0211 + 0.1004x. **Inverse prediction:** a measured reading of 3.50 corresponds to x = (3.50 - 0.0211)/0.1004 = **34.65**. At x = 25 the predicted reading is 2.531 with a 95 percent **confidence interval** for the mean response of ±0.064 and a 95 percent **prediction interval** for a new single measurement of ±0.176 (prediction intervals are wider: they include the scatter of individual measurements). Check the residuals for patterns (curvature means a linear model is wrong); extrapolate only with justification.

### 5.2 Measurement system analysis
Repeatability (same operator, same instrument) and reproducibility (different operators or setups) combine as σ_GRR = √(0.05² + 0.03²) = **0.058**. Against a process standard deviation of 0.25 this is 23 percent, marginal: aim for under 10 percent, and use an instrument with resolution at most one tenth of the tolerance. Report **uncertainty** (type A from repeated readings, type B from instrument specifications), combine in quadrature for independent errors and state the coverage factor (k = 2 for about 95 percent).

### 5.3 Reporting performance metrics correctly
For latency report percentiles, not just the mean: for response times 10, 11, 10, 12, 11, 10, 13, 11, 10 and 95 ms the mean is **19.3 ms** but the median is **11 ms** and the 90th percentile is 21 ms; one outlier distorts the mean, and tail latency (p95, p99) is what users feel. State the number of runs, warm-up policy, hardware, versions and the environment. Compare against a **baseline** and the requirement.

## Chapter 6. Experimental Evaluation and Statistics

### 6.1 Paired comparisons
Eight tasks timed before and after an optimization (ms): before 120, 135, 128, 140, 125, 132, 138, 130; after 110, 128, 121, 129, 119, 126, 131, 122. Differences have mean **7.75 ms** and standard deviation 1.83 ms; the paired t statistic is **11.96** with 7 degrees of freedom, p = **6.5×10⁻⁶**, and the 95 percent confidence interval for the improvement is **6.2 to 9.3 ms**. The standardized effect size d_z = 4.2 is very large. Use the paired test when the same cases are measured twice; it removes between-case variation.

### 6.2 Comparing several designs
Settling times for three designs (5 runs each): A = 12.1, 11.8, 12.4, 12.0, 12.3 (mean 12.12); B = 12.9, 13.1, 12.7, 13.3, 12.8 (mean 12.96); C = 12.4, 12.6, 12.2, 12.5, 12.7 (mean 12.48). One-way ANOVA gives F = **17.5**, p = **0.00028**: at least one mean differs. Post-hoc **Tukey** comparisons: A vs B difference 0.84 s (p < 0.001, significant), B vs C 0.48 s (p = 0.014, significant), A vs C 0.36 s (p = 0.064, not significant at 5 percent). Never run many pairwise t-tests without correction.

### 6.3 Multiple comparisons and p-hacking
With 20 independent tests at the 5 percent level the chance of at least one false positive is 1 - 0.95²⁰ = **64 percent**. Bonferroni divides the significance level by the number of comparisons: 0.05/5 = **0.01** for five comparisons, 0.0167 for three. Decide hypotheses and metrics **before** looking at the data; report all comparisons you made; do not tune on the test set.

### 6.4 Sample size and power
To detect a standardized difference d with power 0.80 at α = 0.05 (two-sided, two groups) you need n per group ≈ 2((1.96 + 0.84)/d)²: d = 0.5 → **63** per group; d = 0.8 → **25** per group. In raw units: σ = 4 and a difference of 3 → d = 0.75 → about **28** per group. Underpowered studies miss real effects and exaggerate the ones they find.

### 6.5 Resampling and simulation
**Bootstrap**: resample the data with replacement many times to estimate the sampling distribution of any statistic. For the eight values 12.1, 11.8, 12.4, 12.0, 12.3, 12.9, 13.1, 12.7 the bootstrap 95 percent interval for the median is **(12.0, 12.9)**. Monte Carlo simulation propagates input uncertainty through a model (Section 2.6).

### 6.6 Machine-learning and software projects
Keep training, validation and test data separate; report variance across random seeds; use cross-validation; compare with simple baselines; report confusion matrices and not only accuracy; check for data leakage and distribution shift. For benchmark results state the dataset, split and version of code.

## Chapter 7. Analysing and Discussing Results

- **Compare against the requirements**: a table of requirement, target, measured value ± uncertainty, verdict (met, partially, not met) with a reference to the test.
- **Compare against a baseline or prior work** from your literature review; explain differences quantitatively.
- **Error analysis**: break down failures by cause (environmental, noise, algorithmic, implementation); identify the dominant error contributor first.
- **Limitations and threats to validity**: sample size, lab versus field conditions, calibration range, assumptions that may not hold, simplifications in the model.
- **Reproducibility**: provide scripts, data and a build recipe so another person can repeat the experiments.
- **Honest reporting**: explain what did not work and why; do not hide failures. A well-analysed negative result earns more credit than an unexplained success.

## Chapter 8. Writing the Thesis

### 8.1 Structure and budget
Abstract; acknowledgements; contents and lists of figures/tables; 1 Introduction (problem, objectives, contribution, outline); 2 Literature review (updated); 3 Requirements and design; 4 Implementation; 5 Testing and results; 6 Discussion; 7 Conclusions and future work; references; appendices (code, schematics, data sheets, test logs). At about 300 words per page a 12,000-word report is roughly 40 pages plus figures and appendices (a 36,000-word thesis would be about 120 pages). Example budget for a 12,000-word report: abstract 250; introduction 1,000; literature review 2,500; requirements, design and implementation 3,500; testing and results 3,000; discussion 1,000; conclusions and future work 750.

### 8.2 Writing process
Write the methods and design chapters while you build; write results as soon as tests finish. Draft quickly, then revise: structure first (headings and topic sentences), then content, then style. Each figure and table needs a caption, units, numbering and a reference in the text. Use a consistent notation list, SI units and significant figures that match the uncertainty. Define abbreviations at first use. Keep the abstract self-contained (problem, method, key quantitative results, conclusion in 150 to 250 words). The conclusions must answer the objectives set in the proposal, with numbers.

### 8.3 References and integrity
Cite every source in IEEE (or the required) style, check every reference exists, and cite the original source. Run plagiarism-detection software if available and disclose use of AI tools as the institution requires. Do not include data or figures you did not produce without permission and citation.

### 8.4 Tools
LaTeX (Overleaf) or a word processor template; Zotero or BibTeX for references; vector figures (draw.io, Inkscape, Matplotlib PDF/SVG); version-control the thesis source; export to PDF/A for archiving. Proofread aloud, with a colleague, and check page numbers, cross-references and figure quality.

## Chapter 9. The Presentation and the Defense

### 9.1 The talk
For a 20-minute talk plan about 13 slides (1.5 minutes each): title; problem and motivation; objectives and requirements; related work and gap; design overview; implementation highlights; demonstration; test results (requirement table); analysis/comparison; limitations; conclusions; future work; thanks/questions. One idea per slide, large figures, minimal text. Rehearse with a timer at least three times, including the demonstration.

### 9.2 The demonstration
Prepare a short scripted demo that proves each key requirement, with a **backup video** in case of failure, spare parts and cables, a power plan, and a fallback dataset. Test the setup in the defense room. Explain what the audience will see before you run it.

### 9.3 Handling questions
Listen to the whole question, pause, answer directly and briefly, and admit what you do not know (offer how you would find out). Prepare for: Why this design? What alternatives did you consider? How did you verify requirement X? What is the uncertainty on this number? What are the limitations? What would you do differently? What is your own contribution (versus team members or existing libraries)? What are the ethical, safety and sustainability aspects? Keep backup slides (calibration data, extra results, error analysis).

## Chapter 10. Project Closure and Professional Practice
- **Handover**: user manual, maintenance guide, build instructions, design files, test reports, license choice for code and hardware, and a list of known issues.
- **Archive**: source, data, figures and thesis in a tagged repository with a README; remove secrets and credentials; respect confidentiality agreements and IP ownership.
- **Reflection**: a lessons-learned review (what worked, what did not, estimation accuracy, risks that materialized) to take into your career; update your CV and portfolio with quantified results.
- **Dissemination**: a poster, a short paper, a demo video, an open-source release where allowed.
- **Ethics and safety**: final checks on hazards, data protection, consent for any human participants, and honest reporting.

## Chapter 11. FYP II Checklist and Common Mistakes

**Checklist:** requirements met or deviations justified; traceability table complete; tests run with recorded results and uncertainties; baseline comparison; error analysis; limitations; thesis proofread with consistent references; figures readable; code and data archived; demo rehearsed with backup; slides timed; logbook up to date.

**Common mistakes.** Starting to write only in the last two weeks; integrating late; no test plan or acceptance criteria; testing only the "happy path"; quoting means without spread or uncertainty; many unplanned comparisons and reporting only the significant one; tuning on the test set; comparing with a weak baseline; hiding failures; unreadable figures; unchecked references; an over-long talk; a demonstration without a backup; and failing to say clearly what you personally contributed.
