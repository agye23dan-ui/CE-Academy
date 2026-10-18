# Parallel and Distributed Computing: 14-Week Study Plan and Resources

Time budget: 9 to 12 hours per week (3 reading or lectures, 6 to 8 programming and measuring, 1 review with the app's quizzes). Every concept in this course can be tested on your own machine: write the serial code, measure it, parallelize it, then measure again and explain the gap with Amdahl's law and the Karp-Flatt metric.

## Textbooks
- Peter Pacheco and Matthew Malensky, *An Introduction to Parallel Programming* (MPI, Pthreads, OpenMP, CUDA).
- Michael McCool, Arch Robison and James Reinders, *Structured Parallel Programming* (patterns); Maurice Herlihy and Nir Shavit, *The Art of Multiprocessor Programming* (locks, lock-free structures, memory models).
- Ananth Grama, Anshul Gupta, George Karypis and Vipin Kumar, *Introduction to Parallel Computing* (analysis, isoefficiency).
- Martin Kleppmann, *Designing Data-Intensive Applications* (replication, partitioning, consensus, streams): the best practical book for the distributed half.
- Andrew Tanenbaum and Maarten van Steen, *Distributed Systems*; George Coulouris et al., *Distributed Systems: Concepts and Design*; Leslie Lamport's papers on time, clocks and Paxos.
- David Kirk and Wen-mei Hwu, *Programming Massively Parallel Processors* (GPUs).

## Free courses and resources
- MIT 6.824 Distributed Systems (lectures, labs on Raft and key-value stores); MIT 6.172 Performance Engineering; Stanford CS149 Parallel Computing.
- Lawrence Livermore National Laboratory tutorials on OpenMP, MPI and POSIX threads (free, concise).
- The Raft visualization and paper ("In Search of an Understandable Consensus Algorithm"); the Dynamo, Bigtable, Spanner, MapReduce and Chubby papers.
- NVIDIA CUDA programming guide and "An Even Easier Introduction to CUDA"; Kaggle or Colab free GPUs.
- Jepsen.io analyses of real databases; the "Fallacies of distributed computing" essay.

## Tools
gcc/clang with `-fopenmp` and `-pthread`; ThreadSanitizer (`-fsanitize=thread`); `perf`, Valgrind/Helgrind; OpenMPI or MPICH (`mpicc`, `mpirun`); CUDA toolkit or a Colab notebook; Python (`multiprocessing`, `concurrent.futures`, Dask); Docker for multi-node simulations; Go or Rust for concurrency; `tc netem` to add latency and loss to a test network.

## Week by week

**Week 1: Motivation and architectures.** Power wall, multicore, Flynn's taxonomy, shared versus distributed memory, concurrency versus parallelism. Lab: query your CPU (`lscpu`), find physical cores versus hardware threads, and time a serial benchmark.

**Week 2: Performance models.** Speedup, efficiency, Amdahl, Gustafson, Karp-Flatt, work-span, roofline, isoefficiency. Lab: write a table of measured speedups and compute Karp-Flatt for each p.

**Week 3: Threads and synchronization.** pthreads, mutexes, condition variables, semaphores, barriers, atomics. Lab: reproduce the racy counter (watch the final value vary) and fix it three ways.

**Week 4: Correctness hazards.** Deadlock, livelock, starvation, lock ordering, memory models and ordering, false sharing, the ABA problem. Lab: create and fix a deadlock; measure false sharing with padded and unpadded counters.

**Week 5: OpenMP.** Parallel loops, reductions, schedules, tasks, data-sharing clauses, NUMA effects. Lab: parallelize a numerical integration and a stencil; compare static, dynamic and guided schedules on an irregular loop.

**Week 6: Parallel algorithms.** Reduction, scan, sorting, matrix multiplication, stencils, graph traversal, load balancing. Lab: implement prefix scan and parallel merge sort; measure work and span.

**Week 7: Midterm and message passing.** Review. Communication cost model, MPI basics, point-to-point and collectives. Lab: ping-pong benchmark to estimate α and β; compare broadcast algorithms.

**Week 8: MPI applications.** Domain decomposition, halo exchange, non-blocking communication, deadlock avoidance, hybrid MPI + OpenMP. Lab: a 2D heat equation solver with halo exchange; measure strong and weak scaling.

**Week 9: GPUs.** CUDA model (grid, block, warp), memory hierarchy, coalescing, occupancy, divergence, streams. Lab: SAXPY, reduction and tiled matrix multiplication; compare with a CPU baseline honestly (include transfer time).

**Week 10: Distributed systems fundamentals.** Failure and timing models, logical and vector clocks, consistency models, CAP/PACELC. Lab: implement Lamport and vector clocks over a toy message simulator.

**Week 11: Replication and consensus.** Quorums, leader election, Paxos and Raft, Byzantine faults, two-phase commit, sagas. Lab: run a Raft implementation (etcd or MIT 6.824 lab 2) and kill the leader; observe elections.

**Week 12: Partitioning and storage.** Consistent hashing, virtual nodes, Dynamo-style stores, LSM trees, gossip, Bloom filters. Lab: build a consistent-hash ring and measure the fraction of keys that move when a node joins.

**Week 13: Data processing and operations.** MapReduce, Spark, Kafka-style logs, delivery semantics, idempotence, tail latency, queueing, chaos testing. Lab: a word-count job in Spark or Dask; inject faults and observe recovery.

**Week 14: Integration project and review.** Final project: a parallel or distributed application with a performance study (speedup, efficiency, Karp-Flatt, roofline or queueing analysis) and a fault test. Past-paper revision.

## Assessment pattern used in this course
Three assignments (performance models and scalability; shared-memory programming and GPUs; distributed systems), a class test, and a three-hour final. Practise by reproducing each worked number in the notes in code and then changing the parameters.

## Study tips
- Profile before parallelizing and measure after: never claim speedup without a serial baseline and the machine's real core count.
- Reduce sharing: private data, message passing and immutable structures remove most concurrency bugs.
- Use race detectors (ThreadSanitizer) on every shared-memory program; run tests many times and with varied thread counts.
- In distributed systems assume messages are delayed, lost and duplicated and that clocks disagree; design operations to be idempotent and retries to be safe.
- Draw message diagrams for every protocol you study (2PC, Raft, Paxos) and replay failure cases by hand.
