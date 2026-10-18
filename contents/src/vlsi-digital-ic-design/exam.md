# VLSI & Digital IC Design: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** The high noise margin is
A) VOH - VIL  B) VIH - VOL  C) VOL - VIL  D) VOH - VIH

**2.** The switching threshold VM of an inverter is the input voltage at which
A) the output is zero  B) Vout = Vin  C) the current is zero  D) the gain is zero

**3.** Short-circuit power in CMOS occurs
A) in steady state  B) only in NAND gates  C) during switching when both transistors conduct briefly  D) only in memories

**4.** In advanced technologies, leakage power is most significant
A) in idle or standby circuits (and can be 30 percent or more of total power)  B) never  C) only for analog circuits  D) only at high frequency

**5.** The Elmore delay of an RC tree is the sum over capacitors of
A) C only  B) R only  C) R + C  D) each capacitance times the resistance common to the path from the source

**6.** A transmission gate
A) passes only a high  B) passes both high and low levels well  C) is a type of flip-flop  D) has a single transistor

**7.** Dynamic logic requires
A) no clock  B) a resistor  C) a precharge phase  D) a negative supply

**8.** The parasitic delay p of a three-input NAND gate in the logical-effort model is
A) 3  B) 1  C) 2  D) 5/3

**9.** In logical effort the electrical effort h is
A) g × p  B) the number of stages  C) the delay in ns  D) C_out/C_in

**10.** Latch-up in bulk CMOS is caused by
A) a short circuit in metal  B) a parasitic thyristor (PNPN) structure  C) electromigration  D) the clock

**11.** DRC checks that
A) the timing is met  B) the layout equals the schematic  C) the layout obeys the foundry's design rules  D) the power is within budget

**12.** Static timing analysis
A) checks setup and hold on all paths without input vectors  B) simulates with random vectors only  C) checks the function  D) tests the chips

**13.** A hold-time violation
A) is fixed by lowering the clock frequency  B) is fixed by increasing VDD  C) cannot occur with edge-triggered flip-flops  D) does not depend on the clock period

**14.** A two-flip-flop synchroniser is used to
A) increase speed  B) save area  C) reduce the probability of metastability when crossing clock domains  D) divide the clock

**15.** In a Moore state machine the output depends on
A) the present state only  B) the present state and the input  C) the input only  D) the clock only

**16.** The minimum number of flip-flops for a binary-encoded FSM with 5 states is
A) 2  B) 3  C) 4  D) 5

**17.** Sequential logic in Verilog is written with
A) blocking assignments only  B) assign statements only  C) initial blocks  D) non-blocking assignments in an always @(posedge clk) block

**18.** A 6-input LUT stores how many configuration bits?
A) 6  B) 36  C) 64  D) 128

**19.** Among adder architectures, the Kogge-Stone adder is
A) fastest but with large area and wiring  B) the slowest  C) a ripple adder  D) the smallest

**20.** Dennard scaling ended mainly because
A) transistors stopped shrinking  B) the supply and threshold voltages could no longer be lowered without leakage rising sharply  C) wires became shorter  D) clocks got slower

## Section B: Short Questions (40 marks)

**B1. (5)** VDD = 1.2 V, VTn = 0.4 V, VTp = -0.4 V. Find VM for kp/kn = 0.5 using VM = (VTn + r (VDD + VTp))/(1 + r), r = sqrt(kp/kn), and the PMOS-to-NMOS width ratio that balances equal drive when electron mobility is 2.5 times hole mobility.

**B2. (5)** Give the transistor count of a three-input NOR gate, size its transistors for equal drive (reference inverter: NMOS 1, PMOS 2), and give its input capacitance and logical effort.

**B3. (5)** An inverter with R = 10 kΩ drives 10 fF: tp = 0.69 R C. A 3-section RC ladder has equal R and C per section: its Elmore delay.

**B4. (5)** A block with alpha = 0.1 and 10 nF of switched capacitance runs at 1 GHz and 1.0 V. Find its dynamic power, the power at 0.9 V, and the power at 0.9 V and 0.8 GHz.

**B5. (5)** t_cq = 0.4 ns, t_logic = 2.1 ns, t_su = 0.2 ns, skew = 0.1 ns. Find T_min and f_max, and the hold slack when the minimum t_cq plus logic delay is 0.30 ns and t_h = 0.1 ns.

**B6. (5)** A 32-bit ripple-carry adder has t_carry = 0.15 ns and t_sum = 0.25 ns: its delay. Splitting the 2.1 ns logic of B5 into 1.0 ns and 1.1 ns stages: the new period, frequency and speedup.

**B7. (5)** For the 3-stage shift register written once with non-blocking and once with blocking assignments, with d = 1 held, give q1 q2 q3 after the first, second and third clocks (initial values unknown, x). What unintended hardware does a case statement without default in a combinational block infer?

**B8. (5)** How many configuration bits does a 4-input LUT have? How many LUT4s are needed for an 8-input AND? State two advantages of an FPGA over an ASIC.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. CMOS gate design and logical effort.** (a) For F = NOT((A + B) C) describe the PDN and PUN and give the transistor count [3]. (b) For the inverter chain driving a load 1000 times its input capacitance give the delay for N = 3, 4, 5 and 6 and the best N [3]. (c) For the path inverter, NAND2, inverter, NOR2 with H = 64 compute G, F, the stage effort and the delay [4].

**C2. Timing and pipelining.** t_cq = 0.4 ns, t_logic = 2.1 ns, t_su = 0.2 ns, skew = 0.1 ns.
(a) T_min and f_max [2]. (b) The logic limit at 500 MHz [2]. (c) The hold check with skew 0.1 and 0.3 ns (t_cq,min + logic,min = 0.30 ns, t_h = 0.1 ns) and the fix [3]. (d) Two-stage (1.0 + 1.1 ns) and three-stage (0.7 ns each) pipelines: period, frequency, speedup and latency [3].

**C3. Finite state machines in Verilog.** (a) Draw the state diagram of a Moore detector for the overlapping sequence 1011 and give the Verilog [5]. (b) For the input 1011011101011 give the detection positions and the number of flip-flops [2]. (c) Describe how a Mealy version differs and give its detection timing [3].

**C4. Datapath and arithmetic.** (a) For the 8-bit ALU (op 0 add, 1 sub, 2 and, 3 or, 4 xor, 5 shift left, 6 shift right, 7 signed set-less-than) give the result and flags for 100 + 100, 200 + 100, 10 - 20, 0xF0 AND 0x3C, and signed -2 < 1 [5]. (b) The delay of 8-, 16-, 32- and 64-bit ripple adders [2]. (c) Explain carry lookahead with generate and propagate [3].

**C5. Design flow, FPGAs and memory.** (a) List the ASIC design steps from RTL to tape-out and explain DRC, LVS and STA [4]. (b) FPGA structure and LUT mapping; compare FPGA and ASIC [3]. (c) The transistor count of a 1 Mb SRAM array and a 6T cell description; why DRAM is denser [3].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **D** · 2 **B** · 3 **C** · 4 **A** · 5 **D** · 6 **B** · 7 **C** · 8 **A** · 9 **D** · 10 **B** · 11 **C** · 12 **A** · 13 **D** · 14 **C** · 15 **A** · 16 **B** · 17 **D** · 18 **C** · 19 **A** · 20 **B**

Brief reasons: 5. Each capacitor contributes C times the shared resistance on the path from the source. 13. Hold depends on the data and clock paths (and skew), not on the period. 16. 2^3 = 8 >= 5. 18. 2^6 = 64.

## Section B solutions

**B1.** r = sqrt 0.5 = 0.707: VM = (0.4 + 0.707 × 0.8)/(1.707) = **0.566 V**. Equal drive needs (W/L)p/(W/L)n = mu_n/mu_p = **2.5**.

**B2.** Step 1: NOR3: 3 NMOS in parallel + 3 PMOS in series = **6 transistors**.
Step 2: Sizing: NMOS width 1 each (parallel); PMOS are 3 in series so each is 3 × 2 = **6**.
Step 3: Input capacitance per input = 1 + 6 = **7** (against 3 for the inverter): logical effort g = **7/3**.

**B3.** tp = 0.69 × 10,000 × 10 × 10^-15 = **69 ps**. Elmore: R C (1 + 2 + 3) = **6 RC**.

**B4.** P = 0.1 × 10 × 10^-9 × 1.0^2 × 10^9 = **1.0 W**; at 0.9 V: **0.81 W**; at 0.9 V and 0.8 GHz: **0.648 W**.

**B5.** T_min = 0.4 + 2.1 + 0.2 + 0.1 = **2.8 ns**, f_max = **357 MHz**. Hold: t_cq,min + t_logic,min = 0.30 ns against t_h + skew = 0.1 + 0.1 = 0.20 ns: slack = **+0.10 ns** (met).

**B6.** 31 × 0.15 + 0.25 = **4.9 ns**. Two stages: T = 0.4 + 1.1 + 0.2 + 0.1 = **1.8 ns**; f = **555 MHz**; speedup 2.8/1.8 = **1.56**.

**B7.** Non-blocking: **1xx**, **11x**, **111** (one stage per clock). Blocking: **111** after the first clock (and after every later one): the chain collapses. A combinational always block with an incomplete case (no default) infers a **latch** (the output must hold its value for the unassigned inputs).

**B8.** A LUT4 has 2^4 = **16** configuration bits. An 8-input AND needs **3 LUT4s** (two 4-input ANDs and one 2-input AND). Advantages of an FPGA: no mask cost or fabrication delay (fast time to market, low volume economics); reprogrammable (bug fixes, field upgrades, prototyping); lower risk. (Disadvantages: larger, slower, more power.)

## Section C solutions

**C1.**
(a) F = NOT((A + B) C) is an OAI21 gate. PDN: (A parallel B) in series with C (3 NMOS). PUN (dual): (A series B) in parallel with C (3 PMOS). **6 transistors**.
(b) D = N H^(1/N) + N with H = 1000: N = 3: 3 × 10 + 3 = **33**; N = 4: 4 × 5.62 + 4 = **26.5**; N = 5: 5 × 3.98 + 5 = **24.9**; N = 6: 6 × 3.16 + 6 = **24.97**. The best is **N = 5** (stage effort about 4).
(c) G = 1 × (4/3) × 1 × (5/3) = **2.22**; F = G H = **142.2**; f_hat = 142.2^(1/4) = **3.45**; P = 1 + 2 + 1 + 2 = 6; D = 4 × 3.45 + 6 = **19.8 tau**.

**C2.**
(a) T_min = 0.4 + 2.1 + 0.2 + 0.1 = **2.8 ns**; f_max = **357 MHz**.
(b) At 500 MHz T = 2.0 ns: logic <= 2.0 - 0.4 - 0.2 - 0.1 = **1.3 ns**.
(c) Step 1: Hold: 0.30 >= t_h + skew.
Step 2: For skew 0.1: 0.30 - 0.20 = **+0.10 ns** (met).
Step 3: For skew 0.3: 0.30 - 0.40 = **-0.10 ns** (violated).
Step 4: Fix: insert at least 0.10 ns of delay (buffers) on the short path; slowing the clock does not help.
(d) Two stages (1.0 and 1.1 ns): T = 0.4 + 1.1 + 0.2 + 0.1 = **1.8 ns**, f = **555 MHz**, speedup **1.56**, latency 2 × 1.8 = 3.6 ns. Three stages (0.7 ns each): T = 0.4 + 0.7 + 0.2 + 0.1 = **1.4 ns**, f = **714 MHz**, speedup **2.0**, latency 3 × 1.4 = **4.2 ns**.

**C3.**
(a) States: S0 (nothing seen), S1 (last bit 1), S10, S101 and S1011 (output 1). S0: 0 → S0, 1 → S1; S1: 0 → S10, 1 → S1; S10: 0 → S0, 1 → S101; S101: 0 → S10, 1 → S1011; S1011: 0 → S10, 1 → S1. Verilog:
```verilog
module seqdet (input clk, rst, x, output z);
    localparam S0 = 3'd0, S1 = 3'd1, S10 = 3'd2, S101 = 3'd3, S1011 = 3'd4;
    reg [2:0] state, next;
    always @(posedge clk) begin
        if (rst) state <= S0;
        else     state <= next;
    end
    always @(*) begin
        case (state)
            S0:    next = x ? S1   : S0;
            S1:    next = x ? S1   : S10;
            S10:   next = x ? S101 : S0;
            S101:  next = x ? S1011 : S10;
            S1011: next = x ? S1   : S10;
            default: next = S0;
        endcase
    end
    assign z = (state == S1011);
endmodule
```
(b) Detections after input bits **4, 7 and 13** (the second overlaps the first): 3 detections. The 5 states need **3 flip-flops**.
(c) A **Mealy** machine has the output depend on the state and the present input: only 4 states are needed (S0, S1, S10, S101) and the output is `(state == S101) && x`. In simulation it was high during input bits 4, 7 and 13, that is in the same cycle as the final 1 (combinationally), one clock earlier than the Moore output, which becomes high in the cycle after that final 1 has been clocked in. Mealy outputs may glitch and change asynchronously with the input.

**C4.**
(a) 100 + 100 = **200**, **overflow = 1** (as signed numbers it does not fit), carry 0. 200 + 100 = **44**, **carry = 1**, overflow 0. 10 - 20 = **246** (-10 in two's complement), carry = 1 (borrow). 0xF0 AND 0x3C = **0x30 = 48**. Signed -2 < 1 gives **1**.
(b) (n - 1) × 0.15 + 0.25: 8 bits **1.3 ns**; 16 bits **2.5 ns**; 32 bits **4.9 ns**; 64 bits **9.7 ns**.
(c) Step 1: For each bit: generate g = a b and propagate p = a xor b; the carries satisfy c(i + 1) = g(i) + p(i) c(i).
Step 2: Expanding: c1 = g0 + p0 c0; c2 = g1 + p1 g0 + p1 p0 c0; and so on, so every carry is a two-level AND-OR function of g, p and c0, available after a few gate delays instead of waiting for a chain of n stages.
Step 3: For wider adders the lookahead is grouped hierarchically (group generate and propagate), giving a delay that grows as log n.

**C5.**
(a) Steps: specification and architecture → RTL (Verilog/VHDL) → functional simulation and verification → logic synthesis (to standard cells) → floorplanning → placement → clock-tree synthesis → routing → static timing analysis with extracted parasitics (iterate to close timing) → power analysis → physical verification (DRC, LVS, antenna) → tape-out. **DRC** checks the geometric design rules (width, spacing, enclosure); **LVS** checks that the circuit extracted from the layout equals the intended netlist; **STA** checks setup and hold on all paths at all PVT corners without test vectors.
(b) An FPGA consists of an array of configurable logic blocks (LUTs plus flip-flops), a programmable routing fabric, block RAMs, DSP blocks, I/O blocks and clock managers. A LUT4 implements any 4-input function (16 bits); wider functions are mapped onto several LUTs (an 8-input AND takes 3 LUT4s or 2 LUT6s). FPGA versus ASIC: FPGAs have no NRE or mask cost, reprogrammable, quick to market, but use about 10 to 20 times more area, run several times slower and use more power per function; ASICs have the best performance, power and unit cost at high volume but cost millions in masks and need a perfect first design.
(c) A 6T SRAM bit has two cross-coupled inverters (4 transistors) and two access transistors (6 in all): 1 Mb = 2^20 × 6 = **6,291,456 transistors** plus periphery. DRAM stores a bit as charge on a capacitor accessed by **one transistor** (1T1C), so a cell is much smaller than the 6T SRAM cell, but the charge leaks (so it needs refresh) and reading is destructive, making it slower.
