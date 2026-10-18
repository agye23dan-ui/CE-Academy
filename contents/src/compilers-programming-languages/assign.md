# Compilers and Programming Languages: Assignments with Worked Solutions

Show every step (sets, tables, stacks). All numerical and tabular answers below were produced and checked with small Python programs (regular-expression automata, FIRST/FOLLOW and LL(1)/SLR generators, dataflow and graph-colouring scripts) and, for assembly, with gcc. Use the notation of the lecture notes: eps for the empty string, $ for end of input.

# Assignment 1: Lexical Analysis, Grammars and Top-Down Parsing (70 marks)

## Questions

**Q1. Regular expressions and automata (18 marks)** (a) Give a regular expression for binary strings that end in 01 and construct the DFA (use subset construction on its NFA) [6]. (b) Minimize the DFA for (a|b)*abb that has transitions 0 –a→ 1, 0 –b→ 2, 1 –a→ 1, 1 –b→ 3, 2 –a→ 1, 2 –b→ 2, 3 –a→ 1, 3 –b→ 4, 4 –a→ 1, 4 –b→ 2, with state 4 accepting, and give the number of states of the minimal DFA [6]. (c) Is {aⁿbⁿ : n ≥ 1} regular? Justify [3]. (d) Explain "longest match" and "keyword priority" with the inputs `a<=b` and `iffy` [3].

**Q2. Tokenizing (8 marks)** List the tokens of `if (x1<=3.5) y = y+10; else z=0;` and give the total [5]. Name the token classes you need and one lexical error example [3].

**Q3. Ambiguity (12 marks)** (a) Show two different parse trees for id + id * id under E → E + E | E * E | id [4]. (b) How many parse trees do id + id + id + id (3 operators) have under E → E + E | id? [2] (c) Rewrite the grammar to give * higher precedence than + and both left-associative [4]. (d) Why does associativity matter for 8 - 3 - 2? [2]

**Q4. FIRST, FOLLOW and LL(1) (22 marks)** (a) For S → A B, A → a A | eps, B → b B | c compute FIRST and FOLLOW of every non-terminal [6], build the LL(1) table [5], and decide whether the grammar is LL(1) [1]. (b) Parse the string `a a b c` with the table, showing each step [5]. (c) Show that S → i E t S S', S → a, S' → e S | eps, E → b is not LL(1) and explain how the ambiguity arises [3]. (d) Left-factor A → a b | a c | d [2].

**Q5. Evaluating expressions (10 marks)** Using the standard precedence (^ right-associative and highest, then * /, then + -, with left associativity for the rest), evaluate 10-4-3, 2^2^3, 2*(3+4)^2, 100/5/2, 2+3*4^2/8-1 and (1+2)*(3+4)-5 [6]. Sketch a recursive-descent parser (function per level) for E → T {(+|-) T} [4].

## Solutions

**Q1.**
(a) Regex: (0|1)*01. Subset construction yields DFA states by the longest suffix seen that is a prefix of 01: S0 = no useful progress (start), S1 = last symbol was 0, S2 = last two symbols were 01 (accepting). Transitions: S0 –0→ S1, S0 –1→ S0; S1 –0→ S1, S1 –1→ S2; S2 –0→ S1, S2 –1→ S0. The subset construction on the Thompson NFA gives 4 DFA states; two of them (the start set and the set reached after reading a 1 from a state with no progress) behave identically and merge, so the minimized complete DFA has **3 states**. Tests: 01, 1101 accepted; 10 rejected.
(b) Initial partition: accepting {4}, non-accepting {0, 1, 2, 3}. Split by the transitions: on b, state 3 goes to the accepting block while 0, 1, 2 go to non-accepting blocks, so {3} separates; then states 1 and 2 differ: on b, 1 goes to 3 but 2 goes to 2, so {1} separates from {0, 2}. States 0 and 2 have identical transitions (a→1, b→2) so they never separate. Final blocks: {0, 2}, {1}, {3}, {4}: the **minimal DFA has 4 states**.
(c) **No.** A DFA has finitely many states; reading aᵐ for m greater than the number of states makes two prefixes aⁱ and aʲ (i ≠ j) end in the same state, so the DFA cannot distinguish aⁱbⁱ from aʲbⁱ (pumping lemma). Balanced strings need a stack: a context-free language.
(d) The scanner takes the longest prefix that matches some token: on `a<=b` it returns `<=`, not `<` followed by `=`. If two rules match the same longest lexeme, the earlier rule wins: for `if` the keyword rule beats the identifier rule, but `iffy` is longer as an identifier and so is returned as one identifier.

**Q2.** Tokens: `if` `(` `x1` `<=` `3.5` `)` `y` `=` `y` `+` `10` `;` `else` `z` `=` `0` `;` → **17 tokens**. Classes: keywords (if, else), identifiers, integer and floating constants, operators (<=, =, +), punctuation ( ) ;. A lexical error: an illegal character such as `@`, a malformed number such as `3.5.2`, or an unterminated string or comment.

**Q3.**
(a) Tree 1 (+ at the root): E → E + E where the right E is E * E, i.e. id + (id * id). Tree 2 (* at the root): E → E * E where the left E is E + E, i.e. (id + id) * id. Two parse trees for the same sentence, so the grammar is ambiguous (and the second tree gives the wrong precedence).
(b) The count is the Catalan number C₃ = **5**.
(c) E → E + T | T; T → T * F | F; F → id (and F → ( E ) if parentheses are needed). The levels encode precedence; the left recursion encodes left associativity.
(d) With left associativity 8 - 3 - 2 = (8 - 3) - 2 = **3**; if the parser treated - as right-associative it would compute 8 - (3 - 2) = **7**, a different (wrong) answer.

**Q4.**
(a) FIRST(A) = { a, eps }; FIRST(B) = { b, c }; FIRST(S) = FIRST(A B) = { a, b, c } (A can vanish, so FIRST(B) is included). FOLLOW(S) = { $ }; FOLLOW(A) = FIRST(B) = { b, c }; FOLLOW(B) = FOLLOW(S) = { $ }. LL(1) table: M[S, a] = M[S, b] = M[S, c] = S → A B; M[A, a] = A → a A; M[A, b] = M[A, c] = A → eps (since b, c ∈ FOLLOW(A)); M[B, b] = B → b B; M[B, c] = B → c. No cell has two entries: the grammar **is LL(1)**.
(b) Stack (top at right) with input `a a b c $`: S → A B; A → a A (lookahead a); match a; A → a A; match a; A → eps (lookahead b); B → b B; match b; B → c; match c; match $: accept.
(c) FIRST(S') = { e, eps } and FOLLOW(S') = { e, $ }, so on lookahead e the entry M[S', e] receives both S' → e S and S' → eps: a conflict. It is the dangling-else ambiguity: an `e` could attach to the inner or an outer `if`. Resolve by choosing S' → e S (bind else to the nearest if), which is not strictly LL(1) but is the standard convention.
(d) A → a A' | d; A' → b | c.

**Q5.** 10-4-3 = (10 - 4) - 3 = **3**; 2^2^3 = 2^(2^3) = 2⁸ = **256**; 2*(3+4)^2 = 2 × 49 = **98**; 100/5/2 = (100/5)/2 = **10**; 2+3*4^2/8-1 = 2 + (3 × 16)/8 - 1 = 2 + 6 - 1 = **7**; (1+2)*(3+4)-5 = 21 - 5 = **16**. Parser sketch:
```
def expr():
    v = term()
    while peek() in ('+', '-'):
        op = eat(); r = term()
        v = v + r if op == '+' else v - r
    return v
```
with `term` handling `*` and `/` over `power`, and `power` handling `^` recursively (right-associative: `b ^ power()`), and `atom` handling numbers, parentheses and unary minus. The left recursion of the grammar has become a loop.

# Assignment 2: Bottom-Up Parsing, Semantics, Types and the Lambda Calculus (70 marks)

## Questions

**Q1. LR(0) items and SLR parsing (20 marks)** Grammar: S → ( S ) | a (augmented with S' → S). (a) Compute the canonical LR(0) item sets and count them [6]. (b) Give the SLR action/goto behaviour, stating FOLLOW(S) [4]. (c) Trace the parse of `( ( a ) )` showing the state stack [6]. (d) Is the grammar SLR(1)? [2] (e) Explain what a handle is [2].

**Q2. Conflicts (12 marks)** (a) For E → E + E | id, find the conflict in the SLR table and say how to resolve it to obtain left associativity [4]. (b) For E → E + E | E * E | id, how many states and conflicts occur, and how do precedence declarations remove them? [4] (c) Show why S → L = R | R, L → * R | id, R → L is not SLR(1) [4].

**Q3. Type inference (12 marks)** Infer the most general types of (a) λx. λy. x [3], (b) λf. λg. λx. f (g x) [5], (c) λx. x x (explain why it fails) [4].

**Q4. Syntax-directed translation (8 marks)** Give semantic rules computing E.val for E → E₁ + T | T, T → T₁ * F | F, F → ( E ) | num, and evaluate 3 + 4 * 2 showing the attribute at each node [8].

**Q5. Scope and symbol tables (8 marks)** Predict the output of the following program under lexical scope and under dynamic scope:
```
x = 10
def f(): print(x)
def g():
    x = 20
    f()
g(); f()
```
Describe how a compiler implements nested scopes in the symbol table [8].

**Q6. Lambda calculus (10 marks)** (a) Reduce (λx. λy. x y)(λz. z) w to normal form [3]. (b) Define Church numerals 2 and 3 and show that exponentiation m^n is n applied to m; compute 2³ and 3² [4]. (c) Why does recursion in the λ-calculus need a fixed-point combinator? [3]

## Solutions

**Q1.**
(a) Step 1: States (items) in discovery order: **I0**: S' → · S, S → · ( S ), S → · a.
Step 2: **I1** = GOTO(I0, "("): S → ( · S ), S → · ( S ), S → · a.
Step 3: **I2** = GOTO(I0, S): S' → S ·. **I3** = GOTO(I0 or I1, a): S → a ·. **I4** = GOTO(I1, S): S → ( S · ).
Step 4: **I5** = GOTO(I4, ")"): S → ( S ) ·. GOTO(I1, "(") = I1 itself.
Step 5: Total **6 states**.
(b) FOLLOW(S) = { ), $ }. Actions: in I0 and I1 shift "(" to I1 and shift "a" to I3; I2 accepts on $; I3 reduces S → a on ) and $; I4 shifts ")" to I5; I5 reduces S → ( S ) on ) and $. Goto: GOTO(I0, S) = I2, GOTO(I1, S) = I4.
(c) Stack of states after each action: shift ( → [0, 1]; shift ( → [0, 1, 1]; shift a → [0, 1, 1, 3]; reduce S → a → [0, 1, 1, 4]; shift ) → [0, 1, 1, 4, 5]; reduce S → ( S ) → [0, 1, 4]; shift ) → [0, 1, 4, 5]; reduce S → ( S ) → [0, 2]; accept.
(d) **Yes**: no state has a shift/reduce or reduce/reduce conflict (our generator reported none).
(e) A handle is the substring of the current sentential form that matches a production's right-hand side and whose reduction is the previous step of a rightmost derivation; the parser finds handles on top of the stack.

**Q2.**
(a) After E → E + E · the parser sees "+" and can **reduce** E → E + E or **shift** "+" (state 4, lookahead + : conflict between r1 and s3). Choosing **reduce** makes + left-associative (a + b + c = (a + b) + c); shift would make it right-associative. The ambiguity is the cause.
(b) The SLR automaton has **7 states** and **4 conflicts** (in the two states with E + E · and E * E ·, on both + and *). Precedence declarations resolve them: for E + E · on * shift (since * binds tighter); on + reduce (left associativity); for E * E · on + reduce (higher precedence reduces first) and on * reduce (left associativity).
(c) The grammar has 10 SLR states. In the state containing S → L · = R and R → L · the lookahead "=" is in FOLLOW(R) = { =, $ } (because "=" ∈ FOLLOW(L) from S → L = R, and L → * R puts FOLLOW(L) into FOLLOW(R)), so SLR both shifts "=" (from S → L · = R) and reduces R → L: a **shift/reduce conflict**. The conflict is spurious (an LR(1) item for R → L · has lookahead $ only in this context), so the grammar is LR(1)/LALR(1) but not SLR(1).

**Q3.**
(a) x : α, y : β gives **α → β → α**.
(b) f : γ → δ, g : α → γ, x : α: g x : γ, f (g x) : δ. Type: **(γ → δ) → (α → γ) → α → δ**, which is function composition ("f ∘ g").
(c) Suppose x : τ. Then the application x x needs τ = τ → σ. Unification would give an infinite type; the **occurs check** rejects it (τ occurs in τ → σ), so λx. x x is not typable in simply typed or Hindley-Milner systems (it is valid in the untyped λ-calculus and gives the self-application behind the Y combinator).

**Q4.** Rules: E → E₁ + T: E.val = E₁.val + T.val; E → T: E.val = T.val; T → T₁ * F: T.val = T₁.val × F.val; T → F: T.val = F.val; F → ( E ): F.val = E.val; F → num: F.val = num.lexval. All attributes are synthesized (S-attributed), so they can be computed during bottom-up parsing. For 3 + 4 * 2: leaves F.val = 3, 4, 2; T.val for the left 3 = 3 (T → F); T₁ = 4 (T → F), F = 2, so T = 4 × 2 = 8; E₁ = 3 (E → T); E = 3 + 8 = **11**.

**Q5.** Lexical scope: g() prints **10** (f looks up x in the global scope where f was defined), then f() prints **10**. Dynamic scope: g() would print **20** (f finds the most recent binding of x on the call stack, that of g), then f() prints 10. Implementation: a stack (or chain) of hash tables, one per scope; entering a block pushes a table, declarations insert into the top table, lookup searches from the innermost to the outermost scope, and leaving the block pops. For code generation each variable gets a frame offset or global address, and nested functions also need a static link (or closure) to reach enclosing frames.

**Q6.**
(a) (λx. λy. x y)(λz. z) w → (λy. (λz. z) y) w → (λz. z) w → **w**.
(b) 2 = λf. λx. f (f x); 3 = λf. λx. f (f (f x)). Exponentiation: m^n = n m (apply the numeral n to m): 2³ = 3 2 = λx. 2 (2 (2 x)), which composes "apply f twice" three times, giving f applied 8 times: **8** (verified in code). 3² = 2 3 = **9** (verified).
(c) In the pure λ-calculus there are no names for functions, so a function cannot call itself. A fixed-point combinator Y satisfies Y F = F (Y F), so Y F behaves as the recursive function whose body is F; the strict variant Z delays evaluation to work under call-by-value. Applying Z to the factorial functional computes fact(5) = **120** (verified).

# Assignment 3: Intermediate Code, Optimization, Code Generation and Runtime (70 marks)

## Questions

**Q1. Three-address code and basic blocks (12 marks)** Translate `s = 0; for (i = 1; i <= n; i = i + 1) s = s + a[i] * 4;` (a holds 4-byte integers) into numbered three-address code [5], find the leaders and basic blocks [4], and draw the control-flow edges [3].

**Q2. Local optimization (12 marks)** Given
```
1: a = 4
2: b = a * 2
3: c = x + b
4: d = x + b
5: e = c * 1
6: f = d * 8
7: g = e + f
8: h = c + d
```
with only h live at the end, apply constant propagation and folding, common-subexpression elimination, algebraic simplification, strength reduction and dead-code elimination, and give the final code [12].

**Q3. Liveness analysis (12 marks)** Blocks: B1: x = 1; y = 2. B2: z = x + y; if z > 10 goto B4. B3: x = z; goto B2. B4: print y. Compute use/def sets, then live-in and live-out for every block by iteration [8], and say which variable is live throughout the loop and why that matters [4].

**Q4. Register allocation (12 marks)** Variables and live intervals (instruction numbers, half-open): p [0,4), q [1,3), r [2,6), s [3,5), t [4,8), u [5,7). Build the interference graph [4], find the maximum register pressure [2], and determine whether 2 and 3 registers suffice, giving a colouring if possible [6].

**Q5. Reading compiler output (12 marks)** The following are gcc -O2 results (Intel syntax, first argument in ecx):
```
int mul8(int x){return x*8;}      ->  lea eax, 0[0+rcx*8]
int cf(int y){return 3*4+y;}      ->  lea eax, 12[rcx]
int f(int a,int b){return a*b+a*b;} -> imul ecx, edx ; lea eax, [rcx+rcx]
int g(int x){return sq(x)+1;}  with  int sq(int x){return x*x;}
                                  ->  imul ecx, ecx ; lea eax, 1[rcx]
int div2(int x){return x/2;}      ->  mov eax, ecx ; shr eax, 31 ; add eax, ecx ; sar eax
```
Name the optimization in each case [6]. Explain the extra instructions for signed division by 2 using x = -7 [4]. Why does the same function at -O0 touch memory many times? [2]

**Q6. Runtime and memory management (10 marks)** Objects 1 to 8 with references 1→2, 2→3, 3→2, 4→5, 6→7, 7→6, 8→1 and roots {1, 4}. (a) Which objects does mark-sweep reclaim? [3] (b) Compute the reference counts (roots count as references) and say what pure reference counting reclaims and leaks [4] (c) A frame has 12 bytes of locals plus 16 bytes of saved registers and return address and must be 16-byte aligned; what is the frame size? A class has 3 virtual methods: how big is its vtable on a 64-bit machine? [3]

## Solutions

**Q1.**
Three-address code:
```
1: s = 0
2: i = 1
3: if i > n goto 10
4: t1 = i * 4
5: t2 = a[t1]
6: t3 = t2 * 4
7: s = s + t3
8: i = i + 1
9: goto 3
10: (after the loop)
```
Leaders: instruction 1 (first), 3 (target of goto 3), 4 (follows a conditional jump), 10 (target of the conditional and follows an unconditional jump). Blocks: **B1 = {1, 2}**, **B2 = {3}**, **B3 = {4, 5, 6, 7, 8, 9}**, **B4 = {10...}**. Edges: B1 → B2; B2 → B3 (condition false) and B2 → B4 (condition true); B3 → B2 (the back edge). The loop is {B2, B3}.

**Q2.**
Step 1: Constant propagation and folding: a = 4; b = 4 × 2 = 8; c = x + 8; d = x + 8.
Step 2: CSE: d has the same value as c, so d = c.
Step 3: Algebraic simplification: e = c × 1 = c.
Step 4: Strength reduction: f = d × 8 = c × 8 → c << 3.
Step 5: Then g = e + f = c + (c << 3). h = c + d = c + c.
Step 6: Dead code: g is not live at the end, so instruction 7 (and e and f, which only feed g) are dead; a and b are constants already propagated and so are dead too.
Step 7: Final code (only what h needs):
```
c = x + 8
h = c + c
```
Two instructions instead of eight. (If g were live the result would also keep f = c << 3 and g = c + f.)

**Q3.**
Step 1: use/def: B1: use {}, def {x, y}. B2: use {x, y}, def {z}. B3: use {z}, def {x}. B4: use {y}, def {}. Successors: B1 → B2; B2 → B3, B4; B3 → B2.
Step 2: Iterating backwards until nothing changes: pass 1 gives live-in B4 = {y}; B3 = {z}; B2 = {x, y} (live-out {y, z}); B1 live-out = {x, y}. Pass 2 updates B3: live-out = live-in(B2) = {x, y}, so live-in(B3) = {z} ∪ ({x, y} - {x}) = **{y, z}**.
Step 3: Pass 3 changes nothing.
Step 4: Final: **B1: in {}, out {x, y}; B2: in {x, y}, out {y, z}; B3: in {y, z}, out {x, y}; B4: in {y}, out {}**.
Step 5: The variable **y** is live throughout (assigned in B1, never changed, used in B4), so it must keep its register (or stack slot) across the whole loop; z is live only between B2 and B3.
Step 6: Also x (assigned in B3) is needed at the top of B2 in the next iteration.

**Q4.**
Two intervals interfere if they overlap. Edges: p-q, p-r, p-s, q-r, r-s, r-t, r-u, s-t, t-u. Degrees: p 3, q 2, r 5, s 3, t 3, u 2. Maximum pressure: at time 3 the live variables are p, r, s, and q ends at 3 (half-open), so the maximum is **3**. With 2 registers the triangle p-q-r (all mutually interfering) cannot be coloured: a spill is required. With 3 registers Chaitin's algorithm removes q (degree 2), p, s, r, t, u in order and then colours in reverse: u = R0, t = R1, r = R2, s = R0, p = R1, q = R0. Check the edges: p (R1) differs from q (R0), r (R2), s (R0); r (R2) differs from s, t (R1), u (R0); s (R0) differs from t (R1); t (R1) differs from u (R0). **3 registers suffice.**

**Q5.**
`mul8`: **strength reduction** (multiplication replaced by an addressing-mode scale, i.e. a shift). `cf`: **constant folding** (3 × 4 evaluated at compile time to 12). `f`: **common-subexpression elimination** (a × b computed once) plus simplification of x + x to a doubling (lea [rcx+rcx]). `g`: **inlining** of sq into g, then folding the result into a single imul and an lea that adds 1. `div2`: strength reduction of division by a power of two to a shift with a sign correction.
Step 1: For signed division C truncates toward zero.
Step 2: For x = -7 the right answer is -3, but an arithmetic shift right by 1 gives -4 (floor).
Step 3: The sequence `shr eax, 31` extracts the sign bit (1 for negative numbers), `add eax, ecx` adds it (-7 + 1 = -6), and `sar eax` shifts: -6 >> 1 = **-3**.
Step 4: For positive x the added bit is 0.
At -O0 the compiler keeps every parameter and local variable in a memory slot of the frame (for example [rbp+16], [rbp-4]) so the debugger can see them; each use reloads the value and each assignment stores it, which is what register allocation removes at -O2.

**Q6.**
(a) Starting from the roots 1 and 4: marked {1, 2, 3, 4, 5}. Swept (reclaimed): **{6, 7, 8}**, including the unreachable cycle 6 ⇄ 7.
(b) Counts: object 1: referenced by 8 and the root → 2; object 2: from 1 and 3 → 2; object 3: from 2 → 1; object 4: root → 1; object 5: from 4 → 1; object 6: from 7 → 1; object 7: from 6 → 1; object 8: 0. Reference counting frees **8** immediately (count 0) and decrements object 1's count to 1 (still held by the root), but it **leaks 6 and 7** (each keeps the other alive with count 1) and could also leak 2 and 3 if object 1 were dropped, because 2 ⇄ 3 is a cycle. Cycles are the weakness; mark-sweep or a cycle collector handles them.
(c) Frame = 12 + 16 = 28 bytes, rounded up to the next multiple of 16 = **32 bytes**. Vtable: 3 pointers × 8 bytes = **24 bytes** (each object carries one 8-byte vptr to it).
