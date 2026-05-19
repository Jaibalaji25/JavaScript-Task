// 4. String Concept Task - Username Checker

// Create one string:
let name = "   jaibalaji   ";

console.log(name.trim());

let name1 = "jaibalaji";
console.log(name1.toUpperCase());

let name2 = "JAIBALAJI";
console.log(name2.includes("BALAJI"));

// 3. Date Concept Task - Digital Clock

let currenttime = new Date();

console.log(currenttime.getHours());

console.log(currenttime.getMinutes());

console.log(currenttime.getSeconds());

console.log(currenttime.toLocaleTimeString());

let hours = currenttime.getHours();

let minutes = currenttime.getMinutes();

let seconds = currenttime.getSeconds();

console.log(hours + ":" + minutes + ":" + seconds);

// 5. Array Concept Task - Student Rank System

let marks = [450, 300, 700, 200, 900];

let sortedmarks = marks.sort(function (a, b) {
  return b - a;
});
console.log(sortedmarks);

console.log(marks.slice(0, 3));

// 1. API Task - User Names Uppercase

let api = "https://jsonplaceholder.typicode.com/users";
fetch(api)
  .then(function (usernames) {
    return usernames.json();
  })
  .then(function (data) {
    let upperUsers = data.map(function (user) {
      return user.username.toUpperCase();
    });

    console.log(upperUsers);
  });

// 2. API Task - Expensive Products

let api1 = "https://fakestoreapi.com/products";
fetch(api1)
  .then(function (store) {
    return store.json();
  })
  .then(function (products) {
    let result = products.filter(function (products) {
      return products.price > 100;
    });
    console.log(result);
  });
