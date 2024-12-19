console.log("Hello we are Learing Objects & Objects Methods in Today Class");

// {key:value}
// Using an Object Literal {}
// Using the new Keyword new object
// Using an Object Constructor

// -----------------------------------------------------------------
// Methods
// Using Object.assign()
// Using Object.create()
// Using Object.fromEntries()

// 1.Using an Object Literal or object initializer
const userInfo = {
  name: "smith",
  age: "30",
  city: "Hyderabad",
};

const movieData = {};

movieData.movieName = "Pusha-2";

console.log(movieData, "movieData");
userInfo.address = "Nacharam";
userInfo.pincode = 500076;

console.log(userInfo, "userInfo");

// 2.Using the new Keyword

const person = new Object();

person.firstName = "Sri";
person.lastName = "smith";

console.log(person, "Person");

//3. Using an Object Constructor

// For Employee common is FirstName,lastName and age

// Use the name  with Uppercase (firtLetter)\

function Person(firstName, lastName, age, city) {
  // to access the values u have to use this keyword
  // firstName
  // lastName
  // age

  this.fName = firstName;
  this.lName = lastName;
  this.age = age;
  this.city = city;

  //   console.log(firstName, lastName, age, "Constructor");
}

const emp_1 = new Person("Jhon", "Doe", 30, "Up");
console.log(emp_1);

const emp_2 = new Person("Johnny", "Rally", 33, "Hyd");
const emp_3 = new Person("Johnny", "Rally", 33, "Dheli");
const emp_4 = new Person("Johnny", "Rally", 33, "pune");
const emp_5 = new Person("Johnny", "Rally", 33);
const emp_6 = new Person("Johnny", "Rally", 33);

console.log(emp_2);

let personName = emp_1.fName;
console.log(personName, "personName");

let fullName = emp_1.fName + emp_1.lName;

console.log(fullName, "fullName");

let emp1_age = emp_1.age;

let emp_6_info = emp_6.fName + emp_6.lName + emp_6.age;
console.log(emp_6_info, "emp_6_info");

// car constructor
// name of the car
// year of mgf
// color
// brand

// Dalibani Sirisha
// 08:16

function Carconstructor(carName, yearOfMfg, color, brand) {
  this.carName = "Farari";
  this.yearOfMfg = "1980";
  this.color = "blue";
  this.brand = "abcd";
}
const carconstructor = new Carconstructor("Farari", "1980", "blue", "abcd");

console.log(carconstructor, "carconstructor");
// Arlapudi Swathi
// 08:17

function NewCar(carName, mgf, color, brand) {
  this.carName = carName;
  this.mgf = mgf;
  this.color = color;
  this.brand = brand;
}

const favCar = new NewCar("2series", 2023, "red", "BMW");

console.log(favCar);

// Arlapudi Swathi
// 08:27
console.log(favCar.carName, "favCar.carName");
// Dalibani Sirisha
// 08:27
let carConstructor = carconstructor.carName;

console.log(carConstructor, "carConstructor");

// Arlapudi Swathi
// 08:40

function NewMobile(mobileName, yearofmgf, color) {
  this.mobileName = mobileName;
  this.yearofmgf = yearofmgf;
  this.color = color;
}

const favMobile = new NewMobile("realme", 2021, "blue");
console.log(favMobile);

// Dalibani Sirisha
// 08:40
function Mobileconstructor(carName, yearOfMfg, color, brand) {
  this.mobileName = carName;
  this.yearOfMfg = yearOfMfg;
  this.color = color;
  this.brand = brand;
  this.Insurance = "ICIC";
}
const mobilesInfo = new Mobileconstructor("Farari", "1980", "blue", "abcd");
const mobilesInfo_2 = new Mobileconstructor("Farari_1", "1930", "red", "123");
console.log(mobilesInfo);
console.log(mobilesInfo_2);
