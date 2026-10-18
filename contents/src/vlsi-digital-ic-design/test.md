# VLSI & Digital IC Design: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** A static CMOS gate in a steady logic state consumes
A) almost no static power (only leakage)  B) large static power  C) the same as dynamic power  D) V^2/R

**2.** To make a symmetric inverter the PMOS is made
A) narrower than the NMOS  B) about 2 to 2.5 times wider than the NMOS  C) the same width  D) of a different length only

**3.** A two-input CMOS NAND gate has how many transistors?
A) 2  B) 3  C) 4  D) 6

**4.** The pull-up network of a CMOS NAND gate consists of
A) series NMOS  B) series PMOS  C) parallel NMOS  D) parallel PMOS

**5.** A two-input AND gate in static CMOS needs
A) 4 transistors  B) 6 transistors  C) 8 transistors  D) 2 transistors

**6.** Dynamic power of CMOS is proportional to
A) V  B) V f  C) V^2 f  D) V^3

**7.** An NMOS pass transistor passes a logic high of
A) VDD - VTn  B) VDD + VTn  C) VDD  D) 0

**8.** The 50 percent propagation delay of an RC stage is about
A) RC  B) 0.35 RC  C) 2.2 RC  D) 0.69 RC

**9.** The logical effort of an inverter is
A) 0  B) 1  C) 4/3  D) 2

**10.** For minimum delay the best stage effort is about
A) 1  B) 2  C) 4  D) 16

**11.** A setup-time violation can be fixed by
A) increasing the clock period  B) adding delay buffers  C) increasing the skew  D) removing flip-flops from the clock

**12.** A hold-time violation is fixed by
A) lowering the clock frequency  B) raising the supply voltage  C) removing registers  D) adding delay in the short path

**13.** Clock skew affects
A) only setup  B) both setup and hold  C) only hold  D) neither

**14.** Pipelining a combinational block
A) reduces latency  B) reduces area  C) increases throughput (clock frequency)  D) removes the registers

**15.** The delay of an n-bit ripple-carry adder grows
A) linearly with n  B) with log n  C) with n^2  D) not at all

**16.** In Verilog, sequential (clocked) logic should be written with
A) blocking assignments only  B) assign statements  C) initial blocks  D) non-blocking assignments

**17.** A combinational always block with a case statement that lacks a default and does not cover all values infers
A) a flip-flop  B) a latch  C) a multiplexer  D) nothing

**18.** A 4-input LUT stores how many configuration bits?
A) 4  B) 8  C) 16  D) 64

**19.** LVS checks that
A) the layout matches the schematic netlist  B) the layout meets spacing rules  C) timing is met  D) power is low

**20.** A DRAM cell consists of
A) six transistors  B) two transistors  C) a flip-flop  D) one transistor and one capacitor

## Section B: Problems (40 marks)

**B1. CMOS fundamentals (10 marks)** (a) VDD = 1.0 V, VTn = 0.3 V, VTp = -0.3 V: the switching threshold VM = (VTn + r (VDD + VTp))/(1 + r) for r = 1 and r = 0.8 [4] (b) The propagation delay for R = 8 kΩ and C = 25 fF [2] (c) The Elmore delay of a 4-section RC ladder (equal R and C) [2] (d) The dynamic power for alpha = 0.2, C = 5 nF, V = 1.1 V and f = 500 MHz [2]

**B2. Logical effort (10 marks)** (a) Give g and p of NAND2, NOR2 and the inverter [3] (b) For the path NAND2, NOR2, inverter driving 20 times the input capacitance find G, F, the stage effort and the delay [5] (c) The transistor count of F = NOT(A B + C D) [2]

**B3. Timing (10 marks)** t_cq = 0.5 ns, t_logic = 3.0 ns, t_su = 0.25 ns, skew = 0.15 ns. (a) The minimum clock period and maximum frequency [3] (b) The logic is split into stages of 1.4 and 1.6 ns: the new period, frequency and speedup [4] (c) The delay of a 16-bit ripple-carry adder with t_carry = 0.15 ns and t_sum = 0.25 ns [3]

**B4. Verilog (10 marks)** (a) Write a mod-10 counter (counts 0 to 9 then wraps) with synchronous reset and give the first 12 outputs after reset [4] (b) The 3-bit Gray-code sequence produced by g = b ^ (b >> 1) for the binary counter b after reset, for 9 clocks [3] (c) The output y and valid of a 4-bit priority encoder (highest set bit has priority) for r = 0110, 1010, 0001 and 0000 [3]

---

## Answer Key and Solutions

### Section A
1 **A** · 2 **B** · 3 **C** · 4 **D** · 5 **B** · 6 **C** · 7 **A** · 8 **D** · 9 **B** · 10 **C** · 11 **A** · 12 **D** · 13 **B** · 14 **C** · 15 **A** · 16 **D** · 17 **B** · 18 **C** · 19 **A** · 20 **D**

Brief reasons: 4. NAND pull-up has the PMOS in parallel (either low input pulls the output up). 5. NAND2 (4) + inverter (2). 11. A longer period gives the logic more time; a hold violation is independent of the period. 17. An unassigned path means the output must hold its old value, which needs a latch.

### Section B

**B1.**
(a) r = 1: VM = (0.3 + 1 × (1.0 - 0.3))/2 = **0.500 V**. r = 0.8: VM = (0.3 + 0.8 × 0.7)/1.8 = 0.86/1.8 = **0.478 V** (a weaker PMOS lowers the switching threshold).
(b) tp = 0.69 R C = 0.69 × 8000 × 25 × 10^-15 = 1.38 × 10^-10 s = **138 ps**.
(c) RC (1 + 2 + 3 + 4) = **10 RC**.
(d) P = alpha C V^2 f = 0.2 × 5 × 10^-9 × 1.21 × 5 × 10^8 = **0.605 W**.

**B2.**
(a) NAND2: g = **4/3**, p = **2**; NOR2: g = **5/3**, p = **2**; inverter: g = **1**, p = **1**.
(b) G = (4/3)(5/3)(1) = **2.22**; F = G H = 2.22 × 20 = **44.4**; N = 3: stage effort f_hat = 44.4^(1/3) = **3.54**; P = 2 + 2 + 1 = 5; D = 3 × 3.54 + 5 = **15.6 tau**.
(c) NOT(AB + CD) = AOI22: PDN with two series pairs in parallel (4 NMOS), PUN the dual (4 PMOS): **8 transistors**.

**B3.**
(a) T = 0.5 + 3.0 + 0.25 + 0.15 = **3.9 ns**; f = 1/3.9 ns = **256 MHz**.
(b) The slower stage (1.6 ns) sets the period: T = 0.5 + 1.6 + 0.25 + 0.15 = **2.5 ns**; f = **400 MHz**; speedup 3.9/2.5 = **1.56** (the register overhead of 0.9 ns limits the gain, and balancing the stages perfectly at 1.5 ns would give 2.4 ns).
(c) (n - 1) t_carry + t_sum = 15 × 0.15 + 0.25 = **2.5 ns**.

**B4.**
(a)
```verilog
module mod10 (input clk, rst, output reg [3:0] q);
    always @(posedge clk) begin
        if (rst)         q <= 4'd0;
        else if (q == 9) q <= 4'd0;
        else             q <= q + 4'd1;
    end
endmodule
```
Output after reset (one value per clock): **1 2 3 4 5 6 7 8 9 0 1 2** (simulated: ... 9 0 1 2 3 ...). It needs 4 flip-flops for 10 states.
(b) b = 1, 2, 3, ..., 8, 9 (after each clock) gives g = **001, 011, 010, 110, 111, 101, 100, 000, 001**: only one bit changes per step (Gray code), including the wrap from 100 to 000.
(c) r = 0110: highest set bit is bit 2: **y = 2, valid = 1**. r = 1010: **y = 3, valid = 1**. r = 0001: **y = 0, valid = 1**. r = 0000: **y = 0, valid = 0** (no request).
