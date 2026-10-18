# Data Structures and Algorithms: Assignments with Worked Solutions

Implement every data structure yourself before you use the library version. Code is C++17 (compile with `g++ -std=c++17 -Wall -Wextra`); the traces and counts below were produced by running the algorithms. Marks are given for correctness, stated complexity, handling of edge cases and clear reasoning.

# Assignment 1: Analysis, Lists, Stacks, Queues and Sorting (70 marks)

## Questions

**Q1. Complexity (12 marks)** (a) Give the exact number of executions of the inner statement and the Θ-class, and evaluate for n = 16 [6]:
 (i) `for (i = 1; i <= n; i++) for (j = 1; j <= i; j++) work();`
 (ii) `for (i = 1; i < n; i *= 2) work();`
 (iii) `for (i = 0; i < n; i++) for (j = 1; j < n; j *= 2) work();` (Θ-class only)
(b) Solve with the master theorem: T(n) = 2T(n/2) + n; T(n) = 4T(n/2) + n; T(n) = T(n/2) + 1; T(n) = 2T(n/2) + n^2; T(n) = 3T(n/2) + n [5]. (c) Is 3n^2 + 10n + 7 in O(n^2)? In Ω(n)? In Θ(n^3)? [1]

**Q2. Amortised analysis (8 marks)** (a) A dynamic array starts with capacity 1 and doubles when full. Count the elements copied during 17 pushes and compare with 2n [4]. (b) A binary counter starts at 0 and is incremented 16 times; count the total bit flips and give the amortised cost [4].

**Q3. Linked lists (10 marks)** Write (a) `Node* reverse(Node*)`, (b) `bool hasCycle(Node*)` using two pointers, (c) `Node* mergeSorted(Node*, Node*)`. Give the complexities and the results of reversing 1→2→3→4→5 and merging 1→4→7 with 2→3→9.

**Q4. Stacks and queues (10 marks)** (a) Convert `3 + 4 * 2 / ( 1 - 5 ) ^ 2` to postfix (the operator ^ is right-associative) and evaluate it [5]. (b) A circular queue has capacity 5. Starting empty (head = 0), perform enqueue 1, 2, 3, 4; dequeue, dequeue; enqueue 5, 6, 7, 8. Give the return of each operation and the final contents of the array, head and size [5].

**Q5. Sorting (14 marks)** (a) For [5, 2, 9, 1, 5, 6] count the comparisons (and shifts or swaps) of insertion sort, selection sort and bubble sort (with early exit) [6]. (b) Show the result of the first Lomuto partition (last element as pivot) of [3, 8, 2, 5, 1, 4, 7, 6] and the number of partition calls to finish the sort [3]. (c) Build a max-heap from [4, 10, 3, 5, 1] [2]. (d) Counting sort on [4, 2, 2, 8, 3, 3, 1]: give the count array and the cumulative counts [3].

**Q6. Searching and bounds (6 marks)** (a) Show how many probes binary search needs in the worst case for n = 1,000,000 [2]. (b) Give the information-theoretic lower bound on comparisons to sort 8 items [2]. (c) Explain why a comparison sort cannot beat Ω(n log n) but counting sort can [2].

**Q7. Merge sort (10 marks)** Write a stable merge sort in C++ that counts comparisons, state the recurrence, and report the comparison counts for [5, 2, 9, 1, 5, 6] and for the sorted array 1..8.

## Solutions and Marking Guide

**Q1.**
(a)(i) Step 1: for each i the inner loop runs i times, so the total is 1 + 2 + ... + n.
Step 2: the sum is **n(n + 1)/2**, which is Θ(n^2).
Step 3: for n = 16: 16 × 17/2 = **136**.
(ii) Step 1: i takes the values 1, 2, 4, 8, ... while i < n (it doubles each time).
Step 2: the number of iterations is ⌈log2 n⌉: **Θ(log n)**.
Step 3: for n = 16: i = 1, 2, 4, 8 (16 is not < 16), so **4**.
(iii) Step 1: the inner loop runs ⌈log2 n⌉ times (j doubles).
Step 2: it is executed for each of the n outer iterations: n ⌈log2 n⌉ times, **Θ(n log n)**.
(b) Master theorem T(n) = a T(n/b) + Θ(n^d): compare d with log_b a.
(1) a = 2, b = 2, d = 1: log_2 2 = 1 = d, so **Θ(n log n)**.
(2) a = 4, b = 2, d = 1: log_2 4 = 2 > 1, so **Θ(n^2)**.
(3) a = 1, b = 2, d = 0: log_2 1 = 0 = d, so **Θ(log n)**.
(4) a = 2, b = 2, d = 2: log_2 2 = 1 < 2, so **Θ(n^2)**.
(5) a = 3, b = 2, d = 1: log_2 3 = 1.585 > 1, so **Θ(n^1.585)**.
(c) Step 1: 3n^2 + 10n + 7 ≤ 4n^2 when n^2 - 10n - 7 ≥ 0, true for n ≥ 11 (121 - 110 - 7 = 4), so it is in O(n^2) with C = 4.
Step 2: it is at least n for n ≥ 1, so it is in Ω(n): **yes**.
Step 3: it is **not** in Θ(n^3): n^3 grows faster, so it is O(n^3) but not Ω(n^3).

**Q2.**
(a) Capacity starts at 1 and doubles when a push finds the array full. A table of the pushes that copy:
Push 1: size 0 to 1, no copy (capacity 1).
Push 2: array full (size 1), copy 1 element, capacity 2.
Push 3: full (size 2), copy 2, capacity 4.
Push 5: full (size 4), copy 4, capacity 8.
Push 9: full (size 8), copy 8, capacity 16.
Push 17: full (size 16), copy 16, capacity 32.
Total copies = 1 + 2 + 4 + 8 + 16 = **31** < 2n = 34. In general the copies form a geometric series less than 2n, so the **amortised cost per push is O(1)** (at most about 3 element writes: one for the push and up to two for copying).
(b) Flips at increment k = (number of trailing 1s of k - 1) + 1 (the trailing 1s become 0 and one 0 becomes 1):
Increments 1 to 16 flip 1, 2, 1, 3, 1, 2, 1, 4, 1, 2, 1, 3, 1, 2, 1, 5 bits.
Total = 1+2+1+3+1+2+1+4+1+2+1+3+1+2+1+5 = **31 flips** (check: 2n - popcount(n) = 32 - 1 = 31).
Amortised cost = 31/16 = 1.94 < **2 flips per increment, O(1)**, although a single increment (from 0111...1) can flip all log n bits. (Accounting argument: each 0→1 flip pays a credit that pays for the later 1→0 flip.)

**Q3.**
```cpp
#include <iostream>
struct Node { int val; Node* next; };

Node* reverse(Node* head) {                 // O(n) time, O(1) space
    Node* prev = nullptr;
    while (head) { Node* nx = head->next; head->next = prev; prev = head; head = nx; }
    return prev;
}
bool hasCycle(Node* head) {                 // O(n) time, O(1) space (Floyd)
    Node *s = head, *f = head;
    while (f && f->next) { s = s->next; f = f->next->next; if (s == f) return true; }
    return false;
}
Node* mergeSorted(Node* a, Node* b) {       // O(n + m) time, no allocation
    Node dummy{0, nullptr}; Node* t = &dummy;
    while (a && b) {
        if (a->val <= b->val) { t->next = a; a = a->next; } else { t->next = b; b = b->next; }
        t = t->next;
    }
    t->next = a ? a : b;
    return dummy.next;
}
```
Reversing 1→2→3→4→5 gives **5 4 3 2 1**. Merging 1→4→7 with 2→3→9 gives **1 2 3 4 7 9**. For hasCycle: if the fast pointer reaches the end, there is no cycle; otherwise the fast pointer eventually catches the slow pointer inside the cycle (the gap closes by 1 each step). Using `<=` in the merge keeps equal elements from list a first, so the merge is stable. (3 marks each for reverse and merge, 2 for the cycle test, 2 for complexities.)

**Q4.**
(a) Shunting-yard, tokens left to right (output | operator stack):
Step 1: `3` → output 3.
Step 2: `+` → stack [+].
Step 3: `4` → output 3 4.
Step 4: `*` binds tighter than + → stack [+ *].
Step 5: `2` → output 3 4 2.
Step 6: `/` has the same precedence as * and is left-associative: pop * to the output (3 4 2 *), push / → stack [+ /].
Step 7: `(` → stack [+ / (].
Step 8: `1` → output 3 4 2 * 1; `-` → stack [+ / ( -]; `5` → output 3 4 2 * 1 5.
Step 9: `)` pops - to the output (3 4 2 * 1 5 -) and discards the parenthesis → stack [+ /].
Step 10: `^` binds tighter than / (and is right-associative) → push: stack [+ / ^]; `2` → output 3 4 2 * 1 5 - 2.
Step 11: end of input: pop ^, /, + → postfix **3 4 2 * 1 5 - 2 ^ / +**.
Evaluate with a value stack: push 3, 4, 2; `*` → 4 × 2 = 8 (stack 3, 8); push 1, 5; `-` → 1 - 5 = -4 (3, 8, -4); push 2; `^` → (-4)^2 = 16 (3, 8, 16); `/` → 8/16 = 0.5 (3, 0.5); `+` → 3 + 0.5 = **3.5**.
(b) Capacity 5, head = 0, size = 0:
Step 1: enqueue 1, 2, 3, 4 write to indices (head + size) mod 5 = 0, 1, 2, 3: all succeed; array [1, 2, 3, 4, _], size 4.
Step 2: dequeue returns **1** (head = 1, size 3); dequeue returns **2** (head = 2, size 2).
Step 3: enqueue 5 goes to index (2 + 2) mod 5 = 4; enqueue 6 to index (2 + 3) mod 5 = 0; enqueue 7 to index (2 + 4) mod 5 = 1: size 5.
Step 4: enqueue 8 fails: **queue full** (size = capacity).
Final array **[6, 7, 3, 4, 5]**, **head = 2, size = 5** (the logical order is 3, 4, 5, 6, 7).

**Q5.**
(a) Array [5, 2, 9, 1, 5, 6].
**Insertion sort** (comparisons / shifts per key): key 2: 1 / 1 → [2, 5, 9, 1, 5, 6]; key 9: 1 / 0; key 1: 3 / 3 → [1, 2, 5, 9, 5, 6]; key 5: 2 / 1 → [1, 2, 5, 5, 9, 6]; key 6: 2 / 1. Total **9 comparisons, 6 shifts** (O(n^2) worst case, adaptive).
**Selection sort**: the passes make 5 + 4 + 3 + 2 + 1 = **15 comparisons** (n(n - 1)/2 always). Swaps: pass 1 swaps 5 and 1; pass 2 none (2 is in place); pass 3 swaps 9 and the first 5; pass 4 swaps 9 and the second 5; pass 5 swaps 9 and 6: **4 swaps**.
**Bubble sort with early exit**: pass 1 (5 comparisons) gives [2, 5, 1, 5, 6, 9] with 4 swaps; pass 2 (4 comparisons) gives [2, 1, 5, 5, 6, 9] with 1 swap; pass 3 (3 comparisons) gives [1, 2, 5, 5, 6, 9] with 1 swap; pass 4 (2 comparisons) makes no swap, so it stops. Total 5 + 4 + 3 + 2 = **14 comparisons and 6 swaps** (the swaps equal the number of inversions, 6). All give [1, 2, 5, 5, 6, 9].
(b) Step 1: the pivot is 6 (last element); i = 0 marks the boundary of the elements ≤ pivot.
Step 2: scan j = 0 to 6: 3 ≤ 6 (swap with itself, i = 1); 8 no; 2 ≤ 6 (swap a[1], a[2]: [3, 2, 8, 5, 1, 4, 7, 6], i = 2); 5 ≤ 6 (swap a[2], a[3]: [3, 2, 5, 8, 1, 4, 7, 6], i = 3); 1 ≤ 6 (swap a[3], a[4]: [3, 2, 5, 1, 8, 4, 7, 6], i = 4); 4 ≤ 6 (swap a[4], a[5]: [3, 2, 5, 1, 4, 8, 7, 6], i = 5); 7 no.
Step 3: put the pivot into place by swapping a[5] and a[7]: **[3, 2, 5, 1, 4, 6, 7, 8]** with the pivot at index 5.
Step 4: the complete sort needs **5 partition calls** on ranges of two or more elements (the whole array, the left part [3, 2, 5, 1, 4], the right part [7, 8] and two more inside the left part).
(c) Build a max-heap from [4, 10, 3, 5, 1] (sift down from index n/2 - 1 = 1 to 0):
Step 1: index 1 (key 10) has children 5 and 1: it stays.
Step 2: index 0 (key 4) has children 10 and 3: swap with 10 → [10, 4, 3, 5, 1].
Step 3: key 4 at index 1 has children 5 and 1: swap with 5 → the max-heap is **[10, 5, 3, 4, 1]**.
(d) Step 1: keys 0..8; counting occurrences in [4, 2, 2, 8, 3, 3, 1] gives **[0, 1, 2, 2, 1, 0, 0, 0, 1]** (one 1, two 2s, two 3s, one 4, one 8).
Step 2: cumulative sums **[0, 1, 3, 5, 6, 6, 6, 6, 7]**: the number of keys ≤ each value.
Step 3: scan the input from the right and place each key at position cumulative[key] - 1, then decrement: 1 goes to 0; the last 3 to 4; the first 3 to 3; 8 to 6; the last 2 to 2; the first 2 to 1; 4 to 5. Output [1, 2, 2, 3, 3, 4, 8]; scanning from the right keeps the sort stable.

**Q6.**
(a) Binary search halves the range each probe: at most ⌊log2 n⌋ + 1 probes.
Step 1: log2 10^6 = 19.93, so ⌊19.93⌋ + 1 = **20 probes** (2^19 = 524,288 ≤ 10^6 < 2^20 = 1,048,576).
(b) Step 1: the decision tree needs at least 8! = 40,320 leaves (one per ordering).
Step 2: height ≥ ⌈log2 40,320⌉ = ⌈15.30⌉ = **16 comparisons**.
(c) A comparison sort's decision tree must distinguish n! orderings, hence height Ω(log n!) = Ω(n log n). Counting sort does not compare keys: it uses the key as an array index (it assumes small integer keys in 0..k), so the lower bound does not apply, giving Θ(n + k).

**Q7.**
```cpp
#include <vector>
long long comparisons = 0;
void mergeSort(std::vector<int>& a, std::vector<int>& tmp, int lo, int hi) {   // sorts a[lo, hi)
    if (hi - lo <= 1) return;
    int mid = lo + (hi - lo) / 2;
    mergeSort(a, tmp, lo, mid);
    mergeSort(a, tmp, mid, hi);
    int i = lo, j = mid, k = lo;
    while (i < mid && j < hi) {
        ++comparisons;
        if (a[i] <= a[j]) tmp[k++] = a[i++];    // <= keeps the sort stable
        else              tmp[k++] = a[j++];
    }
    while (i < mid) tmp[k++] = a[i++];
    while (j < hi)  tmp[k++] = a[j++];
    for (k = lo; k < hi; ++k) a[k] = tmp[k];
}
```
Recurrence: T(n) = 2T(n/2) + Θ(n), so **Θ(n log n)** time and Θ(n) extra space.
Count for [5, 2, 9, 1, 5, 6]:
Step 1: split into [5, 2, 9] and [1, 5, 6].
Step 2: sort [5, 2, 9]: merge [2] and [9] needs 1 comparison; merge [5] with [2, 9]: 5 vs 2 (take 2), 5 vs 9 (take 5), left exhausted: 2 comparisons. Subtotal 3.
Step 3: sort [1, 5, 6]: merge [5] and [6]: 1 comparison; merge [1] with [5, 6]: 1 vs 5 (take 1), left exhausted: 1 comparison. Subtotal 2.
Step 4: final merge of [2, 5, 9] and [1, 5, 6]: 2 vs 1 (take 1), 2 vs 5 (take 2), 5 vs 5 (take the left 5, which keeps the sort stable), 9 vs 5 (take 5), 9 vs 6 (take 6), right exhausted: 5 comparisons.
Step 5: total 3 + 2 + 5 = **10 comparisons**.
For the sorted array 1..8: merges of single elements (4 merges × 1 comparison) + merges of 2 and 2 (2 × 2) + the merge of 4 and 4 (4 comparisons: every left element is smaller, so only the left elements are compared) = 4 + 4 + 4 = **12 comparisons** (each merge of already ordered halves needs only min(|left|, |right|)); the reverse-sorted array 8..1 also gives 12 in this implementation.

---

# Assignment 2: Hashing, Trees and Heaps (70 marks)

## Questions

**Q1. Hash tables (12 marks)** Insert the keys 50, 700, 76, 85, 92, 73, 101 in this order into a table of size m = 7 with h(k) = k mod 7. Show the final table and the number of probes for each insertion using (a) separate chaining (give the chains) [3], (b) linear probing [4], (c) double hashing with h2(k) = 5 - (k mod 5) [4]. (d) Give the load factor [1].

**Q2. Binary search trees (14 marks)** Insert 50, 30, 70, 20, 40, 60, 80, 35, 45 into an empty BST. (a) Give the inorder, preorder, postorder and level-order traversals and the height [5]. (b) How many key comparisons does searching for 45 need? [2] (c) Delete 30 (two children) and give the new preorder traversal [3]. (d) What is the worst-case height of a BST with 9 keys and what input order causes it? [2] (e) How many different BST shapes exist for n = 3 and n = 4? [2]

**Q3. AVL trees (10 marks)** Insert 10, 20, 30, 40, 50, 25 into an empty AVL tree. Show the tree (preorder) after each insertion and name each rotation.

**Q4. Heaps (10 marks)** (a) Insert 9, 4, 7, 1, 6, 2 one at a time into a min-heap; give the array after each insertion [3]. (b) Perform one extract-min and show the array [2]. (c) Give the array produced by build-heap (Floyd) on [9, 4, 7, 1, 6, 2] [2]. (d) State the complexities of insert, extract-min, peek and build-heap [1]. (e) How would you find the 3 largest of a million numbers in one pass? [2]

**Q5. Huffman coding (8 marks)** For frequencies a 45, b 13, c 12, d 16, e 9, f 5 build the Huffman tree, give the code lengths and the total encoded size for 100 symbols; compare with a fixed-length code.

**Q6. Union-find (6 marks)** Elements 0 to 7 start in separate sets. Perform union(0,1), union(2,3), union(1,3), union(4,5), union(6,7), union(5,7), union(3,7). Show the number of sets after each operation and explain path compression and union by rank.

**Q7. Trees and code (10 marks)** (a) Reconstruct the binary tree with preorder [3, 9, 20, 15, 7] and inorder [9, 3, 15, 20, 7] and give its postorder [4]. (b) Write BST insert, contains and inorder functions in C++ and show the output of inserting 5, 3, 8, 1, 4 [4]. (c) Why does inserting 1, 2, 3, ..., n in order produce a poor BST, and how do AVL trees fix it? [2]

## Solutions and Marking Guide

**Q1.**
Step 0: h(k) = k mod 7: 50 → 1, 700 → 0 (7 × 100), 76 → 6, 85 → 1, 92 → 1, 73 → 3, 101 → 3.
(a) **Chaining:** slot 0: [700]; slot 1: [50, 85, 92]; slot 2: []; slot 3: [73, 101]; slot 4: []; slot 5: []; slot 6: [76]. Inserting at the end of a chain (kept in insertion order) costs 1 probe for the first key in a slot, 2 for the second and 3 for the third: probes 1, 1, 1, 2, 3, 1, 2 (total 11).
(b) **Linear probing** (try h, h + 1, h + 2, ... mod 7):
50 → slot 1 (1 probe); 700 → slot 0 (1); 76 → slot 6 (1);
85: slot 1 is full, slot 2 is free (2 probes);
92: slots 1 and 2 are full, slot 3 is free (3 probes);
73: slot 3 is full, slot 4 is free (2 probes);
101: slots 3 and 4 are full, slot 5 is free (3 probes).
**Table [700, 50, 85, 92, 73, 101, 76]**; probes 1, 1, 1, 2, 3, 2, 3 (total 13). Note the clustering in slots 1 to 5.
(c) **Double hashing**, h2(k) = 5 - (k mod 5), probe sequence (h1 + j·h2) mod 7:
50 → slot 1; 700 → slot 0; 76 → slot 6 (1 probe each).
85: h1 = 1, h2 = 5 - 0 = 5: slots 1 (full), 6 (full), 4 (free): 3 probes.
92: h1 = 1, h2 = 5 - 2 = 3: slots 1 (full), 4 (full), 0 (full), 3 (free): 4 probes.
73: h1 = 3 (full), h2 = 5 - 3 = 2: slots 3, 5 (free): 2 probes.
101: h1 = 3, h2 = 5 - 1 = 4: slots 3, 0, 4, 1, 5 (all full), 2 (free): 6 probes.
**Table [700, 50, 101, 92, 85, 73, 76]**; probes 1, 1, 1, 3, 4, 2, 6 (total 18). The long probe sequence for 101 shows that a table this full (α = 1) is a poor choice for open addressing; because 7 is prime every step size is coprime with it, so every slot is eventually visited.
(d) α = n/m = 7/7 = **1.0**. For open addressing the table is full; practical tables keep α ≤ 0.5 to 0.7 and resize.

**Q2.**
(a) The tree: 50 has children 30 and 70; 30 has children 20 and 40; 40 has children 35 and 45; 70 has children 60 and 80.
Inorder (left, node, right): **20 30 35 40 45 50 60 70 80** (sorted). Preorder (node, left, right): **50 30 20 40 35 45 70 60 80**. Postorder (left, right, node): **20 35 45 40 30 60 80 70 50**. Level order: **50 30 70 20 40 60 80 35 45**. Height (edges on the longest path 50-30-40-35): **3**.
(b) 45 is found after comparing with 50, 30, 40 and 45: **4 comparisons**.
(c) Step 1: 30 has two children; its inorder successor is the minimum of the right subtree: 35 (the left-most node under 40).
Step 2: replace the key 30 by 35 and delete the leaf 35 from the right subtree (40 keeps only its right child 45).
Step 3: the tree is now 50 (35 (20, 40 (-, 45)), 70 (60, 80)), with preorder **50 35 20 40 45 70 60 80**.
(d) The worst-case height is **8** (a chain), caused by inserting the keys in sorted (or reverse-sorted) order; every operation is then Θ(n).
(e) Step 1: the number of BST shapes with n nodes is the Catalan number C_n = (1/(n + 1)) C(2n, n).
Step 2: n = 3: (1/4) × C(6, 3) = 20/4 = **5**. n = 4: (1/5) × C(8, 4) = 70/5 = **14**.

**Q3.** Preorder after each insertion:
- Insert 10: **[10]**.
- Insert 20: **[10, 20]**.
- Insert 30: the node 10 is right-heavy (an RR case): **left rotation at 10** gives **[20, 10, 30]**.
- Insert 40: **[20, 10, 30, 40]** (no imbalance).
- Insert 50: node 30 becomes right-heavy (RR): **left rotation at 30** gives **[20, 10, 40, 30, 50]**.
- Insert 25: it goes to the left of 30; node 20 is now unbalanced (its right subtree has height 3, the left 1) in the right-left (RL) case: **right rotation at 40's subtree, then left rotation at 20** (a double rotation) gives **[30, 20, 10, 25, 40, 50]** with root 30.
The final tree has height 2 for 6 keys (balanced).

**Q4.**
(a) Min-heap insertion (append, then sift up while smaller than the parent):
Insert 9: [9].
Insert 4: appended after 9, smaller than its parent, swap: [4, 9].
Insert 7: parent 4 is smaller, no swap: [4, 9, 7].
Insert 1: appended at index 3, parent 9: swap; then parent 4: swap: [1, 4, 7, 9].
Insert 6: index 4, parent 4 is smaller: [1, 4, 7, 9, 6].
Insert 2: index 5, parent 7: swap; then parent 1 is smaller: **[1, 4, 2, 9, 6, 7]**.
(b) Extract-min returns 1; move the last element 7 to the root: [7, 4, 2, 9, 6]; sift down: the smaller child is 2, swap: **[2, 4, 7, 9, 6]**.
(c) Floyd's build-heap on [9, 4, 7, 1, 6, 2] (sift down for i = 2, 1, 0):
Step 1: i = 2 (key 7) has the child 2 at index 5: swap → [9, 4, 2, 1, 6, 7].
Step 2: i = 1 (key 4) has children 1 and 6: swap with 1 → [9, 1, 2, 4, 6, 7].
Step 3: i = 0 (key 9) has children 1 and 2: swap with 1 → [1, 9, 2, 4, 6, 7]; then 9 at index 1 has children 4 and 6: swap with 4.
Result **[1, 4, 2, 9, 6, 7]**.
(d) insert **O(log n)**; extract-min **O(log n)**; peek **O(1)**; build-heap **O(n)**.
(e) Keep a **min-heap of size 3**: for each new number, if it is larger than the heap's minimum, replace the minimum and sift down. Time O(n log 3) = O(n), memory O(3).

Step 1: merge the two smallest weights f(5) + e(9) = 14.
Step 2: the smallest now are c(12) and b(13): c + b = 25.
Step 3: the smallest are 14 and d(16): 14 + 16 = 30.
Step 4: the smallest are 25 and 30: 25 + 30 = 55.
Step 5: a(45) + 55 = 100 (the root).
Code lengths (depth in the tree): **a = 1, b = 3, c = 3, d = 3, e = 4, f = 4** (for example a = 0, c = 100, b = 101, f = 1100, e = 1101, d = 111).
Total bits for 100 symbols: 45(1) + 13(3) + 12(3) + 16(3) + 9(4) + 5(4) = 45 + 39 + 36 + 48 + 36 + 20 = **224 bits**, versus 100 × 3 = **300 bits** for a fixed 3-bit code (6 symbols need ⌈log2 6⌉ = 3 bits): a saving of 76/300 = **25 percent**. The code is prefix-free and optimal.

**Q6.** After each union the number of sets is: 7, 6, 5, 4, 3, 2, **1**: after union(0,1): {0,1}; union(2,3): {2,3}; union(1,3): {0,1,2,3}; union(4,5): {4,5}; union(6,7): {6,7}; union(5,7): {4,5,6,7}; union(3,7): all eight. **Path compression**: during find, every node on the path is made to point directly to the root, flattening the tree. **Union by rank (or size)**: attach the shorter tree under the taller one so the tree height stays O(log n). Together they give an amortised cost of O(α(n)) per operation (inverse Ackermann, ≤ 5 for any practical n).

**Q7.**
(a) The first preorder element 3 is the root. In the inorder sequence, 9 is to the left of 3 and 15, 20, 7 are to the right. Left subtree: preorder [9], inorder [9]. Right subtree: preorder [20, 15, 7], inorder [15, 20, 7]: root 20 with left 15 and right 7. The tree: 3 (left 9, right 20 (left 15, right 7)). **Postorder: 9 15 7 20 3.**
(b)
```cpp
#include <iostream>
#include <vector>
struct TNode { int key; TNode *l = nullptr, *r = nullptr; explicit TNode(int k) : key(k) {} };
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
    if (!t) return;
    inorder(t->l, out); out.push_back(t->key); inorder(t->r, out);
}
```
Inserting 5, 3, 8, 1, 4: inorder gives **1 3 4 5 8**; contains(4) is true and contains(7) is false.
(c) Sorted insertion makes each new key the right child of the previous one: the tree is a linked list of height n - 1, so search, insert and delete cost Θ(n). An AVL tree restores balance with rotations after each insertion (height ≤ 1.44 log n), keeping all operations Θ(log n).

---

# Assignment 3: Graphs, Dynamic Programming, Greedy and Backtracking (80 marks)

## Questions

**Q1. Graph traversal (12 marks)** A directed graph has edges 0→1, 0→2, 1→3, 2→3, 2→4, 3→5, 4→5. (a) Give the BFS visiting order from 0 and the distance of each vertex (visit neighbours in increasing order) [4]. (b) Give the DFS preorder [3]. (c) Give a topological order using Kahn's algorithm [3]. (d) Explain how to detect a cycle [2].

**Q2. Shortest paths (16 marks)** (a) Run Dijkstra from S on edges S→A 4, S→B 1, B→A 2, A→C 1, B→C 5, B→D 8, C→D 3; give the distances and the shortest path to D [6]. (b) Bellman-Ford on s→a 4, s→b 5, a→b -3, b→c 4, a→c 6: give the distances from s [4]. (c) Explain why Dijkstra can fail with negative edges [2]. (d) Floyd-Warshall on the 4-vertex matrix with rows (0, 3, ∞, 7), (8, 0, 2, ∞), (5, ∞, 0, 1), (2, ∞, ∞, 0): give the final matrix [4].

**Q3. Minimum spanning tree (10 marks)** Edges: AB 7, AD 5, BC 8, BD 9, BE 7, CE 5, DE 15, DF 6, EF 8, EG 9, FG 11. Find the MST with Kruskal's algorithm (list the edges in the order they are accepted) and with Prim's algorithm from A; give the total weight and the number of edges.

**Q4. Dynamic programming (20 marks)** (a) 0/1 knapsack with weights {1, 3, 4, 5}, values {1, 4, 5, 7}, capacity 7: build the table and give the best value and the chosen items [6]. (b) LCS of "ABCBDAB" and "BDCABA": length and one subsequence [4]. (c) Edit distance between "kitten" and "sitting" with the operations [4]. (d) Minimum coins for 11 with coins {1, 5, 6, 9} [3]. (e) Longest increasing subsequence of [10, 9, 2, 5, 3, 7, 101, 18] [3].

**Q5. Greedy algorithms (8 marks)** (a) Activity selection on (1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11), (8,12), (2,14), (12,16): which activities does the greedy rule select and why is it optimal? [4] (b) Show that the greedy coin strategy fails for {1, 5, 6, 9} and amount 11 [2]. (c) Fractional knapsack: items (weight, value) (10, 60), (20, 100), (30, 120), capacity 50: greedy value? [2]

**Q6. Backtracking and strings (8 marks)** (a) Give the number of solutions of the N-Queens problem for n = 4, 6, 8 and explain pruning [4]. (b) Compute the KMP failure array of "ABABCABAB" and use it to explain how matching avoids re-scanning [4].

**Q7. Intractability (6 marks)** (a) Define P, NP and NP-complete [3]. (b) How many tours does brute-force TSP examine for 10 cities, and what does dynamic programming achieve? [3]

## Solutions and Marking Guide

**Q1.**
(a) BFS from 0 (queue; neighbours in increasing order):
Step 1: queue [0]; visit 0 (distance 0), enqueue 1 and 2 (distance 1).
Step 2: visit 1: enqueue 3 (distance 2). Visit 2: 3 already seen; enqueue 4 (distance 2).
Step 3: visit 3: enqueue 5 (distance 3). Visit 4: 5 already seen. Visit 5.
Order **0, 1, 2, 3, 4, 5**. Distances: 0: 0; 1: 1; 2: 1; 3: 2; 4: 2; 5: 3.
(b) DFS preorder (neighbours in increasing order): 0 → 1 → 3 → 5 (dead end, backtrack to 0) → 2 → 4 (3 and 5 already visited): **0, 1, 3, 5, 2, 4**.
(c) Step 1: in-degrees: 0:0, 1:1, 2:1, 3:2, 4:1, 5:2.
Step 2: queue [0]. Remove 0: in-degrees of 1 and 2 become 0 → queue [1, 2].
Step 3: remove 1: 3 drops to 1. Remove 2: 3 drops to 0 and 4 to 0 → queue [3, 4].
Step 4: remove 3: 5 drops to 1. Remove 4: 5 drops to 0. Remove 5.
Order **0, 1, 2, 3, 4, 5** (a valid topological order; others exist, such as 0, 2, 1, 4, 3, 5).
(d) In a directed graph, a **cycle exists iff DFS finds a back edge** (an edge to a vertex that is on the current recursion stack, coloured "grey"), or iff Kahn's algorithm cannot output all vertices. In an undirected graph, an edge to a visited vertex that is not the parent signals a cycle.

**Q2.**
(a) Dijkstra from S (settle the unsettled vertex with the smallest distance, relax its edges):
Step 1: S = 0; relax S→A: A = 4, S→B: B = 1.
Step 2: settle B (1): A = min(4, 1 + 2) = 3, C = 1 + 5 = 6, D = 1 + 8 = 9.
Step 3: settle A (3): C = min(6, 3 + 1) = 4.
Step 4: settle C (4): D = min(9, 4 + 3) = 7.
Step 5: settle D (7).
Final distances **S 0, B 1, A 3, C 4, D 7**. The shortest path to D is **S → B → A → C → D** (length 1 + 2 + 1 + 3 = 7).
(b) Bellman-Ford: relax all edges (s→a 4, s→b 5, a→b -3, b→c 4, a→c 6) up to V - 1 = 3 times.
Pass 1: a = 4; b = min(5, 4 - 3) = 1; c = min(1 + 4, 4 + 6) = 5. Pass 2: no change, so the algorithm can stop. **Distances: a 4, b 1, c 5.** A further pass changes nothing, so there is no negative cycle.
(c) Dijkstra assumes that once a vertex is removed from the priority queue its distance is final, which requires that extending a path can never make it shorter; with a negative edge a later path through a finalised vertex could be shorter, so the result can be wrong. Use Bellman-Ford instead.
(d) Floyd-Warshall: D[i][j] = min(D[i][j], D[i][k] + D[k][j]) for k = 0, 1, 2, 3.
After k = 0: row 1 improves 1→3 to 8 + 7 = 15; row 3 improves 3→1 to 2 + 3 = 5; row 2 improves 2→1 to 5 + 3 = 8: rows (0, 3, ∞, 7), (8, 0, 2, 15), (5, 8, 0, 1), (2, 5, ∞, 0).
After k = 1: 0→2 becomes 3 + 2 = 5; 3→2 becomes 5 + 2 = 7: rows (0, 3, 5, 7), (8, 0, 2, 15), (5, 8, 0, 1), (2, 5, 7, 0).
After k = 2: 0→3 becomes 5 + 1 = 6; 1→0 becomes 2 + 5 = 7; 1→3 becomes 2 + 1 = 3: rows (0, 3, 5, 6), (7, 0, 2, 3), (5, 8, 0, 1), (2, 5, 7, 0).
After k = 3: 1→0 becomes 3 + 2 = 5; 2→0 becomes 1 + 2 = 3; 2→1 becomes 1 + 5 = 6.
Final matrix **(0, 3, 5, 6), (5, 0, 2, 3), (3, 6, 0, 1), (2, 5, 7, 0)**. For example, the distance from vertex 1 to vertex 0 improves from the direct edge 8 to 5 along 1→2→3→0 (2 + 1 + 2).

**Kruskal:** Step 1: sort the edges: AD 5, CE 5, DF 6, AB 7, BE 7, BC 8, EF 8, BD 9, EG 9, FG 11, DE 15.
Step 2: accept AD (5), CE (5), DF (6), AB (7), BE (7) (each joins two different components).
Step 3: reject BC (it would close the cycle B-C-E), EF (cycle E-B-A-D-F) and BD (cycle).
Step 4: accept EG (9), which connects G. That is 6 edges for 7 vertices, **total weight 5 + 5 + 6 + 7 + 7 + 9 = 39**.
**Prim from A:** grow the tree by the cheapest edge leaving it: AD (5); then DF (6); then AB (7); then BE (7); then CE (5); then EG (9): the same tree with **weight 39** (order of vertices added: A, D, F, B, E, C, G). (4 marks for each algorithm, 2 for weight and edge count.)

**Q4.**
(a) dp[i][c] = max(dp[i-1][c], v_i + dp[i-1][c - w_i]) for items in order (w, v) = (1, 1), (3, 4), (4, 5), (5, 7).
Example cells: dp[2][3] = max(dp[1][3] = 1, 4 + dp[1][0] = 4) = 4; dp[3][7] = max(dp[2][7] = 5, 5 + dp[2][3] = 9) = 9; dp[4][7] = max(dp[3][7] = 9, 7 + dp[3][2] = 8) = 9.
c: 0 1 2 3 4 5 6 7
i = 0: 0 0 0 0 0 0 0 0
i = 1: 0 1 1 1 1 1 1 1
i = 2: 0 1 1 4 5 5 5 5
i = 3: 0 1 1 4 5 6 6 9
i = 4: 0 1 1 4 5 7 8 9
The best value is **dp[4][7] = 9**. Backtrack: dp[4][7] = dp[3][7], so item 4 is not taken; dp[3][7] ≠ dp[2][7], so item 3 (weight 4) is taken, leaving capacity 3; dp[2][3] ≠ dp[1][3], so item 2 (weight 3) is taken, leaving capacity 0. **Items: weights 3 and 4, values 4 + 5 = 9.** Time Θ(nW).
(b) Recurrence: if the characters match, L[i][j] = L[i-1][j-1] + 1, else max(L[i-1][j], L[i][j-1]). Table for X = ABCBDAB (rows) and Y = BDCABA (columns B, D, C, A, B, A):
row A: 0 0 0 1 1 1
row B: 1 1 1 1 2 2
row C: 1 1 2 2 2 2
row B: 1 1 2 2 3 3
row D: 1 2 2 2 3 3
row A: 1 2 2 3 3 4
row B: 1 2 2 3 4 4
**LCS length 4** (the bottom-right cell). Backtracking from it gives for example **BCBA** (also BDAB).
(c) D[i][j] = min(D[i-1][j] + 1, D[i][j-1] + 1, D[i-1][j-1] + [a_i ≠ b_j]), with D[i][0] = i and D[0][j] = j. The last row of the table for "kitten" against "sitting" is 6, 6, 5, 4, 3, 3, 2, 3, so the **edit distance is 3**: kitten → sitten (substitute k→s) → sittin (substitute e→i) → sitting (insert g).
(d) dp[x] = 1 + min over coins c ≤ x of dp[x - c]. Values for x = 0..11: 0, 1, 2, 3, 4, 1, 1, 2, 3, 1, 2, 2 (for example dp[11] = 1 + min(dp[10], dp[6], dp[5], dp[2]) = 1 + min(2, 1, 1, 2) = 2). **dp[11] = 2** (5 + 6). The greedy answer is 3.
(e) L[i] = 1 + max L[j] over j < i with a[j] < a[i]. For [10, 9, 2, 5, 3, 7, 101, 18] the lengths of the longest increasing subsequence ending at each element are [1, 1, 1, 2, 2, 3, 4, 4]. **LIS length 4** (for example 2, 3, 7, 18 or 2, 5, 7, 101).

**Q5.**
(a) Step 1: sort by finish time: (1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11), (8,12), (2,14), (12,16).
Step 2: take (1,4); skip (3,5) and (0,6) (they start before 4); take (5,7); skip (3,9), (5,9), (6,10); take (8,11); skip (8,12), (2,14); take (12,16).
Selected: **(1,4), (5,7), (8,11), (12,16)**: 4 activities. **Why optimal (exchange argument):** any optimal solution can be changed to start with the earliest-finishing activity without reducing its size, because that activity leaves the most room for the rest; apply the argument repeatedly.
(b) For 11 with coins {1, 5, 6, 9}: greedy takes 9 (remaining 2), then 1, then 1: **3 coins**; the optimum is 5 + 6 = **2 coins**. The greedy choice property fails for this coin system (it holds for canonical systems such as {1, 5, 10, 25}).
(c) Step 1: value/weight ratios: 60/10 = 6, 100/20 = 5, 120/30 = 4.
Step 2: take all of items 1 and 2 (weight 30, value 160); the remaining capacity is 20, so take 20/30 of item 3 (value 120 × 2/3 = 80).
Step 3: **total value 160 + 80 = 240**. (The 0/1 version would give 220.)

**Q6.**
(a) The numbers of solutions are **n = 4: 2, n = 6: 4, n = 8: 92**. Backtracking places queens row by row and **prunes** a branch as soon as a queen attacks an earlier one (same column or diagonal), so it never explores the full n^n placements; for n = 8 it examines only a few thousand partial boards instead of 8^8 = 16.7 million.
(b) Step 1: failure[i] = the length of the longest proper prefix of the pattern that is also a suffix of the pattern prefix ending at position i. For "ABABCABAB": A: 0; AB: 0; ABA: 1 (A); ABAB: 2 (AB); ABABC: 0; ABABCA: 1 (A); ABABCAB: 2 (AB); ABABCABA: 3 (ABA); ABABCABAB: 4 (ABAB).
Step 2: the failure array is **[0, 0, 1, 2, 0, 1, 2, 3, 4]**.
Step 3: on a mismatch after matching k characters, the pattern is shifted so that the next comparison resumes at position failure[k - 1] of the pattern instead of restarting: the text pointer never moves backwards, giving Θ(n + m) time.

**Q7.**
(a) **P:** decision problems solvable in polynomial time. **NP:** problems for which a proposed solution can be **verified** in polynomial time. **NP-complete:** problems in NP to which every problem in NP can be reduced in polynomial time (SAT, subset sum, Hamiltonian cycle, graph colouring, TSP decision version). Whether P = NP is open.
(b) Step 1: brute force fixes the start city and tries all orderings of the other 9 cities: 9! = **362,880 tours** (10! = 3,628,800 if the start is not fixed; halve the count if direction is ignored).
Step 2: the **Held-Karp dynamic programme** computes the optimal tour in **O(n^2 2^n)** time by storing the best path over each subset of cities: for n = 10 that is about 10^2 × 2^10 ≈ 10^5 operations, still exponential but far better than n!.
