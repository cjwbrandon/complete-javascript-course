'use strict';

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Styles -> set inline
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Accessing styles -> Only works for inline styles
console.log(message.style.height);
console.log(message.style.backgroundColor);

// Getting non inline styles
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// Changing CSS custom properties (variables)
// :root -> equivalent to document in JS
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// Accessing
const logo = document.querySelector('.nav__logo');
// Standard properties
console.log(logo.alt);
console.log(logo.src); // returns absolute URL
console.log(logo.className);
// Non-standard properties
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Solution

// Setting standard properties
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);
// Setting non-standard properties -> .setAttribute({key}, {value})
logo.setAttribute('company', 'Bankist');

// URLs
console.log(logo.src); // returns absolute URL
console.log(logo.getAttribute('src')); // returns relative URL

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
// Note: transform to camel case
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use -> Override classes there and only works with 1 class
// logo.className = 'jonas';
