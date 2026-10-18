# Digital Logic Design: Class Test

Duration: 60 minutes. No calculators. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** The binary number 1011 equals decimal
A) 9  B) 10  C) 11  D) 13

**2.** The hexadecimal number FF equals decimal
A) 15  B) 128  C) 255  D) 256

**3.** In 8-bit two's complement, -5 is
A) 10000101  B) 11111010  C) 11111011  D) 00000101

**4.** The range of an 8-bit two's complement number is
A) 0 to 255  B) -127 to 127  C) -128 to 127  D) -256 to 255

**5.** Which gate alone can implement any Boolean function?
A) AND  B) OR  C) NAND  D) XOR

**6.** A + AB simplifies to
A) A  B) B  C) A + B  D) AB

**7.** By De Morgan's law, (AB)' equals
A) A'B'  B) A' + B'  C) A + B  D) A'B

**8.** The XOR of 1 and 1 is
A) 0  B) 1  C) 2  D) undefined

**9.** In a K-map, groups of adjacent 1s must have a size that is
A) any number  B) a power of 2  C) odd  D) at least 3

**10.** The truth table of a 3-input function has how many rows?
A) 3  B) 6  C) 8  D) 9

**11.** The sum output of a half adder is
A) A AND B  B) A XOR B  C) A OR B  D) A NAND B

**12.** A 4:1 multiplexer has how many select lines?
A) 1  B) 2  C) 4  D) 8

**13.** For any input code, how many outputs of an n-to-2^n decoder are active?
A) none  B) exactly one  C) n  D) all

**14.** A D flip-flop's next state equals
A) D'  B) D  C) Q'  D) D XOR Q

**15.** A T flip-flop with T = 1 on a clock edge
A) holds  B) resets  C) toggles  D) sets

**16.** A JK flip-flop with J = K = 1 on a clock edge
A) holds  B) toggles  C) sets  D) resets

**17.** n flip-flops can represent at most how many distinct states?
A) n  B) 2n  C) n^2  D) 2^n

**18.** How many flip-flops are needed for a modulus-10 counter?
A) 3  B) 4  C) 5  D) 10

**19.** The output of a Moore machine depends on
A) the present state only  B) the present input only  C) both state and input  D) neither

**20.** Setup time is the time that data must be stable
A) after the clock edge  B) before the clock edge  C) during the whole clock cycle  D) after reset

## Section B: Problems (40 marks)

**B1. (10 marks)** (a) Convert 0xA7 to binary and decimal [3]. (b) Write -100 as an 8-bit two's complement number [3]. (c) Add 01101100 and 00110110 in 8-bit two's complement, give the decimal values and say whether overflow occurs [4].

**B2. (10 marks)** F(A, B, C, D) = Σm(0, 2, 5, 7, 8, 10, 13, 15). (a) Draw the K-map and find the minimum SOP [5]. (b) Show that F is an XNOR of two variables and give F' [2]. (c) Implement F with NAND gates only [3].

**B3. (10 marks)** (a) Write the sum and carry equations of a full adder and compute the outputs for A = 1, B = 1, Cin = 1 [3]. (b) Implement the majority function Maj(A, B, C) = Σm(3, 5, 6, 7) with a 4:1 multiplexer using A and B as select lines [4]. (c) Implement the same function using a 3-to-8 decoder and an OR gate [3].

**B4. (10 marks)** (a) List the states of a 4-bit Johnson counter starting from 0000 [3]. (b) A circuit has t_cq = 1.0 ns, combinational logic delay 4.0 ns and t_su = 0.5 ns, with no skew. Find the maximum clock frequency [3]. (c) A serial parity checker has one input X and output Z = 1 if an odd number of 1s has been received. Draw its Moore state diagram (2 states) and give Z after each bit of the input 11010 [4].

---

## Answer Key and Solutions

### Section A
1 **C** · 2 **C** · 3 **C** · 4 **C** · 5 **C** · 6 **A** · 7 **B** · 8 **A** · 9 **B** · 10 **C** · 11 **B** · 12 **B** · 13 **B** · 14 **B** · 15 **C** · 16 **B** · 17 **D** · 18 **B** · 19 **A** · 20 **B**

Brief reasons: 1. 8 + 2 + 1. 2. 15 · 16 + 15. 3. 00000101 inverted = 11111010, plus 1 = 11111011. 5. NAND is universal. 6. Absorption. 7. De Morgan. 9. Groups are 1, 2, 4, 8, 16 cells. 10. 2^3. 11. S = A ⊕ B, C = AB. 12. 2 select bits for 4 inputs. 17. 2^n. 18. 2^3 = 8 < 10 ≤ 16.

### Section B

**B1.**
(a) Step 1: A = 1010 and 7 = 0111, so the byte is **10100111**.
Step 2: decimal: 10 × 16 + 7 = **167**.
(b) Step 1: 100 = 64 + 32 + 4 = 01100100.
Step 2: invert: 10011011; add 1: **10011100**.
(c) Step 1: 01101100 (108) + 00110110 (54) = **10100010**.
Step 2: the sign bit is 1, so it reads as -94 (invert 01011101 + 1 = 01011110 = 94). The true sum 162 exceeds 127: **overflow** (two positive operands produced a negative result).

**B2.**
(a) Minterms 0, 2, 8, 10 form a group of four (B'D'), and minterms 5, 7, 13, 15 form a group of four (BD). **F = B'D' + BD.**
(b) B'D' + BD is the XNOR of B and D: **F = B ⊙ D = (B ⊕ D)'**, so **F' = B ⊕ D = BD' + B'D**. (A and C do not matter.)
(c) F = B'D' + BD = NAND( NAND(B', D'), NAND(B, D) ) with B' = NAND(B, B) and D' = NAND(D, D): **5 NAND gates** (2 inverters and 3 two-input gates).

**B3.**
(a) **Sum = A ⊕ B ⊕ Cin; Cout = AB + Cin(A ⊕ B).** For 1, 1, 1: Sum = 1 ⊕ 1 ⊕ 1 = **1**; Cout = 1 + 1 · 0 = **1** (1 + 1 + 1 = 11 in binary).
(b) Step 1: Maj has minterms 3, 5, 6, 7.
Step 2: With A, B as selects: AB = 00: F = 0; AB = 01: F = C; AB = 10: F = C; AB = 11: F = 1.
Step 3: So **D0 = 0, D1 = C, D2 = C, D3 = 1**.
(c) Connect decoder outputs m3, m5, m6, m7 to a four-input OR gate.

**B4.**
(a) Johnson counter (shift left, with the complement of the MSB fed into Q0): **0000 → 0001 → 0011 → 0111 → 1111 → 1110 → 1100 → 1000 → 0000**: 8 states (2 × 4).
(b) Step 1: T_min = t_cq + t_logic + t_su = 1.0 + 4.0 + 0.5 = 5.5 ns.
Step 2: f_max = 1/5.5 ns = **182 MHz**.
(c) States EVEN (Z = 0) and ODD (Z = 1). From EVEN: X = 0 stays EVEN, X = 1 goes to ODD. From ODD: X = 0 stays ODD, X = 1 goes to EVEN.
Step 1: start in EVEN, input 1 → ODD (Z = 1); input 1 → EVEN (Z = 0); input 0 → EVEN (Z = 0); input 1 → ODD (Z = 1); input 0 → ODD (Z = 1).
Step 2: **Z = 1, 0, 0, 1, 1**. (Check: the number of 1s so far is 1, 2, 2, 3, 3.)
