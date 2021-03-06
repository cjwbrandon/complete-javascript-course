// Note: all modules are executed in strict mode by default

// Importing module
// Import Name Exports
// Note: you can change the name of the Variables inported
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';

// // Cannot use import statement outside a module
// // Remember to specify the type attribute in HTML linking
// console.log('Importing module');
// // Note: the Exporting module is executed before the imported module

// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

// // Importing everything -> Creates a namespace for it
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// // Importing default exports
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

// // cart is manipulated by the add function
// // is not simply a copy since cart is an empty array
// console.log(cart);

// // Video 267: The Module Pattern
// // Main goal of module pattern is to encapsulate functionality, have Private data and to expose a Public API
// // Best way is to use Functions -> Private data & return values (Public API)
// // Usually write an IFFE
// const ShoppingCart2 = (function () {
//   // Private data
//   const cart = [];
//   const shipppingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   // return -> Public API
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// // Note: Works because of closures
// // Note: We cannot access anything in the module from the console due to the scope
// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 4);
// console.log(ShoppingCart2);
// // Private property
// console.log(ShippingCart2.shipppingCost);

// Video 268: CommonJS Modules
// Used in Node.js
// Most repos in npm is implemented in CommonJS
// Note: Won't work in the browser but will in Node.js -> export is not defined in the browser but is in Node.js
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

// // Import
// const { addToCart } = require('./shoppingCart.js')

// Video 270: Introduction to NPM
// Importing from Lodash-es
// import cloneDeep from './node_modules/lodash-es/cloneDeep';
// With parcel
import cloneDeep from 'lodash-es';
// Parcel works with CommonJS modules as well

const state = {
  cast: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 5,
    },
  ],
  user: { loggedIn: true },
};

// Shallow clone
const stateClone = Object.assign({}, state);
// Deep clone
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(state);
console.log(stateDeepClone);

// Video 271: Bundling with Parcel and NPM Scripts
// Triggers a rebuilt whenever something is changed
if (module.hot) {
  module.hot.accept();
}
// Note: State is maintained

// Video 272: Configuring Babel and Polyfilling
// Plugins -> Experimental features must be included manaully

// Babel cannot transpile new syntax such as Promises and .find
// Solution: Polyfilling
import 'core-js/stable';
// import 'core-js/stable/array/find'; // Manually polyfilling

// Polyfilling async functions
import 'regenerator-runtime/runtime';
