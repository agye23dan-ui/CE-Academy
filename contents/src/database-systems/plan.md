# Database Systems: 14-Week Study Plan and Resources

Time budget: 8 to 10 hours per week (3 reading, 5 to 6 hands-on SQL and design work, 1 review with the app's quizzes). Install SQLite (it ships with Python) and PostgreSQL, and recreate the notes' university registry so that you can run every query yourself. Databases are learned by querying and designing real data sets.

## Textbooks
- Abraham Silberschatz, Henry Korth and S. Sudarshan, *Database System Concepts*. The standard university textbook (relational model, SQL, design, transactions, storage and indexing).
- Ramez Elmasri and Shamkant Navathe, *Fundamentals of Database Systems*.
- Raghu Ramakrishnan and Johannes Gehrke, *Database Management Systems* ("the Cow book"). Excellent on indexing, query processing and recovery.
- Hector Garcia-Molina, Jeffrey Ullman and Jennifer Widom, *Database Systems: The Complete Book*. Detailed design theory.
- Martin Kleppmann, *Designing Data-Intensive Applications*. The practical modern view (replication, partitioning, consistency).

## Free courses and tools
- CMU 15-445 Database Systems (Andy Pavlo; lectures and projects are free online); Stanford CS145 and the Stanford Online "Databases" course by Jennifer Widom.
- SQLite, PostgreSQL, DB Fiddle, SQLBolt and Mode's SQL tutorial for practice; the PostgreSQL documentation for EXPLAIN.
- Relational algebra and normalisation tools: RelaX (relational algebra calculator), and the many online closure and normal form checkers (use them to check your hand work, not to replace it).
- Datasets: Chinook, Northwind, the Sakila sample database, or the open data sets of your choice.

## Week by week

**Week 1: The relational model and relational algebra (Ch 1).** Do: Assignment 1 Q1. Install SQLite and PostgreSQL and create the registry database.

**Week 2: SQL basics: SELECT, WHERE, joins (Ch 3.1 to 3.4).** Do: Assignment 1 Q2, Q3 (a). Write the queries yourself before checking.

**Week 3: Aggregates, subqueries, NULL (Ch 3.5 to 3.7).** Do: Assignment 1 Q3, Q4. Reproduce the NOT IN trap.

**Week 4: Window functions, views, DDL and programmatic SQL (Ch 3.8, 3.9).** Do: Assignment 1 Q5, Q6, Q7. Sit the **Class Test** at the end of the week (Chapters 1 to 3 and the first look at design theory).

**Week 5: ER modelling and mapping to tables (Ch 2).** Do: Assignment 2 Q1. Design a schema for a small application of your own (a clinic, a library, a shop).

**Week 6: Functional dependencies and closure (Ch 4.1 to 4.2).** Do: Assignment 2 Q2, Q3. Write a Python function for attribute closure and candidate keys.

**Week 7: Normal forms and decomposition (Ch 4.3, 4.4).** Do: Assignment 2 Q4 to Q7. Mock midterm: first half of the Final Exam.

**Week 8: Transactions, ACID and anomalies (Ch 5.1, 5.2).** Do: Assignment 3 Q3. Reproduce a lost update and a non-repeatable read with two psql sessions.

**Week 9: Serializability and locking (Ch 5.3 to 5.5).** Do: Assignment 3 Q1, Q2. Provoke and observe a deadlock in PostgreSQL.

**Week 10: Recovery (Ch 6).** Do: Assignment 3 Q4. Read about write-ahead logging in the PostgreSQL documentation.

**Week 11: Storage and indexing, B+ trees (Ch 7).** Do: Assignment 3 Q5, Q6. Create indexes and compare EXPLAIN ANALYZE output before and after.

**Week 12: Query processing and optimisation (Ch 8).** Do: Assignment 3 Q7. Compare plans for equivalent queries (a join against a correlated subquery).

**Week 13: Distributed databases, NoSQL and a design project (Ch 9).** Build a small application (Python plus PostgreSQL or SQLite): ER diagram, normalised schema, indexes, transactions, parameterised queries and a short report that justifies the design.

**Week 14: Revision.** Redo missed Class Test and assignment questions, then sit the **Final Exam** under exam conditions (3 hours, formula sheet only).

## Milestone checklist
- [ ] I can write relational algebra expressions and translate them to SQL.
- [ ] I can write joins, aggregates, subqueries, window functions and views correctly, and I understand NULL semantics.
- [ ] I can map an ER diagram to tables with correct keys and constraints.
- [ ] I can compute attribute closures and candidate keys and identify the normal form of a relation.
- [ ] I can decompose a schema into 3NF and BCNF and check losslessness and dependency preservation.
- [ ] I can test schedules for conflict-serializability and explain 2PL, deadlocks and isolation levels.
- [ ] I can explain write-ahead logging and redo/undo recovery with a log.
- [ ] I can compute B+ tree fan-out and height and compare access paths and join costs.
- [ ] I can use a database safely from code (parameterised queries, transactions).
- [ ] I scored at least 70 percent on the Final Exam with a formula sheet only.

## Study habits that work
1. Always run the query: predict the result by hand, then execute it and explain any difference.
2. Design with data in mind: write five sample rows before deciding keys and constraints.
3. Normalise by computing closures, not by intuition; then denormalise only deliberately.
4. Use EXPLAIN before and after adding an index; never guess about performance.
5. Treat every user input as hostile: parameterised queries always.
