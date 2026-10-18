# Final Year Project II: 14-Week Study Plan and Resources

Time budget: 12 to 16 hours per week on your project (implementation and testing first, thesis writing increasingly in the second half), plus 1 hour reviewing these notes with the app's quizzes. The plan below is a model timeline for one semester; adjust it to your institution's deadlines and your supervisor's advice. Keep a two-week buffer before the final submission.

## Books and guides
- Roger Pressman and Bruce Maxim, *Software Engineering: A Practitioner's Approach*, and Ian Sommerville, *Software Engineering* (testing, configuration management, process).
- Glenford Myers, Corey Sandler and Tom Badgett, *The Art of Software Testing*; Lisa Crispin and Janet Gregory, *Agile Testing*.
- Douglas Montgomery and George Runger, *Applied Statistics and Probability for Engineers*; John Taylor, *An Introduction to Error Analysis*; Bradley Efron and Robert Tibshirani, *An Introduction to the Bootstrap*.
- Patrick O'Connor and Andre Kleyner, *Practical Reliability Engineering* (reliability demonstration, accelerated testing).
- Justin Zobel, *Writing for Computer Science*; Kate Turabian and the IEEE Editorial Style Manual for style and citation; Edward Tufte, *The Visual Display of Quantitative Information* for figures.
- Garr Reynolds, *Presentation Zen*, for presentations.

## Free resources
- Git and GitHub/GitLab documentation, GitHub Actions or GitLab CI tutorials; Pro Git (free book).
- SciPy statsmodels and pingouin documentation for tests and confidence intervals; the NIST/SEMATECH e-Handbook of Statistical Methods (free) for measurement, calibration and reliability.
- Overleaf templates and tutorials for LaTeX theses; Zotero for references; draw.io, Inkscape and Matplotlib for figures.
- Your library's guides on referencing and plagiarism; the university's thesis template and examples of past high-grade reports.
- Toastmasters-style resources and recordings of good technical talks (for example conference presentations on YouTube).

## Tools
Version control, a CI service, test frameworks (pytest, Unity/CppUTest, JUnit), coverage tools (gcov, coverage.py), a logic analyser, oscilloscope and calibrated reference instruments, Python/R for statistics, a spreadsheet for requirement and test tracking, and a LaTeX or word-processor thesis template.

## Week by week

**Week 1: Re-baseline and walking skeleton.** Review the FYP I plan, risks and requirements with your supervisor; set the FYP II milestones; build the thinnest end-to-end version of the system. Deliverable: updated plan and a running skeleton.

**Week 2: Core implementation I.** Implement the highest-risk subsystem; write unit tests as you go; set up version control tags and CI. Deliverable: a subsystem that passes its unit tests.

**Week 3: Core implementation II.** Implement the second major subsystem; define and test interfaces; start the thesis methods and design chapters from existing notes. Deliverable: two integrated subsystems.

**Week 4: Integration and the first full demonstration.** Integrate all essential blocks; run the first end-to-end test; record issues. Deliverable: a first complete demonstration (even if limited).

**Week 5: Feature completion and technical debt.** Add remaining "Must" and "Should" features; refactor and document; update the risk register. Deliverable: feature-complete prototype candidate.

**Week 6: Verification plan and calibration.** Finalize the test plan with traceability, calibrate sensors and instruments, and run the first batch of system tests. Deliverable: the test plan and calibration records.

**Week 7: Midterm review and system testing.** Present progress; run system tests against all requirements; fix defects; record results and uncertainties. Deliverable: first verification results table.

**Week 8: Reliability, robustness and edge cases.** Stress and endurance tests, environmental or fault-injection tests, long-duration run; compute confidence bounds. Deliverable: reliability or robustness evidence.

**Week 9: Evaluation against baselines.** Compare with the baseline or prior work with statistics (confidence intervals, tests, effect sizes); plan any extra runs required by power analysis. Deliverable: the comparison data and plots.

**Week 10: Analysis and writing I.** Analyse errors and limitations; write the results and discussion chapters; draft figures and tables. Deliverable: complete draft of results and discussion.

**Week 11: Writing II.** Write the introduction, update the literature review, and finalize the design and implementation chapters; write the abstract and conclusions. Deliverable: complete first draft of the thesis.

**Week 12: Revision and supervisor feedback.** Incorporate comments; improve figures; check references and consistency; run a plagiarism check; prepare the archive. Deliverable: second draft and archive package.

**Week 13: Presentation and demonstration rehearsal.** Build the slides and a backup video; rehearse three times with a timer; hold a mock defense with peers; test the demo in the room. Deliverable: final slides and demo plan.

**Week 14: Submission and defense.** Submit the thesis; deliver the defense and demonstration; hand over the system and documentation; hold a lessons-learned session. Deliverable: final thesis, code and data archive, and defense.

## Assessment pattern used in this course
Three assignments (managing implementation and verification; reliability and statistical analysis of results; results analysis, thesis and defense), a class test, and a three-hour final. Practise by reproducing each worked calculation with your own project data.

## Study tips
- Keep something demonstrable at all times; integrate weekly.
- Decide test criteria and statistical analyses before collecting data; record everything in the logbook.
- Report numbers with uncertainty, confidence intervals and effect sizes, and compare with a baseline.
- Write while you build; a thesis cannot be produced in the last week.
- Rehearse the defense aloud, with a backup for the demonstration, and be ready to explain your personal contribution.
