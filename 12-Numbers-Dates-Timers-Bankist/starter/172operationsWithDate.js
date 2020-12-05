`use strict`;

// Operations With Dates
// Calculations works -> converting dates to numbers converts them to their timestamps
// Timestamps can be used for calculations
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

const days2 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 04));
console.log(days2);
