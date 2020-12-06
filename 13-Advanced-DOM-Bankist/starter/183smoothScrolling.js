'use strict';

// Implementing Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // returns DOMRect
  console.log(s1coords);

  // Coordinates
  // DOMRect
  // x -> dist from left, y -> dist from top, top, bottom, left, right
  // Note: x and y are relative to the visible viewport
  console.log(e.target.getBoundingClientRect());

  // Scrolling position
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling -> .scrollTo({x}, {y})

  // OLD SCHOOL WAY
  // Top and left are relative to viewport but not the document -> Add currents scroll coordinates
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // Nice and Smooth scrolling -> parsing an object into .scrollTo()
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    bahavior: 'smooth',
  });

  // MODERN WAY -> {element}.scrollIntoView({})
  section1.scrollIntoView({ behavior: 'smooth' });
});
