'use strict';

// this keyword outside functions
console.log(this); // Gets the window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
// Regular function call
// this returns undefined in strict mode, else window object
calcAge(1991);

// Arrow function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
// this returns window object
// Arrow function does not get its own this word -> lexical this keyword -> parent scope -> in this case, window (in the global scope)
calcAgeArrow(1980);

// this in method
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
// Method call
// this -> object calling the method -> jonas
jonas.calcAge();

// proof that this -> OBJECT calling the method
const matilda = {
  year: 2017,
};
// method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // this uses matilda object even though the function is written in jonas

// taking the function out
const f = jonas.calcAge;
f(); // this is undefined -> regular function call -> no owner
