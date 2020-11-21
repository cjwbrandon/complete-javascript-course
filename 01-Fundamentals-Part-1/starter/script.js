let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// Values
console.log(9);
console.log("Hello World");

// Variables name conventions --> camelCase
let firstName = "John";
console.log(firstName);
console.log(firstName); // can be reused

// Useful names
// Good
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
// Poor
let job1 = "Programmer";
let job2 = "Teacher";

// Commenting
// << for single line comments
/*
multi-line comment
multi-line comment
*/

// Data Types
true; // boolean
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun)

// Type of value using the typeof operator
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 50);
console.log(typeof "James");

// Dynamic typing
javascriptIsFun = "YES!"; // Assign new value to existing variable - remove let
// shows how data types are attached to values instead of variables in JS
console.log(typeof javascriptIsFun)

// Undefined
let year;
console.log(typeof year);

// typeof error
console.log(typeof null); // returns object instead