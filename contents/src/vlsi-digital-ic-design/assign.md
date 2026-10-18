# VLSI & Digital IC Design: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. For the Verilog questions install Icarus Verilog (`iverilog` and `vvp`) and GTKWave and run every module; all the Verilog and its outputs below were compiled and simulated, and the numerical results were computed with scripts.

# Assignment 1: CMOS Circuits, Delay and Logical Effort (Chapters 1 to 3)

**Q1. Inverter threshold.** An inverter has VDD = 1.2 V, VTn = 0.4 V and VTp = -0.4 V. Use VM = (VTn + r (VDD + VTp))/(1 + r) with r = sqrt(kp/kn). (a) Find VM for kp = kn, for kp/kn = 0.5 and for kp/kn = 2 [6] (b) What W/L ratio of PMOS to NMOS gives a symmetric inverter if electron mobility is 2.5 times hole mobility? [2] (c) Why is a symmetric inverter desirable? [2]

**Q2. Gate design.** (a) Draw (describe) the pull-down and pull-up networks of F = NOT(A B + C) and give the transistor count [4] (b) Give the function and transistor count of F = NOT((A + B) C) [3] (c) Why is AND2 built as NAND2 plus an inverter? How many transistors? [3]

**Q3. Delay.** (a) An inverter has an equivalent resistance of 10 kΩ driving 10 fF: the propagation delay (0.69 R C) [3] (b) The Elmore delay of a 3-section RC ladder with equal R and C [3] (c) Why are long wires split with repeaters? [4]

**Q4. Dynamic power.** A block has alpha = 0.1, total switched capacitance 10 nF, V = 1.0 V and f = 1 GHz. (a) The dynamic power [2] (b) The power at V = 0.9 V [2] (c) At V = 0.9 V and f = 0.8 GHz [2] (d) Explain clock gating and multi-Vt [4]

**Q5. Logical effort.** (a) Give g and p for the inverter, NAND2, NOR2, NAND3 and NOR3 [3] (b) For an inverter chain driving a load 1000 times its input capacitance find D for N = 3, 4, 5 and 6 stages and the best N [4] (c) For the path inverter, NAND2, inverter, NOR2 with H = 64, compute G, F, the stage effort and the delay [3]

**Q6. Pass transistors.** (a) What high level does an NMOS pass transistor deliver with VDD = 1.2 V and VTn = 0.4 V, and why is the low level fine? [4] (b) How does a transmission gate fix this? [3] (c) Why can long chains of pass transistors be a problem? [3]

**Q7. Transistor counting.** (a) Count the transistors in inverter, NAND2, NOR3, a 6T SRAM bit and a 1 Mb SRAM array [4] (b) Size the transistors of NAND2 and NOR2 relative to the reference inverter (NMOS 1, PMOS 2) for equal drive [4] (c) Which is faster, NAND or NOR, and why? [2]

## Solutions to Assignment 1

**Q1.** (a) kp = kn: r = 1: VM = (0.4 + 1.2 - 0.4)/2 = **0.6 V** (VDD/2). kp/kn = 0.5: r = 0.707: VM = (0.4 + 0.707 × 0.8)/1.707 = **0.566 V**. kp/kn = 2: r = 1.414: VM = (0.4 + 1.414 × 0.8)/2.414 = **0.634 V**.
(b) k is proportional to mu (W/L): equal k needs (W/L)p/(W/L)n = mu_n/mu_p = **2.5**.
(c) VM = VDD/2 gives equal rise and fall times and maximum, balanced noise margins.

**Q2.** (a) Step 1: The PDN conducts when A B + C = 1: A and B in series, in parallel with C (3 NMOS).
Step 2: The PUN is the dual: (A parallel B) in series with C (3 PMOS).
Step 3: Total **6 transistors**
(b) PDN: (A parallel B) in series with C; PUN: (A series B) parallel with C. F = NOT((A + B) C) = **an OAI21 gate, 6 transistors**
(c) A single static CMOS stage is inverting (a rising input can only produce a falling output); a non-inverting AND needs two stages: NAND2 (4) + inverter (2) = **6 transistors**.

**Q3.** (a) tp = 0.69 × 10,000 × 10 × 10^-15 = 6.9 × 10^-11 s = **69 ps**.
(b) RC (1 + 2 + 3) = **6 RC** (C1 sees R, C2 sees 2R, C3 sees 3R).
(c) The delay of a wire grows with the square of its length (R and C both proportional to length), so n repeaters turn the delay into roughly linear in length: dividing a wire of delay 0.38 R C into n segments gives about 0.38 R C/n plus n buffer delays.

**Q4.** (a) P = 0.1 × 10 × 10^-9 × 1.0^2 × 10^9 = **1.0 W**.
(b) × 0.81: **0.81 W**.
(c) × 0.8 more: **0.648 W** (= 0.81 × 0.8).
(d) **Clock gating** disables the clock to registers whose values are not changing, removing their switching activity (and the clock-tree power below the gate). **Multi-Vt** uses low-threshold (fast, leaky) transistors only on critical paths and high-threshold (slow, low leakage) transistors elsewhere, cutting leakage with a small speed cost.

**Q5.** (a) g: inverter **1**, NAND2 **4/3**, NOR2 **5/3**, NAND3 **5/3**, NOR3 **7/3**; p: **1, 2, 2, 3, 3**.
(b) D = N H^(1/N) + N (inverters have p = 1): N = 3: 3 × 10 + 3 = **33**; N = 4: 4 × 5.62 + 4 = **26.5**; N = 5: 5 × 3.98 + 5 = **24.9**; N = 6: 6 × 3.16 + 6 = **24.97**. The best is **N = 5** (log4 1000 = 4.98, stage effort 3.98, close to 4).
(c) G = 1 × (4/3) × 1 × (5/3) = **2.22**; F = G H = 2.22 × 64 = **142.2**; N = 4: f_hat = 142.2^(1/4) = **3.45**; P = 1 + 2 + 1 + 2 = 6; D = 4 × 3.45 + 6 = **19.8 tau**.

**Q6.** (a) The NMOS stops conducting when Vgs = VTn, so the output rises only to VDD - VTn = 1.2 - 0.4 = **0.8 V**: a degraded high level (and slow near the end); the low level is passed fully (the NMOS conducts down to 0 V).
(b) A transmission gate puts an NMOS and a PMOS in parallel with complementary gate signals: the NMOS passes low levels well and the PMOS passes high levels well, so both levels pass fully.
(c) Each pass transistor adds resistance; the delay of n in series grows as n^2 (Elmore), so chains longer than 3 to 4 need buffers; and degraded levels can leave a following inverter with static current.

**Q7.** (a) Inverter **2**, NAND2 **4**, NOR3 **6**, 6T SRAM bit **6**, 1 Mb array = 6 × 2^20 = **6,291,456** (plus periphery).
(b) NAND2: NMOS in series so width 2 each; PMOS in parallel so width 2 each (the reference inverter has PMOS 2): input capacitance 4 per input. NOR2: NMOS in parallel (width 1), PMOS in series (width 4 each): input capacitance 5.
(c) **NAND is faster** (for the same area and drive): the series transistors of a NAND are NMOS (high mobility), while a NOR has series PMOS (low mobility), requiring much wider devices, so its logical effort (5/3 against 4/3) is higher.

# Assignment 2: Layout, Timing and Arithmetic (Chapters 4 and 5)

**Q1. Setup and hold.** t_cq = 0.4 ns, t_logic = 2.1 ns, t_su = 0.2 ns, skew = 0.1 ns. (a) The minimum clock period and maximum frequency [3] (b) The maximum logic delay at 500 MHz [2] (c) The hold check with t_cq,min = 0.25 ns, shortest logic 0.05 ns, t_h = 0.1 ns, skew 0.1 ns [3] (d) The hold slack if the skew grows to 0.3 ns and how to fix it [2]

**Q2. Pipelining.** The 2.1 ns logic of Q1 is split. (a) Two balanced-as-possible stages 1.0 and 1.1 ns: the clock period, frequency, speedup [4] (b) Three stages of 0.7 ns: the same, and the latency of a result [4] (c) Why does the speedup not reach 3 for three stages? [2]

**Q3. Adders.** t_carry = 0.15 ns and t_sum = 0.25 ns. (a) The delay of 8, 16, 32 and 64-bit ripple-carry adders [4] (b) Explain how carry lookahead works with generate and propagate [4] (c) Name two other fast adder architectures [2]

**Q4. Scaling and wires.** (a) For a shrink by s = 0.7, the change in area, gate delay and (constant-field) power density [4] (b) The Elmore delay of a distributed wire with total R = 100 Ω and total C = 0.2 pF (0.5 RC and 0.38 RC) [3] (c) Why did Dennard scaling end? [3]

**Q5. Clock domain crossing.** (a) What is metastability and when does it occur? [3] (b) Describe a two-flip-flop synchroniser [3] (c) How should a multi-bit bus cross clock domains? [4]

**Q6. Layout concepts.** (a) What are lambda design rules? [2] (b) Draw (describe) the layers of an inverter layout [3] (c) Explain latch-up and its prevention [3] (d) What is a standard cell? [2]

**Q7. Timing analysis practice.** A second path has t_cq = 0.3 ns, logic 1.5 ns, t_su = 0.15 ns, skew 0.2 ns. (a) The minimum period and frequency [3] (b) What fraction of the period is overhead? [2] (c) If the clock is 600 MHz, what is the setup slack? [3] (d) Name three ways to fix a setup violation [2]

## Solutions to Assignment 2

**Q1.** (a) T_min = t_cq + t_logic + t_su + skew = 0.4 + 2.1 + 0.2 + 0.1 = **2.8 ns**; f_max = **357 MHz**.
(b) At 500 MHz T = 2.0 ns: t_logic <= 2.0 - 0.4 - 0.2 - 0.1 = **1.3 ns**.
(c) Hold: t_cq,min + t_logic,min >= t_h + skew: 0.25 + 0.05 = 0.30 against 0.1 + 0.1 = 0.20: slack = **+0.10 ns** (met).
(d) With skew 0.3 ns: 0.30 - (0.1 + 0.3) = **-0.10 ns** (violated). Hold violations are independent of the clock period; fix by adding delay (buffers) of at least 0.10 ns to the short path (and re-checking setup on that path) or by reducing the skew.

**Q2.** (a) T = 0.4 + 1.1 + 0.2 + 0.1 = **1.8 ns**; f = **555 MHz**; speedup 2.8/1.8 = **1.56**.
(b) T = 0.4 + 0.7 + 0.2 + 0.1 = **1.4 ns**; f = **714 MHz**; speedup 2.8/1.4 = **2.0**; latency = 3 cycles × 1.4 = **4.2 ns** (against 2.8 ns unpipelined: latency increases while throughput increases).
(c) Each stage still pays the register overhead t_cq + t_su + skew = 0.7 ns (about half of the 1.4 ns period in the three-stage case), which does not shrink; the speedup is limited to (total time)/(logic per stage + overhead).

**Q3.** (a) Step 1: delay = (n - 1) t_carry + t_sum: 8 bits **1.3 ns**; 16 bits **2.5 ns**; 32 bits **4.9 ns**; 64 bits **9.7 ns** (linear in n)
(b) For each bit, generate g = a b (a carry is produced regardless of the input carry) and propagate p = a xor b (the input carry passes through).
Step 2: Then c(i + 1) = g(i) + p(i) c(i).
Step 3: Expanding gives each carry directly from g, p and c0 with AND-OR logic of limited depth, instead of waiting for the previous carry; in groups of four the group generate and propagate signals are combined by a second lookahead level, giving delay proportional to log n
(c) Carry-select (compute both carry cases and select), carry-skip, and parallel-prefix adders such as Kogge-Stone (fastest, most wiring) and Brent-Kung (small area, slower).

**Q4.** (a) Area scales by s^2 = **0.49** (it halves); gate delay by s = **0.70**; in constant-field scaling the voltage also scales by s, so power per gate falls by s^2 (in proportion to the area), and the power density stays **constant (1.0)**.
(b) 0.5 R C = 0.5 × 100 × 0.2 × 10^-12 = **10 ps**; 0.38 R C = **7.6 ps** (the exact distributed-line figure).
(c) Supply voltage could not be lowered further without making leakage current (subthreshold, set by the threshold voltage) explode: voltage stopped scaling, so power density rose as transistors shrank; since about 2005 the power wall limits frequency, hence multicore and dark silicon.

**Q5.** (a) Metastability: a flip-flop whose input changes inside the setup/hold window of the sampling clock can settle to neither 0 nor 1 for a time; it happens whenever an **asynchronous** or other-clock-domain signal is sampled.
(b) Pass the signal through **two flip-flops** in the destination domain; the first may go metastable but has a full clock period to resolve before the second samples it, so the probability of failure (MTBF) is exponentially reduced.
(c) A bus must not be synchronised bit by bit (bits can arrive in different cycles): use a handshake (request/acknowledge with a synchronised control signal and stable data), an asynchronous FIFO with Gray-coded pointers (only one bit changes per increment), or a gray-coded counter.

**Q6.** (a) Lambda rules express all minimum dimensions as multiples of lambda (half the minimum feature size, for example, min width 2 lambda, min spacing 3 lambda) so a layout can be re-targeted to a new process by changing lambda.
(b) n-well for the PMOS, p-substrate for the NMOS; **diffusion** (active) areas; **polysilicon** crossing the diffusions to form the common gate; contacts, **metal 1** for VDD, VSS, input and output; substrate and well taps.
(c) **Latch-up**: the parasitic PNPN structure (a thyristor) of bulk CMOS can be triggered by a current spike, creating a low-resistance path from VDD to VSS that destroys the chip; prevent it with substrate and well contacts near transistors (low resistance), guard rings and a retrograde well.
(d) A **standard cell** is a pre-designed and characterised layout of a basic gate or flip-flop of fixed height, with power rails at the top and bottom, to be placed in rows by automatic tools.

**Q7.** (a) T = 0.3 + 1.5 + 0.15 + 0.2 = **2.15 ns**; f = **465 MHz**.
(b) Overhead = 0.3 + 0.15 + 0.2 = 0.65 ns = **30 percent** of the period.
(c) At 600 MHz T = 1.667 ns: slack = 1.667 - 2.15 = **-0.48 ns** (violated).
(d) Pipeline (retime) the logic; optimise or restructure the critical logic (faster adder, fewer levels); upsize cells or use lower-Vt cells on the critical path; reduce skew or use useful skew; reduce the clock frequency.

# Assignment 3: Verilog, FPGAs and the Design Flow (Chapters 6 to 8)

**Q1. Structural design.** (a) Write a 1-bit full adder and a 4-bit ripple-carry adder in Verilog [4] (b) Write an exhaustive self-checking testbench and give the result [4] (c) What does the simulation show for 9 + 8 + 1? [2]

**Q2. Counter.** (a) Write a 4-bit synchronous up counter with synchronous reset and enable [4] (b) Give the sequence of the first 20 values with enable high after reset [3] (c) What happens with enable low and after a reset? [3]

**Q3. Finite state machine.** (a) Draw the state diagram of a Moore detector for the overlapping sequence 1011 [4] (b) Give the Verilog [3] (c) For the input 1011011101011 find the positions of detections, and the number of flip-flops needed [3]

**Q4. Blocking and non-blocking.** (a) For the 3-stage shift register written with non-blocking and with blocking assignments, give q1 q2 q3 after 1, 2 and 3 clocks with d held at 1 (initial state unknown) [5] (b) State the coding rules [3] (c) What causes unintended latches? [2]

**Q5. ALU.** For the 8-bit ALU in the notes give the outputs and flags for (a) 100 + 27, 100 + 100, 200 + 100 [4] (b) 50 - 50 and 10 - 20 [3] (c) 0xF0 and 0x3C with AND, OR, XOR; 3 << 2; 128 >> 3; signed -2 < 1 [3]

**Q6. FPGA mapping.** (a) The number of configuration bits of a LUT4 and a LUT6 [2] (b) How many LUT4s implement an 8-input AND? How many LUT6s? [4] (c) FPGA versus ASIC: when do you choose which? [4]

**Q7. Flow and verification.** (a) List the steps of the ASIC design flow from RTL to tape-out [4] (b) Explain DRC, LVS and STA [3] (c) What are the Mealy output behaviour and the LFSR period for the examples simulated? [3]

## Solutions to Assignment 3

**Q1.** (a)
```verilog
module full_adder (input a, b, cin, output sum, cout);
    assign sum  = a ^ b ^ cin;
    assign cout = (a & b) | (cin & (a ^ b));
endmodule

module adder4 (input [3:0] a, b, input cin, output [3:0] sum, output cout);
    wire c1, c2, c3;
    full_adder fa0 (a[0], b[0], cin, sum[0], c1);
    full_adder fa1 (a[1], b[1], c1,  sum[1], c2);
    full_adder fa2 (a[2], b[2], c2,  sum[2], c3);
    full_adder fa3 (a[3], b[3], c3,  sum[3], cout);
endmodule
```
(b) A testbench loops over a (0..15), b (0..15) and cin (0, 1), waits one time unit and compares {cout, sum} with i + j + k, counting mismatches with `!==`. Result: **"512 input combinations tested, errors = 0"**. (c) 9 + 8 + 1 = **18** (cout = 1, sum = 0010).

**Q2.** (a)
```verilog
module counter4 (input clk, rst, en, output reg [3:0] q);
    always @(posedge clk) begin
        if (rst)      q <= 4'd0;
        else if (en)  q <= q + 4'd1;
    end
endmodule
```
(b) After reset is released and enable goes high: **1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 0 1 2 3 4**. (c) With enable low the count is held (q stayed at 4); a reset sets q = 0 on the next rising clock edge (synchronous reset: it needs a clock).

**Q3.** (a) Step 1: States: S0 (nothing), S1 (seen 1), S10 (seen 10), S101 (seen 101), S1011 (output 1).
Step 2: Transitions (input 0/1): S0: 0 → S0, 1 → S1.
Step 3: S1: 0 → S10, 1 → S1.
Step 4: S10: 0 → S0, 1 → S101.
Step 5: S101: 0 → S10 (the last 0 may start a new 10... overlap: "1010" ends in 10), 1 → S1011.
Step 6: S1011 (output z = 1): 0 → S10, 1 → S1
(b) As in the notes (`seqdet` module, three blocks: state register, next-state logic, output)
(c) Detections after input bits **4, 7 and 13**: **3 detections**. 5 states need **3 flip-flops** (2^3 = 8 >= 5; a one-hot encoding would use 5).

**Q4.** (a) Non-blocking: after clock 1: **1xx**, after clock 2: **11x**, after clock 3: **111** (one stage per clock). Blocking: **111 after the first clock** (each statement uses the updated value: the three registers collapse into one).
(b) Use non-blocking assignments (<=) in clocked always blocks; blocking assignments (=) in combinational always @(*) blocks; do not mix them in one block; assign each variable from only one always block; reset every state element.
(c) A combinational always block in which some output is not assigned on every path (an `if` without `else`, a `case` without `default`) infers a **latch**; fix with default assignments.

**Q5.** (a) 100 + 27 = **127** (zero 0, carry 0, overflow 0). 100 + 100 = **200** with **overflow = 1** (as signed numbers 100 + 100 does not fit in 8 bits), carry 0. 200 + 100 = **44** (300 - 256) with **carry = 1**, overflow 0.
(b) 50 - 50 = **0** with **zero = 1**. 10 - 20 = **246** (= -10 in two's complement), carry = 1 meaning a borrow (in this implementation), overflow 0.
(c) 0xF0 AND 0x3C = **48** (0x30); OR = **252** (0xFC); XOR = **204** (0xCC); 3 << 2 = **12**; 128 >> 3 = **16**; signed 0xFE (-2) < 1: **1**.

**Q6.** (a) A LUT4 stores 2^4 = **16 bits**; a LUT6 stores 2^6 = **64 bits**.
(b) An 8-input AND: AND the inputs in two groups of 4 with two LUT4s, then AND the two results with a third: **3 LUT4s** (two levels). With LUT6s: one LUT6 for six inputs and a second LUT6 combining its output with the remaining two inputs: **2 LUT6s**.
(c) Choose an **FPGA** for prototyping, low or medium volume, changing requirements, fast time to market, no mask cost; choose an **ASIC** for high volume (low unit cost), highest speed and lowest power, small area, or when the design is stable. FPGAs use roughly 10 to 20 times the area of an ASIC for the same logic and run several times slower.

**Q7.** (a) RTL design and functional simulation; logic synthesis (to standard cells); floorplanning; placement; clock-tree synthesis; routing; static timing analysis with parasitic extraction (iterating for timing closure); power analysis; physical verification (DRC, LVS, antenna); sign-off and tape-out (masks).
(b) **DRC** (design rule check): the layout obeys the foundry's minimum widths, spacings and enclosures. **LVS** (layout versus schematic): the circuit extracted from the layout is the same as the intended netlist. **STA** (static timing analysis): checks setup and hold on every path at every process/voltage/temperature corner without simulation vectors.
(c) The Mealy detector asserts its output during the cycle in which the final 1 is presented (combinationally, depending on the present input): high during input bits **4, 7 and 13**, one clock earlier than the Moore output, which appears in the cycle after the final 1 is clocked in. The 4-bit LFSR with polynomial x^4 + x^3 + 1 starting from 1 runs through **15 states** (1, 2, 4, 9, 3, 6, 13, 10, 5, 11, 7, 15, 14, 12, 8) and then returns to 1: a maximal-length sequence (never reaching 0).
