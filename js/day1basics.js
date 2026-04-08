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