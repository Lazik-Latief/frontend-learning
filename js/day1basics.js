// Day 1 - JavaScript Basics

// 1. Variables
let name = "Lazik";
const age = 21;
let city = "Srinagar";

// 2. Output
console.log("=== Basic Info ===");
console.log(name);
console.log(age);
console.log(city);

// 3. Data Types
let isStudent = true;

console.log("\n=== Data Types ===");
console.log("Name:", typeof name);
console.log("Age:", typeof age);
console.log("Is Student:", typeof isStudent);

// 4. Math Operations
let a = 10;
let b = 5;

console.log("\n=== Math Operations ===");
console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Multiplication:", a * b);

// 5. Boolean Output
let isLearning = true;

console.log("\n=== Learning Status ===");
console.log("I am learning JavaScript:", isLearning);

// 6. Template Literals (IMPORTANT)
console.log("\n=== Final Output ===");
console.log(`My name is ${name}, I am ${age} years old and I live in ${city}.`);


// Day 2 - Real World Examples (Conditions + Loops)

console.log("=== REAL WORLD LOGIC ===");

// 1. Login System (basic check)
let username = "lazik";
let password = "1234";

if (username === "lazik" && password === "1234") {
  console.log("Login Successful ✅");
} else {
  console.log("Invalid Credentials ❌");
}


// 2. E-commerce Discount System
let amount = 1200;

if (amount > 1000) {
  console.log("You got 20% discount 🎉");
} else if (amount > 500) {
  console.log("You got 10% discount");
} else {
  console.log("No discount");
}


// 3. Traffic Light System
let signal = "red";

if (signal === "red") {
  console.log("Stop 🚫");
} else if (signal === "yellow") {
  console.log("Get Ready ⚠️");
} else if (signal === "green") {
  console.log("Go 🚀");
}


// 4. Simple ATM Withdrawal Check
let balance = 5000;
let withdraw = 2000;

if (withdraw <= balance) {
  console.log("Withdrawal successful 💰");
  balance = balance - withdraw;
  console.log("Remaining balance:", balance);
} else {
  console.log("Insufficient balance ❌");
}


console.log("\n=== LOOP BASED REAL EXAMPLES ===");

// 5. Print cart items
let cart = ["Shirt", "Shoes", "Watch"];

for (let i = 0; i < cart.length; i++) {
  console.log("Item:", cart[i]);
}


// 6. Count total price (simple)
let prices = [100, 200, 300];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log("Total price:", total);


// 7. Find even numbers from list
let numbers = [1,2,3,4,5,6,7,8];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log("Even:", numbers[i]);
  }
}


// 8. Password attempts (loop simulation)
let attempts = 3;

while (attempts > 0) {
  console.log("Try login... Attempts left:", attempts);
  attempts--;
}

console.log("Account locked 🔒");


console.log("\n=== MINI APP LOGIC ===");

// 9. Simple username greeting
let user = "Lazik";

if (user) {
  console.log(`Welcome back, ${user} 👋`);
} else {
  console.log("Please login");
}


// 10. Age-based app access
let userAge = 16;

if (userAge >= 18) {
  console.log("Access granted to full features");
} else {
  console.log("Limited access (under 18)");
}

// Day 3 - Functions (Basics to Real Use)

console.log("=== BASIC FUNCTIONS ===");

// 1. Simple function
function sayHello() {
  console.log("Hello World 👋");
}
sayHello();


// 2. Function with parameter
function greet(name) {
  console.log(`Hello, ${name}`);
}
greet("Lazik");


// 3. Function with return
function add(a, b) {
  return a + b;
}

let sum = add(10, 5);
console.log("Sum:", sum);


// 4. Arrow function
const subtract = (a, b) => {
  return a - b;
};

console.log("Subtract:", subtract(10, 3));


console.log("\n=== REAL WORLD FUNCTIONS ===");

// 5. Calculator function
function calculator(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return "Invalid operator";
  }
}

console.log("Calc:", calculator(10, 5, "+"));


// 6. Even or Odd function
function isEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log("Check:", isEven(7));


// 7. Login check function
function login(user, pass) {
  if (user === "lazik" && pass === "1234") {
    return "Login Successful ✅";
  } else {
    return "Login Failed ❌";
  }
}

console.log(login("lazik", "1234"));


// 8. Discount function
function getDiscount(amount) {
  if (amount > 1000) {
    return "20% Discount";
  } else if (amount > 500) {
    return "10% Discount";
  } else {
    return "No Discount";
  }
}

console.log(getDiscount(1200));


console.log("\n=== LOOP + FUNCTION ===");

// 9. Print numbers using function
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5);


// 10. Sum of array
function sumArray(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

console.log("Array Sum:", sumArray([1,2,3,4,5]));



// Day 4 - Arrays & Methods

console.log("=== ARRAY BASICS ===");

// 1. Create an array
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log("First fruit:", fruits[0]);


// 2. Add & Remove elements
fruits.push("Orange");   // add at end
fruits.pop();            // remove from end

console.log("Updated fruits:", fruits);


// 3. Length
console.log("Total fruits:", fruits.length);


console.log("\n=== LOOP THROUGH ARRAY ===");

// 4. Loop through array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


console.log("\n=== ARRAY METHODS (IMPORTANT) ===");

// 5. map() → create new array
let numbers = [1, 2, 3, 4];

let doubled = numbers.map((num) => {
  return num * 2;
});

console.log("Doubled:", doubled);


// 6. filter() → filter values
let evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers);


// 7. forEach() → loop (no return)
numbers.forEach((num) => {
  console.log("Number:", num);
});


console.log("\n=== REAL WORLD EXAMPLES ===");

// 8. Cart total
let prices = [100, 200, 300];
let total = 0;

prices.forEach((price) => {
  total += price;
});

console.log("Total cart value:", total);


// 9. Find expensive items
let items = [100, 500, 1000, 200];

let expensive = items.filter((item) => {
  return item > 300;
});

console.log("Expensive items:", expensive);


// 10. Convert names to uppercase
let names = ["lazik", "ali", "john"];

let upperNames = names.map((name) => {
  return name.toUpperCase();
});

console.log("Uppercase names:", upperNames);


console.log("\n=== MINI CHALLENGES ===");

// 11. Sum of array
let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach((n) => {
  sum += n;
});

console.log("Sum:", sum);


// 12. Count even numbers
let count = 0;

arr.forEach((n) => {
  if (n % 2 === 0) count++;
});

console.log("Even count:", count);


// 13. Find max number
let max = arr[0];

arr.forEach((n) => {
  if (n > max) {
    max = n;
  }
});

console.log("Max number:", max);