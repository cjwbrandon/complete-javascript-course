'use strict';

// Looping Arrays: The for-of Loop

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
};

// For-of Looping
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Loops through the Array and gives the element in the array directly
// Still able to use continue and break
for (const item of menu) console.log(item);

// Getting index + destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // returns [{idx}, {element}]
}

console.log([...menu.entries()]);
