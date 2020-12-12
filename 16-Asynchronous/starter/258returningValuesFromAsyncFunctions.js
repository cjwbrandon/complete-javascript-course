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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

///////////////////////////////////////
// Returning Values from Async Functions

// In Async functions
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    // Throwing errors manually
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new ERror('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    // returns the fulfilled value
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

// Returns a Promise -> Why? because the function is still running asynchronously
// No idea what is returned yet
// const city = whereAmI();
// console.log(city); // returns promise

// Handle like a promise -> Using .then
// Note: Even if an error occurs in an Async function, the promise is still fulfilled
// Solution: Throw error again in the Async function's catch block
whereAmI()
  .then(city => console.log(city))
  .catch(err => console.error(err.message))
  .finally(() => console.log('Finished getting location'));

// However this is mixing old(.then) and new code (async/await)

// Only using async/await IIFE
(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(err.message);
  }
  console.log('Finished getting location');
})();
