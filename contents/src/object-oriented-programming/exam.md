# Object-Oriented Programming (C++): Final Examination

Duration: 3 hours. No computer, no notes. Total: 100 marks. Assume the usual standard `#include` lines and `using namespace std;` in code fragments. Output answers must show exact spacing as printed.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

## Section A: Multiple Choice (20 marks)

**1.** In a C++ `class`, members are by default
A) public  B) private  C) protected  D) static

**2.** In a C++ `struct`, members are by default
A) public  B) private  C) protected  D) const

**3.** Data members are initialised in the order
A) of the member initialiser list  B) of their declaration in the class  C) alphabetical  D) undefined

**4.** The keyword `explicit` on a one-argument constructor
A) makes it faster  B) prevents implicit conversions  C) makes it private  D) makes it virtual

**5.** Which member functions can be called on a `const` object?
A) any function  B) only const member functions  C) only static functions  D) only constructors

**6.** The purpose of `override` is to
A) make a function virtual  B) have the compiler check that a base-class virtual function is really overridden  C) prevent inheritance  D) hide the base function

**7.** A pure virtual function is declared with
A) `= 0`  B) `= delete`  C) `final`  D) `static`

**8.** The vtable in a polymorphic class is
A) one per object  B) one per class  C) one per program  D) one per member function

**9.** The diamond problem in multiple inheritance is solved with
A) friend classes  B) virtual inheritance  C) templates  D) private inheritance

**10.** The Rule of Three concerns
A) destructor, copy constructor, copy assignment  B) three constructors  C) three base classes  D) three template parameters

**11.** `std::move(x)` does what?
A) moves x immediately  B) casts x to an rvalue reference, allowing a move  C) deletes x  D) copies x

**12.** `shared_ptr::use_count()` returns
A) the size of the object  B) the number of shared_ptr owners  C) the number of weak_ptrs only  D) the address

**13.** A template specialisation provides
A) a special implementation for a particular type  B) a virtual function  C) a new base class  D) a namespace

**14.** vector::reserve(n)
A) changes the size to n  B) allocates capacity for n elements without changing the size  C) clears the vector  D) sorts n elements

**15.** The average cost of a lookup in std::unordered_map is
A) O(1)  B) O(log n)  C) O(n)  D) O(n log n)

**16.** Which algorithm sorts a range?
A) std::sort  B) std::find  C) std::accumulate  D) std::count

**17.** Destructors should be
A) allowed to throw  B) noexcept (never throw)  C) always virtual in every class  D) private

**18.** A main drawback of the Singleton pattern is
A) it uses too much memory  B) it introduces global state that hinders testing  C) it cannot be thread-safe  D) it needs templates

**19.** The Observer pattern is used to
A) create objects without naming classes  B) notify dependent objects when a subject changes  C) wrap an interface  D) copy objects

**20.** The Open/Closed Principle says software entities should be
A) open for modification, closed for use  B) open for extension, closed for modification  C) always final  D) always abstract

## Section B: Short Questions (40 marks)

**B1. (5)** Define encapsulation and give a short C++ example showing how it protects a class invariant.

**B2. (5)** Predict the output and explain:
```cpp
struct A { virtual string f() { return "A"; } string g() { return f() + "!"; } };
struct B : A { string f() override { return "B"; } };
int main() { B b; A& r = b; cout << r.g() << " " << A(b).g(); }
```

**B3. (5)** The class below leaks and crashes when copied. Fix it by adding the destructor, copy constructor and copy assignment operator.
```cpp
class Buffer {
public:
    Buffer(size_t n) : n_(n), p_(new char[n]()) {}
private:
    size_t n_;
    char* p_;
};
```

**B4. (5)** Write `template <typename T> T clampTo(T v, T lo, T hi)` and give the results of `clampTo(15, 0, 10)`, `clampTo(-3, 0, 10)` and `clampTo(2.5, 0.0, 1.0)`.

**B5. (5)** Using a `set<int>`, write code that prints the duplicates found when scanning `{3, 1, 4, 1, 5, 9, 2, 6, 5}` in order (print each value at the moment it is seen for the second time), and give the output.

**B6. (5)** Predict the output:
```cpp
try {
    try { throw 1; }
    catch (int) { cout << "a "; throw; }
}
catch (...) { cout << "b "; }
cout << "c";
```

**B7. (5)** Find and explain the bug, and fix it:
```cpp
int* raw = new int(5);
shared_ptr<int> a(raw);
shared_ptr<int> b(raw);
```

**B8. (5)** A class `ReportManager` reads data from a database, formats a report and e-mails it. Which SOLID principle does it violate? Propose a refactoring into suitable classes.

## Section C: Long Questions (answer any four, 10 marks each)

**C1. Payroll hierarchy.**
(a) Write an abstract class Employee (name, base salary, virtual `pay() const`, virtual destructor) and derived classes Engineer (pay = base + 100 per project) and Manager (pay = base + 500 + 200 per direct report). [6]
(b) Store Engineer("Ama", 3000, 3 projects) and Manager("Kojo", 4000, 2 reports) in a `vector<unique_ptr<Employee>>` and print each name and pay and the total payroll. [2]
(c) Explain how you would add a Contractor type without modifying existing code and name the principle. [2]

**C2. Copy and move semantics.** Study:
```cpp
struct Buf {
    Buf()                 { cout << "ctor "; }
    Buf(const Buf&)       { cout << "copy "; }
    Buf(Buf&&) noexcept   { cout << "move "; }
};
int main() {
    Buf a;
    Buf b = a;
    Buf c = std::move(a);
    vector<Buf> v;
    v.reserve(2);
    v.push_back(Buf());
    v.push_back(b);
}
```
(a) Predict the exact output and justify each token. [6]
(b) Explain what changes if the move constructor is not declared noexcept and a vector reallocates. [2]
(c) Explain the state of `a` after the move. [2]

**C3. Observer and Strategy.**
(a) Write an abstract Observer (virtual update(double)) and a Station that stores observers and notifies them in `set(double)`. [3]
(b) Write a Display observer that prints "T=" and the value, and a Logger that counts updates and tracks the maximum. [3]
(c) Predict the output of attaching a Display and a Logger and calling set(21.5), set(25), set(19), then printing the Logger's count and maximum. [2]
(d) Explain how std::function could replace the Observer interface. [2]

**C4. Generic programming.**
(a) Write `template <typename T> const T& maxElement(const vector<T>& v)` that throws `invalid_argument` for an empty vector and uses only `operator<`. [3]
(b) What does it return for `{3, 9, 2}` and `{"pear", "apple", "zebra"}`? [2]
(c) Write a `Person` class (name, age) with the operator needed to find the oldest of Ama (30), Kojo (41), Esi (25), and give the result. [3]
(d) Name two requirements this template places on its type T. [2]

**C5. Design.** Design a small library system: a Library holds Books; Members borrow Books (at most 3 at a time); Librarians are Members who can also add and remove books; fines apply for late returns using a pluggable fine policy.
(a) Give a class diagram (classes, key attributes and operations, relationships and multiplicities). [4]
(b) Identify two design patterns that fit and where you would use them. [2]
(c) Show how errors (for example borrowing a fourth book) are reported using exceptions. [2]
(d) List four unit tests for the borrowing rules. [2]

---

# Marking Scheme and Complete Solutions

## Section A answers
1 **B** · 2 **A** · 3 **B** · 4 **B** · 5 **B** · 6 **B** · 7 **A** · 8 **B** · 9 **B** · 10 **A** · 11 **B** · 12 **B** · 13 **A** · 14 **B** · 15 **A** · 16 **A** · 17 **B** · 18 **B** · 19 **B** · 20 **B**

## Section B solutions

**B1.** **Encapsulation** bundles data with the functions that operate on it and hides the representation behind a public interface, so that the class itself guarantees its invariants. Example:
```cpp
class Temperature {
public:
    explicit Temperature(double celsius) { set(celsius); }
    void set(double c) {
        if (c < -273.15) throw invalid_argument("below absolute zero");
        celsius_ = c;
    }
    double celsius() const { return celsius_; }
private:
    double celsius_;          // invariant: celsius_ >= -273.15
};
```
No outside code can put the object in an invalid state because the only way to change celsius_ is through set. (2 marks definition, 2 example, 1 invariant.)

**B2.** r is an A& referring to the B object, and g is not virtual but calls the virtual f through this, which dispatches dynamically: r.g() = "B" + "!" = "B!". `A(b)` slices b into a new A object, whose f is A::f: "A!". Output: **B! A!**.

**B3.**
```cpp
~Buffer() { delete[] p_; }
Buffer(const Buffer& o) : n_(o.n_), p_(new char[o.n_]) { std::copy(o.p_, o.p_ + n_, p_); }
Buffer& operator=(const Buffer& o) {
    if (this != &o) {
        char* q = new char[o.n_];
        std::copy(o.p_, o.p_ + o.n_, q);
        delete[] p_;
        p_ = q;
        n_ = o.n_;
    }
    return *this;
}
```
(Better: replace the raw array by `std::vector<char>` and apply the Rule of Zero.)

**B4.**
```cpp
template <typename T>
T clampTo(T v, T lo, T hi) { return v < lo ? lo : (hi < v ? hi : v); }
```
clampTo(15, 0, 10) = **10**; clampTo(-3, 0, 10) = **0**; clampTo(2.5, 0.0, 1.0) = **1** (printed as 1).

**B5.**
```cpp
vector<int> data = {3, 1, 4, 1, 5, 9, 2, 6, 5};
set<int> seen;
for (int x : data) {
    if (!seen.insert(x).second) cout << x << " ";     // insert returns false if already present
}
```
The second 1 is met first and then the second 5: output **1 5 **.

**B6.** The inner catch prints "a ", then `throw;` rethrows the same exception, which the outer catch(...) handles: "b ". Then "c". Output: **a b c**.

**B7.** Both shared_ptrs are constructed from the same raw pointer, so they have **independent control blocks** (each believes it is the sole owner). When both are destroyed, `delete raw` runs twice: **double delete, undefined behaviour**. Fix: create the pointer once with `auto a = make_shared<int>(5); auto b = a;` (sharing one control block), or `shared_ptr<int> b = a;`.

**B8.** It violates the **Single Responsibility Principle** (it has three reasons to change: the data source, the report format and the delivery channel). Refactor into `ReportRepository` (data access, ideally an interface `IReportSource`), `ReportFormatter` (formatting, possibly several strategies) and `ReportSender` (an interface `ISender` with an `EmailSender`), plus a small coordinating class that receives them through its constructor (dependency inversion), which also makes each part testable with a fake.

## Section C solutions

**C1.**
(a)
```cpp
class Employee {
public:
    Employee(string name, double base) : base_(base), name_(std::move(name)) {}   // same order as the declarations below
    virtual double pay() const = 0;
    virtual ~Employee() = default;
    const string& name() const { return name_; }
protected:
    double base_;
private:
    string name_;
};
class Engineer : public Employee {
public:
    Engineer(string n, double b, int projects) : Employee(std::move(n), b), projects_(projects) {}
    double pay() const override { return base_ + 100 * projects_; }
private:
    int projects_;
};
class Manager : public Employee {
public:
    Manager(string n, double b, int reports) : Employee(std::move(n), b), reports_(reports) {}
    double pay() const override { return base_ + 500 + 200 * reports_; }
private:
    int reports_;
};
```
(b)
```cpp
vector<unique_ptr<Employee>> staff;
staff.push_back(make_unique<Engineer>("Ama", 3000, 3));
staff.push_back(make_unique<Manager>("Kojo", 4000, 2));
double total = 0;
for (const auto& e : staff) {
    cout << e->name() << " " << e->pay() << "\n";
    total += e->pay();
}
cout << "total " << total << "\n";
```
Output: **Ama 3300**, **Kojo 4900**, **total 8200** (Ama: 3000 + 300; Kojo: 4000 + 500 + 400).
(c) Derive `Contractor` from Employee and override pay (for example hourly rate times hours); existing classes and the payroll loop are unchanged because they depend only on the Employee interface: the **Open/Closed Principle** (and dependency inversion).

**C2.**
(a) `Buf a;` prints **ctor**. `Buf b = a;` copy-constructs from an lvalue: **copy**. `Buf c = std::move(a);` casts a to an rvalue, selecting the move constructor: **move**. `v.reserve(2)` allocates but constructs nothing. `v.push_back(Buf())` constructs a temporary (**ctor**) and then moves it into the vector (**move**), since the argument is an rvalue. `v.push_back(b)` copies the lvalue b into the vector: **copy** (no reallocation, because the capacity is 2). Output: **ctor copy move ctor move copy **.
(b) If the move constructor can throw, `std::vector` cannot give its strong exception guarantee when it relocates elements on reallocation, so it **copies** the existing elements instead of moving them (it uses `std::move_if_noexcept`); performance suffers. Mark move operations `noexcept`.
(c) The moved-from object a is in a **valid but unspecified state** (for a typical resource-owning class: empty, with a null pointer). You may safely destroy it or assign to it, but must not rely on its value.

**C3.**
(a)
```cpp
struct Observer {
    virtual void update(double t) = 0;
    virtual ~Observer() = default;
};
class Station {
public:
    void attach(Observer* o) { obs_.push_back(o); }
    void set(double t) { for (auto* o : obs_) o->update(t); }
private:
    vector<Observer*> obs_;
};
```
(b)
```cpp
struct Display : Observer {
    void update(double t) override { cout << "T=" << t << " "; }
};
struct Logger : Observer {
    int n = 0;
    double max = -1e9;
    void update(double t) override { ++n; if (t > max) max = t; }
};
```
(c)
```cpp
Station s; Display d; Logger l;
s.attach(&d); s.attach(&l);
s.set(21.5); s.set(25); s.set(19);
cout << "| " << l.n << " " << l.max;
```
Each set notifies both observers in attachment order. Output: **T=21.5 T=25 T=19 | 3 25**.
(d) Replace the Observer interface by `vector<function<void(double)>>` and attach lambdas: `s.subscribe([](double t){ cout << "T=" << t << " "; });`. Observers then need no common base class, and state can be captured by the lambda.

**C4.**
(a)
```cpp
template <typename T>
const T& maxElement(const vector<T>& v) {
    if (v.empty()) throw invalid_argument("empty vector");
    const T* best = &v[0];
    for (const T& x : v)
        if (*best < x) best = &x;
    return *best;
}
```
(b) For {3, 9, 2} it returns **9**; for the strings it returns **"zebra"** (lexicographic comparison).
(c)
```cpp
class Person {
public:
    Person(string n, int a) : name_(std::move(n)), age_(a) {}
    bool operator<(const Person& o) const { return age_ < o.age_; }
    const string& name() const { return name_; }
private:
    string name_;
    int age_;
};
vector<Person> p = {{"Ama", 30}, {"Kojo", 41}, {"Esi", 25}};
cout << maxElement(p).name();
```
The result is **Kojo** (age 41).
(d) T must be **comparable with `operator<`** (a strict weak ordering) and, since the function returns a const reference to an element, the vector must outlive the use of the result; T need not be default-constructible or copyable (the function does not copy elements). (Accept: "T must support <" and "T must be copy/reference-safe".)

**C5.**
(a) Classes: **Library** (books: collection of Book, members; addBook, removeBook, findBook, checkOut, returnBook); **Book** (isbn, title, available; borrowedBy pointer); **Member** (id, name, borrowed: up to 3 Books; borrow, giveBack, fines); **Librarian** inherits publicly from Member (adds addBook and removeBook through the Library); **FinePolicy** (abstract: `virtual double fine(int daysLate) const = 0`) with concrete **FlatFinePolicy** and **PerDayFinePolicy**. Relationships: Library ◆── 0..* Book (composition: books belong to the library); Library ◇── 0..* Member (aggregation); Member 0..1 ── 0..3 Book ("borrows": a member has at most 3 loans and a book at most one borrower); Librarian ──▷ Member (inheritance); Library ──> FinePolicy (association, injected).
(b) **Strategy** for the fine policy (swap flat or per-day fines without changing the Library); **Factory** (create books or members from a file), **Observer** (notify members when a reserved book becomes available) or **Singleton** (not recommended) are also acceptable.
(c)
```cpp
struct LoanLimitExceeded : runtime_error {
    LoanLimitExceeded() : runtime_error("member already has 3 books") {}
};
void Member::borrow(Book& b) {
    if (borrowed_.size() >= 3) throw LoanLimitExceeded();
    if (!b.available()) throw runtime_error("book not available");
    borrowed_.push_back(&b);
    b.setBorrower(this);
}
```
The caller catches the specific exception and reports it to the user.
(d) Tests: (1) a member can borrow up to 3 books; (2) borrowing a 4th book throws LoanLimitExceeded and leaves the loans unchanged; (3) a book already on loan cannot be borrowed by another member; (4) returning a book makes it available again and removes it from the member's list (and, with the fine policy injected as a test double, a late return of 5 days produces the expected fine).
