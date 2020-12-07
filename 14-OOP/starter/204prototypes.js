'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Prototypes
// Each and every function has a property called prototype
// Every object created from a Constructor Function will get access to all the properties and methods defined on the constructors prototype property
console.log(Person.prototype);

// We create Methods here -> Only 1 copy is created
// Each object will inherit methods from this prototype property
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);

// Works due to inheritance
jonas.calcAge();
matilda.calcAge();
// Note: the jonas instance does not have the method
console.log(jonas);

// Prototype of instances
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
// Note: the protoype in Person is not a Prototype of Person but will be the prototype of instances created with Person
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person)); // false

// Set properties on Prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda); // Not directly in the Object but in __proto__
console.log(jonas.species, matilda.species);

console.log(jonase.hasOwnProperty('firstName'));
console.log(jonase.hasOwnProperty('species')); // false
