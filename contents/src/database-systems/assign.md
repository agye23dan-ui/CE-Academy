# Database Systems: Assignments

Three assignments, seven questions each (21 in all), with complete solutions at the end of each assignment. Questions in Assignment 1 use the university registry defined in the lecture notes (student, course, enrol); you can recreate it in SQLite or PostgreSQL and run every query yourself. Always state assumptions and show how you derived the answers.

# Assignment 1: Relational Algebra and SQL (Chapters 1 to 3)

**Q1. Relational algebra.** Using the registry, write algebra expressions and give the results for: (a) the names of CE students in year 2 or later [3]; (b) the names of students who took CE202 but not CE201 [3]; (c) the sids of students who took both CE201 and CE202 [2]; (d) the cardinality of student × course and of student ⋈ enrol [2].

**Q2. Reading SQL.** Give the exact result of each query: (a) `SELECT dept, COUNT(*) FROM student GROUP BY dept ORDER BY dept;` [2] (b) `SELECT DISTINCT name FROM student JOIN enrol USING (sid) WHERE dept = 'CE' AND grade >= 70 ORDER BY name;` [3] (c) `SELECT COUNT(*) FROM student s LEFT JOIN enrol e ON s.sid = e.sid AND e.cid = 'CE202';` and the same with the condition moved to WHERE [3] (d) `SELECT cid, COUNT(*) FROM enrol WHERE grade >= 60 GROUP BY cid HAVING COUNT(*) >= 2 ORDER BY cid;` [2]

**Q3. Joins and aggregates.** Write and evaluate queries for: (a) every student with their number of enrolments, including those with none, ordered by count descending then name [3]; (b) for each course, the number of enrolments, the average and the top grade, including empty courses [3]; (c) the names and total credits of courses passed (grade at least 60) by each student, largest total first [4].

**Q4. Subqueries and NULL.** (a) Names of students who did not take CE202, using NOT EXISTS [3]. (b) Names of students with at least three enrolments, using a scalar subquery [2]. (c) Courses in which nobody scored below 60 [2]. (d) Let t = {1, 2, NULL} and u = {2, NULL}. Evaluate `SELECT a FROM t WHERE a NOT IN (SELECT a FROM u)` and the NOT EXISTS version and explain [3].

**Q5. Schema definition.** A library holds books, members and loans. A book has an ISBN, title and a number of copies; a member has an id, name and email (unique); a loan records which member borrowed which book on which date and when it was returned (NULL if not yet returned). (a) Write CREATE TABLE statements with keys, foreign keys and constraints [6]. (b) Write a query listing members with overdue loans (borrowed more than 14 days before 2025-06-30 and not returned) [2]. (c) Write an index you would create and explain why [2].

**Q6. Window functions and CASE.** (a) For course MA101 list each student's grade with its rank, highest first [3]. (b) For MA101 show each grade's deviation from the course average [3]. (c) Convert the CE201 grades into letters (A at least 80, B at least 70, C at least 60, otherwise F) [2]. (d) Which pairs of students share CE201? [2]

**Q7. Programming with SQL.** (a) Write a Python function using sqlite3 that returns the average grade of a given student, using a parameterised query [4]. (b) Show how string concatenation lets an attacker obtain all students, and why placeholders prevent it [3]. (c) Write a transaction that moves a student from CE201 to CE202 keeping their grade of 78 and explain what happens if the second statement fails [3].

## Solutions to Assignment 1

**Q1.**
(a) π_name(σ_{dept='CE' ∧ year>=2}(student)) = **{Ama, Kofi, Yaw, Nii}** (years 2, 3, 2, 3).
(b) π_name(student ⋈ σ_{cid='CE202'}(enrol)) - π_name(student ⋈ σ_{cid='CE201'}(enrol)): CE202 has {Ama, Yaw, Nii}, CE201 has {Ama, Kofi, Yaw}, so the difference is **{Nii}**. (Expressed on sids: π_sid(σ_{cid='CE202'}) - π_sid(σ_{cid='CE201'}) = {8}.)
(c) π_sid(σ_{cid='CE201'}(enrol)) ∩ π_sid(σ_{cid='CE202'}(enrol)) = {1, 2, 4} ∩ {1, 4, 8} = **{1, 4}**.
(d) |student × course| = 8 × 6 = **48**; student ⋈ enrol has one tuple per enrolment: **16**.

**Q2.**
(a) Step 1: group the 8 students by dept: CE = {Ama, Kofi, Yaw, Akua, Nii} (5), EE = {Esi, Kwame} (2), ME = {Abena} (1).
Step 2: ORDER BY dept gives (CE, 5), (EE, 2), (ME, 1).
(b) Step 1: join student and enrol, keep dept = 'CE' and grade >= 70: Ama CE201 78, Ama CE202 85, Ama MA101 70, Kofi CE301 72, Nii CE301 77, Akua MA101 88 (Kofi's CE201 64 and Yaw's grades 55, 61, 49 fail the test).
Step 2: DISTINCT name, ordered: **Akua, Ama, Kofi, Nii**.
(c) With the condition in the ON clause the left join keeps every student: **8** rows (Ama, Yaw and Nii get their CE202 row, the other five get NULLs). Moving the condition to WHERE discards the NULL rows: **3** rows. This shows the difference between ON and WHERE in outer joins.
(d) Step 1: keep enrolments with grade >= 60 (11 of the 16 rows) and count per course: CE201: 78, 64 → 2; CE202: 85, 61, 69 → 3; CE301: 72, 77 → 2; EE210: 90, 81 → 2; MA101: 70, 66, 74, 88 → 4; ME120: none.
Step 2: HAVING COUNT(*) >= 2 keeps all of these: (CE201, 2), (CE202, 3), (CE301, 2), (EE210, 2), (MA101, 4).

**Q3.**
(a)
```sql
SELECT s.name, COUNT(e.cid) AS n
FROM student s LEFT JOIN enrol e ON e.sid = s.sid
GROUP BY s.sid ORDER BY n DESC, s.name;
```
Step 1: enrolments per student: Ama 3 (CE201, CE202, MA101), Yaw 3 (CE201, CE202, MA101), Kofi 2, Esi 2, Abena 2, Nii 2, Akua 1, Kwame 1 (the left join keeps students with none, but every student has at least one).
Step 2: ORDER BY n DESC, name: Ama 3, Yaw 3, Abena 2, Esi 2, Kofi 2, Nii 2, Akua 1, Kwame 1.
(b)
```sql
SELECT c.cid, COUNT(e.sid) AS n, ROUND(AVG(e.grade),1) AS avg_g, MAX(e.grade) AS top
FROM course c LEFT JOIN enrol e ON e.cid = c.cid GROUP BY c.cid ORDER BY c.cid;
```
Step 1: sum and count per course: CE201: 78 + 64 + 55 = 197 over 3; CE202: 85 + 61 + 69 = 215 over 3; CE301: 72 + 77 = 149 over 2; EE210: 90 + 81 = 171 over 2; MA101: 70 + 66 + 49 + 74 + 88 = 347 over 5; ME120: 58 over 1.
Step 2: averages: 197/3 = 65.7; 215/3 = 71.7; 149/2 = 74.5; 171/2 = 85.5; 347/5 = 69.4; 58/1 = 58.0.
Result: CE201 (3, 65.7, 78), CE202 (3, 71.7, 85), CE301 (2, 74.5, 77), EE210 (2, 85.5, 90), MA101 (5, 69.4, 88), ME120 (1, 58.0, 58).
(c)
```sql
SELECT s.name, SUM(c.credits) AS credits
FROM student s JOIN enrol e ON s.sid = e.sid JOIN course c ON c.cid = e.cid
WHERE e.grade >= 60 GROUP BY s.sid ORDER BY credits DESC, s.name;
```
Step 1: passed enrolments (grade ≥ 60) with credits: Ama CE201 (3) + CE202 (3) + MA101 (4) = 10; Esi EE210 (4) + MA101 (4) = 8; Kofi CE201 (3) + CE301 (3) = 6; Nii CE202 (3) + CE301 (3) = 6; Abena MA101 (4) = 4; Akua MA101 (4) = 4; Kwame EE210 (4) = 4; Yaw CE202 (3) = 3 (his CE201 grade 55 and MA101 grade 49 fail; he also has CE202 with 61).
Step 2: ORDER BY credits DESC, name.
Result: Ama 10, Esi 8, Kofi 6, Nii 6, Abena 4, Akua 4, Kwame 4, Yaw 3.

**Q4.**
(a)
```sql
SELECT name FROM student s
WHERE NOT EXISTS (SELECT 1 FROM enrol e WHERE e.sid = s.sid AND e.cid = 'CE202');
```
Step 1: students with a CE202 enrolment: Ama (1), Yaw (4), Nii (8).
Step 2: NOT EXISTS keeps the other five. Result: Kofi, Esi, Abena, Kwame, Akua.
(b)
```sql
SELECT s.name FROM student s
WHERE (SELECT COUNT(*) FROM enrol e WHERE e.sid = s.sid) >= 3;
```
Step 1: counts of enrolments: Ama 3, Kofi 2, Esi 2, Yaw 3, Abena 2, Kwame 1, Akua 1, Nii 2.
Step 2: keep count >= 3. Result: Ama, Yaw.
(c)
```sql
SELECT c.title FROM course c
WHERE NOT EXISTS (SELECT 1 FROM enrol e WHERE e.cid = c.cid AND e.grade < 60);
```
Step 1: grades below 60 exist in CE201 (Yaw 55), MA101 (Yaw 49) and ME120 (Abena 58).
Step 2: the other courses have no enrolment below 60: CE202 (85, 61, 69), CE301 (72, 77), EE210 (90, 81).
Result: Databases, Circuits, Operating Systems (the order is not defined without an ORDER BY).
(d) `NOT IN` returns **no rows**: for a = 1, `1 NOT IN (2, NULL)` is `1 <> 2 AND 1 <> NULL` = TRUE AND UNKNOWN = UNKNOWN, which is not TRUE; a = 2 is in the set; a = NULL gives UNKNOWN. `NOT EXISTS` returns **{1, NULL}** because the correlated test `u.a = t.a` finds no match for either. Use NOT EXISTS (or filter the NULLs) when the subquery can return NULL.

**Q5.**
(a)
```sql
CREATE TABLE book (
  isbn   TEXT PRIMARY KEY,
  title  TEXT NOT NULL,
  copies INTEGER NOT NULL CHECK (copies >= 0)
);
CREATE TABLE member (
  mid   INTEGER PRIMARY KEY,
  name  TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);
CREATE TABLE loan (
  mid       INTEGER NOT NULL REFERENCES member(mid),
  isbn      TEXT    NOT NULL REFERENCES book(isbn),
  loan_date DATE    NOT NULL,
  return_date DATE,
  PRIMARY KEY (mid, isbn, loan_date),
  CHECK (return_date IS NULL OR return_date >= loan_date)
);
```
The key includes the loan date so a member can borrow the same book again later.
(b)
```sql
SELECT DISTINCT m.name FROM member m JOIN loan l ON l.mid = m.mid
WHERE l.return_date IS NULL AND l.loan_date < DATE '2025-06-30' - 14;
```
This is PostgreSQL syntax (date minus an integer number of days) and was run on PostgreSQL 17. In SQLite, which stores dates as text, write `date('2025-06-30', '-14 days')` instead. Declaring the columns as DATE (not TEXT) matters: PostgreSQL rejects comparing a TEXT column with a date.
(c) `CREATE INDEX idx_loan_open ON loan(return_date, loan_date);` (or a partial index on rows with return_date IS NULL): queries for overdue loans filter on those columns, and an index avoids scanning the whole loan table. A foreign-key index on loan(isbn) also speeds the join from book to loans.

**Q6.**
(a)
```sql
SELECT name, grade, RANK() OVER (ORDER BY grade DESC) AS r
FROM student JOIN enrol USING (sid) WHERE cid = 'MA101';
```
Result: Akua 88 (1), Abena 74 (2), Ama 70 (3), Esi 66 (4), Yaw 49 (5).
(b) Step 1: the average MA101 grade is (70 + 66 + 49 + 74 + 88)/5 = 347/5 = 69.4.
Step 2: deviations: Akua 88 - 69.4 = +18.6; Abena 74 - 69.4 = +4.6; Ama 70 - 69.4 = +0.6; Esi 66 - 69.4 = -3.4; Yaw 49 - 69.4 = -20.4 (query: `grade - AVG(grade) OVER (PARTITION BY cid)`).
(c) CE201 grades: Ama 78 ≥ 70 and < 80: B; Kofi 64 ≥ 60 and < 70: C; Yaw 55 < 60: F.
(d) Step 1: the CE201 students are sids 1, 2 and 4 (Ama, Kofi, Yaw).
Step 2: a self join with e1.sid < e2.sid lists each pair once: (Ama, Kofi), (Ama, Yaw), (Kofi, Yaw), i.e. sids (1, 2), (1, 4), (2, 4).

**Q7.**
(a)
```python
import sqlite3

def average_grade(con, sid):
    cur = con.execute("SELECT AVG(grade) FROM enrol WHERE sid = ?", (sid,))
    return cur.fetchone()[0]
```
For sid 1 the grades are 78, 85, 70: AVG = (78 + 85 + 70)/3 = 233/3 = 77.67.
(b) With `"SELECT * FROM student WHERE name = '" + name + "'"` and name = `x' OR '1'='1`, the statement becomes `... WHERE name = 'x' OR '1'='1'` which is true for every row, so all students are returned (and a `; DROP TABLE` style payload could do worse in systems that permit multiple statements). With a placeholder the whole string is bound as a **value**, never parsed as SQL, so it just matches nobody.
(c)
```sql
BEGIN;
DELETE FROM enrol WHERE sid = 1 AND cid = 'CE201';
INSERT INTO enrol (sid, cid, grade) VALUES (1, 'CE202', 78);
COMMIT;
```
Ama already has a CE202 enrolment (85), so the INSERT violates the primary key and fails. The application must issue ROLLBACK, which restores the deleted CE201 row (atomicity); otherwise the transaction leaves the student with no CE201 enrolment and no new one. (Choosing a student without CE202 would succeed.) Note for PostgreSQL: after any error inside a transaction block the transaction is marked aborted and every further statement is refused until the block ends; a COMMIT at that point silently performs a ROLLBACK (tested on PostgreSQL 17: the CE201 row was still present afterwards). Other systems let you continue after the error.

# Assignment 2: Database Design (Chapters 2 and 4)

**Q1. ER to tables.** A clinic has doctors (id, name, specialty), patients (id, name, date of birth, several phone numbers) and appointments: a patient may see many doctors and a doctor many patients, and each appointment has a date, time and diagnosis. Each doctor belongs to exactly one department (name, building) and a department has many doctors. (a) Identify the entities, relationships, cardinalities and the multivalued attribute [3]. (b) Give the relational schema with primary and foreign keys [5]. (c) Where would you record the "head of department"? [2]

**Q2. Closures.** R(A, B, C, D, E), F = {A → B, BC → D, D → E}. (a) Compute A+, BC+, AC+ and D+ [4]. (b) Find all candidate keys and justify [3]. (c) Does AC → E follow from F? Does BC → E? [3]

**Q3. Keys.** R(A, B, C, D), F = {AB → C, C → D, D → A}. Find all candidate keys and the prime attributes [10].

**Q4. Normal forms.** State the highest normal form (1NF, 2NF, 3NF, BCNF) of each relation and justify: (a) R(A, B, C), F = {A → B, B → C} [2]. (b) R(A, B, C, D), F = {AB → C, C → D, D → A} [3]. (c) R(City, Street, Zip), F = {City Street → Zip, Zip → City} [3]. (d) R(S, C, N, T, G) with F = {S → N, C → T, SC → G} [2].

**Q5. BCNF decomposition.** Decompose R(A, B, C, D, E) with F = {A → B, BC → D, D → E} into BCNF. Show each step, verify losslessness and say which dependencies are lost [10].

**Q6. 3NF synthesis.** For the same R and F: (a) give a minimal cover [3]; (b) synthesise a 3NF decomposition [4]; (c) is it in BCNF? Is it dependency-preserving? [3]

**Q7. Minimal cover and lossless join.** (a) Find a minimal cover of F = {A → BC, B → C, A → B, AB → C} [4]. (b) For R(A, B, C) with A → B and B → C, decide whether the decompositions {AB, BC}, {AB, AC} and {AC, BC} are lossless; give a counterexample instance for the lossy one [6].

## Solutions to Assignment 2

**Q1.**
(a) Entities: Doctor, Patient, Department. Relationships: Appointment (M:N between Patient and Doctor, with attributes date, time, diagnosis) and WorksIn (N:1 from Doctor to Department; total participation of Doctor). The multivalued attribute is Patient.phone.
(b)
```
Department(dept_name PK, building)
Doctor(doc_id PK, name, specialty, dept_name FK -> Department)
Patient(pat_id PK, name, date_of_birth)
PatientPhone(pat_id FK -> Patient, phone, PK(pat_id, phone))
Appointment(pat_id FK, doc_id FK, appt_date, appt_time, diagnosis,
            PK(pat_id, doc_id, appt_date, appt_time))
```
(c) Add a nullable foreign key `head_doc_id` in Department referencing Doctor (a 1:1 relationship), with a constraint that the head belongs to that department. (Circular foreign keys need the column to be nullable or the constraint to be deferred.)

**Q2.**
(a) Closure: repeat "if the left side is in the set, add the right side" until nothing changes.
A+ : start {A}; A → B adds B; nothing else applies (BC needs C, D needs D): **{A, B}**.
BC+ : start {B, C}; BC → D adds D; D → E adds E: **{B, C, D, E}**.
AC+ : start {A, C}; A → B adds B; BC → D adds D; D → E adds E: **{A, B, C, D, E}**.
D+ : start {D}; D → E adds E: **{D, E}**.
(b) Step 1: A and C never appear on a right-hand side, so they belong to every key.
Step 2: AC+ = R, so AC is a key; nothing smaller works because A+ = {A, B} and C+ = {C} are not all of R.
Step 3: **AC is the only candidate key** (any key must contain AC).
(c) AC → E follows: E is in AC+. BC → E also follows because E is in BC+ = {B, C, D, E}.

Step 1: B appears on no right-hand side, so B is in every key.
Step 2: closures: B+ = {B} (no FD applies). AB+: AB → C adds C; C → D adds D; D → A (already there): {A, B, C, D}, a key. BC+: C → D adds D; D → A adds A; {A, B, C, D}: a key. BD+: D → A adds A; AB → C adds C: {A, B, C, D}: a key. CD+ = {C, D, A} (no B): not a key. AD+ = {A, D}: not a key.
Step 3: the **candidate keys are AB, BC and BD** (all minimal, since B alone is not a key), and every attribute (A, B, C, D) is prime.

**Q4.**
(a) Key: A (A+ = ABC). B → C: B is not a superkey and C is not prime, so 3NF fails. No partial dependency (the key is a single attribute), so the relation is in **2NF** only.
(b) Keys AB, BC, BD (Q3), all attributes prime. Every FD satisfies the 3NF condition (the right-hand side is prime), so it is in **3NF**. C → D has a non-superkey left side, so it is **not in BCNF**.
(c) The keys are (City, Street) and (Street, Zip). Zip → City: Zip is not a superkey but City is prime, so **3NF**, and not BCNF.
(d) The only key is SC. S → N and C → T are partial dependencies on a part of the key, so the relation violates 2NF: it is in **1NF** only.

**Q5.**
Key: AC. Violations: A → B (A is not a superkey) and D → E; BC → D has BC as a non-superkey too.
Step 1: split on A → B. A+ = {A, B}. R1(A, B) and R2 = R - (A+ - A) = (A, C, D, E).
Step 2: in R2 the FDs that survive projection are AC → D (derived through A → B and BC → D), D → E and so on. D → E violates BCNF (D+ = {D, E} is not a superkey of R2). Split: R21(D, E) and R22(A, C, D).
Step 3: R22(A, C, D) has the key AC with AC → D, so it is in BCNF; R1(A, B) with A → B and R21(D, E) with D → E are in BCNF.
**Result: (A, B), (D, E), (A, C, D).** Lossless: each split had the common attributes as a key of one part (A in R1; D in R21). Lost dependency: **BC → D** (F' = {A → B, D → E, AC → D} gives BC+ = {B, C}).

**Q6.**
(a) The right sides are single attributes already; no left side is reducible (BC → D: neither B+ = B nor C+ = C yields D); no FD is redundant. The minimal cover is **F itself**: {A → B, BC → D, D → E}.
(b) One relation per FD: R1(A, B), R2(B, C, D), R3(D, E). None contains the key AC, so add R4(A, C). **Result: (A, B), (B, C, D), (D, E), (A, C).**
(c) Each relation is in BCNF (R2 has the key BC, because BC → D, and in R2 the only FD is BC → D). It is dependency-preserving (every FD sits inside a relation) and lossless (a key relation is included). Here 3NF synthesis gives a better outcome than the BCNF decomposition of Q5.

**Q7.**
(a) Split: A → B, A → C, B → C, A → B, AB → C. Remove the duplicate A → B. AB → C: B → C gives C from B alone, so A is extraneous and AB → C reduces to B → C (a duplicate). A → C is redundant because A → B and B → C imply it. The minimal cover is **{A → B, B → C}**.
(b) {AB, BC}: the common attribute B is a key of BC (B → C), so it is **lossless**. {AB, AC}: the common attribute A is a key of AB (A → B), so it is **lossless**. {AC, BC}: the common attribute C is a key of neither (C+ = {C}), so it is **lossy**. Counterexample: R = {(a1, b1, c1), (a2, b2, c1)} satisfies the FDs. π_AC = {(a1, c1), (a2, c1)} and π_BC = {(b1, c1), (b2, c1)}; their join has 4 tuples, including the spurious (a1, b2, c1) and (a2, b1, c1).

# Assignment 3: Transactions, Recovery, Indexing and Query Processing (Chapters 5 to 8)

**Q1. Serializability.** For each schedule draw the precedence graph, decide conflict-serializability and give an equivalent serial order if one exists: (a) S1: r1(A) w1(A) r2(A) w2(A) r1(B) w1(B) r2(B) w2(B) [2]. (b) S2: r1(A) r2(A) w1(A) w2(A) [2]. (c) S3: w1(A) r2(A) w2(B) r1(B) [2]. (d) S4: r2(B) r1(A) w2(B) r3(B) w1(A) w3(A) r2(A) w3(B) [4].

**Q2. Locking.** T1: read A, then write B. T2: read B, then write A. (a) Write a strict-2PL interleaving that deadlocks, draw the wait-for graph and show how a victim is chosen [5]. (b) Show a schedule that is serializable but cannot be produced by 2PL, or explain why 2PL needs more waiting than necessary [2]. (c) Explain wait-die with timestamps T1 = 5 and T2 = 9 for this conflict [3].

**Q3. Isolation.** (a) Define lost update, dirty read, non-repeatable read and phantom with a short example each [4]. (b) For each isolation level (READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE) state which of the three read anomalies the SQL standard allows [3]. (c) Explain write skew with the on-call doctors example and why snapshot isolation allows it [3]. (d) State how PostgreSQL 17 differs from the standard table in (b) [2].

**Q4. Recovery.** The log is: (1) <T1 start> (2) <T1, A, 10, 20> (3) <T2 start> (4) <T2, B, 5, 8> (5) <T1 commit> (6) <T3 start> (7) <T3, C, 7, 9> (8) <T2, B, 8, 12> (9) <T3 commit> (10) crash. (a) Which transactions are committed? [2] (b) State the redo and undo actions and the final values of A, B, C if the initial values are A = 10, B = 5, C = 7 [5] (c) Why must the log record be written before the data page, and what does a checkpoint do? [3]

**Q5. B+ trees.** (a) A block is 8192 bytes, a key 12 bytes and a pointer 8 bytes. Find the maximum n, the node capacities and the minimum and maximum height for 50 million keys [5]. (b) For n = 4 (at most 3 keys per node) insert 10, 20, 30, 40, 50, 60, 15, 25, 35 in order, drawing the tree after the key sets that cause splits [5].

**Q6. Choosing access paths.** A table of 2,000,000 records of 200 bytes lives in 8192-byte blocks. (a) How many blocks does a full scan read? [2] (b) A query selects the single record with a given id: compare a scan with a B+ tree lookup (height 3) [2] (c) Would you index a column with only two distinct values? Explain [2] (d) Explain why `WHERE UPPER(name) = 'AMA'` cannot use an index on name and how to fix it [2] (e) Compare B+ tree and hash indexes for range queries [2].

**Q7. Join and sort costs.** Relation R has 1200 blocks and S has 300 blocks; the buffer has M = 22 blocks. (a) Cost of block nested-loop join with each relation as the outer [4] (b) Cost of a hash join [2] (c) Cost of externally sorting a 5000-block file with 51 buffer blocks, and the number of passes [4].

## Solutions to Assignment 3

**Q1.**
(a) All conflicts go from T1 to T2 (the pairs on A and on B): the graph is T1 → T2, acyclic: **serializable, equivalent to T1, T2**.
(b) r1(A) < w2(A) gives T1 → T2; r2(A) < w1(A) gives T2 → T1: a cycle, **not serializable** (a lost update).
(c) w1(A) < r2(A) gives T1 → T2; w2(B) < r1(B) gives T2 → T1: a cycle, **not serializable**.
(d) T1: r1(A) w1(A); T2: r2(B) w2(B) r2(A); T3: r3(B) w3(A) w3(B). Conflicts: w1(A) before r2(A): T1 → T2; r1(A) and w1(A) before w3(A): T1 → T3; w2(B) before r3(B) and w3(B): T2 → T3; w3(A) before r2(A): T3 → T2. The edges T2 → T3 and T3 → T2 form a cycle, so the schedule is **not conflict-serializable**.

**Q2.**
(a) Interleaving: T1 S-lock(A), read A; T2 S-lock(B), read B; T1 requests X(B) and waits for T2; T2 requests X(A) and waits for T1. The wait-for graph T1 → T2 → T1 contains a cycle: **deadlock**. The system aborts one transaction as victim (usually the youngest or the one that has done the least work), releasing its locks; the other proceeds and the victim restarts.
(b) 2PL is conservative: it guarantees serializability but also forbids some serializable schedules (for example those where a transaction releases a lock early and acquires another lock later). So it may block more than strictly necessary.
(c) With wait-die, an older transaction (smaller timestamp) may wait for a younger one, while a younger transaction requesting a lock held by an older one **dies** (aborts and restarts with its original timestamp). T1 (5) is older than T2 (9). If T1 requests a lock held by T2, T1 waits. If T2 requests a lock held by T1, T2 aborts. A cycle of waits cannot form because waits go only from older to younger.

**Q3.**
(a) Step 1: **Lost update**: T1 and T2 both read A = 100; T1 writes 110; T2 writes 120; T1's update is lost.
Step 2: **Dirty read**: T1 writes A = 50 (uncommitted); T2 reads 50; T1 aborts; T2 used a value that never existed.
Step 3: **Non-repeatable read**: T1 reads A = 100; T2 updates A to 90 and commits; T1 reads again and gets 90.
Step 4: **Phantom**: T1 counts the rows with dept = 'CE' (5); T2 inserts a CE student and commits; T1 counts again (6).
(b) READ UNCOMMITTED: dirty reads, non-repeatable reads and phantoms are all possible. READ COMMITTED: non-repeatable reads and phantoms possible. REPEATABLE READ: only phantoms possible. SERIALIZABLE: none.
(c) Rule: at least one doctor must be on call. Both doctors start in a snapshot where two are on call; each checks "at least 2 on call", sets themselves off call and commits. They write different rows, so snapshot isolation sees no write-write conflict, and both commit: zero doctors on call, a state no serial execution could produce. SERIALIZABLE (SSI or locking) prevents it.
(d) Tested on PostgreSQL 17 with two concurrent sessions. **READ UNCOMMITTED behaves exactly like READ COMMITTED**: dirty reads are impossible at every level. **READ COMMITTED** (the default, confirmed with `SHOW default_transaction_isolation`) allows non-repeatable reads and phantoms (a count went 2 to 3). **REPEATABLE READ** is a snapshot: no non-repeatable reads and, unlike the standard, **no phantoms** either (the count stayed 2); a concurrent writer to the same row gets `could not serialize access due to concurrent update`, so lost updates are prevented by aborting the second transaction, and the application must retry. Write skew still happens at REPEATABLE READ (both transactions committed, 0 doctors on call). **SERIALIZABLE** aborted one of the two (1 doctor remained on call). With a single atomic statement `UPDATE acc SET bal = bal + 10`, two concurrent transactions at READ COMMITTED correctly gave 120, because the second waits for the first lock and re-reads the new value.

**Q4.**
(a) T1 and T3 are committed; T2 has no commit record.
(b) Step 1: committed: T1 and T3 (redo); uncommitted: T2 (undo).
Step 2: **Redo** (repeat the updates of committed transactions in log order): record 2: A = 20; record 7: C = 9.
Step 3: **Undo** the uncommitted T2 in reverse log order: record 8 restores B = 8 (its old value), then record 4 restores B = 5.
Final: **A = 20, B = 5, C = 9**.
(c) Write-ahead logging guarantees that the information to undo or redo an update is on disk before the page it changes can reach disk; without it a crash could leave a changed page with no record of how to undo it. A **checkpoint** forces the log and records the active transactions and dirty pages so that recovery need only scan the log from the last checkpoint rather than from the beginning.

**Q5.**
(a) Step 1: a node has n pointers and n - 1 keys: 8n + 12 (n - 1) ≤ 8192.
Step 2: 20n ≤ 8204, so n ≤ 410.2: **n = 410** (8 × 410 + 12 × 409 = 3280 + 4908 = 8188 bytes).
Step 3: an internal node has up to 410 children and 409 keys; the minimum is ⌈410/2⌉ = **205** children. A leaf holds up to **409** keys and at least ⌈409/2⌉ = **205** keys.
Step 4 (best case, all nodes full): leaves = 50,000,000/409 = 122,250 (rounded up); nodes above = 122,250/410 = 299 (rounded up); then one root (299 ≤ 410): 3 levels, **height 3**.
Step 5 (worst case, nodes half full): leaves = 50,000,000/205 = 243,903; the level above = 243,903/205 = 1190; the next = 1190/205 = 6; then the root: 4 levels, **height 4**.
(b) Leaf capacity 3 keys; a full leaf of 4 splits into two leaves of 2.
Step 1: 10, 20, 30 fill one leaf [10, 20, 30].
Step 2: insert 40: overflow [10, 20, 30, 40], split into [10, 20] and [30, 40], root [30].
Step 3: insert 50: leaf [30, 40, 50]. Insert 60: overflow, split into [30, 40] and [50, 60]; root [30, 50].
Step 4: insert 15: leaf [10, 15, 20]. Insert 25: overflow [10, 15, 20, 25], split into [10, 15] and [20, 25]; root [20, 30, 50].
Step 5: insert 35: goes to the leaf [30, 40] → [30, 35, 40].
**Final tree**: root [20, 30, 50]; leaves [10, 15], [20, 25], [30, 35, 40], [50, 60].

**Q6.**
(a) Step 1: records per block = ⌊8192/200⌋ = 40 (40 × 200 = 8000 bytes).
Step 2: blocks = 2,000,000/40 = **50,000 blocks**.
(b) A scan reads up to 50,000 blocks (about 25,000 on average if the record is present, found halfway); a B+ tree lookup reads 3 index blocks plus 1 data block = **4 blocks**.
(c) Generally no: a column with two values has poor selectivity (about half the table matches), so the index would return as many rows as a scan reads, with extra random I/O. (An exception: a skewed column where one value is rare and queries look for it; use a partial index.)
(d) The index is on name, but the predicate compares UPPER(name), a function of the column, so entries are not ordered by it. Fix: create a **function-based index** on UPPER(name), or store names case-normalised, or use a case-insensitive collation.
(e) A B+ tree keeps keys sorted and its leaves linked, so it supports range queries (find the first key, then scan leaves). A hash index scatters keys and supports equality only.

**Q7.**
(a) Block nested-loop join: cost = b_outer + ⌈b_outer/(M - 2)⌉ × b_inner, with M - 2 = 20 blocks per chunk.
Step 1: S as the outer: 300 + ⌈300/20⌉ × 1200 = 300 + 15 × 1200 = 300 + 18,000 = **18,300**.
Step 2: R as the outer: 1200 + ⌈1200/20⌉ × 300 = 1200 + 60 × 300 = 1200 + 18,000 = **19,200**. The smaller outer relation wins.
(b) Hash join (with enough memory to partition): 3 (b_R + b_S) = 3 (1200 + 300) = **4500** block transfers (read and write the partitions, then read them again): far cheaper.
(c) Step 1: runs after pass 0: ⌈5000/51⌉ = 99 runs (98.04 rounded up).
Step 2: each merge pass merges M - 1 = 50 runs: ⌈log_50 99⌉ = **2** merge passes (50 < 99 ≤ 2500).
Step 3: every pass (run formation plus 2 merge passes = 3 passes) reads and writes the whole file: cost = 2 × 5000 × 3 = **30,000** block transfers.
