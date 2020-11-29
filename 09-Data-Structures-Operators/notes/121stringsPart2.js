'use strict';

// Working with Strings - Part 2
const airline = 'TAP Air Portugal';

// Changing case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Check emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
// Method .trim() -> Getting rid of the white spaces -> \n counts as white space
// trimStart & trimEnd as well
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing parts of strings
// .replace method -> .replace({to_be_replaced}, {replaced_by})
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

// Replacing entire words
// Note: Only replaces the first occurence & case sensitive
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// Solution: Regular Expressions
console.log(announcement.replace(/door/g, 'gate')); // g stands for global

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // returns true
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airbus'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  // Common practice to turn to lower case to standardise
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else console.log('Welcome aboard!');
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
