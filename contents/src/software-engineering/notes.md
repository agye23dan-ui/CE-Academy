# Software Engineering: Lecture Notes

Software engineering is the disciplined, team-based creation of software that is correct, maintainable and delivered on time and within budget. It covers process models, requirements, design (UML, principles, patterns), implementation practice and version control, testing, project management (estimation, scheduling, risk), quality and maintenance, and modern DevOps practice. The code examples were run with Python (unittest, coverage.py, radon) and git on a real machine, and the project-management numbers were computed with scripts, so the outputs shown are real. Prerequisites: Object-Oriented Programming, Data Structures and Algorithms, and Database Systems.

# Chapter 1: Software Processes

## 1.1 Why engineering?
Typical failures are schedule and cost overruns, changing requirements, poor quality, and unmaintainable code; most of the cost of software is in **maintenance** (often 60 to 80 percent of the lifetime cost). Two classic observations: **Brooks' law** ("adding people to a late project makes it later") because communication paths grow as n(n - 1)/2: 3 people have 3 channels, 5 have **10**, 10 have **45**, 20 have **190**; and "no silver bullet": there is no single technique that gives an order-of-magnitude improvement; essential complexity cannot be removed, only managed.

## 1.2 Process models
- **Waterfall**: requirements, design, implementation, testing, deployment in sequence; simple, documentation-driven, but late feedback and costly changes: suits stable, well-understood requirements (some safety-critical systems).
- **V-model**: each development phase is paired with a test level (requirements with acceptance tests, architecture with integration tests, detailed design with unit tests).
- **Incremental and iterative / spiral**: deliver in increments; the spiral model adds explicit **risk analysis** in every cycle.
- **Agile** (Manifesto, 2001): individuals and interactions, working software, customer collaboration, responding to change. **Scrum**: fixed-length **sprints** (1 to 4 weeks), roles (product owner, scrum master, team), artefacts (product backlog, sprint backlog, increment) and events (sprint planning, daily stand-up, sprint review, retrospective). **Extreme Programming (XP)**: pair programming, test-driven development, continuous integration, small releases, refactoring. **Kanban**: visualise work, limit work in progress.
- **DevOps**: unify development and operations; automate build, test, deployment and monitoring (continuous integration and delivery); measure deployment frequency, lead time, change-failure rate and recovery time.
Choose the process by the risk, the stability of requirements, team size and regulatory needs; plan-driven and agile methods are often combined.

# Chapter 2: Requirements Engineering

**Functional requirements** state what the system does ("the system shall calculate a discount"); **non-functional requirements** (quality attributes) state how well: performance, availability, security, usability, maintainability, portability; they must be **measurable** ("95 percent of searches return in under 2 s with 1000 concurrent users", not "the system shall be fast"). **Constraints** (regulations, technology). Good requirements are **SMART**: specific, measurable, achievable, relevant, testable, unambiguous, consistent, traceable.
**Elicitation** techniques: interviews, observation, questionnaires, workshops, prototypes, analysis of existing documents. **User stories**: "As a member, I want a 7 percent discount on orders of 100 or more, so that loyalty is rewarded", with **acceptance criteria** (Given/When/Then). **Use cases** describe the interaction of an actor with the system (main success scenario plus alternative flows). **Validation**: reviews, prototypes, acceptance tests derived from the requirements. **Traceability matrices** link requirements to design, code and tests. Requirements change: manage change through a controlled process with impact analysis.

# Chapter 3: Design

## 3.1 The UML in practice
- **Use case diagram**: actors and use cases (what the system offers).
- **Class diagram**: classes with attributes and operations, associations (with multiplicities), aggregation/composition, generalisation (inheritance), dependencies.
```
+----------------+   1      *   +----------------+
|    Customer    |--------------|     Order      |
+----------------+              +----------------+
| name           |              | date           |
| isMember       |              | total()        |
+----------------+              +----------------+
                                       | 1
                                       | *
                                +----------------+
                                |   OrderLine    |
                                +----------------+
```
- **Sequence diagram**: objects and the messages between them over time (one scenario). **State machine diagram**: states and transitions of one object (an order: created, paid, shipped, delivered, cancelled). **Activity diagram**: workflow. **Component and deployment diagrams**: architecture and hardware.

## 3.2 Design principles
**Abstraction, modularity, information hiding, high cohesion and low coupling**. **SOLID**: **S**ingle responsibility (a class has one reason to change); **O**pen/closed (open for extension, closed for modification); **L**iskov substitution (subtypes must be usable wherever the base type is expected); **I**nterface segregation (small, client-specific interfaces); **D**ependency inversion (depend on abstractions, not on concrete classes). Other guides: DRY (don't repeat yourself), KISS, YAGNI (you aren't going to need it), the law of Demeter.

## 3.3 Architecture and patterns
**Architectural styles**: layered, client-server, model-view-controller (MVC), microservices, event-driven, pipes and filters, repository. Quality attributes drive the choice (a microservice architecture helps independent deployment and scaling but adds network failure and operational complexity).
**Design patterns** (Gang of Four) are reusable solutions to recurring design problems. Three examples, run in Python:
- **Strategy**: encapsulate interchangeable algorithms behind an interface. An order priced with `Regular()` costs 50; with `Sale()` (20 percent off) it costs **40.0**; the algorithm can be swapped without changing `Order`.
- **Observer**: a subject notifies registered subscribers when it changes. With two subscribers (A records the price, B records twice the price), setting the price to 10 then 12 gave the notification log **[('A', 10), ('B', 20), ('A', 12), ('B', 24)]**: the stock does not know who is listening.
- **Factory**: create objects by name, hiding the concrete class (`make_pricing("sale")` returns a `Sale` object).
Others: Singleton (use sparingly), Decorator, Adapter, Facade, Command, Template Method. Patterns are a vocabulary, not a goal: overuse adds complexity.

```python
from abc import ABC, abstractmethod
class Pricing(ABC):
    @abstractmethod
    def price(self, base): ...
class Regular(Pricing):
    def price(self, base): return base
class Sale(Pricing):
    def price(self, base): return round(base * 0.8, 2)
class Order:
    def __init__(self, base, strategy): self.base, self.strategy = base, strategy
    def total(self): return self.strategy.price(self.base)
```

# Chapter 4: Implementation and Version Control

## 4.1 Good code
Meaningful names, small functions that do one thing, consistent style (a linter and formatter enforce it), comments that explain **why**, error handling, no duplicated logic, avoid global state, defensive programming and assertions, **code review** (find defects early, share knowledge; reviews find 60 percent or more of defects at a fraction of the cost of testing). **Refactoring** changes structure without changing behaviour, protected by tests.

## 4.2 Git
Git is a distributed version-control system storing snapshots in a graph of commits. Core commands: `git init`, `git add`, `git commit`, `git status`, `git log`, `git branch`, `git switch` or `checkout`, `git merge`, `git rebase`, `git pull`, `git push`, `git stash`, `git revert`. **Branching** isolates work; common workflows: trunk-based development, feature branches with pull requests (review before merge), GitFlow.
A real merge conflict experiment (commands run in a scratch repository): the file `app.py` returned 100. Branch `feature` changed it to 120 ("add tax"); `main` changed it to 90 ("apply sale"). `git merge feature` reported **"CONFLICT (content): Merge conflict in app.py"** and left the markers
```
<<<<<<< HEAD
    return 90  # sale
=======
    return 120  # new tax
>>>>>>> feature
```
with status `UU app.py` (unmerged on both sides). The developer edited the file to the intended result (108), ran `git add app.py` and `git commit`, and the history became
```
*   f1d3237 merge feature, resolve conflict
|\
| * ad316c9 add tax
* | de55bd2 apply sale
|/
* 28b2830 initial price
```
Conflicts arise when two branches change the same lines; resolve them by understanding both intents (and re-running the tests), never by blindly choosing one side. Good practice: small commits with clear messages, frequent integration, no secrets in the repository, `.gitignore` for build outputs.

# Chapter 5: Testing

## 5.1 Levels and types
**Unit** tests (a function or class in isolation, with stubs and mocks), **integration** tests (interfaces between components), **system** tests (the whole system against the requirements), **acceptance** tests (the customer's criteria), plus **regression** (rerun after changes), **performance**, **security** and **usability** testing. Testing shows the presence of defects, not their absence (Dijkstra). The **test pyramid**: many fast unit tests, fewer integration tests, few end-to-end tests.

## 5.2 Black-box techniques
Derive tests from the specification: **equivalence partitioning** (divide the inputs into classes that the program should treat alike and test one value from each) and **boundary value analysis** (errors cluster at the edges of the classes). Example specification: totals below 100 receive no discount; 100 to 499.99 receive 5 percent; 500 or more 10 percent; members get an extra 2 percent on totals of at least 100; negative totals are invalid. Classes: invalid (negative), below 100, 100 to 499.99, 500 and above, each for members and non-members. Boundaries: -1, 0, 99.99, **100**, 499.99, **500**.
```python
def discount_rate(total, is_member):
    if total < 0:
        raise ValueError("total must not be negative")
    if total < 100:
        rate = 0.0
    elif total < 500:
        rate = 0.05
    else:
        rate = 0.10
    if is_member and total >= 100:
        rate += 0.02
    return round(rate, 2)
```
A unittest suite with 8 tests (below 100, exactly 100, 499.99, exactly 500, member bonus at 100 and 500, no member bonus below 100, the negative input, and the final price) **passed (8 tests, OK)**.

## 5.3 White-box techniques and coverage
Derive tests from the code structure. **Statement coverage** (every statement executed), **branch (decision) coverage** (every decision true and false), condition and path coverage. The **cyclomatic complexity** V(G) = number of decision points + 1 (= edges - nodes + 2 of the control-flow graph) is the number of linearly independent paths and a guide to the minimum number of tests: for `discount_rate`, the decisions are `total < 0`, `total < 100`, `total < 500` and the compound condition `is_member and total >= 100` (two conditions), so V(G) = 4 + 1 + 1 = **6** (confirmed by the radon tool: grade B, complexity 6); `final_price` has V(G) = 1. As a rule of thumb keep functions below 10.
**Coverage measured**: the 8-test suite gave **100 percent statement and 100 percent branch coverage** of `pricing.py` (13 statements, 8 branches).

## 5.4 Coverage is not quality: mutation testing
A **mutation** is a small deliberate change to the code (change `>=` to `>`, `<` to `<=`, a constant); a good test suite should **kill** the mutant (some test fails). With the 8-test suite: changing `total >= 100` (member bonus) to `> 100` was killed (1 test failed); changing `total < 500` to `total <= 500` was killed (2 failed); changing the member bonus 0.02 to 0.03 was killed (2 failed): **3 of 3 mutants killed**. A weaker suite of 6 assertions (values 50, 200, 1000 and the negative case, no boundary values) still reached **95 percent** statement coverage, yet **3 of its 4 boundary mutants survived** (>= to >, < to <=, and < 100 to <= 100) and only the bonus-value mutant was killed. Lesson: high coverage with bad test values proves little; boundary values and meaningful assertions matter.

## 5.5 Test-driven development and CI
**TDD**: write a failing test (red), write the simplest code that passes (green), refactor; repeat. Benefits: testable design, a regression suite, small steps. **Continuous integration**: every push triggers an automated build and test run on a clean machine (GitHub Actions, GitLab CI, Jenkins); **continuous delivery/deployment** extends it to releases. A minimal pipeline:
```yaml
name: ci
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "3.12" }
      - run: python -m unittest discover
```
Other practices: static analysis and linters, code-coverage gates, dependency and security scanning, containers (Docker) for reproducible environments, feature flags, canary releases, monitoring and rollback.

# Chapter 6: Project Management

## 6.1 Estimation
**Basic COCOMO**: Effort = a (KLOC)^b person-months; Time = c (Effort)^d months. Organic (small, familiar teams) a = 2.4, b = 1.05, c = 2.5, d = 0.38; semi-detached 3.0, 1.12, 2.5, 0.35; embedded 3.6, 1.20, 2.5, 0.32. Results:
```
mode           size       effort      time       average staff
organic        10 KLOC    26.9 PM     8.7 mo     3.1
organic        32 KLOC    91.3 PM     13.9 mo    6.6
organic        100 KLOC   302.1 PM    21.9 mo    13.8
semi-detached  32 KLOC    145.5 PM    14.3 mo    10.2
embedded       32 KLOC    230.4 PM    14.3 mo    16.2
embedded       100 KLOC   904.3 PM    22.1 mo    41.0
```
Effort grows faster than size (exponent above 1: diseconomy of scale). **Function points**: weighted counts of external inputs (4), outputs (5), inquiries (4), internal files (10) and interface files (7) adjusted by a value factor: 10 inputs, 8 outputs, 6 inquiries, 5 internal and 2 external files give an unadjusted count of 40 + 40 + 24 + 50 + 14 = **168 FP** (about 8400 lines at 50 lines per FP). Estimation is uncertain: use ranges, historical data, expert judgement (planning poker, story points) and re-estimate as you learn (the cone of uncertainty).

## 6.2 Scheduling: the critical path method
Activities with durations and predecessors: A (3), B (4, after A), C (2, after A), D (5, after B), E (3, after B and C), F (2, after D and E). Forward pass (earliest start and finish): A 0 to 3; B 3 to 7; C 3 to 5; D 7 to 12; E 7 to 10; F 12 to 14. The project takes **14** time units. Backward pass gives the latest times: **float** = LS - ES: A 0, B 0, **C 4**, D 0, **E 2**, F 0. The **critical path** (zero float) is **A-B-D-F**; delaying any critical activity delays the project, while C may slip by 4 and E by 2 without effect.
**Earned value management**: budget at completion BAC = 100,000; planned value PV = 40,000; earned value EV = 35,000; actual cost AC = 45,000. Cost variance CV = EV - AC = **-10,000**; schedule variance SV = EV - PV = **-5,000**; CPI = EV/AC = **0.778**; SPI = EV/PV = **0.875** (over budget and behind schedule); estimate at completion EAC = BAC/CPI = **128,571**; estimate to complete = EAC - AC = 83,571; variance at completion = BAC - EAC = **-28,571**.

## 6.3 Risk and teams
**Risk management**: identify, analyse (probability × impact), plan responses (avoid, mitigate, transfer, accept), monitor. Typical risks: unstable requirements, key staff leaving, technology immaturity, underestimated complexity. Teams need clear roles, communication (Brooks' law), code ownership norms, retrospectives; distributed work needs written decisions and tooling.

# Chapter 7: Quality, Reliability, Maintenance and Ethics

**Quality attributes** and metrics: defect density (defects per KLOC), test coverage, complexity, coupling and cohesion, code churn, mean time between failures (MTBF), mean time to repair (MTTR). **Availability** = MTBF/(MTBF + MTTR): MTBF 1000 h with MTTR 2 h gives **0.998**. Downtime per year: 99 percent = **87.6 h**; 99.9 percent = **8.76 h**; 99.99 percent = **52.6 min**; 99.999 percent = **5.3 min**. **Reliability of structures**: components in series multiply (0.95 × 0.9 × 0.99 = **0.846**); two redundant components in parallel: 1 - (1 - 0.9)^2 = **0.99**; triple modular redundancy with majority voting at R = 0.9: 3R^2 - 2R^3 = **0.972**.
**Maintenance**: corrective (bugs), adaptive (environment changes), perfective (new features), preventive (refactoring). **Technical debt**: shortcuts that save time now and cost more later (interest = extra effort in each change); repay by refactoring, tests and documentation. **Legacy systems**: wrap, re-engineer, replace (strangler pattern).
**Security and safety**: threat modelling, secure coding (validate input, least privilege, no hard-coded secrets), dependency scanning; safety-critical software (avionics, medical) follows standards (DO-178C, IEC 61508) with traceability and extensive verification.
**Professional ethics**: the ACM/IEEE Software Engineering Code of Ethics: act in the public interest, honesty about limits, respect for privacy and intellectual property; examples of failures (the Therac-25 radiation overdoses, the Ariane 5 integer overflow, the Boeing 737 MAX flight-control software) show the cost of poor engineering and weak safety culture.

## Quick reference
- Brooks channels n(n - 1)/2; COCOMO effort = a KLOC^b; availability = MTBF/(MTBF + MTTR).
- V(G) = decisions + 1; branch coverage; mutation score = killed mutants/total.
- CPM: float = LS - ES; critical path has zero float. EVM: CPI = EV/AC, SPI = EV/PV, EAC = BAC/CPI.
- SOLID; TDD: red, green, refactor; git: branch, merge, resolve conflicts, commit.
