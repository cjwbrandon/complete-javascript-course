'use strict';

const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// A Better Way: The Intersection Observer API
// Allows our code to observer changes to the way a certain target element intersects another element or the way it intersects the viewport

// callback({entries}, {observer})
const obsCallback = function (entries, observers) {
  // Entry -> IntersectionObserverEntry
  entries.forEach(entry => {
    console.log(entry);
  });
};

// Note: Event is invoked when moving both above and below the threshold
const obsOptions = {
  root: null, // Element the target is intersecting; null -> viewport
  threshold: [0, 0.2], // % of intersection before the observer callback is called, can pass multiple threshold using an Array
};

// Intersection Observer Object -> IntersectionObserver({callbackFunction}, {options})
const observer = new IntersectionObserver(obsCallback, obsOptions);

// .observe({targetElement})
observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else if (entry.isIntersecting) nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observer(header);
