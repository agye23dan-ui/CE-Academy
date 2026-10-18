# Electromagnetics & Antennas: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. All numerical answers were computed with Python (numpy and scipy, including numerical integration of antenna patterns); use c = 2.998 × 10^8 m/s and eta0 = 376.7 Ω.

# Assignment 1: Plane Waves, Skin Effect and Reflection (Chapter 1)

**Q1. Plane-wave parameters.** (a) The free-space wavelength at 1 MHz, 100 MHz, 1 GHz and 10 GHz [4] (b) For a lossless dielectric with epsilon_r = 4 and mu_r = 1: the velocity, intrinsic impedance and the wavelength at 1 GHz [4] (c) The average power density of a wave with a peak electric field of 10 V/m in free space [2]

**Q2. Skin depth.** For copper (sigma = 5.8 × 10^7 S/m, mu = mu0) find the skin depth at 60 Hz, 1 MHz, 1 GHz and 10 GHz, and the surface resistance at 1 GHz [6]; the skin depth of seawater (sigma = 4 S/m) at 1 MHz and 1 kHz [3]; explain what this means for submarine communication [1]

**Q3. Reflection at a dielectric.** (a) Gamma, tau and the fraction of power reflected for air to a dielectric with epsilon_r = 4 [4] (b) The same for air to glass (n = 1.5) and for air to water (n = 1.33) [4] (c) Explain anti-reflection coatings [2]

**Q4. Brewster and total reflection.** Find the Brewster angle and the critical angle for glass (n = 1.5) and for water (n = 1.33), and explain the use of total internal reflection [10]

**Q5. Field strength from an antenna.** A transmitter with an EIRP of 1 kW is observed at 100 m. Find the power density and the rms electric field [5]; what EIRP produces an rms field of 10 V/m at 10 m? [5]

**Q6. Boundary conditions.** (a) State the boundary conditions for E and H at an interface and at a perfect conductor [5] (b) What is the reflection coefficient of a perfect conductor and what field pattern results? [5]

**Q7. Polarisation.** (a) Define linear, circular and elliptical polarisation [4] (b) Why is circular polarisation used for satellites? [3] (c) What is the loss when a vertical and a horizontal linear antenna are used together? [3]

## Solutions to Assignment 1

**Q1.** (a) lambda = c/f with c = 2.998 × 10^8 m/s:
1 MHz: 2.998 × 10^8/10^6 = **299.8 m**. 100 MHz: 2.998 × 10^8/10^8 = **2.998 m**. 1 GHz: **29.98 cm**. 10 GHz: **2.998 cm**.
(b) Step 1: v = c/sqrt(epsilon_r mu_r) = c/sqrt 4 = **1.5 × 10^8 m/s**.
Step 2: eta = eta0/sqrt(epsilon_r) = 376.7/2 = **188.4 Ω**.
Step 3: lambda = v/f = 1.5 × 10^8/10^9 = **15.0 cm**.
(c) Step 1: S = E0²/(2 eta0) = 10²/(2 × 376.7) = 100/753.4 = **0.133 W/m²**.
Step 2: check: E_rms = 10/sqrt 2 = 7.07 V/m and S = E_rms²/eta0 = 50/376.7 = 0.133 ✓.

**Q2.** delta = 1/sqrt(pi f mu sigma) with mu = 4π × 10^-7 H/m.
Copper (sigma = 5.8 × 10^7 S/m):
60 Hz: pi f mu sigma = π × 60 × 4π × 10^-7 × 5.8 × 10^7 = 13,740, so delta = 1/sqrt 13,740 = **8.53 mm**.
1 MHz: delta = **66.1 μm**. 1 GHz: delta = 66.1 μm/sqrt 1000 = **2.09 μm**. 10 GHz: **0.66 μm** (delta scales as 1/sqrt f).
Surface resistance at 1 GHz: Rs = 1/(sigma delta) = 1/(5.8 × 10^7 × 2.09 × 10^-6) = 1/121.2 = **8.25 mΩ per square**.
Seawater (sigma = 4 S/m): 1 MHz: delta = 1/sqrt(π × 10^6 × 4π × 10^-7 × 4) = 1/sqrt(15.79) = 1/3.974 = **0.25 m**. 1 kHz: 0.25 × sqrt 1000 = **7.96 m**.
Seawater absorbs radio waves strongly (skin depth only a fraction of a metre at 1 MHz), so submerged submarines can be reached only by very low frequencies (tens of Hz to a few kHz), where the skin depth is metres to tens of metres, at tiny data rates.

**Q3.** (a) Step 1: eta2 = 376.7/2 = 188.4 Ω; Gamma = (eta2 - eta1)/(eta2 + eta1) = (188.4 - 376.7)/(188.4 + 376.7) = -188.3/565.1 = **-0.333**.
Step 2: tau = 1 + Gamma = **0.667**.
Step 3: reflected power fraction = Gamma² = **11.1 percent**.
(b) Glass: eta2 = 376.7/1.5 = 251.2 Ω; Gamma = (251.2 - 376.7)/(251.2 + 376.7) = -125.5/627.9 = **-0.2**; Gamma² = **4.0 percent** reflected (96 percent transmitted).
Water: eta2 = 376.7/1.33 = 283.2 Ω; Gamma = (283.2 - 376.7)/(283.2 + 376.7) = **-0.1416**; Gamma² = **2.0 percent**.
(c) A quarter-wave layer of a material with refractive index sqrt(n1 n2) between the two media causes the reflections from its two surfaces to arrive in antiphase and cancel (at the design wavelength): used on lenses, solar cells and radomes.

**Q4.** Brewster angle (parallel polarisation: no reflection): theta_B = arctan(n2/n1).
Step 1: glass: arctan 1.5 = **56.3°**. Water: arctan 1.33 = **53.1°**.
Critical angle (from the dense to the less dense medium): theta_c = arcsin(n2/n1).
Step 2: glass to air: arcsin(1/1.5) = arcsin 0.667 = **41.8°**. Water to air: arcsin(1/1.33) = **48.8°**.
**Total internal reflection** keeps the light inside an optical fibre: the core has a higher index than the cladding, so rays that strike the boundary beyond the critical angle are completely reflected and travel hundreds of kilometres with little loss; also used in prisms and endoscopes.

**Q5.** Step 1: power density S = EIRP/(4π R²) = 1000/(4π × 10⁴) = 1000/125,664 = **7.96 mW/m²**.
Step 2: E_rms = sqrt(S eta0) = sqrt(7.96 × 10⁻³ × 376.7) = sqrt 3.0 = **1.73 V/m**.
For E_rms = 10 V/m at 10 m:
Step 3: S = E²/eta0 = 100/376.7 = 0.2655 W/m².
Step 4: EIRP = S × 4π R² = 0.2655 × 4π × 100 = 0.2655 × 1256.6 = **334 W**.

**Q6.** (a) At an interface between two media: the **tangential E** is continuous, the **tangential H** is continuous (when there is no surface current; a surface current K gives a jump of H equal to K), the **normal D** is continuous (no surface charge; a surface charge rho_s gives a jump equal to rho_s) and the **normal B** is continuous. At a **perfect conductor**: tangential E = 0 and normal B = 0 (the fields inside are zero); the tangential H equals the surface current density and the normal D equals the surface charge density. (b) For a perfect conductor eta2 = 0, so **Gamma = -1**: total reflection with a 180° phase change of E. The incident and reflected waves form a **standing wave**: E = 2 E0 sin(beta z) with nulls at the conductor and every half-wavelength (a node at z = 0, n lambda/2), the basis of cavity resonators and shielded enclosures.

**Q7.** (a) **Linear**: E oscillates along a fixed line (vertical or horizontal). **Circular**: two orthogonal components of equal amplitude with a 90° phase difference: the E vector rotates at constant magnitude (right-hand or left-hand). **Elliptical**: the general case of unequal amplitudes or phase differences other than 0°, 90° or 180°. (b) A satellite signal passes the ionosphere, where **Faraday rotation** rotates the plane of a linearly polarised wave by an unknown angle, and the orientation between the satellite and the ground antenna changes; circular polarisation is insensitive to the rotation so no polarisation mismatch loss occurs (GPS, satellite TV). (c) Cross-polarised linear antennas (vertical against horizontal) ideally receive no signal (**infinite loss**, polarisation efficiency cos^2(90°) = 0); for an angle psi between them the polarisation loss factor is cos^2(psi) (a 45° mismatch loses 3 dB); a linear antenna receiving a circularly polarised wave loses 3 dB.

# Assignment 2: Transmission Lines and Waveguides (Chapters 2 and 3)

**Q1. Line parameters.** (a) A line has L' = 250 nH/m and C' = 100 pF/m: Z0, velocity and the fraction of c [4] (b) The impedance of a coaxial cable with a = 0.45 mm, b = 1.47 mm and polyethylene dielectric (epsilon_r = 2.25) [3] (c) At 1 GHz the wavelength in a line with v = 0.667 c, and the length beyond which it must be treated as a transmission line [3]

**Q2. Reflection and VSWR.** For a 50 Ω line and loads 100 Ω, 25 Ω, 75 Ω and 50 + j50 Ω find |Gamma|, VSWR, return loss and mismatch loss [10]

**Q3. Power.** Ten watts are sent into a 100 Ω load on a 50 Ω line. Find the reflected and delivered powers, the return loss and what VSWR means in terms of the voltage maxima and minima [10]

**Q4. Input impedance.** For Z0 = 50 Ω find Z_in for (a) Z_L = 100 Ω at lambda/4, lambda/8 and lambda/2 [5] (b) a short circuit at lambda/8 and lambda/4 [3] (c) Z0 = 75 Ω, Z_L = 150 Ω at lambda/8 [2]

**Q5. Matching.** (a) Design quarter-wave transformers for 50 Ω to 100 Ω, 75 Ω to 300 Ω and 50 Ω to 200 Ω [4] (b) A load 100 + j50 Ω on a 50 Ω line is matched with a shorted shunt stub: give the two solutions (distance from the load and stub length) [4] (c) Name two broadband matching methods [2]

**Q6. Rectangular waveguide.** For WR-90 (a = 22.86 mm, b = 10.16 mm) compute the cutoff of TE10, TE20 and TE01 and, at 8, 10 and 12 GHz, lambda_g, v_p/c, v_g/c and the TE10 wave impedance [10]

**Q7. Waveguide design.** (a) A guide has a = 2.5 cm: the TE10 cutoff and lambda_g at 8 GHz [4] (b) Why can v_p exceed c? [3] (c) Compare waveguide with coaxial cable [3]

## Solutions to Assignment 2

**Q1.** (a) Step 1: Z0 = sqrt(L'/C') = sqrt(250 × 10⁻⁹/(100 × 10⁻¹²)) = sqrt 2500 = **50 Ω**.
Step 2: v = 1/sqrt(L'C') = 1/sqrt(250 × 10⁻⁹ × 100 × 10⁻¹²) = 1/sqrt(2.5 × 10⁻¹⁷) = **2.0 × 10⁸ m/s = 0.667 c**.
(b) Z0 = (60/sqrt(epsilon_r)) ln(b/a) = (60/1.5) ln(1.47/0.45) = 40 × ln 3.267 = 40 × 1.184 = **47.4 Ω**.
(c) Step 1: lambda = v/f = 0.667 × 3 × 10⁸/10⁹ = **20.0 cm**.
Step 2: the line must be treated as a transmission line when its length exceeds about lambda/10 = **2 cm** (for example a PCB trace of 2 cm at 1 GHz).

**Q2.** Formulas: Gamma = (Z_L - 50)/(Z_L + 50); VSWR = (1 + |Gamma|)/(1 - |Gamma|); RL = -20 log10 |Gamma|; ML = -10 log10(1 - |Gamma|²).
**100 Ω**: Gamma = 50/150 = 1/3; VSWR = (4/3)/(2/3) = **2.00**; RL = 20 log 3 = **9.54 dB**; ML = -10 log(1 - 1/9) = **0.51 dB**.
**25 Ω**: Gamma = -25/75 = -1/3: VSWR **2.00**; RL 9.54 dB; ML 0.51 dB (same magnitude: a load r times or 1/r times Z0 gives the same VSWR).
**75 Ω**: Gamma = 25/125 = 0.2; VSWR = 1.2/0.8 = **1.50**; RL = 20 log 5 = **13.98 dB**; ML = -10 log(1 - 0.04) = **0.18 dB**.
**50 + j50 Ω**: Gamma = j50/(100 + j50) = 0.2 + j0.4; |Gamma| = sqrt(0.04 + 0.16) = **0.447** at 63.4°; VSWR = 1.447/0.553 = **2.62**; RL = **6.99 dB**; ML = -10 log(1 - 0.2) = **0.97 dB**.
Step 1: **100 Ω**: Gamma = 1/3: VSWR **2.00**; RL **9.54 dB**; ML **0.51 dB**.
Step 2: **25 Ω**: Gamma = -1/3: VSWR **2.00**; RL 9.54 dB; ML 0.51 dB (same magnitude: a load r times or 1/r times Z0 gives the same VSWR).
Step 3: **75 Ω**: Gamma = 0.2: VSWR **1.50**; RL **13.98 dB**; ML **0.18 dB**.
Step 4: **50 + j50 Ω**: Gamma = j50/(100 + j50): |Gamma| = **0.447** at 63.4°; VSWR **2.62**; RL **6.99 dB**; ML **0.97 dB**.

**Q3.** Step 1: Gamma = (100 - 50)/(100 + 50) = 1/3.
Step 2: reflected power = 10 × (1/3)² = **1.11 W**; delivered = 10 - 1.11 = **8.89 W** (mismatch loss 10 log(10/8.89) = 0.51 dB).
Step 3: return loss = 20 log10(3) = **9.54 dB**.
Step 4: VSWR = (1 + 1/3)/(1 - 1/3) = **2**: the ratio of the maximum to the minimum voltage on the line is 2 (V_max = V+ (1 + |Gamma|), V_min = V+ (1 - |Gamma|)); the line has voltage maxima every half-wavelength, with minima a quarter-wavelength from them.

**Q4.** Z_in = Z0 (Z_L + j Z0 tan(beta l))/(Z0 + j Z_L tan(beta l)), with beta l = 90° for lambda/4, 45° for lambda/8, 180° for lambda/2.
(a) Z_L = 100 Ω, Z0 = 50 Ω:
lambda/4: tan 90° is infinite, so Z_in = Z0²/Z_L = 2500/100 = **25 Ω**.
lambda/8: tan 45° = 1: Z_in = 50 (100 + j50)/(50 + j100) = 50 (100 + j50)(50 - j100)/(50² + 100²) = 50 (10,000 - j7500)/12,500 = **40 - j30 Ω**.
lambda/2: tan 180° = 0: Z_in = Z_L = **100 Ω** (the line repeats the load every half-wavelength).
(b) Short circuit (Z_L = 0): lambda/8: Z_in = j Z0 tan 45° = **+j50 Ω** (inductive); lambda/4: tan 90° is infinite, so Z_in is **infinite (open circuit)** (a quarter-wave shorted stub is a high impedance, used as an insulator or "metallic support").
(c) Z0 = 75, Z_L = 150, lambda/8: Z_in = 75 (150 + j75)/(75 + j150) = 75 (150 + j75)(75 - j150)/(75² + 150²); the product (150 + j75)(75 - j150) = 11,250 - j22,500 + j5625 + 11,250 = 22,500 - j16,875, so Z_in = 75 (22,500 - j16,875)/28,125 = **60 - j45 Ω**.

**Q5.** (a) Quarter-wave transformer: Z1 = sqrt(Z0 Z_L), each section lambda/4 long at the design frequency:
50 Ω to 100 Ω: sqrt(5000) = **70.7 Ω**. 75 Ω to 300 Ω: sqrt(22,500) = **150 Ω**. 50 Ω to 200 Ω: sqrt(10,000) = **100 Ω**.
(b) Single shunt stub: load 100 + j50 Ω on 50 Ω.
Step 1: z_L = 2 + j1; y_L = 1/(2 + j) = 0.4 - j0.2.
Step 2: moving a distance d toward the generator, y(d) = (y_L + j t)/(1 + j y_L t) with t = tan(2π d/λ). Its real part equals 1 when t = 3 or t = -1.
Step 3: t = 3: **d = 0.1988 lambda**; y = 1 + j1.00. A shorted stub must supply -j1.00: y_stub = -j cot(β l) = -j gives cot(β l) = 1, so β l = 45° and **l = 0.125 lambda**.
Step 4: t = -1: **d = 0.375 lambda**; y = 1 - j1.00. The stub must supply +j1: cot(β l) = -1, so β l = 135° and **l = 0.375 lambda**.
The shorter set (the first) is preferred (less bandwidth narrowing).
(c) **Multi-section (binomial or Chebyshev) transformers**, **tapered lines** (exponential, Klopfenstein), and lumped networks with several elements.

**Q6.** Step 1: cutoff f_c = (c/2) sqrt((m/a)² + (n/b)²): TE10: c/(2a) = 2.998 × 10⁸/(2 × 0.02286) = **6.557 GHz**; TE20: c/a = **13.114 GHz**; TE01: c/(2b) = 2.998 × 10⁸/(2 × 0.01016) = **14.754 GHz**.
Step 2: define r = sqrt(1 - (f_c/f)²) and use lambda_g = lambda/r, v_p = c/r, v_g = c r, Z = eta0/r.
Step 3: **8 GHz**: r = sqrt(1 - 0.6717) = 0.573; lambda = 37.5 mm; lambda_g = 37.5/0.573 = **65.4 mm**; v_p/c = **1.746**; v_g/c = **0.573**; Z = 376.7/0.573 = **657.6 Ω**.
Step 4: **10 GHz**: r = 0.755; lambda_g = 30.0/0.755 = **39.7 mm**; v_p/c **1.324**; v_g/c **0.755**; Z = **499.0 Ω**.
Step 5: **12 GHz**: r = 0.837; lambda_g = 25.0/0.837 = **29.8 mm**; v_p/c **1.194**; v_g/c **0.838**; Z = **449.8 Ω**.
Check: v_p v_g = c² is satisfied (1.746 × 0.573 = 1).

**Q7.** (a) Step 1: f_c = c/(2a) = 2.998 × 10⁸/(2 × 0.025) = **5.996 GHz**.
Step 2: at 8 GHz: lambda = c/f = 3.747 cm.
Step 3: lambda_g = lambda/sqrt(1 - (f_c/f)²) = 3.747/sqrt(1 - (5.996/8)²) = 3.747/sqrt(1 - 0.5617) = 3.747/0.662 = **5.66 cm**.
(b) The phase velocity is the speed of the phase pattern along the guide (the wavefronts' intersection with the wall moves faster than the wave itself); no energy or information travels at v_p. The energy and information move at the **group velocity v_g = c²/v_p < c**, so relativity is not violated.
(c) Waveguide: very low loss, very high power capability, no radiation or interference, but bulky, expensive, with a cutoff (no DC or low frequencies) and a limited single-mode band. Coaxial cable: broadband from DC, flexible and cheap, but higher loss (rising with frequency) and lower power limits; waveguides are used above about 3 to 100 GHz for radar, satellite feeds and high-power applications.

# Assignment 3: Antennas and Wireless Links (Chapters 4 and 5)

**Q1. Half-wave dipole.** (a) The physical length of a half-wave dipole at 100 MHz, 900 MHz and 2.4 GHz [3] (b) Its radiation resistance, directivity (linear and dBi) and half-power beamwidth [3] (c) The gain if the loss resistance is 5 Ω, and the effective aperture at 1 GHz [4]

**Q2. Short dipole.** (a) The radiation resistance of a short dipole of length lambda/10 and lambda/50 [4] (b) The directivity of a Hertzian dipole [2] (c) Why are electrically small antennas inefficient and narrowband? [4]

**Q3. Dish antenna.** (a) A 1 m dish at 10 GHz with 60 percent aperture efficiency: gain (linear and dBi), beamwidth and effective aperture [5] (b) A 2 m dish at 12 GHz with 55 percent efficiency: the gain, HPBW and the far-field distance for the 1 m dish at 10 GHz [5]

**Q4. Friis.** (a) A 2.4 GHz link of 100 m, 20 dBm transmit power, 2.15 dBi antennas at both ends: the received power [4] (b) A geostationary downlink at 4 GHz, R = 36,000 km, P_t = 60 dBm, G_t = 40 dBi, G_r = 35 dBi: the received power [4] (c) A 5.8 GHz link of 100 m, 10 dBm, 3 dBi antennas: the free-space loss and received power [2]

**Q5. Arrays.** (a) The directivity of uniform broadside arrays of 2, 4, 8 and 16 isotropic elements spaced lambda/2 [4] (b) Explain beam steering by phase shifts [3] (c) What are grating lobes? [3]

**Q6. Zones and exposure.** (a) The far-field distance 2 D^2/lambda for the 1 m dish at 10 GHz and for a half-wave dipole [4] (b) The power density and electric field at 100 m for an EIRP of 1 kW [3] (c) The radio horizon for antennas at 30 m and 2 m [3]

**Q7. Link design and EMC.** (a) Compute the free-space loss for 10 km at 900 MHz and the received power for P_t = 30 dBm, G_t = 10 dBi, G_r = 0 dBi [5] (b) List five EMC design practices [5]

## Solutions to Assignment 3

**Q1.** (a) l = lambda/2 = c/(2f): 100 MHz: 2.998 × 10⁸/(2 × 10⁸) = **1.50 m**; 900 MHz: **16.7 cm**; 2.4 GHz: **6.25 cm** (in practice about 5 percent shorter because of end effects).
(b) R_r = **73.1 Ω**; D = **1.641 (2.15 dBi)** (numerical integration of the pattern [cos((π/2) cos θ)/sin θ]²); HPBW = **78.1°**.
(c) Step 1: efficiency eta = R_r/(R_r + R_loss) = 73/(73 + 5) = 0.936.
Step 2: G = eta D = 1.641 × 0.936 = 1.536 = **1.86 dBi**.
Step 3: effective aperture A_e = lambda² D/(4π) at 1 GHz (lambda = 0.2998 m) for the lossless dipole: 0.0899 × 1.641/12.566 = **0.0117 m²** (117 cm²).

**Q2.** (a) R_r = 80π² (l/lambda)² = 789.6 (l/lambda)²:
l = lambda/10: 789.6 × 0.01 = **7.9 Ω**. l = lambda/50: 789.6 × 0.0004 = **0.316 Ω**.
(b) **D = 1.5 (1.76 dBi)**.
(c) The radiation resistance falls with the square of the electrical size while the loss resistance (conductor and matching losses) stays about the same, so the efficiency falls; the reactance of a short antenna is large (capacitive), so the antenna has a high Q and a narrow bandwidth (Chu-Wheeler limit: the bandwidth is limited by the volume of the smallest sphere enclosing the antenna).

**Q3.** (a) Step 1: lambda = c/f = 2.998 × 10⁸/10¹⁰ = 3.0 cm.
Step 2: G = eta_a (π D/lambda)² = 0.6 × (π × 1/0.02998)² = 0.6 × 10,981 = **6589 (38.2 dBi)**.
Step 3: HPBW ≈ 70 lambda/D = 70 × 0.03/1 = **2.1°**.
Step 4: A_e = eta_a π D²/4 = 0.6 × 0.7854 = **0.471 m²** (check: lambda² G/(4π) = 0.0009 × 6589/12.566 = 0.471 m²).
(b) Step 1: lambda = 2.5 cm at 12 GHz; G = 0.55 × (π × 2/0.025)² = 0.55 × 63,165 = **34,790 (45.4 dBi)**.
Step 2: HPBW = 70 × 0.025/2 = **0.87°**.
Step 3: far-field distance of the 1 m dish at 10 GHz: 2D²/lambda = 2/0.02998 = **66.7 m**.

**Q4.** Friis in dB: P_r = P_t + G_t + G_r - FSPL, with FSPL = 20 log10(4π R/lambda).
(a) Step 1: lambda = 2.998 × 10⁸/(2.4 × 10⁹) = 0.1249 m.
Step 2: FSPL = 20 log10(4π × 100/0.1249) = 20 log10(10,060) = **80.0 dB** (equivalently 20 log10(0.1) + 20 log10(2400) + 32.44).
Step 3: P_r = 20 + 2.15 + 2.15 - 80.0 = **-55.7 dBm**.
(b) Step 1: lambda = 0.07495 m at 4 GHz; FSPL = 20 log10(4π × 3.6 × 10⁷/0.07495) = 20 log10(6.04 × 10⁹) = **195.6 dB**.
Step 2: P_r = 60 + 40 + 35 - 195.6 = **-60.6 dBm**.
(c) Step 1: FSPL = 20 log10(0.1) + 20 log10(5800) + 32.44 = -20 + 75.27 + 32.44 = **87.7 dB**.
Step 2: P_r = 10 + 3 + 3 - 87.7 = **-71.7 dBm**.

**Q5.** (a) Uniform broadside arrays with lambda/2 spacing of isotropic elements have D = N (numerical integration): N = 2, 4, 8, 16 give **2, 4, 8, 16** (10 log N = 3.0, 6.0, 9.0, 12.0 dB): doubling the number of elements doubles the directivity (+3 dB) and narrows the beam.
(b) Applying a progressive phase delta between elements moves the direction of the main beam to cos(theta_0) = -delta lambda/(2π d): **electronic steering** without moving parts (phased-array radar, 5G massive MIMO, satellite terminals); adjusting amplitudes controls the side-lobe level (tapering).
(c) For element spacing larger than lambda (or lambda/2 with a large steering angle) the array factor repeats and additional main beams (grating lobes) appear in unwanted directions; avoid by spacing below lambda/(1 + |sin theta_max|).

**Q6.** (a) 1 m dish at 10 GHz: 2D²/lambda = 2 × 1/0.02998 = **66.7 m**; half-wave dipole (D = lambda/2): 2 (lambda/2)²/lambda = lambda/2 = **1.5 cm** at 10 GHz.
(b) S = 1000/(4π × 100²) = **7.96 mW/m²**; E_rms = sqrt(S eta0) = sqrt(7.96 × 10⁻³ × 376.7) = **1.73 V/m**.
(c) Radio horizon d = 4.12 (sqrt(h1) + sqrt(h2)) km = 4.12 (sqrt 30 + sqrt 2) = 4.12 (5.48 + 1.41) = **28.4 km**.

**Q7.** (a) Step 1: FSPL = 20 log10(10 km) + 20 log10(900 MHz) + 32.44 = 20 + 59.08 + 32.44 = **111.5 dB**.
Step 2: P_r = 30 + 10 + 0 - 111.5 = **-71.5 dBm** (28.5 dB above a -100 dBm receiver sensitivity).
(b) Five EMC practices: keep the ground plane continuous and signal return paths short; shield sensitive circuits and cables (skin depth: thin metal suffices at RF); filter power and signal lines (ferrite beads, LC filters) at connectors; use differential signalling, twisted pairs and balanced lines to cancel pickup; slow the edges (limit rise time) and separate noisy digital from sensitive analog circuits; decouple supplies with capacitors close to the pins; provide ESD protection and proper grounding.
