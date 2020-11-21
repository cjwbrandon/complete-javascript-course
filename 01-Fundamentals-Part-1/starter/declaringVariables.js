// Different ways to declare variables
// let -- can change the value in the future
let age = 30;
age = 31; // assign new variables -- mutate or reassign
let year; // declaring variables

// const -- variables that are not to be changed - immutable
const birthYear = 1990;
// birthYear = 1992 // Error
// const birthYear // Error - since they are immutable, require initial value
// Always use const at first and change it to let when you require to mutate a variable

// var -- old way of declaring variables -- works similar to let -- avoid
var job = "programmer";
job = "teacher";
// seems to work like let but is actually different - to be revisited
// let is block-scoped, var is function-scoped

// Not declaring variables
firstName = "bob"
console.log(firstName)
// it will work, but a terrible idea
// JS doesn't create this in the current scope but rather in the global object
// ALWAYS DELCARE VARIABLES