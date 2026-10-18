# Discrete Mathematics: Final Examination

Duration: 3 hours. No calculators or notes. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** p → q is logically equivalent to
A) p ∨ ¬q  B) ¬p ∨ q  C) ¬p ∧ q  D) q → p

**2.** The negation of ∃x ∀y P(x, y) is
A) ∀x ∃y ¬P(x, y)  B) ∃x ∀y ¬P(x, y)  C) ∀x ∀y ¬P(x, y)  D) ∃x ∃y ¬P(x, y)

**3.** The number of subsets of a 4-element set is
A) 4  B) 8  C) 16  D) 24

**4.** C(8, 2) equals
A) 16  B) 28  C) 56  D) 64

**5.** The number of ways to arrange 4 distinct letters in a row is
A) 4  B) 16  C) 24  D) 256

**6.** The sum of the coefficients of (1 + x)^5 is
A) 5  B) 10  C) 25  D) 32

**7.** 25 mod 7 equals
A) 3  B) 4  C) 5  D) 18

**8.** The inverse of 3 modulo 7 is
A) 2  B) 3  C) 5  D) it does not exist

**9.** Euler's totient φ(15) equals
A) 4  B) 8  C) 14  D) 15

**10.** A connected graph has an Euler path (but not a circuit) if it has
A) no odd vertices  B) exactly two odd vertices  C) exactly four odd vertices  D) a cycle

**11.** Every tree with at least two vertices has at least
A) one leaf  B) two leaves  C) three leaves  D) no leaves

**12.** A graph is bipartite if and only if it has
A) no odd cycles  B) no even cycles  C) no triangles only  D) an Euler circuit

**13.** Dijkstra's algorithm requires edge weights to be
A) integers  B) non-negative  C) distinct  D) negative

**14.** Which statement is true?
A) n^2 is O(n log n)  B) n log n is O(n^2)  C) 2^n is O(n^3)  D) n! is O(2^n)

**15.** The recurrence T(n) = T(n/2) + 1 solves to
A) Θ(1)  B) Θ(log n)  C) Θ(n)  D) Θ(n log n)

**16.** Divisibility on the positive integers is
A) an equivalence relation  B) a partial order  C) a total order  D) not transitive

**17.** In strong induction the inductive hypothesis assumes P(j) for
A) only j = k  B) all j with n0 ≤ j ≤ k  C) j = k + 1  D) no values

**18.** Bayes' theorem states P(A | B) =
A) P(B | A) P(A)/P(B)  B) P(A) P(B)  C) P(A ∩ B) P(B)  D) P(B)/P(A)

**19.** The complete graph K_5 is
A) planar  B) not planar  C) bipartite  D) a tree

**20.** The number of derangements D_3 of three objects is
A) 0  B) 1  C) 2  D) 3

## Section B: Short Questions (40 marks)

**B1. (5)** Prove that if n is an odd integer then n^2 ≡ 1 (mod 8).

**B2. (5)** Negate the statement "for every real x there is a real y with xy = 1", and decide which of the statement and its negation is true.

**B3. (5)** Prove A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) by an element argument.

**B4. (5)** How many 4-digit PINs (digits 0 to 9) are there with no repeated digit? How many have at least one repeated digit? How many are palindromes (such as 1221)?

**B5. (5)** Let R = {(a,a), (b,b), (c,c), (a,b), (b,c)} on {a, b, c}. Is R a partial order? If not, find the smallest set of pairs to add to make it one, and describe the resulting order.

**B6. (5)** Solve a_n = 2a_(n-1) + 3 with a_0 = 1, and verify a_2.

**B7. (5)** Solve 4x ≡ 6 (mod 14), listing all solutions modulo 14.

**B8. (5)** Find the minimum spanning tree and its weight for a graph with vertices A to E and edges AB 1, BC 2, AC 3, CD 4, DE 5, CE 6, BD 7.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Induction.**
(a) Prove that Σ(k = 1 to n) k · 2^(k-1) = (n - 1) 2^n + 1 for all n ≥ 1. [5]
(b) Prove that F_1 + F_2 + ... + F_n = F_(n+2) - 1 for the Fibonacci numbers (F_1 = F_2 = 1). [5]

**C2. Counting and probability.**
(a) A teacher distributes 12 identical sweets among 4 children so that each child gets at least 1 and at most 5. Count the distributions. [4]
(b) In how many ways can 5 people be seated in a row so that two particular people are not adjacent? [3]
(c) A fair coin is flipped 6 times. Find the probability of at least 4 heads, and the expected number of heads. [3]

**C3. RSA and modular arithmetic.** Take p = 7 and q = 11.
(a) Compute n and φ(n). [2]
(b) With e = 7, verify that gcd(e, φ(n)) = 1 and find d. [3]
(c) Encrypt m = 5 and decrypt your ciphertext. [3]
(d) Explain how an eavesdropper who knows (n, e) could recover d, and why this is infeasible for large n. [2]

**C4. Graph algorithms.** A weighted undirected graph on vertices 1 to 6 has edges 1-2 (4), 1-3 (2), 2-3 (1), 2-4 (5), 3-4 (8), 3-5 (10), 4-5 (2), 4-6 (6), 5-6 (3).
(a) Run Dijkstra's algorithm from vertex 1 and give the shortest distances. [3]
(b) Find a minimum spanning tree (Kruskal) and its weight. [3]
(c) Does the graph have an Euler path or circuit? Justify. [2]
(d) Find its chromatic number. [2]

**C5. Recurrences and algorithm analysis.**
(a) Solve a_n = 6a_(n-1) - 9a_(n-2), a_0 = 1, a_1 = 9. [3]
(b) Apply the master theorem to T(n) = 3T(n/2) + n and T(n) = 2T(n/2) + n^2. [2]
(c) How many times does the statement x = x + 1 run in: for i = 1 to n: for j = 1 to i: x = x + 1? Give the exact count and the order of growth. [2]
(d) Show that binary search on a sorted array of n = 1,000,000 elements needs at most 20 comparisons, and explain why. [3]

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **A** · 3 **C** · 4 **B** · 5 **C** · 6 **D** · 7 **B** · 8 **C** · 9 **B** · 10 **B** · 11 **B** · 12 **A** · 13 **B** · 14 **B** · 15 **B** · 16 **B** · 17 **B** · 18 **A** · 19 **B** · 20 **C**

Brief reasons: 1. Implication law. 2. Negation of ∃x flips to ∀x, of ∀y to ∃y. 3. 2^4. 4. 8·7/2. 5. 4!. 6. 2^5. 7. 25 = 3·7 + 4. 8. 3·5 = 15 ≡ 1. 9. φ(15) = 2 · 4. 10. Exactly two odd vertices. 11. A tree has at least two leaves. 12. König's theorem. 13. Negative weights break the greedy argument. 14. n log n ≤ n^2. 15. Master theorem case 2. 16. Reflexive, antisymmetric, transitive, but not total (2 and 3). 17. Strong induction. 18. Bayes. 19. 10 > 3·5 - 6 = 9. 20. D_3 = 3!(1 - 1 + 1/2 - 1/6) = 2.

## Section B solutions

**B1.** Step 1: Let n = 2k + 1.
Step 2: Then n^2 = 4k^2 + 4k + 1 = 4k(k + 1) + 1.
Step 3: The product k(k + 1) of consecutive integers is even, say 2m, so n^2 = 8m + 1 ≡ **1 (mod 8)**. ∎

**B2.** Negation: **there is a real x such that for every real y, xy ≠ 1.** The original statement is **false** (take x = 0: 0 · y = 0 ≠ 1 for every y), so its negation is **true**.

**B3.** Let x ∈ A ∩ (B ∪ C). Then x ∈ A and (x ∈ B or x ∈ C). If x ∈ B then x ∈ A ∩ B; if x ∈ C then x ∈ A ∩ C; either way x ∈ (A ∩ B) ∪ (A ∩ C). Conversely, if x ∈ (A ∩ B) ∪ (A ∩ C), then x ∈ A and x ∈ B or x ∈ C, so x ∈ A ∩ (B ∪ C). Both inclusions hold, so the sets are equal. ∎

**B4.** Step 1: no repeated digit: 10 · 9 · 8 · 7 = **5040**.
Step 2: total PINs 10^4 = 10,000, so at least one repeat: 10,000 - 5040 = **4960**.
Step 3: palindromes abba: choose a (10) and b (10): 10 · 10 = **100**.

**B5.** Reflexive ✓ and antisymmetric ✓, but **not transitive**: (a, b) and (b, c) are in R but (a, c) is not. Add **(a, c)** (the transitive closure). The result is the total order a ≤ b ≤ c.

**B6.** a_n = 2a_(n-1) + 3 has particular solution a = -3 (since -3 = 2(-3) + 3), so a_n = A · 2^n - 3. a_0 = A - 3 = 1, A = 4: **a_n = 4 · 2^n - 3 = 2^(n+2) - 3**. Check: a_1 = 2 + 3 = 5 = 8 - 3 ✓; a_2 = 10 + 3 = **13** = 16 - 3 ✓.

**B7.** Step 1: gcd(4, 14) = 2 divides 6, so solutions exist.
Step 2: Divide by 2: 2x ≡ 3 (mod 7). 2^-1 mod 7 = 4, so x ≡ 12 ≡ 5 (mod 7).
Step 3: Modulo 14: **x ≡ 5 or x ≡ 12 (mod 14)**.
Step 4: Check: 4 · 5 = 20 ≡ 6 ✓ and 4 · 12 = 48 = 3 · 14 + 6 ✓.

**B8.** Kruskal: AB (1), BC (2), AC (3: rejected, cycle A-B-C), CD (4), DE (5). **MST = {AB, BC, CD, DE}, weight 1 + 2 + 4 + 5 = 12.** (4 edges for 5 vertices ✓.)

## Section C solutions

**C1.**
(a) Base n = 1: 1 · 2^0 = 1 = (1 - 1) 2 + 1 = 1 ✓. Step: assume the formula for n = m. Then Σ to m + 1 equals (m - 1) 2^m + 1 + (m + 1) 2^m = 2m · 2^m + 1 = m · 2^(m+1) + 1, which is the formula for n = m + 1. ∎ (Check n = 3: 1 + 4 + 12 = 17 = 2 · 8 + 1 ✓.)
(b) Base n = 1: F_1 = 1 = F_3 - 1 = 2 - 1 ✓. Step: assume F_1 + ... + F_m = F_(m+2) - 1. Then F_1 + ... + F_(m+1) = F_(m+2) - 1 + F_(m+1) = F_(m+3) - 1. ∎

**C2.**
(a) Step 1: Let each child receive 1 sweet first (4 sweets), leaving 8 to distribute so that each child gets at most 4 more.
Step 2: Non-negative solutions of y1 + ... + y4 = 8: C(11, 3) = 165.
Step 3: Subtract those with some yi ≥ 5: set zi = yi - 5, so the remaining sum is 3: C(6, 3) = 20 solutions for each of 4 children = 80 (two children cannot both exceed 4, since 10 > 8).
Step 4: Answer: 165 - 80 = **85**.
(b) Step 1: All arrangements 5! = 120.
Step 2: Treat the two people as one block: 4! · 2 = 48 arrangements with them adjacent.
Step 3: So 120 - 48 = **72**.
(c) P(at least 4 heads) = [C(6, 4) + C(6, 5) + C(6, 6)]/64 = (15 + 6 + 1)/64 = **22/64 = 11/32 ≈ 0.344**. E[heads] = 6 · 1/2 = **3**.

**C3.**
(a) n = 7 · 11 = **77**; φ(n) = 6 · 10 = **60**.
(b) gcd(7, 60) = 1 ✓. Find d with 7d ≡ 1 (mod 60): 7 · 43 = 301 = 5 · 60 + 1, so **d = 43**.
(c) c = 5^7 mod 77: 5^2 = 25, 5^4 = 625 = 8 · 77 + 9, so 5^4 ≡ 9; 5^7 = 5^4 · 5^2 · 5 ≡ 9 · 25 · 5 = 1125 = 14 · 77 + 47, so **c = 47**. Decrypt: 47^43 mod 77 = **5** (verified by repeated squaring; it recovers m, as guaranteed by Euler's theorem since 7 · 43 ≡ 1 mod φ(n)).
(d) If the eavesdropper factors n = 77 = 7 · 11, she computes φ(n) = 60 and then d = e^-1 mod φ(n) by the extended Euclidean algorithm. For a 2048-bit n no efficient factoring algorithm is known, so φ(n) and d cannot be found in feasible time.

**C4.**
(a) Dijkstra from 1: **d(1) = 0, d(3) = 2, d(2) = 3 (via 3), d(4) = 8 (via 2: 3 + 5), d(5) = 10 (via 4: 8 + 2; the direct route 3-5 costs 12), d(6) = 13 (via 5: 10 + 3; via 4 costs 14)**.
(b) Sorted edges: 2-3 (1), 1-3 (2), 4-5 (2), 5-6 (3), 1-2 (4: cycle 1-2-3, rejected), 2-4 (5: joins {1,2,3} and {4,5,6}). The tree: 2-3, 1-3, 4-5, 5-6, 2-4, **weight 1 + 2 + 2 + 3 + 5 = 13** (5 edges for 6 vertices).
(c) Degrees: vertex 1: 2, vertex 2: 3, vertex 3: 4, vertex 4: 4, vertex 5: 3, vertex 6: 2. Exactly **two odd vertices (2 and 5)**, so an **Euler path exists** (from 2 to 5) but there is **no Euler circuit**.
(d) Vertices 1, 2, 3 form a triangle, so at least 3 colours are needed. A 3-colouring: 1 red, 2 green, 3 blue, 4 red (adjacent to 2 green, 3 blue, 5, 6), 5 green (adjacent to 3 blue, 4 red, 6), 6 blue (adjacent to 4 red, 5 green). **χ = 3.**

**C5.**
(a) Step 1: r^2 - 6r + 9 = (r - 3)^2, so a_n = (α + β n) 3^n. a_0 = α = 1; a_1 = 3(1 + β) = 9, so β = 2.
Step 2: **a_n = (1 + 2n) 3^n**.
Step 3: Check: a_2 = 6 · 9 - 9 · 1 = 45 = 5 · 9 ✓.
(b) T(n) = 3T(n/2) + n: log_2 3 ≈ 1.585 > 1, so **Θ(n^(log_2 3)) = Θ(n^1.585)**. T(n) = 2T(n/2) + n^2: d = 2 > log_2 2 = 1, so **Θ(n^2)**.
(c) The inner statement runs 1 + 2 + ... + n = **n(n + 1)/2** times, which is **Θ(n^2)**.
(d) Each comparison halves the remaining range, so the number of comparisons is at most ⌊log_2 n⌋ + 1 = ⌊log_2 1,000,000⌋ + 1 = 19 + 1 = **20** (since 2^19 = 524,288 ≤ 10^6 < 2^20 = 1,048,576).
