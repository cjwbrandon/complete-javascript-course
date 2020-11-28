'use strict';

// Short Circuiting (&& and ||)

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// Use ANY data type, return ANY data type, short-circuiting
// Short-circuiting -> if the first operator is truthy, it will return the first operator -> it will not even look at the 2nd value
console.log('-----OR-----');
console.log(3 || 'Jonas'); // returns 3 -> short-circuit
console.log('' || 'Jonas'); // returns 'Jonas'
console.log(true || 0); // returns true
console.log(undefined || null); // returns null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // returns 'Hello' -> first truthy value -> short-circuit
// OR -> if any is true -> true -> no point looking at the other values

// Example -> setting default values
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
//  Using OR -> does not work when the value is 0 (limitation)
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND operator
console.log('-----AND-----');
// Short-circuit evaluation -> works opposite
// Short-circuit on the first falsy value
console.log(0 && 'Jonas'); // returns 0
console.log(7 && 'Jonas'); // returns 'Jonas' -> returns the last value

console.log('Hello' && 23 && null && 'jonas'); // returns null

// Check if function exists and run
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Using AND operator
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Note: Just because it works, don't replace all of it with the AND or OR operators as it makes code hard to read
