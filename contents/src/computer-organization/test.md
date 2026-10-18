# Computer Organization: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Assume RISC-V RV32I and a five-stage pipeline (IF, ID, EX, MEM, WB).

## Section A: Multiple choice (20 marks)

**1.** CPU time equals
A) IC × CPI × clock period  B) IC / CPI  C) CPI / f  D) IC + CPI

**2.** Amdahl's law says that the overall speedup from improving part of a program is limited by
A) the clock rate  B) the fraction of time not improved  C) the cache size  D) the number of registers

**3.** In RISC-V, register x0
A) holds the stack pointer  B) always reads as zero  C) holds the return address  D) is a temporary

**4.** RISC-V RV32I has how many general-purpose registers?
A) 8  B) 16  C) 32  D) 64

**5.** `lw x5, 8(x2)` loads into x5
A) the value x2 + 8  B) the word at memory address x2 + 8  C) the value 8  D) the address x2

**6.** In 8-bit two's complement, -5 is
A) 10000101  B) 11111010  C) 11111011  D) 00000101

**7.** Which format does `add x5, x6, x7` use?
A) I-type  B) R-type  C) S-type  D) B-type

**8.** The five stages of the classic pipeline in order are
A) IF, ID, EX, MEM, WB  B) ID, IF, EX, WB, MEM  C) IF, EX, ID, MEM, WB  D) IF, ID, MEM, EX, WB

**9.** Forwarding (bypassing) is used to
A) predict branches  B) supply a result to a dependent instruction before it is written to the register file  C) enlarge the cache  D) speed up the clock

**10.** With forwarding, a load followed immediately by an instruction using the loaded value causes
A) no stall  B) one stall cycle  C) two stall cycles  D) a pipeline flush

**11.** A control hazard is caused by
A) two instructions needing the same hardware  B) a dependence on a register  C) a branch whose outcome is not yet known  D) a cache miss

**12.** Accessing an array sequentially exploits
A) temporal locality only  B) spatial locality  C) no locality  D) virtual memory

**13.** In a direct-mapped cache, a block can be placed in
A) any line  B) exactly one line  C) one of two lines  D) none

**14.** The average memory access time equals
A) hit time + miss rate × miss penalty  B) hit time × miss rate  C) miss penalty / hit time  D) miss rate + miss penalty

**15.** In a write-back cache a "dirty" bit indicates that
A) the block has been modified and must be written to memory on eviction  B) the block is invalid  C) the block is shared  D) the block is read-only

**16.** With 4 KB pages, the page offset is how many bits?
A) 8  B) 10  C) 12  D) 16

**17.** A TLB caches
A) instructions  B) virtual-to-physical page translations  C) disk blocks  D) branch outcomes

**18.** DMA allows a device to
A) transfer data to or from memory without CPU involvement for each word  B) execute instructions  C) replace the cache  D) increase the clock

**19.** In a little-endian system the least significant byte of a word is stored at
A) the highest address  B) the lowest address  C) address zero only  D) a random address

**20.** The exponent bias in IEEE 754 single precision is
A) 15  B) 127  C) 255  D) 1023

## Section B: Problems (40 marks)

**B1. (10 marks)** A program has 40 percent ALU instructions (CPI 1), 30 percent loads (CPI 2), 10 percent stores (CPI 2) and 20 percent branches (CPI 2). (a) Find the average CPI [3]. (b) At 1 GHz how long do 5 × 10^8 instructions take? [2] (c) If a new design halves the CPI of loads (to 1), find the new average CPI and the speedup [3]. (d) State the formula for Amdahl's law and apply it: a part used 50 percent of the time is made 4 times faster [2].

**B2. (10 marks)** Trace the program and give the final values; then encode the first instruction:
```
li   x5, 10
li   x6, 3
sub  x7, x5, x6
slli x8, x7, 2
add  x9, x8, x5
```
(a) Give x7, x8 and x9 [4]. (b) Encode `addi x5, x0, 10` as a 32-bit hex number (li is a pseudo-instruction for it) [3]. (c) How many instructions would a `lui`-based sequence need to load 0x12345678 into a register, and which are they? [3]

**B3. (10 marks)** Consider `add x1, x2, x3; sub x4, x1, x5; or x6, x4, x1; sw x6, 0(x7)`. (a) List the data dependences [3]. (b) Give the number of cycles in the pipeline (i) ideally, (ii) with forwarding, (iii) without forwarding (register file written in the first half and read in the second half of a cycle) [5]. (c) Explain why a load-use stall remains even with forwarding [2].

**B4. (10 marks)** (a) A direct-mapped cache with 4 blocks of 4 bytes is accessed with the word addresses (in units of blocks) 0, 8, 0, 6, 8. Give the hit/miss sequence [3]. (b) Repeat for a 2-way set-associative cache with LRU (2 sets) [3]. (c) A 32-bit address, 8 KB direct-mapped cache with 32-byte blocks: give the offset, index and tag widths [2]. (d) Find the AMAT for a hit time of 1 ns, a miss rate of 4 percent and a miss penalty of 60 ns [2].

---

## Answer Key and Solutions

### Section A
1 **A** · 2 **B** · 3 **B** · 4 **C** · 5 **B** · 6 **C** · 7 **B** · 8 **A** · 9 **B** · 10 **B** · 11 **C** · 12 **B** · 13 **B** · 14 **A** · 15 **A** · 16 **C** · 17 **B** · 18 **A** · 19 **B** · 20 **B**

Brief reasons: 6. 00000101 inverted is 11111010, plus 1 is 11111011. 10. The loaded value is available only after MEM. 16. 4 KB = 2^12. 19. Little-endian puts the least significant byte at the lowest address.

### Section B

**B1.**
(a) Step 1: CPI = Σ (fraction × CPI) = 0.4(1) + 0.3(2) + 0.1(2) + 0.2(2).
Step 2: = 0.4 + 0.6 + 0.2 + 0.4 = **1.6**.
(b) Time = IC × CPI/f = 5 × 10^8 × 1.6/10^9 = **0.8 s**.
(c) Step 1: new CPI = 0.4(1) + 0.3(1) + 0.1(2) + 0.2(2) = 0.4 + 0.3 + 0.2 + 0.4 = **1.3**.
Step 2: speedup = old time/new time = 1.6/1.3 = **1.23**.
(d) Amdahl's law: speedup = 1/((1 - F) + F/S). With F = 0.5 and S = 4: 1/(0.5 + 0.5/4) = 1/(0.5 + 0.125) = 1/0.625 = **1.6**.

**B2.**
(a) Step 1: li x5, 10 gives x5 = 10; li x6, 3 gives x6 = 3.
Step 2: x7 = x5 - x6 = 10 - 3 = **7**.
Step 3: x8 = x7 << 2 = 7 × 4 = **28**.
Step 4: x9 = x8 + x5 = 28 + 10 = **38**.
(b) addi x5, x0, 10: imm = 10 = 0x00A (12 bits 000000001010), rs1 = 0, funct3 = 000, rd = 5, opcode 0010011.
Bits: 000000001010 00000 000 00101 0010011 = 0000 0000 1010 0000 0000 0010 1001 0011 = **0x00A00293**.
(c) **Two instructions:** `lui x5, 0x12345` (x5 = 0x12345000) then `addi x5, x5, 0x678` (0x12345000 + 0x678 = 0x12345678; the low part 0x678 is below 0x800, so no sign-extension correction is needed).

**B3.** Code: add x1,x2,x3; sub x4,x1,x5; or x6,x4,x1; sw x6,0(x7).
(a) sub reads x1 written by add (RAW); or reads x4 written by sub (RAW) and x1 written by add (RAW, two instructions back); sw reads x6 written by or (RAW).
(b) (i) Ideal: 5 + (4 - 1) = **8 cycles**.
(ii) With forwarding: all producers are ALU instructions, so every result is forwarded from EX/MEM or MEM/WB with no stall: **8 cycles**.
(iii) Without forwarding: a consumer directly after its producer waits 2 cycles for the producer's write-back. sub waits 2 cycles for add; or waits 2 cycles for sub (x1 is already written by then); sw waits 2 cycles for or: 3 × 2 = 6 stalls, so 8 + 6 = **14 cycles**.
(c) A load produces its value only at the end of the MEM stage, whereas the next instruction needs it at the start of its EX stage, which occurs one cycle earlier: forwarding cannot go backwards in time, so one bubble must be inserted.

**B4.**
(a) Direct-mapped, 4 blocks: index = block address mod 4.
Step 1: 0 → index 0: miss. 8 → index 0: miss (evicts 0). 0 → index 0: miss (evicts 8). 6 → index 2: miss. 8 → index 0: holds 0, so miss.
Result **M M M M M** (0 and 8 conflict in index 0).
(b) 2-way, 2 sets: set = block address mod 2; all of 0, 8 and 6 are even, so they map to set 0 (two ways, LRU).
Step 1: 0: miss (set holds 0). Step 2: 8: miss (set holds 0, 8). Step 3: 0: hit (0 becomes most recent, so 8 is LRU). Step 4: 6: miss, evicts the LRU block 8 (set holds 0, 6). Step 5: 8: miss, evicts the LRU block 0.
Result **M M H M M**: 1 hit.
(c) Step 1: 32-byte blocks: offset = log2 32 = **5 bits**.
Step 2: lines = 8 KB/32 B = 8192/32 = 256, so index = log2 256 = **8 bits**.
Step 3: tag = 32 - 5 - 8 = **19 bits**.
(d) AMAT = hit time + miss rate × miss penalty = 1 + 0.04 × 60 = 1 + 2.4 = **3.4 ns**.
