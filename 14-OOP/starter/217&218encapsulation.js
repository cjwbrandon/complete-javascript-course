'use strict';

// Encapsulation: Protected Properties and Methods
// 1. Prevent code outside the class accidentally manipulate the data inside the class
// 2. Exposing a small interface -> We can change the internal code with more confidence
// Note: JS doesn't really support Encapsulation

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // this.pin = pin;

    // Creating more properties without any inputs
    // this.movements = [];
    this.locale = navigator.language;

    // protected property -> convention or workaround
    // still can be accessed but signals that it shouldn't be
    this._pin = pin;
    this._movements.push(val);

    console.log(`Thanks for opening an account ${owner}`);
  }

  // Public Interface to mutate properties
  getMovements() {
    return this._movements;
  }

  desposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // We don't want this in the API (encapsulation) Some condition
  _approveLoan(val) {
    return true;
  }

  // We want this in the API
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// Not a good idea to interact with properties directly
// acc1._movements.push(250);
// acc1.movements.push(-140);

// Instead use methods/API
acc1.getMovements();
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);

// Shouldn't be accessible but it is
console.log(acc1.pin);
console.log(acc1.approveLoan());
