'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The Magic of Chaining Methods -> Pipeline
// Note: You can chain as long as it returns a new Array
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, _, arr) => {
    // inspect previous Array to debug
    console.log(arr);
    console.log(mov * eurToUsd);
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// Remarks
// Note: Do not overuse chaining. Try to optimise it instead. Long chains with large Array often cause performance issues.
// Try to compress to as little methods as possible

// Bad practice to chain methods that Mutate the Original Array. Avoid
