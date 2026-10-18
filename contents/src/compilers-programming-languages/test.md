# Compilers and Programming Languages: Class Test

Duration: 60 minutes. Calculator allowed, no notes. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Notation: eps is the empty string, $ marks end of input.

## Section A: Multiple choice (20 marks)

**1.** The output of lexical analysis is
A) a stream of tokens  B) machine code  C) a symbol table of types  D) a parse tree

**2.** Which language is not regular?
A) identifiers made of letters and digits  B) strings over {a, b} ending in abb  C) binary strings with an even number of 1s  D) strings of balanced parentheses

**3.** The Thompson construction converts
A) a regular expression to an NFA  B) an NFA to a DFA  C) a grammar to a parse table  D) a DFA to a minimal DFA

**4.** The subset construction converts
A) an AST to assembly  B) TAC to SSA  C) an NFA to a DFA  D) a CFG to an LL(1) table

**5.** The scanner rule "longest match" means the scanner
A) picks the shortest token  B) rejects long identifiers  C) takes the longest prefix of the input that matches some token  D) never backtracks

**6.** A grammar is ambiguous if
A) it is left recursive  B) some string has more than one parse tree  C) it has no start symbol  D) it has epsilon productions

**7.** Left recursion is a problem for
A) linkers  B) LR parsers  C) scanners  D) top-down (LL) parsers

**8.** FIRST(α) is
A) the set of terminals that can begin a string derived from α  B) the set of terminals that follow α  C) the first production of α  D) the length of α

**9.** In LL(1), the "1" means
A) one non-terminal  B) one pass over the source  C) one production per rule  D) one symbol of lookahead

**10.** An LR parser produces
A) a random derivation  B) a leftmost derivation  C) a rightmost derivation in reverse  D) no derivation

**11.** Yacc and bison generate
A) LALR(1) parsers  B) type checkers  C) LL(1) parsers  D) scanners

**12.** A shift/reduce conflict means
A) the stack is empty  B) the grammar is LL(1)  C) the scanner failed  D) both a shift and a reduce are possible in the same state and lookahead

**13.** Static type checking is performed
A) at compile time  B) by the linker  C) at run time only  D) by the operating system

**14.** Unification in Hindley-Milner inference
A) parses expressions  B) removes dead code  C) allocates registers  D) finds a substitution that makes two types equal

**15.** In static single assignment form
A) there are no jumps  B) each variable is assigned exactly once  C) every variable is global  D) no loops are allowed

**16.** A basic block is
A) a function  B) a loop  C) a straight-line sequence with one entry and one exit  D) a file

**17.** Strength reduction replaces
A) code by comments  B) an expensive operation by a cheaper one, such as x*8 by x<<3  C) loops by functions  D) a variable by a constant

**18.** Liveness analysis is a
A) backward data-flow analysis  B) type analysis  C) lexical analysis  D) forward analysis with intersection

**19.** Graph colouring is used mainly for
A) type inference  B) register allocation  C) parsing  D) linking

**20.** Pure reference counting fails to reclaim
A) cycles of objects that reference each other  B) constants  C) stack frames  D) integers

## Section B: Problems (40 marks)

**B1. Scanner (10 marks)** The DFA for (a|b)*abb has transitions 0 –a→ 1, 0 –b→ 2, 1 –a→ 1, 1 –b→ 3, 2 –a→ 1, 2 –b→ 2, 3 –a→ 1, 3 –b→ 4, 4 –a→ 1, 4 –b→ 2, start 0, accepting {4}. (a) Run it on abb, abab, aabb and bbabb, giving the state sequence and the verdict [6]. (b) List the tokens of `x = a1 + 20 * (b - 3);` and their number [3]. (c) Why do keywords need priority over identifiers? [1]

**B2. FIRST, FOLLOW, LL(1) (10 marks)** Grammar: E → T E'; E' → + T E' | eps; T → id | ( E ). (a) Compute FIRST and FOLLOW of E, E' and T [4]. (b) Build the LL(1) table entries for E' and T [3]. (c) Parse `id + id` showing the productions used [3].

**B3. SLR parsing (10 marks)** Grammar: L → L , a | a (augmented with L' → L). (a) Give the LR(0) item sets [4]. (b) Parse `a , a` showing the shift/reduce actions and the state stack [4]. (c) Why does this grammar use left recursion and why is that fine for an LR parser? [2]

**B4. Optimization and liveness (10 marks)** (a) Optimize: 1: a = 2 * 8; 2: b = x + a; 3: c = x + a; 4: d = b * 4; 5: e = c + d, with only e live at the end. Apply constant folding, CSE and strength reduction and give the final code [5]. (b) For the block 1: t = a + b; 2: u = t * c; 3: v = u - a with only v live at the end, compute the live set before each instruction and the live-in set of the block [5].

## Answer key and solutions

### Section A
1. A 2. D 3. A 4. C 5. C 6. B 7. D 8. A 9. D 10. C 11. A 12. D 13. A 14. D 15. B 16. C 17. B 18. A 19. B 20. A

### Section B

**B1.**
(a) abb: 0 → 1 → 3 → 4, **accepted**. abab: 0 → 1 → 3 → 1 → 3, ends in state 3, **rejected**. aabb: 0 → 1 → 1 → 3 → 4, **accepted**. bbabb: 0 → 2 → 2 → 1 → 3 → 4, **accepted** [6]. (Language: strings over {a, b} that end in abb.)
(b) `x`, `=`, `a1`, `+`, `20`, `*`, `(`, `b`, `-`, `3`, `)`, `;` → **12 tokens** [3].
(c) Because a keyword such as `if` also matches the identifier pattern; when two rules match the same lexeme the keyword rule listed first must win, while a longer lexeme such as `iffy` is still an identifier [1].

**B2.**
(a) FIRST(E) = FIRST(T) = { id, ( }; FIRST(E') = { +, eps }. FOLLOW(E) = { ), $ }; FOLLOW(E') = FOLLOW(E) = { ), $ }; FOLLOW(T) = { +, ), $ } [4].
(b) M[E', +] = E' → + T E'; M[E', )] = M[E', $] = E' → eps; M[T, id] = T → id; M[T, (] = T → ( E ). No cell has two entries, so the grammar is LL(1) [3].
(c) E → T E' (lookahead id); T → id; match id; E' → + T E' (lookahead +); match +; T → id; match id; E' → eps (lookahead $); match $: accept [3].

**B3.**
(a) I0: L' → · L, L → · L , a, L → · a. I1 = GOTO(I0, L): L' → L · , L → L · , a. I2 = GOTO(I0, a): L → a ·. I3 = GOTO(I1, ","): L → L , · a. I4 = GOTO(I3, a): L → L , a ·. **5 states** [4].
(b) FOLLOW(L) = { ",", $ }. shift a → [0, 2]; reduce L → a → [0, 1]; shift "," → [0, 1, 3]; shift a → [0, 1, 3, 4]; reduce L → L , a → [0, 1]; on $ accept [4].
(c) Left recursion makes the list left-associative and keeps the stack shallow (the stack does not grow with the list length). An LR parser decides on a reduce after seeing the entire right-hand side, so left recursion causes no problem (unlike in LL parsers, where it loops forever) [2].

**B4.**
(a) Constant folding: a = 16. Propagate: b = x + 16; c = x + 16. CSE: c = b. Strength reduction: d = b * 4 → b << 2. Final code [5]:
```
b = x + 16
d = b << 2
e = b + d
```
(a, c are eliminated; three instructions instead of five.)
(b) Backward, starting from live-out {v}. Before 3 (v = u - a): remove v, add u and a → {u, a}. Before 2 (u = t * c): remove u, add t and c; a stays → {t, c, a}. Before 1 (t = a + b): remove t, add a and b → **{a, b, c}** = live-in of the block [5].
