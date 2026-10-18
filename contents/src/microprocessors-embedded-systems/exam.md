# Microprocessors and Embedded Systems: Final Examination

Duration: 3 hours. Calculator and a register summary sheet allowed. Total: 100 marks. Assume an ATmega328P at 16 MHz unless stated.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** In a Harvard architecture
A) code and data share one memory  B) code and data have separate memories and buses  C) there is no memory  D) only data is stored

**2.** A 16-bit address bus can address
A) 16 KB  B) 64 KB  C) 1 MB  D) 4 GB

**3.** On an ARM Cortex-M, the register LR holds
A) the stack pointer  B) the return address  C) the program counter  D) the status flags

**4.** To clear bit 3 of a register without changing the others
A) reg &= ~(1 << 3)  B) reg |= (1 << 3)  C) reg ^= (1 << 3)  D) reg = 3

**5.** An input pin with no pull-up or pull-down and nothing connected
A) reads 0  B) reads 1  C) floats and may read unpredictably  D) is damaged

**6.** CTC mode with OCR = N produces a period of
A) N counts  B) N + 1 counts  C) 2N counts  D) 256 counts

**7.** For fast PWM with 8 bits the duty cycle (non-inverting) is approximately
A) OCR/256  B) (OCR + 1)/256  C) 256/OCR  D) OCR/100

**8.** The main reason to keep an ISR short is that
A) the compiler requires it  B) other interrupts and the main program are delayed while it runs  C) ISRs cannot use registers  D) the MCU overheats

**9.** On an AVR, the global interrupt enable is controlled by
A) cli() and sei()  B) the UART  C) the watchdog only  D) the ADC

**10.** The ISR must clear its flag when
A) the hardware does not clear it automatically  B) never  C) only at power-up  D) the main loop is idle

**11.** An N-bit ADC with reference V_ref produces the code
A) V_in/V_ref  B) V_in × 2^N/V_ref  C) V_ref/V_in  D) V_in × N

**12.** The ADC clock for the ATmega328P should be in the range
A) 1 to 10 kHz  B) 50 to 200 kHz  C) 1 to 10 MHz  D) 100 MHz

**13.** A UART frame 8N1 contains
A) 8 bits in total  B) 10 bits  C) 12 bits  D) 16 bits

**14.** A baud rate error greater than about this value risks communication errors
A) 0.01 percent  B) 2 percent  C) 20 percent  D) 50 percent

**15.** In SPI, which line selects a particular slave?
A) MOSI  B) MISO  C) SS (chip select)  D) SCLK

**16.** I2C uses
A) four wires  B) two open-drain wires with pull-ups  C) one wire  D) a differential pair

**17.** The 7-bit I2C address 0x48 is sent as the write byte
A) 0x48  B) 0x90  C) 0x91  D) 0x24

**18.** A real-time system is "hard real time" if
A) it must respond quickly on average  B) a missed deadline is a system failure  C) it uses an RTOS  D) it has an RTC

**19.** Priority inversion is resolved by
A) priority inheritance  B) removing the interrupts  C) reducing the clock  D) more RAM

**20.** Which technique lowers dynamic power the most?
A) raising V_dd  B) reducing the supply voltage and the clock frequency  C) adding pull-ups  D) removing the crystal's capacitors

## Section B: Short Questions (40 marks)

**B1. (5)** A register holds 0xB5. Give the result of masking bits 7 to 4 (x & 0xF0), shifting right by 4, and replacing bits 3 to 0 with 0xA.

**B2. (5)** Find UBRR, the actual baud rate and the error for 38,400 baud at 16 MHz (UBRR = f/(16 × baud) - 1).

**B3. (5)** An ADC has 10 bits and V_ref = 5 V. Find the LSB, the code for 3.3 V and the voltage represented by code 700.

**B4. (5)** Write the bytes on the I2C bus for writing the value 0x10 to register 0x20 of a device at address 0x50 (use the notation S, addr+W, A, ..., P).

**B5. (5)** Describe SPI mode 0 and why master and slave must agree on the mode.

**B6. (5)** An ISR with a 15 μs run time is triggered every 40 μs. Find the CPU load and say whether a second ISR of 30 μs every 100 μs fits alongside it.

**B7. (5)** A device draws 8 mA for 0.5 percent of the time and 2 μA otherwise. Find the average current and the life of a 220 mAh coin cell.

**B8. (5)** In Q15 format find the representation of 0.75 and of -0.25, and compute 0.75 × 0.5 in Q15 (0.5 = 16384).

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Motor speed control.** A DC motor is driven by a MOSFET from Timer1 on the ATmega328P (16 MHz).
(a) Choose fast PWM mode with ICR1 as TOP for a 20 kHz carrier (no prescaler): find ICR1 [3]. (b) Find OCR1A for a 30 percent duty cycle and the average voltage for a 12 V motor supply [3]. (c) Draw the driver circuit including the flyback diode and explain each component [4].

**C2. Serial packet protocol.** Design a UART packet: start byte 0xAA, length byte, payload, CRC-8.
(a) Give the full packet for the payload 01 02 03 (use the CRC-8 with polynomial 0x07 over the payload, 0x48) [3]. (b) Describe the receiver state machine that parses the packet and rejects corrupted ones [4]. (c) Compute the time to send this packet at 115,200 baud (8N1) [2]. (d) Why use a ring buffer between the UART ISR and the parser? [1]

**C3. I2C sensor reading.** A temperature sensor (address 0x48) returns a 16-bit value whose upper 12 bits are the temperature in units of 0.0625 °C (two's complement) from register 0x00.
(a) Write the full I2C read sequence including the repeated start [4]. (b) The sensor returns 0x19 0x00: find the temperature [3]. (c) Give the C code to convert the two bytes to a temperature in 0.1 °C units with integer arithmetic [3].

**C4. Battery life and sleep design.** A sensor node wakes every 10 s, measures for 50 ms at 8 mA, transmits for 20 ms at 30 mA, and sleeps at 4 μA otherwise.
(a) Find the average current [4]. (b) Find the life with a 2000 mAh battery [2]. (c) What dominates the consumption, and give two changes that would double the life? [4]

**C5. Real-time scheduling.** Three periodic tasks run on a single CPU: T1 (period 10 ms, run time 2 ms), T2 (period 20 ms, run time 5 ms), T3 (period 50 ms, run time 10 ms).
(a) Find the CPU utilisation [2]. (b) Apply the rate-monotonic scheduling bound U ≤ n(2^(1/n) - 1) for n = 3 and decide whether the set is schedulable [4]. (c) Assign rate-monotonic priorities and explain what happens to T3 when T1 and T2 are ready [2]. (d) Describe priority inversion in this system if T3 holds a mutex needed by T1 [2].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **B** · 3 **B** · 4 **A** · 5 **C** · 6 **B** · 7 **B** · 8 **B** · 9 **A** · 10 **A** · 11 **B** · 12 **B** · 13 **B** · 14 **B** · 15 **C** · 16 **B** · 17 **B** · 18 **B** · 19 **A** · 20 **B**

Brief reasons: 6. The counter runs 0 to OCR inclusive. 17. 0x48 << 1 = 0x90. 20. P ∝ C V² f.

## Section B solutions

**B1.** Step 1: 0xB5 = 1011 0101; 0xB5 & 0xF0 = 1011 0000 = **0xB0**.
Step 2: 0xB5 >> 4 = 0000 1011 = **0x0B**.
Step 3: replace bits 3 to 0 by 0xA: (0xB5 & 0xF0) | 0x0A = 1011 0000 | 0000 1010 = **0xBA**.

**B2.** Step 1: UBRR = 16,000,000/(16 × 38,400) - 1 = 26.04 - 1 = 25.04: use **25**.
Step 2: actual baud = 16 MHz/(16 × 26) = **38,461**; error = (38,461 - 38,400)/38,400 = +0.16 percent (acceptable).

**B3.** Step 1: LSB = 5/1024 = **4.88 mV**.
Step 2: code for 3.3 V = 3.3 × 1024/5 = 675.8, so **675** (truncated).
Step 3: code 700 = 700 × 5/1024 = **3.42 V**.

**B4.** **S, 0xA0 (0x50 << 1 with W = 0), A, 0x20, A, 0x10, A, P.**

**B5.** SPI mode 0: CPOL = 0 (the clock idles low) and CPHA = 0 (data are sampled on the rising edge and changed on the falling edge). The mode determines when each side changes and samples its data line relative to SCLK: if the master and the slave use different modes, bits are sampled at the wrong moment (or one bit early or late), so the data are corrupted.

**B6.** Step 1: load of the first ISR = 15/40 = **37.5 percent**.
Step 2: the second ISR adds 30/100 = 30 percent: the total = **67.5 percent** < 100 percent, so it fits on average, but the worst-case latency must also be checked: if both fire together the second ISR waits up to 15 μs (or the first waits 30 μs if priorities are fixed), which must be within each ISR's deadline.

**B7.** Step 1: I_avg = 8 mA × 0.005 + 0.002 mA × 0.995 = 0.04 + 0.00199 = **0.042 mA**.
Step 2: life = 220 mAh/0.042 mA = **5240 h ≈ 218 days**.

**B8.** Step 1: 0.75 × 32768 = **24576**; -0.25 × 32768 = **-8192**.
Step 2: 0.75 × 0.5: (24576 × 16384) >> 15 = 402,653,184/32768 = **12288** = 12288/32768 = 0.375 ✓.

## Section C solutions

**C1.**
(a) Step 1: f_PWM = f_clk/(N (1 + TOP)): for 20 kHz with N = 1: 1 + TOP = 16,000,000/20,000 = 800.
Step 2: **ICR1 = 799**.
(b) Step 1: duty = OCR1A/(1 + TOP) (approximately): 0.30 × 800 = 240 counts high, so **OCR1A = 239**.
Step 2: the average voltage = 0.30 × 12 V = **3.6 V**.
(c) Circuit: the MCU pin → a gate resistor (about 100 Ω, limits the gate-charging current) → the gate of an N-channel logic-level MOSFET; a **10 kΩ pull-down** from gate to ground (keeps the motor off while the pin is floating at reset); the motor between +12 V and the drain; a **flyback diode** (Schottky) across the motor with its cathode at +12 V (it carries the inductive current when the MOSFET turns off, clamping the voltage); a **decoupling capacitor** across the motor supply and optionally across the motor terminals to reduce noise; the MOSFET source to ground (common with the MCU ground). A 20 kHz carrier is above the audible range.

**C2.**
(a) Step 1: CRC-8 (polynomial 0x07, initial value 0) of the payload 01 02 03: after 0x01 the register is 0x07; after 0x02 it is 0x1B; after 0x03 it is **0x48**.
Step 2: the packet (hex) is: **AA 03 01 02 03 48** (start, length = 3, payload, CRC).
(b) States: **WAIT_START** (discard bytes until 0xAA) → **GET_LEN** (store the length; if it exceeds the maximum, return to WAIT_START) → **GET_PAYLOAD** (store `len` bytes in a buffer) → **GET_CRC** (compute the CRC-8 of the payload and compare): on a match, deliver the packet; on a mismatch, drop it and return to WAIT_START. Add a **timeout** (if no byte arrives for a few byte-times, reset the state machine) to resynchronise after a lost byte.
(c) 6 bytes × 10 bits = 60 bits; 60/115,200 = **0.52 ms**.
(d) The ISR can store each received byte in about 1 μs and return, while the parser processes at its own pace; the buffer absorbs bursts (the next byte can arrive every 87 μs) and decouples timing between the interrupt and the main loop; no byte is lost as long as the buffer is large enough.

**C3.**
(a) **S, 0x90 (0x48 << 1, write), A, 0x00 (the pointer register), A, Sr (repeated START), 0x91 (0x48 << 1 | 1, read), A, [high byte], A (the master acknowledges the first byte), [low byte], N (NACK on the last byte), P.** The repeated start keeps the bus without releasing it between setting the register pointer and reading.
(b) Step 1: the 16-bit word 0x1900: the upper 12 bits (shift right by 4): 0x190 = 400 (positive).
Step 2: T = 400 × 0.0625 °C = **25.0 °C**.
(c)
```c
int16_t raw = (int16_t)((hi << 8) | lo);   // 16-bit two's complement
raw >>= 4;                                 // 12-bit value (arithmetic shift keeps the sign)
int16_t tenths = (raw * 5) / 8;            // raw * 0.0625 * 10 = raw * 0.625 = raw * 5 / 8
```
For raw = 400: tenths = 2000/8 = **250** (25.0 °C). (Use integer arithmetic: no floating point on an 8-bit MCU.)

**C4.**
(a) Step 1: each 10 s cycle: measurement 50 ms × 8 mA = 0.4 mA·s; transmission 20 ms × 30 mA = 0.6 mA·s; sleep 9.93 s × 0.004 mA = 0.0397 mA·s.
Step 2: total charge = 0.4 + 0.6 + 0.0397 = 1.04 mA·s per 10 s: **I_avg = 1.04/10 = 0.104 mA**.
(b) Life = 2000 mAh/0.104 mA = **19,230 h** = 19,230/24 = 801 days ≈ **2.2 years**.
(c) The **radio transmission and the measurement** dominate (96 percent of the charge); sleep contributes only about 4 percent. Doubling the life: **halve the wake-up rate** (every 20 s) or **halve the active times** (a shorter measurement window, a lower-power sensor and a faster transmission with a lower-power radio mode, or transmit only when the value changes by a threshold).

**C5.**
(a) U = Σ C_i/T_i = 2/10 + 5/20 + 10/50 = 0.2 + 0.25 + 0.2 = **0.65**.
(b) Step 1: for n = 3: U_max = n (2^(1/n) - 1) = 3 (2^(1/3) - 1) = 3 (1.2599 - 1) = 3 × 0.2599 = **0.780**.
Step 2: since 0.65 < 0.78 the set is **schedulable** under rate-monotonic scheduling (a sufficient test).
(c) Rate-monotonic priorities (shorter period, higher priority): **T1 > T2 > T3**. When T1 and T2 are ready, T1 runs first (2 ms), then T2 (5 ms); T3 runs only in the remaining time and can be preempted whenever T1 or T2 is released; its worst-case response time is still below its 50 ms deadline.
(d) T3 (low priority) holds the mutex; T2 (medium priority) preempts T3; T1 (high) then blocks waiting for the mutex held by T3, which cannot run because T2 is running: T1 is effectively delayed by T2 (**priority inversion**). With **priority inheritance**, T3 temporarily runs at T1's priority until it releases the mutex.
