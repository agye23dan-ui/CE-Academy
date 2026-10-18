# Computer and Network Security: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 5 to 6 labs and problems, 1 review with the app's quizzes). Security is learned by doing: break your own lab systems, then fix and re-test them. Work only on machines and networks you own or have written permission to test.

## Textbooks
- William Stallings, *Cryptography and Network Security: Principles and Practice* (the standard text for this course).
- Ross Anderson, *Security Engineering* (free online; the best book on why systems fail).
- Jean-Philippe Aumasson, *Serious Cryptography* (clear modern treatment) and Dan Boneh and Victor Shoup, *A Graduate Course in Applied Cryptography* (free PDF).
- Dafydd Stuttard and Marcus Pinto, *The Web Application Hacker's Handbook*; Jon Erickson, *Hacking: The Art of Exploitation*.
- Bruce Schneier, *Applied Cryptography* (classic, for background) and Niels Ferguson, Schneier, Kohno, *Cryptography Engineering*.

## Free courses and labs
- Stanford Cryptography I (Dan Boneh, Coursera); MIT 6.858 Computer Systems Security (open lectures and labs).
- OWASP Top 10, OWASP WebGoat and Juice Shop (deliberately vulnerable apps to run locally); PortSwigger Web Security Academy (free labs).
- CryptoPals challenges (cryptopals.com) for attacks on real crypto constructions.
- PicoCTF and OverTheWire Bandit for beginner capture-the-flag practice; TryHackMe and Hack The Box for guided labs.
- Wireshark and the Wireshark sample captures; NIST publications (SP 800-63 authentication, SP 800-57 key management).

## Tools to install in a lab VM
Python (cryptography, hashlib, pwntools), OpenSSL, Wireshark, nmap, Burp Suite Community, John the Ripper or hashcat (on your own test hashes), Docker for vulnerable targets. Keep the lab on an isolated host-only network.

## Week by week

**Week 1: Security fundamentals.** CIA triad, assets, threats and risk, principles (least privilege, defence in depth, Kerckhoffs). Lab: compute an ALE; write a one-page threat model with STRIDE for an app you use.

**Week 2: Classical ciphers and number theory.** Caesar, affine, Vigenère, one-time pad, frequency analysis, modular inverses, extended Euclid. Lab: write Python to break a Vigenère cipher using the index of coincidence.

**Week 3: Symmetric cryptography.** AES, block versus stream, modes (ECB, CBC, CTR, GCM), padding, nonces. Lab: encrypt an image in ECB and CBC and compare; tamper with a GCM ciphertext.

**Week 4: Hashes, MACs and passwords.** SHA-2/3, birthday bound, HMAC, length extension, salting, Argon2/bcrypt/PBKDF2. Lab: reproduce the HMAC and PBKDF2 test vectors; measure hash cost.

**Week 5: Public-key cryptography.** RSA, key generation, padding, Diffie-Hellman, elliptic curves, signatures. Lab: implement toy RSA and DH with `pow(a, b, n)`; explain why small exponents are dangerous.

**Week 6: Authentication and key management.** Passwords, MFA, HOTP/TOTP, FIDO2, sessions, Kerberos overview, key storage and rotation. Lab: implement TOTP and check it against the RFC vectors.

**Week 7: Midterm revision.** Past questions on crypto, hash and password calculations. Lab: a mini-project, "design a secure messaging protocol", reviewed for flaws by a classmate.

**Week 8: Access control and operating-system security.** DAC, MAC, RBAC, Bell-LaPadula, Biba, Unix permissions, sandboxing, containers. Lab: set up SELinux or AppArmor profile; apply least privilege to a service.

**Week 9: Software security.** Buffer overflows, integer bugs, format strings, mitigations (canaries, DEP, ASLR), memory-safe languages, fuzzing. Lab: analyze a vulnerable C program in a VM, then fix it and re-run with sanitizers.

**Week 10: Web security.** SQL injection, XSS, CSRF, broken access control, SSRF, secure cookies, CSP. Lab: exploit and then patch an intentionally vulnerable app (WebGoat or Juice Shop).

**Week 11: Network attacks and defences.** ARP/DNS/BGP attacks, SYN floods, DDoS and amplification, scanning, firewalls, IDS/IPS, segmentation. Lab: capture traffic with Wireshark; write firewall rules in iptables/nftables for a DMZ.

**Week 12: Secure protocols.** TLS 1.3 handshake, certificates and PKI, HSTS, SSH, IPsec, WireGuard, VPNs, Wi-Fi security. Lab: inspect a TLS handshake in Wireshark; configure a server with a modern TLS profile and test it.

**Week 13: Operations, malware and response.** Malware families, EDR, logging and SIEM, incident response, forensics and chain of custody, backups, zero trust. Lab: run a tabletop ransomware exercise and write the incident report.

**Week 14: Privacy, law, ethics and project.** Disclosure, GDPR-style obligations, penetration-test scope and permission, post-quantum overview. Final project: secure design review of a small system with threat model, controls and test results.

## Assessment pattern used in this course
Three assignments (cryptography mathematics; applied cryptography, software and network attacks; protocols, access control, risk and response), a class test, and a three-hour final. Practise by redoing every worked number in the notes with `pow()`, `hashlib`, `hmac` and the `cryptography` library.

## Study tips
- Never invent your own cryptography; learn why standard constructions look the way they do, then use vetted libraries.
- For every attack you study, write down the root cause and the one change that prevents it.
- Practise modular arithmetic by hand: `pow(a, b, n)` checks your work.
- Keep a lab notebook with scope, authorization, commands, findings and fixes.
- Read one security advisory or post-mortem a week; real incidents teach more than synthetic ones.
