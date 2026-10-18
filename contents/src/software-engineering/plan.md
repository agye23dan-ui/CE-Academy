# Software Engineering: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 6 to 7 building and practising, 1 review with the app's quizzes). Software engineering is learned by working in a team on a real project: set up a Git repository on GitHub or GitLab, write automated tests from the first week, use an issue tracker and CI, and keep a short engineering log of what went wrong and why. Python (or Java/JavaScript) with a unit-testing framework is enough for all exercises.

## Textbooks
- Ian Sommerville, *Software Engineering*. The standard university text (processes, requirements, design, testing, management).
- Roger Pressman and Bruce Maxim, *Software Engineering: A Practitioner's Approach*.
- Robert C. Martin, *Clean Code* and *Clean Architecture*; Martin Fowler, *Refactoring*.
- Erich Gamma et al., *Design Patterns* (Gang of Four); Eric Freeman et al., *Head First Design Patterns* (gentler).
- Frederick Brooks, *The Mythical Man-Month*. Essays that are still true.
- Kent Beck, *Test-Driven Development: By Example*; Jez Humble and David Farley, *Continuous Delivery*; Nicole Forsgren et al., *Accelerate*.
- Pro Git (free online) by Scott Chacon.

## Free courses and tools
- MIT 6.031 Software Construction (free notes); Coursera/edX software engineering and agile courses; "The Missing Semester of Your CS Education" (MIT, free) for the shell, Git and tooling.
- Tools: Git and GitHub/GitLab, pytest or unittest, coverage.py, a mutation tester (mutmut), linters (ruff, flake8, pylint), radon for complexity, GitHub Actions for CI, Docker, Jira/Trello or GitHub Projects, PlantUML or draw.io for UML.

## Week by week

**Week 1: What software engineering is; process models (Ch 1).** Do: Assignment 1 Q1, Q2. Form a project team of 3 to 5, choose a project and agree a process; set up the repository.

**Week 2: Requirements (Ch 2).** Do: Assignment 1 Q3. Write 10 user stories with acceptance criteria and measurable non-functional requirements for the project.

**Week 3: UML and design (Ch 3.1).** Do: Assignment 1 Q4, Q7. Draw the class, sequence and state diagrams of the core of your project.

**Week 4: Design principles and patterns (Ch 3.2, 3.3).** Do: Assignment 1 Q5, Q6. Sit the **Class Test** at the end of the week (Chapters 1 to 5.2). Apply Strategy or Observer in your project.

**Week 5: Version control and collaboration (Ch 4).** Do: Assignment 2 Q1. Create and resolve a merge conflict on purpose; adopt feature branches and pull requests with code review.

**Week 6: Writing testable, clean code; refactoring (Ch 4.1).** Do: refactor a messy function with tests as a safety net; run a linter and complexity tool.

**Week 7: Black-box testing: equivalence classes and boundaries (Ch 5.1, 5.2).** Do: Assignment 2 Q2, Q3. Mock midterm: first half of the Final Exam.

**Week 8: White-box testing, coverage, complexity (Ch 5.3).** Do: Assignment 2 Q4. Measure the coverage and complexity of your project.

**Week 9: Mutation testing and TDD (Ch 5.4, 5.5).** Do: Assignment 2 Q5, Q6. Do a TDD kata (FizzBuzz, bowling, or a pricing rule set) and run mutation tests on your suite.

**Week 10: Continuous integration and delivery (Ch 5.5).** Do: Assignment 2 Q7. Add a CI pipeline to your project with tests, linting and coverage gates.

**Week 11: Estimation and scheduling (Ch 6.1, 6.2).** Do: Assignment 3 Q1 to Q4. Estimate your project with COCOMO and story points; compute the critical path and track earned value for a sprint.

**Week 12: Quality, reliability, risk, maintenance, security (Ch 6.3, 7).** Do: Assignment 3 Q5, Q6. Build a risk register for your project; threat-model it.

**Week 13: Ethics and project delivery (Ch 7).** Do: Assignment 3 Q7. Project: deliver a working increment with a demo, documentation, tests, CI and a retrospective report including measured metrics (coverage, complexity, velocity).

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can choose and justify a process model and explain Scrum and XP practices.
- [ ] I can write measurable requirements, user stories and acceptance criteria.
- [ ] I can draw and interpret use case, class, sequence and state diagrams.
- [ ] I can apply SOLID and the Strategy, Observer and Factory patterns.
- [ ] I can use Git branching, merging and conflict resolution in a team.
- [ ] I can design tests with equivalence partitioning and boundary values, and compute complexity and coverage.
- [ ] I can explain why coverage is not quality and use mutation testing.
- [ ] I can practise TDD and set up a CI pipeline.
- [ ] I can estimate with COCOMO and function points, compute a critical path and earned value, and manage risk.
- [ ] I can compute availability and reliability and discuss technical debt and ethics.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Commit small, commit often, with messages that say why; let the history tell the story.
2. Write the test first for anything with a rule or a boundary; test the edges, not only the middle.
3. Treat warnings from linters and complexity tools as design feedback.
4. Estimate, then compare with what happened; keep the data and improve.
5. Read other people's code and review requests; most professional growth happens in code review.
