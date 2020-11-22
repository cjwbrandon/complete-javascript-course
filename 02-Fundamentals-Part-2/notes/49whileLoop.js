'use-strict';

// Control Structure
// Iterations: The While Loop
// Used for repetitions too

// For loop example for comparison
for (let rep = 1; rep <= 10; rep++) {
  console.log(`For Loop: Lifting weights repetition ${rep}`);
}


// Implementing using a While Loop
// while ({condition}) {}
// Run while the condition is TRUE
let rep = 1;
while (rep <= 10) {
  console.log(`While Loop: Lifting weights repetition ${rep}`);
  rep++;
}

// While loop is more versatile
// Only requires a condition. The condition can be anything
// Example: Rolling a dice (we don't know the number of iterations)
let dice = Math.trunc(Math.random() * 6) + 1;

// Note: becareful not to enter an infinite loop
while (dice !== 6) {
  console.log(`You rolled a $dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  // Can use new Variable dice
  if (dice === 6) console.log('Loop is about to end...');
}