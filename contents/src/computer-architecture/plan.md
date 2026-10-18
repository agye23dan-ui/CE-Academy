# Computer Architecture: 14-Week Study Plan and Resources

Time budget: 9 to 11 hours per week (3 reading, 6 to 7 problems, simulation and measurement, 1 review with the app's quizzes). Architecture is quantitative: for every idea ask "how many cycles, how many misses, how many watts?" and check the answer by simulation or by timing a real program.

## Textbooks
- John Hennessy and David Patterson, *Computer Architecture: A Quantitative Approach*. The graduate-level standard; the structure of this course follows its chapters.
- David Patterson and John Hennessy, *Computer Organization and Design* (RISC-V edition) for review of the basics.
- Randal Bryant and David O'Hallaron, *Computer Systems: A Programmer's Perspective* (caches and performance from the programmer's side).
- Daniel Sorin, Mark Hill and David Wood, *A Primer on Memory Consistency and Cache Coherence* (free).
- Ulrich Drepper, *What Every Programmer Should Know About Memory* (free paper).

## Free courses and tools
- MIT 6.823 Computer System Architecture; ETH Zurich Digital Design and Computer Architecture (Onur Mutlu's lectures, free on YouTube); Berkeley CS152.
- Simulators: **gem5** (cycle-level CPU and memory simulator), Ripes (visual RISC-V pipeline simulator), Sniper, ChampSim (cache and branch-predictor studies), CACTI (cache area/time/energy model).
- Measurement tools on Linux: `perf stat` (cycles, instructions, cache misses, branch misses), `lscpu`, `valgrind --tool=cachegrind`, Intel VTune, `likwid`.
- For GPUs: CUDA or OpenCL tutorials (Google Colab gives a free GPU), NVIDIA Nsight.

## Week by week

**Week 1: Performance, the iron law, Amdahl, power (Ch 1).** Do: Assignment 1 Q1 to Q4, Q7. Time a program and compute CPI with `perf stat`.

**Week 2: Pipelining and hazards (Ch 2).** Do: Assignment 1 Q5, Q6. Simulate the hazard examples in Ripes with and without forwarding.

**Week 3: Branch prediction (Ch 3.1).** Do: Assignment 2 Q1, Q2, Q3. Write a Python simulator for 1-bit, 2-bit and gshare predictors and reproduce the table in the notes. Reproduce the sorted versus unsorted array loop in C.

**Week 4: Dynamic scheduling, renaming, the reorder buffer (Ch 3.2).** Do: Assignment 2 Q4 to Q7. Sit the **Class Test** at the end of the week (Chapters 1 to 3 plus the start of caches).

**Week 5: Cache organisation and mapping (Ch 4.1, 4.2).** Do: Assignment 3 Q1, Q2. Write a cache simulator (size, block, associativity, LRU) and run the trace examples.

**Week 6: Cache performance and optimisation (Ch 4.3 to 4.5).** Do: Assignment 3 Q3, Q4. Measure the row-versus-column traversal and the pointer-chasing latency curve on your own machine.

**Week 7: Virtual memory, TLBs, advanced memory topics.** Mock midterm: first half of the Final Exam.

**Week 8: Multicore and cache coherence (Ch 5.1, 5.2).** Do: Assignment 3 Q5. Write a MESI simulator and reproduce the bus-transaction counts; measure false sharing.

**Week 9: Consistency, synchronisation, SMT and NUMA (Ch 5.3).** Do: litmus tests (store buffering) in C with threads; read the x86-TSO paper summary.

**Week 10: SIMD and vector processing (Ch 6.1).** Do: write a loop and check auto-vectorisation with `gcc -O3 -fopt-info-vec`; time scalar versus AVX intrinsics.

**Week 11: GPUs and the roofline model (Ch 6.2, 6.3).** Do: Assignment 3 Q6, Q7. Run a vector-add kernel on a free Colab GPU and compare with the CPU; draw a roofline for your machine.

**Week 12: Energy, accelerators, domain-specific architectures (Ch 7).** Read about the TPU and systolic arrays; estimate the energy of data movement versus arithmetic.

**Week 13: Project.** Use gem5 or your own simulator to study one design question (for example the effect of cache size, associativity or predictor type on a benchmark) and write a short report with graphs and a conclusion.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can apply the iron law and Amdahl's and Gustafson's laws and explain why MIPS is misleading.
- [ ] I can find hazards and count cycles in a pipeline with and without forwarding, and reorder code to avoid stalls.
- [ ] I can simulate 1-bit, 2-bit and history-based branch predictors and compute the CPI effect.
- [ ] I can explain register renaming, reservation stations and the reorder buffer and schedule instructions in-order and out-of-order.
- [ ] I can split an address into tag, index and offset for any cache and simulate hits and misses.
- [ ] I can compute AMAT and CPI with memory stalls and classify misses (compulsory, capacity, conflict).
- [ ] I can trace MESI states and explain false sharing and memory consistency.
- [ ] I can explain GPU execution (warps, divergence, coalescing) and use the roofline model.
- [ ] I can estimate the effect of voltage and frequency changes on power and energy.
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Build small simulators; they make every concept concrete and let you check the exam-style answers.
2. Measure real hardware: `perf stat` and timing loops often contradict first intuitions.
3. Always state assumptions (latencies, issue width, hit times) before computing.
4. Draw timing diagrams and cache state tables by hand for every new mechanism.
5. Read about real designs (Intel, AMD, ARM, Apple, NVIDIA) after learning each idea and compare their numbers to your estimates.
