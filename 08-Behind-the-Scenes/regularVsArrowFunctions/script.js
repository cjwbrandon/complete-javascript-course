'use strict';

// Becareful of using Arrow functions with this and Variables declared using 'var'
// 'var' Variables creates keys on the window object
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // // solution - before ES6
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2 - ES6 using Arrow function
    // Arrow function does not have its own this function and thus takes its parents
    // Use case of where Arrow functions
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1966);
    };

    isMillenial(); // regular function call
  },

  // Arrow function
  greet: () => console.log(`Hey ${this.firstName}`),
};

// Arrow methods do not get its own this function
// Searched from the parent / global scope
// jonas.greet(); // Results in undefined -> window object -> window.firstName is undefined
jonas.greet(); // If var firstName is defined -> returns Matilda
jonas.calcAge(); // isMillenial is a regular function call -> TypeError

// Best practice: Do not use Arrow functions as a method
// Don't have to think about mistakes that can turn up from this & var
// Arrow functions can be useful in defining functions in a method

// Argument keyword -> only available in regular functions
const addExpr = function (a, b) {
  // arguments returns an array of all the arguments parsed into the function
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8); // ReferenceError -> arguments is not available in Arrow Functions
