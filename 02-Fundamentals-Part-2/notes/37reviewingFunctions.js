'use strict';

// Reviewing Functions

// Note: Parameters in different functions can have the same Parameter Names
// Why? - Scope
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement; // return will automatically exit the function
    console.log(`${firstName} retires in ${retirement} years`) // gets ignored
  } else {
    return -1; // Good practice to return the same type as the input
  }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));