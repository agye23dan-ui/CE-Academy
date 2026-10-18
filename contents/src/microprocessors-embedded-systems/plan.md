# Microprocessors and Embedded Systems: 14-Week Study Plan and Resources

Time budget: 10 to 12 hours per week (3 reading, 6 to 7 hands-on lab and problems, 1 review with the app's quizzes). Embedded systems are learned on hardware. Get an **Arduino Uno** (ATmega328P) or an **STM32 Nucleo / Raspberry Pi Pico** board, a breadboard, LEDs, push-buttons, a potentiometer, an LM35 or similar sensor, jumper wires, a USB-to-serial adapter and, if possible, a cheap logic analyser. Program in bare-metal C using the register names (not only the Arduino library) so that you understand what the hardware does.

## Textbooks
- Elliot Williams, *Make: AVR Programming*. The best register-level introduction to the ATmega.
- Muhammad Ali Mazidi, Sarmad Naimi and Sepehr Naimi, *The AVR Microcontroller and Embedded Systems Using Assembly and C*.
- Joseph Yiu, *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors*.
- Jonathan Valvano, *Embedded Systems: Introduction to ARM Cortex-M Microcontrollers* and *Real-Time Interfacing*.
- Michael Barr and Anthony Massa, *Programming Embedded Systems*; Jack Ganssle, *The Art of Designing Embedded Systems*.
- The ATmega328P datasheet and the Cortex-M reference manual (read the register chapters in detail).

## Free courses and tools
- UT Austin "Embedded Systems: Shape the World" (Valvano, edX); Stanford's embedded systems lectures; MIT 6.115 Microcomputer Project Laboratory.
- Microchip Studio / PlatformIO / avr-gcc + avrdude; STM32CubeIDE; Arduino IDE (for the board support).
- Simulators: Wokwi (browser), SimulIDE, Proteus demo; logic analyser software (sigrok/PulseView).
- FreeRTOS documentation and book.

## Week by week

**Week 1: Microcontroller architecture and the toolchain (Ch 1).** Build and flash a blink program. Do: Assignment 1 Q1.

**Week 2: Bit manipulation and embedded C (Ch 2).** Do: Assignment 1 Q2, Q4, Q5. Write and unit-test the bit macros on your PC.

**Week 3: GPIO, LEDs, switches, debouncing (Ch 3).** Do: Assignment 1 Q3 and Assignment 2 Q5. Build a button-controlled LED sequencer.

**Week 4: Timers and PWM (Ch 4).** Do: Assignment 2 Q1, Q2. Sit the **Class Test** at the end of the week. Dim an LED and drive a servo with PWM.

**Week 5: Interrupts (Ch 5).** Do: Assignment 2 Q3. Build a 1 ms system tick and a software timer.

**Week 6: ADC and sensor interfacing (Ch 6).** Do: Assignment 2 Q4. Read a temperature sensor and print the result.

**Week 7: UART and printing (Ch 7.1).** Do: Assignment 3 Q1. Measure a UART frame on a logic analyser and verify the baud rate. Mock midterm: first half of the Final Exam.

**Week 8: SPI (Ch 7.2).** Do: Assignment 3 Q2. Communicate with an SPI sensor, display or SD card.

**Week 9: I2C (Ch 7.3).** Do: Assignment 3 Q3. Read an I2C sensor and decode the bus traffic.

**Week 10: Low power and sleep (Ch 8).** Do: Assignment 3 Q4. Measure the current in sleep and active modes.

**Week 11: ARM Cortex-M: registers, NVIC, SysTick (Ch 1.2, 5).** Port a program to a Cortex-M board and compare with the AVR.

**Week 12: Introduction to an RTOS (Ch 5.3).** Create two FreeRTOS tasks and a queue; observe priority inversion.

**Week 13: System design project (Ch 8).** Do: Assignment 3 Q5. Design, build and test a small data logger or controller with a block diagram and a test plan.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, with the register summary sheet).

## Milestone checklist
- [ ] I can explain the architecture of an MCU and the roles of its registers and memories.
- [ ] I can manipulate bits and write register-level C for GPIO.
- [ ] I can calculate and configure timers, PWM and compare-match interrupts.
- [ ] I can write correct, short ISRs and share data safely with the main program.
- [ ] I can read an analog sensor with the ADC and convert codes to physical units.
- [ ] I can configure and debug UART, SPI and I2C links, including baud rate and timing calculations.
- [ ] I can estimate the power consumption and battery life of a duty-cycled design.
- [ ] I can design a small embedded system with a block diagram, firmware architecture and reliability measures.
- [ ] I scored at least 70 percent on the Final Exam with the register sheet.

## Study habits that work
1. Calculate the register values by hand from the datasheet before running code, then verify on hardware with a scope or logic analyser.
2. Keep the datasheet open: learn to find the register description, the timing diagram and the electrical limits.
3. Unit-test platform-independent logic (ring buffers, CRC, state machines) on the PC.
4. Debug in layers: power and clock first, then GPIO, then peripherals, then application logic.
5. Always think about what happens when things go wrong: resets, noise, missed interrupts, buffer overflow.
