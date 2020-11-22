// 23 Basic Boolean Logic, AND, OR & NOT Operators
const age = 16;
let A = age >= 20;
let B = age < 30
console.log(A, B);

// Use Operators
console.log(!A); // true
console.log(A && B); // A false -> false
console.log(A || B); // B true -> true
console.log(!A && B); // both true -> true, Note: Not has precendence over AND, OR
console.log(A || !B); // both false -> false


// 24
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); // AND operator
console.log(hasDriversLicense || hasGoodVision); // OR operator
console.log(!hasDriversLicense); // NOT operator

// Making decisions
if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// More than 2 variables
const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // AND operator
console.log(hasDriversLicense || hasGoodVision || isTired); // OR operator

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}