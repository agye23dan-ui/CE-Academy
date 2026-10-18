# Computer Organization: Complete Lecture Notes

Computer organization explains how a processor actually works: how programs become bits, how bits flow through a datapath, how pipelines and caches make machines fast, and how memory and I/O fit around the CPU. The reference architecture is **RISC-V (RV32I)**, a clean modern instruction set. Terms: ISA (instruction set architecture, the contract between software and hardware), CPI (cycles per instruction), IC (instruction count), T (clock period), f (clock frequency).

## Chapter 1. Performance and Cost

### 1.1 Measuring performance
- **Execution time** is the real metric. **CPU time = IC × CPI × T = IC × CPI/f.** Improving performance means reducing IC (better compiler, better ISA), CPI (better microarchitecture) or T (faster technology).
- **Example.** An instruction mix: ALU 50 percent (CPI 1), loads 20 percent (CPI 2), stores 10 percent (CPI 2), branches 20 percent (CPI 3): CPI = 0.5 + 0.4 + 0.2 + 0.6 = 1.7. At 2 GHz, 10^9 instructions take 10^9 × 1.7/(2 × 10^9) = 0.85 s, and the rate is 2000/1.7 = 1176 MIPS.
- **Speedup** = time_before/time_after. MIPS and clock rate alone are misleading; use benchmark suites (SPEC) and report the geometric mean.
- **Amdahl's law:** speeding up a fraction F of the execution by a factor S gives Speedup = 1/((1 - F) + F/S). A 10× faster component used 40 percent of the time gives 1/(0.6 + 0.04) = 1.56×. The unimproved part limits the gain: make the common case fast.
- **Power and energy:** dynamic power P = α C V² f (activity factor α, switched capacitance C, voltage V, frequency f). Lowering V helps quadratically, which is why the "power wall" ended frequency scaling and led to multicore processors. Energy = power × time.

### 1.2 Number representation recap
Bytes, words, hexadecimal (each hex digit is 4 bits). **Endianness:** the word 0x12345678 stored at address A is 78 56 34 12 in memory order in **little-endian** (RISC-V, x86) and 12 34 56 78 in big-endian (network order). Unsigned and two's complement integers (see Digital Logic); sign extension; overflow detection.

## Chapter 2. The Instruction Set (RISC-V RV32I)

### 2.1 Design principles
Simplicity favours regularity; smaller is faster (few registers, simple instructions); make the common case fast; good design demands good compromises. RISC-V has **32 registers** x0 to x31 (32 bits each), where **x0 is always 0**. ABI names: ra (x1, return address), sp (x2, stack pointer), a0 to a7 (x10 to x17, arguments and return values), t0 to t6 (temporaries), s0 to s11 (saved registers). All instructions are 32 bits, and arithmetic is done on registers (**load-store architecture**).

### 2.2 Instruction formats and encoding
- **R-type** (register-register): funct7[31:25] rs2[24:20] rs1[19:15] funct3[14:12] rd[11:7] opcode[6:0]. add x5, x6, x7 = 0x007302B3; sub x8, x9, x10 = 0x40A48433.
- **I-type** (immediate and loads): imm[11:0] rs1 funct3 rd opcode. addi x1, x0, 5 = 0x00500093; addi x5, x6, -1 = 0xFFF30293; lw x10, 8(x2) = 0x00812503.
- **S-type** (stores): imm[11:5] rs2 rs1 funct3 imm[4:0] opcode. sw x10, 12(x2) = 0x00A12623.
- **B-type** (branches): a 13-bit signed PC-relative offset (multiples of 2) split across the word; **J-type** (jal) a 21-bit offset; **U-type** (lui, auipc) a 20-bit upper immediate.
- **Loading a 32-bit constant:** lui x5, 0x12345 followed by addi x5, x5, 0x678 gives 0x12345678 (if the low 12 bits have the top bit set, add 1 to the upper part to compensate for the sign extension).

### 2.3 The common instructions
- **Arithmetic and logic:** add, sub, and, or, xor, sll, srl, sra, slt (set if less than), and immediate versions addi, andi, ori, xori, slli, srli, srai, slti; the M extension adds mul, div, rem.
- **Memory:** lw (load word), sw, lh/lhu, sh, lb/lbu, sb. Address = base register + signed 12-bit offset. Arrays: element i of a word array at base is at base + 4i (slli by 2).
- **Control:** beq, bne, blt, bge (signed), bltu, bgeu; jal rd, label (jump and link, with rd = ra for calls); jalr rd, offset(rs1) (indirect jump, used for returns: `ret` = jalr x0, 0(ra)). Pseudo-instructions: li, mv, j, nop, la, call, ret.

### 2.4 Translating programs
```
# Sum of the 4-word array at address 256: x5 = sum
        li   x5, 0          # sum
        li   x6, 0          # i
        li   x7, 4          # n
        li   x8, 256        # base address
loop:   bge  x6, x7, done   # while (i < n)
        slli x9, x6, 2      # offset = 4 * i
        add  x9, x9, x8     # address of a[i]
        lw   x10, 0(x9)
        add  x5, x5, x10    # sum += a[i]
        addi x6, x6, 1      # i++
        j    loop
done:
```
With the array {3, 5, 7, 9} the result is 24 and the loop executes 34 instructions in total (4 setup, 7 per iteration, a final test and the exit). Other programs: maximum of an array (9 for {4, 9, 2, 7}), iterative Fibonacci (F(10) = 55 in 66 instructions), the subtractive GCD (gcd(48, 18) = 6).
- **Bitwise operations** with x5 = 12 (1100) and x6 = 5 (0101): add 17, sub 7, and 4, or 13, xor 9, shift left by 3 gives 96, shift right by 2 gives 3, slt (5 < 12) gives 1.

### 2.5 Procedures and the stack
Procedure call: put arguments in a0 to a7; `jal ra, func` saves the return address; the callee computes and puts the result in a0; `ret` returns. A procedure that calls another must save ra (and the s-registers it uses) on the **stack** (a region of memory growing downwards): `addi sp, sp, -16; sw ra, 12(sp) ... lw ra, 12(sp); addi sp, sp, 16`. Calling conventions define which registers the caller (t, a registers) and the callee (s registers, sp, ra) must preserve. Recursion works because each activation has its own **stack frame** (saved registers, local variables). Example: `li a0, 5; jal ra, dbl; ...; dbl: slli a0, a0, 1; ret` returns 10 in a0.
**Memory layout:** text (code), static data, heap (grows up), stack (grows down). **Addressing modes in RISC-V:** register, immediate, base + displacement, PC-relative.

### 2.6 Other ISAs and the toolchain
x86-64 (CISC, variable length, micro-ops), ARM (RISC), MIPS. The **compiler → assembler → linker → loader** chain; assembly directives; object files and relocation; the **simulator** (Venus, RARS, Spike) for experiments.

## Chapter 3. Computer Arithmetic

- **Addition and subtraction:** a ripple or carry-lookahead adder; subtraction adds the two's complement. **Overflow** when the operands have the same sign and the result has the opposite sign; RISC-V does not trap, software checks.
- **Multiplication:** shift-and-add: for each multiplier bit, add the shifted multiplicand; a 32 × 32 product needs 64 bits. Hardware uses an array or a Wallace tree; **Booth recoding** reduces additions for runs of ones. **Division:** shift-and-subtract (restoring/non-restoring); the M extension provides mul, mulh, div, rem.
- **Floating point (IEEE 754):** value = (-1)^s × 1.f × 2^(e - bias). Single precision: 1 sign bit, 8 exponent bits (bias 127), 23 fraction bits; double: 1, 11 (bias 1023), 52. Special values: exponent all ones (infinity, NaN), exponent zero (zero and subnormals). Examples: 1.0 = 0x3F800000; 13.25 = 0x41540000 (1.10101 × 2³); -0.1 = 0xBDCCCCCD (not exactly representable); 1.5 = 0x3FC00000; 2.25 = 0x40100000; and 1.5 + 2.25 = 3.75 = 0x40700000.
- **Floating-point addition:** align exponents (shift the smaller), add significands, normalise, round (to nearest even). FP is **not associative**: (x + y) + z may differ from x + (y + z); never test equality with ==.

## Chapter 4. The Processor: Datapath and Control

### 4.1 Building blocks
Register file (two read ports, one write port), ALU, instruction and data memories, program counter (PC) and its adder, sign extender, multiplexers, control unit. Clocked state elements (PC, registers) are updated on the clock edge; combinational logic computes in between.

### 4.2 Single-cycle datapath
One instruction per clock cycle. The cycle time is set by the **slowest instruction (the lw)**. With component delays of instruction fetch 200 ps, register read 100 ps, ALU 200 ps, data memory 200 ps and register write 100 ps: lw = 800 ps, sw = 700 ps, R-type = 600 ps, beq = 500 ps. The clock must be 800 ps although most instructions are faster: inefficient.
- **Control signals:** RegWrite, ALUSrc, ALUOp, MemRead, MemWrite, MemtoReg, Branch, PCSrc. The main control decodes the opcode; the ALU control uses funct3/funct7. For lw: ALUSrc = 1 (immediate), ALU adds, MemRead = 1, MemtoReg = 1, RegWrite = 1. For beq: ALU subtracts, Branch = 1.
- **Multicycle** designs reuse hardware and give each instruction as many short cycles as it needs. **Microprogrammed control** (ROM of micro-instructions) and **hardwired control** (logic) are the two ways to implement the control unit.

## Chapter 5. Pipelining

### 5.1 The idea
Overlap the execution of instructions like an assembly line. The classic five stages: **IF** (fetch), **ID** (decode and register read), **EX** (execute, address calculation), **MEM** (data memory access), **WB** (write back). Pipeline registers hold intermediate values between stages. With balanced stages (200 ps) the clock falls from 800 ps to 200 ps; the ideal speedup approaches the number of stages (5) and the CPI approaches 1: n instructions take (n + 4) cycles. For 1000 instructions: single-cycle 800 ns versus pipelined (1000 + 4) × 200 ps = 200.8 ns: speedup 3.98 (the latency of one instruction is not improved; the **throughput** is).

### 5.2 Hazards
- **Structural hazards:** two instructions need the same hardware in one cycle (a single memory for instructions and data). Solved by separate instruction and data caches and a register file with separate read and write ports.
- **Data hazards:** an instruction needs a result that an earlier instruction has not yet written. Types: RAW (read after write, the real dependence), WAR and WAW (only in out-of-order machines).
 - **Forwarding (bypassing)** sends results from the EX/MEM and MEM/WB pipeline registers back to the ALU inputs, removing most stalls.
 - **Load-use hazard:** a load's data is ready only at the end of MEM, so an instruction that uses it in the very next cycle must **stall one cycle** even with forwarding.
 - Without forwarding (but with a register file written in the first half and read in the second half of a cycle), a dependent instruction right behind its producer stalls 2 cycles. For `lw x1, 0(x2); add x3, x1, x4; sub x5, x3, x6; sw x5, 0(x7)`: ideal 8 cycles (5 + 3); with forwarding 9 (one load-use stall); without forwarding 14 (three dependences, 2 stalls each).
 - **Compiler scheduling** can fill load delay slots by reordering independent instructions.
- **Control hazards:** a branch is resolved after the fetch of following instructions. Solutions: stall, **branch prediction** (static: predict not taken or backward-taken; dynamic: a branch history table with 1-bit or 2-bit saturating counters and a branch target buffer), and flushing the wrongly fetched instructions (a misprediction penalty of 1 to 3 cycles in a 5-stage pipe, 15 or more in deep modern pipelines). Effective CPI = 1 + (branch frequency × misprediction rate × penalty): with 20 percent branches, 10 percent mispredicted and a 2-cycle penalty, CPI = 1 + 0.2 × 0.1 × 2 = 1.04.
- **Exceptions and interrupts** need precise state: the pipeline flushes later instructions and records the PC in a register (mepc).

### 5.3 Beyond the simple pipeline
**Deeper pipelines** raise the clock but increase hazard penalties. **Superscalar** processors issue several instructions per cycle (ILP); **out-of-order execution** with register renaming and a reorder buffer (Tomasulo's algorithm) hides latencies; **speculative execution** guesses branch outcomes (and the security issues it caused: Spectre and Meltdown). **VLIW** puts the scheduling burden on the compiler.

## Chapter 6. The Memory Hierarchy

### 6.1 Locality and the hierarchy
**Temporal locality:** recently used items are used again soon. **Spatial locality:** items near recently used ones are used soon. The hierarchy: registers (under 1 ns) → L1 cache (SRAM, about 1 ns, tens of KB) → L2/L3 (several MB, 5 to 30 ns) → main memory (DRAM, about 50 to 100 ns, GB) → SSD/disk (microseconds to milliseconds, TB). SRAM is fast and expensive (6 transistors per bit); DRAM needs refreshing (1 transistor and a capacitor).

### 6.2 Caches
A cache holds **blocks (lines)** of main memory. An address splits into **tag | index | block offset**. For a 32-bit address:
- **Direct-mapped:** each block maps to exactly one line (index = block address mod number of lines). A 16 KB cache with 64-byte blocks has 256 lines: offset = 6 bits, index = 8 bits, tag = 18 bits; each line stores a valid bit, a tag and 512 data bits (1 + 18 + 512 = 531 bits per line), so the total is 135,936 bits (about 17 KB of SRAM for 16 KB of data).
- **Set-associative (n-way):** a block can go in any of the n lines of one set (index selects the set). A 32 KB 4-way cache with 64-byte blocks has 128 sets: offset 6, index 7, tag 19. **Fully associative:** any block in any line (tag = block address; used for TLBs).
- **Replacement:** LRU, FIFO, random. **Write policies:** write-through (write to memory too, often with a write buffer) versus write-back (a dirty bit; write on eviction); on a write miss, write-allocate versus no-write-allocate.
- **Miss types (the three Cs):** compulsory (first reference), capacity (cache too small), conflict (too many blocks mapping to one set). More associativity reduces conflicts; larger blocks reduce compulsory misses via spatial locality but increase the miss penalty.
- **Worked trace.** A direct-mapped cache with 8 blocks of 16 bytes and byte addresses 0, 4, 16, 132, 232, 160, 1024, 30, 140, 3100, 180, 2180 gives M H M M M M M H M M M M (2 hits of 12). The same sequence with 2-way associativity gives 3 hits. A sequential read of 64 bytes word by word with 16-byte blocks gives one miss per block: M H H H repeated, a miss rate of 25 percent. Two arrays 1024 bytes apart accessed alternately in a 1 KB direct-mapped cache thrash (every access misses); a 2-way cache avoids this.

### 6.3 Cache performance
**AMAT = hit time + miss rate × miss penalty.** With a 1 ns hit time, a 5 percent miss rate and a 100 ns penalty: AMAT = 1 + 0.05 × 100 = 6 ns. **Two-level:** AMAT = L1 hit + L1 miss rate × (L2 hit + L2 miss rate × memory): 1 + 0.1(10 + 0.2 × 100) = 4 ns. **CPI with memory stalls** = base CPI + (memory accesses per instruction) × miss rate × miss penalty (in cycles). Software optimisation: loop interchange and blocking (tiling) for matrix code, data layout, prefetching. **Cache coherence** (MESI protocol) keeps the caches of multiple cores consistent.

### 6.4 Virtual memory
Each process has a **virtual address space** mapped to physical memory in **pages** (typically 4 KB). The OS maintains a **page table** (virtual page number → physical frame, with valid, dirty and protection bits). With 4 KB pages and 32-bit addresses: 12-bit offset and a 20-bit virtual page number, so a flat page table has 2^20 entries (4 MB at 4 bytes per entry); multi-level and inverted page tables reduce the size. A **TLB** (translation look-aside buffer) caches recent translations; a TLB miss walks the page table; a **page fault** (page not in memory) is handled by the OS, which loads the page from disk (millions of cycles). Benefits: isolation and protection, relocation, more memory than physical RAM (demand paging), sharing. Page replacement: LRU approximations (clock).

## Chapter 7. Input/Output and Storage
- **Buses** connect the CPU, memory and I/O; memory-mapped I/O assigns device registers to addresses. **Polling** (the CPU checks status) versus **interrupts** (the device signals the CPU, which runs an interrupt service routine) versus **DMA** (direct memory access: a controller moves blocks without the CPU).
- **Storage:** HDD (seek time + rotational latency + transfer), SSD (flash, no moving parts, wear levelling); RAID levels trade capacity, reliability and speed. Examples of buses and interfaces: PCIe, USB, SATA/NVMe, I2C/SPI/UART (embedded).

## Chapter 8. Parallel Processors
**Flynn's taxonomy:** SISD, SIMD (vector units, GPUs), MIMD (multicore, clusters). Multicore processors use threads and shared memory; challenges: synchronisation, cache coherence, memory consistency, Amdahl's law (the serial fraction limits the speedup: with 5 percent serial code the maximum speedup is 20 regardless of core count). **Data parallelism** (SIMD, GPUs) suits regular numerical work. Energy efficiency motivates heterogeneous systems (big.LITTLE, accelerators).

## Chapter 9. Common Mistakes Checklist
1. Forgetting that x0 is hard-wired to zero and that branch offsets are relative to the branch instruction itself.
2. Mixing up byte addresses and word indices (forgetting to multiply the index by 4).
3. Ignoring the sign extension of the 12-bit immediate when building 32-bit constants.
4. Counting pipeline cycles incorrectly: n instructions need n + 4 cycles in a 5-stage pipeline, not 5n; a load-use stall remains even with forwarding.
5. Mislabelling the tag, index and offset fields (a larger block means more offset bits and fewer index bits for a fixed capacity).
6. Using CPI, clock rate or MIPS alone to compare machines.
7. Assuming floating-point arithmetic is exact or associative.
8. Forgetting to save and restore ra and the s-registers in nested procedure calls.
