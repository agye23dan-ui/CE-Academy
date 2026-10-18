# Engineering Management and Entrepreneurship: Complete Lecture Notes

Prerequisites: probability and statistics, engineering communication and ethics, and a design course. This course covers how engineers lead teams and projects, justify decisions financially, control quality and operations, protect intellectual property and start technology ventures. All calculations (time value of money, NPV/IRR, depreciation, break-even, EOQ, control charts, queueing, cap tables, unit economics) were computed in Python; recompute them with your own numbers.

## Chapter 1. Engineering Management and Leadership

### 1.1 The manager's functions
Management follows four functions: **planning** (goals, strategy, budgets), **organizing** (structure, roles, resources), **leading** (motivating, communicating, directing) and **controlling** (measuring, correcting). Engineers move from technical work to technical leadership: they remain accountable for technical correctness while delivering results through other people. Typical roles: project engineer, team lead, project manager, engineering manager, director, chief technology officer.

### 1.2 Organization structures
Functional (departments by discipline: efficient use of expertise, slow cross-functional work), project-based (dedicated teams: clear ownership, duplicated skills), **matrix** (people report to a functional manager and a project manager: flexible but conflict-prone), product teams and agile "squads". Choose by the nature of the work: stable operations favour functional; innovation and one-off projects favour project teams.

### 1.3 Teams and leadership
Tuckman's stages: forming, storming, norming, performing (and adjourning). Effective teams have clear goals, defined roles, psychological safety, balanced skills and fast feedback. Leadership styles: directive, coaching, supportive, delegating (situational leadership: match the style to the follower's competence and commitment). Motivation: Maslow's hierarchy, Herzberg's hygiene versus motivators (pay prevents dissatisfaction, achievement and recognition motivate), McGregor's Theory X/Y, expectancy theory. Delegate outcomes, not just tasks; give timely, specific feedback.

### 1.4 Communication and conflict
Tailor messages to the audience (executives want impact and decision; engineers want evidence). Run meetings with an agenda, timebox and written actions. Conflict is normal: separate people from the problem, focus on interests, seek solutions that meet shared goals (collaborate), and escalate with facts. Negotiate using BATNA (best alternative to a negotiated agreement).

### 1.5 Decision making and ethics
Use data and structured methods (Chapter 5), consider stakeholders, and follow professional codes (IEEE, ASCE, NSPE): hold paramount the safety, health and welfare of the public; disclose conflicts of interest; refuse unsafe shortcuts; report concerns through proper channels (whistleblowing protections). Document decisions and their rationale.

## Chapter 2. Engineering Economics

### 2.1 Time value of money
Money now is worth more than money later. Future value FV = P(1 + i)ⁿ: $10,000 at 8 percent for 5 years becomes **$14,693**. Present value PV = F/(1 + i)ⁿ: $20,000 received in 4 years at 10 percent is worth **$13,660** now. The rule of 72: money doubles in about 72/i years (9 years at 8 percent; exact 9.006). Effective annual rate of a nominal 12 percent compounded monthly = (1 + 0.12/12)¹² - 1 = **12.68 percent**; daily compounding: 12.75 percent. Always compare alternatives at the same compounding basis.

### 2.2 Annuities and loans
Uniform series of A per period for n periods: PV = A[(1 - (1 + i)⁻ⁿ)/i]; FV = A[((1 + i)ⁿ - 1)/i]; A = P i/(1 - (1 + i)⁻ⁿ). With A = $1,000, i = 8 percent, n = 10: PV = **$6,710**, FV = **$14,487**; to repay $50,000 in 10 yearly payments at 8 percent costs **$7,451** a year. **Loan amortization.** $200,000 at 6 percent nominal annual (0.5 percent monthly) over 30 years: payment = **$1,199.10** per month; total paid $431,676 so interest is **$231,676**; after the first 12 payments the balance is still $197,544 (early payments are mostly interest). Inflation: the real rate = (1 + nominal)/(1 + inflation) - 1 = 1.08/1.03 - 1 = **4.85 percent**.

### 2.3 Evaluating projects
- **Net present value (NPV)**: discount all cash flows at the minimum attractive rate of return (MARR). Accept if NPV > 0.
- **Internal rate of return (IRR)**: the rate that makes NPV = 0; accept if IRR > MARR.
- **Payback period**: time to recover the investment (ignores time value and later cash flows). **Discounted payback** uses PV.
- **Benefit-cost ratio** B/C = PV(benefits)/PV(costs); accept if > 1.
**Worked example.** Alternative A: invest $50,000, receive $15,000/yr for 5 years. Alternative B: invest $80,000, receive 20, 25, 30, 30, 30 thousand. At MARR = 10 percent: NPV(A) = **$6,862**, IRR(A) = **15.2 percent**, payback 3.33 years, B/C = 1.14. NPV(B) = **$20,500**, IRR(B) = **18.9 percent**, B/C = 1.26. B has both higher NPV and higher IRR here. In general, to rank mutually exclusive projects use NPV or the **incremental IRR** of the extra investment: B - A has cash flows (-30, 5, 10, 15, 15, 15) thousand with incremental IRR **23.8 percent** and incremental NPV **$13,639** at 10 percent, so the extra $30,000 is worthwhile. Do not rank mutually exclusive alternatives by IRR alone (scale and timing differences can mislead).

### 2.4 Depreciation and taxes
Depreciation allocates the cost of an asset over its life. For cost $100,000, salvage $10,000, life 5 years: **straight line** $18,000/yr; **double-declining balance** (rate 2/5) $40,000, $24,000, $14,400, $8,640 and $2,960 (stopped at salvage, book value $10,000); **sum-of-years'-digits** $30,000, $24,000, $18,000, $12,000, $6,000; **MACRS** (5-year class) 20, 32, 19.2, 11.52, 11.52, 5.76 percent. Depreciation is tax-deductible: with a 30 percent tax rate and a 10 percent discount rate, the present value of the tax shield is $20,470 for straight line and $22,427 for double-declining balance (faster depreciation is worth more because the savings come sooner). After-tax cash flow = (revenue - costs - depreciation)(1 - t) + depreciation.

### 2.5 Break-even and cost-volume-profit analysis
Let the price be p, variable cost v and fixed cost FC. **Break-even volume** = FC/(p - v). With FC = $120,000, p = $50, v = $30: break-even = **6,000 units** ($300,000 of sales); contribution margin ratio 0.40; at 8,000 units profit = 20 × 8,000 - 120,000 = **$40,000**; the margin of safety is (8,000 - 6,000)/8,000 = 25 percent; operating leverage at 8,000 units = contribution/profit = 160,000/40,000 = **4.0** (a 10 percent sales change moves profit by 40 percent). Volume for a $40,000 target profit: 8,000 units.

### 2.6 Make-or-buy, replacement and sensitivity
Make-or-buy: making costs FC + v q; buying costs c q. With FC = $40,000, v = $12 and buy price $22 the break-even is 40,000/(22 - 12) = **4,000 units**; at 5,000 units the make cost is $20 per unit (cheaper). For replacement decisions compare the equivalent annual cost of the defender and challenger and ignore sunk costs. Always test sensitivity: vary the main assumptions (volume, price, discount rate) and note which flip the decision. Include risk by scenarios and Monte Carlo simulation.

## Chapter 3. Project Management

### 3.1 Life cycle and scope
Initiation (business case, charter), planning (scope, schedule, cost, quality, risk, communication), execution, monitoring and control, closing (acceptance, lessons learned). Define scope with a **work breakdown structure (WBS)** of deliverables; manage changes through a change-control process. The triple constraint (scope, time, cost) with quality at the centre: changing one affects the others.

### 3.2 Critical path method
Tasks (days): A 4 (no predecessor), B 6 (A), C 3 (A), D 5 (B), E 4 (B, C), F 2 (D, E). Forward pass: A 0-4, B 4-10, C 4-7, D 10-15, E 10-14, F 15-17. Backward pass (project length 17): F 15-17, D 10-15, E 11-15, C 8-11, B 4-10, A 0-4. Float: **C has 4 days, E has 1 day**, the others zero. Critical path **A-B-D-F = 4 + 6 + 5 + 2 = 17 days**. E is near-critical (1 day of float).

### 3.3 Crashing, PERT and resources
**Crashing** shortens the schedule by adding resources at extra cost, always on the critical path, choosing the cheapest slope first: a task normally 10 weeks at $20,000 that can be crashed to 7 weeks at $26,000 has a crash cost slope of (26,000 - 20,000)/(10 - 7) = **$2,000 per week**. After crashing, another path may become critical. **PERT** uses (o + 4m + p)/6 and σ = (p - o)/6 for uncertain durations; **resource leveling** smooths the load. **Critical chain** adds a shared project buffer instead of padding each task. Learning curves: an 80 percent curve means each doubling of cumulative output cuts the unit time to 80 percent: if unit 1 takes 100 hours, unit 8 takes 100 × 0.8³ = **51.2 hours**.

### 3.4 Earned value management
BAC = $400,000 budget; planned value PV = $240,000; earned value EV = $200,000; actual cost AC = $260,000. **CPI = EV/AC = 0.769**, **SPI = EV/PV = 0.833**, CV = -$60,000, SV = -$40,000. Forecasts: EAC = BAC/CPI = **$520,000** (trend continues); EAC = AC + (BAC - EV) = **$460,000** (remaining work on budget); EAC = AC + (BAC - EV)/(CPI × SPI) = $572,000 (cost and schedule both matter). To finish within BAC you need TCPI = (BAC - EV)/(BAC - AC) = 1.43: unrealistic, so re-plan.

### 3.5 Risk, agile and contracts
Risk management: identify, assess (probability × impact), respond (avoid, mitigate, transfer, accept), monitor; maintain a risk register. **Agile** (Scrum, Kanban) delivers in short iterations with a prioritized backlog and frequent feedback; suited to uncertain requirements; **waterfall/V-model** to well-defined requirements and regulated products; hybrids are common. Contracts: fixed price (seller bears cost risk), cost-plus (buyer bears cost risk), time and materials. Procurement: request for proposal, evaluation criteria, service-level agreements.

## Chapter 4. Operations, Quality and Reliability

### 4.1 Inventory and the EOQ
With annual demand D = 12,000, ordering cost S = $100 per order and holding cost H = $2.40 per unit-year: **EOQ = √(2DS/H) = 1,000 units**; 12 orders per year (every 30 days); total ordering plus holding cost = 12 × 100 + 500 × 2.4 = **$2,400**. Reorder point = daily demand × lead time (164.4 × 5 = 822 units, plus safety stock). Safety stock for service level 95 percent (z = 1.645) with daily demand standard deviation 8 and lead time 5 days: 1.645 × 8 × √5 = **29 units**. Just-in-time (lean) aims to reduce setup cost and inventory.

### 4.2 Queueing and staffing
Service systems: arrival rate λ and service rate μ per server. For c servers, utilization ρ = λ/(cμ) must be below 1. With λ = 20 per hour and μ = 6 per hour: c = 4 gives ρ = 0.83, probability of waiting 0.66 and average wait **9.9 minutes**; c = 5 gives ρ = 0.67, P(wait) = 0.33, wait **2.0 minutes**; c = 6 gives ρ = 0.56, P(wait) = 0.15, wait **0.6 minutes**. Adding one server to a heavily loaded system cuts waiting dramatically (nonlinear), so staff for the peak and review service levels.

### 4.3 Statistical process control
Control charts distinguish common-cause from special-cause variation. For subgroups of 5 with means 50.2, 49.8, 50.5, 50.1, 49.9, 50.3, 50.0, 49.7 and ranges 1.2, 0.9, 1.5, 1.1, 1.0, 1.3, 0.8, 1.4: x̿ = 50.06, R̄ = 1.15. **X-bar chart limits** x̿ ± A₂R̄ with A₂ = 0.577: UCL = **50.73**, LCL = **49.40**; **R chart** UCL = D₄R̄ = 2.114 × 1.15 = **2.43**. The process standard deviation estimate σ = R̄/d₂ = 1.15/2.326 = 0.494. A **p-chart** for the fraction defective with p̄ = 0.04 and n = 200 has UCL = p̄ + 3√(p̄(1 - p̄)/n) = **0.0816**, LCL = 0. Investigate points outside the limits and runs (eight points on one side).
**Process capability.** With specification limits 48 to 52: C_p = (USL - LSL)/(6σ) = 4/(6 × 0.494) = **1.35**; C_pk = min(USL - μ, μ - LSL)/(3σ) = 1.94/1.483 = **1.31**; expected nonconforming about **60 ppm**. A C_pk of at least 1.33 is a common target. **Six Sigma** aims for 3.4 defects per million opportunities (6σ with a 1.5σ shift): DPMO = defects/(units × opportunities) × 10⁶; 12 defects in 5,000 units with 4 opportunities each = **600 DPMO**. For comparison a 3σ process (shifted 1.5σ) yields 66,807 DPMO; 4.5σ gives 1,350.
**Acceptance sampling** (n = 50, accept if at most c = 2 defectives): probability of acceptance 0.986 at 1 percent defective, 0.922 at 2 percent, 0.541 at 5 percent and 0.112 at 10 percent: the operating-characteristic (OC) curve shows the consumer's and producer's risk.

### 4.4 Lean, OEE and reliability
Lean removes waste (overproduction, waiting, transport, over-processing, inventory, motion, defects). **Overall equipment effectiveness** OEE = availability × performance × quality = 0.90 × 0.95 × 0.98 = **83.8 percent**. Reliability: R(t) = e^(-t/MTBF): MTBF 5,000 h gives R(1,000 h) = **0.819**. Maintenance strategies: reactive, preventive (scheduled), predictive (condition-based), reliability-centred. Warranty cost = failure probability × repair cost × units.

## Chapter 5. Decision Analysis

### 5.1 Decision trees and expected monetary value
Choose between alternatives with uncertain outcomes. Option A (launch a new product): 60 percent chance of success worth $500,000 and 40 percent of failure losing $100,000: EMV = 0.6 × 500,000 + 0.4 × (-100,000) = **$260,000**. Option B (safe product): 60 percent chance of $200,000 and 40 percent of $50,000: EMV = **$140,000**. Choose A. The **expected value of perfect information** is the expected payoff with perfect foresight minus the best EMV: 0.6 × 500,000 + 0.4 × 50,000 - 260,000 = **$60,000**, the most you should pay for a forecast. Decisions with sequential stages are solved by folding back from the leaves, with Bayes' rule for updated probabilities.

### 5.2 Risk attitude and multi-criteria decisions
EMV assumes risk neutrality; real decision makers can be risk-averse (utility functions). When several criteria matter, use weighted scoring (decision matrices with sensitivity analysis), analytic hierarchy process (AHP) or Pareto trade-off. Beware of biases: anchoring, sunk-cost fallacy, overconfidence, groupthink.

## Chapter 6. Entrepreneurship and Innovation

### 6.1 Opportunity recognition and customer discovery
Start with a real, painful problem for a specific customer segment. **Customer discovery**: interview 20 to 50 potential customers, learn how they solve the problem today, what it costs them and what they would pay. Test assumptions cheaply (surveys, landing pages, prototypes) before building. The **Lean Startup** loop: build a minimum viable product (MVP), measure, learn, then pivot or persevere. The **Business Model Canvas** captures customer segments, value proposition, channels, customer relationships, revenue streams, key resources, activities, partners and cost structure.

### 6.2 Market sizing and pricing
**TAM** (total addressable market), **SAM** (serviceable part you can reach), **SOM** (share you can realistically capture). Example: 2 million potential customers each worth $600/year: TAM = **$1.2 billion**; reaching 30 percent through your channels: SAM = **$360 million**; capturing 2 percent of the SAM: SOM = **$7.2 million**. Build bottom-up estimates (customers × price) and cross-check with top-down. Pricing: cost-plus, competitive, value-based; consider elasticity: if a 10 percent price rise cuts volume by 15 percent, revenue changes by 1.10 × 0.85 - 1 = **-6.5 percent**.

### 6.3 Unit economics and runway
For a subscription product with price ARPU = $30/month, gross margin 70 percent, monthly churn 4 percent and customer acquisition cost CAC = $120: lifetime = 1/churn = 25 months; **LTV** = ARPU × margin/churn = 30 × 0.7/0.04 = **$525**; **LTV/CAC = 4.4** (a ratio above 3 is healthy); CAC payback = 120/(30 × 0.7) = **5.7 months**. If MRR is $50,000 and grows 10 percent a month it reaches $156,900 after 12 months and doubles in 7.3 months. Cash **runway** = cash/monthly burn: $480,000 at $60,000 burn is **8 months**; raise money or cut burn at least 6 months before running out.

### 6.4 Team, strategy and growth
Founders need complementary skills (technical, product, sales), clear equity splits with vesting, and advisors. Strategy: differentiate (cost leadership, differentiation, focus), build moats (IP, network effects, switching costs, data), and choose a go-to-market path (direct sales, channel, product-led growth). Scale by repeatable processes, hiring, and metrics.

## Chapter 7. Financing and Valuation

### 7.1 Sources of funding
Bootstrapping and revenue; grants and competitions; friends and family; **angel investors**; **venture capital** (seed, Series A, B, ...); corporate partners; bank debt and venture debt; crowdfunding. Investors seek a large market, a strong team, traction and a path to exit (acquisition or IPO). Match the funding to the stage and avoid unnecessary dilution.

### 7.2 Valuation and dilution
Pre-money valuation + investment = post-money valuation; investor ownership = investment/post-money. **Seed round:** $2,000,000 pre-money, $500,000 invested → post-money $2,500,000; the investor owns **20 percent**; with 1,000,000 founder shares the price per share is $2.00, the investor receives 250,000 new shares (20 percent of 1,250,000). **Series A:** $3,000,000 invested at $9,000,000 pre-money → post $12,000,000; the Series A investor owns **25 percent**, the seed investor falls from 20 to **15 percent**, and the founders from 80 to **60 percent**. Option pools (employee stock options, often 10 to 15 percent) also dilute. Valuation methods: comparables and revenue multiples (a 5× revenue multiple on $3 million of revenue gives $15 million), DCF (a perpetuity with growth: value = FCF₁/(r - g); $1 million × 1.03/(0.12 - 0.03) = **$11.4 million**), and the venture capital method (target exit value ÷ required return). A **term sheet** specifies valuation, liquidation preference, anti-dilution, board seats and vesting; read and negotiate it with a lawyer.

### 7.3 Financial statements
Income statement (revenue, costs, profit), balance sheet (assets = liabilities + equity), cash flow statement (operating, investing, financing). Cash flow, not profit, keeps a company alive. Track gross margin, burn rate, customer metrics and the cash conversion cycle.

## Chapter 8. Intellectual Property

- **Patents** protect inventions that are **novel, non-obvious (inventive) and useful/industrially applicable** for about 20 years from filing, in each country where granted (a priority year under the Paris Convention and PCT process allow international filing). Claims define the scope; prior-art searches are essential; public disclosure before filing can destroy novelty in many jurisdictions. Software and business methods have restricted patentability in many countries.
- **Copyright** protects expression (code, documents, images) automatically, typically for the author's life plus 70 years; it does not protect ideas or functions. **Trademarks** protect brand names and logos (renewable indefinitely while in use). **Trade secrets** protect confidential know-how (formulas, processes) as long as secrecy is maintained (use NDAs, access control). **Industrial designs** protect appearance.
- **Ownership and agreements**: employment contracts usually assign work-related inventions to the employer; use IP assignment agreements for contractors and co-founders; protect disclosures with NDAs; keep dated lab notebooks. **Licensing** grants rights (exclusive or non-exclusive) for royalties.
- **Open-source licences**: permissive (MIT, BSD, Apache 2.0) versus copyleft (GPL, AGPL: derivative works must be shared). Track dependencies to avoid licence conflicts and run a **freedom-to-operate** analysis before launching.

## Chapter 9. Law, Contracts and Professional Practice
Basic contract elements: offer, acceptance, consideration, capacity, legality. Negligence and product liability (design, manufacturing and warning defects) make safety documentation, testing and standards compliance essential. Professional licensing (PE/chartered engineer) and codes of ethics define duties. Business forms: sole proprietorship, partnership, limited liability company, corporation (liability, taxation and fundraising differ). Data protection, export controls and anti-corruption laws apply to technology businesses. Sustainability: consider life-cycle environmental cost, circular economy and social responsibility in decisions.

## Chapter 10. Product Development and Technology Management
Stage-gate process: idea → feasibility → development → testing → launch, with a go/kill decision at each gate based on technical, market and financial criteria. Manage the portfolio of projects by risk and return. Technology readiness levels (TRL 1 basic research to TRL 9 proven in operation) describe maturity; the "valley of death" between prototype and commercialization needs funding and partners. Open innovation, university technology transfer, standards and platforms shape competitive advantage.

## Chapter 11. Method and Mistakes Checklist
1. Define the decision and alternatives; list cash flows and assumptions; discount at MARR.
2. Compute NPV, IRR (and incremental IRR for exclusive options), payback and break-even; test sensitivity.
3. Plan the project with WBS, critical path, risks and a budget with contingency; track with earned value.
4. Control quality with data (control charts, capability), size inventory and staffing with models.
5. For ventures, validate the problem with customers, estimate unit economics, runway and dilution, protect IP and choose the legal form.

**Common mistakes.** Ignoring the time value of money or inflation; using IRR to rank mutually exclusive projects of different size; counting sunk costs; omitting working capital and taxes; padding every task instead of a project buffer; not tracking cost and schedule performance together; reacting to common-cause variation as if it were special-cause; building a product before talking to customers; ignoring churn and CAC in subscription businesses; running out of cash; giving away equity without vesting; disclosing an invention before filing a patent; and ignoring open-source licence terms.
