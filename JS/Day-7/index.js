//    Logical Operators: &&, ||, !.
//        if else elseif ,switch case for loop,while
//       loop do while loop
//       for...in (for objects), for...of (for arrays). Break,
//       Continue, and Return: Controlling loop flow.

// arrray metohds
// objects methods

// && -> ANd , || -> or

// let a = 30;
// let b = 50;
// let c = 10;
// let d = 20;

// if (typeof valu_1 == "number" && typeof value_2 == "number") {
//   console.log("condition satisfies");
// } else {
//   console.log("condition failed");
// }

// if (typeof valu_1 == "number" || typeof value_2 == "number") {
//   console.log("condition satisfies");
// } else {
//   console.log("condition failed");
// }

// if (condition) {
//   // true block
// } else {
//   // false block
// }

// if (value_1 < value_2) console.log("value_2 greater ");
let a = 30;
let b = 40;
let c = 50;
let d = 60;

if (a > b) {
  // logic -1
  console.log("a is greater b");
} else if (b > c) {
  //logic -2
  console.log("b is greater than c");
} else if (c > d) {
  console.log("c is greater d");
} else {
  console.log("now im in else block");
}

let userDataClickedOnCal = 1;

switch (userDataClickedOnCal) {
  case "0":
    console.log("user Clicked", userDataClickedOnCal);
    break;
  case "1":
    console.log("user Clicked", userDataClickedOnCal);
    break;
  case "2":
    console.log("user Clicked", userDataClickedOnCal);
    break;
  case "3":
    console.log("user Clicked", userDataClickedOnCal);
    break;
  case "4":
    console.log("user Clicked", userDataClickedOnCal);
    break;
  default:
    text = "No value found";
    console.log(text);
}

// while (true) {
//   console.log("hey!!! im going onnn,....");
// }

// do {
// console.log(first)
// } while (condition){

// };

let array = [1, 2, 3, 4];

for (let index = 0; index < array.length; index++) {
  console.log(array[index] * 5);
}

// console.log(arrray[0]);
// console.log(arrray[2]);
// console.log(arrray[3]);
// console.log(arrray[4]);
// console.log(arrray[5]);
// console.log(arrray[6]);
