// 1. Student Attendance System
// presentStudents
let presentStudents = ["Balaji", "Bharani", "Sriram"];

// absentStudents
let absentStudents = ["Vignesh", "Shiva"];

// Merge both arrays using spread operator
let allStudents = [...presentStudents, ...absentStudents];

// Add one new student at last
allStudents.push("Soundar");

// Print final array
console.log(allStudents);

// 2. E-Commerce Cart
// Create object for mobile details
let mobiledetails = {
  brand: "Apple",
  model: "iphone 11",
  price: 45000,
};
// Create another object for charger details
let chargerdetails = {
  brand: "Apple",
  type: "20w fast charger",
  warranty: "1 year",
};
// Merge both objects using spread operator
let productdetails = { ...mobiledetails, ...chargerdetails };
// Add deliveryDate property
productdetails.deliverydate = "20 May 2026";
// Print final object
console.log(productdetails);

// 3. Food Delivery App
// Create function named orderFood()
function orderfood(...fooditems) {
  // Accept multiple food items using rest operator
  console.log("Total items ordered: " + fooditems.length);
  console.log("first item: " + fooditems[0]);
  console.log("last item: " + fooditems[fooditems.length - 1]);
}
// Print:
orderfood("Biriyani", "chicken 65", "Goli soda", "Half-Grilled chicken");

// 4. Employee Salary Filter
// Create array of employee objects
let employees = [
  { name: "Kaali", salary: 30000 },
  { name: "Surya", salary: 50000 },
  { name: "Maanick", salary: 55000 },
  { name: "Deva", salary: 60000 },
];
// Filter employees whose salary is above 50000
let filteredemployees = employees.filter(function (employee) {
  return employee.salary > 50000;
});
// Print filtered employees
console.log(filteredemployees);

// 5. Online Game Score Board
// Create array of scores
let scores = [30, 20, 15, 40];
// Use reduce()
// Find total score of all players
let totalscore = scores.reduce(function (sum, score) {
  return sum + score;
});

// Print final total
console.log("total score of all players: " + totalscore);
