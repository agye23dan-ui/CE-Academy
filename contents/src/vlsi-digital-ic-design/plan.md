# VLSI & Digital IC Design: 14-Week Study Plan and Resources

Time budget: 10 to 12 hours per week (3 reading, 7 to 8 design, simulation and lab work, 1 review with the app's quizzes). Digital design is learned by describing hardware, simulating it, and implementing it. Install Icarus Verilog with GTKWave (or Verilator), and if possible get an FPGA board (Digilent Basys 3, Arty, Terasic DE10-Nano, or a cheap iCE40/Lattice board with the open-source yosys + nextpnr toolchain). For analog-level CMOS work use ngspice or LTspice; for layout use Magic or KLayout with an open PDK (SkyWater 130 nm).

## Textbooks
- Neil Weste and David Harris, *CMOS VLSI Design: A Circuits and Systems Perspective*. The standard text; logical effort and timing follow it.
- Jan Rabaey, Anantha Chandrakasan and Borivoje Nikolic, *Digital Integrated Circuits: A Design Perspective*.
- Samir Palnitkar, *Verilog HDL: A Guide to Digital Design and Synthesis*; Stuart Sutherland's *Verilog and SystemVerilog Gotchas*.
- Sarah Harris and David Harris, *Digital Design and Computer Architecture* (RISC-V edition) for RTL practice.
- Ivan Sutherland, Bob Sproull and David Harris, *Logical Effort: Designing Fast CMOS Circuits*.

## Free courses and tools
- Berkeley EECS 151/251A (digital design), MIT 6.111, Stanford EE 271, ETH Digital Design; Coursera/edX FPGA and Verilog courses; HDLBits (free interactive Verilog exercises); Nandland and fpga4fun tutorials.
- Open-source EDA: **yosys** (synthesis), **nextpnr** (place and route for iCE40/ECP5), **Verilator** (fast simulation), **OpenROAD / OpenLane** (RTL to GDSII for the open SkyWater 130 nm process), Magic and KLayout (layout), ngspice (circuit simulation). Tiny Tapeout lets you place a small design on a real chip cheaply.

## Week by week

**Week 1: MOS review and the CMOS inverter, VTC, noise margins (Ch 1.1 to 1.2).** Do: Assignment 1 Q1. Simulate an inverter's transfer curve in ngspice.

**Week 2: Delay and power (Ch 1.3, 1.4).** Do: Assignment 1 Q3, Q4. Measure the delay of an inverter chain in simulation and compare with 0.69 RC.

**Week 3: CMOS gates, sizing, pass transistors (Ch 2).** Do: Assignment 1 Q2, Q6, Q7. Design AOI and OAI gates from the PDN/PUN duality.

**Week 4: Logical effort (Ch 3).** Do: Assignment 1 Q5. Sit the **Class Test** at the end of the week (Chapters 1 to 3 plus an introduction to timing).

**Week 5: Fabrication, layout, design rules, scaling (Ch 4).** Do: Assignment 2 Q4, Q6. Draw an inverter layout in Magic or KLayout and run DRC.

**Week 6: Timing: setup, hold, skew (Ch 5.1).** Do: Assignment 2 Q1, Q7. Read a timing report from your FPGA tool and find the critical path.

**Week 7: Pipelining, retiming, clocking, metastability (Ch 5.2, 5.3).** Do: Assignment 2 Q2, Q5. Mock midterm: first half of the Final Exam.

**Week 8: Arithmetic circuits (Ch 5.4).** Do: Assignment 2 Q3. Write ripple, carry-select and lookahead adders in Verilog and compare their synthesised timing.

**Week 9: Verilog fundamentals and testbenches (Ch 6.1, 6.2).** Do: Assignment 3 Q1, Q2. Build the adder and counter with self-checking testbenches and view waveforms in GTKWave.

**Week 10: FSM design, blocking versus non-blocking (Ch 6.3, 6.4).** Do: Assignment 3 Q3, Q4. Implement the 1011 detector in Moore and Mealy styles and run it on an FPGA with a button and LEDs.

**Week 11: Datapath design: ALU, registers, memory (Ch 6.5).** Do: Assignment 3 Q5. Build a small processor datapath (an 8-bit ALU, register file and program counter).

**Week 12: The design flow, FPGA architecture, verification (Ch 7).** Do: Assignment 3 Q6, Q7. Run yosys and nextpnr (or Vivado/Quartus) on your design and study the utilisation and timing reports.

**Week 13: Project.** Design, verify and implement a complete small system (UART, VGA pattern generator, a simple RISC-V or 8-bit CPU, a stopwatch, an FIR filter) on an FPGA or through OpenLane; report with the architecture, testbench coverage and the timing/utilisation results.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can explain the CMOS inverter VTC, switching threshold and noise margins and size a symmetric inverter.
- [ ] I can design static CMOS gates from a Boolean function (PDN/PUN duality) and count transistors.
- [ ] I can estimate delay (0.69 RC, Elmore) and dynamic power (alpha C V^2 f).
- [ ] I can use logical effort to size paths and choose the number of stages.
- [ ] I can do setup and hold analysis, compute maximum frequency, and evaluate pipelining.
- [ ] I can compare adder architectures and explain carry lookahead.
- [ ] I can write synthesisable Verilog (combinational, sequential, FSMs) with correct assignment styles.
- [ ] I can write self-checking testbenches and read waveforms.
- [ ] I can describe the ASIC and FPGA flows and explain DRC, LVS and STA.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Simulate everything before you synthesise it, with a testbench that checks results automatically.
2. Think in hardware: every line of Verilog becomes gates and flip-flops; check the synthesis report for inferred latches.
3. Always draw the timing diagram and the state diagram before writing code.
4. Read the tool reports (timing, utilisation, power) after every change.
5. Learn one complete flow end to end (RTL to bitstream or GDSII), even for a tiny design, early in the course.
