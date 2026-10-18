# Computer Networks: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** The end-to-end principle says that
A) the network core should do all the work  B) functions such as reliability are best implemented at the endpoints  C) routers must keep per-flow state  D) all links must be reliable

**2.** In store-and-forward switching a router
A) forwards each bit as it arrives  B) forwards a packet only after receiving it completely  C) drops packets that are too large  D) stores packets permanently

**3.** The bandwidth-delay product is
A) rate × round-trip time  B) rate / RTT  C) packet size × rate  D) RTT / rate

**4.** In an M/M/1 queue the mean delay becomes unbounded as the utilisation
A) tends to 0  B) tends to 0.5  C) tends to 1  D) is 0.8

**5.** A CRC with generator of degree r detects all burst errors of length
A) greater than r  B) at most r  C) equal to 2r  D) of any length

**6.** The minimum Ethernet frame is 64 bytes so that
A) the sender is still transmitting when a collision is detected  B) the CRC fits  C) ARP works  D) the MTU is respected

**7.** Wi-Fi uses CSMA/CA rather than CSMA/CD because
A) it is faster  B) a radio cannot reliably detect collisions while transmitting  C) it needs no acknowledgements  D) it has no hidden terminals

**8.** The usable hosts of a /27 network
A) 32  B) 31  C) 30  D) 28

**9.** Aggregating 192.168.0.0/24 to 192.168.3.0/24 gives
A) 192.168.0.0/23  B) 192.168.0.0/22  C) 192.168.0.0/21  D) 192.168.0.0/16

**10.** The TTL field of an IP packet is used to
A) order packets  B) encrypt the header  C) prevent packets from circulating forever  D) select the route

**11.** OSPF is a
A) link-state protocol  B) distance-vector protocol  C) path-vector protocol  D) transport protocol

**12.** The count-to-infinity problem affects
A) link-state routing  B) distance-vector routing  C) ARP  D) DNS

**13.** BGP routing decisions are mainly driven by
A) shortest hop count only  B) link utilisation  C) the MAC address  D) policy and business relationships

**14.** UDP provides
A) reliable delivery  B) ports and an optional checksum only  C) congestion control  D) flow control

**15.** TCP flow control uses
A) the receiver's advertised window  B) the congestion window only  C) slow start  D) the RTO

**16.** After three duplicate ACKs a Reno sender
A) sets cwnd to 1  B) closes the connection  C) retransmits and halves ssthresh and cwnd  D) doubles cwnd

**17.** The TCP RTO is computed as
A) the latest RTT sample  B) EstimatedRTT only  C) twice the minimum RTT  D) EstimatedRTT + 4 DevRTT

**18.** A DNS recursive resolver
A) stores the root zone only  B) queries on behalf of the client and caches the answers  C) assigns IP addresses  D) routes packets

**19.** HTTP/1.1 persistent connections
A) reuse one TCP connection for several requests  B) use UDP  C) do not need DNS  D) encrypt the data

**20.** A SYN flood is mitigated by
A) larger MTUs  B) SYN cookies  C) longer TTLs  D) ARP caching

## Section B: Short Questions (40 marks)

**B1. (5)** An M/M/1 queue has mu = 1000 packets/s and lambda = 500 packets/s. Find rho, the mean number in the system and the mean delay. What happens at lambda = 950?

**B2. (5)** Compute the CRC for the message 11010011101100 with generator 1011 and give the transmitted frame.

**B3. (5)** For 172.16.100.200/19 give the mask, the network address, the broadcast address and the number of usable hosts.

**B4. (5)** Aggregate 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24 and 192.168.3.0/24 and give the longest-prefix-match result for 10.1.2.77, 10.1.9.9 and 8.8.8.8 with the table 0.0.0.0/0 to R1, 10.0.0.0/8 to R2, 10.1.0.0/16 to R3, 10.1.2.0/24 to R4.

**B5. (5)** Links A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2, D-F 6, E-F 3. Give the least-cost distances from A with Dijkstra.

**B6. (5)** TCP: EstimatedRTT = 100 ms, DevRTT = 10 ms. A new sample of 300 ms arrives. Compute the new EstimatedRTT, DevRTT and RTO (alpha = 0.125, beta = 0.25).

**B7. (5)** Find the Mathis throughput for MSS 1460 bytes, RTT 100 ms and p = 10^-4, and the throughput limit of a 64 KB window at RTT 100 ms.

**B8. (5)** A page consists of a base file and 5 images (RTT 100 ms, ignore transmission time). Find the total time for non-persistent serial, non-persistent with 5 parallel connections, persistent without pipelining and persistent with pipelining.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Delay, queues and the link layer.** (a) The transmission and propagation delay of a 1500-byte packet over 2000 km on a 100 Mb/s link, and the time for a 10 MB file [3]. (b) M/M/1 at lambda = 500, 800, 900 and 950 with mu = 1000: rho, L and W [3]. (c) The Ethernet slot time at 10 and 100 Mb/s and the goodput limit of 100 Mb/s Ethernet [2]. (d) The stop-and-wait utilisation on 1 Mb/s with 1500-byte frames and 20 ms one-way delay, and the window needed for full utilisation [2].

**C2. Addressing.** (a) For 192.168.10.77/26 give the mask, network, broadcast and hosts, and divide 192.168.10.0/24 into 4 subnets [4]. (b) VLSM from 10.0.0.0/22 for 500, 200, 100 and 50 hosts [4]. (c) Explain NAT and why it was introduced [2].

**C3. Routing.** (a) Run Dijkstra from A on the network of B5 and give the paths [4]. (b) Give A's distance vector after rounds 1 to 4 of Bellman-Ford [4]. (c) Explain count-to-infinity and the remedies [2].

**C4. TCP.** (a) RTT samples 120, 90, 150, 300 and 100 ms with the initial values of B6: the RTO after each [4]. (b) The cwnd for rounds 1 to 11 for a Reno sender with ssthresh = 8 and three duplicate ACKs at round 6 [3]. (c) The congestion window per RTT with ssthresh = 16 and a timeout after round 8 [3].

**C5. Applications and security.** (a) Describe the sequence of calls of a TCP server and client; the outcome of the echo experiment [3]. (b) Explain DNS resolution and caching [3]. (c) The Shannon capacity of a 3 kHz channel with 30 dB SNR [2]. (d) Outline the TLS handshake and one DDoS mitigation [2].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **B** · 3 **A** · 4 **C** · 5 **B** · 6 **A** · 7 **B** · 8 **C** · 9 **B** · 10 **C** · 11 **A** · 12 **B** · 13 **D** · 14 **B** · 15 **A** · 16 **C** · 17 **D** · 18 **B** · 19 **A** · 20 **B**

Brief reasons: 6. The frame time must exceed the round-trip propagation time. 8. 2^5 - 2 = 30. 9. Four contiguous aligned /24s make a /22. 12. Distance vector relies on neighbours' estimates and can loop. 16. Fast retransmit and fast recovery.

## Section B solutions

**B1.** M/M/1: rho = lambda/mu, L = rho/(1 - rho), W = 1/(mu - lambda).
Step 1: rho = 500/1000 = **0.5**.
Step 2: L = 0.5/(1 - 0.5) = **1**.
Step 3: W = 1/(1000 - 500) = 0.002 s = **2 ms**.
Step 4: at lambda = 950: rho = 0.95; L = 0.95/0.05 = **19**; W = 1/50 = **20 ms**. The delay grows rapidly near full utilisation.

**B2.** Generator 1011 (r = 3).
Step 1: append 3 zeros: 11010011101100 000.
Step 2: modulo-2 division; the running 17-bit string after each XOR with 1011 is:
01100011101100000 → 00111011101100000 → 00010111101100000 → 00000001101100000 → 00000000110100000 → 00000000011000000 → 00000000001110000 → 00000000000101000 → 00000000000000100.
Step 3: remainder = last 3 bits = **100**.
Step 4: frame = **11010011101100100**. Check: the receiver's division gives remainder 000.

**B3.** 172.16.100.200/19.
Step 1: 19 network bits: the third octet has 3 network bits, so mask **255.255.224.0** and block size 256 - 224 = 32.
Step 2: 100 lies in the block 96 to 127: network **172.16.96.0**, broadcast **172.16.127.255**.
Step 3: host bits = 32 - 19 = 13; usable hosts = 2^13 - 2 = **8190**.

**B4.** Step 1: the third octets 0, 1, 2, 3 are contiguous and start at a multiple of 4 (binary 000000xx), so two bits are absorbed: /24 - 2 = **192.168.0.0/22**.
Step 2: longest-prefix match for 10.1.2.77: matches /0, /8, /16 and /24; the longest is the /24: **R4**.
Step 3: 10.1.9.9: matches /0, /8 and /16 (third octet 9 is not 2): **R3**.
Step 4: 8.8.8.8: matches only the default route /0: **R1**.

**B5.** Dijkstra from A:
Step 1: settle A (0): B 4, C 2.
Step 2: settle C (2): B via C = 3 (better than 4); D = 10; E = 12.
Step 3: settle B (3): D via B = 3 + 5 = 8.
Step 4: settle D (8): E via D = 10; F = 14.
Step 5: settle E (10): F via E = 13.
Result: **B 3, C 2, D 8, E 10, F 13**. Paths: A-C-B, A-C, A-C-B-D, A-C-B-D-E, A-C-B-D-E-F.

**B6.** alpha = 0.125, beta = 0.25, Est = 100, Dev = 10, sample = 300.
Step 1: error = |300 - 100| = 200.
Step 2: EstimatedRTT = 100 + 0.125 × 200 = **125 ms**.
Step 3: DevRTT = 0.75 × 10 + 0.25 × 200 = 7.5 + 50 = **57.5 ms**.
Step 4: RTO = 125 + 4 × 57.5 = 125 + 230 = **355 ms**.

**B7.** Step 1: MSS = 1460 × 8 = 11,680 bits.
Step 2: Mathis = 1.22 × MSS/(RTT × sqrt(p)) = 1.22 × 11,680/(0.1 × 0.01) = 14,250/0.001 = **14.2 Mb/s**.
Step 3: window limit = W/RTT = (65,535 × 8)/0.1 = 524,280/0.1 = **5.24 Mb/s**.

**B8.** 6 objects (1 base file + 5 images), RTT = 100 ms.
Step 1: non-persistent serial: each object takes 2 RTT (handshake + request): 6 × 2 = 12 RTT = **1.2 s**.
Step 2: non-persistent, 5 parallel connections: 2 RTT for the base file + 2 RTT for all images together = 4 RTT = **0.4 s**.
Step 3: persistent without pipelining: 2 RTT (handshake + base file) + 5 × 1 RTT = 7 RTT = **0.7 s**.
Step 4: persistent with pipelining: 2 RTT + 1 RTT = 3 RTT = **0.3 s**.

## Section C solutions

**C1.**
(a) Step 1: transmission = (1500 × 8)/(100 × 10^6) = 12,000/10^8 = **0.12 ms**.
Step 2: propagation = (2 × 10^6 m)/(2 × 10^8 m/s) = **10 ms**.
Step 3: 10 MB = 8 × 10^7 bits; time = 8 × 10^7/10^8 = **0.8 s**.
(b) With mu = 1000, using L = rho/(1 - rho) and W = 1/(mu - lambda):
Step 1: lambda = 500: rho 0.5, L = 0.5/0.5 = 1, W = 1/500 = 2 ms.
Step 2: lambda = 800: rho 0.8, L = 0.8/0.2 = 4, W = 1/200 = 5 ms.
Step 3: lambda = 900: rho 0.9, L = 0.9/0.1 = 9, W = 1/100 = 10 ms.
Step 4: lambda = 950: rho 0.95, L = 0.95/0.05 = 19, W = 1/50 = 20 ms.
(c) Step 1: slot time = 512 bits/(10 × 10^6) = **51.2 μs**; at 100 Mb/s: 512/10^8 = **5.12 μs**.
Step 2: per 1460 bytes of data the wire carries 1538 bytes (14 + 4 + 20 + 20 + 8 + 12 + 1460).
Step 3: goodput = 100 × 1460/1538 = **94.9 Mb/s**.
(d) Step 1: T_t = (1500 × 8)/10^6 = 12 ms; 2T_p = 40 ms.
Step 2: U = T_t/(T_t + 2T_p) = 12/52 = **0.231**.
Step 3: window = 1 + 2T_p/T_t = 1 + 40/12 = 4.33, rounded up to **5 frames**.

**C2.**
(a) 192.168.10.77/26:
Step 1: 26 network bits: mask 11111111.11111111.11111111.11000000 = **255.255.255.192**; block size 256 - 192 = 64.
Step 2: 77 lies in the block 64 to 127: network **192.168.10.64**, broadcast **192.168.10.127**.
Step 3: hosts **.65 to .126**, 2^6 - 2 = **62**.
Step 4: four equal subnets need 2 more network bits: **192.168.10.0/26, .64/26, .128/26, .192/26**.
(b) VLSM from 10.0.0.0/22, largest first:
Step 1: 500 hosts: 9 host bits (510 usable): **10.0.0.0/23**.
Step 2: 200 hosts: 8 bits (254): **10.0.2.0/24**.
Step 3: 100 hosts: 7 bits (126): **10.0.3.0/25**.
Step 4: 50 hosts: 6 bits (62): **10.0.3.128/26**.
Step 5: used 512 + 256 + 128 + 64 = 960 of 1024 addresses (93.75 percent).
(c) NAT rewrites the source address and port of outgoing packets to a public address and a unique port, and reverses the mapping for the replies using a translation table. It was introduced to conserve scarce IPv4 addresses (many private hosts share one public address); it breaks end-to-end addressing, so inbound connections need port forwarding or NAT traversal; IPv6 removes the need.

**C3.**
(a) Dijkstra from A:
Step 1: settle A: B 4, C 2.
Step 2: settle C (2): B 3, D 10, E 12.
Step 3: settle B (3): D 8.
Step 4: settle D (8): E 10, F 14.
Step 5: settle E (10): F 13.
Step 6: settle F (13).
Paths: **B: A-C-B (3); C: A-C (2); D: A-C-B-D (8); E: A-C-B-D-E (10); F: A-C-B-D-E-F (13)**.
(b) Bellman-Ford: each round, distance = min over neighbours of (link cost + neighbour's distance). A's vector (B, C, D, E, F):
Round 1: B = min(4, 2 + 1) = 3; C 2; D = min(4 + 5, 2 + 8) = 9; E = 2 + 10 = 12; F unreachable: **3, 2, 9, 12, infinity**.
Round 2: D = 3 + 5 = 8; E = 9 + 2 = 11; F = 12 + 3 = 15: **3, 2, 8, 11, 15**.
Round 3: E = 8 + 2 = 10; F = 11 + 3 = 14: **3, 2, 8, 10, 14**.
Round 4: F = 10 + 3 = 13: **3, 2, 8, 10, 13** (converged, equal to Dijkstra).
(c) **Count-to-infinity**: after a link failure nodes keep exchanging stale distance vectors, each time adding 1, until the cost reaches the defined infinity (16 in RIP), meanwhile loops form. Remedies: **split horizon**, **poison reverse**, a small value of infinity, triggered updates, and (fundamentally) link-state routing, which gives every router the full topology.

**C4.**
(a) Rules: Dev = 0.75 Dev + 0.25 |Sample - Est|; Est = 0.875 Est + 0.125 Sample; RTO = Est + 4 Dev. Start Est 100, Dev 10.
Step 1 (120): error 20; Dev = 7.5 + 5 = 12.5; Est = 87.5 + 15 = 102.5; RTO = 102.5 + 50 = **152.5**.
Step 2 (90): error 12.5; Dev = 9.375 + 3.125 = 12.5; Est = 89.69 + 11.25 = 100.94; RTO = 100.94 + 50 = **150.9**.
Step 3 (150): error 49.06; Dev = 9.375 + 12.27 = 21.64; Est = 88.32 + 18.75 = 107.07; RTO = 107.07 + 86.6 = **193.6**.
Step 4 (300): error 192.93; Dev = 16.23 + 48.23 = 64.46; Est = 93.69 + 37.5 = 131.19; RTO = 131.19 + 257.8 = **389.0**.
Step 5 (100): error 31.19; Dev = 48.35 + 7.80 = 56.14; Est = 114.79 + 12.5 = 127.29; RTO = 127.29 + 224.6 = **351.9 ms**.
(b) Step 1: rounds 1 to 4 (slow start doubles): 1, 2, 4, 8 (ssthresh = 8 reached).
Step 2: rounds 5 and 6 (+1 per round): 9, 10.
Step 3: three duplicate ACKs: ssthresh = 10/2 = 5, cwnd = 5.
Step 4: rounds 7 to 11: 5, 6, 7, 8, 9.
List: **1, 2, 4, 8, 9, 10, 5, 6, 7, 8, 9**.
(c) Step 1: slow start to ssthresh = 16: rounds 1 to 5: 1, 2, 4, 8, 16.
Step 2: congestion avoidance, rounds 6 to 8: 17, 18, 19.
Step 3: the timeout after round 8 sets ssthresh = 19/2 = 9 and cwnd = 1.
Step 4: rounds 9 to 12: 1, 2, 4, 8.
Full list for rounds 1 to 8: **1, 2, 4, 8, 16, 17, 18, 19**; then **1, 2, 4, 8**.

**C5.**
(a) **Server**: socket, bind, listen, accept, read/write, close. **Client**: socket, connect, write/read, close. In the experiment the echo server on 127.0.0.1:5050 returned the upper-cased text: "hello network" came back as **13 bytes "HELLO NETWORK"**, using an ephemeral client port; TCP is a byte stream, so applications must loop on read and delimit their messages.
(b) A resolver asked for www.example.com contacts a **root server** (which refers it to the .com TLD servers), then a **TLD server** (which refers it to the authoritative server of example.com), then the **authoritative server** (which returns the A record). Answers are **cached** according to their TTL by the resolver (and the OS and browser), so most queries are answered locally; recursive resolution is done by the resolver on behalf of the client.
(c) Step 1: 30 dB = 10^(30/10) = 1000.
Step 2: C = B log2(1 + SNR) = 3000 × log2(1001) = 3000 × 9.967 = **29.9 kb/s**.
(d) TLS: the client hello (ciphers, random) → server hello, certificate → certificate verification → key exchange (Diffie-Hellman) → session keys → finished messages → encrypted application data. DDoS mitigation: SYN cookies, rate limiting, anycast and traffic scrubbing services, or filtering of spoofed addresses at the ISP (ingress filtering).
