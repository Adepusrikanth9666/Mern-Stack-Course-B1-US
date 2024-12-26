// "use strict";

// x = 3.14;
console.log("Day-13 class Object properties");
// Adding or changing an object property

// Adding a new property to an object
// Changing property values
// Changing property metadata
// Changing object getters and setters
// 1. Object.defineProperty(object, property, descriptor)
const user = {
  name: "jhon",
  age: 50,
};

Object.defineProperty(user, "address_new", { value: "U.S.A" }); //adding new property
Object.defineProperty(user, "age", { value: 60 }); //Changing propeerties values

console.log(user);

// Changing property metadata
// writable : true      // Property value can be changed
Object.defineProperty(user, "age", { writable: true });

user.age = 80;

console.log(user);
// enumerable : true    // Property can be enumerated

const o = {};

Object.defineProperty(o, "a", { value: 1, enumerable: true });
Object.defineProperty(o, "b", { value: 2, enumerable: false });
Object.defineProperty(o, "c", { value: 3, enumerable: true });
Object.defineProperty(o, "d", { value: 4, enumerable: false });
Object.defineProperty(o, "e", { value: 5, enumerable: true });
console.log(o);

for (const i in o) {
  console.log(i);
}

// configurable : true  // Property can be reconfigured

const z = {};
Object.defineProperty(z, "b", {
  writable: true,
  configurable: false,
  value: 30,
});
console.log(z);
Object.defineProperty(z, "b", {
  value: 1,
});

console.log(z.b);

z.b = 2;

console.log(z);
// user.address = "U.S.A";

// Getters & Setters in JS JavaScript Accessors (Getters and Setters)
// ES-5

const personGetters = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  },
};

console.log(personGetters);
console.log(personGetters.lang);

// Settters

const personSetter = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  },
};

personSetter.lang = "Telugu";
console.log(personSetter);

// difference  b/w the function and get

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

const personGetter_new = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(personGetter_new);
console.log(personGetter_new.fullName);

// Why Using Getters and Setters?
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes

// Adding or changing object properties
// 2.Object.defineProperties(object, descriptors)

// Accessing a Property
// 3.Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
// 4.Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
// 5.Object.getOwnPropertyNames(object)

// Accessing the prototype
// 6.Object.getPrototypeOf(object)
