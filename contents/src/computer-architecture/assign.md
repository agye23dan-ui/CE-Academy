# Computer Architecture: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. Every number in the solutions was computed with a script or measured on a real machine; where a measurement is quoted it was taken on an Intel Core i5-7300U laptop (2 cores, 4 threads; 32 KB 8-way L1 data cache with 64-byte lines) and your values will differ, though the pattern should match.

# Assignment 1: Performance and Pipelining (Chapters 1 and 2)

**Q1. The iron law.** A program executes 3 × 10^9 instructions with CPI 2.0 on a 3 GHz processor. (a) Its execution time [2]. (b) A new compiler reduces the instruction count by 20 percent but raises the CPI to 2.3: the new time and the speedup [4]. (c) Which of IC, CPI and clock rate does each of these affect: a better compiler, a larger cache, a deeper pipeline, a new instruction set? [4]

**Q2. MIPS is misleading.** Machine A runs at 3 GHz with CPI 1.5; machine B at 2 GHz with CPI 1.0. A program needs 10^9 instructions on A and 1.2 × 10^9 on B. Find the MIPS rating and the execution time of each and say which is faster and by how much [10].

**Q3. Amdahl's law.** (a) A program is 80 percent parallelisable. Find the speedup on 2, 4, 8, 16 and 1000 processors and the limit [4]. (b) What parallel fraction gives a speedup of 3 on 4 processors? [3] (c) A component used 40 percent of the time is made twice as fast: the overall speedup [3].

**Q4. Amdahl versus Gustafson.** A program has a 10 percent serial portion. (a) The fixed-size speedup on 16 processors by Amdahl's law [3]. (b) The scaled speedup by Gustafson's law [3]. (c) Explain why they differ [4].

**Q5. Pipeline hazards.** A five-stage pipeline (IF, ID, EX, MEM, WB) writes registers in the first half of a cycle and reads them in the second half. For
```
lw  x1, 0(x2)
add x3, x1, x4
sub x5, x3, x6
sw  x5, 0(x7)
```
(a) Identify every data hazard [3]. (b) Total cycles without forwarding [3]. (c) Total cycles with full forwarding [2]. (d) Reorder `lw x1; lw x3; add x5,x1,x3; sw x5; add x7,x1,x1` to remove the stall and give the cycles before and after [2].

**Q6. Pipeline performance.** (a) Loads are 25 percent of instructions and 40 percent of loads are followed by a dependent instruction (1 stall); branches are 20 percent with a 15 percent misprediction rate and a 3-cycle penalty. Find the CPI and the speedup of the 5-stage pipeline over an unpipelined machine of CPI 1 per stage-time [5]. (b) A 10 ns unpipelined datapath is split into five 2 ns stages with 0.2 ns register overhead: the clock period and the speedup [3]. (c) For 1000 instructions the ideal cycle count [2].

**Q7. Power.** Dynamic power is P = alpha C V^2 f. (a) Voltage and frequency are both reduced by 15 percent: the new power relative to the old and the saving [3]. (b) Performance falls by 15 percent: the energy for a fixed task [3]. (c) Why did clock rates stop rising around 2005 and what did designers do? [4]

## Solutions to Assignment 1

**Q1.** Iron law: Time = IC × CPI / f.
(a) Step 1: IC = 3 × 10⁹, CPI = 2.0, f = 3 × 10⁹ Hz.
Step 2: time = (3 × 10⁹ × 2.0)/(3 × 10⁹) = **2.0 s**.
(b) Step 1: new IC = 0.8 × 3 × 10⁹ = 2.4 × 10⁹; new CPI = 2.3.
Step 2: new time = (2.4 × 10⁹ × 2.3)/(3 × 10⁹) = 5.52/3 = **1.84 s**.
Step 3: speedup = 2.0/1.84 = **1.087** (the 20 percent drop in instructions is largely cancelled by the higher CPI).
(c) A better compiler affects IC (and sometimes CPI through scheduling). A larger cache affects CPI (fewer stall cycles), possibly clock rate if it lengthens the cycle. A deeper pipeline raises the clock rate but also CPI (hazards and branch penalties get worse). A new instruction set affects IC and possibly CPI and clock rate (simpler or more complex instructions).

**Q2.** MIPS = f/(CPI × 10⁶); time = IC × CPI / f.
Step 1 (A): MIPS = 3000/1.5 = **2000**; time = (10⁹ × 1.5)/(3 × 10⁹) = **0.5 s**.
Step 2 (B): MIPS = 2000/1.0 = **2000**; time = (1.2 × 10⁹ × 1.0)/(2 × 10⁹) = **0.6 s**.
Step 3: both have MIPS = 2000, yet A is 0.6/0.5 = **1.2 times faster**: MIPS ignores how many instructions are needed for the work. Execution time of the real program is the only reliable metric.

**Q3.** Amdahl: speedup = 1/((1 - f) + f/n).
(a) Step 1: f = 0.8, so speedup = 1/(0.2 + 0.8/n).
Step 2: n = 2: 1/(0.2 + 0.4) = **1.667**. n = 4: 1/(0.2 + 0.2) = **2.5**. n = 8: 1/(0.2 + 0.1) = **3.333**. n = 16: 1/(0.2 + 0.05) = **4.0**. n = 1000: 1/(0.2 + 0.0008) = **4.98**.
Step 3: limit as n → ∞: 1/0.2 = **5**.
(b) Step 1: 1/((1 - f) + f/4) = 3, so (1 - f) + f/4 = 1/3.
Step 2: 1 - 0.75f = 0.3333, so 0.75f = 0.6667 and f = 0.6667/0.75 = **0.889**.
(c) Step 1: the enhanced part is fraction 0.4 sped up by 2: new time = 0.6 + 0.4/2 = 0.8 (of the old time).
Step 2: speedup = 1/0.8 = **1.25**.

**Q4.** Serial fraction s = 0.1, n = 16 processors.
(a) Amdahl: 1/(0.1 + 0.9/16) = 1/(0.1 + 0.05625) = 1/0.15625 = **6.4**.
(b) Gustafson: scaled speedup = n - s(n - 1) = 16 - 0.1 × 15 = 16 - 1.5 = **14.5**.
(c) Amdahl fixes the problem size, so the serial part limits the speedup. Gustafson assumes the problem grows with the machine (a bigger problem solved in the same time), so the serial part stays a small share of the run time on the larger problem. They answer different questions: "how much faster can I solve this problem?" versus "how much bigger a problem can I solve in the same time?".

**Q5.** Code: lw x1,0(x2); add x3,x1,x4; sub x5,x3,x6; sw x5,0(x7).
(a) Read-after-write (RAW) hazards: `add` needs x1 from `lw`; `sub` needs x3 from `add`; `sw` needs x5 from `sub`. (Three dependences.)
(b) Without forwarding, a consumer's ID must wait until the producer's WB (the register is written in the first half and read in the second half), giving two stalls per dependence.
Step 1: base time for 4 instructions in a 5-stage pipeline = 5 + (4 - 1) = 8 cycles.
Step 2: stalls = 3 dependences × 2 = 6.
Step 3: total **14 cycles**.
(c) With full forwarding only the load-use hazard remains (one stall): 8 + 1 = **9 cycles**. The ALU-to-ALU and ALU-to-store dependences are forwarded without a stall.
(d) Original order: `lw x1; lw x3; add x5,x1,x3; sw x5; add x7,x1,x1`. The `add x5,x1,x3` uses x3 from the load immediately before it, so one stall: base 5 + 4 = 9 cycles, plus 1 stall = **10 cycles**.
Reordered: `lw x1; lw x3; add x7,x1,x1; add x5,x1,x3; sw x5`: the independent `add x7` fills the load delay slot, so there is no stall: **9 cycles**.

**Q6.**
(a) Step 1: load-use stalls = 0.25 (loads) × 0.4 (dependent) × 1 cycle = 0.10 cycles per instruction.
Step 2: branch stalls = 0.20 (branches) × 0.15 (mispredicted) × 3 cycles = 0.09.
Step 3: CPI = 1 + 0.10 + 0.09 = **1.19**.
Step 4: speedup over the unpipelined machine = 5/1.19 = **4.2** (the ideal is 5).
(b) Step 1: stage time = 2 ns + 0.2 ns register overhead = **2.2 ns** clock period.
Step 2: speedup = 10 ns/2.2 ns = **4.5**.
(c) Ideal cycle count for n = 1000 instructions on k = 5 stages: k + n - 1 = 5 + 1000 - 1 = **1004 cycles** (against 5000 unpipelined, a speedup of 4.98).

**Q7.** P = αCV²f.
(a) Step 1: V and f both scale by 0.85.
Step 2: P_new/P_old = 0.85² × 0.85 = 0.85³ = **0.614**: power falls by 38.6 percent.
(b) Step 1: performance falls to 0.85, so a fixed task takes 1/0.85 = 1.176 times as long.
Step 2: energy = power × time: 0.614 × 1.176 = **0.7225**: 27.7 percent less energy for the same work.
(c) Power density reached the limit of air cooling (about 100 W per cm²): raising the frequency raises V and f together (power about f³). Designers moved to multicore processors (more parallel work at moderate frequencies), more cache, power management (DVFS, clock and power gating) and specialised accelerators.

# Assignment 2: Instruction-Level Parallelism (Chapter 3)

**Q1. Predictor comparison.** A loop branch is taken three times then not taken (T T T N) repeatedly. Initial state: 1-bit predictor predicts taken; the 2-bit saturating counter starts at 2 (weakly taken; states 0, 1 predict not taken, 2, 3 taken). (a) List correct (c) and wrong (W) predictions for the first 12 outcomes for both predictors [6]. (b) Steady-state accuracy of each [2] (c) A history-based predictor with 4 history bits: what accuracy does it reach and why? [2]

**Q2. Other patterns.** Accuracy of the 1-bit, 2-bit and 4-bit-history predictors for (a) a loop branch taken 9 times then not taken, repeating [4]; (b) an alternating pattern T N T N ... [4]; (c) random outcomes [2].

**Q3. Misprediction cost.** A 2-wide processor has base CPI 0.5, 20 percent branches and a 15-cycle misprediction penalty. (a) CPI at 90 percent and 95 percent accuracy [4]. (b) What accuracy is needed for CPI 0.6? [3] (c) Why do deeper pipelines need better predictors? [3]

**Q4. In-order versus out-of-order.** Latencies: ADD 1, MUL 3, DIV 5; one instruction can start per cycle and an instruction starts in the first cycle its sources are ready (results usable the cycle after the latency).
```
I1  DIV R1, R2, R3
I2  ADD R4, R1, R5
I3  ADD R6, R7, R8
I4  MUL R9, R7, R8
I5  ADD R10, R4, R6
```
(a) Start and finish cycle of each instruction for in-order issue and total cycles [4]. (b) Same for out-of-order issue [4]. (c) What limits the speedup if the machine could issue two per cycle? [2]

**Q5. Dependences and renaming.**
```
I1  DIV R1, R2, R3
I2  ADD R4, R1, R5
I3  SUB R5, R6, R7
I4  MUL R1, R8, R9
I5  ADD R10, R4, R1
```
(a) List all RAW, WAR and WAW dependences [5]. (b) Rename the registers to remove the false dependences [3]. (c) Which instructions can then start in the first cycle? [2]

**Q6. Reorder buffer and speculation.** (a) What is a precise exception and why does an out-of-order machine need a reorder buffer to provide it? [4] (b) Describe what happens to speculative instructions after a branch misprediction [3] (c) Why are stores not written to the cache until they commit? [3]

**Q7. Superscalar limits.** (a) The ideal CPI of a 4-wide machine [2]. (b) Name four reasons real IPC is lower [4]. (c) On a laptop with 2 cores and 4 hardware threads a fully parallel floating-point loop ran 1.4 times faster with 2 threads and 1.7 times faster with 4: explain [4].

## Solutions to Assignment 2

**Q1.** Outcomes (12): T T T N T T T N T T T N.
(a) 1-bit predictor: predicts the previous outcome (initially T).
Step 1: outcome 1 (T): predict T, correct (c). Outcome 2 (T): predict T, c. Outcome 3 (T): predict T, c.
Step 2: outcome 4 (N): predict T, wrong (W); the predictor now holds N.
Step 3: outcome 5 (T): predict N, W; it now holds T. Outcome 6 (T): c. Outcome 7 (T): c.
Step 4: outcome 8 (N): W; outcome 9 (T): W; outcome 10 (T): c; outcome 11 (T): c; outcome 12 (N): W.
1-bit result: **c c c W W c c W W c c W**.
2-bit saturating counter (start 2, predicts taken when the counter is 2 or 3):
Step 1: outcomes 1 to 3 (T): counter 2 → 3 → 3 → 3, predictions T, all correct.
Step 2: outcome 4 (N): counter is 3, predicts T, wrong; counter 3 → 2 (still predicts taken).
Step 3: outcome 5 (T): predicts T, correct; counter back to 3. The pattern repeats.
2-bit result: **c c c W c c c W c c c W**.
(b) Steady state: the 1-bit predictor is wrong twice per 4 outcomes (after each N and again on the next T): accuracy **50 percent** (measured over 400 outcomes: 50.2 percent). The 2-bit predictor is wrong once per 4 (only on the N): **75 percent**.
(c) A predictor with 4 bits of history learns the pattern T T T N completely, since each of the four 4-bit histories determines the next outcome uniquely: about **98.5 percent** over 400 outcomes (misses only while warming up).

**Q2.**
(a) A loop branch taken 9 times then not taken (10 outcomes per loop).
1-bit: wrong at the N and at the T after it: 2 errors per 10, **80 percent** (measured 80.25 percent).
2-bit: wrong only at the exit N: 1 error per 10, **90 percent**.
4-bit history: the exit cannot be identified from the last 4 outcomes (the history T T T T occurs both before a T and before the N), so it behaves like a 2-bit predictor: about **89 percent**.
(b) Alternating T N T N:
1-bit: always predicts the previous outcome, which is always wrong: **0 percent** (measured 0.25 percent).
2-bit: the counter oscillates around the middle and is right half the time: **50 percent**.
History-based: the last outcome determines the next one: about **99 percent**.
(c) Random outcomes: about **50 percent** for all three (a measured run: 52.8, 52.5 and 52.8 percent): nothing can be learned.

**Q3.** CPI = base CPI + (branch fraction) × (1 - accuracy) × penalty.
(a) Step 1: accuracy 90 percent: 0.5 + 0.2 × 0.10 × 15 = 0.5 + 0.30 = **0.80**.
Step 2: accuracy 95 percent: 0.5 + 0.2 × 0.05 × 15 = 0.5 + 0.15 = **0.65**.
(b) Step 1: set 0.5 + 0.2 × m × 15 = 0.6, where m is the misprediction rate.
Step 2: 3m = 0.1, so m = 0.0333.
Step 3: accuracy = 1 - 0.0333 = **96.7 percent**.
(c) The penalty (about the pipeline depth up to branch resolution) grows with depth: each misprediction wastes more work, and wider machines have more instructions in flight to discard.

**Q4.** Latencies: ADD 1, MUL 3, DIV 5. An instruction starts when its sources are ready; results are usable the cycle after they finish.
(a) In-order issue (instructions start in program order, at most one per cycle):
Step 1: I1 (DIV R1) starts at cycle 1 and finishes at cycle 5.
Step 2: I2 (ADD R4 ← R1 + R5) needs R1, usable from cycle 6: starts 6, finishes 6.
Step 3: I3 (ADD R6) is behind I2 in order: starts 7, finishes 7.
Step 4: I4 (MUL R9) starts 8, finishes 10 (3 cycles).
Step 5: I5 (ADD R10 ← R4 + R6) starts 9 (sources ready), finishes 9.
Total: last finish is cycle **10**.
(b) Out-of-order issue (an instruction starts as soon as its sources are ready):
Step 1: I1 starts 1, finishes 5.
Step 2: I3 (independent) starts 2, finishes 2.
Step 3: I4 (independent) starts 3, finishes 5.
Step 4: I2 waits for R1 (usable at 6): starts 6, finishes 6.
Step 5: I5 needs R4 (usable at 7) and R6: starts 7, finishes 7.
Total **7 cycles** (30 percent fewer).
(c) The **critical path** of true dependences I1 → I2 → I5 = 5 + 1 + 1 = 7 cycles cannot be shortened: with two issues per cycle I3 and I4 still start early but the schedule remains 7 cycles.

**Q5.** Code: I1 DIV R1,R2,R3; I2 ADD R4,R1,R5; I3 SUB R5,R6,R7; I4 MUL R1,R8,R9; I5 ADD R10,R4,R1.
(a) **RAW** (true) dependences: I2 reads R1 written by I1; I5 reads R4 written by I2; I5 reads R1 (the latest write is I4).
**WAR** (a later write to a register an earlier instruction reads): I3 writes R5, which I2 reads; I4 writes R1, which I2 reads.
**WAW** (two writes to the same register): I4 and I1 both write R1.
(b) Give every new write a new physical register: I1: R1 → P1; I2: R4 → P4 (reads P1 and R5); I3: R5 → P5 (a new register, so I2 still reads the old R5); I4: R1 → P6; I5: R10 → P10 (reads P4 and P6). Now only the true dependences remain: I1 → I2 → I5 and I4 → I5.
(c) I1, I3 and I4 have no source that depends on an earlier result, so all three can start in the first cycle (limited only by issue width).

**Q6.** (a) A **precise exception** leaves the machine in a state as if all instructions before the faulting one had completed and none after it had started. An out-of-order machine finishes instructions out of order, so it needs the **reorder buffer** to hold results until they can **commit in program order**; on an exception the instructions after the faulting one are discarded and the visible state is exactly that of the commit point.
(b) Instructions fetched after a mispredicted branch are **squashed**: the ROB entries after the branch are flushed, the rename map is restored (from a checkpoint or by walking the ROB) and the front end is redirected to the correct target. The penalty is the time to refill the pipeline.
(c) A store whose instruction is later squashed must never become visible: the data is held in the store queue and written to the cache only when the store commits, so memory state is always precise.

**Q7.** (a) An ideal 4-wide machine completes 4 instructions per cycle: CPI = 1/4 = **0.25**.
(b) Reasons real IPC is lower: data dependences (limited instruction-level parallelism in the program); branch mispredictions; cache misses (the window fills while a miss is outstanding); limited fetch/decode bandwidth and structural limits (ports, ROB, issue queue size, physical registers).
(c) On a 2-core CPU with SMT the two threads on a core share its execution units, so the second hardware thread adds only the throughput of the idle units (about 20 to 40 percent), not a full core. The two physical cores plus SMT therefore give 1.7 rather than 4.

# Assignment 3: Memory, Multiprocessors and GPUs (Chapters 4 to 7)

**Q1. Cache address breakdown.** For 32-bit addresses give the offset, index and tag bits and the number of sets for (a) a 4 KB direct-mapped cache with 16-byte blocks, (b) a 32 KB 8-way cache with 64-byte blocks, (c) a 64 KB 2-way cache with 64-byte blocks [9]. (d) Why can a 32 KB 8-way L1 with 64-byte lines be indexed in parallel with the TLB when pages are 4 KB? [1]

**Q2. Cache trace.** A 64-byte cache with 16-byte blocks sees the byte addresses 0, 64, 0, 64, 16, 80, 16, 80, 0, 16. (a) Hit or miss for each access in a direct-mapped cache, a 2-way set-associative cache (LRU) and a fully associative cache [6]. (b) Classify the misses of the direct-mapped cache into compulsory, capacity and conflict [4].

**Q3. AMAT and CPI.** (a) Hit time 1 ns, miss rate 5 percent, miss penalty 100 ns: AMAT [2]. (b) Two levels: L1 hit 1 ns, miss rate 10 percent; L2 hit 10 ns, local miss rate 20 percent; memory 100 ns: AMAT and the global L2 miss rate [4]. (c) Base CPI 1.0, 30 percent loads/stores, 4 percent data miss rate, 50-cycle penalty: CPI [2]. Also include a 2 percent instruction-fetch miss rate (one fetch per instruction) [2].

**Q4. Measured locality.** A program summing a 4096 × 4096 int matrix took 0.012 s row by row and 0.49 s column by column on the test machine; a pointer-chasing test gave 1.5 ns for a 32 KB working set, 6 ns for 256 KB, 14 ns for 1 MB and about 110 to 125 ns for 16 to 64 MB. (a) Explain the 20 to 40 times difference quantitatively [4]. (b) What do the latency steps tell you about the cache sizes? [3] (c) Describe loop blocking for matrix multiplication [3].

**Q5. Coherence.** (a) Two cores access one block: C0 read, C1 read, C0 write, C1 read, C1 write, C0 read. Give the MESI states (C0, C1) after each access and the bus transactions [6]. (b) Core 0 reads then writes twice, then core 1 writes, then core 0 reads: states and bus transactions [2]. (c) What is false sharing? On the test machine two threads incrementing adjacent counters took 0.91 s against 0.48 s when padded apart: explain and fix [2].

**Q6. Roofline.** A GPU has 10 TFLOP/s peak and 500 GB/s memory bandwidth. (a) The ridge point [2]. (b) The attainable performance of SAXPY (2 FLOP, 12 bytes per element) and of a dot product (2 FLOP, 8 bytes) [4]. (c) The minimum time to add two vectors of 10^9 floats on this GPU and on a CPU with 51.2 GB/s [4].

**Q7. GPUs and multicore.** (a) How many blocks of 256 threads cover 10^6 elements, and how many warps are in a block? [3] (b) Explain branch divergence in a warp [3] (c) Why do GPUs need many more threads than cores? [2] (d) Why does a program with a 5 percent serial portion gain at most 20 times from any number of cores? [2]

## Solutions to Assignment 3

**Q1.** For a cache: number of sets = capacity/(block size × ways); offset bits = log₂(block size); index bits = log₂(sets); tag bits = 32 - index - offset.
(a) 4 KB direct-mapped, 16-byte blocks: sets = 4096/(16 × 1) = 256. Offset = log₂ 16 = **4**, index = log₂ 256 = **8**, tag = 32 - 8 - 4 = **20**.
(b) 32 KB 8-way, 64-byte blocks: sets = 32,768/(64 × 8) = 64. Offset = **6**, index = **6**, tag = 32 - 12 = **20**.
(c) 64 KB 2-way, 64-byte blocks: sets = 65,536/(64 × 2) = 512. Offset = **6**, index = **9**, tag = 32 - 15 = **17**.
(d) The index and offset bits together (6 + 6 = 12) lie entirely within the 12-bit page offset of a 4 KB page, which is identical in the virtual and physical address. So the cache can be indexed with the virtual address while the TLB translates the page number, and the physical tag is compared afterwards (virtually indexed, physically tagged).

**Q2.** 64-byte cache, 16-byte blocks: 4 lines. Block address = address/16: the accesses 0, 64, 0, 64, 16, 80, 16, 80, 0, 16 map to blocks 0, 4, 0, 4, 1, 5, 1, 5, 0, 1.
(a) **Direct-mapped** (4 sets, set = block mod 4): blocks 0 and 4 both map to set 0, and blocks 1 and 5 both map to set 1. Each access evicts the previous block of its pair: M M M M M M M M M M (**10 misses**).
**2-way** (2 sets, set = block mod 2): blocks 0 and 4 are both in set 0 (two ways), blocks 1 and 5 both in set 1 (two ways). Accesses: block 0 M, 4 M, 0 H, 4 H, 1 M, 5 M, 1 H, 5 H, 0 H, 1 H: **4 misses**.
**Fully associative** (4 lines hold all of 0, 4, 1, 5): the same sequence, **4 misses**.
(b) The 10 direct-mapped misses: **4 compulsory** (the first access to each of blocks 0, 4, 1, 5), **0 capacity** (the four blocks used fit in the cache, and the fully associative cache misses only 4 times), and **6 conflict** misses (10 - 4 = 6).

**Q3.**
(a) AMAT = hit time + miss rate × miss penalty = 1 + 0.05 × 100 = **6 ns**.
(b) Step 1: AMAT = L1 hit + L1 miss × (L2 hit + L2 local miss × memory) = 1 + 0.1 × (10 + 0.2 × 100).
Step 2: = 1 + 0.1 × 30 = **4.0 ns**.
Step 3: global L2 miss rate = L1 miss rate × L2 local miss rate = 0.1 × 0.2 = **2 percent**.
(c) Step 1: CPI = base + (memory references per instruction) × miss rate × penalty = 1 + 0.3 × 0.04 × 50 = 1 + 0.6 = **1.6**.
Step 2: with instruction fetch misses (1 fetch per instruction at 2 percent): 1 + (1 × 0.02 + 0.3 × 0.04) × 50 = 1 + 0.032 × 50 = **2.6**.

**Q4.**
(a) Step 1: Row-by-row summation reads consecutive addresses, so each 64-byte line (16 ints) is fetched once and used 16 times, and the hardware prefetcher streams ahead.
Step 2: Column-by-column access has a stride of 4096 × 4 bytes = 16 KB: every access touches a different line (and a different page, stressing the TLB), uses only 4 of the 64 bytes fetched, and the line is evicted (the 64 MB matrix is far larger than the cache) before the next column needs it.
Step 3: The measured ratio 0.49/0.012 = 41 is explained by the extra memory traffic (up to 16 times) and the latency of non-streaming accesses.
(b) The latency steps follow the hierarchy: about 1.5 ns up to 32 KB (L1: 4 to 5 cycles); 3.5 ns at 64 KB (partly L2) and 6 ns at 256 KB (L2); 14 ns at 1 MB (L3); then a jump to 58 ns at 4 MB (beyond the 3 MB L3, mostly DRAM) and 110 to 125 ns (DRAM). The knees at about 32 KB, 256 KB and 3 MB match the L1, L2 and L3 sizes.
(c) **Blocking (tiling)**: split the matrices into B × B tiles chosen so that three tiles fit in the cache (3B² × element size ≤ cache size) and compute the product tile by tile. Each tile is loaded once and reused B times, reducing memory traffic from about n³ elements to about n³/B.

**Q5.** MESI states: M modified, E exclusive, S shared, I invalid.
(a) Step 1 (C0 read): C0 fetches the block: states **(E, I)**; bus transactions so far: 1.
Step 2 (C1 read): C1 fetches it, both become shared: **(S, S)**; total 2.
Step 3 (C0 write): C0 upgrades with an invalidate: **(M, I)**; total 3.
Step 4 (C1 read): C0 supplies the data and writes back, both shared: **(S, S)**; total 4.
Step 5 (C1 write): C1 invalidates C0's copy: **(I, M)**; total 5.
Step 6 (C0 read): C1 supplies the data, both shared: **(S, S)**; total 6.
(b) C0 read: (E, I), 1 transaction. C0 write: the E → M upgrade is silent (no bus transaction), (M, I). C0 write again: no transaction. C1 write: invalidates C0, (I, M), transaction 2. C0 read: (S, S), transaction 3. Writes to a block held exclusively are free.
(c) **False sharing**: logically separate variables lie in the same cache line, so a write by one core invalidates the other core's copy and the line ping-pongs although nothing is truly shared. The adjacent counters took 0.91 s against 0.48 s when padded, 1.9 times longer. Fix: pad or align each thread's data to the line size (64 or 128 bytes) so each counter has its own line.

**Q6.** Roofline: attainable performance = min(peak, bandwidth × arithmetic intensity).
(a) Ridge point = peak/bandwidth = 10 × 10¹² FLOP/s ÷ 500 × 10⁹ B/s = **20 FLOP/byte**.
(b) SAXPY: intensity = 2 FLOP/12 bytes = 0.167 FLOP/byte; performance = 500 GB/s × 0.167 = **83 GFLOP/s** (memory bound, 0.8 percent of peak).
Dot product: intensity = 2/8 = 0.25 FLOP/byte; performance = 500 × 0.25 = **125 GFLOP/s**.
(c) Step 1: adding two vectors of 10⁹ floats reads 2 × 4 GB and writes 4 GB: traffic = 3 × 4 × 10⁹ = 12 GB.
Step 2: GPU time = 12 GB/500 GB/s = **24 ms**.
Step 3: CPU time = 12 GB/51.2 GB/s = **234 ms** (both limited by memory bandwidth, not arithmetic).

**Q7.**
(a) Step 1: blocks = ⌈10⁶/256⌉ = ⌈3906.25⌉ = **3907**.
Step 2: warps per block = 256/32 = **8**.
(b) All 32 threads of a warp share one instruction stream. When threads take different sides of an `if`, the hardware executes both paths one after the other with the non-participating threads masked off, so the warp takes the sum of the two path times and lanes sit idle.
(c) GPUs hide memory latency by switching between warps: while one warp waits for DRAM (hundreds of cycles) others run, which requires tens of thousands of threads in flight.
(d) By Amdahl's law the speedup is limited by 1/0.05 = **20** as the number of cores tends to infinity, because the serial part takes 5 percent of the original time regardless of the core count.