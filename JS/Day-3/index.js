// Dynamic Typing

let value = 34; //Number
// value = "This i have changed to the string"; //String
// value = {};

console.log(value);

console.log(typeof value, "Checking value type"); // -> object

// Type Checking

let Value_two = 45872448555n;

console.log(typeof Value_two);

// Type conversions

// to convert one data type to another data type
// - Automatic convertion
// String Concatenation with Numbers

console.log(typeof ("The result is" + 10)); // -> String

console.log(typeof (10 + "The result is")); // -> String

// Boolean Coversions

// True or False

// if (data.length > 0) {
//   // 0 -> false 1-> Ture
//   console.log("this is true condition");
// } else {
//   console.log("this is False condition");
// }

let data = { name: "Srikanth", amount: "2000", propertyValue: "5000" };

console.log(typeof data.amount); // number
console.log(typeof data.propertyValue); // number
console.log(typeof data.name); // string

// Explicit Type Conversion

// .toString()
// let amount_covert_to_String = data.amount.toString();
// console.log(typeof amount_covert_to_String, "amount_covert_to_String");
// // or;
// let amount_covert_to_String_2 = String(data.amount);
// console.log(typeof amount_covert_to_String_2, "amount_covert_to_String_2");

// Converting to Number

let convert_to_Number = Number(data.amount); // -> 2000
let convert_to_Number_prop = Number(data.propertyValue); // -> 5000

console.log(convert_to_Number + convert_to_Number_prop, "amount");

let new_number = "3.14215555";

// // console.log(typeof new_number, "new_number");
// console.log(Number(new_number), "new_number"); // 3.14
// console.log(parseFloat(new_number), "new_number"); // 3.14

// let converted_Value = parseInt(new_number);
// let converted_Value_float = parseFloat(new_number);
// console.log(converted_Value, "converted_Value_ParseInt");
// console.log(converted_Value_float, "converted_Value_float");
// console.log(typeof converted_Value, "new_number_float");

// console.log("5" - 1); // sri -> 5
//                         // sp -> 5

// +,-,x,%,/

// let operations_add = 5 + 10; // 15
// let operations_sub = 5 - 10; // -5
// let operations_mul = 5 * 10; // 50

// let operations_mod = 10 % 6; // 0 // -> % modulus operatoe Reminder
let operations_div = 10 / 5; // 2 // Division operatior divent

let operatior_Increment_pre = 10; //++ increment by one
let operator_decrement_pre = 10; //-- decrement by one
let operatior_Increment_post = 10; // ++
let operator_decrement_post = 10; // -- decrement by one

// pre & post;

// console.log(operations_add, "operations_add");
// console.log(operations_sub, "operations_sub");
// console.log(operations_mul, "operations_mul");
// console.log(operations_mod, "operations_mod");
// console.log(operations_div, "operations_div");
console.log(++operatior_Increment_pre, "operatior_Increment_pre");
console.log(--operator_decrement_pre, "operator_decrement_pre");
console.log(operatior_Increment_post++, "operatior_Increment_post");
console.log(operator_decrement_post--, "operator_decrement_post");

// console.log(operatior_Increment_post, "operatior_Increment_post_new");
// console.log(operator_decrement_post, "operator_decrement_post_new");

let value_1 = 26;
let value_2 = 45;
let value_3 = 62;
let value_4 = 54;

console.log(value_1++);
console.log(++value_2);
console.log(value_3--);
console.log(--value_4);

// spoorthi 26 , 46 ,62 , 53 -> correct
// sirisha 27
// 45
// 61
// 54

console.log(typeof 42); //
console.log(typeof "Hello"); //
console.log(typeof true); //
// console.log(typeof undefined); //
// console.log(typeof null); //
console.log(typeof {}); //
console.log(typeof []);

let string = "12345";
let number = "12345";

// = assign         the value to varivble
// ==  comparing  (boolean)
// === comparing (boolean)

console.log(string == number); // -> it only checks the value not data type -- true
console.log(string === number); //-> it checks both vcalue and data type --- True
