let a = "234";

// data={name:"",number:""}
let conver_to_number = Number(a);

console.log(Number(a), "spoorthi");
console.log(parseInt(a), "srikanth");
console.log(conver_to_number, "sririsha");

console.log("251" + 152);
// console.log()

let firstName = "Srikanth";
let lastName = "Adepu";

let fullName = firstName + lastName;

let number = 6;
// if the number is divided by two and the reminder is zero,
// then its considered as even Number
// % -> modulus , / -> division

console.log(fullName);
console.log(number % 2 === 0);

// if the user is not loggedin i have to show or redirect to other page

// if the user is looged === or ==

// NOt equal -> !=

let age = 18;
// 18 is not equal to "18",datatype
if (age > 18) {
  console.log("Im Adult now");
} else {
  console.log("Im Child");
}

// ?  ternary ? (true condition) & : (flase condtion)

let personData =
  age > 18 ? console.log("Im Adult now") : console.log("Im Child");

// console.log(personData, "personData");

// 2^3 4^2 Exponetional operator
// **

console.log(5 ** 2 + 5 ** 2);
// --------------------------------------------------------------------------------

// var let const

// var {variable name} = {asssign the value}
// before ES6 - 2015 all the developers are used var

var day = "thursday";
// console.log(day, "day"); // global

var day = "friday";
console.log(day, "day"); // global

var day = "this is my first job";

var user = { name: "shdjk", id: "45", address: "akdhsklakl" };

var user = "srikanth";
console.log(day);

// let {variable name} = {asssign the value}  // scope mutable redeclear

let day_3 = "aslkjdj";
let user_1 = "jfkjsfj";

user_1 = "skdjkajskdj";

// const {variable name} = {asssign the value} // scope

const day_2 = "Sunday"; //decleartion and inittalization should done at a time Immutuable
day_2 = "skjdjksahh";
console.log(day_2, "day_2");

const PI = 3.14;
