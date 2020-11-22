// Operator -- allows us to transform or combine multiple values
// mathematical, comparison, logical, assignment and more types or operators

// Mathematical Operators
// minus
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah); // logging multiple values

// mulitply, division, exponentiation
consolee.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

// addition
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName); // behaviour when you add strings

// typeof
console.log(typeof firstName)
console.log(typeof ageSarah)

// Assignemnt Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // greater than?
console.log(ageSarah >= 18); // greater or equal to
console.log(ageJonas < ageSarah); // less than
console.log(ageJonas <= 18);

const isFullAge = ageSarah >= 18; // can assign to variable
console.log(now - 1991 > now - 2018); // JS knows to first evaluate the mathematical operators before the comparison operators
