console.log("Heelo day-8 js class");

// Arrays:-
let array = [7, "Srikanth", { name: "a2depu", day: "tuesday" }];
// let object = { firstName: "Sri", lastName: "Adepu" };

console.log(array[2]);

// 1. Array length
let newArray = [2, 10, 4, 5, 7, 8, 96, 100];

console.log(newArray.length);

//2. Array toString()
console.log(newArray);
let array_to_string = newArray.toString();
// "2,10,4,5"
console.log(array_to_string);

//3. Array at()
console.log(newArray.at(4));
// or
console.log(newArray[4]);

//4 .Array join()

let newArray_1 = ["hyd", "chennai", "bangalore", "AP", "TS", "MP", "UP"];
console.log(newArray_1.join("__"));

//5. Array pop() // it removes from the last index of array

console.log(newArray);
console.log(newArray.pop());
console.log(newArray);

// 6.Array push() // it adds at last index of array
console.log(newArray_1);
newArray_1.push("mumbai");
console.log(newArray_1);

//7. Array shift() // it removes the element from the begining from the array
console.log(newArray_1.shift());
console.log(newArray_1);

// 8. Array unshift() // it adds the element in the beginig of array

console.log(newArray_1.unshift("Delhi"));
console.log(newArray_1);

//9. Array delete()

delete newArray_1[2];
console.log(newArray_1);

newArray_1[2] = "pune";
console.log(newArray_1[2]);

// 10.Array concat()
let newArray_2 = [7, "Sri", 845, "9788"];

// console.log(newArray.concat(newArray_1, newArray_2));

//11. Array copyWithin()
console.log(newArray_1);
console.log(newArray_1.copyWithin(3, 1, 2));
console.log(newArray_1);

// 12. Array flat()
// console.log(newArray, newArray_1, newArray_2);

let latestArray = [newArray, newArray_1, newArray_2];
console.log(latestArray);
// [[newArray],[newArray_1],[newArray_2]]

// [newArray,newArray_1,newArray_2]

console.log(latestArray.flat());

// 13. Array splice()
// The splice() method can be used to add new items to an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1, "Lemon", "Kiwi");
console.log(fruits);
//14. Array toSpliced()
const daysArray = ["Mon", "Tue", "wed", "thrs", "fri"];
console.log(daysArray);
let modifiedArray_days = daysArray.toSpliced(3, 2);

console.log(daysArray);
console.log(modifiedArray_days);

// 15.Array slice()
const fruits_1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits_1.slice(2);
console.log(fruits_1);
console.log(citrus);
console.log(fruits_1);

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(months);
console.log(spliced);
const slice = months.slice(0, 1);
console.log(months);
console.log(slice);
