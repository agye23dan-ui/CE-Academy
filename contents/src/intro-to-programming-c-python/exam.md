# Introduction to Programming (C and Python): Final Examination

Duration: 3 hours. No computer, no notes. Total: 100 marks. Assume a typical 64-bit system (int is 4 bytes, double 8 bytes) and the usual #includes for C snippets.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** In C, after `int x = 10; x /= 4;` the value of x is
A) 2.5  B) 2  C) 3  D) 0

**2.** In C, `printf("%d", 5 > 3 && 2 > 4);` prints
A) 0  B) 1  C) 2  D) true

**3.** In C, after `int i = 0; while (i < 3) i += 2;` the value of i is
A) 2  B) 3  C) 4  D) 6

**4.** In Python, `[x * x for x in range(4)]` evaluates to
A) [1, 4, 9, 16]  B) [0, 1, 4, 9]  C) [0, 1, 4, 9, 16]  D) [0, 2, 4, 6]

**5.** In Python, `"a,b,,c".split(",")` evaluates to
A) ['a', 'b', 'c']  B) ['a', 'b', '', 'c']  C) ['a,b,,c']  D) ['a', 'b', ' ', 'c']

**6.** On a typical system, sizeof(double) in C is
A) 4  B) 8  C) 16  D) 2

**7.** In C, `unsigned x = 0; x--;` leaves x equal to
A) -1  B) 0  C) the largest unsigned value (4294967295 for 32 bits)  D) undefined behaviour

**8.** Given `int a[] = {1, 2, 3};`, the value of *(a + 1) is
A) 1  B) 2  C) 3  D) the address of a[1]

**9.** If p is declared `const int *p`, then
A) p cannot be reassigned  B) *p cannot be modified through p  C) both p and *p are constant  D) p must be NULL

**10.** A very common cause of stack overflow is
A) infinite recursion  B) calling malloc  C) using printf  D) using a long variable name

**11.** Calling free twice on the same pointer is
A) harmless  B) undefined behaviour  C) a compile-time error  D) guaranteed to crash with a message

**12.** In Python, `def f(x, acc=[])` is a problem because the default list is
A) copied on every call  B) created once and shared between calls  C) read-only  D) not allowed

**13.** For two nested loops each running from 0 to n - 1, the running time is
A) O(n)  B) O(n log n)  C) O(n^2)  D) O(2^n)

**14.** The complexity of merge sort is
A) O(n)  B) O(n log n)  C) O(n^2)  D) O(log n)

**15.** Which structure follows the last-in, first-out rule?
A) queue  B) stack  C) array only  D) hash table

**16.** Inserting a new node at the head of a singly linked list takes
A) O(1)  B) O(log n)  C) O(n)  D) O(n^2)

**17.** Which gdb command shows the chain of function calls at a crash?
A) list  B) backtrace  C) next  D) quit

**18.** In Python, `[1] is [1]` evaluates to
A) True  B) False  C) an error  D) None

**19.** In C, executing `char *s = "hi"; s[0] = 'H';` is
A) always fine  B) undefined behaviour because string literals are read-only  C) a compile-time error always  D) fine only inside main

**20.** In C, `printf("%d", 'a' + 1);` prints (ASCII 'a' is 97)
A) b  B) 98  C) 97  D) 1

## Section B: Short Questions (40 marks)

**B1. (5)** Convert 200 to binary and hexadecimal. What signed value does the 8-bit pattern of 200 represent in two's complement?

**B2. (5)** Predict the output of this Python code:
```python
a = [3, 1, 2]
b = sorted(a)
a.sort(reverse=True)
print(a, b)
d = {'a': 1, 'b': 2}
d2 = d.copy()
d2['c'] = 3
print(d, d2)
print(3 * "ab", [0] * 3, bool(""), bool("0"))
```

**B3. (5)** Predict the output of this C program and explain the role of static:
```c
int counter(void) {
    static int c = 0;
    return ++c;
}
int main(void) {
    int a = counter();
    int b = counter();
    int c = counter();
    printf("%d %d %d\n", a, b, c);
    return 0;
}
```

**B4. (5)** This C function should swap two integers but does not. Explain why, and write a correct version and call.
```c
void swap(int a, int b) { int t = a; a = b; b = t; }
```

**B5. (5)** Give the Big-O running time for each fragment: (a) for (i = 0; i < n; i++) for (j = 0; j < n; j++) work(); (b) for (i = 1; i < n; i *= 2) work(); (c) a loop of n iterations followed by a separate loop of n iterations; (d) three nested loops each of n iterations; (e) while (n > 0) { n /= 3; }.

**B6. (5)** Write a recursive Python function total(xs) returning the sum of a list and trace total([1, 2, 3, 4]).

**B7. (5)** For the C code below, state for each variable whether it is stored on the stack, the heap, or in static (global) memory: g, n, p, *p (the block it points to), and the string literal "hi".
```c
int g = 5;
int main(void) {
    int n = 3;
    int *p = malloc(n * sizeof *p);
    char *s = "hi";
    ...
}
```

**B8. (5)** Design at least five test cases for a function max3(a, b, c) returning the largest of three integers. Include a boundary case, a case with equal values, and negative numbers.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. (Python)** Write a program that takes the string "4 8 15 x 16 23 42 8 y 4 8", converts each token to an integer using exception handling and records invalid tokens.
(a) Print the list of valid numbers and the list of invalid tokens. [3]
(b) Compute the mean (2 decimal places), median and mode. [4]
(c) Print a text histogram with one line per distinct value (value, then one * per occurrence). [3]

**C2. (C)** Implement an integer stack with a dynamic array and use it to evaluate postfix (reverse Polish) expressions.
(a) Define the stack type, st_init, st_push (growing by doubling from capacity 4) and st_pop (returning -1 when empty). [5]
(b) Write int eval_postfix(const char *expr, int *result) for expressions with non-negative integers separated by spaces and the operators + - * /. [3]
(c) Trace "10 2 8 * + 3 -" and "3 4 + 2 *", showing the stack after each token. [2]

**C3. (C)** A sorted singly linked list uses struct node { int value; struct node *next; };.
(a) Write void insert_sorted(struct node **head, int v) that inserts v keeping the list in ascending order. [4]
(b) Write int delete_first(struct node **head, int v) that removes the first node containing v and returns 1, or returns 0 if absent. [3]
(c) Show the list after insert_sorted with 5, 1, 3, 4 (in that order) and then delete_first(3). [2]
(d) Why is a pointer to a pointer convenient here? [1]

**C4. (C)** Study this program.
```c
#include <stdlib.h>
int *g = NULL;
int main(void) {
    int n = 3;
    int *a = malloc(n * sizeof *a);
    char *s = malloc(10);
    g = a;
    for (int i = 0; i < 4; i++) {
        char *t = malloc(8);
        if (i % 2 == 0) free(t);
    }
    free(s);
    return 0;
}
```
(a) For each of n, a, s, g, t say where the variable itself lives and where the memory it points to lives. [3]
(b) How many allocations are never freed, and how many bytes (assume a 4-byte int)? [3]
(c) Which of the leaked blocks is still reachable at exit and which is definitely lost? [2]
(d) Show the changes that remove all leaks. [2]

**C5. (C)** The program below crashes or misbehaves, and AddressSanitizer reports the output shown.
```c
#include <stdio.h>
#include <stdlib.h>
int main(void) {
    int n = 5;
    int *a = malloc(n * sizeof *a);
    for (int i = 0; i <= n; i++) a[i] = i;
    printf("%d\n", a[n]);
    free(a);
    return 0;
}
```
Abbreviated sanitiser output:
```
ERROR: AddressSanitizer: heap-buffer-overflow
WRITE of size 4 at 0x... thread T0
    #0 0x... in main prog.c:6
0x... is located 0 bytes after 20-byte region [0x..., 0x...)
allocated by thread T0 here:
    #0 0x... in malloc
    #1 0x... in main prog.c:5
```
(a) Explain what the report says. [3]
(b) Identify the bug and explain why a normal run might appear to work. [3]
(c) Give the corrected program. [2]
(d) Describe how you would prevent this whole class of bug in code you write. [2]

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **A** · 3 **C** · 4 **B** · 5 **B** · 6 **B** · 7 **C** · 8 **B** · 9 **B** · 10 **A** · 11 **B** · 12 **B** · 13 **C** · 14 **B** · 15 **B** · 16 **A** · 17 **B** · 18 **B** · 19 **B** · 20 **B**

Brief reasons:
1. Integer arithmetic: 10 / 4 = 2.
2. 5 > 3 is true but 2 > 4 is false, so && gives 0.
3. i takes 0, 2, 4; the loop stops at 4.
4. Squares of 0, 1, 2, 3.
5. Consecutive commas produce an empty string.
6. double is 64 bits.
7. Unsigned arithmetic wraps modulo 2^n.
8. a + 1 points to a[1], and * reads 2.
9. const int * means the pointee is read-only through p; p itself can be reassigned.
10. Each call needs a stack frame; the stack is finite.
11. Double free is undefined behaviour.
12. Default values are evaluated once when the function is defined.
13. n · n iterations.
14. T(n) = 2T(n/2) + O(n).
15. Stack.
16. Create a node and relink two pointers.
17. backtrace (bt).
18. Two separate list objects: == would be True, but is is False.
19. String literals live in read-only memory.
20. 97 + 1 = 98 (the int promoted value).

## Section B solutions

**B1.** Step 1: 200 = 128 + 64 + 8 = **11001000** in binary (check by repeated division: 200 ÷ 2 = 100 r 0, 50 r 0, 25 r 0, 12 r 1, 6 r 0, 3 r 0, 1 r 1, 0 r 1).
Step 2: hexadecimal: 1100 1000 = C, 8: **C8**.
Step 3: as an 8-bit two's complement value the leading 1 means negative: 200 - 256 = **-56**. (2 marks binary, 1 hex, 2 signed value.)

**B2.** Output:
**[3, 2, 1] [1, 2, 3]**
**{'a': 1, 'b': 2} {'a': 1, 'b': 2, 'c': 3}**
**ababab [0, 0, 0] False True**
(sorted returns a new list; sort changes the list in place; copy makes an independent dictionary; the empty string is falsy but "0" is a non-empty string, so it is truthy.)

**B3.** Output: **1 2 3**. A static local variable is initialised once and keeps its value between calls, so each call increments the same c (the variables a, b, c in main are unrelated to it). Storage is in static memory rather than on the stack.

**B4.** C passes arguments **by value**: swap modifies copies, so the caller's variables are unchanged. Correct version:
```c
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}
/* call */
int x = 3, y = 4;
swap(&x, &y);          /* now x = 4, y = 3 */
```

**B5.** (a) **O(n^2)**. (b) i doubles each time, so **O(log n)**. (c) n + n = 2n, so **O(n)**. (d) **O(n^3)**. (e) n is divided by 3 each step, so **O(log n)**. (1 mark each.)

**B6.**
```python
def total(xs):
    if not xs:
        return 0
    return xs[0] + total(xs[1:])
```
Trace: total([1,2,3,4]) = 1 + total([2,3,4]) = 1 + (2 + total([3,4])) = 1 + (2 + (3 + total([4]))) = 1 + (2 + (3 + (4 + total([])))) with total([]) = 0, so the result is 1 + 2 + 3 + 4 = **10**. (The base case is the empty list.)

**B7.** **g: static (global) memory. n: stack. p (the pointer variable): stack. *p (the 12-byte block): heap. The string literal "hi": static, read-only memory (and s, the pointer to it, is on the stack).** (1 mark each.)

**B8.** Sample cases (expected results in brackets): max3(1, 2, 3) → 3; max3(3, 2, 1) → 3; max3(2, 3, 1) → 3 (maximum in each of three positions); max3(5, 5, 5) → 5 (all equal); max3(4, 4, 2) → 4 (tie for the maximum); max3(-1, -5, -3) → -1 (negatives); max3(0, -2, -1) → 0; max3(INT_MAX, 0, -1) → INT_MAX (boundary). A good set covers each position of the maximum, ties, negatives and extreme values. (1 mark per justified case, up to 5.)

## Section C solutions

**C1.**
```python
import statistics
from collections import Counter

tokens = "4 8 15 x 16 23 42 8 y 4 8".split()
nums, bad = [], []
for t in tokens:
    try:
        nums.append(int(t))
    except ValueError:
        bad.append(t)

print(nums, bad)
print(round(statistics.mean(nums), 2), statistics.median(nums), statistics.mode(nums))

counts = Counter(nums)
for k in sorted(counts):
    print(f"{k:3d} {'*' * counts[k]}")
```
(a) **[4, 8, 15, 16, 23, 42, 8, 4, 8] ['x', 'y']**.
(b) The sum is 128 over 9 values, so the mean is **14.22**. Sorted: 4, 4, 8, 8, 8, 15, 16, 23, 42, so the median (5th value) is **8**. The mode is **8** (it occurs three times).
(c) The histogram:
```
  4 **
  8 ***
 15 *
 16 *
 23 *
 42 *
```
(Marks: 3 for (a), 2 for the mean, 1 median, 1 mode, 3 for the histogram.)

**C2.**
(a)
```c
#include <stdlib.h>

typedef struct { int *a; size_t top, cap; } stack;

void st_init(stack *s) { s->a = NULL; s->top = s->cap = 0; }

int st_push(stack *s, int x) {
    if (s->top == s->cap) {
        size_t nc = s->cap ? 2 * s->cap : 4;
        int *p = realloc(s->a, nc * sizeof *p);
        if (!p) return -1;
        s->a = p;
        s->cap = nc;
    }
    s->a[s->top++] = x;
    return 0;
}

int st_pop(stack *s, int *out) {
    if (s->top == 0) return -1;
    *out = s->a[--s->top];
    return 0;
}
```
(b)
```c
#include <ctype.h>
#include <string.h>

int eval_postfix(const char *expr, int *result) {
    stack s;
    st_init(&s);
    char buf[256];
    strncpy(buf, expr, sizeof buf - 1);
    buf[sizeof buf - 1] = '\0';
    for (char *tok = strtok(buf, " "); tok; tok = strtok(NULL, " ")) {
        if (isdigit((unsigned char)tok[0])) {
            if (st_push(&s, atoi(tok))) { free(s.a); return -1; }
        } else if (strlen(tok) == 1 && strchr("+-*/", tok[0])) {
            int a, b, r;
            if (st_pop(&s, &b) || st_pop(&s, &a)) { free(s.a); return -1; }
            switch (tok[0]) {
                case '+': r = a + b; break;
                case '-': r = a - b; break;
                case '*': r = a * b; break;
                default:
                    if (b == 0) { free(s.a); return -1; }
                    r = a / b;
            }
            if (st_push(&s, r)) { free(s.a); return -1; }
        } else {
            free(s.a);
            return -1;
        }
    }
    int ok = (s.top == 1) ? 0 : -1;
    if (ok == 0) st_pop(&s, result);
    free(s.a);
    return ok;
}
```
Notes: the second operand b is popped first (it was pushed last), which matters for - and /. strtok modifies its input, so the function works on a copy. Every error path frees the stack.
(c) "10 2 8 * + 3 -": push 10 → [10]; push 2 → [10, 2]; push 8 → [10, 2, 8]; * pops b = 8 and a = 2 and pushes 16 → [10, 16]; + gives 26 → [26]; push 3 → [26, 3]; - gives 26 - 3 = 23 → [23]. Result **23**. "3 4 + 2 *": [3] → [3, 4] → + gives [7] → [7, 2] → * gives [14]. Result **14**. (Marks: 5 for (a), 3 for (b), 2 for the trace.)

**C3.**
(a)
```c
struct node { int value; struct node *next; };

void insert_sorted(struct node **head, int v) {
    struct node *n = malloc(sizeof *n);
    if (!n) return;
    n->value = v;
    struct node **pp = head;
    while (*pp && (*pp)->value < v)
        pp = &(*pp)->next;
    n->next = *pp;
    *pp = n;
}
```
(b)
```c
int delete_first(struct node **head, int v) {
    for (struct node **pp = head; *pp; pp = &(*pp)->next) {
        if ((*pp)->value == v) {
            struct node *dead = *pp;
            *pp = dead->next;
            free(dead);
            return 1;
        }
    }
    return 0;
}
```
(c) Insert 5 gives 5. Insert 1 gives 1 → 5. Insert 3 gives 1 → 3 → 5. Insert 4 gives 1 → 3 → 4 → 5. Delete 3 gives **1 → 4 → 5**.
(d) The pointer pp points at the link that must change (either the head variable or some node's next field), so insertion and deletion at the head need no special case, and the caller's head pointer is updated automatically.

**C4.**
(a) **n**: an int on the stack (no pointee). **a**: pointer variable on the stack; its block is on the heap (12 bytes). **s**: pointer on the stack; its 10-byte block is on the heap. **g**: pointer variable in static (global) memory; it points at the same heap block as a. **t**: a pointer on the stack (recreated each iteration), pointing at an 8-byte heap block.
(b) Step 1: The block for a (12 bytes) is never freed.
Step 2: The loop allocates four 8-byte blocks for t; those from i = 0 and i = 2 are freed, but those from i = 1 and i = 3 are not, because t is overwritten without free.
Step 3: So **3 blocks are leaked: 12 + 8 + 8 = 28 bytes** (s is freed).
(c) The 12-byte block is **still reachable** at exit through the global g, so a leak checker reports it as "still reachable". The two 8-byte blocks (16 bytes) are **definitely lost**, because no pointer to them remains.
(d) Free t unconditionally (remove the if) or in every iteration, and add free(a); before return (g then dangles, so set g = NULL).
```c
for (int i = 0; i < 4; i++) {
    char *t = malloc(8);
    free(t);
}
free(s);
free(a);
g = NULL;
```

**C5.**
(a) The report says that line 6 performed a 4-byte write that fell 0 bytes after the end of a 20-byte heap block (5 ints), which was allocated at line 5. In other words, a write one element past the end of the array.
(b) The loop condition i <= n runs i from 0 to n inclusive, so the last iteration writes a[5], one past the valid indices 0 to 4. A normal run often "works" because the byte after the block belongs to heap bookkeeping or padding, and corrupting it may not crash immediately; the damage appears later or in an unrelated place, which makes the bug hard to find without a sanitiser.
(c)
```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 5;
    int *a = malloc(n * sizeof *a);
    if (!a) return 1;
    for (int i = 0; i < n; i++) a[i] = i;
    printf("%d\n", a[n - 1]);
    free(a);
    return 0;
}
```
(This prints 4.)
(d) Use < n for loops over n elements; keep the length next to the pointer (struct or parameter); avoid raw indexing by iterating with bounded helper functions; compile with -Wall -Wextra and -fsanitize=address,undefined during development; write unit tests that include boundary sizes (0, 1, n); and review every loop bound.
