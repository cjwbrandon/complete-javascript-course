// Truthy and Falsy Values
// Falsy are values that are not exactly False but become False when converted to Boolean values
// 5 falsy values: 0, '', undefined, null, NaN
// Everything else are Truthy values

// Falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));

// Truthy values
console.log(Boolean('Jonas'));
console.log(Boolean({}));

// In practice, conversion to boolean is inplicit not explicit --> using type conercion
// When? Logical Operators & Logical Contexts (if else statements)
// If else
const money = 0;
// in a logical context, JS will try to coerce any value in the condition to a Boolean value
if (money) { // money get coerce to False
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job!`);
}

// Check if something exists
let height; // undefined
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED")
}
// Note: if height = 0, we still get undefined
// Fixed using logical operators