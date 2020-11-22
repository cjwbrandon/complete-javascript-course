// Taking Decisions
let age = 19;

// Control Structure
// Controls how our code is executed

// if else control strucutre
// Code doesn't execute in a linear way but instead what blocks should be controlled

// if statement
// if ({condition - boolean}) { action }
if (age >= 18) {
  console.log(`Sarah can start her driving license.`)
}

age = 15
// if ({condition - boolean}) { action if true } else { action if false }
if (age >= 18) {
  console.log(`Sarah can start her driving license.`)
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// Declaring variables in if else blocks
const birthYear = 1998;
let century; // if you don't declare, variable will not be accessible outside the block

if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
console.log(century);
