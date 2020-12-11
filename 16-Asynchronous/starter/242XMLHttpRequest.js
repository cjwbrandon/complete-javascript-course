'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Our first AJAX Call: XMLHttpRequest
// Old School

const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  // .open({method}, {url})
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);

  // Asynchronous -> Cannot directly assign to a variable
  request.send();
  // console.log(request.responseText); // empty
  // Instead have to use an event listener
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
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
  });
};

getCountryData('singapore');
getCountryData('portugal');
getCountryData('usa');

// Note: sometimes the order is different -> Asynchronous code -> Whichever arrives first will fire the load event first
// Evidence of Non-blocking code
