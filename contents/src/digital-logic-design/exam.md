# Digital Logic Design: Final Examination

Duration: 3 hours. No calculators or notes. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** The binary number 110110 equals decimal
A) 52  B) 54  C) 56  D) 62

**2.** The hexadecimal number 2F equals decimal
A) 31  B) 45  C) 47  D) 62

**3.** 59 in BCD is
A) 0101 1001  B) 0011 1011  C) 0100 1010  D) 111011

**4.** In 8-bit two's complement, -1 is
A) 10000001  B) 11111110  C) 11111111  D) 00000001

**5.** A · A' equals
A) A  B) 1  C) 0  D) A'

**6.** A + A'B equals
A) A  B) B  C) A + B  D) AB

**7.** The output of a NOR gate with inputs 0 and 0 is
A) 0  B) 1  C) undefined  D) high impedance

**8.** For three variables ABC, the minterm m5 is
A) A'BC'  B) AB'C  C) ABC'  D) A'B'C

**9.** The minimum SOP of F = Σm(1, 3) of three variables A, B, C is
A) A'B'C + A'BC  B) A'C  C) AC  D) A'B

**10.** A 2-to-4 decoder has how many outputs?
A) 2  B) 3  C) 4  D) 8

**11.** The outputs of a full adder for inputs 1, 1, 1 are
A) sum 0, carry 1  B) sum 1, carry 1  C) sum 1, carry 0  D) sum 0, carry 0

**12.** In a carry-lookahead adder, the propagate signal P_i equals
A) A_i B_i  B) A_i ⊕ B_i  C) A_i + B_i + 1  D) C_i

**13.** A static-1 hazard in an AND-OR circuit is removed by adding
A) a delay on the clock  B) the consensus term  C) an inverter  D) another output

**14.** The forbidden input for a NOR-based SR latch is
A) S = 0, R = 0  B) S = 1, R = 0  C) S = 0, R = 1  D) S = 1, R = 1

**15.** A JK flip-flop with J = 0 and K = 1 on the clock edge
A) sets  B) resets  C) toggles  D) holds

**16.** The T input required for a transition from Q to Q+ is
A) Q AND Q+  B) Q OR Q+  C) Q ⊕ Q+  D) Q+

**17.** A 4-bit Johnson counter has how many states?
A) 4  B) 8  C) 15  D) 16

**18.** A hold-time violation is fixed by
A) lowering the clock frequency  B) adding delay on the data path  C) increasing the supply voltage  D) adding more flip-flops in series

**19.** The output of a Mealy machine depends on
A) the state only  B) the state and the present input  C) the clock only  D) the previous output only

**20.** Metastability of an asynchronous input is reduced by
A) a single flip-flop  B) a two-flip-flop synchroniser  C) a bigger gate  D) more fan-out

## Section B: Short Questions (40 marks)

**B1. (5)** Convert 13.25 and 0.8125 (decimal) to binary.

**B2. (5)** The 8-bit pattern 10110101 is a two's complement number. Find its decimal value and sign-extend it to 16 bits (give the result in hexadecimal).

**B3. (5)** Simplify F = A'BC + AB'C + ABC' + ABC using Boolean algebra and name the function.

**B4. (5)** Use a K-map to find the minimum SOP of F(A, B, C) = Σm(0, 1, 4, 5, 6).

**B5. (5)** Implement the full adder (Sum = Σm(1, 2, 4, 7), Cout = Σm(3, 5, 6, 7)) with a 3-to-8 decoder and OR gates.

**B6. (5)** A 4-bit synchronous binary counter is clocked at 1.6 MHz. Find the frequency of its MSB output. If the counter is changed to count modulo 10, find the frequency of its output Q3.

**B7. (5)** A register-to-register path has t_cq = 0.6 ns, combinational delay 2.4 ns, t_su = 0.4 ns and no skew. Find the maximum clock frequency.

**B8. (5)** A Mealy machine has two states S0 and S1. In S0: input 0 stays in S0 with output 0, input 1 goes to S1 with output 0. In S1: input 0 goes to S0 with output 0, input 1 stays in S1 with output 1. Starting in S0, give the output for the input 0110111, and describe what the machine detects.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Prime detector.** A 4-bit input ABCD (A is the MSB) represents a number 0 to 15. Design a circuit whose output F is 1 when the number is prime.
(a) Write F as Σm. [2]
(b) Find the minimum SOP using a K-map. [4]
(c) Implement it with NAND gates only (state the number of gates and levels). [2]
(d) Implement it with a 8:1 multiplexer with selects A, B, C and data inputs chosen from 0, 1, D, D'. [2]

**C2. Adder design.**
(a) Add 1011 and 0110 with a 4-bit ripple-carry adder: draw a table of A_i, B_i, carry-in, sum and carry-out for each bit position. [4]
(b) Interpret the operands as 4-bit two's complement numbers and decide whether overflow occurs, using C3 and C4. [2]
(c) Write the carry-lookahead equations for C1, C2 and C3 and explain the delay advantage over ripple carry for 16 bits. [4]

**C3. Counter design.** Design a 2-bit synchronous counter with the cyclic sequence 00 → 11 → 01 → 10 → 00.
(a) Write the state table. [2]
(b) Derive the D inputs for D flip-flops. [3]
(c) Derive the T inputs for T flip-flops. [3]
(d) Is the counter self-starting? Draw the state sequence of an extra state if one exists. [2]

**C4. FSM design.** A vending machine sells an item for 15 cents. It accepts nickels (N = 5 cents) and dimes (D = 10 cents); inputs N and D are never active together. When the total reaches 15 cents or more it dispenses (Z = 1), gives no change, and then resets.
(a) Draw a Moore state diagram. [3]
(b) Write the state table and encode the states S0, S5, S10, S15 as 00, 01, 10, 11. [3]
(c) Derive the next-state equations Q1+ and Q0+ and the output Z. [3]
(d) State how many flip-flops a one-hot encoding would need. [1]

**C5. Memory and programmable logic.**
(a) How many address lines and what total capacity (in bits) has a 4K × 8 ROM? [2]
(b) A 4-bit adder (two 4-bit inputs and a carry-in, five outputs) is implemented in a ROM. Find the ROM size and compare with the number of 4-input LUTs needed for the same function in an FPGA (each 4-LUT stores 16 bits and implements one function of four variables). [4]
(c) Explain why a LUT can implement any function of its inputs, and implement F = A ⊕ B ⊕ C in a 3-input LUT by listing the 8 stored bits. [2]
(d) Write a Verilog module for a 2-bit synchronous counter with enable and synchronous reset. [2]

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **C** · 3 **A** · 4 **C** · 5 **C** · 6 **C** · 7 **B** · 8 **B** · 9 **B** · 10 **C** · 11 **B** · 12 **B** · 13 **B** · 14 **D** · 15 **B** · 16 **C** · 17 **B** · 18 **B** · 19 **B** · 20 **B**

Brief reasons: 1. 32 + 16 + 4 + 2. 2. 2·16 + 15. 3. 5 = 0101, 9 = 1001. 4. All ones. 8. 101. 9. A'B'C + A'BC = A'C. 11. 1 + 1 + 1 = 11. 12. Propagate = XOR. 17. 2n states. 18. Delay, not a slower clock. 20. Two-flop synchroniser.

## Section B solutions

**B1.** Step 1: 13 = 8 + 4 + 1 = 1101 and 0.25 = 0.01, so 13.25 = **1101.01**.
Step 2: 0.8125: × 2 = 1.625 (1); 0.625 × 2 = 1.25 (1); 0.25 × 2 = 0.5 (0); 0.5 × 2 = 1.0 (1); the fraction is now 0.
Step 3: reading the bits in order gives **0.1101** (check: 1/2 + 1/4 + 1/16 = 0.8125).

**B2.** Step 1: 10110101 has sign bit 1, so the number is negative: invert to 01001010 and add 1: 01001011 = 64 + 8 + 2 + 1 = 75, so the value is **-75** (check: 181 - 256 = -75).
Step 2: sign extension copies the sign bit eight times: 1111 1111 1011 0101 = **0xFFB5**.

**B3.** F = A'BC + AB'C + ABC' + ABC. Add the repeated term ABC twice (idempotence) and group: ABC + A'BC = BC; ABC + AB'C = AC; ABC + ABC' = AB. **F = AB + AC + BC**, the **majority function** (1 when at least two inputs are 1).

**B4.** Cells 0 (000), 1 (001), 4 (100), 5 (101) form a group of four: **B'**. Cell 6 (110) pairs with cell 4 (100): **AC'**. **F = B' + AC'.**

**B5.** Decode the 3 inputs A, B, Cin to m0 to m7. **Sum = OR(m1, m2, m4, m7); Cout = OR(m3, m5, m6, m7).** One decoder and two 4-input OR gates.

**B6.** Step 1: the MSB of a 4-bit binary counter is the clock divided by 2^4 = 16: 1.6 MHz/16 = **100 kHz**.
Step 2: a modulo-10 counter has a period of 10 clocks, and Q3 is high for 2 of the 10 states (8 and 9): f = 1.6 MHz/10 = **160 kHz** (with a 20 percent duty cycle).

**B7.** Step 1: T_min = t_cq + t_logic + t_su = 0.6 + 2.4 + 0.4 = 3.4 ns.
Step 2: f_max = 1/3.4 ns = **294 MHz**.

**B8.** Starting in S0, input 0 1 1 0 1 1 1: 0 → S0 (out 0); 1 → S1 (0); 1 → S1 (1); 0 → S0 (0); 1 → S1 (0); 1 → S1 (1); 1 → S1 (1). Output: **0 0 1 0 0 1 1**. The machine detects **two (or more) consecutive 1s** (output 1 on every 1 that follows another 1).

## Section C solutions

**C1.**
(a) Primes below 16: 2, 3, 5, 7, 11, 13. **F = Σm(2, 3, 5, 7, 11, 13).**
(b) Step 1: K-map (rows AB = 00, 01, 11, 10; columns CD = 00, 01, 11, 10): minterms 2 and 3 are in row 00; 5 and 7 in row 01; 13 in row 11; 11 in row 10.
Step 2: Groups: minterms 2, 3 (**A'B'C**); 5, 13 (**BC'D**); 3, 7 (**A'CD**); 3, 11 (**B'CD**).
Step 3: **F = A'B'C + BC'D + A'CD + B'CD.** (This is minimal with 4 product terms.) Check: m2 = 0010: A'B'C = 1 ✓; m7 = 0111: A'CD = 1 ✓; m11 = 1011: B'CD = 1 ✓; m13 = 1101: BC'D = 1 ✓.
(c) NAND-NAND: four 3-input NAND gates (one per product) feeding one 4-input NAND, plus inverters for the complemented literals (A', B', C'): about **5 gates plus 3 inverters, 2 levels** (3 with the input inverters).
(d) Using A, B, C as the select lines (index ABC), the data inputs are the function of D for each pair of minterms: ABC = 000 (m0, m1): F = 0; 001 (m2, m3): 1; 010 (m4, m5): D; 011 (m6, m7): D; 100 (m8, m9): 0; 101 (m10, m11): m10 is not prime and m11 is, so F = D; 110 (m12, m13): D; 111 (m14, m15): 0. So **D0 = 0, D1 = 1, D2 = D, D3 = D, D4 = 0, D5 = D, D6 = D, D7 = 0**.

**C2.**
(a) A = 1011, B = 0110, C0 = 0:
- Bit 0: A = 1, B = 0, Cin = 0: Sum = 1, Cout = 0.
- Bit 1: A = 1, B = 1, Cin = 0: Sum = 0, Cout = 1.
- Bit 2: A = 0, B = 1, Cin = 1: Sum = 0, Cout = 1.
- Bit 3: A = 1, B = 0, Cin = 1: Sum = 0, Cout = 1.
Result: Sum = **0001** with the final carry C4 = 1, that is 10001 = 17 (11 + 6 = 17 ✓).
(b) As two's complement: 1011 = -5 and 0110 = +6, so the sum is +1 = 0001. C3 (carry into the sign bit) = 1 and C4 (carry out) = 1; **V = C3 ⊕ C4 = 0, no overflow** (operands of different signs cannot overflow).
(c) Step 1: G_i = A_i B_i, P_i = A_i ⊕ B_i.
Step 2: **C1 = G0 + P0 C0; C2 = G1 + P1 G0 + P1 P0 C0; C3 = G2 + P2 G1 + P2 P1 G0 + P2 P1 P0 C0.** Every carry is a two-level AND-OR function of the inputs, so all carries are available after about 2 to 3 gate delays regardless of n (in practice with groups of 4 bits and a second-level lookahead).
Step 3: A 16-bit ripple-carry adder needs about 2 × 16 = 32 gate delays on the carry path, whereas a (two-level) carry-lookahead adder needs only around 8 to 10.

**C3.**
(a) Present (Q1 Q0) → next: 00 → 11; 11 → 01; 01 → 10; 10 → 00.
(b) D1 (next Q1): 00 → 1, 01 → 1, 10 → 0, 11 → 0: **D1 = Q1'**. D0 (next Q0): 00 → 1, 01 → 0, 10 → 0, 11 → 1: **D0 = Q1 ⊙ Q0 = (Q1 ⊕ Q0)'**.
(c) T = Q ⊕ Q+: T1: 00 (0 → 1) = 1, 01 (0 → 1) = 1, 10 (1 → 0) = 1, 11 (1 → 0) = 1, so **T1 = 1**. T0: 00 (0 → 1) = 1, 01 (1 → 0) = 1, 10 (0 → 0) = 0, 11 (1 → 1) = 0: **T0 = Q1'**.
(d) All four states of the two flip-flops are used in the cycle, so there are **no unused states and the counter is self-starting**: it enters the cycle from any power-up state.

**C4.**
(a) States: S0 (0 cents, Z = 0), S5 (5 cents, Z = 0), S10 (10 cents, Z = 0), S15 (15 or more, Z = 1). Transitions: S0 --N--> S5; S0 --D--> S10; S5 --N--> S10; S5 --D--> S15; S10 --N or D--> S15; S15 --any--> S0; with no coin a state stays put (S15 resets to S0 in the next cycle).
(b) State table (Q1 Q0; inputs N D): S0 (00): none 00, N 01, D 10. S5 (01): none 01, N 10, D 11. S10 (10): none 10, N 11, D 11. S15 (11): any 00. (N = D = 1 is a don't-care.) Z = 1 in S15.
(c) Karnaugh map reduction with the don't-care N D = 11 gives: **Q1+ = D Q1' + Q1 Q0' + N Q0 Q1'** and **Q0+ = N Q0' + D Q1 Q0' + Q0 N' Q1'**, and **Z = Q1 Q0**. Check: from S5 (01) with D: Q1+ = 1·1 = 1, Q0+ = Q0 N' Q1' = 1: next 11 ✓. From S10 (10) with N: Q1+ = Q1 Q0' = 1, Q0+ = N Q0' = 1: 11 ✓. From S15 (11): Q1+ = 0 + 0 + 0 = 0 and Q0+ = 0 + 0 + 0 = 0: 00 ✓.
(d) One-hot encoding uses **4 flip-flops** (one per state).

**C5.**
(a) 4K = 2^12 words, so **12 address lines**; capacity = 4096 × 8 = **32,768 bits (4 KiB)**.
(b) Nine inputs (A3..A0, B3..B0, Cin) give 2^9 = 512 addresses and five outputs: a **512 × 5 ROM = 2560 bits**. With 4-LUTs, each of the 5 outputs depends on up to 9 inputs, so a direct LUT implementation is not possible, but the adder is built as a chain of four full adders, each full adder being 2 functions of 3 inputs (sum and carry): **8 four-input LUTs**, 128 bits in total (also carry chains in hardware). Structured logic is far cheaper than the monolithic table.
(c) A k-input LUT stores the output value for each of the 2^k input combinations (a truth table in SRAM) and the inputs act as the address of a multiplexer tree, so any function of k variables can be stored. For A ⊕ B ⊕ C the 8 bits (address ABC = 000 to 111) are **0, 1, 1, 0, 1, 0, 0, 1**.
(d)
```verilog
module counter2(input clk, rst, en, output reg [1:0] q);
  always @(posedge clk)
    if (rst)     q <= 2'b00;
    else if (en) q <= q + 2'b01;
endmodule
```
