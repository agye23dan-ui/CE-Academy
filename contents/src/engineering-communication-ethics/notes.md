# Engineering Communication and Ethics: Complete Lecture Notes

Engineers are paid to design, build and decide, but almost everything they do reaches other people through words, diagrams and numbers: reports, specifications, emails, code comments, presentations. Failures of communication and failures of ethics are the root cause of many engineering disasters. This course gives you a working method for each.

## Part 1. Technical Communication

## Chapter 1. Principles of Technical Writing

### 1.1 Audience, purpose, context
Before writing, answer five questions:
1. **Who** will read this (manager, client, fellow engineer, regulator, the public)? What do they already know?
2. **Why** are they reading (to decide, to act, to learn, to verify)?
3. **What** is the single main message (the "bottom line up front")?
4. **How** will they use it (skim, search, study, act on it immediately)?
5. **What** form is expected (memo, report, email, standard, README)?
A good technical document lets a busy reader find the answer in 30 seconds and still supports a careful reader who checks the details.

### 1.2 The writing process
Plan (audience, purpose, outline) → draft (get ideas down, do not polish) → revise (structure, content, completeness) → edit (sentences, clarity, consistency) → proofread (spelling, units, numbers, references). Leave time between drafting and revising. Revise from the top down: structure first, sentences last.

### 1.3 Style rules that matter
- **Be concise and concrete.** Prefer "The motor overheated at 85 °C" to "Thermal issues were encountered."
- **Use active voice** when the actor matters: "The controller sends a reset" rather than "A reset is sent." Passive voice is acceptable when the actor is unimportant or unknown.
- **One idea per sentence, one topic per paragraph.** Start paragraphs with a topic sentence. Aim for sentences of 15 to 25 words on average.
- **Use precise terms and keep them consistent.** Do not alternate between "voltage", "potential" and "level" for the same quantity. Define abbreviations and symbols at first use.
- **Avoid vague quantifiers** ("very", "several", "fast"). Give numbers with units and tolerances: "response time < 50 ms (95th percentile)".
- **Avoid noun stacks and jargon** that the reader may not share. "Data link layer retransmission timeout parameter" becomes "the timeout before the data link layer retransmits."
- **Parallel structure** in lists and headings. **Concrete verbs** instead of "make", "do", "perform".
- **Cut redundancy**: "in order to" → "to"; "due to the fact that" → "because"; "at this point in time" → "now".

### 1.4 Numbers, units and symbols
- Use SI units with a space between number and unit (5.0 V, 20 kHz); symbols for quantities in italics, units upright.
- Report significant figures consistent with the precision of the data; state uncertainty (3.30 ± 0.05 V).
- Be careful with orders of magnitude and prefixes: mA versus MA, mb versus Mb, MB versus Mb (megabyte versus megabit), kΩ.
- Define every symbol in an equation. Number important equations and refer to them in the text.

### 1.5 Visuals: figures, tables, equations
- Each figure or table must be **referred to in the text**, numbered, and have a caption (figure captions below the figure, table captions above the table in most styles).
- A graph needs labelled axes with units, readable fonts, distinguishable markers (also in greyscale), a legend if more than one series, and error bars where relevant. Do not use 3D effects or truncated axes that mislead.
- Use a table for exact values, a graph for trends and comparisons, a diagram (block diagram, schematic, flowchart, UML) for structure.
- Block diagram: label every block and signal, show direction of flow, group by function.
- Make visuals self-explanatory enough that a reader can understand them with the caption alone.

## Chapter 2. Engineering Documents

### 2.1 The IMRaD structure for reports and papers
- **Title** (specific and informative), **Abstract** (150 to 250 words: background, objective, method, main results with numbers, conclusion), **Introduction** (problem, context, objective), **Method** (enough detail to reproduce), **Results** (what you found, with figures and tables), **Discussion** (what it means, limitations, comparison with expectations or literature), **Conclusion** (answers the objective; future work), **References**, **Appendices**.
- An **executive summary** differs from an abstract: it is written for decision makers, stresses findings, costs, risks and recommendations, and stands alone on one page.

### 2.2 Laboratory and design reports
A lab report states the objective, theory (briefly), apparatus, procedure, raw data, analysis (sample calculations, uncertainty, graphs), discussion (compare with theory, list error sources and their effect) and conclusions. A **design report** adds requirements, constraints, alternatives considered with a decision matrix, the chosen design with justification, test results against requirements, and risks.

### 2.3 Proposals, specifications and requirements
- A **proposal** persuades: problem, proposed solution, benefits, plan and schedule, budget, qualifications, risks.
- A **requirements specification** states what the system shall do. Good requirements are **necessary, unambiguous, measurable, feasible, testable and traceable**. Use "shall" for mandatory statements: "The system shall respond to a valid request within 200 ms." Avoid "fast", "user-friendly", "etc." Distinguish functional requirements (what) from non-functional (performance, safety, usability, reliability).
- A **test plan** links each requirement to a test with pass/fail criteria.

### 2.4 Memos, emails and meeting minutes
- **Memo or email:** a clear subject line, the main point in the first two sentences, then supporting details, action items with owners and dates, and a polite close. One topic per email.
- **Minutes:** date, attendees, decisions, actions (who, what, by when).
- Tone: professional, direct, respectful; never write anything you would not want read aloud in front of a client.

### 2.5 Software and technical documentation
- A **README** explains what the project is, how to install and run it, an example, how to contribute and the license.
- **API documentation** states each function's purpose, parameters, return values, errors and an example. Comments explain **why**, not what.
- Use version control for documents too; docs-as-code (Markdown, LaTeX) keeps text and history together.
- A good **user manual** is task-oriented (steps, screenshots, warnings), tested on a real beginner.

### 2.6 Résumés and cover letters
One page for early career: contact details, education, projects (with outcomes and numbers), skills, experience. Tailor to the role. Use strong verbs ("designed", "reduced", "implemented") and quantify results ("cut latency by 35 percent").

## Chapter 3. Citing Sources, Plagiarism and Integrity in Writing

### 3.1 Why and how to cite
Cite to give credit, let readers verify, and show the evidence behind your claims. Cite when you use another person's words, ideas, data, figures, code or designs.
**IEEE style** (common in engineering): numbered references in square brackets in order of first appearance, e.g. "as shown in [2]". Reference list entries:
- Journal: [1] A. Author, B. Author, "Title of article," *Journal Abbrev.*, vol. 12, no. 3, pp. 100-110, Mar. 2021.
- Book: [2] A. Author, *Title of Book*, 3rd ed. City, Country: Publisher, 2019.
- Standard: [3] *IEEE Standard for Ethernet*, IEEE Std 802.3-2022, 2022.
- Web page: [4] Organization, "Title of page," Site name. URL (accessed Mon. DD, YYYY).
Other styles (APA, Harvard) use author-date citations. Be consistent within a document.

### 3.2 Quoting, paraphrasing, summarising
- **Direct quotation:** in quotation marks with a citation; use sparingly.
- **Paraphrase:** restate in your own words and structure, with citation. Changing a few words is still plagiarism.
- **Summary:** a condensed account of the main points, with citation.
- Common knowledge need not be cited, but when in doubt cite.

### 3.3 Plagiarism and academic integrity
Plagiarism is presenting someone else's work as your own. It includes copying text, code or figures without credit, self-plagiarism (reusing your earlier submitted work without permission), fabricating or falsifying data, and unauthorised collaboration. In engineering, falsified data can kill people, so integrity is a safety issue as well as an academic one. Using AI tools: follow the course or employer policy, disclose use where required, verify every claim, and remember you are accountable for the result.

### 3.4 Copyright, licences and attribution
Copyright arises automatically for original works. Open-source licences: **permissive** (MIT, BSD, Apache 2.0: use freely with attribution) versus **copyleft** (GPL: derived works must be released under the same licence). Creative Commons licences describe reuse of text and images. Check the licence before you reuse code, data or images, and keep attributions.

## Chapter 4. Oral and Visual Communication

### 4.1 Presentations
- Structure: tell them what the problem is, why it matters, what you did, what you found, what to do next. One message per slide, headline sentences as slide titles.
- **Slides:** minimal text (no paragraphs), large fonts (at least 24 pt), clear figures, consistent layout, and a final summary slide. Rehearse with a timer; allow about one to two minutes per slide.
- **Delivery:** face the audience, speak slowly, avoid reading the slide, explain each figure (axes first, then the message). Prepare for questions; it is acceptable to say "I do not know, I will check and follow up."
- Poster: a title, three to five main panels, large figures, readable from 1.5 m.

### 4.2 Meetings and teamwork
Set an agenda and goals, assign roles (chair, scribe), record decisions and actions, share the notes promptly. In teams, agree on responsibilities in writing, use version control and an issue tracker, give feedback on work (not on the person), and resolve conflicts early using interests rather than positions. Tuckman's stages: forming, storming, norming, performing, adjourning.

### 4.3 Cross-cultural and accessible communication
Use plain English for non-native readers; avoid idioms and ambiguous abbreviations. Give dates in an unambiguous format (2026-03-14), specify time zones. Accessible documents have alt text for images, sufficient colour contrast, no reliance on colour alone, and headings for screen readers.

## Part 2. Standards

## Chapter 5. Engineering Standards

### 5.1 What a standard is and why it matters
A **standard** is a document, agreed by consensus and approved by a recognised body, that provides rules, guidelines or characteristics for activities or their results, to achieve an optimum degree of order. Benefits: **interoperability** (USB, Wi-Fi, Ethernet), **safety**, **quality**, **economies of scale**, **market access**, and **legal defence** (compliance shows due care). A **code** (for example a building or electrical code) is a standard adopted into law. A **regulation** is legally binding. De facto standards arise from market dominance; **de jure** standards are formally approved.

### 5.2 Who writes standards
- **ISO** (International Organization for Standardization) and **IEC** (International Electrotechnical Commission): global; **ITU** for telecommunications.
- **IEEE** and its Standards Association: electrical, electronic, computing and communications standards (for example IEEE 802.3 Ethernet, IEEE 802.11 Wi-Fi, IEEE 754 floating point).
- **IETF** publishes Internet standards as RFCs (RFC 791 IPv4, RFC 9293 TCP).
- **ANSI** coordinates the US system; **BSI** (UK), **DIN** (Germany), **JIS** (Japan), **SANS/SABS** (South Africa), **GSA** (Ghana) and similar national bodies; **CEN/CENELEC** in Europe; **ASTM** for materials; **UL** for product safety; **NFPA** (NFPA 70 is the US National Electrical Code).

### 5.3 Examples you should know
- **ISO 9001**: quality management systems. **ISO/IEC 27001**: information security management. **ISO 14001**: environmental management.
- **IEC 61508**: functional safety of electrical, electronic and programmable electronic systems (the parent of sector standards). **ISO 26262**: functional safety of road vehicles (ASIL levels A to D). **DO-178C**: software in airborne systems. **IEC 62304**: medical device software lifecycle. **IEC 60601**: safety of medical electrical equipment.
- **IEC 61000**: electromagnetic compatibility. **FCC Part 15** (US) and **CE marking** (EU): conformity requirements for electronic products. **RoHS** limits hazardous substances in electronics. **WEEE**: electronic waste.
- **IEEE 754**: floating-point arithmetic; **POSIX**: operating system interfaces; **Unicode**: text.
- **ISO/IEC/IEEE 29148**: requirements engineering; **ISO/IEC 25010**: software quality model.

### 5.4 Reading and applying a standard
1. Identify the scope and applicability (does it cover your product and market?).
2. Distinguish **normative** clauses (mandatory, "shall") from **informative** ones ("should", "may", notes, annexes).
3. Note the edition and date; standards are revised. Cite the exact edition.
4. Trace each requirement to a design decision and a test; keep a compliance matrix with evidence.
5. If you deviate, document the justification and the risk assessment. Do not claim compliance you have not verified.
Standards cost money and are copyrighted; use library or institutional access, and do not share copies illegally.

### 5.5 Standards, safety and risk
**Risk = probability (likelihood) × severity (consequence).** A risk matrix classifies hazards as low, medium or high. The standard approach (ALARP: as low as reasonably practicable) uses a hierarchy of controls: (1) eliminate the hazard, (2) substitute, (3) engineering controls (interlocks, redundancy, fail-safe design), (4) administrative controls (procedures, training, warnings), (5) personal protective equipment. Warnings and manuals are the weakest control. **Safety integrity levels** (SIL in IEC 61508, ASIL in ISO 26262) set how rigorous development and verification must be as risk rises. **Hazard analysis methods**: FMEA (failure modes and effects analysis), fault tree analysis, HAZOP, STPA.

## Part 3. Professional Ethics

## Chapter 6. Foundations of Engineering Ethics

### 6.1 Ethics, law, and professionalism
**Ethics** is the study of what we ought to do; **law** is what we must do; **professionalism** includes competence, honesty, accountability, and service to society. Something can be legal and unethical (selling a product known to be hazardous in a market with weak regulation) or illegal yet defensible (rare, and requires serious justification). Engineers hold a special position: the public relies on their expertise and cannot check it, so the **public's safety, health and welfare come first**.

### 6.2 Ethical theories
- **Utilitarianism (consequentialism):** choose the action that produces the greatest good for the greatest number. Tools: cost-benefit analysis, risk-benefit analysis. Weakness: can justify harming a minority; hard to measure and value outcomes.
- **Deontology (duty ethics, Kant):** some duties and rules must be respected regardless of outcomes (do not lie, respect persons as ends and not merely means). Weakness: rules can conflict.
- **Rights theories:** people have rights (safety, privacy, informed consent) that limit what can be done to them.
- **Virtue ethics (Aristotle):** ask what a person of good character (honest, courageous, fair, prudent) would do.
- **Justice and fairness (Rawls):** consider the least advantaged; ask what rules you would accept without knowing your own position.
- **Ethics of care:** attend to relationships and vulnerability.
Use several lenses; where they agree, the answer is strong; where they disagree, reason carefully.

### 6.3 Professional codes of ethics
- **IEEE Code of Ethics:** members commit to hold paramount the safety, health and welfare of the public; to avoid real or perceived conflicts of interest; to be honest and realistic in stating claims and estimates; to reject bribery; to improve the understanding of technology and its consequences; to maintain and improve technical competence and undertake tasks only if qualified; to seek and give honest criticism and credit others' contributions; to treat all persons fairly and without discrimination; to avoid injuring others, their property, reputation or employment; and to support colleagues in following the code.
- **NSPE Code:** six **Fundamental Canons**: (1) hold paramount the safety, health and welfare of the public; (2) perform services only in areas of competence; (3) issue public statements only in an objective and truthful manner; (4) act for each employer or client as faithful agents or trustees; (5) avoid deceptive acts; (6) conduct themselves honourably, responsibly, ethically and lawfully so as to enhance the honour, reputation and usefulness of the profession.
- **ACM Code of Ethics (2018):** contribute to society and human well-being; avoid harm; be honest and trustworthy; be fair and take action not to discriminate; respect the work required to produce new ideas, inventions and creative works; respect privacy; honour confidentiality; plus professional responsibilities (high quality, competence, laws, review) and leadership principles.
Codes are not algorithms: they give priorities and reasons, and engineers must still use judgement. Where codes conflict with an employer's instructions, the public interest takes precedence.

### 6.4 A method for ethical decision making
1. **State the problem** and the facts (what is known, unknown, and who is affected).
2. **Identify stakeholders** and their interests and rights.
3. **List the ethical issues** and relevant duties, codes, laws and standards.
4. **Generate options**, including creative middle ways.
5. **Evaluate each option** with several lenses (consequences, duties, rights, character, fairness) and the "tests": the **publicity test** (would I be comfortable if this were on the front page?), the **role-model test**, the **reversibility test** (would I accept this if I were the affected party?).
6. **Decide** and plan the action, including who must be told and how to document it.
7. **Review** the outcome and learn from it.
Document facts and decisions in writing at the time.

## Chapter 7. Responsibilities and Dilemmas

### 7.1 Safety and risk
Engineers have a duty to design for safety, to estimate risks honestly, and to **inform clients and the public** of dangers. Risk acceptability depends on voluntariness, control, immediacy, and severity of consequences; the public tends to accept voluntary risks (driving) more readily than imposed ones (a nearby chemical plant). **Informed consent** requires that affected people receive the relevant information in understandable form. A **precautionary approach** favours caution when severe or irreversible harm is possible and evidence is incomplete.

### 7.2 Honesty, data and conflicts of interest
- Do not fabricate, falsify or selectively report data. Report negative results. Honest error is correctable; deception is not.
- **Conflict of interest:** a situation in which professional judgement might be compromised by a personal interest (gifts, financial stakes, family ties). Disclose it and, when necessary, step aside. Bribery and kickbacks are forbidden; modest gifts depend on the policy and context.
- **Confidentiality** protects employers' and clients' proprietary information, but it does not override the duty to protect the public from serious danger.

### 7.3 Whistleblowing and dissent
When a serious danger to the public is concealed or ignored, an engineer may have to report it. Steps: (1) check the facts and your own competence; (2) raise the concern internally and in writing with your supervisor, then up the chain; (3) use ethics hotlines or ombudspersons; (4) if the danger is serious and imminent and internal channels fail, report to the appropriate regulator or professional body; (5) keep careful records and seek advice (legal counsel, professional society). Many jurisdictions protect whistleblowers, but retaliation still occurs, so plan carefully. De George's conditions list seriousness of harm, reporting internally first, exhausting internal channels, strong evidence, and reasonable chance of success.

### 7.4 Intellectual property
**Patents** protect inventions (novel, non-obvious, useful) for about 20 years in exchange for disclosure. **Copyright** protects expression (code, text, images), **trademarks** protect brands, **trade secrets** protect confidential business information. Employment contracts often assign inventions to the employer. Respect others' IP, check licences, and avoid disclosing secrets.

### 7.5 Privacy, security and data ethics
Collect only the data you need, protect it (encryption, access control), and be transparent about use. Laws such as the EU GDPR (consent, purpose limitation, data minimisation, right to erasure) and national data protection acts (for example Ghana's Data Protection Act, 2012) create duties. Security is an ethical duty: ship secure defaults, patch vulnerabilities, use **responsible disclosure** when you find a flaw in someone else's system.

### 7.6 Sustainability, society and emerging technologies
Consider the full life cycle: materials, energy use, e-waste, repairability, end-of-life recycling. Consider impacts on disadvantaged communities and the environment (the UN Sustainable Development Goals provide a framework). For AI and automated systems: **bias** in data and models, **transparency and explainability**, **accountability** (a human or an organisation must be answerable), **safety** and **human oversight**, and the right of people to contest automated decisions.

### 7.7 Professional licensing and competence
Many jurisdictions license engineers (Professional Engineer in the US, Chartered Engineer in the UK and Commonwealth, registered engineer with national bodies such as the Ghana Institution of Engineering). Licensure requires education, supervised experience, examination and adherence to a code of conduct. Practise only within your competence; continued professional development (CPD) is part of the duty.

## Chapter 8. Case Studies (what happened, what went wrong, lessons)

### 8.1 Therac-25 (1985 to 1987)
A computer-controlled radiation therapy machine produced by Atomic Energy of Canada Limited. At least six patients received massive radiation overdoses and several died. Causes: **software race conditions** (a fast operator editing the treatment settings could leave the machine in an unsafe state), **removal of the hardware interlocks** used on the earlier Therac-20 and reliance on software alone, reused software that was assumed safe, no independent code review, inadequate testing, cryptic error messages ("Malfunction 54") that operators learned to dismiss, and a slow response to early reports. Lessons: **defence in depth**; do not trust software alone for safety; test integrated systems; investigate every incident; a good safety culture listens to users.

### 8.2 Space Shuttle Challenger (28 January 1986)
The shuttle broke apart 73 seconds after launch when a joint seal (O-ring) in a solid rocket booster failed in unusually cold weather (about 2 °C at launch). Engineers at the contractor Morton Thiokol, including Roger Boisjoly, had warned about cold-temperature seal erosion and recommended against launching; management reversed the recommendation under schedule pressure. Seven crew members died. Lessons: **safety concerns must be heard and documented**; data should be presented clearly (the evidence of temperature dependence was in the flight records but not displayed convincingly); "normalisation of deviance" (accepting repeated anomalies as normal); the conflict between engineering and management judgement; whistleblowing and its personal costs.

### 8.3 Hyatt Regency walkway collapse (17 July 1981)
Two suspended walkways collapsed in a Kansas City hotel lobby, killing 114 people. A design change during construction (hanging the lower walkway from the upper one by separate rods instead of one continuous rod) doubled the load on the upper box-beam connections, which were barely adequate even in the original design. The change was approved by phone without a proper calculation check. The engineers lost their licences. Lessons: **review and verify design changes**; clear responsibility for approval; communication between designer and fabricator; do not assume that someone else checked.

### 8.4 Ariane 5 Flight 501 (4 June 1996)
The rocket veered off course and self-destructed about 37 seconds after launch (loss of about US$370 million of equipment). The inertial reference software, reused from Ariane 4, converted a 64-bit floating-point value of horizontal velocity to a 16-bit signed integer; the larger Ariane 5 trajectory produced a value that overflowed. The exception was not handled and both redundant units (running the same code) failed. Lessons: reuse requires re-verification in the new context; **redundancy of identical software does not protect against a design error**; test with realistic inputs; handle exceptions deliberately.

### 8.5 Boeing 737 MAX (2018 and 2019)
Two accidents (Lion Air Flight 610 in October 2018 with 189 deaths and Ethiopian Airlines Flight 302 in March 2019 with 157 deaths) were linked to the **MCAS** flight control software, which relied on a single angle-of-attack sensor and could repeatedly push the nose down. Investigations found problems with design assumptions about pilot response, the decision to depend on one sensor, limited disclosure to pilots and regulators of how MCAS worked, and organisational pressure to avoid costly pilot retraining. The aircraft was grounded worldwide for about 20 months. Lessons: **safety-critical functions need redundancy and honest hazard analysis**; transparency with regulators and users; schedule and commercial pressure must not override safety; the role of independent oversight.

### 8.6 Volkswagen emissions scandal (2015)
Volkswagen installed software "defeat devices" in about 11 million diesel vehicles worldwide that detected emissions tests and reduced pollutant output only during testing, so that on the road the cars emitted far more nitrogen oxides than allowed. The US EPA issued a notice of violation in September 2015. Executives and engineers faced criminal charges and the company paid very large penalties. Lessons: **engineers cannot hide behind "following orders"**; deliberate deception violates every professional code; the environmental and health costs fall on the public; speak up early.

### 8.7 Uber self-driving vehicle fatality (18 March 2018)
A test vehicle operating in automated mode in Tempe, Arizona struck and killed a pedestrian, Elaine Herzberg. The US National Transportation Safety Board found that the system failed to classify and predict the pedestrian's path correctly, that automatic emergency braking was disabled in autonomous mode, that the human safety driver was distracted, and that the company's safety culture and oversight were inadequate. Lessons: **testing on public roads imposes risk on non-consenting people**; human oversight must be realistic (automation complacency); safety cases and organisational safety culture matter.

## Chapter 9. Common Mistakes Checklist
1. Writing for yourself instead of the reader; burying the main point.
2. Vague, unmeasurable statements and requirements.
3. Missing units, undefined symbols, unlabelled axes, figures not referred to in the text.
4. Close paraphrase without citation; citing a source but not marking quoted text.
5. Treating a code of ethics as a rulebook to be matched mechanically rather than a guide to reasoning.
6. Assuming that legality equals ethics, or that "everyone else does it" is an excuse.
7. Reporting a problem verbally only, with no written record.
8. Claiming compliance with a standard without evidence, or citing an outdated edition.
