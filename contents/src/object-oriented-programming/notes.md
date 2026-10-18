# Object-Oriented Programming (C++): Complete Lecture Notes

This course teaches object-oriented design and programming in **C++17**. Object-oriented programming (OOP) organises software as interacting **objects** that combine data and the operations on it. Its four pillars are **encapsulation**, **abstraction**, **inheritance** and **polymorphism**. C++ adds control over memory and performance, so it is also the language in which to understand object lifetime, copying and resource management. Compile with `g++ -std=c++17 -Wall -Wextra -g file.cpp`.

## Chapter 1. From C to C++

### 1.1 A first program
```cpp
#include <iostream>
#include <string>

int main() {
    std::string name = "Ama";
    std::cout << "Hello, " << name << "!\n";
    return 0;
}
```
`std::cout` is an output stream, `<<` the insertion operator, `std::cin >> x` reads input. `std::` is the standard **namespace**; `using namespace std;` is acceptable in small examples but not in headers.

### 1.2 Improvements over C
- **Types:** `bool`, `std::string` (instead of char arrays), `auto` type deduction (`auto x = 3.5;` is a double), range-for (`for (int v : vec)`), `nullptr` instead of NULL, `enum class` (scoped enumerations).
- **References:** `int& r = x;` is an alias for x (it must be initialised and cannot be re-seated). Pass large objects by `const T&` to avoid copying; use `T&` for output parameters. A reference is safer than a pointer when null is not meaningful.
- **const:** `const int x = 5;`, `const T&` parameters, `const` member functions. `constexpr` for compile-time constants.
- **Dynamic memory:** `new` and `delete` (and `new[]`/`delete[]`) replace malloc/free but should be avoided in favour of containers and smart pointers (Chapter 4).
- **Function overloading and default arguments:** `void f(int)`, `void f(double)`, `void g(int a, int b = 10)`.
- **Standard library:** `std::vector`, `std::string`, `std::map`, algorithms, streams.

## Chapter 2. Classes and Encapsulation

### 2.1 Defining a class
```cpp
class BankAccount {
public:
    BankAccount(std::string owner, double balance = 0.0)
        : owner_(std::move(owner)), balance_(balance) {}
    void deposit(double amount) {
        if (amount <= 0) throw std::invalid_argument("amount must be positive");
        balance_ += amount;
    }
    bool withdraw(double amount) {
        if (amount <= 0 || amount > balance_) return false;
        balance_ -= amount;
        return true;
    }
    double balance() const { return balance_; }      // const: does not modify the object
    const std::string& owner() const { return owner_; }
private:
    std::string owner_;
    double balance_;
};
```
- **Encapsulation:** data members are `private`; the public interface maintains the **class invariant** (here balance_ is never negative). `struct` is a class whose members are public by default.
- **Constructors** initialise objects. Use the **member initialiser list** (`: owner_(...), balance_(...)`): members are initialised in the order they are *declared*, not the order in the list. A **default constructor** takes no arguments; if you define any constructor, the compiler no longer generates a default one. Mark single-argument constructors `explicit` to prevent unwanted implicit conversions. **Delegating constructors** call another constructor of the same class. Prefer uniform initialisation `BankAccount a{"Kofi", 50.0};`.
- **Destructor** `~ClassName()` runs when an object's lifetime ends (leaving scope, delete, container destruction); it releases resources.
- **this** is a pointer to the current object (`this->balance_`). Methods can return `*this` to allow chaining.
- **static members** belong to the class, not to objects: `static int count;` (defined once outside the class, or `inline static` in C++17), `static` member functions have no `this`.
- **friend** functions and classes can access private members; use sparingly.

### 2.2 Object lifetime and the order of construction and destruction
- Objects are constructed in the order of their definition and destroyed in the **reverse order**.
- When constructing an object, **base classes are constructed first**, then **data members in declaration order**, then the constructor body runs. Destruction runs the destructor body, then members in reverse order, then the base classes.
```cpp
struct A { A() { std::cout << "A+ "; } ~A() { std::cout << "A- "; } };
struct B : A { B() { std::cout << "B+ "; } ~B() { std::cout << "B- "; } };
struct C { A a; B b; C() { std::cout << "C+ "; } ~C() { std::cout << "C- "; } };
int main() { C c; std::cout << "| "; }
```
This prints `A+ A+ B+ C+ | C- B- A- A- ` (a is built first, then b builds its base A and then B, then C's body; destruction reverses everything).
- **Storage durations:** automatic (stack, destroyed at the end of scope), dynamic (heap, until deleted), static (whole program), thread-local.

### 2.3 Const correctness
Mark every member function that does not change the object `const`. A const object can only call const member functions. `mutable` members can change even in const functions (for example caches). Return `const T&` for large read-only results.

## Chapter 3. Operator Overloading and Value Semantics

### 3.1 Overloading
Operators are functions with special names. Overload to make user types natural, never to surprise.
```cpp
class Vec2 {
public:
    Vec2(double x = 0, double y = 0) : x_(x), y_(y) {}
    Vec2 operator+(const Vec2& o) const { return Vec2(x_ + o.x_, y_ + o.y_); }
    Vec2& operator+=(const Vec2& o) { x_ += o.x_; y_ += o.y_; return *this; }
    double dot(const Vec2& o) const { return x_ * o.x_ + y_ * o.y_; }
    bool operator==(const Vec2& o) const { return x_ == o.x_ && y_ == o.y_; }
    friend std::ostream& operator<<(std::ostream& os, const Vec2& v) {
        return os << "(" << v.x_ << ", " << v.y_ << ")";
    }
private:
    double x_, y_;
};
```
`Vec2(1,2) + Vec2(3,4)` prints `(4, 6)` and `dot` gives 11. Guidelines: keep the usual meaning; implement `+=` and build `+` from it; `operator<<` is a non-member (friend); `operator[]`, `operator()` (function objects), `operator=` and the comparison operators (C++20 adds `<=>`) are common; do not overload `&&`, `||`, `,`. Conversion operators and `explicit`.

### 3.2 Copying: the Rule of Three, Five and Zero
When a class owns a resource (memory, a file handle) the compiler-generated copy only copies pointers (a **shallow copy**), leading to double deletion.
```cpp
class IntArray {
public:
    explicit IntArray(size_t n) : n_(n), data_(new int[n]()) {}
    IntArray(const IntArray& o) : n_(o.n_), data_(new int[o.n_]) {       // copy constructor
        std::copy(o.data_, o.data_ + n_, data_);
    }
    IntArray& operator=(const IntArray& o) {                              // copy assignment
        if (this != &o) {
            int* p = new int[o.n_];
            std::copy(o.data_, o.data_ + o.n_, p);
            delete[] data_;
            data_ = p; n_ = o.n_;
        }
        return *this;
    }
    ~IntArray() { delete[] data_; }                                        // destructor
    int& operator[](size_t i) { return data_[i]; }
    size_t size() const { return n_; }
private:
    size_t n_;
    int* data_;
};
```
- **Rule of Three:** if you need a custom destructor, copy constructor or copy assignment operator, you probably need all three.
- **Rule of Five** (C++11): add the **move constructor** and **move assignment**, which *steal* the resources from a temporary (an rvalue): `IntArray(IntArray&& o) noexcept : n_(o.n_), data_(o.data_) { o.n_ = 0; o.data_ = nullptr; }`. Moves make returning large objects and growing vectors cheap. `std::move(x)` casts to an rvalue; the moved-from object must remain valid but unspecified.
- **Rule of Zero:** prefer classes that own resources through members that manage themselves (`std::vector`, `std::string`, smart pointers) so that the compiler-generated special functions are correct. Use `= default` and `= delete` to state intent (`Class(const Class&) = delete;` makes a type non-copyable).
- **Copy elision:** returning a local by value usually constructs it in place (guaranteed for prvalues in C++17).

## Chapter 4. Resource Management (RAII) and Smart Pointers

**RAII (Resource Acquisition Is Initialisation):** acquire a resource in a constructor and release it in the destructor, so cleanup is automatic, even when exceptions occur. Examples: `std::vector`, `std::string`, `std::fstream`, `std::lock_guard`, smart pointers.
- **`std::unique_ptr<T>`:** sole ownership, zero overhead, move-only. `auto p = std::make_unique<Widget>(args);` After `auto q = std::move(p);` p is null.
- **`std::shared_ptr<T>`:** shared ownership by reference counting; `std::make_shared<T>(args)`; `use_count()` gives the number of owners. A cycle of shared_ptrs leaks; break it with **`std::weak_ptr`** (non-owning observer).
- Rules: never `delete` what a smart pointer owns; use raw pointers and references only for non-owning access; prefer `make_unique` and `make_shared` to `new`.
```cpp
auto a = std::make_shared<int>(5);
auto b = a;                              // use_count = 2
{ auto c = a; std::cout << a.use_count(); }   // prints 3, then c is destroyed
std::cout << a.use_count();              // prints 2
```

## Chapter 5. Inheritance and Polymorphism

### 5.1 Inheritance
`class Derived : public Base { ... };` models an **is-a** relationship: a Derived can be used wherever a Base is expected (Liskov substitution principle). Derived inherits the public and protected members of Base, extends or **overrides** behaviour. `protected` members are visible to derived classes. Use `public` inheritance for is-a; prefer composition otherwise. A derived constructor passes arguments to the base: `Derived(int a, int b) : Base(a), b_(b) {}`.

### 5.2 Virtual functions and dynamic dispatch
```cpp
struct Base {
    void f()         { std::cout << "Base::f "; }     // non-virtual: chosen at compile time
    virtual void g() { std::cout << "Base::g "; }     // virtual: chosen at run time
    virtual ~Base() = default;
};
struct Der : Base {
    void f()          { std::cout << "Der::f "; }     // hides Base::f
    void g() override { std::cout << "Der::g "; }
};
int main() {
    Der d; Base* p = &d;
    p->f(); p->g(); d.f();
    Base b = d; b.g();                                // slicing
}
```
Output: `Base::f Der::g Der::f Base::g `. A call through a **pointer or reference to Base** to a **virtual** function runs the version of the object's real (dynamic) type. Non-virtual functions are resolved by the static type. **Object slicing:** assigning a Derived to a Base *object* copies only the Base part, losing the derived behaviour; use pointers or references.
- **`override`** makes the compiler check that you really override a virtual function; **`final`** forbids further overriding.
- **Virtual destructors:** a base class with virtual functions must have a **virtual destructor**, otherwise `delete basePtr;` on a Derived object is undefined behaviour (the derived destructor does not run).
- **Abstract classes** have a pure virtual function (`virtual double area() const = 0;`) and cannot be instantiated; they define an **interface**. A class implementing all pure virtuals is concrete.
- **How it works:** each polymorphic object has a hidden pointer to a **vtable** (a table of function pointers per class); a virtual call costs one extra indirection. Do not call virtual functions from constructors or destructors (the dynamic type is the class being constructed).
```cpp
struct Shape {
    virtual double area() const = 0;
    virtual std::string name() const { return "shape"; }
    virtual ~Shape() = default;
};
struct Rect : Shape {
    Rect(double w, double h) : w_(w), h_(h) {}
    double area() const override { return w_ * h_; }
    std::string name() const override { return "rect"; }
    double w_, h_;
};
std::vector<std::unique_ptr<Shape>> shapes;
shapes.push_back(std::make_unique<Rect>(3, 4));
double total = 0;
for (const auto& s : shapes) total += s->area();        // polymorphic call
```

### 5.3 Multiple inheritance and interfaces
A class can inherit from several bases. The **diamond problem** (two paths to the same base) is solved with `virtual` inheritance. Prefer pure-virtual interface classes (no data) for multiple inheritance of *capabilities* (as in Java interfaces). Also: **static vs dynamic type**, `dynamic_cast` for safe down-casts (needs a polymorphic base), `typeid`, and the cost of RTTI.

### 5.4 Composition versus inheritance
Prefer **composition** ("has-a") to inheritance ("is-a") when you only need to reuse implementation: a `Car` *has* an `Engine`. Inheritance couples the derived class to the base class's implementation. "Favour composition over inheritance" is a core design guideline.

## Chapter 6. Object-Oriented Design

### 6.1 Principles
- **SOLID:** **S**ingle responsibility (a class has one reason to change); **O**pen/closed (open for extension, closed for modification: add new subclasses, do not edit working code); **L**iskov substitution (subtypes must honour the base contract; a Square that inherits from Rectangle but breaks "set width independently" violates it); **I**nterface segregation (many small interfaces); **D**ependency inversion (depend on abstractions, not concrete classes).
- **Low coupling, high cohesion.** Program to an interface, not an implementation. **Law of Demeter** (talk only to your immediate collaborators). **DRY** (do not repeat yourself).

### 6.2 UML class diagrams
A class box has three compartments (name, attributes, operations) with visibility (+ public, - private, # protected). Relationships: **association** (a line), **aggregation** (open diamond: has-a, parts can exist independently), **composition** (filled diamond: strong ownership, parts die with the whole), **inheritance** (hollow triangle arrow), **dependency** (dashed arrow), **realisation** (dashed line with hollow triangle: implements an interface). Multiplicities (1, 0..*, 1..*). Sequence diagrams show interactions over time.

### 6.3 Design patterns
Reusable solutions to recurring design problems (the "Gang of Four" catalogue).
- **Singleton** (one instance): `static Config& instance() { static Config c; return c; }` (thread-safe initialisation in C++11). Use sparingly: it is global state.
- **Factory (method):** create objects without naming concrete classes: `std::unique_ptr<Shape> make(const std::string& kind)` returns Rect or Circle.
- **Strategy:** a family of interchangeable algorithms behind an interface or `std::function` (a sort comparator, a pricing rule).
- **Observer:** a subject notifies registered observers of changes (event handlers, GUI signals).
```cpp
class Subject {
public:
    void subscribe(std::function<void(int)> f) { observers_.push_back(std::move(f)); }
    void set(int v) { value_ = v; for (auto& o : observers_) o(value_); }
private:
    std::vector<std::function<void(int)>> observers_;
    int value_ = 0;
};
```
- **Decorator** (wrap an object to add behaviour: buffered stream over a file stream), **Adapter** (convert an interface), **Command** (encapsulate a request, enabling undo), **Iterator** (traverse a container, built into the STL), **Template method**, **State**, **Composite** (tree of objects with a uniform interface), **Facade**, **RAII**.
Patterns are tools, not goals. A pattern misapplied adds complexity.

## Chapter 7. Templates and Generic Programming

### 7.1 Function and class templates
```cpp
template <typename T>
T maxOf(T a, T b) { return (a > b) ? a : b; }

template <typename T>
class Stack {
public:
    void push(const T& v) { items_.push_back(v); }
    T pop() {
        if (items_.empty()) throw std::out_of_range("empty stack");
        T v = std::move(items_.back());
        items_.pop_back();
        return v;
    }
    bool empty() const { return items_.empty(); }
    size_t size() const { return items_.size(); }
private:
    std::vector<T> items_;
};
```
`maxOf(3, 7)` is 7; `maxOf(2.5, 1.5)` is 2.5; `maxOf(std::string("apple"), std::string("pear"))` is "pear". `maxOf("a", "b")` compares pointers (a classic bug): T is deduced as `const char*`. Templates are instantiated at compile time for each type used (no run-time cost; code lives in headers; errors can be long). **Non-type parameters** (`template <typename T, size_t N> class Array`), **default arguments**, **specialisation** (`template <> class Stack<bool>`), **variadic templates**, and **concepts** (C++20) constraining T. **Static (compile-time) polymorphism** via templates versus **dynamic polymorphism** via virtual functions.

### 7.2 The Standard Template Library
- **Containers:** `vector` (dynamic array, contiguous, amortised O(1) push_back, O(1) indexing), `deque`, `list` (doubly linked), `array`, `string`; ordered `set`/`map` (balanced tree, O(log n)), `unordered_set`/`unordered_map` (hash table, average O(1)); adaptors `stack`, `queue`, `priority_queue` (heap).
- **Iterators** generalise pointers: `begin()`, `end()` (one past the last), `*it`, `++it`. Invalidation: inserting into a vector may invalidate iterators.
- **Algorithms** (`<algorithm>`, `<numeric>`): `sort`, `find`, `count_if`, `transform`, `accumulate`, `copy`, `remove_if`, `reverse`, `binary_search`, `min_element`. The **erase-remove idiom**: `v.erase(std::remove_if(v.begin(), v.end(), pred), v.end());`.
```cpp
std::vector<int> v = {5, 2, 8, 1};
std::sort(v.begin(), v.end());                          // 1 2 5 8
int sum = std::accumulate(v.begin(), v.end(), 0);       // 16
v.erase(std::remove_if(v.begin(), v.end(),
        [](int x) { return x % 2 == 0; }), v.end());    // keeps 1 5
```
- **Lambdas:** `[capture](params) -> ret { body }`; `[&]` captures by reference, `[=]` by value; `std::function<R(Args...)>` stores any callable. Lambdas are the usual way to pass behaviour to algorithms and to implement strategies and callbacks.
- Choose containers by operations and complexity; prefer `vector` unless you have a reason; use `reserve` when the size is known.

## Chapter 8. Exceptions and Error Handling

- `throw`, `try`, `catch`. Exceptions propagate up the call stack, performing **stack unwinding** (destructors of local objects run, which is why RAII is essential). Catch by `const&`: `catch (const std::exception& e) { std::cerr << e.what(); }`. The standard hierarchy: `std::exception` → `std::logic_error` (`invalid_argument`, `out_of_range`), `std::runtime_error`, `bad_alloc`.
- **Exception safety guarantees:** basic (no leaks, valid state), strong (commit or roll back), nothrow (`noexcept`, required of destructors and moves). Never let an exception escape a destructor.
- Use exceptions for exceptional conditions, not normal control flow. Alternatives: return codes, `std::optional<T>`, `std::variant`, error objects. Validate preconditions with `assert` in debug builds.
```cpp
try {
    Stack<int> s;
    s.push(1);
    s.pop();
    s.pop();                                  // throws std::out_of_range
} catch (const std::out_of_range& e) {
    std::cout << "caught: " << e.what();      // caught: empty stack
}
```

## Chapter 9. Testing, Documentation and Good Practice
- **Unit testing** with a framework (GoogleTest, Catch2, doctest): test each class's public interface, including invariants, edge cases and exceptions. Use dependency injection (pass collaborators through constructors or interfaces) to make classes testable with test doubles (mocks, fakes).
- **Tools:** compiler warnings (`-Wall -Wextra`), sanitisers (`-fsanitize=address,undefined`), valgrind, clang-tidy, clang-format, version control, and a build system (CMake).
- **Style:** short functions, meaningful names, consistent formatting, comments that explain *why*, header files with include guards or `#pragma once`, keep interfaces small.
- **Refactoring:** improve structure without changing behaviour, protected by tests (extract method, replace conditional with polymorphism, introduce interface).

## Chapter 10. Common Mistakes Checklist
1. Forgetting a virtual destructor in a polymorphic base class.
2. Slicing: passing or storing polymorphic objects by value.
3. Shallow copies of classes that own raw pointers (violating the Rule of Three/Five).
4. Using `new` without a matching `delete`; mixing `new[]` with `delete`.
5. Initialiser-list order differing from the declaration order (members initialise in declaration order).
6. Returning a reference or pointer to a local variable.
7. Calling virtual functions in constructors/destructors expecting dynamic dispatch.
8. Missing `const` on member functions or parameters; modifying a container while iterating.
9. Using inheritance for code reuse where composition fits; deep hierarchies.
10. Catching exceptions by value (slicing) or swallowing them silently.
