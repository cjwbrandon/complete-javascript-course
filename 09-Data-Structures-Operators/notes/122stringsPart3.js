'use strict';

// Working with Strings - Part 3

// Split Method -> .split({valueToSplitBy})
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// Join Method -> .join({valueToJoinWith})
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Capitalize a name
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding -> Add a number of characters until the string is of a certain desired length
// .padStart({desiredLength}, {valueToPadWith}) or .padEnd
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));

// Masking
const maskCreditCard = function (number) {
  const str = number + ''; // Converts to string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4333333341452131254));
console.log(maskCreditCard('2341231253489253'));

// Repeat Method -> .repeat({numTimes})
const message2 = 'Bad weather... All Departures Deplayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line: ${'plane'.repeat(n)}`);
};
planesInLine(5);
planesInLine(13);
