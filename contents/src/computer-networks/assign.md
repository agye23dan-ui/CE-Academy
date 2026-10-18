# Computer Networks: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. The subnetting, routing, CRC and queueing numbers were computed with Python (`ipaddress`, `zlib` and small scripts) and the socket results were obtained by running the programs on Linux. Reproduce them yourself with Python's `socket` module and Wireshark.

# Assignment 1: Delay, Queueing and the Link Layer (Chapters 1 and 2)

**Q1. Delay and throughput.** (a) The transmission delay of a 1500-byte packet on a 100 Mb/s link and the propagation delay over 2000 km at 2 × 10^8 m/s [3] (b) The time to send a 10 MB file over a 100 Mb/s link [2] (c) The bandwidth-delay product of 1 Gb/s with RTT 50 ms and of 10 Mb/s with RTT 100 ms [2] (d) The throughput limit of a 65,535-byte TCP window at RTT 100 ms [3]

**Q2. M/M/1 queue.** A router transmits packets at mu = 1000 per second. For arrival rates lambda = 500, 800, 900 and 950 per second find rho, the mean number in the system and the mean delay, and comment [10]

**Q3. CRC.** (a) Compute the CRC of the message 11010011101100 with generator 1011 and write the transmitted frame [4] (b) Verify the received frame and show what happens with a single-bit error [3] (c) Which errors does a CRC with generator degree r detect? [3]

**Q4. Internet checksum.** (a) Compute the checksum of the 16-bit words 4500, 0073, 0000, 4000, 4011, c0a8, 0001, c0a8, 00c7 [5] (b) Show how the receiver verifies it [3] (c) Why is the Internet checksum weaker than a CRC? [2]

**Q5. Reliable transfer.** A link of 1 Mb/s carries 1500-byte frames with one-way propagation 20 ms. (a) The utilisation of stop-and-wait [3] (b) The window size for full utilisation [3] (c) The utilisation of a window of 7 on a link with T_t = 1 ms and 2 T_p = 20 ms [2] (d) The maximum window for Go-Back-N and Selective Repeat with 3-bit sequence numbers [2]

**Q6. Ethernet.** (a) The slot time of 10 Mb/s Ethernet with a 512-bit minimum frame and the maximum distance for collision detection [4] (b) The slot time at 100 Mb/s [2] (c) The maximum TCP goodput on 100 Mb/s Ethernet [4]

**Q7. Switching and ARP.** (a) Describe how a learning switch builds its table [4] (b) Describe an ARP exchange for host A (192.168.1.5) to reach host B (192.168.1.9) [3] (c) Compare a hub, a switch and a router [3]

## Solutions to Assignment 1

**Q1.**
(a) Step 1: transmission delay = L/R = (1500 × 8 bits)/(100 × 10⁶ b/s) = 12,000/10⁸ = 1.2 × 10⁻⁴ s = **0.12 ms**.
Step 2: propagation delay = d/s = (2 × 10⁶ m)/(2 × 10⁸ m/s) = 10⁻² s = **10 ms**.
(b) Step 1: file size = 10 × 10⁶ bytes × 8 = 8 × 10⁷ bits.
Step 2: time = 8 × 10⁷/10⁸ = **0.8 s** (plus propagation and, for store-and-forward hops, one packet time per extra hop).
(c) Step 1: bandwidth-delay product = rate × RTT. For 1 Gb/s and 50 ms: 10⁹ × 0.05 = 5 × 10⁷ bits = **6.25 MB**.
Step 2: for 10 Mb/s and 100 ms: 10⁷ × 0.1 = 10⁶ bits = **125 KB**.
(d) Step 1: throughput ≤ window/RTT.
Step 2: = (65,535 × 8 bits)/0.1 s = 524,280/0.1 = 5.24 × 10⁶ b/s = **5.24 Mb/s**, even on a gigabit link (window scaling is needed).

**Q2.** M/M/1 with service rate μ = 1000 packets/s: ρ = λ/μ, mean number in system L = ρ/(1 - ρ), mean delay W = 1/(μ - λ).
Step 1: λ = 500: ρ = 0.5; L = 0.5/0.5 = **1**; W = 1/(1000 - 500) = **2 ms**.
Step 2: λ = 800: ρ = 0.8; L = 0.8/0.2 = **4**; W = 1/200 = **5 ms**.
Step 3: λ = 900: ρ = 0.9; L = 0.9/0.1 = **9**; W = 1/100 = **10 ms**.
Step 4: λ = 950: ρ = 0.95; L = 0.95/0.05 = **19**; W = 1/50 = **20 ms**.
Comment: the delay grows without bound as ρ approaches 1; going from 50 to 95 percent load increases the delay tenfold, so links are provisioned for peak loads well below capacity.

**Q3.** Message 11010011101100, generator G = 1011 (x³ + x + 1), so r = 3.
(a) Step 1: append r = 3 zeros: 11010011101100 000 (17 bits).
Step 2: divide by 1011 using modulo-2 (XOR) division; whenever the leading bit is 1, XOR the generator under it. The running 17-bit string after each XOR step is:
01100011101100000 → 00111011101100000 → 00010111101100000 → 00000001101100000 → 00000000110100000 → 00000000011000000 → 00000000001110000 → 00000000000101000 → 00000000000000100.
Step 3: the last 3 bits are the remainder: **100**.
Step 4: transmitted frame = message followed by the remainder = **11010011101100 100**.
(b) Step 1: divide the received frame 11010011101100100 by 1011: the remainder is **000**, so the frame is accepted.
Step 2: flip one bit (for example the fourth bit): the remainder becomes 101 ≠ 0, so the error is detected (every single-bit error leaves a non-zero remainder because G(x) has more than one term).
(c) A CRC with a generator of degree r detects all single-bit errors, all double-bit errors (for a suitable generator), all odd numbers of errors if (x + 1) divides G, all burst errors of length ≤ r, and a fraction 1 - 2⁻ʳ of longer bursts; CRC-32 (r = 32) misses only about 1 in 4 billion random errors.

**Q4.** 16-bit one's-complement sum of the words 4500, 0073, 0000, 4000, 4011, c0a8, 0001, c0a8, 00c7 (hexadecimal).
(a) Step 1: running sum: 0x4500 + 0x0073 = 0x4573; + 0x0000 = 0x4573; + 0x4000 = 0x8573; + 0x4011 = 0xc584; + 0xc0a8 = 0x1862c; + 0x0001 = 0x1862d; + 0xc0a8 = 0x246d5; + 0x00c7 = 0x2479c.
Step 2: fold the carry (the top digit 2) back into the low 16 bits: 0x479c + 0x0002 = 0x479e.
Step 3: take the one's complement (invert all 16 bits): 0xffff - 0x479e = **0xb861**.
(b) The receiver sums all the words **including the checksum**: 0x479e + 0xb861 = 0xffff. All ones means no error is detected.
(c) Addition is commutative and insensitive to word order, so reordered words, or two errors that cancel (one +1 and one -1), are not detected, and bursts are detected only with probability about 1 - 2⁻¹⁶. It is cheap in software, but a CRC (computed in hardware) is far stronger.

**Q5.** 1 Mb/s link, 1500-byte frames, one-way propagation T_p = 20 ms.
(a) Step 1: frame transmission time T_t = 1500 × 8/10⁶ = 12,000/10⁶ = 12 ms.
Step 2: stop-and-wait utilisation U = T_t/(T_t + 2T_p) = 12/(12 + 40) = 12/52 = **0.231** (23 percent).
(b) Step 1: window needed to keep the link busy: W = 1 + 2T_p/T_t = 1 + 40/12 = 4.33.
Step 2: round up: a window of **5 frames**.
(c) Step 1: with T_t = 1 ms and 2T_p = 20 ms: U = W/(1 + 2T_p/T_t) = 7/(1 + 20) = 7/21 = **0.333**.
(d) Step 1: Go-Back-N with 3-bit sequence numbers: window ≤ 2³ - 1 = **7**.
Step 2: Selective Repeat: window ≤ 2³⁻¹ = **4** (a larger window makes retransmitted old frames indistinguishable from new ones).

**Q6.**
(a) Step 1: slot time = 512 bits/(10 × 10⁶ b/s) = **51.2 μs**.
Step 2: the sender must still be transmitting when a collision signal returns, so the round trip 2T_p ≤ 51.2 μs, i.e. T_p ≤ 25.6 μs.
Step 3: maximum one-way distance = 25.6 × 10⁻⁶ s × 2 × 10⁸ m/s = **5.12 km** (idealised; the real limit is lower, about 2.5 km, because of repeaters and electronics).
(b) At 100 Mb/s: 512/10⁸ = **5.12 μs**, so the allowed network diameter shrinks tenfold (about 100 m for Fast Ethernet hubs).
(c) Step 1: each TCP segment carries 1460 bytes of data in 1538 bytes on the wire (14 Ethernet header + 4 CRC + 20 IP + 20 TCP + 8 preamble + 12 inter-frame gap + 1460 data).
Step 2: goodput = 100 Mb/s × 1460/1538 = **94.9 Mb/s**.

**Q7.** (a) For each frame received on a port the switch records the **source MAC address** and the arrival port (with a timeout). To forward, it looks up the destination address: if known it sends the frame only to that port; if unknown (or broadcast) it **floods** it to all ports except the arrival port; frames whose destination is on the arrival port are filtered.
(b) A broadcasts an ARP request ("who has 192.168.1.9?") to ff:ff:ff:ff:ff:ff; B replies unicast with its MAC address; A caches the mapping (typically for minutes) and sends the IP packet in a frame addressed to B's MAC.
(c) A **hub** repeats bits to all ports (one collision domain, layer 1); a **switch** forwards frames by MAC address (separate collision domains, one broadcast domain, layer 2); a **router** forwards packets by IP address between networks (separate broadcast domains, layer 3).

# Assignment 2: IP Addressing and Routing (Chapter 3)

**Q1. Subnet arithmetic.** For 192.168.10.77/26 find the mask, network address, broadcast address and usable host range [6]; and divide 192.168.10.0/24 into 4 equal subnets with their host counts [4]

**Q2. Another network.** For 172.16.100.200/19 find the network, broadcast and the number of hosts [5]; how many /19 subnets are in 172.16.0.0/16 and what are the first three? [5]

**Q3. VLSM.** (a) Allocate subnets from 10.0.0.0/22 for 500, 200, 100 and 50 hosts [6] (b) The address utilisation [2] (c) Do the same from 192.168.5.0/24 for 100, 50, 25 and 10 hosts [2]

**Q4. Aggregation and private addresses.** (a) Aggregate 192.168.0.0/24 to 192.168.3.0/24 [3] (b) Can 10.1.0.0/17, 10.1.128.0/17 and 10.2.0.0/16 be aggregated? [3] (c) Is 172.16.5.9 private? Is 192.0.2.5 in a private range? [2] (d) Explain NAT [2]

**Q5. Longest-prefix match.** A router has 0.0.0.0/0 to R1, 10.0.0.0/8 to R2, 10.1.0.0/16 to R3 and 10.1.2.0/24 to R4. Where do 10.1.2.77, 10.1.9.9, 10.200.0.1 and 8.8.8.8 go? Why does the rule use the longest prefix? [10]

**Q6. Link-state routing.** Links: A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2, D-F 6, E-F 3. Run Dijkstra from A and give the distances and paths [10]

**Q7. Distance-vector routing.** (a) Give A's distance vector after rounds 1 to 4 of the synchronous Bellman-Ford algorithm for the same network [6] (b) Explain count-to-infinity and split horizon [4]

## Solutions to Assignment 2

**Q1.** 192.168.10.77/26.
Step 1: /26 means 26 network bits, so the mask is 11111111.11111111.11111111.11000000 = **255.255.255.192**.
Step 2: block size in the last octet = 256 - 192 = 64, so blocks start at 0, 64, 128, 192.
Step 3: 77 lies in the block 64 to 127: network **192.168.10.64**, broadcast **192.168.10.127**.
Step 4: usable hosts **192.168.10.65 to 192.168.10.126**, which is 2⁶ - 2 = 62 hosts.
Four equal subnets of 192.168.10.0/24: each needs 2 extra network bits, giving **192.168.10.0/26, 192.168.10.64/26, 192.168.10.128/26, 192.168.10.192/26**, each with 2⁶ - 2 = **62** hosts.

**Q2.** 172.16.100.200/19.
Step 1: /19 = 19 network bits, so the third octet has 3 network bits: mask 255.255.224.0 and block size 256 - 224 = 32 in the third octet.
Step 2: third-octet blocks start at 0, 32, 64, 96, 128, ...; 100 lies in 96 to 127.
Step 3: network **172.16.96.0**; broadcast **172.16.127.255** (third octet 127, last octet 255).
Step 4: host bits = 32 - 19 = 13, so hosts = 2¹³ - 2 = **8190**.
Subnets of 172.16.0.0/16 into /19: 2^(19-16) = **8** subnets; the first three are **172.16.0.0/19, 172.16.32.0/19, 172.16.64.0/19**.

**Q3.** Variable-length subnet masks from 10.0.0.0/22 (1024 addresses): allocate the largest first.
(a) Step 1: 500 hosts: need 2ⁿ - 2 ≥ 500, n = 9 host bits (510 usable), so a /23: **10.0.0.0/23** (10.0.0.0 to 10.0.1.255).
Step 2: 200 hosts: n = 8 (254 usable), a /24: **10.0.2.0/24**.
Step 3: 100 hosts: n = 7 (126 usable), a /25: **10.0.3.0/25**.
Step 4: 50 hosts: n = 6 (62 usable), a /26: **10.0.3.128/26**.
(b) Addresses allocated: 512 + 256 + 128 + 64 = 960 of 1024 = **93.75 percent**; 64 addresses remain free (10.0.3.192/26).
(c) From 192.168.5.0/24: 100 hosts: **192.168.5.0/25** (126 usable); 50 hosts: **192.168.5.128/26** (62); 25 hosts: **192.168.5.192/27** (30); 10 hosts: **192.168.5.224/28** (14).

**Q4.** (a) 192.168.0.0/24 to 192.168.3.0/24: the third octets 0, 1, 2, 3 are contiguous and aligned on a multiple of 4 (binary 000000xx), so the aggregate is **192.168.0.0/22** (22 = 24 - 2 bits).
(b) Step 1: 10.1.0.0/17 and 10.1.128.0/17 merge into **10.1.0.0/16**.
Step 2: This cannot merge with 10.2.0.0/16 into a /15, because a /15 must start on an even second octet and 10.1.0.0 does not.
Step 3: The aggregate is the two prefixes **10.1.0.0/16 and 10.2.0.0/16**.
(c) 172.16.5.9 lies in 172.16.0.0/12 (172.16.0.0 to 172.31.255.255): **private**. 192.0.2.5 is a documentation address (TEST-NET-1), reserved but not one of the RFC 1918 blocks (the Python `is_private` flag is true because it is a reserved range).
(d) **NAT**: a router rewrites the source address and port of outgoing packets (private address and port to the single public address and a unique port) and keeps a translation table to reverse the mapping on replies. It conserves IPv4 addresses but breaks end-to-end connectivity (inbound connections need port forwarding).

**Q5.** Longest-prefix match: pick, among all matching routes, the one with the longest prefix.
Step 1: 10.1.2.77 matches 0.0.0.0/0, 10.0.0.0/8, 10.1.0.0/16 and 10.1.2.0/24; the longest is the /24: **R4**.
Step 2: 10.1.9.9 matches /0, /8 and /16 (the third octet 9 is not 2): **R3**.
Step 3: 10.200.0.1 matches /0 and /8: **R2**.
Step 4: 8.8.8.8 matches only /0: **R1** (the default route).
The longest prefix is the **most specific** route, which allows a general route to be overridden by exceptions and makes aggregation possible without losing detail.

**Q6.** Dijkstra from A (links: A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2, D-F 6, E-F 3).
Step 1: settle A (0): tentative B = 4, C = 2.
Step 2: settle C (2): B via C = 2 + 1 = 3 (better than 4); D = 2 + 8 = 10; E = 2 + 10 = 12.
Step 3: settle B (3): D via B = 3 + 5 = 8 (better than 10).
Step 4: settle D (8): E via D = 8 + 2 = 10 (better than 12); F = 8 + 6 = 14.
Step 5: settle E (10): F via E = 10 + 3 = 13 (better than 14).
Step 6: settle F (13).
Distances and paths: **A 0; C 2 (A-C); B 3 (A-C-B); D 8 (A-C-B-D); E 10 (A-C-B-D-E); F 13 (A-C-B-D-E-F)**. The direct link A-B (cost 4) is not used because A-C-B costs 3.

**Q7.** (a) Synchronous Bellman-Ford: each round every node takes, for each destination, the minimum over its neighbours of (link cost + neighbour's current distance). A's vector:
Round 0 (initial): B 4, C 2, D ∞, E ∞, F ∞.
Round 1: B = min(4, 2 + 1) = 3; C = 2; D = min(via B 4 + 5 = 9, via C 2 + 8 = 10) = 9; E = via C 2 + 10 = 12; F unreachable yet.
Round 2: D = 8 (via B at 3, +5); E = 11; F = 15.
Round 3: E = 10 (via D at 8, +2); F = 14.
Round 4: F = **13** (via E at 10, +3).
Final vector: B 3, C 2, D 8, E 10, F 13, equal to the Dijkstra result; convergence takes as many rounds as the number of hops on the longest shortest path.
(b) **Count-to-infinity**: when a link fails, nodes that depended on it can keep believing in old routes advertised by each other and increase the distance one step at a time (slow convergence, with temporary loops). **Split horizon** prevents a node from advertising a route back to the neighbour from which it learned it; **poison reverse** advertises it with infinite cost; RIP also defines infinity as 16 hops. Link-state protocols avoid the problem because each router has the whole topology.

# Assignment 3: Transport, Applications and Security (Chapters 4 to 6)

**Q1. UDP and TCP experiments.** (a) Describe the result of the UDP loopback test (three datagrams with the payload reversed) [3] (b) What happens when a UDP datagram is sent to a closed port, and a TCP connection attempt? [3] (c) List the services TCP gives that UDP does not [4]

**Q2. RTT estimation.** Initial EstimatedRTT = 100 ms, DevRTT = 10 ms, alpha = 0.125, beta = 0.25. Samples: 120, 90, 150, 300, 100 ms. Compute EstimatedRTT, DevRTT and RTO after each sample and comment [10]

**Q3. Congestion control.** (a) With ssthresh = 16 MSS and a timeout after the 8th RTT, list cwnd (in MSS) at the start of RTTs 1 to 12 (slow start, then +1 per RTT) [5] (b) A Reno sender with ssthresh = 8 receives three duplicate ACKs at round 6: list cwnd for rounds 1 to 11 [5]

**Q4. Throughput.** (a) Mathis throughput for MSS 1460 bytes, RTT 100 ms and loss rate 10^-4; and for RTT 50 ms and 200 ms with p = 10^-4 and 10^-6 [4] (b) The window needed to fill a 1 Gb/s path with RTT 20 ms [2] (c) The throughput of a 32 KB receive window with RTT 40 ms [2] (d) What does this say about long fat networks? [2]

**Q5. Socket programming.** (a) Describe the sequence of socket calls of a TCP server and client [4] (b) What did the echo server experiment return? [3] (c) Why must a TCP application handle partial reads? [3]

**Q6. HTTP timing.** A page has a base file and 5 images; RTT = 100 ms; ignore transmission time. Find the total time for (a) non-persistent HTTP, serial [2] (b) non-persistent with 5 parallel connections [3] (c) persistent without pipelining [3] (d) persistent with pipelining [2]

**Q7. Capacity and security.** (a) The Shannon capacity of a 3 kHz channel with 30 dB SNR [3] (b) Explain the TLS handshake in outline [4] (c) How does a SYN flood work and how can it be mitigated? [3]

## Solutions to Assignment 3

**Q1.** (a) Three datagrams were sent to a UDP server on 127.0.0.1: "abc" returned as "cba", "hello" as "olleh" and "datagram" as "margatad", each round trip taking well under 5 ms; each datagram is independent (no connection setup).
(b) A datagram sent to a closed UDP port produced **no reply**: the sender just times out (the OS may deliver an ICMP port-unreachable, which on some systems appears as ConnectionReset). A TCP connect to a closed port fails at once with **connection refused**, because the other end answers the SYN with a RST.
(c) TCP provides connection setup, a reliable byte stream (acknowledgements and retransmission), in-order delivery, flow control, congestion control and duplicate suppression. UDP gives none of these (only ports and an optional checksum), which makes it lighter and lets applications such as DNS, VoIP and QUIC choose their own recovery.

**Q2.** Update rules (using the estimate before each update for the deviation):
Dev ← 0.75·Dev + 0.25·|Sample − EstimatedRTT|; EstimatedRTT ← 0.875·EstimatedRTT + 0.125·Sample; RTO = EstimatedRTT + 4·DevRTT. Start: Est = 100, Dev = 10.
Step 1 (120 ms): |120 − 100| = 20; Dev = 0.75(10) + 0.25(20) = 12.5; Est = 0.875(100) + 0.125(120) = 102.5; RTO = 102.5 + 4(12.5) = **152.5 ms**.
Step 2 (90 ms): |90 − 102.5| = 12.5; Dev = 0.75(12.5) + 0.25(12.5) = 12.5; Est = 0.875(102.5) + 0.125(90) = 100.94; RTO = 100.94 + 50 = **150.9 ms**.
Step 3 (150 ms): |150 − 100.94| = 49.06; Dev = 0.75(12.5) + 0.25(49.06) = 21.64; Est = 0.875(100.94) + 0.125(150) = 107.07; RTO = 107.07 + 86.6 = **193.6 ms**.
Step 4 (300 ms): |300 − 107.07| = 192.93; Dev = 0.75(21.64) + 0.25(192.93) = 64.46; Est = 0.875(107.07) + 0.125(300) = 131.19; RTO = 131.19 + 257.8 = **389.0 ms**.
Step 5 (100 ms): |100 − 131.19| = 31.19; Dev = 0.75(64.46) + 0.25(31.19) = 56.14; Est = 0.875(131.19) + 0.125(100) = 127.29; RTO = 127.29 + 224.6 = **351.9 ms**.
Comment: the single 300 ms delay spike pushes the RTO to almost 400 ms; the RTO tracks both the average and the variability and decays slowly afterwards.

**Q3.**
(a) Slow start doubles cwnd each RTT until it reaches ssthresh = 16, then congestion avoidance adds 1 MSS per RTT.
Step 1: RTT 1 to 5: **1, 2, 4, 8, 16**.
Step 2: RTT 6 to 8 (congestion avoidance): **17, 18, 19**.
Step 3: timeout at the end of RTT 8 (cwnd was 19): ssthresh = 19/2 = 9 (rounded down) and cwnd = 1.
Step 4: RTT 9 to 12: **1, 2, 4, 8** (slow start again; the next RTT would reach ssthresh = 9).
(b) Reno with ssthresh = 8:
Step 1: rounds 1 to 4: **1, 2, 4, 8** (cwnd reaches ssthresh).
Step 2: rounds 5 and 6 (additive increase): **9, 10**.
Step 3: three duplicate ACKs at round 6: ssthresh = 10/2 = 5 and (fast recovery) cwnd = 5.
Step 4: rounds 7 to 11: **5, 6, 7, 8, 9**.
Full sequence: **1, 2, 4, 8, 9, 10, 5, 6, 7, 8, 9**: the AIMD sawtooth (multiplicative decrease by half, additive increase of 1 per RTT).

**Q4.**
(a) Mathis formula: throughput ≈ 1.22·MSS/(RTT·√p), with MSS = 1460 × 8 = 11,680 bits.
Step 1: RTT 100 ms, p = 10⁻⁴: 1.22 × 11,680/(0.1 × 0.01) = 14,250/0.001 = **14.2 Mb/s**.
Step 2: RTT 50 ms, p = 10⁻⁴: 1.22 × 11,680/(0.05 × 0.01) = **28.5 Mb/s**.
Step 3: RTT 200 ms, p = 10⁻⁶: 1.22 × 11,680/(0.2 × 0.001) = **71.2 Mb/s**.
(b) Step 1: window to fill the path = bandwidth-delay product = 10⁹ b/s × 0.02 s = 2 × 10⁷ bits.
Step 2: = **2.5 MB** of window.
(c) Throughput = window/RTT = (32,768 × 8 bits)/0.04 s = 262,144/0.04 = 6.55 × 10⁶ = **6.55 Mb/s**.
(d) On long fat networks a small window or a tiny loss rate limits TCP far below the link rate: use window scaling and large buffers, low loss, and loss-tolerant congestion control (Cubic, BBR); throughput falls with RTT and with the square root of loss.

**Q5.** (a) **Server**: socket(), bind(), listen(), accept() (blocks until a client connects and returns a new socket), read()/write() (or recv/send), close(). **Client**: socket(), connect() (starts the three-way handshake), write()/read(), close().
(b) The server (127.0.0.1, port 5050) echoed upper-cased text: the client sent "hello network" and received **13 bytes, "HELLO NETWORK"**; "tcp is a byte stream" came back as "TCP IS A BYTE STREAM" (20 bytes). The client's port was an ephemeral port chosen by the OS (32768 or above on Linux).
(c) TCP delivers a **byte stream with no message boundaries**: one read may return part of a message or parts of two messages, so the application must loop until it has received the number of bytes it expects (use a length prefix or a delimiter).

**Q6.** A page with 1 base file and 5 images (6 objects), RTT = 100 ms, transmission time ignored.
(a) Non-persistent, serial: each object needs 1 RTT for the TCP handshake and 1 RTT for request and response: 6 × 2 RTT = 12 RTT = **1.2 s**.
(b) Non-persistent with 5 parallel connections: base page 2 RTT, then the 5 images in parallel 2 RTT: 4 RTT = **0.4 s**.
(c) Persistent without pipelining: base page 2 RTT (handshake + request), then 5 sequential requests of 1 RTT each: 2 + 5 = 7 RTT = **0.7 s**.
(d) Persistent with pipelining: base page 2 RTT, then the 5 requests are sent back to back and answered in about 1 RTT: 3 RTT = **0.3 s**.

**Q7.** (a) Step 1: 30 dB = 10^(30/10) = 1000.
Step 2: C = B log₂(1 + SNR) = 3000 × log₂(1001) = 3000 × 9.967 = **29.9 kb/s** (an upper bound for any coding scheme).
(b) The client sends the supported ciphers and a random number; the server returns its choice, its random number and its **certificate** (public key signed by a certificate authority). The client verifies the certificate chain and the host name, and a key exchange (Diffie-Hellman) establishes a shared secret from which both sides derive symmetric session keys (AES). A "finished" message authenticates the handshake transcript, after which the data are encrypted and authenticated with the symmetric keys.
(c) A **SYN flood** sends many SYN segments (often with forged source addresses) so that the server allocates state for half-open connections until its backlog is full and legitimate clients cannot connect. Mitigations: **SYN cookies** (encode the state in the initial sequence number so nothing is stored until the final ACK), a larger backlog and shorter timeouts, rate limiting, and filtering at the edge or by a DDoS-protection service.