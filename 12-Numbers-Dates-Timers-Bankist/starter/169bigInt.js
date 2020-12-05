'use strict';

// Working with BigInt
// Numbers are represented using 64 bits
// 53 bits are used to store the digits
// the rest are used to store the decimal points and signs
// Number size is limited
// 2 -> base 2, 53 -> bits
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
// Unsafe numbers -> some wrong
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// ES2020 -> BigInt -> Store much larger values
// Sometimes you interact with programming languages that are able to store much larger integers -> APIs
// In these cases, you might need to use bigint
// Adding the 'n' behind transform the value to a BigInt
console.log(34123512534513451354135125125431n);
console.log(BigInt(341235125345134));

// Operators
console.log(10000n + 10000n);
console.log(123154654654846n * 132154648654n);
// Math does not work
// console.log(Math.sqrt(16n)); // TypeError

// Cannot mix bigint with regular numbers
const huge = 1534684956146548946n;
const num = 23;
// console.log(huge * num); // TypeError: Cannot mix
console.log(huge * BigInt(num));

// Exceptions
// Comparisons
console.log(20n > 15); // true
console.log(20n === 20); // false -> strict equality does not do type coercion
console.log(20n == 20); // true
console.log(typeof 20n);

// Plus operators with Strings
console.log(huge + ' is REALY big!!!');

// Divisions
console.log(10n / 3n); // returns integer -> cuts off the decimal parts
console.log(10 / 3);
