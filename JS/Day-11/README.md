1. What are Prototypes?
   In JavaScript, every object has an internal link to another object called its prototype. The prototype is a mechanism that allows objects to inherit properties and methods from other objects.

Prototypes enable prototype-based inheritance, where objects can share behaviors without explicitly copying them.
When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it’s not found, it looks at the object's prototype, and so on up the prototype chain. 2. The **proto** Property vs. prototype

**proto**:

This is a property of every JavaScript object (except Object.prototype) that points to the object's prototype.
It’s used to access or set the prototype of an individual object.
Example:
javascript
Copy code
const obj = {};
console.log(obj.**proto**); // Points to Object.prototype

prototype:

This is a property of constructor functions (like Function.prototype or Array.prototype) and is used to define methods and properties that will be shared by all instances of objects created by that constructor.
Example:
javascript
Copy code
function Person(name) {
this.name = name;
}
console.log(Person.prototype); // Prototype object of Person constructor
Key Difference:

**proto** is an actual object reference on instances, while prototype is a property on constructor functions.

3. How Prototype Chaining Works
   Prototype chaining is the process by which JavaScript searches for a property or method. If it doesn’t find it on the object itself, it moves up the prototype chain.

The chain ends when it reaches null (the prototype of Object.prototype), which has no further prototype.
Example:
javascript
Copy code
const obj = { a: 10 };
const parent = { b: 20 };
obj.**proto** = parent; // Set parent as the prototype of obj

console.log(obj.a); // 10 (found directly on obj)
console.log(obj.b); // 20 (found on obj's prototype)
console.log(obj.c); // undefined (not found anywhere in the chain)
Why it’s important: Prototype chaining allows for efficient reuse of methods and properties without duplicating them across multiple objects.
