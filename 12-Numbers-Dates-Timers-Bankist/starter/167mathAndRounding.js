'use strict';

// Converting and Checking Numbers
// All Numbers are represented as Floating point numbers (i.e. as decimals)
console.log(23 === 23.0); // returns true

// Base 10 - 0 to 9
// Binary base 2 - 0 1
console.log(0.1 + 0.2); // not precise
console.log(0.1 + 0.2 === 0.3);

// Converting String to Number
console.log(Number('23'));
console.log(+'23'); // type coersion -> Looks cleaner

// Parsing -> .parseInt({value}, {regex})
// can even include some symbols -> JS will try to figure out the number in it
// Note: String must start with a number
// Regex -> base of the numeral system
console.log(Number.parseInt('30px'), 10); // returns 30
console.log(Number.parseInt('e23'), 10); // returns NaN

// .parseFloat
console.log(Number.parseInt('  2.5rem  ')); // returns 2 only
console.log(Number.parseFloat('  2.5rem  ')); // returns 2.5

// Old School -> global function
console.log(parseInt('30px')); // works too
// But modern JS encourages to call on the Number object
// Number provides a Namespace

// Checking if value is NaN
// Note: not a perfect way of whether it is a number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(1 / 0)); // false -> Infinity is not NaN

// Checking if it is a Number -> .isFinite({value}) instead
console.log(Number.isFinite(20)); // return true
console.log(Number.isFinite('20')); // returns false
console.log(Number.isFinite(+'20X')); // returns false
console.log(Number.isFinite(1 / 0)); // returns false -> Inifinity is not finite

// Checking integer
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // returns true
console.log(Number.isInteger(1 / 0)); // returns false
