'use strict';

// Arrow Function
// Special form of function Expressions that is shorter and faster to write

// Example
const calcAge3 = birthYear => 2037 - birthYear;
// Still is a Function Expression -> assigning a Function to a Variable
// No curly braces
// Return happen implicitly
// Useful for 1 liner functions or 1 parameter
const age3 = calcAge3(1991);
console.log(age3);

// More than 1 line of code
const yearsUntilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement; // Need to explicitly write return for more than 1 line
}
console.log(yearsUntilRetirement(1991));

// More than 1 line of code & multiple Parameters
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1991, 'Bob'));

// Fundamental difference between Arrow Functions and other functions
// Arrow Function do not get a so-called 'this' keyword
// For now, use normal functions other than one-liner arrow functions