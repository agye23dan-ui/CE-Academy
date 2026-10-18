# Microprocessors and Embedded Systems: Assignments with Worked Solutions

Examples use the ATmega328P (Arduino Uno, 16 MHz) and ARM Cortex-M. The pure-logic C code in the solutions (bit macros, ring buffer, debounce, CRC, fixed point) was compiled and run on a PC and the printed results are the real outputs; the timer, baud-rate and ADC numbers were computed with Python. Always check register names and values against the datasheet of the part you use. Marks reward correct arithmetic, correct register-level reasoning and good embedded-C practice (volatile, atomicity, short ISRs).

# Assignment 1: Architecture, Bit Manipulation and GPIO (60 marks)

## Questions

**Q1. Architecture (10 marks)** (a) Distinguish von Neumann and Harvard architectures and state which the ATmega328P uses [3]. (b) How many bytes can a 16-bit address bus address? Give the size of the ATmega328P's flash, SRAM and EEPROM [3]. (c) List the roles of R0 to R3, R4 to R11, SP, LR and PC on an ARM Cortex-M [4].

**Q2. Bit manipulation (14 marks)** Use the macros SET_BIT, CLR_BIT, TOG_BIT and TEST_BIT (see the notes). (a) Starting with PORTB = 0x24, apply SET_BIT(PORTB, 0), CLR_BIT(PORTB, 2) and TOG_BIT(PORTB, 5): give the register after each step [4]. (b) For x = 0xB5 find x & 0x0F, x >> 4, and the result of replacing bits 5 to 2 with the value 5 [4]. (c) Write a C expression that sets bits 3 and 1 of a register without touching the others, and one that tests whether bit 7 is clear [3]. (d) Explain why `reg |= 1 << n` is preferred to `reg = reg | 0x08` in readable code and what `(1u << n)` avoids [3].

**Q3. GPIO (12 marks)** (a) Write code to configure PB5 as an output and blink an LED (use a delay) [3]. (b) Write code to read a push-button between PD2 and ground with the internal pull-up [3]. (c) Find the series resistor for an LED (V_F = 2 V) at 10 mA from 5 V, and at 5 mA from 3.3 V [3]. (d) Why can't a port pin drive a 12 V relay directly, and what circuit would you use? [3]

**Q4. Memory-mapped I/O and volatile (8 marks)** (a) Explain memory-mapped I/O [2]. (b) The loop `while (!flag) ;` never ends although an ISR sets `flag`: explain why and fix it [3]. (c) Why does reading a 16-bit counter shared with an ISR need protection on an 8-bit MCU? Give the safe-read code [3].

**Q5. Fixed point and data structures (16 marks)** (a) Represent 0.5 and 0.25 in Q15 and compute their product in Q15 (and -0.5 × 0.5) [4]. (b) Describe a ring buffer of size 8 and give the state after putting 9 bytes, getting 2, and putting 2 more (head, tail, count) [5]. (c) Compute the CRC-8 (polynomial 0x07, initial value 0) of the ASCII string "123456789" and of the bytes 01 02 03 [3]. (d) Explain why the ring buffer is the standard structure between an ISR and the main loop [4].

## Solutions and Marking Guide

**Q1.**
(a) **Von Neumann:** one memory and bus for instructions and data (simple, but instruction fetch and data access cannot overlap). **Harvard:** separate program and data memories/buses (simultaneous fetch and access, higher throughput; code cannot normally be modified at run time). The **ATmega328P is Harvard** (flash for code, SRAM for data); Cortex-M uses a modified Harvard arrangement (separate buses with a unified address space).
(b) 2^16 = **65,536 bytes (64 KB)**. ATmega328P: **32 KB flash, 2 KB SRAM, 1 KB EEPROM**.
(c) **R0 to R3:** arguments and the return value (caller-saved scratch registers); **R4 to R11:** local variables (callee-saved: a function that uses them must save and restore them); **SP (R13):** the stack pointer; **LR (R14):** the return address saved by `BL` (return with `BX LR`); **PC (R15):** the address of the next instruction.

**Q2.**
(a) Step 1: 0x24 = 0010 0100. SET_BIT(PORTB, 0) ORs in 0000 0001: 0010 0101 = **0x25**.
Step 2: CLR_BIT(PORTB, 2) ANDs with ~0000 0100: 0010 0001 = **0x21**.
Step 3: TOG_BIT(PORTB, 5) XORs with 0010 0000: bit 5 was 1 so it becomes 0: 0000 0001 = **0x01** (TEST_BIT(PORTB, 0) = 1).
(b) 0xB5 = 1011 0101: x & 0x0F = **0x05**; x >> 4 = **0x0B**. Replace bits 5 to 2 with 5 (0101): clear the field with & ~0x3C, giving 1000 0001 = 0x81, then OR (5 << 2) = 0x14: **0x95**.
(c) `reg |= (1 << 3) | (1 << 1);` and `if (!(reg & (1 << 7)))` (or `!TEST_BIT(reg, 7)`).
(d) The expression with a bit **position** is self-documenting (the reader sees the bit number from the datasheet name) and avoids mask errors; `1u` makes the shift unsigned, so shifting into bit 31 of a 32-bit int does not overflow a signed int (undefined behaviour) and avoids sign extension surprises.

**Q3.**
(a)
```c
#include <avr/io.h>
#include <util/delay.h>
int main(void) {
    DDRB |= (1 << DDB5);              // PB5 as output
    for (;;) {
        PORTB ^= (1 << PORTB5);       // toggle the LED
        _delay_ms(500);
    }
}
```
(b)
```c
DDRD  &= ~(1 << DDD2);                // PD2 as input
PORTD |=  (1 << PORTD2);              // enable the pull-up (pin high when the button is open)
if (!(PIND & (1 << PIND2))) { /* pressed: the pin reads 0 */ }
```
(c) R = (5 - 2)/0.010 = **300 Ω**; R = (3.3 - 2)/0.005 = **260 Ω** (use 270 Ω).
(d) A pin supplies only about 20 mA at 5 V (it cannot supply 12 V or the coil current, typically 30 to 100 mA). Use an **NPN transistor or logic-level MOSFET** as a low-side switch, driven through a base resistor (for example 2.2 kΩ), with the relay on the 12 V supply and a **flyback diode** across the coil to absorb the inductive spike.

**Q4.**
(a) Peripheral registers occupy ordinary addresses in the memory map: the program configures and reads the hardware with normal loads and stores (in C through pointers to volatile locations, for example `*(volatile uint32_t *)0x40021000`).
(b) The compiler sees no code that changes `flag` inside the loop, so it may load it once into a register and loop forever (an optimisation valid for single-threaded code). Declare **`volatile uint8_t flag;`** so that every access reads the memory. (Also clear the flag in the main loop after handling.)
(c) A 16-bit read takes two 8-bit loads; if the ISR increments the counter between them, the high and low bytes come from different values (for example 0x00FF becomes 0x0100 but a torn read could give 0x01FF). Safe read:
```c
uint16_t read_counter(void) {
    uint8_t sreg = SREG;      // save the interrupt state
    cli();                    // disable interrupts
    uint16_t v = counter;
    SREG = sreg;              // restore
    return v;
}
```

**Q5.**
(a) Step 1: Q15 value = round(v × 32768): 0.5 → **16384**, 0.25 → **8192**.
Step 2: product: 16384 × 8192 = 134,217,728 (a 32-bit Q30 value); >> 15 gives 4096 = 4096/32768 = **0.125**.
Step 3: -0.5 × 0.5: (-16384 × 16384) >> 15 = -268,435,456 >> 15 = **-8192** = -0.25. Note: the intermediate product needs 32 bits.
(b) Step 1: A fixed array with a head (write) index, a tail (read) index and a count; indices advance modulo the size.
Step 2: After putting 9 bytes into a buffer of size 8: the first 8 succeed and the 9th **fails** (buffer full), so count = 8, head = 0 (wrapped), tail = 0.
Step 3: After 2 gets (the values 10 and 20): tail = 2, count = 6.
Step 4: After 2 more puts: head = 2, count = 8 (full again) (The 8-element run was reproduced on a PC: head = 0, tail = 2, count = 6, then head = 2, count = 8.)
(c) CRC-8 (polynomial 0x07, initial value 0): for each byte, XOR it into the register and shift eight times, XORing 0x07 whenever the bit shifted out was 1.
Step 1: bytes 01 02 03: after 0x01 the register is 0x07; after 0x02 it is 0x1B; after 0x03 it is **0x48**.
Step 2: "123456789": after '1' (0x31) 0x97; '2' 0x72; '3' 0xC0; '4' 0xC2; '5' 0xCB; '6' 0xFD; '7' 0x78; '8' 0xC7; '9' **0xF4**.
So **CRC-8 of "123456789" = 0xF4** and **CRC-8 of 01 02 03 = 0x48**.
(d) The ISR (producer) writes at the head and the main loop (consumer) reads at the tail: each index is changed by only one side, so with single-byte indices no locking is needed and the ISR can run quickly and never blocks; the buffer absorbs bursts of data until the main loop can process them; the full condition is detected so data are not silently overwritten.

---

# Assignment 2: Timers, PWM, Interrupts and the ADC (70 marks)

## Questions

**Q1. Timer calculations (14 marks)** The clock is 16 MHz. (a) For Timer0 (8-bit) with prescaler 64 find the tick period and the overflow period [3]. (b) Find OCR0A for a 1 ms CTC interrupt (prescaler 64) [3]. (c) Find OCR1A for a 1 s interrupt on 16-bit Timer1 with prescalers 256 and 1024 [4]. (d) Find OCR for a 1 kHz interrupt with prescaler 8 [2]. (e) A 32-bit millisecond counter overflows after how long? [2]

**Q2. PWM (12 marks)** (a) Find the 8-bit fast PWM frequency for prescalers 1, 8 and 64 [3]. (b) Find OCR for 25 percent and 75 percent duty (non-inverting, duty = (OCR + 1)/256) and the average output voltage at 5 V [3]. (c) Configure a servo signal: 50 Hz with a 1.5 ms pulse using Timer1 with prescaler 8: give ICR1 and OCR1A [4]. (d) Why must the PWM frequency be higher than the load's response (give an LED and a motor example)? [2]

**Q3. Interrupts (14 marks)** (a) Describe, step by step, what happens from the instant an enabled interrupt is requested until the main program resumes [4]. (b) Compute the interrupt entry latency in ns for AVR (4 cycles at 16 MHz) and Cortex-M (12 cycles at 72 MHz) [2]. (c) A timer ISR runs every 100 μs and takes 20 μs; what fraction of the CPU does it use? [2] (d) List four rules for writing ISRs [4]. (e) Describe priority inversion in an RTOS and its remedy [2]

**Q4. ADC (14 marks)** (a) Find the LSB for a 10-bit ADC with 5 V reference and the code for 1.25 V and 4.0 V [3]. (b) An LM35 (10 mV/°C) is read with the 5 V reference: find the temperature resolution, and the code at 25 °C [3]. (c) Repeat the resolution with a 1.1 V internal reference [2]. (d) The ADC clock must be between 50 and 200 kHz: choose the prescaler for 16 MHz and find the conversion time of 13 ADC cycles [3]. (e) How does oversampling by 16 improve resolution? [3]

**Q5. Debouncing and state machines (16 marks)** (a) Explain switch bounce and the typical duration [2]. (b) The debounce function accepts a change only after 4 consecutive different samples. Give the output for the raw samples 0,1,0,1,1,1,1,1,0,1,0,0,0,0,0 (initial state 0) [6]. (c) Draw the state machine for a push-button long-press detector (short press < 1 s, long press ≥ 1 s) sampled every 10 ms [5]. (d) Write the code for a non-blocking 500 ms LED blink using a millisecond counter, safe against counter wrap [3].

## Solutions and Marking Guide

**Q1.**
(a) Step 1: tick = prescaler/f = 64/16 MHz = **4 μs**.
Step 2: overflow period = 256 × 4 μs = **1.024 ms**.
(b) Step 1: OCR0A = f/(prescaler × f_out) - 1 = 16,000,000/(64 × 1000) - 1 = 250 - 1 = **249**.
Step 2: check: 250 counts × 4 μs = 1 ms (the counter runs from 0 to OCR0A inclusive).
(c) Step 1: prescaler 256: OCR1A = 16,000,000/(256 × 1) - 1 = 62,500 - 1 = **62,499** (fits in 16 bits).
Step 2: prescaler 1024: 16,000,000/1024 - 1 = 15,625 - 1 = **15,624**.
(d) OCR = 16,000,000/(8 × 1000) - 1 = 2000 - 1 = **1999** (needs a 16-bit timer).
(e) Step 1: 2^32 ms = 4.29 × 10^9 ms = 4.29 × 10^6 s.
Step 2: 4.29 × 10^6 s/86,400 = **49.7 days**.
Compare times with unsigned subtraction `(uint32_t)(now - start) >= interval`, which remains correct across the wrap.

**Q2.**
(a) f_PWM = f/(prescaler × 256): prescaler 1: 16 MHz/256 = **62.5 kHz**; 8: 16 MHz/2048 = **7.81 kHz**; 64: 16 MHz/16,384 = **976.6 Hz**.
(b) Step 1: 25 percent: (OCR + 1)/256 = 0.25, so OCR + 1 = 64 and **OCR = 63**.
Step 2: 75 percent: OCR + 1 = 192, **OCR = 191**.
Step 3: average voltage: 0.25 × 5 = **1.25 V** and 0.75 × 5 = **3.75 V** (after a low-pass filter or a slow load).
(c) Step 1: the period of 20 ms: ICR1 = 16 MHz/(8 × 50) - 1 = 40,000 - 1 = **39,999** (TOP in fast PWM mode 14).
Step 2: the timer tick = 8/16 MHz = 0.5 μs; the pulse 1.5 ms = 1.5 ms/0.5 μs = 3000 ticks, so **OCR1A = 2999**.
(d) The PWM should be well above the frequency at which the load can follow the on/off switching, otherwise the load responds to the pulses: an LED needs more than about 100 Hz to avoid visible flicker (use ≥ 1 kHz), a motor winding needs a PWM period much shorter than its electrical time constant L/R (and above the audible range, 20 kHz, to avoid whine); too high a frequency increases switching losses.

**Q3.**
(a) 1. The peripheral sets its interrupt flag. 2. If the interrupt and global interrupt enable are set, the CPU completes the current instruction. 3. The hardware pushes the return address (Cortex-M also pushes R0 to R3, R12, LR, xPSR) and disables further interrupts (AVR clears the I-bit). 4. It reads the vector table entry and jumps to the ISR. 5. The ISR runs (clearing the flag if it is not cleared automatically). 6. `reti` (or the exception return) restores the registers and the interrupt enable; the main program resumes where it stopped.
(b) Step 1: AVR: 4/16 MHz = **250 ns** (plus the jump in the vector table, 2 more cycles).
Step 2: Cortex-M: 12/72 MHz = **167 ns**.
(c) Step 1: fraction = 20 μs/100 μs = **20 percent** of the CPU.
Step 2: acceptable, but nested or additional interrupts must fit in the remaining 80 percent; reduce the work in the ISR.
(d) Keep ISRs short; do not call blocking functions or delays; use `volatile` for shared data and protect multi-byte data; clear or acknowledge the flag; avoid `printf` and dynamic memory; do the heavy processing in the main loop by setting a flag.
(e) A low-priority task holds a mutex needed by a high-priority task; a medium-priority task preempts the low-priority task, so the high-priority task waits for the medium task (**priority inversion**: it caused the Mars Pathfinder resets in 1997). **Priority inheritance** temporarily raises the holder's priority to that of the waiting task.

**Q4.**
(a) Step 1: LSB = V_ref/2^10 = 5/1024 = **4.88 mV**.
Step 2: code = V × 1024/5: 1.25 V gives 1.25 × 204.8 = **256**; 4.0 V gives 4.0 × 204.8 = 819.2, so **819** (rounds down).
(b) Step 1: 1 count = 4.88 mV; the LM35 gives 10 mV/°C, so the resolution is 4.88/10 = **0.49 °C**.
Step 2: at 25 °C the output is 250 mV: code = 0.25 × 1024/5 = 51.2, so **51**.
(c) Step 1: with 1.1 V: LSB = 1.1/1024 = 1.07 mV, so the resolution is 1.07/10 = **0.107 °C** per count.
Step 2: the range is limited to 1.1 V = 110 °C.
(d) Step 1: 16 MHz/128 = **125 kHz** (within 50 to 200 kHz): prescaler **128** (prescaler 64 gives 250 kHz: too fast).
Step 2: 13 ADC cycles take 13/125 kHz = **104 μs** (about 9.6 kSa/s).
(e) Averaging 4^n samples gains n bits of resolution when the noise is random and at least about 1 LSB: 16 samples give **2 extra bits** (12-bit resolution from a 10-bit ADC), at the cost of 16 times the conversion time (sampling rate divided by 4 after decimation).

**Q5.**
(a) A mechanical contact makes and breaks several times when it closes or opens, producing a burst of false edges lasting typically **5 to 10 ms** (up to 20 ms for a poor switch). Without debouncing, one press may register as many.
(b) The state starts at 0 and a change is accepted only after 4 consecutive samples that differ from the current state. Walking through the samples (index: value): 0: 0; 1: 1 (count 1); 2: 0 (equal to the state, so the count resets); 3: 1 (count 1); 4: 1 (2); 5: 1 (3); 6: 1 (4, so the state becomes 1); 7: 1; 8: 0 (count 1); 9: 1 (equal to the state: reset); 10: 0 (1); 11: 0 (2); 12: 0 (3); 13: 0 (4, so the state becomes 0); 14: 0. Output: **0 0 0 0 0 0 1 1 1 1 1 1 1 0 0** (verified by running the function on a PC). The glitches at indices 1, 2, 8 and 9 are filtered out.
(c) States: **IDLE** (button up) → on press → **PRESSED** (start the timer); in PRESSED: on release before 1 s → emit SHORT and return to IDLE; if the button is still down when the elapsed time reaches 100 samples (1 s) → emit LONG, go to **WAIT_RELEASE**; in WAIT_RELEASE: on release → IDLE (no second event). Sampled every 10 ms the thresholds are counts of the sample counter.
(d)
```c
static uint32_t last = 0;
uint32_t now = millis_safe();                 // atomic copy of the 32-bit counter
if ((uint32_t)(now - last) >= 500) {          // unsigned subtraction is wrap-safe
    last += 500;                              // keep the phase without drift
    PORTB ^= (1 << PORTB5);
}
```

---

# Assignment 3: Serial Communication, Low Power and System Design (70 marks)

## Questions

**Q1. UART (16 marks)** (a) Draw the 8N1 frame of the byte 'A' (0x41), state the bit order and the time to transmit it at 9600 baud [4]. (b) Find UBRR for 9600 and 115,200 baud at 16 MHz, the actual baud rates and the percentage errors, including the double-speed mode [6]. (c) What frame error appears if the receiver is set to 7E1 while the transmitter uses 8N1? [2] (d) Compare UART, RS-232 and RS-485 [4]

**Q2. SPI (10 marks)** (a) List the SPI signals and describe a transfer [4]. (b) Find the time to transfer 16 bits at an 8 MHz SCLK [2]. (c) Explain the SPI modes 0 to 3 [2]. (d) How would you connect three slaves to one master? [2]

**Q3. I2C (16 marks)** (a) Describe an I2C write of the value 0x2A to register 0x75 of a device at 7-bit address 0x68, listing the bytes on the bus and the ACKs [5]. (b) Find the pull-up resistor range for 5 V, 100 pF bus capacitance, 3 mA sink current and 1000 ns rise time [4]. (c) Find the time for a transaction of address + register + 2 data bytes at 100 kHz [3]. (d) A 16-bit sensor returns the bytes FF 38 (high first): convert to a signed value [2]. (e) Compare I2C and SPI [2]

**Q4. Power (10 marks)** A battery-powered logger is active for 1 percent of the time drawing 20 mA and sleeps the rest drawing 10 μA. (a) Find the average current and the life of a 1000 mAh battery [4]. (b) How much longer would it last if the active duty cycle is halved? [2] (c) List four low-power techniques [4]

**Q5. System design (18 marks)** Design a battery-powered temperature and humidity logger sending data every minute to a gateway. (a) Choose the MCU class, sensor interfaces and radio, with reasons [6]. (b) Draw a block diagram and give the firmware architecture (tasks, interrupts, sleep) [6]. (c) Identify five hardware and five software reliability measures [6]

## Solutions and Marking Guide

**Q1.**
(a) Step 1: the line idles high. Frame: **start bit 0, then data bits LSB first: 1, 0, 0, 0, 0, 0, 1, 0 (0x41 = 0100 0001, read from bit 0 to bit 7), stop bit 1**: the sequence 0 1 0 0 0 0 0 1 0 1 (10 bit-times).
Step 2: at 9600 baud one bit lasts 1/9600 = 104.2 μs.
Step 3: the byte takes 10 × 104.2 μs = **1.04 ms** (960 bytes/s).
(b) UBRR = f/(16 × baud) - 1.
Step 1: 9600: 16 MHz/(16 × 9600) - 1 = 104.17 - 1 = 103.17 → **103**; actual baud = 16 MHz/(16 × 104) = **9615.4** (error +0.16 percent).
Step 2: 115,200: 16 MHz/(16 × 115,200) - 1 = 7.68 → 8 gives 16 MHz/(16 × 9) = 111,111 baud (error **-3.5 percent**, too large).
Step 3: with U2X (divisor 8): UBRR = f/(8 × baud) - 1 = 17.36 - 1 = 16.36 → **16**: baud = 16 MHz/(8 × 17) = **117,647** (error **+2.1 percent**, acceptable). A crystal such as 18.432 MHz gives exact standard baud rates.
(c) The receiver would sample the parity bit position and a different number of data bits: **framing and parity errors** (garbage); both ends must use identical settings.
(d) Step 1: **UART:** logic-level (0 V/V_cc) point-to-point asynchronous serial.
Step 2: **RS-232:** the same protocol with ±3 to ±15 V levels, single-ended, for cables of a few metres.
Step 3: **RS-485:** differential pair, up to about 1200 m and 10 Mbit/s over short links, multi-drop with up to 32 or more nodes and half-duplex: used in industry (Modbus).

**Q2.**
(a) **SCLK** (clock from the master), **MOSI** (master out, slave in), **MISO** (master in, slave out), **SS/CS** (slave select, active low, one per slave). The master pulls CS low, writes a byte to the data register: the hardware shifts the byte out on MOSI while shifting the slave's byte in on MISO at the same time (full duplex), then raises CS.
(b) 16 bits at 8 MHz = 16/(8 × 10^6) s = **2 μs**.
(c) Mode = (CPOL, CPHA): CPOL is the idle level of the clock (0 low, 1 high), CPHA selects whether data are sampled on the first or the second clock edge. Mode 0: (0,0); mode 1: (0,1); mode 2: (1,0); mode 3: (1,1). The master and the slave must use the same mode.
(d) Share SCLK, MOSI and MISO among the three slaves, and give each its own chip-select line from the master (three GPIO pins); only the selected slave drives MISO. (Alternatively a daisy chain.)

**Q3.**
(a) START, **0xD0** (address 0x68 shifted left by one with the write bit 0), slave ACK, **0x75** (the register address), ACK, **0x2A** (the data), ACK, STOP. SDA changes only while SCL is low (except for the START and STOP conditions); the slave pulls SDA low during the ninth clock to acknowledge each byte.
(b) Step 1: R_p(min) = (V_dd - V_OL)/I_OL = (5 - 0.4)/3 mA = **1.53 kΩ**.
Step 2: R_p(max) = t_r/(0.8473 C_b) = 1000 ns/(0.8473 × 100 pF) = **11.8 kΩ**.
Step 3: choose **4.7 kΩ** (within the range): a good compromise between speed and power.
(c) 4 bytes: the address byte plus register plus 2 data bytes = 4 bytes × 9 bits (8 plus the ACK) = 36 bit-times plus START and STOP ≈ 38 bit-times: at 100 kHz ≈ **0.38 ms** (the 3-byte example: 27 bits = 0.27 ms).
(d) Step 1: 0xFF38 = 65,336 unsigned.
Step 2: as a signed 16-bit value: 65,336 - 65,536 = **-200**. In C: `int16_t v = (int16_t)((hi << 8) | lo);`.
(e) **I2C:** two wires for many devices, addressed, slower (100 kHz to 3.4 MHz), half-duplex, needs pull-ups, built-in ACK; **SPI:** four wires plus one CS per device, faster (tens of MHz), full duplex, no addressing, no ACK, simple hardware.

**Q4.**
(a) Step 1: I_avg = 20 mA × 0.01 + 0.01 mA × 0.99 = 0.2 + 0.0099 = **0.21 mA**.
Step 2: life = capacity/I_avg = 1000 mAh/0.21 mA = **4760 h ≈ 198 days**.
(b) Step 1: with a 0.5 percent duty cycle: I_avg = 20 × 0.005 + 0.01 × 0.995 = 0.1 + 0.00995 = 0.11 mA.
Step 2: life = 1000/0.11 = 9090 h = **379 days**, almost twice as long (the active current dominates).
(c) Use the deepest sleep mode between tasks and wake on a timer or pin interrupt; lower the clock frequency and supply voltage (P ∝ C V² f); switch off unused peripherals and sensors (power gating); avoid busy-wait loops; use DMA and event-driven design; choose efficient regulators (a buck converter instead of an LDO); transmit less often and in bursts.

**Q5.**
(a) **MCU:** a low-power 32-bit Cortex-M0+/M4 or an AVR (for example an STM32L0 or nRF52) with sleep currents of a few μA, an RTC to wake every minute, a 12-bit ADC and I2C/SPI. **Sensor:** a digital I2C temperature/humidity sensor (for example SHT31) with 1 to 2 μA standby. **Radio:** BLE or LoRa (long range, low power) or sub-GHz FSK, depending on distance. Reasons: low sleep current dominates battery life; digital sensors avoid analogue errors; the radio is the biggest consumer so it is used in short bursts.
(b) Step 1: Blocks: **battery → regulator → MCU ↔ sensor (I2C), MCU ↔ radio (SPI), MCU ↔ flash for logging; RTC/watchdog; status LED**.
Step 2: Firmware: initialise; set the RTC alarm to 60 s; sleep; **RTC interrupt wakes the MCU** → power the sensor → measure (I2C) → compute the CRC/packet → turn on the radio → transmit and wait for the ACK → power everything down → sleep.
Step 3: Use an interrupt-driven state machine, no blocking delays beyond the sensor conversion time (put the CPU in idle).
(c) **Hardware:** supply decoupling capacitors at every power pin; brown-out detector; a hardware watchdog; reverse-polarity and ESD protection; fuses or current limits; conformal coating and gaskets for humidity; a stable crystal. **Software:** the software watchdog kicked from the main loop only when the tasks have run; CRC on stored data and radio packets; retries with back-off for the radio; bounds checking and no dynamic allocation; safe defaults and a recovery state after a reset; logging the reset cause; field firmware update with rollback.
