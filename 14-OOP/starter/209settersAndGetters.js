'use strict';

// Setters and Getters
// Assessor Properties, Normal properties are data properties
// Get and Set values
// Simple Object Literal
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 312],

  // Getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Setter -> Must have exactly 1 param
  set latest(mov) {
    this.movements.push(mov);
  },
};
// Getting as a property -> useful if u require to do some calculations
console.log(account.latest);
// Setting as a property
account.latest = 50;
console.log(account.movements);

// Classes
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
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica.age);
console.log(jessica.__proto__); // you can find age here

// const walter = new PersonCl('Walter', 1965);
// console.log(walter); // name not added since its not a full name
const walter = new PersonCl('Walter White', 1965);
console.log(walter);
