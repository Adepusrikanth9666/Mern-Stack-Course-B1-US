// console.log("Hello World");
// // Number :-
// //  1 , floting pont (demical numbers) 1.2,53.2,524.2

// let a = 10;
// let b = 30;
// let c = 3.14;
// // console.log(0/0) -> NAN (Not a NUmber)

// // console.log(1/0) -> Infinity

// // Strings :-
// // 	"Hello today im learning Javascript" -> "{}" or 'Hello today im learning Javascript'
// // 	or
// // 	`Hello today im learning Javascript` -(``) (template literals) -ES6 (2015)
// // 	`Hello today i have worked for ${a} hours`

// console.log("Hello today im learning Javascript");
// console.log("Hello today im learning Javascript");
// console.log(`Hello today i have worked for ${a} hours`);

// console.log(
//   "Hello today i have worked for" +
//     " " +
//     a +
//     " " +
//     "hours" +
//     " " +
//     b +
//     " " +
//     "added b value aslo"
// );

// Booleans ->
// Ture or false
let myAge = 10;
// 20 > 18 -> True
// 10 <18 -> false
if (myAge > 18) {
  console.log("Your Adult");
} else {
  console.log("your Child");
}

// undefined -> Undefined

let day = "Tuesday";
let month;

console.log("Day", day);
console.log("Month", month);

// null

let Year = null;

let user = null;

// session time has comppleted i have to remove the user data

user = null;

// Symbol

let id1 = Symbol("id");
let id2 = Symbol("id");

// BigInt

// 2 ^ 53;

let bigInteger = 90071992547409925455555n + 556n;
console.log(bigInteger);

// Primitive data types (uses Call by Value)

// > numbers
// strings -> 3
// booleans

// undefined
// null

// symbol
// bigInt

// Non Primitive Data:

let obj = { name: "srikanth", age: 20 };

// Objects ->{} (uses Call by Reference)
//  -> Array [],functions fun(){} ,classes class name{}
