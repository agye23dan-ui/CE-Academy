# Electromagnetics & Antennas: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Use c = 3 × 10^8 m/s and eta0 = 377 Ω.

## Section A: Multiple choice (20 marks)

**1.** The intrinsic impedance of free space is about
A) 50 Ω  B) 75 Ω  C) 377 Ω  D) 1000 Ω

**2.** The speed of an electromagnetic wave in a lossless dielectric with epsilon_r = 4 and mu_r = 1 is
A) c  B) c/2  C) c/4  D) 2c

**3.** The skin depth of a good conductor
A) increases with frequency  B) is independent of frequency  C) decreases with frequency  D) is zero

**4.** The reflection coefficient at normal incidence from medium 1 to medium 2 is
A) (eta2 + eta1)/(eta2 - eta1)  B) (eta2 - eta1)/(eta2 + eta1)  C) eta2/eta1  D) 1 - eta2

**5.** A perfect conductor reflects a normally incident wave with a coefficient of
A) 0  B) +1  C) -1  D) 0.5

**6.** The Brewster angle is the angle at which
A) total internal reflection starts  B) there is no reflection for parallel polarisation  C) the wave is absorbed  D) the wave is circularly polarised

**7.** The characteristic impedance of a lossless line is
A) sqrt(L'C')  B) sqrt(L'/C')  C) L'/C'  D) 1/sqrt(L'C')

**8.** A matched line (Z_L = Z0) has a VSWR of
A) 0  B) 0.5  C) 1  D) infinity

**9.** A load of 100 Ω on a 50 Ω line has a reflection coefficient magnitude of
A) 0.2  B) 0.33  C) 0.5  D) 1.0

**10.** A line of length lambda/4 terminated in a short circuit has an input impedance that is
A) zero  B) Z0  C) very high (open circuit)  D) purely resistive and equal to the load

**11.** A quarter-wave matching transformer between Z0 and Z_L has an impedance
A) Z0 + Z_L  B) (Z0 + Z_L)/2  C) Z0 Z_L  D) sqrt(Z0 Z_L)

**12.** The TE10 cutoff frequency of a rectangular waveguide of width a is
A) c/(2a)  B) c/a  C) 2c/a  D) c a/2

**13.** In a waveguide the group velocity is
A) greater than c  B) equal to c  C) less than c  D) infinite

**14.** The half-wave dipole has a radiation resistance of about
A) 10 Ω  B) 50 Ω  C) 73 Ω  D) 377 Ω

**15.** The directivity of a half-wave dipole is about
A) 1.0  B) 1.5  C) 1.64  D) 3.0

**16.** Antenna gain equals directivity multiplied by
A) the radiation efficiency  B) the VSWR  C) the bandwidth  D) the wavelength

**17.** The effective aperture of an antenna of gain G is
A) lambda G/(4 pi)  B) lambda^2 G/(4 pi)  C) G/lambda^2  D) 4 pi G/lambda

**18.** The far-field distance of an antenna of largest dimension D is about
A) D  B) lambda  C) 2 D^2/lambda  D) D^2

**19.** The Friis equation shows the received power falling with distance R as
A) 1/R  B) 1/R^2  C) 1/R^3  D) 1/R^4

**20.** A uniform broadside array of N isotropic elements spaced lambda/2 apart has a directivity of
A) 2  B) N  C) N^2  D) 1

## Section B: Problems (40 marks)

**B1. Waves (10 marks)** (a) The wavelength in free space at 5 GHz and in a dielectric with epsilon_r = 9 at 1 GHz, and the intrinsic impedance of that dielectric [4] (b) The skin depth of copper at 100 MHz (1 MHz: 66.1 μm) [2] (c) Gamma and the fraction of power reflected at an air-dielectric (epsilon_r = 4) interface [4]

**B2. Transmission lines (10 marks)** A 75 Ω line is terminated in 150 Ω. (a) |Gamma|, VSWR, return loss [4] (b) The reflected and delivered power for 10 W incident [2] (c) A quarter-wave transformer to match a 75 Ω line to a 300 Ω load: its impedance [2] (d) Z_in of the original load at lambda/8 (using 60 - j45 Ω as a check) [2]

**B3. Waveguide (10 marks)** A rectangular guide has a = 3 cm and b = 1.5 cm. (a) The cutoffs of TE10, TE20 and TE01 [3] (b) The guide wavelength and the phase and group velocity at 6.5 GHz [5] (c) Can a 3 GHz signal propagate? [2]

**B4. Antennas (10 marks)** (a) The gain, HPBW and effective aperture of a 0.6 m dish at 5.8 GHz with 55 percent efficiency [4] (b) The Friis received power for a 1 GHz link of 1 km, 10 dBm, 6 dBi antennas at both ends [3] (c) The power density and rms field at 10 m from a source with 100 W EIRP [3]

---

## Answer Key and Solutions

### Section A
1 **C** · 2 **B** · 3 **C** · 4 **B** · 5 **C** · 6 **B** · 7 **B** · 8 **C** · 9 **B** · 10 **C** · 11 **D** · 12 **A** · 13 **C** · 14 **C** · 15 **C** · 16 **A** · 17 **B** · 18 **C** · 19 **B** · 20 **B**

Brief reasons: 2. v = c/sqrt(4). 3. delta = 1/sqrt(pi f mu sigma). 9. (100 - 50)/(150) = 1/3. 10. Z_in = Z0^2/Z_L with Z_L = 0 is infinite. 19. Received power is proportional to (lambda/(4 pi R))^2.

### Section B

**B1.**
(a) Step 1: lambda = c/f = 3 × 10^8/(5 × 10^9) = **6.0 cm**.
Step 2: for epsilon_r = 9: v = c/sqrt 9 = c/3 = 10^8 m/s, so lambda at 1 GHz = 10^8/10^9 = **10 cm**.
Step 3: eta = 377/sqrt 9 = 377/3 = **125.7 Ω**.
(b) delta is proportional to 1/sqrt(f): at 100 MHz (100 times 1 MHz) delta = 66.1 μm/sqrt 100 = 66.1/10 = **6.61 μm**.
(c) Step 1: eta2 = 377/2 = 188.4 Ω; Gamma = (188.4 - 377)/(188.4 + 377) = -188.6/565.4 = **-0.333**.
Step 2: the fraction of power reflected = Gamma² = **11.1 percent**.

**B2.**
(a) Step 1: Gamma = (150 - 75)/(150 + 75) = 75/225 = **0.333**.
Step 2: VSWR = (1 + 0.333)/(1 - 0.333) = **2.0**.
Step 3: return loss = -20 log10(0.333) = 20 log10(3) = **9.54 dB**.
(b) Step 1: reflected power = 10 × (1/3)² = **1.11 W**.
Step 2: delivered = 10 - 1.11 = **8.89 W**.
(c) Z1 = sqrt(75 × 300) = **150 Ω** (length lambda/4).
(d) Step 1: Z_in(lambda/8) = Z0 (Z_L + j Z0)/(Z0 + j Z_L) = 75 (150 + j75)/(75 + j150), since tan 45° = 1.
Step 2: multiply numerator and denominator by (75 - j150): (150 + j75)(75 - j150) = 11,250 - j22,500 + j5625 + 11,250 = 22,500 - j16,875; the denominator is 75² + 150² = 28,125.
Step 3: Z_in = 75 × (22,500 - j16,875)/28,125 = **60 - j45 Ω** (|Z_in| = 75: at the eighth-wavelength point the magnitude equals Z0 for this load because the normalised load is 2 and tan 45° = 1).

**B3.**
(a) Step 1: cutoff f_c = (c/2) sqrt((m/a)² + (n/b)²) (a and b from the question).
Step 2: TE10: c/(2a) = 3 × 10^8/0.06 = **5.0 GHz**; TE20: c/a = **10.0 GHz**; TE01: c/(2b) = **10.0 GHz**.
(b) Step 1: f_c/f = 5/6.5 = 0.769; r = sqrt(1 - 0.592) = 0.639.
Step 2: lambda = c/f = 4.615 cm; lambda_g = 4.615/0.639 = **7.2 cm**.
Step 3: v_p = c/0.639 = **1.57 c** (4.7 × 10^8 m/s); v_g = 0.639 c = **1.92 × 10^8 m/s**; check v_p v_g = c².
(c) **No**: 3 GHz is below the cutoff of 5 GHz, so the field decays exponentially (evanescent).

**B4.**
(a) Step 1: lambda = 5.17 cm; G = eta_a (π D/lambda)² = 0.55 (π × 0.6/0.0517)² = 0.55 × 1329 = **731 (28.6 dBi)**.
Step 2: HPBW ≈ 70 lambda/D = 70 × 0.0517/0.6 = **6.0°**.
Step 3: A_e = eta_a π D²/4 = 0.55 × π × 0.36/4 = **0.156 m²**.
(b) Step 1: FSPL (1 km, 1 GHz) = 20 log10(1) + 20 log10(1000) + 32.44 = 0 + 60 + 32.44 = **92.4 dB**.
Step 2: P_r = 10 + 6 + 6 - 92.4 = **-70.4 dBm**.
(c) Step 1: S = 100/(4π × 10²) = 100/1256.6 = **0.0796 W/m²**.
Step 2: E_rms = sqrt(S eta0) = sqrt(0.0796 × 377) = **5.48 V/m**.
