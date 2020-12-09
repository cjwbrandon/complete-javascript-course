'use strict';

// Displaying a Map Using Leaflet Library
// 1. Using a 3rd party library -> Include it to our site. Download, use a hosted version or use a JS package manager

if (navigator.geolocation) {
  navigator.geeolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const coords = [latitude, longitude];

      // ID of the HTML Element for the map
      // L is the namespace for Leaflet
      // .setView({coordinates}, {zoom})
      const map = L.map('map').setView(coords, 13);
      // console.log(map); // View prototype chain and other conventions

      // Map is made up of small tiles
      // You can find different styles of the map - https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Event handler: .on is a leaflet method
      map.on('click', function (mapEvent) {
        // console.log(mapEvent);
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
    },
    function () {
      alert('Could not get your position');
    }
  );
}
