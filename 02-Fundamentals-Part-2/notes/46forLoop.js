'use strict';

// Control Structure
// Iterations: The For Loop
// Allows you to do repetitions

// Have to repeat for each
console.log('Lifting weights repeitition 1');
console.log('Lifting weights repeitition 2');
console.log('Lifting weights repeitition 3');
// ....

// For Loop Example
// for (let {counterVariable}; {condition}; {updateCounter})
// counterVariable: Must use let because the Variable will be changed later
// condition: condition to stop -> for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}