# VLSI & Digital IC Design: Lecture Notes

Very-large-scale integration (VLSI) puts millions to billions of transistors on one chip. This course covers how CMOS logic works (inverter, gates, delay, power), how to size circuits (logical effort), how timing is analysed (setup, hold, skew, pipelining), how hardware is described and simulated (Verilog) and how a design flows from RTL to a chip or an FPGA. Every Verilog module in these notes was compiled and simulated with Icarus Verilog and the outputs shown are real; the numerical examples were computed with scripts. Prerequisites: Digital Logic Design, Electronics I and II, and Computer Organization.

# Chapter 1: The CMOS Inverter

## 1.1 Structure and operation
A CMOS inverter has a PMOS pull-up transistor and an NMOS pull-down transistor with their gates joined (input) and their drains joined (output). Input low (0): the NMOS is off and the PMOS on, so the output is pulled to VDD. Input high: the NMOS conducts and the output goes to 0. In both steady states one of the two transistors is off, so there is **no static current path** from VDD to ground (except small leakage): CMOS logic consumes essentially no static power, the main reason it won.

## 1.2 Voltage transfer characteristic
The VTC has five regions (NMOS off, NMOS saturated/PMOS linear, both saturated, NMOS linear/PMOS saturated, PMOS off). The **switching threshold** VM (where Vout = Vin) for a long-channel model is
VM = (VTn + r (VDD + VTp))/(1 + r), with r = sqrt(kp/kn) and VTp negative.
For VDD = 1.2 V, VTn = 0.4 V, VTp = -0.4 V: **kp = kn gives VM = 0.6 V = VDD/2** (symmetric inverter); kp/kn = 0.5 (weak PMOS) gives VM = 0.566 V; kp/kn = 2 (strong PMOS) gives 0.634 V. Because holes are about 2 to 2.5 times less mobile than electrons, a PMOS must be made about 2 to 2.5 times wider than the NMOS to be symmetric. **Noise margins** NMH = VOH - VIH and NML = VIL - VOL (both about 0.4 VDD in a well-designed CMOS gate): large because the output swings fully from rail to rail and the gain in the transition region is high.

## 1.3 Delay
A gate is modelled as an equivalent resistance R (of the conducting transistor) charging or discharging the load capacitance C. The 50 percent propagation delay of a first-order RC network is **tp = 0.69 R C**. With R = 10 kΩ and C = 10 fF: 0.69 × 10^4 × 10^-14 = **69 ps**. Delay grows with load and falls with transistor width (a wider transistor has lower R but presents more capacitance to its driver). For a distributed RC line or a chain of resistances the **Elmore delay** is the sum over each capacitor of C times the total resistance between the source and that capacitor: for three equal sections (each R and C) it is RC (1 + 2 + 3) = **6 RC**, which is why long wires (delay grows with the square of length) are broken up with buffers (repeaters).

## 1.4 Power
- **Dynamic power**: P = alpha C V^2 f (alpha = switching activity). Each 0 to 1 transition draws C V^2/2 from the supply and dissipates it. Example: alpha = 0.1, C = 10 nF of total switched capacitance, V = 1.0 V, f = 1 GHz: **1.0 W**; lowering V to 0.9 V gives **0.81 W** (power falls with the square of voltage, which is why supply voltages scaled down from 5 V to about 1 V).
- **Short-circuit power**: both transistors conduct briefly during a slow input edge.
- **Static (leakage) power**: subthreshold, gate-oxide and junction leakage, now 30 percent or more of the total in advanced nodes; reduced with high-threshold transistors, power gating and lower voltage.
Techniques: clock gating, multi-Vt, multiple supply voltages, DVFS, power gating.

# Chapter 2: CMOS Logic Gates

## 2.1 Static complementary CMOS
A gate has a **pull-down network (PDN)** of NMOS transistors and a **pull-up network (PUN)** of PMOS transistors that are **duals**: series in one is parallel in the other. The gate is **inverting** (a single stage is NAND, NOR, NOT, AOI, OAI). Examples:
- **NAND2**: NMOS in series, PMOS in parallel; 4 transistors. **NOR2**: NMOS parallel, PMOS series; 4 transistors.
- **AND2 = NAND2 + inverter** (6 transistors): non-inverting functions need two stages.
- The Boolean function is found from the PDN: output = NOT (conduction function of the PDN). For F = NOT(A B + C): PDN: A and B in series in parallel with C; PUN: the dual: (A parallel B) in series with C.
- Transistor counts: inverter 2, NAND2/NOR2 4, NAND3/NOR3 6, static XOR about 12, a mirror full adder 28, a D flip-flop about 20 to 24; an SRAM cell 6; a DRAM cell 1 transistor + 1 capacitor. A 1 Mb SRAM array has 6 × 2^20 = **6.3 million transistors**.

## 2.2 Sizing for equal drive
Take a reference inverter with NMOS width 1 and PMOS width 2 (to balance mobility). A series stack of k transistors has k times the resistance, so each is widened by k to keep the same drive: **NAND2**: NMOS 2, PMOS 2 (total input capacitance per input 4, compared with 3 for the inverter); **NOR2**: NMOS 1, PMOS 4 (input capacitance 5). **NAND3**: NMOS 3, PMOS 2 (5); **NOR3**: NMOS 1, PMOS 6 (7). NOR gates are worse than NAND (series PMOS are slow), so designers prefer NAND-based logic.

## 2.3 Pass transistors, transmission gates and dynamic logic
- An NMOS pass transistor passes a strong 0 but a weak 1 (VDD - VTn): with VDD = 1.2 V and VTn = 0.4 V the output high is only **0.8 V**. A **transmission gate** (NMOS and PMOS in parallel with complementary controls) passes both levels fully: used in multiplexers, XORs, latches.
- **Dynamic logic** precharges the output and evaluates conditionally; fewer transistors and faster, but needs a clock, is noise sensitive and cannot hold state for long (charge leakage). Domino logic chains dynamic gates with inverters.

# Chapter 3: Logical Effort

**Logical effort** gives fast delay estimates and tells how to size a chain of gates. The delay of a gate in units of tau (the delay of a minimum inverter with no load, about a few ps) is d = g h + p, where:
- **g** = logical effort = (gate input capacitance)/(inverter input capacitance for the same drive): inverter **1**, NAND2 **4/3**, NOR2 **5/3**, NAND3 **5/3**, NOR3 **7/3**.
- **h** = electrical effort = C_out/C_in.
- **p** = parasitic delay: inverter 1, NAND2 2, NOR2 2, NAND3 3, NOR3 3.
For a path of N stages: path logical effort G = product of g; path electrical effort H = C_load/C_in; branching effort B; **path effort F = G B H**. The minimum delay is obtained when every stage has the same stage effort f_hat = F^(1/N), and **D = N F^(1/N) + P** (P = sum of parasitic delays). The best number of stages is about log4 F (a stage effort of about 4).

Examples:
- Inverter chain driving H = 1000 times its input capacitance: N = 5 gives D = 5 × 1000^(1/5) + 5 = **24.9 tau**; N = 4: 26.5; N = 6: 24.97; N = 3: 33. The optimum is about **5 stages** (log4 1000 = 4.98) each with stage effort 4.0.
- A path inverter, NAND2, inverter, NOR2 driving a load 64 times the input capacitance: G = 1 × 4/3 × 1 × 5/3 = 2.22; F = G H = 142.2; with N = 4: f_hat = 142.2^(1/4) = **3.45**; P = 1 + 2 + 1 + 2 = 6; D = 4 × 3.45 + 6 = **19.8 tau**.
- Inverter, NAND2, inverter with H = 16: G = 4/3, F = 21.3, f_hat = 2.77, D = 3 × 2.77 + 4 = **12.3 tau**.
Sizes are found by working backwards from the load: C_in = g C_out/f_hat for each stage.

# Chapter 4: Layout, Fabrication and Design Rules

CMOS is built on a silicon wafer by repeated photolithography, doping, oxidation, deposition and etching: n-well (or p-well), active (diffusion) areas, polysilicon gates, contacts, metal layers (10 or more) and vias. **Layout** is the set of mask polygons. **Design rules** (minimum width, spacing, enclosure and overlap) ensure manufacturability; scalable rules are expressed in units of **lambda** (half the minimum feature size). A **stick diagram** is a symbolic layout showing layer topology (colour-coded lines for diffusion, poly and metal) before drawing exact geometry. A standard cell is a pre-designed gate layout of fixed height with power rails at top and bottom; cells are placed in rows and connected by routing.
Typical issues: **latch-up** (parasitic thyristor in bulk CMOS, prevented with substrate and well taps and guard rings), **antenna effects** (charge build-up on long wires during plasma processing), **electromigration** (current density limits on wires), **IR drop** on the power grid, **crosstalk** between neighbouring wires, **process variation** (corners: typical, fast, slow) and design for manufacturability. A wire has resistance and capacitance: with R = 100 Ω and C = 0.2 pF per section the Elmore delay of a distributed line is about 0.5 R C = 10 ps (0.38 R C = 7.6 ps with the exact distributed formula); wire delay dominates in modern technologies.
**Scaling** (Moore's law, Dennard scaling): shrinking all dimensions by s = 0.7 halves the area (0.49), reduces gate delay by 0.7 and, with constant-field scaling, keeps the power density constant. Dennard scaling ended around 2005 (leakage prevented further voltage scaling), so power, not area, now limits performance.

# Chapter 5: Timing and Sequential Circuits

## 5.1 Flip-flops and the clocking constraints
A D flip-flop samples D on the clock edge: **setup time** t_su (D stable before the edge), **hold time** t_h (D stable after the edge), **clock-to-Q delay** t_cq. For a path from flip-flop 1 through combinational logic to flip-flop 2 with **clock skew** t_skew (the clock arrives at the capture flop t_skew later than at the launch flop):
- **Setup (maximum delay)**: T_clk >= t_cq + t_logic,max + t_su + t_skew.
- **Hold (minimum delay)**: t_cq,min + t_logic,min >= t_h + t_skew. A hold violation **cannot be fixed by slowing the clock**; it is cured by inserting delay (buffers) in the short path.
Example: t_cq = 0.4 ns, t_logic = 2.1 ns, t_su = 0.2 ns, skew = 0.1 ns: T_min = **2.8 ns**, f_max = **357 MHz**. At a target of 500 MHz (T = 2.0 ns) the logic may take at most 2.0 - 0.4 - 0.2 - 0.1 = **1.3 ns**. Hold check: t_cq,min = 0.25 ns, shortest logic 0.05 ns, t_h = 0.1 ns, skew 0.1 ns: slack = 0.30 - 0.20 = **+0.10 ns** (met).

## 5.2 Pipelining and retiming
Splitting the 2.1 ns logic into two stages of 1.0 and 1.1 ns with a register in between: T = 0.4 + 1.1 + 0.2 + 0.1 = **1.8 ns** (555 MHz), a throughput **1.56 times** higher (the register overhead t_cq + t_su + skew = 0.7 ns limits the gain), at the cost of one extra clock of latency and the registers. **Retiming** moves registers across logic to balance stage delays without changing the function.

## 5.3 Clocking issues
**Clock skew and jitter** reduce usable time; clock distribution uses H-trees or meshes; **clock gating** saves power; **metastability** occurs when an asynchronous input violates setup/hold: use two-flip-flop synchronisers for single-bit signals crossing clock domains and handshakes or FIFOs for buses. Latch-based and multi-phase designs borrow time between stages.

## 5.4 Arithmetic circuits
**Ripple-carry adder**: n full adders in a chain; delay = (n - 1) t_carry + t_sum grows linearly: with t_carry = 0.15 ns and t_sum = 0.25 ns: 8 bits **1.3 ns**, 16 bits 2.5 ns, 32 bits **4.9 ns**, 64 bits 9.7 ns. **Carry-lookahead** computes generate (g = a b) and propagate (p = a xor b) signals and combines them in a tree of depth O(log n) (a 64-bit adder in 6 to 8 gate delays); **carry-select**, **carry-skip** and prefix adders (Kogge-Stone: fastest, large; Brent-Kung: small, slower) trade area for speed. **Multipliers**: array (n^2 adders), Booth recoding (halves the partial products), Wallace/Dadda trees (log depth).

# Chapter 6: Hardware Description with Verilog

Verilog describes hardware **concurrently**: modules instantiate other modules; `assign` statements are continuous; `always` blocks describe behaviour. Two styles: **behavioural/RTL** (synthesisable) and **testbench** code (simulation only).
**Key rules**: use `always @(posedge clk)` with **non-blocking** assignments (`<=`) for sequential logic; use `always @(*)` with **blocking** assignments (`=`) and full `case/else` coverage for combinational logic (otherwise latches are inferred); assign each signal in only one always block; reset all state; avoid mixing blocking and non-blocking in one block.

## 6.1 A full adder and a 4-bit ripple adder (structural)
```verilog
module full_adder (input a, b, cin, output sum, cout);
    assign sum  = a ^ b ^ cin;
    assign cout = (a & b) | (cin & (a ^ b));
endmodule

module adder4 (input [3:0] a, b, input cin, output [3:0] sum, output cout);
    wire c1, c2, c3;
    full_adder fa0 (a[0], b[0], cin, sum[0], c1);
    full_adder fa1 (a[1], b[1], c1,  sum[1], c2);
    full_adder fa2 (a[2], b[2], c2,  sum[2], c3);
    full_adder fa3 (a[3], b[3], c3,  sum[3], cout);
endmodule
```
An exhaustive self-checking testbench applied all 16 × 16 × 2 = 512 input combinations: **errors = 0**; 9 + 8 + 1 = 18 (cout = 1, sum = 0010).

## 6.2 A synchronous counter
```verilog
module counter4 (input clk, rst, en, output reg [3:0] q);
    always @(posedge clk) begin
        if (rst)      q <= 4'd0;
        else if (en)  q <= q + 4'd1;
    end
endmodule
```
Simulation output (after reset release, enable high): `1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 0 1 2 3 4`: it wraps from 15 to 0 (modulo 16); with enable low the count was held (q = 4); the synchronous reset gave q = 0 on the next clock.

## 6.3 A finite state machine
A Moore FSM that outputs 1 when the overlapping sequence **1011** has just been received:
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
Five states need 3 flip-flops. The input stream 1011011101011 produced detections after input bits **4, 7 and 13** (3 detections, including the overlapping occurrence at bits 4 to 7). The three-block structure (state register, next-state logic, output logic) is the standard FSM template; a **Mealy** machine would assert the output in the state S101 on input 1 (one cycle earlier, depending on the input).

## 6.4 Blocking versus non-blocking
```verilog
// non-blocking: a true 3-stage shift register
always @(posedge clk) begin q1 <= d; q2 <= q1; q3 <= q2; end
// blocking: all three registers collapse into one
always @(posedge clk) begin q1 = d; q2 = q1; q3 = q2; end
```
With d = 1 held high, the non-blocking version shows q1q2q3 = 1xx after the first clock (x = unknown initial values), 11x after the second and 111 after the third: **one stage per clock**. The blocking version gives **111 after the first clock** because each assignment sees the already updated value: the intended pipeline has disappeared. Use non-blocking assignments for all clocked logic.

## 6.5 An 8-bit ALU
```verilog
module alu8 (input [7:0] a, b, input [2:0] op,
             output reg [7:0] y, output zero, output reg carry, output reg overflow);
    reg [8:0] t;
    always @(*) begin
        carry = 1'b0; overflow = 1'b0; t = 9'd0;
        case (op)
            3'd0: begin t = {1'b0, a} + {1'b0, b}; y = t[7:0]; carry = t[8];
                        overflow = (a[7] == b[7]) && (y[7] != a[7]); end
            3'd1: begin t = {1'b0, a} - {1'b0, b}; y = t[7:0]; carry = t[8];
                        overflow = (a[7] != b[7]) && (y[7] != a[7]); end
            3'd2: y = a & b;
            3'd3: y = a | b;
            3'd4: y = a ^ b;
            3'd5: y = a << b[2:0];
            3'd6: y = a >> b[2:0];
            3'd7: y = ($signed(a) < $signed(b)) ? 8'd1 : 8'd0;
        endcase
    end
    assign zero = (y == 8'd0);
endmodule
```
Simulated results: 100 + 27 = 127 (no flags); 100 + 100 = 200 with **overflow = 1** (as signed numbers 200 does not fit in 8 bits; carry 0); 200 + 100 = 44 with **carry = 1**; 50 - 50 = 0 with zero = 1; 10 - 20 = 246 (that is -10 in two's complement; carry = 1 means a borrow occurred in this implementation); 0xF0 AND 0x3C = 48, OR = 252, XOR = 204; 3 << 2 = 12; 128 >> 3 = 16; signed 0xFE (-2) < 1 gives 1. Unsigned carry and signed overflow are different conditions.

# Chapter 7: The Design Flow, FPGAs and ASICs

## 7.1 ASIC flow
Specification → architecture → **RTL** (Verilog/VHDL/SystemVerilog) → functional simulation and verification (testbenches, assertions, coverage, UVM) → **logic synthesis** (to gates of a standard-cell library with timing constraints) → **floorplanning** → **placement** → **clock tree synthesis** → **routing** → **static timing analysis** (STA: all paths, all corners) → physical verification (DRC design rule check, LVS layout versus schematic, antenna) → power analysis → **tape-out** (masks). Costs: modern masks cost millions of dollars, so verification before tape-out is critical (a respin is expensive). **Design for test**: scan chains, BIST, boundary scan (JTAG); yield and **fault models** (stuck-at-0/1).

## 7.2 FPGAs
A field-programmable gate array consists of configurable logic blocks (**LUTs** with flip-flops), programmable routing, block RAMs, DSP multiply-accumulate blocks, I/O blocks and PLLs. A **4-input LUT** is a 16-bit memory that implements any function of 4 inputs (16 configuration bits; a LUT6 needs 64). Design flow: RTL → synthesis → technology mapping → place and route → bitstream → configuration. Timing closure uses the same ideas (constraints, STA). **FPGA versus ASIC**: FPGAs have no mask cost, are reprogrammable and fast to market but are larger, slower and use more power per function (about 10 to 20 times in area); ASICs win at high volume, low power and top speed. Soft processors (RISC-V, MicroBlaze), HLS (high-level synthesis from C) and partial reconfiguration extend them.

## 7.3 Verification and testing
Directed and constrained-random testing, self-checking testbenches (compare to a reference model), assertions, code and functional coverage, formal verification (equivalence checking, model checking), gate-level simulation with back-annotated delays. **Always simulate** with a testbench that checks results automatically (the adder example tested all 512 cases and counted the errors).

# Chapter 8: Memory and Interconnect (overview)
- **SRAM** (6T cell: two cross-coupled inverters + two access transistors): fast, used for caches and registers; **DRAM** (1T1C): dense, needs refresh; **Flash** (floating gate); ROM; register files. Sense amplifiers detect small bitline swings.
- **Interconnect**: wire delay and energy dominate; repeaters, wider upper-layer wires, network-on-chip for many-core systems; clock distribution and power delivery take large shares of area.
- **Beyond planar CMOS**: FinFET and gate-all-around transistors for better gate control at small nodes, 3D stacking, chiplets.

## Quick reference
- VM = (VTn + r (VDD + VTp))/(1 + r), r = sqrt(kp/kn). tp = 0.69 R C. P_dyn = alpha C V^2 f.
- Logical effort: d = g h + p; D = N F^(1/N) + P; best N about log4 F. g: inv 1, NAND2 4/3, NOR2 5/3.
- Setup: T >= t_cq + t_logic + t_su + t_skew. Hold: t_cq,min + t_logic,min >= t_h + t_skew.
- Verilog: sequential with `<=`, combinational with `=` and `always @(*)`; complete case coverage.
