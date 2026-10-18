# Final Year Project I: Class Test

Duration: 60 minutes. Calculator allowed, no notes. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Useful: t₀.₉₇₅ with 4 degrees of freedom = 2.776; z₀.₉₇₅ = 1.96.

## Section A: Multiple choice (20 marks)

**1.** In SMART objectives, the letters stand for
A) Simple, Modern, Affordable, Reliable, Tested  B) Specific, Measurable, Achievable, Relevant, Time-bound  C) Safe, Mature, Accurate, Robust, Tidy  D) Scope, Method, Analysis, Results, Timeline

**2.** The main purpose of a literature review is to
A) copy the best method  B) increase the page count  C) synthesize existing work and identify a gap that justifies the project  D) list every paper ever published

**3.** In a database search, joining two concepts with AND
A) narrows the search to records containing both  B) sorts by date  C) widens the search  D) excludes both

**4.** A good requirement is
A) a wish list item  B) written after testing  C) measurable and verifiable  D) as general as possible

**5.** In MoSCoW prioritization, "Must" means
A) a feature that may be dropped  B) a feature excluded for now  C) a requirement without which the project fails  D) a nice-to-have feature

**6.** Verification asks
A) "Did we build the right thing for the user?"  B) "Did we build it right, meeting the specification?"  C) "Is it profitable?"  D) "Is it legal?"

**7.** The critical path is
A) any path through the first task  B) the shortest path  C) the path with the most tasks  D) the longest path with zero float that sets the project duration

**8.** The float (slack) of a task equals
A) its cost  B) latest start minus earliest start  C) duration squared  D) earliest finish plus latest start

**9.** In PERT the expected duration is
A) (o + 4m + p)/6  B) (p - o)/6  C) the pessimistic value  D) (o + m + p)/3

**10.** Compared with its weakest component, a series system of many components has
A) infinite MTBF  B) the same reliability  C) higher reliability  D) lower reliability

**11.** The cost performance index is
A) EV/AC  B) AC/EV  C) EV/PV  D) PV/EV

**12.** An SPI below 1 means the project is
A) under budget  B) behind schedule  C) on schedule  D) ahead of schedule

**13.** A positive NPV generally means
A) the IRR is negative  B) the payback is infinite  C) the project adds value at the chosen discount rate  D) the project should be rejected

**14.** Which is plagiarism?
A) quoting with quotation marks and a reference  B) using someone else's text or figure without credit  C) citing a paper correctly  D) paraphrasing with a citation

**15.** IEEE referencing in engineering reports uses
A) footnotes only  B) numbered citations such as [1]  C) no citations  D) author-date only

**16.** A Gantt chart mainly shows
A) statistical significance  B) tasks against a time scale with dependencies and milestones  C) cost-benefit  D) circuit connections

**17.** A simple risk score is
A) the number of team members  B) impact minus likelihood  C) likelihood times impact  D) likelihood plus cost

**18.** Increasing the sample size n generally makes a 95 percent confidence interval for a mean
A) wider  B) narrower  C) unchanged  D) biased

**19.** Welch's t-test is used to
A) fit a line  B) check spelling  C) compare two means without assuming equal variances  D) compute a median

**20.** The main value of a project logbook is to
A) fill space in the appendix  B) record dated work, decisions and results for reproducibility and evidence  C) replace the report  D) impress the examiner

## Section B: Problems (40 marks)

**B1. Objectives and screening (10 marks)** (a) Rewrite "Improve the plant monitor" as a SMART objective for a greenhouse humidity node [4]. (b) A literature search returns 1,500 records; 300 pass the title screen, 75 the abstract screen and 30 are read in full. Give the yield at each stage and overall, and the reading time at 2 hours per paper [4]. (c) Give one inclusion criterion [2].

**B2. Critical path (10 marks)** Tasks (weeks): A 2 (none); B 3 (A); C 4 (A); D 2 (B, C); E 3 (D). (a) Compute the earliest start and finish of every task [4]. (b) Give the critical path and the project duration [3]. (c) Compute the float of B [3].

**B3. Concept selection and earned value (10 marks)** (a) Two designs are scored on cost (weight 0.4) and performance (weight 0.6): X = (8, 6) and Y = (5, 9). Compute the weighted scores and choose [3]. With equal weights which design wins? [2] (b) A $10,000 project has PV = $6,000, EV = $5,000, AC = $5,500. Compute CPI, SPI and the forecast EAC = BAC/CPI, and interpret [5].

**B4. Measurement (10 marks)** (a) Power P = V × I with V = 12.0 V ± 1 percent and I = 0.50 A ± 2 percent. Compute P and its uncertainty (quadrature) [3]. (b) Five readings of a length: 20.1, 19.8, 20.3, 20.0, 19.9 mm. Find the mean, sample standard deviation, standard error and 95 percent confidence interval [5]. (c) Say why an uncertainty statement is better than quoting all calculator digits [2].

## Answer key and solutions

### Section A
1. B 2. C 3. A 4. C 5. C 6. B 7. D 8. B 9. A 10. D 11. A 12. B 13. C 14. B 15. B 16. B 17. C 18. B 19. C 20. B

### Section B

**B1.**
(a) Example: "By week 10, design and simulate a controller for the greenhouse node that holds relative humidity within ±5 percent of the setpoint with a settling time below 5 minutes, and report the results in a simulation report." Specific (controller, humidity), measurable (±5 percent, 5 minutes), achievable (simulation), relevant (project aim), time-bound (week 10) [4].
(b) Title screen 300/1500 = **20 percent**; abstract screen 75/300 = **25 percent**; full-text 30/75 = **40 percent**; overall 30/1500 = **2 percent** [3]. Reading time = 30 × 2 = **60 hours** [1].
(c) Any one: peer-reviewed; published in the last 10 years; reports measured results; directly addresses humidity control in greenhouses [2].

**B2.**
(a) A: ES 0, EF 2. B: ES 2, EF 5. C: ES 2, EF 6. D: ES 6 (must wait for C), EF 8. E: ES 8, EF 11 [4].
(b) Paths: A-B-D-E = 2 + 3 + 2 + 3 = 10; A-C-D-E = 2 + 4 + 2 + 3 = 11. Critical path **A-C-D-E, duration 11 weeks** [3].
(c) B's latest finish is 6 (D must start at 6) so its latest start is 3; float = LS - ES = 3 - 2 = **1 week** [3].

**B3.**
(a) X = 0.4 × 8 + 0.6 × 6 = **6.8**; Y = 0.4 × 5 + 0.6 × 9 = 2.0 + 5.4 = **7.4**; choose **Y** [3]. Equal weights: X = (8 + 6)/2 = 7.0; Y = (5 + 9)/2 = 7.0; a **tie**, so the weights decide (the choice is sensitive) [2].
(b) CPI = 5,000/5,500 = **0.909**; SPI = 5,000/6,000 = **0.833**; EAC = 10,000/0.909 = **$11,000** [3]. The project is behind schedule (about 17 percent) and over cost; if the trend continues it will cost about $1,000 more than planned, so corrective action is needed [2].

**B4.**
(a) P = 12.0 × 0.50 = **6.0 W**; relative uncertainty √(1² + 2²) = 2.24 percent → **±0.13 W** [3].
(b) Mean = (20.1 + 19.8 + 20.3 + 20.0 + 19.9)/5 = **20.02 mm**; deviations 0.08, -0.22, 0.28, -0.02, -0.12, squares sum 0.148, s = √(0.148/4) = **0.192 mm**; SE = 0.192/√5 = **0.086 mm**; CI = 20.02 ± 2.776 × 0.086 = 20.02 ± 0.24 = **(19.78, 20.26) mm** [5].
(c) The uncertainty tells the reader how much of the digits is meaningful and allows fair comparison and decision making; extra digits imply precision that the measurement does not have [2].
