'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// forEach With Maps and Sets
// Calling on a map
// Similarly .forEach(function ({value}, {key}, {map}))
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set -> .forEach(function ({value}, {key}, {map}))
// Note: value and key are the same
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
}); // key and value are equal
// _ argument -> throw away
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${key}: ${value}`);
});
