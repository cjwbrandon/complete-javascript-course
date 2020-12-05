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

// More Ways of Creating and Filling Arrays -> programatically
// Create Empty elements -> new Array({length})
const x = new Array(7);
console.log(x);
// Because they are empty, this method is not very useful
console.log(x.map(() => 5));
// Other than using .fill({value}, {startIndex}, {endIndex})
// Note: Mutates the original Array
x.fill(1);
console.log(x);
x.fill(2, 0, 3);
x.fill(3, 3, 5);
console.log(x);

// Array.from({{length}: {value}}, function({element}, {index}, {array}))
// 2nd arguments is like a Mapping Callback function
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Introduced to create Arrays from Array like structures
// Iterables -> Strings, Maps, Sets -> converted to Array using Array.from({iterable})
const movementsUI = Array.from(
  document.querySelectorAll('.movements__value'),
  el => el.textContent.replace('€', '')
);
console.log(movementsUI);
// console.log(movementsUI.map(el => el.textContent.replace('€', '')));

// Another way to create
const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// But you have to apply map separately if required
