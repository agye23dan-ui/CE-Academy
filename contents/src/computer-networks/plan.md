# Computer Networks: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 6 to 7 problems and hands-on work, 1 review with the app's quizzes). Networking is learned by capturing and writing packets: install **Wireshark**, use Python's `socket` module and a Linux shell (`ip`, `ss`, `ping`, `traceroute`, `dig`, `curl`, `tcpdump`), and build a small network in a simulator (Mininet, GNS3 or Cisco Packet Tracer).

## Textbooks
- James Kurose and Keith Ross, *Computer Networking: A Top-Down Approach*. The standard text; the order of this course follows it.
- Larry Peterson and Bruce Davie, *Computer Networks: A Systems Approach* (free online).
- Andrew Tanenbaum and David Wetherall, *Computer Networks*.
- W. Richard Stevens, *TCP/IP Illustrated, Volume 1*, and *UNIX Network Programming*. The classics on protocols and sockets.
- Brian "Beej" Hall, *Beej's Guide to Network Programming* (free online).

## Free courses and tools
- Stanford CS144 (Introduction to Computer Networking; build a TCP in C++), MIT 6.829, Kurose-Ross video lectures, Coursera "Computer Networks" courses.
- Tools: Wireshark, tcpdump, nmap, iperf3 (measure throughput), Mininet (emulated networks), netcat, Scapy (craft packets in Python), dig/nslookup, curl -v.
- Subnet calculators and the Python `ipaddress` module (use them to check hand calculations, not to replace them).

## Week by week

**Week 1: Internet architecture, layering, delays (Ch 1.1 to 1.3).** Do: Assignment 1 Q1. Measure RTT with `ping` and trace a route with `traceroute`; capture a packet in Wireshark and identify each header.

**Week 2: Queueing, throughput, bandwidth-delay product (Ch 1.3, 1.4).** Do: Assignment 1 Q2. Simulate an M/M/1 queue in Python and compare with the formulas.

**Week 3: Link layer: error detection, CRC, multiple access (Ch 2.1 to 2.3).** Do: Assignment 1 Q3 to Q6. Implement CRC and the Internet checksum.

**Week 4: Ethernet, switches, ARP (Ch 2.2).** Do: Assignment 1 Q7. Sit the **Class Test** at the end of the week (Chapters 1 to 3.1). Watch ARP in Wireshark.

**Week 5: IP addressing, subnetting, CIDR, NAT, DHCP (Ch 3.1, 3.2).** Do: Assignment 2 Q1 to Q4. Practise 20 subnetting problems by hand and check with `ipaddress`.

**Week 6: Forwarding and routing algorithms (Ch 3.2, 3.3).** Do: Assignment 2 Q5 to Q7. Implement Dijkstra and Bellman-Ford.

**Week 7: Internet routing: OSPF, RIP, BGP; IPv6 (Ch 3.3).** Mock midterm: first half of the Final Exam. Build a three-router network in Mininet or Packet Tracer.

**Week 8: Transport: UDP, reliable data transfer principles (Ch 2.3, 4.1).** Do: Assignment 3 Q1. Implement stop-and-wait over UDP with simulated loss.

**Week 9: TCP: connection management, flow control, RTT estimation (Ch 4.2).** Do: Assignment 3 Q2. Capture a TCP handshake and transfer; read the sequence and acknowledgement numbers.

**Week 10: TCP congestion control (Ch 4.3).** Do: Assignment 3 Q3, Q4. Plot cwnd in an iperf3 or ns-3 experiment; compare Cubic and BBR.

**Week 11: Sockets and application protocols: DNS, HTTP, email (Ch 4.3, 5).** Do: Assignment 3 Q5, Q6. Write a TCP echo server and client, then a small HTTP server in Python.

**Week 12: Wireless, security, TLS (Ch 6).** Do: Assignment 3 Q7. Inspect a TLS handshake with Wireshark and `openssl s_client`.

**Week 13: Project.** Build a networked application (chat server, file transfer protocol with your own framing and error handling, or a simple load balancer) and test it with simulated delay and loss (Linux `tc netem`); write a report with measurements.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can explain the layered model and trace a packet through encapsulation at each layer.
- [ ] I can compute transmission, propagation and queueing delays and the bandwidth-delay product.
- [ ] I can compute CRCs and Internet checksums by hand.
- [ ] I can explain CSMA/CD, switching, ARP and VLANs.
- [ ] I can subnet, allocate VLSM subnets, aggregate prefixes and apply longest-prefix match.
- [ ] I can run Dijkstra and Bellman-Ford and explain count-to-infinity.
- [ ] I can explain TCP connection setup, reliability, flow control, RTT estimation and congestion control.
- [ ] I can write TCP and UDP client and server programs and handle partial reads.
- [ ] I can explain DNS, HTTP and the main security protocols (TLS).
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Capture and read real packets; every header field in the notes appears in Wireshark.
2. Calculate by hand first (subnets, routes, windows), then verify with a tool.
3. Draw a timing diagram for every protocol exchange (handshake, retransmission, congestion window).
4. Break things on purpose: drop packets, add delay with `tc netem`, close ports, and watch the behaviour.
5. Read an RFC section for each protocol (RFC 791 IP, 793 TCP, 1035 DNS) to see the precise rules.
