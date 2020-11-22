'use strict';

// Functions -> fundamental building block
// A piece of code that can be reused over and over again
// A variable holds a value
// A function can hold 1 or more complete lines of code

// function {functionName}() {{functionBody}}
function logger() {
  console.log('My name is Jonas');
}

// Invoking, Running, Calling the function
logger();
logger(); // able to reuse the function multiple times
logger(23); // specify an Argument in a Function without Parameters have no effect

// We can pass data into a function and it can return data back as well
// Input & Output
// function {functionName}({params}) {{functionBody}}
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// Actual values of the parameters are called Arguments
const appleJuice = fruitProcessor(5, 0); // Store the output as a Variable
console.log(appleJuice);

const orangeJuice = fruitProcessor(2, 4); // Can be reused with different arguments
console.log(orangeJuice);
// Note: console.log() is a built-in function
// Similar with Number({value}), Boolean({value})


// Functions allow us to create more maintainable code
// Create reusable code -> Cleaner code
// DRY -> Don't Repeat Yourself