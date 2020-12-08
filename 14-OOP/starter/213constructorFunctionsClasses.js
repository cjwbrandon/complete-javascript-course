'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Inheritance Between "Classes" Constructor Functions
// Often we want child Classes to have the same properties + a few of its own
const Student = function (firstName, birthYear, course) {
  // Copy from parent class
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  // Instead
  Person.call(this, firstName, birthYear);

  this.course = course;
};

// Linking Child and Parent Prototypes
// Note: this must be called here. Object.create creates an empty object and will overwrite all pre-existing Methods
Student.prototype = Object.create(Person.prototype);

// Side-effect: Causes the constructor of the Child to be the Parent
console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();

// Test inheritance from Person
mike.calcAge();

console.log(mike.__proto__); // Student.prototype
console.log(mike.__proto__.__proto__); // Person.prototype

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true
