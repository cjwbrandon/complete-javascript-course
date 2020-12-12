// Note: all modules are executed in strict mode by default

// Importing module
// Import Name Exports
// Note: you can change the name of the Variables inported
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from './267shoppingCart.js';

// Cannot use import statement outside a module
// Remember to specify the type attribute in HTML linking
console.log('Importing module');
// Note: the Exporting module is executed before the imported module

addToCart('bread', 5);
console.log(totalPrice, totalQuantity);

// Importing everything -> Creates a namespace for it
import * as ShoppingCart from './267shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

// Importing default exports
import add, { cart } from './shoppingCart.js';
add('pizza', 2);

// Mixing default and named exports -> Not desireable to mix exports
// import add, {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';
// console.log(price);

// Live connection -> Not copies -> Points to the same place in memory
add('bread', 5);
add('apples', 4);

// cart is manipulated by the add function
// is not simply a copy since cart is an empty array
console.log(cart);
