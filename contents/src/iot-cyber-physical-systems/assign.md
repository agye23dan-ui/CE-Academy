# IoT and Cyber-Physical Systems: Assignments with Worked Solutions

Show formulas, substitute numbers and give units. All numerical answers below were computed in Python (path-loss and LoRa airtime formulas, battery arithmetic, filters, PID simulation). Where a datasheet value is missing state your assumption.

# Assignment 1: Sensing, Conversion, Buses and Power (70 marks)

## Questions

**Q1. ADC resolution (10 marks)** (a) Find the LSB size of a 14-bit ADC with a 2.5 V reference and of a 12-bit ADC with a 3.3 V reference [3]. (b) A sensor outputs 10 mV/°C. What temperature step corresponds to one LSB in each case? [2] (c) What code does the 14-bit converter give for 1.0 V? [2] (d) Give the ideal SNR of the 14-bit ADC [1] and say how averaging 16 samples helps [2].

**Q2. Thermistor measurement (14 marks)** A 10 kΩ NTC (B = 3435 K, R₀ = 10 kΩ at 25 °C) is connected from 3.3 V to the ADC pin, with a fixed 10 kΩ resistor from the ADC pin to ground. The ADC is 12 bits with a 3.3 V reference. (a) Derive R_NTC from the ADC code [3]. (b) Find the temperature for codes 1800 and 2600 [6]. (c) Compute the resistance at 0 °C and 85 °C [3]. (d) Estimate the self-heating power at 25 °C and say why it matters [2].

**Q3. Aliasing (8 marks)** (a) A 900 Hz tone is sampled at 1 kHz. At what frequency does it appear? [2] (b) Repeat for 1300 Hz at 1 kHz and 2500 Hz at 4 kHz [3] (c) How do you prevent aliasing in a vibration sensor whose signal of interest reaches 200 Hz? [3]

**Q4. Battery life (16 marks)** A sensor node uses a 2000 mAh battery. It wakes every 5 minutes for 1.2 s at 25 mA and sleeps at 8 µA. (a) Compute the average current and the ideal battery life in years [4]. (b) Recompute if reporting every 30 minutes [3]. (c) Recompute for the 5-minute node if the active time is halved to 0.6 s [3]. (d) If the sleep current is cut to 2 µA instead, what is the life? Which optimization is better and why? [3] (e) Only 70 percent of the nominal capacity is usable at low temperature; recompute (a) [3].

**Q5. Buses (12 marks)** (a) An I²C sensor read is START, address+W, register address, repeated START, address+R, then 3 data bytes (each byte plus ACK is 9 clocks). How many SCL clocks, and how long at 100 kHz, 400 kHz and 1 MHz? [4] (b) A UART at 115,200 baud 8N1 sends 256 bytes. How long does it take, and how long at 9600 baud? [3] (c) A 24-bit SPI ADC conversion is read with a 1 MHz clock. How long is one read and what maximum sample rate follows? [2] (d) On an I²C bus with 3.3 kΩ pull-ups and 200 pF capacitance estimate the rise time. For a 400 kHz bus with 100 pF the rise-time limit is 300 ns: what is the largest pull-up resistance? [3]

**Q6. Solar supply (10 marks)** The node of Q4(a) runs from 3.3 V and you want to power it from a small solar panel with 4 equivalent full-sun hours per day and 60 percent end-to-end efficiency. (a) Compute the average power and daily energy [4]. (b) Compute the panel power required [4]. (c) Name two further considerations when sizing the storage [2].

## Solutions

**Q1.**
(a) 14-bit, 2.5 V: 2.5/16384 = **0.1526 mV**. 12-bit, 3.3 V: 3.3/4096 = **0.8057 mV**.
(b) 0.1526 mV ÷ 10 mV/°C = **0.0153 °C**; 0.8057 mV ÷ 10 mV/°C = **0.0806 °C**.
(c) 1.0/2.5 × 16384 = **6554** (6553.6, rounded).
(d) Step 1: SNR = 6.02 × 14 + 1.76 = **86.0 dB**.
Step 2: Averaging N independent noisy samples cuts the random noise by √N: 16 samples give a 4× reduction (and about 2 extra bits of effective resolution if the noise is large enough to dither the LSB).
Step 3: It does not remove drift or systematic error.

**Q2.**
(a) V = code × 3.3/4096. With the NTC on the top and 10 kΩ at the bottom, V = 3.3 × 10k/(R + 10k), so R = 10k × (3.3 - V)/V.
(b) Code 1800: V = 1.450 V, R = 10k × 1.850/1.450 = 12.76 kΩ; T = 1/(1/298.15 + ln(1.2756)/3435) = **18.8 °C**. Code 2600: V = 2.095 V, R = 10k × 1.205/2.095 = 5.754 kΩ; T = **40.0 °C**. (A larger code means a higher voltage across the fixed resistor, so a lower NTC resistance and a warmer temperature.)
(c) R(0 °C) = 10k exp[3435(1/273.15 - 1/298.15)] = **28.7 kΩ**; R(85 °C) = **1.45 kΩ**.
(d) At 25 °C the divider current is 3.3/20 kΩ = 0.165 mA, so P = I²R = (0.165 mA)² × 10 kΩ = **272 µW**. This heats the bead above ambient (error depends on its dissipation constant, typically 1 to 2 mW/°C, giving 0.1 to 0.3 °C); reduce it by powering the divider only during measurement or using a higher resistance and a larger series resistor.

**Q3.**
(a) The alias is |f - k f_s|: |900 - 1000| = **100 Hz**.
(b) 1300 Hz at 1 kHz: |1300 - 1000| = **300 Hz**. 2500 Hz at 4 kHz: |2500 - 4000| = **1500 Hz**.
(c) Add an analog anti-alias low-pass filter with a cutoff just above 200 Hz and sample well above 2 × 200 Hz (for example 1 kHz or more); choose the filter so that its attenuation at f_s/2 is below the ADC's noise level, or oversample and filter digitally.

**Q4.**
(a) I_avg = (25 mA × 1.2 s + 0.008 mA × 298.8 s)/300 s = (30 + 2.39)/300 = **0.108 mA**. Life = 2000/0.108 = 18,520 h = 772 days = **2.11 years**.
(b) T = 1800 s: I_avg = (30 + 0.008 × 1798.8)/1800 = (30 + 14.4)/1800 = **0.0247 mA** → life 81,100 h = **9.26 years** (self-discharge now matters).
(c) Active 0.6 s: I_avg = (15 + 0.008 × 299.4)/300 = **0.058 mA** → **3.94 years**.
(d) Sleep 2 µA: I_avg = (30 + 0.002 × 298.8)/300 = 0.102 mA → **2.24 years**, only a 6 percent gain. Halving the active time almost doubled the life (3.94 years), so **shortening the active burst** (faster start-up, fewer retries, lower TX time) is far more valuable because the active charge (30 mA·s per cycle) dominates the sleep charge (2.4 mA·s).
(e) Usable capacity 1400 mAh: 1400/0.108 = **1.48 years**. Always derate for temperature, self-discharge, pulse current and ageing.

**Q5.**
(a) Clocks: address+W 9 + register 9 + address+R 9 + 3 data bytes 27 = **54 clocks** (START conditions add small extra time). At 100 kHz: 540 µs; at 400 kHz: **135 µs**; at 1 MHz: **54 µs**.
(b) 256 × 10 bits = 2560 bits: at 115,200 baud **22.2 ms**; at 9600 baud **267 ms**.
(c) 24 clocks at 1 MHz = **24 µs**; maximum rate 1/24 µs ≈ **41.7 kSa/s** (less if the ADC needs conversion time or CS gaps).
(d) Step 1: t_r ≈ 0.8473 R C = 0.8473 × 3.3 kΩ × 200 pF = **559 ns** (fine for standard mode, 1000 ns, but too slow for fast mode's 300 ns).
Step 2: R_max = 300 ns/(0.8473 × 100 pF) = **3.54 kΩ**.
Step 3: Also check R_min = (V_dd - 0.4 V)/3 mA = 967 Ω for 3.3 V.

**Q6.**
(a) Average current 0.108 mA × 3.3 V = **0.356 mW**; daily energy 0.356 mW × 24 h = **8.55 mWh** (about 2.6 mAh at 3.3 V).
(b) P_panel = 8.55 mWh/(4 h × 0.6) = **3.56 mW** peak panel rating (a tiny panel).
(c) Storage must carry the node through nights and cloudy spells (sized for several days of autonomy); also temperature limits of the battery or supercapacitor, charge-controller quiescent current, cell self-discharge, panel orientation and shading, and the start-up (cold-boot) behavior after full discharge.

# Assignment 2: Wireless Links, Protocols and Data (70 marks)

## Questions

**Q1. Link budget (14 marks)** A sub-GHz sensor transmits at 10 dBm with a 0 dBi antenna, and the gateway has a 3 dBi antenna and sensitivity -120 dBm, at 868 MHz. (a) Compute the maximum allowable path loss [2]. (b) Compute the free-space path loss at 5 km and the received power and margin [4]. (c) Compute the free-space path loss for a 2.4 GHz BLE link over 50 m, and the margin when P_tx = 4 dBm and sensitivity is -97 dBm (0 dBi antennas) [4]. (d) How much extra loss comes from doubling the distance in free space? [1] (e) Why is the free-space result optimistic? [3]

**Q2. Log-distance model (10 marks)** At 868 MHz with the 1 m reference loss of the free-space model, compute the range for a path-loss budget of 140 dB with exponent n = 3, and for 130 dB with n = 2.5 [6]. For 2.4 GHz Wi-Fi with a 90 dB budget find the range for n = 2.5 and n = 3.5 [4].

**Q3. LoRa (14 marks)** Use 125 kHz bandwidth, coding rate 4/5, 8-symbol preamble, explicit header and CRC. (a) Compute the symbol time and raw bit rate for SF10 [3]. (b) A 12-byte payload has 23 payload symbols at SF10 and 28 at SF8. Compute the time on air for both [5]. (c) With a 1 percent duty-cycle limit, how many messages per hour can the SF10 and SF8 nodes send? [3] (d) Compute the energy per message at 40 mA, 3.3 V for each [3].

**Q4. MQTT (12 marks)** A farm sensor publishes to topic `farm/field3/soil` (16 bytes) with a 6-byte payload. (a) Give the size of the PUBLISH packet at QoS 0 and at QoS 1 (fixed header 2 bytes, topic length field 2 bytes, packet identifier 2 bytes at QoS 1) [3]. (b) Which subscriptions receive it: `farm/+/soil`, `farm/#`, `farm/field3`, `+/field3/+`? [4] (c) Describe QoS 0, 1 and 2 and the packets each uses [3]. (d) What is a last-will message and why is it useful? [2]

**Q5. Data budget (10 marks)** 2,000 devices each send a 24-byte payload every 15 minutes using MQTT QoS 0 (topic from Q4). (a) Compute messages per day and per second [3]. (b) Compute the MQTT bytes per message, per day and per year (ignore TCP/TLS overhead) [4]. (c) Per device monthly traffic? [1] (d) Name two ways to reduce the traffic [2].

**Q6. IEEE 802.15.4 and 6LoWPAN (10 marks)** (a) Compute the on-air time of a full 127-byte frame at 250 kbit/s [2]. (b) With a 25-byte MAC header, 40-byte IPv6 header and 8-byte UDP header, how many bytes remain for data? [2] (c) With 6LoWPAN header compression (2-byte IPHC and 4-byte compressed UDP) how many remain? [2] (d) Compute the maximum application throughput at 100 percent channel use with compression, ignoring acknowledgements and backoff [2] (e) Why does 6LoWPAN fragment packets? [2]

## Solutions

**Q1.**
(a) Max PL = P_tx + G_tx + G_rx - sensitivity = 10 + 0 + 3 + 120 = **133 dB**.
(b) Step 1: FSPL = 20 log₁₀(5) + 20 log₁₀(868) + 32.44 = 13.98 + 58.77 + 32.44 = **105.2 dB**.
Step 2: P_rx = 10 + 0 + 3 - 105.2 = **-92.2 dBm**.
Step 3: Margin = -92.2 - (-120) = **27.8 dB**, a comfortable fade margin (10 to 20 dB is typical).
(c) FSPL = 20 log₁₀(0.05) + 20 log₁₀(2400) + 32.44 = -26.02 + 67.60 + 32.44 = **74.0 dB**. P_rx = 4 - 74.0 = -70.0 dBm; margin = -70.0 + 97 = **27.0 dB**.
(d) **6 dB** (20 log₁₀ 2).
(e) Real paths suffer multipath fading, shadowing by buildings and foliage, ground reflection, body or enclosure losses, antenna mismatch and polarization loss, and interference; the path-loss exponent exceeds 2 (typically 2.7 to 4 in cities and indoors), so the real range is much shorter than the free-space range.

**Q2.**
Step 1: PL(1 m, 868 MHz) = 20 log₁₀(0.001) + 58.77 + 32.44 = 31.2 dB. Then d = 10^((PL_budget - 31.2)/(10 n)) m. n = 3, 140 dB: (140 - 31.2)/30 = 3.627 → d = **4.23 km**. n = 2.5, 130 dB: (130 - 31.2)/25 = 3.952 → d = **8.9 km**.
Step 2: For Wi-Fi: PL(1 m, 2.4 GHz) = -60 + 67.6 + 32.44 = 40.0 dB. n = 2.5: (90 - 40.0)/25 = 2.0 → **99.6 m**. n = 3.5: (90 - 40.0)/35 = 1.428 → **26.7 m**.
Step 3: Walls and clutter shrink the range by a factor of nearly four.

**Q3.**
(a) T_s = 2^10/125,000 = **8.192 ms**. Raw bit rate = SF × (4/5)/T_s = 10 × 0.8/8.192 ms = **976.6 bit/s**.
(b) Step 1: T_air = T_s × (8 + 4.25 + N_payload).
Step 2: SF10: 8.192 ms × (12.25 + 23) = **288.8 ms**.
Step 3: SF8 (T_s = 2.048 ms): 2.048 × (12.25 + 28) = **82.4 ms**.
(c) Step 1: 1 percent of 3600 s = 36 s.
Step 2: SF10: 36/0.2888 = **124 messages/h**.
Step 3: SF8: 36/0.0824 = **436 messages/h**.
(d) E = V · I · t: SF10: 3.3 × 0.040 × 0.2888 = **38.1 mJ**; SF8: 3.3 × 0.040 × 0.0824 = **10.9 mJ**. The higher spreading factor costs 3.5 times the energy and airtime but buys about 5 dB of sensitivity (2.5 dB per step), so use the lowest SF that closes the link with margin (adaptive data rate).

**Q4.**
(a) QoS 0: 2 + 2 + 16 + 6 = **26 bytes**. QoS 1: 2 + 2 + 16 + 2 + 6 = **28 bytes** (plus a 4-byte PUBACK back).
(b) `farm/+/soil` **yes** (+ matches field3). `farm/#` **yes** (# matches all remaining levels). `farm/field3` **no** (the topic has three levels). `+/field3/+` **yes**.
(c) **QoS 0**: at most once, one PUBLISH, no acknowledgement. **QoS 1**: at least once, PUBLISH then PUBACK; the sender retransmits until acknowledged so duplicates are possible. **QoS 2**: exactly once, four-packet handshake PUBLISH, PUBREC, PUBREL, PUBCOMP.
(d) The client registers a message at connection time that the broker publishes if the client disconnects unexpectedly (no clean DISCONNECT). It lets other clients learn of failures, for example publishing `offline` on a status topic.

**Q5.**
(a) Messages per day = 2000 × (1440/15) = 2000 × 96 = **192,000**; per second = 2000/900 s = **2.22 msg/s**.
(b) Bytes per message = 2 + 2 + 16 + 24 = **44**. Per day 192,000 × 44 = **8.45 MB**; per year **3.08 GB**.
(c) 96 × 30 × 44 = **126.7 kB/month** per device (MQTT only; TCP, TLS keep-alives and handshakes add more, so cellular plans must include that overhead).
(d) Report less often or only on change (report-by-exception), batch several readings per message, use compact binary formats (CBOR, Protocol Buffers), compress topics, or aggregate at an edge gateway.

**Q6.**
(a) 127 × 8/250,000 = **4.06 ms**.
(b) 127 - 25 - 40 - 8 = **54 bytes**.
(c) 127 - 25 - 2 - 4 = **96 bytes**.
(d) Application throughput ≤ 250 kbit/s × 96/127 = **189 kbit/s** (the 54-byte uncompressed case would give 106 kbit/s); real throughput is far lower because of acknowledgements, backoff, interframe spacing and routing.
(e) IPv6 requires a minimum MTU of 1280 bytes but 802.15.4 frames carry at most 127 bytes; 6LoWPAN fragments packets into several frames and reassembles them at the destination, at the cost of extra headers and the loss of the whole packet if one fragment is lost.

# Assignment 3: Control, Estimation, Edge and Security (70 marks)

## Questions

**Q1. PID calculation (14 marks)** A discrete PID controller has K_p = 3, K_i = 2, K_d = 0.2 and T_s = 0.05 s, with u = K_p e + K_i I + K_d D, I ← I + e T_s, D = (e - e_prev)/T_s (D = 0 on the first step). The plant is y[k+1] = y[k] + 0.2 (u[k] - y[k]); y[0] = 0; the setpoint is 5. (a) Compute e, I, D and u for the first three steps [9]. (b) The actuator saturates at ±12. What does u become at step 0 and step 2, and what problem does saturation cause for the integral term? [3] (c) What does the large derivative value at step 1 tell you about derivative action? [2]

**Q2. Discretization (8 marks)** A plant with time constant τ = 0.5 s is sampled with T_s = 0.1 s. (a) Give the exact (zero-order-hold) discrete pole and the forward-Euler approximation [3]. (b) Repeat for τ = 2 s, T_s = 0.2 s [2]. (c) What is the 2 percent settling time of the τ = 0.5 s system, and the time to reach 63 percent? [3]

**Q3. Filtering (10 marks)** The sensor sequence is 0, 0, 10, 10, 10, 0. (a) Apply an exponential moving average with α = 0.3, starting from y[0] = x[0] [4]. (b) Apply a 4-point moving average to the last three possible windows [3]. (c) A temperature stream 20.1, 20.3, 85.0, 20.2, 20.4 contains a spike. Which filter removes it best and what is its output? [3]

**Q4. Kalman filter (12 marks)** Estimate a constant with initial estimate x = 2, P = 2, process noise Q = 0.05 and measurement noise R = 1. Measurements: 3.0, 2.5, 3.5. For each step compute the gain, estimate and variance [9] and explain the trend in the gain [3].

**Q5. Complementary filter (6 marks)** θ ← α(θ + ω T_s) + (1 - α) θ_acc with α = 0.95, T_s = 0.02 s, θ = 0 initially. Inputs (ω, θ_acc): (10, 0.5), (10, 0.45), (0, 0.6). Compute the three outputs.

**Q6. Networked control and the edge (10 marks)** (a) A loop runs every 20 ms and a cloud round trip adds 100 ms. How many samples old is the data? Why is this a problem? [3] (b) A device streams video at 2 Mbit/s to the cloud; compute the monthly traffic, and compare with sending 20 detection events per hour of 50 bytes [4]. (c) Give three reasons to process at the edge [3].

**Q7. Security and updates (10 marks)** (a) A fleet of 5,000 devices receives a 256 KB firmware image. Compute the total data for a full update and for a delta update that is 10 percent of the size [3]. (b) How long does one device take at an effective 100 kbit/s, and over BLE at 6.4 kbit/s? [3] (c) List four properties a secure OTA process needs [4].

## Solutions

**Q1.**
(a) Step 0: e = 5 - 0 = 5; I = 5 × 0.05 = 0.25; D = 0; u = 3 × 5 + 2 × 0.25 + 0 = **15.5**; y[1] = 0 + 0.2 × 15.5 = 3.10. Step 1: e = 5 - 3.1 = 1.9; I = 0.25 + 1.9 × 0.05 = 0.345; D = (1.9 - 5)/0.05 = **-62**; u = 3 × 1.9 + 2 × 0.345 + 0.2 × (-62) = 5.7 + 0.69 - 12.4 = **-6.01**; y[2] = 3.1 + 0.2 × (-6.01 - 3.1) = 1.278. Step 2: e = 3.722; I = 0.345 + 3.722 × 0.05 = 0.531; D = (3.722 - 1.9)/0.05 = **36.44**; u = 11.166 + 1.062 + 7.288 = **19.52**.
(b) Step 0: 15.5 → clipped to **12**. Step 2: 19.52 → clipped to **12**. When the actuator saturates but the integrator keeps accumulating the error, the integral term winds up and causes large overshoot after the saturation ends: use **anti-windup** (stop integrating or back-calculate when the output is saturated).
(c) The derivative term reacts violently to changes in error (-62 when the error drops quickly), amplifying noise and flipping the output sign. In practice filter the derivative, apply it to the measurement instead of the error (no kick on setpoint changes), and use a small K_d or none.

**Q2.**
(a) Exact pole a = e^(-T_s/τ) = e^-0.2 = **0.8187**; forward Euler a = 1 - T_s/τ = **0.8** (b = 0.2 versus the exact 1 - 0.8187 = 0.1813).
(b) τ = 2, T_s = 0.2: exact **0.9048**, Euler **0.9** (b = 0.0952): the approximation improves when T_s ≪ τ.
(c) 2 percent settling ≈ 4τ = **2.0 s**; 63.2 percent at t = τ = **0.5 s**. Forward Euler becomes unstable if T_s > 2τ, so use T_s well below τ (rule of thumb τ/10 or smaller).

**Q3.**
(a) y = **0, 0, 3.0, 5.1, 6.57, 4.599** (for example y[2] = 0.3 × 10 + 0.7 × 0 = 3.0; y[3] = 0.3 × 10 + 0.7 × 3 = 5.1; y[4] = 3 + 0.7 × 5.1 = 6.57; y[5] = 0 + 0.7 × 6.57 = 4.599). The filter lags (time constant about 1/α = 3.3 samples) and never reaches 10.
(b) The last three windows of the sequence (0, 0, 10, 10, 10, 0) are: (0,0,10,10) = **5.0**, (0,10,10,10) = **7.5**, (10,10,10,0) = **7.5**.
(c) A **median filter** (window 5): sorted 20.1, 20.2, 20.3, 20.4, 85.0 → median **20.3**; the spike is rejected entirely, while a moving average would give 33.2 and smear the spike.

**Q4.**
Step 1: P = 2 + 0.05 = 2.05; K = 2.05/3.05 = **0.672**; x = 2 + 0.672 × (3.0 - 2) = **2.672**; P = (1 - 0.672) × 2.05 = **0.672**. Step 2: P = 0.722; K = 0.722/1.722 = **0.419**; x = 2.672 + 0.419 × (2.5 - 2.672) = **2.600**; P = **0.419**. Step 3: P = 0.469; K = 0.469/1.469 = **0.319**; x = 2.600 + 0.319 × (3.5 - 2.600) = **2.887**; P = **0.319**. The gain falls from 0.67 to 0.32 as the estimate becomes more certain, so each new measurement carries less weight; with Q > 0 it settles at a steady-state value rather than zero, which keeps the filter responsive to slow changes.

**Q5.**
Step 1: 0.95 × (0 + 10 × 0.02) + 0.05 × 0.5 = 0.19 + 0.025 = **0.215**. Step 2: 0.95 × (0.215 + 0.2) + 0.05 × 0.45 = 0.39425 + 0.0225 = **0.4168**. Step 3: 0.95 × (0.4168 + 0) + 0.05 × 0.6 = 0.3959 + 0.03 = **0.4259**.

**Q6.**
(a) 100 ms / 20 ms = **5 samples** old (plus jitter). Delay in the loop reduces phase margin and can cause oscillation or instability; keep the fast loop local and use the cloud only for slow supervision.
(b) 2 Mbit/s × 86,400 s = 21.6 GB per day, so about **648 GB per 30 days**. The events: 20 × 24 × 30 × 50 bytes = **0.72 MB per month**, about a million times less.
(c) Latency (real-time response), bandwidth and cost, privacy (raw data stay local), resilience when the connection fails, energy (radio transmission is costly), and regulatory data-residency rules.

**Q7.**
(a) Full update: 5,000 × 262,144 bytes = **1.31 × 10⁹ bytes (1.31 GB)**. Delta at 10 percent: **0.131 GB**.
(b) Step 1: 256 × 1024 × 8 = 2.10 Mbit.
Step 2: At 100 kbit/s: **21 s**.
Step 3: Over BLE at 6.4 kbit/s: 2.10 Mbit/6400 = 328 s ≈ **5.5 minutes**.
(c) **Authenticity** (the image is signed and the bootloader verifies the signature with a public key held on the device); **integrity** (hash check on download, transport over TLS/DTLS); **rollback and downgrade protection** (monotonic version counter) plus an **A/B slot** or recovery partition so a failed update reverts safely; **resumability and power-fail safety**; staged rollout with monitoring; and protected signing keys (HSM).
