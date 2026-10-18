# Introduction to Programming (C and Python): Assignments with Worked Solutions

Type and run every program yourself: reading solutions is not the same as programming. Compile C with gcc -std=c11 -Wall -Wextra -g, run Python 3.10 or later. Marks go for correctness, handling of edge cases, clarity and (for C) memory safety. The printed outputs shown in the solutions are the real outputs of the Python programs and the hand-traced outputs of the C programs.

# Assignment 1: Control Flow, Functions and Recursion (60 marks)

## Questions

**Q1. (8 marks, C)** Write a program that reads integers from standard input until it reads 0 (or input ends). It should print the count, sum, maximum, minimum and the mean (2 decimal places) of the numbers before the 0, or "no data" if there were none. Show the output for the input 4 9 -2 7 0.

**Q2. (6 marks, Python)** Write a function sieve(n) that returns all primes up to n using the Sieve of Eratosthenes. Show the result for n = 50 and explain why the inner loop can start at i * i.

**Q3. (6 marks, C)** Write int gcd(int a, int b) using Euclid's algorithm and long lcm(int a, int b). Trace gcd(48, 18) and give lcm(48, 18).

**Q4. (6 marks, Python)** The Collatz process maps n to n / 2 (if even) or 3n + 1 (if odd) until reaching 1. Write collatz(n) returning the number of steps. Report collatz(27), collatz(6) and collatz(1).

**Q5. (8 marks, C)** (a) Write void print_binary(unsigned n) that prints n in binary without leading zeros [5]. (b) Write int popcount(unsigned x) counting set bits with the x & (x - 1) trick, and explain why it works [3]. Give the results for n = 37 and for popcount(45) (binary 101101).

**Q6. (10 marks, Python)** (a) Write a recursive hanoi(n, a, b, c, moves) that records the moves needed to shift n discs from peg a to peg c using peg b. Show the moves for n = 3 and the number of moves for n = 5 [5]. (b) Write a recursive fast exponentiation power(b, e) that uses O(log e) multiplications. Show the recursion depth for power(2, 10) [3]. (c) State the recurrence for the number of moves in Hanoi and solve it [2].

**Q7. (10 marks)** Predict the output of each snippet. For the C snippets assume the right #includes and a main function.
(a) Python: x = 5; y = 2; print(x // y, x % y, -x // y, -x % y, x / y)
(b) C: int x = 7, y = 3; printf("%d %d %d %d\n", x / y, x % y, -x / y, -x % y);
(c) C: int s = 0; for (int i = 1; i <= 10; i++) { if (i % 3 == 0) continue; if (i > 8) break; s += i; } printf("%d\n", s);
(d) C: unsigned char c = 250; c += 10; printf("%d\n", c);
(e) Python: for i in range(3): for j in range(i): print(i, j, end=";")
(f) Python: def f(a, b=[]): b.append(a); return b  then  print(f(1), f(2))

**Q8. (6 marks)** (a) Explain integer overflow in C for signed and unsigned types [3]. (b) Explain why 0.1 + 0.2 == 0.3 is false in both C and Python, and show how to compare floating-point numbers safely [3].

## Solutions and Marking Guide

**Q1.**
```c
#include <stdio.h>

int main(void) {
    int x, count = 0, sum = 0, max = 0, min = 0;
    while (scanf("%d", &x) == 1 && x != 0) {
        if (count == 0) {
            max = min = x;
        } else {
            if (x > max) max = x;
            if (x < min) min = x;
        }
        sum += x;
        count++;
    }
    if (count == 0) {
        printf("no data\n");
        return 0;
    }
    printf("count=%d sum=%d max=%d min=%d mean=%.2f\n",
           count, sum, max, min, (double)sum / count);
    return 0;
}
```
Output for 4 9 -2 7 0: **count=4 sum=18 max=9 min=-2 mean=4.50**. Marks: 2 loop with scanf return check and sentinel, 2 initialising max and min from the first value (initialising both to 0 is wrong for all-negative or all-positive data), 1 sum and count, 1 the (double) cast so the mean is not truncated, 1 empty-input case, 1 output. Common error: dividing two ints.

**Q2.**
```python
def sieve(n):
    is_p = [True] * (n + 1)
    is_p[0:2] = [False, False]          # 0 and 1 are not prime
    for i in range(2, int(n ** 0.5) + 1):
        if is_p[i]:
            for j in range(i * i, n + 1, i):
                is_p[j] = False
    return [i for i, p in enumerate(is_p) if p]

print(sieve(50))
```
Output: **[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]**. The inner loop can start at i * i because any smaller multiple k * i with k < i has a prime factor smaller than i and was already crossed out in an earlier pass. The outer loop stops at sqrt(n) because every composite number up to n has a factor of at most sqrt(n). Running time is O(n log log n).

**Q3.**
```c
int gcd(int a, int b) {
    while (b != 0) {
        int t = a % b;
        a = b;
        b = t;
    }
    return a;
}

long lcm(int a, int b) {
    return (long)a / gcd(a, b) * b;   /* divide first to avoid overflow */
}
```
Trace gcd(48, 18): (a, b) = (48, 18), then t = 12 so (18, 12), then t = 6 so (12, 6), then t = 0 so (6, 0). Returns **6**. lcm(48, 18) = 48/6 · 18 = **144**. (Handle a or b negative or both zero as a bonus.)

**Q4.**
```python
def collatz(n):
    steps = 0
    while n != 1:
        n = n // 2 if n % 2 == 0 else 3 * n + 1
        steps += 1
    return steps

print(collatz(27), collatz(6), collatz(1))
```
Output: **111 8 0**.
Step 1: collatz(6): 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1: each arrow is one step, so **8 steps**.
Step 2: collatz(1): the loop does not run: **0**.
Step 3: collatz(27) climbs to a peak of 9232 before falling to 1: **111 steps** (the program counts them).

**Q5.**
(a)
```c
#include <stdio.h>

void print_binary(unsigned n) {
    char buf[33];
    int i = 0;
    if (n == 0) { puts("0"); return; }
    while (n > 0) {
        buf[i++] = '0' + (n % 2);   /* least significant bit first */
        n /= 2;
    }
    while (i > 0) putchar(buf[--i]);
    putchar('\n');
}
```
print_binary(37): remainders 1, 0, 1, 0, 0, 1 are stored, then printed in reverse: **100101**. (The buffer holds up to 32 bits.)
(b)
```c
int popcount(unsigned x) {
    int c = 0;
    while (x) { x &= x - 1; c++; }
    return c;
}
```
Subtracting 1 flips the lowest set bit to 0 and all the zeros below it to 1, so x & (x - 1) clears exactly the lowest set bit. The loop runs once per set bit.
Trace popcount(45): 45 = 101101₂. Step 1: x = 101101, x & (x - 1) = 101101 & 101100 = 101100, c = 1. Step 2: 101100 & 101011 = 101000, c = 2. Step 3: 101000 & 100111 = 100000, c = 3. Step 4: 100000 & 011111 = 0, c = 4.
popcount(45) = **4** (45 = 32 + 8 + 4 + 1).

**Q6.**
(a)
```python
def hanoi(n, a, b, c, moves):
    if n == 0:
        return
    hanoi(n - 1, a, c, b, moves)     # move n-1 discs out of the way to b
    moves.append((a, c))             # move the largest disc
    hanoi(n - 1, b, a, c, moves)     # move n-1 discs onto it

m = []
hanoi(3, 'A', 'B', 'C', m)
print(m, len(m))
m = []
hanoi(5, 'A', 'B', 'C', m)
print(len(m))
```
Output for n = 3: **[('A','C'), ('A','B'), ('C','B'), ('A','C'), ('B','A'), ('B','C'), ('A','C')]**, 7 moves. For n = 5: **31 moves**.
(b)
```python
def power(b, e):
    if e == 0:
        return 1
    h = power(b, e // 2)
    return h * h if e % 2 == 0 else h * h * b

print(power(2, 10), power(3, 13))
```
Trace power(2, 10): e = 10 → h = power(2, 5); e = 5 → h = power(2, 2); e = 2 → h = power(2, 1); e = 1 → h = power(2, 0) = 1, so power(2, 1) = 1 × 1 × 2 = 2; power(2, 2) = 2 × 2 = 4; power(2, 5) = 4 × 4 × 2 = 32; power(2, 10) = 32 × 32 = **1024**.
The recursion visits e = 10, 5, 2, 1, 0 (depth 5, with 4 multiplication steps), so O(log e) multiplications instead of e - 1. power(3, 13) = 1,594,323.
(c) Step 1: M(n) = 2 M(n - 1) + 1 with M(0) = 0 (move n - 1 discs, move the largest, move n - 1 discs again).
Step 2: M(1) = 1, M(2) = 3, M(3) = 7, M(4) = 15, M(5) = 31, so M(n) = 2^n - 1 (by induction).
Step 3: for n = 5 it is 31 ✓, and 64 discs would need 2^64 - 1 ≈ 1.8 × 10^19 moves.

**Q7.**
(a) **2 1 -3 1 2.5** (Python floors: -5 // 2 is -3 and -5 % 2 is 1).
(b) **2 1 -2 -1** (C truncates toward zero: -7/3 is -2 and -7 % 3 is -1).
(c) Step 1: i = 1, 2: added (s = 3); i = 3: skipped by continue; i = 4, 5: added (s = 12); i = 6: skipped; i = 7, 8: added (s = 27); i = 9: skipped by continue (9 % 3 == 0) before the break test; i = 10: 10 % 3 ≠ 0 and i > 8, so break.
Step 2: sum = 1 + 2 + 4 + 5 + 7 + 8 = **27**.
(d) Step 1: 250 + 10 = 260.
Step 2: unsigned char wraps modulo 256: 260 - 256 = **4**.
(e) **1 0;2 0;2 1;** (the pairs with j < i).
(f) **[1, 2] [1, 2]**: the default list is created once and shared, so both calls append to the same list, and both results are the same object printed after both calls.

**Q8.**
(a) Unsigned overflow is well-defined: arithmetic wraps modulo 2^n (255 + 1 gives 0 for an 8-bit unsigned). Signed overflow is **undefined behaviour** in C: the compiler may assume it never happens, so INT_MAX + 1 can give a negative number, crash, or be optimised in surprising ways. Python integers never overflow because they have arbitrary precision.
(b) 0.1, 0.2 and 0.3 have no exact binary representation, so 0.1 + 0.2 = 0.30000000000000004 in double precision. Compare with a tolerance: fabs(a - b) < 1e-9 in C (<math.h>), or math.isclose(a, b) in Python (which uses relative and absolute tolerances).

---

# Assignment 2: Arrays, Strings, Structures and Pointers (70 marks)

## Questions

**Q1. (10 marks)** Predict the output (assume the right #includes).
(a) C: int a[] = {10, 20, 30, 40, 50}; int *p = a; p += 2; *p = *(p - 1) + *(p + 1); printf("%d %d %ld\n", *p, a[2], (long)(p - a));
(b) C: void f(int *a, int b) { *a += b; b *= 2; }  then  int x = 3, y = 4; f(&x, y); f(&y, x); printf("%d %d\n", x, y);
(c) C: char s[] = "hello"; printf("%zu %zu\n", strlen(s), sizeof s);
(d) C: char *s = "abcdef"; printf("%c %c %s\n", *(s + 2), s[4], s + 3);
(e) C: int i = 5; int a = i++; int b = ++i; printf("%d %d %d\n", a, b, i);
(f) Python: a = [1, 2, 3]; b = a; b.append(4); c = a[:]; c.append(5); print(a, b, c)

**Q2. (10 marks, C)** (a) Write void reverse(int *a, size_t n) that reverses an array in place using two pointers [4]. (b) Use only reverse to write void rotate_left(int *a, size_t n, size_t k) that rotates the array left by k places (state the idea and show it on {1, 2, 3, 4, 5} with k = 2) [6].

**Q3. (10 marks, C)** Implement (a) size_t my_strlen(const char *s) without using string.h [2]; (b) int count_vowels(const char *s) [3]; (c) int is_palindrome(const char *s) that ignores case and non-alphanumeric characters [5]. Test with "Education", "Level", "A man, a plan, a canal: Panama" and "hello".

**Q4. (8 marks, Python)** For the text "the quick brown fox jumps over the lazy dog the fox", build a word-frequency dictionary and print the three most frequent words, once using a plain dict and once using collections.Counter.

**Q5. (10 marks, C)** Define struct student { char name[20]; double gpa; }. Make an array of three students (Ana 3.4, Ben 3.9, Chi 3.1), compute the mean GPA, and sort them in descending order of GPA using qsort with a comparison function. Show the sorted order and the mean.

**Q6. (8 marks, Python)** (a) Write matmul(A, B) for square matrices using list comprehensions and show A = [[1,2],[3,4]], B = [[5,6],[7,8]] [5]. (b) Explain why [[0] * 3] * 3 is a bug when building a matrix [3].

**Q7. (8 marks, C)** The following function has two serious bugs. Find them, explain what can go wrong, and write a correct version.
```c
char *make_greeting(const char *name) {
    char buf[16];
    sprintf(buf, "Hello, %s!", name);
    return buf;
}
```

**Q8. (6 marks)** Write a binary search in C (int bsearch_int(const int *a, int n, int t), returning the index or -1). Then show, in Python, the sequence of probes and the number of steps when searching for 23, 1 and 8 in [1, 3, 5, ..., 31].

## Solutions and Marking Guide

**Q1.**
(a) p points at 30; *p becomes 20 + 40 = 60. Output: **60 60 2**.
(b) f(&x, y): x becomes 3 + 4 = 7 (b is a local copy). f(&y, x): y becomes 4 + 7 = 11. Output: **7 11**.
(c) strlen counts characters before the terminator, sizeof counts the array including '\0'. Output: **5 6**.
(d) *(s + 2) is 'c', s[4] is 'e', and s + 3 is the string starting at 'd'. Output: **c e def**.
(e) a = 5 and i becomes 6; then ++i makes i = 7 and b = 7. Output: **5 7 7**.
(f) a and b are the same list; c is a copy. Output: **[1, 2, 3, 4] [1, 2, 3, 4] [1, 2, 3, 4, 5]**.
(Each part is worth 1 mark except (a) and (b), 2 marks each.)

**Q2.**
(a)
```c
void reverse(int *a, size_t n) {
    if (n < 2) return;
    int *lo = a, *hi = a + n - 1;
    while (lo < hi) {
        int t = *lo;
        *lo++ = *hi;
        *hi-- = t;
    }
}
```
(b) Three reversals rotate left: reverse the first k elements, reverse the remaining n - k, then reverse the whole array.
```c
void rotate_left(int *a, size_t n, size_t k) {
    if (n == 0) return;
    k %= n;
    reverse(a, k);
    reverse(a + k, n - k);
    reverse(a, n);
}
```
For {1, 2, 3, 4, 5} with k = 2: after the first step {2, 1, 3, 4, 5}; after the second {2, 1, 5, 4, 3}; after the third **{3, 4, 5, 1, 2}**. It runs in O(n) time and O(1) extra space.

**Q3.**
```c
#include <ctype.h>
#include <string.h>

size_t my_strlen(const char *s) {
    const char *p = s;
    while (*p) p++;
    return (size_t)(p - s);
}

int count_vowels(const char *s) {
    int c = 0;
    for (; *s; s++) {
        switch (tolower((unsigned char)*s)) {
            case 'a': case 'e': case 'i': case 'o': case 'u': c++;
        }
    }
    return c;
}

int is_palindrome(const char *s) {
    int i = 0, j = (int)strlen(s) - 1;
    while (i < j) {
        while (i < j && !isalnum((unsigned char)s[i])) i++;
        while (i < j && !isalnum((unsigned char)s[j])) j--;
        if (tolower((unsigned char)s[i]) != tolower((unsigned char)s[j])) return 0;
        i++;
        j--;
    }
    return 1;
}
```
Results: count_vowels("Education") = **5** (E, u, a, i, o); is_palindrome("Level") = **1**; is_palindrome("A man, a plan, a canal: Panama") = **1**; is_palindrome("hello") = **0**. The (unsigned char) casts avoid undefined behaviour for negative char values in ctype functions.

**Q4.**
```python
from collections import Counter

text = "the quick brown fox jumps over the lazy dog the fox"
counts = {}
for w in text.split():
    counts[w] = counts.get(w, 0) + 1
top = sorted(counts.items(), key=lambda kv: -kv[1])[:3]
print(top)
print(Counter(text.split()).most_common(3))
```
Both print the top three as **[('the', 3), ('fox', 2), ('quick', 1)]**. (Sorting by count is stable, so ties keep their first-seen order, which puts 'quick' first among the words that appear once.)

**Q5.**
```c
#include <stdio.h>
#include <stdlib.h>

struct student { char name[20]; double gpa; };

int by_gpa_desc(const void *a, const void *b) {
    double x = ((const struct student *)a)->gpa;
    double y = ((const struct student *)b)->gpa;
    return (x < y) - (x > y);     /* -1 if a should come first */
}

int main(void) {
    struct student s[3] = { {"Ana", 3.4}, {"Ben", 3.9}, {"Chi", 3.1} };
    double sum = 0;
    for (int i = 0; i < 3; i++) sum += s[i].gpa;
    qsort(s, 3, sizeof s[0], by_gpa_desc);
    for (int i = 0; i < 3; i++) printf("%s %.1f\n", s[i].name, s[i].gpa);
    printf("mean=%.2f\n", sum / 3);
    return 0;
}
```
Output: **Ben 3.9, Ana 3.4, Chi 3.1, mean=3.47**. (Marks: 2 struct, 2 mean, 3 comparator, 2 qsort call, 1 output. A comparator written as `return a - b` on doubles is wrong because the result is truncated to int.)

**Q6.**
(a)
```python
def matmul(A, B):
    n = len(A)
    return [[sum(A[i][k] * B[k][j] for k in range(n)) for j in range(n)]
            for i in range(n)]

print(matmul([[1, 2], [3, 4]], [[5, 6], [7, 8]]))
```
Output: **[[19, 22], [43, 50]]**. (Check one entry: 1 · 5 + 2 · 7 = 19.)
(b) [[0] * 3] * 3 creates a list containing three **references to the same row**. Setting m[0][0] = 1 changes the first element of every row. Build it with [[0] * 3 for _ in range(3)] so each row is a separate list.

**Q7.** Bug 1: **returns a pointer to a local array**: buf lives on the stack and is destroyed when the function returns, so the caller receives a dangling pointer (undefined behaviour). Bug 2: **sprintf can overflow buf**: "Hello, !" plus the name needs more than 16 bytes for names longer than 6 characters, corrupting the stack (a security vulnerability). Correct version:
```c
#include <stdio.h>
#include <stdlib.h>

char *make_greeting(const char *name) {
    size_t n = snprintf(NULL, 0, "Hello, %s!", name) + 1;   /* required size */
    char *buf = malloc(n);
    if (!buf) return NULL;
    snprintf(buf, n, "Hello, %s!", name);
    return buf;                  /* caller must free() */
}
```
Marks: 2 each for the two bugs, 4 for a correct fix with a documented ownership rule.

**Q8.**
```c
int bsearch_int(const int *a, int n, int t) {
    int lo = 0, hi = n - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;      /* avoids overflow of lo + hi */
        if (a[mid] == t) return mid;
        if (a[mid] < t) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}
```
Python tracer:
```python
def bsearch(a, t):
    lo, hi, steps = 0, len(a) - 1, 0
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        steps += 1
        if a[mid] == t: return mid, steps
        if a[mid] < t: lo = mid + 1
        else: hi = mid - 1
    return -1, steps

arr = list(range(1, 32, 2))
print(bsearch(arr, 23), bsearch(arr, 1), bsearch(arr, 8))
```
Output: **(11, 2) (0, 4) (-1, 4)**: 23 is found at index 11 after 2 probes, 1 is found at index 0 after 4 probes, and 8 is absent after 4 probes. With 16 elements the worst case is floor(log2 16) + 1 = 5 probes; each probe halves the range.

---

# Assignment 3: Memory, Data Structures, Debugging and Testing (80 marks)

## Questions

**Q1. (12 marks, C)** (a) Write a growable integer array type vec with a function int vec_push(vec *v, int x) that doubles its capacity when full (start with 4) and returns -1 if allocation fails [7]. (b) Show that the total number of elements copied during n pushes is less than 2n (compute it for n = 1000) [3]. (c) Why keep the old pointer until realloc succeeds? [2]

**Q2. (10 marks, C)** A singly linked list is declared as struct node { int value; struct node *next; };. (a) Write push_front and free_list [4]. (b) Write struct node *reverse(struct node *head) that reverses the list in place [4]. (c) Trace reverse on 1 → 2 → 3 → 4 [2].

**Q3. (10 marks, C)** The following program contains five bugs. Find them, say what is wrong with each and give a corrected program.
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int *squares(int n) {
    int *a = malloc(n * sizeof(int));
    for (int i = 0; i <= n; i++)
        a[i] = i * i;
    return a;
}

int main(void) {
    int *s = squares(5);
    int total;
    for (int i = 0; i < 5; i++) total += s[i];
    char *msg = malloc(5);
    strcpy(msg, "hello");
    free(s);
    printf("%d %d %s\n", total, s[0], msg);
    return 0;
}
```

**Q4. (8 marks, Python)** Write balanced(s) using a stack to test whether the brackets (), [] and {} in s are properly nested. Show the results for "([]{})", "([)]", "((", ")(", "" and "{[()()]}".

**Q5. (10 marks)** Give the time complexity (Big-O) with a short justification for each, and count the exact number of times the innermost statement runs in (a).
(a) for (i = 0; i < n; i++) for (j = 0; j < i; j++) count++;  (for n = 10)
(b) n = 1000; while (n > 1) { n /= 2; c++; }  (find c)
(c) Naive recursive Fibonacci fib(n) = fib(n - 1) + fib(n - 2); how many calls for fib(10)?
(d) Memoised Fibonacci.
(e) Searching a sorted array of 1,000,000 elements with binary search: maximum number of probes.

**Q6. (10 marks, Python)** (a) Trace insertion sort on [5, 2, 4, 6, 1, 3], showing the list after each pass, and count comparisons and shifts [6]. (b) Write merge sort, and give its recurrence and complexity [4].

**Q7. (10 marks, Python)** (a) Write is_leap(year) (a year is leap if divisible by 4, except century years not divisible by 400) [2]. (b) Write a pytest test file with at least six well-chosen cases including the boundary cases 1900, 2000, 2100, 2023, 2024 and 1600 [5]. (c) Explain why testing only 2023 and 2024 is not enough [3].

**Q8. (10 marks, Python)** A file scores.csv has the header name,score and the rows Ana,78 / Ben,92 / Chi, / Dee,65 / Eli,abc / Fay,88. Write a program that reads it with csv.DictReader, skips and reports invalid rows using exception handling, and prints the mean, median, standard deviation (sample), maximum and minimum of the valid scores.

**Q9. (10 marks)** Describe how you would use each of these tools on a C program that crashes with "segmentation fault" at an unknown place: (a) compiler warnings, (b) gdb, (c) AddressSanitizer, (d) valgrind [6]. Then give a 6-step debugging method [4].

## Solutions and Marking Guide

**Q1.**
(a)
```c
#include <stdlib.h>

typedef struct { int *data; size_t len, cap; } vec;      /* initialise with vec v = {0}; */

int vec_push(vec *v, int x) {
    if (v->len == v->cap) {
        size_t ncap = v->cap ? v->cap * 2 : 4;
        int *p = realloc(v->data, ncap * sizeof *p);
        if (p == NULL) return -1;            /* old block still valid */
        v->data = p;
        v->cap = ncap;
    }
    v->data[v->len++] = x;
    return 0;
}
```
(Free with free(v.data) when done.)
(b) Step 1: the array grows when len reaches 4, 8, 16, ..., 512, copying that many elements each time.
Step 2: 4 + 8 + 16 + 32 + 64 + 128 + 256 + 512 = **1020 elements copied for n = 1000 pushes**, which is less than 2n = 2000.
Step 3: in general the copies form a geometric series summing to less than 2n, so each push costs O(1) **amortised**. (Growing by a fixed amount instead of doubling would give O(n^2) total.)
(c) If realloc fails it returns NULL and leaves the original block intact. Writing v->data = realloc(v->data, ...) would overwrite the only pointer with NULL, leaking the original memory and losing the data.

**Q2.**
(a)
```c
#include <stdlib.h>

struct node { int value; struct node *next; };

struct node *push_front(struct node *head, int v) {
    struct node *n = malloc(sizeof *n);
    if (!n) return head;                       /* or report the error */
    n->value = v;
    n->next = head;
    return n;
}

void free_list(struct node *head) {
    while (head) {
        struct node *next = head->next;       /* save before freeing */
        free(head);
        head = next;
    }
}
```
(b)
```c
struct node *reverse(struct node *head) {
    struct node *prev = NULL;
    while (head) {
        struct node *next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
```
(c) Step 1: Start: prev = NULL, head = 1.
Step 2: After iteration 1: 1 → NULL, prev = 1, head = 2.
Step 3: After 2: 2 → 1 → NULL, prev = 2, head = 3.
Step 4: After 3: 3 → 2 → 1, prev = 3, head = 4.
Step 5: After 4: 4 → 3 → 2 → 1, prev = 4, head = NULL. Returns **4 → 3 → 2 → 1**.
Step 6: O(n) time, O(1) extra space.

**Q3.** The five bugs:
1. **Off-by-one:** i <= n writes a[n], one past the end of the n-element array (heap buffer overflow). Use i < n.
2. **Uninitialised variable:** total is never initialised, so += uses an indeterminate value. Use int total = 0;.
3. **Buffer overflow:** "hello" needs 6 bytes (five characters plus '\0') but only 5 were allocated. Allocate 6 (or strlen(...) + 1).
4. **Use after free:** s[0] is read after free(s). Print before freeing, or free after the printf.
5. **Memory leak:** msg is never freed (and the malloc results are not checked for NULL).
Corrected program:
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int *squares(int n) {
    int *a = malloc(n * sizeof(int));
    if (!a) return NULL;
    for (int i = 0; i < n; i++)
        a[i] = i * i;
    return a;
}

int main(void) {
    int *s = squares(5);
    if (!s) return 1;
    int total = 0;
    for (int i = 0; i < 5; i++) total += s[i];
    char *msg = malloc(6);
    if (!msg) { free(s); return 1; }
    strcpy(msg, "hello");
    printf("%d %d %s\n", total, s[0], msg);
    free(s);
    free(msg);
    return 0;
}
```
It prints **30 0 hello** (0 + 1 + 4 + 9 + 16 = 30). (2 marks per bug, found and fixed.)

**Q4.**
```python
def balanced(s):
    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []
    for ch in s:
        if ch in '([{':
            stack.append(ch)
        elif ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False
    return not stack

for t in ["([]{})", "([)]", "((", ")(", "", "{[()()]}"]:
    print(repr(t), balanced(t))
```
Output: **'([]{})' True, '([)]' False, '((' False, ')(' False, '' True, '{[()()]}' True**. The stack gives LIFO matching: the most recently opened bracket must be the first one closed. It runs in O(n).

**Q5.**
(a) Step 1: the inner statement runs 0 + 1 + ... + (n - 1) = n(n - 1)/2 times.
Step 2: for n = 10: 10 × 9/2 = **45**. Time is **O(n^2)**.
(b) n halves each step (integer division): 1000 → 500 → 250 → 125 → 62 → 31 → 15 → 7 → 3 → 1: that is **c = 9** steps. Time **O(log n)**.
(c) Step 1: the number of calls C(n) satisfies C(n) = 1 + C(n - 1) + C(n - 2) with C(0) = C(1) = 1.
Step 2: C(2) = 3, C(3) = 5, C(4) = 9, C(5) = 15, C(6) = 25, C(7) = 41, C(8) = 67, C(9) = 109, C(10) = **177 calls**. Time **O(2^n)** (more precisely O(φ^n)).
(d) Each value is computed once and cached: **O(n)** time and O(n) space.
(e) Step 1: log2(1,000,000) = 19.93, so floor = 19.
Step 2: at most 19 + 1 = **20 probes** (2^20 = 1,048,576).

**Q6.**
(a) After each pass (comparisons / shifts for the key inserted):
- i = 1 (key 2): 1 comparison, 1 shift: **[2, 5, 4, 6, 1, 3]**
- i = 2 (key 4): 2 comparisons, 1 shift: **[2, 4, 5, 6, 1, 3]**
- i = 3 (key 6): 1 comparison, 0 shifts: **[2, 4, 5, 6, 1, 3]** (6 is already in place)
- i = 4 (key 1): 4 comparisons, 4 shifts: **[1, 2, 4, 5, 6, 3]**
- i = 5 (key 3): 4 comparisons, 3 shifts: **[1, 2, 3, 4, 5, 6]**
- i = 1: **[2, 5, 4, 6, 1, 3]**
- i = 2: **[2, 4, 5, 6, 1, 3]**
- i = 3: **[2, 4, 5, 6, 1, 3]** (6 is already in place)
- i = 4: **[1, 2, 4, 5, 6, 3]**
- i = 5: **[1, 2, 3, 4, 5, 6]**
Totals: comparisons 1 + 2 + 1 + 4 + 4 = **12**; shifts 1 + 1 + 0 + 4 + 3 = **9** (9 equals the number of inversions in the input). Worst case O(n^2), best case (sorted input) O(n).
(b)
```python
def merge_sort(a):
    if len(a) <= 1:
        return a
    m = len(a) // 2
    l, r = merge_sort(a[:m]), merge_sort(a[m:])
    out, i, j = [], 0, 0
    while i < len(l) and j < len(r):
        if l[i] <= r[j]:
            out.append(l[i]); i += 1
        else:
            out.append(r[j]); j += 1
    return out + l[i:] + r[j:]

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))      # [3, 9, 10, 27, 38, 43, 82]
```
Recurrence T(n) = 2 T(n/2) + O(n), which solves to **O(n log n)** (log n levels, each doing O(n) merging work). Using <= makes the sort stable.

**Q7.**
(a)
```python
def is_leap(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)
```
(b)
```python
import pytest
from leap import is_leap

@pytest.mark.parametrize("year, expected", [
    (2023, False),   # ordinary year
    (2024, True),    # divisible by 4
    (1900, False),   # century not divisible by 400
    (2000, True),    # century divisible by 400
    (2100, False),
    (1600, True),
])
def test_is_leap(year, expected):
    assert is_leap(year) == expected
```
All six cases pass with the function above (verified output: 1900 False, 2000 True, 2023 False, 2024 True, 2100 False, 1600 True).
(c) 2023 and 2024 only test the "divisible by 4" rule. The century exceptions (1900, 2100 are not leap; 2000, 1600 are) are the places where wrong implementations (for example year % 4 == 0 only) fail. Good tests cover each branch of the specification and its boundaries.

**Q8.**
```python
import csv, io, statistics

data = """name,score
Ana,78
Ben,92
Chi,
Dee,65
Eli,abc
Fay,88
"""
scores, bad = [], []
for row in csv.DictReader(io.StringIO(data)):      # use open("scores.csv") for a real file
    try:
        scores.append(float(row["score"]))
    except ValueError:
        bad.append(row["name"])

print("invalid rows:", bad)
print("mean", statistics.mean(scores), "median", statistics.median(scores),
      "stdev", round(statistics.stdev(scores), 2), "max", max(scores), "min", min(scores))
```
Output: **invalid rows: ['Chi', 'Eli']** and **mean 80.75 median 83.0 stdev 12.04 max 92.0 min 65.0**. float("") and float("abc") both raise ValueError, which is caught per row so one bad row does not stop the program.

**Q9.**
(a) **Warnings:** compile with -Wall -Wextra -Wpedantic; they flag uninitialised variables, missing returns, format mismatches and suspicious comparisons before the program even runs.
(b) **gdb:** compile with -g, run gdb ./prog, then run; at the crash use backtrace (bt) to see the call chain, frame N and print var to inspect values; use break and watch to stop earlier and step to follow execution.
(c) **AddressSanitizer:** compile with -fsanitize=address,undefined -g and run; it reports the exact line of a buffer overflow, use-after-free or double free, with the allocation and free stacks.
(d) **valgrind:** valgrind --leak-check=full ./prog shows invalid reads and writes and memory leaks (slower than ASan, no recompilation needed).
Six-step method: (1) reproduce the failure reliably with a minimal input; (2) read the first error message and the backtrace; (3) form a hypothesis about the cause; (4) test it with a print, breakpoint or assert; (5) fix the root cause, not the symptom; (6) add a regression test and re-run the full test suite.
