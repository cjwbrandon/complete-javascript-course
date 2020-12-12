'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any

// Promise.race([{arrayOfPromises}]) -> Settled as soon as 1 of the Promise is settled
// Settled: Promise can get rejected or fulfilled
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();
// Check Network to verify

// Often used to timeout Promises
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => reject(new Error('Request took too long!')), sec * 1000);
  });
};
// Note: if timeout happens first, Promise returns
Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled([{arrayOfPromises}]) -> Return all settled promises
// Promise.all short circuit once 1 promise rejects while .allSettled doesn't get short circuit
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success2'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success2'),
]).then(res => console.log(res)); // returns error

// [ES2021] - Promise.any([{arrayOfPromises}]) -> Returns first fulfilled promise, ignores rejected promises
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success2'),
]).then(res => console.log(res));
