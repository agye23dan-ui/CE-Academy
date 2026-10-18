# Object-Oriented Programming (C++): 14-Week Study Plan and Resources

Time budget: 9 to 12 hours per week. As with every programming course, **type and run code every day**. Each week: read the chapter (2 h), do the assignment problems (4 to 5 h), build or extend one project (3 h), review with the app's quizzes (1 h). Set up g++ (or clang++), GDB or LLDB, valgrind or sanitisers (-fsanitize=address,undefined), CMake and a unit-test library (Catch2 or GoogleTest).

## Textbooks
- Bjarne Stroustrup, *A Tour of C++* (concise) and *Programming: Principles and Practice Using C++*.
- Stanley Lippman, Josée Lajoie and Barbara Moo, *C++ Primer*. Thorough, with exercises.
- Scott Meyers, *Effective Modern C++* (read after the course basics) and *Effective C++*.
- Gamma, Helm, Johnson and Vlissides, *Design Patterns: Elements of Reusable Object-Oriented Software*; Freeman and Robson, *Head First Design Patterns* (gentler).
- Robert C. Martin, *Clean Code* and *Clean Architecture* for design principles.
- The C++ Core Guidelines (free online) and cppreference.com.

## Free courses and tools
- learncpp.com (a complete free tutorial).
- CS106B/CS106L (Stanford) and MIT OpenCourseWare 6.096 Introduction to C++.
- Compiler Explorer (godbolt.org) to see what the compiler generates (vtables, inlining).
- Exercism C++ track, Advent of Code and Codeforces for practice.

## Week by week

**Week 1: From C to C++ (Ch 1).** Re-write two earlier C programs in C++ using string, vector and references. Do: Assignment 1 Q6.

**Week 2: Classes and encapsulation (Ch 2.1).** Do: Assignment 1 Q1. Project: a BankAccount or Inventory class with unit tests.

**Week 3: Object lifetime, const correctness, static members (Ch 2.2, 2.3).** Do: Assignment 1 Q2, Q5. Use a Tracer class to print constructor and destructor calls in every experiment.

**Week 4: Operator overloading (Ch 3.1).** Do: Assignment 1 Q4. Sit the **Class Test** at the end of the week.

**Week 5: Copying, the Rule of Three/Five/Zero, move semantics (Ch 3.2).** Do: Assignment 1 Q3. Write a String or Matrix class that owns memory, test it with the address sanitiser.

**Week 6: RAII and smart pointers (Ch 4).** Do: Assignment 3 Q8. Refactor your earlier code to remove all raw new and delete.

**Week 7: Inheritance and virtual functions (Ch 5.1, 5.2).** Do: Assignment 2 Q1, Q3, Q4, Q8.

**Week 8: Abstract classes, interfaces, composition (Ch 5.2 to 5.4).** Do: Assignment 2 Q2, Q5. Mock midterm: first half of the Final Exam.

**Week 9: OO design principles and UML (Ch 6.1, 6.2).** Do: Assignment 2 Q6, Q7. Draw a class diagram for your project.

**Week 10: Design patterns I (Ch 6.3).** Do: Assignment 3 Q6. Implement Strategy, Observer and Factory in one small application.

**Week 11: Templates (Ch 7.1).** Do: Assignment 3 Q1, Q2. Write a generic Stack and a generic function with constraints.

**Week 12: The STL (Ch 7.2).** Do: Assignment 3 Q3, Q4, Q5. Solve ten problems using only STL containers and algorithms.

**Week 13: Exceptions and testing (Ch 8, 9).** Do: Assignment 3 Q7. Add exception handling and a unit-test suite (Catch2) to your project.

**Week 14: Capstone and revision.** Finish a capstone project (for example a library management system, a text-based game, a bank simulator or a shape-drawing program) with a class diagram, at least one pattern, tests and no memory errors. Redo missed Class Test questions and sit the **Final Exam** under exam conditions (3 hours, no computer).

## Milestone checklist
- [ ] I can design a class with a clear invariant, constructors, const-correct methods and a destructor when needed.
- [ ] I can predict the order of construction, copying and destruction in any program.
- [ ] I can implement the Rule of Three/Five and explain move semantics.
- [ ] I can use unique_ptr and shared_ptr instead of raw owning pointers.
- [ ] I can write class hierarchies with virtual functions, abstract interfaces and virtual destructors, and avoid slicing.
- [ ] I can justify composition versus inheritance and apply the SOLID principles.
- [ ] I can write class and function templates and use STL containers, iterators and algorithms with lambdas.
- [ ] I can apply at least four design patterns appropriately.
- [ ] I can write exception-safe code and unit tests.
- [ ] I scored at least 70 percent on the Final Exam with no computer.

## Study habits that work
1. Instrument your classes: print in every constructor, destructor, copy and move, to see the rules at work.
2. Predict, then run. Wrong predictions are your best teachers.
3. Always build with warnings and sanitisers. Treat warnings as errors.
4. Design on paper (CRC cards or UML) before coding larger programs: ask what each class knows, does and collaborates with.
5. Read the C++ Core Guidelines a few rules at a time and apply them to your code.
