////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// From Coding Challenge 1
// Task 1
// Example 1
console.log("Example 1:")
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

// Example 2
console.log("Example 2:")
markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;

// Task 2
let markBMI = markMass / markHeight ** 2
let johnBMI = johnMass / (johnHeight * johnHeight)
console.log(markBMI);
console.log(johnBMI);


// Coding Challenge 2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`)
}
