# Compilers and Programming Languages: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

Notation: eps is the empty string, $ marks end of input, → separates a left side from a right side.

## Section A: Multiple Choice (20 marks)

**1.** The front end of a compiler consists of
A) assembly and disassembly  B) lexical analysis, syntax analysis and semantic analysis  C) linking and loading  D) optimization and code generation

**2.** The minimal DFA of a regular language is
A) always has two states  B) never unique  C) always larger than the NFA  D) unique up to renaming of states

**3.** The pumping lemma is used to show that a language
A) is context free  B) is not regular  C) is LL(1)  D) is ambiguous

**4.** Operator precedence and associativity in a grammar are usually obtained by
A) using a bigger lexer  B) adding semantic actions only  C) deleting productions  D) layering non-terminals (E, T, F) and choosing left or right recursion

**5.** In an LL(1) table, an epsilon production A → eps is placed in M[A, b] for
A) every b in FOLLOW(A)  B) no b  C) every b in FIRST(A)  D) b = $ only

**6.** Compared with canonical LR(1), LALR(1) tables
A) are smaller because states with the same core are merged  B) accept more grammars  C) are larger  D) cannot handle left recursion

**7.** In an SLR(1) parser a reduction by A → α is performed on
A) only on $  B) every terminal  C) the terminals in FOLLOW(A)  D) the terminals in FIRST(α)

**8.** A synthesized attribute is one computed from
A) the token's position  B) the symbol table only  C) the attributes of the children  D) the parent and siblings

**9.** Under lexical (static) scope a free variable is resolved by
A) the caller's variables  B) the linker  C) the program text where the function is defined  D) the most recent binding on the call stack

**10.** Dead-code elimination removes
A) all jumps  B) all loops  C) comments  D) code whose results are never used

**11.** Loop-invariant code motion
A) unrolls the loop  B) vectorizes the loop  C) removes the loop counter  D) moves computations that do not change inside the loop to before it

**12.** Available-expressions analysis supports
A) global common-subexpression elimination  B) lexing  C) register allocation  D) type inference

**13.** In an interference graph the nodes are
A) variables, with an edge when they are live at the same time  B) basic blocks  C) tokens  D) functions

**14.** Spilling means
A) inlining a function  B) storing a variable in memory because registers run out  C) removing a variable  D) copying a register

**15.** A calling convention specifies
A) the order of optimization passes  B) the parser type  C) which registers carry arguments and which must be preserved  D) the syntax of the language

**16.** Mark-sweep garbage collection, unlike pure reference counting,
A) needs no roots  B) leaks cycles  C) can reclaim cyclic garbage  D) never pauses

**17.** A closure is
A) a type error  B) a compiler flag  C) a loop  D) a function together with the environment in which it was defined

**18.** In the λ-calculus, Church numerals
A) cannot be added  B) require loops  C) are floating-point values  D) encode integers as functions that apply f n times

**19.** Call-by-name
A) re-evaluates the argument expression at each use in the callee  B) is the same as call-by-value  C) evaluates the argument once before the call  D) copies the object

**20.** A JIT compiler
A) translates source to bytecode only  B) is used only for assembly  C) removes types  D) compiles frequently executed code to machine code at run time

## Section B: Short Questions (40 marks)

**B1. DFA (5 marks)** Give a complete DFA for strings over {a, b} that end in ab (regular expression (a|b)*ab) with its transition table, and run it on abab, bab and aba.

**B2. Ambiguity (5 marks)** Show two parse trees for id + id * id under E → E + E | E * E | id and give a grammar that fixes both precedence and associativity.

**B3. Left recursion (5 marks)** Remove the left recursion from A → A a | A b | c and explain why top-down parsers need this.

**B4. LL(1) (5 marks)** For S → a S b | eps compute FIRST(S) and FOLLOW(S), the table entries, and parse `a a b b`.

**B5. Conflict (5 marks)** What is a shift/reduce conflict? Explain the dangling-else example and the usual resolution.

**B6. Types (5 marks)** Infer the types of (a) λx. x + 1 (with + on integers), (b) λf. f 3 [3], and explain why λx. x x is rejected [2].

**B7. Constant folding and overflow (5 marks)** Fold and simplify: a = 3 + 5; b = a * 4; c = b * 2. Why must a compiler fold 32-bit integer arithmetic using the target's semantics (consider 2147483647 + 1)?

**B8. Reference counting (5 marks)** Explain why reference counting fails on two objects that point to each other, and name two ways to deal with it.

## Section C: Long Questions (answer any four, 40 marks)

**C1. From source to three-address code (10 marks)** Consider `y = (a + b) * c - 4 / d;`. (a) List the tokens and count them [2]. (b) Draw the AST by giving a bracketed form that shows the precedence [2]. (c) Produce three-address code [3]. (d) Evaluate the expression for a = 2, b = 3, c = 4, d = 2 [1]. (e) Convert `x = 1; if (c) x = 2; y = x + 1;` to SSA form [2].

**C2. LR parsing (10 marks)** Grammar: E → E + T | T, T → id (augmented with E' → E). (a) Construct the LR(0) item sets [4]. (b) Give FOLLOW(E) and FOLLOW(T) [2]. (c) Trace the parse of `id + id + id` showing the stack of states [3]. (d) Show what changes if the grammar is E → E + E | id [1].

**C3. Data-flow analysis and register allocation (10 marks)** Blocks: B1: a = 1; b = 2. B2: c = a + b; d = c * 2; if d < 20 goto B4. B3: a = d; goto B2. B4: print b. (a) Compute use/def sets and live-in/live-out sets for each block by iteration [5]. (b) Variables v1..v6 have live intervals (half-open) v1 [0,5), v2 [1,3), v3 [2,7), v4 [4,8), v5 [6,9), v6 [3,6). Build the interference graph, find the maximum pressure and decide how many registers are needed, giving a colouring [5].

**C4. Lambda calculus and closures (10 marks)** (a) Define Church booleans TRUE = λx. λy. x and FALSE = λx. λy. y and AND = λp. λq. p q p; reduce AND TRUE FALSE [3]. (b) Show that the successor of Church numeral 2 is Church numeral 3 and give 2 × 3 using the multiplication λm. λn. λf. m (n f) [3]. (c) A function make() defines c = 0 and returns inc, which increments and returns c. After a = make(); b = make(), give the results of a(), a(), b(), a() and explain with closures [2]. (d) Why can a strict language compute factorial from the combinator Z but not from Y? [2]

**C5. Code generation and runtime (10 marks)** The gcc -O0 code for `int sum(int n){int s=0;for(int i=0;i<n;i++)s+=i;return s;}` is
```
push rbp ; mov rbp, rsp ; sub rsp, 16
mov [rbp+16], ecx            ; n
mov [rbp-4], 0               ; s = 0
mov [rbp-8], 0               ; i = 0
jmp L10
L11: mov eax, [rbp-8] ; add [rbp-4], eax ; add [rbp-8], 1
L10: mov eax, [rbp-8] ; cmp eax, [rbp+16] ; jl L11
mov eax, [rbp-4] ; leave ; ret
```
(a) Where do n, s and i live and what is the calling convention (Windows x64)? [3] (b) Explain why -O2 code, which keeps s and i in registers, is faster and what analysis permits this [3]. (c) Objects 1 to 8 reference 1→2, 2→3, 3→2, 4→5, 6→7, 7→6, 8→1 with roots {1, 4}: what does mark-sweep reclaim? [2] (d) A frame needs 12 bytes of locals plus 16 bytes of saved registers and return address, aligned to 16 bytes: what size? [2]

## Answer key and mark scheme

### Section A
1. B 2. D 3. B 4. D 5. A 6. A 7. C 8. C 9. C 10. D 11. D 12. A 13. A 14. B 15. C 16. C 17. D 18. D 19. A 20. D

### Section B

**B1.** States: s0 (no progress), s1 (last symbol a), s2 (last two symbols ab, accepting). Transitions: s0 –a→ s1, s0 –b→ s0; s1 –a→ s1, s1 –b→ s2; s2 –a→ s1, s2 –b→ s0 [3]. abab: s0 → s1 → s2 → s1 → s2 **accepted**. bab: s0 → s0 → s1 → s2 **accepted**. aba: s0 → s1 → s2 → s1 **rejected** [2].

**B2.** Tree 1: id + (id * id) (the + node is the root). Tree 2: (id + id) * id (the * node is the root). Two trees for one sentence: ambiguous [2]. Fix: E → E + T | T; T → T * F | F; F → id (levels give * higher precedence; left recursion gives left associativity) [3].

**B3.** A → c A'; A' → a A' | b A' | eps [3]. A top-down parser expands A by the first production A → A a and would call itself forever without consuming input; the transformation makes each expansion start with a terminal-led alternative (c) so progress is guaranteed (the resulting parse tree needs a semantic rule to restore left associativity) [2].

**B4.** FIRST(S) = { a, eps }; FOLLOW(S) = { b, $ } [2]. M[S, a] = S → a S b; M[S, b] = M[S, $] = S → eps (no conflicts) [1]. Parse a a b b: S → a S b; match a; S → a S b; match a; S → eps (lookahead b); match b; match b; match $: accept [2].

**B5.** In some parser state both shifting the next token and reducing by a production are valid [2]. For `if a then if b then s1 else s2` after parsing the inner if statement with lookahead `else`, the parser can reduce the inner if (so else belongs to the outer if) or shift else (binding to the inner if). The usual rule is to **shift**, associating else with the nearest if [3].

**B6.** (a) **int → int** [1]. (b) f : int → α, so **(int → α) → α** [2]. λx. x x requires x : τ and τ = τ → σ, an infinite type; the occurs check fails [2].

**B7.** a = 8; b = 8 × 4 = 32; c = 32 × 2 = 64. Strength-reduced form: b = a << 2 (constant 32), c = b << 1 [3]. Folding must use the target's arithmetic: 2147483647 + 1 wraps to -2147483648 in 32-bit two's complement hardware (and is undefined in C for signed int), so folding with 64-bit or unbounded arithmetic would change the program's meaning [2].

**B8.** If objects A and B reference each other, each keeps a count of at least 1 even after all external references vanish, so neither count reaches zero and the memory is leaked [3]. Solutions: a backup tracing (mark-sweep) or cycle collector, weak references for back pointers, or ownership rules that avoid cycles (any two) [2].

### Section C

**C1.**
(a) Tokens: y, =, (, a, +, b, ), *, c, -, 4, /, d, ; → **14 tokens** [2].
(b) AST: `y = ( ( (a + b) * c ) - ( 4 / d ) )` — * and / bind tighter than -, and the parentheses force a + b first [2].
(c) TAC [3]:
```
t1 = a + b
t2 = t1 * c
t3 = 4 / d
t4 = t2 - t3
y  = t4
```
(d) (2 + 3) × 4 - 4/2 = 20 - 2 = **18** [1].
(e) SSA [2]:
```
x1 = 1
if c goto L1 else goto L2
L1: x2 = 2
L2: x3 = phi(x1, x2)
    y1 = x3 + 1
```

**C2.**
(a) I0: E' → · E, E → · E + T, E → · T, T → · id. I1 = GOTO(I0, E): E' → E ·, E → E · + T. I2 = GOTO(I0, T): E → T ·. I3 = GOTO(I0, id): T → id ·. I4 = GOTO(I1, +): E → E + · T, T → · id. I5 = GOTO(I4, T): E → E + T ·. (GOTO(I4, id) = I3.) **6 states** [4].
(b) FOLLOW(E) = { +, $ }; FOLLOW(T) = { +, $ } [2].
(c) shift id → [0, 3]; reduce T → id → [0, 2]; reduce E → T → [0, 1]; shift + → [0, 1, 4]; shift id → [0, 1, 4, 3]; reduce T → id → [0, 1, 4, 5]; reduce E → E + T → [0, 1]; shift + → [0, 1, 4]; shift id → [0, 1, 4, 3]; reduce T → id → [0, 1, 4, 5]; reduce E → E + T → [0, 1]; accept [3].
(d) With E → E + E | id there are only 5 states and a shift/reduce conflict on + in the state containing E → E + E · (reduce or shift +); the grammar is ambiguous, and choosing reduce gives left associativity [1].

**C3.**
(a) use/def: B1: use {}, def {a, b}. B2: use {a, b}, def {c, d}. B3: use {d}, def {a}. B4: use {b}, def {}. Iteration (backward): pass 1: live-in B4 = {b}; B3: live-in {d}; B2: live-out {b, d}, live-in {a, b}; B1: live-out {a, b}. Pass 2: B3 live-out = live-in(B2) = {a, b}, so live-in(B3) = {d} ∪ ({a, b} - {a}) = {b, d}. Pass 3: no change. Result: **B1: in {}, out {a, b}; B2: in {a, b}, out {b, d}; B3: in {b, d}, out {a, b}; B4: in {b}, out {}**. Variable b is live throughout, and a is dead after being used in B2 until redefined in B3 [5].
(b) Edges: v1-v2, v1-v3, v1-v4, v1-v6, v2-v3, v3-v4, v3-v5, v3-v6, v4-v5, v4-v6. Variables v1, v3, v4, v6 are pairwise adjacent (a clique of four), so at least **4 registers** are needed; maximum pressure = 4 (time 4: v1, v3, v4, v6). A 4-colouring: v6 = R0, v5 = R0, v4 = R1, v3 = R2, v1 = R3, v2 = R0 (v2 differs from v1 = R3 and v3 = R2). With 3 registers at least one variable must be spilled [5].

**C4.**
(a) AND TRUE FALSE = (λp. λq. p q p) TRUE FALSE → TRUE FALSE TRUE → (λx. λy. x) FALSE TRUE → **FALSE** [3].
(b) succ 2 = λf. λx. f (2 f x) = λf. λx. f (f (f x)) = 3. 2 × 3 = λf. 2 (3 f): applying f three times, then that function twice, gives f applied 6 times: **Church 6** (verified in code) [3].
(c) **1, 2, 1, 3**: each call of make() creates a fresh environment containing its own c, and inc captures that environment (a closure); a and b therefore keep independent counters [2].
(d) A strict (call-by-value) language evaluates the argument of Y F before applying, so Y F loops forever; Z eta-expands the self-application (λv. x x v) to delay evaluation until the function is actually called, so it works under call-by-value (Z applied to the factorial functional gives fact(4) = 24, verified) [2].

**C5.**
(a) n is the argument saved from ecx into [rbp+16]; s lives at [rbp-4]; i lives at [rbp-8]. In the Windows x64 convention the first integer argument arrives in ecx/rcx (then rdx, r8, r9), the result returns in eax/rax, and the stack stays 16-byte aligned [3].
(b) At -O0 every access to s and i is a load or store through the frame (several memory operations per iteration). At -O2 the compiler keeps them in registers, which is possible because **liveness analysis** and **register allocation** show that s and i never need to be in memory (no address taken, no debugger), and it can also unroll the loop (our -O2 listing adds two terms per iteration) [3].
(c) Marked from the roots: {1, 2, 3, 4, 5}; reclaimed: **{6, 7, 8}** [2].
(d) 12 + 16 = 28, rounded up to a multiple of 16: **32 bytes** [2].
