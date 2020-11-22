// MDN Operator Precedence Table
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Precedence --> higher number, gets evaluated first

// Associativity
// left-to-right
console.log(25 - 10 - 5); // basic math operators
// right-to-left
let x, y;
x = y = 25 - 10 - 5;
// JS starts with the mathematical operators --> x = y = 10
// Assignment gets executed from right to left --> x = y = 10, x  10
// If left to right --> x = y will get executed first --> x = undefined
console.log(x, y);

// Groupings Operator
ageJonas = 24
ageSarah = 14
const wrongAverageAge = ageJonas + ageSarah / 2; // wrong
const averageAge = (ageJonas + ageSarah) / 2; // correct
console.log(wrongAverageAge, averageAge);