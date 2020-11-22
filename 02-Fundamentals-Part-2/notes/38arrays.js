'use-strict';

// Data Structure - Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
// ....

// Can we bundle them together?
// We use Data Structures like Arrays to store data
// 1 way of creating arrays - Literal Syntax
const friends = ['Michael', 'Steven', 'Peter']; // Comma separates each value
console.log(friends);

// Using the Array function to create
const y = new Array(1991, 1984, 2008, 2020);


// Retrieving values
console.log(friends[0]); // Note: Arrays are zero-based
console.log(friends[0], friends[2]);


// Number of elements in the array
console.log(friends.length); // Not zero-based, returns an expression
console.log(friends[friends.length - 1]); // subtract 1 from length to get zero-based index

// Mutating the Array
friends[2] = 'Jay';
console.log(friends); // 'Peter' gets replaced with 'Jay'
// Variables declared with const cannot be changed??
// Only Primitive values are immutable
// Arrays are not Primitive values -> Mutable
// Why? How JS stores memory -> to be discussed later
// What we cannot do? We cannot replace the entire array
// friends = ['Bob', 'Alice'] // Error


// Arrays can hold values of different types
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

// illegal
console.log(calcAge(years)); // NaN
console.log(years + 10); // converts all to string and add to the end
// Note: we cannot do operations with Arrays -> weird behaviours

// legal
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);