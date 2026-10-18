# Computer Organization: Final Examination

Duration: 3 hours. Calculator and the RISC-V reference card allowed. Total: 100 marks. Assume RV32I and the classic five-stage pipeline (IF, ID, EX, MEM, WB) unless stated.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** Which change reduces CPU time without changing the instruction count?
A) a lower CPI  B) a larger program  C) more instructions per task  D) a longer clock period

**2.** Dynamic power in CMOS is proportional to
A) C V f  B) C V² f  C) V / f  D) C / V

**3.** The hexadecimal word 0x000000FF in 32-bit two's complement is
A) -1  B) 255  C) -255  D) 127

**4.** The RISC-V instruction `jal ra, label` does what?
A) branches if equal  B) jumps to label and saves the return address in ra  C) loads a word  D) returns from a procedure

**5.** To return from a procedure in RISC-V one uses
A) jal x0, ra  B) ret (jalr x0, 0(ra))  C) lw ra, 0(sp)  D) beq ra, x0

**6.** The stack in RISC-V conventionally
A) grows towards higher addresses  B) grows towards lower addresses  C) is in the register file  D) is read-only

**7.** In IEEE 754 single precision, the pattern 0x3F800000 is
A) 0  B) 1.0  C) 2.0  D) NaN

**8.** In a single-cycle processor the clock period is determined by
A) the average instruction  B) the shortest instruction  C) the longest instruction  D) the number of registers

**9.** For the instruction `sw`, the control signal MemWrite is
A) 0  B) 1  C) don't care  D) high impedance

**10.** An ideal 5-stage pipeline (no hazards) completes n instructions in
A) 5n cycles  B) n + 4 cycles  C) n cycles  D) 5 cycles

**11.** A RAW hazard means
A) read after write  B) write after write  C) write after read  D) read after read

**12.** A branch predictor that uses a 2-bit saturating counter
A) changes its prediction after one wrong outcome  B) needs two wrong outcomes in a row to change a strong prediction  C) never mispredicts  D) predicts always taken

**13.** Associativity reduces mainly which kind of miss?
A) compulsory  B) conflict  C) capacity  D) coherence

**14.** For a fixed cache capacity, doubling the block size (direct-mapped) leads to
A) more index bits  B) fewer index bits and more offset bits  C) more tag bits  D) no change

**15.** A write-through cache with a write buffer
A) never writes to memory  B) writes every store to memory (through the buffer)  C) uses dirty bits  D) cannot be used with DMA

**16.** A page fault occurs when
A) the TLB hits  B) the required page is not in physical memory  C) the cache misses  D) the CPU is idle

**17.** With 32-bit virtual addresses and 4 KB pages the number of virtual pages is
A) 2^12  B) 2^20  C) 2^32  D) 2^10

**18.** Polling I/O differs from interrupt-driven I/O in that polling
A) is initiated by the device  B) is initiated by the CPU repeatedly checking a status register  C) uses DMA  D) needs no CPU

**19.** If a program is 10 percent serial, the maximum speedup on any number of cores is
A) 5  B) 10  C) 100  D) unlimited

**20.** The MESI protocol is used to
A) predict branches  B) keep the caches of several cores coherent  C) translate addresses  D) schedule instructions

## Section B: Short Questions (40 marks)

**B1. (5)** The 32-bit word 0xFFFFFFF6 is a two's complement integer. Give its decimal value and explain how you found it.

**B2. (5)** Give the IEEE 754 single-precision hex representation of 0.15625 and show the steps.

**B3. (5)** Encode `xori x7, x8, 15` (given in hex as 0x00F44393) and decode it back field by field.

**B4. (5)** A pipeline has a base CPI of 1. 20 percent of the instructions are branches and 25 percent of them are mispredicted, with a 3-cycle penalty. Loads are 25 percent of instructions and 40 percent of loads cause a one-cycle load-use stall. Find the CPI.

**B5. (5)** A 64 KB 2-way set-associative cache with 64-byte blocks and 32-bit addresses: find the number of sets and the widths of the tag, index and offset.

**B6. (5)** With 4 KB pages and 32-bit virtual addresses, the physical address space is 1 GB. Find the number of physical frames, the physical page number width, and the size of a flat page table with 4-byte entries.

**B7. (5)** A cache has a hit time of 2 cycles, a miss rate of 3 percent and a miss penalty of 100 cycles. Find the AMAT. If a second-level cache is added with a 12-cycle hit time and a local miss rate of 40 percent (the memory access then costs 100 cycles), find the new AMAT.

**B8. (5)** Explain the difference between latency and throughput in a pipeline, with the figures for a 5-stage pipeline with 200 ps stages.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Assembly programming.** Write RISC-V code that multiplies x10 by x11 using repeated addition, leaving the result in x12 (assume x11 ≥ 0).
(a) Write the code [5]. (b) For x10 = 6 and x11 = 7 give the result and the number of instructions executed (count the setup instructions and the final nop) [3]. (c) Explain how a faster multiplication method works and its cost [2].

**C2. Pipeline analysis.** Consider `lw x5, 0(x1); add x6, x5, x2; sub x7, x6, x3; lw x8, 4(x1); and x9, x8, x5`.
(a) List the data dependences and mark the load-use hazards [3]. (b) Draw (as a table) the pipeline timing with full forwarding and give the total cycles [4]. (c) Reorder the instructions to remove the stalls and give the new cycle count [3].

**C3. Cache simulation.** A cache has 4 blocks of 32 bytes. Byte addresses 0, 32, 64, 0, 96, 32, 128, 0, 64, 160 are accessed.
(a) Give the block addresses [1]. (b) Trace a direct-mapped cache (hit/miss sequence and hit count) [3]. (c) Trace a 2-way set-associative cache with LRU [3]. (d) Compute the hit rates and compare with the 4-way (fully associative) case [3].

**C4. Floating point.**
(a) Convert 0.5 and -0.4375 to IEEE 754 single precision (hex) [4]. (b) Add them step by step (align exponents, add, normalise) and give the result in hex [4]. (c) Explain why floating-point addition is not associative, giving an example [2].

**C5. Virtual memory.** A system has 4 KB pages and 32-bit virtual addresses. The page table maps virtual page 0x00403 to frame 0x07B.
(a) Split the virtual address 0x00403ABC into the page number and offset [2]. (b) Find the physical address [2]. (c) Describe what happens in the TLB and the page table if the TLB misses, and what if the page is not in memory [4]. (d) Compute the effective access time if a TLB hit takes 1 ns, a TLB miss adds 100 ns (the page table walk), the TLB hit rate is 99 percent and the memory access takes 100 ns [2].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **A** · 2 **B** · 3 **B** · 4 **B** · 5 **B** · 6 **B** · 7 **B** · 8 **C** · 9 **B** · 10 **B** · 11 **A** · 12 **B** · 13 **B** · 14 **B** · 15 **B** · 16 **B** · 17 **B** · 18 **B** · 19 **B** · 20 **B**

Brief reasons: 3. FF = 255 with zero upper bytes. 7. Exponent 127, fraction 0. 10. The first instruction takes 5 cycles and each later one adds one. 19. 1/0.1 = 10.

## Section B solutions

**B1.** 0xFFFFFFF6 has sign bit 1, so the number is negative.
Step 1: invert all bits: 0xFFFFFFF6 → 0x00000009.
Step 2: add 1: 0x00000009 + 1 = 0x0000000A = 10.
Step 3: the value is **-10**.
Check: 0xFFFFFFF6 = 4,294,967,286 and 4,294,967,286 - 2^32 = **-10**.

**B2.** Step 1: 0.15625 = 5/32 = 5 × 2⁻⁵ = 101₂ × 2⁻⁵ = 0.00101₂.
Step 2: normalise: 0.00101₂ = 1.01₂ × 2⁻³.
Step 3: sign 0; exponent = -3 + 127 = 124 = 01111100₂; fraction 01 followed by 21 zeros.
Step 4: bits 0 01111100 01000000000000000000000 = 0011 1110 0010 0000 ... = **0x3E200000**.

**B3.** Step 1: write 0x00F44393 in binary: 0000 0000 1111 0100 0100 0011 1001 0011.
Step 2: split into I-type fields: imm[31:20] = 000000001111 = 15; rs1[19:15] = 01000 = 8; funct3[14:12] = 100 (xor); rd[11:7] = 00111 = 7; opcode[6:0] = 0010011 (OP-IMM).
Step 3: so it is **xori x7, x8, 15**.
Check (encoding): 15 << 20 = 0x00F00000; rs1 8 << 15 = 0x00040000; funct3 4 << 12 = 0x4000; rd 7 << 7 = 0x380; opcode 0x13. Sum = 0x00F00000 + 0x00040000 + 0x4000 + 0x380 + 0x13 = 0x00F44393 ✓.

**B4.** Step 1: branch penalty per instruction = 0.20 × 0.25 × 3 = 0.15.
Step 2: load-use stalls per instruction = 0.25 × 0.40 × 1 = 0.10.
Step 3: **CPI = 1 + 0.15 + 0.10 = 1.25**.

**B5.** Step 1: lines = 64 KB/64 B = 65,536/64 = 1024.
Step 2: sets = 1024/2 ways = **512**.
Step 3: offset = log2 64 = **6 bits**; index = log2 512 = **9 bits**; tag = 32 - 6 - 9 = **17 bits**.

**B6.** Step 1: frames = physical memory/page size = 1 GB/4 KB = 2^30/2^12 = **2^18 = 262,144 frames**.
Step 2: physical page number width = **18 bits**.
Step 3: virtual page number = 32 - 12 = 20 bits, so the flat page table has 2^20 entries.
Step 4: size = 2^20 × 4 bytes = **4 MB**.

**B7.** Step 1: AMAT (L1 only) = 2 + 0.03 × 100 = 2 + 3 = **5 cycles**.
Step 2: with L2, the miss penalty seen by L1 = 12 + 0.40 × 100 = 12 + 40 = 52 cycles.
Step 3: AMAT = 2 + 0.03 × 52 = 2 + 1.56 = **3.56 cycles**.

**B8.** Step 1: **Latency** is the time for one instruction to complete from start to finish: in a 5-stage pipeline with 200 ps stages it is 5 × 200 = **1000 ps** (no better than a single-cycle machine's 800 ps; slightly worse because of pipeline register overhead and the stage balancing).
Step 2: **Throughput** is the number of instructions completed per unit time: one per cycle, i.e. one every **200 ps**, which is 1/(200 × 10⁻¹²) = 5 × 10⁹ instructions/s, four times better than the single-cycle processor's one per 800 ps (1.25 × 10⁹ instructions/s).
Step 3: Pipelining improves throughput, not latency.

## Section C solutions

**C1.**
(a)
```
      li   x12, 0          # result = 0
      mv   x13, x11        # counter = multiplier
loop: beq  x13, x0, done   # while (counter != 0)
      add  x12, x12, x10   # result += multiplicand
      addi x13, x13, -1    # counter--
      j    loop
done: nop
```
(b) With x10 = 6 and x11 = 7 (already in the registers):
Step 1: each iteration adds 6 once; after 7 iterations x12 = 7 × 6 = **42**.
Step 2: instruction count: 2 (setup: li, mv) + 7 iterations × 4 (beq, add, addi, j) = 28, + 1 (the final beq that exits) + 1 (the final nop) = 2 + 28 + 1 + 1 = **32 instructions**.
(c) **Shift-and-add** (as in hardware multipliers) examines each bit of the multiplier: if the bit is 1, add the shifted multiplicand. A 32-bit multiplier needs at most 32 additions and shifts instead of up to 2^32 repeated additions. Hardware multipliers use arrays of adders or Wallace trees to do it in a few cycles; the M extension's `mul` instruction does this in one instruction.

**C2.** Code: lw x5,0(x1); add x6,x5,x2; sub x7,x6,x3; lw x8,4(x1); and x9,x8,x5.
(a) add reads x5 from the first lw (RAW, **load-use**); sub reads x6 from add (RAW, forwardable); and reads x8 from the second lw (RAW, **load-use**) and x5 from the first lw (a distance of four instructions: no hazard).
(b) Step 1: with full forwarding, the add must wait one cycle for the lw (stall 1).
Step 2: the sub needs add's result (forwarded, no stall); the second lw is independent.
Step 3: the and needs x8 from the lw directly before it (stall 1).
Timing table (cycles 1 to 11):
- lw x5: IF 1, ID 2, EX 3, MEM 4, WB 5
- add x6: IF 2, ID 3, ID 4 (stall: the loaded x5 is not ready), EX 5, MEM 6, WB 7
- sub x7: IF 3 (held until 4), ID 5, EX 6, MEM 7, WB 8 (x6 is forwarded from add)
- lw x8: IF 5, ID 6, EX 7, MEM 8, WB 9
- and x9: IF 6, ID 7, ID 8 (stall: x8 is loaded by the previous instruction), EX 9, MEM 10, WB 11
Total **11 cycles** (ideal 5 + 4 = 9, plus 2 stalls).
(c) Move the independent `lw x8, 4(x1)` up: `lw x5, 0(x1); lw x8, 4(x1); add x6, x5, x2; sub x7, x6, x3; and x9, x8, x5`. Now each load's result is used at least two instructions later: **no stalls, 5 + 4 = 9 cycles**.

**C3.**
(a) Block addresses (byte address ÷ 32): 0, 32, 64, 0, 96, 32, 128, 0, 64, 160 → **0, 1, 2, 0, 3, 1, 4, 0, 2, 5**.
(b) Direct-mapped (4 lines, index = block mod 4): indices 0, 1, 2, 0, 3, 1, 0, 0, 2, 1.
Step 1: block 0 miss; block 1 miss; block 2 miss.
Step 2: block 0 **hit** (index 0 still holds 0); block 3 miss; block 1 **hit**.
Step 3: block 4 (index 0) miss, evicting 0; block 0 (index 0) miss, evicting 4.
Step 4: block 2 **hit**; block 5 (index 1) miss.
Sequence **M M M H M H M M H M**: **3 hits**.
(c) 2-way (2 sets, index = block mod 2, LRU): the even blocks 0, 2, 4 share set 0 and the odd blocks 1, 3, 5 share set 1.
Step 1: 0 M, 1 M, 2 M, 0 **H** (set 0 now ordered: 2 is least recently used).
Step 2: 3 M, 1 **H**.
Step 3: 4 M (evicts the least recently used block 2 from set 0), 0 **H** (still present).
Step 4: 2 M (evicts 4), 5 M.
The sequence is **M M M H M H M H M M**: **3 hits**, the same count as the direct-mapped cache, but different hits (the eighth access now hits, the ninth now misses).
(d) Step 1: hit rate = hits/accesses = 3/10 = **30 percent** for both organisations.
Step 2: the fully associative (4-way) cache also gives **M M M H M H M H M M**, 3 hits = 30 percent (when block 4 arrives, the least recently used block 2 is evicted).
Step 3: for this short sequence the extra associativity helps only slightly because most misses are **compulsory** (blocks 0 to 5 are each touched for the first time: 6 compulsory misses); the remaining misses are capacity or conflict misses.

**C4.**
(a) Step 1: 0.5 = 1.0 × 2⁻¹: sign 0, exponent -1 + 127 = 126 = 01111110₂, fraction 0: bits 0 01111110 000... = **0x3F000000**.
Step 2: 0.4375 = 7/16 = 0.0111₂ = 1.11₂ × 2⁻² (1.75 × 0.25).
Step 3: sign 1, exponent -2 + 127 = 125 = 01111101₂, fraction 11 followed by zeros: bits 1 01111101 11000... = **0xBEE00000**.
(b) Step 1: align the exponents: 0.5 = 1.000 × 2⁻¹; -0.4375 = -1.11 × 2⁻² = -0.111 × 2⁻¹ (shift the significand right by 1).
Step 2: add the significands (subtraction because of the sign): 1.000 - 0.111 = 0.001 (× 2⁻¹).
Step 3: normalise: 0.001 × 2⁻¹ = 1.0 × 2⁻⁴ (shift left 3 places, decrease the exponent by 3).
Step 4: exponent = -4 + 127 = 123 = 01111011₂, fraction 0: **0x3D800000** = 0.0625.
Check: 0.5 - 0.4375 = 0.0625 ✓.
(c) Rounding makes the result depend on the order of the operations. In single precision the spacing between numbers near 10^8 is 8, so adding 1 to 10^8 changes nothing.
Step 1: (10^8 + (-10^8)) + 1 = 0 + 1 = **1**.
Step 2: 10^8 + ((-10^8) + 1) = 10^8 + (-10^8) = **0**.
The two groupings give different results, so floating-point addition is **not associative**; programs must not rely on exact equality or on a particular summation order (for accuracy, sum small numbers first or use compensated summation).

**C5.**
(a) Step 1: 4 KB pages: offset = low 12 bits = 3 hex digits: **0xABC**.
Step 2: virtual page number = upper 20 bits = **0x00403**.
(b) Step 1: the page table gives frame 0x07B for page 0x00403.
Step 2: physical address = (0x07B << 12) | 0xABC = 0x7B000 + 0xABC = **0x0007BABC**.
(c) **TLB miss:** the hardware (or the OS) walks the page table in memory using the virtual page number, finds that the entry is valid and has frame 0x07B, installs the translation in the TLB and retries; the access then proceeds with the physical address. **Page fault** (the entry is invalid because the page is not in memory): the CPU traps to the OS, which finds a free frame (evicting another page, writing it back if it is dirty), reads the page from disk (milliseconds), updates the page table and TLB, and restarts the faulting instruction.
(d) Step 1: average translation cost = 1 ns + 0.01 × 100 ns = 1 + 1 = 2.0 ns.
Step 2: add the data access of 100 ns: EAT = 2.0 + 100 = **102 ns**.
Without a TLB every access would cost 200 ns (page table + data), so the TLB nearly halves the access time.
