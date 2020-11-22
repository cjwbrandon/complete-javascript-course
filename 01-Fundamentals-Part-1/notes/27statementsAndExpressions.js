// Statements and Expressions
// Expressions -> a piece of code that produces a value

// Examples
3 + 4
1991
true && false && !false

// Statements -> bigger piece of code that is executed and does not produce a value by itself
// Declaration are like complete sentences and expressions are like the words that make up the declaration
// Programs are like a sequence of actions (statements)
// Example: if else statement
if (23 > 10) {
  const str = '23 is bigger';
}
// Does not itself produce a values
// It is fuzzy as the string itself is an expression in the statement

// JS expects statements and expressions in different places
// Example: template literals
// Takes in an expression but not a statement
console.log(`I'm ${2037 - 1991} years old`); // correct
// console.log(`wrong: ${if (23 > 10) {
//   const str = '23 is bigger';
// }}`); // Error
