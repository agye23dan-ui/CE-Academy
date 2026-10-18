# Computer and Network Security: Assignments with Worked Solutions

Show every step. All numerical answers below were computed and checked in Python (pow with modulus, hashlib, hmac, the cryptography library, sqlite3). Attack techniques are described for understanding and defence; only test systems you own or have written permission to test.

# Assignment 1: Cryptography Mathematics (70 marks)

## Questions

**Q1. Classical ciphers (14 marks)** (a) An affine cipher encrypts C = (7P + 3) mod 26 (A = 0). Encrypt HELLO [3]. (b) Find 7⁻¹ mod 26 and decrypt ZFRNSF [4]. (c) How many affine keys exist? [2] (d) Encrypt HELLO with the Vigenère key KEY, and state how the key length of a long Vigenère ciphertext is found [5].

**Q2. One-time pad (8 marks)** The key bytes are 5A 13 C4. (a) Encrypt the ASCII message "YES" (hex 59 45 53) [3]. (b) Show decryption [1]. (c) An attacker who knows the plaintext is "YES" but not the key wants the recipient to read "NOT" (hex 4E 4F 54). Give the forged ciphertext, and say what property of the one-time pad this shows [4].

**Q3. RSA (16 marks)** Let p = 7, q = 17, e = 5. (a) Compute n, φ(n) and the private exponent d [4]. (b) Encrypt m = 19 and verify the decryption [4]. (c) Sign m = 10 and verify the signature [4]. (d) With e = 3, n = 119 and m = 4 explain why unpadded RSA is insecure for small messages, and name the fix [4].

**Q4. Diffie-Hellman (10 marks)** (a) With p = 29, g = 2, Alice's secret a = 8 and Bob's secret b = 11, compute A, B and the shared key [5]. (b) Is g = 2 a generator of the multiplicative group mod 29? [2] (c) With p = 23, g = 5, a = 6, b = 15 (so A = 8, B = 19) show how a man-in-the-middle Eve with secret 3 obtains a key with each party, and state the defence [3].

**Q5. Hashes and passwords (16 marks)** (a) How many hash evaluations give a 50 percent chance of a collision for a 40-bit hash? For a 96-bit hash? [4] (b) Compute the entropy of a password of 10 characters drawn at random from 36 symbols (a-z, 0-9) and the average time to find it at 10⁹ guesses/s against an unsalted fast hash [4] (c) Compare with a passphrase of five diceware words (7776 words) [3]. (d) Explain why a per-user salt helps even if the attacker has the password database [3] (e) Give the digest sizes in bytes of MD5, SHA-1 and SHA-256 [2].

**Q6. Risk calculation (6 marks)** An asset is worth $500,000. A breach has exposure factor 0.4 and occurs 0.1 times a year. A control costing $12,000 per year cuts the rate to 0.02. Compute the ALE before and after, the net annual benefit and the return on security investment (ROSI = net benefit / cost).

## Solutions

**Q1.**
(a) H = 7, E = 4, L = 11, O = 14. 7×7 + 3 = 52 mod 26 = 0 → A; 7×4 + 3 = 31 mod 26 = 5 → F; 7×11 + 3 = 80 mod 26 = 2 → C (twice); 7×14 + 3 = 101 mod 26 = 23 → X. Ciphertext **AFCCX**.
(b) Step 1: 7 × 15 = 105 = 4 × 26 + 1, so **7⁻¹ = 15**.
Step 2: P = 15(C - 3) mod 26.
Step 3: Z (25): 15 × 22 = 330 mod 26 = 18 → S; F (5): 15 × 2 = 30 mod 26 = 4 → E; R (17): 15 × 14 = 210 mod 26 = 2 → C; N (13): 15 × 10 = 150 mod 26 = 20 → U; S (18): 15 × 15 = 225 mod 26 = 17 → R; F → E. Plaintext **SECURE**.
(c) a must be coprime to 26: φ(26) = 12 values; b has 26 values: 12 × 26 = **312** keys (a trivially small key space).
(d) Step 1: Key KEY = shifts 10, 4, 24.
Step 2: H+10 = R, E+4 = I, L+24 = J, L+10 = V, O+4 = S: **RIJVS**.
Step 3: The key length is found with the **Kasiski examination** (distances between repeated ciphertext fragments share factors equal to the key length) or the **index of coincidence** for candidate lengths; then each position is a Caesar cipher solved with frequency analysis.

**Q2.**
(a) 59 ⊕ 5A = 03; 45 ⊕ 13 = 56; 53 ⊕ C4 = 97. Ciphertext **03 56 97**.
(b) 03 ⊕ 5A = 59, 56 ⊕ 13 = 45, 97 ⊕ C4 = 53: "YES".
(c) Step 1: Forged ciphertext = C ⊕ (YES ⊕ NOT).
Step 2: YES ⊕ NOT = 59⊕4E, 45⊕4F, 53⊕54 = 17, 0A, 07.
Step 3: Then 03⊕17 = 14, 56⊕0A = 5C, 97⊕07 = 90: **14 5C 90**.
Step 4: It decrypts to 14⊕5A = 4E ('N'), 5C⊕13 = 4F ('O'), 90⊕C4 = 54 ('T').
Step 5: The one-time pad gives perfect secrecy but **no integrity**: it is malleable, so a MAC or authenticated encryption is needed.

**Q3.**
(a) n = 7 × 17 = **119**; φ = 6 × 16 = **96**; d = 5⁻¹ mod 96 = **77** (5 × 77 = 385 = 4 × 96 + 1).
(b) c = 19⁵ mod 119 = 2,476,099 mod 119 = **66**. Check: 66⁷⁷ mod 119 = **19**.
(c) s = 10⁷⁷ mod 119 = **96**; verification: 96⁵ mod 119 = **10**, matching the message, so the signature is valid. (In practice one signs a hash of the message with a padding scheme such as PSS.)
(d) 4³ = 64 < 119, so no modular reduction occurs and the attacker simply takes the ordinary integer cube root of c to get m = 4. The scheme is also deterministic (equal messages give equal ciphertexts) and malleable. The fix is randomized padding (OAEP for encryption, PSS for signatures) and a large modulus (at least 2048 bits).

**Q4.**
(a) A = 2⁸ mod 29 = 256 mod 29 = **24**; B = 2¹¹ mod 29 = 2048 mod 29 = **18**; K = B^a = 18⁸ mod 29 = **16**, and A^b = 24¹¹ mod 29 = **16** also.
(b) The order of 2 mod 29 is 28 (the smallest k with 2ᵏ ≡ 1 is 28), so 2 is a **primitive root (generator)**.
(c) Step 1: Eve intercepts A and B and sends E = 5³ mod 23 = 10 to both.
Step 2: Alice computes 10⁶ mod 23 = 6; Eve computes A³ = 8³ mod 23 = 6: they share **6**.
Step 3: Bob computes 10¹⁵ mod 23 = 5; Eve computes B³ = 19³ mod 23 = 5: they share **5**.
Step 4: Eve relays, decrypting and re-encrypting.
Step 5: Defence: authenticate the exchanged values with digital signatures or certificates (as in TLS) so Eve cannot substitute her own.

**Q5.**
(a) √(2 ln 2 · 2⁴⁰) = 1.18 × 2²⁰ ≈ **1.23 × 10⁶** hashes; for 96 bits: 1.18 × 2⁴⁸ ≈ **3.3 × 10¹⁴**.
(b) Entropy = 10 × log₂ 36 = 10 × 5.17 = **51.7 bits**; space 36¹⁰ = 3.66 × 10¹⁵. On average half is searched: 1.83 × 10¹⁵/10⁹ = 1.83 × 10⁶ s = **about 21 days**.
(c) 5 × log₂ 7776 = 5 × 12.92 = **64.6 bits**; average search time 164,500 days ≈ **450 years**. The passphrase is stronger and much easier to remember.
(d) A salt is a random value stored beside the hash and hashed with the password. It makes the same password hash differently for each user (for example SHA-256(s1‖"password") starts 33453fb8... while with s2 it starts bd22d163...), so precomputed rainbow tables are useless and the attacker must attack each user separately. A slow, memory-hard KDF (Argon2, bcrypt, scrypt, PBKDF2) additionally multiplies the cost per guess.
(e) MD5 **16 bytes**, SHA-1 **20 bytes**, SHA-256 **32 bytes**.

**Q6.**
Step 1: SLE = 500,000 × 0.4 = $200,000.
Step 2: ALE before = 200,000 × 0.1 = **$20,000**; after = 200,000 × 0.02 = **$4,000**.
Step 3: Reduction $16,000; net benefit = 16,000 - 12,000 = **$4,000 per year**; ROSI = 4,000/12,000 = **0.33 (33 percent)**: worth buying, but only moderately.

# Assignment 2: Applied Cryptography, Software and Network Attacks (70 marks)

## Questions

**Q1. Encryption modes (10 marks)** A 37-byte message is encrypted with AES (16-byte blocks). (a) How many bytes of PKCS#7 padding are added for CBC, and what is the ciphertext length with a 16-byte IV prepended? [4] (b) What is the ciphertext length with AES-GCM using a 16-byte tag? [2] (c) Why is ECB unsafe? [2] (d) What happens if a GCM nonce is reused with the same key? [2]

**Q2. Password storage (10 marks)** (a) Explain what is wrong with storing SHA-256(password) with no salt, given that SHA-256("password") is 5e884898da28... [4] (b) Describe a correct design and the parameters you would choose [4] (c) Why does a login system need a rate limit even with good hashing? [2]

**Q3. One-time codes (6 marks)** (a) Describe how HOTP computes a code [3]. (b) For the RFC test key, the HOTP codes for counters 0 to 3 are 755224, 287082, 359152, 969429. What is the TOTP code at Unix time 59 with a 30-second step? [3]

**Q4. SQL injection (10 marks)** A login uses `"SELECT * FROM users WHERE name='" + name + "' AND pw='" + pw + "'"`. (a) What does the query become for name = `alice'--` and any password? [3] (b) What does it become for name = `x' OR '1'='1' --`? [3] (c) Give the fix and show the same input handled safely [4].

**Q5. Web security (8 marks)** (a) Show how the string `<script>alert(1)</script>` is made harmless when placed into an HTML page [2]. (b) Explain XSS versus CSRF, with one defence for each [4]. (c) List three attributes you set on a session cookie and their effect [2].

**Q6. Network attacks (14 marks)** (a) A server keeps 1,024 half-open connection slots and drops them after 60 seconds. What SYN rate keeps the table full? Name two defences [4]. (b) A DNS amplification attack sends 60-byte queries that trigger 3,000-byte responses. Find the amplification factor and the traffic at the victim from 10 Mbps of attacker traffic. Name two defences [4]. (c) Describe ARP spoofing and its defences [3]. (d) How does DNS cache poisoning work and what stops it? [3]

**Q7. Firewall rules (12 marks)** A network has an Internet router, a firewall with three zones, a DMZ containing a web server (203.0.113.10) and a mail relay (203.0.113.11), and an internal LAN 10.0.0.0/24 (254 usable hosts). Write a default-deny rule set that lets the Internet reach HTTPS on the web server and SMTP on the mail relay, lets internal hosts browse the web (HTTP/HTTPS) and resolve DNS, lets the mail relay deliver to the internal mail server 10.0.0.25 on SMTP only, and blocks everything else. Explain why the order and the default policy matter.

## Solutions

**Q1.**
(a) 37 mod 16 = 5, so padding = 16 - 5 = **11 bytes** (each equal to 0x0B), giving a 48-byte padded plaintext. With the IV the stream is 16 + 48 = **64 bytes**. (A message that is already a multiple of 16 still receives a full 16-byte pad block.)
(b) GCM needs no padding: 37 + 16 = **53 bytes** (plus the 12-byte nonce, sent or derived separately, so 65 bytes on the wire).
(c) Equal plaintext blocks give equal ciphertext blocks, revealing structure (we verified that two identical 16-byte blocks produced identical ECB output but different CBC output), and blocks can be reordered or replayed.
(d) Reusing a nonce in GCM (or CTR) reuses the keystream: XORing the two ciphertexts yields the XOR of the plaintexts, and in GCM it also lets an attacker recover the authentication key and forge messages. Nonces must be unique per key.

**Q2.**
(a) SHA-256 is fast, so billions of guesses per second are possible; unsalted, identical passwords give identical hashes, so one precomputed table or a quick lookup of "5e884898..." reveals every user of "password" at once; the attacker also sees which users share passwords.
(b) Per-user random salt (at least 16 bytes from a secure random generator) stored with the hash, and a slow memory-hard function: Argon2id (for example 64 MiB memory, 3 iterations, 1 lane) or bcrypt cost 12 or more, or PBKDF2-HMAC-SHA256 with a high iteration count; tune so a hash takes tens of milliseconds on the server. Optionally a server-side pepper held in an HSM. Compare in constant time and require a minimum length rather than character-class rules.
(c) Online guessing and credential stuffing (reused passwords from other breaches) bypass the hash entirely; use rate limiting, account lockout with care, MFA, breached-password checks and anomaly detection.

**Q3.**
(a) Compute HMAC-SHA1(K, counter as 8 bytes). Take the low 4 bits of the last byte as an offset, read 4 bytes at that offset, clear the top bit (31-bit integer), and reduce modulo 10⁶ for six digits.
(b) T = ⌊59/30⌋ = 1, which is HOTP counter 1: **287082** (the RFC 8-digit value is 94287082).

**Q4.**
(a) `SELECT * FROM users WHERE name='alice'--' AND pw='...'`. The `--` begins a comment, removing the password test, so the attacker is logged in as alice. We confirmed this returns alice's row.
(b) `... name='x' OR '1'='1' --' AND pw='zzz'`: the condition `'1'='1'` is always true, so **all rows** are returned (confirmed: three rows), and the application may log in as the first user, often an administrator.
(c) Use **parameterized queries**: `db.execute("SELECT * FROM users WHERE name=? AND pw_hash=?", (name, h))`. The malicious string is passed as data and compared literally: it matched **zero rows** in the test. Also use least-privilege database accounts, input validation and never display raw database errors.

**Q5.**
(a) HTML-encode: `&lt;script&gt;alert(1)&lt;/script&gt;` is displayed as text instead of executed. Use the encoder for the right context (HTML body, attribute, JavaScript, URL).
(b) **XSS**: attacker-supplied script runs in the victim's browser in the site's origin (steals sessions, performs actions); defence: output encoding and a Content Security Policy. **CSRF**: a malicious site causes the victim's browser to send an authenticated request to the target using the victim's cookies; defence: SameSite cookies and anti-CSRF tokens (and checking the Origin header).
(c) **HttpOnly** (scripts cannot read the cookie), **Secure** (sent only over HTTPS), **SameSite=Lax/Strict** (not sent on cross-site requests); also a short expiry and a random token of at least 128 bits.

**Q6.**
(a) Each half-open entry lives 60 s, so keeping 1,024 slots occupied needs 1,024/60 ≈ **17 SYN packets per second**: a tiny rate. Defences: **SYN cookies** (no state until the final ACK), larger backlog with shorter timeouts, rate limiting, upstream filtering.
(b) Amplification factor 3,000/60 = **50**. 10 Mbps × 50 = **500 Mbps** at the victim (with the source address spoofed to the victim's). Defences: ingress filtering (BCP 38) so spoofed packets are dropped, closing open resolvers or rate-limiting responses, DDoS scrubbing or CDN capacity.
(c) The attacker sends forged ARP replies mapping the gateway's IP to the attacker's MAC, so traffic flows through the attacker (man-in-the-middle). Defences: dynamic ARP inspection and DHCP snooping on switches, static entries for critical hosts, 802.1X, and end-to-end encryption (TLS) so interception yields nothing useful.
(d) The attacker races to supply a forged answer to a resolver's outstanding query, guessing the 16-bit transaction ID (and port); a cached false answer misdirects all users. Defences: random source ports and IDs (together about 32 bits), DNSSEC signatures, 0x20 case randomization, and DNS over TLS/HTTPS to the resolver.

**Q7.** One valid rule set (rules are matched top to bottom; the first match wins; stateful tracking lets replies return automatically):
```
1. ALLOW  tcp  any          -> 203.0.113.10  port 443      (Internet to web server)
2. ALLOW  tcp  any          -> 203.0.113.11  port 25       (Internet to mail relay)
3. ALLOW  tcp  203.0.113.11 -> 10.0.0.25     port 25       (relay to internal mail server)
4. ALLOW  tcp  10.0.0.0/24  -> any           port 80,443   (internal browsing)
5. ALLOW  udp  10.0.0.0/24  -> DNS resolver  port 53       (also tcp 53 if needed)
6. DENY   any  any          -> any           (log)         (default deny)
```
The default policy must be deny: anything not explicitly needed is blocked (fail-safe defaults), including all connections from the DMZ to the internal LAN other than rule 3, so a compromised web server cannot pivot inwards. Order matters because rules are evaluated top-down: a broad early ALLOW can shadow later specific DENYs, and a final catch-all DENY with logging catches unexpected traffic and gives visibility. The /24 contains 2⁸ - 2 = 254 usable host addresses.

# Assignment 3: Protocols, Access Control, Risk and Response (60 marks)

## Questions

**Q1. TLS (12 marks)** (a) List the main steps of a TLS 1.3 handshake [4]. (b) List the checks a browser makes on a server certificate [4]. (c) What is forward secrecy and which mechanism provides it? [2] (d) Why is it dangerous for code to ignore certificate errors? [2]

**Q2. Key management (6 marks)** (a) How many pairwise secret keys are needed for n = 10, 100 and 1,000 parties using symmetric cryptography only? How many key pairs with public-key cryptography? [3] (b) Name three practices for protecting keys [3].

**Q3. Access control (10 marks)** (a) Distinguish DAC, MAC and RBAC with an example each [4]. (b) Under Bell-LaPadula, a Secret user may or may not read a Confidential document and write to it? What about Top Secret documents? State the two rules [4]. (c) Why must access checks be done on the server? [2]

**Q4. Threat modelling (12 marks)** A mobile banking app talks over the Internet to an API server, which uses a database. (a) Draw the main components and trust boundaries in words [3]. (b) Give one STRIDE threat for each category with a mitigation [6]. (c) Rank two of the threats by risk and justify [3].

**Q5. Incident response (10 marks)** At 02:00 monitoring shows a file server encrypting its own files and a ransom note appears. (a) Order the response using the standard lifecycle [5]. (b) Which backups protect you and what rule describes them? [3] (c) How do you show later that the disk image you analyzed was not altered? [2]

**Q6. Ethics and law (10 marks)** A student finds a vulnerability in a university web portal that exposes other students' grades through a changing numeric ID in the URL, after trying a few IDs. (a) Identify the vulnerability class [2]. (b) What should the student do and not do? [4] (c) What should the university's secure development process have included to avoid it? [4]

## Solutions

**Q1.**
(a) (1) **ClientHello** with supported cipher suites, protocol version and an ephemeral (EC)DH key share. (2) **ServerHello** selects the cipher and returns its own key share; both sides now compute the shared secret and derive handshake keys with HKDF. (3) The server sends its **certificate chain** and a **CertificateVerify** signature over the handshake transcript, then **Finished** (a MAC of the transcript). (4) The client verifies and sends **Finished** (and a client certificate if requested). (5) Application data flow under **AEAD** (AES-GCM or ChaCha20-Poly1305) with fresh traffic keys.
(b) The chain leads to a trusted root (leaf → intermediate → root) with valid signatures; the validity period includes the current date; the host name matches the Subject Alternative Name; the certificate has not been revoked (CRL, OCSP, stapling); key usage and constraints are appropriate; optionally Certificate Transparency evidence.
(c) Forward secrecy means the compromise of the server's long-term private key later does not reveal past recorded sessions. It is provided by **ephemeral Diffie-Hellman key exchange** (ECDHE), with the long-term key used only to authenticate (sign).
(d) Without validation, a man-in-the-middle can present any certificate and read or alter all traffic, so the encryption protects nothing against active attackers.

**Q2.**
(a) Symmetric: n(n - 1)/2 = **45**, **4,950** and **499,500** keys. Public-key: **n** key pairs: 10, 100, 1,000. Public-key cryptography (with a PKI) removes the need to pre-share a secret with every other party.
(b) Examples: generate keys with a secure random source and never hard-code or commit them; store them in an HSM, TPM or secure enclave and encrypt them at rest; rotate and expire keys, use separate keys per purpose, restrict access by least privilege with audit logs; have a revocation and recovery plan.

**Q3.**
(a) **DAC**: the owner decides (Unix file permissions chmod 640). **MAC**: a central policy based on labels decides, regardless of owner (military classification, SELinux). **RBAC**: permissions attach to roles and users receive roles (nurse, billing clerk, administrator).
(b) Bell-LaPadula protects confidentiality with the **simple security property (no read up)** and the **\*-property (no write down)**. A Secret user may **read** Confidential (down) but may **not write** to it (that would be writing down and could leak secrets). The user may **not read** Top Secret (up) but may write to it (writing up is allowed by the model, although it raises integrity concerns, handled by Biba: no read down, no write up).
(c) The client is under the attacker's control, so hidden buttons or client-side checks can be bypassed; the server must check authorization on every request (complete mediation).

**Q4.**
(a) Components: phone app → (trust boundary: Internet) → API server → (trust boundary) → database; plus the user's device storage and the authentication service. Data flows cross the Internet and into the database.
(b) **Spoofing**: stolen credentials → MFA and device binding. **Tampering**: altering a transfer amount in transit → TLS and server-side validation and signing. **Repudiation**: user denies a transfer → tamper-evident audit logs and signed confirmations. **Information disclosure**: data on a lost phone → encrypted storage, no secrets on device. **Denial of service**: flooding the API → rate limiting, WAF, scalable infrastructure. **Elevation of privilege**: access another user's account by changing an ID → server-side authorization checks per object.
(c) Using likelihood × impact on a 1 to 5 scale: broken object-level authorization (likelihood 4, impact 5, score 20) ranks above DoS (likelihood 3, impact 3, score 9) because it exposes money and personal data with little effort.

**Q5.**
(a) (1) **Detect and analyze**: confirm it is ransomware, identify the scope. (2) **Contain**: isolate the server from the network at once (do not power off if memory evidence is needed), disable affected accounts, block the attacker's addresses. (3) **Eradicate**: find the entry point (phishing, exposed RDP, unpatched service), remove malware and persistence, patch, reset credentials. (4) **Recover**: rebuild from clean images and restore from verified backups, monitor closely. (5) **Lessons learned**: post-incident review, update controls and the response plan; notify regulators and affected parties as required.
(b) Backups that are offline or immutable and tested for restore. The **3-2-1 rule**: three copies, on two different media, one off-site (and ideally one offline or immutable).
(c) Hash the image (for example with SHA-256) when it is taken and record the digest in the chain-of-custody log; recomputing the same digest later proves the evidence is unchanged.

**Q6.**
(a) **Insecure direct object reference (IDOR)**, a form of broken object-level access control.
(b) Stop testing immediately once the weakness is confirmed (do not harvest or view others' records), keep no copies, document minimally what was seen, and report it promptly through the university's security contact or disclosure policy (coordinated disclosure); do not share it publicly or exploit it. Unauthorized access can be unlawful even without bad intent, which is why authorization and a disclosure policy matter.
(c) Threat modelling and requirements for authorization on every object; server-side ownership checks; unguessable identifiers as defence in depth (not as the only control); code review and automated tests for access control; penetration testing before release; a vulnerability disclosure policy and a patch process.
