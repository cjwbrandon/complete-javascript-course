////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// Example 1
console.log("Example 1:")
// Task 1
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

// Task 2
let markBMI = markMass / markHeight ** 2
let johnBMI = johnMass / (johnHeight * johnHeight)
console.log(markBMI);
console.log(johnBMI);

// Task 3
let markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)

// Example 2
console.log("Example 2:")
// Task 1
markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;

// Task 2
markBMI = markMass / markHeight ** 2
johnBMI = johnMass / (johnHeight * johnHeight)
console.log(markBMI);
console.log(johnBMI);

// Task 3
markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)