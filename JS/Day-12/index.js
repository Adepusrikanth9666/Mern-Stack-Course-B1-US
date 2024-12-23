// // Copies properties from a source object to a target object
// 1. Object.assign(target, source);

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const person2 = { fName: "Anne", lName: "Smith" };
console.log(person1);

Object.assign(person1, person2);

console.log(person1);

// // Creates an object from an existing object
// 2. Object.create(object);

const employee = {
  emp_id: 3510,
  name: "smith",
};

const man = Object.create(employee);
man.emp_id = 3333;
man.name = "Adep";

console.log(man);

// //**** */ Returns an array of the key/value pairs of an object
// 3.Object.entries(object);

console.log(Object.entries(employee));

// // Creates an object from a list of keys/values
// 4. Object.fromEntries();

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "</br>";
}

console.log(text);
// // Returns an array of the keys of an object
// 5. Object.keys(object);

console.log(Object.keys(employee));

// // Returns an array of the property values of an object
// 6. Object.values(object);
console.log(Object.values(employee));
// // Groups object elements according to a function

// 7.Object.groupBy(object, callback);

const fruit_new_arr = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

function myCallBack({ quantity }) {
  return quantity > 200 ? "Products......" : "Sold out.............";
}

// console.log(myCallBack(fruit_new_arr.quantity));
console.log(Object.groupBy(fruit_new_arr, myCallBack(fruit_new_ar)));

// callbacks
function add(a, b) {
  return a + b;
}

function multiply(x, abcd) {
  let result = x + abcd();
  return result;
}

console.log(multiply(10, add), "multiplly");

// console.log(add(2, 3));
