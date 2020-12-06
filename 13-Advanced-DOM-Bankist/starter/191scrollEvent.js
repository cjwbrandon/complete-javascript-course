'use strict';

///////////////////////////////////////
// 191 Implementing a Sticky Navigation: The Scroll Event
// Sticky Navigation
// Not efficient and should be avoided -> large number of events invoked
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > intialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
