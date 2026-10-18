# Discrete Mathematics: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 5 to 6 problems and proofs, 1 review with the app's quizzes). Discrete mathematics is learned by writing proofs and solving counting problems. Write every proof in full sentences and have someone (or yourself, a day later) check each step.

## Textbooks
- Kenneth Rosen, *Discrete Mathematics and Its Applications* (McGraw-Hill). The standard text, with thousands of exercises.
- Susanna Epp, *Discrete Mathematics with Applications*. Gentler on logic and proof.
- Lehman, Leighton and Meyer, *Mathematics for Computer Science* (free PDF from MIT). Excellent, proof-focused.
- Richard Hammack, *Book of Proof* (free PDF) for proof writing.
- Cormen et al., *Introduction to Algorithms* (later, for graph algorithms and recurrences).

## Free courses
- MIT OpenCourseWare 6.042J Mathematics for Computer Science (lectures, notes, problem sets).
- Khan Academy: cryptography and modular arithmetic.
- Visualgo.net for graph algorithms (BFS, DFS, Dijkstra, MST) and sorting.

## Week by week

**Week 1: Propositional logic (Ch 1.1 to 1.3).** Do: Assignment 1 Q1. Checkpoint: build truth tables and prove equivalences with laws.

**Week 2: Quantifiers and arguments (Ch 1.4, 1.5).** Do: Assignment 1 Q2, Q5.

**Week 3: Proof methods (Ch 2.1).** Do: Assignment 1 Q3. Write five proofs, one of each type.

**Week 4: Induction (Ch 2.2).** Do: Assignment 1 Q4. Sit the **Class Test** at the end of the week.

**Week 5: Sets and functions (Ch 3.1, 3.2).** Do: Assignment 2 Q1, Q5.

**Week 6: Relations, orders, equivalence classes (Ch 3.3).** Do: Assignment 2 Q2.

**Week 7: Counting I: product and sum rules, permutations, combinations (Ch 4.1, 4.2).** Do: Assignment 2 Q3 (a) to (d).

**Week 8: Counting II: inclusion-exclusion, derangements, probability (Ch 4.3, 4.4).** Do: Assignment 2 Q3 (e) to (g), Q4. Mock midterm: first half of the Final Exam.

**Week 9: Recurrences and big-O (Ch 5).** Do: Assignment 3 Q1, Q2.

**Week 10: Number theory (Ch 6.1).** Do: Assignment 3 Q3 (a) to (d). Implement the extended Euclidean algorithm and fast modular exponentiation in Python.

**Week 11: Cryptography (Ch 6.2).** Do: Assignment 3 Q3 (e), (f). Implement toy RSA and break it by factoring a small n.

**Week 12: Graphs: representations, traversals, Euler and Hamilton (Ch 7.1 to 7.3).** Do: Assignment 3 Q4 (a), (b). Code BFS and DFS.

**Week 13: Weighted graphs, trees, colouring, planarity (Ch 7.4 to 7.6).** Do: Assignment 3 Q4 (c) to (f). Implement Dijkstra and Kruskal.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, no notes).

## Milestone checklist
- [ ] I can prove logical equivalences and translate sentences with quantifiers.
- [ ] I can write direct, contrapositive and contradiction proofs.
- [ ] I can prove statements by induction and strong induction.
- [ ] I can analyse relations (equivalence, partial order) and functions (injective, surjective).
- [ ] I can count with product, sum, permutation, combination and inclusion-exclusion arguments.
- [ ] I can solve linear recurrences and apply the master theorem.
- [ ] I can compute with modular arithmetic, gcds and the Chinese remainder theorem, and explain RSA.
- [ ] I can apply BFS, DFS, Dijkstra, Kruskal and Euler's formula.
- [ ] I scored at least 70 percent on the Final Exam with no notes.

## Study habits that work
1. For each proof, state clearly what is given and what must be shown before writing a line of argument.
2. Test every claim on small cases before trying to prove it (n = 1, 2, 3).
3. For counting, ask: does order matter? Is repetition allowed? Can I count the complement?
4. Implement the algorithms in code: the programme confirms the theory and builds fluency for later courses on algorithms, databases and cryptography.
5. Keep a catalogue of proof patterns and recurrence solutions.
