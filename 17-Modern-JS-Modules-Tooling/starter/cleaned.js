// Video 274: Lets Fix Some Bad Code!

// Use const or let instead of var
// Use descriptive variable names
const shoppingCart = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
];

const allowedProducts = {
  lisbon: 5,
  others: 7,
};

let description = '';

// Use pure functions -> Without side effects
// Doesn't manipulate data outside -> Pass in all the data you need
const checkCorrectAllowedProducts = function (cart, numAllowed, city) {
  // remove unnecessary blocks
  if (!cart.length) return [];

  // Use ternary operator
  // const allowed = numAllowed[city] > 0 ? numAllowed[city] : numAllowed.others;
  const allowed = numAllowed?.[city] ?? allowedProducts.others;

  // Try not to mutate original data
  const newCart = cart.map(item => {
    const { product, quantity } = item;
    return {
      product,
      quantity: quantity > allowed ? allowed : quanitty,
    };
  });

  return newCart;
};
const allowedShoppingCart = checkCorrectAllowedProducts(
  shoppingCart,
  allowedProducts,
  'lisbon'
);
console.log(allowedShoppingCart);

const createOrderDescription = function (cart) {
  // Use destructuring
  const [{ product: p, quantity: q }] = cart;

  // Use template literals
  return `Order with ${q} ${p}${cart.length > 1 ? ', etc...' : '.'}`;
};

const orderDescription = createOrderDescription(allowedShoppingCart);
console.log(orderDescription);
