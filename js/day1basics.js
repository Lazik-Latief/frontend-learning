// 📘 JavaScript Days 1–6 (Cleaned + Well Commented)

// =====================================================
// DAY 1 – BASICS
// =====================================================

// Variables (use const if value won't change)
const name = "Lazik";
const age = 21;
let city = "Srinagar"; // can change later

// Output
console.log("=== Basic Info ===");
console.log(name);
console.log(age);
console.log(city);

// Data Types
const isStudent = true;
console.log("\n=== Data Types ===");
console.log("Name:", typeof name);   // string
console.log("Age:", typeof age);     // number
console.log("Is Student:", typeof isStudent); // boolean

// Math Operations
const a = 10;
const b = 5;
console.log("\n=== Math Operations ===");
console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Multiplication:", a * b);

// Template Literals (clean + modern way)
console.log("\n=== Final Output ===");
console.log(`My name is ${name}, I am ${age} years old and I live in ${city}.`);

// =====================================================
// DAY 2 – CONDITIONS + LOOPS
// =====================================================

console.log("\n=== REAL WORLD LOGIC ===");

// Login System (never hardcode passwords in real apps ⚠️)
const username = "lazik";
const password = "1234";

if (username === "lazik" && password === "1234") {
console.log("Login Successful ✅");
} else {
console.log("Invalid Credentials ❌");
}

// Discount System
const amount = 1200;
if (amount > 1000) {
console.log("20% discount");
} else if (amount > 500) {
console.log("10% discount");
} else {
console.log("No discount");
}

// Traffic Light
const signal = "red";
if (signal === "red") console.log("Stop 🚫");
else if (signal === "yellow") console.log("Ready ⚠️");
else console.log("Go 🚀");

// ATM Logic
let balance = 5000;
const withdraw = 2000;
if (withdraw <= balance) {
balance -= withdraw; // shorthand
console.log("Remaining:", balance);
} else {
console.log("Insufficient balance");
}

// Loop – Cart Items
const cart = ["Shirt", "Shoes", "Watch"];
for (let i = 0; i < cart.length; i++) {
console.log(cart[i]);
}

// Loop – Sum
const prices1 = [100, 200, 300];
let total1 = 0;
for (let i = 0; i < prices1.length; i++) {
total1 += prices1[i];
}
console.log("Total:", total1);

// While loop
let attempts = 3;
while (attempts > 0) {
console.log("Attempts left:", attempts);
attempts--;
}

// =====================================================
// DAY 3 – FUNCTIONS
// =====================================================

// Simple Function
function sayHello() {
console.log("Hello World");
}
sayHello();

// Function with parameter
function greet(userName) {
console.log(`Hello, ${userName}`);
}
greet("Lazik");

// Function with return
function add(x, y) {
return x + y;
}
console.log("Sum:", add(10, 5));

// Arrow Function (shorter syntax)
const subtract = (x, y) => x - y;
console.log("Subtract:", subtract(10, 3));

// Calculator Function
function calculator(x, y, op) {
switch (op) {
case "+": return x + y;
case "-": return x - y;
case "*": return x * y;
case "/": return y !== 0 ? x / y : "Divide by 0";
default: return "Invalid";
}
}
console.log(calculator(10, 5, "+"));

// =====================================================
// DAY 4 – ARRAYS
// =====================================================

const fruits = ["Apple", "Banana", "Mango"];

// Add / Remove
fruits.push("Orange"); // add
fruits.pop(); // remove last

// Loop
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

// Array Methods
const nums = [1, 2, 3, 4];

// map → transform
const doubled = nums.map(n => n * 2);

// filter → condition
const even = nums.filter(n => n % 2 === 0);

// forEach → loop
nums.forEach(n => console.log(n));

// =====================================================
// DAY 6 – ADVANCED ARRAY + OBJECTS
// =====================================================

// Object
const person = {
name: "Ali",
age: 20,
greet() {
console.log("Hello " + this.name);
}
};
person.greet();

// Destructuring
const arr = [1, 2, 3];
const [x, y] = arr;

// Spread
const arr2 = [...arr, 4];

// Rest
function sumAll(...nums2) {
return nums2.reduce((a, b) => a + b, 0);
}

// Reduce
const total2 = [1, 2, 3].reduce((a, b) => a + b, 0);


// ===================================================== // DAY 7 – DOM & EVENTS (VERY IMPORTANT 🔥) // =====================================================

// DOM = Document Object Model (HTML ko JS se control karna)

// 1. Selecting Elements const heading = document.getElementById("title"); // by id const btn = document.querySelector("button"); // first match const allBtns = document.querySelectorAll("button"); // all buttons

// 2. Changing Content if (heading) { heading.textContent = "Hello Lazik 🚀"; // change text }

// 3. Changing Styles if (heading) { heading.style.color = "blue"; heading.style.fontSize = "24px"; }

// 4. Event Listener (click) if (btn) { btn.addEventListener("click", () => { console.log("Button clicked 🔥"); }); }

// 5. Input Example const input = document.querySelector("input");

if (btn && input) { btn.addEventListener("click", () => { console.log("User typed:", input.value); }); }

// 6. Toggle Example (real world) const toggleBtn = document.querySelector("#toggle");

if (toggleBtn && heading) { toggleBtn.addEventListener("click", () => { if (heading.style.display === "none") { heading.style.display = "block"; } else { heading.style.display = "none"; } }); }

// 7. Loop through multiple elements allBtns.forEach((b) => { b.addEventListener("click", () => { console.log("One of many buttons clicked"); }); });

//

// =====================================================
// DAY 7 – ASYNC JAVASCRIPT
// =====================================================


// ==============================
// 1. CALLBACK (old way)
// ==============================

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});


// ==============================
// 2. PROMISES
// ==============================

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  }, 1000);
});

myPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


// ==============================
// 3. ASYNC / AWAIT (modern way)
// ==============================

async function getData() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData();


// ==============================
// 4. FETCH API (REAL WORLD)
// ==============================

async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchUsers();


// ==============================
// 5. PARALLEL REQUESTS
// ==============================

async function fetchMultiple() {
  try {
    const [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
    ]);

    console.log(users, posts);
  } catch (error) {
    console.log(error);
  }
}

fetchMultiple();



// =====================================================
// DAY 8 – ASYNC JS + PROMISES + FETCH (IMPORTANT)
// =====================================================

// setTimeout (async behavior)
setTimeout(() => {
console.log("Runs after 2 seconds");
}, 2000);

// Callback example
function fetchData(callback) {
setTimeout(() => {
callback("Data received");
}, 1000);
}

fetchData((data) => {
console.log(data);
});

// Promise
const myPromise = new Promise((resolve, reject) => {
let success = true;

if (success) {
resolve("Success!");
} else {
reject("Error!");
}
});

myPromise
.then((res) => console.log(res))
.catch((err) => console.log(err));

// Async / Await
async function getData() {
try {
const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const data = await res.json();
console.log(data);
} catch (err) {
console.log("Error:", err);
}
}

getData();

// Parallel async calls
async function getMultiple() {
try {
const [post, user] = await Promise.all([
fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()),
fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json())
]);

```
console.log(post, user);
```

} catch (err) {
console.log(err);
}
}

getMultiple();

// Finally
myPromise
.then(res => console.log(res))
.catch(err => console.log(err))
.finally(() => console.log("Done"));

// Simple real-world example (API simulation)
function loginUser() {
return new Promise((resolve) => {
setTimeout(() => resolve("User logged in"), 1000);
});
}

async function startApp() {
const user = await loginUser();
console.log(user);
}

startApp();


// =====================================================
// DAY 9 – CLOSURES + HOISTING + SCOPE (CORE JS)
// =====================================================

// -------------------------------
// 1. Scope (Global, Function, Block)
// -------------------------------

let globalVar = "I am global";

function testScope() {
let functionVar = "I am inside function";

if (true) {
let blockVar = "I am inside block";
console.log(blockVar); // works
}

console.log(functionVar); // works
// console.log(blockVar); ❌ error
}

testScope();

// -------------------------------
// 2. Hoisting
// -------------------------------

// var is hoisted (but undefined)
console.log(a); // undefined
var a = 10;

// let/const NOT usable before declaration
// console.log(b); ❌ ReferenceError
let b = 20;

// Function hoisting
sayHello(); // works

function sayHello() {
console.log("Hello!");
}

// -------------------------------
// 3. Closures (VERY IMPORTANT)
// -------------------------------

function outer() {
let count = 0;

return function inner() {
count++;
console.log("Count:", count);
};
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

// -------------------------------
// 4. Real-world Closure Example
// -------------------------------

function createUser(name) {
return {
greet: function () {
console.log("Hello " + name);
},
};
}

const user1 = createUser("Ali");
user1.greet();

// -------------------------------
// 5. Data Privacy using Closure
// -------------------------------

function bankAccount() {
let balance = 1000;

return {
deposit(amount) {
balance += amount;
console.log("Balance:", balance);
},
getBalance() {
return balance;
},
};
}

const acc = bankAccount();

acc.deposit(500);
console.log(acc.getBalance());

// -------------------------------
// 6. Interview Trick (Closure in loop)
// -------------------------------

for (var i = 1; i <= 3; i++) {
setTimeout(() => {
console.log("var:", i); // 4, 4, 4
}, 1000);
}

for (let j = 1; j <= 3; j++) {
setTimeout(() => {
console.log("let:", j); // 1, 2, 3
}, 1000);
}


// =====================================================
// DAY 10 – EVENT LOOP + CALLBACK QUEUE + DEBOUNCE/THROTTLE
// =====================================================

// -------------------------------
// 1. Call Stack (Execution order)
// -------------------------------

function first() {
console.log("First");
}

function second() {
first();
console.log("Second");
}

second();
// Output:
// First
// Second

// -------------------------------
// 2. Async vs Sync
// -------------------------------

console.log("Start");

setTimeout(() => {
console.log("Async Task");
}, 0);

console.log("End");

// Output:
// Start
// End
// Async Task

// -------------------------------
// 3. Event Loop Concept
// -------------------------------

// JS runs:
// 1. Call Stack
// 2. Web APIs (setTimeout, fetch)
// 3. Callback Queue
// 4. Event Loop pushes to stack

// Example:
console.log("1");

setTimeout(() => {
console.log("2");
}, 0);

console.log("3");

// Output:
// 1
// 3
// 2

// -------------------------------
// 4. Microtask Queue (Promises)
// -------------------------------

console.log("Start");

Promise.resolve().then(() => {
console.log("Promise");
});

setTimeout(() => {
console.log("Timeout");
}, 0);

console.log("End");

// Output:
// Start
// End
// Promise   (microtask runs first)
// Timeout

// -------------------------------
// 5. Debounce (VERY IMPORTANT)
// -------------------------------

function debounce(fn, delay) {
let timer;

return function (...args) {
clearTimeout(timer);
timer = setTimeout(() => {
fn(...args);
}, delay);
};
}

// Example usage:
const search = debounce((text) => {
console.log("Searching:", text);
}, 500);

// search("a");
// search("ab");
// search("abc");
// Only "abc" runs after delay

// -------------------------------
// 6. Throttle (VERY IMPORTANT)
// -------------------------------

function throttle(fn, limit) {
let inThrottle = false;

return function (...args) {
if (!inThrottle) {
fn(...args);
inThrottle = true;

```
  setTimeout(() => {
    inThrottle = false;
  }, limit);
}
```

};
}

// Example:
const logScroll = throttle(() => {
console.log("Scrolling...");
}, 1000);

// -------------------------------
// 7. Real-world Example
// -------------------------------

// Debounce → Search input
// Throttle → Scroll / resize events

// Example (React idea):
// onChange → debounce API call
// onScroll → throttle handler



// =====================================================
// FINAL NOTES
// =====================================================

// ✔ Fixed duplicate variable names
// ✔ Used const where possible
// ✔ Improved naming (x, y instead of a, b mix)
// ✔ Added safety (divide by zero)
// ✔ Cleaner structure & comments

// 🔥 Revise once = strong basics ready
