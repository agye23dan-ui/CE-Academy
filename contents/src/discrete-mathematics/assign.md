# Discrete Mathematics: Assignments with Worked Solutions

Write every proof in full sentences: state what you assume, what you prove, and justify each step. Numerical counting answers were verified by computer. Marks reward correct reasoning as well as the final answer.

# Assignment 1: Logic and Proof (60 marks)

## Questions

**Q1. Propositional logic (14 marks)**
(a) Construct the truth table of p → (q ∨ ¬r) and state when it is false. [3]
(b) Show that (p → q) ∧ (q → r) → (p → r) is a tautology using logical equivalences (no truth table). [4]
(c) Write the negation of p → (q ∧ r) without using →. [2]
(d) Show that ¬(p ↔ q) ≡ p ⊕ q. [2]
(e) Write the converse, inverse and contrapositive of "If a program compiles, then it has no syntax errors", and say which are equivalent to the original. [3]

**Q2. Quantifiers (10 marks)** Let the domain be the integers unless stated.
(a) Decide the truth of: ∀x ∃y (x + y = 0); ∃y ∀x (x + y = 0); ∀x ∃y (y > x); ∃x ∀y (x ≤ y). [4]
(b) Repeat ∀x ∃y (y > x) with domain {1, 2, 3, 4, 5}. [1]
(c) Negate, pushing the negation inward: ∀x (P(x) → ∃y Q(x, y)). [2]
(d) With S(x) = "x is a student", C(x) = "x takes a course" and F(x, y) = "x is friends with y", write in logic: "Every student has a friend who is a student", and "Some student takes no course". [3]

**Q3. Proof techniques (14 marks)** Prove each statement and name the method.
(a) The sum of two odd integers is even. [2]
(b) If n^2 is even then n is even. [3]
(c) sqrt 2 is irrational. [4]
(d) For every integer n, n^2 + n is even. [2]
(e) There are infinitely many primes. [3]

**Q4. Induction (16 marks)**
(a) Prove that 1^2 + 2^2 + ... + n^2 = n(n + 1)(2n + 1)/6 for n ≥ 1. [4]
(b) Prove that 3 divides n^3 + 2n for all n ≥ 1. [4]
(c) Prove that 2^n > n^2 for all integers n ≥ 5. [4]
(d) Use strong induction to prove that every integer n ≥ 12 can be written as 4a + 5b with a, b ≥ 0. [4]

**Q5. Arguments (6 marks)** Decide whether each argument is valid and name the rule or fallacy. (i) "If it rains, the match is cancelled. The match was not cancelled. Therefore it did not rain." (ii) "If the server is down, users see an error. Users see an error. Therefore the server is down." (iii) "All engineers are logical. Ama is an engineer. Therefore Ama is logical."

## Solutions and Marking Guide

**Q1.**
(a)
p q r | q ∨ ¬r | p → (q ∨ ¬r)
0 0 0 | 1 | 1
0 0 1 | 0 | 1
0 1 0 | 1 | 1
0 1 1 | 1 | 1
1 0 0 | 1 | 1
1 0 1 | 0 | **0**
1 1 0 | 1 | 1
1 1 1 | 1 | 1
It is false only when **p = 1, q = 0, r = 1**.
(b) Rewrite the implications: [(¬p ∨ q) ∧ (¬q ∨ r)] → (¬p ∨ r) ≡ ¬[(¬p ∨ q) ∧ (¬q ∨ r)] ∨ (¬p ∨ r) (implication law) ≡ (p ∧ ¬q) ∨ (q ∧ ¬r) ∨ ¬p ∨ r (De Morgan and double negation). Now (p ∧ ¬q) ∨ ¬p ≡ ¬p ∨ ¬q (absorption) and (q ∧ ¬r) ∨ r ≡ q ∨ r. So the whole is ¬p ∨ ¬q ∨ q ∨ r, which contains ¬q ∨ q ≡ T, hence ≡ T by the domination law. ∎
(c) ¬(p → (q ∧ r)) ≡ ¬(¬p ∨ (q ∧ r)) ≡ p ∧ ¬(q ∧ r) ≡ **p ∧ (¬q ∨ ¬r)**.
(d) ¬(p ↔ q) ≡ ¬[(¬p ∨ q) ∧ (¬q ∨ p)] ≡ (p ∧ ¬q) ∨ (q ∧ ¬p) ≡ p ⊕ q. ∎
(e) Let p = "the program compiles", q = "it has no syntax errors". **Converse:** if a program has no syntax errors then it compiles. **Inverse:** if a program does not compile then it has syntax errors. **Contrapositive:** if a program has syntax errors then it does not compile. Only the **contrapositive** is equivalent to the original (the converse and the inverse are equivalent to each other).

**Q2.**
(a) ∀x ∃y (x + y = 0): **true** (y = -x). ∃y ∀x (x + y = 0): **false** (no single y works for all x). ∀x ∃y (y > x): **true** (y = x + 1). ∃x ∀y (x ≤ y): **false** over the integers (no least integer). (1 mark each.)
(b) **False**: for x = 5 there is no y in the set with y > 5.
(c) ¬∀x (P(x) → ∃y Q(x, y)) ≡ ∃x ¬(P(x) → ∃y Q(x, y)) ≡ **∃x (P(x) ∧ ∀y ¬Q(x, y))**.
(d) **∀x (S(x) → ∃y (F(x, y) ∧ S(y)))**; **∃x (S(x) ∧ ¬C(x))**. (Using ∧ with ∃ and → with ∀ is the standard pattern.)

**Q3.**
(a) **Direct proof.** Let the integers be 2a + 1 and 2b + 1. Their sum is 2a + 2b + 2 = 2(a + b + 1), which is even. ∎
(b) Step 1: **Contrapositive.** Suppose n is odd, n = 2k + 1.
Step 2: Then n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1 is odd.
Step 3: So if n^2 is even, n is even. ∎
(c) Step 1: **Contradiction.** Suppose sqrt 2 = a/b with integers a, b having no common factor.
Step 2: Then a^2 = 2b^2, so a^2 is even and by
(b) a is even: a = 2c.
Step 3: Then 4c^2 = 2b^2, so b^2 = 2c^2 is even and b is even.
Step 4: Both are even, contradicting "no common factor". ∎
(d) **Cases.** n^2 + n = n(n + 1). If n is even, the product is even; if n is odd, then n + 1 is even, so the product is even. ∎
(e) Step 1: **Contradiction (Euclid).** Suppose there are finitely many primes p1, ..., pk.
Step 2: Let N = p1 p2 ... pk + 1.
Step 3: N > 1 has a prime factor p.
Step 4: If p = pi for some i then p divides both N and p1 ... pk, so p divides 1: impossible.
Step 5: So p is a prime not in the list, a contradiction. ∎

**Q4.**
(a) **Base** n = 1: 1 = 1 · 2 · 3/6 = 1 ✓. **Step:** assume the formula for k. Then the sum to k + 1 is k(k + 1)(2k + 1)/6 + (k + 1)^2 = (k + 1)[k(2k + 1) + 6(k + 1)]/6 = (k + 1)(2k^2 + 7k + 6)/6 = (k + 1)(k + 2)(2k + 3)/6, which is the formula for n = k + 1. ∎
(b) **Base** n = 1: 1 + 2 = 3 ✓. **Step:** assume 3 | k^3 + 2k. Then (k + 1)^3 + 2(k + 1) = k^3 + 3k^2 + 3k + 1 + 2k + 2 = (k^3 + 2k) + 3(k^2 + k + 1), a sum of two multiples of 3. ∎
(c) Step 1: **Base** n = 5: 32 > 25 ✓. **Step:** assume 2^k > k^2 with k ≥ 5.
Step 2: Then 2^(k+1) = 2 · 2^k > 2k^2.
Step 3: It suffices that 2k^2 ≥ (k + 1)^2, i.e. k^2 ≥ 2k + 1, which holds for k ≥ 3 (k^2 - 2k - 1 = (k - 1)^2 - 2 > 0).
Step 4: So 2^(k+1) > (k + 1)^2. ∎
(d) Step 1: **Bases:** 12 = 4·3, 13 = 4·2 + 5, 14 = 4 + 5·2, 15 = 5·3.
Step 2: **Step:** let n ≥ 16 and assume every m with 12 ≤ m < n is representable.
Step 3: Then n - 4 ≥ 12 is representable as 4a + 5b, so n = 4(a + 1) + 5b. ∎ (The largest unrepresentable integer is 11.)

**Q5.** (i) **Valid: modus tollens** (p → q, ¬q ⊢ ¬p). (ii) **Invalid: affirming the conclusion** (q, p → q ⊬ p); there could be other causes of errors. (iii) **Valid: universal instantiation then modus ponens.**

---

# Assignment 2: Sets, Relations, Functions and Counting (70 marks)

## Questions

**Q1. Sets and functions (14 marks)**
(a) In a class of 100 students, 60 take Maths, 50 take Physics and 35 take both. How many take neither? [2]
(b) |A| = 40, |B| = 30, |C| = 20, |A ∩ B| = 10, |A ∩ C| = 8, |B ∩ C| = 6, |A ∩ B ∩ C| = 3. Find |A ∪ B ∪ C|. [3]
(c) Prove A - (B ∪ C) = (A - B) ∩ (A - C). [3]
(d) How many elements are in P({1, 2, 3, 4}) and in {1, 2} × {a, b, c}? [2]
(e) Determine whether f: Z → Z is injective or surjective: (i) f(x) = 2x + 1; (ii) f(x) = x^2; (iii) f(x) = x - 5. [3]
(f) State and apply the pigeonhole principle: among 367 people, two share a birthday. [1]

**Q2. Relations (14 marks)**
(a) For R on {1, 2, 3, 4} given by R = {(1,1), (2,2), (3,3), (4,4), (1,2), (2,1), (3,4), (4,3)}, determine reflexivity, symmetry, antisymmetry, transitivity. Is it an equivalence relation? List the classes. [5]
(b) For the divisibility relation on D = {1, 2, 3, 4, 6, 12}, show that it is a partial order, draw (describe) the Hasse diagram, and find the minimal and maximal elements, the least upper bound of 4 and 6 and the greatest lower bound of 4 and 6. [6]
(c) Prove that congruence modulo 3 is an equivalence relation on Z. [3]

**Q3. Counting (24 marks)**
(a) How many 8-character passwords from 62 letters and digits contain at least one digit? [3]
(b) How many five-card poker hands are there, how many are full houses, and how many are flushes (excluding straight flushes)? [5]
(c) How many distinct arrangements of the letters of MISSISSIPPI are there? [3]
(d) How many non-negative integer solutions has x1 + x2 + x3 + x4 = 10, and how many with every xi ≥ 1? [4]
(e) How many integers from 1 to 100 are divisible by 2, 3 or 5? [3]
(f) Find the coefficient of x^3 in (2x + 1)^7 and show that Σ C(n, k) = 2^n. [3]
(g) How many derangements are there of 5 objects? [3]

**Q4. Discrete probability (8 marks)** (a) Two fair dice are rolled. Find P(sum = 7) and P(sum ≥ 10). [3] (b) A test is positive with probability 0.95 if the disease is present and 0.05 if absent. The disease affects 1 percent of people. Find P(disease | positive). [3] (c) Find the expected number of heads in 10 fair flips and the variance. [2]

**Q5. Proof (10 marks)** (a) Prove that if f: A → B and g: B → C are both injective then g ∘ f is injective. [3] (b) Prove that the set of even integers is countable by giving a bijection with N. [3] (c) Use the pigeonhole principle to show that among any 5 points inside a unit square, two are within distance sqrt 2/2 of each other. [4]

## Solutions and Marking Guide

**Q1.**
(a) Step 1: |M ∪ P| = |M| + |P| - |M ∩ P| = 60 + 50 - 35 = 75.
Step 2: neither = 100 - 75 = **25**.
(b) Inclusion-exclusion: |A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |A ∩ C| - |B ∩ C| + |A ∩ B ∩ C|.
= 40 + 30 + 20 - 10 - 8 - 6 + 3 = 90 - 24 + 3 = **69**.
(c) x ∈ A - (B ∪ C) ⇔ x ∈ A ∧ ¬(x ∈ B ∨ x ∈ C) ⇔ x ∈ A ∧ x ∉ B ∧ x ∉ C ⇔ (x ∈ A - B) ∧ (x ∈ A - C). ∎
(d) |P| = 2^4 = **16**; |{1,2} × {a,b,c}| = **6**.
(e) (i) injective, **not** surjective (even integers are not reached). (ii) **neither** (f(2) = f(-2); negative numbers are not reached). (iii) **bijective** (inverse x + 5).
(f) 367 people, 366 possible birthdays (including 29 February): some birthday is shared. ∎

**Q2.**
(a) **Reflexive:** yes (all (a, a)). **Symmetric:** yes ((1,2) and (2,1); (3,4) and (4,3)). **Antisymmetric:** no ((1,2) and (2,1) with 1 ≠ 2). **Transitive:** yes (checking: (1,2),(2,1) give (1,1); (3,4),(4,3) give (3,3); no other chains). It **is an equivalence relation** with classes **{1, 2} and {3, 4}**.
(b) Reflexive (a | a), antisymmetric (a | b and b | a imply a = b for positive integers), transitive (a | b and b | c imply a | c): a partial order. Hasse diagram: 1 at the bottom, edges 1-2, 1-3, 2-4, 2-6, 3-6, 4-12, 6-12 (12 at the top). **Minimal element: 1** (also least). **Maximal element: 12** (also greatest). lub(4, 6) = the least common multiple = **12**; glb(4, 6) = the gcd = **2**.
(c) Step 1: **Reflexive:** a - a = 0 is divisible by 3.
Step 2: **Symmetric:** if 3 | (a - b) then 3 | (b - a).
Step 3: **Transitive:** if 3 | (a - b) and 3 | (b - c), then 3 | (a - b) + (b - c) = a - c. ∎

**Q3.**
(a) Step 1: all passwords: 62^8 = 218,340,105,584,896.
Step 2: passwords with no digit (letters only, 52 choices): 52^8 = 53,459,728,531,456.
Step 3: at least one digit = 62^8 - 52^8 = **164,880,377,053,440**.
(b) Step 1: hands: C(52, 5) = 52·51·50·49·48/120 = **2,598,960**.
Step 2: full houses: choose the rank of the triple (13), its suits C(4, 3) = 4, the rank of the pair (12 remaining), its suits C(4, 2) = 6: 13 · 4 · 12 · 6 = **3,744**.
Step 3: flushes: 4 suits × C(13, 5) = 4 × 1287 = 5148; subtract the 40 straight flushes (10 per suit): **5,108**.
(c) Step 1: MISSISSIPPI has 11 letters: M × 1, I × 4, S × 4, P × 2.
Step 2: arrangements = 11!/(1! 4! 4! 2!) = 39,916,800/(24 × 24 × 2) = 39,916,800/1152 = **34,650**.
(d) Step 1: stars and bars: the number of non-negative solutions of x1 + x2 + x3 + x4 = 10 is C(10 + 3, 3) = C(13, 3) = **286**.
Step 2: with every xi ≥ 1, substitute yi = xi - 1, so the y's sum to 10 - 4 = 6: C(6 + 3, 3) = C(9, 3) = **84**.
(e) Step 1: singles: ⌊100/2⌋ = 50, ⌊100/3⌋ = 33, ⌊100/5⌋ = 20.
Step 2: pairs: ⌊100/6⌋ = 16, ⌊100/10⌋ = 10, ⌊100/15⌋ = 6. Triple: ⌊100/30⌋ = 3.
Step 3: 50 + 33 + 20 - 16 - 10 - 6 + 3 = **74**.
(f) Step 1: the x^3 term of (2x + 1)^7 is C(7, 3)(2x)^3 · 1^4 = 35 · 8 x^3.
Step 2: the coefficient is **280**.
Step 3: put x = y = 1 in the binomial theorem: (1 + 1)^n = Σ C(n, k) = **2^n**; combinatorially each subset of an n-set is counted by its size.
(g) D_5 = 5! (1 - 1/1! + 1/2! - 1/3! + 1/4! - 1/5!) = 120 - 120 + 60 - 20 + 5 - 1 = **44**.

**Q4.**
(a) Step 1: the outcomes summing to 7 are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 of 36, so P = **1/6**.
Step 2: sums of 10, 11, 12: (4,6), (5,5), (6,4), (5,6), (6,5), (6,6) = 3 + 2 + 1 = 6 outcomes, so P(sum ≥ 10) = 6/36 = **1/6**.
(b) Step 1: P(+) = 0.95 × 0.01 + 0.05 × 0.99 = 0.0095 + 0.0495 = 0.0590.
Step 2: Bayes: P(D | +) = 0.0095/0.0590 = **0.161** (about 16 percent: a surprisingly low value because the disease is rare; this is the base-rate effect).
(c) E[X] = np = **5**; Var(X) = n p (1 - p) = **2.5**.

**Q5.**
(a) Suppose (g ∘ f)(a1) = (g ∘ f)(a2), i.e. g(f(a1)) = g(f(a2)). Since g is injective, f(a1) = f(a2); since f is injective, a1 = a2. ∎
(b) Define h: N → E by h(0) = 0, h(2k - 1) = 2k and h(2k) = -2k for k ≥ 1, giving 0, 2, -2, 4, -4, 6, ... Every even integer appears exactly once, so h is a bijection and the even integers are countable. ∎
(c) Step 1: Divide the unit square into four 1/2 × 1/2 squares.
Step 2: Five points in four squares: by the pigeonhole principle two points lie in the same small square.
Step 3: The largest distance in a small square is its diagonal sqrt(1/4 + 1/4) = sqrt 2/2. ∎

---

# Assignment 3: Recurrences, Number Theory and Graphs (80 marks)

## Questions

**Q1. Recurrences (16 marks)**
(a) Solve a_n = 5a_(n-1) - 6a_(n-2), a_0 = 1, a_1 = 4, and give a_5. [5]
(b) Solve a_n = 4a_(n-1) - 4a_(n-2), a_0 = 1, a_1 = 4. [3]
(c) Let b_n be the number of binary strings of length n with no two consecutive 0s. Find a recurrence, the initial values and b_6. [4]
(d) Use the master theorem: T(n) = 2T(n/2) + n; T(n) = 4T(n/2) + n; T(n) = T(n/2) + 1; T(n) = 8T(n/2) + n^2. [4]

**Q2. Big-O (8 marks)** (a) Show that 3n^2 + 10n + 7 is O(n^2), giving C and k. [3] (b) Rank by growth: n log n, 2^n, n^2, n!, log n, n^3, sqrt n. [2] (c) State the complexity of: two nested loops over n, a loop that doubles i from 1 to n, and merge sort. [3]

**Q3. Number theory (22 marks)**
(a) Find gcd(252, 198) by Euclid's algorithm and express it as 252s + 198t. [4]
(b) Find 7^-1 mod 26 and solve 7x ≡ 3 (mod 26). [3]
(c) Solve x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 2 (mod 7). [4]
(d) Compute 3^100 mod 7 and 2^100 mod 13 using Fermat's little theorem. [3]
(e) RSA with p = 5, q = 11, e = 3: find n, φ(n), d, the encryption of 8 and verify the decryption. [6]
(f) Explain why RSA decryption works and why large keys are secure. [2]

**Q4. Graphs (24 marks)**
(a) A graph has degree sequence (3, 3, 2, 2, 2). Find |E|. Can a simple graph have degrees (3, 3, 3, 1)? [3]
(b) For which n does K_n have an Euler circuit? Does K_(3,3) have one? Does the Königsberg graph (degrees 3, 3, 3, 5) have an Euler path? [4]
(c) Run Dijkstra from A on the weighted graph with edges A-B 7, A-C 9, A-F 14, B-C 10, B-D 15, C-D 11, C-F 2, D-E 6, E-F 9. List the shortest distances. [5]
(d) Find a minimum spanning tree with Kruskal's algorithm and its weight. [4]
(e) Prove a tree on n vertices has n - 1 edges (induction on n). [4]
(f) Use Euler's formula to prove K_5 is not planar. [4]

## Solutions and Marking Guide

**Q1.**
(a) The characteristic equation r^2 - 5r + 6 = 0 has roots 2 and 3, so a_n = α 2^n + β 3^n. a_0: α + β = 1; a_1: 2α + 3β = 4, so β = 2, α = -1. **a_n = 2·3^n - 2^n.** Values: 1, 4, 14, 46, 146, **454** (a_5 = 2·243 - 32 = 454 ✓).
(b) r^2 - 4r + 4 = (r - 2)^2: a repeated root. a_n = (α + β n) 2^n. a_0 = α = 1; a_1 = (1 + β) · 2 = 4, so β = 1. **a_n = (1 + n) 2^n.** (Check a_2 = 4 · 4 - 4 · 1 = 12 = 3 · 4 ✓.)
(c) Step 1: A valid string of length n ends in 1 (preceded by any valid string of length n - 1) or ends in 01 (preceded by a valid string of length n - 2).
Step 2: **b_n = b_(n-1) + b_(n-2)**, with b_1 = 2 (0, 1), b_2 = 3 (01, 10, 11).
Step 3: Then b_3 = 5, b_4 = 8, b_5 = 13, **b_6 = 21** (a Fibonacci number).
(d) Compare n^d with n^(log_b a): (i) a = 2, b = 2, d = 1: log_2 2 = 1 = d, so **Θ(n log n)**. (ii) a = 4, d = 1 < 2: **Θ(n^2)**. (iii) a = 1, d = 0 = log_2 1: **Θ(log n)**. (iv) a = 8, log_2 8 = 3 > 2: **Θ(n^3)**.

**Q2.**
(a) For n ≥ 11: 10n + 7 ≤ n^2 (since n^2 ≥ 11n ≥ 10n + n ≥ 10n + 11 > 10n + 7), so 3n^2 + 10n + 7 ≤ 4n^2. Take **C = 4, k = 11**.
(b) **log n < sqrt n < n log n < n^2 < n^3 < 2^n < n!**.
(c) Two nested loops: **Θ(n^2)**; doubling loop: **Θ(log n)**; merge sort: **Θ(n log n)**.

**Q3.**
(a) Step 1 (Euclid): 252 = 1·198 + 54; 198 = 3·54 + 36; 54 = 1·36 + 18; 36 = 2·18 + 0. The last non-zero remainder is **gcd = 18**.
Step 2 (back-substitute): 18 = 54 - 36 = 54 - (198 - 3·54) = 4·54 - 198 = 4(252 - 198) - 198 = 4·252 - 5·198.
Step 3: **s = 4, t = -5** (check: 1008 - 990 = 18 ✓).
(b) Step 1: 7 · 15 = 105 = 4 · 26 + 1, so **7^-1 ≡ 15**.
Step 2: Then x ≡ 15 · 3 = 45 ≡ **19** (mod 26).
Step 3: Check: 7 · 19 = 133 = 5 · 26 + 3 ✓.
(c) Step 1: x = 2 + 3k and x ≡ 3 (mod 5): 2 + 3k ≡ 3 gives 3k ≡ 1, k ≡ 2, so x ≡ 8 (mod 15).
Step 2: Then x = 8 + 15m with x ≡ 2 (mod 7): 8 + 15m ≡ 1 + m ≡ 2, m ≡ 1, so x = 23.
Step 3: **x ≡ 23 (mod 105).** Check: 23 mod 3 = 2, mod 5 = 3, mod 7 = 2 ✓.
(d) 3^6 ≡ 1 (mod 7); 100 = 6 · 16 + 4; 3^4 = 81 ≡ **4**. 2^12 ≡ 1 (mod 13); 100 = 12 · 8 + 4; 2^4 = 16 ≡ **3**.
(e) Step 1: n = 55, φ = 4 · 10 = 40. d with 3d ≡ 1 (mod 40): **d = 27** (81 = 2 · 40 + 1).
Step 2: Encrypt: 8^3 = 512 = 9 · 55 + 17, so **c = 17**.
Step 3: Decrypt: 17^27 mod 55 = **8** (computed by repeated squaring: 17^2 = 289 ≡ 14, 17^4 ≡ 196 ≡ 31, 17^8 ≡ 961 ≡ 26, 17^16 ≡ 676 ≡ 16; 27 = 16 + 8 + 2 + 1, so 16 · 26 · 14 · 17 mod 55: 16 · 26 = 416 ≡ 31; 31 · 14 = 434 ≡ 49; 49 · 17 = 833 ≡ 8 ✓).
(f) e d ≡ 1 (mod φ(n)), so m^(ed) = m · (m^φ)^k ≡ m (mod n) by Euler's theorem (for m coprime to n; it also holds in general for n = p q). An attacker who knows n and e needs φ(n) to find d, which needs the factorisation of n; factoring a 2048-bit modulus is infeasible with known algorithms.

**Q4.**
(a) Sum of degrees = 12, so **|E| = 6**. (3, 3, 3, 1) has sum 10 (5 edges) but a vertex of degree 1 can be adjacent to only one of the three degree-3 vertices, and each degree-3 vertex needs all three other vertices as neighbours: contradiction, so **no simple graph** exists.
(b) K_n has degree n - 1 for each vertex, so an Euler circuit exists iff n - 1 is even: **n odd**. K_(3,3) has all degrees 3 (odd), so **no**. Königsberg has four odd vertices, so **no Euler path** (needs at most two).
(c) Dijkstra from A:
Step 1: A = 0; relax: B = 7, C = 9, F = 14.
Step 2: settle B (7): D = 7 + 15 = 22; C via B = 17 (no improvement).
Step 3: settle C (9): D = min(22, 9 + 11) = 20; F = min(14, 9 + 2) = 11.
Step 4: settle F (11): E = 11 + 9 = 20.
Step 5: settle D (20) and E (20): E via D = 26 (no improvement).
Distances from A: **B = 7, C = 9, F = 11 (A-C-F), D = 20 (A-C-D), E = 20 (A-C-F-E)**. Order of finalisation: A 0, B 7, C 9, F 11, D 20, E 20.
(d) Sort edges: C-F 2, D-E 6, A-B 7, A-C 9, E-F 9, B-C 10, C-D 11, ... Accept C-F, D-E, A-B, A-C (joins {A, B} and {C, F}), E-F (joins {D, E}); reject B-C (cycle) and the rest. Total **2 + 6 + 7 + 9 + 9 = 33**, with 5 edges for 6 vertices ✓.
(e) Step 1: **Base** n = 1: 0 edges ✓. **Step:** assume every tree with k vertices has k - 1 edges.
Step 2: Take a tree T with k + 1 vertices.
Step 3: T has a leaf (a vertex of degree 1: take a longest path; its end is a leaf).
Step 4: Remove the leaf and its edge: the result is a tree with k vertices, so it has k - 1 edges; adding back the edge gives k edges = (k + 1) - 1. ∎
(f) Step 1: K_5 has V = 5, E = 10.
Step 2: If planar and connected, Euler's formula gives F = 2 - V + E = 7.
Step 3: Each face is bounded by at least 3 edges and each edge borders at most 2 faces, so 3F ≤ 2E, i.e. 21 ≤ 20: contradiction.
Step 4: So K_5 is not planar. ∎
