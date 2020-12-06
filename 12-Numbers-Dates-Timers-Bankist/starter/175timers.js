'use strict';

// Timers: setTimeout and setInterval
// setTimeout runs once after a defined time
// setInterval runs forever until we stop it

// setTimeout({function}, {timeMS}) -> schedule this function call 3 seconds later
setTimeout(() => console.log('Here is your pizza'), 3000);
// Note: Asynchronous JS: Execution continues after setting the timeout
console.log('Waiting...');

// setTimeout({function}, {timeMS}, {...arguments})
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  'olives',
  'spinach'
);

// Cancelling the timer before it executes -> clearTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval -> Running functions continuously
// setInterval({function}, {interval}, ..args)
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
