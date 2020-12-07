'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Prototypal Inheritance on Built-in Objects
const jonas = new Person('Jonas', 1991);

// Protypal Chain
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); // Prototype of the prototype
// We can find the hasOwnProperty method here
// Object prototype is at the top of the chain
console.log(jonas.__proto__.__proto__.__proto__);

// Prototype reference back to the Constructor
console.dir(Person.prototype.constructor);

// Prototype of a function
const arr = [3, 5, 7, 3, 3, 9, 7, 4, 5]; // Similar to new Array === []
// Prototype of the Array -> We can view all the Array Methods previously explored here
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__); // back to Object prototype

// We can extend the functionality of Array
// Don't make it a habit to extend built-in functions
// JS might add new functionalities that clashes
// Multiple developer might have conflicts
Array.prototype.unqiue = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// DOM
const h1 = document.querySelector('h1');
console.dir(h1);
console.log(h1.__proto__); // HTMLElement -> Types of objects in DOM
console.log(h1.__proto__.__proto__); // Element > node > ... > object

// Function
console.dir(x => x + 1); // function prototype
