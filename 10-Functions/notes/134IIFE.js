'use strict';

// Immediately Invoked Function Expressions (IIFE)
// A function that is only executed once and disappears after
// Needed for async await

// Can be ran multiple times
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
//...
runOnce();

// Solution - IIFE
// Wrap with () and add () at the end to call it immediately
(function () {
  console.log('This will never run again');
})();

// Arrow function
(() => console.log('This will ALSO never run again'))();

// Functions creates scopes
// Scope Chain -> Outer scopes do not have access to Inner scopes
// All data defined in the scope is private or encapsulated
// Data privacy is important in programming
// IIFE was invented for this

// Variables with let or const create their own scope inside a block
// In modern JS, IIFE is not used much anymore for data privacy
// We can just create a block like this
{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate); // Error
console.log(notPrivate);

// IIFE is still useful to invoke a function just once in modern JS
