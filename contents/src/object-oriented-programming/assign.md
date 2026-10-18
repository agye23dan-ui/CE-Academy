# Object-Oriented Programming (C++): Assignments with Worked Solutions

Type and run every program yourself with `g++ -std=c++17 -Wall -Wextra -g`. Assume `#include` lines for `<iostream>`, `<string>`, `<vector>`, `<memory>`, `<algorithm>`, `<numeric>`, `<functional>`, `<stdexcept>`, `<map>` and `using namespace std;` for brevity in the exercises. The "predict the output" answers below were derived by tracing the C++17 rules by hand (check them by running the code). Marks are awarded for correctness, clear design, const-correctness and resource safety.

# Assignment 1: Classes, Object Lifetime and Value Semantics (60 marks)

## Questions

**Q1. Encapsulation (10 marks)** Design a class BankAccount with a private owner and balance, a constructor, deposit (throws invalid_argument if the amount is not positive), withdraw (returns false and does nothing if the amount is not positive or exceeds the balance), and const accessors. State the class invariant. Predict the output of:
```cpp
BankAccount a("Ama", 100.0);
a.deposit(50);
bool ok1 = a.withdraw(200);
bool ok2 = a.withdraw(30);
cout << a.balance() << " " << ok1 << " " << ok2 << "\n";
try { a.deposit(-5); } catch (const invalid_argument& e) { cout << e.what() << "\n"; }
```

**Q2. Construction and destruction order (10 marks)** (a) Predict the output [4]:
```cpp
struct A { A() { cout << "A+ "; } ~A() { cout << "A- "; } };
struct B : A { B() { cout << "B+ "; } ~B() { cout << "B- "; } };
struct C { A a; B b; C() { cout << "C+ "; } ~C() { cout << "C- "; } };
int main() { C c; cout << "| "; }
```
(b) Predict the output of the following (C++17) and explain each copy [6]:
```cpp
struct Tracer {
    string n;
    Tracer(string s) : n(s) { cout << n << "+ "; }
    Tracer(const Tracer& o) : n(o.n + "'") { cout << n << "c "; }
    ~Tracer() { cout << n << "- "; }
};
Tracer make() { return Tracer("t"); }
void byValue(Tracer x) {}
void byRef(const Tracer& x) {}
int main() {
    Tracer a("a");
    byValue(a);
    byRef(a);
    Tracer b = make();
    cout << "end ";
}
```

**Q3. Rule of three (12 marks)** The class below owns a raw array.
```cpp
class IntArray {
public:
    explicit IntArray(size_t n) : n_(n), data_(new int[n]()) {}
    ~IntArray() { delete[] data_; }
    int& operator[](size_t i) { return data_[i]; }
    size_t size() const { return n_; }
private:
    size_t n_;
    int* data_;
};
```
(a) Explain what goes wrong with `IntArray y = x;` as written [3]. (b) Add the copy constructor and copy assignment operator [5]. (c) Add the move constructor and explain the benefit [2]. (d) Predict the output with your fixed class [2]:
```cpp
IntArray x(3); x[0] = 1; x[1] = 2; x[2] = 3;
IntArray y = x;
y[0] = 99;
cout << x[0] << " " << y[0] << " " << x.size();
IntArray z(1); z = x; z[2] = 7;
cout << " " << x[2] << " " << z[2];
```

**Q4. Operator overloading (12 marks)** Write a class Vec2 with a constructor, `+`, `+=`, `dot`, `==` and a stream insertion operator. Then predict the output of:
```cpp
Vec2 a(1, 2), b(3, 4);
Vec2 c = a + b;
c += Vec2(1, 1);
cout << c << " " << a.dot(b) << " " << (a == b) << "\n";
```
Explain why `operator<<` is not a member function and why `+=` returns a reference.

**Q5. Static members (8 marks)** Predict the output and explain:
```cpp
class Widget {
public:
    Widget() { ++count_; id_ = count_; }
    ~Widget() { --count_; }
    int id() const { return id_; }
    static int count() { return count_; }
private:
    static int count_;
    int id_;
};
int Widget::count_ = 0;
int main() {
    Widget a;
    { Widget b, c; cout << Widget::count() << " " << c.id() << " "; }
    Widget d;
    cout << Widget::count() << " " << d.id();
}
```

**Q6. References and pointers (8 marks)** Predict the output and explain each parameter kind:
```cpp
void f(int a, int& b, int* c) { a++; b++; (*c)++; c = nullptr; }
int main() { int x = 1, y = 1, z = 1; f(x, y, &z); cout << x << y << z; }
```
Then rewrite f so that the pointer parameter is replaced by a reference and a const reference is used for a `const string&` argument example.

## Solutions and Marking Guide

**Q1.**
```cpp
class BankAccount {
public:
    BankAccount(string owner, double balance = 0.0)
        : owner_(std::move(owner)), balance_(balance) {
        if (balance_ < 0) throw invalid_argument("negative opening balance");
    }
    void deposit(double amount) {
        if (amount <= 0) throw invalid_argument("amount must be positive");
        balance_ += amount;
    }
    bool withdraw(double amount) {
        if (amount <= 0 || amount > balance_) return false;
        balance_ -= amount;
        return true;
    }
    double balance() const { return balance_; }
    const string& owner() const { return owner_; }
private:
    string owner_;
    double balance_;
};
```
**Invariant:** balance_ ≥ 0 at all times, enforced by the constructor and by every mutator. Output: the balance becomes 150 after the deposit; withdraw(200) fails (false), withdraw(30) succeeds (true) leaving 120. So the first line is **120 0 1** and the second is **amount must be positive**. (3 marks design with private data, 3 invariant checks, 2 const accessors, 2 output.)

**Q2.**
(a) The members of C are built in declaration order: a prints "A+ "; then b is built: its base A first ("A+ "), then B's body ("B+ "); then C's body ("C+ "). After "| " the destruction runs in reverse: C's body ("C- "), then members in reverse order: b ("B- " then its base "A- "), then a ("A- "). Output: **A+ A+ B+ C+ | C- B- A- A- **.
(b) `a` is constructed ("a+ "). byValue(a) copy-constructs the parameter: its name becomes "a'" ("a'c ") and it is destroyed when the call ends ("a'- "). byRef(a) makes no copy. `Tracer b = make();` uses guaranteed copy elision (C++17): the temporary is constructed directly in b, so only "t+ " is printed, with no copy or move. Then "end ". At the end of main the objects are destroyed in reverse order: b ("t- ") then a ("a- "). Output: **a+ a'c a'- t+ end t- a- **.

**Q3.**
(a) The compiler-generated copy constructor copies the pointer data_ (a shallow copy), so x and y share the same array. Modifying y modifies x, and when both go out of scope delete[] runs twice on the same memory: **double free, undefined behaviour**.
(b)
```cpp
IntArray(const IntArray& o) : n_(o.n_), data_(new int[o.n_]) {
    std::copy(o.data_, o.data_ + n_, data_);
}
IntArray& operator=(const IntArray& o) {
    if (this != &o) {
        int* p = new int[o.n_];                 // allocate first: strong exception safety
        std::copy(o.data_, o.data_ + o.n_, p);
        delete[] data_;
        data_ = p;
        n_ = o.n_;
    }
    return *this;
}
```
(c)
```cpp
IntArray(IntArray&& o) noexcept : n_(o.n_), data_(o.data_) { o.n_ = 0; o.data_ = nullptr; }
```
The move constructor steals the pointer from a temporary (an rvalue), avoiding an allocation and a copy: returning an IntArray from a function or growing a vector<IntArray> becomes O(1) per element instead of O(n). The moved-from object is left empty but valid (and its destructor safely deletes nullptr).
(d) With deep copies: x[0] stays 1 while y[0] = 99, size 3: the first part prints "1 99 3". Then z = x copies the contents, z[2] = 7 does not affect x, so x[2] = 3 and z[2] = 7. Output: **1 99 3 3 7**.

**Q4.**
```cpp
class Vec2 {
public:
    Vec2(double x = 0, double y = 0) : x_(x), y_(y) {}
    Vec2 operator+(const Vec2& o) const { return Vec2(x_ + o.x_, y_ + o.y_); }
    Vec2& operator+=(const Vec2& o) { x_ += o.x_; y_ += o.y_; return *this; }
    double dot(const Vec2& o) const { return x_ * o.x_ + y_ * o.y_; }
    bool operator==(const Vec2& o) const { return x_ == o.x_ && y_ == o.y_; }
    friend ostream& operator<<(ostream& os, const Vec2& v) {
        return os << "(" << v.x_ << ", " << v.y_ << ")";
    }
private:
    double x_, y_;
};
```
c = (1 + 3, 2 + 4) = (4, 6); after `+= (1, 1)` it is (5, 7); a · b = 3 + 8 = 11; a == b is false (0). Output: **(5, 7) 11 0**. `operator<<` must take the stream as its left operand, which is not a Vec2, so it cannot be a member of Vec2 (it is a free function, usually a friend to reach the private data). `+=` returns `*this` by reference so that calls can be chained (`a += b += c`) and it behaves like the built-in operator without a copy.

**Q5.** a: count 1, id 1. b: count 2, id 2. c: count 3, id 3: the first print is "3 3 ". At the end of the block c and b are destroyed (count back to 1). d: count 2, id 2. Output: **3 3 2 2**. The static member count_ is shared by all objects, so ids are assigned from the running count; note that ids are reused, which is a design flaw of using a live count for identity (a separate static next-id counter would give unique ids).

**Q6.** a is passed by value: the increment changes a copy, so x stays 1. b is a reference: it aliases y, so y becomes 2. c is a pointer to z: `(*c)++` changes z to 2; the assignment `c = nullptr` changes only the local copy of the pointer. Output: **122**. Rewrite: `void f(int a, int& b, int& c) { a++; b++; c++; }` called as `f(x, y, z)`, and `void print(const string& s)` to avoid copying a large string while promising not to modify it.

---

# Assignment 2: Inheritance and Polymorphism (70 marks)

## Questions

**Q1. Virtual dispatch (8 marks)** Predict the output and explain each line:
```cpp
struct Base {
    void f() { cout << "Base::f "; }
    virtual void g() { cout << "Base::g "; }
    virtual ~Base() = default;
};
struct Der : Base {
    void f() { cout << "Der::f "; }
    void g() override { cout << "Der::g "; }
};
int main() {
    Der d; Base* p = &d;
    p->f(); p->g(); d.f();
    Base b = d; b.g();
}
```

**Q2. A shape hierarchy (14 marks)** Write an abstract class Shape with pure virtual `double area() const` and `string name() const`, a virtual destructor, and concrete classes Rect(w, h), Circle(r) (use π = 3.14) and Triangle(base, height). Store Rect(3, 4), Circle(2) and Triangle(6, 5) in a `vector<unique_ptr<Shape>>`, print the total area and the name of the largest shape. Explain why unique_ptr and a base-class pointer are used.

**Q3. Virtual destructors (8 marks)**
```cpp
struct Base { ~Base() { cout << "Base~ "; } };
struct Der : Base { ~Der() { cout << "Der~ "; } };
int main() { Base* p = new Der; delete p; }
```
(a) Explain the problem and what is printed in practice [4]. (b) Show the fix and the output [4].

**Q4. Constructors in a hierarchy (8 marks)** Predict the output:
```cpp
struct P {
    P()      { cout << "P "; }
    P(int)   { cout << "Pi "; }
    virtual void who() { cout << "P "; }
    virtual ~P() = default;
};
struct Q : P {
    Q()      { cout << "Q "; }
    Q(int x) : P(x) { cout << "Qi "; }
    void who() override { cout << "Q "; }
};
struct R {
    P p; Q q;
    R() : q(5) { cout << "R "; }
};
int main() { R r; r.p.who(); r.q.who(); }
```

**Q5. Composition or inheritance (8 marks)** For each pair decide "is-a" or "has-a" and justify: (a) Car and Engine; (b) Student and Person; (c) Stack and vector; (d) Square and Rectangle. Give a design for a Stack built on a vector and explain why public inheritance from vector would be a mistake.

**Q6. Liskov substitution and SOLID (10 marks)** (a) A class Square derives from Rectangle (setWidth/setHeight) and overrides the setters to keep the sides equal. Show a function that works for Rectangle and fails for Square, and name the violated principle [4]. (b) Propose a better design [3]. (c) The function `double totalPay(vector<Employee*>& v)` contains `if (e->type == "manager") ... else if (e->type == "engineer") ...`. Which principle does it violate and how do you fix it? [3]

**Q7. UML (6 marks)** Draw (describe in text) a class diagram for: a Library has many Books (books cannot exist without the library); Members borrow Books (a member may borrow many, a book is borrowed by at most one member at a time); Staff is a kind of Member who can also add Books. Label the relationships and multiplicities.

**Q8. Casts and type identification (8 marks)** Using Base and Der from Q1, predict the output and explain:
```cpp
Base* p = new Der;
if (Der* d = dynamic_cast<Der*>(p)) cout << "is Der ";
Base* q = new Base;
cout << (dynamic_cast<Der*>(q) == nullptr);
delete p; delete q;
```

## Solutions and Marking Guide

**Q1.** p->f(): f is **not virtual**, so the call uses the static type (Base*): "Base::f ". p->g(): virtual, so the dynamic type (Der) decides: "Der::g ". d.f(): d's static type is Der, so "Der::f " (Der::f hides Base::f). `Base b = d;` **slices** d into a Base object (only the Base subobject is copied); b.g() therefore calls Base::g: "Base::g ". Output: **Base::f Der::g Der::f Base::g ** (2 marks per line).

**Q2.**
```cpp
class Shape {
public:
    virtual double area() const = 0;
    virtual string name() const = 0;
    virtual ~Shape() = default;
};
class Rect : public Shape {
public:
    Rect(double w, double h) : w_(w), h_(h) {}
    double area() const override { return w_ * h_; }
    string name() const override { return "rect"; }
private:
    double w_, h_;
};
class Circle : public Shape {
public:
    explicit Circle(double r) : r_(r) {}
    double area() const override { return 3.14 * r_ * r_; }
    string name() const override { return "circle"; }
private:
    double r_;
};
class Triangle : public Shape {
public:
    Triangle(double b, double h) : b_(b), h_(h) {}
    double area() const override { return 0.5 * b_ * h_; }
    string name() const override { return "triangle"; }
private:
    double b_, h_;
};

int main() {
    vector<unique_ptr<Shape>> shapes;
    shapes.push_back(make_unique<Rect>(3, 4));
    shapes.push_back(make_unique<Circle>(2));
    shapes.push_back(make_unique<Triangle>(6, 5));
    double total = 0;
    const Shape* largest = shapes[0].get();
    for (const auto& s : shapes) {
        total += s->area();
        if (s->area() > largest->area()) largest = s.get();
    }
    cout << "total=" << total << " largest=" << largest->name() << "\n";
}
```
Step 1: Areas: 12, 12.56, 15.
Step 2: Output: **total=39.56 largest=triangle**.
Step 3: A container of `Shape*` is needed because a `vector<Shape>` cannot hold an abstract class (and would slice concrete ones); `unique_ptr` makes the vector the sole owner, so every object is deleted exactly once (through the virtual destructor) and no manual delete is needed (4 marks hierarchy, 3 container and loop, 2 output, 3 explanation, 2 const/override use.)

**Q3.**
(a) Deleting a Der object through a Base* when Base's destructor is **not virtual** is **undefined behaviour**: the compiler calls only ~Base() (statically chosen), so the Der destructor never runs and Der's resources leak; in practice the output is **Base~ ** only (the standard allows anything).
(b) Declare the base destructor virtual:
```cpp
struct Base { virtual ~Base() { cout << "Base~ "; } };
```
The delete now dispatches dynamically: **Der~ Base~ ** (derived destructor first, then the base). Rule: any class intended as a polymorphic base needs a virtual (or protected non-virtual) destructor.

**Q4.** R's members are constructed in declaration order: p uses the default constructor, printing "P "; q is built with the argument 5: its base P(5) runs first ("Pi "), then Q(int)'s body ("Qi "); then R's body ("R "). Then r.p.who() prints "P " and r.q.who() prints "Q ". Output: **P Pi Qi R P Q **.

**Q5.** (a) **has-a** (an Engine is part of a Car; composition). (b) **is-a** (a Student is a Person; public inheritance, substitutable). (c) **has-a**: a Stack *uses* a vector for storage but must not expose push_front, insert, etc. (d) Mathematically is-a, but behaviourally problematic (see Q6): prefer a common Shape interface. A Stack design: `template <class T> class Stack { vector<T> items_; public: void push(const T&); T pop(); bool empty() const; };`. Public inheritance from vector would expose the whole vector interface (violating the stack's invariant "access only at the top"), and vector has no virtual destructor, so deleting through a vector* would be undefined behaviour.

**Q6.**
(a) With `void resize(Rectangle& r) { r.setWidth(5); r.setHeight(4); assert(r.area() == 20); }` the assertion holds for a Rectangle, but for a Square the second setter also changes the width, so the area is 16 and the assertion fails. A Square is not substitutable for a Rectangle in this contract: it violates the **Liskov Substitution Principle** (derived classes must honour the base class's behavioural contract).
(b) Make Rectangle and Square independent classes implementing a common abstract Shape interface (with area()), or make shapes immutable value objects (`Rectangle(w, h)`, `Square(side)`) so no setters can break the contract.
(c) It violates the **Open/Closed Principle**: adding an employee type needs editing the function. Fix: make `virtual double pay() const = 0;` in Employee, override it in Manager and Engineer, and let totalPay simply sum e->pay() (polymorphism replaces the type switch).

**Q7.** Classes: Library, Book, Member, Staff. **Library ◆──── 0..* Book** (composition: a filled diamond at Library, since books do not exist without it). **Member 0..1 ──── 0..* Book** labelled "borrows" (an association: a member borrows many books; a book is borrowed by at most one member at a time). **Staff ──▷ Member** (inheritance: hollow triangle at Member). Staff has an operation `addBook(Book)` that Member lacks; Library has `addBook`, `findBook`. Attributes: Book(title, isbn), Member(name, id).

**Q8.** The dynamic type of p is Der, so dynamic_cast<Der*>(p) succeeds: prints "is Der ". q points to a plain Base, so the cast fails and returns nullptr: the comparison is true, printing 1. Output: **is Der 1**. (dynamic_cast requires a polymorphic base class and uses run-time type information; down-casting is often a sign that a virtual function would be a better design.)

---

# Assignment 3: Templates, the STL, Design Patterns and Exceptions (80 marks)

## Questions

**Q1. A class template (12 marks)** Write `template <typename T> class Stack` with push, pop (throws `out_of_range("empty stack")` when empty), empty and size. Predict the output:
```cpp
Stack<int> s;
s.push(1); s.push(2); s.push(3);
int a = s.pop(); int b = s.pop();
cout << a << b << " " << s.size();
try { s.pop(); s.pop(); } catch (const out_of_range& e) { cout << " " << e.what(); }
```

**Q2. Function templates (8 marks)** Given `template <typename T> T maxOf(T a, T b) { return (a > b) ? a : b; }`: (a) What do `maxOf(3, 7)`, `maxOf(2.5, 1.5)` and `maxOf<double>(3, 2.5)` return? [3] (b) Why does `maxOf(3, 2.5)` not compile? [2] (c) What is wrong with `maxOf("apple", "pear")`, and how do you fix it? [3]

**Q3. STL algorithms (12 marks)** Trace the contents and results:
```cpp
vector<int> v = {5, 2, 8, 1, 9, 3};
sort(v.begin(), v.end());
int sum = accumulate(v.begin(), v.end(), 0);
v.erase(remove_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; }), v.end());
auto it = find(v.begin(), v.end(), 5);
int idx = it - v.begin();
int c = count_if(v.begin(), v.end(), [](int x) { return x > 2; });
transform(v.begin(), v.end(), v.begin(), [](int x) { return x * x; });
```
Give sum, the vector after the erase, idx, c and the vector after transform. Explain the erase-remove idiom.

**Q4. Associative containers (8 marks)** Count the words of "a b a c b a" with `map<string,int>`; print the entries in iteration order. State the complexity of insertion in map and in unordered_map, and when you would choose each.

**Q5. Lambdas (6 marks)** Predict and explain:
```cpp
int k = 10;
auto add = [k](int x) { return x + k; };
k = 20;
auto addr = [&k](int x) { return x + k; };
k = 30;
cout << add(1) << " " << addr(1);
```

**Q6. Design patterns (16 marks)** (a) Trace the Observer example [5]:
```cpp
class Subject {
public:
    void subscribe(function<void(int)> f) { obs_.push_back(std::move(f)); }
    void set(int v) { for (auto& o : obs_) o(v); }
private:
    vector<function<void(int)>> obs_;
};
int main() {
    Subject s; int total = 0;
    s.subscribe([&](int v) { total += v; });
    s.subscribe([](int v) { cout << "got " << v << " "; });
    s.set(3); s.set(4);
    cout << total;
}
```
(b) Use the Strategy pattern: `void sortBy(vector<int>& v, function<bool(int,int)> cmp)` and show the result for {3, 1, 2} with a descending comparator [3]. (c) Write a thread-safe Singleton and list two drawbacks [4]. (d) Write a Factory function `unique_ptr<Shape> make(const string& kind, double a, double b)` for the Shape classes of Assignment 2 and explain its benefit [4].

**Q7. Exceptions and RAII (10 marks)** Predict the output and explain the order:
```cpp
struct G {
    string n;
    G(string s) : n(s) { cout << n << "+ "; }
    ~G() { cout << n << "- "; }
};
void f() { G a("a"); throw runtime_error("boom"); G b("b"); }
int main() {
    try { G m("m"); f(); }
    catch (const exception& e) { cout << e.what() << " "; }
    cout << "done";
}
```

**Q8. Smart pointers (8 marks)** (a) Predict the output [4]:
```cpp
auto a = make_shared<int>(5);
auto b = a;
cout << a.use_count();
{ auto c = a; cout << a.use_count(); }
cout << a.use_count();
```
(b) Predict the output [2]: `unique_ptr<int> p = make_unique<int>(7); unique_ptr<int> q = std::move(p); cout << (p == nullptr) << *q;` (c) How does weak_ptr break a reference cycle? [2]

## Solutions and Marking Guide

**Q1.**
```cpp
template <typename T>
class Stack {
public:
    void push(const T& v) { items_.push_back(v); }
    T pop() {
        if (items_.empty()) throw out_of_range("empty stack");
        T v = std::move(items_.back());
        items_.pop_back();
        return v;
    }
    bool empty() const { return items_.empty(); }
    size_t size() const { return items_.size(); }
private:
    vector<T> items_;
};
```
Trace: pushes 1, 2, 3; the first pop returns 3, the second 2, so "32" is printed, then a space and the size 1: "32 1". In the try block the first pop returns 1 (the stack is empty), the second throws `out_of_range`, and the catch prints " empty stack". Output: **32 1 empty stack**.

**Q2.**
(a) **7**, **2.5**, and **3** (the explicit `<double>` converts the arguments 3 and 2.5 to double; the result is 3.0, printed as 3).
(b) Template argument deduction finds T = int from the first argument and T = double from the second: the two deductions conflict, so the call is ill-formed. Fix: `maxOf<double>(3, 2.5)` or cast one argument.
(c) The arguments have type `const char*`, so T = const char* and `a > b` **compares pointer addresses**, not the strings: the result is unpredictable (not "pear"). Fix: convert to string (`maxOf(string("apple"), string("pear"))`), use `string_view`, or provide an overload or a template specialisation for `const char*` using `strcmp`.

**Q3.** Step 1: After sort: 1 2 3 5 8 9.
Step 2: **sum = 28** (5 + 2 + 8 + 1 + 9 + 3).
Step 3: After the erase of even numbers: **1 3 5 9**. find returns the iterator to 5, so **idx = 2**. count_if (x > 2): 3, 5, 9, so **c = 3**.
Step 4: After transform: **1 9 25 81**.
Step 5: The **erase-remove idiom:** `remove_if` shifts the elements to keep towards the front and returns an iterator to the new logical end, but it cannot change the container's size; `erase(newEnd, end)` then physically removes the leftover tail (In C++20 `std::erase_if(v, pred)` does both.)

**Q4.** Counts: a = 3, b = 2, c = 1. `map` iterates in sorted key order: **a 3, b 2, c 1**. map (balanced tree) insertion is **O(log n)** and keeps sorted order; unordered_map (hash table) is **O(1) average** (O(n) worst case) with no ordering. Choose map when sorted traversal, range queries or deterministic order matter; choose unordered_map for fastest lookup by key.

**Q5.** `[k]` captures k **by value at the moment the lambda is created** (10), so add(1) = 11 even though k later changes. `[&k]` captures by reference, so it sees the current value of k at call time (30): addr(1) = 31. Output: **11 31**. (Capturing a reference to a local that has gone out of scope leaves a dangling reference.)

**Q6.**
(a) set(3) calls the first observer (total = 3) and then the second (prints "got 3 "); set(4) adds 4 (total = 7) and prints "got 4 ". Finally the total is printed. Output: **got 3 got 4 7**.
(b)
```cpp
void sortBy(vector<int>& v, function<bool(int, int)> cmp) { sort(v.begin(), v.end(), cmp); }
vector<int> v = {3, 1, 2};
sortBy(v, [](int a, int b) { return a > b; });      // descending: 3 2 1
```
Result: **3 2 1**. The algorithm (sorting) is fixed, the comparison strategy is injected.
(c)
```cpp
class Config {
public:
    static Config& instance() { static Config c; return c; }   // initialised once, thread-safe since C++11
    Config(const Config&) = delete;
    Config& operator=(const Config&) = delete;
private:
    Config() = default;
};
```
Drawbacks: it is **global state** (hidden dependencies, hard to reason about), and it **hinders testing** (cannot be replaced by a mock; state leaks between tests); it also couples every user to a concrete class and complicates multi-threading and shutdown order.
(d)
```cpp
unique_ptr<Shape> make(const string& kind, double a, double b) {
    if (kind == "rect")     return make_unique<Rect>(a, b);
    if (kind == "circle")   return make_unique<Circle>(a);
    if (kind == "triangle") return make_unique<Triangle>(a, b);
    throw invalid_argument("unknown shape: " + kind);
}
```
Benefit: callers depend only on the Shape interface; the choice of concrete class is made in one place (for example from a file or user input), and ownership is explicit. Adding a new shape changes only the factory.

**Q7.** m is constructed ("m+ "), f() constructs a ("a+ "), then throws; the line creating b is never reached, so b is never constructed. During **stack unwinding** the destructors of the fully constructed local objects run in reverse order of construction as the exception propagates: first a ("a- ") as f exits, then m ("m- ") as the try block is left. Then the handler prints "boom " and finally "done". Output: **m+ a+ a- m- boom done**. This guaranteed cleanup is why resources must be owned by objects (RAII).

**Q8.**
(a) After `auto b = a;` the use_count is 2, so the first print is 2; inside the block `c` is a third owner, so 3 is printed; after the block c is destroyed, so 2. Output: **2 3 2**. (The three print statements show 2, 3, 2.)
(b) After the move, p is null (prints 1) and q owns the int (prints 7). Output: **17**.
(c) In a cycle (A holds shared_ptr to B and B holds shared_ptr to A) the reference counts never reach zero and the objects leak. Making one direction a `weak_ptr` (a non-owning reference that does not increase the count; use `lock()` to obtain a shared_ptr if the object still exists) breaks the cycle.
