'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Reduce Method
console.log(movements);

// .reduce(function({accumulator}, {element}, {index}, {array}), {initialAccumulatorValue})
// accumulator -> SNOWBALL, final value to be returned
// In each iteration, what we return is the new Accumulator for the next loop
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

const balanceArr = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArr);

// Implementing with a for loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Get maximum value
const max = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
console.log(max);
