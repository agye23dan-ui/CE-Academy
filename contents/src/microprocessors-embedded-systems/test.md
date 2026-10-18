# Microprocessors and Embedded Systems: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Assume an ATmega328P at 16 MHz unless stated.

## Section A: Multiple choice (20 marks)

**1.** A microcontroller differs from a microprocessor because it
A) has no CPU  B) integrates memory and peripherals on the chip  C) always runs an operating system  D) cannot be programmed in C

**2.** The AVR architecture is
A) von Neumann  B) Harvard  C) neither  D) a vector processor

**3.** The ATmega328P has how much SRAM?
A) 256 bytes  B) 2 KB  C) 32 KB  D) 1 MB

**4.** Setting a bit in DDRB to 1 configures the pin as
A) an input  B) an output  C) a pull-up  D) an analog input

**5.** Writing 1 to PORTD bit 2 when the pin is an input
A) enables the internal pull-up  B) drives the pin low  C) disables the pin  D) does nothing

**6.** The macro `reg |= (1u << n)` does what?
A) clears bit n  B) sets bit n  C) toggles bit n  D) tests bit n

**7.** The keyword volatile tells the compiler that
A) the variable is constant  B) the variable may change outside the normal program flow  C) the variable is stored in flash  D) the variable is unsigned

**8.** With a 16 MHz clock and a prescaler of 64, the timer tick is
A) 62.5 ns  B) 1 μs  C) 4 μs  D) 64 μs

**9.** A 50 percent duty cycle PWM at 5 V has an average value of
A) 0 V  B) 2.5 V  C) 5 V  D) 10 V

**10.** The ISR should be
A) as long as possible  B) short and fast  C) written with delays  D) free of interrupts only

**11.** The idle level of a UART line is
A) low  B) high  C) floating  D) alternating

**12.** A UART start bit is
A) 1  B) 0  C) the parity bit  D) the stop bit

**13.** The UART data bits are sent
A) MSB first  B) LSB first  C) in random order  D) parity first

**14.** An SPI bus has the signals
A) SDA and SCL  B) SCLK, MOSI, MISO, SS  C) TX and RX only  D) CAN_H and CAN_L

**15.** I2C lines need
A) pull-up resistors  B) pull-down resistors  C) a crystal  D) no resistors

**16.** A 10-bit ADC with a 5 V reference has an LSB of about
A) 0.5 mV  B) 4.9 mV  C) 49 mV  D) 0.5 V

**17.** The watchdog timer is used to
A) generate PWM  B) reset the MCU if the software hangs  C) measure temperature  D) debounce switches

**18.** A mechanical switch typically bounces for about
A) 1 ns  B) 5 to 10 ms  C) 1 s  D) 10 s

**19.** Memory-mapped I/O means that
A) peripheral registers share the address space with memory  B) I/O uses separate instructions only  C) memory has no addresses  D) peripherals are in flash

**20.** The best way to reduce average power in a duty-cycled design is to
A) run the CPU at full speed always  B) sleep between tasks and wake on events  C) add more LEDs  D) poll constantly

## Section B: Problems (40 marks)

**B1. (10 marks)** (a) PORTB = 0x5A. Give the value after SET_BIT(PORTB, 2), then CLR_BIT(PORTB, 4), then TOG_BIT(PORTB, 7) [4]. (b) Extract bits 6 to 3 of the final value [3]. (c) Write the C code that enables the pull-up on PD3 (an input) and tests that the button is pressed (pulls the pin low) [3].

**B2. (10 marks)** (a) Timer1 with prescaler 256: find the tick and OCR1A for a 100 ms CTC interrupt [4]. (b) For 8-bit fast PWM with prescaler 8, find the frequency and OCR for a 40 percent duty (duty = (OCR + 1)/256) [4]. (c) How long until a 32-bit millisecond counter wraps? [2]

**B3. (10 marks)** (a) A 12-bit ADC with a 3.3 V reference: find the LSB and the code for 1.65 V [3]. (b) A UART at 19,200 baud with an 8 MHz clock: find UBRR (UBRR = f/(16 × baud) - 1), the actual baud and the error [4]. (c) Find the time to send one byte in 8N1 at 19,200 baud [3].

**B4. (10 marks)** (a) An ISR takes 5 μs and runs every 50 μs: find the CPU load [2]. (b) The I2C address is 0x3C: give the address byte for a write and for a read [3]. (c) Explain why this loop may hang and how to fix it: `uint8_t done = 0; ISR(...) { done = 1; } ... while (!done) ;` [3] (d) Give the average current of a device with 12 mA active for 2 percent of the time and 5 μA asleep otherwise [2].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **B** · 3 **B** · 4 **B** · 5 **A** · 6 **B** · 7 **B** · 8 **C** · 9 **B** · 10 **B** · 11 **B** · 12 **B** · 13 **B** · 14 **B** · 15 **A** · 16 **B** · 17 **B** · 18 **B** · 19 **A** · 20 **B**

Brief reasons: 8. 64/16 MHz = 4 μs. 16. 5 V/1024 = 4.88 mV.

### Section B

**B1.**
(a) Step 1: 0x5A = 0101 1010. SET_BIT(,2) ORs in 0000 0100: 0101 1110 = **0x5E**.
Step 2: CLR_BIT(,4) clears bit 4: 0100 1110 = **0x4E**.
Step 3: TOG_BIT(,7) flips bit 7: 1100 1110 = **0xCE**.
(b) Step 1: 0xCE >> 3 = 1100 1110 >> 3 = 0001 1001.
Step 2: & 0x0F = 0000 1001 = **0x9** (bits 6..3 = 1001).
(c)
```c
DDRD  &= ~(1 << DDD3);                 // input
PORTD |=  (1 << PORTD3);               // enable the pull-up
if (!(PIND & (1 << PIND3))) { /* pressed */ }
```

**B2.**
(a) Step 1: tick = prescaler/f = 256/16 MHz = **16 μs**.
Step 2: OCR1A = 16,000,000/(256 × 10) - 1 = 6250 - 1 = **6249** (6250 counts × 16 μs = 100 ms exactly).
(b) Step 1: f = 16 MHz/(8 × 256) = **7.81 kHz**.
Step 2: (OCR + 1)/256 = 0.40 gives OCR + 1 = 102.4, so **OCR = 101** (duty 102/256 = 39.8 percent) or 102 (103/256 = 40.2 percent).
(c) 2^32 ms = **49.7 days**.

**B3.**
(a) Step 1: LSB = V_ref/2^12 = 3.3/4096 = **0.806 mV**.
Step 2: code for 1.65 V = 1.65/3.3 × 4096 = **2048**.
(b) Step 1: UBRR = 8 × 10^6/(16 × 19,200) - 1 = 26.04 - 1 = 25.04: use **25**.
Step 2: actual baud = 8 MHz/(16 × 26) = **19,231**; error = (19,231 - 19,200)/19,200 = +0.16 percent.
(c) A frame has 10 bits (start, 8 data, stop): 10/19,200 = **0.52 ms**.

**B4.**
(a) 5/50 = **10 percent**.
(b) Step 1: 0x3C << 1 = 0x78: write address byte **0x78**.
Step 2: read address byte = 0x78 | 1 = **0x79**.
(c) The compiler may keep `done` in a register and never re-read it; declare it **`volatile uint8_t done`** so every test reads the memory.
(d) I_avg = 12 mA × 0.02 + 0.005 mA × 0.98 = 0.24 + 0.0049 = **0.245 mA**.
