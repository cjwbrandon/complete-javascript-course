'use strict';

// Event Propagation
// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

// Bubbling Phase -> when you click, all parent Elements gets executed too -> logging e shows that the Event all originates from the same Target Element
document.querySelection('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);

  // Stop propagation -> avoid if possible
  // e.stopPropagation();
});
// When you click on the parent element, only, the child element does not get executed.
document.querySelection('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

// To set to Capturing Phase -> .addEventListener({event}, {function}, {useCapturing})
document.querySelection('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true
);
