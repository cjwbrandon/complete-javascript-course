'use strict';

// Destructuring Objects

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

  // function returning an array of multiple values
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Using objects as a parameter to avoid ordering -> destructuring
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
// Order does not need to match
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
// using default values
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

// Instead of square brackets, we use curly braces
// Input the exact properties names
// Note: Since the order does not matter in objects, we don't have to skip variables
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Different variable names -> {propertyName}:{newVariableName}
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = retaurant;
console.log(restaurantName, hours, tags);

// Default Values -> w/ new Variable Name
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); // overwritten

// Nested Objects -> uses semicolon (:) as well
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
