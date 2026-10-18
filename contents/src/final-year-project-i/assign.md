# Final Year Project I: Assignments with Worked Solutions

These assignments mirror the deliverables of FYP I. Written answers should be specific to an engineering project; the model solutions show the expected level of detail, not the only acceptable wording. All numerical answers were computed and checked in Python (critical path, PERT, earned value, NPV, sample size, uncertainty propagation, t-tests).

# Assignment 1: Problem Definition, Proposal and Literature Review (70 marks)

## Questions

**Q1. Problem statement and objectives (20 marks)** A student writes: "My project is to make a better solar charger." (a) List four weaknesses of this statement [4]. (b) Rewrite it as a problem statement with context, gap and measurable target for a project of your choice [6]. (c) Write one aim and three SMART objectives, each mapped to a deliverable [6]. (d) Give three items that are explicitly out of scope and two assumptions [4].

**Q2. Search strategy and screening (18 marks)** (a) Write a Boolean search string for "low-cost air-quality monitoring using IoT sensors" with synonyms and explain each operator [6]. (b) A search returns 2,400 records; 600 survive the title screen, 150 the abstract screen and 40 are read in full. Compute the yield at each stage and overall, and estimate the reading time at 2.5 hours per paper [5]. (c) List four inclusion/exclusion criteria [4]. (d) What is snowballing? [3]

**Q3. Synthesis and critical review (14 marks)** (a) Give the columns of a synthesis matrix you would use for ten papers on battery state-of-charge estimation [4]. (b) Rewrite this sentence from a weak review into a critical comparison: "Smith used a Kalman filter. Jones used a neural network. Lee used coulomb counting." (use hypothetical results) [6]. (c) State what a "research gap" is and give an example [4].

**Q4. Citation and integrity (10 marks)** (a) Format an IEEE reference for: authors A. Rahman and L. Chen, title "A low-power humidity sensor node for greenhouses", journal IEEE Sensors Journal, volume 22, issue 7, pages 6401 to 6410, year 2022 [3]. (b) Distinguish quoting, paraphrasing and plagiarism with an example of each [4]. (c) State two rules for using AI writing tools responsibly in a project report [3].

**Q5. Proposal review (8 marks)** List eight sections of a good proposal and say what question each answers.

## Solutions

**Q1.**
(a) Weaknesses: no problem or user is identified; "better" is undefined and unmeasurable; no baseline or comparison; no scope (power rating, application, cost); no gap relative to existing chargers; no deliverable or time frame.
(b) Example: "Off-grid farm workers in region X charge phones and lamps from diesel generators costing about $0.40 per kWh equivalent; commercial solar chargers above 20 W cost over $120 and lose 25 to 40 percent of the panel energy in conversion. This project will design a 20 W solar charge controller with MPPT that achieves at least 92 percent conversion efficiency at a target cost under $35." It has context, gap and numbers.
(c) Aim: to design, build and evaluate a low-cost MPPT solar charge controller for 12 V lead-acid batteries. Objectives: **O1** (week 6) by simulation, select an MPPT algorithm and converter topology that reach at least 92 percent efficiency over 20 to 100 percent load (deliverable: simulation report). **O2** (week 12) design and build a prototype with bill of materials under $35 (deliverable: schematic, PCB, BOM). **O3** (week 18) test the prototype over a range of irradiance and report efficiency with uncertainty compared with a simple PWM charger (deliverable: test report).
(d) Out of scope: lithium chemistries, grid-tie inverters, a smartphone app, commercial certification. Assumptions: panel open-circuit voltage below 22 V; ambient temperature between 0 and 45 °C.

**Q2.**
(a) `("air quality" OR "air pollution" OR "particulate matter" OR PM2.5) AND (monitor* OR sensing OR "sensor network") AND ("low-cost" OR "low cost" OR "inexpensive") AND (IoT OR "Internet of Things" OR "wireless sensor")`. OR joins synonyms (widens), AND narrows by requiring all concepts, quotation marks keep phrases together, the asterisk truncates (monitor, monitoring, monitors), parentheses group terms.
(b) Yields: title screen 600/2400 = **25 percent**; abstract screen 150/600 = **25 percent**; full reading 40/150 = **26.7 percent**; overall 40/2400 = **1.67 percent**. Reading time = 40 × 2.5 = **100 hours** (plan this in the schedule).
(c) Examples: published 2015 or later; peer-reviewed journal or conference; reports measured sensor accuracy or cost; written in English; excludes papers with no experimental validation; excludes duplicates.
(d) Snowballing finds further papers from a good paper: **backward** (read its reference list) and **forward** (find later papers that cite it, using Google Scholar or Scopus).

**Q3.**
(a) Columns: citation; year; battery chemistry; estimation method; data/test conditions; reported accuracy (e.g. RMSE in percent SoC); computational cost; hardware needed; limitations; relevance to my project.
(b) "Smith [3] used an extended Kalman filter and achieved a 2.1 percent SoC error at 25 °C but did not test below 10 °C, where cell parameters change sharply. Jones [4] trained a neural network that reduced error to 1.4 percent, at the cost of 5,000 labelled cycles and 1.2 MB of model memory, which exceeds our microcontroller budget. Lee [5] applied coulomb counting, which is cheap but drifts by 5 percent per day without recalibration. None combined low memory with low-temperature validation, which motivates the approach proposed here."
(c) A research gap is a question or condition the existing work has not adequately addressed (for example no study validates low-cost SoC estimation on a 8-bit-class microcontroller below 0 °C). It justifies why the project is needed.

**Q4.**
(a) `[1] A. Rahman and L. Chen, "A low-power humidity sensor node for greenhouses," IEEE Sensors J., vol. 22, no. 7, pp. 6401-6410, 2022.`
(b) **Quoting**: reproducing exact words in quotation marks with a citation ("The device 'consumes 4 µA in sleep mode' [1]."). **Paraphrasing**: restating the idea in your own words and citing it ("The node's sleep current is only a few microamps [1]."). **Plagiarism**: using the author's wording, figure or idea without credit (copying the sentence without quotation marks or citation).
(c) Any two: disclose use as the institution's policy requires; verify every fact, number and reference (AI tools can invent citations); never submit text or code you cannot explain or defend; keep your own analysis and results as your work.

**Q5.** Title and abstract (what is the project in brief?); introduction and background (why does it matter?); problem statement (what exactly is the gap?); aim and objectives (what will be achieved?); literature review (what is known and what is missing?); methodology and design approach (how will it be done?); work plan with milestones (when?); resources, budget and risks (what is needed and what could go wrong?). Also expected outcomes and evaluation, ethics and safety, and references.

# Assignment 2: Requirements, Concept Selection and Design Reliability (70 marks)

## Questions

**Q1. Writing requirements (16 marks)** Rewrite each vague requirement as a measurable, verifiable requirement and state how it is verified: (a) "The sensor node should last a long time on battery." (b) "The system must be fast." (c) "The enclosure must be rugged." (d) "The interface should be user friendly." [16]

**Q2. Prioritization and traceability (12 marks)** (a) Classify with MoSCoW: wireless reporting every 15 minutes; a mobile app; operation from -10 to 50 °C; OTA firmware updates; a colour touch-screen [5]. (b) Construct a traceability table for three requirements R1 (battery life at least 2 years), R2 (humidity accuracy ±3 percent RH), R3 (report delivered within 60 s) listing design elements and tests [7].

**Q3. Concept selection (20 marks)** Choose a radio for a farm sensor. Criteria and weights: range 0.35, power 0.30, cost 0.20, ease of development 0.15. Scores (range, power, cost, ease): BLE (5, 9, 9, 9), LoRa (9, 8, 6, 6), Wi-Fi (6, 3, 8, 9), Zigbee (7, 8, 7, 6). (a) Compute the weighted scores and rank [6]. (b) Repeat with weights (0.2, 0.4, 0.2, 0.2) and with equal weights [6]. (c) Comment on robustness and give a recommendation with a justification that also uses requirements, not only the matrix [5]. (d) State one weakness of weighted matrices [3].

**Q4. Reliability (14 marks)** A node has four subsystems in series with MTBFs of 40,000 h, 25,000 h, 100,000 h and 60,000 h (exponential failures). (a) Compute the system failure rate and MTBF [4]. (b) Compute the reliability over 2,000 h [3]. (c) The weakest subsystem is duplicated in parallel; recompute the 2,000 h reliability [4]. (d) If mean repair time is 8 h and MTBF is 20,000 h, find availability and annual downtime [3].

**Q5. Design review (8 marks)** List six items to bring to a design review and four questions a reviewer should ask.

**Q6. Block diagram and interfaces (4 marks)** List the four pieces of information needed to define an interface between two subsystems.

## Solutions

**Q1.**
(a) "The node shall operate for at least 24 months from two AA lithium cells (3,000 mAh nominal) reporting every 15 minutes at 25 °C, giving an average current of at most 120 µA." Verified by measuring average current with a power analyser over 24 h and computing life with a 20 percent derating.
(b) "The controller shall respond to a 10 percent step in setpoint with a settling time (2 percent) below 5 s." Verified by step-response tests recorded at 1 kHz, five runs.
(c) "The enclosure shall meet IP65 and survive a 1 m drop onto concrete on six faces without loss of function." Verified by IP test or an equivalent spray test and a drop test.
(d) "A first-time user shall complete the pairing procedure in under 3 minutes without help, with at least 8 of 10 test users succeeding." Verified by a usability test with ten users.

**Q2.**
(a) **Must**: wireless reporting every 15 minutes; operation from -10 to 50 °C (stated environment). **Should**: OTA firmware updates. **Could**: a mobile app. **Won't (this time)**: colour touch-screen (high cost and power, little value).
(b) R1 → design: low-power MCU with deep sleep, duty-cycled radio, power budget; test: 24 h average-current measurement. R2 → design: calibrated capacitive sensor, 12-bit ADC, temperature compensation; test: comparison with a reference hygrometer at 20, 50, 80 percent RH, with uncertainty. R3 → design: radio and protocol (retries, acknowledgement), server timestamp; test: send 1,000 messages and check that 99 percent arrive within 60 s. Each row also records owner and status.

**Q3.**
(a) BLE = 0.35·5 + 0.30·9 + 0.20·9 + 0.15·9 = 1.75 + 2.70 + 1.80 + 1.35 = **7.60**; LoRa = 3.15 + 2.40 + 1.20 + 0.90 = **7.65**; Wi-Fi = 2.10 + 0.90 + 1.60 + 1.35 = **5.95**; Zigbee = 2.45 + 2.40 + 1.40 + 0.90 = **7.15**. Ranking: LoRa (7.65), BLE (7.60), Zigbee (7.15), Wi-Fi (5.95).
(b) Weights (0.2, 0.4, 0.2, 0.2): BLE **8.2**, LoRa **7.4**, Wi-Fi **5.8**, Zigbee **7.2**. Equal weights: BLE **8.0**, LoRa **7.25**, Wi-Fi **6.5**, Zigbee **7.0**.
(c) LoRa and BLE are close in the baseline (7.65 versus 7.60) and the order flips when power is weighted more heavily or the weights are equal, so the matrix alone does not decide. The deciding factor is the requirement: if the nodes are spread over several hundred metres to kilometres of farmland, BLE's range (score 5) fails a **must** requirement and LoRa should be chosen despite the cost; if all nodes are within tens of metres of a gateway, BLE wins. State the range requirement explicitly, treat it as a pass/fail gate before scoring, and report the sensitivity.
(d) Scores and weights are subjective and can be tuned to a preferred answer; criteria may be correlated (double counting); scores hide thresholds (a fatal weakness can be offset by strengths elsewhere); results are ordinal approximations treated as numbers.

**Q4.**
(a) λ = 1/40,000 + 1/25,000 + 1/100,000 + 1/60,000 = 2.5×10⁻⁵ + 4.0×10⁻⁵ + 1.0×10⁻⁵ + 1.667×10⁻⁵ = 9.167×10⁻⁵ per hour; **MTBF = 10,909 h** (about 1.25 years).
(b) R(2000) = e^(-9.167×10⁻⁵ × 2000) = e^(-0.1833) = **0.832** (the product of the individual reliabilities 0.951 × 0.923 × 0.980 × 0.967).
(c) Step 1: The weak subsystem alone has R = e^(-2000/25000) = 0.923.
Step 2: Two in parallel: 1 - (1 - 0.923)² = 0.994.
Step 3: System reliability = 0.994 × (0.951 × 0.980 × 0.967) = **0.896** (up from 0.832).
Step 4: Redundancy costs mass, power, money and complexity (common-cause failures reduce the benefit).
(d) Availability = MTBF/(MTBF + MTTR) = 20,000/20,008 = **0.9996**; downtime ≈ 8760 × 0.0004 = **3.5 h per year**.

**Q5.** Bring: requirements and traceability table; architecture and block diagram; interface definitions; simulation or analysis results (power, timing, thermal); the decision matrix and alternatives considered; the risk register, BOM and cost; the test plan. Reviewer's questions: Which requirement does this satisfy and how will it be verified? What happens when this fails? What assumptions are untested? What is the riskiest part and how is it reduced? How were the alternatives compared? Is it safe, standards-compliant and maintainable?

**Q6.** The physical/electrical definition (connector, voltage levels, timing); the protocol and message format (framing, data types, units); the behavior under error and timeouts (retries, defaults); and the ownership and version of the interface specification (who may change it).

# Assignment 3: Planning, Cost, Statistics and Professional Practice (70 marks)

## Questions

**Q1. Critical path (18 marks)** Tasks (weeks): A scope 2 (none); B survey 3 (A); C requirements 2 (A); D design 4 (B, C); E simulation 3 (D); F order and receive parts 4 (D); G build 3 (F); H integration 2 (E, G); I testing 3 (H); J report 2 (I). (a) Compute earliest and latest start/finish and float for every task [10]. (b) Identify the critical path and total duration [3]. (c) A supplier delay adds 2 weeks to F; what happens? What if E takes 3 weeks longer? [5]

**Q2. PERT (10 marks)** Three sequential tasks have (optimistic, most likely, pessimistic) durations in weeks of (3, 5, 10), (1, 2, 3) and (4, 6, 14). Find the expected duration and standard deviation of each task and of the chain, and the probabilities of finishing within 12, 14 and 16 weeks [10].

**Q3. Earned value (10 marks)** A $30,000 project is 50 percent through its planned schedule, 45 percent of the work is done and $16,000 has been spent. Compute PV, EV, CPI, SPI, CV, SV, EAC (using BAC/CPI), ETC and VAC, and interpret [10].

**Q4. Economics and risk (12 marks)** (a) A product development costs $8,000 and returns $3,000 per year for four years; discount rate 8 percent. Compute the NPV, simple payback and IRR [6]. (b) What annual benefit makes the NPV zero? What is the NPV if the benefit is only $2,000? [3] (c) Rank these risks by likelihood × impact: late parts (4, 4), scope creep (3, 4), illness (2, 3), simulation mismatch (3, 3), lost data (1, 5), and compute the expected cost of a risk with a 40 percent chance of costing $2,000 and a 20 percent chance of costing $5,000 [3].

**Q5. Measurement and statistics (14 marks)** (a) R = V/I with V = 5.00 ± 0.05 V and I = 0.250 ± 0.005 A: compute R, its uncertainty (quadrature) and the worst-case uncertainty [4]. (b) Eight readings of a nominal 5 V rail: 4.92, 5.05, 4.98, 5.10, 5.01, 4.95, 5.07, 4.99. Compute the mean, standard deviation, standard error and a 95 percent CI (t₀.₉₇₅,₇ = 2.365) [5]. (c) Two filter designs give accuracies (percent) A = 85, 88, 90, 84, 87, 86 and B = 91, 93, 89, 94, 92, 90. Compute the means and standard deviations and state the conclusion of a t-test (t = -4.14, p = 0.002) [3]. (d) Sample size to estimate a mean with σ = 0.8 and E = 0.2 at 95 percent, and a proportion with E = 0.04 [2].

**Q6. Professional practice (6 marks)** A teammate has not contributed for three weeks and a deliverable is due in ten days. Describe the steps you would take, and name two ethical issues if you copy a result from a previous student's report.

## Solutions

**Q1.**
(a) Forward pass: A 0-2; B 2-5; C 2-4; D 5-9 (waits for B); E 9-12; F 9-13; G 13-16; H 16-18 (waits for G); I 18-21; J 21-23. Backward pass (project length 23): J 21-23; I 18-21; H 16-18; G 13-16; F 9-13; E latest 13-16; D 5-9; C latest 3-5; B 2-5; A 0-2. Floats: A 0; B 0; **C 1**; D 0; **E 4**; F 0; G 0; H 0; I 0; J 0.
(b) Critical path: **A-B-D-F-G-H-I-J = 2 + 3 + 4 + 4 + 3 + 2 + 3 + 2 = 23 weeks**.
(c) F is critical, so a 2-week supplier delay makes the project **25 weeks**. E has 4 weeks of float, so a 3-week overrun (6 weeks) does not delay H (E would finish at week 15, before G at 16): project stays at 23 weeks, and the float falls to 1 week. Mitigation for F: order early, qualify an alternate supplier, or pre-build using development boards.

**Q2.** Step 1: Expected duration (o + 4m + p)/6 and σ = (p - o)/6: task 1: (3 + 20 + 10)/6 = **5.5**, σ = **1.17**; task 2: (1 + 8 + 3)/6 = **2.0**, σ = **0.33**; task 3: (4 + 24 + 14)/6 = **7.0**, σ = **1.67**.
Step 2: Chain: mean = **14.5 weeks**; variance = 1.36 + 0.11 + 2.78 = 4.25, σ = **2.06 weeks**.
Step 3: P(T ≤ 12) = Φ((12 - 14.5)/2.06) = Φ(-1.21) = **0.113**; P(T ≤ 14) = Φ(-0.24) = **0.404**; P(T ≤ 16) = Φ(0.73) = **0.767**.
Step 4: The 90 percent date is 14.5 + 1.28 × 2.06 = **17.1 weeks**.
Step 5: Plan to the 80 to 90 percent date, not the mean.

**Q3.** Step 1: PV = 0.50 × 30,000 = **$15,000**; EV = 0.45 × 30,000 = **$13,500**; AC = $16,000.
Step 2: CPI = EV/AC = **0.844**; SPI = EV/PV = **0.90**; CV = EV - AC = **-$2,500**; SV = EV - PV = **-$1,500**.
Step 3: EAC = BAC/CPI = **$35,556**; ETC = EAC - AC = **$19,556**; VAC = BAC - EAC = **-$5,556**.
Step 4: Interpretation: the project is behind schedule (10 percent) and over budget (each dollar buys 84 cents of work); if the trend continues it will overrun by about $5,600.
Step 5: An alternative forecast assuming the remaining work goes to plan is EAC = AC + (BAC - EV) = $32,500.
Step 6: Report both and take corrective action (reduce scope, add resources carefully, renegotiate).

**Q4.**
(a) Step 1: NPV = -8,000 + 3,000 × (1/1.08 + 1/1.08² + 1/1.08³ + 1/1.08⁴) = -8,000 + 3,000 × 3.3121 = **+$1,936**.
Step 2: Simple payback = 8,000/3,000 = **2.67 years** (the discounted cumulative cash flow is still -$269 at the end of year 3, so the discounted payback is in year 4).
Step 3: IRR = **18.5 percent**, above the 8 percent hurdle rate.
(b) Break-even annual benefit = 8,000/3.3121 = **$2,415**. With $2,000 per year: NPV = -8,000 + 2,000 × 3.3121 = **-$1,376** (reject): the project is sensitive to the benefit estimate, so test it.
(c) Scores: late parts **16**, scope creep **12**, simulation mismatch **9**, illness **6**, lost data **5**. Expected cost = 0.4 × 2,000 + 0.2 × 5,000 = **$1,800** contingency.

**Q5.**
(a) R = 5.00/0.250 = **20.0 Ω**; relative uncertainties 1 percent and 2 percent; combined √(1² + 2²) = 2.24 percent → **±0.45 Ω**; worst case (1 + 2) percent → ±0.60 Ω.
(b) Mean = 5.009 V; s = 0.0613 V; SE = 0.0613/√8 = 0.0217 V; CI = 5.009 ± 2.365 × 0.0217 = **(4.958, 5.060) V**. The nominal 5.000 V lies inside the interval, so the rail is consistent with 5 V at the 95 percent level.
(c) A: mean 86.7, s = 2.16; B: mean 91.5, s = 1.87. Difference 4.8 percentage points; t = -4.14 (about 10 degrees of freedom), p = 0.002 < 0.05: B is **significantly more accurate**; report also the effect size and that six runs per design is a small sample.
(d) n = (1.96 × 0.8/0.2)² = 61.5 → **62** samples; proportion: n = 1.96² × 0.25/0.04² = 600.25 → **601**.

**Q6.** Steps: talk to the teammate privately and find out the cause (illness, overload, misunderstanding); agree specific tasks with dates and a way to check progress; document contributions in the logbook; inform the supervisor early if there is no improvement and ask for guidance on redistributing work; reduce scope if needed using MoSCoW; do not let the deadline pass without telling anyone. Copying a previous student's result is **plagiarism and possibly fabrication** if you did not obtain the data yourself: it misattributes credit, misleads readers about what you did, and breaks academic integrity policy; if you want to use earlier work, cite it as a source and do your own verification.
