'use strict';

// Closures
// Closures is not explicitly used
// It happens automatically in certain situations
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
// secureBooking executes and returns a function -> secureBooking EC is no longer in the Call Stack
const booker = secureBooking();

// Invoker booker
booker();
booker();
booker(); // Manages to increase the Private Variable 3 times
// How is it possible that booker can update a Variable in the secureBooking function that has already finished executing

// Closure
// booker is in the global environment. secureBooking environment is already gone but someone booker is still able to access the variable in the secureBooking environment.
// Closure makes a function remember all the variables that existed at the function's birth place essentially -> secureBooking is the birthplace of booker

// View Variables in a closure
console.dir(booker);
// under [[Scopes]] -> Variable Environment
// You can find passengerCount here
