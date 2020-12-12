'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Chaining Promises
// A flat chain of promises compared to callback hell

const getCountryData = function (country) {
  // Country 1
  const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      // Then method always returns a promise regardless if it return a value or not
      // Receives the return value
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

getCountryData('singapore');
