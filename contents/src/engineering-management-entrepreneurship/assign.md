# Engineering Management and Entrepreneurship: Assignments with Worked Solutions

State assumptions (MARR, tax rate, end-of-year cash flows) and show formulas before substituting numbers. All numerical answers below were computed and checked in Python. Round money to the nearest dollar unless stated.

# Assignment 1: Engineering Economics (70 marks)

## Questions

**Q1. Time value of money (14 marks)** (a) Find the value of $8,000 after 7 years at 6 percent compound interest [2]. (b) Find the present value of $15,000 due in 3 years at 9 percent [2]. (c) Find the present value and the future value of $2,500 paid at the end of each year for 8 years at 7 percent [4]. (d) Find the monthly payment and total interest on a $120,000 loan at 5 percent nominal annual (monthly compounding) over 20 years [4]. (e) Find the effective annual rate of 18 percent nominal compounded monthly [2].

**Q2. Comparing alternatives (22 marks)** MARR = 12 percent. Project C costs $60,000 and returns $18,000 at the end of each year for 5 years. Project D costs $90,000 and returns $24,000, $28,000, $32,000, $32,000, $32,000. (a) Compute NPV, IRR, benefit-cost ratio and simple payback for C and D [10]. (b) Compute the discounted payback of C [3]. (c) Compute the incremental cash flows D - C, their IRR and NPV and state which project to choose if they are mutually exclusive [6]. (d) Explain why ranking mutually exclusive projects by IRR alone can mislead [3].

**Q3. Depreciation and taxes (14 marks)** An asset costs $60,000, has a $6,000 salvage value and a 6-year life. (a) Compute the straight-line depreciation [2]. (b) Compute the double-declining-balance depreciation for each year (not below salvage) [5]. (c) Compute the sum-of-years'-digits depreciation for years 1 and 2 [2]. (d) With a 25 percent tax rate and 10 percent discount rate compute the present value of the tax shield for straight-line and for DDB [3]. (e) Compute the after-tax cash flow for a year with revenue $50,000, cash costs $20,000 and straight-line depreciation [2].

**Q4. Break-even and make-or-buy (12 marks)** Fixed costs $90,000, price $40, variable cost $24. (a) Break-even volume and revenue [3]. (b) Profit at 7,500 units, margin of safety and degree of operating leverage [4]. (c) Break-even volume if the price falls to $36 [2]. (d) A part can be made with $30,000 fixed cost and $9 variable cost, or bought at $17; find the break-even volume and the cost per unit of making 3,000 units [3].

**Q5. Inventory (8 marks)** Annual demand 8,000 units, ordering cost $60, holding cost $1.50 per unit-year. Find the EOQ, orders per year, the order cycle in days and the total annual cost; compare with ordering 1,000 units at a time.

## Solutions

**Q1.**
(a) FV = 8,000 × 1.06⁷ = **$12,029**.
(b) PV = 15,000/1.09³ = **$11,583**.
(c) PV = 2,500 × (1 - 1.07⁻⁸)/0.07 = 2,500 × 5.9713 = **$14,928**; FV = 2,500 × (1.07⁸ - 1)/0.07 = 2,500 × 10.2598 = **$25,650**.
(d) i = 0.05/12 = 0.4167 percent, n = 240: payment = 120,000 × i/(1 - (1 + i)⁻ⁿ) = **$791.95**; total paid = $190,067, interest = **$70,067**.
(e) (1 + 0.18/12)¹² - 1 = 1.015¹² - 1 = **19.56 percent**.

**Q2.**
(a) Project C: NPV = -60,000 + 18,000 × 3.6048 = **$4,886**; IRR = **15.24 percent**; B/C = 64,886/60,000 = **1.081**; payback = 60,000/18,000 = **3.33 years**. Project D: NPV = **$15,021**; IRR = **18.19 percent**; B/C = 105,021/90,000 = **1.167**; cumulative undiscounted cash flow is -90,000, -66,000, -38,000, -6,000, +26,000 so payback ≈ 3 + 6,000/32,000 = **3.19 years**.
(b) Cumulative discounted cash flows for C: -60,000, -43,929, -29,579, -16,767, -5,328, +4,886: the discounted payback occurs in year 5 (about 4.5 years).
(c) Step 1: D - C = (-30,000, 6,000, 10,000, 14,000, 14,000, 14,000).
Step 2: Incremental IRR = **23.1 percent** (above the MARR of 12 percent); incremental NPV = **$10,135** (= 15,021 - 4,886).
Step 3: The extra $30,000 earns more than the MARR, so choose **D**.
(d) IRR is a percentage and ignores scale: a small project with a high IRR may create less total value than a larger one with a lower (but still acceptable) IRR; IRR also assumes reinvestment at the IRR itself, and non-conventional cash flows can give multiple IRRs. Use NPV or incremental analysis for exclusive alternatives.

**Q3.**
(a) (60,000 - 6,000)/6 = **$9,000** per year.
(b) Rate = 2/6 = 33.3 percent of the opening book value, stopping at salvage: year 1: 20,000 (BV 40,000); year 2: 13,333 (26,667); year 3: 8,889 (17,778); year 4: 5,926 (11,852); year 5: 3,951 (7,901); year 6: 1,901 (6,000). Total = 54,000.
(c) SYD = 21: year 1: 6/21 × 54,000 = **$15,429**; year 2: 5/21 × 54,000 = **$12,857**.
(d) Step 1: Tax shield = 0.25 × depreciation.
Step 2: Straight line: PV = 0.25 × 9,000 × 4.3553 = **$9,799**.
Step 3: DDB: PV = Σ 0.25 × D_t/1.1ᵗ = **$10,863**.
Step 4: Faster depreciation gives the larger shield (savings come sooner).
(e) (50,000 - 20,000 - 9,000) × (1 - 0.25) + 9,000 = 15,750 + 9,000 = **$24,750**.

**Q4.**
(a) BEP = 90,000/(40 - 24) = **5,625 units**; revenue = 5,625 × 40 = **$225,000**.
(b) Profit = 16 × 7,500 - 90,000 = **$30,000**; margin of safety = (7,500 - 5,625)/7,500 = **25 percent**; DOL = contribution/profit = 120,000/30,000 = **4.0**.
(c) BEP = 90,000/(36 - 24) = **7,500 units** (a 10 percent price cut raises the break-even by 33 percent).
(d) Break-even = 30,000/(17 - 9) = **3,750 units**; at 3,000 units making costs 30,000/3,000 + 9 = **$19** per unit, more than buying at $17, so **buy** below 3,750 units and make above.

**Q5.** EOQ = √(2 × 8,000 × 60/1.5) = **800 units**; orders per year = **10**; cycle = 365/10 = **36.5 days**; total cost = 10 × 60 + 400 × 1.5 = **$1,200**. Ordering 1,000 at a time: 8 × 60 + 500 × 1.5 = **$1,230** (2.5 percent higher: the cost curve is flat near the optimum).

# Assignment 2: Project Management and Quality (70 marks)

## Questions

**Q1. Critical path (20 marks)** Tasks (weeks): A 3 (none); B 5 (A); C 4 (A); D 6 (B); E 3 (B, C); F 4 (C); G 2 (D, E, F). (a) Compute ES, EF, LS, LF and float for each task [12]. (b) Identify the critical path and duration [3]. (c) Task F is delayed by 4 weeks; what happens? [3] (d) What is a near-critical task? [2]

**Q2. PERT and crashing (14 marks)** Three sequential tasks have (o, m, p) = (2, 4, 8), (3, 5, 13), (1, 2, 3) weeks. (a) Compute the expected duration and standard deviation of the chain [5]. (b) Find the probabilities of finishing within 12 and 14 weeks and the 90 percent duration [5]. (c) Task A normally takes 8 weeks at $16,000 and can be crashed to 6 weeks for $21,000; task D takes 6 weeks at $12,000 and can be crashed to 4 weeks for $17,000. Find the crash slopes and say which to crash first if the path has both [4].

**Q3. Earned value (10 marks)** BAC = $600,000, PV = $360,000, EV = $300,000, AC = $330,000. Compute CV, SV, CPI, SPI, two forecasts of EAC, and TCPI. Interpret.

**Q4. Statistical process control (16 marks)** Ten subgroups of 5 measurements (mm) gave means 10.02, 10.05, 9.98, 10.01, 10.04, 9.97, 10.03, 10.06, 9.99, 10.00 and ranges 0.12, 0.10, 0.15, 0.11, 0.09, 0.13, 0.10, 0.14, 0.12, 0.11. (A₂ = 0.577, D₄ = 2.114, d₂ = 2.326.) (a) Compute the X-bar and R chart limits [6]. (b) Estimate σ, C_p and C_pk for specifications 9.70 to 10.30 [6]. (c) A p-chart uses n = 150 with p̄ = 0.03; compute the upper control limit [2]. (d) A process produces 8 defects in 2,000 units with 5 opportunities each; compute DPMO [2].

**Q5. Staffing a service (10 marks)** A helpdesk receives 15 calls/hour; each agent handles 6 calls/hour. For 3, 4 and 5 agents give utilization, the probability that a caller waits and the mean waiting time (Erlang C: 0.702, 0.320, 0.130).

## Solutions

**Q1.**
(a) Step 1: Forward pass: A 0-3; B 3-8; C 3-7; D 8-14; E 8-11 (waits for B); F 7-11; G 14-16 (waits for D).
Step 2: Backward pass (length 16): G 14-16; D 8-14; E 11-14; F 10-14; B 3-8 (must finish by D's start 8); C latest finish = min(LS of E = 11, LS of F = 10) = 10, so C 6-10; A 0-3.
Step 3: Float = LS - ES: A 0; B 0; **C 3**; D 0; **E 3**; **F 3**; G 0.
(b) Critical path **A-B-D-G = 3 + 5 + 6 + 2 = 16 weeks**.
(c) F has 3 weeks of float; a 4-week delay uses it all and extends the project by 1 week to **17 weeks**, and F becomes critical (A-C-F-G = 3 + 4 + 8 + 2 = 17).
(d) A task (or path) with small float, so that a small delay makes it critical; monitor near-critical paths as closely as the critical path.

**Q2.**
(a) Expected: (2 + 16 + 8)/6 = 4.33; (3 + 20 + 13)/6 = 6.00; (1 + 8 + 3)/6 = 2.00; total **12.33 weeks**. σ: (8 - 2)/6 = 1.0; (13 - 3)/6 = 1.67; (3 - 1)/6 = 0.33; variance = 1 + 2.78 + 0.11 = 3.89; σ = **1.97 weeks**.
(b) P(T ≤ 12) = Φ((12 - 12.33)/1.97) = Φ(-0.17) = **0.43**; P(T ≤ 14) = Φ(0.85) = **0.80**; 90 percent duration = 12.33 + 1.2816 × 1.97 = **14.9 weeks**.
(c) Slopes: task A: (21,000 - 16,000)/(8 - 6) = **$2,500/week**; task D: (17,000 - 12,000)/(6 - 4) = **$2,500/week**. They are equal, so crash whichever lies on the critical path (D is critical in Assignment 2 Q1's network); crash only as long as that path remains the longest.

**Q3.** Step 1: CV = EV - AC = **-$30,000**; SV = EV - PV = **-$60,000**; CPI = 300/330 = **0.909**; SPI = 300/360 = **0.833**.
Step 2: EAC (trend continues) = BAC/CPI = **$660,000**; EAC (remaining work at budget) = AC + (BAC - EV) = **$630,000**.
Step 3: TCPI = (BAC - EV)/(BAC - AC) = 300/270 = **1.11**: the team must be 11 percent more efficient than the budget from now on to finish on budget, which is difficult given a CPI of 0.91.
Step 4: The project is behind schedule and over cost; re-plan, reduce scope or negotiate.

**Q4.**
(a) Step 1: x̿ = 10.015, R̄ = 0.117.
Step 2: X-bar chart: UCL = x̿ + A₂R̄ = 10.015 + 0.577 × 0.117 = **10.083**; LCL = **9.947**.
Step 3: R chart: UCL = D₄R̄ = 2.114 × 0.117 = **0.247**; LCL = 0 (D₃ = 0 for n = 5).
Step 4: All subgroup means (9.97 to 10.06) and ranges lie inside the limits, so the process is in statistical control.
(b) σ = R̄/d₂ = 0.117/2.326 = **0.0503**; C_p = (10.30 - 9.70)/(6 × 0.0503) = **1.99**; C_pk = min(10.30 - 10.015, 10.015 - 9.70)/(3 × 0.0503) = 0.285/0.1509 = **1.89**; expected nonconforming ≈ 0.008 ppm. The process is highly capable.
(c) UCL = p̄ + 3√(p̄(1 - p̄)/n) = 0.03 + 3 √(0.03 × 0.97/150) = 0.03 + 0.0418 = **0.0718**.
(d) DPMO = defects/(units × opportunities) × 10⁶ = 8/(2,000 × 5) × 10⁶ = **800**.

**Q5.** With λ = 15, μ = 6, offered load a = 2.5. c = 3: ρ = 2.5/3 = **0.83**, P(wait) = **0.70**, W_q = P/(cμ - λ) = 0.702/(18 - 15) = 0.234 h = **14.0 min**. c = 4: ρ = **0.625**, P(wait) = **0.32**, W_q = 0.320/(24 - 15) = **2.1 min**. c = 5: ρ = **0.50**, P(wait) = **0.13**, W_q = 0.130/(30 - 15) = **0.52 min**. A fourth agent reduces the average wait from 14 to 2 minutes; the fifth agent adds little. Choose by service-level target versus cost.

# Assignment 3: Entrepreneurship, Finance and Intellectual Property (70 marks)

## Questions

**Q1. Market sizing (10 marks)** A device is sold to 500,000 potential customers at $240/year. Your channels reach 40 percent of them, and you expect to win 3 percent of those. Compute TAM, SAM and SOM [6] and discuss two ways to check the estimate [4].

**Q2. Unit economics (14 marks)** A subscription costs $50/month with 80 percent gross margin, churn of 5 percent per month and CAC of $200. (a) Customer lifetime, LTV and LTV/CAC [6]. (b) CAC payback [2]. (c) The maximum CAC for LTV/CAC = 3 [2]. (d) Name three levers to improve the economics [4].

**Q3. Runway (8 marks)** Cash is $360,000 and the net burn is $45,000/month. (a) Runway [2]. (b) The fixed monthly costs are $45,000 and variable cost per customer is 20 percent of revenue; how many customers at $50/month are needed to break even? [3] (c) When should fundraising start? [3]

**Q4. Financing and cap table (14 marks)** Founders hold 4,000,000 shares. A seed investor puts in $750,000 at a $2.25 million pre-money valuation; later a Series A invests $4,000,000 at a $12,000,000 pre-money valuation. (a) Seed price per share, new shares and ownership [5]. (b) Ownership of founders, seed and Series A after the Series A (ignore the option pool) [5]. (c) If a 10 percent post-money option pool is created at Series A from new shares, what is the founders' ownership? (approximate by diluting all existing holders by 10 percent) [2]. (d) Explain a liquidation preference [2].

**Q5. Decision under uncertainty (12 marks)** Market state: good (50 percent) or poor (50 percent). Option 1 (launch) pays $800,000 in a good market and -$200,000 in a poor one. Option 2 (modest) pays $250,000 or $50,000. Option 3 (do nothing) pays 0. (a) EMV of each option [4]. (b) Expected value of perfect information [4]. (c) A market study costs $80,000 and is perfectly accurate; should you buy it? [2] (d) Name two biases that distort such decisions [2].

**Q6. Intellectual property and ethics (12 marks)** A team of three students builds a sensor device. (a) Describe the protection offered by a patent, copyright, trademark and trade secret and which fits (i) the device's mechanism, (ii) the firmware source code, (iii) the product name, (iv) the calibration procedure [8]. (b) They want to publish a paper on the sensor before the patent is filed; what is the risk? [2] (c) They reuse a GPL library in the firmware; what must they consider? [2]

## Solutions

**Q1.** TAM = 500,000 × $240 = **$120 million**; SAM = 40 percent × TAM = **$48 million**; SOM = 3 percent × SAM = **$1.44 million** per year. Checks: a bottom-up estimate from counting real customers (pilot sales, number of target firms from industry lists), comparing with revenues of comparable products or competitors, surveying willingness to pay, and testing the assumed conversion rate in a pilot. Distinguish users from paying customers.

**Q2.**
(a) Lifetime = 1/0.05 = **20 months**; LTV = 50 × 0.8/0.05 = **$800**; LTV/CAC = 800/200 = **4.0** (healthy; above 3).
(b) CAC payback = 200/(50 × 0.8) = **5.0 months**.
(c) CAC_max = 800/3 = **$267**.
(d) Reduce churn (onboarding, support, product quality, annual plans), raise ARPU (pricing, upsell, tiers), raise gross margin (cheaper hosting or hardware, better supply), lower CAC (referrals, organic growth, better targeting), shorten the sales cycle.

**Q3.**
(a) Runway = 360,000/45,000 = **8 months**.
(b) Contribution per customer = 50 × 0.8 = $40; break-even = 45,000/40 = **1,125 customers** (revenue $56,250/month).
(c) Fundraising takes 3 to 6 months, so start when runway is 9 to 12 months (and always before it falls below 6 months), preferably after reaching a milestone that supports the valuation; otherwise a desperate raise loses leverage.

**Q4.**
(a) Price per share = 2,250,000/4,000,000 = **$0.5625**; new shares = 750,000/0.5625 = **1,333,333**; post-money = $3.0 million; seed ownership = 750,000/3,000,000 = **25 percent** (1,333,333 of 5,333,333 shares).
(b) After the seed the founders own 75 percent. Series A: post-money = 12 + 4 = $16 million; the Series A investor owns 4/16 = **25 percent**; existing holders are diluted by the factor 12/16 = 0.75: founders **0.75 × 0.75 = 56.25 percent**, seed **0.25 × 0.75 = 18.75 percent**.
(c) Diluting everyone by 10 percent: founders ≈ 56.25 × 0.9 = **50.6 percent** (the seed 16.9 percent, Series A 22.5 percent, pool 10 percent).
(d) A liquidation preference (for example 1×) gives the investor the right to receive their invested money back (or a multiple) before common shareholders receive anything when the company is sold or liquidated; "participating" preferences also share in the remainder. It protects investors in low-value exits and affects founders' payouts.

**Q5.**
(a) EMV₁ = 0.5 × 800,000 + 0.5 × (-200,000) = **$300,000**; EMV₂ = 0.5 × 250,000 + 0.5 × 50,000 = **$150,000**; EMV₃ = **0**. Choose option 1 on EMV.
(b) With perfect information you would choose option 1 in a good market (800,000) and option 2 in a poor market (50,000): expected value = 0.5 × 800,000 + 0.5 × 50,000 = **$425,000**. EVPI = 425,000 - 300,000 = **$125,000**.
(c) The study costs $80,000, less than the EVPI of $125,000, so it is worth buying (net value $45,000), provided it really is accurate; an imperfect study is worth less than $125,000.
(d) Overconfidence, anchoring on the first estimate, sunk-cost fallacy, confirmation bias, optimism bias, groupthink (any two).

**Q6.**
(a) **Patent**: exclusive right for about 20 years to an invention that is novel, non-obvious and useful: fits (i) the sensor's technical mechanism. **Copyright**: automatic protection of the expression of works (code, documents) for the author's life plus about 70 years: fits (ii) the firmware source code (not the underlying idea). **Trademark**: protects brand identifiers (names, logos) used in commerce: fits (iii) the product name. **Trade secret**: protects confidential know-how as long as secrecy is maintained (access control, NDAs): fits (iv) the calibration procedure, if it is not obvious from the product.
(b) Public disclosure before filing can destroy novelty in many jurisdictions (a short grace period exists in some), so the invention could become unpatentable. File a provisional application (or the full application) first, then publish.
(c) GPL is copyleft: distributing firmware that links to a GPL library may require releasing the corresponding source under the GPL (and giving users the licence). Check compatibility and obligations early; replace the library with a permissively licensed one (MIT/BSD/Apache) or comply fully; keep a software bill of materials.
