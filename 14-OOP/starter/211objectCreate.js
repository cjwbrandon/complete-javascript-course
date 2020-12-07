'use strict';

// Object.create
// Works differently from Constructor Functions and Classes
// Still the idea of prototype inheritance but no prototype, constructor functions or new operator
// Instead use to manually set the prototype of an Object to any other Object

// Methods to inherit decalred in Simple Object literal
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // More programmatic way of setting properties -> nothing to do with constructor function and new operator
  // Similar to constructor but can set any name
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Creates a new empty Object thats linked to PersonProto
const steven = Object.create(PersonProto);
console.log(steven); // empty and have __proto__

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__); // returns PersonProto
console.log(steven.__proto__ === PersonProto);

// More programmatic way of setting properties
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
