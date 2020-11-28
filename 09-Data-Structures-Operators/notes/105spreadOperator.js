'use strict';

// The Spread Operator (...) -> ES6
// Expand an Array to all its elements -> Unpacking all at once

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // Using spread operators to pass arguments
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
const ingredients = ['a', 'b', 'c'];
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); // Using spread operators

// Adding elements
const arr = [7, 8, 9];
// 1 way
const badNewsArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewsArr);

// New way -> using Spread Operator
const newArr = [1, 2, ...arr]; // takes all the elements out and writing them
console.log(newArr); // same results

// Passing arguments
console.log(...newArr);
console.log(1, 2, 7, 8, 9); // same, instead of console.log([1,2,..])

// Example
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Difference between spread operator and deconstructing
// Spread takes all the elements and does not create new variables
// Onlhy use it in places where otherwise we will write values separated with commas

// Copy array -> Shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Spread operator works on all iterables (not just Array)
// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // Each letter becomes an element in the Array letter
console.log(...str);

// ES2018 -> Spread operators works on objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
// Check
console.log(restaurantCopy.name);
console.log(restaurant.name);
