'use-strict';

// Looping Arrays, Breaking and Continuing

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

// Looping an Array
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
}


// Creating a new array
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // Filling types array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]); // using push instead
}
console.log(types);


// Example 2
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);


// Continue and Break
// Continue: Exits current iteration
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

// Break: Exits the loop
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'number') break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}