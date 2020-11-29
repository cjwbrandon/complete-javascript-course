'use strict';

// The Call and Apply Methods
// Setting the 'this' keyword manually and why?

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // Old Syntax -> book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// Possible due to first-class functions
const book = lufthansa.book;

// Regular function call
// book(23, 'Sarah Williams'); // Error -> undefined this

// Tell explicitly what the this keyword is
// 3 function methods to do it: call, apply and bind
// Note: Functions can have methods too
// .call method -> .call({thisObject}, {...args})
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings.bookings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa.bookings);

// Works on any other objects
// Note: properties must be the same
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method -> Not used much in modern JS
// .apply -> .apply({thisObject}, [{args}])
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Alternative
book.call(swiss, ...flightData);
