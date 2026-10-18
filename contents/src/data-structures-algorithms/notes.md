# Data Structures and Algorithms: Complete Lecture Notes

A **data structure** organises data so that the operations we need are efficient; an **algorithm** is a precise procedure for solving a problem. The two are inseparable: the choice of structure decides the best algorithm. Code samples are in C++17 (they are complete enough to compile with `g++ -std=c++17`), but every idea applies in any language. Notation: n is the input size, log means log base 2 unless stated, and "O(f)" is an upper bound.

## Chapter 1. Analysing Algorithms

### 1.1 Why analysis matters
Run time depends on the machine, but the **growth** of the cost with n does not. An O(n log n) sort handles a million items in a fraction of a second; an O(n^2) one needs about an hour. We count basic operations as a function of n, in the worst case (the guarantee), the average case (expected, under assumptions about the input), or the best case (rarely useful).

### 1.2 Asymptotic notation
- **f(n) = O(g(n))**: there are constants c and n0 with f(n) ≤ c g(n) for all n ≥ n0 (upper bound). **Ω(g)**: lower bound. **Θ(g)**: both. Drop constants and lower-order terms: 3n^2 + 10n + 7 = Θ(n^2).
- **Hierarchy:** 1 < log n < sqrt n < n < n log n < n^2 < n^3 < 2^n < n!. For n = 1,000,000: log n ≈ 20, n log n ≈ 2 × 10^7, n^2 = 10^12.
- **Counting loops.** Two nested loops with j running to i give 1 + 2 + ... + n = n(n + 1)/2 = Θ(n^2) (136 iterations for n = 16). A loop that doubles i from 1 while i < n runs ⌈log n⌉ times (4 for n = 16). A loop of n iterations containing a halving loop is Θ(n log n).

### 1.3 Recurrences
Divide-and-conquer algorithms give recurrences: T(n) = a T(n/b) + f(n). **Master theorem** (with f(n) = Θ(n^d)): if d < log_b a then T = Θ(n^(log_b a)); if d = log_b a then Θ(n^d log n); if d > log_b a then Θ(n^d). Examples: binary search T(n) = T(n/2) + 1 gives Θ(log n); merge sort T(n) = 2T(n/2) + n gives Θ(n log n); T(n) = 4T(n/2) + n gives Θ(n^2); Karatsuba T(n) = 3T(n/2) + n gives Θ(n^1.585); T(n) = T(n - 1) + 1 gives Θ(n). The substitution method and recursion trees confirm the answers.

### 1.4 Amortised analysis
The **amortised cost** is the average cost per operation over a worst-case sequence.
- **Dynamic array (vector) with doubling:** pushing n items copies 1 + 2 + 4 + ... < 2n elements in total: amortised O(1) per push. For 17 pushes starting with capacity 1, the copies are 1 + 2 + 4 + 8 + 16 = 31 < 2 × 17. (Growing by a fixed amount instead gives Θ(n^2) total.)
- **Binary counter:** n increments flip fewer than 2n bits in total (31 flips for 16 increments from 0), so each increment is amortised O(1). Methods: aggregate, accounting (credits), potential function.

## Chapter 2. Lists, Stacks and Queues

### 2.1 Arrays and dynamic arrays
Contiguous memory: indexing O(1), insertion or deletion in the middle O(n), amortised O(1) append at the end, excellent cache behaviour. `std::vector` in C++, `list` in Python, `ArrayList` in Java.

### 2.2 Linked lists
Nodes hold a value and pointers. A **singly linked list** has O(1) insertion at the head and at a known node, O(n) search and no random access; a **doubly linked list** adds O(1) deletion given a node and bidirectional traversal; a **circular list** and a **sentinel (dummy) head** simplify edge cases.
```cpp
struct Node { int val; Node* next; };

Node* reverse(Node* head) {                 // O(n) time, O(1) space
    Node* prev = nullptr;
    while (head) { Node* nx = head->next; head->next = prev; prev = head; head = nx; }
    return prev;
}
bool hasCycle(Node* head) {                 // Floyd: slow and fast pointers
    Node *s = head, *f = head;
    while (f && f->next) { s = s->next; f = f->next->next; if (s == f) return true; }
    return false;
}
Node* mergeSorted(Node* a, Node* b) {       // merge two sorted lists
    Node dummy{0, nullptr}; Node* t = &dummy;
    while (a && b) {
        if (a->val <= b->val) { t->next = a; a = a->next; } else { t->next = b; b = b->next; }
        t = t->next;
    }
    t->next = a ? a : b;
    return dummy.next;
}
```
Choose arrays unless you need frequent insertion or deletion at known positions; pointer chasing is slow on modern CPUs.

### 2.3 Stacks, queues and deques
- **Stack (LIFO):** push, pop, top, all O(1). Uses: function calls, undo, expression evaluation, matching brackets, depth-first search, backtracking. **Queue (FIFO):** enqueue, dequeue O(1) using a linked list or a **circular array** (indices modulo capacity). Uses: scheduling, buffering, breadth-first search. **Deque:** insertion and removal at both ends. **Priority queue:** see heaps.
- **Infix to postfix (shunting-yard)** and evaluation: "3 + 4 * 2 / ( 1 - 5 ) ^ 2" becomes `3 4 2 * 1 5 - 2 ^ / +`, which evaluates to 3.5 with a stack (the exponent operator is right-associative). Rules: operands go to the output; an operator pops operators of higher (or equal, if left-associative) precedence from the stack first; parentheses are matched with the stack.
- **Monotonic stack:** "next greater element" in O(n); **sliding window maximum** with a deque in O(n).

## Chapter 3. Sorting and Searching

### 3.1 Elementary sorts
For [5, 2, 9, 1, 5, 6]: **insertion sort** (9 comparisons, 6 shifts here; O(n^2) worst case, O(n) on sorted data, stable, good for small or nearly sorted inputs); **selection sort** (always n(n - 1)/2 = 15 comparisons, at most n - 1 swaps; not stable); **bubble sort** (14 comparisons and 6 swaps with early exit; rarely used). Their cost is related to the number of **inversions** in the input.

### 3.2 Efficient comparison sorts
- **Merge sort:** split, sort halves, merge. Θ(n log n) always, stable, needs O(n) extra space. Good for linked lists and external sorting.
- **Quicksort:** choose a pivot, partition, recurse. **Lomuto partition** with the last element as pivot: on [3, 8, 2, 5, 1, 4, 7, 6] the pivot 6 ends at index 5 giving [3, 2, 5, 1, 4, 6, 7, 8]. Average Θ(n log n), worst case Θ(n^2) (already sorted input with a bad pivot rule); fix with random or median-of-three pivots; in-place; not stable. Introsort (quicksort + heapsort fallback) is used by std::sort.
- **Heapsort:** build a max-heap in O(n), then repeatedly move the maximum to the end: Θ(n log n) worst case, in place, not stable.
- **Lower bound:** any comparison sort needs at least log2(n!) = Θ(n log n) comparisons (a decision tree with n! leaves has height ≥ log2(n!); for n = 8 that is 16).
- **Non-comparison sorts:** **counting sort** (keys in 0..k: Θ(n + k), stable), **radix sort** (digit by digit with a stable sort: Θ(d(n + k))), **bucket sort** (uniform data, average Θ(n)).
- **Stability** (equal keys keep their relative order) matters when sorting by several keys. `std::sort` is unstable; `std::stable_sort` is stable. Python's `sorted` uses Timsort (stable, adaptive).

### 3.3 Searching
- **Linear search** Θ(n). **Binary search** on sorted arrays Θ(log n): `mid = lo + (hi - lo)/2` to avoid overflow; at most ⌊log2 n⌋ + 1 probes (20 for a million items). Variants: lower_bound/upper_bound, search on the answer, rotated arrays.
- **Selection:** the k-th smallest element in expected O(n) with quickselect; median of medians gives worst-case O(n).

## Chapter 4. Hashing

A **hash table** maps keys to values in average O(1). A hash function h(k) maps a key to an index in a table of size m; a good function spreads keys uniformly (for integers h(k) = k mod m with m prime; for strings a polynomial rolling hash). **Load factor** α = n/m.
- **Separate chaining:** each slot holds a list. Expected search cost 1 + α. With keys 50, 700, 76, 85, 92, 73, 101 and m = 7: slot 0 → [700]; slot 1 → [50, 85, 92]; slot 3 → [73, 101]; slot 6 → [76].
- **Open addressing:** all entries live in the table; on a collision probe another slot. **Linear probing** h(k, i) = (h(k) + i) mod m (simple, cache-friendly, suffers from primary clustering): the same keys give the table [700, 50, 85, 92, 73, 101, 76] with 1, 1, 1, 2, 3, 2, 3 probes in insertion order. **Double hashing** uses a second hash h2 (with h2(k) = 5 - (k mod 5)) for the step: it spreads the keys better but has less locality. Deletion needs tombstones. Performance degrades sharply as α → 1; resize (rehash into a table twice the size) when α exceeds a threshold, which is amortised O(1).
- **Worst case** is O(n) (all keys collide): adversarial inputs motivate randomised or cryptographic hashing. Applications: dictionaries (`unordered_map`, Python `dict`), sets, caches, de-duplication, counting, Bloom filters, consistent hashing.

## Chapter 5. Trees

### 5.1 Binary trees and traversals
A binary tree node has left and right children. Terms: root, leaf, height (edges on the longest root-to-leaf path), depth, subtree. A tree with n nodes has n - 1 edges; a perfect binary tree of height h has 2^(h+1) - 1 nodes. **Traversals:** preorder (node, left, right), inorder (left, node, right), postorder (left, right, node), and level order (BFS with a queue). Preorder plus inorder (or postorder plus inorder) uniquely determine a binary tree.

### 5.2 Binary search trees
For every node, keys in the left subtree are smaller and keys in the right subtree are larger. Search, insert and delete are O(h): O(log n) for a balanced tree, O(n) for a degenerate one (keys inserted in sorted order). **Inorder traversal gives the keys in sorted order.** Deletion has three cases: a leaf (remove), one child (splice out), two children (replace with the inorder successor (the minimum of the right subtree) or predecessor and delete that node).
Inserting 50, 30, 70, 20, 40, 60, 80, 35, 45 gives inorder 20 30 35 40 45 50 60 70 80, preorder 50 30 20 40 35 45 70 60 80, postorder 20 35 45 40 30 60 80 70 50, level order 50 30 70 20 40 60 80 35 45, and height 3. Deleting 30 (two children) replaces it by its successor 35.
```cpp
struct TNode { int key; TNode *l = nullptr, *r = nullptr; TNode(int k) : key(k) {} };
TNode* insert(TNode* t, int k) {
    if (!t) return new TNode(k);
    if (k < t->key) t->l = insert(t->l, k); else t->r = insert(t->r, k);
    return t;
}
bool contains(const TNode* t, int k) {
    while (t) { if (k == t->key) return true; t = (k < t->key) ? t->l : t->r; }
    return false;
}
void inorder(const TNode* t, std::vector<int>& out) {
    if (!t) return; inorder(t->l, out); out.push_back(t->key); inorder(t->r, out);
}
```

### 5.3 Balanced trees
- **AVL trees** keep |height(left) - height(right)| ≤ 1 at every node using rotations: single right (LL case), single left (RR), left-right (LR) and right-left (RL). Height ≤ 1.44 log n, so all operations are O(log n). Inserting 10, 20, 30, 40, 50, 25 gives (preorder): [10]; [10, 20]; a left rotation at 10 gives [20, 10, 30]; [20, 10, 30, 40]; a left rotation at 30 gives [20, 10, 40, 30, 50]; inserting 25 causes a right-left double rotation at 20, giving [30, 20, 10, 25, 40, 50].
- **Red-black trees** (used in `std::map`, Java TreeMap) and **B-trees/B+ trees** (databases and file systems: many keys per node to minimise disk reads), **skip lists**, **splay trees**.

### 5.4 Heaps and priority queues
A **binary heap** is a complete binary tree stored in an array (children of i at 2i + 1 and 2i + 2) with the heap property (min-heap: parent ≤ children). **insert** (append, sift up) and **extract-min** (replace the root with the last item, sift down) are O(log n); **peek** is O(1); **build-heap** from n items by sifting down from n/2 - 1 to 0 is Θ(n). Inserting 9, 4, 7, 1, 6, 2 into a min-heap gives [1, 4, 2, 9, 6, 7]; extract-min removes 1 and leaves [2, 4, 7, 9, 6]. Build-heap of [4, 10, 3, 5, 1] as a max-heap gives [10, 5, 3, 4, 1]. Uses: priority queues, Dijkstra, event simulation, top-k (keep a heap of size k: O(n log k)), merging k sorted lists, heapsort.

### 5.5 Tries and other structures
A **trie** stores strings along root-to-node paths: insert/search in O(length) independent of the number of words; used for autocomplete and IP routing. **Union-find (disjoint sets)** supports `find` and `union` with **path compression** and **union by rank** in nearly constant amortised time (inverse Ackermann). After the unions (0,1), (2,3), (1,3), (4,5), (6,7), (5,7), (3,7) all of 0 to 7 are in one set. **Segment trees and Fenwick trees** answer range queries in O(log n). **Huffman coding** (below) uses a priority queue.

## Chapter 6. Graph Algorithms

### 6.1 Representation and traversal
Adjacency list (O(V + E) space; best for sparse graphs) or matrix (O(V^2); O(1) edge test).
- **BFS** (queue): visits vertices in order of distance from the source, finds shortest paths in unweighted graphs, O(V + E). **DFS** (stack or recursion): finds connected components, detects cycles, classifies edges, O(V + E).
- On the DAG 0 → {1, 2}, 1 → 3, 2 → {3, 4}, 3 → 5, 4 → 5: BFS from 0 visits 0, 1, 2, 3, 4, 5 with distances 0, 1, 1, 2, 2, 3; DFS visits 0, 1, 3, 5, 2, 4 (neighbours in increasing order).
- **Topological sort** of a DAG: Kahn's algorithm (repeatedly remove vertices of in-degree 0) or the reverse DFS finishing order; the example above gives 0, 1, 2, 3, 4, 5. A graph has a topological order iff it has no cycle. Uses: build systems, course prerequisites, task scheduling.

### 6.2 Shortest paths
- **Dijkstra** (non-negative weights): priority queue, O((V + E) log V). Relax edges from the closest unfinished vertex. For S→A 4, S→B 1, B→A 2, A→C 1, B→C 5, B→D 8, C→D 3: distances A = 3, B = 1, C = 4, D = 7 with the path S-B-A-C-D.
- **Bellman-Ford** (negative edges allowed, detects negative cycles): relax all edges V - 1 times, O(VE). **Floyd-Warshall** all-pairs: three nested loops, O(V^3). **A\*** adds a heuristic.

### 6.3 Minimum spanning trees
- **Kruskal:** sort the edges, add each edge that joins two different components (union-find): O(E log E). **Prim:** grow a tree from a vertex with a priority queue: O(E log V). Both rely on the **cut property**. On the 7-vertex example with edges AB 7, AD 5, BC 8, BD 9, BE 7, CE 5, DE 15, DF 6, EF 8, EG 9, FG 11, the MST has weight 39 (edges AD 5, CE 5, DF 6, AB 7, BE 7, EG 9).
- Other topics: strongly connected components (Kosaraju, Tarjan), bipartite checking by BFS colouring, maximum flow (Ford-Fulkerson), matching.

## Chapter 7. Algorithm Design Paradigms

### 7.1 Divide and conquer
Merge sort, quicksort, binary search, closest pair, fast exponentiation (x^n in O(log n) multiplications), Strassen and Karatsuba multiplication, fast Fourier transform.

### 7.2 Greedy algorithms
Make the locally best choice and never reconsider. Correct when the problem has the **greedy-choice property** and optimal substructure; prove it by an exchange argument.
- **Activity selection:** sort by finish time and take each compatible activity: from (1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11), (8,12), (2,14), (12,16) the greedy answer is (1,4), (5,7), (8,11), (12,16), i.e. 4 activities.
- **Fractional knapsack** (take items by value per weight), **Huffman coding** (repeatedly merge the two least frequent symbols): for frequencies a 45, b 13, c 12, d 16, e 9, f 5 the code lengths are 1, 3, 3, 3, 4, 4 and the expected cost is 2.24 bits per symbol (224 bits per 100 symbols against 300 for a fixed 3-bit code), plus Kruskal, Prim and Dijkstra.
- **Greedy can fail:** making change for 11 with coins {1, 5, 6, 9}: greedy takes 9 + 1 + 1 = 3 coins but the optimum is 5 + 6 = 2 coins.

### 7.3 Dynamic programming
Solve overlapping subproblems once and store the results (**memoisation** top-down, or **tabulation** bottom-up). Steps: define the state, write the recurrence, set the base cases, choose the evaluation order, extract the answer (and the solution by backtracking).
- **Fibonacci:** F(n) = F(n - 1) + F(n - 2): naive recursion is Θ(φ^n), memoised Θ(n) (177 calls for fib(10) naively).
- **0/1 knapsack:** dp[i][c] = max(dp[i-1][c], dp[i-1][c - w_i] + v_i). Weights {1, 3, 4, 5}, values {1, 4, 5, 7}, capacity 7: the best value is 9 (items of weight 3 and 4). Θ(nW) pseudo-polynomial.
- **Longest common subsequence:** L[i][j] = L[i-1][j-1] + 1 if the characters match, else max(L[i-1][j], L[i][j-1]). LCS("ABCBDAB", "BDCABA") has length 4 (for example BCBA). **Edit distance** (insert, delete, substitute) between "kitten" and "sitting" is 3. **Coin change** (minimum coins): for {1, 5, 6, 9} and 11, dp gives 2. **Longest increasing subsequence** of [10, 9, 2, 5, 3, 7, 101, 18] is 4 (Θ(n^2), or Θ(n log n) with binary search). Others: matrix-chain multiplication, shortest paths, sequence alignment.

### 7.4 Backtracking and search
Build solutions incrementally and abandon (prune) a branch as soon as it cannot lead to a solution. **N-Queens:** the numbers of solutions for n = 1 to 8 are 1, 0, 0, 2, 10, 4, 40, 92. Also subset sum, permutations, Sudoku, graph colouring. Branch and bound adds a bound to prune. Exhaustive search is exponential, so pruning and good ordering are essential.

### 7.5 String algorithms
**KMP** pattern matching uses the failure (prefix) function to avoid re-scanning: for "ABABCABAB" the failure array is [0, 0, 1, 2, 0, 1, 2, 3, 4]; matching takes Θ(n + m). Other methods: Rabin-Karp (rolling hash), Z-algorithm, suffix arrays and tries.

## Chapter 8. Intractability

- **P:** problems solvable in polynomial time. **NP:** problems whose solutions can be **verified** in polynomial time. **NP-complete:** the hardest problems in NP (every NP problem reduces to them): SAT, 3-SAT, subset sum, 0/1 knapsack (decision version), travelling salesman (decision), Hamiltonian cycle, graph colouring, vertex cover, clique. **P versus NP** is open.
- To prove a new problem NP-hard, **reduce** a known NP-hard problem to it in polynomial time.
- Coping: approximation algorithms (for example the 2-approximation for vertex cover), heuristics (greedy, local search, simulated annealing), exact exponential algorithms for small instances (TSP with n = 10 has 10! ≈ 3.6 × 10^6 tours; DP gives O(n^2 2^n)), and special structure.
- **Decidability:** the halting problem is undecidable.

## Chapter 9. Choosing and Implementing
- Need fast lookup by key: hash table; sorted order or range queries: balanced BST/ordered map; repeatedly the minimum: heap; FIFO/LIFO: queue/stack; connectivity: union-find; shortest paths: BFS/Dijkstra; optimisation with overlapping subproblems: DP.
- In practice use the standard library (`vector`, `unordered_map`, `map`, `priority_queue`, `sort`, `lower_bound`), measure with a profiler, and remember constants and cache effects: a vector often beats a linked list even when the Big-O is worse.
- **Testing algorithms:** compare against a brute-force implementation on random small inputs, test edge cases (empty, one element, duplicates, sorted, reverse sorted, maximum size).

## Chapter 10. Common Mistakes Checklist
1. Off-by-one errors in loop bounds and binary search (an infinite loop when lo and hi never cross).
2. Forgetting that quicksort is Θ(n^2) on bad pivots, and assuming hash tables are always O(1).
3. Modifying a container while iterating over it; dangling pointers after deletion in a linked list.
4. Using Dijkstra with negative edges, or BFS for weighted shortest paths.
5. Not handling the empty list, a single node or duplicate keys.
6. Stack overflow from deep recursion on degenerate trees or long lists.
7. Mistaking a greedy choice for a proven-correct one (always test against DP or brute force).
8. Confusing O(·) with Θ(·), or counting only comparisons when memory access dominates.
