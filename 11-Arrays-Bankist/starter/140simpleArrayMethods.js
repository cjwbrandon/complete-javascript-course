'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Simple Array Methods
// Why Arrays have methods?
// Methods -> Functions attached to objects
// This means that Arrays are Objects
// They get access to special built-in methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slicing -> .slice({beginIndex}, {endIndexOptional})
// Note: Begin Index is included while End Index is excluted
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2)); // from the back
console.log(arr.slice(1, -2)); // +ve & -ve values
// Using slice to create a shallow copy
console.log(arr.slice());

// Using spread operator to create a shallow copy
console.log([...arr]);
// Both methods works and can be used depending on ur personal preference

// SPLICE -> Mutates the original array -> .splice({beginIndex})
// Note: Returns from the beginIndex onwards. Original Array keeps the remaining values.
// Usually we don't care about the return. SPLICE is mainly used to get rid of items
// console.log(arr.splice(2));
// arr.splice(-1); // getting rid of the last element
// .splice({beginIndex}, {deleteCount})
arr.splice(1, 2); // removes from Index 1 and 2 elements. Remaining elements stays in the original Array
console.log(arr); // Only the first x Elements remains

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

// Note: Reverse actually reverse the original Array
console.log(arr2.reverse());
console.log(arr2);

// CONCAT -> {arr1}.concat(arr2)
const letters = arr.concat(arr2);
console.log(letters);
// Using Spread operator
console.log([...arr, ...arr2]);
// Both works and are perfectly fine

// JOIN -> {arr}.join({separator})
console.log(letters.join(' - '));
