'use-strict';

// Dot vs. Bracket Notation

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);
// Shows us the same object but arranged alphabetically
// Order of properties doesn't matter
// Why? We simply get the properties using the property name


// dot notation
console.log(jonas.lastName);

// bracket notation
console.log(jonas['lastName']);
// we can use any Expression in bracket notations
// any Operations produces Expressions
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// When to use which?
// When we need to compute the key, use bracket, else use dot


const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends");

console.log(jonas.interestedIn); // undefined --> what we get when we access a Property that does not exist in the Object
console.log(jonas[interestedIn]);

// Example: handling invalid keys
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}


// Adding new properties
jonas.location = 'Portugal'; // using dot notation
jonas['twitter'] = '@jonasschmedtman' // using bracket notation
console.log(jonas)


// Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);

// Operator Precedence
// Member Access & Computed Member Access -> High priority
// Executed from left-to-right
// jonas.friends is executed first before .length is executed