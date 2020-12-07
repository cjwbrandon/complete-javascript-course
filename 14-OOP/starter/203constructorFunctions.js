'use strict';

// Constructor Functions and the new Operator
// A Completely normal function
// Only diff is we call the Constructor Function with the NEW Operator
// Note: Naming convention -> Always start with a capital letter
// Note: Arrow functions cannot work as a Constructor Function because it does not have the this keyword -> Function Expressions or Declarations
const Person = function (firstName, birthYear) {
  console.log(this); // Empty object from step 2

  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Methods
  // Works but bad practice -> NEVER create methods in the Constructor Functions
  // Each object created will carry copies of this function -> Bad for performance
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };

  console.log(this);
};

// NEW OPERATOR -> IMPORTANT
const jonas = new Person('Jonas', 1991); // this object is returned in step 4
console.log(jonas); // Object is now populated

// What happens behind the scenes?
// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} is linked to prorotype
// 4. Function automatically return {}

// You can create multiple objects from the Constructor Function
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// Instance
const jay = 'Jay';
console.log(jonas instanceof Person);
console.log(jay instanceof Person);
