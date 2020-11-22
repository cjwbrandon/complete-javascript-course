'use strict';

//Function Declarations vs. Expressions

// Calling a function before
ageBefore1 = calcAge1(1990); // works
ageBefore2 = calcAge2(1990); // fails

// Function Declaration example
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);


// Function Expression example
const calcAge2 = function (birthYear) {
  return 2037 - birthYear
}
// Idea: Stores the Function in a Variable
// Note: Functions is a value -> Can be stored in a variable
const age2 = calcAge2(1991);

console.log(age1, age2);

// Both ways are important as both are used depending on the Use Case
// Difference: We can call Function Declarations, in the code, before they are defined
// Process called Hoisting
// However, it is not a good idea


// Best practice?
// Depends on which you prefer
// Function Expression -> Nice structure -> All functions are declared first (usually at the top)
