// The Conditional (Ternary) Operator

const age = 23;

// condition ? {action if true} : {action if false}
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// Operator produces a value -> An Expression
// Can assign to a variable
// Declare variables on conditions
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// if else statement
let drink2
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);
// Conditional Operator much cleaner


// Since it is an operator, we can use it in a template literal
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


// Not a replacement for if else
// Especially for long statements