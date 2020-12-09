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

// Rendering Workout Input Form
let map, mapEvent;

if (navigator.geolocation) {
  navigator.geeolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const coords = [latitude, longitude];

      // ID of the HTML Element for the map
      // L is the namespace for Leaflet
      // .setView({coordinates}, {zoom})
      map = L.map('map').setView(coords, 13);
      // console.log(map); // View prototype chain and other conventions

      // Map is made up of small tiles
      // You can find different styles of the map - https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Handling clicks on map: .on is a leaflet method
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus(); // Place the cursor on Distance directly
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
}

// Submit form
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear input fields
  inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
    '';

  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
