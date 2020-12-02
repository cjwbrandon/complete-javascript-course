'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Data Transformations: Map Method
// Returns a brand new Array
const eurToUsd = 1.1;
// Functional programming
const movementsUSD = movements.map(function (mov) {
  return move * eurToUsd;
});
// Bad readibility but much smaller
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDArrow);
// Note: both arrays are different -> Orignal movements Array isn't mutated
console.log(movements);
console.log(movementsUSD);

// Using a for of loops -> Different philosophies or Paradigms
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(move * eurToUsd);
}
console.log(movementsUSDfor);

// Takes in 3 elements as well -> .map({element}, {index}, {array})
const movementsDescriptions = movements.map((mov, i, arr) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});
console.log(movementsDescriptions);

// forEach method -> console.log individually as we loop
// Over each iteration, we perform some action -> Side-Effects
// map method -> logs the entire Array at once and not in each iteration
