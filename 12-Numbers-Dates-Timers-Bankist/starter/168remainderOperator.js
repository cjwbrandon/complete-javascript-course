'use strict';

// The Remainder Operator
console.log(5 % 2); // returns 1
console.log(5 / 2);

console.log(8 % 3); // 2
console.log(8 / 3);

// Checking even or odd
console.log(6 % 2);
console.log(7 % 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

[...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
  if (isEven(i)) row.style.backgroundColor = 'orangered';
  if (i % 3 === 0) row.style.backgroundColor = 'blue';
});
