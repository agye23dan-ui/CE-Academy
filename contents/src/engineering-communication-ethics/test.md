# Engineering Communication and Ethics: Class Test

Duration: 60 minutes. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 written problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** Which belongs in the abstract of a technical report?
A) detailed raw data tables  B) the main quantitative results  C) the complete reference list  D) a long literature review

**2.** Which sentence is in the preferred (active, concrete) style?
A) "A decision was reached that the circuit would be tested."  B) "The team tested the circuit."  C) "Testing of the circuit was performed by the team."  D) "It is recommended that testing occurs."

**3.** In a requirements document, "shall" indicates
A) an optional feature  B) a mandatory requirement  C) a suggestion  D) a historical note

**4.** In IEEE citation style, references are
A) alphabetical by author and cited by year  B) numbered in the order of first citation  C) listed only as web links  D) unnecessary for figures

**5.** Copying a paragraph from a paper without quotation marks or citation is
A) paraphrasing  B) plagiarism  C) common knowledge  D) summarising

**6.** The SI unit symbol for frequency is
A) hz  B) HZ  C) Hz  D) hZ

**7.** What should you do first before writing a technical document?
A) choose the font  B) analyse the audience and purpose  C) write the conclusion  D) format the references

**8.** The purpose of the Method section in a report is to
A) summarise the conclusions  B) give enough detail for someone to reproduce the work  C) advertise the product  D) list the budget

**9.** The first Fundamental Canon of the NSPE Code of Ethics is to
A) maximise profit for the employer  B) hold paramount the safety, health and welfare of the public  C) obey every instruction from a manager  D) avoid disclosing any problems

**10.** Which organisation is a primary international standards body?
A) ISO  B) NASA  C) GitHub  D) NSF

**11.** A simple risk measure is
A) severity + cost  B) likelihood × severity  C) probability − severity  D) cost ÷ benefit

**12.** The most effective level in the hierarchy of controls is
A) personal protective equipment  B) warning signs  C) elimination of the hazard  D) training

**13.** Utilitarianism judges an action by its
A) intention only  B) consequences, favouring the greatest overall good  C) conformity to rules only  D) the actor's feelings

**14.** An engineer who suspects a serious safety problem should first
A) leak it to the press  B) verify the facts and raise the concern internally in writing  C) ignore it  D) delete the data

**15.** A key cause of the Therac-25 accidents was
A) a ship collision  B) software race conditions and the removal of hardware interlocks  C) a bridge failure  D) lack of electricity

**16.** The Challenger disaster was caused by the failure of
A) a main engine turbopump  B) an O-ring seal in a solid rocket booster joint in cold weather  C) the parachutes  D) the heat tiles

**17.** In a standard, a "NOTE" is typically
A) normative  B) informative  C) legally binding  D) a test requirement

**18.** The GPL is an example of a
A) permissive licence  B) copyleft licence  C) trademark  D) trade secret

**19.** Which is a conflict of interest?
A) a colleague's praise  B) accepting an expensive gift from a bidder you are evaluating  C) working overtime  D) using a company laptop for work

**20.** 100 MB/s (megabytes per second) equals
A) 100 Mb/s  B) 800 Mb/s  C) 12.5 Mb/s  D) 1000 Mb/s

## Section B: Written problems (40 marks)

**B1. (10 marks)** Rewrite each sentence to be concise, concrete and clear. (2.5 marks each)
(a) "It was observed by the technician that the oscillation of the output voltage was of a nature that was very large."
(b) "In the event that the battery voltage drops below the minimum threshold value, the system will make the determination to shut itself down."
(c) "The new motor is much more efficient."
(d) "Testing was performed at 20 and the result was 3.3."

**B2. (10 marks)** A client wants a "portable, fast, long-lasting weather station." Write five measurable, testable requirements (using "shall") that turn this brief into engineering requirements, and name a test for each.

**B3. (10 marks)** A test engineer is told by a manager to sign a safety test report for a product even though one of the required tests (a 72-hour thermal soak) was shortened to 24 hours because of a deadline. (a) State the ethical issues [3]. (b) Evaluate two options using at least two ethical lenses and the codes [4]. (c) State what you recommend and write the first two sentences of your message to the manager [3].

**B4. (10 marks)** A power supply design has three failure modes: output capacitor short (S 8, O 2, D 5); fan failure (S 5, O 6, D 2); firmware watchdog not working (S 9, O 2, D 7). (a) Compute the RPN for each and rank them [4]. (b) Recommend a priority and two actions [3]. (c) Classify as normative or informative: "The unit shall shut down within 100 ms of an over-temperature condition." "Designers should consider redundant sensors." "The shutdown time may be tested using a thermal chamber." "NOTE: Typical shutdown times are 50 ms." [3]

---

## Answer Key and Marking Guide

### Section A
1 **B** · 2 **B** · 3 **B** · 4 **B** · 5 **B** · 6 **C** · 7 **B** · 8 **B** · 9 **B** · 10 **A** · 11 **B** · 12 **C** · 13 **B** · 14 **B** · 15 **B** · 16 **B** · 17 **B** · 18 **B** · 19 **B** · 20 **B**

Brief reasons:
1. The abstract summarises the key results with numbers.
2. Active voice and a named actor.
3. "Shall" is mandatory, "should" is a recommendation, "may" is permission.
4. IEEE numbers references in order of first appearance.
5. Verbatim copying without credit.
6. Hz (the unit is named after Hertz, so the symbol is capitalised).
7. Audience and purpose shape everything else.
8. Reproducibility.
9. The paramount duty to the public.
10. ISO, the International Organization for Standardization.
11. Risk is likelihood times severity.
12. Eliminating the hazard is the strongest control.
13. Consequentialism.
14. Check the facts, document, and use internal channels first.
15. Both were identified in the investigations.
16. The O-ring seal.
17. Notes are informative, not requirements.
18. The GPL requires derivative works to be released under the same licence.
19. A gift from a bidder could influence your judgement.
20. 100 × 8 = 800 Mb/s.

### Section B

**B1.** (a) "The technician observed large oscillations in the output voltage." (Better: add the amplitude: "...oscillations of 2 V peak to peak.") (b) "If the battery voltage falls below the minimum threshold, the system shuts down." (c) "The new motor is 15 percent more efficient: 92 percent versus 80 percent." (any number-based rewrite; note that the original is vague). (d) "We tested at 20 °C and measured 3.3 V." (units and clear actor). (1 mark for fixing padding or voice, 1.5 for precision.)

**B2.** Model requirements:
1. **Portability:** "The station shall have a mass not exceeding 2.0 kg and fit within a 40 × 25 × 15 cm case." Test: measure mass and dimensions.
2. **Speed (response):** "The station shall update displayed temperature, humidity and wind speed at least once every 5 seconds." Test: log timestamps over 10 minutes.
3. **Battery life:** "The station shall operate for at least 30 days on one battery charge at 25 °C with a sampling interval of 1 minute." Test: run a discharge test (or accelerated test with calculated current).
4. **Accuracy:** "Temperature readings shall be accurate to ±0.5 °C over the range −10 °C to +50 °C." Test: compare with a calibrated reference in a thermal chamber.
5. **Environmental:** "The enclosure shall meet IP65 and operate in 0 to 95 percent relative humidity (non-condensing)." Test: IP65 water-jet test, humidity chamber.
(2 marks each: 1 for a measurable requirement with a number, unit and condition, 1 for a valid test. Deduct for compound or vague statements.)

**B3.**
(a) Issues: **public safety** (the shortened test may hide a failure that could harm users: overheating or fire); **honesty** (signing a report that implies the full test was done is deceptive); **loyalty and pressure** (the manager and deadline); **professional competence and responsibility** (the signature is a personal and professional assurance); **legal and regulatory** (misreporting certification tests can be fraud).
(b) **Option 1: sign as instructed.** Utilitarian: possible short-term benefit (meeting the deadline) but risk of serious harm and recall costs; deontological: violates the duty of honesty; the codes (NSPE canons 1, 3 and 5; IEEE: be honest and realistic in stating claims; hold the public's safety paramount) forbid it. **Option 2: refuse to sign, report the deviation, and propose completing the 72-hour test (or accept a documented, risk-assessed concession).** Consequences: a short delay and an unhappy manager, but protects people and the company; it respects honesty and rights; a person of integrity would choose this; it passes the publicity test. (2 marks per option with two lenses.)
(c) **Recommendation:** do not sign. Report that the report is inaccurate, request completing the full test or a documented, justified concession approved by the responsible safety authority, and escalate to quality or compliance if pressured. First two sentences: "I cannot sign the safety report as written because the 72-hour thermal soak was run for only 24 hours, and the report must state what was actually done. I propose either completing the full test (it will take three more days) or documenting the deviation with a risk assessment for approval by Quality." (1 mark recommendation, 1 mark message content, 1 mark tone.)

**B4.**
(a) Step 1: RPN = S × O × D. Capacitor short = 8 × 2 × 5 = **80**.
Step 2: fan failure = 5 × 6 × 2 = **60**.
Step 3: watchdog not working = 9 × 2 × 7 = **126**.
Step 4: ranking: **watchdog (126), capacitor short (80), fan failure (60)**.
(b) Priority: the watchdog failure first. It has the highest RPN and the highest severity (9), and it is hard to detect (D = 7). Actions: add a built-in self-test and a hardware watchdog with an independent timer that is verified at start-up; include a test for watchdog failure in production tests; add monitoring that reports the failure. For the capacitor short, add a fuse and derate the capacitor.
(c) "The unit shall shut down within 100 ms..." is **normative** (shall). "Designers should consider redundant sensors" is **normative recommendation** (should; strictly "normative but not mandatory"; accept "recommended" and note that it is not a requirement). "The shutdown time may be tested using a thermal chamber" is a **permission** (may; optional). "NOTE: Typical shutdown times are 50 ms." is **informative**. (Award 1 mark for correctly identifying shall as mandatory, 1 for should/may handling, 1 for the NOTE.)
