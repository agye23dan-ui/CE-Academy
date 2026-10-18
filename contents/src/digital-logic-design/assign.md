# Digital Logic Design: Assignments with Worked Solutions

Show all working. Draw logic diagrams neatly, label every input and output and state your conventions (for example "Q is the output of the flip-flop; the clock edge is rising"). The truth tables, K-map results and simulation outputs below were generated and verified by computer.

# Assignment 1: Number Systems, Codes and Boolean Algebra (60 marks)

## Questions

**Q1. Conversions (10 marks)** (a) Convert 215 (decimal) to binary, octal and hexadecimal [3]. (b) Convert 0x3F2 and 101101.011 (binary) to decimal [3]. (c) Convert 0.6875 to binary [2]. (d) Write 479 in BCD and in excess-3 [2].

**Q2. Signed arithmetic (10 marks)** Use 8-bit two's complement. (a) Represent -45 and +27 [2]. (b) Compute 27 + (-45) and 52 - 75, giving the binary results and decimal values [4]. (c) Compute 100 + 50 and 127 + 1 and state whether overflow occurs, and why [4].

**Q3. Boolean algebra (12 marks)** Simplify, naming the laws: (a) AB + AB' + A'B [2]; (b) (A + B)(A + C) [2]; (c) A + A'B [2]; (d) AB + A'C + BC [2]. (e) Find the complement of F = A(B + C') [2]. (f) Prove that A ⊕ B = A'B + AB' = (A + B)(AB)' [2].

**Q4. Canonical forms (8 marks)** F(A, B, C) is 1 for the input rows 1, 3, 5, 6, 7 (row number = ABC read as binary). (a) Write the truth table [2]. (b) Write F as Σm and as ΠM [2]. (c) Simplify F to a minimum SOP and a minimum POS [4].

**Q5. Universal gates (8 marks)** (a) Build NOT, AND and OR using only NAND gates [3]. (b) Build XOR using four NAND gates [2]. (c) Implement F = AB + CD using only NAND gates and explain why this works [3].

**Q6. Codes (12 marks)** (a) Convert binary 1011 to Gray code and Gray 1110 back to binary [2]. (b) Encode data 1011 in Hamming (7,4), using the bit layout p1 p2 d1 p4 d2 d3 d4 [4]. (c) The received word is 0110111 (one bit flipped). Find the error position and the corrected data [4]. (d) How many errors can a code of minimum distance 3 detect and correct? [2]

## Solutions and Marking Guide

**Q1.**
(a) Step 1: repeated division by 2: 215 ÷ 2 = 107 r 1; 107 ÷ 2 = 53 r 1; 53 ÷ 2 = 26 r 1; 26 ÷ 2 = 13 r 0; 13 ÷ 2 = 6 r 1; 6 ÷ 2 = 3 r 0; 3 ÷ 2 = 1 r 1; 1 ÷ 2 = 0 r 1. Reading the remainders upward gives **11010111**.
Step 2: check by weights: 128 + 64 + 16 + 4 + 2 + 1 = 215 ✓.
Step 3: octal: group in threes from the right (011 010 111) = 3, 2, 7: **327**.
Step 4: hex: group in fours (1101 0111) = D, 7: **D7** (check: 13 × 16 + 7 = 215).
(b) Step 1: 0x3F2 = 3 × 256 + 15 × 16 + 2 = 768 + 240 + 2 = **1010**.
Step 2: 101101.011: integer part 32 + 8 + 4 + 1 = 45; fraction part 0 × 1/2 + 1 × 1/4 + 1 × 1/8 = 0.25 + 0.125 = 0.375; total **45.375**.
(c) Multiply the fraction by 2 repeatedly and record the integer parts: 0.6875 × 2 = 1.375 (1); 0.375 × 2 = 0.75 (0); 0.75 × 2 = 1.5 (1); 0.5 × 2 = 1.0 (1), and the fraction is now 0. Reading the bits in order gives **0.1011** (check: 1/2 + 1/8 + 1/16 = 0.6875).
(d) Step 1: BCD codes each digit in 4 bits: 4 = 0100, 7 = 0111, 9 = 1001: **0100 0111 1001**.
Step 2: excess-3 adds 3 to each digit before coding: 4 + 3 = 7 (0111), 7 + 3 = 10 (1010), 9 + 3 = 12 (1100): **0111 1010 1100**.

**Q2.**
(a) Step 1: +27 = 16 + 8 + 2 + 1 = 00011011.
Step 2: 45 = 32 + 8 + 4 + 1 = 00101101; invert to 11010010 and add 1: -45 = **11010011**.
(b) Step 1: 27 + (-45): 00011011 + 11010011 = **11101110** (no carry out of the sign position matters in two's complement).
Step 2: the sign bit is 1, so negate to read it: invert 00010001 and add 1 = 00010010 = 18; the value is **-18** (check: 27 - 45 = -18 ✓).
Step 3: 52 - 75 = 52 + (-75): 52 = 00110100; 75 = 01001011, invert to 10110100 and add 1: -75 = 10110101.
Step 4: 00110100 + 10110101 = **11101001**; negate: 00010110 + 1 = 00010111 = 23, so the value is **-23** ✓.
(c) Step 1: 100 + 50: 01100100 + 00110010 = **10010110**; the sign bit is 1, so it reads as -106: **overflow** (two positives gave a negative; the true sum 150 exceeds 127).
Step 2: 127 + 1 = 01111111 + 00000001 = 10000000 = -128: **overflow**.
Rule: overflow occurs when both operands have the same sign and the result has a different sign (equivalently, the carry into the sign bit differs from the carry out).

**Q3.**
(a) AB + AB' + A'B = A(B + B') + A'B = A + A'B = **A + B** (complement then redundancy laws).
(b) (A + B)(A + C) = A + BC (distributive law). Check: AA + AC + AB + BC = A + AC + AB + BC = A + BC (absorption).
(c) A + A'B = (A + A')(A + B) = **A + B**.
(d) AB + A'C + BC = AB + A'C + BC(A + A') = AB + A'C + ABC + A'BC = **AB + A'C** (consensus theorem).
(e) F' = A' + (B + C')' = **A' + B'C** (De Morgan).
(f) A'B + AB' is the XOR by definition. (A + B)(AB)' = (A + B)(A' + B') = AA' + AB' + A'B + BB' = AB' + A'B ✓.

**Q4.**
(a) F = 1 for rows 1 (001), 3 (011), 5 (101), 6 (110), 7 (111); F = 0 for rows 0 (000), 2 (010) and 4 (100).
(b) **F = Σm(1, 3, 5, 6, 7) = A'B'C + A'BC + AB'C + ABC' + ABC**. **F = ΠM(0, 2, 4) = (A + B + C)(A + B' + C)(A' + B + C)**.
(c) Step 1: K-map: the column C = 1 (minterms 1, 3, 5, 7) is a group of four, giving **C**.
Step 2: minterm 6 (110) is not covered; it pairs with 7 (111) to give AB.
Step 3: **SOP: F = C + AB.**
Step 4: POS: group the zeros 0, 2 (A + C) and 0, 4 (B + C): **F = (A + C)(B + C)** (which equals C + AB by the distributive law).

**Q5.**
(a) NOT: tie both inputs together, A NAND A = A'. AND: (A NAND B) followed by a NAND-inverter. OR: A' NAND B' = A + B (each input inverted first).
(b) With N1 = A NAND B: N2 = A NAND N1, N3 = B NAND N1, XOR = N2 NAND N3 (four gates in total).
(c) F = AB + CD = ((AB)'(CD)')' (De Morgan): compute (AB)' = A NAND B and (CD)' = C NAND D, then NAND the two results. A two-level AND-OR circuit becomes a two-level NAND-NAND circuit with the same function.

**Q6.**
(a) Step 1: Gray g = b XOR (b >> 1): binary 1011 → the first bit stays 1; 1 ⊕ 0 = 1; 0 ⊕ 1 = 1; 1 ⊕ 1 = 0 → **1110**.
Step 2: Gray to binary: the first bit stays 1; 1 ⊕ 1 = 0; 0 ⊕ 1 = 1; 1 ⊕ 0 = 1 → **1011**.
(b) d1 d2 d3 d4 = 1 0 1 1. p1 = d1⊕d2⊕d4 = 1⊕0⊕1 = 0; p2 = d1⊕d3⊕d4 = 1⊕1⊕1 = 1; p4 = d2⊕d3⊕d4 = 0⊕1⊕1 = 0. Codeword (p1 p2 d1 p4 d2 d3 d4) = **0 1 1 0 0 1 1**.
(c) Step 1: Received 0110111 = p1 0, p2 1, d1 1, p4 0, d2 1, d3 1, d4 1.
Step 2: Syndrome bits: s1 = p1⊕d1⊕d2⊕d4 = 0⊕1⊕1⊕1 = 1; s2 = p2⊕d1⊕d3⊕d4 = 1⊕1⊕1⊕1 = 0; s4 = p4⊕d2⊕d3⊕d4 = 0⊕1⊕1⊕1 = 1.
Step 3: The syndrome (s4 s2 s1) = 101 = 5, so **bit 5 (d2) is wrong**: flip it to 0, giving codeword 0110011 and data **1011**.
(d) Minimum distance 3 detects up to **2** errors and corrects **1** (⌊(3 - 1)/2⌋).

---

# Assignment 2: Combinational Logic Design (70 marks)

## Questions

**Q1. K-maps (10 marks)** F(A, B, C, D) = Σm(0, 1, 2, 5, 8, 9, 10). (a) Draw the K-map [2]. (b) Find the minimum SOP [4]. (c) Find the minimum POS [4].

**Q2. Don't-cares (8 marks)** F(A, B, C, D) = Σm(1, 3, 7, 11, 15) + d(0, 2, 5). Find the minimum SOP and minimum POS, and implement the SOP with NAND gates only.

**Q3. Code converter (8 marks)** Design a BCD-to-excess-3 converter (inputs ABCD for digits 0 to 9; codes 10 to 15 are don't-cares). Derive the minimum SOP for the outputs w, x, y, z, check the result for the input 6, and estimate the gate count.

**Q4. Adders (12 marks)** (a) Derive the Boolean equations of a full adder and draw it from two half adders and an OR gate [4]. (b) A ripple-carry adder uses 32 full adders; each carry stage has 2 gate delays of 0.5 ns. Estimate the time to produce the final carry [2]. (c) Derive the carry-lookahead equations for C1, C2, C3 using generate and propagate signals [4]. (d) Add the 4-bit numbers 0111 + 0101 in two's complement and decide whether overflow occurs [2].

**Q5. Multiplexers and decoders (10 marks)** (a) Implement F(A, B, C) = Σm(1, 2, 4, 7) with a 4:1 multiplexer using A and B as the select lines [4]. (b) Implement the same function with a 3-to-8 decoder and one OR gate [3]. (c) How many 2-to-4 decoders with enable are needed to build a 4-to-16 decoder? [3]

**Q6. Comparator (8 marks)** Design a 2-bit magnitude comparator with inputs A1A0 and B1B0 and outputs G (A > B), E (A = B) and L (A < B). Give the equations for G and E and the number of gates.

**Q7. Hazards (6 marks)** F = AB + A'C. (a) Show that a static-1 hazard occurs when B = C = 1 and A changes [3]. (b) Add a term to remove it and explain [3].

**Q8. Adder/subtractor (8 marks)** Design a 4-bit adder/subtractor with a control input M (M = 0 add, M = 1 subtract) and an overflow flag. Explain each part and compute 0101 - 0111 (5 - 7).

## Solutions and Marking Guide

**Q1.**
(a) With rows AB (00, 01, 11, 10) and columns CD (00, 01, 11, 10):
- AB = 00: 1 1 0 1 (minterms 0, 1, 2 are 1; 3 is 0)
- AB = 01: 0 1 0 0 (minterm 5 is 1)
- AB = 11: 0 0 0 0
- AB = 10: 1 1 0 1 (minterms 8, 9, 10)
(b) Step 1: minterms 0, 1, 8, 9 (the left two columns of rows AB = 00 and 10; B = 0 and C = 0) give **B'C'**.
Step 2: minterms 0, 2, 8, 10 (the four corners; B = 0 and D = 0) give **B'D'**.
Step 3: minterm 5 (0101) is covered only by pairing with minterm 1 (0001): **A'C'D**.
Step 4: **F = B'C' + B'D' + A'C'D.**
(c) Step 1: the zeros are minterms 3, 4, 6, 7, 11, 12, 13, 14, 15.
Step 2: 3, 7, 11, 15 (C = 1 and D = 1) give CD, so the sum term (C' + D').
Step 3: 4, 6, 12, 14 (B = 1 and D = 0) give BD', so (B' + D).
Step 4: 12, 13, 14, 15 (A = 1 and B = 1) give AB, so (A' + B').
Step 5: **F = (B' + D)(A' + B')(C' + D')**. Check minterm 5 (ABCD = 0101): B' + D = 0 + 1 = 1; A' + B' = 1 + 0 = 1; C' + D' = 1 + 0 = 1: F = 1 ✓.

**Q2.**
Step 1: treat the don't-cares as 1 where they enlarge groups: minterms 0, 1, 2, 3 (A'B') form a group of four using the don't-cares 0 and 2.
Step 2: minterms 3, 7, 11, 15 form CD.
Step 3: **SOP: F = A'B' + CD.**
Step 4: POS from the zeros 4, 6, 8, 9, 10, 12, 13, 14: **F = D(C + A')**.
Step 5: NAND-NAND implementation: F = A'B' + CD = [ (A'B')' · (CD)' ]' = NAND( NAND(A', B'), NAND(C, D) ), where A' = NAND(A, A) and B' = NAND(B, B).
Step 6: total **5 NAND gates** (2 inverters and 3 two-input gates).

**Q3.**
Step 1: the outputs for the code of n + 3: w = Σm(5, 6, 7, 8, 9) with d(10-15); x = Σm(1, 2, 3, 4, 9); y = Σm(0, 3, 4, 7, 8); z = Σm(0, 2, 4, 6, 8).
Step 2: minimum SOPs (with the don't-cares): **w = A + BC + BD**, **x = B'C + B'D + BC'D'**, **y = CD + C'D'**, **z = D'**.
Step 3: check the input 6 (ABCD = 0110): w = 0 + 1·1 + 1·0 = 1; x = B'C (0) + B'D (0) + BC'D' (1·0·1 = 0) = 0; y = CD (1·0 = 0) + C'D' (0·1 = 0) = 0; z = D' = 1. The result wxyz = 1001 = 9 = 6 + 3 ✓.
Step 4: gate count (shared inverters): about 10 gates.

**Q4.**
(a) S = A ⊕ B ⊕ Cin; Cout = AB + Cin(A ⊕ B). Circuit: half adder 1 gives S1 = A ⊕ B and C1 = AB; half adder 2 adds Cin to S1 giving S = S1 ⊕ Cin and C2 = S1·Cin; Cout = C1 + C2.
(b) Step 1: each carry stage has 2 gate delays × 0.5 ns = 1.0 ns.
Step 2: 32 stages × 1.0 ns = **32 ns** for the carry to reach the end (plus the first sum delay).
Step 3: this limits a purely ripple adder to about 1/32 ns ≈ 30 MHz.
(c) Define G_i = A_i B_i and P_i = A_i ⊕ B_i. **C1 = G0 + P0 C0; C2 = G1 + P1 G0 + P1 P0 C0; C3 = G2 + P2 G1 + P2 P1 G0 + P2 P1 P0 C0.** All carries depend only on the inputs and C0, so they are computed in parallel in two gate levels (AND then OR); S_i = P_i ⊕ C_i.
(d) Step 1: 0111 + 0101 = 1100 (7 + 5).
Step 2: in 4-bit two's complement 1100 is -4, but the true sum 12 exceeds 7: **overflow** (both operands positive, result negative; the carry into the sign bit is 1 and the carry out is 0).

**Q5.**
(a) F = A ⊕ B ⊕ C. With A, B as selects: AB = 00: F = C; AB = 01: F = C'; AB = 10: F = C'; AB = 11: F = C. So D0 = C, D1 = C', D2 = C', D3 = C (one inverter).
(b) The 3-to-8 decoder gives minterm outputs m0 to m7; connect m1, m2, m4, m7 to a 4-input OR gate.
(c) A 4-to-16 decoder needs 16 outputs: four 2-to-4 decoders for the outputs plus one 2-to-4 decoder to drive their enables: **5 decoders**.

**Q6.** Step 1: G = A1B1' + (A1 ⊙ B1) A0B0', which a K-map reduces to **G = A1B1' + A1A0B0' + A0B1'B0'** (three product terms).
Step 2: E = (A1 ⊙ B1)(A0 ⊙ B0) = (A1 ⊕ B1)'(A0 ⊕ B0)' (two XNOR gates and an AND).
Step 3: L = (G + E)'. Roughly 11 gates with sharing.

**Q7.**
(a) With B = C = 1, F = A + A' = 1 in both steady states. When A switches from 1 to 0, the AB term turns off through its AND gate while the A'C term turns on only after the inverter delay and the AND delay. During this short window both terms are 0 and the output dips to 0 (a glitch).
(b) Add the consensus term **BC**: F = AB + A'C + BC. When B = C = 1, the BC term holds the output at 1 regardless of A. The logic function is unchanged (consensus theorem), but the hazard is removed (at the cost of one more gate).

**Q8.**
Step 1: use four XOR gates: B_i XOR M feed the adder's B inputs, and M also feeds C0.
Step 2: M = 0 gives A + B; M = 1 gives A + B' + 1 = A - B.
Step 3: the overflow flag is **V = C4 ⊕ C3** (carry out of and into the sign bit).
Step 4: compute 0101 - 0111 (M = 1): B' = 1000, so 0101 + 1000 + 1 = 1110 = -2 (5 - 7 = -2 ✓).
Step 5: C3 = 0 and C4 = 0, so V = 0: no overflow.

---

# Assignment 3: Sequential Logic and State Machines (80 marks)

## Questions

**Q1. Flip-flops (10 marks)** (a) Write the characteristic equation and excitation table of the D, T and JK flip-flops [4]. (b) A JK flip-flop starts at Q = 0 with J, K sequence (J,K) = (1,0), (0,0), (1,1), (0,1), (1,1) on successive rising clock edges. Give Q after each edge [3]. (c) Explain how to build a T flip-flop from a D flip-flop and a D flip-flop from a JK flip-flop [3].

**Q2. Binary counters (10 marks)** (a) Derive T inputs for a 3-bit synchronous up-counter built from T flip-flops, and the D inputs if D flip-flops are used [5]. (b) What is the frequency at each output if the clock is 8 kHz? [2] (c) Why is a ripple counter slower and glitchier? [3]

**Q3. Mod-6 counter (12 marks)** Design a synchronous counter that counts 0, 1, 2, 3, 4, 5 and repeats, using D flip-flops. (a) Draw the state table [3]. (b) Derive minimum equations for D2, D1, D0 using the unused states 6 and 7 as don't-cares [5]. (c) Check what happens if the counter powers up in state 6 or 7 [2]. (d) What is the output frequency of the MSB if the clock is 60 kHz? [2]

**Q4. Registers (10 marks)** (a) A 4-bit serial-in shift register holds 0000. Show its contents after each clock for the serial input stream 1, 0, 1, 1 [2]. (b) Show the state sequence of a 4-bit ring counter initialised to 1000 and of a 3-bit Johnson counter initialised to 000 [4]. (c) A 3-bit LFSR uses the feedback x^3 + x^2 + 1 (new bit = Q2 ⊕ Q1, shifted into Q0). Starting from 001, list the states until they repeat [4].

**Q5. Finite state machines (16 marks)** (a) Draw the state diagram and state table of a Mealy sequence detector that outputs 1 when the last four inputs are 1011 (overlapping allowed) [6]. (b) Give the output for the input 1011011010110 [3]. (c) Describe how the Moore version differs and its state count [3]. (d) Assign states in binary and write the next-state equations (for two D flip-flops) for the Mealy machine [4].

**Q6. Timing (12 marks)** A synchronous circuit has flip-flops with t_cq(max) = 0.8 ns, t_cq(min) = 0.4 ns, t_su = 0.5 ns, t_h = 0.3 ns and clock skew 0.2 ns. (a) The longest combinational path is 3.2 ns. Find the minimum clock period and the maximum frequency [3]. (b) The shortest path is 0.05 ns. Is the hold time satisfied? If not, how much delay must be added? [4] (c) If the long path is split into two equal stages by an additional register (pipelining), find the new maximum frequency, the latency and the throughput improvement [5].

**Q7. Verilog (10 marks)** (a) Write a Verilog module for the 3-bit synchronous counter with asynchronous reset and enable [4]. (b) Write a Verilog module for a 4:1 multiplexer using a case statement [3]. (c) Explain the difference between blocking (=) and non-blocking (<=) assignments and give a rule of thumb [3].

## Solutions and Marking Guide

**Q1.**
(a) **D:** Q+ = D; excitation D = Q+. **T:** Q+ = T ⊕ Q; excitation T = Q ⊕ Q+. **JK:** Q+ = JQ' + K'Q; excitation: 0→0: (J, K) = (0, X); 0→1: (1, X); 1→0: (X, 1); 1→1: (X, 0).
(b) Start Q = 0. (1,0) sets: **Q = 1**. (0,0) holds: **Q = 1**. (1,1) toggles: **Q = 0**. (0,1) resets: **Q = 0**. (1,1) toggles: **Q = 1**.
(c) **T from D:** D = T ⊕ Q (an XOR gate feeding D). **D from JK:** J = D, K = D' (an inverter), since Q+ = DQ' + DQ = D.

**Q2.**
(a) A 3-bit up-counter toggles bit 0 every clock, bit 1 when Q0 = 1, bit 2 when Q1 Q0 = 1. **T0 = 1, T1 = Q0, T2 = Q1 Q0.** With D flip-flops D = Q ⊕ T: **D0 = Q0', D1 = Q1 ⊕ Q0, D2 = Q2 ⊕ (Q1 Q0)**.
(b) Each bit halves the frequency: Q0 = **4 kHz**, Q1 = **2 kHz**, Q2 = **1 kHz**.
(c) In a ripple counter the output of one flip-flop clocks the next, so the delays accumulate (n · t_cq for n bits) and during transitions the outputs pass through incorrect intermediate values (for example 011 → 010 → 000 → 100), which produce glitches when decoded. A synchronous counter changes all bits at the same clock edge.

**Q3.**
(a)
Present (Q2 Q1 Q0) → Next: 000 → 001; 001 → 010; 010 → 011; 011 → 100; 100 → 101; 101 → 000; 110 and 111 unused (don't-care).
(b) K-map results with don't-cares at 110 and 111: **D2 = Q1 Q0 + Q2 Q0'**; **D1 = Q1 Q0' + Q2' Q1' Q0**; **D0 = Q0'**. (Check state 101 → D2 = 0 + 1·0 = 0, D1 = 0 + 0 = 0, D0 = 0, so next 000 ✓; state 011 → D2 = 1, D1 = 0 + 0 = 0, D0 = 0: next 100 ✓.)
(c) Step 1: State 110 (Q2 Q1 Q0 = 110): D2 = 0 + 1·1 = 1, D1 = 1·1 + 0 = 1, D0 = 1: next state **111**.
Step 2: State 111: D2 = 1·1 + 1·0 = 1, D1 = 1·0 + 0 = 0, D0 = 0: next **100**, which is a valid state.
Step 3: So it **self-corrects within two clocks** (110 → 111 → 100).
Step 4: Always check unused states.
(d) The MSB Q2 is high for states 4 and 5 only (2 of 6 clocks) over a period of 6 clocks, so its frequency is 60 kHz/6 = **10 kHz** (duty cycle 1/3, not 50 percent).

**Q4.**
(a) Shifting in from the left (the new bit enters Q0): after the 1st clock 0001; 2nd (input 0): 0010; 3rd (input 1): 0101; 4th (input 1): **1011**.
(b) **Ring counter:** 1000 → 0100 → 0010 → 0001 → 1000 (period 4). **Johnson counter (3 bits):** 000 → 001 → 011 → 111 → 110 → 100 → 000 (period 6 = 2n).
(c) Q2 Q1 Q0 = 001: new bit = 0 ⊕ 0 = 0, so 010; then new bit = 0 ⊕ 1 = 1, so 101; then 1 ⊕ 0 = 1, so 011; then 0 ⊕ 1 = 1, so 111; then 1 ⊕ 1 = 0, so 110; then 1 ⊕ 1 = 0, so 100; then 1 ⊕ 0 = 1, so 001: repeated. **Sequence: 001, 010, 101, 011, 111, 110, 100 (period 7 = 2^3 - 1)**; the all-zeros state is the lock-up state.

**Q5.**
(a) Step 1: States: S0 (no progress), S1 (seen 1), S2 (seen 10), S3 (seen 101).
Step 2: Transitions (input/output): S0: 0/0 → S0; 1/0 → S1.
Step 3: S1: 0/0 → S2; 1/0 → S1.
Step 4: S2: 0/0 → S0; 1/0 → S3.
Step 5: S3: 0/0 → S2 (the last two bits "10" can start a new match); 1/1 → S1 (output 1 on detecting 1011, and the final 1 begins a new match).
State table (Present state, input 0 → next/out, input 1 → next/out): S0: S0/0, S1/0; S1: S2/0, S1/0; S2: S0/0, S3/0; S3: S2/0, S1/1.
(b) Input 1 0 1 1 0 1 1 0 1 0 1 1 0 gives the output **0 0 0 1 0 0 1 0 0 0 0 1 0**: detections after the 4th input (1011), the 7th (the overlapping 1011 formed by bits 4 to 7: 1,0,1,1) and the 12th.
(c) A Moore machine adds a fifth state S4 ("1011 seen") whose output is 1; the output depends only on the state, so it is asserted in the cycle after the final 1 is received (glitch-free); the transitions out of S4 are 0 → S2 and 1 → S1. **5 states**, needing 3 flip-flops (or one-hot).
(d) Step 1: Encode S0 = 00, S1 = 01, S2 = 10, S3 = 11 (Q1 Q0) with input X. Reading the state table: the next Q0 is 1 exactly when X = 1 (S0, S1, S3 go to states ending in 1 on input 1, S2 goes to S3, and every transition on input 0 goes to S0 or S2), so **Q0+ = X**.
Step 2: The next Q1 is 1 for S1 --0--> S2, S3 --0--> S2 and S2 --1--> S3, so **Q1+ = Q0 X' + Q1 Q0' X**.
Step 3: Output **Z = Q1 Q0 X** (state S3 with input 1).
Step 4: Check S2 --1--> S3: Q1+ = 1·1·1 = 1 ✓ and Q0+ = 1 ✓.

**Q6.**
(a) Step 1: T_min = t_cq + t_logic + t_su + t_skew = 0.8 + 3.2 + 0.5 + 0.2 = **4.7 ns**.
Step 2: f_max = 1/4.7 ns = **213 MHz**.
(b) Step 1: hold requires t_cq(min) + t_logic(min) ≥ t_h + t_skew.
Step 2: left side 0.4 + 0.05 = 0.45 ns; right side 0.3 + 0.2 = 0.5 ns. **Violated by 0.05 ns.**
Step 3: add at least **0.05 ns** of delay (a buffer, in practice 0.1 ns for margin). Slowing the clock does not fix a hold violation.
(c) Step 1: each stage has 3.2/2 = 1.6 ns of logic: T = 0.8 + 1.6 + 0.5 + 0.2 = **3.1 ns**.
Step 2: f_max = 1/3.1 ns = **323 MHz**.
Step 3: **latency** becomes 2 cycles = 2 × 3.1 = 6.2 ns (longer than the previous 4.7 ns).
Step 4: **throughput** rises by 4.7/3.1 = **1.52 times**. Pipelining trades latency and area for throughput.

**Q7.**
(a)
```verilog
module counter3(input clk, rst, en, output reg [2:0] q);
  always @(posedge clk or posedge rst)
    if (rst)      q <= 3'b000;
    else if (en)  q <= q + 3'b001;
endmodule
```
(b)
```verilog
module mux4(input [3:0] d, input [1:0] s, output reg y);
  always @(*)
    case (s)
      2'b00: y = d[0];
      2'b01: y = d[1];
      2'b10: y = d[2];
      2'b11: y = d[3];
    endcase
endmodule
```
(c) **Blocking (=)** executes in order, as in software: the next statement sees the new value. **Non-blocking (<=)** schedules all updates to happen together at the end of the time step, which models flip-flops that all sample their inputs at the same clock edge. **Rule of thumb:** use non-blocking assignments in clocked (sequential) always blocks and blocking assignments in combinational always blocks; never mix them in one block.
