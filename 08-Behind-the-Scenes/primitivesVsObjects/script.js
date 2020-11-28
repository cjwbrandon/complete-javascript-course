'use strict';

// Source of confusion
// Primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30 -> assigned before age was changed to 31

// Object
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

// Both object's age is changed to 27
console.log('Friends:', friend);
console.log('Me', me);

// Primitive Types
// Each piece is saved to its own piece of memory in the Call Stack
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
// Does not copy but rather reference to the original object (jessica)
// References the same Memory address in the Heap
const marriedJessica = jessica;

// Why can we change a value in a Variable declared using 'const'?
// const restricts the value in the call stack from being change
// For reference type, the value is the Memory address of the Heap and thus this stays constant. When changing, we are changing the object in the Heap which is not restricted.
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('Before marriage', marriedJessica);

// This will not work as if you declare a new object -> new memory address in the heap -> const restricts value from changing
// You cannot reassigning a completely new object
marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  // object in an object
  family: ['Alice', 'Bob'],
};

// Creates a new object
// Limitation: .assign only works on the first level -> Shallow copy
// Objects in the Object will not get copied
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

// Note: Primitive values are preserved while Objects are still linked
console.log('Before marriage', jessica2);
console.log('Before marriage', jessicaCopy);

// Deep Clone: later section but we often have to use an external library
