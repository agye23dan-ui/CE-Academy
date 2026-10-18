# Computer Architecture: Lecture Notes

Computer Organization showed how a simple processor and memory system work. This course asks how modern machines get their speed: deep pipelines, branch prediction, out-of-order superscalar execution, cache hierarchies, multicore coherence, vector units and GPUs, all under power limits. Calculations and simulations here were run with scripts; the experiments were compiled with gcc and measured on a real laptop (Intel Core i5-7300U: 2 cores, 4 hardware threads, 2.6 GHz base; L1 data cache 32 KB 8-way with 64-byte lines, L2 256 KB, L3 3 MB), so those timings are real but machine-specific. Prerequisites: Computer Organization, Digital Logic Design, C programming and Operating Systems.

# Chapter 1: Performance and Cost

## 1.1 The iron law
CPU time = instruction count (IC) × cycles per instruction (CPI) × clock period = IC × CPI / f.
Each factor belongs to a different layer: IC to the program, compiler and instruction set; CPI to the microarchitecture; clock rate to the circuit design and technology.

Example. A program of 4 × 10^9 instructions on a 2.5 GHz processor with CPI 1.6 takes 4 × 10^9 × 1.6/(2.5 × 10^9) = **2.56 s**.

**MIPS is a poor metric.** Machine A: 3 GHz, CPI 1.5. Machine B: 2 GHz, CPI 1.0. Both run at 2000 MIPS (A: 3000/1.5; B: 2000/1.0). If a program takes 10^9 instructions on A but 1.2 × 10^9 on B (a weaker instruction set), A needs 0.5 s and B needs 0.6 s: A is **1.2 times** faster although their MIPS are equal. Compare execution time on real workloads (benchmark suites such as SPEC CPU), never MIPS or clock rate alone.

## 1.2 Amdahl's law
If a fraction f of execution time can be sped up by a factor s, the overall speedup is 1/((1 - f) + f/s).

For a program that is 80 percent parallelisable on n processors: n = 2: **1.67**; n = 4: **2.5**; n = 8: **3.33**; n = 16: **4.0**; n = 1000: 4.98; the limit is 1/0.2 = **5**. The serial fraction dominates. To get a speedup of 3 on 4 processors, the parallel fraction must be f = (1 - 1/3)/(1 - 1/4) = **0.889**.

Another use: speeding up a component that is used 40 percent of the time by a factor of 2 gives only 1/(0.6 + 0.4/2) = **1.25** overall.

**Gustafson's law** looks at scaling the problem with the machine: with serial fraction s of the parallel run time, speedup = n - s (n - 1); for s = 0.1 and n = 16 it is **14.5**. Amdahl is pessimistic when the problem grows with the machine.

Principles of design: make the common case fast; exploit parallelism at every level (instruction, data, thread); exploit locality; trade off with the **dependability** and cost.

## 1.3 Power and the end of frequency scaling
Dynamic power P = alpha C V^2 f (alpha is the activity factor, C the switched capacitance). Raising frequency usually needs higher voltage, so power grows roughly as f^3. In the mid-2000s chips reached about 100 W per cm^2 (the **power wall**) and clock rates stopped near 3 to 4 GHz; designers moved to multicore and specialised accelerators. Example: reducing both voltage and frequency by 15 percent cuts power to 0.85^3 = **0.614** (a 38.6 percent saving) while performance falls 15 percent: the energy to finish a fixed task is 0.614/0.85 = **0.72** of before, so slowing down saves energy. Static (leakage) power also matters and is paid even when idle; chips use clock gating, power gating and **DVFS** (dynamic voltage and frequency scaling). **Dark silicon**: not all transistors can be on at once within the power budget, which motivates accelerators.

# Chapter 2: Pipelining and Hazards

## 2.1 The classic five-stage pipeline
IF, ID, EX, MEM, WB. With n instructions and k stages the ideal time is k + n - 1 cycles, so for n = 1000, k = 5: 1004 cycles against 5000 unpipelined (speedup **4.98**). Pipeline registers add overhead: a 10 ns datapath split into five 2 ns stages plus 0.2 ns latch overhead has a 2.2 ns cycle, a speedup of 10/2.2 = **4.5**, not 5.

## 2.2 Hazards
- **Structural**: two instructions need the same resource (a single memory port); fixed by separate instruction and data caches or more ports.
- **Data**: an instruction needs a result that is not ready yet. Types: **RAW** (read after write, the true dependence), **WAR** (anti-dependence) and **WAW** (output dependence). In an in-order pipeline only RAW hazards occur.
- **Control**: the next instruction is unknown until a branch resolves.

**Forwarding (bypassing)** passes the ALU or memory result directly to the EX stage of the next instruction. A **load-use hazard** cannot be removed by forwarding (the loaded data is available only at the end of MEM) and costs one stall cycle.

Worked example (registers write in the first half of a cycle, read in the second):
```
lw  x1, 0(x2)
add x3, x1, x4
sub x5, x3, x6
sw  x5, 0(x7)
```
Without forwarding each dependent instruction waits for the producer's write-back: 2 stalls for each of the three dependences, so **5 + 3 + 6 = 14 cycles**. With forwarding the only stall is the load-use bubble: **5 + 3 + 1 = 9 cycles**. A chain of four dependent ALU instructions takes 14 cycles without forwarding and **8** with it (no stalls).

**Scheduling** removes stalls: the sequence `lw x1; lw x3; add x5,x1,x3; sw x5; add x7,x1,x1` takes 10 cycles with forwarding (one load-use stall before the add); moving the independent `add x7` between the loads and the dependent add gives `lw x1; lw x3; add x7,x1,x1; add x5,x1,x3; sw x5` in **9 cycles** with no stall.

**Pipeline CPI** = ideal CPI + stalls per instruction. Example: 25 percent loads of which 40 percent are followed by a dependent instruction (1 stall), 20 percent branches with a 15 percent misprediction rate and a 3-cycle penalty: CPI = 1 + 0.25 × 0.4 × 1 + 0.2 × 0.15 × 3 = **1.19**; the real speedup of the 5-stage pipeline is 5/1.19 = **4.2**.

# Chapter 3: Instruction-Level Parallelism

## 3.1 Branch prediction
Branches are about 15 to 20 percent of instructions; with a deep pipeline (15 to 20 stages) a misprediction costs 15 or more cycles, so predictors must be very accurate.

**Static**: always not taken, backward taken forward not taken. **Dynamic**:
- **1-bit predictor** per branch: predict what happened last time.
- **2-bit saturating counter** (states 0, 1 = predict not taken; 2, 3 = predict taken): changes its prediction only after two consecutive surprises.
- **Correlating (two-level) predictors**: use the recent global history of branch outcomes to index the table; **gshare** XORs history with the branch address; modern CPUs use TAGE and perceptron predictors.
- **Branch target buffer (BTB)** caches branch target addresses; a **return address stack** predicts returns.

Results from a simulation (initial predictor state: predict taken; 2-bit counter initially weakly taken):
```
Pattern (loop branch)        1-bit    2-bit    gshare (4-bit history)
T T T N repeating (4 iter)    50.2%    75.0%    98.5%
9 T then N repeating          80.1%    90.0%    89.2%
T N T N alternating            0.2%    50.0%    99.3%
random                        52.8%    52.5%    52.8%
```
For a loop that runs 10 iterations the 1-bit predictor is wrong twice per loop exit (once at the exit and once when re-entering), while the 2-bit counter is wrong only at the exit: 90 percent. History-based predictors learn the alternating and short-loop patterns almost perfectly; **random data cannot be predicted** (about 50 percent).

First 12 outcomes of T T T N: the 1-bit predictor is wrong at positions 4, 5, 8, 9, 12 (trace `cccWWccWWccW`); the 2-bit counter is wrong only at the N outcomes, 4, 8, 12 (trace `cccWcccWcccW`).

**Cost of mispredictions**: CPI = base CPI + branch frequency × misprediction rate × penalty. For a 2-wide machine with base CPI 0.5, 20 percent branches and a 15-cycle penalty: 90 percent accuracy gives 0.5 + 0.2 × 0.1 × 15 = **0.8**; 95 percent gives **0.65**.

**Measured effect** (C loop `if (d[i] >= 128) s += d[i]` over 16 million random values from 0 to 255, repeated 10 times, compiled to a real branch): unsorted data took **0.95 s**, the same data sorted took **0.24 s**: **4.0 times** faster, only because the branch becomes predictable. (With the compiler's conditional-move optimisation the difference disappears: the branch is removed.)

## 3.2 Dynamic scheduling
In-order issue stalls on any dependence. **Out-of-order (OoO) execution** issues instructions as soon as their operands are ready, while still **committing in program order**.

Key mechanisms:
- **Register renaming** removes WAR and WAW (false) dependences by mapping architectural registers onto a larger pool of physical registers.
- **Reservation stations / issue queue**: instructions wait for operands, results are broadcast on a common data bus (Tomasulo's algorithm).
- **Reorder buffer (ROB)**: holds results until commit in order, giving **precise exceptions** and allowing **speculation** (execute past an unresolved branch; discard on a misprediction).
- **Load/store queue**: orders memory operations and forwards store data to later loads.

Worked example (single issue, one new instruction can start per cycle; latencies ADD 1, MUL 3, DIV 5; an instruction starts at the first cycle its sources are ready):
```
I1  DIV R1, R2, R3
I2  ADD R4, R1, R5     depends on I1
I3  ADD R6, R7, R8
I4  MUL R9, R7, R8
I5  ADD R10, R4, R6    depends on I2, I3
```
**In-order**: I1 starts at cycle 1 and finishes at 5; I2 waits until 6; I3 cannot start before I2 (cycle 7); I4 at 8 (finishes 10); I5 at 9: done at cycle **10**. **Out-of-order**: I3 starts at 2, I4 at 3 (finishes 5), I2 at 6, I5 at 7: done at cycle **7**. OoO hides the 5-cycle divide with independent work: 30 percent faster. Even with two issues per cycle the critical path (I1 to I2 to I5 = 5 + 1 + 1) still gives 7.

**Superscalar**: issue several instructions per cycle. An n-wide machine has an ideal CPI of 1/n (a 4-wide machine, 0.25). Practical IPC is limited by dependences, branch prediction, cache misses and instruction fetch bandwidth, typically 1 to 3. Modern cores (6 to 8 wide, ROB of several hundred entries) still extract only a few instructions per cycle on typical code: the **ILP wall**.

**VLIW and EPIC**: the compiler packs independent operations into long instruction words; simple hardware, but sensitive to unpredictable latencies and binary compatibility.

**Simultaneous multithreading (SMT / Hyper-Threading)** runs instructions from two or more threads in the same core to fill unused issue slots. On the test laptop (2 cores, 4 hardware threads), a fully parallel floating-point loop sped up only 1.4 to 1.5 times with 2 threads and 1.7 times with 4: SMT threads share the core's execution units.

# Chapter 4: The Memory Hierarchy

## 4.1 Locality and hierarchy
**Temporal locality** (recently used items are used again) and **spatial locality** (nearby items are used soon) make a small fast memory in front of a large slow one effective. Typical latencies: registers under 1 ns; L1 cache about 1 to 2 ns (4 cycles); L2 about 4 to 6 ns; L3 about 15 to 60 ns; DRAM about 80 to 120 ns; SSD about 100 μs; disk about 10 ms.

**Measured on the test laptop** (a pointer-chasing loop in which every load depends on the previous one, so the time per load is the true latency, for working sets of increasing size):
```
working set     latency per load
4 KB            1.9 ns     (L1 hit, 4 to 5 cycles)
32 KB           1.5 ns
64 KB           3.5 ns     (spills out of the 32 KB L1)
256 KB          6.0 ns     (L2)
1 MB           14.0 ns     (L3)
4 MB           57.7 ns     (larger than the 3 MB L3: mostly DRAM)
16 MB         107.5 ns
64 MB         125.3 ns     (DRAM)
```
The steps in the curve reveal the cache sizes: a 60-fold difference between L1 and DRAM.

## 4.2 Cache organisation
A cache holds blocks (lines) of 2^b bytes. An address splits into **tag | index | block offset**.
- **Direct mapped**: each block maps to exactly one set: index = (block address) mod (number of sets).
- **n-way set associative**: a block may be in any of n lines of its set (compare n tags in parallel).
- **Fully associative**: any line (one set).
Number of sets = cache size/(block size × associativity). Address breakdown examples (32-bit addresses):
- 4 KB direct-mapped, 16-byte blocks: 256 sets, offset **4** bits, index **8** bits, tag **20** bits.
- 32 KB 8-way, 64-byte blocks: 64 sets, offset **6**, index **6**, tag **20**.
- 64 KB 2-way, 64-byte blocks: 512 sets, offset **6**, index **9**, tag **17**.
Each line also has a valid bit (and a dirty bit for write-back).

**Replacement**: LRU (or an approximation such as pseudo-LRU), random, FIFO. **Write policies**: write-through (every write goes to the next level; simple, needs a write buffer) versus write-back (write only the cache, set the dirty bit and write the block when evicted; less traffic, the standard choice); **write-allocate** (bring the block on a write miss) versus no-write-allocate.

## 4.3 Worked trace: placement matters
A 64-byte cache with 16-byte blocks (4 blocks) and the byte-address sequence 0, 64, 0, 64, 16, 80, 16, 80, 0, 16:
- **Direct-mapped** (4 sets): 0 and 64 map to set 0; 16 and 80 map to set 1; each pair evicts the other every time: **10 misses of 10** (all misses).
- **2-way set associative** (2 sets): 0, 64 are both kept in set 0, and 16, 80 in set 1: pattern MMHHMMHHHH, **4 misses** (6 hits).
- **Fully associative** (4 lines): the same, **4 misses**.
**The three Cs**: **compulsory** misses (first access; 4 here), **capacity** misses (the working set does not fit), **conflict** misses (too little associativity: the 6 extra misses of the direct-mapped cache). Doubling associativity removes conflict misses but increases hit time and energy.

A simple loop reading 1024 consecutive 4-byte integers with 64-byte blocks has 1 miss per 16 accesses (miss rate **6.25 percent**: 64 compulsory misses).

## 4.4 Average memory access time
AMAT = hit time + miss rate × miss penalty. Example: hit time 1 ns, miss rate 5 percent, penalty 100 ns: **6 ns**. With two levels: AMAT = t(L1) + m(L1) × (t(L2) + m(L2 local) × t(memory)). With L1 1 ns and 10 percent miss rate, L2 10 ns with 20 percent local miss rate, memory 100 ns: AMAT = 1 + 0.1 × (10 + 0.2 × 100) = **4.0 ns** (the global L2 miss rate is 0.1 × 0.2 = 2 percent).
CPI with memory stalls: base CPI 1.0, 30 percent loads/stores with a 4 percent miss rate and a 50-cycle penalty: CPI = 1 + 0.3 × 0.04 × 50 = **1.6**; if every instruction also fetches with a 2 percent instruction-miss rate: 1 + (0.02 + 0.3 × 0.04) × 50 = **2.6**.

## 4.5 Software and hardware optimisations
- **Loop interchange and blocking (tiling)**: traverse data in the order it is stored and work on tiles that fit in the cache.
- **Measured**: summing a 4096 × 4096 matrix of ints (64 MB) row by row (contiguous) took **0.012 to 0.025 s**; column by column (stride 16 KB) took **0.49 to 0.50 s**: **20 to 40 times slower** for exactly the same arithmetic. Every column access touches a new cache line and a new page.
- Hardware: **prefetching** (next-line, stride), non-blocking caches (several outstanding misses, "miss under miss"), way prediction, victim caches, critical-word-first.
- **Virtual memory interplay**: a TLB lookup runs in parallel with the cache index (virtually indexed, physically tagged L1 requires cache size/associativity <= page size: 32 KB / 8 ways = 4 KB = one page).

# Chapter 5: Multiprocessors and Cache Coherence

## 5.1 Why multicore
Single-thread performance stalled (power and ILP walls); chip makers put several cores on a die. The software must supply **thread-level parallelism**. Amdahl's law applies: the serial part limits the speedup.

## 5.2 Cache coherence
Each core has a private cache, so several copies of one block can exist. The system must make writes visible: **a read returns the most recently written value** and writes to one location are seen in the same order by everyone. **Snooping protocols** (small systems, a shared bus or ring) broadcast; **directory protocols** (large systems) keep a record of which caches hold each block.

**MESI** (the most common): each cache line is **M**odified (dirty, only copy), **E**xclusive (clean, only copy), **S**hared (clean, possibly several copies) or **I**nvalid. Rules: a read miss with no other copy gives E, otherwise S (an M copy elsewhere is written back and both become S); a write to S or I **invalidates** the other copies (bus transaction) and gives M; a write to E becomes M silently (no bus traffic).

Trace for two cores (C0, C1) on one block, giving the states (C0 C1) and the cumulative number of bus transactions:
```
C0 read    E I    1
C1 read    S S    2
C0 write   M I    3   (invalidate C1)
C1 read    S S    4   (C0 writes back, both shared)
C1 write   I M    5   (invalidate C0)
C0 read    S S    6
```
and for a core that keeps the block to itself: C0 read (E, 1 transaction), C0 write (M, **no** transaction), C0 write (M, none), C1 write (I M, 2), C0 read (S S, 3). Writes to a block already exclusive are free; **sharing is expensive**.

**False sharing**: two threads write **different** variables that happen to lie in the same cache line; the line ping-pongs between the cores although no data is really shared. **Measured**: two threads each incrementing their own 8-byte counter 200 million times took **0.91 to 0.94 s** when the counters were adjacent (same 64-byte line) but **0.48 to 0.50 s** when padded 128 bytes apart: **1.9 times slower**. Fix: pad or align per-thread data to the cache-line size.

## 5.3 Memory consistency and synchronisation
A **memory consistency model** defines the order in which one core's writes appear to others. **Sequential consistency** (as if operations were interleaved in program order) is the easiest to reason about but forbids many optimisations; real machines are weaker (x86 uses **TSO**: stores can be delayed by a store buffer; ARM and RISC-V are weaker still), so programmers use atomic operations (compare-and-swap, fetch-and-add, load-linked/store-conditional), **fences**, and locks. Peterson's algorithm needs sequentially consistent atomics to work.

**Taxonomy (Flynn)**: SISD, SIMD (vector, GPU), MISD, MIMD (multicore). **Shared-memory** multiprocessors: **UMA** (uniform) versus **NUMA** (a core accesses its local memory faster than remote); message-passing clusters; warehouse-scale computers.

# Chapter 6: Data-Level Parallelism and GPUs

## 6.1 SIMD and vector processing
One instruction operates on a vector of elements. x86 SSE/AVX (128/256/512-bit), ARM NEON/SVE, RISC-V vector extension. A 256-bit AVX register holds 8 single-precision floats, so one instruction does 8 additions. Compilers **auto-vectorise** simple loops; data must be contiguous and aligned and the loop free of dependences (and aliasing).

## 6.2 GPU architecture
A GPU has many simple cores grouped in **streaming multiprocessors**; threads are organised in **blocks**; the hardware executes groups of 32 threads (**warps**) in lock-step (**SIMT**): one instruction stream, many threads. Key ideas:
- **Massive multithreading hides latency**: when a warp waits for memory, another warp runs (no big caches or branch predictors needed).
- **Branch divergence**: if threads of a warp take different paths the paths run one after the other, wasting lanes.
- **Coalescing**: adjacent threads should access adjacent addresses so a warp's loads combine into few memory transactions.
- Memory hierarchy: registers, shared memory (software-managed, per block), L2, high-bandwidth global memory.
For a vector of 10^6 elements and 256 threads per block you launch ceil(10^6/256) = **3907** blocks.

## 6.3 The roofline model
Attainable performance = min(peak compute, memory bandwidth × arithmetic intensity), where **arithmetic intensity** = floating-point operations per byte moved from memory. For a machine with 10 TFLOP/s peak and 500 GB/s: the **ridge point** is 10 × 10^12/(500 × 10^9) = **20 FLOP/byte**.
- SAXPY (y = a x + y, 2 FLOP and 12 bytes per element): intensity 0.167 gives min(10 TFLOP/s, 500 GB/s × 0.167) = **83 GFLOP/s**: **memory bound**.
- A dot product (2 FLOP, 8 bytes): 0.25 gives **125 GFLOP/s**.
- A large blocked matrix multiplication with intensity above 20 is **compute bound** and reaches the peak.
Vector addition on 10^9 floats moves 12 GB: at 500 GB/s the GPU needs at least **24 ms**; a CPU with dual-channel DDR4-3200 (3200 × 10^6 × 8 B × 2 = 51.2 GB/s) needs at least **234 ms**. Moving data over PCIe may cost more than the computation: GPUs pay off only with high arithmetic intensity and enough parallelism.

# Chapter 7: Specialisation and Energy
With Dennard scaling over, performance per watt improves through **domain-specific architectures**: tensor/matrix engines for neural networks (a systolic array performs thousands of multiply-accumulates per cycle with local data movement), video codecs, cryptographic engines, FPGAs. Energy facts: an off-chip DRAM access costs roughly 100 to 1000 times the energy of an arithmetic operation, so reducing data movement matters more than reducing arithmetic. **Heterogeneous** chips combine big (fast) and little (efficient) cores (big.LITTLE) with GPUs and accelerators.

## Quick reference
- CPU time = IC × CPI / f. Amdahl: 1/((1 - f) + f/s). Pipeline CPI = 1 + stalls.
- AMAT = hit + miss rate × penalty; sets = size/(block × ways); tag bits = 32 - index - offset.
- Branch penalty CPI = f_branch × miss rate × penalty. N-wide ideal CPI = 1/N.
- Roofline: attainable = min(peak, bandwidth × intensity). Dynamic power = alpha C V^2 f.
