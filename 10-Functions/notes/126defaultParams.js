'use strict';

// Default Parameters
// Don't have to pass in all the arguments manually if we don't want to change it
const bookings = [];

// ES6 way of setting default values
// Note: Default values can contain any expressions
// Default values can use params defined before it
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 way of setting default values
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // params not passes will take the default values
createBooking('LH123', 2, 800);
createBooking('LH123', 2);

// Skipping a default parameter
createBooking('LH123', undefined, 800);
