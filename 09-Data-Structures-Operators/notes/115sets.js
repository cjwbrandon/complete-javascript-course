'use strict';

// Sets -> Collection of unique values
// Create a new Set using Set({iterable})
// Note: Sets is able to support different data types
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // the duplicate values are removed
console.log(new Set('Jonas'));

// Sets methods
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // duplicates are ignored
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

// Retrieving elements in Sets
// Set does not have indices
// All values are unique -> order does not matter -> only need to know if the Set has a value or not -> use .has() method

// Sets are iterables as well
for (const order of ordersSet) console.log(order);

// Example -> removing duplicates
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// Converting Set to an Array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set('jonasschmedtmann').size);
