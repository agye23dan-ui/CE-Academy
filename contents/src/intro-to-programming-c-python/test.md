# Introduction to Programming (C and Python): Class Test

Duration: 60 minutes. No computer. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Assume a typical 64-bit system (int is 4 bytes) and the usual #includes for C snippets.

## Section A: Multiple choice (20 marks)

**1.** In C, what does `int x = 7 / 2;` store in x?
A) 3.5  B) 3  C) 4  D) 2

**2.** Which expression correctly tests whether two C strings a and b are equal?
A) a == b  B) strcmp(a, b) == 0  C) a = b  D) strlen(a) == strlen(b)

**3.** On a typical system, sizeof(int) in C is
A) 1  B) 2  C) 4  D) 8

**4.** In C, the value of -7 % 3 is
A) 2  B) -2  C) 1  D) -1

**5.** In Python, the value of -7 // 2 is
A) -3  B) -4  C) 3  D) -3.5

**6.** What happens when C code executes `int a[5]; a[5] = 1;`?
A) a compile-time error  B) undefined behaviour  C) the array grows  D) a is set to 1

**7.** If p is an int * pointing to an element of an array, p + 1 points to an address
A) 1 byte higher  B) sizeof(int) bytes higher  C) 8 bytes higher  D) the same address

**8.** For `char s[] = "cat";`, sizeof s equals
A) 3  B) 4  C) 8  D) 2

**9.** malloc returns what value when the allocation fails?
A) 0 bytes  B) -1  C) NULL  D) the previous pointer

**10.** A block allocated with malloc and never freed causes
A) a stack overflow  B) a memory leak  C) a syntax error  D) nothing, ever

**11.** How many times does `for (int i = 0; i < 5; i++)` execute its body?
A) 4  B) 5  C) 6  D) infinitely many

**12.** In Python, "hello"[1:3] equals
A) "he"  B) "el"  C) "ell"  D) "hel"

**13.** Which Python type is immutable?
A) list  B) dict  C) tuple  D) set

**14.** Binary search requires that the data be
A) unique  B) sorted  C) integers  D) in an array of length 2^k

**15.** The time complexity of binary search is
A) O(1)  B) O(log n)  C) O(n)  D) O(n log n)

**16.** What happens when this C code runs? `int *p = NULL; *p = 1;`
A) it stores 1 safely  B) undefined behaviour (typically a crash)  C) it allocates memory  D) it prints 1

**17.** Which tool is designed to detect memory leaks in C programs?
A) make  B) valgrind  C) pip  D) git

**18.** In Python 3, the type of 3 / 2 is
A) int  B) float  C) str  D) complex

**19.** In Python, the expression 0.1 + 0.2 == 0.3 evaluates to
A) True  B) False  C) an error  D) None

**20.** Local variables in a C function are stored on the
A) heap  B) stack  C) code segment  D) disk

## Section B: Problems (40 marks)

**B1. (10 marks)** (a) Predict the output of this C program [3]:
```c
int f(int n) {
    int s = 0;
    while (n > 0) { s += n % 10; n /= 10; }
    return s;
}
int main(void) {
    printf("%d %d %d\n", f(4821), f(0), f(907));
    return 0;
}
```
(b) Write the same function in Python and run it mentally on 4821 [2]. (c) Write a Python function is_prime(n) and list the primes below 30 [5].

**B2. (10 marks, C)** (a) Write int max_of(const int *a, int n, int *idx) that returns the maximum of an array (n ≥ 1) and stores the index of its first occurrence in *idx [6]. (b) Show a call for {3, 9, 2, 9, 5} and its results [2]. (c) Why is the parameter const int *a better than int *a here? [2]

**B3. (10 marks, C)** This function is meant to return a heap copy of a string:
```c
char *dup(const char *s) {
    char *p = malloc(strlen(s));
    strcpy(p, s);
    return p;
}
```
(a) Identify the two defects and what can go wrong [4]. (b) Write a correct version [3]. (c) Show how the caller should use and release the result [3].

**B4. (10 marks, Python)** For the sentence "to be or not to be that is the question": (a) build a dictionary mapping each word length to the list of words of that length (keeping duplicates) [5]; (b) print the sorted list of distinct words [2]; (c) state the output of (a) and (b) [3].

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **B** · 3 **C** · 4 **D** · 5 **B** · 6 **B** · 7 **B** · 8 **B** · 9 **C** · 10 **B** · 11 **B** · 12 **B** · 13 **C** · 14 **B** · 15 **B** · 16 **B** · 17 **B** · 18 **B** · 19 **B** · 20 **B**

Brief reasons:
1. Integer division truncates: 7 / 2 = 3.
2. == compares pointers, not contents.
3. int is 32 bits on common platforms.
4. C truncates toward zero, so the remainder takes the sign of the dividend: -1.
5. Python floors: -3.5 floors to -4.
6. Valid indices are 0 to 4; index 5 is out of bounds.
7. Pointer arithmetic scales by the element size.
8. "cat" needs 4 bytes with the terminator.
9. malloc returns NULL on failure.
10. Memory that is never freed is leaked.
11. i takes the values 0 to 4.
12. Slicing includes index 1 and excludes 3.
13. Tuples are immutable.
14. Halving the search range needs an order.
15. Each step halves the range.
16. Dereferencing NULL is undefined behaviour.
17. valgrind (memcheck) reports leaks.
18. / is true division in Python 3.
19. 0.1 + 0.2 is 0.30000000000000004.
20. Automatic variables live in the stack frame.

### Section B

**B1.**
(a) Step 1: f(4821) extracts the digits with % 10 and // 10: 4821 → 1, then 482 → 2, then 48 → 8, then 4 → 4: 1 + 2 + 8 + 4 = 15.
Step 2: f(0) = 0 (the loop never runs). Step 3: f(907) = 7 + 0 + 9 = 16. Output: **15 0 16**. (1 mark each.)
(b)
```python
def digit_sum(n):
    s = 0
    while n > 0:
        s += n % 10
        n //= 10
    return s
```
Trace for 4821: s = 1 (n = 482), s = 3 (n = 48), s = 11 (n = 4), s = 15 (n = 0), returns **15**. (2 marks.)
(c)
```python
def is_prime(n):
    if n < 2:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True

print([n for n in range(30) if is_prime(n)])
```
Output: **[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]**. (2 marks for handling n < 2, 2 for the i * i <= n bound, 1 for the list.)

**B2.**
(a)
```c
int max_of(const int *a, int n, int *idx) {
    int best = a[0];
    *idx = 0;
    for (int i = 1; i < n; i++) {
        if (a[i] > best) {          /* strict > keeps the FIRST occurrence */
            best = a[i];
            *idx = i;
        }
    }
    return best;
}
```
(b)
```c
int a[] = {3, 9, 2, 9, 5};
int idx;
int m = max_of(a, 5, &idx);        /* m = 9, idx = 1 */
```
(c) const documents and enforces that the function only reads the array; the compiler rejects any accidental write, and callers can pass read-only data.

**B3.**
(a) Defect 1: **malloc(strlen(s)) is one byte too small**; the terminator needs strlen(s) + 1 bytes, so strcpy writes one byte past the block (heap buffer overflow, undefined behaviour that may corrupt the heap or crash later). Defect 2: **no NULL check**; if malloc fails, strcpy dereferences NULL and crashes.
(b)
```c
char *dup(const char *s) {
    size_t n = strlen(s) + 1;
    char *p = malloc(n);
    if (p == NULL) return NULL;
    memcpy(p, s, n);
    return p;
}
```
(c)
```c
char *copy = dup("hello");
if (copy == NULL) { /* handle the error */ }
else {
    printf("%s\n", copy);
    free(copy);          /* the caller owns the memory */
    copy = NULL;
}
```
The caller must free the result exactly once; document this ownership rule in a comment.

**B4.**
(a) and (b):
```python
words = "to be or not to be that is the question".split()
by_len = {}
for w in words:
    by_len.setdefault(len(w), []).append(w)
print(by_len)
print(sorted(set(words)))
```
(c) Output: **{2: ['to', 'be', 'or', 'to', 'be', 'is'], 3: ['not', 'the'], 4: ['that'], 8: ['question']}** and **['be', 'is', 'not', 'or', 'question', 'that', 'the', 'to']**. (setdefault creates the empty list on first use; set removes duplicates; sorted returns a new list in alphabetical order.)
