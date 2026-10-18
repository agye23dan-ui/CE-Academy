# Power Electronics and Energy Systems: 14-Week Study Plan and Resources

Time budget: 9 to 12 hours per week (3 reading or lectures, 6 to 8 simulation, calculation and lab work, 1 review with the app's quizzes). Power electronics is learned by simulating first (SPICE, PLECS or Python) and then measuring on a low-voltage prototype. Work with extra-low voltage (below 50 V) until you have training and supervision for mains-powered circuits.

## Textbooks
- Ned Mohan, Tore Undeland and William Robbins, *Power Electronics: Converters, Applications, and Design*; Daniel Hart, *Power Electronics*.
- Robert Erickson and Dragan Maksimović, *Fundamentals of Power Electronics* (modelling and control of converters).
- Muhammad Rashid, *Power Electronics: Circuits, Devices, and Applications*.
- Hadi Saadat, *Power System Analysis*; Stephen Chapman, *Electric Machinery Fundamentals*; Allen Wood and Bruce Wollenberg for power generation.
- Gilbert Masters, *Renewable and Efficient Electric Power Systems* (PV, wind, storage, economics).
- Abraham Pressman, *Switching Power Supply Design*; Dave Cutler's and TI's application notes for practical design.

## Free courses and resources
- Coursera "Introduction to Power Electronics" (Robert Erickson, University of Colorado Boulder) and the rest of that specialization; MIT OpenCourseWare 6.334 Power Electronics.
- Texas Instruments, Analog Devices and Infineon application notes and reference designs; TI WEBENCH and LTspice for converter design.
- NREL's System Advisor Model (SAM) and PVWatts for solar and wind estimates; HOMER (free version) for microgrids.
- The IEC, IEEE 1547 and UL 1741 summaries for grid interconnection; IEEE Power Electronics Society tutorials.

## Tools
LTspice or ngspice, PLECS or Simulink (Simscape Electrical), Python (NumPy/SciPy) for averaged and switch-level models, a bench supply with current limit, an oscilloscope with differential and current probes, an electronic load, a thermal camera or thermocouples, a multimeter and a power analyser.

## Week by week

**Week 1: Introduction and power semiconductor devices.** Conversion types, efficiency, diodes, SCR, MOSFET, IGBT, SiC and GaN. Lab: measure the I-V curve of a diode and MOSFET R_on.

**Week 2: Losses and thermal design.** Conduction and switching loss, junction temperature, heat sinks, gate drive. Lab: compute losses for a MOSFET and verify the temperature rise with a thermocouple.

**Week 3: Uncontrolled rectifiers.** Half-wave, full-wave, filters, three-phase bridge, ripple, harmonics. Lab: build a bridge rectifier with a filter capacitor; record the input current waveform and compute THD.

**Week 4: Controlled rectifiers and power quality.** Phase control, inversion, power factor, THD, six- and twelve-pulse, active PFC. Lab: simulate a thyristor bridge for α = 0 to 150° and plot V_dc versus α.

**Week 5: DC-DC converters I.** Buck converter, CCM/DCM, ripple formulas, component selection. Lab: simulate the buck design in LTspice and compare ripple with the formulas; build and measure it.

**Week 6: DC-DC converters II.** Boost, buck-boost, SEPIC, isolated topologies (flyback, forward). Lab: boost converter design and efficiency measurement versus load.

**Week 7: Midterm and converter control.** Review. Voltage- and current-mode control, small-signal models, compensation, right-half-plane zero. Lab: measure the loop gain (Bode) of a converter.

**Week 8: Inverters I.** Single-phase bridge, square wave, SPWM, harmonics, filters. Lab: simulate SPWM and compute the harmonic spectrum with an FFT.

**Week 9: Inverters II and grid connection.** Three-phase inverters, SVPWM, grid synchronization (PLL), anti-islanding, LCL filters. Lab: simulate a three-phase inverter feeding an RL load and a grid model.

**Week 10: Electric drives.** DC chopper drives, induction motor V/f and vector control, BLDC/PMSM, regeneration. Lab: simulate V/f control of an induction motor; measure the torque-speed relationship.

**Week 11: Magnetics and passive components.** Transformers, inductor design, capacitors, EMI filters. Lab: measure transformer open-circuit and short-circuit tests; compute efficiency and regulation.

**Week 12: Power systems fundamentals.** Three-phase power, power-factor correction, per-unit system, transmission losses, protection basics. Lab: compute and simulate capacitor-bank correction.

**Week 13: Renewable energy and storage.** PV I-V curves, MPPT, wind power, battery modelling, BMS, microgrids, LCOE. Lab: simulate a PV array with perturb-and-observe MPPT and a battery charge profile.

**Week 14: Integration project and review.** Final project: design, simulate and (where possible) build a converter or an energy system with efficiency and cost analysis. Safety, EMC and standards review; past-paper revision.

## Assessment pattern used in this course
Three assignments (devices, losses and rectifiers; DC-DC converters and inverters; drives, transformers, power systems and energy sources), a class test, and a three-hour final. Practise by reproducing each worked formula in a simulator and comparing the ripple, efficiency and harmonics with the hand calculation.

## Study tips
- Always draw the switching waveforms (inductor current, switch voltage) before using a formula: most errors are mixing up on- and off-intervals.
- Check units and the operating mode (CCM or DCM) before applying a gain formula.
- Estimate losses early: efficiency and thermal limits often decide the topology and frequency.
- Respect energy storage: discharge capacitors, use current-limited supplies and isolation when testing.
- Compare simulation to calculation; if they disagree by more than a few percent, find the missing effect (resistance, dead time, ripple).
