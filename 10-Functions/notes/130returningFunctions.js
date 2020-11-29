'use strict';

// Higer-order functions
// Funtions Returning Functions
const greet = function (greeting) {
  return function (name) {
    // the greeting Variable works because of a JS mechanism, closure
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Useful in functional programming

// Rewriting using Arrow function
// Slightly more confusing
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Jonas');
