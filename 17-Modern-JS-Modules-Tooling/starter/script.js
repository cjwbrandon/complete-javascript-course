// Note: all modules are executed in strict mode by default

// Importing module
// Import Name Exports
// Note: you can change the name of the Variables inported
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from './shoppingCart.js';

// Cannot use import statement outside a module
// Remember to specify the type attribute in HTML linking
console.log('Importing module');
// Note: the Exporting module is executed before the imported module

addToCart('bread', 5);
console.log(totalPrice, totalQuantity);

// Importing everything -> Creates a namespace for it
import * as ShoppingCart from './shoppingCart.js';

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

// Video 267: The Module Pattern
// Main goal of module pattern is to encapsulate functionality, have Private data and to expose a Public API
// Best way is to use Functions -> Private data & return values (Public API)
// Usually write an IFFE
const ShoppingCart2 = (function () {
  // Private data
  const cart = [];
  const shipppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // return -> Public API
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// Note: Works because of closures
// Note: We cannot access anything in the module from the console due to the scope
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 4);
console.log(ShoppingCart2);
// Private property
console.log(ShippingCart2.shipppingCost);
