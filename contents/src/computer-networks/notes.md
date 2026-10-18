# Computer Networks: Lecture Notes

A computer network lets programs on different machines exchange data. This course follows the Internet protocol stack from the physical link up to applications: link layer and Ethernet, IP addressing and routing, transport (UDP and TCP), applications (DNS, HTTP, sockets), wireless, security and performance analysis. Calculations were computed with Python (ipaddress, zlib and small scripts) and the socket programs were compiled and run on Linux (WSL), so the outputs shown are real. Prerequisites: Operating Systems, Data Structures and Algorithms, Probability & Statistics and C or Python programming.

# Chapter 1: Foundations

## 1.1 Layered architecture
**Layering** divides communication into modules with defined services. The Internet (TCP/IP) model has five layers: **application** (HTTP, DNS, SMTP), **transport** (TCP, UDP: process-to-process), **network** (IP: host-to-host routing), **link** (Ethernet, Wi-Fi: hop-to-hop) and **physical** (bits on the medium). The OSI model adds presentation and session layers. Each layer **encapsulates** the data of the layer above with its own header (and sometimes trailer): an application message becomes a TCP segment, then an IP packet, then an Ethernet frame. **End-to-end principle**: functions that can only be implemented correctly at the endpoints (reliability, security) belong there; the network core stays simple.

## 1.2 Switching
**Circuit switching** reserves a path (telephone: guaranteed rate, wasted when idle); **packet switching** sends independently routed packets that share links statistically (efficient for bursty data, but queuing delay and loss). Internet routers use **store-and-forward**: a packet must be fully received before it is forwarded.

## 1.3 Delay, loss and throughput
Total nodal delay = processing + queuing + transmission + propagation.
- **Transmission delay** = L/R (packet length over link rate): a 1500-byte packet on a 100 Mb/s link: 12,000/10^8 = **0.12 ms**.
- **Propagation delay** = d/s (distance over signal speed, about 2 × 10^8 m/s in fibre or copper): 2000 km gives **10 ms**.
- **Queuing delay** depends on the load (see 1.4).
Example: a 10 MB file over a 100 Mb/s link takes 10 × 10^6 × 8/10^8 = **0.8 s** to transmit; sent as 1500-byte packets over three store-and-forward links, the extra pipeline delay is two packet times (0.24 ms): total 0.80024 s (plus propagation).
**Bandwidth-delay product** (BDP) = rate × round-trip time = the amount of data in flight needed to keep the link full: 1 Gb/s with RTT 50 ms: **6.25 MB**; 10 Mb/s with RTT 100 ms: 125 KB. A TCP window smaller than the BDP wastes capacity: a window of 65,535 bytes (no window scaling) at RTT 100 ms limits throughput to 65,535 × 8/0.1 = **5.2 Mb/s** whatever the link speed.

## 1.4 Queueing and the M/M/1 model
For Poisson arrivals at rate lambda and exponential service at rate mu, the utilisation is rho = lambda/mu, the mean number in the system L = rho/(1 - rho), the mean time in the system W = 1/(mu - lambda) and the waiting time W_q = rho/(mu - lambda). Example: lambda = 800 packets/s, mu = 1000 packets/s: rho = **0.8**, L = **4** packets, W = **5 ms**, W_q = **4 ms**. As rho approaches 1 the delay grows without bound: queues explode near full utilisation, which is why links are kept below about 70 to 80 percent load.

# Chapter 2: The Link Layer

## 2.1 Framing and error detection
A frame has a header (addresses, type), a payload and a trailer with an error-detecting code. **Parity** detects odd numbers of bit errors. The **Internet checksum** is the one's-complement sum of 16-bit words, complemented: for the IP header words 4500, 0073, 0000, 4000, 4011, c0a8, 0001, c0a8, 00c7 the checksum is **0xb861**. The **cyclic redundancy check (CRC)** treats the message as a polynomial and appends the remainder of division by a generator polynomial G(x) (modulo-2 arithmetic, so subtraction is XOR). It detects all single-bit errors, all burst errors shorter than the degree of G, and all odd numbers of errors if G contains the factor (x + 1).
Worked example: message 1101011, generator 1011 (x^3 + x + 1): append 3 zeros (1101011000) and divide: the **remainder is 110**, so the transmitted frame is **1101011110**. The receiver divides the whole frame: remainder 000 means no error detected; flipping a single bit of the frame gives a non-zero remainder (001 when the third bit is flipped). Ethernet uses CRC-32; the CRC-32 of the ASCII string "123456789" is **0xCBF43926** (check value).
**Error correction**: Hamming codes add parity bits to correct single-bit errors (see Communication Systems); retransmission (ARQ) corrects errors detected.

## 2.2 Multiple access and Ethernet
Shared media need a protocol. **ALOHA** (pure efficiency 18 percent, slotted 37 percent); **CSMA/CD** (Ethernet bus): listen before sending, detect collisions while sending, back off exponentially (binary exponential backoff). A sender must still be transmitting when a collision signal returns, so the frame time must exceed the round-trip propagation time: at 10 Mb/s the minimum frame of **512 bits (64 bytes)** takes **51.2 microseconds**, which limits the network diameter (about 2.5 km with repeaters, 5 km in the ideal case 51.2 μs × 2 × 10^8 m/s/2). Modern Ethernet is **switched and full-duplex** (no collisions), so CSMA/CD is rarely used; the 64-byte minimum remains. Wi-Fi uses **CSMA/CA** (collision avoidance with acknowledgements and optional RTS/CTS) because a radio cannot hear while it transmits and has hidden terminals.
**Addresses**: a 48-bit **MAC address** (for example 00:1A:2B:3C:4D:5E) identifies an interface on the link. **ARP** maps an IP address to a MAC address with a broadcast request. A **switch** learns which MAC address is on which port (a self-learning table), forwards frames selectively, and isolates collision domains; a **hub** repeats everything; **VLANs** split a switch into logical networks; **spanning tree** prevents switching loops. Ethernet frame: 14-byte header, 46-1500 bytes payload (the MTU is 1500 bytes), 4-byte CRC, plus preamble and inter-frame gap (the on-wire size of a full TCP segment is 1538 bytes for 1460 bytes of data: goodput at 100 Mb/s is at most **94.9 Mb/s**).

## 2.3 Reliable data transfer principles
**Stop-and-wait** sends one frame and waits for the acknowledgement: for a 1 Mb/s link, 1500-byte frames (transmission time 12 ms) and one-way propagation 20 ms, utilisation U = T_t/(T_t + 2 T_p) = 12/(12 + 40) = **0.231**. A **sliding window** keeps several frames in flight: the window needed for full utilisation is 1 + 2 T_p/T_t = **4.33**, so 5 frames. **Go-Back-N**: the receiver accepts only in order; on a loss the sender retransmits the lost frame and all that followed; a k-bit sequence number allows a window of 2^k - 1 (7 for k = 3). **Selective Repeat**: the receiver buffers out-of-order frames; the window is at most 2^(k-1) (4 for k = 3) to avoid ambiguity.

# Chapter 3: The Network Layer: IP and Routing

## 3.1 IPv4 addressing
A 32-bit address, written as four decimal bytes, has a network prefix and a host part. **CIDR** notation a.b.c.d/n uses an n-bit prefix. A /n network has 2^(32 - n) addresses, of which 2 (the network address and the broadcast address) are not usable by hosts (except /31 and /32).
Example: 192.168.10.77/26. Mask 255.255.255.192; the block size is 64; the network address is **192.168.10.64**, the broadcast address **192.168.10.127**, the usable hosts 192.168.10.65 to **192.168.10.126** (62 hosts).
**Subnetting** 192.168.10.0/24 into 4 equal subnets: 192.168.10.0/26, .64/26, .128/26, .192/26 (62 hosts each).
**VLSM (variable-length subnet masks)**: allocate the largest requirement first. From 10.0.0.0/22 (1024 addresses) for 500, 200, 100 and 50 hosts: 500 hosts needs a /23 (510 usable): **10.0.0.0/23**; 200 hosts needs /24 (254): **10.0.2.0/24**; 100 hosts needs /25 (126): **10.0.3.0/25**; 50 hosts needs /26 (62): **10.0.3.128/26**. Used 960 of 1024 addresses.
**Route aggregation**: 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24 and 192.168.3.0/24 collapse into **192.168.0.0/22**. **Private ranges**: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 (RFC 1918); **NAT** lets many private hosts share one public address by rewriting addresses and ports. **DHCP** assigns addresses automatically. IPv6 uses 128-bit addresses (no broadcast, no router fragmentation, simplified header, built-in autoconfiguration) to solve address exhaustion.

## 3.2 Forwarding
A router matches the destination address against its forwarding table using **longest-prefix match**: with the entries 0.0.0.0/0 to R1, 10.0.0.0/8 to R2, 10.1.0.0/16 to R3 and 10.1.2.0/24 to R4, the address 10.1.2.77 goes to **R4**, 10.1.9.9 to **R3**, 10.200.0.1 to **R2** and 8.8.8.8 to **R1** (the default route). The IPv4 header (20 bytes) has the version, header length, TTL (decremented at each hop; at 0 the packet is dropped and an ICMP message is sent: this is how traceroute works), protocol (6 = TCP, 17 = UDP), the header checksum and the source and destination addresses. **Fragmentation** splits a packet larger than the link MTU.

## 3.3 Routing algorithms
**Link-state (Dijkstra)**: every router floods its link costs and computes shortest paths over the complete graph (OSPF). **Distance-vector (Bellman-Ford)**: each router tells its neighbours its distance estimates and uses D_x(y) = min over neighbours v of (c(x, v) + D_v(y)) (RIP).
Example graph (undirected link costs): A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2, D-F 6, E-F 3. Dijkstra from A gives the distances **B 3, C 2, D 8, E 10, F 13** with the paths A-C, A-C-B, A-C-B-D, A-C-B-D-E and A-C-B-D-E-F. Distance-vector from A after rounds 1, 2, 3 (unreached = infinity): round 1: B 3, C 2, D 9, E 12; round 2: D 8, E 11, F 15; round 3: E 10, F 14; and the final F = 13 on the next round. DV suffers from the **count-to-infinity** problem on bad news (mitigated by split horizon and poison reverse); link-state converges faster but needs more memory and flooding.
**Internet routing is hierarchical**: **intra-AS** protocols (OSPF, IS-IS, RIP) within an autonomous system and **BGP** between autonomous systems, driven by commercial **policy** (customer, provider, peer relationships) rather than shortest paths.

# Chapter 4: The Transport Layer

## 4.1 UDP and ports
**UDP** adds only ports (to demultiplex to the right process) and an optional checksum: connectionless, unreliable, no congestion control; used for DNS, streaming, games, QUIC. A socket is identified by an IP address and port. A UDP test program on the loopback interface exchanged three datagrams ("abc" returned as "cba", "hello" as "olleh", "datagram" as "margatad") with round-trip times below 5 ms; a datagram sent to a closed UDP port produced **no reply** (the sender simply times out); a TCP connection attempt to a closed port failed immediately with **ConnectionRefused**.

## 4.2 TCP
TCP provides a **reliable, ordered byte stream**. Mechanisms:
- **Connection setup**: three-way handshake (SYN, SYN-ACK, ACK); teardown with FIN (and TIME_WAIT).
- **Reliability**: sequence numbers count bytes; cumulative **acknowledgements**; retransmission on timeout or on three duplicate ACKs (fast retransmit).
- **Flow control**: the receiver advertises a **window** (rwnd) so the sender cannot overrun its buffer.
- **Congestion control**: the sender keeps a **congestion window** (cwnd) and sends min(cwnd, rwnd).
**RTT estimation and timeout**: EstimatedRTT <- 0.875 EstimatedRTT + 0.125 SampleRTT; DevRTT <- 0.75 DevRTT + 0.25 |SampleRTT - EstimatedRTT|; **RTO = EstimatedRTT + 4 DevRTT**. Example (initial estimate 100 ms, deviation 10 ms; samples 120, 90, 150, 300, 100 ms): the RTO becomes 152.5, 150.9, 193.6, **389.0** and 351.9 ms: a single outlier of 300 ms raises the timeout sharply.

## 4.3 Congestion control
**Slow start**: cwnd starts at 1 MSS and doubles every RTT (it increases by 1 MSS per ACK) until it reaches ssthresh; then **congestion avoidance** adds 1 MSS per RTT (additive increase). On a loss: timeout: ssthresh = cwnd/2, cwnd = 1; triple duplicate ACK (Reno): ssthresh = cwnd/2, cwnd = ssthresh (multiplicative decrease, **AIMD**). With ssthresh = 16 MSS the window per RTT is 1, 2, 4, 8, 16, 17, 18, 19, 20, 21 ... The AIMD sawtooth gives fair sharing of a bottleneck. Cubic (Linux default) and BBR (rate-based) are modern variants.
**Throughput model** (Mathis): throughput ≈ 1.22 MSS/(RTT sqrt(p)): MSS = 1460 bytes, RTT = 100 ms, loss rate p = 10^-4: 1.22 × 11,680/(0.1 × 0.01) = **14.2 Mb/s**: loss rate matters more than raw capacity; long RTTs and loss limit TCP on long fat networks.
**Socket programming** (C, verified): a TCP server binds to 127.0.0.1:5050, listens, accepts and echoes upper-cased data; the client connects and sends text.
```c
int s = socket(AF_INET, SOCK_STREAM, 0);          /* server side */
bind(s, (struct sockaddr *)&addr, sizeof addr);    /* addr: 127.0.0.1, port 5050 */
listen(s, 5);
int fd = accept(s, (struct sockaddr *)&client, &len);
n = read(fd, buf, sizeof buf);  write(fd, buf, n);
```
Result: the client sent "hello network" and received **13 bytes "HELLO NETWORK"**; "tcp is a byte stream" returned as "TCP IS A BYTE STREAM" (20 bytes); the client used an **ephemeral port** (32768 or higher on Linux). Because TCP is a **byte stream**, a single read may return part of a message or two messages joined: applications must delimit messages (length prefix or newline) and loop on read.

# Chapter 5: The Application Layer

- **DNS**: a distributed, hierarchical database mapping names to addresses (root, TLD, authoritative servers; recursive resolvers cache answers according to TTL). Record types: A, AAAA, CNAME, MX, NS.
- **HTTP**: request-response over TCP (HTTP/1.1 persistent connections; HTTP/2 multiplexes streams; HTTP/3 uses QUIC over UDP). Methods GET, POST, PUT, DELETE; status codes 200, 301, 404, 500; headers; cookies; caching; REST APIs; TLS gives HTTPS.
- **Email** (SMTP, IMAP), **FTP**, **SSH**, **peer-to-peer** and **content-delivery networks** (CDNs place copies near users; DNS redirects clients).
**Throughput of a web page**: with a page of 1 object per TCP connection and RTT of 100 ms, setting up a connection (1 RTT) plus the request (1 RTT) costs 2 RTT = 200 ms before the data arrives; persistent connections and parallel connections reduce this.

# Chapter 6: Wireless, Security and Management (overview)
- **Wireless**: path loss, fading, hidden terminal, CSMA/CA, Wi-Fi (802.11 a/b/g/n/ac/ax), cellular networks (4G LTE, 5G; handover), Bluetooth, mobile IP. **Shannon capacity** C = B log2(1 + SNR): a 3 kHz channel with 30 dB SNR (1000): 3000 × log2(1001) = **29.9 kb/s**.
- **Security**: confidentiality, integrity, authentication. Symmetric encryption (AES), public-key cryptography (RSA, elliptic curves), digital signatures, certificates and **TLS** (handshake: certificate, key exchange, then symmetric keys), firewalls, VPNs, common attacks (eavesdropping, spoofing, SYN flood, DDoS, man-in-the-middle, DNS poisoning).
- **Management**: SNMP, ping (ICMP echo), traceroute, Wireshark packet capture, `ss` and `netstat`, and software-defined networking (a controller computes forwarding rules).

## Quick reference
- Transmission delay L/R; propagation d/s; BDP = R × RTT; M/M/1: W = 1/(mu - lambda).
- /n has 2^(32 - n) addresses (2^(32 - n) - 2 hosts); longest-prefix match.
- CRC: append the remainder of division by G; Internet checksum: one's-complement sum.
- TCP: RTO = EstRTT + 4 DevRTT; slow start doubles per RTT; AIMD; throughput ≈ 1.22 MSS/(RTT sqrt p).
- Shannon: C = B log2(1 + SNR).
