'use strict';

// Maps: Fundamentals
// Data Structures to map values to keys
// Similar to objects but in maps, keys can be any data type

// Create an empty Map
const rest = new Map();
// Add new entries -> .set({key}, {value})
// Keys can be of different types
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// Returns the new Map
console.log(rest.set(2, 'Listbon, Portugal'));

// Can chain sets
rest
  .set(['categories', 'Italian, Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// Possibility -> but not very readeable
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Map Methods
console.log(rest.has('categoreis'));
rest.delete(2);
// rest.clear();
console.log(rest);
console.log(rest.size);

// Use Arrays as keys
rest.set([1, 2], 'Test');
console.log(rest);
// Getting Array keys
// Although it looks the same, they are different objects in the heap
console.log(rest.get([1, 2])); // returns undefined
// Solution
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// Using objects as map keys
rest.set(document.querySelector('h1'), 'Heading');
