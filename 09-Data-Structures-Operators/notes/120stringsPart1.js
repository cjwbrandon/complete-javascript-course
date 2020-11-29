'use strict';

// Working with Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

// Retriving value
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]); // You can index directly on the string

// Getting length
console.log(airline.length);
console.log('B737'.length);

// String Methods
// Getting the index -> Give only first occurence
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
// Note: they are case sensitive
console.log(airline.indexOf('Portugal')); // returns 8
console.log(airline.indexOf('portugal')); // returns -1

// Use of index
// Slice Method -> Gets string from the index -> .slice({start_index}, {end_index})
// Note: Does not mutate the underlying string -> Primitives -> unable to mutate
// Returns a new string
console.log(airline.slice(4));
// Note: Start Index is included while End Index is not included
console.log(airline.slice(4, 7));

// IndexOf + Slice
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Negative arguments -> slicing from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// Example
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Methods only work on Objects? But why Strings have?
// Boxing: Behind the Scenes, JS converts the String to a String Object with the same contents. Methods are called on that Object
console.log(new String('jonas')); // Conversion
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1)); // converted back to string
