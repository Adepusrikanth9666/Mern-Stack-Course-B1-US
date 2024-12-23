console.log("Day-11 Js class");

// const userInfo = {
//   name: "smith",
//   age: "30",
//   city: "Hyderabad",
// };

// userInfo.address = "Madhapur";

// console.log(userInfo);

// constructorss
let value = 100;
function Person(firstName, lastName, age, city) {
  this.fName = firstName;
  this.lName = lastName;
  this.age = age;
  this.city = city;
  let value = 20;
}

let getFullName = (fName, lname) => {
  // let value = 40;
  console.log(value);
  return fName + lname;
};

Person.prototype.address = "Hi-Tech City";
Person.prototype.getFullName = getFullName;

const emp_1 = new Person("Jhon", "Doe", 30, "Up");
console.log(emp_1.address);
console.log(emp_1.getFullName("sri", "Adepu"));
function Person(name) {
  this.name = name;
}
console.log(Person.prototype);

const obj = {};
console.log(obj.prototype);
