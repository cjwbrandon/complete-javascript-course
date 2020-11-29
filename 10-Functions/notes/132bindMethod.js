'use strict';

// The Bind Method
// Bind allows us to manually set the this keyword for any function call
// Binds does not immediately call the function
// Returns a new function where the this keyword is bound
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({
    flight: `${this.iataCode}${flightNum}`,
    name,
  });
};

// .bind({thisObject})
// Binds this to eurowings
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');
console.log(eurowings.bookings);

// Useful if you need to call the method multiple times instead of using .call repeatedly
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// Partial Applications -> A part of the arguments are already applied
// Can pass mutliple Arguments as well -> All function call will use that argument's value
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann'); // Equal to bookEW(23, 'Jonas Schmedtmann')
bookEW23('Martha Cooper');

// Objects with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// this keyword point to element which the handler is attached to -> button element
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // returns NaN
// Solution using bind
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application -> Pre-set parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Since the tax in a country is always the same, we can use partial application
// .bind first argument is the this object -> no this object we replace with null
// Note: this will only work if the parameters you want to pre-set comes first -> Cannot skip parameters
const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23
console.log(addVAT(100));
console.log(addVAT(23));

// Difference with default values
// Bind gives you a brand new more specific function from a general function

// Using Functions Returning Functions
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
