'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Building a Simple Promise

// Built-in Object Promise({executorFunction} ({resolveFunction, rejectFunction}))
// Specify asynchronous behaviour in the functions
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Loterry draw is happening!');

  // To simulate async behaviour
  setTimeout(function () {
    // Fulfilled promise
    if (Math.random() >= 0.5) {
      // Pass the fulfilled value of the promise
      resolve('You WIN!');
    } else {
      // Rejected promise
      reject(new Error('You lost your money!'));
    }
  }, 2000);
});

// Consuming the promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// We usually only consume promises
// Promisifying -> Convert old callback-based async functions into promise-based

// e.g. Promisifying the setTimeout function
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
// we then put the code we want to run in the .then()
wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 3 seconds'));

// Create a fulfilled or rejected promise immediately
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
