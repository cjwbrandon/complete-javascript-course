'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Using the Geolocation API
// navigator.geolocation.getCurrentPosition(successCallback}, {errorCallback})
// Check if browser supports
if (navigator.geolocation) {
  navigator.geeolocation.getCurrentPosition(
    function (position) {
      // console.log(position); // GeolocationPosition -> logitude, latitude, etc
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(latitude, longitude);

      // Using Google Maps
      console.log(`https://google.pt/maps/@${latitude},${longitude}`);
    },
    function () {
      alert('Could not get your position');
    }
  );
}
