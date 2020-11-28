'use strict';

// Destructuring Array
// ES6 feature -> A way of unpacking an array or object into separate data structures
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // function returning an array of multiple values
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// One way
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Another way -> declaring at the same time
// Use square brackets -> destructuring (JS knows its not an array)
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr); // Original array is not affected

// We can deconstruct a portion of the array
// We can skip variables by leaving a gap
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
const temp = main;
main = secondary;
secondary = temp;
// With destructuring -> doesn't need a temporary variable
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Retrieving multiple outputs from function using destructuring
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
console.log(i, j);
// Destructuring in destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k); // Works too

// Setting default values -> uncertain about Array length
const [p, q, r] = [8, 9]; // r returns undefined
const [p = 1, q = 1, r = 1] = [8, 9]; // r returns as 1
console.log(p, q, r);
