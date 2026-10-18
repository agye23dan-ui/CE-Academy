# Discrete Mathematics: Class Test

Duration: 60 minutes. No calculators. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** The implication p → q is false exactly when
A) p false, q true  B) p true, q false  C) both false  D) both true

**2.** The contrapositive of "if p then q" is
A) if q then p  B) if not p then not q  C) if not q then not p  D) p and not q

**3.** By De Morgan's law, ¬(p ∧ q) is equivalent to
A) ¬p ∧ ¬q  B) ¬p ∨ ¬q  C) p ∨ q  D) ¬p → q

**4.** The negation of ∀x P(x) is
A) ∀x ¬P(x)  B) ∃x ¬P(x)  C) ∃x P(x)  D) ¬∃x P(x)

**5.** A set with 5 elements has how many subsets?
A) 10  B) 25  C) 32  D) 120

**6.** C(10, 3) equals
A) 30  B) 120  C) 720  D) 1000

**7.** P(5, 2), the number of ordered selections of 2 from 5, equals
A) 10  B) 20  C) 25  D) 32

**8.** The number of edges in the complete graph K_6 is
A) 6  B) 12  C) 15  D) 30

**9.** The number of binary strings of length 8 is
A) 16  B) 64  C) 256  D) 512

**10.** gcd(48, 36) equals
A) 6  B) 12  C) 24  D) 144

**11.** In mathematics, -7 mod 3 equals
A) -1  B) 1  C) 2  D) -2

**12.** 3^5 mod 7 equals
A) 1  B) 3  C) 5  D) 6

**13.** A tree with 10 vertices has how many edges?
A) 9  B) 10  C) 11  D) 45

**14.** An equivalence relation must be
A) reflexive, symmetric, transitive  B) reflexive, antisymmetric, transitive  C) symmetric and antisymmetric  D) irreflexive and transitive

**15.** A function f is injective if
A) every element of the codomain is hit  B) f(a) = f(b) implies a = b  C) it has an inverse always  D) its domain is finite

**16.** In any graph the sum of all vertex degrees equals
A) the number of vertices  B) the number of edges  C) twice the number of edges  D) the number of faces

**17.** The recurrence T(n) = 2T(n/2) + n has solution
A) Θ(n)  B) Θ(n log n)  C) Θ(n^2)  D) Θ(log n)

**18.** In a proof by induction on n, the base case
A) proves the step  B) proves P for the smallest n  C) assumes P(k)  D) is optional

**19.** Among 13 people, at least two were born in the same month. This follows from
A) induction  B) the pigeonhole principle  C) De Morgan  D) Euler's formula

**20.** A connected graph has an Euler circuit if and only if
A) all vertices have even degree  B) it has no cycles  C) all vertices have odd degree  D) it is a tree

## Section B: Problems (40 marks)

**B1. (10 marks)** (a) Show that (p ∧ q) → (p ∨ r) is a tautology, using equivalences [4]. (b) Write "Every student has taken at least one course" using predicates S(x) and T(x, y) = "x has taken y", and write its negation [3]. (c) State the converse of "If n is divisible by 6 then n is divisible by 3" and decide whether it is true [3].

**B2. (10 marks)** Prove by induction: (a) 1 + 3 + 5 + ... + (2n - 1) = n^2 for n ≥ 1 [5]; (b) 5 divides 6^n - 1 for n ≥ 1 [5].

**B3. (10 marks)** (a) A committee of 4 is chosen from 6 men and 5 women. How many committees contain at least one woman? [3] (b) How many distinct arrangements of the letters of BANANA are there? [2] (c) How many non-negative integer solutions has x + y + z = 12? [2] (d) What is the probability of exactly 2 heads in 5 fair coin flips? [3]

**B4. (10 marks)** (a) Solve 5x ≡ 4 (mod 9) [3]. (b) Solve a_n = 3a_(n-1) - 2a_(n-2) with a_0 = 2, a_1 = 3 [3]. (c) A graph has edges A-B, A-C, B-D, C-D, C-E, D-F, E-F. List the order in which breadth-first search visits the vertices starting from A (visit neighbours alphabetically) and the distance of each vertex from A [4].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **C** · 3 **B** · 4 **B** · 5 **C** · 6 **B** · 7 **B** · 8 **C** · 9 **C** · 10 **B** · 11 **C** · 12 **C** · 13 **A** · 14 **A** · 15 **B** · 16 **C** · 17 **B** · 18 **B** · 19 **B** · 20 **A**

Brief reasons: 5. 2^5. 6. 10·9·8/6 = 120. 7. 5·4. 8. 6·5/2. 9. 2^8. 10. gcd = 12. 11. -7 = 3·(-3) + 2. 12. 3^5 = 243 = 34·7 + 5. 13. n - 1. 16. Handshaking lemma. 17. Master theorem, equal case. 19. 13 objects in 12 boxes. 20. Euler's theorem (connected graph).

### Section B

**B1.**
(a) (p ∧ q) → (p ∨ r) ≡ ¬(p ∧ q) ∨ (p ∨ r) ≡ (¬p ∨ ¬q) ∨ p ∨ r ≡ (¬p ∨ p) ∨ ¬q ∨ r ≡ T ∨ ¬q ∨ r ≡ **T**. (Intuitively, if p ∧ q is true then p is true, so p ∨ r is true.)
(b) **∀x (S(x) → ∃y T(x, y))**. Negation: **∃x (S(x) ∧ ∀y ¬T(x, y))** (some student has taken no course).
(c) Converse: "If n is divisible by 3 then n is divisible by 6." **False**: n = 3 is a counterexample.

**B2.**
(a) Base n = 1: 1 = 1^2 ✓. Step: assume the sum of the first k odd numbers is k^2. Then the sum for k + 1 is k^2 + (2(k + 1) - 1) = k^2 + 2k + 1 = (k + 1)^2. ∎
(b) Base n = 1: 6 - 1 = 5 ✓. Step: assume 6^k - 1 = 5m. Then 6^(k+1) - 1 = 6 · 6^k - 1 = 6(5m + 1) - 1 = 30m + 5 = 5(6m + 1). ∎

**B3.**
(a) Step 1: all committees of 4 from 11 people: C(11, 4) = 330.
Step 2: committees with no women (all 4 chosen from the 6 men): C(6, 4) = 15.
Step 3: at least one woman = 330 - 15 = **315**.
(b) Step 1: six letters with three As, two Ns and one B: 6!/(3! 2! 1!).
Step 2: = 720/(6 × 2) = 720/12 = **60**.
(c) Stars and bars: the number of non-negative solutions with 3 variables summing to 12 is C(12 + 2, 2) = C(14, 2) = 14 × 13/2 = **91**.
(d) Step 1: favourable outcomes (exactly 2 heads in 5 flips): C(5, 2) = 10.
Step 2: total outcomes 2^5 = 32, so P = 10/32 = **5/16 = 0.3125**.

**B4.**
(a) 5^-1 mod 9 = 2 (5 · 2 = 10 ≡ 1). x ≡ 2 · 4 = 8 (mod 9). Check: 5 · 8 = 40 = 4 · 9 + 4 ✓. **x ≡ 8 (mod 9)**.
(b) r^2 - 3r + 2 = (r - 1)(r - 2), so a_n = α + β 2^n. α + β = 2 and α + 2β = 3, so β = 1, α = 1: **a_n = 1 + 2^n**. Check: a_2 = 3 · 3 - 2 · 2 = 5 = 1 + 4 ✓.
(c) BFS from A: visit A; its neighbours B, C; then from B: D; from C: E (D is already visited); from D: F. **Order: A, B, C, D, E, F.** Distances: A 0, B 1, C 1, D 2, E 2, F 3.
