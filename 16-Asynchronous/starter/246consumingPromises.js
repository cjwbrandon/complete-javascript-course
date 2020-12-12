'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Consuming Promises

// Fetch API
// const getCountryData = function (country) {
//   // Handle fulfilled state -> .then({callback})
//   const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response); // returns type Response
//       // returns headers, status code, etc
//       // body -> ReadableStream -> have to call json method to read
//       return response.json(); // also Asynchronous, returns a promise as well
//     }) // Handle promise
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };

// Much more readible compared to Callback Hell
const getCountryData = function (country) {
  // Handle fulfilled state -> .then({callback})
  const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryData('singapore');
