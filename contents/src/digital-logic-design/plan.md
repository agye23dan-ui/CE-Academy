# Digital Logic Design: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 5 to 6 design problems, 1 review with the app's quizzes). Digital design is a hands-on subject: combine paper design with simulation. Use a free simulator such as Logisim-evolution, Digital (by hneemann), or a Verilog simulator (Icarus Verilog with GTKWave, or EDA Playground in the browser), and an FPGA board later if you can.

## Textbooks
- M. Morris Mano and Michael Ciletti, *Digital Design: With an Introduction to the Verilog HDL* (Pearson). The standard text.
- Harris and Harris, *Digital Design and Computer Architecture* (Morgan Kaufmann). Modern, links logic to processors.
- Brown and Vranesic, *Fundamentals of Digital Logic with Verilog Design*.
- Wakerly, *Digital Design: Principles and Practices*.
- Stuart Sutherland, *Verilog and SystemVerilog Gotchas* (later).

## Free courses and tools
- Nand2Tetris (Part 1): build a computer from NAND gates.
- MIT OpenCourseWare 6.004 Computation Structures and 6.111 Introductory Digital Systems Laboratory.
- HDLBits (online Verilog exercises with automatic checking).
- Logisim-evolution and Digital for schematic simulation; Icarus Verilog + GTKWave; Yosys for open-source synthesis.

## Week by week

**Week 1: Number systems and codes (Ch 1.1 to 1.3).** Do: Assignment 1 Q1, Q6. Checkpoint: convert among binary, octal, hex and decimal in your head.

**Week 2: Signed numbers and arithmetic (Ch 1.2).** Do: Assignment 1 Q2. Implement two's complement addition and overflow detection in Python.

**Week 3: Boolean algebra and gates (Ch 2).** Do: Assignment 1 Q3 to Q5. Build each gate from NAND gates in a simulator.

**Week 4: Karnaugh maps (Ch 3.1).** Do: Assignment 2 Q1, Q2. Sit the **Class Test** at the end of the week.

**Week 5: Code converters and design flow (Ch 3.2, 3.3).** Do: Assignment 2 Q3, Q6. Check each answer against a truth-table program.

**Week 6: Arithmetic circuits (Ch 4.1).** Do: Assignment 2 Q4, Q8. Build a 4-bit adder/subtractor in the simulator.

**Week 7: Decoders, multiplexers, hazards (Ch 4.2, 4.3).** Do: Assignment 2 Q5, Q7. Mock midterm: first half of the Final Exam.

**Week 8: Latches and flip-flops (Ch 5.1).** Do: Assignment 3 Q1. Build an SR latch and a D flip-flop from gates.

**Week 9: Timing, registers and counters (Ch 5.2 to 5.4).** Do: Assignment 3 Q2, Q3, Q4, Q6.

**Week 10: Finite state machines I (Ch 6.1, 6.2).** Do: Assignment 3 Q5 (a), (b). Design a traffic-light controller on paper.

**Week 11: Finite state machines II (Ch 6.2, 6.3).** Do: Assignment 3 Q5 (c), (d). Implement the sequence detector in the simulator.

**Week 12: Memory and programmable logic (Ch 7).** Practise ROM-based and LUT-based implementations (see the Final Exam long question C5).

**Week 13: Verilog (Ch 8).** Do: Assignment 3 Q7. Solve 20 HDLBits exercises, write a testbench for your counter.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, no notes).

## Milestone checklist
- [ ] I can convert numbers and do two's complement arithmetic with overflow detection.
- [ ] I can simplify Boolean expressions algebraically and with K-maps (with don't-cares).
- [ ] I can implement logic with NAND/NOR only, multiplexers and decoders.
- [ ] I can design adders, subtractors and comparators and estimate their delay.
- [ ] I can explain latches and flip-flops and use their excitation tables.
- [ ] I can design synchronous counters and shift registers, including self-correcting ones.
- [ ] I can design Moore and Mealy FSMs from a specification.
- [ ] I can do setup/hold and maximum-frequency timing analysis.
- [ ] I can write and simulate simple Verilog designs and testbenches.
- [ ] I scored at least 70 percent on the Final Exam with no notes.

## Study habits that work
1. Always verify a hand design by simulation, and verify the simulation by hand on a few vectors.
2. Write truth tables first, then minimise; keep the specification in view.
3. For sequential problems, draw the state diagram before writing equations.
4. Learn to read timing diagrams: they show what real hardware does.
5. Keep an error log: most mistakes are K-map grouping errors, unused states and sign/overflow confusion.
