# Data Structures and Algorithms: Final Examination

Duration: 3 hours. No computer or notes. Total: 100 marks. Code is C++17 pseudocode-level: syntax errors will not be penalised if the intention is clear.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** Two nested loops, each running n times, give a running time of
A) Θ(n)  B) Θ(n log n)  C) Θ(n^2)  D) Θ(2^n)

**2.** Building a binary heap from n arbitrary elements with Floyd's method takes
A) Θ(n)  B) Θ(n log n)  C) Θ(n^2)  D) Θ(log n)

**3.** The maximum number of probes of binary search on 1000 sorted items is about
A) 3  B) 10  C) 100  D) 1000

**4.** The load factor of a hash table with 50 slots holding 100 keys (chaining) is
A) 0.5  B) 1  C) 2  D) 50

**5.** The height of an AVL tree with n nodes is
A) Θ(1)  B) Θ(log n)  C) Θ(n)  D) Θ(n log n)

**6.** In an unweighted graph, the shortest path (fewest edges) from a source is found by
A) DFS  B) BFS  C) Kruskal  D) topological sort

**7.** Kruskal's algorithm detects cycles with
A) a queue  B) union-find  C) a stack  D) binary search

**8.** The recurrence T(n) = 2T(n/2) + n solves to
A) Θ(n)  B) Θ(n log n)  C) Θ(n^2)  D) Θ(log n)

**9.** Dynamic programming differs from divide and conquer in that its subproblems
A) are independent  B) overlap  C) are always smaller by half  D) are unsolvable

**10.** The inorder traversal of a BST produces
A) sorted order  B) reverse order  C) level order  D) random order

**11.** Counting sort of n integers in the range 0..k runs in
A) Θ(n log n)  B) Θ(n + k)  C) Θ(n k)  D) Θ(k log n)

**12.** Which of these is a stable sort?
A) heapsort  B) merge sort  C) selection sort (swap-based)  D) quicksort (typical)

**13.** A topological sort is possible for
A) all graphs  B) directed acyclic graphs  C) undirected graphs  D) complete graphs

**14.** A circular array queue uses indices computed
A) modulo the capacity  B) by sorting  C) randomly  D) by hashing

**15.** Quicksort with the last element as pivot is worst on
A) random data  B) already sorted data  C) data with many ties only  D) very short arrays

**16.** Dijkstra's algorithm can fail when the graph has
A) cycles  B) negative edge weights  C) multiple edges  D) many vertices

**17.** Which of these is NP-complete?
A) sorting  B) Boolean satisfiability (SAT)  C) binary search  D) finding the minimum of an array

**18.** The memory used by a recursive DFS on a tree of height h (excluding the tree itself) is
A) O(1)  B) O(h)  C) O(n^2)  D) O(2^h)

**19.** The amortised cost of vector::push_back is
A) O(n)  B) O(log n)  C) O(1)  D) O(n^2)

**20.** A Huffman code is
A) fixed-length  B) prefix-free and optimal for the given frequencies  C) always 8 bits per symbol  D) not decodable

## Section B: Short Questions (40 marks)

**B1. (5)** Give the Θ-class and justify: `for (i = 0; i < n; i++) { for (j = 0; j < n; j += 2) work(); } for (k = 1; k < n; k *= 2) work();`

**B2. (5)** Convert `5 + ( 1 + 2 ) * 4 - 3` to postfix and evaluate it with a stack. (Hint: the postfix is `5 1 2 + 4 * + 3 -`.) Show the stack after each token.

**B3. (5)** Build a max-heap from [3, 1, 6, 5, 2, 4] by Floyd's method (sift down from index 2 to 0) and give the array, and the array after the first heapsort extraction (swap the root with the last element and sift down in the shortened heap).

**B4. (5)** How many comparisons does binary search need in the worst case for n = 1000? Explain with the decision tree. How many for n = 1,000,000?

**B5. (5)** A hash table with chaining holds n = 100 keys in m = 50 slots. Give the load factor, the expected number of keys examined in an unsuccessful search, and in a successful search (using 1 + α/2).

**B6. (5)** For a tree with root 1, children 2 and 3, node 2 has children 4 and 5, node 3 has child 6, give the DFS preorder and the BFS order (children left to right).

**B7. (5)** How many different binary search tree shapes exist with 5 nodes? Give the formula.

**B8. (5)** Tasks have dependencies A → C, B → C, C → D, B → E, E → D (X → Y means X must precede Y). Use Kahn's algorithm to produce a valid order and state how to detect an impossible schedule.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Graph algorithms.** An undirected graph on S, A, B, C, D has edges S-A 3, S-B 6, A-B 2, A-C 5, B-C 1, B-D 4, C-D 3.
(a) Run Dijkstra from S and give the distances and the shortest path to D. [4]
(b) Find a minimum spanning tree (Kruskal) and its weight. [3]
(c) Is the MST unique? Explain. [1]
(d) State the complexity of Dijkstra with a binary heap and with an array. [2]

**C2. Heap application.** Merge k sorted lists with a min-heap.
(a) Write C++ for `vector<int> mergeK(const vector<vector<int>>&)` using a priority queue of (value, list index, position). [5]
(b) Trace the heap contents for the lists {1, 5, 9}, {2, 6, 8}, {3, 4, 7}: give the first six values extracted. [2]
(c) State the time complexity in terms of N (total elements) and k, and why it is better than concatenating and sorting when k is small. [3]

**C3. Balanced trees.**
(a) Insert 3, 2, 1, 4, 5, 6, 7 into an empty AVL tree; name each rotation and give the final tree (preorder). [6]
(b) Compare with the BST you would get without balancing: its height. [2]
(c) State the time for search, insert and delete in an AVL tree and the extra information stored. [2]

**C4. Dynamic programming.**
(a) Rod cutting with prices p = [1, 5, 8, 9, 10, 17, 17, 20] for lengths 1 to 8: write the recurrence and compute the best revenue for lengths 1 to 8. [5]
(b) Compute the length of the longest common subsequence of "AGGTAB" and "GXTXAYB" and give one subsequence. [3]
(c) State the time and space complexity of each. [2]

**C5. Cache design.** Design an LRU cache with capacity 2 supporting `get(key)` and `put(key, value)` in O(1).
(a) Name the two data structures that give O(1) for both operations and explain their roles. [3]
(b) Trace: put(1,1), put(2,2), get(1), put(3,3), get(2), put(4,4), get(1), get(3), get(4): give the output of each get. [4]
(c) Why does a plain hash table with a timestamp scan not meet the O(1) requirement? [1]
(d) Name another eviction policy and its main trade-off. [2]

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **C** · 2 **A** · 3 **B** · 4 **C** · 5 **B** · 6 **B** · 7 **B** · 8 **B** · 9 **B** · 10 **A** · 11 **B** · 12 **B** · 13 **B** · 14 **A** · 15 **B** · 16 **B** · 17 **B** · 18 **B** · 19 **C** · 20 **B**

Brief reasons: 3. ⌊log2 1000⌋ + 1 = 10. 4. 100/50. 8. Master theorem, equal case. 15. Sorted data with the last element as pivot gives a degenerate partition. 18. The recursion depth is the height.

## Section B solutions

**B1.** Step 1: the first double loop runs the outer loop n times and the inner loop n/2 times (j += 2): n × n/2 = n^2/2 executions, which is Θ(n^2).
Step 2: the second loop runs ⌈log2 n⌉ times (k doubles): Θ(log n).
Step 3: the total is Θ(n^2) + Θ(log n) = **Θ(n^2)** (the larger term dominates).

**B2.** Postfix: **5 1 2 + 4 * + 3 -**. Stack: push 5 → [5]; push 1 → [5, 1]; push 2 → [5, 1, 2]; + → [5, 3]; push 4 → [5, 3, 4]; * → [5, 12]; + → [17]; push 3 → [17, 3]; - → **[14]**. The value is **14**.

**B3.** Array [3, 1, 6, 5, 2, 4], n = 6; sift down from index n/2 - 1 = 2 to 0.
Step 1: index 2 (key 6) has the child 4 (index 5): 6 is larger, no change.
Step 2: index 1 (key 1) has children 5 and 2: swap with 5 → [3, 5, 6, 1, 2, 4].
Step 3: index 0 (key 3) has children 5 and 6: swap with 6 → [6, 5, 3, 1, 2, 4]; then 3 (index 2) has the child 4: swap → **[6, 5, 4, 1, 2, 3]**.
Heapsort first extraction:
Step 4: swap the root with the last element: [3, 5, 4, 1, 2 | 6].
Step 5: sift down 3 in the heap of size 5: children 5 and 4, swap with 5 → **[5, 3, 4, 1, 2, 6]** (6 is in its final place).

**B4.** Each comparison halves the range, so the decision tree has height ⌊log2 n⌋ + 1.
Step 1: n = 1000: log2 1000 = 9.97, so ⌊9.97⌋ + 1 = **10 comparisons** (2^9 = 512 < 1000 ≤ 2^10 = 1024).
Step 2: n = 1,000,000: log2 10^6 = 19.93, so ⌊19.93⌋ + 1 = **20 comparisons**.

**B5.** Step 1: load factor α = n/m = 100/50 = **2**.
Step 2: unsuccessful search: the whole chain is examined, **α = 2 keys** on average.
Step 3: successful search: 1 + α/2 = 1 + 1 = **2 keys** on average.
Lookups stay constant-time if α is bounded; resizing keeps α below a threshold.

**B6.** DFS preorder: **1, 2, 4, 5, 3, 6**. BFS order: **1, 2, 3, 4, 5, 6**.

**B7.** Step 1: the number of BST shapes with n nodes is the Catalan number C_n = C(2n, n)/(n + 1).
Step 2: for n = 5: C(10, 5) = 252, and 252/6 = **42**.

**B8.** In-degrees: A 0, B 0, C 2, D 2, E 1. Start with the queue {A, B}. Remove A: C's in-degree becomes 1. Remove B: C becomes 0 and E becomes 0; append C, E. Remove C: D becomes 1. Remove E: D becomes 0; append D. Remove D. **One valid order: A, B, C, E, D** (another: B, A, E, C, D). If the algorithm ends with unprocessed vertices (the queue empties while some in-degrees are still positive), the graph has a **cycle** and no valid schedule exists.

## Section C solutions

**C1.**
(a) Dijkstra from S:
Step 1: S = 0; relax S: A = 3, B = 6.
Step 2: settle A (3): B = min(6, 3 + 2) = 5, C = 3 + 5 = 8.
Step 3: settle B (5): C = min(8, 5 + 1) = 6, D = 5 + 4 = 9.
Step 4: settle C (6): D = min(9, 6 + 3) = 9 (a tie).
Step 5: settle D (9).
**Distances: S 0, A 3, B 5, C 6, D 9.** Shortest paths to D: **S-A-B-D** (3 + 2 + 4 = 9) and S-A-B-C-D (3 + 2 + 1 + 3 = 9): two shortest paths of length 9.
(b) Kruskal:
Step 1: sort the edges: BC 1, AB 2, SA 3, CD 3, BD 4, AC 5, SB 6.
Step 2: accept BC, AB, SA, CD (4 edges for 5 vertices); reject BD (it would form a cycle B-C-D), AC and SB.
Step 3: **MST weight = 1 + 2 + 3 + 3 = 9.**
(c) Yes, the MST is **unique**. By the cycle property the heaviest edge of any cycle is never needed when it is strictly heavier than the other edges of that cycle. Here the rejected edges BD (4), AC (5) and SB (6) are each the strictly heaviest edge of a cycle (B-C-D, A-B-C and S-A-B respectively), so no alternative tree of weight 9 exists.
(d) With a binary heap: **O((V + E) log V)**; with an array (linear minimum search): **O(V^2)**, which is better for dense graphs.

**C2.**
(a)
```cpp
#include <queue>
#include <tuple>
#include <vector>
std::vector<int> mergeK(const std::vector<std::vector<int>>& lists) {
    using T = std::tuple<int, size_t, size_t>;                  // (value, list index, position)
    std::priority_queue<T, std::vector<T>, std::greater<T>> pq;  // min-heap
    for (size_t i = 0; i < lists.size(); ++i)
        if (!lists[i].empty()) pq.emplace(lists[i][0], i, 0);
    std::vector<int> out;
    while (!pq.empty()) {
        auto [v, i, p] = pq.top(); pq.pop();
        out.push_back(v);
        if (p + 1 < lists[i].size()) pq.emplace(lists[i][p + 1], i, p + 1);
    }
    return out;
}
```
(b) Step 1: the heap initially holds (1, list 0), (2, list 1), (3, list 2).
Step 2: extract **1** (push 5 from list 0); heap {2, 3, 5}. Extract **2** (push 6); heap {3, 5, 6}. Extract **3** (push 4); heap {4, 5, 6}. Extract **4** (push 7); heap {5, 6, 7}. Extract **5** (push 9); heap {6, 7, 9}. Extract **6** (push 8); heap {7, 8, 9}.
The first six values extracted are 1, 2, 3, 4, 5, 6 (the full result is 1 to 9 in order).
(c) Each of the N elements is pushed and popped once from a heap of size at most k: **O(N log k)** time, **O(k)** extra memory for the heap. Concatenating and sorting costs O(N log N); for small k, log k is much smaller than log N. The method also works as a streaming merge (external sort).

**C3.**
(a) Insert 3, 2, 1: the node 3 is left-heavy (LL case): **right rotation at 3** gives root 2 with children 1 and 3. Insert 4: no rotation. Insert 5: the node 3 becomes right-heavy (RR): **left rotation at 3** gives subtree 4 (3, 5). Insert 6: the root 2 becomes right-heavy (RR): **left rotation at 2** gives root 4 with left 2 (1, 3) and right 5 (right child 6). Insert 7: the node 5 becomes right-heavy (RR): **left rotation at 5** gives 6 (5, 7). The final tree is perfect: preorder **4, 2, 1, 3, 6, 5, 7**, height 2.
(b) Without balancing, inserting 3, 2, 1, 4, 5, 6, 7 gives a BST whose longest path is 3-4-5-6-7: **height 4** (versus 2 for the AVL tree).
(c) Search, insert and delete are all **O(log n)**; each node stores its **height (or balance factor)**.

**C4.**
(a) Recurrence: r(0) = 0 and **r(n) = max over i = 1..n of (p_i + r(n - i))**, with p = [1, 5, 8, 9, 10, 17, 17, 20].
Step 1: r(1) = p1 = 1.
Step 2: r(2) = max(p2 = 5, p1 + r(1) = 2) = 5.
Step 3: r(3) = max(p3 = 8, p1 + r(2) = 6, p2 + r(1) = 6) = 8.
Step 4: r(4) = max(p4 = 9, p1 + r(3) = 9, p2 + r(2) = 10, p3 + r(1) = 9) = 10 (5 + 5).
Step 5: r(5) = max(p5 = 10, 1 + r(4) = 11, 5 + r(3) = 13, 8 + r(2) = 13, 9 + r(1) = 10) = 13.
Step 6: r(6) = p6 = 17 (the best of 17, 1 + 13 = 14, 5 + 10 = 15, 8 + 8 = 16, 9 + 5 = 14, 10 + 1 = 11).
Step 7: r(7) = max(17, 1 + 17 = 18, 5 + 13 = 18, 8 + 10 = 18, 9 + 8 = 17, 10 + 5 = 15, 17 + 1 = 18) = 18.
Step 8: r(8) = max(20, 1 + 18 = 19, 5 + 17 = 22, 8 + 13 = 21, 9 + 10 = 19, 10 + 8 = 18, 17 + 5 = 22, 17 + 1 = 18) = 22 (for example a piece of 2 plus a piece of 6).
So the revenues are **1, 5, 8, 10, 13, 17, 18, 22**.
(b) Recurrence: if the characters match, L[i][j] = L[i-1][j-1] + 1, else max(L[i-1][j], L[i][j-1]). Table for X = AGGTAB (rows) and Y = GXTXAYB (columns G, X, T, X, A, Y, B):
row A: 0 0 0 0 1 1 1
row G: 1 1 1 1 1 1 1
row G: 1 1 1 1 1 1 1
row T: 1 1 2 2 2 2 2
row A: 1 1 2 2 3 3 3
row B: 1 1 2 2 3 3 4
The LCS has **length 4** (the bottom-right cell): **GTAB**.
(c) Rod cutting: **Θ(n^2) time, Θ(n) space**. LCS: **Θ(mn) time**, Θ(mn) space (or Θ(min(m, n)) for the length only).

**C5.**
(a) A **hash map** from key to node pointer (O(1) lookup) and a **doubly linked list** ordered from most recently used (head) to least recently used (tail). On get: find the node via the map, move it to the head, return the value. On put: update and move to the head if present, otherwise insert at the head and, if the size exceeds the capacity, remove the tail node (and its map entry). All steps are O(1) since the list nodes can be unlinked in O(1) given a pointer.
(b) Capacity 2: put(1,1): [1]; put(2,2): [2, 1]; get(1) returns **1** and the order becomes [1, 2]; put(3,3) evicts the least recently used key 2: [3, 1]; get(2) returns **-1**; put(4,4) evicts 1: [4, 3]; get(1) returns **-1**; get(3) returns **3**; get(4) returns **4**. Outputs: **1, -1, -1, 3, 4**.
(c) Finding the least recently used entry by scanning timestamps takes O(n) per eviction. Only a structure that keeps the order incrementally (the linked list) gives O(1).
(d) **LFU** (least frequently used) keeps frequently accessed items longer but needs frequency counters and is slower to adapt; **FIFO** is the simplest but ignores recency; **CLOCK** approximates LRU with less overhead; random eviction is cheap but unpredictable. Any one with its trade-off earns the marks.
