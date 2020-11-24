'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// When we use querySelector with a selector with multiple elements, it only selects the first one
// Must use querySelectorAll -> returns sth that works like an array
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  // Manipulate the class of elements
  // Note: Don't have to put '.' before the class
  // Main way to manipulate styles on web pages -> using classes
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // Alternative -> manipulate the style, however more work
  // modal.style.display = 'block';

  console.log('Button clicked');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Opening the window
for (let i = 0; i < btnsOpenModal.length; i++) {
  // Attach an event listener to each button
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Closing the window when clicking on the 'cross' button
btnCloseModal.addEventListener('click', closeModal);
// Closign the window when clicking on the overlay
overlay.addEventListener('click', closeModal);

// Keyboard events -> Global events (do not happen on 1 specific element)
// keyup (fired when you lift off the key), keydown (fired when you hit the key), keypress (fires continuously as you keep the key pressed)
document.addEventListener('keydown', function (e) {
  // Information on which key is pressed is stored in an object automatically
  if (e['key'] === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
