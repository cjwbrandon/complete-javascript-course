'use strict';

// Higher-order functions
// Functions Accepting Callback Functions
// Example: Simple string transformations
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // Functions are like objects with Properties
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('five');
};
// high5 is the Callback Function and .addEventListener is the higher-order function
document.body.addEventListener('click', high5);

// Functions called on an Array -> Callback functions
['Jonas', 'Martha', 'Adam'].forEach(high5);

// Why are they so helpful?
// 1. Easy to split up code to more readeable parts
// 2. Callback functions allows you to create abstraction
// Abstractions -> Hide the details of some code implementation that we don't need to care about at that particular abstract-level
// Example: in the transformer function, we only care about transforming the string but not how it is transformed. Thus, the logic behind how it is transformed can be abstracted away.
// The Callback functions tells the higher-order function exactly what to do
