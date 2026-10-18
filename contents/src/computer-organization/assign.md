# Computer Organization: Assignments with Worked Solutions

Use RISC-V RV32I and the standard five-stage pipeline unless told otherwise. Hex values of instruction encodings, program results, instruction counts, cache traces and branch-predictor results below were produced by running an assembler, an emulator and cache and predictor simulators. Show your working: marks are given for method and for correct units.

# Assignment 1: Performance, Data Representation and the Instruction Set (70 marks)

## Questions

**Q1. Performance (10 marks)** (a) A program mix has ALU 50 percent (CPI 1), loads 20 percent (CPI 2), stores 10 percent (CPI 2) and branches 20 percent (CPI 3). Find the average CPI, and the execution time and MIPS rate for 10^9 instructions at 2 GHz [4]. (b) Machine A (3 GHz, CPI 2.0) and machine B (2 GHz, CPI 1.2) run the same program. Which is faster and by how much? [3] (c) A component used 40 percent of the time is made 10 times faster: find the speedup (Amdahl) [2]. (d) Reducing both the supply voltage and the clock frequency by 15 percent changes the dynamic power by what factor? [1]

**Q2. Data representation (10 marks)** (a) Show the bytes in memory order for 0x12345678 stored in little-endian and big-endian format [2]. (b) Encode 13.25 and -0.1 as IEEE 754 single-precision numbers (hex) [4]. (c) Decode the single-precision pattern 0xC2ED4000 [2]. (d) Compute 1.5 + 2.25 in single precision and give the hex of the result [2].

**Q3. Instruction encoding (12 marks)** (a) Encode as hex: add x5, x6, x7; addi x5, x6, -1; lw x10, 8(x2); sw x10, 12(x2) [6]. (b) Decode 0x40A48433 and 0xFFF30293 [4]. (c) State how many bits the branch offset field of beq has and the range of the branch [2].

**Q4. Reading assembly (14 marks)** (a) Give the final values of x7 to x14 after the following (x5 = 12, x6 = 5 initially) [6]:
```
add x7, x5, x6
sub x8, x5, x6
and x9, x5, x6
or  x10, x5, x6
xor x11, x5, x6
slli x12, x5, 3
srli x13, x5, 2
slt x14, x6, x5
```
(b) The array {3, 5, 7, 9} is at address 256. Explain the program in Section 2.4 of the notes (the array sum), give the final value of x5 and the number of instructions executed [5]. (c) What does the following compute for x5 = 48 and x6 = 18? [3]
```
loop: beq  x5, x6, done
      blt  x5, x6, less
      sub  x5, x5, x6
      j    loop
less: sub  x6, x6, x5
      j    loop
done:
```

**Q5. Writing assembly (14 marks)** (a) Write a program that finds the maximum of the four-word array at address 256 and leaves it in x5 (test with {4, 9, 2, 7}); give the number of instructions executed [8]. (b) Write a procedure `dbl` that doubles its argument a0 and returns, and a caller that calls it with 5 [3]. (c) Load the constants 0x12345678 and 0x12345FFF into registers using lui and addi [3].

**Q6. Procedures and the stack (10 marks)** (a) Explain the roles of ra, sp and the saved registers s0 to s11 in a procedure call [3]. (b) Write the prologue and epilogue of a procedure that calls another procedure and uses s0 [4]. (c) Why does recursion need a stack frame per activation? [3]

## Solutions and Marking Guide

**Q1.**
(a) Step 1: CPI = Σ (fraction × CPI) = 0.5(1) + 0.2(2) + 0.1(2) + 0.2(3) = 0.5 + 0.4 + 0.2 + 0.6 = **1.7**.
Step 2: time = IC × CPI/f = 10^9 × 1.7/(2 × 10^9) = **0.85 s**.
Step 3: MIPS = f/(CPI × 10^6) = 2000/1.7 = **1176 MIPS** (check: 10^9 instructions/0.85 s = 1.176 × 10^9 per second).
(b) Step 1: time per instruction on A = CPI/f = 2.0/(3 × 10^9) = 0.667 ns.
Step 2: on B = 1.2/(2 × 10^9) = 0.6 ns.
Step 3: ratio = 0.667/0.6 = 1.11: **B is faster by 1.11 times** (11 percent), even though its clock is slower, because of its lower CPI.
(c) Amdahl: speedup = 1/((1 - f) + f/s) = 1/((1 - 0.4) + 0.4/10) = 1/(0.6 + 0.04) = 1/0.64 = **1.5625**.
(d) P ∝ V²f, so the factor is 0.85² × 0.85 = 0.7225 × 0.85 = 0.85³ = **0.614**: a 39 percent reduction in dynamic power for a 15 percent frequency loss.

**Q2.**
(a) Little-endian: the least significant byte at the lowest address: **78 56 34 12** at increasing addresses. Big-endian: **12 34 56 78**.
(b) **13.25:**
Step 1: 13 = 1101₂ and 0.25 = 0.01₂, so 13.25 = 1101.01₂ = 1.10101 × 2³.
Step 2: sign 0; exponent = 3 + 127 = 130 = 10000010₂; fraction 10101 followed by zeros.
Step 3: bits 0 10000010 10101000000000000000000 = 0100 0001 0101 0100 0... = **0x41540000**.
**-0.1:**
Step 1: 0.1 = 1.100110011...₂ × 2⁻⁴ (0.1 × 16 = 1.6 and 0.6 = 0.1001 1001...₂).
Step 2: sign 1; exponent = -4 + 127 = 123 = 01111011₂; fraction 10011001100110011001100 followed by 1100..., rounded to 10011001100110011001101.
Step 3: bits 1 01111011 10011001100110011001101 = **0xBDCCCCCD**.
(c) 0xC2ED4000:
Step 1: binary 1100 0010 1110 1101 0100 0000 ... = 1 | 10000101 | 11011010100000000000000.
Step 2: sign negative; exponent = 133 - 127 = 6.
Step 3: significand = 1.1101101010₂ = 1 + 0.5 + 0.25 + 0.0625 + 0.03125 + 0.0078125 + 0.001953125 = 1.853515625.
Step 4: value = -1.853515625 × 2⁶ = -1.853515625 × 64 = **-118.625**.
(d) Step 1: 1.5 = 1.1₂ × 2⁰ = 0x3FC00000; 2.25 = 1.001₂ × 2¹ = 0x40100000.
Step 2: the sum is 1.5 + 2.25 = 3.75 = 11.11₂ = 1.111₂ × 2¹.
Step 3: exponent = 1 + 127 = 128 = 10000000₂; fraction 111 followed by zeros: 0 10000000 11100... = **0x40700000** (exact).

**Q3.**
(a) Field layout R-type: funct7 | rs2 | rs1 | funct3 | rd | opcode.
Step 1: add x5, x6, x7: funct7 0000000, rs2 = 7, rs1 = 6, funct3 000, rd = 5, opcode 0110011 → **0x007302B3**.
Step 2: addi x5, x6, -1: imm = 111111111111 (0xFFF), rs1 = 6, funct3 000, rd = 5, opcode 0010011 → **0xFFF30293**.
Step 3: lw x10, 8(x2): imm = 8, rs1 = 2, funct3 010, rd = 10, opcode 0000011 → **0x00812503**.
Step 4: sw x10, 12(x2): imm[11:5] = 0, rs2 = 10, rs1 = 2, funct3 010, imm[4:0] = 12, opcode 0100011 → **0x00A12623**.
(b) Step 1: 0x40A48433: opcode = 0x33 (R-type); funct7 = 0x20 (0100000), rs2 = 10, rs1 = 9, funct3 = 0, rd = 8: with funct7 0x20 and funct3 0 the operation is subtraction: **sub x8, x9, x10**.
Step 2: 0xFFF30293: opcode 0x13 (I-type arithmetic), rd = 5, funct3 = 0, rs1 = 6, imm = 0xFFF = -1: **addi x5, x6, -1**.
(c) The branch offset is a **13-bit signed value** (bit 0 is always 0, so 12 bits are stored): the range is -2¹² to 2¹² - 2 = **-4096 to +4094 bytes** relative to the branch (about ±2¹¹ instructions).

**Q4.**
(a) x5 = 12 = 1100₂, x6 = 5 = 0101₂.
Step 1: x7 = 12 + 5 = **17**; x8 = 12 - 5 = **7**.
Step 2: x9 = 1100 AND 0101 = 0100 = **4**; x10 = 1100 OR 0101 = 1101 = **13**; x11 = 1100 XOR 0101 = 1001 = **9**.
Step 3: x12 = 12 << 3 = 12 × 8 = **96**; x13 = 12 >> 2 = 12/4 = **3**; x14 = (5 < 12) = **1**.
So x7 to x14 = 17, 7, 4, 13, 9, 96, 3, 1.
(b) Step 1: the program keeps the sum in x5, the index i in x6, n = 4 in x7 and the base address in x8. Each iteration computes the byte offset 4i (slli by 2), adds the base, loads a[i], adds it to the sum and increments i; the loop ends when i ≥ n.
Step 2: sum = 3 + 5 + 7 + 9 = **24** (final x5).
Step 3: instructions executed: 4 (setup) + 4 iterations × 7 (bge, slli, add, lw, add, addi, j) = 28 + 1 (the final bge that exits) + 1 (the final nop at `done`) = 4 + 28 + 1 + 1 = **34**.
(c) This is **subtractive Euclid**: it repeatedly subtracts the smaller number from the larger until they are equal.
Step 1: (x5, x6) = (48, 18): 48 > 18, so x5 = 48 - 18 = 30.
Step 2: (30, 18): x5 = 12.
Step 3: (12, 18): 12 < 18, so x6 = 18 - 12 = 6.
Step 4: (12, 6): x5 = 6.
Step 5: (6, 6): equal, so exit with **x5 = 6 = gcd(48, 18)**.

**Q5.**
(a)
```
      li   x8, 256         # base
      lw   x5, 0(x8)       # max = a[0]
      li   x6, 1           # i = 1
      li   x7, 4           # n
loop: bge  x6, x7, done
      slli x9, x6, 2
      add  x9, x9, x8
      lw   x10, 0(x9)      # a[i]
      bge  x5, x10, skip   # if max >= a[i] skip
      mv   x5, x10         # max = a[i]
skip: addi x6, x6, 1
      j    loop
done:
```
Trace for {4, 9, 2, 7}: x5 = 4 at the start.
Step 1: i = 1: a[1] = 9; 4 ≥ 9 is false, so mv executes: x5 = 9 (8 instructions: bge, slli, add, lw, bge, mv, addi, j).
Step 2: i = 2: a[2] = 2; 9 ≥ 2, skip (7 instructions).
Step 3: i = 3: a[3] = 7; 9 ≥ 7, skip (7 instructions).
Step 4: i = 4: the bge exits (1 instruction).
Result **x5 = 9**. Count: 4 (setup and first load) + 8 + 7 + 7 + 1 + 1 (final nop) = **28 instructions**.
(b)
```
      li   a0, 5
      jal  ra, dbl         # ra = address of the next instruction
      mv   a1, a0          # a1 = 10
      j    end
dbl:  slli a0, a0, 1       # a0 = 2 * a0
      ret                  # jalr x0, 0(ra)
end:
```
The result is **a0 = 5 × 2 = 10**.
(c) For 0x12345678: `lui x5, 0x12345` then `addi x5, x5, 0x678` (0x12345000 + 0x678 = 0x12345678).
For 0x12345FFF: Step 1: the low 12 bits 0xFFF would be sign-extended by addi to -1 (0xFFFFFFFF), so the upper part must be incremented to compensate. Step 2: `lui x5, 0x12346` then `addi x5, x5, -1`: 0x12346000 - 1 = **0x12345FFF**.

**Q6.**
(a) **ra** holds the return address written by jal (and read by ret). **sp** points to the top of the stack in memory. The **saved registers s0 to s11** must have the same value when the callee returns as when it was called: a callee that wants to use one must save it on the stack first and restore it before returning. (The caller must save any a and t registers it needs after the call.)
(b)
```
func: addi sp, sp, -16     # allocate a frame
      sw   ra, 12(sp)      # save the return address (because we call another procedure)
      sw   s0, 8(sp)       # save s0 (because we use it)
      ...                  # body (may call other procedures)
      lw   s0, 8(sp)       # restore s0
      lw   ra, 12(sp)      # restore ra
      addi sp, sp, 16      # free the frame
      ret
```
Steps: allocate, save in order, run the body, restore in the reverse order, free the frame, return; the frame is 16 bytes to keep the stack 16-byte aligned.
(c) Each recursive activation has its own arguments, local variables, saved registers and return address. These must exist simultaneously (the earlier calls are still waiting for results), so each call gets a new frame on the stack; the stack depth equals the recursion depth, which is why deep recursion can overflow the stack.

---

# Assignment 2: The Processor and Pipelining (70 marks)

## Questions

**Q1. Single-cycle timing (10 marks)** Component delays: instruction fetch 200 ps, register read 100 ps, ALU 200 ps, data memory 200 ps, register write 100 ps. (a) Find the latency of lw, sw, R-type and beq in a single-cycle design [4]. (b) Find the minimum clock period and explain the inefficiency [2]. (c) Find the time for 10^6 instructions with this clock and with a 5-stage pipeline whose clock is set by the 200 ps stages (assume CPI 1 and ignore start-up) [4].

**Q2. Control signals (10 marks)** Give the values of RegWrite, ALUSrc, MemRead, MemWrite, MemtoReg, Branch and the ALU operation for add (R-type), lw, sw and beq in a single-cycle RISC-V datapath (use X for don't-care).

**Q3. Pipeline speedup (8 marks)** (a) A 5-stage pipeline with 200 ps stages executes n instructions without hazards. Give the total time and compute it for n = 1 and n = 1000 [4]. (b) Compare with the single-cycle time (800 ps per instruction) and give the speedup for n = 1000 [2]. (c) Why does the speedup not equal 5? [2]

**Q4. Hazards (16 marks)** Consider `lw x1, 0(x2); add x3, x1, x4; sub x5, x3, x6; sw x5, 0(x7)`. (a) Identify all data dependences [3]. (b) Count the cycles to execute the sequence in a 5-stage pipeline (i) ideally with no hazards, (ii) with full forwarding, (iii) without forwarding (the register file can be written in the first half and read in the second half of a cycle) [6]. (c) Show how reordering helps for `lw x1, 0(x2); lw x3, 4(x2); add x4, x1, x3; sw x4, 8(x2); lw x5, 12(x2); sub x6, x5, x1; sw x6, 16(x2)` with forwarding [4]. (d) Name and explain the three kinds of hazards [3].

**Q5. Branch prediction (12 marks)** A loop-closing branch has the outcome pattern T T T T N repeated three times (a loop that executes 5 iterations, three times, each loop visited in sequence). (a) Count the mispredictions of a static "always taken" predictor [2]. (b) Count the mispredictions of a 1-bit dynamic predictor starting in the not-taken state [3]. (c) Count the mispredictions of a 2-bit saturating counter (states 0 and 1 predict not taken, 2 and 3 predict taken) starting at state 1 [4]. (d) Compute the CPI of a pipeline with 20 percent branches, a 10 percent misprediction rate and a 2-cycle penalty [3].

**Q6. CPI and stalls (8 marks)** In a program 25 percent of the instructions are loads and 40 percent of loads are followed immediately by an instruction using the loaded value. With forwarding, each such load-use costs one stall cycle. Find the CPI, ignoring other hazards, and the effect of a compiler that removes half of the load-use stalls.

**Q7. Superscalar and limits (6 marks)** (a) A dual-issue processor sustains an IPC of 1.4 at 2 GHz. Find the execution time for 3 × 10^9 instructions [3]. (b) List two reasons why a superscalar processor rarely reaches its peak IPC [3].

## Solutions and Marking Guide

**Q1.**
(a) Add the stages each instruction uses:
Step 1: lw: fetch 200 + register read 100 + ALU 200 + memory 200 + write 100 = **800 ps**.
Step 2: sw: 200 + 100 + 200 + 200 = **700 ps**.
Step 3: R-type: 200 + 100 + 200 + 100 = **600 ps**.
Step 4: beq: 200 + 100 + 200 = **500 ps**.
(b) The clock period must accommodate the slowest instruction: **800 ps**. Every instruction takes 800 ps, even those that need only 500 ps, so the faster instructions waste time.
(c) Step 1: single-cycle: 10^6 × 800 ps = 8 × 10^8 ps = **0.8 ms**.
Step 2: pipelined: 10^6 × 200 ps = 2 × 10^8 ps = **0.2 ms** (plus 4 cycles of start-up, which is negligible).
Step 3: speedup = 0.8/0.2 = **4**, from the higher clock speed with CPI near 1.

**Q2.**
- add: RegWrite 1, ALUSrc 0, MemRead 0, MemWrite 0, MemtoReg 0, Branch 0, ALU op add.
- lw: RegWrite 1, ALUSrc 1, MemRead 1, MemWrite 0, MemtoReg 1, Branch 0, ALU op add (address calculation).
- sw: RegWrite 0, ALUSrc 1, MemRead 0, MemWrite 1, MemtoReg X, Branch 0, ALU op add.
- beq: RegWrite 0, ALUSrc 0, MemRead 0, MemWrite 0, MemtoReg X, Branch 1, ALU op subtract (the Zero flag controls the branch).
Reasoning: ALUSrc = 1 when the second ALU input is the immediate (lw, sw); RegWrite = 1 only when a register receives a result (add, lw); MemtoReg is a don't-care when no register is written. (2 marks per instruction type with the correct pattern.)

**Q3.**
(a) Step 1: the first instruction finishes after 5 cycles and one more finishes every cycle after that: cycles = 5 + (n - 1) = n + 4, time = **(n + 4) × 200 ps**.
Step 2: n = 1: 5 × 200 = **1000 ps**.
Step 3: n = 1000: 1004 × 200 ps = 200,800 ps = **200.8 ns**.
(b) Step 1: single-cycle: 1000 × 800 ps = 800 ns.
Step 2: speedup = 800/200.8 = **3.98**.
(c) The ideal speedup of 5 needs balanced stages (800/5 = 160 ps), but the slowest stage (200 ps) sets the clock, and there are pipeline register overhead and hazards. The latency of each instruction is not reduced (5 × 200 = 1000 ps in the pipeline against 800 ps single-cycle); the **throughput** improves.

**Q4.** Code: lw x1,0(x2); add x3,x1,x4; sub x5,x3,x6; sw x5,0(x7).
(a) add reads x1 written by lw (RAW, load-use); sub reads x3 written by add (RAW); sw reads x5 written by sub (RAW, the stored data).
(b) (i) Ideal: 5 + (4 - 1) = **8 cycles**.
(ii) With full forwarding: the load-use dependence needs one bubble, because the loaded value exists only at the end of MEM; sub and sw get their operands by forwarding with no further stalls: 8 + 1 = **9 cycles**.
(iii) Without forwarding: a consumer in the instruction right after its producer must wait until the producer's write-back (first half of the cycle), which costs 2 stall cycles per dependence: 3 dependences × 2 = 6 stalls, so 8 + 6 = **14 cycles**.
(c) Sequence: lw x1; lw x3; add x4,x1,x3; sw x4; lw x5; sub x6,x5,x1; sw x6.
Step 1: 7 instructions ideally need 5 + 6 = 11 cycles.
Step 2: as written, add uses x3 loaded just before it (1 stall) and sub uses x5 loaded just before it (1 stall): 11 + 2 = **13 cycles**.
Step 3: reorder to `lw x1; lw x3; lw x5; add x4,x1,x3; sub x6,x5,x1; sw x4,8(x2); sw x6,16(x2)`: each load result is used at least two instructions later, so there are **no stalls**: **11 cycles**.
(d) **Structural hazard:** two instructions need the same resource at the same time (for example one memory for instructions and data). **Data hazard:** an instruction depends on the result of a previous instruction still in the pipeline (RAW). **Control hazard:** the next instruction to fetch is not known until a branch is resolved.

**Q5.** Outcomes (15 branches): T T T T N, T T T T N, T T T T N.
(a) "Always taken" is wrong once per loop exit: **3 mispredictions** (positions 5, 10, 15).
(b) 1-bit predictor starting at not-taken (it predicts the previous outcome):
Step 1: position 1 (T): predicted N, miss; predictor becomes T.
Step 2: positions 2 to 4 (T): predicted T, correct.
Step 3: position 5 (N): predicted T, miss; predictor becomes N.
Step 4: position 6 (T): predicted N, miss; and so on: misses at 1, 5, 6, 10, 11, 15: **6 mispredictions** (2 per loop after the first).
(c) 2-bit counter starting at state 1 (weakly not taken; states 2 and 3 predict taken):
Step 1: position 1 (T): predict N, miss; state 2.
Step 2: positions 2 to 4 (T): predict T, correct; state 3.
Step 3: position 5 (N): predict T, miss; state 2.
Step 4: position 6 (T): predict T, correct; state 3 ... the same afterwards: only the loop exit is missed (positions 10 and 15).
Total misses at 1, 5, 10, 15 = **4 mispredictions**. The hysteresis is the advantage of 2-bit predictors.
(d) CPI = 1 + (branch fraction × misprediction rate × penalty) = 1 + 0.2 × 0.1 × 2 = 1 + 0.04 = **1.04**.

**Q6.** Step 1: stall fraction = 0.25 × 0.40 = 0.10 stalls per instruction.
Step 2: **CPI = 1 + 0.10 = 1.10**.
Step 3: the compiler removes half of them: CPI = 1 + 0.05 = **1.05**.
Step 4: speedup = 1.10/1.05 = **1.048** (4.8 percent) by scheduling alone.

**Q7.**
(a) Time = IC/(IPC × f) = 3 × 10^9/(1.4 × 2 × 10^9) = 3/2.8 = **1.07 s**.
(b) Limits on IPC: data dependences between instructions (limited instruction-level parallelism), branch mispredictions and control dependences, cache misses that stall the issue, and structural limits (the number of functional units and ports).

---

# Assignment 3: Memory Hierarchy, Virtual Memory, I/O and Parallelism (80 marks)

## Questions

**Q1. Cache organisation (10 marks)** (a) A 16 KB direct-mapped cache with 64-byte blocks and 32-bit addresses: find the number of lines, the offset, index and tag widths, and the total bits of storage including the valid bit [5]. (b) A 32 KB 4-way set-associative cache with 64-byte blocks: find the number of sets and the field widths [3]. (c) What is the effect of doubling the block size on the fields? [2]

**Q2. Cache trace (14 marks)** A cache has 8 blocks of 16 bytes. Byte addresses are accessed in the order 0, 4, 16, 132, 232, 160, 1024, 30, 140, 3100, 180, 2180. For each of (a) direct-mapped, (b) 2-way set-associative with LRU, (c) fully associative with LRU, give the hit/miss sequence and the number of hits. Explain the differences.

**Q3. Locality and miss behaviour (12 marks)** (a) A loop reads a 64-byte array word by word (4-byte words) into a cold direct-mapped cache with 16-byte blocks: give the hit/miss pattern and the miss rate [3]. (b) Two arrays A and B lie 1024 bytes apart and the loop `for i: C += A[i] * B[i]` accesses A[i], B[i] alternately in a 1 KB direct-mapped cache with 16-byte blocks: show that every access misses, and show what a 2-way associative cache does [5]. (c) A 128 × 128 integer matrix (4 bytes per element, row-major) is traversed in a 16 KB direct-mapped cache with 64-byte blocks: count the misses for row-by-row and column-by-column traversal [4].

**Q4. Average memory access time (8 marks)** (a) Find the AMAT for a hit time of 1 ns, a miss rate of 5 percent and a miss penalty of 100 ns [2]. (b) For a two-level hierarchy with an L1 hit time of 1 ns and a 10 percent L1 miss rate, an L2 hit time of 10 ns and a 20 percent local L2 miss rate, and a memory time of 100 ns, find the AMAT [3]. (c) A processor has a base CPI of 1 and 30 percent of instructions access data; the data cache miss rate is 4 percent and the miss penalty is 50 cycles. Find the CPI [3].

**Q5. Write policies (8 marks)** Compare write-through and write-back caches: behaviour on write hits, memory traffic, consistency and complexity; state the role of the write buffer and of write-allocate.

**Q6. Virtual memory (12 marks)** (a) A system has 32-bit virtual addresses and 4 KB pages: give the offset and virtual page number widths and the size of a flat page table with 4-byte entries [3]. (b) For a two-level page table with 10 bits at each level, find the page-table memory for a process that uses only 8 MB of contiguous memory [3]. (c) Describe the steps of an address translation with a TLB hit, a TLB miss and a page fault [4]. (d) If a memory access takes 200 ns and a page fault takes 8 ms, find the effective access time for a page-fault rate of 10^-6 [2].

**Q7. I/O (6 marks)** A 100 MHz CPU polls a device status register. (a) If each poll takes 100 cycles and the device must be polled 1000 times per second, compute the CPU time used per second by polling [2]. (b) Compare with interrupt-driven I/O when each interrupt costs 2000 cycles and the device generates 100 events per second, and explain when DMA is preferable [4].

**Q8. Parallelism (8 marks)** (a) A program is 5 percent serial. Find the speedup on 8 cores and on 1000 cores, and the limit [4]. (b) Explain cache coherence and why it is needed in a multicore processor [2]. (c) Give two examples of data-parallel computation suited to SIMD or GPUs [2].

## Solutions and Marking Guide

**Q1.**
(a) Step 1: lines = 16 KB/64 B = 16,384/64 = **256 lines**.
Step 2: offset = log2 64 = **6 bits**; index = log2 256 = **8 bits**; tag = 32 - 6 - 8 = **18 bits**.
Step 3: bits per line = 1 (valid) + 18 (tag) + 64 × 8 (data) = 1 + 18 + 512 = 531.
Step 4: total = 256 × 531 = **135,936 bits** (16.6 KiB). Overhead = 256 × 19/(256 × 512) = 3.7 percent.
(b) Step 1: lines = 32 KB/64 B = 512; sets = 512/4 = **128**.
Step 2: offset 6 bits, index log2 128 = **7 bits**, tag 32 - 6 - 7 = **19 bits**.
(c) Doubling the block size (same capacity) adds one offset bit and halves the number of lines, removing one index bit; the tag width stays the same for a direct-mapped cache. Larger blocks exploit spatial locality but raise the miss penalty and the risk of conflicts.

**Q2.** Step 1: block address = address ÷ 16: 0, 0, 1, 8, 14, 10, 64, 1, 8, 193, 11, 136.
Step 2 (direct-mapped, 8 lines): index = block mod 8: 0, 0, 1, 0, 6, 2, 0, 1, 0, 1, 3, 0.
(a) **Direct-mapped: M H M M M M M H M M M M, 2 hits.** Trace: addr 0 miss; 4 hit (same block 0); 16 miss (block 1); 132 miss (block 8 maps to index 0 and evicts block 0); 232 miss; 160 miss; 1024 miss (block 64, index 0); 30 hit (block 1 still at index 1); 140 miss (block 8 was evicted by 1024); 3100, 180 and 2180 miss.
(b) Step 3 (2-way, 4 sets, LRU): set = block mod 4: 0, 0, 1, 0, 2, 2, 0, 1, 0, 1, 3, 0. **M H M M M M M H H M M M, 3 hits.** The extra hit is address 140: set 0 holds blocks 8 and 64 together, so block 8 survives.
(c) Step 4 (fully associative, 8 lines, LRU): **M H M M M M M H H M M M, 3 hits.** Only 10 distinct blocks are used, and the hits are the same as in (b): no conflict misses remain; the other misses are compulsory (first touches) or capacity.
Conclusion: associativity removes **conflict misses** (blocks 0, 8 and 64 all compete for index 0 in the direct-mapped cache); compulsory misses cannot be avoided by any organisation.

**Q3.**
(a) Step 1: a 16-byte block holds 16/4 = 4 words; 64 bytes = 16 words = 4 blocks.
Step 2: the first word of each block misses and the next three hit: the pattern is **M H H H** repeated four times.
Step 3: miss rate = 4/16 = **25 percent** (the benefit of spatial locality).
(b) Step 1: 1 KB cache with 16-byte blocks has 64 lines; A[i] and B[i] are 1024 bytes apart = 64 blocks, so they have the same index (block mod 64).
Step 2: access sequence A0, B0, A1, B1, ... (addresses 0, 1024, 4, 1028, ...): each access to B evicts the block that A just loaded and vice versa, so **M M M M M M M M: every access misses (conflict misses)** although the arrays have perfect spatial locality.
Step 3: 2-way cache: both blocks fit in the same set, so **M M H H H H H H** for the first 8 accesses (a miss only on the first touch of each block).
(c) Step 1: the matrix is 128 × 128 × 4 = 65,536 bytes = 64 KB, larger than the 16 KB cache.
Step 2: row by row (stride 4 bytes): one miss per 64-byte block (16 elements): 16,384/16 = **1024 misses**.
Step 3: column by column (stride 128 × 4 = 512 bytes): each access touches a different block, and the 128 blocks of a column map onto only 32 of the 256 lines (index = (8 × row) mod 256), so they evict each other before reuse. **Every access misses: 16,384 misses**, 16 times more.
Remedies: loop interchange, tiling (blocking). (For a 16 × 16 matrix that fits in the cache, both orders give only 16 misses.)

**Q4.**
(a) AMAT = hit time + miss rate × miss penalty = 1 + 0.05 × 100 = 1 + 5 = **6 ns**.
(b) Step 1: the L1 miss penalty = L2 hit time + local L2 miss rate × memory time = 10 + 0.20 × 100 = 30 ns.
Step 2: AMAT = 1 + 0.10 × 30 = **4 ns**.
(c) Step 1: memory stall cycles per instruction = 0.30 × 0.04 × 50 = 0.6.
Step 2: **CPI = 1 + 0.6 = 1.6** (ignoring instruction-cache misses): the memory system adds 60 percent to the execution time.

**Q5.** **Write-through:** every write updates both the cache and memory: simple and memory is always consistent, but the write traffic is high and writes are slow unless a **write buffer** holds the pending writes so the CPU does not wait. **Write-back:** a write hit updates only the cache and sets a **dirty bit**; the block is written to memory only when it is evicted: far less traffic and faster writes, but memory may hold stale data (a problem for DMA and multiprocessors, solved by coherence protocols) and the control is more complex. On a write miss, **write-allocate** loads the block into the cache first (typical with write-back); **no-write-allocate** writes directly to memory (typical with write-through).

**Q6.**
(a) Step 1: 4 KB = 2^12, so the offset is **12 bits** and the virtual page number is 32 - 12 = **20 bits**.
Step 2: a flat page table has 2^20 entries × 4 bytes = **4 MB per process**.
(b) Step 1: a table with 10 index bits has 2^10 entries × 4 B = 4 KB (one page).
Step 2: 8 MB/4 KB = 2048 pages; each second-level table maps 1024 pages (4 MB), so 2 second-level tables are needed.
Step 3: total = 4 KB (top level) + 2 × 4 KB = **12 KB** instead of 4 MB.
(c) **TLB hit:** the virtual page number is found in the TLB, giving the physical frame; the physical address is formed and the cache is accessed (a few cycles). **TLB miss:** the hardware or the OS walks the page table in memory (one access per level), loads the translation into the TLB and retries. **Page fault:** the page-table entry is invalid (the page is not in memory): the OS traps, finds a free frame (evicting a page if needed, writing it back if dirty), reads the page from disk (milliseconds), updates the page table and restarts the instruction.
(d) Step 1: EAT = (1 - p) × 200 ns + p × 8 ms with 8 ms = 8,000,000 ns.
Step 2: = 0.999999 × 200 + 10^-6 × 8,000,000 = 199.9998 + 8 = **208 ns** (a 4 percent slowdown from one fault per million accesses: page faults must be extremely rare).

**Q7.**
(a) Step 1: cycles spent polling per second = 1000 × 100 = 100,000.
Step 2: CPU cycles per second = 100 × 10^6, so the share = 100,000/10^8 = 0.001 = **0.1 percent** (1 ms per second).
(b) Step 1: interrupts: 100 events/s × 2000 cycles = 200,000 cycles/s = 0.2 percent of the CPU, and the CPU does other work in between instead of spinning.
Step 2: for a rarely active device interrupts avoid the cost of frequent polling, but for **high data rates** (disks, network cards) one interrupt per word overwhelms the CPU; **DMA** transfers whole blocks directly between the device and memory and interrupts the CPU only once per block.

**Q8.**
(a) Amdahl: speedup = 1/(s + (1 - s)/N) with s = 0.05.
Step 1: N = 8: 1/(0.05 + 0.95/8) = 1/(0.05 + 0.11875) = 1/0.16875 = **5.93**.
Step 2: N = 1000: 1/(0.05 + 0.00095) = 1/0.05095 = **19.6**.
Step 3: limit (N → ∞) = 1/0.05 = **20**, regardless of the number of cores.
(b) Each core has its own private cache, so several cores may hold copies of the same memory block. A write by one core would leave stale copies in the others. A **coherence protocol** (for example MESI with snooping or a directory) invalidates or updates other copies so that all cores see a consistent value.
(c) Examples: image and video processing (the same filter on every pixel), matrix multiplication and neural-network inference, vector additions, particle simulations, FFTs.