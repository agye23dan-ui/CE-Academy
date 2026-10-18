# Computer Networks: Class Test

Duration: 60 minutes. Calculator allowed. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** Which layer provides process-to-process delivery?
A) link  B) network  C) transport  D) physical

**2.** The service offered by IP is
A) reliable in-order delivery  B) best-effort packet delivery  C) flow control  D) congestion control

**3.** The transmission delay of a packet of L bits on a link of R bits per second is
A) L/R  B) R/L  C) L × R  D) d/s

**4.** Propagation delay depends on
A) packet size  B) link rate  C) queue length  D) distance and signal speed

**5.** An Ethernet (MAC) address has
A) 32 bits  B) 64 bits  C) 48 bits  D) 128 bits

**6.** A learning switch forwards frames according to
A) IP addresses  B) MAC addresses  C) port numbers  D) DNS names

**7.** ARP maps
A) an IP address to a MAC address  B) a name to an IP address  C) a MAC address to a port  D) a port to a process

**8.** How many usable host addresses has a /26 network?
A) 64  B) 63  C) 30  D) 62

**9.** The network address of 192.168.10.77/26 is
A) 192.168.10.0  B) 192.168.10.64  C) 192.168.10.77  D) 192.168.10.128

**10.** NAT
A) encrypts packets  B) routes packets by name  C) translates private addresses and ports to public ones  D) assigns MAC addresses

**11.** A router chooses among matching forwarding entries by
A) the longest prefix  B) the shortest prefix  C) the first entry  D) random choice

**12.** Dijkstra's algorithm is used in
A) distance-vector routing  B) link-state routing  C) BGP policy  D) ARP

**13.** RIP is a
A) link-state protocol  B) path-vector protocol  C) transport protocol  D) distance-vector protocol

**14.** BGP is used
A) inside a LAN  B) between hosts  C) between autonomous systems  D) for DNS

**15.** UDP is
A) connectionless and unreliable  B) connection-oriented  C) reliable  D) a link-layer protocol

**16.** The TCP three-way handshake is
A) SYN, ACK, FIN  B) SYN, SYN-ACK, ACK  C) ACK, SYN, SYN  D) FIN, ACK, FIN

**17.** During TCP slow start the congestion window
A) is constant  B) grows by one MSS per RTT  C) halves every RTT  D) doubles every RTT

**18.** TCP congestion avoidance uses
A) AIAD  B) MIMD  C) AIMD (additive increase, multiplicative decrease)  D) MIAD

**19.** DNS maps
A) host names to IP addresses  B) IP addresses to MAC addresses  C) MAC addresses to ports  D) ports to processes

**20.** HTTPS uses TCP port
A) 80  B) 443  C) 22  D) 25

## Section B: Problems (40 marks)

**B1. Delay and throughput (10 marks)** (a) The transmission delay of a 1500-byte packet on a 10 Mb/s link, and the propagation delay over 5000 km at 2 × 10^8 m/s [4] (b) The bandwidth-delay product of 100 Mb/s with RTT 40 ms [2] (c) The maximum throughput of a TCP connection with a 32 KB window and RTT 40 ms [2] (d) The mean delay of an M/M/1 queue with lambda = 90 and mu = 100 packets per second, and the utilisation [2]

**B2. Addressing (10 marks)** (a) For 172.16.100.200/19 give the mask, network address, broadcast address and the number of usable hosts [5] (b) Allocate subnets from 192.168.5.0/24 for 100, 50, 25 and 10 hosts [5]

**B3. Routing (10 marks)** Links: S-T 7, S-U 3, S-V 9, T-U 2, T-W 5, U-V 3, U-W 6, V-W 1, V-X 4, W-X 2. (a) Run Dijkstra from S and give the least-cost paths [7] (b) A router has 0.0.0.0/0 to R1, 10.0.0.0/8 to R2, 10.1.0.0/16 to R3: where do 10.1.5.5 and 10.9.9.9 go? [3]

**B4. Errors and transport (10 marks)** (a) Compute the CRC of the message 1010001101 with generator 110101 [4] (b) A TCP sender in slow start has ssthresh = 8 and receives three duplicate ACKs at round 6 (Reno): list cwnd for rounds 1 to 11 [4] (c) Why is an RTO of EstimatedRTT + 4 DevRTT used rather than the average alone? [2]

---

## Answer Key and Solutions

### Section A
1 **C** · 2 **B** · 3 **A** · 4 **D** · 5 **C** · 6 **B** · 7 **A** · 8 **D** · 9 **B** · 10 **C** · 11 **A** · 12 **B** · 13 **D** · 14 **C** · 15 **A** · 16 **B** · 17 **D** · 18 **C** · 19 **A** · 20 **B**

Brief reasons: 8. 2^6 - 2 = 62. 9. The block size is 64: 77 is in 64 to 127. 12. Link-state routing runs Dijkstra on the full topology. 17. Slow start doubles the window each RTT.

### Section B

**B1.**
(a) Step 1: transmission delay = L/R = (1500 × 8)/(10 × 10^6) = 12,000/10^7 = 1.2 × 10^-3 s = **1.2 ms**.
Step 2: propagation delay = d/s = (5 × 10^6 m)/(2 × 10^8 m/s) = 2.5 × 10^-2 s = **25 ms**.
(b) Step 1: BDP = rate × RTT = 100 × 10^6 × 0.04 = 4 × 10^6 bits.
Step 2: 4 × 10^6/8 = 500,000 bytes = **500 KB**.
(c) Step 1: throughput <= window/RTT.
Step 2: = (32,768 × 8)/0.04 = 262,144/0.04 = 6.55 × 10^6 b/s = **6.55 Mb/s**.
(d) Step 1: rho = lambda/mu = 90/100 = **0.9**.
Step 2: W = 1/(mu - lambda) = 1/(100 - 90) = 0.1 s = **100 ms**.
Check: the mean number in the system is rho/(1 - rho) = 0.9/0.1 = 9, and Little's law gives 90 × 0.1 = 9.

**B2.**
(a) Step 1: /19 means 19 network bits, so the third octet has 3 network bits: mask **255.255.224.0**, block size 256 - 224 = 32.
Step 2: third-octet blocks start at 0, 32, 64, 96, 128...; 100 lies in 96 to 127.
Step 3: network **172.16.96.0**, broadcast **172.16.127.255**.
Step 4: host bits = 32 - 19 = 13, so usable hosts = 2^13 - 2 = 8192 - 2 = **8190**.
(b) Largest requirement first:
Step 1: 100 hosts: 7 host bits (126 usable) gives a /25: **192.168.5.0/25** (0 to 127).
Step 2: 50 hosts: 6 bits (62 usable), a /26: **192.168.5.128/26** (128 to 191).
Step 3: 25 hosts: 5 bits (30 usable), a /27: **192.168.5.192/27** (192 to 223).
Step 4: 10 hosts: 4 bits (14 usable), a /28: **192.168.5.224/28** (224 to 239).

**B3.**
(a) Dijkstra from S:
Step 1: settle S (0): tentative T 7, U 3, V 9.
Step 2: settle U (3): T via U = 3 + 2 = 5 (better than 7); V via U = 3 + 3 = 6 (better than 9); W = 3 + 6 = 9.
Step 3: settle T (5): W via T gives no improvement (9 stays).
Step 4: settle V (6): W via V = 6 + 1 = 7 (better than 9); X = 6 + 4 = 10.
Step 5: settle W (7): X via W = 7 + 2 = 9 (better than 10).
Step 6: settle X (9).
Distances: **U 3, T 5, V 6, W 7, X 9**. Paths: S-U (3); S-U-T (5); S-U-V (6); S-U-V-W (7); S-U-V-W-X (9).
(b) Longest-prefix match:
Step 1: 10.1.5.5 matches 0/0, 10/8 and 10.1/16; the longest is the /16: **R3**.
Step 2: 10.9.9.9 matches 0/0 and 10/8 only; the longest is the /8: **R2**.

**B4.**
(a) CRC with generator 110101 (degree 5, so r = 5), message 1010001101.
Step 1: append 5 zeros: 1010001101 00000 = 101000110100000.
Step 2: modulo-2 division; each time the leading bit is 1, XOR the generator under it. The running string after each XOR is:
101000110100000 → 011101110100000 → 000111010100000 → 000001111100000 → 000000010110000 → 000000001100100 → 000000000001110.
Step 3: the last 5 bits are the remainder **01110**.
Step 4: transmitted frame = message followed by remainder = **101000110101110**.
Check: dividing this frame by 110101 leaves remainder 00000.
(b) Reno, ssthresh = 8:
Step 1: rounds 1 to 4 (slow start doubles): 1, 2, 4, 8 (ssthresh reached).
Step 2: rounds 5 and 6 (additive increase of 1 per RTT): 9, 10.
Step 3: three duplicate ACKs at round 6: ssthresh = 10/2 = 5 and cwnd = 5 (fast recovery, no return to 1).
Step 4: rounds 7 to 11: 5, 6, 7, 8, 9.
List: **1, 2, 4, 8, 9, 10, 5, 6, 7, 8, 9**.
(c) Round-trip times vary (queueing, route changes): a timeout set at the average would expire for roughly half of the packets, causing needless retransmissions; adding four deviations covers almost all of the variation, while keeping the RTO low enough to recover quickly from real losses.
