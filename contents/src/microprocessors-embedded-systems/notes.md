# Microprocessors and Embedded Systems: Complete Lecture Notes

An **embedded system** is a computer built into a product to do a specific job: a thermostat, a car engine controller, a pacemaker, a drone, a smart meter. Its design is a balance of cost, power, size, real-time behaviour and reliability. This course uses two popular microcontroller families as running examples: the 8-bit **AVR (ATmega328P**, the chip of the Arduino Uno) and 32-bit **ARM Cortex-M** (STM32, nRF, Raspberry Pi Pico). The ideas (registers, timers, interrupts, serial buses) carry over to every microcontroller. Register names are those of the ATmega328P datasheet; always confirm with the datasheet of your own part.

## Chapter 1. Microprocessors and Microcontrollers

### 1.1 Architecture
- A **microprocessor** is a CPU on a chip; a **microcontroller (MCU)** also integrates memory (flash for the program, SRAM for data, EEPROM for settings) and peripherals (GPIO, timers, ADC, UART, SPI, I2C, PWM) on one chip, with one supply and a clock.
- **Von Neumann** architecture shares one memory for code and data; **Harvard** architecture has separate code and data memories and buses (AVR, many DSPs), allowing simultaneous instruction fetch and data access. ARM Cortex-M uses a modified Harvard arrangement with a unified address space.
- **ATmega328P:** 8-bit RISC AVR core, 32 general registers, 32 KB flash, 2 KB SRAM, 1 KB EEPROM, 23 I/O lines, three timers, 10-bit ADC, UART, SPI, I2C, up to 20 MHz (16 MHz on an Uno). **Cortex-M4 (STM32F4):** 32-bit, up to 180 MHz, 1 MB flash, 192 KB SRAM, an FPU, DMA, a nested vectored interrupt controller (NVIC).
- **Address space:** n address lines address 2^n locations (a 16-bit address reaches 64 KB; 32 bits reach 4 GB). **Memory map:** code (flash) at low addresses, SRAM (0x20000000 on Cortex-M), peripheral registers (0x40000000), and the system registers (0xE0000000) all in one address space (**memory-mapped I/O**).

### 1.2 The CPU and instruction execution
Registers, ALU, program counter, stack pointer, status register (flags: Z zero, C carry, N negative, V overflow). The **fetch-decode-execute** cycle; AVR executes most instructions in 1 clock cycle (so 16 MIPS at 16 MHz), with a two-stage pipeline. Cortex-M3/M4 has a three-stage pipeline and the compact **Thumb-2** instruction set (16- and 32-bit instructions).
- **ARM registers:** R0 to R12 (R0 to R3 pass arguments and the result under the AAPCS procedure-call standard, R4 to R11 are callee-saved), SP (R13, with MSP and PSP stack pointers), LR (R14, the link register), PC (R15), xPSR (flags). Typical instructions: `MOV R0, #5`, `ADD R2, R0, R1`, `LDR R3, [R4, #8]`, `STR R3, [R4]`, `CMP`, `B`, `BL` (branch with link), `BX LR` (return), `PUSH {R4-R6, LR}`, `POP {R4-R6, PC}`.
- **AVR assembly** (reminder): `LDI R16, 0xFF; OUT DDRB, R16; SBI PORTB, 5; CBI PORTB, 5; RJMP loop`. Most embedded code is written in **C**, with assembly only for time-critical sections.

## Chapter 2. Embedded C and Bit Manipulation

### 2.1 Bit operations
With register-wide operations you set, clear, toggle and test individual bits without disturbing the others:
```c
#define BIT(n)            (1u << (n))
#define SET_BIT(reg, n)   ((reg) |=  BIT(n))
#define CLR_BIT(reg, n)   ((reg) &= ~BIT(n))
#define TOG_BIT(reg, n)   ((reg) ^=  BIT(n))
#define TEST_BIT(reg, n)  (((reg) >> (n)) & 1u)
```
Example: start with PORTB = 0b00100100: SET_BIT(PORTB, 0) gives 0b00100101; CLR_BIT(PORTB, 2) gives 0b00100001; TOG_BIT(PORTB, 5) gives 0b00000001. Masks for fields: `reg = (reg & ~MASK) | (value << SHIFT)`. Use fixed-width types (`uint8_t`, `uint16_t`, `uint32_t` from `<stdint.h>`).

### 2.2 Embedded C practices
- **volatile:** tells the compiler a variable can change outside the normal program flow (hardware registers, variables modified in an ISR); without it the compiler may cache the value in a register and an `while (!flag);` loop may never end. **const** data can live in flash; `static` limits scope.
- **Avoid** dynamic memory (malloc), recursion and unbounded loops where possible; fix buffer sizes at compile time; count stack and RAM use; use `enum` and `#define` for constants; document timing assumptions. Follow a coding standard (MISRA C).
- **Atomicity:** an 8-bit MCU reads a 16-bit variable in two steps, so an interrupt between them corrupts the value: disable interrupts briefly or use atomic access when sharing multi-byte data with an ISR.
- **Fixed-point arithmetic:** MCUs without an FPU use integers with an implicit binary point: **Q15** represents a value v as round(v × 32768): 0.5 is 16384 and 0.25 is 8192; the product (16384 × 8192) >> 15 = 4096 represents 0.125.
- **Ring (circular) buffer** for serial data and **state machines** for control logic are the two most reused structures; **CRC and checksums** protect data: CRC-8 with polynomial 0x07 over "123456789" gives 0xF4; a simple 8-bit sum of "HELLO" is 116 (0x74), and its two's complement checksum 140 (0x8C) makes the sum of all bytes zero.

## Chapter 3. General-Purpose I/O (GPIO)

- Each pin is configured as an **input**, **output**, or alternate function. On AVR, each port has three registers: **DDRx** (data direction: 1 = output), **PORTx** (output value; for an input pin, 1 enables the internal pull-up) and **PINx** (reads the pin). Arduino pin 13 is PB5.
```c
DDRB  |= (1 << DDB5);      // PB5 as output (the Uno's LED)
PORTB |= (1 << PORTB5);    // LED on
PORTB &= ~(1 << PORTB5);   // LED off
DDRD  &= ~(1 << DDD2);     // PD2 as input
PORTD |= (1 << PORTD2);    // enable the pull-up
if (!(PIND & (1 << PIND2))) { /* button (to ground) pressed */ }
```
- **Electrical:** a pin can source or sink 20 mA typically (40 mA absolute maximum on an ATmega328P; 200 mA total per package). LED resistor R = (V_supply - V_F)/I_F: (5 - 2)/10 mA = 300 Ω; at 3.3 V with 5 mA: (3.3 - 2)/5 mA = 260 Ω. Drive heavy loads with a transistor or MOSFET and a flyback diode for inductive loads; use level shifters between 5 V and 3.3 V devices.
- **Inputs:** pull-up or pull-down resistors prevent floating inputs; Schmitt-trigger inputs tolerate slow edges. **Switch bounce:** a mechanical contact bounces for about 5 to 10 ms; remove it with an RC filter or in software (sample every 5 to 10 ms and accept a state only after it is stable for several samples, or use a counter-based debounce state machine).
- **Polling versus interrupts**; **open-drain** outputs (I2C) and **tri-state** buses; **multiplexed displays** (7-segment, LED matrices) and **keypad scanning**.

## Chapter 4. Timers and Counters

### 4.1 Timer basics
A timer counts clock pulses (the system clock divided by a **prescaler**). Tick time = prescaler/f_clk. For a 16 MHz clock with a prescaler of 64: tick = 4 μs; an 8-bit timer overflows every 256 × 4 μs = 1.024 ms. Uses: time bases, delays, event counting, input capture (measuring pulse width or frequency), output compare (waveform generation), PWM, watchdog.
- **Compare match (CTC mode):** the timer counts up to OCR and resets, giving an exact period: **OCR = f_clk/(prescaler × f_out) - 1**. A 1 ms tick with prescaler 64: OCR0A = 16,000,000/(64 × 1000) - 1 = **249**. A 1 s interrupt on 16-bit Timer1 with prescaler 256: OCR1A = 16,000,000/256 - 1 = **62,499**; with prescaler 1024: 15,624.
```c
// 1 ms tick on Timer0 (ATmega328P, 16 MHz)
TCCR0A = (1 << WGM01);                 // CTC mode
TCCR0B = (1 << CS01) | (1 << CS00);    // prescaler 64
OCR0A  = 249;                          // 250 counts x 4 us = 1 ms
TIMSK0 = (1 << OCIE0A);                // enable the compare-match interrupt
sei();                                 // global interrupt enable
```
- **Overflow handling:** a free-running 32-bit millisecond counter wraps after 49.7 days; compare times with subtraction (`now - start >= interval`) so that wrap-around is harmless.

### 4.2 PWM
**Pulse-width modulation** switches a pin at a fixed frequency with an adjustable duty cycle to control average power (LED brightness, motor speed, DC-DC converters, DACs after filtering). For 8-bit fast PWM with prescaler 64 at 16 MHz: f_PWM = 16 MHz/(64 × 256) = **976.6 Hz**; with prescaler 8: 7.8 kHz; with no prescaler: 62.5 kHz. Duty cycle = (OCR + 1)/256 (non-inverting): **OCR = 63 gives 25 percent**. Average voltage = duty × V_cc. **Servo** motors need a 50 Hz frame with a 1 to 2 ms pulse (1.5 ms is the centre): Timer1 with prescaler 8 and ICR1 = 16 MHz/(8 × 50) - 1 = **39,999**, OCR1A = 3,000 - 1 = 2,999 for 1.5 ms. Choose f_PWM above the audible range and well above the load's electrical time constant.

### 4.3 Input capture and the watchdog
Capture the timer value on a pin edge to measure a period or pulse: a signal with period 250 μs has a frequency of 4 kHz. The **watchdog timer** resets the MCU if the software fails to "kick" it within the timeout: it recovers from lock-ups. Real-time clocks (RTC) keep time during sleep.

## Chapter 5. Interrupts

### 5.1 Concepts
An interrupt suspends the main program to run an **interrupt service routine (ISR)** in response to an event (a timer match, a pin change, a received byte). Steps: the hardware sets a flag; if enabled (and global interrupts are enabled), the CPU finishes the current instruction, pushes the return address (and on Cortex-M stacks R0 to R3, R12, LR, PC and xPSR automatically), reads the **vector table** entry and jumps to the ISR; the ISR clears the flag (if needed) and returns (`reti`/`BX LR` with a special value), restoring the state.
- **Latency:** AVR takes 4 cycles to enter an ISR (250 ns at 16 MHz) plus the vector jump; Cortex-M takes 12 cycles (167 ns at 72 MHz). Latency also includes the time that other interrupts are disabled and the longest uninterruptible instruction.
- **Priorities and nesting:** the Cortex-M **NVIC** supports many sources with programmable priority levels and preemption; AVR has fixed priorities (the lower vector address wins) and no nesting unless re-enabled in the ISR. **Edge versus level** triggering; **pin-change** and external interrupts; **non-maskable** interrupts.

### 5.2 Writing ISRs and sharing data
```c
volatile uint32_t ms_ticks = 0;
ISR(TIMER0_COMPA_vect) { ms_ticks++; }           // called every 1 ms

uint32_t millis_safe(void) {                      // atomic read of a 32-bit value on an 8-bit CPU
    uint8_t sreg = SREG; cli();
    uint32_t t = ms_ticks;
    SREG = sreg;
    return t;
}
```
Rules: keep ISRs **short and fast** (set a flag or store a byte and return); never call blocking functions, `printf` or `delay` in an ISR; declare shared variables `volatile`; protect multi-byte shared data; do the heavy work in the main loop ("**superloop**" with flags). Missed or merged interrupts occur if the ISR is too slow (events faster than the service time). Use a ring buffer between an interrupt-driven UART receiver and the main program.

### 5.3 Foreground/background and RTOS (introduction)
The super-loop with interrupts is enough for simple products. A **real-time operating system (RTOS)** (FreeRTOS, Zephyr) adds tasks with priorities, a preemptive scheduler, queues, semaphores and mutexes, and timers: needed when several activities have deadlines. Pitfalls: **priority inversion** (a low-priority task holding a mutex blocks a high-priority task; solved by priority inheritance), deadlock, race conditions. **Hard real time** means a missed deadline is a failure; **soft real time** tolerates occasional misses.

## Chapter 6. Analog Interfacing: ADC and DAC

- **ADC:** an N-bit converter maps 0 to V_ref into 2^N codes. The ATmega328P has a 10-bit successive-approximation ADC: **LSB = V_ref/1024 = 4.88 mV** for 5 V; **code = V_in × 1024/V_ref**. A reading of 512 is 2.5 V. An LM35 temperature sensor (10 mV/°C) at 25 °C outputs 250 mV: code ≈ 51 (resolution of about 0.5 °C per count; use the 1.1 V reference to get 0.1 °C per count).
- **Conversion time:** the ADC clock must be 50 to 200 kHz: 16 MHz/128 = 125 kHz, so a 13-cycle conversion takes 104 μs (about 9.6 kSa/s).
```c
ADMUX  = (1 << REFS0) | 0;                                   // AVcc reference, channel 0
ADCSRA = (1 << ADEN) | (1 << ADPS2) | (1 << ADPS1) | (1 << ADPS0);   // enable, /128
ADCSRA |= (1 << ADSC);                                       // start
while (ADCSRA & (1 << ADSC)) ;                               // wait
uint16_t value = ADC;                                        // 0..1023
```
- **Accuracy:** reference stability, noise, source impedance (< 10 kΩ for the AVR), anti-aliasing filter, **oversampling**: averaging 16 samples gives 2 extra bits of resolution (4^n samples for n bits). Sensor conditioning with op-amps (gain, offset, filtering). **DAC:** R-2R ladder or PWM plus a low-pass filter; I2S for audio. **Comparators** and the sample-and-hold circuit.

## Chapter 7. Serial Communication

### 7.1 UART (asynchronous serial)
No clock line; both sides agree on the **baud rate** and frame format. A frame **8N1** has a start bit (0), 8 data bits sent **LSB first**, no parity, and one stop bit (1): the byte 'A' (0x41 = 01000001) is sent as 0, 1,0,0,0,0,0,1,0, 1 (start, bits b0 to b7, stop). A byte takes 10 bit-times: at 9600 baud 1.04 ms (960 bytes/s). Idle is high. RS-232 uses ±12 V levels, RS-485 differential signalling for long distances (multi-drop), USB-serial bridges for PCs.
- **Baud generator:** **UBRR = f_clk/(16 × baud) - 1**: for 9600 baud at 16 MHz, UBRR = 103.17, so use **103**; the actual baud = 16 MHz/(16 × 104) = 9615 (error 0.16 percent, acceptable: keep the error below about 2 percent). For 115,200 baud: UBRR = 7.68 gives 8: actual 111,111 baud (-3.5 percent, too large); with the double-speed bit U2X: UBRR = f/(8 × baud) - 1 = 16.36 gives **16**: 117,647 baud (+2.1 percent): acceptable. A 16 MHz crystal is chosen; a 18.432 MHz crystal gives exact standard baud rates.
```c
UBRR0 = 103;                                       // 9600 baud at 16 MHz
UCSR0B = (1 << TXEN0) | (1 << RXEN0);              // enable the transmitter and receiver
UCSR0C = (1 << UCSZ01) | (1 << UCSZ00);            // 8 data bits, 1 stop, no parity
while (!(UCSR0A & (1 << UDRE0))) ;                 // wait until the data register is empty
UDR0 = 'A';
```
- Receive errors: framing, overrun (data not read in time), parity. Use interrupts and a ring buffer, or DMA, for continuous streams; hardware flow control (RTS/CTS) or software (XON/XOFF).

### 7.2 SPI (synchronous serial)
Four wires: **SCLK, MOSI, MISO, SS/CS** (one chip-select per slave); the master generates the clock; full duplex; no addressing. **Modes 0 to 3** (CPOL, CPHA) define the idle clock level and the sampling edge; both devices must match. Fast (MHz): a 16-bit transfer at 8 MHz takes 2 μs. Used for flash memory, SD cards, displays, ADCs/DACs, radios (nRF24, LoRa) and sensors. Transfers are shift-register exchanges: writing a byte to SPDR starts the clock and the received byte appears simultaneously.

### 7.3 I2C (two-wire)
Two open-drain lines, **SDA** and **SCL**, with pull-up resistors, many devices on one bus with 7-bit addresses (for example 0x68 for an MPU-6050 or DS3231 RTC). A transaction: **START**, address byte (7-bit address and the R/W bit: write = 0), **ACK** from the slave, data bytes each followed by an ACK, **STOP**. Writing to device 0x68, register 0x75: START, 0xD0 (0x68 << 1), ACK, 0x75, ACK, data, ACK, STOP. Standard mode 100 kHz, fast mode 400 kHz. **Pull-up sizing:** R_p(min) = (V_dd - 0.4 V)/3 mA = 1.5 kΩ at 5 V (the sink limit); R_p(max) = t_r/(0.8473 C_b) = 1000 ns/(0.8473 × 100 pF) = 11.8 kΩ for a 100 pF bus in standard mode: choose 4.7 kΩ. Two bytes plus the address take about 27 bit-times: 0.27 ms at 100 kHz. **Clock stretching**, arbitration for multi-master.
- A 16-bit sensor result arrives as two bytes (high first): combine with `(int16_t)((hi << 8) | lo)`: 0xFF38 is -200. Other buses: **CAN** (automotive and industrial), **1-Wire**, **USB**, **Ethernet**, **BLE** and **LoRa** for wireless.

## Chapter 8. Low-Power and System Design

- **Power budget:** the average current of a duty-cycled device = I_active × d + I_sleep × (1 - d). With 20 mA active for 1 percent of the time and 10 μA asleep, the average is 0.2 + 0.0099 = 0.21 mA: a 1000 mAh battery lasts 4760 hours (200 days). Techniques: sleep modes (idle, power-down) with wake-up by interrupts or the watchdog, lower clock and supply voltage (dynamic power ∝ C V² f), turning off unused peripherals, avoiding busy-wait loops.
- **Design flow:** requirements; choose an MCU (peripherals, memory, power, cost, toolchain); schematic and PCB (decoupling capacitors close to each supply pin, a reset circuit, a clean ground, a crystal); firmware architecture; unit tests on the host; debugging with LEDs, UART logs, a logic analyser, an oscilloscope and a debugger (JTAG/SWD); **bootloader** for field updates; EMC and ESD protection.
- **Reliability:** the watchdog, brown-out detection, CRC of the firmware and data, defensive programming, fail-safe states.

## Chapter 9. Common Mistakes Checklist
1. Forgetting `volatile` for variables shared with an ISR or hardware registers.
2. Reading or writing a multi-byte variable shared with an ISR without protecting it.
3. Confusing 0-based bit positions with masks (1 << n versus n).
4. Wrong prescaler arithmetic (off by one in OCR: the counter counts 0 to OCR, which is OCR + 1 counts).
5. Not clearing an interrupt flag or enabling interrupts globally (sei) when required.
6. Baud rate error above about 2 percent, or mismatched frame settings (8N1 versus 7E1).
7. Missing pull-ups on I2C lines or on input pins; floating inputs.
8. Long-running or blocking code (delays, printf) inside an ISR.
