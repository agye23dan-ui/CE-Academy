# Software Engineering: Final Examination

Duration: 3 hours. Calculator allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** The waterfall model is best suited to projects with
A) rapidly changing requirements  B) stable, well-understood requirements  C) no documentation  D) unknown technology

**2.** The Scrum role that owns the product backlog is the
A) scrum master  B) developer  C) product owner  D) tester

**3.** A user story typically has the form
A) a UML diagram  B) "As a <role>, I want <goal>, so that <benefit>"  C) a test case  D) a database schema

**4.** Which statement is a measurable requirement?
A) "The system shall be reliable"  B) "The system shall be easy to use"  C) "The system shall be fast"  D) "The system shall recover from a crash within 60 seconds"

**5.** The open/closed principle says software entities should be
A) open for modification, closed for extension  B) open for extension, closed for modification  C) always open  D) always closed

**6.** The Liskov substitution principle requires that
A) subclasses be smaller  B) interfaces be large  C) objects of a subtype can replace objects of the base type without breaking correctness  D) classes have one method

**7.** The Factory pattern is used to
A) create objects without exposing the concrete class  B) notify observers  C) swap algorithms at run time  D) restrict instances to one

**8.** In UML a filled diamond denotes
A) inheritance  B) aggregation  C) composition  D) dependency

**9.** In Git, `git merge` of two branches that changed the same line produces
A) a silent overwrite  B) a merge conflict that must be resolved manually  C) a deleted branch  D) a failed repository

**10.** Equivalence partitioning
A) tests every possible input  B) divides inputs into classes treated alike and tests one value per class  C) measures coverage  D) checks the syntax

**11.** The cyclomatic complexity of a function with 5 decision points is
A) 5  B) 6  C) 4  D) 10

**12.** Branch coverage is stronger than
A) statement coverage  B) path coverage  C) mutation coverage  D) none of these

**13.** A mutant that survives the test suite shows that
A) the code is perfect  B) the suite does not detect that kind of fault  C) the compiler is wrong  D) the tests are too many

**14.** In TDD the refactoring step happens
A) before the test  B) instead of testing  C) after the tests pass  D) only at the end of the project

**15.** A critical path activity has
A) maximum float  B) zero float  C) negative duration  D) no predecessors

**16.** Brooks' law is about
A) adding people to a late project making it later  B) memory growth  C) availability  D) testing

**17.** A schedule performance index SPI = EV/PV greater than 1 means the project is
A) over budget  B) behind schedule  C) ahead of schedule  D) cancelled

**18.** Technical debt refers to
A) money owed to vendors  B) future extra cost caused by design or code shortcuts  C) unpaid licences  D) test failures

**19.** Which type of maintenance adds new features?
A) corrective  B) adaptive  C) perfective  D) preventive

**20.** A series system of components with reliabilities 0.9 and 0.9 has reliability
A) 0.99  B) 0.81  C) 0.9  D) 1.8

## Section B: Short Questions (40 marks)

**B1. (5)** Use basic semi-detached COCOMO (a = 3.0, b = 1.12, c = 2.5, d = 0.35) to estimate effort, time and average staff for 32 KLOC.

**B2. (5)** Compute the unadjusted function points of 12 inputs (weight 4), 6 outputs (5), 5 inquiries (4), 4 internal files (10) and 3 interface files (7), and the size in lines at 50 lines per function point.

**B3. (5)** MTBF = 500 hours and MTTR = 5 hours: the availability and the yearly downtime. Reliability of a series system of 0.98, 0.95 and 0.9, and of three redundant parallel 0.8 components.

**B4. (5)** Activities: A 2 (start), B 3 (after A), C 2 (after A), D 4 (after B and C), E 3 (after C), F 2 (after D and E). Find the duration, the critical path and the floats of C and E.

**B5. (5)** List the boundary-value tests (with expected results) for `letter(score)`: A for 90 to 100, B 80 to 89, C 70 to 79, D 60 to 69, F below 60, invalid below 0 and above 100.

**B6. (5)** `letter(score)` has an invalid-range check with `or` and four further `if` decisions. Its radon complexity was 7: explain by counting.

**B7. (5)** Describe what happens when two branches change the same line and are merged in Git, and how to resolve the conflict.

**B8. (5)** Give the red-green-refactor cycle of TDD and the first four tests of FizzBuzz.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Process, requirements and UML.** (a) Choose a process for a hospital drug-dispensing system and justify [3]. (b) Write two measurable non-functional requirements and one user story with acceptance criteria for a ward pharmacy app [4]. (c) Draw (describe) a class diagram with Patient, Prescription, Drug and Pharmacist with multiplicities and describe a state diagram for a prescription [3].

**C2. Design principles and patterns.** (a) Explain SOLID with one example for each of S, O and D [5]. (b) The Strategy example (an order of 50 with Regular and Sale strategies) and the Observer example (two subscribers, two updates): state the outputs and the purpose of each pattern [5].

**C3. Testing.** (a) Design tests for a triangle classifier (invalid, equilateral, isosceles, scalene) and give the expected results for (3,3,3), (3,3,5), (3,4,5), (1,2,3), (2,2,4) [4]. (b) Explain statement versus branch coverage and cyclomatic complexity with `discount_rate` (V(G) = 6) [3]. (c) A suite with 95 percent statement coverage lets 3 of 4 boundary mutants survive while a boundary suite kills 3 of 3: interpret [3].

**C4. Project management.** (a) COCOMO organic and embedded for 32 KLOC: effort, time and staff, and the effect of the exponent for organic 10 versus 100 KLOC [3]. (b) Critical path method for A 3, B 4 (after A), C 2 (after A), D 5 (after B), E 3 (after B and C), F 2 (after D and E): duration, critical path and floats [4]. (c) Earned value: BAC 100,000, PV 40,000, EV 35,000, AC 45,000: CV, SV, CPI, SPI, EAC and interpretation [3].

**C5. Quality, reliability and ethics.** (a) Availability and yearly downtime for 99, 99.9, 99.99 and 99.999 percent [3]. (b) Series, parallel and TMR reliabilities for R = 0.9 components [3]. (c) Technical debt and the four maintenance types [2]. (d) A manager asks you to ship with a known safety defect: respond with reference to the code of ethics and one historical failure [2].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **C** · 3 **B** · 4 **D** · 5 **B** · 6 **C** · 7 **A** · 8 **C** · 9 **B** · 10 **B** · 11 **B** · 12 **A** · 13 **B** · 14 **C** · 15 **B** · 16 **A** · 17 **C** · 18 **B** · 19 **C** · 20 **B**

Brief reasons: 4. It has a number and a time limit. 11. V(G) = decisions + 1 = 6. 17. SPI above 1 means more value earned than planned. 20. 0.9 × 0.9 = 0.81.

## Section B solutions

**B1.** Effort = 3.0 × 32^1.12 = **145.5 person-months**; time = 2.5 × 145.5^0.35 = **14.3 months**; average staff = 145.5/14.3 = **10.2**.

**B2.** UFP = 12 × 4 + 6 × 5 + 5 × 4 + 4 × 10 + 3 × 7 = 48 + 30 + 20 + 40 + 21 = **159 FP**; size = 159 × 50 = **7950 lines**.

**B3.** Step 1: Availability = 500/505 = **0.990** (99.01 percent); downtime = (1 - 0.990099) × 8760 = **86.7 h per year**.
Step 2: Series: 0.98 × 0.95 × 0.9 = **0.838**.
Step 3: Three parallel 0.8 components: 1 - (0.2)^3 = **0.992**.

**B4.** Step 1: Forward pass: A 0 to 2; B 2 to 5; C 2 to 4; D max(5, 4) = 5 to 9; E 4 to 7; F max(9, 7) = 9 to 11.
Step 2: **Duration 11.** Backward: F LS 9; E LF 9, LS 6; D LS 5; C LF = min(LS D = 5, LS E = 6) = 5, LS 3; B LS 2; A LS 0.
Step 3: Floats: **C = 3 - 2 = 1**, **E = 6 - 4 = 2**.
Step 4: Critical path **A-B-D-F** (zero float).

**B5.** Boundaries: **-1** → error; **0** → F; **59** → F; **60** → D; **69** → D; **70** → C; **79** → C; **80** → B; **89** → B; **90** → A; **100** → A; **101** → error.

**B6.** Decision points: `if score < 0 or score > 100` counts as 2 (the `if` and the `or`), plus the 4 other `if` statements (>= 90, >= 80, >= 70, >= 60) = 6; V(G) = 6 + 1 = **7**.

**B7.** Git cannot choose between the two edits: `git merge` stops with "CONFLICT (content)", the file shows the markers `<<<<<<< HEAD`, `=======` and `>>>>>>> branch` around the two versions and `git status` shows the file as unmerged (`UU`). To resolve: edit the file to the intended result (keeping the intent of both changes), delete the markers, run the tests, `git add` the file and `git commit` to create the merge commit.

**B8.** Red: write a failing test; green: make it pass with the simplest code; refactor: improve the design with the tests still green. FizzBuzz tests: `fizzbuzz(1) == "1"`; `fizzbuzz(3) == "Fizz"`; `fizzbuzz(5) == "Buzz"`; `fizzbuzz(15) == "FizzBuzz"`.

## Section C solutions

**C1.**
(a) A **V-model/plan-driven** process with strong traceability, formal reviews and verification (the system is safety-critical and regulated), possibly with iterative increments inside; risk analysis for each increment.
(b) NFRs: "The system shall return a patient's current prescriptions within 2 s for 95 percent of requests with 200 concurrent users." "Only authenticated pharmacists shall be able to dispense, and every dispensing action shall be logged with user and time (audit trail kept 7 years)." User story: "As a pharmacist I want to be warned when a prescribed drug interacts with another drug the patient takes, so that I can prevent harm." Acceptance: **Given** a patient taking warfarin, **When** a prescription for aspirin is entered, **Then** a warning with the severity is shown and the pharmacist must confirm to proceed; **Given** no interaction, **Then** no warning.
(c) Classes: **Patient** (1) — (0 to many) **Prescription** (each prescription belongs to exactly one patient); **Prescription** (many) — (1 or more) **Drug** (via a PrescriptionItem class holding the dose); **Pharmacist** (1) — (0 to many) **Prescription** (dispensed by). State diagram: **Created → Verified → Dispensed → Collected**; **Created/Verified → Rejected** and **Dispensed → Returned**.

**C2.**
(a) **S**ingle responsibility: a `Report` class that computes, formats and emails has three reasons to change: split into data, formatter and mailer. **O**pen/closed: add a new report format by adding a new `Formatter` implementation instead of editing an existing `if/else` chain. **D**ependency inversion: `OrderService` depends on a `PaymentGateway` interface, with the concrete provider injected, so it can be replaced by a fake in tests. (L: a subtype must honour the base contract; I: prefer small interfaces.)
(b) Strategy: `Order(50, Regular()).total()` = **50**; with `Sale()` = **40.0**: interchangeable algorithms chosen at run time. Observer: the log is **[('A', 10), ('B', 20), ('A', 12), ('B', 24)]**: the subject notifies subscribers without knowing them (loose coupling, event handling).

**C3.**
(a) Equivalence classes and tests: equilateral (3,3,3) → **equilateral**; isosceles (3,3,5) → **isosceles** (also test permutations); scalene (3,4,5) → **scalene**; degenerate (1,2,3) → **invalid** (sum of two sides equals the third); (2,2,4) → **invalid** (equal sides but the triangle inequality fails: it must not be reported as isosceles); zero or negative side → invalid.
(b) Statement coverage: every statement executed; branch coverage: every decision outcome taken (stronger: 100 percent branch implies 100 percent statement). V(G) = decision points + 1: for `discount_rate` the decisions are the three comparisons, the `if is_member` and the `and`: 5 + 1 = **6**, so at least 6 independent paths must be tested. The 8-test suite reached 100 percent statement and branch coverage.
(c) Step 1: Coverage measures execution, not verification.
Step 2: The weak suite (values 50, 200, 1000...) executed 95 percent of statements, but because it never used the boundary values 100 and 500 the mutants `>=` to `>` and `<` to `<=` **survived**: the suite would not detect an off-by-one error.
Step 3: The boundary suite killed all 3 mutants (score 3/3): its tests really check the behaviour.
Step 4: Conclusion: judge a test suite by mutation score and by its choice of values, not by coverage alone.

**C4.**
(a) 32 KLOC: organic effort **91.3 PM**, time **13.9 months**, staff **6.6**; embedded effort **230.4 PM**, time **14.3 months**, staff **16.2**. Organic 10 KLOC: 26.9 PM; 100 KLOC: 302.1 PM: size × 10 gives effort × **11.2** (exponent 1.05 > 1: diseconomies of scale from communication and integration overhead).
(b) Forward: A 0 to 3; B 3 to 7; C 3 to 5; D 7 to 12; E 7 to 10; F 12 to 14: **14 days**. Floats: A 0, B 0, **C 4**, D 0, **E 2**, F 0. **Critical path: A-B-D-F.**
(c) CV = 35,000 - 45,000 = **-10,000**; SV = 35,000 - 40,000 = **-5,000**; CPI = **0.778**; SPI = **0.875**; EAC = 100,000/0.778 = **128,571**: over budget and behind schedule; the forecast overrun is 28,571.

**C5.**
(a) Downtime per year: 99 percent: **87.6 h**; 99.9 percent: **8.76 h**; 99.99 percent: **52.6 min**; 99.999 percent: **5.3 min**.
(b) Series of two or three 0.9 components: two give **0.81**, three **0.729**; two in parallel: **0.99**; TMR with a perfect voter: 3 × 0.81 - 2 × 0.729 = **0.972**.
(c) Technical debt: shortcuts that speed up delivery now but add extra effort to every later change (interest); repay by refactoring and tests. Maintenance types: corrective, adaptive, perfective, preventive.
(d) Do not ship: the code of ethics requires acting in the public interest first; document the defect and the risk, propose alternatives (reduced scope, mitigation, delayed release), escalate if necessary and refuse to sign off. Lessons: **Therac-25** (software race conditions and no hardware interlock caused radiation overdoses) or **Ariane 5** (an unhandled overflow from reused code destroyed the rocket): both show the cost of weak verification and ignored warnings.
