# IoT and Cyber-Physical Systems: Class Test

Duration: 60 minutes. Calculator allowed, no notes. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Useful: FSPL(dB) = 20 log₁₀(d_km) + 20 log₁₀(f_MHz) + 32.44; log₁₀ 2.4 = 0.380 (so 20 log₁₀ 2400 = 67.6); 3.3 V reference, 12-bit ADC unless stated.

## Section A: Multiple choice (20 marks)

**1.** A cyber-physical system is best described as
A) a closed-circuit television network  B) a cloud database  C) a social network  D) computation and networking tightly coupled with a physical process

**2.** The LSB of a 12-bit ADC with a 3.3 V reference is about
A) 8 mV  B) 0.08 mV  C) 0.8 mV  D) 3.3 mV

**3.** To avoid aliasing you should
A) sample as slowly as possible  B) raise the reference voltage  C) use a bigger battery  D) use an analog low-pass filter before the ADC

**4.** A 60 Hz tone sampled at 50 Hz appears at
A) 25 Hz  B) 60 Hz  C) 10 Hz  D) 110 Hz

**5.** In a battery-powered sensor that wakes briefly to transmit, the biggest lever on battery life is usually
A) the colour of the case  B) the sleep current only  C) shortening the active burst and reducing how often it occurs  D) the baud rate of the debug port

**6.** The I²C bus uses
A) one wire only  B) a differential pair with CAN arbitration  C) four wires and no pull-ups  D) two open-drain wires with pull-up resistors

**7.** An 8N1 UART sends each byte as
A) 10 bits  B) 8 bits  C) 9 bits  D) 12 bits

**8.** Doubling the distance in free space adds how much path loss?
A) 6 dB  B) 12 dB  C) 3 dB  D) 20 dB

**9.** LoRa trades data rate for range mainly by
A) changing the voltage  B) increasing the spreading factor  C) using Wi-Fi  D) adding more antennas

**10.** In MQTT the entity that routes messages between publishers and subscribers is the
A) DNS  B) router  C) gateway  D) broker

**11.** MQTT QoS 1 means
A) at least once  B) exactly once  C) never delivered  D) at most once

**12.** The topic filter `home/+/temp` matches
A) home/kitchen/oven/temp  B) house/kitchen/temp  C) home/kitchen/temp  D) home/temp

**13.** CoAP is typically carried over
A) SMTP  B) FTP  C) TCP  D) UDP

**14.** In a PID controller the integral term mainly
A) limits the actuator  B) removes steady-state error  C) filters noise  D) predicts future error

**15.** Integral windup is prevented by
A) a longer cable  B) anti-windup (clamping the integrator when the output saturates)  C) a bigger K_d  D) lower baud rate

**16.** Running a fast control loop through a cloud round trip is usually a bad idea because
A) JSON is slow  B) the cloud is too expensive  C) delay and jitter reduce stability margin  D) cloud servers cannot count

**17.** The complementary filter combines
A) two batteries  B) a gyroscope (good at high frequency) with an accelerometer (good at low frequency)  C) MQTT and CoAP  D) two thermistors

**18.** A median filter is especially good at removing
A) isolated spikes  B) slow drift  C) a constant offset  D) quantization

**19.** Secure boot ensures that
A) the Wi-Fi password is long  B) only firmware with a valid signature is run  C) the device boots faster  D) the battery lasts longer

**20.** The Mirai botnet mainly exploited IoT devices with
A) quantum computers  B) low batteries  C) default or weak credentials  D) faulty ADCs

## Section B: Problems (40 marks)

**B1. Sensing and power (10 marks)** (a) A voltage of 2.5 V is read by a 12-bit, 3.3 V ADC. What code results? [2] (b) A node has a 1500 mAh battery, wakes every 10 minutes for 1 s at 20 mA and sleeps at 10 µA. Find the average current and the ideal life in years [5]. (c) State two reasons the real life will be shorter [3].

**B2. Link budget (10 marks)** A BLE sensor transmits at 0 dBm (0 dBi antennas) to a hub with sensitivity -90 dBm at 2.4 GHz. (a) Compute the free-space path loss at 20 m [3]. (b) Compute the received power and fade margin [3]. (c) The path loss at 40 m is 72.1 dB. How much margin is left and how does that compare with typical required margins? [2] (d) Why can walls make the real range much smaller? [2]

**B3. Data budget and MQTT (10 marks)** 500 devices each publish a 60-byte message every 10 minutes. (a) Find messages per day and per second [3]. (b) Find the data per day in MB [2]. (c) Give the size of a QoS 0 PUBLISH carrying topic `plant/line2/temp` (16 bytes) with a 5-byte payload, and at QoS 1 (fixed header 2, topic length 2, packet id 2 at QoS 1) [3]. (d) Which of QoS 0, 1 or 2 would you choose for a periodic temperature reading and why? [2]

**B4. Filtering and control (10 marks)** (a) Apply an exponential moving average with α = 0.5 to 0, 8, 8, 8 starting from y = 0 [3]. (b) A PID with K_p = 2, K_i = 0.5, K_d = 0 and T_s = 0.1 s sees a constant error e = 4 on the first step (I starts at 0, I ← I + e T_s). Compute the output [3]. (c) The actuator is limited to ±6. What is the applied output and what should happen to the integral? [2] (d) Why is derivative action often filtered? [2]

## Answer key and solutions

### Section A
1. D 2. C 3. D 4. C 5. C 6. D 7. A 8. A 9. B 10. D 11. A 12. C 13. D 14. B 15. B 16. C 17. B 18. A 19. B 20. C

### Section B

**B1.**
(a) Code = 2.5/3.3 × 4096 = **3103** [2].
(b) I_avg = (20 mA × 1 s + 0.010 mA × 599 s)/600 s = (20 + 5.99)/600 = **0.0433 mA** [3]. Life = 1500/0.0433 = 34,630 h = **3.95 years** [2].
(c) Any two: battery self-discharge and capacity loss at low temperature; radio retries and connection set-up taking longer than assumed; the regulator and sensor quiescent currents; pulse-current derating; ageing [3].

**B2.**
(a) FSPL = 20 log₁₀(0.02) + 20 log₁₀(2400) + 32.44 = -33.98 + 67.60 + 32.44 = **66.06 dB** [3].
(b) P_rx = 0 - 66.06 = **-66.1 dBm**; margin = -66.1 - (-90) = **23.9 dB** [3].
(c) Margin = 0 - 72.1 + 90 = **17.9 dB**: acceptable against the usual 10 to 20 dB fade margin but with little room for walls or interference [2].
(d) Real paths have a path-loss exponent above 2 and add wall, body and furniture attenuation plus multipath fading, so the loss grows much faster with distance than in free space [2].

**B3.**
(a) 500 × 144 = **72,000 messages per day**; 500/600 = **0.83 per second** [3].
(b) 72,000 × 60 B = **4.32 MB/day** [2].
(c) QoS 0: 2 + 2 + 16 + 5 = **25 bytes**; QoS 1: 2 + 2 + 16 + 2 + 5 = **27 bytes** [3].
(d) **QoS 0** (or QoS 1 if every reading matters): a periodic reading is replaced by the next one soon, so losing one is tolerable and QoS 0 saves energy and airtime; QoS 2's four-packet handshake is wasteful [2].

**B4.**
(a) y[0] = 0; y[1] = 0.5 × 8 + 0.5 × 0 = **4**; y[2] = 0.5 × 8 + 0.5 × 4 = **6**; y[3] = 0.5 × 8 + 0.5 × 6 = **7** [3].
(b) I = 4 × 0.1 = 0.4; u = 2 × 4 + 0.5 × 0.4 = 8 + 0.2 = **8.2** [3].
(c) The applied output is clipped to **6**; the integrator should stop accumulating (anti-windup) while the actuator is saturated, otherwise it winds up and causes overshoot [2].
(d) Differentiation amplifies high-frequency noise and reacts violently to steps in the error; a low-pass filter on the derivative (and applying it to the measurement) keeps the output usable [2].
