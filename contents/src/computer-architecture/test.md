# Computer Architecture: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** CPU execution time equals
A) IC × f / CPI  B) IC × CPI / f  C) CPI × f / IC  D) IC / (CPI × f)

**2.** Which hazard still needs a one-cycle stall in a five-stage pipeline even with full forwarding?
A) ALU result used by the next ALU instruction  B) a store after an ALU instruction  C) a load result used by the next instruction  D) a branch after an ALU instruction

**3.** A WAR (write-after-read) dependence means that
A) a later instruction writes a register that an earlier instruction reads  B) a later instruction reads a value an earlier one writes  C) two instructions write the same register  D) two instructions read the same register

**4.** Register renaming removes
A) RAW dependences  B) structural hazards  C) cache misses  D) WAR and WAW dependences

**5.** The reorder buffer allows an out-of-order processor to
A) issue instructions faster  B) commit results in program order and give precise exceptions  C) predict branches  D) avoid cache misses

**6.** By Amdahl's law the maximum speedup from any number of processors is limited by
A) the serial fraction of the program  B) the clock rate  C) the cache size  D) the number of instructions

**7.** On a loop that runs 10 iterations, a 2-bit saturating counter mispredicts the loop branch about
A) never  B) twice per loop  C) once per loop  D) ten times per loop

**8.** A 1-bit predictor on the alternating pattern T N T N ... is
A) always right  B) right 50 percent of the time  C) right 75 percent of the time  D) almost always wrong

**9.** Which dependence is a true data dependence?
A) WAR  B) RAW  C) WAW  D) none of these

**10.** The ideal CPI of a 4-wide superscalar processor is
A) 4  B) 1  C) 0.25  D) 0.5

**11.** A compulsory miss is
A) the first access to a block  B) a miss caused by too little associativity  C) a miss caused by the cache being too small  D) a miss in the TLB

**12.** Conflict misses are reduced by
A) a bigger clock  B) larger blocks only  C) a deeper pipeline  D) higher associativity

**13.** Average memory access time is
A) miss rate × miss penalty  B) hit time + miss rate × miss penalty  C) hit time × miss rate  D) hit time + miss penalty

**14.** A write-back cache writes a block to the next level
A) on every store  B) only when the program ends  C) when a dirty block is replaced  D) never

**15.** A 32 KB 4-way set-associative cache with 64-byte blocks has how many sets?
A) 128  B) 256  C) 512  D) 64

**16.** In MESI, the E state means the line is
A) dirty and shared  B) clean and the only cached copy  C) invalid  D) dirty and exclusive

**17.** False sharing occurs when
A) two cores read the same variable  B) a lock is held too long  C) two threads use the same variable without synchronisation  D) different variables written by different cores lie in the same cache line

**18.** A GPU warp is
A) a group of 32 threads executing in lock-step  B) a cache line  C) a memory bank  D) a block of 1024 threads

**19.** Branch divergence in a warp causes
A) faster execution  B) cache misses  C) the paths to execute one after the other (serialisation)  D) a deadlock

**20.** In the roofline model attainable performance is
A) peak compute only  B) the minimum of peak compute and bandwidth × arithmetic intensity  C) bandwidth only  D) the maximum of the two

## Section B: Problems (40 marks)

**B1. Performance (10 marks)** Machine X: 4 GHz, CPI 2.0, executes 1.2 × 10^9 instructions for a program. Machine Y: 3 GHz, CPI 1.0, executes 1.5 × 10^9 instructions for the same program. (a) Execution time and MIPS of each [4]. (b) Which is faster and by what factor? [2] (c) 70 percent of a program can be parallelised: the Amdahl speedup on 4 and 8 processors [4].

**B2. Pipelining (10 marks)** (a) For `add x1,x2,x3; sub x4,x1,x5; and x6,x1,x4; or x7,x1,x6` in a five-stage pipeline (registers written in the first half and read in the second half), find the number of cycles without forwarding and with forwarding [5]. (b) Loads are 20 percent of instructions and half of them are followed by a dependent instruction (1 stall); branches are 15 percent with 10 percent mispredicted and a 4-cycle penalty. Find the CPI [3]. (c) Name the three hazard types [2].

**B3. Branch prediction (10 marks)** A branch outcome sequence is T T T N repeated. A 1-bit predictor starts predicting T; a 2-bit saturating counter starts at 2 (weakly taken). (a) Give the prediction results (c or W) of both for the first 12 outcomes [6]. (b) Find the steady-state accuracy of each [2]. (c) Which type of predictor would predict this pattern almost perfectly and why? [2]

**B4. Caches (10 marks)** A 64-byte cache has 16-byte blocks. The byte addresses 0, 64, 0, 64, 16, 80, 16, 80, 0, 16 are accessed. (a) Hit/miss sequence for a direct-mapped cache and for a 2-way LRU cache [4]. (b) The hit time is 1 cycle and the miss penalty 20 cycles: the AMAT of each [3]. (c) For 32-bit addresses give the offset, index and tag bits for an 8 KB 2-way cache with 32-byte blocks [3].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **C** · 3 **A** · 4 **D** · 5 **B** · 6 **A** · 7 **C** · 8 **D** · 9 **B** · 10 **C** · 11 **A** · 12 **D** · 13 **B** · 14 **C** · 15 **A** · 16 **B** · 17 **D** · 18 **A** · 19 **C** · 20 **B**

Brief reasons:
1. The iron law: time = instruction count × CPI × cycle time = IC × CPI / f.
2. Load data exists only at the end of the MEM stage, so even with forwarding an instruction using it in the next cycle must wait one cycle (load-use hazard).
3. WAR: a later instruction writes a register that an earlier instruction reads.
4. Renaming gives each write a new physical register, removing the false (name) dependences WAR and WAW; true RAW dependences remain.
5. The reorder buffer holds results until they can commit in program order, which gives precise exceptions.
6. Amdahl's law: the speedup is limited by 1/(serial fraction).
7. The 2-bit counter stays on the taken side through the loop and is wrong only at the loop exit: once per loop.
8. Step 1: a 1-bit predictor predicts the previous outcome. Step 2: on T N T N each outcome differs from the previous, so it is almost always wrong.
9. RAW (read-after-write) is the true data dependence; WAR and WAW are name dependences.
10. Step 1: a 4-wide machine completes 4 instructions per cycle. Step 2: ideal CPI = 1/4 = 0.25.
11. A compulsory miss is the first access to a block.
12. Conflict misses are reduced by higher associativity.
13. AMAT = hit time + miss rate × miss penalty.
14. A write-back cache writes a block to the next level when a dirty block is replaced.
15. Step 1: sets = capacity/(block size × ways). Step 2: 32,768/(64 × 4) = 32,768/256 = 128.
16. E (exclusive) means the line is clean and the only cached copy.
17. False sharing: different variables written by different cores lie in the same cache line, so the line ping-pongs although no variable is shared.
18. A warp is a group of 32 threads executing in lock-step.
19. Divergence in a warp makes the two paths execute one after the other (serialisation).
20. Roofline: attainable performance = min(peak compute, bandwidth × arithmetic intensity).

### Section B

**B1.**
(a) Step 1 (X): time = IC × CPI / f = (1.2 × 10⁹ × 2.0)/(4 × 10⁹) = 2.4/4 = **0.6 s**.
Step 2: MIPS = f/(CPI × 10⁶) = 4000/2.0 = **2000**.
Step 3 (Y): time = (1.5 × 10⁹ × 1.0)/(3 × 10⁹) = **0.5 s**; MIPS = 3000/1.0 = **3000**.
(b) Y is faster: 0.6/0.5 = **1.2 times** faster.
(c) Amdahl with f = 0.7: speedup = 1/(0.3 + 0.7/n).
Step 1: n = 4: 1/(0.3 + 0.175) = 1/0.475 = **2.105**.
Step 2: n = 8: 1/(0.3 + 0.0875) = 1/0.3875 = **2.581**.

**B2.**
(a) Code: add x1,x2,x3; sub x4,x1,x5; and x6,x1,x4; or x7,x1,x6. Dependences: sub reads x1 (from add); and reads x1 (add) and x4 (sub); or reads x1 (add) and x6 (and).
Without forwarding (each consumer's ID waits for the producer's WB):
Step 1: add: IF 1, ID 2, EX 3, MEM 4, WB 5.
Step 2: sub needs x1 written in cycle 5, so its ID is in cycle 5 (2 stalls): ID 5, EX 6, MEM 7, WB 8.
Step 3: and needs x4 written in cycle 8, so ID 8 (2 more stalls): EX 9, MEM 10, WB 11.
Step 4: or needs x6 written in cycle 11, so ID 11: EX 12, MEM 13, WB 14.
Total **14 cycles**. (Formula: 5 + 3 instructions + 6 stalls.)
With forwarding no stalls are needed (ALU results are forwarded): 5 + 3 = **8 cycles**.
(b) CPI = 1 + (load fraction × dependent fraction × 1 stall) + (branch fraction × mispredict rate × penalty) = 1 + 0.2 × 0.5 × 1 + 0.15 × 0.1 × 4 = 1 + 0.10 + 0.06 = **1.16**.
(c) The three hazard types: **structural** (resource conflicts), **data** (RAW, WAR, WAW) and **control** (branches).

**B3.**
(a) Outcomes: T T T N T T T N T T T N.
Step 1 (1-bit, predicts the previous outcome, initially T): outcomes 1 to 3 correct; outcome 4 (N) predicted T, wrong; outcome 5 (T) predicted N, wrong; outcomes 6 and 7 correct; outcome 8 (N) wrong; outcome 9 (T) wrong; outcomes 10 and 11 correct; outcome 12 (N) wrong.
1-bit: **c c c W W c c W W c c W**.
Step 2 (2-bit counter starting at 2, taken when ≥ 2): the counter stays at 3 for T T T, falls to 2 on N (still predicting taken), and returns to 3 on the next T.
2-bit: **c c c W c c c W c c c W**.
(b) Steady state: the 1-bit predictor is wrong twice per 4 outcomes: **50 percent**. The 2-bit predictor is wrong once per 4: **75 percent**.
(c) A **history-based (two-level or gshare) predictor**: with the last 3 or 4 outcomes as part of the index, the history T T T always precedes N and the other histories precede T, so each context has a stable prediction: about 98 percent after warm-up.

**B4.**
(a) Block addresses (address/16): 0, 4, 0, 4, 1, 5, 1, 5, 0, 1.
Direct-mapped (4 sets): blocks 0 and 4 share set 0, blocks 1 and 5 share set 1, so every access misses: **M M M M M M M M M M** (10 misses).
2-way (2 sets): blocks 0 and 4 fit in set 0 and blocks 1 and 5 in set 1: M M H H M M H H H H (**4 misses**).
(b) Step 1: direct-mapped miss rate = 10/10 = 1.0; AMAT = 1 + 1.0 × 20 = **21 cycles**.
Step 2: 2-way miss rate = 4/10 = 0.4; AMAT = 1 + 0.4 × 20 = 1 + 8 = **9 cycles**.
(c) Step 1: sets = 8192/(32 × 2) = 8192/64 = 128.
Step 2: offset = log₂ 32 = **5** bits; index = log₂ 128 = **7** bits; tag = 32 - 7 - 5 = **20** bits.