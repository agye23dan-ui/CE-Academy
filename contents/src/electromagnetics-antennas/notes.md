# Electromagnetics & Antennas: Lecture Notes

Every wireless link, every high-speed circuit board and every microwave oven depends on electromagnetic waves. This course covers Maxwell's equations and plane waves, reflection and transmission, transmission lines and impedance matching, rectangular waveguides, and antennas (radiation, directivity, gain, arrays, the Friis equation). All the numerical examples were computed with numpy/scipy (including the numerical integration of antenna patterns), so they are exact for the stated models. Prerequisites: Physics II (Electricity & Magnetism), Calculus II & ODEs (vector calculus), Signals & Systems and Circuit Analysis.

# Chapter 1: Maxwell's Equations and Plane Waves

## 1.1 The equations
In differential form (time-harmonic fields use phasors):
- Gauss: div D = rho; div B = 0.
- Faraday: curl E = -dB/dt. Ampere-Maxwell: curl H = J + dD/dt.
with D = epsilon E, B = mu H, J = sigma E. The displacement-current term dD/dt makes wave propagation possible. For free space epsilon0 = 8.854 × 10^-12 F/m, mu0 = 4 pi × 10^-7 H/m, so the speed of light **c = 1/sqrt(mu0 epsilon0) = 299,792,458 m/s** and the **intrinsic impedance** of free space **eta0 = sqrt(mu0/epsilon0) = 376.73 Ω** (about 120 pi).
**Boundary conditions**: the tangential components of E and H are continuous across a boundary (H jumps by any surface current); the normal components of D and B are continuous (D jumps by any surface charge). Inside a perfect conductor E = 0, which gives reflection with Gamma = -1.

## 1.2 Uniform plane waves
In a lossless medium (epsilon_r, mu_r) a wave with E in the x direction travelling along z is E_x = E0 cos(omega t - beta z), H_y = E_x/eta, with
- phase velocity v = c/sqrt(epsilon_r mu_r); wavelength lambda = v/f; phase constant beta = 2 pi/lambda = omega/v;
- intrinsic impedance eta = eta0 sqrt(mu_r/epsilon_r);
- time-average Poynting vector (power density) S = |E|^2/(2 eta) for a peak amplitude E (or E_rms^2/eta).
Numbers: wavelength in free space at 1 MHz **299.8 m**, 100 MHz **3.0 m**, 1 GHz **29.98 cm**, 10 GHz **2.998 cm**. In a dielectric with epsilon_r = 4: v = c/2 = 1.5 × 10^8 m/s, eta = 188.4 Ω and the wavelength at 1 GHz is 15.0 cm. A wave with a peak field of 10 V/m carries S = 100/(2 × 376.7) = **0.133 W/m^2** (E_rms = 7.07 V/m).
**Polarisation**: linear (E stays along one line), circular (two orthogonal components of equal amplitude, 90° apart: GPS and satellite links) and elliptical; a receiving antenna must match the polarisation of the wave (a polarisation mismatch loss).

## 1.3 Waves in conducting media and the skin effect
In a good conductor (sigma >> omega epsilon) fields decay as e^(-z/delta) with the **skin depth** **delta = 1/sqrt(pi f mu sigma)**. For copper (sigma = 5.8 × 10^7 S/m): 60 Hz: **8.53 mm**; 1 MHz: **66.1 μm**; 1 GHz: **2.09 μm**; 10 GHz: **0.66 μm**. The surface resistance Rs = 1/(sigma delta) is 8.25 mΩ per square at 1 GHz: high-frequency current flows in a thin surface layer, so the resistance of a wire increases with the square root of frequency and **thin plating of silver or gold** is enough; the same effect makes thin metal foils good shields (aluminium at 1 MHz: 85 μm). **Seawater** (sigma = 4 S/m) has a skin depth of **25 cm at 1 MHz** but 8 m at 1 kHz, which is why submarines use very low frequencies.

## 1.4 Reflection and transmission at a boundary
For normal incidence from medium 1 to medium 2: **Gamma = (eta2 - eta1)/(eta2 + eta1)**, **tau = 1 + Gamma**. Air (eta1 = 377) onto a dielectric with epsilon_r = 4 (eta2 = 188.4): Gamma = **-1/3**, tau = 0.667, the fraction of power reflected = Gamma^2 = **11.1 percent**. Air to glass (n = 1.5): Gamma = **-0.2**, **4 percent** of the power is reflected at each surface (hence anti-reflection coatings), transmitted 96 percent. A conductor (eta2 = 0) gives Gamma = -1 (total reflection). At oblique incidence the polarisation matters: the **Brewster angle** (no reflection of parallel polarisation) for glass is arctan(1.5) = **56.3°**; total internal reflection occurs beyond the **critical angle** arcsin(1/1.5) = **41.8°** (basis of optical fibres).

# Chapter 2: Transmission Lines

## 2.1 The model
Two conductors carrying a wave are modelled by per-unit-length inductance L' and capacitance C' (and R', G' for losses). For a lossless line: **characteristic impedance Z0 = sqrt(L'/C')**, **velocity v = 1/sqrt(L'C')**. Example: L' = 250 nH/m, C' = 100 pF/m: Z0 = **50 Ω**, v = 2.0 × 10^8 m/s = **0.667 c**. Coaxial cable: Z0 = (60/sqrt(epsilon_r)) ln(b/a): a = 0.45 mm, b = 1.47 mm and polyethylene (epsilon_r = 2.25): Z0 = **47.4 Ω** (close to 50 Ω). A line must be treated as a transmission line (not a simple wire) when its length exceeds about lambda/10.

## 2.2 Reflection, standing waves, matching
At a load Z_L: **Gamma_L = (Z_L - Z0)/(Z_L + Z0)**; **VSWR = (1 + |Gamma|)/(1 - |Gamma|)**; **return loss = -20 log10 |Gamma|** dB; **mismatch loss = -10 log10(1 - |Gamma|^2)** dB. For Z0 = 50 Ω:
```
load            |Gamma|   phase    VSWR    return loss   mismatch loss
50              0         -        1.00    infinite      0 dB
100             0.333     0°       2.00    9.54 dB       0.51 dB
25              0.333     180°     2.00    9.54 dB       0.51 dB
75              0.200     0°       1.50    13.98 dB      0.18 dB
50 + j50        0.447     63.4°    2.62    6.99 dB       0.97 dB
100 + j50       0.447     26.6°    2.62    6.99 dB       0.97 dB
```
Of 10 W forward power into a 100 Ω load on a 50 Ω line, 10 × (1/3)^2 = **1.11 W** is reflected and **8.89 W** delivered. Matched loads (Z_L = Z0) absorb all power and the voltage is the same everywhere; mismatched loads create **standing waves** with voltage maxima where the incident and reflected waves add (V_max/V_min = VSWR).
**Input impedance**: **Z_in = Z0 (Z_L + j Z0 tan(beta l))/(Z0 + j Z_L tan(beta l))**. For Z0 = 50 and Z_L = 100: at l = lambda/4 Z_in = **25 Ω** (the inversion Z0^2/Z_L); at l = lambda/8 Z_in = **40 - j30 Ω**; at l = lambda/2 Z_in = 100 Ω (repeats). A shorted line of length lambda/8 looks like an inductor of **+j50 Ω**; a short-circuited line of lambda/4 looks like an open circuit (a very high impedance), and an open line of lambda/4 looks like a short.

## 2.3 Matching techniques
- **Quarter-wave transformer**: a line of length lambda/4 and characteristic impedance **Z1 = sqrt(Z0 Z_L)** matches a real load to the line: 50 Ω to 100 Ω: **70.7 Ω**; 75 Ω to 300 Ω: **150 Ω**; 50 Ω to 200 Ω: 100 Ω. Narrowband (exact at one frequency).
- **Single-stub matching**: a shorted shunt stub of length l placed at a distance d from the load cancels the reactive part. Example: Z_L = 100 + j50 Ω on a 50 Ω line: at **d = 0.1986 lambda** from the load the normalised admittance is 1 + j1.00, so a short-circuited stub of length **l = 0.125 lambda** (susceptance -j1) matches; the second solution is d = 0.3748 lambda with a stub of 0.375 lambda.
- **Lumped L-networks**, **tapered lines** (broadband) and the **Smith chart**: a graphical chart of Gamma on which impedance and admittance circles let you read the matching steps. Practical: antennas are matched to 50 Ω with matching networks, baluns and tuners.
**Other topics**: lossy lines (attenuation in dB/m; coax loss rises with frequency), time-domain reflections (TDR: a step sent down the line reveals discontinuities), pulse reflections on digital PCB traces (terminate lines longer than about 1/6 of the signal rise-time distance), microstrip and stripline.

# Chapter 3: Waveguides

A hollow metal pipe can guide waves above a **cutoff frequency**. For a rectangular guide of width a and height b (a > b) the modes TE_mn and TM_mn have cutoff **f_c = (c/2) sqrt((m/a)^2 + (n/b)^2)** (air-filled). The dominant mode is **TE10** with **f_c = c/(2a)**. Example: standard X-band guide WR-90, a = 22.86 mm, b = 10.16 mm: TE10 cutoff **6.557 GHz**, next modes TE20 at **13.114 GHz** and TE01 at 14.754 GHz, so the single-mode band is about 6.56 to 13.1 GHz (the recommended band is 8.2 to 12.4 GHz).
Above cutoff: guide wavelength **lambda_g = lambda/sqrt(1 - (f_c/f)^2)**; phase velocity **v_p = c/sqrt(1 - (f_c/f)^2)** (greater than c!); group velocity **v_g = c sqrt(1 - (f_c/f)^2)** (the speed of energy, less than c), v_p v_g = c^2; wave impedance of TE10 Z = eta0/sqrt(1 - (f_c/f)^2). For WR-90:
```
f (GHz)   lambda_g (mm)   v_p/c   v_g/c   Z_TE10 (ohm)
8         65.4            1.746   0.573   657.6
10        39.7            1.324   0.755   499.0
12        29.8            1.194   0.838   449.8
```
Below cutoff the field decays exponentially (**evanescent**): no propagation. Waveguides have very low loss and high power capacity (radar, satellite feeds) but are bulky and band-limited; at lower frequencies coaxial cable is used, and at optical frequencies dielectric waveguides (optical fibre, with total internal reflection). Cavity resonators (microwave ovens: 2.45 GHz) and the power flow in a guide complete the picture.

# Chapter 4: Radiation and Antenna Parameters

## 4.1 How antennas radiate
Accelerating charges radiate: time-varying currents on an antenna produce waves that detach from it. Regions: **reactive near field** (very close), **radiating near field** (Fresnel) and **far field** (Fraunhofer: beyond **R = 2 D^2/lambda**, where D is the largest antenna dimension), where the wave is locally a plane wave with E and H perpendicular, E/H = eta0, and the field falls as 1/R. The **Hertzian (short) dipole** of length l << lambda has a radiation resistance **R_r = 80 pi^2 (l/lambda)^2**: l = lambda/10: **7.9 Ω**; l = lambda/50: **0.32 Ω** (very inefficient: the loss resistance dominates).

## 4.2 Parameters
- **Radiation pattern**: the angular distribution of power (usually normalised, in dB), with **main lobe**, **side lobes**, **nulls** and the **half-power beamwidth (HPBW)**.
- **Directivity D** = maximum radiation intensity / average radiation intensity = 4 pi U_max/P_rad; **gain G = eta D** where **eta = R_r/(R_r + R_loss)** is the radiation efficiency; dBi is relative to an isotropic radiator (D = 1, 0 dBi).
- **Input impedance**, **VSWR/bandwidth**, **polarisation**.
- **Effective aperture** **A_e = lambda^2 G/(4 pi)**.
**Half-wave dipole**: R_r = **73.1 Ω**, pattern F(theta) = [cos((pi/2) cos theta)/sin theta]; numerical integration of the pattern gives **D = 1.641 (2.15 dBi)**, **HPBW = 78.1°**. Hertzian dipole: D = 1.5 (1.76 dBi). With R_r = 73 Ω and a loss resistance of 2 Ω the efficiency is 97.3 percent and the gain **2.03 dBi**.

## 4.3 Aperture antennas
A parabolic dish of diameter D and aperture efficiency eta_a: **G = eta_a (pi D/lambda)^2**, HPBW ≈ 70 lambda/D degrees, A_e = eta_a pi D^2/4. For D = 1 m at 10 GHz (lambda = 3.0 cm) and eta_a = 0.6: **G = 6589 = 38.2 dBi**, **HPBW = 2.1°**, A_e = **0.471 m^2**; check: lambda^2 G/(4 pi) = 0.471 m^2 ✓. The far-field distance 2 D^2/lambda is **66.7 m**. Horn antennas, patch (microstrip) antennas, Yagi-Uda arrays and helical antennas are other common types.

# Chapter 5: Arrays and Wireless Links

## 5.1 Antenna arrays
The pattern of an array = element pattern × **array factor** AF. For N identical elements with spacing d and progressive phase delta: AF = sin(N psi/2)/sin(psi/2), psi = 2 pi d cos(theta)/lambda + delta. A uniform broadside array (delta = 0) with spacing lambda/2 has **directivity D = N** (computed numerically: N = 2: 2.0, 4: 4.0, 8: 8.0, 16: 16.0 for isotropic elements), main-beam narrowing as 1/N; applying a phase gradient **steers the beam** electronically (phased arrays in radar, 5G base stations; MIMO). Spacing larger than lambda gives **grating lobes**.

## 5.2 The Friis transmission equation
**P_r = P_t G_t G_r (lambda/(4 pi R))^2** or in dB: P_r = P_t + G_t + G_r - FSPL, where free-space path loss FSPL = 20 log10(4 pi R/lambda) (equal to 20 log10 d_km + 20 log10 f_MHz + 32.44). Examples: a Wi-Fi link at 2.4 GHz over 100 m with 20 dBm transmit power and 2.15 dBi antennas at both ends: P_r = **-55.8 dBm**. A geostationary satellite downlink: 4 GHz, R = 36,000 km, P_t = 60 dBm (30 dBW), G_t = 40 dBi, G_r = 35 dBi: P_r = **-60.6 dBm**. **Power density**: for an EIRP of 1 kW (P_t G_t) at 100 m: S = 1000/(4 pi 100^2) = **7.96 mW/m^2**, i.e. E_rms = sqrt(S eta0) = **1.73 V/m** (exposure limits: a few tens of V/m, so this is far below them). The **radar equation** adds the target's cross-section: P_r = P_t G^2 lambda^2 sigma/((4 pi)^3 R^4): the received power falls as R^-4.

## 5.3 Propagation and electromagnetic compatibility
Ground wave (LF/MF), **sky wave** (HF, reflection by the ionosphere), **line-of-sight** (VHF and above; radio horizon about 4.12 (sqrt(h1) + sqrt(h2)) km with heights in metres), multipath fading, diffraction and rain attenuation (above 10 GHz). **EMC**: radiated and conducted emissions and immunity; reduce interference by shielding (skin effect), filtering, grounding, short return paths, twisted pairs, differential signalling, ferrites and layout (continuous ground planes); ESD protection; standards (CISPR, FCC Part 15).
**Safety**: specific absorption rate (SAR) limits for phones, power density limits for exposure.

## Quick reference
- c = 3 × 10^8 m/s, eta0 = 377 Ω, lambda = c/f; skin depth delta = 1/sqrt(pi f mu sigma).
- Gamma = (Z_L - Z0)/(Z_L + Z0); VSWR = (1 + |Gamma|)/(1 - |Gamma|); quarter-wave transformer Z1 = sqrt(Z0 Z_L).
- Waveguide TE10: f_c = c/(2a); v_p v_g = c^2.
- Dipole: R_r = 73 Ω, D = 1.64 (2.15 dBi); dish G = eta_a (pi D/lambda)^2; A_e = lambda^2 G/(4 pi).
- Friis: P_r = P_t + G_t + G_r - 20 log10(4 pi R/lambda); far field R > 2 D^2/lambda.
