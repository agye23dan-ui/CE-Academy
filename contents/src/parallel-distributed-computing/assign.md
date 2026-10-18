# Parallel and Distributed Computing: Assignments with Worked Solutions

Show formulas and substitute numbers. All numerical answers below were computed in Python (speedup laws, work-span bounds, clocks, hashing, quorum and queueing calculations); the loop-scheduling loads and the data-race behaviour were also checked by running C/OpenMP/pthreads code. Programs marked "sketch" are for reasoning and were not executed.

# Assignment 1: Performance Models and Scalability (70 marks)

## Questions

**Q1. Amdahl's law (12 marks)** A program is 80 percent parallelizable. (a) Compute the speedup and efficiency on 8 and 32 processors and the limit [5]. (b) What parallel fraction is needed for a speedup of 6 on 8 processors? [3] (c) Explain why adding processors beyond a point is wasteful and what to optimize instead [4].

**Q2. Karp-Flatt diagnosis (10 marks)** Measured speedups are 1.9 on 2 processors, 3.4 on 4 and 5.6 on 8. (a) Compute the experimentally determined serial fraction e for each [6]. (b) Is e roughly constant? What does the trend tell you? [4]

**Q3. Work and span (12 marks)** A parallel computation has work T₁ = 4,800 and span T∞ = 60 (unit operations). (a) Compute its parallelism [2]. (b) Give the lower and upper bounds on the time on 8, 32 and 100 processors from Brent's theorem [6]. (c) How many processors are useful? [2] (d) Give work and span for a parallel reduction of 4,096 numbers [2].

**Q4. Roofline (10 marks)** A node has 500 GFLOP/s peak and 100 GB/s memory bandwidth. (a) Compute the ridge point [2]. (b) Find the attainable performance for kernels with arithmetic intensity 0.25, 2 and 10 FLOP/byte and classify each [6]. (c) Name two optimizations for a memory-bound kernel [2].

**Q5. Isoefficiency (12 marks)** Summing n numbers on p processors takes T_p = n/p + 2 log₂ p. (a) Compute speedup and efficiency for (n, p) = (2¹⁶, 64), (2¹⁶, 1024) and (2²⁴, 1024) [6]. (b) How large must n be to keep efficiency at 0.9 with p = 1024? [4] (c) What does it mean for an algorithm to be scalable? [2]

**Q6. Communication cost (6 marks)** With latency α = 2 µs and β = 0.5 ns/byte: (a) Time to send 100 B and 10 MB [2]. (b) The message size at which latency and bandwidth terms are equal [2]. (c) Broadcast of 1 MB to 128 processes with a linear scheme versus a binomial tree [2].

**Q7. Interpreting a scaling study (8 marks)** Run times: p = 1: 120 s; 2: 64 s; 4: 36 s; 8: 23 s; 16: 18 s. Compute the speedup, efficiency and Karp-Flatt value for each p and comment [8].

## Solutions

**Q1.**
(a) Step 1: S(p) = 1/(0.2 + 0.8/p).
Step 2: S(8) = 1/(0.2 + 0.1) = **3.33**, efficiency 0.417.
Step 3: S(32) = 1/(0.2 + 0.025) = **4.44**, efficiency 0.139.
Step 4: Limit = 1/0.2 = **5**.
(b) 6 = 1/((1 - f) + f/8) gives (1 - f) + f/8 = 1/6, 1 - 7f/8 = 0.1667, f = 0.8333 × 8/7 = **0.952**.
(c) Past a few tens of processors the serial 20 percent dominates, so each added processor contributes almost nothing while cost and energy grow. Reduce the serial fraction first: parallelize remaining sections, overlap I/O, remove global synchronization, or use a different algorithm. (Also scale the problem with the machine: Gustafson.)

**Q2.**
(a) e = (1/ψ - 1/p)/(1 - 1/p). p = 2: (0.5263 - 0.5)/0.5 = **0.053**. p = 4: (0.2941 - 0.25)/0.75 = **0.059**. p = 8: (0.1786 - 0.125)/0.875 = **0.061**.
(b) The values are small and nearly constant (0.053 to 0.061), rising only slightly: the limit is mostly an inherent serial part of about 5 to 6 percent, with little additional parallel overhead. A strongly increasing e would indicate growing communication or load imbalance.

**Q3.**
(a) Parallelism = 4,800/60 = **80**.
(b) Lower bound max(T₁/p, T∞); upper bound T₁/p + T∞. p = 8: 600 to 660. p = 32: 150 to 210. p = 100: max(48, 60) = 60 to 108.
(c) Up to about 80 processors are useful; beyond that the span (60) limits the time.
(d) Work = 4,095 additions; span = log₂ 4096 = **12**.

**Q4.**
(a) Ridge = 500/100 = **5 FLOP/byte**.
(b) Attainable = min(500, 100 × AI): AI = 0.25 → **25 GFLOP/s** (memory bound); AI = 2 → **200 GFLOP/s** (memory bound); AI = 10 → **500 GFLOP/s** (compute bound).
(c) Raise arithmetic intensity: cache blocking/tiling, loop fusion, reuse data in registers or shared memory, use lower precision or compression; improve streaming (prefetch, contiguous access).

**Q5.**
(a) (2¹⁶, 64): T = 1024 + 12 = 1036; S = 65,536/1036 = **63.3**, E = **0.988**. (2¹⁶, 1024): T = 64 + 20 = 84; S = **780**, E = **0.762**. (2²⁴, 1024): T = 16,384 + 20 = 16,404; S = **1022.8**, E = **0.999**.
(b) E = n/(n + 2p log₂ p) = 0.9 → n = 9 × 2p log₂ p = 9 × 2 × 1024 × 10 = **184,320**.
(c) An algorithm is scalable if efficiency can be maintained as p grows by increasing the problem size at a reasonable rate (a small isoefficiency function); here n must grow like p log p.

**Q6.**
(a) 100 B: 2 µs + 0.05 µs = **2.05 µs** (latency dominated). 10 MB: 2 µs + 5 ms = **5.002 ms** (bandwidth dominated).
(b) α = βm → m = 2×10⁻⁶/0.5×10⁻⁹ = **4,000 bytes**.
(c) Linear: 127 × (2 µs + 0.5 ms) = **63.8 ms**. Binomial tree: log₂ 128 = 7 steps × 0.502 ms = **3.51 ms** (18 times faster).

**Q7.**
Speedup = 120/t: p = 2: 1.88 (E 0.94, e 0.067); p = 4: 3.33 (E 0.83, e 0.067); p = 8: 5.22 (E 0.65, e 0.076); p = 16: 6.67 (E 0.42, e 0.093). The serial fraction estimate starts near 6.7 percent and grows at 8 and 16 processors, so besides an inherent serial part there is **growing parallel overhead** (communication, imbalance or memory contention). Going from 8 to 16 processors saves only 5 s (23 → 18 s) for twice the hardware.

# Assignment 2: Shared-Memory Programming and GPUs (70 marks)

## Questions

**Q1. Races (10 marks)** Two threads each execute `x = x + 1` on a shared integer initially 0, where each statement compiles to load, add, store. (a) List the possible final values and give an interleaving for each [5]. (b) Name three ways to make the program correct [3]. (c) Explain why this program is not fixed by declaring x `volatile` [2].

**Q2. Deadlock (12 marks)** Thread 1 locks A then B; thread 2 locks B then A. (a) Show an interleaving that deadlocks [3]. (b) Name the four Coffman conditions and which one you break with a global lock order [5]. (c) Rewrite the thread bodies to avoid deadlock [2]. (d) What is the difference between deadlock and livelock? [2]

**Q3. Bounded buffer (12 marks)** Write (sketch) a producer-consumer solution with a buffer of N slots using semaphores `empty` (initially N), `full` (initially 0) and a mutex. Explain why the order of the `wait` operations matters, and what happens if the mutex is acquired before the semaphore wait [12].

**Q4. OpenMP (14 marks)** (a) Find the bug in
```
double sum = 0;
#pragma omp parallel for
for (int i = 0; i < n; i++) sum += a[i];
```
and give two fixes [4]. (b) A loop has iteration i costing i units, i = 0..99, run on 4 threads. Compute the load per thread and the imbalance (max/mean) for static block scheduling and for cyclic (chunk 1) scheduling [6]. (c) With dynamic scheduling and chunks of 5 and 10, the greedy schedule finishes with loads [1050, 1175, 1300, 1425] (chunk 5). What is its imbalance and why can bigger chunks be worse? [4]

**Q5. Cache effects (8 marks)** (a) A cache line is 64 bytes. How many 8-byte counters share one line? [2] (b) Four threads increment their own counters stored in `long c[4]`. Explain the performance problem and give a fix; a measured run took 2.0 s for the adjacent layout and 0.9 s when padded [4]. (c) What speedup did the fix give? [2]

**Q6. Contention bound (6 marks)** Each loop iteration does 10 µs of independent work and 2 µs inside a critical section protected by one lock. What is the maximum speedup regardless of the number of threads? Suggest one improvement.

**Q7. GPU sizing (8 marks)** A kernel processes n = 5,000,000 elements with 128-thread blocks. (a) How many blocks are needed? How many warps per block? [3] (b) An SM has 65,536 registers and 2,048 thread slots. With 32 registers per thread how many blocks fit and what is the occupancy? With 48 registers per thread? [5]

## Solutions

**Q1.**
(a) Step 1: Final values **2** or **1**.
Step 2: Value 2: thread 1 runs load, add, store completely (x = 1), then thread 2 loads 1, adds, stores (x = 2).
Step 3: Value 1: both load 0, both add to get 1, both store 1 (a lost update) (Real runs: four threads incrementing 10⁶ times each lost about 0.4 to 0.5 percent of the 4×10⁶ updates in our experiment.)
(b) Use a mutex around the increment, use an atomic fetch-and-add, or give each thread a private counter and combine after joining (reduction).
(c) `volatile` only prevents the compiler from caching the value in a register; it does not make the load-add-store sequence atomic and gives no ordering guarantees between threads.

**Q2.**
(a) T1 locks A; T2 locks B; T1 tries to lock B (blocked, held by T2); T2 tries to lock A (blocked, held by T1). Neither can proceed.
(b) Mutual exclusion; hold and wait; no preemption; circular wait. A global lock ordering breaks **circular wait**.
(c) Both threads lock A first and then B (and release in reverse order): `lock(A); lock(B); ...; unlock(B); unlock(A)`.
(d) In deadlock threads are blocked forever waiting for each other; in livelock threads keep running and changing state in response to each other (for example repeatedly backing off and retrying at the same time) without making progress.

**Q3.** Sketch:
```
semaphore empty = N, full = 0;  mutex m;
producer: loop { item = produce(); wait(empty); lock(m); put(item); unlock(m); signal(full); }
consumer: loop { wait(full); lock(m); item = get(); unlock(m); signal(empty); consume(item); }
```
`empty` counts free slots and blocks producers when the buffer is full; `full` counts items and blocks consumers when empty; the mutex protects the buffer indices from simultaneous modification. The semaphore waits must come **before** taking the mutex: if a producer locked the mutex first and then waited on `empty` with a full buffer, it would hold the mutex while sleeping and the consumer, which needs the mutex to remove an item, could never run: **deadlock**.

**Q4.**
(a) `sum` is shared and updated by all threads without synchronization: a data race gives wrong, varying results. Fixes: `reduction(+:sum)` (each thread accumulates privately and the partial sums are combined) or `#pragma omp atomic` / `critical` around the update (correct but slow because of serialization).
(b) Step 1: Total work = 0 + 1 + ... + 99 = 4,950; mean per thread 1,237.5.
Step 2: **Static block** (25 consecutive iterations each): loads 300, 925, 1550, 2175; imbalance = 2175/1237.5 = **1.76**.
Step 3: **Cyclic** (thread t takes i ≡ t mod 4): loads 1200, 1225, 1250, 1275; imbalance **1.03**.
Step 4: The block schedule leaves three threads idle while thread 3 finishes.
(c) Imbalance = 1425/1237.5 = **1.15** for chunk 5 (the slowest thread sets the time). Chunk 10 ends with loads [890, 1090, 1335, 1635]: imbalance 1.32. Large chunks near the end of the loop leave a big chunk for one thread, while very small chunks add scheduling overhead; guided scheduling (shrinking chunks) balances both.

**Q5.**
(a) 64/8 = **8** counters per line.
(b) The four counters lie in one cache line; every write invalidates the line in the other cores' caches (**false sharing**), so the line bounces between cores. Fix: pad each counter to its own line (for example a struct with 56 bytes of padding or `alignas(64)`), or accumulate in a local variable and write once at the end.
(c) 2.0/0.9 = **2.2×** faster.

**Q6.** The critical section serializes 2 of every 12 µs of work, so the throughput is limited to one iteration per 2 µs: maximum speedup = 12/2 = **6** (Amdahl with a 1/6 serial fraction). Improvements: shrink the critical section, use atomics or per-thread accumulators merged at the end, or shard the lock (lock striping).

**Q7.**
(a) ⌈5,000,000/128⌉ = **39,063 blocks**; 128/32 = **4 warps** per block.
(b) 32 registers: register limit 65,536/(32 × 128) = 16 blocks; thread-slot limit 2,048/128 = 16 blocks; so **16 blocks, occupancy 100 percent**. 48 registers: 65,536/(48 × 128) = 10.67 → **10 blocks**, resident threads 1,280, occupancy **62.5 percent**.

# Assignment 3: Distributed Systems (70 marks)

## Questions

**Q1. Logical clocks (14 marks)** Events: P1: a; P2: b; P1: send m1 (to P2); P2: receive m1; P3: c; P2: send m2 (to P3); P3: receive m2; P3: send m3 (to P1); P1: receive m3; P1: d. (a) Assign Lamport timestamps [5]. (b) Assign vector clocks [5]. (c) Using the vector clocks decide whether b and c are concurrent, and whether a happened before d [4].

**Q2. Quorums and availability (12 marks)** (a) For N = 5, give two (R, W) pairs that guarantee that reads see the latest write and one that does not [4]. (b) Each node is up with probability 0.95. Compute the probability that a write quorum is available for N = 5, W = 3; N = 3, W = 2; N = 3, W = 3; N = 5, W = 5 [6]. (c) Which choice would you use for a read-heavy workload and why? [2]

**Q3. Consistent hashing (10 marks)** A ring has positions 0 to 99. Nodes A at 10, B at 40, C at 70. A key belongs to the first node at a position greater than or equal to its hash going clockwise (wrapping around). (a) Assign keys with hashes 5, 15, 45, 75, 95 [3]. (b) Add node D at 55; which keys move and from where to where? [3] (c) Compare with `hash mod N` when N changes from 3 to 4 for keys 0..99, given that 73 of 100 keys change nodes [4].

**Q4. Replication and consensus (12 marks)** (a) A Raft leader of a 5-server cluster has log length 7; the highest replicated indices are 7 (leader), 7, 5, 4, 3. What is the highest index that can be committed? [3] (b) Repeat for a 7-server cluster with indices 9, 8, 8, 6, 2, 1, 1 [3] (c) Why does Raft randomize election timeouts? [3] (d) How many Byzantine faults can a 10-replica system tolerate? [3]

**Q5. Atomic commit and sagas (8 marks)** (a) Count the messages in a successful two-phase commit with 5 participants [3] and in an abort when one participant votes no [3]. (b) What is the blocking problem of 2PC? [2]

**Q6. MapReduce (6 marks)** Three input lines: "a b a c a", "b b a", "c c c a b". (a) How many key-value pairs does the map phase emit without and with a combiner? [3] (b) Give the word counts [3].

**Q7. Latency and tail behavior (10 marks)** A server has service rate 100 requests/s. (a) For arrival rates 50, 80 and 95 requests/s compute utilization, mean response time and mean number in system (M/M/1) [6]. (b) A request fans out to 50 back-end servers, each slow with probability 2 percent; what fraction of requests is slow? [2] (c) Suggest two mitigations [2].

**Q8. CAP classification (8 marks)** Classify a bank's account-balance service and a social network's "likes" counter as CP or AP in a partition and justify.

## Solutions

**Q1.**
(a) Step 1: Lamport: P1: a = 1, send m1 = 2, receive m3 = max(2, 6) + 1 = 7, d = 8.
Step 2: P2: b = 1, receive m1 = max(1, 2) + 1 = 3, send m2 = 4.
Step 3: P3: c = 1, receive m2 = max(1, 4) + 1 = 5, send m3 = 6.
(b) Vector clocks [P1, P2, P3]: a [1,0,0]; b [0,1,0]; send m1 [2,0,0]; receive m1 at P2 [2,2,0]; c [0,0,1]; send m2 [2,3,0]; receive m2 at P3 [2,3,2]; send m3 [2,3,3]; receive m3 at P1 [3,3,3]; d [4,3,3].
(c) b = [0,1,0] and c = [0,0,1] are incomparable (neither is ≤ the other), so b and c are **concurrent**. a = [1,0,0] ≤ d = [4,3,3] componentwise and different, so **a happened before d**. (The Lamport stamps 1 and 1 for b and c could not show this.)

**Q2.**
(a) R + W > N guarantees overlap: (R, W) = (3, 3), (2, 4), (1, 5) guarantee latest reads. (2, 2) with N = 5 has R + W = 4 ≤ 5, so a read quorum may miss the write quorum: stale reads possible.
(b) P(at least k of N nodes up) with p = 0.95: N = 5, W = 3: **0.99884**; N = 3, W = 2: **0.99275**; N = 3, W = 3: **0.85737** (= 0.95³); N = 5, W = 5: **0.77378** (= 0.95⁵). Requiring all replicas for writes sharply reduces write availability.
(c) A small R and large W, e.g. N = 3, R = 1, W = 3 (fast reads) but writes need every replica; a balanced choice such as N = 5, R = 2, W = 4 or majority quorums (3, 3) keeps both operations tolerant of failures. For read-heavy loads with rare writes, R = 1, W = N is acceptable only if write unavailability under a single failure is tolerable; majority quorums are the safer default.

**Q3.**
(a) Key 5 → A (10); 15 → B (40); 45 → C (70); 75 → no node at or above 75, wrap to A (10); 95 → wrap to A. Result: {5: A, 15: B, 45: C, 75: A, 95: A}.
(b) D at 55 takes keys in (40, 55]: only **key 45 moves, from C to D**. Others unchanged.
(c) With `mod`, 73 of 100 keys move when N goes from 3 to 4, whereas consistent hashing moves only the keys in the new node's arc (about 1/N of the keys on average, here 1 of 5).

**Q4.**
(a) A log entry is committed when stored on a majority (3 of 5). Sort the indices: 7, 7, 5, 4, 3; the third-highest is **5**: servers with index ≥ 5 are three, so index 5 can be committed (Raft also requires the entry to be from the leader's current term).
(b) Majority of 7 is 4; sorted 9, 8, 8, 6, 2, 1, 1; the fourth-highest is **6**.
(c) If all followers timed out simultaneously they would all become candidates and split the votes forever; randomized timeouts (for example 150 to 300 ms) make it likely that one server times out first, wins a majority and sends heartbeats before the others time out.
(d) n ≥ 3f + 1 gives f ≤ (10 - 1)/3 = **3** Byzantine faults.

**Q5.**
(a) Success: 5 prepare + 5 vote-yes + 5 commit + 5 ack = **20 messages**. Abort when one votes no: 5 prepare + 5 votes, then abort to the 4 who voted yes + 4 acks = **18 messages**.
(b) If the coordinator crashes after participants have voted yes and before sending the decision, participants hold locks and cannot decide on their own (they cannot know whether others voted no): the protocol **blocks** until the coordinator recovers. Mitigations: replicated coordinators (Paxos Commit), timeouts with termination protocols, or sagas with compensating transactions.

**Q6.**
(a) Without combiner: 5 + 3 + 5 = **13 pairs**. With a per-line combiner that sums within a mapper: line 1 emits a, b, c (3 pairs), line 2 emits b, a (2), line 3 emits c, a, b (3): **8 pairs**, a 38 percent reduction in shuffle traffic.
(b) a: 3 + 1 + 1 = **5**; b: 1 + 2 + 1 = **4**; c: 1 + 0 + 3 = **4**.

**Q7.**
(a) ρ = λ/μ, W = 1/(μ - λ), L = λ/(μ - λ). λ = 50: ρ = 0.5, W = **20 ms**, L = **1**. λ = 80: ρ = 0.8, W = **50 ms**, L = **4**. λ = 95: ρ = 0.95, W = **200 ms**, L = **19**. Latency explodes as ρ approaches 1.
(b) 1 - 0.98⁵⁰ = **0.636**: nearly two thirds of requests see at least one slow server.
(c) Hedged requests (send a second copy after a short delay), reduce fan-out, replicate data and take the fastest answer, use timeouts with partial results, keep utilization below about 70 percent, and isolate slow nodes.

**Q8.** Bank balance: **CP**: correctness matters more than availability; during a partition, refuse or delay operations that cannot reach a quorum rather than risk overdrafts or inconsistent balances. Likes counter: **AP**: the counter can be slightly stale or temporarily diverge; accept updates on both sides and merge afterward (a CRDT counter), prioritizing availability and low latency.
