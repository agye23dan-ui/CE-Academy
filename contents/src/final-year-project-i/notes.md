# Final Year Project I: Complete Lecture Notes

Prerequisites: all earlier years, in particular engineering communication and ethics, probability and statistics, and at least one design-oriented course. Final Year Project I (FYP I) takes you from a topic idea to an approved proposal, a literature review, a justified design and a realistic plan. The second semester (FYP II) implements, tests and defends it. Every number in the worked examples (critical path, PERT, earned value, NPV, sample sizes, uncertainty, statistics) was computed in Python so you can reproduce it with your own project data.

## Chapter 1. What a Final Year Project Is

### 1.1 Purpose and assessment
The project shows that you can **define a problem, apply engineering knowledge, make and justify design decisions under constraints, plan and execute the work, evaluate the result honestly and communicate it**. It is assessed on technical depth, independence, planning and process, analysis of results, and the quality of the written report and presentation. Typical FYP I deliverables: a proposal, a literature review, requirements and a conceptual design, a project plan, preliminary results (a simulation or feasibility test), a logbook and an oral presentation.

### 1.2 Types of project
- **Design and build** (a device, circuit, embedded or mechatronic system).
- **Software or data systems** (an application, a machine-learning model, a tool).
- **Research and simulation** (modelling, comparing methods, algorithm development).
- **Analysis and case study** (evaluation of a system, a standard or a technology).
- **Entrepreneurial or product development** (market need, prototype, business case).
Most good projects mix types: a design that is also evaluated against a baseline with measured data.

### 1.3 Choosing a topic and a supervisor
Choose a problem that is (a) **interesting enough to sustain 9 months**, (b) **feasible** in time, budget, equipment and your skills, (c) **bounded** (a clear scope), and (d) **assessable** (you can measure success). Test an idea with five questions: Who needs this? What exists already? What exactly will I deliver? How will I know it works? What could stop me? Discuss with your supervisor early, agree meeting frequency (weekly or fortnightly), and write down what you agreed after every meeting.

## Chapter 2. Problem Definition and the Proposal

### 2.1 The problem statement
State the **problem**, the **context**, the **gap** and the **impact** in a few sentences. Example: "Greenhouse growers in region X lose 8 to 15 percent of crops to undetected humidity swings. Existing controllers cost more than $2,000 and need mains power. This project will design a low-cost, solar-powered sensing and control node costing under $60 that keeps relative humidity within ±5 percent." Notice that it includes a measurable target.

### 2.2 Aims, objectives and success criteria
The **aim** is the overall purpose; **objectives** are specific, ordered steps that achieve it. Write objectives that are **SMART**: Specific, Measurable, Achievable, Relevant, Time-bound. Weak: "Improve the controller." Strong: "By week 10 design a controller that holds humidity within ±5 percent in a simulated greenhouse model with a settling time under 5 minutes." Each objective should map to a deliverable and to a test.

### 2.3 Scope, assumptions and constraints
State what is **in scope** and **out of scope**, the assumptions you rely on, and the constraints: budget, time, equipment, standards, safety, ethics, environmental and social aspects. A clear scope protects you from scope creep, the commonest reason projects slip.

### 2.4 Structure of a proposal
Title; abstract (150 to 250 words); introduction and background; problem statement; aim and objectives; literature review summary; proposed methodology and design approach; work plan (Gantt chart and milestones); resources and budget; risk assessment; expected outcomes and evaluation criteria; ethics and safety statement; references. Typical length: 8 to 15 pages. A reader who knows nothing about your topic should be able to decide whether the project is worthwhile and achievable.

## Chapter 3. The Literature Review

### 3.1 Purpose
A literature review (a) shows what is already known, (b) identifies methods and results you can build on, (c) reveals a **gap** that justifies the project, and (d) prevents duplication. It is a **critical synthesis**, not a list of summaries: organize by theme, compare approaches, and judge their strengths and weaknesses.

### 3.2 Search strategy
Start with review articles and textbooks, then use IEEE Xplore, ACM Digital Library, ScienceDirect, Scopus, Web of Science and Google Scholar. Build queries with Boolean operators and synonyms, for example `("humidity control" OR "climate control") AND greenhouse AND ("low-cost" OR "solar") AND (IoT OR microcontroller)`. Use **snowballing**: read the references of good papers (backward) and look at who cites them (forward). Record every search (date, database, query, number of results).

**Screening funnel.** A typical review screens 1,200 results by title, keeps about 300, reads 80 abstracts, and ends with about 35 papers read in full: a yield of 35/1200 = 2.9 percent. Define inclusion and exclusion criteria in advance (date range, peer-reviewed, relevance) so your selection can be defended.

### 3.3 Reading and note-taking
Read in passes: title and abstract, then introduction and conclusion, then methods and results, then details. For each paper record: problem, method, data or setup, key results (with numbers), limitations, and relevance to your project. A **synthesis matrix** (rows = papers, columns = approach, performance, cost, limitation) makes comparison and gap-finding quick. Evaluate quality: venue and peer review, sample size, reproducibility, conflicts of interest, and whether the claims follow from the evidence.

### 3.4 Writing the review
Structure: introduction to the area; thematic sections (for example sensing methods, control strategies, power supplies); comparison of approaches; summary of gaps; and how your project addresses them. Use your own words, cite every idea you did not originate, and give your own critical assessment ("Method A reports ±3 percent accuracy but was tested only at one temperature").

### 3.5 Citation and academic integrity
Use a consistent style (IEEE numeric in engineering). Example: [1] A. Author, B. Author, "Title of paper," *Journal Abbrev.*, vol. 12, no. 3, pp. 100-110, 2024. Cite sources inside the text as [1]; manage them with Zotero, Mendeley or BibTeX. **Plagiarism** (presenting others' words, figures or ideas as your own, including AI-generated text you do not disclose) is misconduct. Quote sparingly and mark quotations; paraphrase and cite; follow the institution's policy on generative AI, and never cite a source you have not checked. Reusing your own earlier work without disclosure is also self-plagiarism.

## Chapter 4. Requirements and Specification

### 4.1 Stakeholders and needs
List the people affected: users, clients, supervisors, maintainers, regulators. Elicit needs through interviews, surveys, observation and study of existing products. Turn vague needs into **engineering requirements**.

### 4.2 Good requirements
A requirement is **necessary, unambiguous, measurable, verifiable, feasible and traceable**. "The device shall be fast" is bad; "The device shall report humidity within 2 s of a 10 percent step change" is good. Categories: **functional** (what the system does), **performance** (speed, accuracy, range), **interface** (protocols, connectors), **environmental** (temperature, ingress protection), **safety**, **cost**, **power**, **regulatory**, **maintainability**. Prioritize with **MoSCoW** (Must, Should, Could, Won't this time).

### 4.3 Traceability and verification
Number each requirement (R1, R2, ...) and link it to a design element and a test (a **traceability matrix**). **Verification** asks "did we build it right?" (does it meet the specification); **validation** asks "did we build the right thing?" (does it meet the user's real need). Plan the acceptance test for each requirement while writing it.

### 4.4 Standards, constraints and sustainability
Identify applicable standards (IEC/ISO/IEEE, electrical safety, EMC, radio regulations, coding standards). Consider health and safety, environmental impact, lifecycle (materials, energy, recycling), social and cultural aspects, and economics. Engineering accreditation expects explicit treatment of these constraints.

## Chapter 5. Design Method

### 5.1 From concepts to a chosen design
1. Define functions (what must the system do?) and decompose into subsystems.
2. Generate several concepts for each subsystem (brainstorm, survey the literature, morphological chart).
3. Evaluate concepts against the requirements with a **decision matrix**.
4. Choose, refine, model and simulate.
5. Review the design with your supervisor before building.

### 5.2 Weighted decision matrix (worked example)
Criteria and weights (sum to 1): cost 0.3, performance 0.4, risk 0.2, time 0.1. Scores out of 10: option A = (7, 6, 8, 9), option B = (9, 8, 5, 6), option C = (6, 9, 6, 5). Weighted totals: A = 0.3·7 + 0.4·6 + 0.2·8 + 0.1·9 = **7.0**; B = 2.7 + 3.2 + 1.0 + 0.6 = **7.5**; C = 1.8 + 3.6 + 1.2 + 0.5 = **7.1**. Option B wins. **Sensitivity check:** with weights (0.4, 0.3, 0.2, 0.1) the totals are A 7.1, B 7.6, C 6.8 (B still wins); with equal weights (0.25 each) they are A 7.5, B 7.0, C 6.5, so **A** wins. A decision that flips with the weights is fragile: explain why your weights are justified (for example, performance matters most to the client) and report the sensitivity.

### 5.3 Architecture and modelling
Draw a **block diagram** with inputs, outputs and interfaces; a **data-flow diagram** or UML (use case, class, sequence) for software; a circuit schematic or mechanical sketch for hardware. Define interfaces precisely (voltage levels, protocols, message formats) so subsystems can be built and tested independently. Use **simulation** (SPICE, MATLAB/Simulink, Python, Gazebo, a network simulator) to explore options cheaply, and validate the model against at least one measurement or a published result.

### 5.4 Prototyping and design for X
Prototype the riskiest part first (the **spike**). Design for testability (test points, debug ports, logging), manufacturability, reliability, safety, and cost. For reliability: series components multiply failure rates. Three components with MTBF 50,000 h, 20,000 h and 100,000 h in series have a combined failure rate 1/50000 + 1/20000 + 1/100000 = 8×10⁻⁵ per hour, so **MTBF = 12,500 h** and the reliability for 1,000 h is e^(-0.08) = **0.923**. Two identical units each with MTBF 10,000 h in parallel (redundancy) raise 1,000 h reliability from 0.905 to **0.991**.

### 5.5 Documentation and version control
Keep a **logbook** (dated entries: what you did, results, decisions, problems), use Git for code, CAD and documents (commit early, with messages), back up to a second location, and number versions of design documents. Good records make the report easy to write and protect you if something is lost.

## Chapter 6. Project Planning and Management

### 6.1 Work breakdown structure and estimates
Decompose the project into work packages (WBS) of 1 to 3 weeks each, with deliverables, owners and dependencies. Estimate effort bottom-up; add contingency (15 to 30 percent). Students typically underestimate integration and testing: plan at least 25 to 30 percent of the time for them. A team of 3 working 10 hours a week for 14 weeks supplies 3 × 14 × 10 = **420 person-hours**: check your WBS fits.

### 6.2 Critical path method (worked example)
Tasks (weeks) and predecessors: A literature review 3 (none); B requirements 2 (A); C architecture 3 (B); D hardware design 4 (C); E software design 3 (C); F procure parts 2 (D); G prototype build 4 (F, E); H test plan 2 (C); I integration and test 3 (G, H); J report 3 (I).
- **Forward pass** (earliest start/finish): A 0-3, B 3-5, C 5-8, D 8-12, E 8-11, H 8-10, F 12-14, G 14-18, I 18-21, J 21-24.
- **Backward pass** (latest times, project length 24): J 21-24, I 18-21, G 14-18, F 12-14, D 8-12, E 11-14, H 16-18, C 5-8, B 3-5, A 0-3.
- **Float** = latest start - earliest start: E has 3 weeks, H has 8 weeks, all others 0.
- **Critical path**: A-B-C-D-F-G-I-J = 3 + 2 + 3 + 4 + 2 + 4 + 3 + 3 = **24 weeks**. Any delay on these tasks delays the project; E and H have float and can slip within their limits. To shorten the project, shorten critical tasks only (crashing D by one week saves one week until E's path becomes critical).

### 6.3 PERT: planning under uncertainty
For each task estimate optimistic o, most likely m and pessimistic p durations. Expected duration = (o + 4m + p)/6; standard deviation = (p - o)/6. Example: o = 2, m = 4, p = 12 gives expected 5.0 and σ = 1.67 (note the expected value exceeds the most likely value because of the long tail). For a chain of five tasks with (o, m, p) = (2, 3, 6), (1, 2, 4), (2, 3, 7), (3, 5, 9), (2, 3, 8): expected durations 3.33, 2.17, 3.50, 5.33, 3.67 total **18.0 weeks**; the variances add: σ² = 0.44 + 0.25 + 0.69 + 1.00 + 1.00 = 3.39, so **σ = 1.84 weeks**. Assuming a normal distribution: P(finish within 16 weeks) = 0.14; within 18 weeks = 0.50; within 20 weeks = **0.86**; a 90 percent confidence date is 18 + 1.28 × 1.84 = **20.4 weeks**. Moral: a plan with no buffer has about a 50 percent chance of finishing on time; commit to the 80 to 90 percent date.

### 6.4 Tracking progress: earned value
Planned value PV, earned value EV (budgeted cost of work done), actual cost AC. Example: BAC (budget at completion) = $20,000; 40 percent of the work should be done (PV = $8,000); 30 percent is done (EV = $6,000); you have spent $7,500 (AC). Then **schedule performance index SPI = EV/PV = 0.75** (behind schedule) and **cost performance index CPI = EV/AC = 0.80** (over budget). Cost variance CV = EV - AC = -$1,500; schedule variance SV = EV - PV = -$2,000. Forecast: **EAC = BAC/CPI = $25,000**, estimate to complete ETC = EAC - AC = $17,500, variance at completion = -$5,000. To finish on budget you would need TCPI = (BAC - EV)/(BAC - AC) = 1.12 (12 percent more efficient than so far), which is unrealistic: tell your supervisor early.

### 6.5 Methodologies
**Waterfall** (sequential phases) suits well-defined hardware; **iterative/agile** (short sprints, working increments, regular review) suits software and uncertain requirements; **V-model** pairs each design level with a test level; **stage-gate** reviews at milestones. Hybrid plans are common. Hold short regular meetings, keep a task board (Kanban), and record decisions.

### 6.6 Risk management
Identify risks, score each by likelihood (1 to 5) times impact (1 to 5), plan mitigation and monitor. Example ranking: scope creep (4 × 4 = 16), supplier delay (4 × 3 = 12), key member unavailable (2 × 5 = 10), sensor noise (3 × 3 = 9), data loss (2 × 4 = 8). Mitigations: freeze scope after the proposal, order long-lead parts in week 2, document everything so work can be handed over, test the sensor early with a spike, back up daily. Expected monetary value of a risk = probability × cost: 0.3 × $4,000 + 0.1 × $10,000 = **$2,200** of contingency. Keep a risk register and update it monthly.

## Chapter 7. Budget and Feasibility

### 7.1 Bill of materials and contingency
Example BOM: 5 microcontroller boards at $12 = $60; 8 sensors at $6.50 = $52; 1 PCB fabrication $45; 2 enclosures at $15 = $30; total **$187**. Add 15 percent contingency: **$215.05**. Include shipping, tax, tools, software licences, testing equipment time and spare parts. Check the budget limit with the department.

### 7.2 Economic evaluation (product-oriented projects)
For a project costing $12,000 that returns $5,000 per year for 4 years, with a 10 percent discount rate: **NPV** = -12,000 + 5,000(1/1.1 + 1/1.1² + 1/1.1³ + 1/1.1⁴) = **+$3,849** (positive, so worthwhile); **payback** = 2.4 years (simple); the discounted payback falls in year 3 (cumulative discounted cash flow turns positive between -3,322 in year 2 and +434 in year 3); **IRR = 24.1 percent**; **ROI** over four years = (20,000 - 12,000)/12,000 = 67 percent. Compare against alternatives and test sensitivity to the benefit estimate.

### 7.3 Technical feasibility
Show with calculation, simulation or a quick experiment that the central idea can work: a power budget, a link budget, a timing analysis, a throughput estimate or a proof-of-concept measurement. Present the evidence in the proposal and the first progress report.

## Chapter 8. Research Method, Experiments and Data

### 8.1 Hypotheses and experiment design
State what you expect and how you will test it: "Controller B reduces settling time by at least 20 percent relative to controller A." Choose the **independent variable** (what you change), **dependent variable** (what you measure) and **controls** (what stays fixed). Randomize order, repeat measurements, and include a baseline. Record the setup so another person can reproduce the work.

### 8.2 Measurement uncertainty
Every measurement has uncertainty. For a product of independent quantities the relative uncertainties add in quadrature: V = I × R with I = 2.00 ± 0.02 A (1 percent) and R = 10.0 ± 0.1 Ω (1 percent) gives V = 20.0 V with relative uncertainty √(1² + 1²) = 1.41 percent, i.e. **±0.28 V** (the worst-case linear sum would be ±0.40 V). For P = V²/R with V = 12.0 ± 0.1 V and R = 48.0 ± 0.5 Ω: P = 3.00 W and the relative uncertainty is √((2 × 0.83)² + 1.04²) = 1.97 percent, so **±0.059 W**. Report results as value ± uncertainty with the confidence level and units, and distinguish **accuracy** (closeness to the true value) from **precision** (repeatability).

### 8.3 Repeated measurements and confidence intervals
Ten measurements of a voltage: 9.8, 10.1, 10.0, 9.9, 10.2, 10.1, 9.9, 10.0, 10.3, 9.7 V give mean 10.00 V and sample standard deviation s = 0.183 V. The standard error is s/√n = 0.0577 V. With t(0.975, 9) = 2.262 the 95 percent confidence interval is 10.00 ± 0.131, i.e. **(9.87, 10.13) V**. Quote the interval rather than the number of decimals the calculator shows.

### 8.4 Comparing two designs
Settling times (s) over six runs each: design A = 12.1, 11.8, 12.4, 12.0, 12.3, 11.9 (mean 12.08, s = 0.23); design B = 12.9, 13.1, 12.7, 13.3, 12.8, 13.0 (mean 12.97, s = 0.22). Difference = 0.88 s with standard error 0.129 s. Welch's t-test gives t = -6.83, about 10 degrees of freedom, p = 4.7 × 10⁻⁵, so the difference is statistically significant at the 5 percent level. Also report the **effect size** and whether it matters in practice, and be careful with multiple comparisons and with data you tuned on.

### 8.5 Sample size
To estimate a mean within ±E at 95 percent confidence: n = (1.96 σ/E)². With σ = 5 and E = 1: n = 96.04, so **97** samples. For a proportion with the worst case p = 0.5: n = 1.96² × 0.25/E²; E = 0.05 gives **385**, E = 0.03 gives **1,068**. Plan sample sizes before collecting data.

### 8.6 Reliability of your conclusions
Check **inter-rater agreement** with Cohen's kappa when humans label data: observed agreement 0.90 with chance agreement 0.6 × 0.7 + 0.4 × 0.3 = 0.54 gives κ = (0.90 - 0.54)/(1 - 0.54) = 0.78. For machine-learning projects keep training, validation and test data separate and report variance across seeds. Archive raw data and scripts; plot data before summarizing; document anomalies instead of deleting them.

## Chapter 9. Ethics, Safety and Professional Practice

- **Ethics**: honesty in data and reporting, no fabrication or selective reporting, fair credit to collaborators, respect for confidentiality. Projects involving people (surveys, user tests) need ethical approval, informed consent, anonymization and secure storage. Follow data-protection law.
- **Safety**: risk assessment for lab work (electrical hazards, batteries, lasers, moving parts), supervision rules, protective equipment, and safe design (fuses, enclosures, emergency stops). Document the hazards you identify and the controls.
- **Intellectual property**: know who owns the work (university, sponsor, you); respect licences of code, libraries and datasets (open-source obligations); do not use proprietary material without permission.
- **Sustainability and society**: energy use, materials, e-waste, accessibility, and the impact of failure on users. Consider the United Nations Sustainable Development Goals where relevant.
- **Responsible use of AI tools**: disclose assistance as your institution requires, verify every claim and citation, and never submit text you cannot explain. You remain responsible for correctness.

## Chapter 10. Communication: Proposal, Report and Presentation

### 10.1 Report structure
Title page; abstract; table of contents and lists of figures/tables; introduction; literature review; requirements and design; method; results; discussion (interpretation, limitations, comparison with the literature); conclusion and future work; references; appendices (code, schematics, data). Write for a technically educated reader who has not seen your work. A 12,000-word report is about 40 pages at 300 words per page plus figures.

### 10.2 Writing well
One idea per paragraph; topic sentence first; active voice where possible; define symbols and abbreviations at first use; number and caption every figure and table and refer to them in the text; label axes with units; use consistent notation and SI units; report numbers with sensible precision. Draft early and revise: write the methods and literature review as you go. Ask a classmate to read it for clarity.

### 10.3 The oral presentation
Typical 10 to 15 minutes. Structure: problem and motivation (2 slides), objectives, literature gap, approach and design, plan and risks, preliminary results, conclusion. Aim for one idea per slide, large figures, minimal text, a rehearsed timing, and a prepared answer to "what is your contribution and how will you know it works?". Practise questions on assumptions, alternatives, risks and ethics. A poster should be readable from 1.5 m with a clear flow from problem to result.

## Chapter 11. Working with Supervisors and Teams
- Prepare a short agenda or progress note before each meeting (done, problems, plan, decisions needed) and send minutes afterwards.
- Raise problems early: supervisors can help with a delayed part, but not with a problem revealed in the last week.
- In a team, assign roles, agree standards (code style, document templates), use shared tools, and review each other's work. Resolve conflict by discussing facts and agreed responsibilities; involve the supervisor if needed. Record each member's contribution.
- Manage time with weekly goals, protected work blocks, and a buffer. Avoid the **90 percent syndrome** (an almost-finished item that is never closed) by defining done precisely.

## Chapter 12. FYP I Checklist and Common Mistakes

**Checklist at the end of FYP I:** approved proposal with SMART objectives; literature review with a stated gap and 25 or more relevant, well-chosen references; requirements with measurable targets and a traceability table; concept selection with a documented decision matrix and sensitivity; architecture and interface definitions; a feasibility result (simulation or proof-of-concept) with numbers; Gantt chart with critical path and milestones; risk register; budget with contingency; ethics and safety statement; logbook and version control in place.

**Common mistakes.** A topic that is too broad or a goal that cannot be measured; reading papers without synthesizing them; copying text or figures without citation; requirements that are vague ("user friendly"); choosing a design before comparing alternatives; no buffer in the plan and underestimating testing and integration; starting the build before the riskiest part is proved; no baseline to compare against; reporting results without uncertainty or statistics; keeping no logbook or backups; leaving the report to the last week; and hiding problems from the supervisor.
