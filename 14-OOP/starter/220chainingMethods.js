'use strict';

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
    // add to allow chaining
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
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
      return this;
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
