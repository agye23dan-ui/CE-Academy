# Compilers and Programming Languages: 14-Week Study Plan and Resources

Time budget: 9 to 12 hours per week (3 reading or lectures, 6 to 8 building and problem solving, 1 review with the app's quizzes). Learn this course by writing a compiler: a small language end to end (scanner, parser, type checker, intermediate code, optimizer and code generator for a stack machine or x86-64) teaches more than any amount of reading.

## Textbooks
- Aho, Lam, Sethi and Ullman, *Compilers: Principles, Techniques, and Tools* (the "Dragon Book"); Cooper and Torczon, *Engineering a Compiler*; Appel, *Modern Compiler Implementation* (in ML, Java or C).
- Robert Nystrom, *Crafting Interpreters* (free online; two complete interpreters, the best first project).
- Abelson and Sussman, *Structure and Interpretation of Computer Programs* (free online) and Shriram Krishnamurthi, *Programming Languages: Application and Interpretation* (free online).
- Benjamin Pierce, *Types and Programming Languages*; Michael Scott, *Programming Language Pragmatics*; Friedman and Wand, *Essentials of Programming Languages*.
- Hopcroft, Motwani and Ullman, *Introduction to Automata Theory, Languages, and Computation* (for the theory of languages).

## Free courses
- Stanford CS143 Compilers (Alex Aiken) with the COOL language projects; MIT 6.035 Computer Language Engineering.
- Cornell CS 6120 Advanced Compilers (self-guided, with the Bril IR); University of Washington CSE 341 and Coursera "Programming Languages" (Dan Grossman) for ML, Racket and Ruby.
- Harvard CS 153 and the LLVM Kaleidoscope tutorial (build a JIT-compiled language); the "Let's Build a Compiler" series by Jack Crenshaw.
- Compiler Explorer (godbolt.org) to read the assembly the compiler produces for any snippet.

## Tools
Python or a language you like for the implementation; Flex/Bison or ANTLR for generated front ends (or hand-written recursive descent); LLVM and its `opt`, `llc` and `clang -S -emit-llvm`; `gcc -O0/-O2 -S -masm=intel` to compare unoptimized and optimized output; a debugger such as gdb or lldb; a regex tester.

## Week by week

**Week 1: Overview and the language-processing pipeline.** Compilers versus interpreters, phases, IRs, bootstrapping. Lab: run `gcc -S` on a small program and identify prologue, body and epilogue; trace one line through all phases.

**Week 2: Lexical analysis.** Regular expressions, tokens, longest match, NFAs and DFAs. Lab: write a scanner for a small language by hand and by regex.

**Week 3: Automata construction.** Thompson construction, subset construction, DFA minimization. Lab: code regex → NFA → DFA → minimal DFA in Python and check it on the (a|b)*abb example (14 NFA states, 5 DFA states, 4 minimal).

**Week 4: Context-free grammars.** Derivations, ambiguity, precedence, associativity, left recursion, left factoring. Lab: design an unambiguous expression grammar and a recursive-descent parser for it.

**Week 5: Top-down parsing.** FIRST/FOLLOW, LL(1) tables, predictive and recursive-descent parsing, error recovery. Lab: write a FIRST/FOLLOW calculator and an LL(1) table generator.

**Week 6: Bottom-up parsing.** LR(0) items, SLR, LR(1), LALR(1), conflicts, yacc/bison. Lab: build an SLR generator or use bison for the expression grammar (12 LR(0) states) and resolve conflicts with precedence declarations.

**Week 7: Midterm and abstract syntax.** Review. Lab: define AST classes, a visitor, and a pretty-printer; round-trip programs through the parser.

**Week 8: Semantic analysis and types.** Symbol tables, scope (lexical versus dynamic), type checking, coercions, type inference and unification. Lab: add a type checker and a symbol table with nested scopes to your language.

**Week 9: Intermediate representations.** Three-address code, basic blocks and control-flow graphs, SSA and phi-functions. Lab: translate your AST to TAC, split it into basic blocks and draw the CFG.

**Week 10: Optimization I.** Constant folding and propagation, CSE, dead-code elimination, strength reduction, inlining. Lab: implement three optimization passes and compare with gcc's output on Compiler Explorer.

**Week 11: Data-flow analysis and loops.** Liveness, reaching definitions, available expressions, fixed-point iteration, dominators, loop-invariant code motion. Lab: implement liveness analysis on your CFG.

**Week 12: Code generation.** Instruction selection, register allocation by graph colouring and linear scan, calling conventions, stack frames. Lab: generate x86-64 or stack-machine code and run the result.

**Week 13: Runtime systems and language concepts.** Memory management (reference counting, mark-sweep, generational), closures, the lambda calculus, evaluation strategies, objects and vtables, JIT. Lab: add closures or a garbage collector to your interpreter; implement Church numerals.

**Week 14: Project integration and review.** Final project demonstration: a working compiler or interpreter with tests, a short design report and performance measurements. Past-paper revision.

## Assessment pattern used in this course
Three assignments (lexical analysis, grammars and top-down parsing; bottom-up parsing, semantics, types and the lambda calculus; intermediate code, optimization, code generation and runtime), a class test, and a three-hour final. Practise by redoing every automaton, table and trace by hand, then confirming it with your own code.

## Study tips
- Build the compiler incrementally and keep a growing suite of tiny test programs with expected output.
- Draw automata, parse trees and CFGs on paper; most errors are visible once drawn.
- Always compare your optimizer with a real compiler (`gcc -O2 -S`): reading assembly is the fastest way to learn what optimizations really do.
- Learn one functional language (OCaml, Haskell or Racket) to see types, pattern matching and closures in their native setting.
- When a parser generator reports a conflict, work out the two competing parses by hand before choosing how to resolve it.
