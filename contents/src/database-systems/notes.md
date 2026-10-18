# Database Systems: Lecture Notes

A database system stores large amounts of data persistently, lets many users query and update it concurrently, and guarantees that it stays correct despite errors and crashes. This course covers the relational model, SQL, database design (normalisation), transactions and concurrency control, recovery, indexing and query processing. All the SQL in these notes was run against SQLite, so the results shown are real. Prerequisites: Discrete Mathematics (sets and relations), Data Structures and Algorithms, and Object-Oriented Programming.

## The sample database used in the notes
A university registry with three tables (keys declared with PRIMARY KEY):

```sql
CREATE TABLE student (sid INTEGER PRIMARY KEY, name TEXT NOT NULL, dept TEXT, year INTEGER);
CREATE TABLE course  (cid TEXT PRIMARY KEY, title TEXT NOT NULL, credits INTEGER, dept TEXT);
CREATE TABLE enrol   (sid INTEGER REFERENCES student(sid),
                      cid TEXT REFERENCES course(cid),
                      grade INTEGER,
                      PRIMARY KEY (sid, cid));
```

student: (1, Ama, CE, 2), (2, Kofi, CE, 3), (3, Esi, EE, 2), (4, Yaw, CE, 2), (5, Abena, ME, 1), (6, Kwame, EE, 3), (7, Akua, CE, 1), (8, Nii, CE, 3).
course: CE201 Data Structures (3), CE202 Databases (3), EE210 Circuits (4), MA101 Calculus (4), ME120 Statics (3), CE301 Operating Systems (3).
enrol (sid, cid, grade): (1, CE201, 78), (1, CE202, 85), (1, MA101, 70), (2, CE201, 64), (2, CE301, 72), (3, EE210, 90), (3, MA101, 66), (4, CE201, 55), (4, CE202, 61), (4, MA101, 49), (5, ME120, 58), (5, MA101, 74), (6, EE210, 81), (7, MA101, 88), (8, CE202, 69), (8, CE301, 77).

# Chapter 1: The Relational Model

## 1.1 Why databases?
Files plus application code lead to redundancy, inconsistency, no concurrent access control, no crash recovery and hard-coded access paths. A **database management system (DBMS)** supplies:
- **Data independence**: logical independence (changing the schema without changing programs) and physical independence (changing storage and indexes without changing queries).
- A declarative query language (SQL): say **what** you want, and the optimiser decides **how**.
- **Transactions** with ACID guarantees, concurrency control, recovery, security and integrity constraints.

## 1.2 Definitions
- A **relation** is a set of tuples over a **schema** R(A1, ..., An) with domains for each attribute; a **table** is its SQL form (a bag, not a set, unless keys or DISTINCT are used).
- **Degree** = number of attributes; **cardinality** = number of tuples.
- **Superkey**: a set of attributes that uniquely identifies a tuple. **Candidate key**: a minimal superkey. **Primary key**: the chosen candidate key (not NULL). **Foreign key**: attributes referencing a key of another relation; every non-null value must exist there (**referential integrity**).
- In enrol, (sid, cid) is the primary key, sid is a foreign key to student and cid is a foreign key to course.

## 1.3 Relational algebra
Procedural operators on relations (the theoretical foundation of SQL):
- **Selection** σ_condition(R): choose rows. Example: σ_{dept='CE' ∧ year=2}(student) = {Ama, Yaw}.
- **Projection** π_attrs(R): choose columns (duplicates removed in the pure algebra).
- **Union, intersection, difference** (union-compatible relations).
- **Cartesian product** R × S: with 8 students and 6 courses it has 8 × 6 = 48 tuples.
- **Natural join** R ⋈ S = π(σ_{R.A=S.A}(R × S)) on common attributes; **theta join** R ⋈_θ S = σ_θ(R × S).
- **Rename** ρ_{new}(R).
- **Division** R ÷ S: tuples of R's remaining attributes that are paired with every tuple of S. "Students enrolled in all CE courses in {CE201, CE202}" is π_{sid,cid}(enrol) ÷ {CE201, CE202} = {1 (Ama), 4 (Yaw)}.
- Aggregation γ_{group; functions}(R).

Example query. "Names of students enrolled in CE202": π_name(student ⋈ σ_{cid='CE202'}(enrol)) = {Ama, Yaw, Nii}.

**Equivalences** the optimiser uses: σ_{c1 ∧ c2}(R) = σ_{c1}(σ_{c2}(R)); selection commutes with projection when the attributes agree; push selections below joins; join is associative and commutative.

# Chapter 2: Entity-Relationship Modelling

## 2.1 Concepts
- **Entity**: a thing with an independent existence (Student). **Entity set**: all entities of a type. **Attributes**: simple, composite (address), multivalued (phone numbers), derived (age from date of birth).
- **Relationship**: an association among entities (Student enrols in Course). Its **cardinality** is 1:1, 1:N or M:N, and its **participation** is total (every entity takes part) or partial.
- **Weak entity**: no key of its own; identified through an owner entity (a Room within a Building).
- **Specialisation/generalisation** (ISA): Undergraduate and Postgraduate are kinds of Student.

## 2.2 Mapping ER to relational tables
1. Strong entity: a table with its simple attributes and primary key; composite attributes are flattened.
2. Weak entity: a table including the owner's key, with the key = owner key + partial key.
3. 1:N relationship: put the key of the "one" side as a foreign key on the "N" side.
4. M:N relationship: a new table with both keys (and the relationship's attributes). Enrol is the M:N relationship between Student and Course, with the attribute grade.
5. 1:1 relationship: a foreign key on either side (preferably the side with total participation).
6. Multivalued attribute: a separate table (entity key, value).
7. ISA: either one table per class (subclass tables carry the key), or a single table with a type column.

Design advice: model first with an ER diagram, map to tables, then check the tables with the normal forms of Chapter 4.

# Chapter 3: SQL

## 3.1 Data definition and constraints
```sql
CREATE TABLE enrol (
  sid   INTEGER NOT NULL,
  cid   TEXT    NOT NULL,
  grade INTEGER CHECK (grade BETWEEN 0 AND 100),
  PRIMARY KEY (sid, cid),
  FOREIGN KEY (sid) REFERENCES student(sid) ON DELETE CASCADE,
  FOREIGN KEY (cid) REFERENCES course(cid)
);
ALTER TABLE student ADD COLUMN email TEXT;
CREATE INDEX idx_enrol_cid ON enrol(cid);
DROP TABLE tmp;
```
Constraints: NOT NULL, UNIQUE, PRIMARY KEY, CHECK, FOREIGN KEY (with ON DELETE CASCADE, SET NULL or RESTRICT). Data types vary by system (INTEGER, NUMERIC, VARCHAR(n), DATE, TIMESTAMP, BOOLEAN).

## 3.2 Data manipulation
```sql
INSERT INTO student VALUES (9, 'Yaa', 'CE', 1);
INSERT INTO student (sid, name) VALUES (10, 'Kojo');
UPDATE enrol SET grade = grade + 5 WHERE cid = 'CE202' AND grade < 60;
DELETE FROM enrol WHERE sid = 4;
```
Always include a WHERE in UPDATE and DELETE unless you intend to change every row.

## 3.3 The SELECT statement
The clauses are written SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT but **evaluated** in the order FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT. This explains why a SELECT alias is not visible in WHERE.

Simple selection:
```sql
SELECT name FROM student WHERE dept = 'CE' AND year = 2;
```
Result: Ama, Yaw.

Grouping and counting:
```sql
SELECT dept, COUNT(*) AS n FROM student GROUP BY dept ORDER BY dept;
```
Result: (CE, 5), (EE, 2), (ME, 1).

## 3.4 Joins
```sql
SELECT s.name, c.title, e.grade
FROM student s JOIN enrol e ON s.sid = e.sid
               JOIN course c ON c.cid = e.cid
WHERE e.grade >= 80
ORDER BY e.grade DESC;
```
Result: (Esi, Circuits, 90), (Akua, Calculus, 88), (Ama, Databases, 85), (Kwame, Circuits, 81).

Kinds of join:
- **INNER JOIN** keeps only matching pairs.
- **LEFT OUTER JOIN** keeps every row of the left table, filling the right columns with NULL when nothing matches.
- **RIGHT / FULL OUTER JOIN** analogously.
- **CROSS JOIN** gives the Cartesian product (48 rows for student × course).
- **Self join** joins a table to itself using aliases: pairs of students in CE201:
```sql
SELECT e1.sid, e2.sid FROM enrol e1 JOIN enrol e2
  ON e1.cid = e2.cid AND e1.sid < e2.sid WHERE e1.cid = 'CE201';
```
Result: (1, 2), (1, 4), (2, 4).

## 3.5 Aggregates, GROUP BY and HAVING
Aggregate functions: COUNT, SUM, AVG, MIN, MAX. **WHERE** filters rows before grouping; **HAVING** filters groups after.

```sql
SELECT s.name, AVG(e.grade) AS avg_g
FROM student s JOIN enrol e USING (sid)
GROUP BY s.sid HAVING AVG(e.grade) > 70 ORDER BY avg_g DESC;
```
Result: Akua 88.0, Kwame 81.0, Esi 78.0, Ama 77.67, Nii 73.0.

Courses with their enrolment count, average and top grade, including courses nobody takes (use a LEFT JOIN):
```sql
SELECT c.cid, COUNT(e.sid) AS n, ROUND(AVG(e.grade),1) AS avg_g, MAX(e.grade) AS top
FROM course c LEFT JOIN enrol e ON e.cid = c.cid GROUP BY c.cid;
```
Result: CE201 (3, 65.7, 78), CE202 (3, 71.7, 85), CE301 (2, 74.5, 77), EE210 (2, 85.5, 90), MA101 (5, 69.4, 88), ME120 (1, 58.0, 58).

Every selected column must be either grouped or aggregated.

## 3.6 Subqueries
```sql
-- scalar subquery: grades above the Calculus average (69.4)
SELECT s.name, e.grade FROM student s JOIN enrol e ON s.sid = e.sid
WHERE e.cid = 'MA101' AND e.grade > (SELECT AVG(grade) FROM enrol WHERE cid = 'MA101');
```
Result: (Ama, 70), (Abena, 74), (Akua, 88).

```sql
-- IN: students who took both CE201 and CE202
SELECT name FROM student
WHERE sid IN (SELECT sid FROM enrol WHERE cid = 'CE201')
  AND sid IN (SELECT sid FROM enrol WHERE cid = 'CE202');
```
Result: Ama, Yaw.

```sql
-- correlated NOT EXISTS: students who did not take CE202
SELECT name FROM student s
WHERE NOT EXISTS (SELECT 1 FROM enrol e WHERE e.sid = s.sid AND e.cid = 'CE202');
```
Result: Kofi, Esi, Abena, Kwame, Akua.

**Division in SQL** with a double NOT EXISTS ("students who took every CE course among CE201, CE202"):
```sql
SELECT name FROM student s
WHERE NOT EXISTS (
  SELECT cid FROM course WHERE cid IN ('CE201','CE202')
  EXCEPT
  SELECT cid FROM enrol e WHERE e.sid = s.sid);
```
Result: Ama, Yaw.

Set operators: UNION, INTERSECT, EXCEPT (duplicates removed unless UNION ALL). Example: departments of students that also appear as course departments: (CE, EE, ME).

## 3.7 NULL and three-valued logic
NULL means "unknown". Any comparison with NULL is UNKNOWN, and WHERE keeps only TRUE rows.
- `a = NULL` is never true: use `a IS NULL`.
- `COUNT(*)` counts rows; `COUNT(a)` counts non-null values; SUM and AVG ignore NULLs. For a column with values 1, 2, NULL: `COUNT(*)` = 3, `COUNT(a)` = 2, SUM = 3, AVG = 1.5.
- **The NOT IN trap**: if the subquery returns any NULL, `x NOT IN (...)` is never TRUE. With t = {1, 2, NULL} and u = {2, NULL}: `SELECT a FROM t WHERE a NOT IN (SELECT a FROM u)` returns **no rows**, whereas `NOT EXISTS` returns {1, NULL}, and filtering out the NULLs in the subquery returns {1}. Prefer NOT EXISTS.
- Outer joins create NULLs: always think about what a missing match does to your WHERE and aggregates.

## 3.8 Window functions and CASE
```sql
SELECT cid, name, grade, RANK() OVER (PARTITION BY cid ORDER BY grade DESC) AS r
FROM student JOIN enrol USING (sid) WHERE cid IN ('CE201','CE202');
```
Result: CE201: Ama 78 (1), Kofi 64 (2), Yaw 55 (3); CE202: Ama 85 (1), Nii 69 (2), Yaw 61 (3). Window functions compute per-row values over a related set of rows without collapsing them.

```sql
SELECT s.name, CASE WHEN e.grade >= 80 THEN 'A' WHEN e.grade >= 70 THEN 'B'
                    WHEN e.grade >= 60 THEN 'C' ELSE 'F' END AS letter
FROM student s JOIN enrol e USING (sid) WHERE cid = 'CE201';
```
Result: Ama B, Kofi C, Yaw F.

## 3.9 Views, indexes and programmatic SQL
A **view** is a stored query: `CREATE VIEW ce_students AS SELECT * FROM student WHERE dept = 'CE';`. Views provide security and logical independence. A **materialised view** stores the result.

Using a database from Python with parameterised queries (never concatenate user input into SQL; that is **SQL injection**):
```python
import sqlite3
con = sqlite3.connect("registry.db")
cur = con.execute("SELECT name FROM student WHERE dept = ? AND year = ?", ("CE", 2))
print(cur.fetchall())
con.commit()
```
An attacker who controls `name` in `"... WHERE name = '" + name + "'"` can enter `x' OR '1'='1` and read every row; placeholders send the value separately from the statement, so it can never be parsed as SQL.

# Chapter 4: Database Design Theory

## 4.1 Why normalise?
A poor design stores facts redundantly and causes anomalies. Consider one table `enrol_flat(sid, name, cid, title, grade)`:
- **Update anomaly**: changing Ama's name needs every one of her rows updated.
- **Insertion anomaly**: a new course cannot be stored until a student enrols.
- **Deletion anomaly**: deleting the last enrolment loses the course title.

## 4.2 Functional dependencies and closure
A **functional dependency** X → Y holds if any two tuples that agree on X also agree on Y. It is a statement about the meaning of the data (all possible instances), not about the current rows.

**Armstrong's axioms**: reflexivity (Y ⊆ X implies X → Y), augmentation (X → Y implies XZ → YZ), transitivity (X → Y and Y → Z imply X → Z). Derived rules: union, decomposition, pseudo-transitivity.

**Attribute closure** X+: the set of attributes determined by X. Algorithm: start with X+ = X and repeat "if some L → R has L ⊆ X+ then add R" until nothing changes. X is a superkey if X+ is all of R.

Example. R(A, B, C, D, E) with F = {A → B, BC → D, D → E}.
- A+ = {A, B}; BC+ = {B, C, D, E}; D+ = {D, E}.
- AC+: A → B gives B; then BC → D gives D; D → E gives E; so AC+ = {A, B, C, D, E} and **AC is a key**. Since A and C appear on no right-hand side they are in every key, so AC is the **only** candidate key.

Example. R(A, B, C, D) with F = {AB → C, C → D, D → A}. B appears on no right side so it is in every key. Test AB: AB → C → D → A, so AB+ = ABCD: a key. BC: C → D → A so BC+ = ABCD: a key. BD: D → A, then AB → C: BD+ = ABCD: a key. **Candidate keys: AB, BC, BD.**

## 4.3 Normal forms
- **1NF**: every attribute is atomic (no repeating groups or arrays in a column).
- **2NF**: 1NF and no non-prime attribute depends on **part** of a candidate key. (Only relevant when a key is composite.)
- **3NF**: for every FD X → A, either X is a superkey, or A is a prime attribute (part of some candidate key). Equivalent: no non-prime attribute depends transitively on a key.
- **BCNF**: for every non-trivial FD X → A, X is a superkey. Stricter than 3NF.

Hierarchy: BCNF is contained in 3NF, which is contained in 2NF, which is contained in 1NF.

Example. enrol_flat(S = sid, N = name, C = cid, T = title, G = grade) with F = {S → N, C → T, SC → G}. The only key is SC. S → N violates 2NF (N depends on part of the key), as does C → T. Decompose into student(S, N), course(C, T), enrol(S, C, G): each is in BCNF.

Example of 3NF but not BCNF. R(A, B, C, D) with F = {AB → C, C → D, D → A} and keys AB, BC, BD. The FD C → D has C not a superkey (C+ = ACD, missing B), so R is **not in BCNF**; but D is prime (in key BD), so it is in **3NF** (the other FDs have a superkey on the left or a prime on the right).

Another classic: R(City, Street, Zip) with CS → Z and Z → C. The keys are CS and SZ. Z → C: Z is not a superkey but C is prime, so it is in 3NF but not BCNF.

## 4.4 Decomposition properties
A decomposition of R into R1, R2 is:
- **Lossless-join** if R1 ⋈ R2 = R for every instance. Test for two relations: the common attributes R1 ∩ R2 form a key of R1 or of R2 (equivalently (R1 ∩ R2) → R1 or → R2 follows from F).
- **Dependency-preserving** if the union of the FDs that can be checked inside each Ri implies all of F.

BCNF decomposition (always lossless, but it may not preserve dependencies): while some Ri has a violating FD X → Y, replace Ri by (X+ ∩ Ri) and (Ri minus (X+ minus X)).
**3NF synthesis** (always lossless and dependency-preserving): compute a **minimal cover**, make one relation per FD (grouping those with the same left side), and add a relation containing a candidate key if none of the relations contains one.

Example. R(A, B, C, D), F = {AB → C, C → D, D → A}. 3NF synthesis: the minimal cover is F itself, giving R1(A, B, C), R2(C, D), R3(D, A). R1 contains the key AB. The result preserves all three FDs and is lossless. BCNF: split on C → D: R1(A, C, D) (C+ = ACD) and R2(B, C); within R1 the FD D → A violates BCNF, so split into (A, D) and (C, D). The final BCNF schema (A, D), (C, D), (B, C) is lossless, but **AB → C is lost** (it cannot be checked within any single relation).

**Minimal cover**: (1) one attribute on each right side; (2) no extraneous left-side attributes; (3) no redundant FD. Example: F = {A → BC, B → C, A → B, AB → C}. Split: A → B, A → C, B → C, A → B, AB → C. Remove the duplicate A → B. AB → C: B alone determines C, so it reduces to B → C (a duplicate). A → C is redundant: A → B and B → C give it. The minimal cover is **{A → B, B → C}**.

## 4.5 Denormalisation
Normalisation optimises for updates and consistency; analytical (read-heavy) systems often denormalise (star schemas, precomputed aggregates) to avoid costly joins. Do it deliberately, with the redundancy managed.

# Chapter 5: Transactions and Concurrency Control

## 5.1 ACID
A **transaction** is a unit of work, a sequence of reads and writes, that is either all done or not at all.
- **Atomicity**: all or nothing (on a failure the effects are rolled back).
- **Consistency**: it takes the database from one valid state to another (integrity constraints hold).
- **Isolation**: concurrent transactions behave as if executed one at a time.
- **Durability**: once committed, results survive crashes.

Transfer example: debit 30 from account 1 (balance 100) and credit 30 to account 2 (balance 50). Inside the transaction the balances are (70, 80); after a ROLLBACK they are again (100, 50), so no money is lost or created.
```sql
BEGIN;
UPDATE acct SET bal = bal - 30 WHERE id = 1;
UPDATE acct SET bal = bal + 30 WHERE id = 2;
COMMIT;   -- or ROLLBACK;
```

## 5.2 Anomalies of concurrent execution
- **Lost update**: T1 and T2 both read A = 100, T1 writes 110, T2 writes 120: T1's update is lost.
- **Dirty read**: reading data written by a transaction that later aborts.
- **Non-repeatable read**: a row read twice in a transaction has different values because another transaction committed in between.
- **Phantom**: the same query returns a different set of rows the second time.
- **Write skew** under snapshot isolation: two transactions read overlapping data and write disjoint items, violating an invariant (two doctors both go off call).

## 5.3 Schedules and serializability
A **schedule** interleaves the operations of transactions, keeping each transaction's order. A **serial** schedule runs one transaction at a time. A schedule is **serializable** if it is equivalent to some serial schedule.

Two operations **conflict** if they belong to different transactions, access the same item and at least one is a write (read-write, write-read, write-write). **Conflict serializability** test: build the **precedence graph** with an edge Ti → Tj if an operation of Ti conflicts with a later operation of Tj. The schedule is conflict-serializable if and only if the graph is **acyclic**; a topological order gives an equivalent serial order.

Example S1: r1(A) w1(A) r2(A) w2(A) r1(B) w1(B) r2(B) w2(B). All conflicts go from T1 to T2, so the graph is just T1 → T2 and S1 is equivalent to the serial order T1, T2.

Example S2 (lost update): r1(A) r2(A) w1(A) w2(A). r1(A) before w2(A) gives T1 → T2; r2(A) before w1(A) gives T2 → T1: a **cycle**, so S2 is not conflict-serializable.

Example S3: w1(A) r2(A) w2(B) r1(B). w1(A) before r2(A): T1 → T2; w2(B) before r1(B): T2 → T1: a cycle, so not serializable.

A schedule is **recoverable** if a transaction commits only after every transaction whose writes it read has committed; it is **cascadeless** if transactions read only committed data.

## 5.4 Two-phase locking (2PL)
Locks: **shared (S)** for reading, **exclusive (X)** for writing. Compatibility: S with S is allowed; any pair involving X conflicts. **2PL**: each transaction has a **growing** phase (acquires locks) and then a **shrinking** phase (releases locks, never acquires again). 2PL guarantees conflict-serializability. **Strict 2PL** holds all X locks until commit, which also gives cascadeless schedules and is what most systems use.

**Deadlock**: T1 holds a lock on A and waits for B while T2 holds B and waits for A. Handling:
- **Detection**: build a **wait-for graph** (edge Ti → Tj if Ti waits for Tj); a cycle means a deadlock; abort a victim.
- **Prevention** with timestamps: **wait-die** (an older transaction waits for a younger; a younger requesting from an older aborts) or **wound-wait**.
- **Timeouts**.

**Lock granularity**: row, page, table, with intention locks (IS, IX) to coordinate them. A **predicate** or range lock is needed to prevent phantoms.

## 5.5 Isolation levels (SQL standard)
- **READ UNCOMMITTED**: dirty reads possible.
- **READ COMMITTED**: no dirty reads; non-repeatable reads and phantoms possible (the default in PostgreSQL and Oracle).
- **REPEATABLE READ**: no dirty or non-repeatable reads; phantoms possible by the standard (MySQL InnoDB default).
- **SERIALIZABLE**: no anomalies.

**MVCC (multi-version concurrency control)**: writers create new versions, readers read a consistent snapshot without blocking writers. **Snapshot isolation** prevents lost updates and most anomalies but permits write skew. PostgreSQL's SERIALIZABLE uses serializable snapshot isolation (SSI) to detect it.

**What PostgreSQL really does** (tested on PostgreSQL 17 with concurrent sessions): READ UNCOMMITTED is treated as READ COMMITTED (no dirty reads at any level); the default is READ COMMITTED; REPEATABLE READ is snapshot isolation, so it also prevents phantoms and aborts a transaction that updates a row changed since its snapshot (error "could not serialize access due to concurrent update", which the application must retry); only SERIALIZABLE prevents write skew (it aborts one of the two transactions). Deadlocks are detected automatically: one transaction receives "deadlock detected" and is rolled back while the other proceeds.

**Optimistic concurrency control**: execute without locks, validate at commit time; good when conflicts are rare.

# Chapter 6: Recovery

## 6.1 Failure types
Transaction failure (abort), system crash (memory lost, disk intact), media failure (disk lost; recover from backups plus logs).

## 6.2 Write-ahead logging (WAL)
Keep a sequential **log** of records <T, item, old value, new value>, <T commit>, <T abort> on stable storage. **Rule: the log record must reach disk before the data page it describes (WAL), and all log records of a transaction before its commit record.** Data pages can be written lazily (**no-force**) and uncommitted changes may reach disk (**steal**); WAL makes both safe. After a crash:
- **Redo** the updates of committed transactions (to ensure durability).
- **Undo** the updates of uncommitted transactions (to ensure atomicity).

**Checkpoints** limit how far back the log must be scanned. **ARIES** performs three passes: analysis (find dirty pages and active transactions), redo (repeat history from the oldest needed log record) and undo (roll back losers, writing compensation log records).

Example. Log: <T1 start>, <T1, A, 10, 20>, <T2 start>, <T2, B, 5, 8>, <T1 commit>, <crash>. After the crash: T1 is committed, so redo A = 20; T2 is not committed, so undo B back to 5.

# Chapter 7: Storage and Indexing

## 7.1 Storage
Data is stored in fixed-size **blocks (pages)**, typically 4 KB to 16 KB, and the cost of a query is dominated by the number of block transfers (I/O). A table is a **heap file** (unordered) or sorted or clustered on a key. With 100-byte records and 4096-byte blocks, 40 records fit in a block, so a table of 10,000,000 records needs 10^7/40 = **250,000 blocks**; a full scan reads all of them.

## 7.2 Indexes
An **index** on a search key maps key values to record locations.
- **Primary (clustering) index**: the file is sorted on the key. **Secondary index**: on a non-ordering attribute (dense: one entry per record).
- **Dense** index: an entry for every key value; **sparse**: an entry per block.

## 7.3 B+ trees
The dominant index structure. Balanced tree where all leaves are at the same depth, leaves are linked for range scans and each node (except the root) is at least half full. For a node with up to n pointers:
- Internal nodes have between ceil(n/2) and n children; leaves hold between ceil((n-1)/2) and n - 1 keys.
- Height is about log_{n/2}(N) at worst.

Example. Block 4096 bytes, key 8 bytes, pointer 8 bytes: the largest n with 8n + 8(n - 1) <= 4096 is **n = 256** (it uses 4088 bytes). A node holds up to 255 keys, and at least 128 pointers (internal) or 128 keys (leaf).
For N = 10,000,000 records:
- Best case (full nodes): 10^7/255 = 39,216 leaves; above: 154 nodes; above: the root. **Height 3**.
- Worst case (half-full): at most 78,125 leaves; at most 611 nodes; at most 5; then the root: **height 4**.
A point lookup costs height + 1 block reads (the data block), i.e. 4 or 5, against 250,000 for a scan.

**Measured on PostgreSQL 17** (8192-byte pages, a table of 1,000,000 rows): the heap occupies 9,408 pages and an equality search without an index scans all of them (about 3 parallel workers touched 9,408 buffers); after `CREATE INDEX` the same query read **4 buffers** (3 index pages plus 1 heap page), because the index metadata (`bt_metap` from the pageinspect extension) reports a root level of 2, i.e. a tree of 3 levels. This matches the height + 1 formula. The planner ignored an index on a column with two distinct values (flag): it used a bitmap scan touching 9,346 of the 9,408 heap pages (almost the whole table), and it used a sequential scan for `WHERE upper(name) = 'ABC'` until an index on `upper(name)` was created. A range query reads the leaf level sequentially.

Operations: **search** follows pointers down; **insert** places the key in the leaf and, if the leaf overflows, **splits** it and pushes the middle key up (splits may cascade to the root, increasing the height); **delete** removes the key and, if the node underflows, **borrows from a sibling or merges**.

## 7.4 Hashing
Static hashing: bucket = h(key) mod B; equality search in about 1 I/O; no range queries. Example h(k) = k mod 7 for keys 15, 22, 8, 37, 29, 14 gives buckets 1, 1, 1, 2, 1, 0: bucket 1 is crowded (overflow chain). **Extendible and linear hashing** grow the directory dynamically. Use B+ trees by default; hash indexes for pure equality lookups.

## 7.5 Choosing indexes
Index the columns used in WHERE, JOIN and ORDER BY with selective predicates, and foreign keys. Every index slows writes and uses space. Composite index (a, b) helps filters on a or on a and b but not on b alone. Check the plan with EXPLAIN.

# Chapter 8: Query Processing and Optimisation

## 8.1 Pipeline
SQL text is parsed, converted to a relational-algebra tree, rewritten (heuristics: push selections and projections down, avoid Cartesian products), optimised using a cost model with statistics (table sizes, distinct values, histograms) to choose the join order and algorithms, then executed.

## 8.2 Join algorithms
Let R and S occupy b_R and b_S blocks and let M be the number of buffer blocks.
- **Nested-loop join** (tuple at a time): the worst; b_R + n_R × b_S transfers.
- **Block nested-loop join**: read R in chunks of M - 2 blocks and scan S for each chunk: b_R + ceil(b_R/(M - 2)) × b_S. Put the **smaller** relation as the outer one.
- **Index nested-loop join**: for each tuple of R use an index on S's join column.
- **Sort-merge join**: sort both on the join key, merge: cost of sorting plus b_R + b_S.
- **Hash join**: partition both by a hash of the key, then join the matching partitions: about 3 (b_R + b_S) transfers.

Example: b_R = 500, b_S = 100, M = 12 (so 10 blocks per chunk). With S as the outer: 100 + ceil(100/10) × 500 = **5100**. With R as the outer: 500 + ceil(500/10) × 100 = **5500**. The smaller outer wins.

## 8.3 External sorting
With M buffer blocks and a file of b blocks: pass 0 creates ceil(b/M) sorted runs; each later pass merges M - 1 runs. Total transfers = 2b (ceil(log_{M-1}(b/M)) + 1). Example: b = 1000, M = 11: 91 runs, merge passes ceil(log_10 91) = 2, so 2 × 1000 × 3 = **6000** block transfers.

## 8.4 Reading a plan
`EXPLAIN` shows the plan: table scans, index lookups, join algorithms, estimated rows and cost. Common tuning moves: add a missing index, rewrite correlated subqueries as joins, avoid functions on indexed columns in WHERE (the index cannot be used), select only needed columns, and update statistics.

# Chapter 9: Beyond the Relational Model

## 9.1 NoSQL families
- **Key-value** stores (Redis, DynamoDB): simple, fast, horizontally scalable.
- **Document** stores (MongoDB): JSON documents, flexible schema.
- **Column-family** (Cassandra, HBase): wide rows, high write throughput.
- **Graph** databases (Neo4j): relationships first-class; traversal queries.

## 9.2 Distributed concerns
**CAP theorem**: in the presence of a network partition a distributed system must choose between **consistency** and **availability**. Many NoSQL systems provide **eventual consistency** (BASE: basically available, soft state, eventually consistent). **Replication** (leader-follower) improves reads and availability; **sharding** (partitioning) improves capacity. Distributed transactions use **two-phase commit** (a prepare phase where each participant votes, then a commit phase), which can block if the coordinator fails.

## 9.3 Choosing
Use a relational database when data is structured, relationships matter and correctness (ACID) is critical (most business systems). Consider other models when scale, access patterns or flexibility require it. Many systems use several (polyglot persistence).

## Quick reference
- Closure algorithm, key: X is a key if X+ = R and no proper subset has this property.
- 3NF: X → A with X a superkey or A prime. BCNF: X always a superkey.
- Conflict serializable if and only if the precedence graph is acyclic. Strict 2PL gives serializability and cascadeless schedules.
- B+ tree fan-out: n = floor((block + key)/(key + pointer)); lookup = height + 1 reads.
- Block nested-loop cost: b_outer + ceil(b_outer/(M - 2)) × b_inner.
- Sort cost: 2b (ceil(log_{M-1}(b/M)) + 1).
