// Iteration array methods
// ------------------------------------------------------------------
// 16. Array forEach
let array = [1, 2, 3, 4, 5, 6, 7, 8];

// array.forEach(myForEach);

// function myForEach(value, index, array) {
//   console.log(value, index, array);
//   console.log(value * 2);

array.forEach((value, index, array) => console.log(value * 2));

// }

//*****17. Array map()

// let newTwoMulArray = array.map((value, index) => value * 2);
// console.log(newTwoMulArray);

let newArrayFun = array.map(funArray);

function funArray(value, index) {
  return value * 4;
}
console.log(newArrayFun);

//18. Array flatMap() 2019
// let array = [1, 2, 4, 5, 6, 7, 8];
let flatMapValue = array.flatMap((value) => [value, value * 10]);
// [[1,5],[2,10],[4,20]]
// [1,5,2,10,4,20]
console.log(flatMapValue);

// ***** 19.Array filter()

// let array = [1, 2, 4, 5, 6, 7, 8];
// {value :yes}
let data = { user: "sri", age: 10 };

data.age;

let usersData = [
  { name: "sri", age: 10, types: "Mobile" },
  { name: "sri_1", age: 60, types: "Home Appliances" },
  { name: "sri_2", age: 50, types: "Laptops" },
  { name: "sri_3", age: 30, types: "Laptops" },
  { name: "sri_4", age: 20, types: "Mobile" },
  { name: "sri_5", age: 55, types: "Laptops" },
  { name: "sri_6", age: 53, types: "Home Appliances" },
  { name: "sri_7", age: 32, types: "Mobile" },
  { name: "sri_8", age: 21, types: "Mobile" },
  { name: "sri_9", age: 16, types: "Home Appliances" },
  { name: "sri_10", age: 18, types: "Home Appliances" },
  { name: "sri_11", age: 19, types: "Laptops" },
];
console.log(usersData);
let filterArray = usersData.filter(
  (value, index, array) => value.types === "Laptops"
);
console.log(filterArray);

// 20.*****Array reduce()
// let array = [1, 2,3 4, 5, 6, 7, 8];
// 1+2+3+4+5+6+7+8=36
// let total = 0;

// array.forEach((value) => {
//   total = total + value;
// });

// console.log(total, "total");

// // let array = [1, 2,3 4, 5, 6, 7, 8];
// // array.at(0)
// // array.at(1)
// // array.at(2)

// let total_1 = 0;
// for (let i = 0; i < array.length; i++) {
//   total_1 = total_1 + array.at(i);
// }

// console.log(total_1, "total_1");
let total_2 = 0;
let sum = array.reduce((total_2, value) => (total_2 = total_2 + value));
console.log(sum, "sum");

// 21. Array reduceRight()
//  ->
// Array every()

let allOver18 = array.every((value) => value > 3);
console.log(allOver18, "allOver18");
//**** */ Array some()
let allOver = array.some((value) => value > 5);
console.log(allOver, "allOver");

//22.****/ Array from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.

let message = "hello";

console.log(Array.from(message));

// 23. Array keys()

// console.log(array.map((value, index) => value[index]));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let i = 0; i < fruits.length; i++) {
  console.log(i);
}

// console.log(keys);
// 24 .Array entries()
const entites = fruits.entries();
for (let i of entites) {
  console.log(i);
}

//26 Array with()

let origianlArray = ["Spoorthi", "Swathi", "siresha"];
// origianlArray[1] = "smith";
// console.log(origianlArray);
// console.log(origianlArray);
let newArray = origianlArray.with(1, "sneha");
console.log(newArray, "newArray");
console.log(origianlArray, "origianlArray");

// console.log(fruits.with(2, "Apple"));

//27 ******Array Spread (...)

let arr_1 = [1, 2, 3, 5, 5, 6];
let arr_2 = [1, 2, 3, 5, 5, 6];
let arr_3 = [1, 2, 3, 5, 5, 6];
let arr_4 = [1, 2, 3, 5, 5, 6];

// let output = [arr_1, arr_2, arr_3, arr_4];
// console.log(output.flat());

let output = [...arr_1, ...arr_2, ...arr_3, ...arr_4];

console.log(output);
