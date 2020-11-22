// Switch Statement
// Alternative to if else statement for simple cases

const day = 'monday';

// Uses strict equality
// Less used
switch (day) {
  case 'monday': // day === 'monday
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break; // Without break, Code continues executing -> tuesday -> wednesday -> until break
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday': // specify case right after to execute same code
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log("Not a valid day!")
}

// Using if else statement
// a lot of repetitive code
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' ||| day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' ||| day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}