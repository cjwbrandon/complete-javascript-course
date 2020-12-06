'use strict';

// Event Delegation: Impelementing Page Navigation

// Adding to each element
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    // We often put the id of the element we want to scroll to in href
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// Event Delegation -> putting the event listener to a parent Element that consists of all the Elements
// We can catch where the event originated from as well using e.target
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    // We often put the id of the element we want to scroll to in href
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Important use case for Event Delegation
// For Elements that are not Inserted at Runtime
// You cannot add eventListeners on events that do not exist yet
// Event delegation is often use to handle these situations
