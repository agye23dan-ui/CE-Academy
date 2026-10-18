# Parallel and Distributed Computing: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

Formulas: S = T(1)/T(p), E = S/p; Amdahl S = 1/((1 - f) + f/p); Karp-Flatt e = (1/S - 1/p)/(1 - 1/p); Brent max(T₁/p, T∞) ≤ T_p ≤ T₁/p + T∞; message time α + βm; Little's law L = λW; M/M/1 W = 1/(μ - λ); Bloom false-positive rate (1 - e^(-kn/m))^k with k = (m/n) ln 2.

## Section A: Multiple Choice (20 marks)

**1.** Strong scaling measures
A) speedup when the problem grows with processors  B) speedup of a fixed-size problem as processors increase  C) clock frequency  D) memory size

**2.** Superlinear speedup can occur because
A) the serial fraction is negative  B) it cannot occur  C) Amdahl's law is wrong  D) more caches in total can make the data fit, reducing memory accesses

**3.** The span of a computation DAG is
A) the number of threads  B) the length of the longest chain of dependent operations  C) the total number of operations  D) the memory footprint

**4.** A kernel with arithmetic intensity below the roofline ridge point is
A) compute bound  B) faster on more cores always  C) network bound  D) memory bound

**5.** An atomic fetch-and-add on a shared counter
A) needs a barrier  B) completes as one indivisible operation  C) disables caches  D) is slower than no synchronization and always loses updates

**6.** A condition variable should be waited on inside a loop because
A) it saves memory  B) wake-ups may be spurious or the condition may change before the thread runs  C) the loop speeds up the wait  D) the loop is required by the CPU

**7.** The ABA problem concerns
A) clock drift  B) a compare-and-swap succeeding although the value changed from A to B and back to A  C) cache coloring  D) MPI collectives

**8.** In OpenMP, schedule(dynamic, 8) is best suited to loops whose iterations
A) contain barriers  B) are empty  C) have irregular, unpredictable costs  D) are all identical

**9.** In a halo exchange for a grid code, the amount of communication per process grows with the
A) volume of the subdomain  B) number of time steps only  C) program size  D) boundary (surface) of the subdomain

**10.** Two ranks both call blocking MPI_Send to each other before any receive; with large messages this may
A) double the bandwidth  B) deadlock  C) always succeed  D) trigger a barrier

**11.** In CUDA, divergence within a warp means
A) memory is freed  B) the kernel crashes  C) warps are split across SMs  D) the warp executes both branch paths serially, reducing efficiency

**12.** Occupancy is limited by
A) the clock only  B) the compiler's name  C) registers per thread, shared memory per block and threads per SM  D) the disk size

**13.** FLP impossibility states that in a fully asynchronous system
A) all clocks agree  B) consensus is impossible to guarantee with even one crash failure  C) consensus needs 3f + 1 nodes  D) messages are never lost

**14.** Byzantine fault tolerance of f faulty replicas requires at least
A) f² replicas  B) f + 1 replicas  C) 2f replicas  D) 3f + 1 replicas

**15.** Two-phase commit blocks when
A) the coordinator fails after participants have voted yes and before the decision is delivered  B) all vote no  C) a participant votes yes  D) the network is fast

**16.** With hash(key) mod N partitioning, changing N moves
A) no keys  B) only one key  C) a fixed 1/N of keys  D) almost all keys

**17.** A Bloom filter can produce
A) neither  B) both false positives and false negatives  C) false negatives only  D) false positives but no false negatives

**18.** Delivery semantics that require idempotent handlers are
A) at-most-once  B) never  C) exactly-once without retries  D) at-least-once

**19.** According to the tail-at-scale argument, a request that fans out to many servers
A) is as fast as the fastest server  B) is as slow as its slowest response, so rare slow responses become common  C) sees the average latency  D) is unaffected by slow nodes

**20.** Eventual consistency means that
A) reads are always the latest  B) if no new updates occur, all replicas eventually converge to the same value  C) replicas never diverge  D) writes are never lost

## Section B: Short Questions (40 marks)

**B1. Amdahl (5 marks)** A program is 95 percent parallelizable. Compute S(8) and S(64), the efficiency at 64, and the limit.

**B2. Karp-Flatt (5 marks)** A speedup of 10 is measured on 16 processors. Compute e and say what a small, constant e indicates.

**B3. Work-span (5 marks)** A computation has work 2,400 and span 30. Give its parallelism and the bounds on the time on 16 processors.

**B4. Domain decomposition (5 marks)** A 4096 × 4096 grid is split over 16 processes either into 1D slabs or 4 × 4 blocks. Compute the cells per process, the halo cells exchanged per step per process in each decomposition (one-cell-wide halo, interior process), and comment.

**B5. MPI deadlock (5 marks)** Two ranks each execute MPI_Send(buf, large, other) followed by MPI_Recv(...). Explain the problem and give two fixes.

**B6. Vector clocks (5 marks)** Compare [2,3,1] with [2,4,1], and [3,1,0] with [2,2,0]: which are ordered and which concurrent?

**B7. Quorums (5 marks)** N = 7 replicas with R = 4 and W = 4. Does the configuration give read-your-writes? How many replica failures can reads and writes each tolerate?

**B8. Bloom filter (5 marks)** A Bloom filter has m = 8,000 bits and n = 500 items. Find the optimal k and the false-positive rate; and the false-positive rate for m = 1,000, n = 100, k = 3.

## Section C: Long Questions (answer any four, 40 marks)

**C1. Performance analysis (10 marks)** Run times of a solver: p = 1: 200 s; 2: 104 s; 4: 58 s; 8: 36 s. (a) Compute speedup, efficiency and Karp-Flatt e for each p [5]. (b) Interpret the e values and suggest causes and remedies [3]. (c) Estimate the speedup on 16 processors if e stays at 0.063 [2].

**C2. Loop scheduling and false sharing (10 marks)** A loop has 200 iterations, iteration i costing i units, run on 4 threads. (a) Compute thread loads and speedup (ideal time = total/4) for static block scheduling and for cyclic (chunk 1) [5]. (b) A parallel histogram uses `long hist[4]` where thread t increments hist[t]; explain the performance problem and give two fixes [3]. (c) State the OpenMP clause that removes the race in a parallel sum [2].

**C3. Event ordering (10 marks)** Events: P1: a; P1: send m1 (to P2); P2: receive m1; P2: send m2 (to P3); P3: c; P3: receive m2; P1: b; P3: send m3 (to P1); P1: receive m3. (a) Lamport timestamps [4]. (b) Vector clocks [4]. (c) Is b concurrent with c? Is a before the receive of m3 at P1? [2]

**C4. Replication and consensus (10 marks)** (a) Nodes are up with probability 0.9. Compute the probability that a majority of 5 nodes is up [2]. (b) A Raft leader in a 5-node cluster has match indices 12, 12, 10, 9, 4 (including itself). What can be committed? [2] (c) Explain how Raft elects a leader and why a majority is needed [3] (d) Describe the CAP choice for a system storing financial ledger entries versus a product-recommendation cache [3].

**C5. Design of a distributed key-value store (10 marks)** Requirements: 10⁹ keys of 1 KB, replication factor 3, 100,000 requests/s of which 20 percent are writes, each node holds up to 1 TB and should be at most 70 percent full. (a) Compute the total storage and the minimum number of nodes [3]. (b) With quorum R = W = 2 compute the node operations per second and the load per node for 6 nodes (assume writes go to 3 replicas and reads query 2) [3]. (c) Explain the partitioning scheme, including virtual nodes, and how failures and node additions are handled [4].

## Answer key and mark scheme

### Section A
1. B 2. D 3. B 4. D 5. B 6. B 7. B 8. C 9. D 10. B 11. D 12. C 13. B 14. D 15. A 16. D 17. D 18. D 19. B 20. B

### Section B

**B1.** S(8) = 1/(0.05 + 0.95/8) = 1/0.16875 = **5.93**; S(64) = 1/(0.05 + 0.01484) = **15.4**; efficiency at 64 = 15.4/64 = **0.24**; limit = 1/0.05 = **20** [5].

**B2.** e = (1/10 - 1/16)/(1 - 1/16) = (0.1 - 0.0625)/0.9375 = **0.040** [3]. A small constant e means that the speedup limit comes from a small inherent serial fraction (about 4 percent) rather than growing parallel overhead [2].

**B3.** Parallelism = 2,400/30 = **80** [2]. On 16 processors: lower bound max(2400/16, 30) = **150**; upper bound 150 + 30 = **180** [3].

**B4.** Cells per process = 4096²/16 = **1,048,576** [1]. 1D slabs (strips of 256 rows): an interior process exchanges two rows of 4096 = **8,192** halo cells per step [1.5]. 2D blocks (1024 × 1024): four edges of 1024 = **4,096** halo cells [1.5]. The 2D decomposition halves the communication volume (it scales with the perimeter, 4n/√p, rather than 2n) and the ratio of halo to interior is 0.39 percent; but it needs more messages (4 neighbours) so latency matters for small blocks [1].

**B5.** Large blocking sends do not complete until the receiver posts a matching receive (no buffering); both ranks block in MPI_Send and neither reaches MPI_Recv: **deadlock** [2]. Fixes (any two): MPI_Sendrecv; non-blocking MPI_Isend/MPI_Irecv followed by MPI_Waitall; order the calls by rank (even ranks send first, odd ranks receive first); buffered send with sufficient buffer [3].

**B6.** [2,3,1] ≤ [2,4,1] componentwise and not equal: the first **happened before** the second [2.5]. [3,1,0] and [2,2,0]: the first is larger in P1 and smaller in P2, so they are **concurrent** [2.5].

**B7.** R + W = 8 > 7, so read quorums intersect write quorums: **yes**, reads see the latest acknowledged write [2]. Reads and writes each need 4 live replicas, so each tolerates up to **3 failures** [3].

**B8.** k = (m/n) ln 2 = 16 × 0.693 = 11.09 → **11**; false-positive rate = (1 - e^(-11 × 500/8000))^11 = (1 - e^(-0.6875))^11 = (0.4972)^11 = **0.046 percent** (4.6×10⁻⁴) [3]. For m = 1,000, n = 100, k = 3: (1 - e^(-0.3))³ = (0.2592)³ = **1.74 percent** [2].

### Section C

**C1.**
(a) Speedup = 200/t: p = 2: **1.92** (E 0.96, e 0.040); p = 4: **3.45** (E 0.86, e 0.053); p = 8: **5.56** (E 0.69, e 0.063) [5].
(b) e rises slowly from 0.04 to 0.063, so there is a small inherent serial part plus overhead that grows with p (communication, synchronization, load imbalance, memory-bandwidth contention). Remedies: overlap communication with computation, reduce synchronization, improve load balance, increase work per process (weak scaling), and optimize memory access [3].
(c) S(16) = 1/(e + (1 - e)/16) = 1/(0.063 + 0.0586) = **8.2** (efficiency 0.51) [2]. (If e keeps rising, the real value will be lower.)

**C2.**
(a) Total = 0 + 1 + ... + 199 = 19,900; ideal per thread 4,975. Static block (50 consecutive iterations each): loads **1,225, 3,725, 6,225, 8,725**; the time is set by the largest load 8,725: speedup 19,900/8,725 = **2.28** (imbalance 1.75). Cyclic: loads **4,900, 4,950, 5,000, 5,050**; time 5,050: speedup **3.94** (imbalance 1.02) [5].
(b) The four counters occupy one 64-byte cache line (32 bytes), so every increment by one thread invalidates the line in the other cores' caches: **false sharing**, which can slow the loop by a factor of two or more (we measured 2.2×). Fixes: pad each counter to its own cache line; or keep a private local counter per thread and merge after the loop (reduction) [3].
(c) `reduction(+:sum)` [2].

**C3.**
(a) Lamport: P1: a = 1, send m1 = 2, b = 3, receive m3 = max(3, 6) + 1 = 7. P2: receive m1 = 3, send m2 = 4. P3: c = 1, receive m2 = max(1, 4) + 1 = 5, send m3 = 6 [4].
(b) Vector clocks [P1, P2, P3]: a [1,0,0]; send m1 [2,0,0]; P2 receive m1 [2,1,0]; send m2 [2,2,0]; c [0,0,1]; P3 receive m2 [2,2,2]; b [3,0,0]; send m3 [2,2,3]; P1 receive m3 [4,2,3] [4].
(c) b = [3,0,0] and c = [0,0,1] are incomparable: **concurrent**. a = [1,0,0] ≤ [4,2,3]: **a happened before** the receive of m3 [2].

**C4.**
(a) P(at least 3 of 5 up) = Σ_{k=3}^{5} C(5,k) 0.9^k 0.1^(5-k) = 0.0729 + 0.32805 + 0.59049 = **0.99144** [2].
(b) A majority is 3 of 5. Sorted indices 12, 12, 10, 9, 4: the third-highest is **10**, so entries up to index 10 are stored on at least three servers and can be committed (provided the entry at index 10 is from the leader's current term) [2].
(c) Servers start as followers; if no heartbeat arrives before a randomized election timeout, a follower becomes a candidate, increments its term, votes for itself and requests votes; a server grants one vote per term and only to a candidate whose log is at least as up to date; a candidate with a **majority** becomes leader and sends heartbeats. A majority is needed because any two majorities intersect, so two leaders can never both be elected in one term and every committed entry survives into the next leader's log [3].
(d) Ledger: **CP**: refuse or delay operations that cannot reach a quorum rather than risk inconsistent balances. Recommendation cache: **AP**: serve possibly stale data during a partition and reconcile later because staleness is harmless [3].

**C5.**
(a) Data = 10⁹ × 1 KB = 1 TB per copy; × 3 replicas = **3 TB**. At 70 percent of 1 TB per node, 3/0.7 = 4.29, so at least **5 nodes** [3].
(b) Writes: 100,000 × 0.2 = 20,000/s, each going to 3 replicas = 60,000 node ops/s. Reads: 80,000/s, each querying 2 replicas = 160,000 node ops/s. Total **220,000 node operations/s**; across 6 nodes about **36,700 per node per second** (check that a node can sustain it; add nodes or caches if not) [3].
(c) Consistent hashing places each node at many pseudo-random positions (virtual nodes, for example 128 per node = 768 positions for 6 nodes) on a hash ring; a key's replicas are the next 3 distinct nodes clockwise (the preference list). Virtual nodes smooth the load and spread a failed node's keys over many survivors. A new node takes over only about 1/N of the keys from its neighbours by streaming data; a failed node is detected by gossip/heartbeats and its replicas serve requests; **hinted handoff** stores writes for a temporarily down replica and delivers them later; **read repair** and anti-entropy (Merkle trees) fix divergence. With R = W = 2 and N = 3, R + W > N so reads see the latest write and the system tolerates one failed replica for both operations [4].
