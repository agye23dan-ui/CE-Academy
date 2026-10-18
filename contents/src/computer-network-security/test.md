# Computer and Network Security: Class Test

Duration: 60 minutes. Calculator allowed, no notes. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Useful: 2⁶ = 64; log₂ 62 = 5.954; log₂ 7776 = 12.92.

## Section A: Multiple choice (20 marks)

**1.** Integrity means that data
A) are stored in one place  B) are not altered undetected  C) cannot be read by unauthorized parties  D) are always available

**2.** Kerckhoffs's principle says a cryptosystem should be secure even if
A) the attacker has no computer  B) everything except the key is public knowledge  C) the algorithm is secret  D) the key is public

**3.** A one-time pad provides perfect secrecy only if the key is
A) a short password  B) random, as long as the message and never reused  C) the hash of the message  D) reused for every message

**4.** The main weakness of ECB mode is that
A) identical plaintext blocks give identical ciphertext blocks  B) it cannot encrypt 16-byte blocks  C) it is too slow  D) it needs a nonce

**5.** Authenticated encryption such as AES-GCM provides
A) integrity only  B) confidentiality only  C) confidentiality and integrity  D) compression

**6.** To resist collisions with about 128-bit security a hash output should be at least
A) 256 bits  B) 512 bits  C) 64 bits  D) 128 bits

**7.** HMAC-SHA256 provides
A) confidentiality  B) a public key  C) non-repudiation  D) integrity and authenticity between parties sharing a key

**8.** For storing passwords you should use
A) a per-user salt and a slow function such as Argon2 or bcrypt  B) plain SHA-256  C) MD5 with no salt  D) reversible encryption with one global key

**9.** In RSA the private exponent d satisfies
A) e·d ≡ 1 (mod φ(n))  B) d = n - e  C) d = e  D) d = p + q

**10.** Unauthenticated Diffie-Hellman is vulnerable to
A) hash collisions  B) only a quantum computer  C) a man-in-the-middle attack  D) brute-force of the generator

**11.** Forward secrecy is obtained mainly through
A) bigger certificates  B) ephemeral Diffie-Hellman keys  C) longer passwords  D) a stronger firewall

**12.** A digital signature provides
A) integrity, authentication and non-repudiation  B) compression  C) availability  D) confidentiality only

**13.** The best defence against SQL injection is
A) blocking the word SELECT  B) longer passwords  C) hiding error messages only  D) parameterized queries (prepared statements)

**14.** Cross-site scripting (XSS) occurs when
A) a disk fills up  B) a certificate expires  C) a password is reused  D) untrusted data is rendered as script in another user's browser

**15.** SYN cookies defend against
A) ARP spoofing  B) phishing  C) SQL injection  D) SYN flooding

**16.** A stateful firewall
A) filters only by file name  B) cannot block ports  C) encrypts all traffic  D) tracks connection state so that replies are allowed only for permitted outgoing requests

**17.** The principle of least privilege says
A) users should have all rights  B) logging should be off  C) give each subject only the access needed for its task  D) passwords should be short

**18.** Bell-LaPadula's simple security property is
A) read anything  B) no write up  C) no read down  D) no read up

**19.** A phishing-resistant authentication method is
A) FIDO2/WebAuthn passkeys  B) SMS codes only  C) a longer password  D) security questions

**20.** The 3-2-1 backup rule means
A) three passwords, two factors, one token  B) three days, two weeks, one month  C) three servers, two admins, one firewall  D) three copies, on two media, one stored off-site

## Section B: Problems (40 marks)

**B1. Toy RSA (10 marks)** Take p = 3, q = 11 and e = 3. (a) Compute n, φ(n) and d [3]. (b) Encrypt m = 4 and show that decryption returns it [4]. (c) Sign m = 4 and verify the signature (given 4⁷ = 16384) [3].

**B2. Diffie-Hellman (10 marks)** Public parameters p = 23 and g = 5. Alice's secret is a = 6 and Bob's is b = 15. (a) Compute A and B [4]. (b) Compute the shared key both ways [3]. (c) Explain how an active attacker defeats this exchange and what prevents it [3].

**B3. Passwords (10 marks)** (a) Compute the entropy of a random 8-character password using 62 symbols [2]. (b) Compute the entropy of four random diceware words (7776 words) [2]. (c) At 10¹⁰ guesses per second against an unsalted fast hash, estimate the average time for each (average = half the space) [3]. (d) Explain how a salt and a slow hash change the situation [3].

**B4. Risk and threats (10 marks)** An $80,000 server has exposure factor 1.0 and a breach rate of 0.5 per year. A control costing $15,000 per year cuts the rate to 0.1. (a) Compute the ALE before and after, and the net annual benefit [4]. (b) Match each threat to a STRIDE category: (i) an attacker forges the sender of a message, (ii) a user denies having made a transfer, (iii) an attacker floods a service so that it is unavailable, (iv) a user gains administrator rights [4]. (c) Name two ways of treating a risk other than mitigation [2].

## Answer key and solutions

### Section A
1. B 2. B 3. B 4. A 5. C 6. A 7. D 8. A 9. A 10. C 11. B 12. A 13. D 14. D 15. D 16. D 17. C 18. D 19. A 20. D

### Section B

**B1.**
(a) n = 3 × 11 = **33**; φ = 2 × 10 = **20**; d = 3⁻¹ mod 20 = **7** (3 × 7 = 21 ≡ 1) [3].
(b) c = 4³ mod 33 = 64 mod 33 = **31**. Decrypt: 31⁷ mod 33 = **4** (31 ≡ -2, (-2)⁷ = -128 = -128 + 132 = 4) [4].
(c) s = 4⁷ mod 33 = 16384 mod 33 = **16** (16384 - 496 × 33 = 16384 - 16368). Verify: 16³ = 4096; 4096 mod 33 = 4096 - 124 × 33 = 4096 - 4092 = **4**, which equals the message, so the signature is valid [3].

**B2.**
(a) A = 5⁶ mod 23 = 15625 mod 23 = **8**; B = 5¹⁵ mod 23 = **19** [4].
(b) Alice: B^a = 19⁶ mod 23 = **2**; Bob: A^b = 8¹⁵ mod 23 = **2**. Both obtain K = 2 [3].
(c) A man-in-the-middle replaces A and B with values of his own and establishes a separate key with each party, relaying and reading everything. The defence is to authenticate the exchange, for example with digital signatures and certificates (as in TLS), so the attacker cannot substitute values undetected [3].

**B3.**
(a) 8 × log₂ 62 = 8 × 5.954 = **47.6 bits** (62⁸ = 2.18 × 10¹⁴) [2].
(b) 4 × log₂ 7776 = 4 × 12.92 = **51.7 bits** (7776⁴ = 3.66 × 10¹⁵) [2].
(c) 47.6 bits: half the space 1.09 × 10¹⁴ / 10¹⁰ = 1.09 × 10⁴ s ≈ **3 hours**. 51.7 bits: 1.83 × 10¹⁵ / 10¹⁰ = 1.83 × 10⁵ s ≈ **2.1 days** [3].
(d) A per-user random salt forces the attacker to attack each password separately and makes precomputed tables useless; a slow, memory-hard hash (Argon2, bcrypt, scrypt, PBKDF2 with many iterations) multiplies the cost of each guess by orders of magnitude (for example 10⁴ per second per core instead of 10¹⁰), turning hours into many years for the same password [3].

**B4.**
(a) ALE before = 80,000 × 1.0 × 0.5 = **$40,000**; after = 80,000 × 0.1 = **$8,000**; net benefit = 40,000 - 8,000 - 15,000 = **$17,000 per year** [4].
(b) (i) **Spoofing**; (ii) **Repudiation**; (iii) **Denial of service**; (iv) **Elevation of privilege** [4].
(c) **Transfer** (insurance or outsourcing), **avoid** (stop the risky activity), or **accept** (document and monitor) [2].
