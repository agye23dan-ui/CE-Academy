# IoT and Cyber-Physical Systems: Complete Lecture Notes

Prerequisites: microprocessors and embedded systems, signals and systems, control basics, computer networks. Every number below was computed in Python (path-loss and airtime formulas, battery arithmetic, filters, CRC) so you can reproduce it. Replace the example constants with the values from your real datasheets.

## Chapter 1. What IoT and Cyber-Physical Systems Are

### 1.1 Definitions
A **cyber-physical system (CPS)** tightly couples computation and networking with physical processes: sensors measure the world, software decides, actuators change the world, and the loop closes through physics (a pacemaker, an anti-lock brake, a smart grid). The **Internet of Things (IoT)** is the connection of many such devices to the Internet to collect data and enable remote monitoring and control. IoT emphasizes connectivity and data at scale; CPS emphasizes real-time control and safety. Most real products are both.

### 1.2 Layered architecture
1. **Perception layer**: sensors, actuators, tags.
2. **Device / edge layer**: microcontroller or gateway that reads sensors, filters, makes local decisions.
3. **Network layer**: wired or wireless links and protocols.
4. **Platform layer**: cloud or on-premise broker, device registry, storage, rules.
5. **Application layer**: dashboards, analytics, machine learning, user apps, integration.
Cross-cutting: security, device management (provisioning, updates), and power.

### 1.3 Design constraints that shape everything
Power (battery or harvested), cost (a few dollars per node at volume), size, bandwidth, latency, reliability, security, lifetime (5 to 15 years), regulation (radio duty cycle, safety standards) and maintainability. A good designer starts from the **energy budget** and the **data budget**, then selects the radio, the processor and the protocol.

## Chapter 2. Sensing, Actuation and Signal Conditioning

### 2.1 Sensors and their specifications
Know accuracy, precision (repeatability), resolution, range, sensitivity, linearity, hysteresis, drift, response time and noise. Common devices: thermistor/RTD/thermocouple/IC temperature sensors, humidity (capacitive), pressure (piezoresistive), accelerometer/gyroscope (MEMS), light (photodiode), gas (metal oxide, electrochemical), distance (ultrasonic, time-of-flight), GPS, current (shunt, Hall effect). Actuators: relays, MOSFET drivers, DC/stepper/servo motors, valves, LEDs, buzzers.

### 2.2 Analog-to-digital conversion
An N-bit ADC with reference V_ref has one least-significant bit (LSB) of V_ref/2ᴺ. A 12-bit ADC with 3.3 V gives **0.806 mV/LSB**; a 10-bit ADC with 5 V gives 4.88 mV/LSB; a 10-bit ADC with 1.1 V reference gives 1.074 mV/LSB; a 16-bit ADC with 3.3 V gives 0.050 mV/LSB. The ideal signal-to-quantization-noise ratio is 6.02N + 1.76 dB: 74 dB for 12 bits, 98 dB for 16. Quantization noise is LSB/√12 rms (0.23 mV for the 12-bit, 3.3 V case). Code 2048 corresponds to 1.650 V and code 1000 to 0.806 V; 1.0 V reads as 1241.

**Oversampling and averaging.** Averaging N independent noisy samples reduces random noise by √N (16 samples reduce 1 mV rms noise to 0.25 mV), and oversampling by 4ᵏ with decimation adds about k bits of resolution: 16 samples take a 10-bit conversion to roughly 12 bits (when noise dithers the LSB).

### 2.3 Sampling and aliasing
Sampling at f_s represents frequencies below f_s/2 (Nyquist). A component above f_s/2 folds to |f - k f_s|. A 60 Hz hum sampled at 50 Hz appears at 10 Hz; 130 Hz sampled at 100 Hz appears at 30 Hz; 7 kHz sampled at 10 kHz appears at 3 kHz. Use an analog **anti-aliasing low-pass filter** before the ADC with cutoff below f_s/2 and sample at 2.5 to 10 times the highest frequency of interest. Vibration monitoring of a 400 Hz signal needs f_s above 800 Hz and in practice 2 kHz or more.

### 2.4 Worked example: NTC thermistor with a voltage divider
A 10 kΩ NTC (B = 3950 K) follows R(T) = R₀ exp[B(1/T - 1/T₀)] with T in kelvin and T₀ = 298.15 K. Computed resistances: 0 °C → 33.6 kΩ; 25 °C → 10.0 kΩ; 50 °C → 3.59 kΩ; 100 °C → 0.70 kΩ. Place a fixed 10 kΩ resistor to 3.3 V and the NTC to ground so that V_out = 3.3 · R_NTC/(10 k + R_NTC), read by a 12-bit ADC. Code 2048 gives V = 1.650 V, R = 10 kΩ and T = 25.0 °C. Code 1500 gives 1.208 V, R = 5.78 kΩ, T = **37.9 °C**. Code 3000 gives 2.417 V, R = 27.4 kΩ, T = **3.9 °C**. Inverse: T = 1/(1/T₀ + ln(R/R₀)/B). The sensitivity at 25 °C is dR/dT = -R B/T² = -444 Ω/°C (about -4.4 percent per °C), which in this divider is -36.7 mV/°C or about 45 ADC codes per °C; the response is non-linear, so use the equation (or a lookup table) in software and calibrate against a reference.

### 2.5 Conditioning and actuation basics
Amplify small signals (instrumentation amplifier for bridges), filter noise, level-shift, and isolate noisy loads. Drive inductive loads (relays, motors) through a MOSFET or transistor with a flyback diode. Generate analog-like outputs with PWM. Always debounce mechanical switches (5 to 20 ms in software or an RC filter).

## Chapter 3. Embedded Platforms and Power

### 3.1 Processor choices
Microcontrollers (ARM Cortex-M, ESP32, nRF52, RISC-V) for most nodes; application processors (Cortex-A, Raspberry Pi class) with Linux for gateways and heavier edge computing. Select by ADC/peripherals, radio integration, memory (flash for firmware and an OTA slot, RAM for buffers and the network stack), sleep current and ecosystem. Real-time operating systems (FreeRTOS, Zephyr) provide tasks, queues and timers.

### 3.2 Low-power design
Spend most of the time asleep: average current I_avg = (I_active · t_active + I_sleep · t_sleep)/T. **Worked example.** A node wakes every 10 minutes for 2 s at 40 mA and sleeps at 5 µA: I_avg = (0.040 × 2 + 5×10⁻⁶ × 598)/600 = **0.138 mA**. A 2400 mAh battery lasts 2400/0.138 = 17,350 h = 723 days = **1.98 years**. Waking every 5 minutes doubles the active share: I_avg = 0.272 mA and life drops to **1.0 year**. Sleeping forever at 5 µA would last 55 years, so the **active burst dominates**; shorten it (fast connect, small payloads, lower TX power, batching) before optimizing the sleep current. One transmission burst costs 3.3 V × 40 mA × 2 s = 0.264 J.

More variants: 1000 mAh, 15 mA for 0.5 s every 60 s, sleep 10 µA → 0.135 mA, **0.85 years**; the same node reporting hourly → 0.012 mA, **9.4 years** (battery self-discharge and shelf life then limit it, often to about 10 years). A coin cell (220 mAh) at 20 mA for 0.1 s every 10 s with 2 µA sleep averages 0.20 mA and lasts only 0.12 years (about 45 days); coin cells suit very low duty cycles and low pulse currents.

### 3.3 Energy harvesting
Solar, vibration, thermal and RF sources give microwatts to milliwatts. A node averaging 0.456 mW (the 10-minute example) at 3.3 V needs about 3.1 mW of panel output under a 5-peak-sun-hours day with 70 percent system efficiency (0.456 × 24 / 5 / 0.7). Indoor light harvesting at about 50 µW covers only 11 percent of that load, so it supplements a battery or supports much lower duty cycles. Store energy in a supercapacitor or rechargeable cell with a power-management IC.

## Chapter 4. Wired and Short-Range Buses

- **UART**: asynchronous, 8N1 means 10 bit-times per byte (start, 8 data, stop). At 9600 baud: 960 bytes/s, so 100 bytes take 104 ms; at 115200 baud they take 8.7 ms.
- **SPI**: synchronous, four wires (SCLK, MOSI, MISO, CS), full duplex, fast. A 16-bit transfer at 8 MHz takes 2 µs. Each extra device needs another chip-select.
- **I²C**: two wires (SDA, SCL), open-drain with pull-ups, 7-bit addresses, multiple devices on one bus. A register read of 2 bytes = START, address+W (9 clocks including ACK), register (9), repeated START, address+R (9), two data bytes (18) = 45 clocks: **450 µs at 100 kHz**, 112.5 µs at 400 kHz. The rise time is about 0.8473 · R · C: 4.7 kΩ with 100 pF gives 398 ns (within the 1000 ns limit for standard mode); with 400 pF it is 1.59 µs, too slow, so lower the pull-up to below about 2.95 kΩ or shorten the bus. Do not exceed the sink current (typically 3 mA).
- **CAN**: differential two-wire multi-master bus with arbitration by message ID, used in vehicles and industry; robust against noise. **RS-485/Modbus RTU** is common in factories. **1-Wire** for simple sensors. **USB** and **Ethernet** for gateways.
- **CRC** error detection: CRC-16/CCITT-FALSE (polynomial 0x1021, initial 0xFFFF) of the ASCII string "123456789" is **0x29B1**, the standard check value. Protect every wire or radio frame with a CRC and verify it.

## Chapter 5. Wireless Connectivity

### 5.1 Path loss and link budget
Free-space path loss: FSPL(dB) = 20 log₁₀(d_km) + 20 log₁₀(f_MHz) + 32.44. Examples: 1 km at 868 MHz → **91.2 dB**; 10 km at 868 MHz → 111.2 dB; 100 m at 2.4 GHz → 80.0 dB; 5 km at 433 MHz → 99.1 dB. Doubling distance adds 6 dB; doubling frequency adds 6 dB.

Link budget: P_rx = P_tx + G_tx + G_rx - PL - losses. Link works if P_rx exceeds the receiver sensitivity by a **fade margin** (10 to 20 dB). With P_tx = 14 dBm, antenna gains 2 dBi at each end and sensitivity -137 dBm (LoRa SF12, 125 kHz) the maximum allowable path loss is 14 + 2 + 2 + 137 = **155 dB**. At 1 km in free space the received power would be 14 + 4 - 91.2 = -73.2 dBm.

Real environments are lossier than free space; use the **log-distance model** PL(d) = PL(d₀) + 10 n log₁₀(d/d₀), with exponent n = 2 in free space, 2.7 to 3.5 in suburban or urban areas and 4 or more indoors with walls. Using d₀ = 1 m (PL = 31.2 dB at 868 MHz), allowable loss 145 dB (155 less a 10 dB margin): n = 2 → 489 km (unrealistic, line of sight only); n = 2.7 → **16 km**; n = 3.5 → **1.8 km**. For BLE at 2.4 GHz (1 m loss 40.0 dB), 0 dBm transmit power, -95 dBm sensitivity and 10 dB margin: n = 2 gives 177 m, n = 3 gives **32 m**. Moral: range claims depend on environment, antenna and margin.

**Shannon capacity**: C = B log₂(1 + SNR). A 20 MHz Wi-Fi channel at 30 dB SNR: 199 Mbit/s upper bound. A 125 kHz LoRa channel at SNR = -20 dB (0.01): 1.79 kbit/s: low-rate links can work below the noise floor with spreading gain.

### 5.2 Technology comparison
- **Wi-Fi** (2.4/5 GHz): high rate, high power, existing infrastructure; use for mains-powered devices and camera-like data.
- **Bluetooth Low Energy**: short range (10 to 50 m typical), low power, phone-friendly, mesh option. Advertising once per second at 10 mA for 1 ms averages about 11 µA. A 100 ms connection interval carrying four 20-byte packets gives 6.4 kbit/s.
- **IEEE 802.15.4** (Zigbee, Thread, 6LoWPAN): 250 kbit/s at 2.4 GHz, 127-byte frames (4.06 ms on air), mesh networking, low power. IPv6 over it needs header compression (6LoWPAN): without compression only 127 - 25 (MAC) - 40 (IPv6) - 8 (UDP) = 54 bytes remain for data.
- **LoRa / LoRaWAN** (sub-GHz, 868/915 MHz): long range (kilometers), very low data rate, years of battery life, star topology to gateways. **NB-IoT / LTE-M** (cellular): licensed spectrum, good penetration, subscription cost, power-saving modes (PSM, eDRX).
- **Sub-GHz proprietary, Sigfox, Z-Wave, NFC/RFID** for niches. Choose by range, data rate, power, infrastructure and cost.

### 5.3 LoRa in numbers
The symbol time is T_s = 2^SF / BW. For BW = 125 kHz: SF7 → 1.024 ms and raw bit rate SF·(4/5)/T_s = **5.47 kbit/s**; SF9 → 4.096 ms, 1.76 kbit/s; SF12 → 32.77 ms, **293 bit/s**. A higher spreading factor gains sensitivity (about 2.5 dB per step) at the cost of airtime. The time on air of a 20-byte payload (8-symbol preamble, explicit header, CRC on, coding rate 4/5, low-data-rate optimization for SF11/12) is **56.6 ms** at SF7, **185 ms** at SF9 and **1.32 s** at SF12. With the EU868 1 percent duty-cycle rule a device may transmit 36 s per hour: **636 messages per hour at SF7 but only 27 at SF12**. Energy per message at 40 mA and 3.3 V: 7.5 mJ (SF7) versus 174 mJ (SF12): adaptive data rate (ADR) puts devices near gateways on SF7 to save battery and capacity.

### 5.4 Reliability of wireless links
Interference, multipath fading, collisions (ALOHA-like channel access in LoRaWAN limits network capacity), and duty-cycle rules. Use acknowledgements and retransmission with backoff, forward error correction, channel hopping, and frame sequence numbers.

## Chapter 6. Application Protocols and Data

### 6.1 MQTT
Publish/subscribe over TCP with a central **broker**. Topics are hierarchical (`home/livingroom/temp`); `+` matches one level and `#` the rest. Quality of service: **QoS 0** at most once (1 packet), **QoS 1** at least once (PUBLISH + PUBACK, may duplicate), **QoS 2** exactly once (four-packet handshake). Features: retained messages, last-will-and-testament (the broker announces a client's unexpected disconnect), persistent sessions and keep-alive pings. Overhead is tiny: a PUBLISH with topic `home/temp` (9 bytes) and payload `23.5` (4 bytes) at QoS 0 is 2 (fixed header) + 2 (topic length) + 9 + 4 = **17 bytes** (19 at QoS 1 with the packet identifier, plus a 4-byte PUBACK), whereas a minimal HTTP/1.1 POST carrying the same four bytes is about **52 bytes** before TLS.

### 6.2 CoAP, HTTP and others
**CoAP** is a RESTful protocol over UDP with a 4-byte header, confirmable messages, observe (push notifications) and block-wise transfer: suited to constrained devices. HTTP/REST is universal but heavier. **AMQP** for enterprise queues, **LwM2M** for device management, **OPC UA** for industrial interoperability, **Matter** for smart homes. Payload formats: JSON (readable), CBOR and Protocol Buffers (compact).

### 6.3 Data volume and cost
1,000 devices sending 50 bytes per minute generate 72 MB per day (26 GB per year), only 16.7 messages per second: modest. A single 1080p camera at 2 Mbit/s produces 21.6 GB per day, which is why video is analysed at the edge and only events are sent. Estimate message rates, payload sizes, retention and cloud pricing early.

### 6.4 Time-series data and analytics
Store sensor data in a time-series database, downsample old data, apply alert rules and anomaly detection, and use machine learning for predictive maintenance. Timestamp at the device (synchronized by NTP or GPS) and include sequence numbers to detect loss.

## Chapter 7. Edge, Fog and Cloud

Process locally when latency, bandwidth, privacy or offline operation matter; use the cloud for fleet-wide analytics, storage and model training. **Edge** (on the device or a gateway): filtering, event detection, TinyML inference, control. **Cloud**: aggregation and long-term storage. Example: transmitting only 20 events per hour of 50 bytes (about 24 kB per day) instead of 21.6 GB per day of continuous video. **TinyML**: quantize small neural networks (int8) to run in tens of kilobytes on a microcontroller. A **digital twin** is a live software model of a physical asset used for monitoring, simulation and what-if analysis.

## Chapter 8. Control in Cyber-Physical Systems

### 8.1 Feedback control and discretization
A controller compares the setpoint with the measurement and acts on the error. Software implements it in discrete time with sample period T_s on a timer interrupt. A first-order plant dx/dt = -x + u, sampled with T_s = 0.1 s (zero-order hold) becomes x[k+1] = e^-0.1 x[k] + (1 - e^-0.1) u[k] = 0.9048 x[k] + 0.0952 u[k]; the simple Euler approximation uses 0.9 and 0.1. A first-order system with time constant τ reaches 63.2 percent of the final value after τ, 95 percent after 3τ, and settles to within 2 percent after about 4τ.

### 8.2 The PID controller
u = K_p e + K_i ∫e dt + K_d de/dt. In discrete form: I += e·T_s, D = (e - e_prev)/T_s. **Worked example.** K_p = 2, K_i = 1, K_d = 0.5, T_s = 0.1 s, setpoint 10, a plant y ← y + 0.1(u - y), initial y = 0. Step 0: e = 10, I = 1.0, D = 0 (no previous), u = 2×10 + 1.0 = **21.0**; y becomes 2.1. Step 1: e = 7.9, I = 1.79, D = (7.9 - 10)/0.1 = -21, u = 15.8 + 1.79 - 10.5 = **7.09**. The derivative term reacts to the change in error and damps the response but amplifies noise, so filter it. Practical details: **anti-windup** (clamp the integral when the actuator saturates), derivative on measurement to avoid setpoint kick, output limits, bumpless transfer, and fixed, jitter-free sampling. Tune with Ziegler-Nichols or by hand: raise K_p until it oscillates, add K_d to damp, K_i to remove steady-state error.

### 8.3 Networked control, timing and real time
Network delay and jitter degrade control. If the loop runs every 10 ms and a cloud round trip adds 30 ms, the controller acts on measurements that are three samples old, which can destabilize a fast loop. Keep time-critical loops **local**; use the network for supervision (setpoints, monitoring). Use real-time scheduling with priorities and bounded worst-case execution time, hardware timers and watchdogs. For safety-critical systems use deterministic networks (CAN, TSN, EtherCAT) and formal timing analysis.

## Chapter 9. Estimation and Filtering

### 9.1 Simple filters
- **Moving average** of length 3: for the series 10, 10, 10, 20, 20, 20 the outputs are 10, 13.33, 16.67, 20 (it lags a step by about half the window).
- **Exponential moving average** y[k] = α x[k] + (1 - α) y[k-1]: with α = 0.2 and the same series, y = 10, 10, 10, 12.0, 13.6, 14.88. Small α smooths strongly and lags more. Cheap: one multiply-add and one stored value.
- **Median filter** removes spikes (outliers) without blurring edges.

### 9.2 Sensor fusion: the complementary filter
A gyro gives a smooth angular rate that drifts when integrated; an accelerometer gives a noisy but unbiased angle. Combine: θ = α(θ + ω T_s) + (1 - α) θ_acc with α = 0.98. Starting from θ = 10°, T_s = 0.01 s: with gyro 5°/s and accelerometer angle 10.5° → 10.059°; then (5°/s, 10.6°) → 10.119°; then (-2°/s, 10.4°) → 10.105°. High frequencies come from the gyro, low frequencies from the accelerometer.

### 9.3 The Kalman filter (scalar)
For a constant state with process variance Q and measurement variance R: predict P ← P + Q; gain K = P/(P + R); update x ← x + K(z - x); P ← (1 - K)P. **Worked example.** x₀ = 0, P₀ = 1, Q = 0.01, R = 0.5, measurements 1.0, 1.2, 0.8. Step 1: P = 1.01, K = 0.669, x = **0.669**, P = 0.334. Step 2: P = 0.344, K = 0.408, x = **0.886**, P = 0.204. Step 3: K = 0.300, x = **0.860**, P = 0.150. The gain falls as confidence rises, so the filter trusts the model more and the new measurements less. The multidimensional Kalman filter (and the extended version for non-linear systems) fuses GPS, IMU and odometry in vehicles and robots.

## Chapter 10. Security, Updates and Privacy for IoT

- **Threats**: default passwords (the Mirai botnet), unencrypted traffic, unauthenticated firmware, exposed debug ports, insecure cloud APIs, physical tampering, supply-chain compromise. A compromised device can become a botnet node or a foothold into a network, or cause physical harm.
- **Device identity**: unique per-device keys or certificates provisioned in manufacturing and stored in secure elements, TPMs or the microcontroller's trusted zone; no shared secrets across a fleet.
- **Communication**: TLS or DTLS (MQTT over TLS on port 8883, CoAP over DTLS), authenticated and encrypted at the application layer; for LoRaWAN, the network and application session keys (AES-128).
- **Secure boot and OTA updates**: the bootloader verifies the firmware signature (for example ECDSA or Ed25519) before running it; updates are signed, versioned, with rollback protection and an A/B image slot so a failed update can revert. Update time example: a 512 KB image takes 4.2 s over a 1 Mbit/s Wi-Fi link, 655 s (11 minutes) over a 6.4 kbit/s BLE connection, and 767 s (13 minutes) over LoRa SF7 at its raw rate, and in practice much longer under the duty-cycle limit, so use delta updates and avoid LoRa for large images.
- **Principles**: least privilege, disable unused services, minimal attack surface, secure defaults, logging and anomaly detection, and a vulnerability disclosure process. Privacy: collect the minimum, anonymize, encrypt, and give users control (regulations such as GDPR apply).

## Chapter 11. Reliability, Safety and Standards

- **Reliability**: watchdog timers, brown-out detection, error-correcting memory, redundancy, graceful degradation, self-test. Availability = MTBF/(MTBF + MTTR).
- **Functional safety**: hazard analysis (FMEA, fault trees), safety integrity levels (IEC 61508; ISO 26262 for cars; IEC 62304 for medical software), fail-safe states, independent safety monitors. Separate safety functions from convenience functions.
- **Testing**: hardware-in-the-loop simulation, fault injection, field trials, long-duration soak tests, EMC compliance, radio certification.
- **Standards**: IEEE 802.15.4, Bluetooth SIG, LoRa Alliance, MQTT (OASIS), IETF CoAP, Matter and Thread for homes, OPC UA and Modbus for industry.

## Chapter 12. Design Method and Checklist

1. Write requirements: what is sensed, how often, accuracy, latency, lifetime, environment, cost.
2. Do the budgets: energy (I_avg and battery life), data (messages per day), link (path loss and margin), cost.
3. Choose the sensor and ADC resolution (LSB smaller than the required resolution, after averaging).
4. Choose the radio, protocol and topology; pick the cloud platform and data model.
5. Design security (identity, encryption, secure boot, OTA) from the start.
6. Prototype, measure real current with a power analyser, field-test range, iterate.
7. Plan manufacturing test, provisioning, fleet management and end-of-life.

**Common mistakes.** Ignoring the active burst when estimating battery life; trusting free-space range numbers; sampling without an anti-alias filter; blocking network calls in the control loop; no CRC or sequence numbers; shared default passwords; no OTA path; I²C pull-ups too large for the bus capacitance; floating inputs and missing decoupling capacitors; forgetting duty-cycle regulations; storing secrets in firmware images.
