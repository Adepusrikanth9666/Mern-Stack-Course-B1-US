// console.log("Hello World"); //var let & const

let b = 20;
// console.log(b);

// console.log(c); // error
var a = 10;
// var x = 300;

let d = 30;
const c = 400;

// document.getElementById

// Hoisting ****
// TEmporial dead zone ***
//  Debuging
// Different types of errors
// 1)ReferenceError , 2)Syntax error 3) Type error
// -> not define
// ->Cannot access 'b' before initialization

// We are learing alll syntaxs ----!!!!

// variables declearation

// var {variable_name} = {value}
// let {variable_name} = {value}
// const {variable_name} = {value}

// Objects:----!!!!!

//  var ,let & const

// let object = {key:value}
let userInfo = { name: "Javascript", time: Date.now(), day: "Friday" };
console.log(userInfo);
console.log(userInfo.day);

// Array
let variable_Name = [
  2,
  "Srikanth",
  { name: "Javascript", time: Date.now(), day: "Friday" },
];

console.log(variable_Name);

console.log(variable_Name[2]);

// Function (heart of JS)

// function funname(paramentrs1,prameters2) {
//   // bussiness logic
// }

// funname(arguments1,arguments1);

function sayHello(courseName, days, time) {
  console.log(`Hey Guys!! Welcome to ${courseName} Course of ${days} ${time}`);
}

// sayHello("html", "45 DAYS");
// sayHello("CSS", "30 days");
// sayHello("JS", "30 days");
// sayHello("REact.js", "30 days");
// sayHello("NOde.js", "30 days");
// sayHello("MERN", "30 days");

// HTML
// CSS
// JS

function updateDom(TodayDate, variable_Name, userInfo) {
  let domValue = window.document.getElementsByClassName("heading_title");
  domValue[0].innerHTML = `Day-5 Javascript class learning ${TodayDate} ${userInfo} ${variable_Name}`;
  console.log(domValue, "domValue");
}

const today = new Date(Date.now());

updateDom(today, variable_Name, userInfo);
console.log(today.toDateString(), "Today Date");
