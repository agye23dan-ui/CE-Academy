# Software Engineering: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. Where a solution quotes a result from code it was obtained by running the code (Python unittest, coverage.py, radon, git); reproduce the experiments yourself and extend them.

# Assignment 1: Processes, Requirements and Design (Chapters 1 to 3)

**Q1. Choosing a process.** For each project choose a process model and justify: (a) software for an infusion pump with fixed regulatory requirements [3] (b) a start-up's mobile app whose features are unknown [3] (c) a payroll system migration with stable requirements and a large team [2] (d) a research prototype with high technical risk [2]

**Q2. Brooks' law.** (a) The number of communication paths for teams of 3, 5, 10 and 20 [4] (b) A project estimated at 60 person-months is late with 6 people: argue why adding 6 more may not help [3] (c) How do small teams and modular architecture respond to this? [3]

**Q3. Requirements.** (a) Rewrite "the system shall be fast and secure" as three measurable non-functional requirements [4] (b) Write a user story with acceptance criteria (Given/When/Then) for a member discount [4] (c) Distinguish functional from non-functional requirements with one example each [2]

**Q4. UML class diagram.** Model a library: members borrow books; a book may have several copies; loans have due dates; a member may borrow at most 5 items. (a) List the classes, attributes and associations with multiplicities [6] (b) Mark the constraint and the inheritance (students and staff are members) [4]

**Q5. SOLID.** (a) A class `Report` computes data, formats it as HTML and PDF and sends email. Which principle does it violate and how would you fix it? [4] (b) Explain the Liskov substitution principle with the square/rectangle example [3] (c) Explain dependency inversion with an example [3]

**Q6. Patterns.** Run and explain: (a) the Strategy example (order of 50 with Regular and Sale strategies) [3] (b) the Observer example with two subscribers and two price updates [4] (c) When would you use a Factory? [3]

**Q7. Behaviour models.** (a) Draw (describe) a state machine for an order [4] (b) Describe the sequence diagram for "member places an order with a discount" among the actors Member, WebUI, OrderService and PricingService [4] (c) What is the difference between aggregation and composition? [2]

## Solutions to Assignment 1

**Q1.** (a) **V-model/waterfall with rigorous documentation and traceability**: the requirements are fixed by regulation, safety-critical verification is required, and certification needs evidence at each stage. (b) **Agile (Scrum or Kanban)** with frequent releases and feedback: requirements are unknown, speed of learning matters. (c) **Waterfall or incremental plan-driven**: stable requirements and a large team need coordination and a defined plan (agile practices can still be used inside). (d) **Spiral or iterative prototyping**: each cycle begins with risk analysis, and prototypes retire the technical risks early.

**Q2.** (a) n(n - 1)/2: **3, 10, 45, 190** channels. (b) Twelve people have 66 channels against 15 for six; the new people must be recruited, trained and brought up to speed by the existing ones (lost productivity for weeks), the work must be repartitioned (some tasks are sequential and cannot be shared), and communication overhead grows quadratically, so the project can become later. (c) Small teams (about 5 to 9) keep communication manageable; a modular architecture with stable interfaces lets sub-teams work in parallel with few cross-team dependencies (Conway's law: the system mirrors the communication structure).

**Q3.** (a) Examples: **performance**: "95 percent of search requests shall complete within 2 s with 1000 concurrent users"; **security**: "all passwords shall be stored as salted hashes and accounts locked for 15 minutes after 5 failed logins"; **availability**: "the service shall be available 99.9 percent of each month (at most 43 minutes of downtime)". (b) "As a member I want a 7 percent discount on orders of 100 or more so that my loyalty is rewarded." Acceptance: **Given** I am logged in as a member **and** my basket total is 100, **When** I check out, **Then** the discount is 7 percent and the price is 93. **Given** a basket of 99.99, **Then** no discount applies. (c) A functional requirement states **what** the system does ("the system shall send a confirmation email after an order"); a non-functional requirement states **how well** or under what constraints ("the confirmation shall be delivered within 30 seconds").

**Q4.** (a) Classes: **Member** (id, name, email), **Book** (isbn, title, author), **Copy** (barcode, status), **Loan** (loanDate, dueDate, returnDate). Associations: Book 1 — * Copy; Member 1 — 0..5 Loan (active); Copy 1 — 0..* Loan (one active at a time); Loan * — 1 Member; Loan * — 1 Copy. (b) The constraint "at most 5 active loans per member" is shown as a note or OCL (`self.loans->select(l | l.returnDate.isUndefined())->size() <= 5`) and the multiplicity 0..5 on the active-loan association. **Student** and **Staff** are subclasses of **Member** (generalisation, a hollow triangle); Staff may have a higher loan limit (override the limit operation).

**Q5.** (a) It violates the **single responsibility principle** (several reasons to change: data, format, delivery). Fix: separate classes `ReportData`, `Formatter` (with HTML and PDF implementations behind an interface, also giving open/closed) and `Mailer`, coordinated by a thin service. (b) **Liskov**: a `Square` that subclasses `Rectangle` and forces width = height breaks code that sets the width and height independently (`r.setWidth(5); r.setHeight(4)` should give area 20 but gives 16): a subtype must not strengthen preconditions or break the base type's contract; use a common `Shape` abstraction instead of inheritance. (c) **Dependency inversion**: high-level `OrderService` should depend on an interface `PaymentGateway`, not on a concrete `StripeClient`; the concrete class is injected, so it can be replaced by a fake in tests and by another provider in production.

**Q6.** (a) `Order(50, Regular()).total()` gives **50**; with `Sale()` (20 percent off) the total is **40.0**: the algorithm is chosen at run time and `Order` does not change. (b) Subscriber A logs the price, B logs twice the price. After `set_price(10)` and `set_price(12)` the log is **[('A', 10), ('B', 20), ('A', 12), ('B', 24)]**: the `Stock` (subject) does not know the observers; new observers can be added without changing it. (c) Use a factory when the concrete class depends on configuration or input (for example `make_pricing("sale")` returns a `Sale` object) and the client should not depend on constructors, or when creation is complex.

**Q7.** (a) States: **Created → Paid** (on payment) **→ Shipped → Delivered**; **Created/Paid → Cancelled** (on cancel); Delivered and Cancelled are final states; transitions have events and guards (for example payment declined stays in Created). (b) Member → WebUI: placeOrder(items); WebUI → OrderService: createOrder(items, member); OrderService → PricingService: priceFor(total, isMember); PricingService → OrderService: price (the discount applied); OrderService → WebUI: confirmation; WebUI → Member: show confirmation. (c) **Aggregation** ("has a", the part can exist independently, shared: a team has players); **composition** (strong ownership: the part cannot exist without the whole and is destroyed with it: an order and its order lines).

# Assignment 2: Implementation and Testing (Chapters 4 and 5)

**Q1. Git conflict.** `app.py` contains `return 100`. On branch `feature` it is changed to 120; on `main` it is changed to 90; then `git merge feature` is run on `main`. (a) What happens and what does the file look like? [4] (b) How do you resolve it and what does the final history look like? [4] (c) Give three good Git practices [2]

**Q2. Boundary value analysis.** A function `letter(score)` returns A for 90 to 100, B for 80 to 89, C for 70 to 79, D for 60 to 69, F below 60, and rejects values below 0 or above 100. (a) List the equivalence classes [3] (b) List the boundary tests [4] (c) Give the expected results [3]

**Q3. Triangle classification.** A function classifies three side lengths as invalid, equilateral, isosceles or scalene. (a) Design tests for all four outcomes and for the invalid cases (non-positive sides and the triangle inequality, including degenerate 1, 2, 3) [6] (b) Give the expected output for (3,3,3), (3,3,5), (3,4,5), (1,2,3), (1,2,4), (0,1,1), (-1,2,2), (2,2,4) [4]

**Q4. Complexity and coverage.** (a) Compute the cyclomatic complexity of `discount_rate` in the notes by counting decisions [4] (b) What complexity did radon report for `letter`, `triangle` and `fizzbuzz`? [3] (c) Define statement, branch and condition coverage with one example showing that statement coverage can be 100 percent while branch coverage is not [3]

**Q5. Mutation testing.** (a) Explain mutation testing [3] (b) With the 8-test boundary suite, what happened to the three mutants (>= 100 changed to > 100, < 500 changed to <= 500, 0.02 changed to 0.03)? [3] (c) A weak suite (50, 200, 1000, a member case and a negative case) gave 95 percent coverage: what happened to the boundary mutants and what is the lesson? [4]

**Q6. TDD.** (a) Describe the red-green-refactor cycle [3] (b) Show the first four tests of a FizzBuzz kata and the output for 1 to 15 [5] (c) What are the benefits and the risks of TDD? [2]

**Q7. Continuous integration.** (a) Explain the CI pipeline in the notes line by line [5] (b) List four further stages of a mature delivery pipeline [3] (c) What is a test double (stub, mock, fake)? [2]

## Solutions to Assignment 2

**Q1.** (a) Both branches changed the same line, so Git cannot decide: it reports **"CONFLICT (content): Merge conflict in app.py"** and "Automatic merge failed"; `git status` shows `UU app.py` (unmerged, changed on both sides) and the file contains markers:
```
def price():
<<<<<<< HEAD
    return 90  # sale
=======
    return 120  # new tax
>>>>>>> feature
```
(b) Edit the file to the intended combination (here `return 108  # tax and sale`), remove the markers, run the tests, then `git add app.py` and `git commit`. The history is a merge commit with two parents:
```
*   f1d3237 merge feature, resolve conflict
|\
| * ad316c9 add tax
* | de55bd2 apply sale
|/
* 28b2830 initial price
```
(c) Small focused commits with meaningful messages; integrate often (pull and rebase or merge frequently to keep conflicts small); review changes through pull requests; never commit secrets or build outputs; protect the main branch with required tests.

**Q2.** (a) Classes: invalid low (< 0); F (0 to 59); D (60 to 69); C (70 to 79); B (80 to 89); A (90 to 100); invalid high (> 100). (b) Boundaries: **-1, 0, 59, 60, 69, 70, 79, 80, 89, 90, 100, 101** (each edge and the value just outside). (c) Results (verified by running): 0 → **F**, 59 → **F**, 60 → **D**, 69 → **D**, 70 → **C**, 79 → **C**, 80 → **B**, 89 → **B**, 90 → **A**, 100 → **A**; -1 and 101 → **ValueError: score out of range**.

**Q3.** (a) Valid classes: equilateral (3, 3, 3); isosceles (3, 3, 5) and permutations (3, 5, 3), (5, 3, 3); scalene (3, 4, 5). Invalid: a zero side (0, 1, 1), a negative side (-1, 2, 2), **degenerate** triangles where the sum of two sides equals the third (1, 2, 3) and where it is less (1, 2, 4), (2, 2, 4) (two sides equal but the inequality fails: it must be invalid, not isosceles: a classic bug). Test every permutation of the sides for the inequality check (a + b <= c, a + c <= b, b + c <= a). (b) Verified outputs: (3,3,3) **equilateral**; (3,3,5) **isosceles**; (3,4,5) **scalene**; (1,2,3) **invalid**; (1,2,4) **invalid**; (0,1,1) **invalid**; (-1,2,2) **invalid**; (2,2,4) **invalid**.

**Q4.** (a) Step 1: Count the decision points: `if total < 0` (1), `if total < 100` (2), `elif total < 500` (3), `if is_member and ...` (4) and the boolean operator `and` inside it (5): V(G) = 5 + 1 = **6**
(b) radon (cyclomatic complexity): `discount_rate` **6** (grade B), `final_price` **1** (A); `letter` **7** (B), `triangle` **9** (B), `fizzbuzz` **4** (A)
(c) **Statement coverage**: every statement executed at least once.
Step 2: **Branch coverage**: every decision outcome (true and false) taken.
Step 3: **Condition coverage**: every atomic condition takes both values.
Step 4: Example: `if x < 0: x = 0` followed by `return x`: the single test x = -5 executes every statement (100 percent statement coverage), but the false branch (x >= 0) is never taken, so branch coverage is 50 percent.

**Q5.** (a) Mutation testing makes small syntactic changes (mutants: change an operator, a constant or a boundary) and reruns the tests: a mutant that makes a test fail is **killed**; a survivor shows that the tests do not check that behaviour; the mutation score = killed/total measures test quality (better than coverage). (b) All three were **killed**: the change to `> 100` made 1 test fail (the member at exactly 100), the change to `<= 500` made 2 fail, the change to 0.03 made 2 fail: **score 3/3**. (c) The weak suite reached **95 percent statement coverage** (everything except `final_price`), but **3 of the 4 mutants survived**: the changes `>=` to `>`, `<` to `<=` (twice) went unnoticed because no test used the values 100 or 500; only the constant change (0.02 to 0.03) was killed. The lesson: coverage tells you what was executed, not what was verified; boundary values and meaningful assertions are essential.

**Q6.** (a) **Red**: write a small failing test for the next behaviour; **green**: write the simplest code that makes all tests pass; **refactor**: clean up the code and tests while keeping the tests green; repeat in small steps. (b) Tests: `fizzbuzz(1) == "1"`; `fizzbuzz(3) == "Fizz"`; `fizzbuzz(5) == "Buzz"`; `fizzbuzz(15) == "FizzBuzz"`. Output 1 to 15 (verified): **1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz**. (c) Benefits: testable design, a regression suite from the start, small steps with fast feedback, fewer defects found late. Risks: tests written for the implementation rather than behaviour (brittle), false confidence from weak assertions (see mutation testing), discipline needed, less suited to exploratory work and UI details.

**Q7.** (a) `name: ci` names the workflow; `on: [push, pull_request]` runs it on every push and pull request; `jobs: test:` defines one job; `runs-on: ubuntu-latest` selects a clean virtual machine; the steps check out the code (`actions/checkout`), install Python 3.12 (`actions/setup-python`) and run all unit tests (`python -m unittest discover`). The YAML parses correctly (name `ci`, triggers push and pull_request, 3 steps). A failing step fails the build and blocks the merge. (b) Linting and static analysis; coverage and mutation thresholds; dependency and security scanning (SAST/SCA); build of an artifact or container image; integration and end-to-end tests in a staging environment; deployment (continuous delivery with an approval gate or continuous deployment); smoke tests and monitoring with automatic rollback. (c) A **test double** replaces a real dependency: a **stub** returns canned answers; a **mock** records calls and verifies interactions; a **fake** is a simplified working implementation (an in-memory database); a **spy** wraps the real object and records calls. They make unit tests fast and deterministic.

# Assignment 3: Project Management and Quality (Chapters 6 and 7)

**Q1. COCOMO.** Basic COCOMO: organic a = 2.4, b = 1.05, c = 2.5, d = 0.38; semi-detached a = 3.0, b = 1.12, d = 0.35; embedded a = 3.6, b = 1.20, d = 0.32. For 32 KLOC find the effort, development time and average staff in each mode [6]; compare organic 10 and 100 KLOC and explain the exponent [4]

**Q2. Function points.** A system has 10 external inputs (weight 4), 8 outputs (5), 6 inquiries (4), 5 internal files (10) and 2 external interface files (7), with a value-adjustment factor of 1.00. Find the function points and the size in lines at 50 lines per FP [10]

**Q3. Critical path.** Activities: A 3 days (no predecessor), B 4 (after A), C 2 (after A), D 5 (after B), E 3 (after B and C), F 2 (after D and E). Compute the earliest and latest times, the floats, the critical path and the project duration [10]

**Q4. Earned value.** BAC = 100,000; planned value 40,000; earned value 35,000; actual cost 45,000. Compute CV, SV, CPI, SPI, EAC, ETC and VAC and interpret [10]

**Q5. Reliability and availability.** (a) Availability for MTBF 1000 h and MTTR 2 h [2] (b) The yearly downtime for 99, 99.9, 99.99 and 99.999 percent [4] (c) Reliability of a series system of 0.95, 0.9 and 0.99, of two parallel 0.9 components and of triple modular redundancy with R = 0.9 [4]

**Q6. Risk and debt.** (a) Build a risk table with probability, impact and exposure for three project risks and a response for each [5] (b) Define technical debt and give three ways to reduce it [3] (c) Name the four types of maintenance with an example each [2]

**Q7. Ethics and professional practice.** (a) State three principles of the ACM/IEEE code of ethics [3] (b) Discuss the lesson of the Therac-25 or Ariane 5 failure [4] (c) A manager asks you to ship with a known safety defect to meet the deadline: what do you do? [3]

## Solutions to Assignment 3

**Q1.** Effort = a K^b; time = c Effort^d; staff = effort/time. 32 KLOC: **organic**: effort **91.3 PM**, time **13.9 months**, staff **6.6**. **Semi-detached**: **145.5 PM**, **14.3 months**, **10.2** people. **Embedded**: **230.4 PM**, **14.3 months**, **16.2** people. Organic 10 KLOC: **26.9 PM**; 100 KLOC: **302.1 PM**: ten times the size needs **11.2 times** the effort (10^1.05). The exponent above 1 models **diseconomies of scale**: communication, integration and coordination costs grow faster than size.

**Q2.** Step 1: Unadjusted FP = 10 × 4 + 8 × 5 + 6 × 4 + 5 × 10 + 2 × 7 = 40 + 40 + 24 + 50 + 14 = **168**.
Step 2: Adjusted FP = 168 × 1.00 = **168**.
Step 3: Size = 168 × 50 = **8400 lines** (8.4 KLOC; with organic COCOMO about 2.4 × 8.4^1.05 = 22.4 person-months).

**Q3.** Step 1: Forward pass: A ES 0, EF 3; B ES 3, EF 7; C ES 3, EF 5; D ES 7, EF 12; E ES = max(EF of B, C) = 7, EF 10; F ES = max(12, 10) = 12, EF 14.
Step 2: **Duration 14 days.** Backward pass: F LF 14, LS 12; E LF 12, LS 9; D LF 12, LS 7; C LF 9 (E starts at 9 at the latest), LS 7; B LF = min(LS of D, E) = 7, LS 3; A LF 3, LS 0.
Step 3: Float = LS - ES: A **0**, B **0**, C **4**, D **0**, E **2**, F **0**.
Step 4: The **critical path is A-B-D-F** (14 days).
Step 5: C can slip 4 days and E 2 days without delaying the project; shortening D or B would shorten the project (until E-based paths become critical).

**Q4.** Step 1: CV = EV - AC = 35,000 - 45,000 = **-10,000** (over budget).
Step 2: SV = EV - PV = 35,000 - 40,000 = **-5,000** (behind schedule).
Step 3: CPI = EV/AC = **0.778** (each currency unit spent earns 0.78 of planned value); SPI = EV/PV = **0.875**.
Step 4: EAC = BAC/CPI = **128,571** (if the cost performance continues).
Step 5: ETC = EAC - AC = **83,571**.
Step 6: VAC = BAC - EAC = **-28,571**: a projected overrun of 28.6 percent.
Step 7: Action: investigate the causes of low productivity, re-baseline, cut scope or add control.

**Q5.** (a) Step 1: 1000/(1000 + 2) = **0.998** (99.8 percent)
(b) 99 percent: **87.6 h** per year; 99.9 percent: **8.76 h**; 99.99 percent: **52.6 min** (0.88 h); 99.999 percent: **5.3 min**
(c) Series: 0.95 × 0.9 × 0.99 = **0.846**.
Step 2: Parallel (two 0.9 components): 1 - 0.1^2 = **0.99**.
Step 3: TMR with a perfect voter: 3R^2 - 2R^3 = 3 × 0.81 - 2 × 0.729 = **0.972**.

**Q6.** (a) Example: **R1**: key developer leaves (probability 0.3, impact 8, exposure 2.4); response: knowledge sharing and pair programming, documentation (mitigate). **R2**: requirements change late (0.6, 6, 3.6): response: iterative delivery and a change-control board (mitigate). **R3**: third-party API unreliable (0.4, 7, 2.8): response: wrap it behind an interface and build a fallback (mitigate/transfer). Exposure = probability × impact; address the highest first. (b) **Technical debt**: design or code shortcuts that speed up delivery now but make future changes more expensive (interest). Reduce it by refactoring with tests, adding automated tests and documentation, fixing the worst hotspots first (by complexity and change frequency), and agreeing a "definition of done" that prevents new debt. (c) **Corrective** (fix a defect), **adaptive** (adapt to a new operating system or regulation), **perfective** (add or improve features), **preventive** (refactor to avoid future problems).

**Q7.** (a) Act consistently with the **public interest**; act in the best interest of the client and employer consistent with the public interest; ensure that products meet the highest professional standards; maintain integrity and independence in professional judgement; be fair and supportive to colleagues; keep honest about the limits of your competence and the state of the work; continue to learn. (b) **Therac-25** (1985 to 1987): a radiation therapy machine delivered massive overdoses because of race conditions in the software and the removal of hardware interlocks, with poor testing, no independent code review and dismissal of operator reports: lessons: do not rely on software alone for safety, keep independent safety mechanisms, take incident reports seriously, test concurrency. **Ariane 5** (1996): reuse of Ariane 4 software where a 64-bit floating-point value overflowed a 16-bit integer in the guidance system, causing the rocket's loss: lessons: re-verify reused components against the new operating conditions, handle exceptions properly, test with realistic data. (c) Raise the issue formally and in writing with the evidence and the risk; propose alternatives (a reduced scope, a mitigation, a delayed release); escalate to higher management or the safety authority if the risk to people remains; do not ship or sign off a known safety defect: the duty to the public takes precedence, and following the code of ethics protects both users and yourself.
