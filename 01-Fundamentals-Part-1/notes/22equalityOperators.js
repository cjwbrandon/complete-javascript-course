// Equality Operators: == vs. ====
const age = 18;

// === strict equality --> no type coercion
// Note: we dont need curly braces if our if statement is 1 line
if (age === 18) console.log('You just became an adult :D');

// == loose equality --> does type coercion
if (age == "18") console.log("You just became an adult :D (loose)");
if (age === "18") console.log("You just became an adult :D (strict)");
// Try to avoid loose equality to have cleaner code and less bugs


// Getting a value from a webpage
const favourite = Number(prompt("What's your favourite number?")); // Get a prompt window
console.log(favourite);
console.log(typeof favourite); // string

// try with input 23
if (favourite === "23") {
  console.log("Cool! 23 is an amazing number! (strict)")
} else if (favourite == "23") { // Succeeds since we are using loose equality -- allows type coercion
  console.log("Cool! 23 is an amazing number! (loose)");
} else {
  console.log("Number is not 23");
}

// Strict inequality
if (favourite !== 23) console.log("Why not 23?");