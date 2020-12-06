'use strict';

// DOM Traversing -> Walking through the DOM
// Selecting an Element based on another Element
// Selecting direct Child or Parent Elements, Structure of the DOM
const h1 = document.querySelector('h1');

// Going downwards: child
// Selecting only children elements of a Selector
console.log(h1.querySelectorAll('.highlight'));
// Direct child nodes -> Can be text, comments, elements, etc
console.log(h1.childNodes); // NodeList
// Returns only Direct Children Elements
console.log(h1.children); // HTMLCollection

// First and Last Element Child
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
// Direct parents
console.log(h1.parentNode);
console.log(h1.parentElement);
// Non-direct parents
// Finding closest with a Selector
h1.closest('.header').syle.background = 'var(--gradient-secondary)';
// Note: can select itself
h1.closest('h1').syle.background = 'var(--gradient-primary)';

// Going sideways: siblings
// Element
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
// Node
console.log(h1.previousSibling);
console.log(h1.nextSibling);

// Need all Siblings -> move to parent then back down
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
