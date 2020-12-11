'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Promises and the Fetch API

// AJAX call
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

// Fetch API
const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`);
console.log(request); // returns a promise
