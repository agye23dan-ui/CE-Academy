# Introduction to Programming (C and Python): 14-Week Study Plan and Resources

Time budget: 9 to 12 hours per week. Programming is learned by writing programs: aim for **at least two hours of typing code every day**, not reading. Each week: read the chapter (2 h), do the assignment problems (5 h), build one small project (3 h), review with the app's quizzes (1 h).

## Setup (before week 1)
- Install gcc (Linux or macOS; on Windows use MSYS2 / MinGW-w64 or WSL), gdb, valgrind (Linux), Python 3.10 or later, VS Code or any editor, and git.
- Compile C with gcc -std=c11 -Wall -Wextra -Wpedantic -g -fsanitize=address,undefined.
- Make a git repository for your course work and commit after every exercise.

## Textbooks
- K. N. King, *C Programming: A Modern Approach*. The clearest full C text, with exercises.
- Kernighan and Ritchie, *The C Programming Language*. The classic; short and precise.
- Al Sweigart, *Automate the Boring Stuff with Python* (free online) for practical Python.
- Allen Downey, *Think Python* (free online) for programming thinking.
- Bryant and O'Hallaron, *Computer Systems: A Programmer's Perspective* (read later) for what C does on the machine.

## Free courses
- Harvard CS50x (C, then Python; problem sets with an automatic checker).
- MIT OpenCourseWare 6.0001 Introduction to Computer Science and Programming in Python.
- Beej's Guide to C Programming (free online) and Beej's Guide to Network Programming.
- Exercism and Advent of Code for graded practice problems.

## Week by week

**Week 1: How programs run; types and operators (Ch 1).** Write Hello World in both languages, a temperature converter and a program printing the sizes of C types. Do: Assignment 1 Q7, Q8. Checkpoint: explain compilation versus interpretation.

**Week 2: Control flow (Ch 2).** Do: Assignment 1 Q1, Q2, Q3. Project: a number-guessing game in C and Python.

**Week 3: Loops, algorithms with loops, bit manipulation (Ch 2.3).** Do: Assignment 1 Q4, Q5. Checkpoint: write gcd and a primality test without notes.

**Week 4: Functions and recursion (Ch 3).** Do: Assignment 1 Q6. Project: command-line calculator with functions. Sit the **Class Test** at the end of the week.

**Week 5: Arrays and strings (Ch 4.1, 4.2).** Do: Assignment 2 Q2, Q3, Q4. Project: word counter.

**Week 6: Structures, 2D arrays, file I/O (Ch 4.3 to 4.5).** Do: Assignment 2 Q5, Q6. Project: a student records program that reads a CSV file.

**Week 7: Pointers (Ch 5).** Do: Assignment 2 Q1, Q2, Q7. Draw a memory diagram for every pointer exercise.

**Week 8: Pointer review and searching (Ch 5, 7).** Do: Assignment 2 Q8. Mock midterm: first half of the Final Exam.

**Week 9: Dynamic memory (Ch 6.1, 6.2).** Do: Assignment 3 Q1, Q3. Run every program under valgrind or ASan.

**Week 10: Linked lists and stacks (Ch 6.3).** Do: Assignment 3 Q2, Q4. Project: postfix calculator with a stack.

**Week 11: Complexity and sorting (Ch 6.5, 7).** Do: Assignment 3 Q5, Q6. Time sorting algorithms on 10^3 to 10^5 elements and plot the results.

**Week 12: Debugging tools (Ch 8.1, 8.2).** Do: Assignment 3 Q9. Deliberately create five bugs and find each with gdb, ASan and valgrind.

**Week 13: Testing and robust programs (Ch 8.3, 8.4).** Do: Assignment 3 Q7, Q8. Write pytest tests for an earlier project.

**Week 14: Capstone and revision.** Build a small complete program (for example a text-adventure engine, an inventory system with file persistence, or a tiny shell) in C with a Python test script, then redo missed Class Test questions and sit the **Final Exam** under exam conditions (3 hours, no computer).

## Milestone checklist
- [ ] I can write, compile and run C programs with warnings enabled, and explain every warning.
- [ ] I can write loops and functions correctly and prove a loop with an invariant.
- [ ] I can trace programs by hand, including pointer code.
- [ ] I can manage heap memory without leaks, double frees or overflows.
- [ ] I can build and free a linked list and a dynamic array.
- [ ] I can choose between Python and C for a task and justify the choice.
- [ ] I can estimate Big-O for loops and recursive functions.
- [ ] I can find bugs with gdb, ASan and valgrind, and write unit tests.
- [ ] I scored at least 70 percent on the Final Exam with no computer.

## Study habits that work
1. Type every example. Never copy and paste.
2. Predict the output before running a program, then compare. Wrong predictions are your best teachers.
3. Always compile with warnings and sanitisers, and treat warnings as errors.
4. Read error messages from the first one down, and try to explain the error in your own words before searching.
5. Keep a "bug diary": for each bug record the symptom, the cause and how you found it.
6. Read good code (the Linux kernel coding style, Python's standard library) once you can read basic programs.
