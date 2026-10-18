# Computer Architecture: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** Which factor does a better compiler primarily change?
A) clock rate  B) instruction count  C) cache size  D) pipeline depth

**2.** Two machines both have a 2000 MIPS rating. Then
A) they run every program equally fast  B) they may still differ in execution time on the same program  C) both have CPI 1  D) both have the same clock rate

**3.** Dynamic power in CMOS is proportional to
A) V × f  B) V^2 × f  C) V^3  D) f only

**4.** A load-use hazard in the classic five-stage pipeline with forwarding costs
A) 0 cycles  B) 1 cycle  C) 2 cycles  D) 3 cycles

**5.** A branch target buffer (BTB) stores
A) the data of recent loads  B) the target addresses of recent branches  C) the register values  D) the page table

**6.** The 2-bit saturating counter predictor changes its prediction only after
A) one wrong outcome  B) two consecutive wrong outcomes  C) four wrong outcomes  D) it never changes

**7.** In Tomasulo's algorithm results are broadcast on
A) the memory bus  B) the program counter  C) the common data bus  D) the TLB

**8.** WAW dependences are removed by
A) forwarding  B) register renaming  C) bigger caches  D) a faster clock

**9.** A VLIW processor relies on
A) the hardware to find parallelism  B) the compiler to schedule independent operations  C) the operating system  D) speculative threads

**10.** Which statement about the reorder buffer is true?
A) it speeds up cache misses  B) instructions commit from it in program order  C) it holds only loads  D) it replaces the TLB

**11.** A 64 KB direct-mapped cache with 32-byte blocks (32-bit addresses) has an index of
A) 10 bits  B) 11 bits  C) 12 bits  D) 13 bits

**12.** A fully associative cache has no
A) capacity misses  B) conflict misses  C) compulsory misses  D) hits

**13.** Increasing the block size generally
A) always lowers the miss rate  B) reduces compulsory misses but may raise the miss penalty and conflict misses  C) removes capacity misses  D) lowers the hit time

**14.** Write-through with a write buffer is used to
A) avoid stalling the processor on stores  B) avoid cache coherence  C) speed up loads  D) reduce tag bits

**15.** In MESI a write to a line in the S state
A) is silent  B) requires invalidating the other copies  C) leaves the line S  D) fetches the line from disk

**16.** Under sequential consistency
A) writes can be reordered freely  B) all processors see one global order that respects each program's order  C) caches are not allowed  D) only one core runs

**17.** On x86, which reordering can be observed (total store order)?
A) load-load  B) store-store  C) a store followed by a load to a different address  D) none

**18.** On a GPU, memory accesses are fastest when
A) the threads of a warp access adjacent addresses (coalesced)  B) every thread accesses a random address  C) all threads write the same address  D) data is in the disk cache

**19.** An algorithm with arithmetic intensity below the ridge point of the roofline is
A) compute bound  B) memory bound  C) impossible  D) latency bound only

**20.** For a given task, lowering both voltage and frequency by the same factor generally
A) reduces power and energy  B) increases power  C) leaves energy unchanged  D) increases energy

## Section B: Short Questions (40 marks)

**B1. (5)** Machine A: 3 GHz, CPI 1.5, runs a program in 10^9 instructions. Machine B: 2 GHz, CPI 1.0, needs 1.2 × 10^9 instructions. Find the MIPS and the execution time of each and say which is faster.

**B2. (5)** A program is 80 percent parallelisable. Find the Amdahl speedup on 4, 16 and infinitely many processors, and the parallel fraction needed for a speedup of 3 on 4 processors.

**B3. (5)** For a 32 KB 8-way set-associative cache with 64-byte blocks and 32-bit addresses give the number of sets and the offset, index and tag widths. Is it possible to index it in parallel with a TLB for 4 KB pages? Explain.

**B4. (5)** Two-level cache: L1 hit time 1 ns, miss rate 10 percent; L2 hit time 10 ns, local miss rate 20 percent; memory access 100 ns. Find the AMAT and the global L2 miss rate. If the base CPI is 1.0 with 30 percent loads/stores and 4 percent data miss rate with a 50-cycle penalty, find the CPI.

**B5. (5)** Give the MESI states (C0, C1) and cumulative bus transactions after each access: C0 read, C1 read, C0 write, C1 read, C1 write, C0 read.

**B6. (5)** A branch alternates T N T N T N T N. A 1-bit predictor starts predicting T; a 2-bit counter starts at 2 (weakly taken). Give the number of correct predictions of each over the 8 outcomes, and the behaviour of a history-based predictor.

**B7. (5)** A GPU has 10 TFLOP/s peak and 500 GB/s bandwidth. Find the ridge point, the attainable performance of SAXPY (2 FLOP per 12 bytes) and the minimum time to add two vectors of 10^9 floats.

**B8. (5)** A processor's voltage and frequency are both reduced by 15 percent. Find the relative dynamic power, the performance change and the relative energy for a fixed task.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Pipelining.** (a) For the code `lw x1,0(x2); add x3,x1,x4; lw x5,0(x6); sub x7,x5,x3; sw x7,0(x8)` find the cycle counts in a five-stage pipeline without forwarding and with forwarding [4]. (b) Reorder it to remove the stall and give the new count [3]. (c) A pipeline has 25 percent loads (40 percent followed by a dependent instruction, 1 stall) and 20 percent branches (15 percent mispredicted, 3-cycle penalty): CPI and speedup over the unpipelined machine [3].

**C2. Out-of-order execution.** Latencies ADD 1, MUL 3, DIV 5; one start per cycle.
`I1 DIV R1,R2,R3; I2 ADD R4,R1,R5; I3 SUB R5,R6,R7; I4 MUL R1,R8,R9; I5 ADD R10,R4,R1`.
(a) List the RAW, WAR and WAW dependences [3]. (b) Rename the registers and give the true dependence graph [3]. (c) With renaming, find the start and finish cycles for in-order issue and out-of-order issue and the total cycles [4].

**C3. Caches.** A 64-byte cache with 16-byte blocks sees the byte addresses 0, 64, 0, 64, 16, 80, 16, 80, 0, 16.
(a) Hit/miss pattern for a direct-mapped, a 2-way LRU and a fully associative cache [4]. (b) Classify the direct-mapped misses (compulsory, capacity, conflict) [2]. (c) A 4096 × 4096 int matrix summed row by row takes 0.012 s and column by column 0.49 s on a test machine: explain the difference and give a software remedy [4].

**C4. Coherence and multicore.** (a) Trace MESI for two cores: C0 read, C0 write, C0 write, C1 write, C0 read, giving the states and the number of bus transactions [4]. (b) Two threads each increment their own counter; with the counters in the same cache line the run took 0.91 s, and with padding 0.48 s. Explain and fix [3]. (c) Define sequential consistency and give one reordering allowed by x86-TSO [3].

**C5. GPUs, roofline and power.** (a) With 256 threads per block, how many blocks cover 10^6 elements and how many warps per block? [2] (b) Explain divergence and coalescing [3] (c) Attainable performance of a dot product (2 FLOP, 8 bytes) and why a large matrix multiplication reaches the peak on the roofline of B7 [3] (d) Why does heterogeneous (big.LITTLE and accelerator) design address the power wall? [2]

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **B** · 3 **B** · 4 **B** · 5 **B** · 6 **B** · 7 **C** · 8 **B** · 9 **B** · 10 **B** · 11 **B** · 12 **B** · 13 **B** · 14 **A** · 15 **B** · 16 **B** · 17 **C** · 18 **A** · 19 **B** · 20 **A**

Brief reasons:
1. A better compiler mainly changes the instruction count (IC) of the program.
2. MIPS = f/(CPI × 10⁶) ignores how many instructions are needed, so equal MIPS can still mean different execution times.
3. CMOS dynamic power P = αCV²f.
4. With forwarding a load-use hazard costs one stall cycle, because the data exists only at the end of MEM.
5. A branch target buffer stores the target addresses of recently taken branches.
6. A 2-bit saturating counter changes its prediction only after two consecutive wrong outcomes.
7. In Tomasulo's algorithm results are broadcast on the common data bus (CDB).
8. WAW (and WAR) name dependences are removed by register renaming.
9. A VLIW processor relies on the compiler to schedule independent operations.
10. The reorder buffer lets instructions complete out of order but commit in program order.
11. Step 1: sets = 65,536/(32 × 1) = 2048. Step 2: index = log₂ 2048 = 11 bits (offset 5 bits, tag 32 - 16 = 16 bits).
12. A fully associative cache has no conflict misses (any block can go in any line).
13. Larger blocks reduce compulsory misses (spatial locality) but increase the miss penalty and may increase conflict misses.
14. Write-through with a write buffer lets the processor continue without stalling on stores.
15. A write to a line in the S state must first invalidate the other copies.
16. Sequential consistency: all processors see one global order that respects each program's order.
17. Under x86 total store order a store can be delayed past a later load to a different address.
18. GPU memory accesses are fastest when the threads of a warp access adjacent addresses (coalescing).
19. Below the ridge point the memory system limits performance: the kernel is memory bound.
20. Step 1: P ∝ V²f; scaling both by the same factor gives P ∝ s³. Step 2: the task takes 1/s times as long, so energy ∝ s², which is lower.

## Section B solutions

**B1.** Step 1 (A): MIPS = f/(CPI × 10⁶) = 3000/1.5 = **2000**; time = (10⁹ × 1.5)/(3 × 10⁹) = **0.5 s**.
Step 2 (B): MIPS = 2000/1.0 = **2000**; time = (1.2 × 10⁹ × 1.0)/(2 × 10⁹) = **0.6 s**.
Step 3: same MIPS but A is faster by 0.6/0.5 = **1.2 times**.

**B2.** Speedup = 1/((1 - f) + f/n) with f = 0.8.
Step 1: n = 4: 1/(0.2 + 0.2) = **2.5**. n = 16: 1/(0.2 + 0.05) = **4.0**. n → ∞: 1/0.2 = **5**.
Step 2: for a speedup of 3 on 4 processors: (1 - f) + f/4 = 1/3, so 1 - 0.75f = 0.3333 and f = 0.6667/0.75 = **0.889**.

**B3.** 32 KB, 8-way, 64-byte blocks, 32-bit addresses.
Step 1: sets = 32,768/(64 × 8) = **64**.
Step 2: offset = log₂ 64 = **6** bits; index = log₂ 64 = **6** bits; tag = 32 - 12 = **20** bits.
Step 3: yes, it can be indexed in parallel with the TLB: index + offset = 12 bits equals the 12-bit page offset of 4 KB pages, which is the same in the virtual and physical address; the cache is indexed while the TLB translates, and the physical tag is compared afterwards (VIPT).

**B4.** Step 1: AMAT = 1 + 0.1 × (10 + 0.2 × 100) = 1 + 0.1 × 30 = **4.0 ns**.
Step 2: global L2 miss rate = 0.1 × 0.2 = **2 percent**.
Step 3: CPI = 1 + 0.3 × 0.04 × 50 = 1 + 0.6 = **1.6**.

**B5.** Step 1: C0 read: (E, I), 1 transaction. Step 2: C1 read: (S, S), 2. Step 3: C0 write: (M, I), 3 (invalidate). Step 4: C1 read: (S, S), 4 (supply and write-back). Step 5: C1 write: (I, M), 5 (invalidate). Step 6: C0 read: (S, S), 6.

**B6.** Outcomes T N T N T N T N.
1-bit (starts predicting T): outcome 1 (T) correct; outcome 2 (N) predicted T, wrong; outcome 3 (T) predicted N, wrong; and so on: only the first is correct: **1 of 8**.
2-bit (starts at 2): T predicted T correct (counter 3); N predicted T wrong (2); T correct (3); N wrong (2); ...: correct on every T: **4 of 8**.
A history-based predictor uses the last outcome: after T it learns N and after N it learns T, so it predicts almost **8 of 8** after a short warm-up (99 percent over long runs).

**B7.** Step 1: ridge point = peak/bandwidth = 10 × 10¹²/(500 × 10⁹) = **20 FLOP/byte**.
Step 2: SAXPY intensity = 2/12 = 0.167 FLOP/byte; attainable = 500 GB/s × 0.167 = **83 GFLOP/s** (memory bound).
Step 3: vector add traffic = 3 × 4 B × 10⁹ = 12 GB; time = 12 GB/500 GB/s = **24 ms**.

**B8.** Step 1: relative dynamic power = 0.85² × 0.85 = 0.85³ = **0.614** (a saving of 38.6 percent).
Step 2: performance falls to 0.85: the task is 15 percent slower.
Step 3: energy = power × time = 0.614/0.85 = **0.72** of the original (28 percent less energy).

## Section C solutions

**C1.** Code: lw x1,0(x2); add x3,x1,x4; lw x5,0(x6); sub x7,x5,x3; sw x7,0(x8).
(a) Dependences: `add` needs x1 (first `lw`); `sub` needs x5 (second `lw`) and x3 (`add`); `sw` needs x7 (`sub`).
Without forwarding (a consumer's ID waits for the producer's WB):
Step 1: `lw` IF 1, ID 2, EX 3, MEM 4, WB 5.
Step 2: `add` needs x1 written in cycle 5: ID 5 (2 stalls), EX 6, MEM 7, WB 8.
Step 3: second `lw`: ID 6, EX 7, MEM 8, WB 9.
Step 4: `sub` needs x5 (WB 9) and x3 (WB 8): ID 9, EX 10, MEM 11, WB 12.
Step 5: `sw` needs x7 (WB 12): ID 12, EX 13, MEM 14, WB 15.
Total **15 cycles**.
With forwarding: base 5 + 4 = 9 cycles, plus one load-use bubble before `add` and one before `sub` (the second `lw` immediately precedes it): **11 cycles**.
(b) Reorder as `lw x1; lw x5; add x3,x1,x4; sub x7,x5,x3; sw x7`: each load now has an instruction between it and its use, so no stall: **9 cycles**.
(c) CPI = 1 + (0.25 × 0.4 × 1) + (0.2 × 0.15 × 3) = 1 + 0.10 + 0.09 = **1.19**; speedup over the unpipelined machine = 5/1.19 = **4.2**.

**C2.** Code: I1 DIV R1,R2,R3; I2 ADD R4,R1,R5; I3 SUB R5,R6,R7; I4 MUL R1,R8,R9; I5 ADD R10,R4,R1.
(a) **RAW**: I2 reads R1 (from I1); I5 reads R4 (I2) and R1 (I4). **WAR**: I3 writes R5, which I2 reads; I4 writes R1, which I2 reads. **WAW**: I4 and I1 both write R1.
(b) Renaming: I1: R1 → P1; I2: R4 → P4 (reads P1 and the old R5); I3: R5 → P5; I4: R1 → P6; I5: R10 → P10 (reads P4 and P6). True dependences: **I1 → I2 → I5** and **I4 → I5**. I3 is independent.
(c) In-order issue (an instruction cannot start before the previous one):
Step 1: I1 starts 1, finishes 5 (DIV, 5 cycles).
Step 2: I2 needs P1 (usable at 6): starts 6, finishes 6.
Step 3: I3 starts 7, finishes 7.
Step 4: I4 (MUL, 3 cycles) starts 8, finishes 10; its result is usable at 11.
Step 5: I5 needs P4 (usable at 7) and P6 (usable at 11): starts **11**, finishes 11.
Total **11 cycles**.
Out-of-order issue:
Step 6: I1 1 to 5; I3 starts 2 (finish 2); I4 starts 3 (finish 5, result usable at 6); I2 starts 6 (finish 6).
Step 7: I5 needs P4 (usable at 7) and P6 (usable at 6): starts **7**, finishes 7.
Total **7 cycles**.

**C3.**
(a) Block addresses (address/16): 0, 4, 0, 4, 1, 5, 1, 5, 0, 1.
Direct-mapped (4 sets): blocks 0 and 4 share set 0; blocks 1 and 5 share set 1: **MMMMMMMMMM** (10 misses).
2-way LRU (2 sets): **MMHHMMHHHH** (4 misses).
Fully associative (4 lines): **MMHHMMHHHH** (4 misses).
(b) Direct-mapped misses: 4 compulsory (first access to blocks 0, 4, 1, 5), 0 capacity (the 4 blocks used fit in the cache), 10 - 4 = **6 conflict**.
(c) Row-major access walks consecutive addresses: each 64-byte line (16 ints) is used 16 times and the prefetcher streams ahead. Column access has a stride of 4096 × 4 = 16 KB, so every access misses (4 of the 64 bytes used, a new page each time, lines evicted before reuse): 0.49/0.012 = 41 times slower. Remedy: **loop interchange** so the inner loop runs along a row, or **blocking** so that tiles fit in the cache.

**C4.**
(a) Step 1: C0 read: (E, I), 1 transaction.
Step 2: C0 write: the E → M upgrade is silent: (M, I), no transaction.
Step 3: C0 write again: (M, I), none.
Step 4: C1 write: invalidates C0's copy: (I, M), transaction 2.
Step 5: C0 read: (S, S), transaction 3.
**3 bus transactions** in total; writes by C0 while holding the line exclusively are free.
(b) **False sharing**: the two counters lie in one 64-byte line, so each write invalidates the other core's copy and the line ping-pongs: 0.91 s against 0.48 s, 1.9 times slower. Fix: pad or align each counter to its own cache line (64 or 128 bytes), or keep counters in thread-local variables.
(c) **Sequential consistency**: the result is as if all operations of all processors were executed in some single order that respects each processor's program order. x86-TSO allows a **store to be reordered after a later load to a different address** (the store waits in the store buffer while the load executes), for example the litmus test in which both processors can read 0.

**C5.**
(a) Step 1: blocks = ⌈10⁶/256⌉ = ⌈3906.25⌉ = **3907**. Step 2: warps per block = 256/32 = **8**.
(b) **Divergence**: threads of a warp share one instruction stream, so when they take different branches the two paths run one after the other with inactive lanes masked: the warp takes the time of both. **Coalescing**: when the threads of a warp access consecutive addresses the hardware merges them into a few wide memory transactions; scattered accesses need many transactions and waste bandwidth.
(c) Step 1: dot product intensity = 2/8 = 0.25 FLOP/byte; attainable = 500 GB/s × 0.25 = **125 GFLOP/s** (memory bound).
Step 2: a large blocked matrix multiplication has an arithmetic intensity far above the ridge point of 20 FLOP/byte (each loaded tile is reused many times), so it is compute bound and reaches the **10 TFLOP/s** peak.
(d) Power is limited, so energy should be spent where it is most useful: little cores and fixed-function accelerators do a task at a fraction of the energy of a big general-purpose core, and big cores run only latency-critical work. Performance per watt, not peak frequency, now decides the design.