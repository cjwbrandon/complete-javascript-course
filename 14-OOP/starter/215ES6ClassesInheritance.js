'use strict';

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

  greet() {
    console.log(`Hey ${this.fullName}`);
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

// Inheritance Between "Classes": ES6 Classes
// {childClass} extends {PersonCl} -> Prototypes are linked & initialise parent properties
// class StudentCl extends PersonCl {}
// const bob = new StudentCl('Bob The Builder', 1995);
// bob.greet();

class StudentCl extends PersonCl {
  // Only need to call constructor if you have additional properties
  constructor(fullName, birthYear, course) {
    // Initialise properties -> Always needs to happen first -> Creates the this keyword
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // Polymorphism -> appears first in the prototype chain
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

// Prototype chain is created automatically
console.log(martha.__proto__);
console.log(martha.__proto__.__proto__);
