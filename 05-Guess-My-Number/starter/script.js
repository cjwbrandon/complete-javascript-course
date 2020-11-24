'use strict';

// DOM Manipulation: JS Interacts with a web page
// Selecting an Element in JS
// console.log(document.querySelector('.message').textContent);

// // Beside getting the text content, we can set it
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent); // New content is logged

// // Go through HTML to find the class, element or ID to access it
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // Get value in input
// document.querySelector('.guess').value = 23; // similarly, you can change it
// console.log(document.querySelector('.guess').value);

// Implementing the game logic
// When number is too high, too low & correct
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// State variable
// Good to store the number in the code rather than just on the DOM
let score = 20;
let highScore = 0;

// Refactoring functionalities using functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Reacts to something happens
// Using an Event Listener
// Events: click, keypress, mouse press, etc
// Select element.addEventListener({type_event}, {function})
// Reaction to the event --> Function with code that should be executed
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // ! inverts the condition
  // Usually we handle when there is no input first
  if (!guess) {
    // You can do other DOM manipulation as reaction as well
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
    // When play wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // Change the style of an element
    // document.querySelector({element}).style.{style_property} = 'value'
    // Inline style -> style directly applied to the html (no change in css file)
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Set new high score if current score is higher
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// // When guess is too high
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }

//   // When guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

// Task 1
document.querySelector('.again').addEventListener('click', function () {
  // Task 2
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // Task 3
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // Task 4
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
