'use strict';

// What get hoisted? Variables
console.log(me); // undefined
// console.log(job); // ReferenceAError: Cannot access before initialisation
// console.log(year); // ReferenceAError: Cannot access before initialisation

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// What get hoisted? Variables
console.log(addDec1(2, 3)); // works
// console.log(addExpr(2, 3)); // ReferenceAError: Cannot access before initialisation
console.log(addArrow(2, 3)); // Undefined

// Hoisted
function addDec1(a, b) {
  return a + b;
}

// defined using const -> TDZ (line 1 to 20)
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example -> Mistake
// Gets executed although numProduct is 10. Why? -> undefined before code
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// Best practices
// Don't use var -> let or const
// declare your variables at the top of each scope
// always declare all your functions first and use them only after declarations (including function declarations)

// Difference between Variables
var x = 1;
let y = 2;
const z = 3;
// window object in browser
// property x = 1 (declared using var)
// variables declared with let or const do not create properties on the window object
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
