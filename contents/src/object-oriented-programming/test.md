# Object-Oriented Programming (C++): Class Test

Duration: 60 minutes. No computer. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Assume `#include` lines for the standard headers and `using namespace std;` in code fragments.

## Section A: Multiple choice (20 marks)

**1.** Hiding the data of a class behind a public interface is called
A) inheritance  B) encapsulation  C) overloading  D) templating

**2.** Private members of a class can be accessed
A) by any function  B) only by derived classes  C) by the class's own member functions (and friends)  D) only in main

**3.** A constructor is called
A) when an object is created  B) when an object is destroyed  C) when a function returns  D) never automatically

**4.** Local objects are destroyed in
A) the same order as construction  B) the reverse order of construction  C) random order  D) alphabetical order

**5.** The keyword `virtual` on a member function enables
A) faster calls  B) dynamic dispatch (run-time polymorphism)  C) private access  D) static linking

**6.** An abstract class is one that
A) has no data members  B) has at least one pure virtual function  C) cannot have a constructor  D) has only static members

**7.** `class Dog : public Animal` expresses
A) a has-a relationship  B) an is-a relationship  C) a uses-a relationship  D) no relationship

**8.** The copy constructor is invoked when
A) an object is passed by value to a function  B) an object is passed by reference  C) a pointer is passed  D) a static is created

**9.** A `const` member function
A) cannot be called on a non-const object  B) promises not to modify the object's members  C) is always inline  D) must be static

**10.** Compared with a pointer, a reference
A) can be null  B) can be re-seated to another object  C) must be initialised and cannot be re-seated  D) takes more memory

**11.** Memory allocated with `new[]` must be released with
A) delete  B) free  C) delete[]  D) release

**12.** Which smart pointer expresses sole ownership?
A) shared_ptr  B) unique_ptr  C) weak_ptr  D) auto_ptr only

**13.** Templates provide
A) run-time polymorphism  B) generic programming resolved at compile time  C) garbage collection  D) multiple inheritance

**14.** The amortised complexity of vector::push_back is
A) O(n)  B) O(log n)  C) O(1)  D) O(n^2)

**15.** std::map stores its keys
A) in insertion order  B) in sorted order  C) in random order  D) in reverse order

**16.** The recommended way to catch an exception is
A) by value  B) by const reference  C) by raw pointer  D) with catch(...) only

**17.** A virtual destructor is required in a base class when
A) the class has no data  B) objects are deleted through base-class pointers  C) the class is final  D) the class is a template

**18.** The stream insertion operator `operator<<` for a class is normally
A) a non-member (often friend) function  B) a static member  C) a constructor  D) a virtual function

**19.** A static data member is
A) copied into each object  B) shared by all objects of the class  C) always constant  D) only usable in main

**20.** Assigning a derived-class object to a base-class object (by value) causes
A) a compile error always  B) slicing: the derived part is lost  C) a run-time exception  D) nothing

## Section B: Problems (40 marks)

**B1. (10 marks)** Write a class Rectangle with private width and height, a constructor that throws `invalid_argument` if either is not positive, const member functions `area()` and `perimeter()`, and `operator==` that compares areas. Show the results of `Rectangle(3, 4)` for area and perimeter, and what happens for `Rectangle(0, 5)`.

**B2. (10 marks)** (a) Predict the output [4]:
```cpp
struct X { X() { cout << "X+ "; } ~X() { cout << "X- "; } };
struct Y : X { Y() { cout << "Y+ "; } ~Y() { cout << "Y- "; } };
int main() { Y y1; { X x; Y y2; } cout << "| "; }
```
(b) Explain the difference between a shallow and a deep copy, and why a class owning a raw pointer needs a user-defined copy constructor [3]. (c) State the Rule of Three [3].

**B3. (10 marks)** Write an abstract class Animal with a pure virtual function `speak()` and a virtual destructor, classes Dog ("Woof") and Cat ("Meow"), store a Dog, a Cat and another Dog in a `vector<unique_ptr<Animal>>` and print all sounds in order. Give the output and explain how the right function is chosen at run time.

**B4. (10 marks)** (a) Write a function template `T sumAll(const vector<T>& v)` and give the result for `{1, 2, 3, 4}` and `{1.5, 2.5}` [3]. (b) Predict the contents and size of v after: `vector<int> v = {4, 1, 3, 1, 4, 2}; sort(v.begin(), v.end()); v.erase(unique(v.begin(), v.end()), v.end());` [4] (c) What does `count_if(v.begin(), v.end(), [](int x){ return x % 2 == 0; })` return for v = {1, 2, 3, 4}? [3]

---

## Answer Key and Solutions

### Section A
1 **B** · 2 **C** · 3 **A** · 4 **B** · 5 **B** · 6 **B** · 7 **B** · 8 **A** · 9 **B** · 10 **C** · 11 **C** · 12 **B** · 13 **B** · 14 **C** · 15 **B** · 16 **B** · 17 **B** · 18 **A** · 19 **B** · 20 **B**

Brief reasons: 4. Stack unwinding of scope. 8. Pass-by-value copies. 9. const member functions promise not to modify. 12. unique_ptr. 14. Amortised constant. 15. Balanced tree, sorted. 17. Otherwise deleting through Base* is undefined behaviour. 18. The stream is the left operand.

### Section B

**B1.**
```cpp
class Rectangle {
public:
    Rectangle(double w, double h) : w_(w), h_(h) {
        if (w <= 0 || h <= 0) throw invalid_argument("dimensions must be positive");
    }
    double area() const { return w_ * h_; }
    double perimeter() const { return 2 * (w_ + h_); }
    bool operator==(const Rectangle& o) const { return area() == o.area(); }
private:
    double w_, h_;
};
```
Rectangle(3, 4): **area 12, perimeter 14**. Rectangle(0, 5) **throws invalid_argument** from the constructor, so no invalid object ever exists (the invariant w, h > 0 is always true). (3 marks class design, 3 constructor check, 2 const methods, 2 results.)

**B2.**
(a) y1: X+ Y+ (base first). In the block: x: X+; y2: X+ Y+. At the end of the block the objects are destroyed in reverse order: y2 (Y- X-), then x (X-). Then "| ". At the end of main: y1 (Y- X-). Output: **X+ Y+ X+ X+ Y+ Y- X- X- | Y- X- **.
(b) A **shallow copy** copies member values, including pointer values, so both objects point to the same memory (aliasing); a **deep copy** allocates new memory and copies the contents. With the default shallow copy, modifying one object changes the other, and when both are destroyed the memory is deleted twice (undefined behaviour). A user-defined copy constructor performs the deep copy.
(c) **Rule of Three:** if a class needs a user-defined destructor, copy constructor or copy assignment operator, it almost certainly needs all three (and, in modern C++, the move operations too: the Rule of Five).

**B3.**
```cpp
class Animal {
public:
    virtual void speak() const = 0;
    virtual ~Animal() = default;
};
class Dog : public Animal { public: void speak() const override { cout << "Woof "; } };
class Cat : public Animal { public: void speak() const override { cout << "Meow "; } };

int main() {
    vector<unique_ptr<Animal>> zoo;
    zoo.push_back(make_unique<Dog>());
    zoo.push_back(make_unique<Cat>());
    zoo.push_back(make_unique<Dog>());
    for (const auto& a : zoo) a->speak();
}
```
Output: **Woof Meow Woof **. Each object contains a hidden pointer to its class's vtable; a call through an Animal pointer to a virtual function follows that pointer, so the function of the object's actual (dynamic) type runs. The virtual destructor makes the unique_ptr delete the correct derived object.

**B4.**
(a)
```cpp
template <typename T>
T sumAll(const vector<T>& v) {
    T total{};                               // value-initialised: 0
    for (const T& x : v) total += x;
    return total;
}
```
sumAll({1, 2, 3, 4}) = **10** (T = int); sumAll({1.5, 2.5}) = **4** (T = double).
(b) After sort: 1 1 2 3 4 4. `unique` moves the first of each run of equal elements to the front and returns the new end; erase removes the tail: v = **{1, 2, 3, 4}**, size **4**.
(c) The even elements are 2 and 4: **2**.
