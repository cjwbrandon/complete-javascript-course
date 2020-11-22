'use-strict';

// Looping Backwards and Loops in Loops

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];


// Looping backwards
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}


// Loop inside a Loop
// 3 exercise 5 repetitions each
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting exercise ${exercise} ---`);

  for (let rep = 1; rep < 6; rep++) {
    // You can access Variable exercise from the outer loop
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}