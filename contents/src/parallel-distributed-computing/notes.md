# Parallel and Distributed Computing: Complete Lecture Notes

Prerequisites: computer architecture, operating systems, data structures and algorithms, computer networks and probability. Measurements marked "measured" were produced by compiling and running C programs (pthreads, OpenMP) under gcc on a 4-logical-core Linux machine (WSL); your times will differ, but the lessons will not. All other numbers (speedup laws, clocks, hashing, quorums, Bloom filters) were computed with short Python programs. MPI and CUDA code in these notes is shown for study and was not executed in the environment used to prepare them; no timing is claimed for it.

## Chapter 1. Why Parallel and Distributed Computing

### 1.1 The end of free speedups
Clock frequencies stopped rising around 2005 because of the power wall (dynamic power P = C V² f). Performance now comes from **parallelism**: multiple cores, SIMD vector units, GPUs with thousands of lanes, clusters and data centres. Programs must be written (or compiled) to expose parallel work.

### 1.2 Parallel versus distributed
- **Parallel computing**: several processing elements cooperate on one problem to finish sooner, usually with shared memory or a fast interconnect; the goal is **performance**.
- **Distributed computing**: autonomous computers connected by a network cooperate and appear as one system; the goals are **scale, availability and geographic placement**. Failures, unreliable messages and the lack of a global clock are first-class problems.
- **Concurrency** is the composition of independently executing tasks (it may happen on one core); **parallelism** is their simultaneous execution.

### 1.3 Flynn's taxonomy and memory models
SISD, SIMD (vector units, GPUs' warps), MISD (rare), MIMD (multicore, clusters). Memory: **shared memory** (threads see the same address space; need synchronization and cache coherence), **distributed memory** (each process owns its memory; communicate by messages), and hybrids (MPI between nodes, OpenMP or threads within a node, GPUs as accelerators). NUMA machines have different access times to local and remote memory.

## Chapter 2. Performance Models

### 2.1 Speedup and efficiency
Speedup S(p) = T(1)/T(p); efficiency E(p) = S(p)/p. Linear speedup (S = p) is the ideal; superlinear speedup can occur through cache effects.

### 2.2 Amdahl's law
If a fraction f of the work can be parallelized and the rest is serial, S(p) = 1/((1 - f) + f/p), bounded by 1/(1 - f). Computed values for f = 0.5, 0.9, 0.95, 0.99:
- f = 0.5: S(4) = 1.60, S(16) = 1.88, limit 2.
- f = 0.9: S(4) = 3.08, S(16) = 6.40, S(64) = 8.77, limit 10.
- f = 0.95: S(4) = 3.48, S(16) = 9.14, S(64) = 15.4, limit 20; efficiency at p = 16 is only 57 percent.
- f = 0.99: S(16) = 13.9, S(64) = 39.3, S(1024) = 91.2, limit 100.
To reach S = 8 on 16 processors you need f = (1 - 1/8)/(1 - 1/16) = 0.933. Lesson: the serial fraction dominates; attack it first.

### 2.3 Gustafson's law
For a problem that grows with the machine, scaled speedup is S = p - s(p - 1) where s is the serial fraction of the parallel run. With s = 0.05: 15.25 on 16 processors and 60.85 on 64. Strong scaling (fixed problem) follows Amdahl; **weak scaling** (problem size grows with p) follows Gustafson.

### 2.4 Karp-Flatt metric
From a measured speedup ψ on p processors the experimentally determined serial fraction is e = (1/ψ - 1/p)/(1 - 1/p). A measured speedup of 5.3 on 8 processors gives e = 0.073; 3.2 on 4 processors gives e = 0.083. If e stays constant as p grows, the limit is an inherent serial part; if e grows, parallel overhead (communication, load imbalance, contention) is the cause.

**Measured example.** An OpenMP reduction over 4×10⁸ iterations of sin²(i) + cos²(i) took 39.08 s on 1 thread, 24.73 s on 2 (speedup 1.58, efficiency 0.79), 20.41 s on 3 (1.91, 0.64) and 19.87 s on 4 (1.97, 0.49). The Karp-Flatt value at p = 4 is (1/1.97 - 1/4)/(1 - 1/4) = **0.34**, far above what any serial code in the loop could explain: the four "cores" were hardware threads sharing execution units and the memory system (simultaneous multithreading), so they behave like about two physical cores. Always check what your processors really are.

### 2.5 Work-span (DAG) model
Model a computation as a DAG: **work** T₁ is the total number of operations, **span** T∞ the longest dependency chain. Parallelism = T₁/T∞. Brent's theorem: max(T₁/p, T∞) ≤ T_p ≤ T₁/p + T∞. Example: T₁ = 1000 and T∞ = 50 gives parallelism 20; on p = 4 the time is between 250 and 300; on p = 16 between 62.5 and 112.5; on p = 64 between 50 and 65.6: beyond about 20 processors extra hardware barely helps. Parallel reduction of n = 1024 elements has work 1023 and span log₂ 1024 = 10. Parallel merge sort of n = 2²⁰ elements has work ≈ n lg n = 2.1×10⁷ and span ≈ lg² n = 400 with a parallel merge, so parallelism is about 52,000 (plenty).

### 2.6 Roofline model
Attainable performance = min(peak FLOP/s, bandwidth × arithmetic intensity), with intensity in FLOP per byte. For a machine with 200 GFLOP/s peak and 50 GB/s memory bandwidth the ridge point is 4 FLOP/byte. DAXPY (y = a·x + y) does 2 FLOP per 24 bytes (0.083 FLOP/byte) and reaches only 4.2 GFLOP/s: **memory bound**. A blocked matrix multiply with 64×64 tiles has intensity 2·64³/(3·64²·8) = 5.3 FLOP/byte and can reach the 200 GFLOP/s peak: **compute bound**. Optimization goal: raise intensity (blocking, fusion, data reuse) before adding cores.

### 2.7 Isoefficiency and scalability
Summing n numbers on p processors with a tree reduction takes T_p ≈ n/p + 2 log₂ p (compute plus communication): for n = 2²⁰, p = 16 the speedup is 16.0 (efficiency ≈ 1); for p = 1024 it is 1004 (0.98); with n = 2²⁶ and p = 1024 it is 1023.7. A parallel algorithm is **scalable** if efficiency can be held constant by growing the problem with p (isoefficiency function).

## Chapter 3. Shared-Memory Programming

### 3.1 Threads and the race condition
A **data race** occurs when two threads access the same location, at least one writes, and there is no synchronization. `counter++` is load, add, store, so concurrent increments can overwrite each other. **Measured:** four threads each incrementing a shared long one million times gave final values of 3,980,825, 3,980,110 and 3,985,421 in three runs instead of 4,000,000 (about 0.4 to 0.5 percent of updates lost, different every run), while the same loop protected by a mutex or implemented with an atomic fetch-and-add gave exactly 4,000,000 every time.

```
#include <pthread.h>
#include <stdatomic.h>
long counter = 0;                 /* racy */
atomic_long acounter = 0;         /* atomic */
pthread_mutex_t m = PTHREAD_MUTEX_INITIALIZER;
void *work(void *a) {
  for (int i = 0; i < 1000000; i++) {
    counter++;                                   /* data race */
    pthread_mutex_lock(&m); mcounter++; pthread_mutex_unlock(&m);
    atomic_fetch_add(&acounter, 1);              /* lock-free */
  }
  return 0;
}
```

### 3.2 Synchronization primitives
- **Mutex / lock**: mutual exclusion around a critical section. Keep critical sections short.
- **Condition variable**: wait for a predicate (always in a `while` loop; use with a mutex).
- **Semaphore**: counting permits (bounded buffers).
- **Barrier**: all threads wait until everyone arrives. **Reader-writer lock**, **spinlock**, **atomic operations** (compare-and-swap, fetch-and-add), **memory fences**.
- **Producer-consumer** with a bounded buffer: two semaphores (empty slots, full slots) and a mutex.

### 3.3 Deadlock, livelock and starvation
Deadlock needs the four Coffman conditions: mutual exclusion, hold-and-wait, no preemption and circular wait. Thread 1 locks A then B while thread 2 locks B then A: a cycle. Prevention: a **global lock ordering** (always lock lower-numbered first), try-lock with back-off, acquiring all locks at once, or avoiding locks (lock-free structures, message passing). **Livelock**: threads keep reacting to each other without progress. **Starvation**: a thread never gets the resource (use fair locks).

### 3.4 Memory consistency and cache coherence
Hardware caches keep copies; the **coherence protocol** (MESI) invalidates copies on writes. The **memory model** defines the order in which writes become visible; sequential consistency is the intuitive model, but real CPUs and compilers reorder operations, so correct programs use atomics with acquire/release semantics. A program free of data races behaves as if sequentially consistent (in C11/C++11/Java).

**False sharing.** Threads writing different variables that share one 64-byte cache line make the line bounce between cores. **Measured:** four threads each incrementing their own counter 2×10⁸ times took 2.02 s when the counters were adjacent in an array and 0.91 s when padded to separate cache lines: **2.2× slower purely from false sharing**. Fix by padding or by accumulating in a local variable and writing once.

### 3.5 OpenMP
Compiler directives for loops and tasks:
```
double s = 0;
#pragma omp parallel for reduction(+:s)
for (long i = 0; i < N; i++) s += f(i);
```
Key ideas: `parallel`, `for`, `reduction`, `private`/`shared`, `schedule(static|dynamic|guided)`, `critical`, `atomic`, `barrier`, `task`. Static scheduling suits uniform iterations; dynamic suits irregular ones. The reduction clause gives each thread a private partial sum and combines at the end, avoiding the race.

### 3.6 Thread pools, futures and task parallelism
Creating a thread per task is expensive; use a **thread pool** with a work queue, **work stealing** (Cilk, Java ForkJoin, Go's scheduler, Rust's rayon) to balance irregular tasks, and **futures/promises** for results. Prefer high-level patterns: map, reduce, pipeline, fork-join, divide and conquer.

### 3.7 Lock-free ideas
Compare-and-swap (CAS) loops build lock-free stacks and queues; the **ABA problem** (a value changes A→B→A so CAS wrongly succeeds) is handled with version tags or hazard pointers. Lock-free does not mean faster; it avoids blocking and priority inversion.

## Chapter 4. Parallel Algorithms and Patterns

- **Reduction**: tree of depth log₂ n; floating-point sums are not associative, so results can differ between runs and thread counts.
- **Prefix sum (scan)**: the inclusive scan of 3, 1, 7, 0, 4, 1, 6, 3 is 3, 4, 11, 11, 15, 16, 22, 25. For n = 16 the Hillis-Steele scan takes log₂ n = 4 steps but does 49 additions; the work-efficient Blelloch scan does 2(n - 1) = 30 additions in 2 log₂ n = 8 steps. Scan underlies stream compaction, radix sort, allocation and many GPU algorithms.
- **Matrix multiplication**: 2n³ FLOP; for n = 4096 that is 1.37×10¹¹ FLOP (1.37 s at 100 GFLOP/s). Block (tile) it for cache; distribute by 2D blocks (Cannon, SUMMA) to reduce communication.
- **Stencil / grid codes**: partition the grid, exchange **halo (ghost) cells** with neighbours each step; communication scales with the boundary (surface), computation with the volume, so larger subdomains are more efficient.
- **Sorting**: parallel merge sort, sample sort (choose splitters, bucket, local sort), bitonic sort on GPUs.
- **Graph algorithms**: breadth-first search level by level; irregular, load-imbalanced and bandwidth-bound.
- **Load balancing**: static partitioning for regular work; dynamic scheduling or work stealing for irregular work. Imbalance gives idle processors at barriers.

## Chapter 5. Message Passing and Distributed-Memory Programming

### 5.1 Communication cost model
Sending m bytes costs T = α + β m (latency plus bandwidth term). With α = 1 µs and β = 1 ns/byte: a 1 KB message takes 2 µs (latency-dominated) and a 1 MB message 1.001 ms (bandwidth-dominated). Therefore aggregate small messages. A linear broadcast of 1 KB to 64 processes costs 63(α + βm) = 126 µs; a binomial-tree broadcast needs only log₂ 64 = 6 steps = 12 µs. A ring all-reduce of 100 MB over 8 processes costs 2(p - 1)α + 2(p - 1)/p · mβ = 0.175 s and is nearly independent of p for large messages (bandwidth-optimal).

### 5.2 MPI
Processes with ranks in a communicator; point-to-point `MPI_Send`/`MPI_Recv` (blocking), `MPI_Isend`/`MPI_Irecv` (non-blocking, to overlap communication with computation), and collectives `MPI_Bcast`, `MPI_Scatter`, `MPI_Gather`, `MPI_Reduce`, `MPI_Allreduce`, `MPI_Alltoall`, `MPI_Barrier`.
```
/* study example, not executed in the preparation environment */
MPI_Init(&argc, &argv);
MPI_Comm_rank(MPI_COMM_WORLD, &rank);
double local = partial_sum(rank, size), total;
MPI_Reduce(&local, &total, 1, MPI_DOUBLE, MPI_SUM, 0, MPI_COMM_WORLD);
if (rank == 0) printf("%f\n", total);
MPI_Finalize();
```
Deadlock risk: two ranks both calling blocking `MPI_Send` to each other before receiving can deadlock when messages exceed the buffering; use `MPI_Sendrecv`, non-blocking calls or an ordering convention.

### 5.3 Hybrid and data-parallel training
Typical hybrid: MPI between nodes, OpenMP within. In **data-parallel deep learning** every worker computes gradients on its mini-batch and an all-reduce averages them. If compute takes 100 ms and a non-overlapped all-reduce 20 ms, efficiency is 100/120 = 0.83; overlapping communication with the backward pass leaves 5 ms exposed and efficiency 0.95.

## Chapter 6. GPUs and Accelerators

### 6.1 Execution model
A GPU has many streaming multiprocessors (SMs); a kernel launches a **grid** of **blocks** of **threads**; threads run in **warps** of 32 in lock-step (SIMT). Divergent branches inside a warp execute both paths serially. Memory hierarchy: registers, shared memory (per block, fast), L2, global memory (high latency and bandwidth). **Coalesced** accesses (consecutive threads reading consecutive addresses) combine into few transactions; strided accesses waste bandwidth.
```
/* study example, not executed in the preparation environment */
__global__ void saxpy(int n, float a, const float *x, float *y) {
  int i = blockIdx.x * blockDim.x + threadIdx.x;
  if (i < n) y[i] = a * x[i] + y[i];
}
/* launch: saxpy<<<(n + 255) / 256, 256>>>(n, a, x, y); */
```
For n = 10⁶ and 256 threads per block you need ⌈10⁶/256⌉ = **3,907 blocks**, each of 8 warps.

### 6.2 Occupancy
Resident threads per SM are limited by threads (2,048), registers (65,536) and shared memory. With 256-thread blocks and 40 registers per thread, an SM holds min(2048/256, 65536/(40·256)) = 6 blocks: occupancy 6·256/2048 = **75 percent**; at 64 registers per thread only 4 blocks fit: occupancy **50 percent**. High occupancy helps hide memory latency, but is not the only goal.

### 6.3 When GPUs win
Large, data-parallel workloads with high arithmetic intensity and regular access. Costs: transferring data over PCIe (about 16 to 32 GB/s) can dominate small problems; use pinned memory, streams and overlap. Programming models: CUDA, HIP, OpenCL, SYCL, OpenACC; libraries (cuBLAS, cuDNN, Thrust) are usually better than hand-written kernels.

## Chapter 7. Distributed Systems Fundamentals

### 7.1 Models and challenges
Processes communicate by messages that can be delayed, lost, duplicated or reordered; processes can crash (fail-stop) or behave arbitrarily (Byzantine). There is no shared clock and no global state. Timing models: synchronous (bounded delays), asynchronous (unbounded), partially synchronous (eventually bounded, the realistic assumption). Failure detectors are therefore unreliable (a slow node looks dead).

### 7.2 Time and ordering
**Lamport clocks**: each process increments its counter on every event; on receiving a message sets clock = max(local, message) + 1. If a happened-before b then L(a) < L(b), but not conversely. Example with processes P1, P2, P3: P1: a = 1, send m1 = 2; P2: recv m1 = 3, b = 4, send m2 = 5; P3: c = 1, recv m2 = 6; P1: d = 3. Events a (stamp 1) and c (stamp 1) carry equal stamps, and d (3) at P1 has the same stamp as the receive of m1 at P2 (3), although these pairs are concurrent: Lamport stamps order events consistently with causality but cannot reveal concurrency.
**Vector clocks** keep one counter per process and detect concurrency: the same run gives P1: a [1,0,0], send [2,0,0]; P2: recv [2,1,0], b [2,2,0], send [2,3,0]; P3: c [0,0,1], recv [2,3,2]; P1: d [3,0,0]. Event c [0,0,1] and a [1,0,0] are incomparable, hence **concurrent**; a [1,0,0] < recv m1 [2,1,0], hence a happened before it. Physical clocks (NTP, PTP, GPS) drift; Google Spanner's TrueTime exposes clock uncertainty and waits it out.

### 7.3 Consistency models and CAP
Strong (linearizable) consistency behaves as if there is one copy; sequential, causal and **eventual consistency** are weaker and cheaper. The **CAP theorem**: during a network **partition** a system must choose between **consistency** and **availability**; without partitions it can have both, but there is still a latency versus consistency trade-off (PACELC). CP systems (ZooKeeper, etcd, Spanner) refuse some requests during a partition; AP systems (Dynamo, Cassandra, Riak) stay available and reconcile later (version vectors, last-write-wins, CRDTs).

### 7.4 Replication and quorums
With N replicas, a write waits for W acknowledgements and a read queries R replicas. If **R + W > N** every read quorum intersects every write quorum, so reads see the latest write. Examples: (N, R, W) = (3, 2, 2) tolerates one failed replica for both reads and writes; (3, 1, 3) gives fast reads but no write tolerance; (5, 3, 3) tolerates two failures; (5, 2, 2) violates R + W > N and can return stale data. Availability: with each node up 99 percent of the time, a majority of 3 is available with probability 0.99970 and a majority of 5 with 0.99999.

### 7.5 Consensus
Consensus (agree on one value despite crashes) is impossible in a purely asynchronous system with even one crash (**FLP result**), but practical protocols work under partial synchrony.
- **Paxos**: proposers, acceptors, learners; phase 1 (prepare/promise) and phase 2 (accept/accepted); safe with any minority of failures. Multi-Paxos elects a stable leader.
- **Raft**: understandable consensus with leader election, log replication and safety. Servers are followers, candidates or leaders. A follower becoming a candidate after a randomized election timeout (for example 150 to 300 ms) requests votes; a majority wins. Randomization avoids split votes: with 4 followers drawing timeouts uniformly from 150 to 300 ms, the chance that the two earliest timeouts are within 10 ms of each other (a risk of a split vote) was about **24 percent** in a simulation, so retries are normal and a longer range lowers it. A leader appends entries and commits once a majority stores them; N = 5 tolerates 2 failures.
- **Byzantine fault tolerance** needs n ≥ 3f + 1 replicas to tolerate f arbitrary faults: 4 for f = 1, 7 for f = 2 (PBFT, blockchains).

### 7.6 Atomic commit
**Two-phase commit (2PC)**: the coordinator sends prepare; participants vote yes/no; if all yes, the coordinator sends commit, otherwise abort. With 4 participants a successful 2PC exchanges 4 prepares, 4 votes, 4 commits and 4 acks = 16 messages. It **blocks** if the coordinator fails after participants voted yes; three-phase commit and consensus-based commit (Paxos Commit) reduce blocking. Alternatives: **sagas** (a sequence of local transactions with compensating actions) for microservices.

### 7.7 Partitioning and consistent hashing
Hash partitioning with `hash(key) mod N` is simple, but changing N from 4 to 5 remaps about 80 percent of keys (measured on 20,000 keys: 80.3 percent). **Consistent hashing** places nodes and keys on a ring; a key belongs to the next node clockwise, so adding a node moves only about 1/N of the keys: measured 16.9 percent of keys moved with one point per node and 14.5 percent with 100 **virtual nodes** per node, close to the ideal 20 percent (the new fifth node should take one fifth of the keys). Virtual nodes also even out the load: the ratio of most to least loaded node fell from 2.86 to 1.64 in the same experiment.

### 7.8 Gossip, membership and probabilistic structures
**Gossip** spreads information epidemically: each round each node tells a few random peers; full dissemination takes O(log N) rounds (about log₂ N + ln N ≈ 17 rounds for N = 1000). A **Bloom filter** answers "possibly in set / definitely not". With m = 10,000 bits, n = 1,000 items and the optimal k = (m/n) ln 2 ≈ 7 hash functions, the false-positive rate is (1 - e^(-kn/m))^k = **0.82 percent**; measured on 20,000 absent items: 0.86 percent. No false negatives; no deletions in the basic form. Others: HyperLogLog (cardinality), count-min sketch (frequencies).

## Chapter 8. Distributed Data Processing

### 8.1 MapReduce
Split the input, **map** each record to key-value pairs, **shuffle** by key, **reduce** each group. Word count of "the quick brown fox / the lazy dog / the fox" gives the=3, fox=2, quick=1, brown=1, lazy=1, dog=1. Keys are partitioned by hash (with three reducers: the, brown, lazy → 0; quick → 1; fox, dog → 2 in our run). Combiners pre-aggregate on the map side to cut shuffle traffic. Fault tolerance: re-execute failed tasks; stragglers are handled by speculative execution. Spark keeps data in memory as RDDs/DataFrames with lineage for recovery, making iterative algorithms far faster.

### 8.2 Distributed storage
Distributed file systems (HDFS: large blocks, 3 replicas, NameNode metadata), object stores (S3), key-value stores (Dynamo-style with consistent hashing and quorums), wide-column and document stores, distributed SQL (Spanner, CockroachDB). Use **log-structured** storage (LSM trees) for write-heavy loads, and replicate across failure domains (rack, zone, region).

### 8.3 Stream processing and messaging
Message logs (Kafka) provide ordered, replayable partitions; consumers track offsets. Delivery semantics: at-most-once, at-least-once (retries; make handlers **idempotent**), exactly-once (idempotence + transactions). Stream engines (Flink, Spark Structured Streaming) handle event time, windows and watermarks.

## Chapter 9. Performance, Reliability and Operations

### 9.1 Queueing and tail latency
**Little's law**: L = λW; 200 requests/s with 50 ms latency means 10 requests in the system. For an M/M/1 queue with service rate μ = 100/s, the mean response time 1/(μ - λ) is 33 ms at 70 percent utilization, 50 ms at 80 percent and **100 ms at 90 percent**: latency explodes near saturation, so keep utilization below about 70 percent. **Tail at scale:** if a request fans out to 100 servers and each is slow 1 percent of the time, the chance that at least one is slow is 1 - 0.99¹⁰⁰ = **63 percent** (9.6 percent for a fan-out of 10). Mitigate with hedged requests, timeouts and replicas.

### 9.2 Fault tolerance techniques
Replication, checkpointing and restart (HPC), retries with exponential backoff and jitter, circuit breakers, idempotent operations, timeouts everywhere, load shedding and graceful degradation, chaos engineering. In HPC, the checkpoint interval balancing overhead and lost work is about √(2 · checkpoint cost · MTBF) (Young's formula).

### 9.3 Observability and testing
Metrics, logs and traces (distributed tracing with correlation IDs); test with fault injection, network partitions and clock skew (Jepsen-style); use deterministic simulation where possible. Data races: ThreadSanitizer (`gcc -fsanitize=thread`), Helgrind; deadlocks: lock-order analysis.

## Chapter 10. Design Method and Mistakes Checklist
1. Measure the serial program first and profile; find the hot spots and the memory-versus-compute bound (roofline).
2. Estimate the achievable speedup with Amdahl/Gustafson and the work-span parallelism before coding.
3. Choose the model: shared memory (OpenMP/threads) for one node, MPI across nodes, GPU for data-parallel kernels, a framework (Spark) for data processing, consensus-based systems for coordination.
4. Minimize sharing and communication; make data local; prefer immutable data and message passing.
5. Verify with race detectors and compare against the serial result (allowing for floating-point reassociation).
6. Measure speedup and efficiency, use Karp-Flatt to diagnose.

**Common mistakes.** Forgetting that unsynchronized shared counters lose updates (measured 0.4 to 0.5 percent here); locking too coarsely or in inconsistent orders; false sharing; assuming hardware threads are full cores (our 4-thread speedup was only 1.97); parallelizing a loop whose iterations depend on each other; ignoring load imbalance and communication latency; using `mod N` hashing for resizable clusters; confusing Lamport timestamps with a total causal order; assuming a timeout means a node is dead; retrying non-idempotent operations; and reporting speedup against a slow baseline.
