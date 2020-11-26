'use strict';

// global scope
function calcAge(birthYear) {
  // function scope - includes args
  const age = 2037 - birthYear;

  // accessing a parent (global) variable
  console.log(firstName);

  function printAge() {
    // accessing parent and global variables
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    // block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      // declaring a variable that is in the parent scope
      // you can have different variables with the same name in different scopes
      const firstName = 'Steven';

      // uses the variable in the current scope
      // JS variable lookup searches from the current scope -> parent scope -> global scope
      // If they find in the current scope, they don't lookup to the earlier scopes
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      let temp1 = 'abc';
      var millenial = true;
      function add(a, b) {
        return a + b;
      }

      // Reassigning outer scope variable -> works
      output = 'NEW OUTPUT!';
    }
    // variable is changed
    console.log(output);

    // const and let are block scoped -> cannot be accessed outside
    // console.log(str); // error
    // console.log(temp1); // error
    // add(2, 3); // functions are block scope under strict mode! -> error
    console.log(millenial); // var variables are not block scoped
  }
  printAge();

  return age;
}

// global variable
// You can access variables called later as the Global EC is run first.
// Function EC is ran only when called, thus then, the firstName variable is already declared.
const firstName = 'Jonas';
calcAge(1991);

// Scope chain is a 1-way street. You cannot access child/inner scoped variables
// console.log(age); // error
// printAge(); // error
