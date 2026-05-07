// 🟢 Section 1: Variables (1–8)
// 1. output
var a = 10;
a = 15;
console.log(a); // output : 15 (Re-Initialiazation)

//  2.	What happens here?
// let b = 20;
// let b = 30;
// console.log(b); // syntaxerror : identify 'b' has alredy decrared

//correct format
let b = 20;
b = 30;
console.log(b); //output : 30

const c = 50;
console.log(c); //output : 50

// const x = 10;
// x = 20;
// (constant has not accept Reuse , Re-Initialiazation and Re declaration also)

const x = 10;
console.log(x);

var p = 5;
var p = 10;
console.log(p); // Redeclaration  output : 10

let q = 25;
q = q + 10;
console.log(q); //output : 35

const r = 7;
console.log(r + 3); //output : 10

// 8.	Fill correct keyword:

//  ____ a = 10;
// var a = 10;
// let a = 10;
// const a = 10;       (let) is used variable keyword

// 🟢 Section 2: Console Methods (9–12)

// 9.	Which method prints normal output?
console.log();

// 10.	Which method shows warning?
console.warn();

// 11.	Which method shows error?
console.error();

// 12.	What does this do?
// console.clear();           clear a console page to use this method

// 🟢 Section 3: Data Types (13–18)

let a1 = "hello";
console.log(typeof a1); // string

let b1 = 100;
console.log(typeof b1); // Number

let c1 = false;
console.log(typeof c1); // Boolean

let d1;
console.log(d1); // Undefined

// 17.	What is type of null?
// ans : null means Define Value but the value it will  TRUE (1) and FALSE(0)
let e1 = prompt();
console.log(e1);

// 18.	Convert string to number:  "25"
let f = 25;
console.log(typeof f);

// 🟢 Section 4: Arrays (19–24)

// 19.	Create array of 3 fruits.
let fruits = ["apple", "mango", "strawberry"];

let arr = ["a", "b", "c"];
console.log(arr[1]); // output : "b"

let brr = ["x", "y", "z"];
console.log(brr[arr.length - 1]); // output : "z"

// 22.	How to get first element?
let crr = ["aa", "bb", "cc", "dd"];
console.log(crr[0]);

let drr = ["apple", "banana"];
console.log(drr.length); // length is "2"

// 24.	Add new element to array.
let Fruits = ["apple", "banana", "mango", "grapes", "orange"];
console.log(Fruits);

// 🟢 Section 5: Objects (25–28)

//25.	Create object with name & age.

let personal = {
  name: "jaibalaji",
  age: 25,
};
console.log(personal); // o/p : {name : jaibalaji  , age : 25}

// 26. main memory inside sub memory inside the value
let obj = {
  name1: "Naveen",
};
console.log(obj.name1); //o/p : Naveen

// 27.
let Obj = {
  fruit: ["apple", "banana"],
};
console.log(Obj.fruit[1]);
console.log(Obj.fruit[0]);

// 28.	How to access last element inside object array?

let mobiles = {
  iphone: ["iphone11", "iphone12", "iphone13"],
};
console.log(mobiles.iphone[2]);

// 🟢 Section 6: Arithmetic Operators (29–32)

console.log(5 + 3); //  ans : "8"  (addition)

console.log(10 % 3); // " 1 "  (modulus)

console.log(2 ** 3); // "8"  (exponencial)

console.log(10 / 2); // "5"  (division)

// 🟢 Section 7: Increment / Decrement (33–36)

let a2 = 5;
a2++;
console.log(a2); // o/p : 6

let b2 = 5;
let c2 = b2++;
console.log(b2, c2); // o/p : (6,5)

let X = 5;
let Y = ++X;
console.log(X, Y); // o/p : (6,6)

let m = 3;
let n = m--;
console.log(m, n); // o/p : (2,3)

// 🟢 Section 8: Comparison & Logical (37–39)

// loosy type ecual
console.log(5 == "5"); // o/p : TRUE

// strictly type equal
console.log(5 === "5"); // o/p : FALSE

//  And / Or operator
console.log((true && false) || true); // o/p : TRUE

// 🟢 Section 9: Ternary (40)

5 > 3 ? console.log("Yes") : console.log("No"); // o/p : yes
//  True ( 1st statement will Work )
