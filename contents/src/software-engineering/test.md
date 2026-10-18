# Software Engineering: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** Which part of the lifetime cost of software is typically the largest?
A) requirements  B) design  C) coding  D) maintenance

**2.** Brooks' law says that adding people to a late software project
A) makes it later  B) makes it faster  C) has no effect  D) reduces cost

**3.** The number of communication paths in a team of n people is
A) n  B) n^2  C) n(n - 1)/2  D) 2^n

**4.** Which process model includes explicit risk analysis in every cycle?
A) waterfall  B) spiral  C) V-model  D) Kanban

**5.** In Scrum a fixed-length iteration is called a
A) sprint  B) milestone  C) release train  D) phase

**6.** A good non-functional requirement is
A) "the system shall be fast"  B) "the system shall be user friendly"  C) "95 percent of searches shall complete in under 2 seconds"  D) "the system shall be secure"

**7.** In the SOLID principles, the "S" stands for
A) simplicity  B) single responsibility  C) security  D) structure

**8.** The Strategy pattern
A) ensures a single instance  B) notifies subscribers  C) creates objects by name  D) encapsulates interchangeable algorithms behind an interface

**9.** The Observer pattern is used when
A) one object must notify others of its changes  B) objects must be created lazily  C) algorithms must be swapped  D) a class must have one instance

**10.** In a class diagram, composition means
A) the part can exist without the whole  B) the part cannot exist without the whole  C) inheritance  D) a dependency only

**11.** A merge conflict in Git occurs when
A) two branches change the same lines differently  B) a branch is deleted  C) the repository is empty  D) a commit message is missing

**12.** Boundary value analysis tests
A) random values  B) only typical values  C) values at and just around the edges of equivalence classes  D) only invalid values

**13.** The cyclomatic complexity V(G) of a function equals
A) the number of lines  B) the number of decision points plus one  C) the number of variables  D) the depth of nesting

**14.** 100 percent statement coverage guarantees
A) the absence of defects  B) 100 percent branch coverage  C) correct boundary handling  D) none of these

**15.** Mutation testing measures
A) the quality of the test suite (how many mutants it kills)  B) program speed  C) code size  D) the number of commits

**16.** In test-driven development the first step is to
A) write the production code  B) write a failing test  C) refactor  D) deploy

**17.** Continuous integration means
A) merging code and running automated builds and tests frequently  B) deploying once per year  C) writing documentation  D) pair programming

**18.** The critical path of a project is
A) the shortest path  B) the path with the most activities  C) the longest path, with zero float  D) the cheapest path

**19.** A cost performance index CPI = EV/AC below 1 means
A) under budget  B) over budget  C) ahead of schedule  D) behind schedule

**20.** Availability is calculated as
A) MTTR/MTBF  B) MTBF/(MTBF + MTTR)  C) MTBF × MTTR  D) 1/MTBF

## Section B: Problems (40 marks)

**B1. Process and requirements (10 marks)** (a) Choose a process model for (i) an airborne flight-control system and (ii) a social-media start-up, with a one-line justification each [4] (b) The communication paths of teams of 8 and 12 [2] (c) Write a user story with Given/When/Then acceptance criteria for a password-reset feature [4]

**B2. Testing (10 marks)** A function `grade(score)` returns "Pass" for 50 to 100, "Fail" for 0 to 49 and rejects scores below 0 or above 100. (a) List the equivalence classes [3] (b) List the boundary-value tests with expected results [4] (c) What is the cyclomatic complexity of `if score < 0 or score > 100: raise; if score >= 50: return "Pass"; return "Fail"`? [3]

**B3. Coverage and mutation (10 marks)** (a) Define statement and branch coverage and give an example where statement coverage is 100 percent but branch coverage is 50 percent [4] (b) A suite reaches 95 percent statement coverage but misses the boundary values: explain, using mutants such as changing >= to >, why it is weak [4] (c) Name two kinds of test double [2]

**B4. Project management (10 marks)** (a) Basic organic COCOMO (a = 2.4, b = 1.05, c = 2.5, d = 0.38) for 20 KLOC: effort, time and average staff [4] (b) Activities: A 2 (start), B 3 (after A), C 4 (after A), D 2 (after B), E 5 (after C), F 3 (after D and E), G 2 (after F): find the project duration, the critical path and the floats of B and D [4] (c) BAC = 200,000, PV = 120,000, EV = 100,000, AC = 110,000: the CPI and SPI [2]

---

## Answer Key and Solutions

### Section A
1 **D** · 2 **A** · 3 **C** · 4 **B** · 5 **A** · 6 **C** · 7 **B** · 8 **D** · 9 **A** · 10 **B** · 11 **A** · 12 **C** · 13 **B** · 14 **D** · 15 **A** · 16 **B** · 17 **A** · 18 **C** · 19 **B** · 20 **B**

Brief reasons: 1. Maintenance is typically 60 to 80 percent of lifetime cost. 3. Each pair of people is a channel. 6. It is specific and measurable. 14. Statement coverage says nothing about untested boundaries or correctness. 19. CPI < 1: each unit spent earns less than one unit of planned value.

### Section B

**B1.**
(a) (i) **V-model/plan-driven** with rigorous documentation, traceability and certification evidence (safety-critical, regulated). (ii) **Agile (Scrum/Kanban)** with short iterations and continuous deployment (requirements unknown, speed of feedback is critical).
(b) 8 people: 8 × 7/2 = **28** paths; 12 people: 12 × 11/2 = **66** paths.
(c) "As a registered user who forgot my password, I want to reset it by email so that I can regain access." **Given** a registered email address, **When** I request a reset, **Then** an email with a single-use link valid for 30 minutes is sent. **Given** an expired or used link, **When** I open it, **Then** I am told it is invalid and offered a new reset. **Given** an unregistered address, **Then** the response is the same message (to avoid revealing accounts).

**B2.**
(a) Invalid low (score < 0); Fail (0 to 49); Pass (50 to 100); invalid high (score > 100).
(b) **-1** → error (ValueError); **0** → Fail; **49** → Fail; **50** → Pass; **100** → Pass; **101** → error. (Also a typical value such as 75 → Pass.)
(c) Decision points: `score < 0`, `or score > 100`, `score >= 50` = 3: V(G) = 3 + 1 = **4**.

**B3.**
(a) **Statement coverage**: the percentage of statements executed by the tests. **Branch coverage**: the percentage of decision outcomes (true and false) taken. Example: `if x < 0: x = 0; return x`: a single test with x = -5 executes every statement (100 percent), but the false outcome of the decision is never taken (branch coverage 50 percent).
(b) The tests execute almost all statements but use values like 50, 200 and 1000 instead of the boundary values 100 and 500. A **mutant** that changes `>=` to `>` (or `<` to `<=`) behaves differently only at the boundary, so a suite without boundary tests does not notice it: such mutants **survive**, which reveals that the suite does not verify the boundary behaviour even though the coverage figure is high (in the notes' experiment, 3 of 4 boundary mutants survived with 95 percent coverage).
(c) **Stub** (returns canned answers), **mock** (verifies interactions), **fake** (simple working implementation such as an in-memory database), **spy**.

**B4.**
(a) Effort = 2.4 × 20^1.05 = **55.8 person-months**; time = 2.5 × 55.76^0.38 = **11.5 months**; average staff = 55.76/11.52 = **4.8** people.
(b) Step 1: Forward pass: A 0 to 2; B 2 to 5; C 2 to 6; D 5 to 7; E 6 to 11; F max(7, 11) = 11 to 14; G 14 to 16.
Step 2: **Duration 16.** Backward pass: G LS 14; F LS 11; E LS 6; D LF 11, LS 9; C LS 2; B LF 9 (D starts at 9 at the latest), LS 6; A LS 0.
Step 3: Floats: **B = 6 - 2 = 4**; **D = 9 - 5 = 4**; critical path **A-C-E-F-G** (zero float).
(c) CPI = EV/AC = 100,000/110,000 = **0.909** (over budget); SPI = EV/PV = 100,000/120,000 = **0.833** (behind schedule); EAC = BAC/CPI = 220,000.
