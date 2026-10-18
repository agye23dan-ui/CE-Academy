# Database Systems: Class Test

Duration: 60 minutes. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Section B uses the shop database below.

**Shop database**
- customer(cid, name, city): (1, Adwoa, Accra), (2, Bekoe, Kumasi), (3, Cobbina, Accra), (4, Dede, Tamale), (5, Efua, Kumasi).
- product(pid, pname, price, category): (10, Keyboard, 25.0, Accessory), (11, Mouse, 12.5, Accessory), (12, Monitor, 140.0, Display), (13, Laptop, 620.0, Computer), (14, Cable, 4.0, Accessory).
- orders(oid, cid, odate): (100, 1, 2025-01-05), (101, 1, 2025-02-10), (102, 2, 2025-02-11), (103, 3, 2025-03-01), (104, 2, 2025-03-15), (105, 5, 2025-03-20).
- item(oid, pid, qty), primary key (oid, pid): (100, 10, 2), (100, 11, 1), (101, 13, 1), (102, 12, 2), (102, 14, 5), (103, 10, 1), (103, 12, 1), (104, 11, 4), (105, 13, 1), (105, 14, 3).

## Section A: Multiple choice (20 marks)

**1.** Which of the following is NOT an ACID property?
A) Atomicity  B) Consistency  C) Isolation  D) Scalability

**2.** A foreign key
A) must be unique  B) refers to a key of the same or another relation  C) may never be NULL  D) is always the primary key

**3.** Which clause filters groups after aggregation?
A) WHERE  B) HAVING  C) GROUP BY  D) ORDER BY

**4.** For a column with values 4, NULL, 6, the value of COUNT(col) is
A) 3  B) 0  C) 2  D) 1

**5.** A LEFT OUTER JOIN of A and B returns
A) all rows of A, with NULLs where B has no match  B) only matching rows  C) all rows of B  D) the Cartesian product

**6.** In SQL, the expression NULL = NULL evaluates to
A) TRUE  B) FALSE  C) UNKNOWN  D) 0

**7.** A primary key
A) may contain NULLs  B) uniquely identifies a row and cannot be NULL  C) must be a single column  D) must be a number

**8.** A relation in which every non-trivial determinant is a superkey is in
A) 1NF  B) 2NF  C) 3NF  D) BCNF

**9.** From A → B and B → C we can derive A → C by
A) transitivity  B) augmentation  C) reflexivity  D) decomposition

**10.** If the closure X+ contains every attribute of R, then X is
A) a foreign key  B) a minimal key necessarily  C) a superkey  D) a trivial dependency

**11.** A 2NF violation arises from
A) a transitive dependency  B) a partial dependency on part of a key  C) a multivalued column  D) a missing index

**12.** A decomposition of R into R1 and R2 is lossless if R1 ∩ R2 is
A) empty  B) a foreign key  C) a candidate key of R  D) a key of R1 or of R2

**13.** A schedule is conflict-serializable if and only if its precedence graph is
A) acyclic  B) a tree  C) complete  D) empty

**14.** Strict two-phase locking holds exclusive locks
A) only while writing  B) until the first read  C) until the transaction commits or aborts  D) never

**15.** A deadlock is detected by finding
A) a long wait  B) a cycle in the wait-for graph  C) an exclusive lock  D) an aborted transaction

**16.** Which standard isolation level prevents phantoms?
A) READ UNCOMMITTED  B) READ COMMITTED  C) REPEATABLE READ  D) SERIALIZABLE

**17.** The write-ahead logging rule requires that
A) the log record reaches disk before the changed data page  B) data pages are written before the log  C) the log is never written  D) all pages are written at commit

**18.** The leaves of a B+ tree are
A) not connected  B) linked in key order for range scans  C) always hashed  D) stored in memory only

**19.** A hash index efficiently supports
A) range queries  B) ordering  C) equality lookups  D) prefix matching

**20.** In a block nested-loop join the outer relation should be
A) the larger one  B) chosen at random  C) the one with an index  D) the smaller one

## Section B: Problems (40 marks)

**B1. SQL (10 marks)** Write SQL queries (and give their results on the shop data) for: (a) each customer's number of orders, including customers with none, sorted by count descending and then name [3]; (b) the total value of each order (quantity × price) [3]; (c) the names of customers who have never placed an order, using NOT EXISTS [2]; (d) the revenue per city [2].

**B2. Design theory (10 marks)** R(A, B, C, D, E) with F = {AB → C, C → D, D → E}. (a) Compute C+ and AB+ [2]. (b) Find all candidate keys [2]. (c) State the highest normal form of R and name the violating dependency [3]. (d) Give a lossless, dependency-preserving 3NF decomposition [3].

**B3. Transactions (10 marks)** (a) For the schedule r1(X) r2(X) w2(X) r3(Y) w1(Y) w3(Y), list the conflicts, draw the precedence graph and decide whether it is conflict-serializable [4]. (b) Define the lost update anomaly using two transactions that both add 10 to a balance of 100 and show how the schedule produces 110 instead of 120 [3]. (c) A log has <T1 start>, <T1, A, 5, 9>, <T2 start>, <T2, B, 3, 7>, <T1 commit>, then a crash. State the redo and undo actions [3].

**B4. Storage and query cost (10 marks)** (a) Block 4096 bytes, key 8 bytes, pointer 8 bytes: find the B+ tree order n and the minimum and maximum height of an index on 1,000,000 keys [4]. (b) The table has 100-byte records: how many blocks does a full scan read? [2] (c) R has 200 blocks, S has 40 blocks and M = 12 buffer blocks: the cost of a block nested-loop join with each as the outer [4].

---

## Answer Key and Solutions

### Section A
1 **D** · 2 **B** · 3 **B** · 4 **C** · 5 **A** · 6 **C** · 7 **B** · 8 **D** · 9 **A** · 10 **C** · 11 **B** · 12 **D** · 13 **A** · 14 **C** · 15 **B** · 16 **D** · 17 **A** · 18 **B** · 19 **C** · 20 **D**

Brief reasons: 4. COUNT(col) ignores the NULL. 6. Any comparison with NULL is UNKNOWN. 12. The lossless-join condition: (R1 ∩ R2) → R1 or (R1 ∩ R2) → R2. 16. The standard allows phantoms at REPEATABLE READ. 20. The cost is b_outer + ceil(b_outer/(M - 2)) × b_inner, minimised with the smaller outer.

### Section B

**B1.**
(a)
```sql
SELECT c.name, COUNT(o.oid) AS n
FROM customer c LEFT JOIN orders o ON o.cid = c.cid
GROUP BY c.cid ORDER BY n DESC, c.name;
```
Step 1: orders per customer (the left join keeps Dede with none): Adwoa 2 (orders 100, 101), Bekoe 2 (102, 104), Cobbina 1 (103), Efua 1 (105), Dede 0.
Step 2: ORDER BY n DESC, name.
Result: Adwoa 2, Bekoe 2, Cobbina 1, Efua 1, Dede 0.
(b)
```sql
SELECT o.oid, SUM(i.qty * p.price) AS total
FROM orders o JOIN item i ON i.oid = o.oid JOIN product p ON p.pid = i.pid
GROUP BY o.oid ORDER BY o.oid;
```
Step 1: multiply qty by price on every item row and sum per order.
Result: 100 → 62.5 (2 × 25 + 12.5); 101 → 620; 102 → 300 (280 + 20); 103 → 165 (25 + 140); 104 → 50; 105 → 632 (620 + 12).
(c)
```sql
SELECT name FROM customer c
WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.cid = c.cid);
```
Result: Dede.
(d)
```sql
SELECT c.city, SUM(i.qty * p.price) AS rev
FROM customer c JOIN orders o ON o.cid = c.cid
     JOIN item i ON i.oid = o.oid JOIN product p ON p.pid = i.pid
GROUP BY c.city ORDER BY rev DESC;
```
Step 1: assign each order total to its customer's city; Accra customers have orders 100 (62.5), 101 (620) and 103 (165); Kumasi customers have orders 102 (300), 104 (50) and 105 (632).
Step 2: Accra = 62.5 + 620 + 165 = 847.5; Kumasi = 300 + 50 + 632 = 982.0.
Result: Kumasi 982.0 (300 + 50 + 632), Accra 847.5 (62.5 + 620 + 165).

**B2.**
(a) Step 1: C+: start {C}; C → D adds D; D → E adds E: **{C, D, E}**.
Step 2: AB+: start {A, B}; AB → C adds C; C → D adds D; D → E adds E: **{A, B, C, D, E}**.
(b) A and B never occur on a right-hand side, so both are in every key; AB+ = R, so **AB is the only candidate key**.
(c) C → D has C as a non-superkey (C+ = CDE) and D is not prime, so 3NF is violated (this is a transitive dependency of D on the key through C). There are no partial dependencies because no non-prime attribute depends on A alone or on B alone (A+ = A, B+ = B), so R is in **2NF**.
(d) Synthesis: the minimal cover is F. Relations (A, B, C), (C, D), (D, E). (A, B, C) contains the key AB, so nothing more is needed. This decomposition is **lossless** and **dependency-preserving**, and each relation is in BCNF.

**B3.**
(a) T1: r1(X) w1(Y); T2: r2(X) w2(X); T3: r3(Y) w3(Y). Conflicts: r1(X) before w2(X): T1 → T2. r3(Y) before w1(Y): T3 → T1. w1(Y) before w3(Y): T1 → T3. r2(X) and r1(X) are both reads (no conflict). The edges T3 → T1 and T1 → T3 form a cycle, so the schedule is **not conflict-serializable**.
(b) Balance = 100. T1 reads 100; T2 reads 100; T1 writes 110; T2 writes 110 (it computed from its stale read). The final balance is **110**; the serial result would be 120. The update of T1 was lost.
(c) T1 is committed: **redo A = 9**. T2 is not committed: **undo B back to 3**.

**B4.**
(a) Step 1: a node has n pointers and n - 1 keys: 8n + 8 (n - 1) ≤ 4096, so 16n ≤ 4104 and n ≤ 256.5: **n = 256** (up to 255 keys per node; the minimum is 128 children for internal nodes and 128 keys per leaf).
Step 2 (best case, nodes full): leaves = ⌈10^6/255⌉ = 3922; above them ⌈3922/256⌉ = 16; then the root: **height 3**.
Step 3 (worst case, nodes half full): leaves = ⌈10^6/128⌉ = 7813; above them ⌈7813/128⌉ = 62; then the root: **height 3** (the same).
A lookup reads 3 index blocks plus 1 data block.
(b) Step 1: records per block = ⌊4096/100⌋ = 40.
Step 2: blocks = 1,000,000/40 = **25,000 blocks**.
(c) Cost = b_outer + ⌈b_outer/(M - 2)⌉ × b_inner with M - 2 = 10 blocks per chunk.
Step 1: S as the outer: 40 + ⌈40/10⌉ × 200 = 40 + 4 × 200 = **840**.
Step 2: R as the outer: 200 + ⌈200/10⌉ × 40 = 200 + 20 × 40 = **1000**. The smaller outer relation is cheaper.
