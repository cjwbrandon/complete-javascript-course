'use strict';

// Selecting, Creating and Deleting Elements

// Selecting entire document
// Don't need to write any selector
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Others -> Selecting single and multiple
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // returns a NodeList
console.log(allSections);

document.getElementById('#section--1');
// HTMLCollection -> Live Collection -> Dom Changes, this selection is updated automatically
const allButtons = document.getElementsByTagName('button'); // returns HTMLCollection
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // returns HTMLCollection

// Creating and inserting elements
// .insertAdjacentHTML

// Creating and Inserting elements more programmatically
// Creating a DOM object but not inserted yet
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Inserting as a live Element in the DOM
// Prepend -> adding as first child
header.prepend(message);
// Append --> Adding as last child
// Note: we can use prepend and append to move elements as well. DOM Elements are unique -> if they already exist, it will be moved instead of inserted
// header.append(message);

// Inserting multiple copies --> Copy the element
// {DOMObject}.cloneNode({copyChildElements})
header.append(message.cloneNode(true));

// Inserting as Siblings Objects
// header.before(message);
// header.after(message);

// Deleting elements -> .remove method
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();

    // Old method -> DOM traversing
    message.parentElement.removeChild(message);
  });
