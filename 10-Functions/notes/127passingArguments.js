'use strict';

// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 245678645,
};

const checkIn = function (flightNum, passenger) {
  // Bad practice to change the parameters of a function
  // Done as an example only
  flightNum = 'LH999'; // flightNum is a copy -> does not affect global flight
  passenger.name = 'Mr. ' + passenger.name; // passenger still points to jonas Object in Heap -> Gets a copy of the reference (still points at the same Object)

  if (passenger.passport === 245678645) {
    alert('Check in');
  } else alert('Wrong passport!');
};
checkIn(flight, jonas);
console.log(flight); // Still LH234 -> Call Stack
console.log(jonas); // Object name changed -> Heap

// Passing arguments in a function
// Take note of the behaviour of passing Objects and Primitive types
const flightNum = flight;
const passenger = jonas;

// Issue: 2 functions calling the same object
// Easy to introduce bugs where the underlying Object gets mutated
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(jonas);
checkIn(flight, jonas); // returns wrong passport

// Passing by value & Passing by Reference
// JS does not have passing by reference
// It seems like we are passing a reference in JS
// But this reference is still a value itself
// IMPORT DISTINCTION: We pass a reference in JS but not pass BY reference
