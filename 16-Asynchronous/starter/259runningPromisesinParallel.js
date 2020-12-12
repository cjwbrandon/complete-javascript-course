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
// Running Promises in Parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // In Sequence
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log(data1.capital, data2.capital, data3.capital);

    // In Parallel -> Promise.all([{arrayOfPromises}])
    // Note: Short-circuits if 1 promise rejects -> 1 reject all reject
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data); // returns an array
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');

// You can use .then too
// Promise.all([
//   getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//   getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//   getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
// ]).then();
