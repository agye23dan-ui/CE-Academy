# IoT and Cyber-Physical Systems: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

Useful: FSPL(dB) = 20 log₁₀(d_km) + 20 log₁₀(f_MHz) + 32.44; 20 log₁₀ 868 = 58.77; thermistor T = 1/(1/298.15 + ln(R/R₀)/B) - 273.15 (kelvin to °C); 3.3 V reference; LoRa symbol time T_s = 2^SF/BW; e^-0.2 = 0.8187.

## Section A: Multiple Choice (20 marks)

**1.** In the typical IoT layering, the component that aggregates data and may run local decisions near the sensors is the
A) edge device or gateway  B) data warehouse  C) mobile app store  D) certificate authority

**2.** The ideal SNR of an N-bit ADC due to quantization is approximately
A) 20N dB  B) 3N dB  C) N dB  D) 6.02N + 1.76 dB

**3.** Averaging 16 independent noisy ADC samples reduces random noise by a factor of
A) 256  B) 2  C) 16  D) 4

**4.** Sampling at 100 Hz, a 130 Hz tone appears at
A) 230 Hz  B) 30 Hz  C) 70 Hz  D) 130 Hz

**5.** A NTC thermistor's resistance
A) falls with temperature, non-linearly  B) is independent of temperature  C) rises with temperature  D) falls linearly with temperature

**6.** A device sleeping at 5 µA that wakes for a long, high-current radio burst is best improved by
A) cutting the sleep current to 4 µA  B) using a larger case  C) reducing the burst duration or frequency  D) lowering the ADC resolution

**7.** SPI differs from I²C in that SPI
A) uses separate chip-select lines and is full duplex  B) is always slower  C) uses addresses in the data stream  D) has no clock

**8.** Which statement about CAN bus is true?
A) it has no error detection  B) it uses non-destructive arbitration by message ID  C) it is a wireless standard  D) it is a single-wire bus

**9.** In the log-distance path-loss model, a larger exponent n means
A) a longer range  B) less loss  C) loss grows faster with distance  D) a higher frequency

**10.** LoRa's higher spreading factors give
A) longer range, lower data rate and longer airtime  B) better video quality  C) higher data rate and shorter range  D) the same range

**11.** Which radio technology is best suited to a battery sensor that sends a few bytes per hour over several kilometers?
A) Bluetooth classic  B) Ethernet  C) Wi-Fi  D) LoRaWAN or NB-IoT

**12.** In MQTT, a retained message is
A) deleted after delivery  B) always encrypted  C) sent twice  D) stored by the broker and sent to new subscribers of that topic

**13.** The MQTT last-will message is published by the broker when a client
A) publishes at QoS 2  B) disconnects unexpectedly  C) subscribes  D) changes topic

**14.** 6LoWPAN is needed because
A) LoRa has no gateways  B) Wi-Fi is insecure  C) IPv4 has run out of addresses  D) IPv6 requires a larger frame than IEEE 802.15.4 supplies, so headers are compressed and packets fragmented

**15.** For a discretized first-order plant, the forward-Euler approximation is accurate when
A) the plant is unstable  B) T_s is much smaller than τ  C) T_s is much larger than τ  D) the gain is zero

**16.** Derivative kick on a setpoint change can be avoided by
A) applying the derivative term to the measurement instead of the error  B) removing the sensor  C) lowering the voltage  D) increasing K_i

**17.** The Kalman gain tends to decrease over time for a constant state because
A) the sensor degrades  B) the filter is unstable  C) Q increases  D) the estimate becomes more certain, so new measurements get less weight

**18.** A digital twin is
A) a live software model of a physical asset used for monitoring and simulation  B) a pair of identical firmware images  C) a backup battery  D) a duplicate sensor

**19.** An A/B firmware slot scheme mainly provides
A) safe rollback if an update fails  B) double the flash speed  C) lower power consumption  D) encryption of data

**20.** A unique per-device credential is preferred to a shared fleet password because
A) compromising one device does not expose the others  B) it never expires  C) it needs no storage  D) it is shorter

## Section B: Short Questions (40 marks)

**B1. ADC (5 marks)** A 16-bit ADC has a 5 V reference. Compute the LSB size, the ideal quantization SNR and the code for 1.25 V.

**B2. Aliasing (5 marks)** A 8 kHz sinusoid is sampled at 12 kHz. At what frequency does it appear? What is the minimum sampling rate that avoids aliasing, and what additional hardware is needed in practice?

**B3. Battery life (5 marks)** A node with a 3000 mAh battery wakes every 20 minutes for 3 s at 30 mA and sleeps at 4 µA. Compute the average current and the ideal life in years.

**B4. Link budget (5 marks)** A LoRa node transmits at 14 dBm with 2 dBi antennas at both ends, the receiver sensitivity is -125 dBm and the distance is 2 km at 868 MHz. Compute the free-space path loss, received power and margin.

**B5. MQTT packet size (5 marks)** A PUBLISH has topic `grid/sub4/volt` and an 8-byte payload. Give its size at QoS 0 and QoS 1 (fixed header 2 bytes, topic length 2, packet id 2 at QoS 1).

**B6. Discretization (5 marks)** A plant has τ = 0.25 s and the controller runs at T_s = 0.05 s. Give the exact and forward-Euler discrete poles and the 2 percent settling time.

**B7. 6LoWPAN (5 marks)** An IEEE 802.15.4 frame has 127 bytes, a 25-byte MAC header, and with 6LoWPAN compression a 2-byte IP header and 4-byte UDP header. How many data bytes fit, and how long is the full frame on air at 250 kbit/s?

**B8. Secure updates (5 marks)** List five requirements for a secure over-the-air firmware update process.

## Section C: Long Questions (answer any four, 40 marks)

**C1. Thermistor measurement chain (10 marks)** A 10 kΩ NTC (B = 3950 K) is the lower resistor of a divider with a fixed 10 kΩ upper resistor to 3.3 V and is read by a 12-bit, 3.3 V ADC. (a) Find the temperature for ADC codes 1500 and 3000 [4]. (b) At 25 °C the sensitivity is dR/dT = -R B/T². Compute it, then dV/dT of the divider and the number of ADC codes per °C and the temperature per code [4]. (c) How does averaging 16 samples help, and what can it not fix? [2]

**C2. Energy budget and harvesting (10 marks)** A node (3.3 V) wakes every 10 minutes for 2 s at 40 mA and sleeps at 5 µA, with a 2400 mAh battery. (a) Compute the average current, average power and battery life [4]. (b) Halving the active time to 1 s: new average current and life [2]. (c) Size a solar panel for the original node with 5 equivalent full-sun hours and 70 percent efficiency [2]. (d) How much storage gives three days of autonomy? [2]

**C3. Choosing a radio (10 marks)** A node must send a 20-byte reading every 15 minutes from a field 3 km from the nearest gateway, powered by a battery for 5 years. A LoRa link has 125 kHz bandwidth; time on air for 20 bytes is 56.6 ms at SF7 and 1,319 ms at SF12; the radio draws 40 mA at 3.3 V when transmitting. (a) Compute the symbol time and raw bit rate for SF7 and SF12 [3]. (b) With the 1 percent duty-cycle limit, find the maximum messages per hour at each SF [2]. (c) Energy per message at each SF [2]. (d) Compare with Wi-Fi and BLE for this application and recommend a technology [3].

**C4. Control loop with delay (10 marks)** A discrete PI controller (K_p = 1.5, K_i = 1, T_s = 0.1 s, I ← I + e T_s, u = K_p e + K_i I) controls the plant y[k+1] = y[k] + 0.25 (u[k] - y[k]) with y[0] = 0 and setpoint 6. (a) Compute e, I, u and y for the first three steps [6]. (b) The fast loop runs every 10 ms; if the controller is moved to the cloud with a 40 ms round trip, how many samples of delay result and why is that harmful? Suggest an architecture [4].

**C5. Estimation and security (10 marks)** (a) A constant is estimated by a scalar Kalman filter with x = 0, P = 1, Q = 0.01, R = 0.5 and measurements 1.0, 1.2, 0.8. Compute gain, estimate and variance for each step [6]. (b) Describe four security controls for a smart-meter fleet and the threat each one addresses [4].

## Answer key and mark scheme

### Section A
1. A 2. D 3. D 4. B 5. A 6. C 7. A 8. B 9. C 10. A 11. D 12. D 13. B 14. D 15. B 16. A 17. D 18. A 19. A 20. A

### Section B

**B1.** LSB = 5/65,536 = **76.3 µV** [2]. SNR = 6.02 × 16 + 1.76 = **98.1 dB** [1]. Code = 1.25/5 × 65,536 = **16,384** [2].

**B2.** The alias is |8000 - 12,000| = **4 kHz** [2]. The minimum rate is above 2 × 8 kHz = **16 kHz** [1]. In practice an analog anti-alias low-pass filter before the ADC (and sampling comfortably above the Nyquist rate) is required [2].

**B3.** I_avg = (30 mA × 3 s + 0.004 mA × 1197 s)/1200 s = (90 + 4.79)/1200 = **0.0790 mA** [3]. Life = 3000/0.0790 = 37,980 h = **4.34 years** [2].

**B4.** FSPL = 20 log₁₀(2) + 58.77 + 32.44 = 6.02 + 58.77 + 32.44 = **97.2 dB** [2]. P_rx = 14 + 2 + 2 - 97.2 = **-79.2 dBm** [2]. Margin = -79.2 + 125 = **45.8 dB** (comfortable, though real propagation is worse than free space) [1].

**B5.** Topic length 14. QoS 0: 2 + 2 + 14 + 8 = **26 bytes** [2]. QoS 1: 2 + 2 + 14 + 2 + 8 = **28 bytes** (and a 4-byte PUBACK returns) [3].

**B6.** Exact a = e^(-0.05/0.25) = e^-0.2 = **0.8187** [2]. Euler a = 1 - 0.2 = **0.8** [1]. Settling (2 percent) ≈ 4τ = **1.0 s** (20 samples) [2].

**B7.** 127 - 25 - 2 - 4 = **96 bytes** [3]. Time = 127 × 8/250,000 = **4.06 ms** [2].

**B8.** Any five of: signed firmware verified by the bootloader (authenticity); integrity check of the download; encrypted transport (TLS/DTLS); version counter with rollback/downgrade protection; A/B or recovery partition so failure reverts; power-fail-safe, resumable installation; staged rollout with monitoring and a kill switch; delta updates to save bandwidth; protection of signing keys (HSM) and an audit log [5].

### Section C

**C1.**
(a) V = code × 3.3/4096; the NTC is the lower resistor, so R = 10k × V/(3.3 - V). Code 1500: V = 1.208 V, R = 5.78 kΩ, T = 1/(1/298.15 + ln(0.5778)/3950) - 273.15 = **37.9 °C**. Code 3000: V = 2.417 V, R = 27.37 kΩ, T = **3.9 °C** [4].
(b) dR/dT = -10,000 × 3950/298.15² = **-444 Ω/°C**. For the divider V = 3.3 R/(10k + R): dV/dR = 3.3 × 10k/(20k)² = 8.25 × 10⁻⁵ V/Ω, so dV/dT = -444 × 8.25 × 10⁻⁵ = **-36.7 mV/°C**. One LSB = 0.806 mV, so there are 36.7/0.806 = **45.5 codes per °C**, i.e. **0.022 °C per code** (resolution is far better than the sensor's accuracy) [4].
(c) Averaging 16 samples reduces random noise by 4 (about 2 bits of extra resolution if noise dithers the LSB). It cannot fix systematic errors: sensor tolerance, B-value error, self-heating, reference drift or non-linearity; those need calibration [2].

**C2.**
(a) I_avg = (40 mA × 2 s + 0.005 mA × 598 s)/600 s = (80 + 2.99)/600 = **0.138 mA**; P = 0.138 × 3.3 = **0.456 mW**; life = 2400/0.138 = 17,350 h = **1.98 years** [4].
(b) Active 1 s: I_avg = (40 + 0.005 × 599)/600 = **0.0717 mA**; life = 2400/0.0717 = **3.82 years** (almost double) [2].
(c) Daily energy = 0.456 mW × 24 h = 10.95 mWh; panel = 10.95/(5 × 0.7) = **3.13 mW** [2].
(d) Three days: 0.138 mA × 72 h = **9.96 mAh** (at 3.3 V; about 33 mWh), with margin for efficiency and temperature, so a 15 to 20 mAh cell or a supercapacitor bank sized for the pulse current [2].

**C3.**
(a) SF7: T_s = 2⁷/125,000 = **1.024 ms**, raw rate = 7 × 0.8/1.024 ms = **5.47 kbit/s**. SF12: T_s = 4096/125,000 = **32.77 ms**, rate = 12 × 0.8/32.77 ms = **293 bit/s** [3].
(b) 36 s/hour: SF7 → 36/0.0566 = **636 msg/h**; SF12 → 36/1.319 = **27 msg/h**. The requirement is 4 msg/h, so both satisfy the duty cycle [2].
(c) SF7: 3.3 × 0.040 × 0.0566 = **7.5 mJ**; SF12: 3.3 × 0.040 × 1.319 = **174 mJ** (23 times more). A 3 km link may need SF9 to SF12 depending on the environment, so test with margin and use adaptive data rate [2].
(d) Wi-Fi: range too short (tens of metres), high power, needs an access point. BLE: range too short for 3 km without a relay. **LoRaWAN** (or NB-IoT if cellular coverage and a subscription are acceptable) meets the range and the 5-year battery target: at 4 messages/hour the transmit energy is only about 30 mJ/hour at SF7 (2.5 µA average) and about 0.7 J/hour at SF12 (59 µA average, still giving about 4.7 years from 2400 mAh by itself), so choose the lowest spreading factor that closes the link with margin, and keep the sleep current in the microamp range [3].

**C4.**
(a) Step 0: e = 6; I = 0.6; u = 1.5 × 6 + 0.6 = **9.6**; y[1] = 0 + 0.25 × 9.6 = **2.4**. Step 1: e = 3.6; I = 0.6 + 0.36 = **0.96**; u = 5.4 + 0.96 = **6.36**; y[2] = 2.4 + 0.25 × (6.36 - 2.4) = **3.39**. Step 2: e = 2.61; I = 0.96 + 0.261 = **1.221**; u = 3.915 + 1.221 = **5.136**; y[3] = 3.39 + 0.25 × (5.136 - 3.39) = **3.8265** [6].
(b) A 40 ms delay is **4 samples** (plus jitter), so the controller acts on stale data and the loop's phase margin shrinks, risking oscillation or instability and poor disturbance rejection. Keep the fast loop (10 ms) on the device or a local gateway and use the cloud only for slow supervisory tasks (setpoints, monitoring, optimization), with a safe local fallback if the connection drops [4].

**C5.**
(a) Step 1: P = 1.01; K = 1.01/1.51 = **0.669**; x = 0.669 × 1.0 = **0.669**; P = 0.331 × 1.01 = **0.334**. Step 2: P = 0.344; K = 0.344/0.844 = **0.408**; x = 0.669 + 0.408 × (1.2 - 0.669) = **0.886**; P = **0.204**. Step 3: P = 0.214; K = 0.214/0.714 = **0.300**; x = 0.886 + 0.300 × (0.8 - 0.886) = **0.860**; P = **0.150** [6].
(b) Examples (about one mark each): per-device keys/certificates in a secure element (device impersonation, fleet-wide compromise); TLS/DTLS or application-layer encryption and authentication (eavesdropping, meter-data tampering, privacy of consumption profiles); secure boot and signed OTA updates (malicious firmware); tamper detection and sealed enclosures (physical tampering to under-report usage); rate limiting and anomaly detection at the head-end (denial of service, abnormal readings); network segmentation and least privilege for back-end systems [4].
