'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Filter Method -> .filter(function({element}, {index}, {arr}))
// Functional programming + able to chain methods together
const deposits = movements.filter(function (mov) {
  // Return a boolean value -> false gets filtered out
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// Using a for of loop
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
