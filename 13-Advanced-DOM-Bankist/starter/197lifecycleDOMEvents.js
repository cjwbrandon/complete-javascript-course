'use strict';

// Lifecycle DOM Events
// The moment the page is first accessed till the user leaves

// DOM Content Loaded
// Event fired by the document the moment the HTML is completely parsed
// This includes downloading and executing all scripts
// Note: Does not wait for images and external resources to load
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});
// Should we wrap our entire code in this Event listener to ensure the HTML is loaded before JS?
// No -> We attached our Script tag at the end of the HTML script -> Last to be read and executed -> HTML is already parsed

// Load Event -> External resources and images are loaded
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// Before Unload Event -> Before the User is about to leave the page
// Do not abuse -> use only when necessary e.g. mid-way filling up a form, etc where data can be loss
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault(); // Some browser require
//   console.log(e);

//   // Leaving confirmation
//   e.returnValue = '';
// });
