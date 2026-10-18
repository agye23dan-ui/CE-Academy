# IoT and Cyber-Physical Systems: 14-Week Study Plan and Resources

Time budget: 9 to 12 hours per week (3 reading, 6 to 8 building and measuring, 1 review with the app's quizzes). This is a hardware-plus-software course: buy a microcontroller board with a radio (ESP32 or nRF52), a few sensors, a breadboard and a USB power meter, and build every week.

## Textbooks
- Alasdair Gilchrist, *Industry 4.0* and Perry Lea, *IoT and Edge Computing for Architects* (system-level views).
- Edward Lee and Sanjit Seshia, *Introduction to Embedded Systems: A Cyber-Physical Systems Approach* (free PDF).
- Rajeev Alur, *Principles of Cyber-Physical Systems*.
- Karl Åström and Richard Murray, *Feedback Systems* (free PDF) and Åström and Hägglund on PID control.
- Rob Faludi, *Building Wireless Sensor Networks*; Adam Dunkels' Contiki and Zephyr documentation.
- Roger Light's Mosquitto/MQTT documentation; the MQTT 3.1.1/5.0 and CoAP (RFC 7252) specifications.

## Free courses
- Coursera: Internet of Things Specialization (UC San Diego) and Embedded Systems (UT Austin, edX).
- Berkeley EECS 149 (Cyber-Physical Systems) open materials; Brian Douglas's Control Systems Lectures on YouTube.
- Zephyr and ESP-IDF getting-started guides; Nordic Developer Academy (BLE and LTE-M/NB-IoT).
- The Things Network learning pages (LoRaWAN); TinyML materials from Harvard and Pete Warden.
- Andreas Spiess's YouTube channel for practical sensor, power and radio measurements.

## Tools
A development board (ESP32, nRF52 or STM32 with radio), sensors (temperature, humidity, IMU, light), a multimeter, a logic analyser or oscilloscope, a USB or shunt-based current meter, an MQTT broker (Mosquitto), Node-RED or Grafana for dashboards, and Python for analysis. A LoRa module and a gateway (or a public network) for the wireless weeks.

## Week by week

**Week 1: IoT architecture and requirements.** Layers, use cases, constraints, budgets. Lab: write a requirements sheet for a node and estimate energy, data and cost.

**Week 2: Sensors, ADC and signal conditioning.** Specifications, resolution, noise, thermistor equation, voltage dividers, calibration. Lab: build the thermistor circuit, convert ADC codes to temperature, and compare with a reference.

**Week 3: Sampling theory in practice.** Nyquist, aliasing, anti-alias filters, oversampling, simple digital filters (EMA, moving average, median). Lab: sample a known tone below and above Nyquist and observe aliasing.

**Week 4: Embedded platforms and low-power design.** Sleep modes, wake-up sources, interrupts, RTOS tasks, battery arithmetic. Lab: measure sleep and active currents and compute battery life; cut the active time.

**Week 5: Buses and peripherals.** UART, SPI, I²C, CAN, Modbus, timing and pull-up sizing, CRC. Lab: read an I²C sensor, capture the bus on a logic analyser, check the clock count and timing.

**Week 6: Wireless fundamentals.** Path loss, link budget, fading, Shannon, modulation basics. Lab: measure RSSI against distance and fit a path-loss exponent.

**Week 7: Short-range wireless.** BLE, 802.15.4, Zigbee/Thread, Wi-Fi power modes. Lab: BLE advertising and a GATT service; measure average current.

**Week 8: Long-range wireless.** LoRa/LoRaWAN, NB-IoT/LTE-M, duty cycle, adaptive data rate. Lab: compute airtimes; send LoRa packets at different spreading factors.

**Week 9: Application protocols and data.** MQTT (topics, QoS, retained, last will), CoAP, HTTP, JSON versus CBOR, time-series storage. Lab: build a publish/subscribe pipeline with Mosquitto and a Grafana dashboard.

**Week 10: Edge and cloud.** Gateways, edge processing, TinyML, digital twins, cost and bandwidth estimates. Lab: run a small quantized model on the microcontroller and send only events.

**Week 11: Control in CPS.** Discretization, PID design and tuning, anti-windup, timing and jitter. Lab: control a heater or motor with PID; log step responses and tune.

**Week 12: Estimation and sensor fusion.** Complementary filter, Kalman filter, IMU attitude estimation. Lab: fuse accelerometer and gyro; compare with a Kalman implementation.

**Week 13: Security, updates, reliability and safety.** Secure boot, device identity, OTA, watchdogs, FMEA, functional-safety standards. Lab: implement a signed update check and an A/B rollback test.

**Week 14: Integration and project.** Final project: build a complete node (sensing, low power, wireless, cloud, security, a control or alerting function), present budgets versus measurements and a failure analysis.

## Assessment pattern used in this course
Three assignments (sensing, conversion, buses and power; wireless links, protocols and data; control, estimation, edge and security), a class test, and a three-hour final. Practise by redoing each calculation from the notes with your own datasheet values and then measuring the real device.

## Study tips
- Start every design with the energy budget, link budget and data budget; the numbers choose the architecture.
- Measure, do not guess: a USB power meter and a logic analyser will teach more than datasheets alone.
- Keep time-critical loops local and deterministic; keep cloud interactions asynchronous.
- Build security and updates in from the first prototype: retrofitting them is much harder.
- Log everything during field tests (battery voltage, RSSI, retries, resets) so failures can be explained.
