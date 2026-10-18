# Data Structures and Algorithms: Class Test

Duration: 60 minutes. No computer. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each).

## Section A: Multiple choice (20 marks)

**1.** Which of these sorts runs in Θ(n log n) in the worst case?
A) insertion sort  B) bubble sort  C) merge sort  D) selection sort

**2.** Binary search requires the data to be
A) unique  B) sorted  C) in a linked list  D) integers only

**3.** A stack follows the rule
A) first in, first out  B) last in, first out  C) random access  D) priority order

**4.** A queue follows the rule
A) first in, first out  B) last in, first out  C) largest first  D) smallest first

**5.** The inorder traversal of a binary search tree visits the keys
A) in descending order  B) in sorted ascending order  C) level by level  D) in random order

**6.** Accessing the k-th element of an array takes
A) O(1)  B) O(log n)  C) O(n)  D) O(k^2)

**7.** Inserting at the head of a singly linked list takes
A) O(1)  B) O(log n)  C) O(n)  D) O(n^2)

**8.** The worst-case running time of quicksort with a poor pivot choice is
A) Θ(n)  B) Θ(n log n)  C) Θ(n^2)  D) Θ(2^n)

**9.** Reading the minimum of a min-heap takes
A) O(1)  B) O(log n)  C) O(n)  D) O(n log n)

**10.** The average-case lookup time in a hash table with a good hash function is
A) O(1)  B) O(log n)  C) O(n)  D) O(n^2)

**11.** Breadth-first search uses
A) a stack  B) a queue  C) a heap  D) a hash table only

**12.** Depth-first search is naturally implemented with
A) a queue  B) a stack or recursion  C) a heap  D) a sorted array

**13.** Dijkstra's algorithm requires edge weights to be
A) integers  B) non-negative  C) distinct  D) negative

**14.** A tree with n nodes has how many edges?
A) n  B) n - 1  C) n + 1  D) 2n

**15.** A perfect binary tree with 15 nodes has height
A) 3  B) 4  C) 7  D) 15

**16.** The best case of insertion sort (already sorted input) is
A) O(1)  B) O(n)  C) O(n log n)  D) O(n^2)

**17.** Which of these sorting algorithms is stable?
A) heapsort  B) quicksort (typical)  C) merge sort  D) selection sort (swapping)

**18.** Which algorithm finds a minimum spanning tree?
A) Dijkstra  B) Kruskal  C) Bellman-Ford  D) Floyd-Warshall

**19.** A topological ordering exists for
A) any graph  B) any directed acyclic graph  C) only trees  D) only undirected graphs

**20.** Dynamic programming is effective when the problem has
A) independent subproblems only  B) overlapping subproblems and optimal substructure  C) no recursion  D) a greedy choice always

## Section B: Problems (40 marks)

**B1. (10 marks)** (a) How many times does the inner statement execute for n = 8, and what is the Θ-class? `for (i = 0; i < n; i++) for (j = 0; j < i; j++) work();` [3] (b) Solve T(n) = 2T(n/2) + n^2 with the master theorem [2]. (c) A dynamic array doubles when full. Explain why n pushes cost O(n) in total, and give the amortised cost per push [3]. (d) What is the Θ-class of `for (i = 1; i < n; i *= 2) work();`? [2]

**B2. (10 marks)** Insert the keys 8, 3, 10, 1, 6, 14, 4, 7, 13 into an empty BST. (a) Give the inorder, preorder and postorder traversals [4]. (b) Give the height of the tree [2]. (c) Delete the key 10: say which deletion case applies and describe the result [2]. (d) How many comparisons does a search for 7 need? [2]

**B3. (10 marks)** (a) Sort [7, 3, 5, 1] with insertion sort: give the number of comparisons and shifts [3]. (b) Insert 7, 3, 5, 1 one at a time into a min-heap and show the array after each insertion [4]. (c) Show the array after one extract-min [2]. (d) Why is heapsort not stable? [1]

**B4. (10 marks)** (a) Run Dijkstra's algorithm from A on the graph A→B 2, A→C 5, B→C 1, B→D 7, C→D 3 and give all distances [4]. (b) Give the BFS order from A (neighbours in alphabetical order) [2]. (c) Minimum coins to make 6 with coins {1, 3, 4}: greedy versus optimal [4].

---

## Answer Key and Solutions

### Section A
1 **C** · 2 **B** · 3 **B** · 4 **A** · 5 **B** · 6 **A** · 7 **A** · 8 **C** · 9 **A** · 10 **A** · 11 **B** · 12 **B** · 13 **B** · 14 **B** · 15 **A** · 16 **B** · 17 **C** · 18 **B** · 19 **B** · 20 **B**

Brief reasons: 1. Merge sort always splits evenly. 5. Left, node, right gives sorted order. 8. Sorted input with the last element as pivot. 15. 2^4 - 1 = 15 nodes means height 3 (edges). 17. Merge sort with <= is stable. 19. Cycles prevent any ordering.

### Section B

**B1.**
(a) Step 1: for each i the inner loop runs i times, so the total is 0 + 1 + 2 + ... + (n - 1) = n(n - 1)/2.
Step 2: for n = 8: 8 × 7/2 = **28** times; the class is **Θ(n^2)**.
(b) Step 1: a = 2, b = 2, f(n) = n^2, so d = 2 and log_b a = log_2 2 = 1.
Step 2: d = 2 > 1: the top-level work dominates, so **Θ(n^2)**.
(c) Step 1: each doubling copies the current elements: 1 + 2 + 4 + ... + n/2 < n copies in total (a geometric series less than 2 × n/2).
Step 2: add the n writes for the pushes themselves: fewer than 2n element operations, so n pushes cost O(n) and the **amortised cost per push is O(1)**.
(d) Step 1: i = 1, 2, 4, ..., below n (it doubles each time).
Step 2: the number of iterations is ⌈log2 n⌉: **Θ(log n)**.

**B2.**
(a) Inorder: **1 3 4 6 7 8 10 13 14**. Preorder: **8 3 1 6 4 7 10 14 13**. Postorder: **1 4 7 6 3 13 14 10 8**.
(b) Height **3** (the paths 8-3-6-4, 8-3-6-7 and 8-10-14-13 all have 3 edges).
(c) The node 10 has one child (14), so the deletion is the **one-child case**: splice 10 out and link 8's right pointer to 14. The new preorder is 8 3 1 6 4 7 14 13.
(d) Compare with 8, 3, 6, 7: **4 comparisons**.

**B3.**
(a) Insertion sort on [7, 3, 5, 1] (comparisons / shifts per key):
Step 1: key 3: compare with 7 (shift): 1 / 1 → [3, 7, 5, 1].
Step 2: key 5: compare with 7 (shift), compare with 3 (stop): 2 / 1 → [3, 5, 7, 1].
Step 3: key 1: compare with 7, 5, 3 (all shifted): 3 / 3 → [1, 3, 5, 7].
Total **6 comparisons and 5 shifts** (the number of inversions is 5: (7,3), (7,5), (7,1), (3,1), (5,1)). Result [1, 3, 5, 7].
(b) Insert 7: [7]; insert 3: [3, 7]; insert 5: [3, 7, 5]; insert 1: sift up past 3 gives **[1, 3, 5, 7]**.
(c) Extract-min removes 1, moves 7 to the root and sifts down (7 swaps with 3): **[3, 7, 5]**.
(d) Heapsort moves the last element to the root and sifts it down, so equal keys can jump over each other (long-range exchanges): it is **not stable**.

**B4.**
(a) Dijkstra from A on A→B 2, A→C 5, B→C 1, B→D 7, C→D 3:
Step 1: A = 0; relax A: B = 2, C = 5.
Step 2: settle B (2): C = min(5, 2 + 1) = 3, D = 2 + 7 = 9.
Step 3: settle C (3): D = min(9, 3 + 3) = 6.
Step 4: settle D (6).
Distances: **A 0, B 2, C 3, D 6**.
(b) BFS from A: **A, B, C, D**.
(c) Step 1: greedy takes the largest coin that fits: 4, then the remaining 2 needs 1 + 1: 4 + 1 + 1 = **3 coins**.
Step 2: the optimum is 3 + 3 = **2 coins** (dp: dp[0..6] = 0, 1, 2, 1, 1, 2, 2).
Greedy fails for this coin system because the greedy choice property does not hold; dynamic programming computes the optimum.
