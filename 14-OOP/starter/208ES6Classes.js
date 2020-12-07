'use strict';

// ES6 Classes
// Behind the scenes works like Constructor Functions
// Syntax that makes more sense for people from other languages -> more conventional

// class express
// const PersonCl = class {}

// Class Declaration
class PersonCl {
  // first thing -> constructor method -> Pass in properties
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods -> Everything outside of constructor is automatically added to .prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// This way of adding methods works too
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens -> can be passed to functions/classes and return functions/classes -> Classes are just a special type of function
// 3. Classes are executed in strict mode

// Constructor Functions or ES6 Classes? Either is fine. Constructor Functions aren't deprecated.
