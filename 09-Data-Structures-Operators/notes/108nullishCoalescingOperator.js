'use strict';

// The Nullish Coalescing Operator -> ES2020

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

// Example -> setting default values
restaurant.numGuests = 0;
//  Using OR -> does not work when the value is 0 (limitation)
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish Coaslescing Operator -> '??'
// Works with Nullish values rather than falsy
// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
