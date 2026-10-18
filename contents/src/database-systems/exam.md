# Database Systems: Final Examination

Duration: 3 hours. Total: 100 marks. A one-page formula sheet is allowed. SQL questions use standard SQL (SQLite or PostgreSQL syntax is accepted).
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

**Shop database** (used in B1, B2 and C1)
- customer(cid, name, city): (1, Adwoa, Accra), (2, Bekoe, Kumasi), (3, Cobbina, Accra), (4, Dede, Tamale), (5, Efua, Kumasi).
- product(pid, pname, price, category): (10, Keyboard, 25.0, Accessory), (11, Mouse, 12.5, Accessory), (12, Monitor, 140.0, Display), (13, Laptop, 620.0, Computer), (14, Cable, 4.0, Accessory).
- orders(oid, cid, odate): (100, 1, 2025-01-05), (101, 1, 2025-02-10), (102, 2, 2025-02-11), (103, 3, 2025-03-01), (104, 2, 2025-03-15), (105, 5, 2025-03-20).
- item(oid, pid, qty), primary key (oid, pid): (100, 10, 2), (100, 11, 1), (101, 13, 1), (102, 12, 2), (102, 14, 5), (103, 10, 1), (103, 12, 1), (104, 11, 4), (105, 13, 1), (105, 14, 3).

## Section A: Multiple Choice (20 marks)

**1.** Physical data independence means we can change
A) the queries without changing the schema  B) the storage structures and indexes without changing the application programs  C) the schema without changing the data  D) the users without changing the data

**2.** The relational algebra operator that chooses rows satisfying a condition is
A) projection π  B) selection σ  C) join ⋈  D) rename ρ

**3.** If R has 5 tuples and S has 7 tuples, R × S has
A) 12 tuples  B) 7 tuples  C) 35 tuples  D) 5 tuples

**4.** A FULL OUTER JOIN keeps
A) only matching rows  B) unmatched rows of the left table only  C) unmatched rows of the right table only  D) unmatched rows of both tables

**5.** Which SELECT clause is evaluated first?
A) FROM  B) SELECT  C) ORDER BY  D) HAVING

**6.** The aggregates SUM and AVG
A) treat NULL as zero  B) fail when a NULL is present  C) ignore NULL values  D) return NULL if any value is NULL

**7.** If the subquery of `x NOT IN (subquery)` returns a NULL, then for a non-matching x the result is
A) TRUE  B) never TRUE (UNKNOWN)  C) FALSE  D) an error

**8.** A window function such as RANK() OVER (...)
A) is the same as GROUP BY  B) removes duplicates  C) can be used only in WHERE  D) computes a value per row without collapsing rows

**9.** A weak entity
A) has no primary key of its own and depends on an owner entity  B) never has attributes  C) is always in a 1:1 relationship  D) has a multivalued key

**10.** A many-to-many relationship is mapped to
A) a foreign key on one side  B) a multivalued attribute  C) a separate table containing both keys  D) a view

**11.** Which of these is NOT one of Armstrong's axioms?
A) reflexivity  B) augmentation  C) transitivity  D) idempotence

**12.** Every relation in BCNF is also in
A) 1NF only  B) 3NF  C) none of the other normal forms  D) 4NF necessarily

**13.** A minimal cover requires that every right-hand side
A) is a single attribute  B) is a key  C) is empty  D) is the whole relation

**14.** The BCNF decomposition algorithm always gives
A) dependency preservation  B) 3NF only  C) a lossless join, but it may lose dependencies  D) a smaller number of relations than 3NF synthesis

**15.** T1 reads a value written by T2 which later aborts. This anomaly is
A) a dirty read  B) a phantom  C) a lost update  D) write skew

**16.** A cascadeless schedule is one in which
A) transactions never conflict  B) transactions read only data written by committed transactions  C) all transactions are serial  D) no deadlock occurs

**17.** In the wait-die scheme, if an older transaction requests a lock held by a younger one, the older transaction
A) aborts  B) kills the younger transaction  C) is granted the lock at once  D) waits

**18.** In ARIES, the redo pass
A) undoes uncommitted work  B) deletes the log  C) repeats history from the log  D) forces all pages

**19.** In a B+ tree of order n = 10, a non-root internal node has at least how many children?
A) 3  B) 5  C) 7  D) 10

**20.** According to the CAP theorem, during a network partition a distributed system must choose between
A) consistency and availability  B) speed and cost  C) atomicity and durability  D) reads and writes

## Section B: Short Questions (40 marks)

**B1. (5)** On the shop database write a relational algebra expression and the result for "names of customers living in Accra who ordered a Monitor (pid 12)".

**B2. (5)** Write a query listing every product with the total quantity sold (0 if never sold), most sold first, and give the result.

**B3. (5)** The table t(a) contains the values 1, 2, NULL. Give the results of `SELECT COUNT(*), COUNT(a), SUM(a), AVG(a) FROM t;`, `SELECT a FROM t WHERE a = NULL;` and `SELECT a FROM t WHERE a IS NULL;`, and explain.

**B4. (5)** Map this ER fragment to tables: Supplier (id, name) supplies Part (code, description) with the attribute unit_price on the relationship; a supplier may supply many parts and a part may have many suppliers; a supplier has several phone numbers. Give the schema with keys.

**B5. (5)** R(A, B, C, D) with F = {A → B, B → C, C → D}. Find the candidate keys, the highest normal form and a lossless, dependency-preserving 3NF decomposition.

**B6. (5)** Decide whether the schedule r1(A) r2(B) w1(B) w2(A) is conflict-serializable. Draw the precedence graph and explain.

**B7. (5)** A crash leaves this log: <T1 start>, <T1, X, 10, 20>, <T2 start>, <T2, Y, 30, 40>, <T1 commit>, <T3 start>, <T3, X, 20, 25>. Initial X = 10, Y = 30. State which transactions are redone and undone and the final values of X and Y.

**B8. (5)** Compute the cost in block transfers of externally sorting a file of 3000 blocks with 31 buffer blocks, and give the number of runs and merge passes.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. SQL on the shop database.**
(a) Define a view order_total(oid, cid, total) giving the value of each order [2]. (b) Using the view, list the names of customers with an order above the average order value, and give the average [3]. (c) For each customer's orders, show a running total of spend in date order using a window function, and give the result [3]. (d) Revenue per product category, largest first [2].

**C2. Normalisation.**
A university stores Enrolment(StudentID, StudentName, CourseID, CourseTitle, Instructor, Office, Grade) with FDs: StudentID → StudentName; CourseID → CourseTitle, Instructor; Instructor → Office; StudentID CourseID → Grade.
(a) Find the candidate key and prove it using closure [2]. (b) List the anomalies caused by the current design [2]. (c) Identify which FDs violate 2NF and which violate 3NF [2]. (d) Decompose into 3NF (and BCNF), showing the keys of each relation, and show that the decomposition is lossless [4].

**C3. Transactions.**
(a) For each schedule give the precedence graph and an equivalent serial order if one exists: S1: r1(A) w1(A) r2(A) w2(A) r1(B) w1(B) r2(B) w2(B); S2: r1(X) r2(X) w2(X) r3(Y) w1(Y) w3(Y); S3: r1(A) r2(A) w2(B) r3(B) w3(C) w1(C) [6]. (b) Three transactions deadlock: T1 holds A and requests B; T2 holds B and requests C; T3 holds C and requests A. Draw the wait-for graph and explain how to resolve it [2]. (c) Why does strict 2PL give cascadeless schedules? [2]

**C4. Indexing.**
(a) With a block size of 8192 bytes, 4-byte keys and 8-byte pointers find the order n of a B+ tree and the minimum and maximum height for 20 million keys [4]. (b) For n = 4 (at most 3 keys per node) insert 5, 15, 25, 35, 45, 20, 30, 40 in order and draw the final tree [4]. (c) Explain why an index on a column of two distinct values is rarely useful, and when a composite index (a, b) helps a query on b only [2].

**C5. Recovery and distributed databases.**
(a) The log is: (1) <T1 start> (2) <T1, A, 100, 150> (3) <T2 start> (4) <T2, B, 200, 250> (5) <checkpoint: active T1, T2> (6) <T1 commit> (7) <T3 start> (8) <T3, C, 300, 350> (9) <T2, B, 250, 300> (10) <T2 commit> (11) <T3, A, 150, 175> (12) crash. Initial values A = 100, B = 200, C = 300. State the committed and uncommitted transactions, the redo and undo actions and the final values [5]. (b) Describe the three passes of ARIES [3]. (c) Describe two-phase commit and its blocking problem [2].

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **B** · 3 **C** · 4 **D** · 5 **A** · 6 **C** · 7 **B** · 8 **D** · 9 **A** · 10 **C** · 11 **D** · 12 **B** · 13 **A** · 14 **C** · 15 **A** · 16 **B** · 17 **D** · 18 **C** · 19 **B** · 20 **A**

Brief reasons: 3. 5 × 7 = 35. 6. They skip NULLs. 7. NOT IN with a NULL gives UNKNOWN for non-members. 12. BCNF is stricter than 3NF. 17. An older transaction waits for a younger one; a younger one requesting from an older one dies. 19. ceil(10/2) = 5.

## Section B solutions

**B1.** π_name(σ_{city='Accra'}(customer) ⋈ orders ⋈ σ_{pid=12}(item)) (the natural joins are on cid and on oid). Customers with a Monitor in an order: Bekoe (order 102) and Cobbina (order 103); of these only Cobbina lives in Accra. **Result: {Cobbina}**.

**B2.**
```sql
SELECT p.pname, COALESCE(SUM(i.qty), 0) AS sold
FROM product p LEFT JOIN item i ON i.pid = p.pid
GROUP BY p.pid ORDER BY sold DESC, p.pname;
```
Result: Cable 8, Mouse 5, Keyboard 3, Monitor 3, Laptop 2.

**B3.** `COUNT(*)` = **3**, `COUNT(a)` = **2**, `SUM(a)` = **3**, `AVG(a)` = **1.5**. `WHERE a = NULL` returns **no rows**: a comparison with NULL is UNKNOWN, and WHERE keeps only TRUE. `WHERE a IS NULL` returns **one row** (NULL). Aggregates other than `COUNT(*)` ignore NULLs.

**B4.**
```
Supplier(sid PK, name)
SupplierPhone(sid FK -> Supplier, phone, PK(sid, phone))
Part(code PK, description)
Supplies(sid FK -> Supplier, code FK -> Part, unit_price, PK(sid, code))
```
The M:N relationship becomes the Supplies table with its attribute unit_price; the multivalued phone attribute becomes its own table.

**B5.** A appears on no right-hand side, so it is in every key; A+ = {A, B, C, D}, so **A is the only candidate key**. B → C: B is not a superkey and C is not prime, which violates 3NF; there is no partial dependency (single-attribute key), so the relation is in **2NF**. 3NF synthesis: the minimal cover is F, giving **(A, B), (B, C), (C, D)**; (A, B) contains the key A. This decomposition is lossless (the common attribute is a key of one side at each join: B in (B, C), C in (C, D)) and dependency-preserving; each relation is in BCNF.

**B6.** T1: r1(A), w1(B). T2: r2(B), w2(A). r1(A) before w2(A): conflict, T1 → T2. r2(B) before w1(B): conflict, T2 → T1. The precedence graph has the cycle T1 → T2 → T1, so the schedule is **not conflict-serializable** (neither the order T1, T2 nor T2, T1 gives the same result).

**B7.** Step 1: committed: **T1** (its commit record is in the log); uncommitted: **T2** and **T3**.
Step 2: redo T1's update: X = 20.
Step 3: undo in reverse log order: T3's update of X (20 → 25): X back to 20; then T2's update of Y (30 → 40): Y back to 30.
Final: **X = 20, Y = 30**. (X is 20 because T1's committed update survives and T3's update to 25 is undone, restoring T1's value.)

**B8.** Step 1: runs after pass 0 (each run fills the 31 buffers): ⌈3000/31⌉ = **97** runs (96.77 rounded up).
Step 2: each merge pass merges M - 1 = 30 runs: ⌈log_30 97⌉ = **2** passes (30 < 97 ≤ 900).
Step 3: every pass (run formation plus 2 merge passes = 3) reads and writes the whole file: cost = 2 × 3000 × 3 = **18,000** block transfers.

## Section C solutions

**C1.**
(a)
```sql
CREATE VIEW order_total AS
SELECT o.oid, o.cid, SUM(i.qty * p.price) AS total
FROM orders o JOIN item i ON i.oid = o.oid JOIN product p ON p.pid = i.pid
GROUP BY o.oid;
```
Contents: (100, 1, 62.5), (101, 1, 620), (102, 2, 300), (103, 3, 165), (104, 2, 50), (105, 5, 632).
(b)
```sql
SELECT name FROM customer
WHERE cid IN (SELECT cid FROM order_total
              WHERE total > (SELECT AVG(total) FROM order_total));
```
Step 1: the average is (62.5 + 620 + 300 + 165 + 50 + 632)/6 = 1829.5/6 = **304.92**.
Step 2: orders above it: 101 (620) and 105 (632), belonging to customers 1 (Adwoa) and 5 (Efua). Result: **Adwoa, Efua**.
(c)
```sql
SELECT c.name, o.oid, ot.total,
       SUM(ot.total) OVER (PARTITION BY c.cid ORDER BY o.odate) AS running
FROM customer c JOIN orders o ON o.cid = c.cid JOIN order_total ot ON ot.oid = o.oid
ORDER BY c.name, o.odate;
```
Result: (Adwoa, 100, 62.5, 62.5), (Adwoa, 101, 620, 682.5), (Bekoe, 102, 300, 300), (Bekoe, 104, 50, 350), (Cobbina, 103, 165, 165), (Efua, 105, 632, 632).
(d)
```sql
SELECT category, SUM(i.qty * p.price) AS rev
FROM product p JOIN item i ON i.pid = p.pid GROUP BY category ORDER BY rev DESC;
```
Result: Computer 1240.0 (2 laptops), Display 420.0 (3 monitors), Accessory 169.5 (Keyboard 3 × 25 = 75, Mouse 5 × 12.5 = 62.5, Cable 8 × 4 = 32).

**C2.**
(a) StudentID and CourseID appear on no right-hand side, so both are in every key. {StudentID, CourseID}+: StudentID → StudentName; CourseID → CourseTitle, Instructor; Instructor → Office; StudentID CourseID → Grade: all 7 attributes. Neither StudentID+ = {StudentID, StudentName} nor CourseID+ = {CourseID, CourseTitle, Instructor, Office} is complete, so **(StudentID, CourseID) is the only candidate key**.
(b) Update anomaly: a student's name is repeated in every enrolment (and the course title and instructor office as well). Insertion anomaly: a course cannot be recorded until someone enrols; an instructor's office cannot be stored without a course. Deletion anomaly: deleting the last enrolment in a course loses the course and instructor information.
(c) **2NF violations (partial dependencies)**: StudentID → StudentName and CourseID → CourseTitle, Instructor (and through it Office). **3NF violation (transitive)**: Instructor → Office (CourseID → Instructor → Office; Instructor is not a superkey and Office is not prime).
(d) Decomposition:
```
Student(StudentID PK, StudentName)
Course(CourseID PK, CourseTitle, Instructor FK)
Instructor(Instructor PK, Office)
Enrolment(StudentID FK, CourseID FK, Grade, PK(StudentID, CourseID))
```
Every FD has a superkey (the relation's key) on the left side, so all four relations are in **BCNF** (and hence 3NF). It is dependency-preserving (each FD lies within one relation). It is lossless: joining Enrolment with Student on StudentID (a key of Student), with Course on CourseID (a key of Course) and then with Instructor on Instructor (a key of Instructor) reconstructs the original, since each join attribute is a key of the relation being added.

**C3.**
(a)
S1: all conflicts go from T1 to T2 (A: w1 before r2, w2; B: the same). The graph T1 → T2 is acyclic: **serializable, order T1, T2**.
S2: T1: r1(X) w1(Y); T2: r2(X) w2(X); T3: r3(Y) w3(Y). Edges: r1(X) before w2(X): T1 → T2; r3(Y) before w1(Y): T3 → T1; w1(Y) before w3(Y): T1 → T3. T1 ↔ T3 is a cycle: **not serializable**.
S3: r1(A) r2(A) w2(B) r3(B) w3(C) w1(C). Conflicts: w2(B) before r3(B): T2 → T3; w3(C) before w1(C): T3 → T1. (The reads of A do not conflict.) The graph T2 → T3 → T1 is acyclic: **serializable, order T2, T3, T1**.
(b) Wait-for graph: T1 → T2 (T1 waits for B, held by T2), T2 → T3 (waits for C), T3 → T1 (waits for A): a cycle, so a deadlock. Resolution: choose a victim (for example the transaction that has done least work or the youngest), abort it and release its locks (undoing its effects with the log), then restart it. Alternatively prevent deadlocks with wait-die or wound-wait.
(c) In strict 2PL a transaction holds its exclusive locks until it commits or aborts, so no other transaction can read or overwrite its uncommitted data. Therefore every read sees only committed data (no dirty reads), and an abort cannot cascade to other transactions.

**C4.**
(a) Step 1: a node has n pointers and n - 1 keys: 8n + 4 (n - 1) ≤ 8192, so 12n ≤ 8196 and n ≤ 683: **n = 683** (8 × 683 + 4 × 682 = 5464 + 2728 = 8192 bytes exactly).
Step 2: an internal node has up to 683 children and 682 keys, at least ⌈683/2⌉ = **342** children; a leaf holds up to **682** keys and at least ⌈682/2⌉ = **341**.
Step 3 (best case, nodes full): leaves = ⌈20,000,000/682⌉ = 29,326; above them ⌈29,326/683⌉ = 43; then the root: **height 3**.
Step 4 (worst case, nodes half full): leaves = ⌈20,000,000/341⌉ = 58,652; above them ⌈58,652/342⌉ = 172; then the root: **height 3**.
A lookup costs 3 index blocks plus 1 data block.
(b) Leaf capacity 3 keys. 5, 15, 25 fill one leaf. Insert 35: overflow, split into [5, 15] and [25, 35]; root [25]. Insert 45: leaf [25, 35, 45]. Insert 20: leaf [5, 15, 20]. Insert 30: the leaf [25, 35, 45] becomes [25, 30, 35, 45], an overflow: split into [25, 30] and [35, 45]; the root becomes [25, 35]. Insert 40: leaf [35, 40, 45].
**Final tree**: root [25, 35]; leaves [5, 15, 20], [25, 30], [35, 40, 45].
(c) A column with two distinct values has a selectivity of about 50 percent, so an index lookup would still fetch about half of all rows (many random I/Os), which is worse than a sequential scan; a partial index may help if one value is rare. A composite index on (a, b) is sorted by a first, then b, so a query on b alone cannot seek on it; it can still be used by a full index scan if the index covers the query (all needed columns are in the index), or by a skip scan in some systems. Put the most commonly filtered column first.

**C5.**
(a) The checkpoint shows T1 and T2 active at that time, T3 starts afterwards. Committed: **T1, T2**. Uncommitted: **T3**.
Redo (repeat the committed updates in log order): record 2: A = 150; record 4: B = 250; record 9: B = 300.
Undo (uncommitted T3, in reverse order): record 11: A back to 150; record 8: C back to 300.
Final values: **A = 150, B = 300, C = 300**. (A = 150 comes from T1's committed update, which T3's undo restores.)
(b) **Analysis**: scan the log from the last checkpoint to find the transactions that were active at the crash (the "losers") and the dirty pages. **Redo**: repeat history from the oldest log record needed, reapplying all logged updates (also those of uncommitted transactions) whose effects are not already on disk, using page LSNs to skip updates already applied. **Undo**: roll back the loser transactions in reverse order, writing compensation log records (CLRs) so that a crash during recovery does not repeat the undo.
(c) Two-phase commit: the coordinator sends **prepare** to all participants; each votes yes (after forcing its log so it can commit later) or no. If all vote yes, the coordinator logs the decision and sends **commit**; otherwise it sends **abort**. Participants that voted yes cannot unilaterally decide: if the coordinator crashes after the votes, they are **blocked**, holding locks, until it recovers. Three-phase commit or consensus-based protocols (Paxos or Raft logs) reduce blocking.
