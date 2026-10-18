# Discrete Mathematics: Complete Lecture Notes

Discrete mathematics is the mathematics of countable, separate objects: statements, sets, integers, graphs. It is the language of computer science: algorithms, data structures, databases, cryptography, networks and digital logic all rest on it. Notation: ¬ not, ∧ and, ∨ or, → implies, ↔ if and only if, ∀ for all, ∃ there exists, ∈ belongs to, ⊆ subset, ∪ union, ∩ intersection, Z the integers, N = {0, 1, 2, ...}, "mod" the remainder, a | b means a divides b.

## Chapter 1. Propositional Logic

### 1.1 Propositions and connectives
A **proposition** is a statement that is true or false. Compound propositions use connectives. Truth values (T/F, or 1/0):
- ¬p is true when p is false. p ∧ q is true only if both are true. p ∨ q is true if at least one is true (inclusive or). p ⊕ q (exclusive or) is true if exactly one is true.
- **Implication** p → q is false only when p is true and q is false. It is equivalent to ¬p ∨ q. In "if p then q", p is the hypothesis and q the conclusion. Related statements: **converse** q → p, **inverse** ¬p → ¬q, **contrapositive** ¬q → ¬p. The contrapositive is equivalent to the original; the converse and inverse are not.
- **Biconditional** p ↔ q is true when p and q have the same truth value; it equals (p → q) ∧ (q → p).

### 1.2 Equivalences and tautologies
A **tautology** is always true, a **contradiction** always false, and a **contingency** neither. Two statements are **logically equivalent** (≡) if they have the same truth table. Key laws:
- Identity: p ∧ T ≡ p, p ∨ F ≡ p. Domination: p ∨ T ≡ T, p ∧ F ≡ F. Idempotent: p ∧ p ≡ p. Double negation: ¬¬p ≡ p.
- Commutative, associative, distributive: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r), p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r).
- **De Morgan:** ¬(p ∧ q) ≡ ¬p ∨ ¬q, and ¬(p ∨ q) ≡ ¬p ∧ ¬q.
- Absorption: p ∨ (p ∧ q) ≡ p. Implication: p → q ≡ ¬p ∨ q. Contrapositive: p → q ≡ ¬q → ¬p.
These are exactly the laws of Boolean algebra used in digital logic. To prove an equivalence, use a truth table (for few variables) or chain the laws.
**Example.** Show (p → q) ∧ (q → r) → (p → r) is a tautology (hypothetical syllogism). A truth table with 8 rows shows it is true in every row; algebraically, the hypothesis implies p → r.

### 1.3 Normal forms
Every proposition is equivalent to a **disjunctive normal form** (DNF: an OR of ANDs of literals) and a **conjunctive normal form** (CNF: an AND of ORs). Read a DNF from the rows of the truth table that are true (minterms). {¬, ∧, ∨} is functionally complete, and so are {NAND} and {NOR} alone. **SAT** (is there an assignment making a CNF true?) is the classic NP-complete problem.

### 1.4 Predicates and quantifiers
A **predicate** P(x) becomes a proposition when x is given a value or quantified over a domain.
- ∀x P(x): P holds for every x in the domain. ∃x P(x): P holds for at least one x.
- **Negation:** ¬∀x P(x) ≡ ∃x ¬P(x) and ¬∃x P(x) ≡ ∀x ¬P(x).
- Order matters for mixed quantifiers: ∀x ∃y (x + y = 0) is true over the integers (take y = -x), but ∃y ∀x (x + y = 0) is false.
- Translation: "every student has a friend who is a student" is ∀x (S(x) → ∃y (F(x, y) ∧ S(y))). Use → with ∀ and ∧ with ∃.
- Counterexample: to disprove ∀x P(x), exhibit one x where P(x) fails.

### 1.5 Rules of inference and arguments
An argument is valid if the conclusion is true whenever all premises are true.
- Modus ponens: p, p → q ⊢ q. Modus tollens: ¬q, p → q ⊢ ¬p. Hypothetical syllogism: p → q, q → r ⊢ p → r. Disjunctive syllogism: p ∨ q, ¬p ⊢ q. Resolution: p ∨ q, ¬p ∨ r ⊢ q ∨ r. Universal instantiation, existential generalisation.
- Common fallacies: affirming the conclusion (q, p → q ⊢ p) and denying the hypothesis (¬p, p → q ⊢ ¬q).

## Chapter 2. Proof Techniques

### 2.1 Basic methods
- **Direct proof:** assume p, deduce q. Example: the sum of two odd integers is even: (2a + 1) + (2b + 1) = 2(a + b + 1).
- **Contrapositive:** to prove p → q, prove ¬q → ¬p. Example: if n^2 is even then n is even (if n = 2k + 1 then n^2 = 4k^2 + 4k + 1 is odd).
- **Contradiction:** assume the negation and derive a falsehood. **Theorem:** sqrt 2 is irrational. Suppose sqrt 2 = a/b in lowest terms. Then a^2 = 2b^2, so a is even, a = 2c, and 4c^2 = 2b^2 gives b^2 = 2c^2, so b is even: a contradiction with lowest terms.
- **Cases**, **existence proofs** (constructive or non-constructive), **uniqueness**, **counterexamples**, and "without loss of generality".
- There are infinitely many primes (Euclid): if p1, ..., pk were all, then p1 p2 ... pk + 1 has a prime factor not in the list.

### 2.2 Mathematical induction
To prove P(n) for all n ≥ n0: **base case** P(n0), and **inductive step**: assume P(k) (the inductive hypothesis) and prove P(k + 1).
- **Example 1.** 1 + 2 + ... + n = n(n + 1)/2. Base n = 1: 1 = 1. Step: assume for k; then 1 + ... + k + (k + 1) = k(k + 1)/2 + (k + 1) = (k + 1)(k + 2)/2.
- **Example 2.** 3 divides n^3 + 2n. Step: (k + 1)^3 + 2(k + 1) = (k^3 + 2k) + 3k^2 + 3k + 3, a sum of multiples of 3.
- **Example 3.** 2^n > n^2 for n ≥ 5.
- **Strong induction:** assume P(j) for all n0 ≤ j ≤ k and prove P(k + 1). Example: every integer n ≥ 12 can be written as 4a + 5b with a, b ≥ 0. Bases: 12 = 4·3, 13 = 4·2 + 5, 14 = 4 + 5·2, 15 = 5·3. For n ≥ 16, n - 4 ≥ 12 is representable by the hypothesis, so add one more 4.
- **Structural induction** proves properties of recursively defined sets (lists, trees, formulas). **Well-ordering principle:** every non-empty set of non-negative integers has a least element (equivalent to induction).
- Typical mistakes: omitting the base case, assuming what is to be proved, and the flawed "all horses have the same colour" argument (the step fails for n = 1 to 2).

## Chapter 3. Sets, Functions and Relations

### 3.1 Sets
Set builder notation {x | P(x)}; subset, proper subset; the empty set ∅; universal set U; the **power set** P(A) has 2^|A| elements; Cartesian product A × B has |A||B| ordered pairs. Operations: union, intersection, difference A - B, complement A', symmetric difference. Set identities mirror logical equivalences (De Morgan: (A ∪ B)' = A' ∩ B'). Prove A = B by showing A ⊆ B and B ⊆ A, or with a membership table. **Inclusion-exclusion** for two sets: |A ∪ B| = |A| + |B| - |A ∩ B|.
Cardinality: finite, countably infinite (N, Z, Q) and uncountable (R, shown by Cantor's diagonal argument). **Halting problem:** no algorithm decides whether an arbitrary program halts (also by diagonalisation).

### 3.2 Functions
f: A → B assigns each element of the domain A exactly one element of the codomain B. **Injective (one-to-one):** f(a) = f(b) implies a = b. **Surjective (onto):** every b in B equals f(a) for some a. **Bijective:** both; only bijections have inverses. Composition (g ∘ f)(x) = g(f(x)). Examples: f(x) = 2x + 1 on Z is injective but not surjective; f(x) = x^2 on Z is neither. Floor ⌊x⌋ and ceiling ⌈x⌉. For finite sets, |A| = |B| and f injective implies f bijective. The **pigeonhole principle:** if more than k objects go into k boxes, some box has at least two; the generalised form: with n objects in k boxes some box has at least ⌈n/k⌉.

### 3.3 Relations
A relation R from A to B is a subset of A × B. On a set A, R is:
- **reflexive:** (a, a) in R for all a; **symmetric:** (a, b) in R implies (b, a) in R; **antisymmetric:** (a, b) and (b, a) in R imply a = b; **transitive:** (a, b) and (b, c) in R imply (a, c) in R.
- An **equivalence relation** is reflexive, symmetric and transitive. It partitions A into **equivalence classes**. Example: congruence mod 3 on Z has 3 classes [0], [1], [2].
- A **partial order** is reflexive, antisymmetric and transitive. Example: divisibility on {1, 2, 3, 4, 6, 12}. Draw it as a **Hasse diagram** (omit loops and implied edges). Terms: minimal and maximal elements, least and greatest elements, upper and lower bounds, least upper bound (join) and greatest lower bound (meet). A **total order** has every pair comparable. A lattice has joins and meets for all pairs.
- Representations: matrices (zero-one matrix, Boolean product for composition), digraphs. **Transitive closure** (Warshall's algorithm). **Relational databases** are collections of relations; joins correspond to composition.

## Chapter 4. Counting

### 4.1 Basic principles
- **Sum rule:** if tasks are mutually exclusive, add the numbers of ways. **Product rule:** for sequential independent choices, multiply. **Subtraction rule (inclusion-exclusion):** |A ∪ B| = |A| + |B| - |A ∩ B|, and for three sets |A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |A ∩ C| - |B ∩ C| + |A ∩ B ∩ C|. **Division rule:** divide to remove overcounting.
- **Example.** Passwords of 8 characters from 62 letters and digits that contain at least one digit: 62^8 - 52^8 = 164,880,377,053,440. (Count all, subtract those with no digits.)

### 4.2 Permutations and combinations
- Permutations of r items from n: P(n, r) = n!/(n - r)!. Combinations: C(n, r) = n!/(r!(n - r)!), also written "n choose r".
- Properties: C(n, r) = C(n, n - r), Pascal's rule C(n, r) = C(n - 1, r - 1) + C(n - 1, r), Σ C(n, k) = 2^n.
- **Permutations with repeated objects:** n!/(n1! n2! ... nk!). MISSISSIPPI: 11!/(4! 4! 2!) = 34,650.
- **Circular arrangements:** (n - 1)!. **Combinations with repetition** (selecting r items from n types): C(n + r - 1, r), i.e. **stars and bars**. The number of non-negative integer solutions of x1 + x2 + x3 + x4 = 10 is C(13, 3) = 286; with each xi ≥ 1 it is C(9, 3) = 84.
- **Binomial theorem:** (x + y)^n = Σ C(n, k) x^(n-k) y^k. The coefficient of x^3 in (2x + 1)^7 is C(7, 3) · 2^3 = 280.
- **Poker hands** (5 cards of 52, total C(52, 5) = 2,598,960): a full house has 13 · C(4, 3) · 12 · C(4, 2) = 3,744; a flush (not straight flush) has 4 · C(13, 5) - 40 = 5,108.

### 4.3 Inclusion-exclusion and derangements
General form: |A1 ∪ ... ∪ An| = Σ|Ai| - Σ|Ai ∩ Aj| + Σ|Ai ∩ Aj ∩ Ak| - ... Integers from 1 to 100 divisible by 2, 3 or 5: 50 + 33 + 20 - 16 - 10 - 6 + 3 = 74. **Derangements** (permutations with no fixed point) D_n = n! Σ(-1)^k/k!: D_5 = 44, and D_n/n! → 1/e.

### 4.4 Discrete probability
Sample space S, event E, P(E) = |E|/|S| for equally likely outcomes. P(E') = 1 - P(E); P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Conditional probability P(A | B) = P(A ∩ B)/P(B). **Bayes' theorem:** P(A | B) = P(B | A) P(A)/P(B). Independent events: P(A ∩ B) = P(A) P(B). **Expected value** E[X] = Σ x P(X = x), linear: E[X + Y] = E[X] + E[Y]. Variance Var(X) = E[X^2] - E[X]^2. Example: the expected number of fixed points in a random permutation of n objects is 1.

## Chapter 5. Recurrence Relations and Algorithm Analysis

### 5.1 Modelling with recurrences
A recurrence defines a sequence in terms of earlier terms. Examples: Fibonacci F_n = F_(n-1) + F_(n-2); Tower of Hanoi H_n = 2H_(n-1) + 1, H_n = 2^n - 1; the number of bit strings of length n with no two consecutive 0s satisfies a_n = a_(n-1) + a_(n-2).

### 5.2 Linear homogeneous recurrences with constant coefficients
For a_n = c1 a_(n-1) + c2 a_(n-2) solve the **characteristic equation** r^2 = c1 r + c2. If the roots r1, r2 are distinct: a_n = α r1^n + β r2^n; if a repeated root r: a_n = (α + β n) r^n. Constants come from the initial conditions.
**Example.** a_n = 5a_(n-1) - 6a_(n-2), a_0 = 1, a_1 = 4. The equation r^2 - 5r + 6 = 0 gives r = 2, 3; α + β = 1 and 2α + 3β = 4, so β = 2, α = -1 and a_n = 2·3^n - 2^n (values 1, 4, 14, 46, 146, ...).
**Fibonacci:** r = (1 ± sqrt 5)/2 gives Binet's formula F_n = (φ^n - ψ^n)/sqrt 5. **Non-homogeneous** recurrences add a particular solution (for example a_n = 2a_(n-1) + 3 has a_n = A·2^n - 3). Generating functions give another method.

### 5.3 Divide-and-conquer recurrences and the master theorem
For T(n) = a T(n/b) + f(n) = a T(n/b) + Θ(n^d): if d < log_b a then T(n) = Θ(n^(log_b a)); if d = log_b a then Θ(n^d log n); if d > log_b a then Θ(n^d).
- Merge sort T(n) = 2T(n/2) + n: d = 1 = log_2 2, so Θ(n log n).
- Binary search T(n) = T(n/2) + 1: Θ(log n).
- T(n) = 4T(n/2) + n: log_2 4 = 2 > 1, so Θ(n^2). Karatsuba multiplication T(n) = 3T(n/2) + n gives Θ(n^1.585).

### 5.4 Big-O
f(n) is O(g(n)) if there are C and k with |f(n)| ≤ C|g(n)| for all n > k. Order of growth: 1 < log n < n < n log n < n^2 < n^3 < 2^n < n!. Θ means both upper and lower bounds. Sum rule: O(f) + O(g) = O(max). Polynomial P(n) = a_d n^d + ... is Θ(n^d). Example: 3n^2 + 10n + 7 is O(n^2) with C = 4, k = 11. Complexity classes P and NP (informally): problems solvable in polynomial time versus verifiable in polynomial time; whether P = NP is open.

## Chapter 6. Number Theory and Cryptography

### 6.1 Divisibility and modular arithmetic
a | b if b = a k for some integer k. **Division algorithm:** a = d q + r with 0 ≤ r < d. a ≡ b (mod m) means m | (a - b). Congruences can be added, subtracted and multiplied: a ≡ b and c ≡ d imply a + c ≡ b + d and a c ≡ b d (mod m). Division requires an inverse.
- **Primes:** the **Fundamental Theorem of Arithmetic**: every integer above 1 is a unique product of primes. Sieve of Eratosthenes; there are infinitely many primes.
- **gcd and Euclid's algorithm:** gcd(a, b) = gcd(b, a mod b). gcd(252, 198): 252 = 1·198 + 54; 198 = 3·54 + 36; 54 = 1·36 + 18; 36 = 2·18, so gcd = 18. **Bézout:** gcd(a, b) = s a + t b; here 18 = 54 - 36 = 54 - (198 - 3·54) = 4·54 - 198 = 4(252 - 198) - 198 = 4·252 - 5·198. lcm(a, b) = ab/gcd(a, b).
- **Modular inverse:** a has an inverse modulo m iff gcd(a, m) = 1; find it by the extended Euclidean algorithm. 7^-1 mod 26 = 15 since 7 · 15 = 105 = 4·26 + 1. Then 7x ≡ 3 (mod 26) gives x ≡ 15 · 3 = 45 ≡ 19.
- **Chinese remainder theorem:** for pairwise coprime moduli, the system x ≡ a_i (mod m_i) has a unique solution modulo the product. x ≡ 2 (mod 3), 3 (mod 5), 2 (mod 7) gives x ≡ 23 (mod 105).
- **Fermat's little theorem:** if p is prime and p ∤ a, then a^(p-1) ≡ 1 (mod p). Example: 3^100 mod 7: 3^6 ≡ 1, 100 = 6 · 16 + 4, so 3^100 ≡ 3^4 = 81 ≡ 4. **Euler's theorem:** a^φ(n) ≡ 1 (mod n) for gcd(a, n) = 1. Fast modular exponentiation by repeated squaring takes O(log e) multiplications.

### 6.2 Applications
- **Hashing:** h(k) = k mod m. **Pseudorandom numbers:** x_(n+1) = (a x_n + c) mod m. **Check digits** (ISBN, credit cards via Luhn). **Caesar and affine ciphers:** C = (a P + b) mod 26.
- **RSA cryptosystem:** choose primes p, q; n = p q; φ(n) = (p - 1)(q - 1); choose e coprime to φ(n); d = e^-1 mod φ(n). Public key (n, e), private key d. Encrypt c = m^e mod n; decrypt m = c^d mod n (correct by Euler's theorem). **Toy example:** p = 5, q = 11, n = 55, φ = 40, e = 3, d = 27 (3 · 27 = 81 = 2 · 40 + 1). Encrypting m = 8 gives 8^3 = 512 ≡ 17 (mod 55); decrypting 17^27 mod 55 = 8. Real keys use primes of 1024 bits or more; security relies on the difficulty of factoring n.
- **Diffie-Hellman key exchange** uses the discrete logarithm problem.

## Chapter 7. Graph Theory

### 7.1 Basic definitions
A **graph** G = (V, E) has vertices and edges (undirected or directed). Terms: adjacent, incident, degree (number of edges at a vertex), loops, multiple edges, simple graph, complete graph K_n (n(n - 1)/2 edges), cycle C_n, path P_n, bipartite graph (vertices split into two sets with edges only between them; equivalently no odd cycle), complete bipartite K_(m,n), subgraph, isomorphism.
**Handshaking lemma:** the sum of the degrees equals 2|E|, so the number of odd-degree vertices is even. A degree sequence (3, 3, 2, 2, 2) has sum 12, hence 6 edges, and is realisable.
**Representations:** adjacency list (space O(V + E)), adjacency matrix (O(V^2), constant-time edge test), incidence matrix.

### 7.2 Connectivity and traversal
Paths, connected components, cut vertices and bridges. **Breadth-first search** (queue; shortest path by edge count in unweighted graphs) and **depth-first search** (stack or recursion; used for cycle detection, topological sort and strongly connected components); both run in O(V + E).

### 7.3 Euler and Hamilton paths
- An **Euler circuit** (traverses every edge once and returns) exists in a connected graph iff every vertex has even degree. An **Euler path** exists iff exactly 0 or 2 vertices have odd degree. (The Königsberg bridges problem has 4 odd vertices, so there is no Euler path.)
- A **Hamilton cycle** visits every vertex once. There is no simple necessary and sufficient condition; Dirac's theorem: a simple graph with n ≥ 3 vertices and every degree ≥ n/2 has a Hamilton cycle. Deciding is NP-complete (the travelling salesman problem is its weighted version).

### 7.4 Weighted graphs
- **Dijkstra's algorithm** finds shortest paths from a source in graphs with non-negative weights, using a priority queue: O((V + E) log V). Bellman-Ford handles negative weights; Floyd-Warshall gives all pairs in O(V^3).
- **Example.** Vertices A to F with edges A-B 7, A-C 9, A-F 14, B-C 10, B-D 15, C-D 11, C-F 2, D-E 6, E-F 9. From A: B = 7, C = 9, F = 11 (A-C-F), D = 20 (A-C-D), E = 20 (A-C-F-E).

### 7.5 Trees and spanning trees
A **tree** is a connected graph with no cycles. Equivalent facts: a tree on n vertices has n - 1 edges; adding any edge creates a cycle; exactly one path joins any two vertices. A rooted binary tree with height h has at most 2^(h+1) - 1 vertices. A **spanning tree** connects all vertices with V - 1 edges. A **minimum spanning tree** (MST) has least total weight: **Kruskal's algorithm** adds the cheapest edges that do not form a cycle (union-find); **Prim's algorithm** grows a tree from a vertex. For the example above Kruskal selects C-F (2), D-E (6), A-B (7), A-C (9), E-F (9): total 33. Applications: network design, clustering, decision trees, parse trees, Huffman coding (prefix-free codes with minimal expected length).

### 7.6 Colouring and planarity
The **chromatic number** χ(G) is the least number of colours so that adjacent vertices differ. Bipartite graphs have χ = 2; K_n has χ = n; every planar graph is 4-colourable (Four Colour Theorem). Applications: scheduling, register allocation, frequency assignment. A graph is **planar** if it can be drawn without crossings. **Euler's formula** for a connected planar graph: V - E + F = 2. A simple planar graph with V ≥ 3 has E ≤ 3V - 6 (and E ≤ 2V - 4 if bipartite). K_5 and K_3,3 are not planar; by **Kuratowski's theorem**, a graph is planar iff it contains no subdivision of K_5 or K_3,3. **Matching and flows:** Hall's marriage theorem; max-flow min-cut theorem.

## Chapter 8. Boolean Algebra and Finite Structures (preview of Digital Logic)
Boolean algebra on {0, 1} with +, ·, ' satisfies the same laws as logic with ∨, ∧, ¬. Boolean functions can be written as sums of minterms; any function can be built from AND, OR, NOT, or from NAND alone. Finite automata (DFAs) accept regular languages; regular expressions describe them; they model protocol controllers and lexical analysers.

## Chapter 9. Common Mistakes Checklist
1. Treating p → q as p ∧ q, or confusing the converse with the contrapositive.
2. Mis-negating quantifiers (the negation of "all are" is "some are not") or swapping quantifier order.
3. Proving by example (an example never proves a ∀ statement) or assuming the conclusion in a proof.
4. Missing base cases (or wrong base cases) in induction; using the same variable for the hypothesis and the new case.
5. Using permutations when order does not matter, or forgetting to divide for repeated objects.
6. Double-counting in inclusion-exclusion; forgetting the "-1" in 62^8 - 52^8 type complementary counting arguments.
7. Dividing in modular arithmetic without checking that the inverse exists.
8. Confusing the number of edges in a tree (V - 1) with the number of vertices; applying Dijkstra with negative weights.
