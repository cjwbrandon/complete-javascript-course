'use strict';

// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(25 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2)); // Does type coercion
console.log(Math.max(5, 18, '23px', 11, 2)); // But does not do parsing

console.log(Math.min(5, 18, 23, 11, 2));

// Area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Generating random numbers
console.log(Math.random()); // 0 to 1
console.log(Math.trunc(Math.random() * 6) + 1); // 1 to 6 -> dice

// Random number function
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3)); // remove any decimals

// Round to nearest integer
console.log(Math.round(23.3));
console.log(Math.round(23.9));

// Round up
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

// Round down
console.log(Math.floor(23.3));
console.log(Math.floor('23.9')); // all the methods does type coercion

// Different between .floor and .trunc
// Same for positive numbers but behaves differently for negative
console.log(Math.trunc(-23.3)); // return -23
console.log(Math.floor(-23.3)); // returns -24

// Rounding decimals
// Note: ({value}).toFixed({decimalPlaces}) returns a String
// 2.7 is a primitive values -> JS does boxing -> converts to Number object to apply method
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
// Converts to number
console.log(+(2.345).toFixed(2));
