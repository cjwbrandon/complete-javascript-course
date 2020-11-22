// Activating Strict Mode
// Must be the first statement of the script
'use strict';

// Write more secure code
// Avoid introducing bugs or accidental erros

// How?
// 1. Forbids certain things
// 2. Create visible errors in certain areas

// Example
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // error with variable spelling
if (hasDriversLicense) console.log('I can drive:D');
// w/o strict mode, doesn't throw the error
// w/ strict mode, throws an error with the variable not defined

// Introduces a short-list of variables name that might be added to the language later
const interface = 'Audio'; // Error -> strict mode reserved word
const private = 534; // similar