# Computer and Network Security: Complete Lecture Notes

Prerequisites: networks, operating systems, discrete mathematics (modular arithmetic) and some programming. All hashes, ciphertexts, RSA/Diffie-Hellman numbers, one-time codes and injection demonstrations below were computed or run in Python (hashlib, hmac, the cryptography library, sqlite3). This course teaches defence: you attack systems only in labs you own or are authorized to test.

## Chapter 1. Security Fundamentals

### 1.1 Goals and terms
- **Confidentiality**: only authorized parties read the data. **Integrity**: data are not altered undetected. **Availability**: the service works when needed. Add **authenticity** (who sent it), **non-repudiation** (the sender cannot deny it) and **accountability** (actions are logged and attributable).
- **Asset**: what you protect. **Vulnerability**: a weakness. **Threat**: a potential cause of harm. **Attack**: a deliberate exploitation. **Risk** = likelihood × impact. A **control** (countermeasure) reduces risk.
- **Principles**: least privilege, defence in depth, fail-safe defaults (deny by default), economy of mechanism (keep it simple), complete mediation (check every access), open design (security must not depend on secret algorithms: **Kerckhoffs's principle**: only the key is secret), separation of duties, psychological acceptability, minimize the attack surface.

### 1.2 Threat modelling
Ask four questions: what are we building, what can go wrong, what will we do about it, did we do a good job? **STRIDE** classifies threats: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. Draw a data-flow diagram, mark trust boundaries (where data cross from less to more trusted), list threats per element, and rank them (for example by likelihood and impact or by a scoring system like DREAD or CVSS). Attack trees decompose a goal into sub-goals with AND/OR nodes and costs.

### 1.3 Quantitative risk
Single loss expectancy SLE = asset value × exposure factor. Annualized rate of occurrence ARO. **Annualized loss expectancy ALE = SLE × ARO**. Example: a $200,000 asset with 25 percent exposure has SLE = $50,000; with ARO = 0.3 per year, ALE = $15,000. A control costing $8,000 per year that lowers ARO to 0.05 reduces ALE to $2,500, so the net benefit is 15,000 - 2,500 - 8,000 = **$4,500 per year**: worth buying. Risk can be **mitigated, transferred (insurance), avoided or accepted**.

## Chapter 2. Classical Ciphers and Why They Fail

- **Caesar** shift cipher: C = (P + k) mod 26. HELLO with k = 3 gives KHOOR; ATTACK with k = 13 (ROT13) gives NGGNPX. Only 25 keys.
- **Affine** cipher: C = (aP + b) mod 26 with gcd(a, 26) = 1. With a = 5, b = 8: HOT (7, 14, 19) → (43 mod 26, 78 mod 26, 103 mod 26) = (17, 0, 25) = **RAZ**; CRYPTO → SPYFZA. Key space 12 × 26 = 312.
- **Vigenère**: add a repeating key. ATTACKATDAWN with key LEMON gives **LXFOPVEFRNHR**. It hides single-letter frequencies, but the Kasiski test and index of coincidence reveal the key length, then each position is a Caesar cipher.
- **One-time pad**: C = P ⊕ K with a truly random key as long as the message, used once, gives perfect secrecy (Shannon). For P = 10110010 and K = 01101100, C = 11011110; XOR again with K recovers P. **Key reuse is fatal**: if two messages use the same key then C₁ ⊕ C₂ = P₁ ⊕ P₂ (verified with "ATTACK AT DAWN" and "RETREAT AT TEN"), leaking structure that crib-dragging exploits. This "two-time pad" mistake also breaks stream ciphers when a nonce repeats.

## Chapter 3. Modern Symmetric Cryptography

### 3.1 Block ciphers
AES operates on 128-bit blocks with 128-, 192- or 256-bit keys (10, 12 or 14 rounds of SubBytes, ShiftRows, MixColumns and AddRoundKey). Test vector (FIPS-197): key 000102...0f and plaintext 00112233...ff give ciphertext 69c4e0d86a7b0430d8cdb78070b4c55a. DES (56-bit key) is obsolete, brute-forced in days since 1998; 3DES is deprecated. A secure 128-bit key cannot be exhausted: even 10¹² keys per second would need about 10¹⁹ years.

### 3.2 Modes of operation
- **ECB** encrypts each block independently: identical plaintext blocks give identical ciphertext blocks (we verified that "A"×16 repeated gives equal ciphertext blocks), leaking patterns (the famous encrypted penguin image). Never use ECB.
- **CBC**: Cᵢ = E(Pᵢ ⊕ Cᵢ₋₁) with a random IV; the same repeated blocks now encrypt differently. It needs padding and, unauthenticated, is vulnerable to padding-oracle attacks and bit-flipping.
- **CTR** turns the block cipher into a stream cipher using a counter; **GCM** adds authentication: **authenticated encryption with associated data (AEAD)**. A 14-byte message encrypted with AES-GCM becomes 14 + 16 = 30 bytes (the 16-byte tag). Flipping one bit makes decryption fail with an InvalidTag error (we confirmed it). Never reuse a (key, nonce) pair in GCM or CTR. With random 96-bit nonces, keep below about 2³² messages per key (collision probability about 2⁶⁴/2⁹⁶ ≈ 10⁻¹⁰).
- Rule: **encrypt-then-MAC or use an AEAD**. Encryption alone gives no integrity.

### 3.3 Key management
Generate keys with a cryptographically secure random generator (os.urandom, secrets), never with rand(). Rotate keys, separate them by purpose, protect them in hardware (HSM, TPM, secure enclave), and never hard-code them in source code or commit them to a repository.

## Chapter 4. Hashes, MACs and Key Derivation

### 4.1 Cryptographic hash functions
A hash h(m) maps any input to a fixed-length digest. Required: **preimage resistance** (given h, hard to find m), **second-preimage resistance**, **collision resistance**. Examples: SHA-256("abc") = ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad; SHA-256 of the empty string is e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855. **Avalanche**: changing "hello" to "hellp" flips 131 of the 256 output bits (about half). MD5 (128-bit) and SHA-1 (160-bit) have practical collision attacks and must not be used for security. Use SHA-256, SHA-3 or BLAKE2.

### 4.2 The birthday bound
For an n-bit hash, a collision is expected after about √(2 ln 2 · 2ⁿ) = 1.177 · 2^(n/2) tries. For n = 16: about 301; n = 32: 77,163; n = 64: 5.06 × 10⁹; n = 128: 2.2 × 10¹⁹. Hence a collision-resistant hash needs an output at least twice the target security level: 256 bits for 128-bit security. (Same arithmetic as 23 people sharing a birthday with probability 0.507.)

### 4.3 MACs
A **message authentication code** proves integrity and authenticity with a shared key. **HMAC**(K, m) = H((K ⊕ opad) ‖ H((K ⊕ ipad) ‖ m)). Test: HMAC-SHA256 with key "key" over "The quick brown fox jumps over the lazy dog" is f7bc83f430538424b13298e6aa6fb143ef4d59a14946175997479dbc2d1a3cd8. Plain H(key ‖ m) is vulnerable to length-extension attacks for Merkle-Damgård hashes (MD5, SHA-1, SHA-256), which is why HMAC exists. Compare MACs in constant time.

### 4.4 Passwords and key-derivation functions
Never store passwords in plaintext or with a fast hash. Store a **per-user random salt** and a slow, memory-hard hash: PBKDF2, bcrypt, scrypt or Argon2. Salts defeat precomputed rainbow tables and make identical passwords hash differently. PBKDF2-HMAC-SHA256 test: password "password", salt "salt", 1 iteration, 20 bytes → 120fb6cffcf8b32c43e7225256c4f837a86548c9 (2 iterations → ae4d0c95af6b46d32d0adff928f06dd02a303f8e). Raise iterations until one hash takes tens of milliseconds, slowing offline guessing.

**Password strength** is measured by entropy log₂(N) per symbol × length. 8 characters from 62 alphanumerics: 8 × 5.954 = **47.6 bits**; 8 from 95 printable ASCII: 52.6 bits; 12 alphanumerics: 71.5 bits; a 6-digit PIN: 19.9 bits; four random diceware words (7776 words): 4 × 12.92 = **51.7 bits**; six words from a 2048-word list: 66 bits. At 10¹⁰ guesses per second against a fast unsalted hash, 47.6 bits falls in about 0.13 days on average (half the space), 51.7 bits in 2.1 days, and 10 characters from 95 symbols (65.7 bits) in about 95 years on average (190 years to exhaust the whole space). Human-chosen passwords are far weaker than random ones; use a password manager and a long random passphrase.

## Chapter 5. Public-Key Cryptography

### 5.1 RSA
Choose primes p, q; n = pq; φ(n) = (p - 1)(q - 1); pick e with gcd(e, φ) = 1; d = e⁻¹ mod φ. Public key (n, e), private key d. Encryption c = mᵉ mod n; decryption m = cᵈ mod n. Correctness follows from Euler's theorem.

**Worked example 1.** p = 61, q = 53: n = 3233, φ = 3120, e = 17, d = 2753 (17 × 2753 = 46801 = 15 × 3120 + 1). For m = 65: c = 65¹⁷ mod 3233 = **2790**, and 2790²⁷⁵³ mod 3233 = 65.

**Worked example 2.** p = 11, q = 13: n = 143, φ = 120, e = 7, d = 103 (7 × 103 = 721 = 6 × 120 + 1). Encrypting m = 9 gives c = 9⁷ mod 143 = **48**; decrypting 48¹⁰³ mod 143 returns 9. A **signature** on m = 5 is s = 5¹⁰³ mod 143 = **125**; anyone verifies by computing 125⁷ mod 143 = 5.

Fast modular exponentiation uses square-and-multiply: the exponent 17 = 10001₂ takes 4 squarings and 1 multiplication. Real RSA uses 2048-bit or larger moduli (about 112-bit security), randomized padding (OAEP for encryption, PSS for signatures; "textbook" RSA is deterministic and malleable) and constant-time code. Never implement your own cryptography in production.

### 5.2 Diffie-Hellman key exchange
Public prime p and generator g. Alice picks a and sends A = gᵃ mod p, Bob picks b and sends B = gᵇ mod p; both compute K = gᵃᵇ mod p. **Example.** p = 23, g = 5, a = 6, b = 15: A = 5⁶ mod 23 = **8**, B = 5¹⁵ mod 23 = **19**, K = 19⁶ mod 23 = 8¹⁵ mod 23 = **2**. An eavesdropper sees p, g, A, B and must solve the discrete logarithm problem. Plain DH is vulnerable to a **man-in-the-middle** who runs separate exchanges with each party, so the exchange must be authenticated (signatures or certificates). Modern TLS uses ephemeral DH (ECDHE) to give **forward secrecy**: a later key compromise does not reveal past sessions.

### 5.3 Elliptic curves and digital signatures
Elliptic-curve cryptography gives the same security with much smaller keys: a 256-bit ECC key is about as strong as 3072-bit RSA. Signature schemes: RSA-PSS, ECDSA, EdDSA (Ed25519). A signature is computed on the hash of the message with the private key, providing integrity, authenticity and non-repudiation. ECDSA is catastrophic if the per-signature nonce is reused or predictable (private key recovery).

### 5.4 Post-quantum note
Shor's algorithm would break RSA, DH and ECC on a large quantum computer; Grover's algorithm only halves symmetric security (use AES-256). Standardized post-quantum schemes (ML-KEM/Kyber for key exchange, ML-DSA/Dilithium for signatures) are being deployed in hybrid mode.

## Chapter 6. Authentication and Access Control

### 6.1 Authentication factors
Something you know (password), have (token, phone, security key), are (biometric). **Multi-factor authentication** combines different types. Biometrics are not secret and cannot be changed, and they have false accept and false reject rates that trade off.

### 6.2 One-time passwords
**HOTP** (RFC 4226): take HMAC-SHA1(K, counter), apply dynamic truncation (the low 4 bits of the last byte give an offset, take 31 bits from there) and reduce modulo 10⁶. For the RFC test key "12345678901234567890" the first codes are 755224, 287082, 359152, 969429. **TOTP** (RFC 6238) uses counter = ⌊time/30⌋: at time 59 the counter is 1 and the 6-digit code is **287082** (8-digit: 94287082). Phishing-resistant options (FIDO2/WebAuthn passkeys) bind the credential to the website origin.

### 6.3 Session handling
After login a server issues a session token: random (128 bits or more), stored in an HttpOnly, Secure, SameSite cookie, rotated at login, expired on logout and timeouts.

### 6.4 Access control models
- **DAC** (owner decides; Unix permissions), **MAC** (system policy; Bell-LaPadula for confidentiality: no read up, no write down; Biba for integrity: no read down, no write up), **RBAC** (permissions attach to roles), **ABAC** (policy over attributes). Represent policy as an access-control matrix, stored as ACLs (per object) or capabilities (per subject).
- Authentication is "who are you", authorization is "what may you do". Enforce on the server for every request.

## Chapter 7. Software and Web Security

### 7.1 Memory-safety bugs
A **buffer overflow** writes beyond an array, overwriting adjacent data such as the saved return address on the stack; unsafe functions (gets, strcpy, sprintf) are the classic source. Defences: bounds-checked code or memory-safe languages (Rust, Go, Java), compiler stack canaries, non-executable stacks (NX/DEP), address space layout randomization (ASLR), control-flow integrity, fuzzing and sanitizers. **Integer overflows**, **use-after-free** and **format-string** bugs have similar effects.

### 7.2 Injection
When untrusted input is mixed into a command or query, the attacker changes its meaning. Take `SELECT * FROM users WHERE name='…' AND pw='…'` built by string concatenation. The name `x' OR '1'='1' --` produces `... name='x' OR '1'='1' --' AND pw='zzz'`, which returned all three rows in our test (the `--` comments out the rest). The shorter payload `x' OR '1'='1` returned nothing when the password was wrong, because AND binds more tightly than OR: the clause became `name='x' OR ('1'='1' AND pw='zzz')`. Attackers adapt (they add a comment marker or close the clause differently), which is why you fix the cause rather than filter particular strings. The name `alice'--` logs in as alice without a password. The **fix is parameterized queries** (prepared statements): the same malicious string passed as a parameter matched no rows. Also validate input by allow-list, use least-privilege database accounts, and avoid building shell commands from input (command injection).

### 7.3 Cross-site scripting and request forgery
**XSS**: untrusted data is rendered as HTML/JavaScript in another user's browser (stored, reflected, DOM-based). Defences: contextual output encoding (`<script>alert(1)</script>` becomes `&lt;script&gt;alert(1)&lt;/script&gt;`), Content Security Policy, HttpOnly cookies. **CSRF**: a malicious site makes the victim's browser send an authenticated request; defend with SameSite cookies, anti-CSRF tokens and checking the Origin header. Other web issues: broken access control (insecure direct object references), insecure deserialization, server-side request forgery, using components with known vulnerabilities. The OWASP Top 10 lists the most common.

### 7.4 Secure development lifecycle
Threat model early, code review, static analysis (SAST), dependency scanning (SCA), dynamic testing (DAST), fuzzing, secrets scanning, signed builds, and a patch process. Treat all input as hostile, validate at trust boundaries, fail securely, log security events without logging secrets.

## Chapter 8. Network Security

### 8.1 Attacks at each layer
- **Link/LAN**: ARP spoofing, MAC flooding, rogue DHCP. Defences: port security, DHCP snooping, dynamic ARP inspection, 802.1X.
- **IP/transport**: IP spoofing, TCP SYN flooding (half-open connections exhaust the backlog; defence: SYN cookies), port scanning, session hijacking by guessing sequence numbers.
- **Application/DNS**: DNS cache poisoning (defence: DNSSEC, randomized source ports and transaction IDs), BGP hijacking (defence: RPKI), amplification DDoS (small spoofed request, large response; defence: ingress filtering BCP 38, rate limiting, scrubbing and CDNs).
- **Wireless**: WEP is broken, WPA2-PSK is vulnerable to offline guessing of weak passphrases; WPA3 adds SAE.

### 8.2 Firewalls and intrusion detection
A **packet filter** decides on header fields (source and destination address, port, protocol); a **stateful firewall** tracks connections so replies are allowed only for outgoing requests; an **application proxy / WAF** inspects content. Default policy: deny all, allow only what is needed. A **network zone** layout: Internet → firewall → DMZ (public servers) → firewall → internal network. **IDS/IPS** use signatures (known patterns) or anomaly detection (deviations from a baseline); both produce false positives and false negatives. Good logging and a SIEM correlate events.

### 8.3 TLS
TLS 1.3 handshake: ClientHello (supported ciphers, key share) → ServerHello (chosen cipher, key share), certificate, signature over the transcript, Finished; then application data are protected with AEAD (AES-GCM or ChaCha20-Poly1305) keyed from an ephemeral (EC)DH secret through HKDF. Properties: confidentiality, integrity, server authentication (optionally client), forward secrecy. The browser validates the **certificate chain** (leaf → intermediate → trusted root), the validity dates, the host name (SAN) and the revocation status. The **PKI** relies on certification authorities; Certificate Transparency logs help detect mis-issuance. Pitfalls: ignoring certificate errors in code, accepting old protocols (SSLv3, TLS 1.0), weak ciphers.

### 8.4 VPNs, SSH and IPsec
**IPsec** (AH/ESP in transport or tunnel mode, keys by IKE) and **WireGuard** build VPNs; **SSH** gives encrypted remote login with host keys (verify the fingerprint the first time) and public-key user authentication. Disable password logins on exposed servers, use key-based login and fail2ban-style rate limiting.

## Chapter 9. Malware, Operations and Response

- **Malware families**: viruses, worms (self-propagating), trojans, ransomware (encrypts data for payment), spyware, rootkits, botnets. Defences: patching, application allow-listing, least privilege, endpoint detection and response, email filtering, user training, offline tested backups (the 3-2-1 rule: three copies, two media, one off-site).
- **Social engineering**: phishing, pretexting, tailgating. Technical controls plus awareness and reporting culture.
- **Incident response lifecycle**: preparation, detection and analysis, containment, eradication, recovery, lessons learned. Preserve evidence (hash disk images with SHA-256 to prove integrity; keep a chain of custody).
- **Vulnerability management**: asset inventory, scanning, prioritizing by exploitability and exposure (CVSS plus context), patch SLAs, responsible disclosure.
- **Zero trust**: never trust by network location; authenticate and authorize every request, with micro-segmentation and continuous verification.

## Chapter 10. Privacy, Law and Ethics

Collect the minimum data, encrypt at rest and in transit, anonymize or pseudonymize, and delete on schedule. Regulations (for example GDPR, HIPAA, PCI-DSS) impose breach notification and security duties. Penetration testing needs written authorization and a defined scope; unauthorized access is a crime even with good intentions. Follow coordinated disclosure: report to the vendor, allow time to fix, then publish. Professional codes (ACM, IEEE) place public safety first.

## Chapter 11. Common Mistakes Checklist
- Rolling your own cryptography or using ECB, MD5, SHA-1, unsalted fast password hashes or textbook RSA.
- Reusing a nonce/IV with a stream cipher or GCM; using predictable "random" numbers.
- Encrypting without authenticating; comparing MACs with an ordinary string comparison.
- Hard-coded keys and passwords; secrets in version control.
- Building SQL, shell or HTML from untrusted input.
- Checking permissions only in the user interface, not on the server.
- Disabling certificate validation "to make it work".
- Trusting a firewall alone (no defence in depth), no logging, no tested backups, unpatched systems.
