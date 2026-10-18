# Engineering Communication and Ethics: Assignments with Model Answers

For writing tasks there is no single correct answer. The model answers show one strong response, and each question has a marking checklist so you can judge your own work against explicit criteria. Do the task first, then mark yourself honestly.

# Assignment 1: Technical Writing (70 marks)

## Questions

**Q1. Clear sentences (12 marks).** Rewrite each sentence so that it is concise, concrete and in the appropriate voice. (2 marks each)
(a) "It has been determined by the team that the utilization of a larger heat sink would be beneficial in terms of thermal performance."
(b) "Due to the fact that the sensor was not calibrated, the readings were, generally speaking, quite inaccurate."
(c) "The data link layer retransmission timeout parameter configuration was modified."
(d) "In order to make a determination of the failure cause, an examination of the logs was performed."
(e) "The new design is much faster and very reliable."
(f) "Voltage drop measurement was performed on the resistor, and a value of 4.9 was obtained."

**Q2. Abstract (12 marks).** Write a 120 to 180 word abstract for the following study. Background: a student team built a low-pass RC filter for an audio sensor. Goal: cut off noise above 3 kHz. Method: they used R = 5.1 kΩ and C = 10 nF, predicted the cutoff frequency, and measured the response with a function generator and oscilloscope from 100 Hz to 100 kHz. Results: predicted fc = 3.12 kHz; measured fc = 3.05 kHz (−3 dB point), a difference of 2.2 percent, within component tolerances (±5 percent); attenuation at 30 kHz was 20.1 dB (predicted 20.0 dB). Conclusion: the design met the specification.

**Q3. Requirements (12 marks).** Each requirement below is defective. Say what is wrong and rewrite it as a necessary, unambiguous, measurable and testable requirement. (3 marks each)
(a) "The system should be user-friendly."
(b) "The response must be fast."
(c) "The device shall work in harsh environments, etc."
(d) "The battery shall last a long time and the display shall be bright and also the unit must be cheap."

**Q4. Professional email (8 marks).** Write an email from an engineer to a project supervisor reporting that a prototype delivery will slip from 15 May to 29 May because a key component (a motor driver) is delayed by the supplier. Include the impact on the test schedule, a mitigation, and a request for a decision.

**Q5. Uncertainty and units (10 marks).** (a) A resistor is measured with V = 5.00 ± 0.05 V and I = 2.00 ± 0.04 A. Compute R = V/I with its uncertainty, using the quadrature (root-sum-square) rule for relative uncertainties, and state the result with a sensible number of significant figures [5]. (b) Correct the errors in each statement: (i) "The clock frequency is 16 mhz." (ii) "The sampling rate is 3 ms/s." (iii) "The download rate was 100 MB/s, that is 100 megabits per second." (iv) "The mass was 2.5kg." [5]

**Q6. Figures (6 marks).** A student's graph of "motor speed against supply voltage" has no axis labels, uses a 3D bar chart, shows five measurements joined by a smooth curve without markers, truncates the y-axis to exaggerate the trend, and uses red and green lines. List the improvements you would make.

**Q7. Citation and plagiarism (10 marks).**
Original passage (from a textbook): "A feedback controller compares the measured output of a plant to a desired reference and uses the error to adjust the input, so that the output follows the reference despite disturbances."
Student versions: (A) "A feedback controller compares the measured output of a plant to a desired reference and uses the error to adjust the input so that the output follows the reference despite disturbances." (no citation). (B) "A feedback controller measures the plant output, compares it to the setpoint, and adjusts the input according to the error so that disturbances are rejected [3]." (C) "Feedback control means comparing what the system does to what you want and correcting the difference [3]."
(a) Judge each version (acceptable or not) and explain [6]. (b) Write IEEE reference entries for: a book (authors K. Ogata, title *Modern Control Engineering*, 5th edition, Prentice Hall, Upper Saddle River, NJ, USA, 2010); and a standard (IEEE Std 754-2019, *IEEE Standard for Floating-Point Arithmetic*) [4].

## Model Answers and Marking Guide

**Q1.**
(a) "The team recommends a larger heat sink to improve cooling." (Active voice, 10 words versus 24.)
(b) "The sensor was not calibrated, so its readings were inaccurate." Better still: "The readings were inaccurate because the sensor was not calibrated; they differed from the reference by 8 percent." Cut "due to the fact that", "generally speaking", "quite".
(c) "We changed the timeout before the data link layer retransmits." Remove the noun stack; say who acted.
(d) "We examined the logs to find the cause of the failure."
(e) Replace the vague adjectives with numbers: "The new design responds in 12 ms instead of 40 ms and failed 0 times in 1,000 test hours."
(f) "The voltage drop across the resistor was 4.9 V." The unit was missing; "measurement was performed" is wordy.
Marking: 1 mark for removing padding or passive voice, 1 mark for precision (units, numbers, clear actor).

**Q2. Model abstract (about 150 words).**
"Audio sensors pick up noise above their useful band, which degrades measurements. This study designed and tested a first-order passive RC low-pass filter to remove noise above 3 kHz. A resistor of 5.1 kΩ and a capacitor of 10 nF were chosen, giving a predicted cutoff frequency of 3.12 kHz. The frequency response was measured from 100 Hz to 100 kHz using a function generator and an oscilloscope. The measured −3 dB point was 3.05 kHz, 2.2 percent below the prediction and well within the ±5 percent component tolerance. At 30 kHz the measured attenuation was 20.1 dB, compared with the predicted 20.0 dB. The filter therefore met the design specification, and the simple first-order model predicts its behaviour accurately in this range."
Checklist (1 mark each, 12 total): background/problem; objective; method; component values; predicted value; measured value; quantitative comparison (percent or dB); tolerance interpretation; conclusion; no new information not in the study; correct length and standalone (no citations or figures); clear, tense-consistent writing.

**Q3.**
(a) Subjective and untestable. Rewrite: "A new user shall complete the task of setting a timer in under 60 seconds without help, in at least 9 of 10 trials."
(b) No measurable limit or condition. Rewrite: "The system shall respond to a valid request within 200 ms for 95 percent of requests at a load of 100 requests per second."
(c) "Harsh environments" is undefined and "etc." leaves the scope open. Rewrite: "The device shall operate at ambient temperatures from −20 °C to +60 °C, relative humidity up to 95 percent non-condensing, and withstand 1.5 m drops onto concrete."
(d) Several requirements joined together, with vague words. Split and quantify: "The battery shall support at least 48 hours of continuous operation at 25 °C." "The display shall provide a luminance of at least 400 cd/m^2." "The unit cost shall not exceed US$25 at a volume of 10,000."
Marking: 1 mark for naming the defect (vague, untestable, compound, open-ended), 2 for a rewritten measurable requirement with a number, unit and condition.

**Q4. Model email.**
Subject: Prototype delivery delayed to 29 May: decision needed on test schedule
Dear Dr. Mensah,
The prototype delivery will move from 15 May to 29 May. Our supplier has told us that the motor driver ICs (part DRV-8825) will arrive on 22 May instead of 8 May, and assembly and bring-up then take a week.
Impact: the planned integration test (19 to 23 May) cannot start until 29 May. The final demonstration on 12 June is still achievable if testing is reduced from 10 to 7 days.
Mitigation: (1) we will test the controller code with a development board and the existing driver in the meantime; (2) we have requested a quote for an alternative driver with a 3-day delivery.
Decision needed by Friday: please confirm either (a) a shortened test plan with the original demo date, or (b) a new demo date of 19 June.
I will update you as soon as the supplier confirms the shipment.
Kind regards,
Ama Boateng
Checklist (1 mark each): clear informative subject; main message in the opening; cause stated factually without blaming; revised date; impact quantified; mitigation; explicit request and deadline; professional tone and correct format.

**Q5.**
(a) Step 1: R = 5.00/2.00 = 2.50 Ω.
Step 2: Relative uncertainties: 0.05/5.00 = 1.0 percent and 0.04/2.00 = 2.0 percent.
Step 3: Combined: sqrt(1.0^2 + 2.0^2) = sqrt(5) = 2.24 percent. ΔR = 0.0224 · 2.50 = 0.056 Ω.
Step 4: Report **R = 2.50 ± 0.06 Ω** (uncertainty to one significant figure, the value to the same decimal place) (If the uncertainties were summed linearly the bound would be 3 percent, or 0.075 Ω; quadrature is appropriate for independent random errors.) (Marks: 2 relative uncertainties, 2 combination, 1 presentation.)
(b) Step 1: (i) **16 MHz** (M for mega; "mhz" has the wrong case; the unit is a symbol, so it is capitalised as Hz) (ii) "ms/s" means milliseconds per second (a dimensionless ratio of 0.003), not a sampling rate.
Step 2: A sampling rate of three million samples per second is written **3 MS/s** (capital M for mega; lower-case m means milli).
Step 3: Prefix case matters (iii) 100 MB/s is 100 megabytes per second, which equals 800 megabits per second (8 bits per byte), so write "100 MB/s (800 Mb/s)". (iv) **2.5 kg** (a space between the number and unit) (1 mark each, 1 extra for explaining (ii) and (iii).)

**Q6.** Improvements: label both axes with quantity and unit (for example "Speed (rpm)" and "Supply voltage (V)"); replace the 3D bars by a 2D scatter plot with markers for the measured points; do not smooth the data with an invented curve, instead fit a justified model (for example a straight line with its equation and R^2) and show it separately from the data; start the y-axis at zero or clearly mark a break; add error bars; choose colour-blind-safe colours and different marker shapes or line styles so that it reads in greyscale; give the figure a number and a caption below it, and refer to it in the text. (1 mark each, up to 6.)

**Q7.**
(a) **A: not acceptable.** It is a verbatim copy with no quotation marks and no citation: plagiarism. **B: acceptable** only because it restates the idea in a different structure and wording and carries a citation; it is a proper paraphrase (it still depends on the source, so the citation is essential). **C: acceptable.** It is a genuine summary in the student's own words with a citation. (2 marks each: verdict plus reason.)
(b)
[1] K. Ogata, *Modern Control Engineering*, 5th ed. Upper Saddle River, NJ, USA: Prentice Hall, 2010.
[2] *IEEE Standard for Floating-Point Arithmetic*, IEEE Std 754-2019, 2019.
(2 marks each: correct elements and order, correct punctuation.)

---

# Assignment 2: Standards, Risk and Safety (70 marks)

## Questions

**Q1. Who publishes what? (10 marks)** Match each item to the best description. Items: (1) ISO 9001, (2) IEEE 802.11, (3) IEC 61508, (4) RFC 9293, (5) NFPA 70, (6) ISO 26262, (7) IEC 62304, (8) FCC Part 15, (9) RoHS, (10) IEEE 754. Descriptions: (A) functional safety of road vehicles; (B) floating-point arithmetic; (C) quality management systems; (D) wireless LAN; (E) the US National Electrical Code; (F) functional safety of electrical, electronic and programmable electronic systems; (G) the specification of TCP; (H) medical device software life cycle; (I) US regulation of unintentional radio-frequency emissions; (J) restriction of hazardous substances in electronics.

**Q2. Compliance matrix (14 marks).** A company will sell a battery-powered, Wi-Fi-connected temperature sensor in the EU and in the US. Build a compliance matrix listing at least six applicable regulations or standards (name, what it covers, and what evidence the company must produce).

**Q3. Reading a standard (8 marks).** (a) Explain the difference between "shall", "should" and "may" in a standard [3]. (b) A clause says: "The enclosure shall withstand a 1.0 m drop onto a concrete surface. NOTE: Rubber bumpers may help." Which words are normative and which informative? [2] (c) Why must you cite the edition of a standard? [3]

**Q4. Risk matrix and controls (12 marks).** A lab bench power supply can deliver 10 A and has an exposed terminal. Likelihood and severity are scored 1 to 5, and risk = likelihood × severity. (a) Estimate the risk of an electric shock burn (likelihood 3, severity 3) and of a fire from a short circuit (likelihood 2, severity 5) and rank them [4]. (b) Apply the hierarchy of controls to the fire hazard with at least one control at each of four levels [5]. (c) Re-score the fire risk after controls (likelihood 1, severity 5) and say whether it is acceptable if the threshold is 6 [3].

**Q5. FMEA (8 marks).** Compute the Risk Priority Number RPN = Severity × Occurrence × Detection (each scored 1 to 10, where a higher detection score means harder to detect) for: battery overheating (S 9, O 3, D 4); loose connector (S 6, O 5, D 3); firmware hang (S 7, O 4, D 2). Rank the failure modes and say what you would do first.

**Q6. Reliability (8 marks).** (a) A component has reliability 0.99 over a mission. What is the reliability of three such components in series, and of two in parallel (redundant)? [4] (b) A device has MTBF = 50,000 h with a constant failure rate. Find the failure rate, the probability that it fails within 1,000 h, and its reliability at 1,000 h [4].

**Q7. Safety integrity (6 marks).** Under IEC 61508 (low-demand mode) the Safety Integrity Levels correspond to the average probability of failure on demand (PFDavg): SIL 1: 10^-2 to 10^-1; SIL 2: 10^-3 to 10^-2; SIL 3: 10^-4 to 10^-3; SIL 4: 10^-5 to 10^-4. (a) Which SIL does a PFDavg of 4 × 10^-3 meet? [2] (b) Two independent trip systems in parallel each have PFDavg = 0.05. What is the PFDavg of the combination (assume independence) and which SIL does it reach? [4]

**Q8. Citing standards (4 marks).** Write IEEE reference entries for: (a) IEC 61508-1:2010, *Functional safety of electrical/electronic/programmable electronic safety-related systems: General requirements*; (b) ISO/IEC 27001:2022, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*.

## Model Answers and Marking Guide

**Q1.** (1) ISO 9001 → **C**. (2) IEEE 802.11 → **D**. (3) IEC 61508 → **F**. (4) RFC 9293 → **G**. (5) NFPA 70 → **E**. (6) ISO 26262 → **A**. (7) IEC 62304 → **H**. (8) FCC Part 15 → **I**. (9) RoHS → **J**. (10) IEEE 754 → **B**. (1 mark each.)

**Q2.** A strong matrix includes at least the following (2 marks per row, up to 14):
- **EU Radio Equipment Directive (RED, 2014/53/EU)** and CE marking: radio efficiency, safety, EMC; evidence: technical file, test reports (ETSI EN 300 328 for 2.4 GHz), declaration of conformity.
- **EMC (IEC/EN 61000 series, EN 301 489)**: emissions and immunity; evidence: accredited laboratory test report.
- **FCC Part 15 (US)**: unintentional and intentional radiators; evidence: test report, FCC ID or declaration of conformity.
- **RoHS (EU 2011/65/EU)**: restricted substances (lead, mercury, cadmium, etc.); evidence: material declarations from suppliers, technical file.
- **WEEE (2012/19/EU)**: take-back and recycling; evidence: registration and marking (crossed-out bin).
- **Battery safety (IEC 62133 for lithium cells; UN 38.3 for transport)**: evidence: cell certificates and transport test reports.
- **Product safety (IEC 62368-1)**: audio/video and information technology equipment; evidence: safety test report.
- **Cybersecurity** (ETSI EN 303 645 for consumer IoT; RED delegated act): evidence: security assessment.
- **Wi-Fi Alliance / IEEE 802.11 conformance** (optional but commercially important).
Marking: correct name and scope (1), evidence (1) for each row; deduct if US and EU are not both covered.

**Q3.**
(a) **shall** = a mandatory requirement (you must comply to claim conformity); **should** = a recommendation (do it unless there is a justified reason not to); **may** = permission (optional). (1 mark each.)
(b) Normative: "The enclosure shall withstand a 1.0 m drop onto a concrete surface." Informative: the NOTE ("Rubber bumpers may help"), which is only an example or hint. (2 marks.)
(c) Standards are revised and requirements change between editions (limits, test methods, new clauses); compliance is only meaningful relative to a specific edition and date, and regulators or customers may require a specific version. Citing it lets readers verify and ensures that the test report matches the version claimed. (3 marks.)

**Q4.**
(a) Step 1: risk = likelihood × severity. Shock burn: 3 × 3 = **9**.
Step 2: fire: 2 × 5 = **10**.
Step 3: ranking: fire (10) is the higher risk, then shock burn (9). (2 marks each: calculations and ranking.)
(b) Hierarchy of controls: **eliminate** (use a supply with lower current capability, or a design with no exposed live terminal); **substitute** (use a current-limited 2 A supply for tasks that need no more); **engineering controls** (fuse or electronic current limit, thermal cut-out, flame-retardant enclosure, insulated shrouded terminals, residual current device); **administrative** (procedure, labelling, training, inspection schedule); **PPE** (insulating gloves, safety glasses). Award 1 mark for each of four levels correctly illustrated and 1 mark for stating that engineering controls rank above warnings and PPE.
(c) Step 1: after controls: 1 × 5 = **5**.
Step 2: compare with the threshold: 5 < 6, so the residual risk is **acceptable (ALARP)** provided the controls are verified, maintained and documented. (1 mark each: calculation, comparison, condition.)

**Q5.**
Step 1: RPN = S × O × D. Battery overheating = 9 × 3 × 4 = **108**.
Step 2: loose connector = 6 × 5 × 3 = **90**.
Step 3: firmware hang = 7 × 4 × 2 = **56**.
Step 4: ranking: battery overheating (108), loose connector (90), firmware hang (56).
Step 5: first action: address the battery overheating hazard (it has the highest severity, 9, and the highest RPN) with design changes: a thermal fuse or cut-off, cell protection circuit, and improved detection (temperature monitoring). Note that a single high-severity item should be treated first even if its RPN is not the highest. (2 marks per RPN, 1 ranking, 1 action.)

**Q6.**
(a) Step 1: series (all three must work): R = 0.99³ = 0.99 × 0.99 × 0.99 = **0.9703**.
Step 2: parallel of two (at least one must work): R = 1 − (1 − 0.99)² = 1 − 0.0001 = **0.9999**. (Redundancy only helps if failures are independent: a common-cause failure defeats it.)
(b) Step 1: failure rate λ = 1/MTBF = 1/50,000 = **2 × 10^-5 per hour**.
Step 2: reliability R(t) = e^(-λ t) = e^(-2 × 10^-5 × 1000) = e^(-0.02) = **0.9802**.
Step 3: probability of failure within 1,000 h = 1 − 0.9802 = **0.0198 (about 2 percent)**.

**Q7.**
(a) 4 × 10^-3 lies between 10^-3 and 10^-2, so it meets **SIL 2**.
(b) Step 1: parallel (1-out-of-2) with independent failures: both channels must fail on demand, so PFDavg ≈ 0.05 × 0.05 = **2.5 × 10^-3**.
Step 2: this lies between 10^-3 and 10^-2: the SIL 2 range. (A real analysis would add a common-cause factor, which can dominate.)

**Q8.**
[1] *Functional Safety of Electrical/Electronic/Programmable Electronic Safety-Related Systems: General Requirements*, IEC 61508-1:2010, 2010.
[2] *Information Security, Cybersecurity and Privacy Protection: Information Security Management Systems: Requirements*, ISO/IEC 27001:2022, 2022.
(2 marks each: title, designation, year.)

---

# Assignment 3: Ethics Case Analysis (90 marks)

## Questions

**Q1. Ethical theories (10 marks).** An autonomous-vehicle designer must decide how the car should behave in an unavoidable crash: swerve to hit one pedestrian or continue and hit three. Analyse the situation using utilitarian, deontological, rights-based and virtue-ethics lenses (2 marks each) and then state what additional engineering and societal questions matter more than the thought experiment (2 marks).

**Q2. Therac-25 (14 marks).** (a) Summarise the causes of the accidents [5]. (b) Identify at least three canons of the IEEE or NSPE codes that were violated or at risk, and explain how [5]. (c) State four engineering practices that would have prevented or limited the harm [4].

**Q3. The falsified supplier data (14 marks).** You are an engineer reviewing the qualification data for a supplier's capacitors for a medical device. You notice that the lot test report shows the same measurement values (to six digits) for three different lots, suggesting copied data. Your manager says the production deadline is tomorrow and the data are "probably fine". (a) Apply the seven-step decision method, listing the facts, stakeholders, issues, options and your decision [10]. (b) Write a short memo (80 to 120 words) to your manager documenting your concern and the action you propose [4].

**Q4. Conflicts of interest (12 marks).** For each situation, say whether it is a conflict of interest (actual, potential, or perceived), and what you should do (3 marks each): (a) You are asked to choose a vendor and your brother-in-law owns one of the bidders. (b) A supplier offers you a gift of a US$500 smartwatch after a contract award. (c) You work for a consulting firm and are assigned a project for a competitor of your former employer; you possess your former employer's confidential designs. (d) You hold a small number of shares in a company whose product you are asked to evaluate.

**Q5. Whistleblowing (10 marks).** Use De George's conditions (serious harm; reported to superiors; exhausted internal channels; documented evidence; good chance of success) to evaluate the actions of engineers who warned about the Challenger O-ring risk. Where are the conditions met, and what might the engineers have done differently or additionally?

**Q6. Open-source licences (8 marks).** Your team wants to use a library under the GPL v3 inside a closed-source commercial product that is distributed to customers. (a) Explain the problem [4]. (b) Give three options [4].

**Q7. Privacy by design (10 marks).** A start-up designs a smart doorbell camera that records video and audio and uploads it to the cloud. (a) List five ethical or legal issues [5]. (b) Propose design measures reflecting data minimisation, security, transparency and user control [5].

**Q8. Algorithmic fairness (6 marks).** A company's automated CV-screening tool selects 60 of 200 applicants from group A and 30 of 150 applicants from group B. (a) Compute the selection rates and the disparate-impact ratio and apply the four-fifths rule [3]. (b) Suggest three actions to investigate and mitigate [3].

**Q9. Cost-benefit reasoning (6 marks).** A company can recall 1,000,000 units for a $12 fix per unit, or leave them and accept an estimated 50 deaths over the product's life. Using a value of a statistical life of $10 million, compute the monetary comparison and then explain why a purely monetary argument is ethically inadequate.

## Model Answers and Marking Guide

**Q1.** **Utilitarian:** minimise total harm, so hit one rather than three (if the numbers and certainty are truly equal). **Deontological:** a duty not to use a person merely as a means, and a distinction between killing and letting die; some argue that programming a car to select a victim is impermissible, others that the duty is to follow the rule that was transparently agreed in advance. **Rights-based:** every person has an equal right to life, which cannot be traded by number; pedestrians who follow the rules have a stronger claim than those who do not. **Virtue ethics:** ask what a prudent, just and responsible designer would do: prioritise avoiding the situation altogether, be honest about limitations, and take responsibility. **More important questions:** how the system prevents the situation (speed limits, sensing and prediction, braking performance, safe testing); who is accountable; transparency of the decision rules; legal frameworks; validation evidence; and public acceptance. Real crashes are rarely clean choices; probabilities, uncertainty and the design process matter far more. (2 marks per lens with a justified conclusion; 2 for the wider questions.)

**Q2.** (a) Causes: software race condition (rapid operator edits could leave the beam in the high-energy mode without the beam-flattening target in place); removal of the hardware interlocks that the Therac-20 had, so that software alone was relied upon; reuse of old software without proper re-verification; poor software engineering (no independent review, inadequate testing, no formal hazard analysis); cryptic error messages and operators trained to ignore them; the manufacturer's slow, dismissive response to reports and an over-confident risk assessment. (b) Violations: hold paramount the safety, health and welfare of the public (releasing a device with inadequate safety assurance); be honest and realistic in stating claims or estimates (claims that the system could not overdose, based on flawed analysis); perform services only in areas of competence and undertake tasks only if qualified (inadequate software competence); disclose promptly factors that might endanger the public (slow disclosure and investigation of incidents). (c) Practices: keep independent hardware interlocks (defence in depth); independent code review and rigorous testing including concurrency tests; formal hazard analysis (FMEA, fault tree) of the whole system; an incident-reporting process, with prompt investigation and notification of regulators and users; meaningful, understandable error messages and operator training; no reuse of software in a new context without re-verification. (Marks: 5 + 5 + 4.)

**Q3. Model response.** (a)
1. **Facts:** three lots show identical six-digit measurements; this is statistically implausible in independent measurements; the device is a medical device, so failures may harm patients; the manager is under deadline pressure; I do not yet know whether this is a copy-paste error in the report or fabricated data.
2. **Stakeholders:** patients and clinicians (safety), the supplier, my company and colleagues, the manager, regulators, shareholders, me.
3. **Issues:** public safety and health (paramount), honesty and data integrity, regulatory obligations (medical device quality management requires supplier controls and traceability), professional competence, loyalty and schedule pressure.
4. **Options:** (i) ship as planned; (ii) say nothing; (iii) hold the affected lots, ask the supplier to explain and re-supply raw data, and run our own incoming inspection tests; (iv) escalate to quality assurance and the regulatory affairs team; (v) refuse to sign off.
5. **Evaluation:** (i) and (ii) fail the safety, honesty and publicity tests (I would not be comfortable if a patient were harmed and my silence were known); utilitarian reasoning favours a short delay compared with potential harm; duty ethics requires honesty and care; the rights of patients demand safe devices; a person of integrity would verify first. (iii) and (iv) are proportionate: they address the risk and give the supplier a chance to explain.
6. **Decision:** place the three lots on quality hold, inform the manager and quality assurance in writing, request the raw data and test the lots independently; escalate if the data are not satisfactorily explained or the manager insists on shipping.
7. **Review:** document outcomes, improve supplier audits, include data-integrity checks in incoming inspection.
(10 marks: roughly 1.5 per step, with credit for explicit use of codes and several lenses.)
(b) **Model memo:** "To: R. Owusu. Subject: Supplier data concern, capacitor lots 114 to 116. The test reports for lots 114, 115 and 116 contain identical measurements to six digits, which is not plausible for independent lots. Because the capacitors go into a medical device, I recommend placing these lots on hold today, asking the supplier for raw data, and running our own incoming tests (about two days). I will inform Quality Assurance. If the data are confirmed, we must also review earlier lots. Please confirm the hold by 4 p.m." (Marks: factual, specific, non-accusatory, proposed action, request, written record.)

**Q4.**
(a) **Actual conflict of interest** (a family tie with a bidder). Disclose it in writing to your manager, recuse yourself from the selection and the evaluation, and let others decide. (b) A **perceived/potential conflict**; the value is significant and follows a contract award. Decline politely, or report it and return it as company policy requires; many codes forbid gifts that could influence decisions. (c) A **confidentiality and legal issue** (and potential conflict). You must not use or disclose your former employer's confidential information. Tell your current employer about the restriction, avoid the tainted work, and consult legal counsel. (d) A **potential conflict** (a small financial stake). Disclose it; whether you should recuse depends on the size of the holding and the policy (a small index-fund holding may be acceptable; a significant direct holding is not). (Marks per part: 1 classification, 2 action.)

**Q5.** Conditions: **serious harm**: met (loss of the shuttle and crew was foreseeable, and engineers said so). **Reported to superiors**: met (Boisjoly and others wrote memos, for example in July 1985, and argued on the eve of the launch). **Exhausted internal channels**: partly met: they argued at the teleconference and up the management chain at the contractor, but there was no appeal beyond the company, and NASA managers, not engineers, made the launch decision. **Documented evidence**: partly met: there was temperature data and photographs of seal erosion, but the evidence of temperature dependence was not presented in a clear single chart, and the engineers could not "prove" failure. **Good chance of success**: unclear: management had already decided to launch. Additional actions that might have helped: present the data in a more persuasive format (for example a single plot of the O-ring damage versus temperature including flights with no damage), put the recommendation in writing with signatures, ask NASA safety officials or the independent safety office directly, and refuse to sign off. After the accident, Boisjoly testified to the Rogers Commission and faced professional consequences, showing the personal cost; the case also shows that organisations need protected channels. (Marks: 5 conditions at 1 mark each with justification, 3 for alternative actions, 2 for personal costs and organisational lessons.)

**Q6.** (a) The GPL is a **copyleft** licence: if you distribute a work that combines or links with GPL code, the combined work must be released under the GPL, with source code available to recipients. A closed-source product would violate the licence (and expose the company to legal and reputational risk). (b) Options: (1) **replace** the library with one under a permissive licence (MIT, BSD, Apache 2.0) or write your own; (2) **comply** by releasing the product (or the affected component) under the GPL; (3) **buy a commercial licence** from the copyright holder (dual licensing); (4) **isolate** the GPL component as a separate program communicating through a defined interface at arm's length (needs legal advice; the boundary is not always clear); (5) use it only internally without distribution. (2 marks per explanation point, 1 mark per option up to 4.)

**Q7.** (a) Issues: **privacy of visitors and neighbours** who did not consent to be recorded; **consent and notice** (signs, local laws on audio recording); **data security** (cloud breaches, weak passwords, default credentials); **data retention** and secondary use (sale to third parties, sharing with police); **access control and abuse** (stalking); **bias** in any face-recognition feature; **GDPR/data protection compliance** (lawful basis, purpose limitation, right to erasure); **safety** of the device (firmware updates). (b) Measures: **minimise data**: record only on motion events, local processing where possible, limit audio, blur public areas; **secure by default**: unique credentials, end-to-end encryption in transit and at rest, signed firmware, automatic updates; **transparency**: plain-language privacy notice, a visible indicator when recording; **control**: easy deletion, export, off switch, configurable retention (for example 30 days); **accountability**: audit logs, a clear process for law-enforcement requests, a vulnerability disclosure policy. (1 mark per issue or measure.)

**Q8.** (a) Step 1: Group A: 60/200 = **30 percent**.
Step 2: Group B: 30/150 = **20 percent**.
Step 3: Ratio = 20/30 = **0.67**, below 0.8, so under the four-fifths rule the tool shows evidence of **adverse impact** on group B (it flags the need for investigation, and is not proof of discrimination)
(b) Actions: audit the training data and features for proxies and historical bias; test performance and error rates per group; have a human review of rejected borderline cases; validate that the criteria are job-relevant; monitor results continuously; document the model and provide an appeal channel (1 mark per correct selection rate and ratio and rule, 1 mark each for three actions.)

**Q9.** Step 1: Monetary comparison: recall cost = 1,000,000 × $12 = **$12 million**.
Step 2: Expected harm cost = 50 × $10 million = **$500 million**.
Step 3: A purely monetary analysis favours the recall by a wide margin; but even if the numbers were reversed, the decision would remain ethically problematic.
Step 4: Reasons: the **rights** of the affected people (informed consent, the right not to be exposed to avoidable lethal risk); the principle of **public safety paramount** in the codes (cost-benefit is not a licence to kill); the unequal distribution of costs and benefits; the uncertainty in the estimates (and the incentive to underestimate risk); the legal liability, reputation and loss of trust; and the **publicity test** (the decision would be unacceptable if made public).
Step 5: Cost-benefit analysis is a useful input, but it cannot replace duties, rights and virtue (2 marks calculation, 4 marks for the discussion.)
