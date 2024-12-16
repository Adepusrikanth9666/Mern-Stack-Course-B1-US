console.log("Today we are learning GEC");

// function can be diclear in different types

// Type 1:
// function funName (){

// }\

// funName()
// Type 1:
var global = 10;
function funName() {
  var fun = "Function";
  var gretting = "Hey!!! ur using normal function";
  console.log(gretting);
  if (true) {
    var demo = "this is demo of hoisting block scope";
    console.log(demo);
  }
  console.log(demo, "this is oustside of block scope");
}
console.log(global);
// console.log(fun);

funName();

// Type :2
// greting();

// const greting = function () {
//   console.log("Hi!!! im inviting you to my JS class");
// };

// // Type:3 Arrow Functions *****

// const arrowFun = () => {
//   console.log("Hey !!! ur using arrow functions");
//   //   alert("Helllo weclcome to my website");
// };

// // () => {
// //   console.log("heloo without name");
// // };
// arrowFun();

// // iif

// (() => {
//   alert("Helllo weclcome to my website");
// })();

let age = 18;
switch (typeof age === "number") {
  case age > 18:
    console.log("im Adult");
    break;
  case age < 18:
    console.log("im child");
    break;
  case age === 18:
    console.log("im in teen age");
    break;

  default:
    console.log("Im human beign");
    break;
}
