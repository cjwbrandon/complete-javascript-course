'use-strict';

// Object Methods

// Objects can hold different kinds of data
// Functions are another type of value
// We can create key-values pairs with functions as the values

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // Using Function Expression, function declaration will not work
  // calcAge: function (birthYear) { // holds a function value
  //   return 2037 - birthYear;
  // }

  // Using this variable -> equals to the Object calling the method
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  // Using this to store a new property
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // Challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  }
}


// Accessing the function
// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));

// With this variable
console.log(jonas.calcAge());

// Require to calculate each time we need it
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());

// Storing the property using this
console.log(jonas.age); // After calling calcAge once


// Methods on Arrays
// This means Arrays are also Objects (a special kind)
// That's why Arrays can have methods