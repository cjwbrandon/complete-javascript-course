'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// Handling Rejected Promises
// Usually when the user loses internet connection
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // Country 1
  const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    // Error handling -> pass in 2nd callback function of then
    .then(
      response => response.json()
      // err => alert(err) // Error handling/catching -> customise
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      // Then method always returns a promise regardless if it return a value or not
      // Receives the return value
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(
      response => response.json()
      // err => alert(err) // Error handling/catching
    )
    .then(data => renderCountry(data, 'neighbour'))
    // Catch any errors in the chain -> global
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    // Always be called, whether fulfilled or rejected
    .finally(() => {
      // Code that must be executed regardless of the results
      countriesContainer.style.opacity = 1;
    });
};

// Simulate: Change Network to offline then click on button
// ERR_INTERNET_DISCONNECTED -> TypeError: Failed to fetch
btn.addEventListener('click', function () {
  getCountryData('singapore');
});

// Undefined flag error
getCountryData('asjflasekafs');

// Note: Errors in the API is not picked up by the catch.
// e.g. 404 status code is considered as the promise was fulfilled -> Successfully received a response
