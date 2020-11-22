// Type Conversion and Coercion
// Conversion --> Manually convert from 1 type to another 
// Coercion --> JS automatically convert behind the scenes

const inputYear = `1991`;
console.log(inputYear + 18); // treats as string rather than number

// Type Conversion
// Converting to Number
console.log(Number(inputYear) + 18);
// Note: Orignal Value in Variable type is not converted
console.log(Number(`Jonas`)); // Returns NaN
console.log(typeof NaN); // Still a number type but an invalid one

// Converting to String
console.log(String(23));

// Note: JS can only convert 3 types, String, Number & Boolean
// We cannot convert to undefined or null types


// Type Coercion
// JS converts 1 value to match the other to allow the operation behind the scenes
console.log("I am " + 23 + " years old"); // Consists of Number and String types
// Due to type Coercion, the operations succeeds
// Equivalent to
console.log("I am " + String(23) + " years old");

// Coercion happens for other data types too
// Strings converted to Numbers
console.log("23" - "10" - 3); // minus operators triggers the reverse Coercion
console.log("23" - "10" + 3); // Converts Numbers to Strings instead
console.log("23" / "2"); // String to Number
console.log("23" > "18"); // String to Number
// Note: Only for the '+' operator, it converts numbers to strings

// Exercises
let n = '1' + 1; // '11'
n = n - 1; // 11 - 1 = 10
console.log(n)
// result: 10

console.log(2 + 3 + 4 - '5'); // 2+3+4 gets evaluated first = 9, 9 + '5'
// result: '95'

console.log('10' - '4' - '3' - 2 + '5'); // 10 - 4 - 3 - 2 = 1, 1 + '5' = '15'
// result: '15'