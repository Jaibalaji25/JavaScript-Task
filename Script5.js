// Student Registration Form

// Ask details using prompt()
let studentName = prompt("Enter your name:");
let department = prompt("Enter your department:");
let age = prompt("Enter your age:");

// Use const for a fixed welcome message
const welcomeMessage = `Welcome ${"jaibalaji"}
Department: ${"IT"}
Age: ${25}`;

// Print all details
console.log(welcomeMessage);

// Task 2 - ATM Withdrawal System

let userBalance = 10000; // fixed balance
let withdrawAmount = 500; // try changing this value

if (withdrawAmount >= 100 && withdrawAmount <= userBalance) {
  console.log("Transaction Successful ");
} else if (withdrawAmount < 100) {
  console.log("Minimum withdrawal is 100 ");
} else {
  console.log("Insufficient Balance ");
}

// Task 3 — Swiggy Discount Checker

function swiggyDiscount(orderAmount) {
  let message =
    orderAmount > 499
      ? "Free Delivery Available "
      : "Delivery Charges Applied ";
  console.log(message);
}

swiggyDiscount(600); //  Free Delivery Available
swiggyDiscount(300); //  Delivery Charges Applied

// Task 4: Instagram Login System

function instagramLogin(username, password) {
  if (username === "admin") {
    // Check username
    if (password === "1234") {
      // Nested check for password
      console.log("Login Success");
    } else {
      console.log("Wrong Password");
    }
  } else {
    console.log("Invalid Username");
  }
}

instagramLogin("admin", "1234"); //  Login Success
instagramLogin("admin", "0000"); //  Wrong Password
instagramLogin("user", "1234"); //  Invalid Username

// Task 5 — Traffic Signal System

let signal1 = "red";
let signal2 = "yellow";
let signal3 = "green";

switch (signal1) {
  case "red":
    console.log("STOP");
    break;
}

switch (signal2) {
  case "yellow":
    console.log("READY");
    break;
}

switch (signal3) {
  case "green":
    console.log("GO");
    break;
}
// Task 6 — Employee Salary Calculator

function salaryCalculation(salary, bonus) {
  return salary + bonus;
}

let totalSalary = salaryCalculation(25000, 5000);

console.log(totalSalary);

// Task 7 — E-Commerce Cart Total

let prices = [100, 200, 300, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}

let average = total / prices.length;

console.log("Total Price: " + total);
console.log("Average Price: " + average);

// Task 8 — WhatsApp Contact Book

let contact = {
  name: "Naveen",
  phone: 9876543210,
  status: "Online",
};

for (let key in contact) {
  console.log(key + " : " + contact[key]);
}

// Task 9 — Movie Ticket Booking

function payment() {
  console.log("Payment Successful");
}

function bookTicket(callback) {
  console.log("Ticket Booked");

  callback();
}

bookTicket(payment);

// Task 10 — Food Delivery Time Tracker
function* orderStatus() {
  yield "Order Confirmed";
  yield "Preparing Food";
  yield "Out for Delivery";
  yield "Delivered";
}

let order = orderStatus();

console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
