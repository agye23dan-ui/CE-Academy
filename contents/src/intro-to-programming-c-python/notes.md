# Introduction to Programming (C and Python): Complete Lecture Notes

This course teaches two languages on purpose. **C** shows you what the machine really does: memory, addresses, bytes. **Python** shows you how to express ideas quickly with a rich standard library. A computer engineer needs both. Every concept below is shown in C first, then in Python where the contrast teaches something.

Compile C with warnings on: gcc -std=c11 -Wall -Wextra -Wpedantic -g file.c -o file. Run Python 3.10 or later.

## Chapter 1. How Programs Run

### 1.1 From source to execution
- **C is compiled:** preprocessor (#include, #define) → compiler (source to assembly) → assembler (object file) → linker (joins objects and libraries into an executable). The result is native machine code.
- **Python is interpreted:** source is compiled to bytecode, which a virtual machine executes. Slower in raw speed, but no separate build step.
- A program is a sequence of instructions plus data. The CPU fetches, decodes and executes instructions; variables live in memory or registers.

### 1.2 The smallest programs
C:
```c
#include <stdio.h>
int main(void) {
    printf("Hello, world\n");
    return 0;
}
```
Python:
```python
print("Hello, world")
```
The C `main` returns an exit status (0 means success). Python runs top to bottom.

### 1.3 Types and values
**C** is statically typed. Common types: char (1 byte), short, int (typically 32-bit), long, long long, float (32-bit), double (64-bit), and unsigned variants. sizeof gives sizes. Integer types are fixed-width and can overflow: unsigned arithmetic wraps modulo 2^n, but signed overflow is **undefined behaviour**. Use <stdint.h> types (int32_t, uint8_t) when width matters.
**Python** is dynamically typed. int has arbitrary precision (no overflow), float is a 64-bit double, plus str, bool, list, tuple, dict, set, None.

**Number representation.** Integers use two's complement: an 8-bit value of 0xFF is 255 unsigned and -1 signed. Floating point (IEEE 754) stores sign, exponent and mantissa, so 0.1 + 0.2 != 0.3 exactly. Compare floats with a tolerance (abs(a - b) < 1e-9, or math.isclose).

### 1.4 Operators
- Arithmetic: + - * / %. In C, / on two ints is **integer division** that truncates toward zero (7 / 2 is 3, -7 / 2 is -3); % gives the remainder with the sign of the dividend (-7 % 3 is -1). In Python, / is true division (7 / 2 is 3.5), // floors (-7 // 2 is -4) and % takes the sign of the divisor (-7 % 3 is 2).
- Comparison and logic: == != < > <= >= and, in C, && || !. Python uses and, or, not. Both **short-circuit**.
- Bitwise: & | ^ ~ << >>. x << n multiplies by 2^n, x & (x - 1) clears the lowest set bit, (x >> n) & 1 reads bit n.
- Assignment shortcuts: +=, -=, ++ (C only).
- C pitfall: `if (x = 5)` assigns instead of comparing. Compile with -Wall to catch it.

### 1.5 Input and output
C: printf with format specifiers (%d int, %ld long, %u unsigned, %f double, %c char, %s string, %p pointer, %x hex, %5.2f width and precision); scanf("%d", &n) needs the **address** of the variable and returns the number of items read (always check it). fgets(buf, sizeof buf, stdin) is the safe way to read a line.
Python: print(f"{x:5.2f}"), input() returns a string, int(input()) converts.

## Chapter 2. Control Flow

### 2.1 Selection
C: if / else if / else, switch (integer cases, each needs break to avoid fall-through), the conditional expression c ? a : b. Any nonzero value is true.
Python: if / elif / else, a conditional expression (a if c else b), and match for pattern matching. Indentation is syntax.

### 2.2 Iteration
C: while, do-while (body runs at least once), for (init; test; update). Python: while and for item in iterable (range, lists, strings, dicts, files).
- break exits the loop, continue skips to the next iteration.
- Python for-else: the else block runs if the loop finished without break.
- **Loop invariants:** a statement that is true before and after each iteration. Use them to prove a loop correct. For summing an array, the invariant is "sum equals the total of elements 0 through i - 1".
- **Off-by-one errors** are the most common bug. For n items, indices run 0 to n - 1. Use < n, not <= n.

### 2.3 Worked example: classic loops
Sum of digits (C):
```c
int digit_sum(int n) {
    int s = 0;
    while (n > 0) { s += n % 10; n /= 10; }
    return s;
}
```
digit_sum(4821) returns 15. In Python: sum(int(d) for d in str(n)).
Greatest common divisor by Euclid: while (b != 0) { t = a % b; a = b; b = t; } return a. gcd(48, 18) gives 6 (steps: 48 mod 18 = 12, then 18 mod 12 = 6, then 12 mod 6 = 0).
Primality: test divisors i from 2 while i * i <= n. Fizz-buzz uses the order of tests (check 15 first).

### 2.4 Designing with pseudocode and stepwise refinement
State the inputs and outputs, outline the algorithm in plain steps, trace it on a small example by hand, then code it, then test with edge cases (empty input, one element, maximum size, negative numbers).

## Chapter 3. Functions

### 3.1 Functions in C
```c
double average(const int a[], size_t n) {
    if (n == 0) return 0.0;
    long sum = 0;
    for (size_t i = 0; i < n; i++) sum += a[i];
    return (double)sum / n;
}
```
- Declare a **prototype** before use: double average(const int a[], size_t n);. Headers contain prototypes.
- Parameters are **passed by value**: the function receives copies. To modify the caller's variable, pass a pointer: void swap(int *a, int *b).
- Arrays decay to pointers when passed, so also pass the length. sizeof inside the function gives the pointer size, not the array size.
- Scope: a variable lives within its block. **static** local variables keep their value between calls. Globals are visible everywhere and should be avoided.
- Use `const` for read-only parameters.

### 3.2 Functions in Python
```python
def average(xs):
    return sum(xs) / len(xs) if xs else 0.0
```
Parameters can have defaults (def f(x, k=2)), be keyword arguments, or gather extras (`*args`, `**kwargs`). Functions are objects: pass them to others (sorted(words, key=len)), return them, or write a lambda. Python passes **references to objects**: mutating a list inside a function changes the caller's list, but rebinding the name does not. The mutable default argument trap: def f(x, acc=[]) shares one list across calls. Use None and create the list inside.

### 3.3 Recursion
A recursive function calls itself on a smaller problem and needs a **base case**.
```c
unsigned long fact(unsigned n) { return n <= 1 ? 1 : n * fact(n - 1); }
```
Each call gets a **stack frame**; too deep a recursion overflows the stack (C crashes, Python raises RecursionError after about 1000 calls). Trace fact(4) as 4·3·2·1 = 24. Fibonacci by naive recursion takes O(2^n) time because of repeated work; memoisation or iteration brings it to O(n). Binary search, merge sort, tree traversals and the Tower of Hanoi (2^n - 1 moves) are naturally recursive.

### 3.4 Modular design
Split programs into small functions with one job each and clear contracts: preconditions, postconditions. In C, put interfaces in .h files and implementations in .c files. In Python, use modules and packages (import). Test each function in isolation.

## Chapter 4. Arrays, Strings and Structures

### 4.1 Arrays
C: int a[5] = {1, 2, 3}; allocates 5 contiguous ints (the rest zeroed). Indexing a[i] is *(a + i). **C does not check bounds**: reading or writing a[5] is undefined behaviour and the most frequent source of crashes and security holes (buffer overflows). Multi-dimensional arrays are stored row by row (row-major), so iterate with the column index in the inner loop for cache efficiency.
Python: lists are dynamic arrays of references. Slicing xs[1:4], negative indices xs[-1], list comprehension [x*x for x in xs if x % 2 == 0].

### 4.2 Strings
C strings are char arrays ended by '\0'. strlen counts characters before the terminator, so "cat" occupies 4 bytes. Use strncpy/snprintf carefully, strcmp for comparison (never ==), and make sure the buffer has room for the terminator. String literals are read-only: char *s = "hi"; s[0] = 'H'; is undefined; char s[] = "hi"; is a modifiable copy.
Python strings are immutable Unicode sequences: s.split(), "-".join(parts), s.strip(), s.upper(), f-strings, slicing, in.

### 4.3 Structures and records
```c
struct point { double x, y; };
struct point p = {3.0, 4.0};
double r = sqrt(p.x * p.x + p.y * p.y);
```
Use p->x through a pointer. typedef gives a short name. Padding and alignment may make sizeof(struct) larger than the sum of the fields. Python equivalents: tuples, dictionaries, classes, and dataclasses (@dataclass).

### 4.4 Dictionaries and sets (Python)
dict gives average O(1) lookup by key; set tests membership in O(1). Counting words: counts[w] = counts.get(w, 0) + 1, or collections.Counter. In C you build such structures yourself (hash tables).

### 4.5 File I/O
C: FILE *f = fopen("data.txt", "r"); if (!f) { perror("open"); return 1; } ... fclose(f);. Always check the return value of fopen. Read with fgets/fscanf, write with fprintf.
Python: with open("data.txt") as f: for line in f: ... (the with statement closes the file even on errors).

## Chapter 5. Pointers

### 5.1 Addresses and pointers
Every variable has an address. A **pointer** is a variable that stores an address. For `int x = 7; int *p = &x;`:
- &x is the address of x; p holds it.
- *p is the value at that address (**dereference**): *p = 9; changes x.
- A pointer has a type so the compiler knows the size of what it points to. NULL is the "points to nothing" value; dereferencing NULL crashes.
- Pointer printing: printf("%p", (void *)p).

### 5.2 Pointer arithmetic
p + 1 advances by sizeof(*p) bytes, not 1 byte. For int a[4], a[i] equals *(a + i); &a[i] equals a + i. Subtracting two pointers into the same array gives an element count. Never go beyond one past the end of the array.

```c
int a[] = {10, 20, 30, 40};
int *p = a + 1;   /* points at 20 */
printf("%d %d\n", *p, *(p + 2));   /* 20 40 */
p++;              /* now points at 30 */
```

### 5.3 Pointers and functions
Passing pointers lets a function modify caller data or return several results:
```c
void divmod(int a, int b, int *q, int *r) { *q = a / b; *r = a % b; }
int q, r; divmod(17, 5, &q, &r);   /* q = 3, r = 2 */
```
Function pointers allow callbacks, as in qsort(a, n, sizeof a[0], cmp).

### 5.4 Pointers to pointers and 2D data
`char **argv` is an array of strings. An array of arrays can be built as an array of row pointers. int (*pa)[3] is a pointer to an array of 3 ints.

### 5.5 Common pointer bugs
- Uninitialised pointer: int *p; *p = 5; (writes to a random address).
- Dangling pointer: returning the address of a local variable, or using memory after free.
- Off-by-one writes past the end of an array.
- Confusing `char *` strings with arrays (sizeof differs).
- Forgetting that p == q compares addresses, not contents.

## Chapter 6. Memory Management

### 6.1 The memory layout of a process
- **Code (text):** the machine instructions (read-only).
- **Static/global data:** globals and static locals, living for the whole run.
- **Stack:** local variables and call frames, allocated and freed automatically (LIFO). Fast but limited in size (typically about 8 MB). Returning the address of a local is a bug because the frame is gone.
- **Heap:** memory you request at run time with malloc and release with free; lives until freed; size limited by the OS.

### 6.2 Dynamic allocation in C
```c
int *a = malloc(n * sizeof *a);
if (a == NULL) { /* handle failure */ }
for (size_t i = 0; i < n; i++) a[i] = 0;   /* or calloc(n, sizeof *a) */
a = realloc(a, 2 * n * sizeof *a);          /* grow: keep the old pointer until success */
free(a); a = NULL;
```
Rules: every malloc needs exactly one free; never free twice; never use memory after free; check for NULL; the product n * sizeof can overflow for large n.
- **Memory leak:** allocated memory never freed (the program's footprint grows).
- **Double free** and **use-after-free:** undefined behaviour and common security vulnerabilities.
- **Buffer overflow:** writing past the allocated size.

### 6.3 Dynamic data structures
A singly linked list node:
```c
struct node { int value; struct node *next; };
```
Inserting at the head: n->next = head; head = n; (O(1)). Traversal: for (p = head; p; p = p->next). Freeing: save next before freeing the current node. Other structures: stacks, queues (circular buffer), binary trees, hash tables. Compare array and linked list: arrays have O(1) indexing and good cache behaviour; lists have O(1) insertion at a known position but O(n) search.

### 6.4 Memory in Python
Python manages memory automatically with reference counting plus a cycle collector. Names are references; `a = b` makes both names point to the same object. Copy a list with a[:] or copy.deepcopy for nested data. Beware shared references when building a list of lists: [[0] * 3] * 3 creates three references to one row; use [[0] * 3 for _ in range(3)].

### 6.5 Cost model
Know the costs: array indexing O(1); linear search O(n); binary search on sorted data O(log n); insertion sort O(n^2); merge sort O(n log n); hash lookup O(1) on average. Memory use is as important as time on small devices.

## Chapter 7. Algorithms to Know

- **Linear search** O(n); **binary search** O(log n) requires sorted data. Binary search on a[lo..hi]: compute mid = lo + (hi - lo)/2 (avoids overflow), compare, discard half. Searching 1,000,000 sorted items takes about 20 comparisons.
- **Selection, insertion and bubble sort** are O(n^2); **merge sort** and **heap sort** O(n log n); **quicksort** is O(n log n) average, O(n^2) worst case. Python's built-in sorted uses Timsort (stable, O(n log n)).
- **Stability:** a stable sort keeps the order of equal keys.
- **Two-pointer and sliding window** techniques solve many array problems in O(n).
- **Big-O in practice:** count basic operations as a function of the input size n. Two nested loops over n items cost n^2; halving each step costs log n.

## Chapter 8. Debugging and Testing

### 8.1 A systematic method
1. **Reproduce** the bug with the smallest input.
2. **Observe** the actual versus expected behaviour; read the compiler warnings and error messages from the top.
3. **Hypothesise** a cause, **test** it (add a print, set a breakpoint), and change one thing at a time.
4. **Fix** the root cause, add a regression test, and re-run all tests.
Explain the bug aloud to a rubber duck: stating the code line by line often reveals the error.

### 8.2 Tools
- **Compiler warnings** (-Wall -Wextra) and **sanitisers**: -fsanitize=address,undefined detects buffer overflows, use-after-free and signed overflow at run time.
- **gdb:** break main, run, next, step, print x, backtrace, watch var, finish, continue. Build with -g.
- **valgrind** (--leak-check=full) finds leaks and invalid reads and writes.
- **printf debugging** with a clear label and fflush(stdout) when needed; Python's logging and pdb (breakpoint()).
- **assert(condition)** documents and checks assumptions during development.

### 8.3 Testing
- **Unit tests** check one function: in Python use pytest or unittest, in C a small test harness with assert.
- Choose cases: typical, boundary (0, 1, max, empty), invalid, and random (property-based). Test the **spec**, not your implementation.
- **Test-driven development:** write a failing test, make it pass, refactor.
- Coverage shows what code ran, not that it is correct.

### 8.4 Defensive programming and errors
Validate inputs, check every return value (malloc, fopen, scanf), avoid magic numbers (use const or #define), and fail loudly. Python uses exceptions: try / except ValueError / finally, raise. C uses return codes and errno.

### 8.5 A catalogue of classic C bugs
1. Off-by-one in loops and array sizes.
2. Missing break in a switch.
3. = instead of == in a condition.
4. Uninitialised variables (the value is indeterminate).
5. Integer division where floating-point was intended: 1/2 is 0.
6. Comparing strings with ==.
7. Returning the address of a local variable.
8. Using sizeof on an array parameter.
9. Mismatched printf specifier and argument (for example %d with a double).
10. Memory leaks and double frees.

## Chapter 9. Style and Good Habits
- Choose descriptive names, keep functions short (one screen), comment the **why** not the what.
- Format consistently (use clang-format or black).
- Use version control (git) from the first day: commit small, meaningful changes.
- Read other people's code and the standard library documentation.
- Prefer clarity to cleverness; optimise only after measuring.
