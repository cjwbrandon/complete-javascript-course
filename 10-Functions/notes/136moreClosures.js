'use strict';

// 2 more situations where closure will happen
// Don't need to return a function to create a closure

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

// // Execute g
// g(); // g EC ended
// // Closes over the EC -> Still able to access Variable a
// // f was declared outside the function and it still closes over g
// f(); // returns a * 2

// Assigning f again
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
// Check Scopes
console.dir(f); // a is added

// Re-assigning f function -> Able to close over another function
// f function is able to close of h
h();
f();

// Check Scopes
console.dir(f); // have b while a is no longer available

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // Setting a timer -> setTimeout({functionToBeExecuted}, {timeInMilliSec})
  setTimeout(function () {
    console.log(`We are not boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  // Note: This function will not wait for the timeout to finish before executing -> Executed immediately
  console.log(`Will start boarding in ${wait} seconds`);
};

setTimeout(function () {
  console.log('TIMEOUT');
}, 1000);

// Shows that Closure has priority over parent scopes
const perGroup = 1000; // Uses the perGroup Variable in boardPassengers

// Note: setTimeout Callback function is executed completely independently of the function boardPassengers
// The fact that it is still able to access the Variables of boardPassengers shows that closure happens
boardPassengers(180, 3);
