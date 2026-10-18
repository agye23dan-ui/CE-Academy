# Digital Logic Design: Complete Lecture Notes

Digital logic is the foundation of every computer: processors, memories, network hardware and embedded controllers are built from a few simple ideas: represent information with 0 and 1, combine bits with gates, and remember bits with flip-flops. Notation: A' or ¬A is NOT, A·B or AB is AND, A + B is OR, A ⊕ B is XOR, Σm(...) lists the minterms where a function is 1, and d(...) lists don't-cares.

## Chapter 1. Number Systems and Codes

### 1.1 Positional number systems
A number in base r: d_n ... d_1 d_0 . d_-1 ... has value Σ d_i r^i. Common bases: binary (2), octal (8), decimal (10), hexadecimal (16, digits 0-9 A-F). Each hex digit is 4 bits, each octal digit 3 bits.
- **Binary to decimal:** 101101.011 = 32 + 8 + 4 + 1 + 0.25 + 0.125 = 45.375.
- **Decimal to binary (integer):** divide repeatedly by 2 and read the remainders upward: 215 gives 11010111 (= D7 hex = 327 octal). **Fraction:** multiply by 2 repeatedly and read the integer parts downward: 0.6875 = 0.1011.
- 0x3F2 = 3·256 + 15·16 + 2 = 1010. An n-bit unsigned number ranges from 0 to 2^n - 1. 1 KiB = 2^10 bytes; the number of bits needed for N values is ⌈log2 N⌉.

### 1.2 Signed numbers
- **Sign-magnitude:** one sign bit; has two zeros. **One's complement:** invert all bits.
- **Two's complement** (universal in hardware): the negative of x is NOT(x) + 1. An n-bit two's complement number has range -2^(n-1) to 2^(n-1) - 1 (8-bit: -128 to 127). The leftmost bit is the sign. **Example:** 45 = 00101101, so -45 = 11010010 + 1 = **11010011**.
- **Addition** uses the ordinary binary adder: 27 + (-45): 00011011 + 11010011 = 11101110 = -18 ✓. **Subtraction** a - b = a + (-b).
- **Overflow:** occurs when adding two numbers of the same sign gives a result of the opposite sign (equivalently, the carry into the sign bit differs from the carry out). 100 + 50 in 8 bits = 01100100 + 00110010 = 10010110 (reads as -106): overflow. **Sign extension** copies the sign bit when widening.

### 1.3 Binary codes
- **BCD** (binary-coded decimal): each decimal digit in 4 bits: 479 = 0100 0111 1001. **Excess-3** is BCD + 3. **Gray code:** adjacent values differ by one bit (g = b XOR (b >> 1)); binary 1011 is Gray 1110. Used for position encoders and K-maps.
- **ASCII** (7-bit, 'A' = 65, '0' = 48) and **Unicode (UTF-8)**.
- **Error detection and correction:** a **parity bit** detects single-bit errors. The **Hamming (7,4) code** places parity bits p1, p2, p4 at positions 1, 2, 4 of a 7-bit word (p1 p2 d1 p4 d2 d3 d4) with p1 = d1 ⊕ d2 ⊕ d4, p2 = d1 ⊕ d3 ⊕ d4, p4 = d2 ⊕ d3 ⊕ d4. For data 1011 the codeword is **0110011**. The receiver recomputes the parities; the 3-bit syndrome is the binary position of a single-bit error (101 = bit 5). The minimum Hamming distance d detects d - 1 errors and corrects ⌊(d - 1)/2⌋ errors.
- **Floating point** (IEEE 754): sign, exponent, mantissa (single precision 1 + 8 + 23 bits).

## Chapter 2. Boolean Algebra and Logic Gates

### 2.1 Gates
- **AND** (output 1 only if all inputs 1), **OR**, **NOT**, **NAND** (NOT AND), **NOR**, **XOR** (1 if an odd number of inputs are 1), **XNOR** (equality). **Buffer** (output = input, restores signal strength).
- **Universal gates:** NAND alone (or NOR alone) can build everything: NOT: A NAND A; AND: NAND followed by NAND-as-NOT; OR: (A')(B')' by two inverters and a NAND. XOR from four NANDs.
- Typical logic families: CMOS (low static power), TTL (older). Inputs and outputs are voltage ranges: V_IL, V_IH, V_OL, V_OH define the **noise margins**.

### 2.2 Boolean algebra laws
- Identity: A + 0 = A, A·1 = A. Null: A + 1 = 1, A·0 = 0. Idempotent: A + A = A, A·A = A. Complement: A + A' = 1, A·A' = 0. Involution: (A')' = A.
- Commutative, associative, distributive (both ways: A + BC = (A + B)(A + C)).
- **Absorption:** A + AB = A, A(A + B) = A. **Combining:** AB + AB' = A. **Redundancy:** A + A'B = A + B.
- **De Morgan:** (A + B)' = A'B' and (AB)' = A' + B'. **Duality:** swap AND/OR and 0/1 to get another valid law.
- **Consensus:** AB + A'C + BC = AB + A'C.
**Examples.** AB + AB' + A'B = A + B. (A + B)(A + C) = A + BC. For F = A(B + C'), F' = A' + B'C.
Prove an identity by algebra, by a truth table, or by the duality argument.

### 2.3 Canonical forms
- **Minterm** m_i: a product containing every variable (1 for exactly one input row). **Maxterm** M_i: a sum containing every variable (0 for exactly one row). **Sum of minterms (SOP):** F = Σm(...); **product of maxterms (POS):** F = ΠM(...) over the rows where F = 0. M_i = (m_i)'.
- Example: F(A, B, C) = Σm(1, 3, 5, 6, 7) = C + AB (simplified); as POS: ΠM(0, 2, 4) = (A + C)(B + C).
- **Cost** is measured by the number of gates and gate inputs (literals). A two-level realisation is AND-OR or, using NAND-NAND (two levels of NAND gates), the equivalent form by De Morgan.

## Chapter 3. Minimisation

### 3.1 Karnaugh maps
Arrange the truth table in a grid with Gray-code ordering so that adjacent cells differ by one variable. Circle groups of 1, 2, 4, 8, ... adjacent ones (rectangles of size a power of 2, wrapping around the edges); the larger the group, the fewer the literals. Rules: cover every 1 with the fewest, largest groups; each group gives a product term in the variables that do not change in the group. Don't-cares (X) may be used in groups to enlarge them but need not be covered.
- **F(A, B, C, D) = Σm(0, 1, 2, 5, 8, 9, 10)**: B'C' + B'D' + A'C'D (3 prime implicants).
- **F = Σm(1, 3, 7, 11, 15) + d(0, 2, 5)**: A'B' + CD. POS: D(C + A') by grouping zeros.
- **F = Σm(4, 5, 6, 7, 8, 12, 13, 15)**: BD + BA' + AC'D'.
- **Prime implicants**, **essential prime implicants** (the only cover of some minterm) and **covering**: select all essential PIs first, then cover the rest.
- To obtain POS, group the zeros and complement: F' as SOP, then apply De Morgan.

### 3.2 Quine-McCluskey and software
For more than 4 or 5 variables use the **Quine-McCluskey tabulation**: list minterms by number of ones, combine pairs that differ in one bit (marking a dash), repeat; then choose a minimum cover from the prime implicant chart. Practical tools (Espresso, ABC, synthesis tools) use heuristics for large functions. Multi-level optimisation shares logic between outputs.

### 3.3 Design example: BCD to excess-3 converter
Inputs ABCD (digits 0 to 9; 10 to 15 are don't-cares), outputs w x y z of (n + 3): w = A + BC + BD; x = B'C + B'D + BC'D'; y = CD + C'D'; z = D'.

## Chapter 4. Combinational Building Blocks

### 4.1 Arithmetic circuits
- **Half adder:** S = A ⊕ B, C = AB. **Full adder:** S = A ⊕ B ⊕ Cin; Cout = AB + Cin(A ⊕ B) (carry = generate + propagate · carry-in; generate G = AB, propagate P = A ⊕ B).
- **Ripple-carry adder:** n full adders chained; delay grows linearly with n (the carry ripples). With 2 gate delays per carry stage, a 32-bit adder has about 64 gate delays on the critical path.
- **Carry-lookahead adder:** C1 = G0 + P0 C0; C2 = G1 + P1 G0 + P1 P0 C0; ... computes all carries in parallel with a few gate levels at the cost of more hardware.
- **Adder/subtractor:** XOR each B input with a control bit M and set Cin = M: M = 0 adds, M = 1 computes A + B' + 1 = A - B.
- **Comparators:** a 1-bit equality is XNOR; A > B for 2-bit numbers: A1B1' + (A1 ⊙ B1) A0B0'. **Multipliers:** shift-and-add array. **ALU:** selects among add, subtract, AND, OR, XOR, compare using a multiplexer, with status flags (zero, carry, overflow, negative).

### 4.2 Decoders, encoders and multiplexers
- **n-to-2^n decoder:** exactly one output is 1 for each input code (each output is a minterm); an enable input allows cascading (a 4-to-16 decoder from five 2-to-4 decoders). Any function of n variables can be realised with a decoder plus an OR gate.
- **Encoder:** the inverse, 2^n inputs to n outputs; a **priority encoder** handles several simultaneous inputs (the highest priority wins).
- **Multiplexer (MUX):** 2^n data inputs, n select lines, one output. Y = Σ (select minterm) · (data input). A 4:1 MUX implements any 3-variable function by connecting two variables to the select lines and using the third variable (or 0, 1) at the data inputs. **Demultiplexer:** the reverse.
- **Tri-state buffers** allow several devices to share a bus. **Seven-segment decoders** convert BCD to segment signals. **Parity generators** are XOR trees.

### 4.3 Timing and hazards
- **Propagation delay** t_pd: the time for an output to respond to an input change; the longest path is the **critical path**. Contamination delay (t_cd) is the shortest.
- **Static hazards:** a glitch when one input changes while the output should remain constant (for example F = AB + A'C with B = C = 1 as A changes). It is removed by adding the consensus term BC. **Dynamic hazards** involve multiple transitions. Glitches are harmless in purely combinational outputs but dangerous on clocks and asynchronous inputs.

## Chapter 5. Sequential Logic

### 5.1 Latches and flip-flops
Sequential circuits have **memory**: the output depends on the inputs and on the stored state.
- **SR latch** (cross-coupled NOR gates): S = 1 sets Q = 1, R = 1 resets Q = 0, S = R = 0 holds, S = R = 1 is forbidden. **Gated D latch:** transparent while the enable is high.
- **Flip-flops** change state only at a clock edge. **D flip-flop:** Q+ = D. **T flip-flop:** Q+ = T ⊕ Q (toggles when T = 1). **JK flip-flop:** Q+ = JQ' + K'Q (J = K = 0 hold, J = 1 K = 0 set, J = 0 K = 1 reset, J = K = 1 toggle). **SR flip-flop:** Q+ = S + R'Q with SR = 0.
- A master-slave or edge-triggered design avoids transparency. Flip-flops have **asynchronous preset and clear** inputs.
- **Excitation tables** give the inputs needed for a desired transition Q → Q+: D = Q+; T = Q ⊕ Q+; JK: 0→0 needs (J, K) = (0, X), 0→1 (1, X), 1→0 (X, 1), 1→1 (X, 0).

### 5.2 Timing parameters
- **Setup time** t_su: data must be stable before the clock edge; **hold time** t_h: stable after the edge; **clock-to-Q delay** t_cq.
- **Maximum clock frequency:** T_clk ≥ t_cq + t_logic(max) + t_su (+ clock skew). Example: t_cq = 0.8 ns, logic 3.2 ns, t_su = 0.5 ns: T ≥ 4.5 ns, f_max = 222 MHz.
- **Hold check:** t_cq + t_logic(min) ≥ t_h + skew. A hold violation cannot be fixed by slowing the clock (add delay instead).
- **Metastability:** an input that changes within the setup/hold window can leave the flip-flop at an intermediate voltage for an unbounded time; synchronise asynchronous inputs with two flip-flops in series. **Clock skew and jitter** reduce timing margin.

### 5.3 Registers and shift registers
A **register** is a group of D flip-flops sharing a clock (with a load enable). A **shift register** moves bits one position per clock: serial-in serial-out, serial-in parallel-out (serial to parallel conversion), parallel-in serial-out. **Ring counter:** a circular shift register with a single 1 (n states from n flip-flops); **Johnson (twisted-ring) counter:** the inverted last output feeds the first (2n states). **Linear feedback shift registers (LFSRs)** with XOR feedback generate pseudorandom sequences (up to 2^n - 1 states) used in CRC, scrambling and test patterns.

### 5.4 Counters
- **Asynchronous (ripple) counter:** each flip-flop clocks the next; simple but the delays accumulate and glitches appear in intermediate states. **Synchronous counter:** all flip-flops share one clock; next-state logic decides toggling.
- **3-bit synchronous up-counter with T flip-flops:** T0 = 1, T1 = Q0, T2 = Q0 Q1. With D flip-flops: D0 = Q0', D1 = Q1 ⊕ Q0, D2 = Q2 ⊕ Q1 Q0.
- **Modulus-N counters:** detect state N - 1 and load or clear (a mod-6 counter counts 0 to 5 by synchronous clearing at 6, or by encoding the next-state table). A mod-N counter divides the clock frequency by N. Up/down counters, BCD counters and loadable counters are standard MSI parts.

## Chapter 6. Finite State Machines

### 6.1 Models
A **finite state machine** has states, inputs, outputs, a next-state function and an output function.
- **Moore machine:** the output depends only on the current state (glitch-free, can be one clock later).
- **Mealy machine:** the output depends on the state and the current input (fewer states, but the output changes asynchronously with the input).
The representations are a **state diagram** (circles and labelled arcs), **state table** and **state assignment** (binary, one-hot, Gray).

### 6.2 Design procedure
1. Understand the specification and draw the state diagram. 2. Build the state table; minimise states (merge equivalent states). 3. Choose a state assignment and the flip-flop type. 4. Derive the next-state and output equations (K-maps using the excitation table). 5. Draw the circuit. 6. Check unused states (make them return to a safe state) and simulate.
**Example: sequence detector for 1011 (overlapping), Mealy.** States S0 (no progress), S1 ("1"), S2 ("10"), S3 ("101"). Transitions (input/output): S0: 0/0 → S0, 1/0 → S1; S1: 0/0 → S2, 1/0 → S1; S2: 0/0 → S0, 1/0 → S3; S3: 0/0 → S2 (since "1010" ends with "10"), 1/1 → S1 (detected, and the final 1 can start a new match). Input 1011011010110 gives output 0001001000010. A Moore version needs a fifth state S4 for "1011" with output 1.
**Other examples:** traffic light controller (timer plus FSM), vending machine, serial parity checker (2 states), UART receivers, bus arbiters, instruction decoders (control units).

### 6.3 Practical issues
Synchronous design: one clock, all state in flip-flops, no combinational loops. Reset (asynchronous assert, synchronous release). One-hot encoding trades flip-flops for faster logic (favoured in FPGAs). Safe handling of illegal states.

## Chapter 7. Memory and Programmable Logic

- **ROM:** an array of fixed words addressed by n inputs; a 2^n × m ROM implements m functions of n variables (a look-up table). **RAM:** SRAM (6 transistors per bit, fast, caches) and DRAM (1 transistor and a capacitor, needs refresh, main memory). Address, data and control lines (read/write enable, chip select). The memory size is 2^(address bits) words × word width: 16 address lines and 8 data lines give 64 KiB.
- **Programmable logic:** PLA (programmable AND and OR planes), PAL, CPLD and **FPGA** (an array of k-input look-up tables, flip-flops, programmable routing, block RAM and DSP slices). A k-input LUT stores 2^k bits and implements any function of k variables.
- **ASICs** versus FPGAs versus microcontrollers: cost, performance, power and flexibility trade-offs.

## Chapter 8. Hardware Description Languages

Verilog (and VHDL) describe hardware, not programs: statements run concurrently. Synthesis tools turn the description into gates. Basic Verilog:
```verilog
module full_adder(input a, b, cin, output sum, cout);
  assign sum  = a ^ b ^ cin;
  assign cout = (a & b) | (cin & (a ^ b));
endmodule

module counter3(input clk, rst, output reg [2:0] q);
  always @(posedge clk or posedge rst)
    if (rst) q <= 3'b000;
    else     q <= q + 1;
endmodule
```
- Use `assign` or `always @(*)` for combinational logic, `always @(posedge clk)` with non-blocking `<=` assignments for sequential logic. Incomplete if/case statements in combinational blocks infer unwanted latches.
- A **testbench** applies stimulus and checks outputs in simulation (for example with Icarus Verilog and GTKWave, or Vivado/Quartus). The flow is: specify, describe (RTL), simulate, synthesise, place and route, verify timing, program.

## Chapter 9. Common Mistakes Checklist
1. Forgetting that adjacent cells in K-maps wrap around the edges, or choosing groups that are not powers of 2.
2. Reading K-map groups incorrectly (mixing the variables that change with the ones that stay constant).
3. Overflow and carry confusion in two's complement arithmetic.
4. Using the wrong flip-flop excitation table, or forgetting unused states in a counter.
5. Mealy outputs glitching or being treated as Moore outputs in timing.
6. Ignoring setup and hold times; running logic faster than the critical path allows.
7. Creating latches or combinational loops accidentally in HDL.
8. Confusing blocking and non-blocking assignments in Verilog.
