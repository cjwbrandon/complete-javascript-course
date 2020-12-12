'use strict';

/////////////////////////////////
// The Event Loop in Practice

// Order
// Top level code will be ran first
// Promise -> Microtask queue > callback queue
console.log('Test start'); // 1
setTimeout(() => console.log('0 sec timer'), 0); // 5
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3
// Simulate Microtasks starving the Callback Queue
Promise.resolve('Resolve promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
}); // 4
console.log('Test end'); // 2

// Note: JS timers cannot be used for precise tasks because of this.
