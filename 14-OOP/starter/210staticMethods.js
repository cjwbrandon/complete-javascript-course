'use strict';

// Static Methods
// Array.from -> Returns an Array -> .from method is in the Array Namespace
console.log(Array.from(document.querySelectorAll('h1')));
// Method that is attached to the Array constructor
// [1, 2, 3].from(); // TypeError
// Arrays do not inherit this method

// Number.parseFloat is another static method
// Static Methods are usually used as helpers functions related to a certain constructor

// Constructor Function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.hey = function () {
  console.log('Hey there');
  console.log(this); // this returns the constructor
};
Person.hey();

// Not inherited or not in prototype object
const jonas = Person('jonas', 1991);
// jonas.hey(); // TypeError

// ES6 Classes
class PersonCl {
  // first thing -> constructor method -> Pass in properties
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods -> Everything outside of constructor is automatically added to .prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // Use getter -> set on the prototype as well
  get age() {
    return 2037 - this.birthYear;
  }

  // Setting a property that already exists
  set fullName(name) {
    // If the property name is the same, the convention to avoid is to add an underscore (_)
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there');
    console.log(this); // Points to the class
  }
}

PersonCl.hey();
