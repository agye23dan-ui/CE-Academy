# Data Structures and Algorithms: 14-Week Study Plan and Resources

Time budget: 10 to 12 hours per week (3 reading, 6 to 7 implementing and solving, 1 review with the app's quizzes). This is the most important programming course for interviews and for engineering practice. **Implement each structure from scratch** in C++ (or Python), test it against the library version, and measure its running time on inputs of increasing size.

## Textbooks
- Thomas Cormen, Charles Leiserson, Ronald Rivest and Clifford Stein, *Introduction to Algorithms* (CLRS). The standard reference; read the chapters as you progress.
- Robert Sedgewick and Kevin Wayne, *Algorithms* (4th edition) with the free book site and code.
- Mark Allen Weiss, *Data Structures and Algorithm Analysis in C++*.
- Jon Kleinberg and Éva Tardos, *Algorithm Design* (greedy and dynamic programming).
- Steven Skiena, *The Algorithm Design Manual* (problem-solving catalogue) and Jeff Erickson, *Algorithms* (free PDF).

## Free courses and practice
- MIT OpenCourseWare 6.006 Introduction to Algorithms; Princeton Algorithms Parts I and II (Sedgewick, Coursera, free to audit).
- Visualgo.net and the University of San Francisco visualisations for stepping through algorithms.
- LeetCode, Codeforces, AtCoder, Advent of Code and the CSES Problem Set for graded practice. Aim for two problems per day.

## Week by week

**Week 1: Analysis of algorithms (Ch 1).** Do: Assignment 1 Q1, Q2. Checkpoint: count operations and solve recurrences without notes.

**Week 2: Arrays, linked lists (Ch 2.1, 2.2).** Do: Assignment 1 Q3. Implement a vector, a singly linked list and a doubly linked list with tests.

**Week 3: Stacks, queues, deques (Ch 2.3).** Do: Assignment 1 Q4. Implement a circular queue and an expression evaluator.

**Week 4: Elementary and efficient sorts (Ch 3.1, 3.2).** Do: Assignment 1 Q5, Q7. Time each sort on random, sorted and reverse-sorted arrays of 10^3 to 10^6 items. Sit the **Class Test** at the end of the week.

**Week 5: Searching, lower bounds, non-comparison sorts (Ch 3.2, 3.3).** Do: Assignment 1 Q6. Implement counting and radix sort.

**Week 6: Hash tables (Ch 4).** Do: Assignment 2 Q1. Implement chaining and linear probing and compare their performance at different load factors.

**Week 7: Binary search trees (Ch 5.1, 5.2).** Do: Assignment 2 Q2, Q7. Implement insert, search, delete and traversals (recursive and iterative).

**Week 8: Balanced trees, heaps, tries, union-find (Ch 5.3 to 5.5).** Do: Assignment 2 Q3 to Q6. Mock midterm: first half of the Final Exam.

**Week 9: Graph representation, BFS, DFS, topological sort (Ch 6.1).** Do: Assignment 3 Q1. Solve five grid and maze problems.

**Week 10: Shortest paths and spanning trees (Ch 6.2, 6.3).** Do: Assignment 3 Q2, Q3. Implement Dijkstra and Kruskal.

**Week 11: Dynamic programming (Ch 7.3).** Do: Assignment 3 Q4. Solve 10 DP problems; for each write the state, recurrence, base cases and order.

**Week 12: Greedy algorithms, divide and conquer (Ch 7.1, 7.2).** Do: Assignment 3 Q5. Prove one greedy algorithm correct using an exchange argument.

**Week 13: Backtracking, string algorithms, intractability (Ch 7.4, 7.5, 8).** Do: Assignment 3 Q6, Q7.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, no computer).

## Milestone checklist
- [ ] I can analyse loops and recurrences and state the Θ-class of an algorithm.
- [ ] I can implement arrays, linked lists, stacks, queues, heaps, hash tables and BSTs.
- [ ] I can sort with merge sort, quicksort and heapsort and explain their trade-offs.
- [ ] I can balance a tree with AVL rotations and explain B-trees at a high level.
- [ ] I can traverse graphs with BFS/DFS and find shortest paths and minimum spanning trees.
- [ ] I can design dynamic programming solutions with a clear state and recurrence.
- [ ] I can recognise when a greedy algorithm works and prove it.
- [ ] I can use backtracking with pruning and know the meaning of NP-completeness.
- [ ] I scored at least 70 percent on the Final Exam with no computer.

## Study habits that work
1. For every algorithm write the invariant that makes it correct, not just the code.
2. Test on tiny cases by hand, then compare against a brute-force version on random inputs.
3. Draw the data structure after each operation, especially pointers and rotations.
4. Time your code: the difference between O(n^2) and O(n log n) must become something you have seen.
5. Maintain a "pattern notebook": two pointers, sliding window, binary search on the answer, DFS/BFS, DP states, heaps, union-find.
