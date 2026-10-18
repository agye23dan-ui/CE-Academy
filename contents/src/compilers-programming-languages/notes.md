# Compilers and Programming Languages: Complete Lecture Notes

Prerequisites: data structures and algorithms, computer organization (assembly), discrete mathematics (sets, relations, graphs), and the theory of automata at an introductory level. All automata, parsing tables and dataflow results below were produced by small Python programs, and all assembly listings come from a real gcc run (x86-64, Windows MinGW, Intel syntax, so integer arguments arrive in registers rcx and rdx; on Linux they arrive in rdi and rsi). Re-derive each example by hand once, then rerun it in code.

## Chapter 1. Overview of Language Processing

### 1.1 Compilers, interpreters and hybrids
A **compiler** translates a program in a source language into a target language (machine code, bytecode or another language) before it runs. An **interpreter** executes the source (or an intermediate form) directly. Many systems are hybrids: Java and C# compile to bytecode, which a virtual machine interprets and **just-in-time (JIT)** compiles to machine code for hot paths; Python compiles to bytecode that is interpreted; JavaScript engines mix an interpreter and several JIT tiers. Compilation gives speed and early error detection; interpretation gives flexibility, portability and fast edit-run cycles.

### 1.2 Phases of a compiler
1. **Lexical analysis (scanner)**: characters → tokens.
2. **Syntax analysis (parser)**: tokens → parse tree or abstract syntax tree (AST).
3. **Semantic analysis**: scopes, types, declarations → annotated AST and symbol table.
4. **Intermediate code generation**: AST → three-address code, SSA or another IR.
5. **Optimization**: machine-independent improvements on the IR.
6. **Code generation**: instruction selection, register allocation, scheduling.
7. **Machine-dependent optimization and assembly/linking**.
A **front end** (phases 1 to 3) depends on the language; the **back end** (5 to 7) depends on the machine; a common IR lets m languages and n machines need only m + n components instead of m × n (the idea behind LLVM). A symbol table and an error handler are shared by all phases.

### 1.3 Example: the pipeline on one line
For the source `x1 = 42 + y*(3.14 - z);` the scanner (regular expression `[A-Za-z_]\w*|\d+\.\d+|\d+|[=+\-*/();]`) produces **12 tokens**: x1, =, 42, +, y, *, (, 3.14, -, z, ), ;. The parser builds an assignment node whose right child is `+` with children 42 and `*` (y, `-`(3.14, z)), reflecting that `*` binds tighter than `+`. Semantic analysis finds that `3.14 - z` is floating point, that `42 +` requires a conversion int → double, and checks that x1 and y and z are declared. Three-address code: t1 = 3.14 - z; t2 = y * t1; t3 = 42.0 + t2; x1 = t3.

## Chapter 2. Lexical Analysis

### 2.1 Tokens, lexemes and regular expressions
A **token** is a class (identifier, number, keyword, operator); a **lexeme** is the actual string. Tokens are specified by **regular expressions**: concatenation, alternation `|`, Kleene star `*`, plus `+`, option `?`, character classes. Scanners follow two rules: **longest match** (`<=` is one token, not `<` then `=`; on `a<=b<c` the regex `<=|<|=` yields `<=`, `<`) and **priority** for ties (a keyword beats an identifier: with `if\b|[a-z]+`, the input `if iffy ifx` gives `if`, `iffy`, `ifx`). Whitespace and comments are discarded; lexical errors are illegal characters or unterminated strings.

### 2.2 From regular expression to scanner
Regular expression → **NFA** (Thompson construction) → **DFA** (subset construction) → **minimal DFA** (partition refinement) → table-driven or hard-coded scanner (what lex/flex generate).

**Thompson construction** builds a small NFA for each operator with ε-transitions. For (a|b)*abb the construction gives **14 NFA states**.

**Subset construction.** Each DFA state is a set of NFA states reachable on the same input: ε-closure(move(S, c)). For (a|b)*abb the DFA has **5 states**: with states numbered in discovery order, 0 = start, and transitions 0 –a→ 1, 0 –b→ 2, 1 –a→ 1, 1 –b→ 3, 2 –a→ 1, 2 –b→ 2, 3 –a→ 1, 3 –b→ 4, 4 –a→ 1, 4 –b→ 2; the only accepting state is 4. States 0 and 2 have identical transitions and are both non-accepting, so they merge: the **minimal DFA has 4 states**. Test: abb, aabb, babb, abbabb are accepted; abab and ab are rejected (computed).

**Minimization** (Moore/Hopcroft): start with the partition {accepting, non-accepting}; repeatedly split a block when two states go to different blocks on some symbol; stop when nothing splits. Equivalent states are merged. The minimal DFA of a regular language is unique up to renaming.

### 2.3 Limits of regular languages
A finite automaton has finite memory, so it cannot count: {aⁿbⁿ} and balanced parentheses are not regular (**pumping lemma**). Hence parsing needs a stronger formalism: context-free grammars.

## Chapter 3. Context-Free Grammars

### 3.1 Definitions
A CFG has terminals, non-terminals, productions and a start symbol. A **derivation** rewrites the start symbol to a sentence; **leftmost** derivations always expand the leftmost non-terminal, **rightmost** the rightmost. A **parse tree** shows the structure. The language is the set of terminal strings derivable.

### 3.2 Ambiguity, precedence and associativity
A grammar is **ambiguous** if some sentence has two parse trees. E → E + E | E * E | id is ambiguous. Engineer the grammar to encode **precedence** (one non-terminal per level) and **associativity**:

```
E -> E + T | T        (left recursion = left-associative)
T -> T * F | F
F -> ( E ) | id
```

Associativity matters: with left associativity 8 - 3 - 2 = (8 - 3) - 2 = **3**, whereas right associativity would give 8 - (3 - 2) = **7**; exponentiation is right-associative: 2^3^2 = 2^(3^2) = **512** (left-associative would give 64). Precedence: 2 + 3 * 4 - 6 / 2 = 11, and 2 * 3^2 = 18 (all verified with a recursive-descent evaluator). The number of distinct parse trees of an operator chain with n binary operators under the ambiguous grammar is the Catalan number: 2, 5, 14 for n = 2, 3, 4 operators.

The **dangling else** (`if a then if b then s1 else s2`) is a classic ambiguity resolved by binding the else to the nearest if.

### 3.3 Grammar transformations
- **Eliminate left recursion** (needed for top-down parsing): A → Aα | β becomes A → βA' and A' → αA' | ε. Example: E → E + T | T becomes E → T E', E' → + T E' | ε.
- **Left factoring**: A → αβ₁ | αβ₂ becomes A → αA', A' → β₁ | β₂.

## Chapter 4. Top-Down Parsing

### 4.1 FIRST and FOLLOW
FIRST(α) is the set of terminals that can begin a string derived from α (plus ε if α can vanish). FOLLOW(A) is the set of terminals that can appear immediately after A in some sentential form ($ for end of input). Compute by iterating to a fixed point.

For the LL(1) expression grammar
```
E  -> T E'
E' -> + T E' | eps
T  -> F T'
T' -> * F T' | eps
F  -> ( E ) | id
```
we obtained (by program): FIRST(E) = FIRST(T) = FIRST(F) = { (, id }; FIRST(E') = { +, ε }; FIRST(T') = { *, ε }. FOLLOW(E) = FOLLOW(E') = { ), $ }; FOLLOW(T) = FOLLOW(T') = { +, ), $ }; FOLLOW(F) = { *, +, ), $ }.

### 4.2 The LL(1) table and predictive parsing
For each production A → α: put it in M[A, a] for every a in FIRST(α); if ε is in FIRST(α), put it in M[A, b] for every b in FOLLOW(A). The grammar is **LL(1)** iff no cell receives two productions (we found **0 conflicts**). The table for our grammar: E and T and F on ( or id use their only production (F → ( E ) on "(", F → id on "id"); E' → + T E' on "+", E' → ε on ")" and "$"; T' → * F T' on "*", T' → ε on "+", ")" and "$".

A table-driven parser keeps a stack. **Trace for id + id * id**: E → T E'; T → F T'; F → id; match id; T' → ε; E' → + T E'; match +; T → F T'; F → id; match id; T' → * F T'; match *; F → id; match id; T' → ε; E' → ε; match $ (accept). The parser makes decisions with one token of lookahead and never backtracks.

### 4.3 Recursive descent
Write one function per non-terminal; each chooses a production by looking at the next token and consumes tokens. It is easy to write by hand (used in GCC's C++ front end, Clang, Go and many others), gives good error messages, and extends with precedence climbing for expressions. Left recursion must be turned into loops: `while next is + or -: ...`.

### 4.4 Error recovery
Panic mode (skip to a synchronizing token such as `;` or `}`), phrase-level repair (insert a missing token), and error productions. The goal is to report as many genuine errors as possible without cascades.

## Chapter 5. Bottom-Up Parsing

### 5.1 Shift-reduce parsing
Bottom-up parsers build the tree from the leaves, producing a **rightmost derivation in reverse**. The stack holds grammar symbols; the **handle** is the right-hand side to be reduced. Actions: shift (push the next token), reduce (pop a right-hand side, push the left-hand side), accept, error. LR parsers are more powerful than LL: they accept all deterministic context-free languages and handle left recursion naturally.

### 5.2 LR(0) items and the automaton
An **item** is a production with a dot marking the parse position (E → E + · T). Closure adds items for non-terminals right after the dot; GOTO moves the dot over a symbol. The collection of item sets is the DFA of the parser. For the expression grammar S' → E, E → E + T | T, T → T * F | F, F → ( E ) | id the canonical LR(0) collection has **12 states**.

### 5.3 SLR, LR(1) and LALR(1)
- **SLR(1)**: reduce A → α in state i on terminals in FOLLOW(A). Simple but can report spurious conflicts.
- **Canonical LR(1)**: items carry a lookahead; very powerful, large tables.
- **LALR(1)**: merges LR(1) states with the same core; nearly as strong as LR(1) with the small tables of SLR; this is what yacc/bison generate.

**Worked trace (SLR) for id * id + id**, with states numbered in discovery order by our generator (the state stack is shown after each action): shift id → [0, 5]; reduce F → id → [0, 3]; reduce T → F → [0, 4]; shift * → [0, 4, 8]; shift id → [0, 4, 8, 5]; reduce F → id → [0, 4, 8, 11]; reduce T → T * F → [0, 4]; reduce E → T → [0, 2]; shift + → [0, 2, 7]; shift id → [0, 2, 7, 5]; reduce F → id → [0, 2, 7, 3]; reduce T → F → [0, 2, 7, 10]; reduce E → E + T → [0, 2]; accept. The sequence of reductions read backwards is the rightmost derivation.

**Conflicts.** A **shift/reduce** conflict arises when both are possible (dangling else; resolved by preferring the shift); a **reduce/reduce** conflict when two productions can be reduced. The grammar S → L = R | R, L → * R | id, R → L is not SLR(1): in the state containing S → L · = R and R → L ·, the symbol = is in FOLLOW(R) (FOLLOW(R) = { =, $ }), so SLR shifts and reduces on "=" at once; LR(1) lookaheads resolve it. Parser generators let you declare precedence and associativity to settle expression conflicts.

### 5.4 Comparison
LL(1): hand-writable, top-down, restricted grammars, no left recursion. LR(1)/LALR(1): table-driven, accepts more grammars, better for large languages. Modern compilers often use hand-written recursive descent with operator-precedence parsing for expressions, or generalized parsers (GLR, PEG) for ambiguous languages.

## Chapter 6. Semantic Analysis

### 6.1 Symbol tables and scope
A symbol table maps names to attributes (type, scope, storage location). Use a stack of hash tables, one per block: lookup walks from the innermost scope outward. **Lexical (static) scope** resolves a free name by the program text where the function is defined; **dynamic scope** resolves it by the call stack. Example: with a global x = 10, `f()` returns x, and `g()` declares a local x = 20 and calls f(): under lexical scope g() returns **10** (verified in Python); under dynamic scope it would return 20. Nearly all modern languages use lexical scope.

### 6.2 Type checking
A **type system** assigns types to expressions and rules for what is allowed. **Static** typing checks at compile time (C, Java, Rust, Go, Haskell); **dynamic** typing checks at run time (Python, JavaScript, Lisp). **Strong** versus **weak** typing is about how freely implicit conversions occur. Type checking rules are written as inference rules, for example: if e₁ : int and e₂ : int then e₁ + e₂ : int. Type conversions: widening is safe (int → double), narrowing may lose data. Overloading chooses an operation by argument types; **coercion** inserts conversions.

### 6.3 Type inference and unification
Languages such as ML and Haskell infer types with the **Hindley-Milner** algorithm: give each unknown a type variable, generate equations from the program, and solve by **unification** (finding a substitution that makes two types equal, with an occurs check). Example: in λf. λx. f (f x), let x : α and f : α → β; the inner application f x gives type β; applying f again to β needs α = β; the result is **(α → α) → α → α**, the type of the Church numeral two. **Parametric polymorphism** (generics, templates) lets one definition work for all types; **let-polymorphism** generalizes types of let-bound names.

### 6.4 Attribute grammars and syntax-directed translation
Attach attributes to grammar symbols and semantic rules to productions. **Synthesized** attributes flow up (the value of E.val = E₁.val + T.val); **inherited** attributes flow down or sideways (the type declared for a list of variables). An S-attributed definition can be evaluated during bottom-up parsing; an L-attributed one during top-down parsing. Practical compilers build an AST and run semantic checks as tree walks (visitors).

## Chapter 7. Intermediate Representations

### 7.1 AST and three-address code
The **AST** keeps structure without syntactic noise. **Three-address code (TAC)** has at most one operator per instruction: `t1 = b * c; t2 = d * e; a = t1 + t2` for `a = b*c + d*e`. Instructions: assignment, copy, jumps (conditional, unconditional), labels, parameter passing and calls, indexed loads/stores. Stored as quadruples (op, arg1, arg2, result) or triples. Control flow is translated to labels and jumps, with short-circuit evaluation of `&&` and `||`.

### 7.2 Basic blocks and the control-flow graph
A **basic block** is a maximal straight-line sequence with one entry (its first instruction, called a leader) and one exit. Leaders are: the first instruction, any jump target, and any instruction that follows a jump. The **CFG** has blocks as nodes and possible transfers as edges; loops appear as cycles, found with dominators and back edges.

### 7.3 Static single assignment (SSA)
In **SSA** each variable is assigned exactly once; at control-flow joins a **φ-function** selects the right version: `x3 = φ(x1, x2)`. SSA makes many analyses (constant propagation, dead-code elimination, value numbering) simpler and faster. LLVM IR is in SSA form.

### 7.4 Other IRs
Stack machine bytecode (JVM, CPython, WebAssembly), LLVM IR (typed, SSA), MLIR (multi-level), and continuation-passing style for functional languages.

## Chapter 8. Code Optimization

### 8.1 Local and peephole optimizations
- **Constant folding**: evaluate constant expressions at compile time: `3*4 + y` becomes `12 + y`. (Folding must respect the target semantics: for 32-bit signed arithmetic, 2147483647 + 1 wraps to -2147483648 in practice but is undefined behaviour in C.)
- **Constant and copy propagation**, **algebraic simplification** (x + 0, x * 1), **strength reduction** (multiplication by a power of two becomes a shift: x * 8 → x << 3), **common subexpression elimination (CSE)**, **dead-code elimination**, **peephole** rewriting of short instruction sequences.

### 8.2 Seeing the optimizer work: real gcc output
Compiling small C functions with `gcc -O2 -S -masm=intel` (Windows ABI, first argument in ecx, second in edx):

```
int mul8(int x){return x*8;}      ->  lea eax, 0[0+rcx*8]        (strength reduction)
int cf(int y){return 3*4+y;}      ->  lea eax, 12[rcx]           (constant folding)
int f(int a,int b){int c=a*b+a*b;return c;}
                                  ->  imul ecx, edx              (CSE: a*b computed once)
                                      lea  eax, [rcx+rcx]        (the sum a*b+a*b becomes doubling)
int sq(int x){return x*x;}   int g(int x){return sq(x)+1;}
                                  ->  imul ecx, ecx              (sq inlined into g)
                                      lea  eax, 1[rcx]
unsigned udiv2(unsigned x){return x/2;}  ->  mov eax, ecx ; shr eax
int div2(int x){return x/2;}      ->  mov eax, ecx ; shr eax, 31 ; add eax, ecx ; sar eax
```

The signed division by two needs the extra `shr eax, 31` and `add` because C truncates toward zero: for x = -7 the result must be -3, but an arithmetic shift alone gives -4 (floor). Adding the sign bit first fixes it: (-7 + 1) >> 1 = -3. Compare the same function at `-O0`:

```
f:  push rbp / mov rbp, rsp / sub rsp, 16
    mov [rbp+16], ecx / mov [rbp+24], edx        ; spill arguments to the stack
    mov eax, [rbp+16] / imul eax, [rbp+24] / add eax, eax
    mov [rbp-4], eax / mov eax, [rbp-4] / leave / ret
```
Even at -O0 the compiler found the duplicate a*b (the add eax, eax), but every variable lives in memory (the frame), which is exactly what the register allocator removes at -O2. For `sum` (a loop adding 0..n-1) the -O0 code keeps s at [rbp-4] and i at [rbp-8] and reloads them each iteration, while the -O2 version keeps both in registers and even unrolls the loop by two.

### 8.3 Loop optimizations
**Loop-invariant code motion** (hoist a*b out of a loop that executes 1000 times so it runs once instead of 1000), **induction-variable strength reduction**, **loop unrolling**, **loop fusion/interchange** (cache locality), **vectorization** (SIMD), **inlining** (removes call overhead and enables further optimization, at the cost of code size), **tail-call optimization** (turns tail recursion into a jump so recursion depth does not grow the stack).

### 8.4 Data-flow analysis
A framework for deriving facts about all paths: define for each block the sets GEN and KILL, a direction (forward or backward), a meet operation (union or intersection), and iterate to a fixed point.

**Liveness (backward, union).** A variable is live at a point if its current value may be used later. live-in(B) = use(B) ∪ (live-out(B) - def(B)); live-out(B) = ∪ live-in(successors).

*Worked example 1 (straight line).* Block: 1: a = b + c; 2: d = a * e; 3: f = d - a; 4: g = f + b, with only g live at the end. Working backwards, the sets live **after** each instruction are: after 4: {g}; after 3: {f, b}; after 2: {d, a, b}; after 1: {a, b, e}; live-in of the block = {b, c, e}. So `a` is dead after instruction 3 and `d` after 3; their registers can be reused.

*Worked example 2 (loop).* B1: i = 0; s = 0. B2: if i >= n goto B4. B3: s = s + i; i = i + 1; goto B2. B4: print s. After iterating to a fixed point (3 passes) the live-in/live-out sets are: B1: in {n}, out {i, n, s}; B2: in {i, n, s}, out {i, n, s}; B3: in {i, n, s}, out {i, n, s}; B4: in {s}, out {}. Note that n is live throughout the loop because B2 reads it every iteration, even though B3 never uses it.

**Reaching definitions** (forward, union), **available expressions** (forward, intersection; enables global CSE), **constant propagation**, and **very busy expressions** use the same machinery. Fixed-point iteration terminates because the sets grow (or shrink) monotonically over a finite lattice.

## Chapter 9. Code Generation

### 9.1 Instruction selection
Map IR to machine instructions, using addressing modes and special instructions (the `lea` instruction computes a + b*scale + c without touching flags, so compilers use it for multiplication by 3, 5, 9 and additions). Techniques: tree pattern matching with dynamic programming, BURS, greedy macro expansion. The target's cost model (latency, throughput, size) guides the choice.

### 9.2 Register allocation by graph colouring
Two variables **interfere** if they are live at the same time. Build the interference graph and colour it with k colours (k = number of registers); variables of the same colour share a register. **Chaitin's algorithm**: repeatedly remove a node with fewer than k neighbours (push on a stack); if none exists, choose a node to **spill** (keep in memory); then pop and assign colours.

*Worked example.* Live intervals (instruction numbers): a [1,4), b [0,3), c [2,6), d [5,8), e [3,7), f [7,9). Interference edges: a-b, a-c, a-e, b-c, c-d, c-e, d-e, d-f. The maximum number of simultaneously live variables is 3, and a-b-c form a triangle, so **2 registers are insufficient (a spill is required)**, while **3 registers suffice**: for example b = r0, a = r1, c = r2, e = r0, d = r1, f = r0. For straight-line code with intervals, **linear scan** allocation is faster and is used in JITs.

### 9.3 Activation records and calling conventions
Each call creates a **stack frame** holding the return address, saved registers, parameters beyond those in registers, local variables and temporaries. The **frame pointer** (rbp) gives fixed offsets to locals (in the -O0 listing above, arguments are stored at [rbp+16] and [rbp+24] and the local c at [rbp-4]). A **calling convention** defines which registers carry arguments (Windows x64: rcx, rdx, r8, r9; System V: rdi, rsi, rdx, rcx, r8, r9), the return value register (eax/rax), which registers the callee must preserve, and stack alignment (16 bytes). A frame with 20 bytes of locals plus 16 bytes of saved registers rounds up to 48 bytes with 16-byte alignment (4 bytes of locals needs 32; 40 needs 64). Recursion works because each activation has its own frame; unbounded recursion overflows the stack.

### 9.4 Instruction scheduling and the back end
Reorder independent instructions to hide latencies, fill delay slots and exploit superscalar pipelines; subject to data dependences and register pressure. Final stages: assembler, linker (symbol resolution and relocation), loader.

## Chapter 10. Runtime Systems and Memory Management

### 10.1 Storage organization
Static area (globals, constants), stack (call frames), heap (dynamic allocation). Objects with virtual methods contain a hidden **vptr** pointing to a **vtable** of method addresses; a virtual call loads the vptr, indexes the table and jumps. An object with a vptr (8 bytes) and a 4-byte int occupies 12 bytes, padded to 16 for alignment; a class with 3 virtual methods has a 24-byte vtable (3 pointers).

### 10.2 Garbage collection
- **Reference counting**: each object counts references; freed at zero. Cheap and incremental but cannot reclaim **cycles**: two objects that reference each other keep a count of at least 1 after the program drops them (shown in CPython, where the separate cycle collector reclaims them).
- **Mark-sweep**: mark everything reachable from the roots, sweep the rest. Example: objects 1 to 6, roots {1}, edges 1→2, 2→3, 4→5, 5→4 (a cycle), 6 isolated: marked {1, 2, 3}; swept {4, 5, 6}. Cycles are handled correctly.
- **Copying/compacting** collectors move live objects together (no fragmentation, allocation by pointer bump). **Generational** collection exploits the observation that most objects die young: collect the young generation often and the old rarely.
- Manual management (C, C++) has no pause but risks leaks, double free and use-after-free; **ownership and borrowing** (Rust) gives memory safety without a collector by checking lifetimes at compile time.

### 10.3 Closures and higher-order functions
A **closure** pairs a function with the environment of its definition so that free variables remain accessible after the defining function returns; the environment may be allocated on the heap. Implementation: flat closures (copy needed variables) or linked environments.

## Chapter 11. Programming Language Concepts

### 11.1 Paradigms
Imperative/procedural (C), object-oriented (Java, C++, Smalltalk), functional (Haskell, OCaml, Lisp), logic (Prolog), scripting (Python, JavaScript), concurrent and actor-based (Erlang, Go). Most modern languages mix paradigms. Design dimensions: syntax, semantics, type system, memory model, concurrency model, tooling.

### 11.2 The lambda calculus
The λ-calculus has variables, abstraction (λx. e) and application (e₁ e₂); computation is **β-reduction**: (λx. e₁) e₂ → e₁[x := e₂]. It is Turing-complete. **Church numerals** encode n as λf. λx. fⁿ(x); successor, addition and multiplication are λ-terms. We verified in Python that 2 = succ(succ(zero)), 3 = succ(2), add(2)(3) = 5 and mul(2)(3) = 6. A fixed-point combinator (Y, or the strict variant Z) gives recursion without named functions: Z applied to the factorial functional computes fact(5) = 120. Evaluation strategies: **call-by-value** (evaluate arguments first), **call-by-name/need** (lazy), normal order. The **Church-Rosser** theorem says that if a term reduces to a normal form, that form is unique.

### 11.3 Parameter passing
Call-by-value copies the argument; call-by-reference passes an alias (C++ references, pointers simulate it in C); call-by-name re-evaluates the argument expression in the caller's environment at every use (Algol 60; Jensen's device computes sums such as Σ i² for i = 1..3 = 14 by passing the loop variable and the term by name); call-by-need caches the value (Haskell); call-by-sharing (Python, Java objects). Know the observable differences (aliasing, side effects, evaluation count).

### 11.4 Abstraction mechanisms
Modules and namespaces, abstract data types, classes and inheritance, interfaces and traits, generics, exceptions, iterators and generators, coroutines and async/await, pattern matching and algebraic data types. **Subtyping** (a Dog is an Animal) versus **parametric polymorphism** (List<T>); variance rules (covariant, contravariant) determine when List<Dog> may be used as List<Animal>.

### 11.5 Concurrency and memory models
Threads with shared state need locks or atomic operations; message passing and actors avoid sharing; futures/promises and async/await structure asynchronous work. A language **memory model** (C++11, Java) defines which values a read may observe; data races give undefined or unspecified behaviour.

### 11.6 Interpreters, virtual machines and JIT
An interpreter loop fetches a bytecode, decodes it and executes it (a `switch` or threaded code). Speed-ups: inline caches, hidden classes, tracing or method JITs, tiered compilation with deoptimization when assumptions fail. WebAssembly is a portable low-level target. Tools: LLVM (IR, optimization passes, back ends), GCC, parser generators (ANTLR, bison), and language workbenches.

## Chapter 12. Design Method and Mistakes Checklist
1. Define the language: lexical syntax with regexes, grammar (check it is LL(1) or LALR(1)), semantics.
2. Build the scanner, parser and AST; test each phase separately with golden files.
3. Add semantic analysis (symbol table, types), then an IR, then simple optimizations, then code generation.
4. Test with many small programs, differential testing against a reference implementation, and fuzzing.

**Common mistakes.** Left recursion in an LL grammar; forgetting longest-match and keyword priority in the scanner; wrong associativity of operators (8 - 3 - 2 must be 3); shift/reduce conflicts left unexamined; folding constants without target semantics (overflow, floating-point rounding); using a stale liveness result after transforming code; ignoring the calling convention (alignment, callee-saved registers); assuming reference counting reclaims cycles; confusing lexical and dynamic scope; and optimizing before the front end is correct.
