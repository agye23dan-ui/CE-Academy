# Computer Organization: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 5 to 6 problems and programming, 1 review with the app's quizzes). Learn this course by **running code on a simulator** and by **drawing the hardware**. Install a RISC-V simulator now (Venus or RARS are easy), and a cache-simulation tool or write your own in Python.

## Textbooks
- David Patterson and John Hennessy, *Computer Organization and Design: RISC-V Edition* (Morgan Kaufmann). The standard text for this course.
- Hennessy and Patterson, *Computer Architecture: A Quantitative Approach* (later, for depth).
- Harris and Harris, *Digital Design and Computer Architecture: RISC-V Edition*.
- Randal Bryant and David O'Hallaron, *Computer Systems: A Programmer's Perspective* (how software meets hardware).
- Andrew Waterman and Krste Asanović, *The RISC-V Instruction Set Manual* (free; the specification).

## Free courses and tools
- UC Berkeley CS61C Great Ideas in Computer Architecture (lectures and labs online).
- MIT OpenCourseWare 6.004 Computation Structures; ETH Zurich Digital Design and Computer Architecture lectures (Onur Mutlu, on YouTube).
- Nand2Tetris (part 2) for building a CPU and an assembler.
- Venus, RARS and Ripes (a graphical RISC-V pipeline simulator); Compiler Explorer (godbolt.org) to see compiled assembly; Cachegrind or a Python cache simulator.

## Week by week

**Week 1: Performance and measurement (Ch 1).** Do: Assignment 1 Q1. Practise CPI, Amdahl and power calculations.

**Week 2: Data representation: endianness, two's complement, IEEE 754 (Ch 1.2, 3).** Do: Assignment 1 Q2. Write a program that prints the bytes of an int and a float.

**Week 3: RISC-V instructions and formats (Ch 2.1 to 2.3).** Do: Assignment 1 Q3. Encode and decode ten instructions by hand.

**Week 4: Assembly programming: loops, arrays (Ch 2.4).** Do: Assignment 1 Q4, Q5. Sit the **Class Test** at the end of the week.

**Week 5: Procedures, the stack, calling conventions (Ch 2.5).** Do: Assignment 1 Q6. Write a recursive factorial and Fibonacci in assembly and check the stack in the simulator.

**Week 6: Arithmetic: multiplication, division, floating point (Ch 3).** Implement shift-and-add multiplication in assembly.

**Week 7: Single-cycle datapath and control (Ch 4).** Do: Assignment 2 Q1, Q2. Draw the datapath for lw and beq from memory.

**Week 8: Pipelining and hazards (Ch 5.1, 5.2).** Do: Assignment 2 Q3, Q4. Mock midterm: first half of the Final Exam.

**Week 9: Branch prediction, CPI and advanced pipelines (Ch 5.2, 5.3).** Do: Assignment 2 Q5 to Q7.

**Week 10: Caches (Ch 6.1, 6.2).** Do: Assignment 3 Q1, Q2. Implement a cache simulator in Python.

**Week 11: Cache performance and locality (Ch 6.3).** Do: Assignment 3 Q3, Q4, Q5. Time row-major versus column-major matrix traversal on your laptop.

**Week 12: Virtual memory (Ch 6.4).** Do: Assignment 3 Q6.

**Week 13: I/O, DMA, parallel processors and coherence (Ch 7, 8).** Do: Assignment 3 Q7, Q8.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, with the RISC-V reference card).

## Milestone checklist
- [ ] I can compute CPU time, CPI, speedup (Amdahl) and relative power.
- [ ] I can convert between hexadecimal, two's complement and IEEE 754 formats.
- [ ] I can encode and decode RISC-V instructions in all the basic formats.
- [ ] I can write and trace assembly with loops, arrays, procedures and the stack.
- [ ] I can draw the single-cycle datapath and give the control signals for common instructions.
- [ ] I can analyse a pipeline: stages, hazards, forwarding, stalls, branch prediction, CPI.
- [ ] I can decompose addresses for direct-mapped and set-associative caches and trace hits and misses.
- [ ] I can compute AMAT and CPI with memory stalls, and explain write policies.
- [ ] I can explain virtual memory, page tables and the TLB, and compute their sizes.
- [ ] I scored at least 70 percent on the Final Exam with the reference card.

## Study habits that work
1. Always execute programs in a simulator and compare with your hand trace.
2. Draw timing diagrams for pipelines: stage by stage and cycle by cycle.
3. For cache questions, write the tag/index/offset split first, then step through each access.
4. Keep a one-page summary of formats and conventions (instruction formats, register names, ABI rules).
5. Connect the topics: compilers produce the instruction mix, the pipeline sets the CPI, the caches decide the stalls.
