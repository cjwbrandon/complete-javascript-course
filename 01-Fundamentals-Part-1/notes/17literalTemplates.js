// Building Strings using Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// JS automatically converts number to string to support to concatenation
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(jonas);
// really troublesome to keep track of all the spaces

// Template Literals - ES6
// use backtick to start a template literal
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

// You can use backticks for regular strings as well
// Make sense to use backtick for all
console.log(`Just a regular string...`);

// Multi-line strings
console.log('String with \n\
multiple \n\
lines'); // troublesome

console.log(`String
multiple
lines`); // Using template literal -- syntax a lot cleaner