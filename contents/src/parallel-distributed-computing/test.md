# Parallel and Distributed Computing: Class Test

Duration: 60 minutes. Calculator allowed, no notes. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Speedup S = T(1)/T(p); Amdahl S = 1/((1 - f) + f/p); Karp-Flatt e = (1/S - 1/p)/(1 - 1/p); Brent: max(T₁/p, T∞) ≤ T_p ≤ T₁/p + T∞.

## Section A: Multiple choice (20 marks)

**1.** Concurrency differs from parallelism in that concurrency
A) is the composition of independently executing tasks, which may interleave on one core  B) is always faster  C) requires several processors  D) needs a GPU

**2.** With parallel fraction f, Amdahl's law bounds the speedup by
A) 1/(1 - f)  B) 1 + f  C) f  D) p

**3.** Gustafson's law describes
A) cache misses  B) scaled speedup when the problem grows with the machine  C) communication cost  D) the maximum speedup of a fixed problem

**4.** A data race occurs when
A) two threads access the same location, at least one writes, with no synchronization  B) a thread sleeps  C) two threads run on different cores  D) a lock is held too long

**5.** A mutex provides
A) a barrier  B) mutual exclusion for a critical section  C) faster memory  D) a bigger cache

**6.** Which is NOT one of the Coffman conditions for deadlock?
A) circular wait  B) mutual exclusion  C) hold and wait  D) unlimited memory

**7.** False sharing happens when
A) threads write different variables that lie on the same cache line  B) a GPU shares memory  C) two processes share a file  D) a lock is shared

**8.** In OpenMP the clause reduction(+:sum) is used to
A) give each thread a private partial sum that is combined at the end  B) shorten the loop  C) reduce the number of threads  D) remove the barrier

**9.** Static block scheduling performs badly when
A) there is one thread  B) the loop is empty  C) iteration costs vary strongly (for example cost proportional to i)  D) all iterations cost the same

**10.** In the cost model T = α + βm, α represents
A) bandwidth  B) the number of hops  C) message size  D) the fixed startup latency

**11.** MPI_Allreduce
A) sends a result only to rank 0  B) is a point-to-point send  C) leaves every process with the combined result  D) kills the job

**12.** A GPU warp is
A) a block of 1,024 threads  B) a group of 32 threads executing in lock-step  C) a memory type  D) a kernel

**13.** Memory accesses are coalesced when
A) threads access random addresses  B) consecutive threads access consecutive addresses  C) every thread reads the same address  D) accesses are strided by 32

**14.** A property of Lamport clocks is
A) they need a central server  B) if a happened before b then L(a) < L(b)  C) they detect concurrency  D) they equal wall-clock time

**15.** Vector clocks, unlike Lamport clocks, can
A) avoid messages  B) run faster  C) detect that two events are concurrent  D) replace NTP

**16.** The CAP theorem says that during a network partition a system must choose between
A) CPU and GPU  B) speed and size  C) cost and performance  D) consistency and availability

**17.** With N replicas, read quorum R and write quorum W, reads see the latest write if
A) R = 1 always  B) W = 0  C) R + W < N  D) R + W > N

**18.** Raft uses randomized election timeouts to
A) encrypt messages  B) avoid repeated split votes  C) compress logs  D) speed up the network

**19.** The main benefit of consistent hashing is that when a node is added
A) no hashing is needed  B) data are deleted  C) only a small fraction of keys move  D) all keys move

**20.** An idempotent operation is one that
A) has the same effect when repeated as when executed once  B) is always fast  C) must run exactly once  D) can never fail

## Section B: Problems (40 marks)

**B1. Speedup (10 marks)** (a) A program is 90 percent parallelizable. Compute the speedup on 10 and on 100 processors and the limit [4]. (b) A measured speedup is 4 on 6 processors; compute the Karp-Flatt serial fraction and interpret [3]. (c) A DAG has work 1,000 and span 40; give its parallelism and the Brent bounds for p = 10 [3].

**B2. Shared memory (10 marks)** (a) Two threads each run `count++` 1,000 times on a shared counter without synchronization; explain why the result may be below 2,000 and give two fixes [4]. (b) Explain how locking A then B in one thread and B then A in another can deadlock and how to prevent it [3]. (c) Why does padding per-thread counters to 64 bytes speed up a program whose threads update adjacent counters? [3]

**B3. Logical clocks (10 marks)** Events: P1: a; P1: send m (to P2); P2: receive m; P2: b; P3: c. (a) Give Lamport timestamps [3]. (b) Give vector clocks [3]. (c) Is c concurrent with a? Is a before b? Justify using vector clocks [4].

**B4. Distributed data (10 marks)** (a) N = 3 replicas with R = 2, W = 2: do reads see the latest write? How many failures can writes tolerate? [3] (b) A ring (positions 0 to 99) has nodes X at 20 and Y at 60. Keys with hashes 10, 30, 70 are assigned to the first node at or above the hash going clockwise, wrapping around. Assign them; then add node Z at 80 and say which keys move [4] (c) An M/M/1 server has μ = 80 requests/s and λ = 60 requests/s: compute utilization, mean response time and mean number in the system [3].

## Answer key and solutions

### Section A
1. A 2. A 3. B 4. A 5. B 6. D 7. A 8. A 9. C 10. D 11. C 12. B 13. B 14. B 15. C 16. D 17. D 18. B 19. C 20. A

### Section B

**B1.**
(a) S(10) = 1/(0.1 + 0.09) = **5.26**; S(100) = 1/(0.1 + 0.009) = **9.17**; limit = 1/0.1 = **10** [4].
(b) e = (1/4 - 1/6)/(1 - 1/6) = (0.25 - 0.1667)/0.8333 = **0.10**: about 10 percent of the work behaves as serial (inherent serial code or overhead); compare e at other values of p to see whether it grows (overhead) or stays constant (inherent serial fraction) [3].
(c) Parallelism = 1000/40 = **25**. For p = 10: lower bound max(100, 40) = **100**; upper bound 100 + 40 = **140** [3].

**B2.**
(a) `count++` is load, add, store; if both threads load the same value before either stores, one increment is lost, so the final value can be less than 2,000 and varies from run to run [2]. Fixes (any two): a mutex around the increment, an atomic fetch-and-add, or per-thread counters summed after join (reduction) [2].
(b) Thread 1 holds A and waits for B, thread 2 holds B and waits for A: circular wait, so both block forever [2]. Prevent by always acquiring locks in the same global order (A before B), or by try-lock with back-off [1].
(c) Adjacent counters share a 64-byte cache line; every write by one core invalidates the line in the other cores' caches, so the line bounces between them (false sharing). Padding puts each counter on its own line, so cores update their lines without interference [3].

**B3.**
(a) Lamport: a = 1; send m = 2; receive m = max(0, 2) + 1 = 3; b = 4; c = 1 [3].
(b) Vector clocks [P1, P2, P3]: a [1,0,0]; send m [2,0,0]; receive m [2,1,0]; b [2,2,0]; c [0,0,1] [3].
(c) c = [0,0,1] and a = [1,0,0] are incomparable, so **c is concurrent with a** (their Lamport stamps are both 1, which alone could not show concurrency). a = [1,0,0] ≤ b = [2,2,0], so **a happened before b** [4].

**B4.**
(a) R + W = 4 > 3, so every read quorum overlaps every write quorum: reads see the latest write [2]. Writes need 2 of 3 replicas, so they tolerate **1** failure [1].
(b) Key 10 → X (20); key 30 → Y (60); key 70 → no node at or above 70, wrap around to X (20). After adding Z at 80: key 70 → Z; keys 10 and 30 unchanged. Only **key 70 moves, from X to Z** [4].
(c) ρ = 60/80 = **0.75**; W = 1/(80 - 60) = **50 ms**; L = λ/(μ - λ) = 60/20 = **3** [3].
