'use strict';

// Lazy Loading Images -> Improves performance
// Using Intersection Observer
// Select Elements with a particular property
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src -> Loads and display behind the scenes
  entry.target.src = entry.target.dataset.src;

  // Load event can be listened
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserver(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observer(img));
