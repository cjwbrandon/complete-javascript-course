///////////////
// Exporting module
console.log('Exporting module');

// Variables are scoped to modules
const shippingCost = 10;
export const cart = [];

// Require to export to use in other modules
// 2 types: Name exports and Default Exports
// Name exports --> Simple
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// Note: Exports must be executed in top-level code
// if (true) {
//   export const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
// } // return SyntaxError: Unexpected token 'export'

// Exporting multiple things
const totalPrice = 237;
const totalQuantity = 23;

// Note: You can change the name of the Variable exported
export { totalPrice, totalQuantity as tq };

// Default Exports -> Export 1 thing per module
// Not desireable to export Default and Named Exports
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
