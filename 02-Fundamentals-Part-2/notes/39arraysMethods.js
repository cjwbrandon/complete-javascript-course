'use-strict';

// Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];


// Adding Elements
// Push Method: Adds elements to the end of the Array
// Returns the length of the new Array
const newLength = friends.push('Jay');
// Push is function that is attached to the Array
console.log(friends);
console.log(newLength); // in case we need it

// Unshift Method: Add elements to the beginning of the Array
// Similarly, it returns the length of the new Array
friends.unshift('John');
console.log(friends);


// Remove elements
// Pop Method: Remove elements from the end
// Returns the removed elements (not the length)
const popped = friends.pop();
console.log(friends);
console.log(popped);

// Shift Method: Remove elements from the front
// Similarly, returns the removed element
friends.shift();
console.log(friends);


// indexOf: Which position a element is
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // return -1 for elements not in array

// includes: Whether an Element is in the Array
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob')); // not inside
friends.push(23);
console.log(friends.includes('23')); // false -> Uses strict equiality
console.log(friends.includes(23)); // true

// Useful to write conditions
if (friends.includes('Peter')) {
  console.log('You have a friend called Peter');
}