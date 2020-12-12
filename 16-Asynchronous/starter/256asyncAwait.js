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

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

///////////////////////////////////////
// Consuming Promises with Async/Await
// Note: Async/Await is once again syntactic sugar over the .then method in promises
// Does not need chaining and have a synchronous syntax

// Async function -> Executed asynchronously and returns a Promise
const whereAmI = async function () {
  // Within the async function, we can have mutliple awaits
  // await -> Stops the code execution at this point until the promise is fulfilled
  // It does not block the code -> function is async -> does not block the thread
  // Able to assign the results after await in a variable

  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse Geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();

  // Country data
  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
  );
  console.log(res);
  const data = await res.json();
  console.log(data);

  renderCountry(data[0]);
};
whereAmI();

// Shows it is executed asynchronously
console.log('FIRST');
