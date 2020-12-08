'use strict';

// Encapsulation: Private Class Fields and Methods
// Not yet part of JS but soon
// Some parts work in chrome some don't
// Fields -> Properties on all instances
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// There is also the static versions of these 4

class Account {
  // 1. Public fields -> on the instances rather than on the prototype
  // Can be reference via the this keyword as well
  locale = navigator.language;

  // 2. Private fields -> Add a hash infront
  #movements = [];
  #pin; // for fields that require input

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // Protected property
    this.#pin = pin;
  }

  // 3. Public methods
  getMovements() {
    return this.#movements;
  }

  // 4. Private methods -> Browsers might not support yet
  #approveLoan(val) {
    return true;
  }

  // Works on Class but not on Instance
  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1.#movements); // Error unable to access
