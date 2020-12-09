'use strict';

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
