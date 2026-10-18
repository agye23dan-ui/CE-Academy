# Computer and Network Security: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

Useful values: log₂ 62 = 5.954, log₂ 95 = 6.570, log₂ 7776 = 12.92, √(2 ln 2) = 1.177, 2¹⁰ = 1024.

## Section A: Multiple Choice (20 marks)

**1.** A control that reduces the likelihood of an attack but does not remove it is an example of
A) risk mitigation  B) risk avoidance  C) risk transfer  D) risk acceptance

**2.** Which of these gives perfect secrecy when used correctly?
A) the one-time pad  B) AES-256 in ECB mode  C) RSA-2048  D) SHA-256

**3.** Reusing a nonce with the same key in AES-GCM or CTR mode
A) is harmless  B) leaks the XOR of plaintexts and can allow forgeries  C) only affects padding  D) only slows decryption

**4.** Padding oracle attacks are most associated with
A) digital signatures  B) hash functions  C) unauthenticated CBC decryption  D) AEAD modes

**5.** MD5 and SHA-1 should not be used for security because
A) practical collisions can be produced  B) they need a key  C) they are too slow  D) they have fixed output

**6.** The length-extension weakness affects
A) RSA-PSS  B) AES-GCM  C) naive H(key ‖ message) with Merkle-Damgård hashes  D) HMAC-SHA256

**7.** A salt in password storage mainly
A) shortens the hash  B) makes the hash reversible  C) speeds up login  D) defeats precomputed tables and prevents equal passwords hashing alike

**8.** Textbook (unpadded) RSA is insecure because it is
A) deterministic and malleable  B) limited to 8-bit messages  C) symmetric  D) too fast

**9.** A 256-bit elliptic-curve key is comparable in strength to about
A) 512-bit RSA  B) 3072-bit RSA  C) 64-bit AES  D) 256-bit RSA

**10.** Against a large quantum computer, which statement is true?
A) RSA and Diffie-Hellman are broken by Shor's algorithm  B) AES-256 is completely broken  C) one-time pads become insecure  D) SHA-256 is completely broken

**11.** In a TLS certificate check, the host name is matched against
A) the Subject Alternative Name  B) the signature algorithm  C) the serial number  D) the validity dates only

**12.** HttpOnly on a cookie
A) blocks all cross-site requests  B) encrypts the cookie  C) forces HTTPS  D) prevents JavaScript from reading it

**13.** SameSite cookies mainly help against
A) password guessing  B) buffer overflows  C) SQL injection  D) cross-site request forgery

**14.** Stack canaries and ASLR are defences against
A) memory-corruption exploits such as buffer overflows  B) DDoS  C) phishing  D) SQL injection

**15.** BCP 38 ingress filtering primarily helps to stop
A) XSS  B) spoofed-source traffic used in reflection and amplification attacks  C) weak passwords  D) cookie theft

**16.** ARP spoofing is mitigated by
A) hashing  B) longer passwords  C) dynamic ARP inspection and DHCP snooping  D) SYN cookies

**17.** Role-based access control assigns permissions to
A) IP addresses  B) hash values  C) individual files only  D) roles that are then given to users

**18.** The Biba model enforces
A) availability  B) integrity with no read down and no write up  C) confidentiality only  D) no read up

**19.** The first step of the incident response lifecycle after preparation is
A) recovery  B) detection and analysis  C) eradication  D) lessons learned

**20.** Responsible (coordinated) disclosure means
A) selling it to the highest bidder  B) keeping it secret forever  C) reporting it to the vendor and allowing time to fix before publishing  D) publishing a vulnerability immediately

## Section B: Short Questions (40 marks)

**B1. Classical ciphers (5 marks)** (a) Decrypt WKLVLVDWHVW, a Caesar cipher with shift 3 [2]. (b) Encrypt CRYPTOGRAPHY with the Vigenère key CODE [3].

**B2. Birthday bound (5 marks)** (a) After about how many hashes is a collision 50 percent likely for a 32-bit hash? [2] (b) For 10,000 hashes of a 32-bit value, estimate the collision probability using k²/(2N) [3].

**B3. Encryption lengths (5 marks)** A 45-byte message is encrypted (a) with AES-CBC and PKCS#7 padding (give the padded length and the number of padding bytes) [3], (b) with AES-GCM and a 16-byte tag [2].

**B4. One-time codes (5 marks)** For the RFC test key the HOTP codes for counters 0, 1, 2, 3 are 755224, 287082, 359152, 969429. With a 30-second TOTP step give the code valid at Unix time (a) 15 s, (b) 59 s, (c) 100 s. Why do real systems accept codes from the adjacent time-step too?

**B5. SQL injection (5 marks)** A query is built as `"SELECT * FROM acct WHERE id=" + id`, with a numeric id. (a) What is returned if id is `7 OR 1=1`? [2] (b) Explain how to fix it, and why escaping quotes alone is not enough here [3].

**B6. SYN flood (5 marks)** A server's backlog holds 2,048 half-open connections that time out after 30 s. What attack rate keeps it full? Explain how SYN cookies help.

**B7. Key counts (5 marks)** How many distinct pairwise secret keys do 50 parties need if all communicate pairwise using only symmetric keys? How many key pairs with public-key cryptography? What additional infrastructure does the public-key approach need?

**B8. Firewall policy (5 marks)** Explain default-deny, why a stateful firewall is better than a stateless packet filter for return traffic, and why a DMZ is used.

## Section C: Long Questions (answer any four, 40 marks)

**C1. RSA (10 marks)** Let p = 5, q = 11 and e = 3. (a) Compute n, φ(n) and d [3]. (b) Encrypt m = 20 and decrypt the result [3]. (c) Sign m = 6 and verify (the signature is 41) [2]. (d) Show why the message m = 2 is insecure with this e and explain what padding adds [2].

**C2. Diffie-Hellman and authentication (10 marks)** Let p = 31 and g = 3. Alice chooses a = 7 and Bob b = 13. (a) Compute A, B and the shared key [4]. (b) Mallory chooses the exponent 4 and substitutes M = g⁴ mod p in both directions. Find the keys Alice and Bob each end up with and show that Mallory can compute both [4]. (c) Describe two ways to authenticate the exchange [2].

**C3. TLS and PKI (10 marks)** (a) Explain how the server is authenticated in TLS 1.3 using a certificate [3]. (b) What does a browser check, and what could go wrong if a CA is compromised? Name two mitigations [4]. (c) Explain forward secrecy and why recording today's traffic and stealing the server key later does not reveal it [3].

**C4. Defending a small company network (10 marks)** A company has a public website, an internal file server, employee laptops and remote workers. (a) Draw the zones and say where the firewalls sit [3]. (b) Propose five technical controls (with the threat each addresses) [5]. (c) Name two organizational controls [2].

**C5. Risk decision and incident (10 marks)** An asset is worth $300,000 with exposure factor 0.5 and an annual occurrence rate of 0.4. Control X costs $20,000 per year and reduces the rate to 0.1; control Y costs $9,000 per year and reduces it to 0.3. (a) Compute the ALE before and after each control and the net benefit of each [5]. (b) Recommend one and name a non-quantitative factor that could change the decision [2]. (c) A laptop is found infected with ransomware: list the first three response actions in order and justify the order [3].

## Answer key and mark scheme

### Section A
1. A 2. A 3. B 4. C 5. A 6. C 7. D 8. A 9. B 10. A 11. A 12. D 13. D 14. A 15. B 16. C 17. D 18. B 19. B 20. C

### Section B

**B1.** (a) Shift each letter back by 3: W→T, K→H, L→I, V→S, ... giving **THISISATEST** ("THIS IS A TEST") [2]. (b) The key CODE gives shifts 2, 14, 3, 4 repeating: C+2 = E, R+14 = F, Y+3 = B, P+4 = T, T+2 = V, O+14 = C, G+3 = J, R+4 = V, A+2 = C, P+14 = D, H+3 = K, Y+4 = C. Ciphertext **EFBTVCJVCDKC** [3].

**B2.** (a) √(2 ln 2 × 2³²) = 1.177 × 2¹⁶ = **about 77,000** (77,163) [2]. (b) k²/(2N) = 10⁸/(2 × 4.295 × 10⁹) = **0.0116 (about 1.2 percent)** [3].

**B3.** (a) 45 mod 16 = 13, so padding = 16 - 13 = **3 bytes**, giving a padded length of **48 bytes** (plus 16 for the IV if it is sent with the message = 64) [3]. (b) 45 + 16 = **61 bytes** (plus the nonce) [2].

**B4.** The counter is ⌊t/30⌋. (a) t = 15 → counter 0 → **755224**. (b) t = 59 → counter 1 → **287082**. (c) t = 100 → counter 3 → **969429**. Clocks drift and users need time to type, so servers accept the previous and next window (a small tolerance), while preventing reuse of a code already accepted.

**B5.** (a) The query becomes `... WHERE id=7 OR 1=1`, which is always true: **every row** of the table is returned [2]. (b) Use parameterized queries and bind the id as an integer (reject non-numeric input). Escaping quotes does not help because a numeric context needs no quote characters: `7 OR 1=1` contains none [3].

**B6.** 2,048/30 = **68.3 SYN packets per second** keep the table full [2]. With SYN cookies the server encodes the connection parameters in the sequence number of its SYN-ACK and keeps **no state** until a valid final ACK returns, so spoofed SYNs cannot exhaust the backlog [3].

**B7.** Symmetric pairwise keys: n(n - 1)/2 = 50 × 49/2 = **1,225**. Public-key: **50 key pairs** (each party keeps a private key and publishes the public one) [3]. It needs a **PKI** (certificate authorities, certificates, revocation) to bind public keys to identities and prevent substitution [2].

**B8.** **Default-deny** blocks everything not explicitly allowed (fail-safe default) [2]. A **stateful** firewall records outgoing connections and automatically permits only the matching replies, so no wide-open inbound rules are needed; a stateless filter must allow broad return-port ranges [2]. A **DMZ** isolates public-facing servers in a separate zone so that if one is compromised the attacker still cannot reach the internal network directly [1].

### Section C

**C1.**
(a) n = 5 × 11 = **55**; φ = 4 × 10 = **40**; d = 3⁻¹ mod 40 = **27** (3 × 27 = 81 = 2 × 40 + 1) [3].
(b) c = 20³ mod 55 = 8000 mod 55 = **25**; decrypt 25²⁷ mod 55 = **20** [3].
(c) s = 6²⁷ mod 55 = **41**; verification 41³ mod 55 = 68,921 mod 55 = **6**, matching the message [2].
(d) 2³ = 8 < 55, so c = 8 and an attacker takes the integer cube root to get 2 with no key. Padding (OAEP) adds randomness and structure so that messages are never small numbers and equal plaintexts encrypt differently, and it blocks malleability attacks [2].

**C2.**
(a) A = 3⁷ mod 31 = **17**; B = 3¹³ mod 31 = **24**; K = B^a = 24⁷ mod 31 = **3** (and A^b = 17¹³ mod 31 = 3) [4].
(b) M = 3⁴ mod 31 = **19**. Alice receives M instead of B and computes M⁷ mod 31 = **7**; Mallory computes A⁴ mod 31 = 17⁴ mod 31 = **7**, so he knows Alice's key. Bob receives M instead of A and computes M¹³ mod 31 = **14**; Mallory computes B⁴ = 24⁴ mod 31 = **14**. Mallory decrypts and re-encrypts all messages; Alice and Bob share no key with each other [4].
(c) Digital signatures over the exchanged values using certified public keys (as in TLS); a pre-shared key or password-authenticated key exchange; comparing a short authentication string (safety number) out of band [2].

**C3.**
(a) The server sends its certificate chain (its public key bound to its host name, signed by a CA) and then a **CertificateVerify** signature over the handshake transcript made with the private key matching the certificate. The client verifies the chain to a trusted root and verifies the signature; this proves the server holds the private key [3].
(b) The browser checks the chain of signatures up to a trusted root, the validity period, the host name (SAN), key usage, and revocation status. A compromised or careless CA can issue a valid certificate for any domain, enabling an invisible man-in-the-middle. Mitigations: **Certificate Transparency** logs (mis-issuance is publicly auditable), **CAA** DNS records, certificate pinning or HSTS, short-lived certificates, removal of a CA from trust stores, monitoring of logs for unexpected certificates [4].
(c) Forward secrecy: session keys derive from ephemeral Diffie-Hellman values that are deleted after the session; the long-term key only signs. An attacker who recorded the traffic and later steals the server key can forge future handshakes but cannot recompute earlier session keys, because that would require the discarded ephemeral secrets (the discrete logarithm) [3].

**C4.**
(a) Internet → **edge firewall** → **DMZ** (public website, reverse proxy) → **internal firewall** → **internal LAN** (file server, laptops); remote workers connect through a VPN gateway or zero-trust access proxy into a restricted zone with MFA. Management and backup networks are separated [3].
(b) Examples (one mark each): segmentation and default-deny rules (limits lateral movement); TLS everywhere with valid certificates (eavesdropping and tampering); MFA for VPN, email and admin accounts (stolen passwords); patch management and vulnerability scanning (known exploits); endpoint protection/EDR and full-disk encryption on laptops (malware and device theft); centralized logging/SIEM with alerting (detection); email filtering and DNS filtering (phishing); offline immutable backups tested for restore (ransomware); WAF in front of the website (web attacks) [5].
(c) Security policy and awareness training (phishing simulations); incident response plan with roles and exercises; asset inventory and access reviews; vendor risk management [2].

**C5.**
(a) SLE = 300,000 × 0.5 = $150,000. ALE before = 150,000 × 0.4 = **$60,000**. With X: 150,000 × 0.1 = **$15,000**; net benefit = 60,000 - 15,000 - 20,000 = **$25,000**. With Y: 150,000 × 0.3 = **$45,000**; net benefit = 60,000 - 45,000 - 9,000 = **$6,000** [5].
(b) Choose **X** (the larger net benefit, $25,000 against $6,000). Non-quantitative factors: regulatory or contractual obligations, reputational damage not captured in the exposure factor, how well each control integrates, the possibility that the numbers (rates) are uncertain, combining controls [2].
(c) (1) **Isolate** the laptop from the network (unplug or disable Wi-Fi, but keep it powered if volatile evidence is needed) to stop spread and encryption of shares; (2) **identify scope and preserve evidence** (check for other infected hosts, note the ransom note, image the disk and hash it); (3) **revoke credentials** used on that machine and block indicators on the network. Containment comes first because every minute of connection lets the ransomware reach more systems; the analysis and eradication follow [3].
