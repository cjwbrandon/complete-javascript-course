'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

// Creating Dates
// 4 Ways

// 1st -> Get current time
const now = new Date();
console.log(now);

// 2nd -> parse date from date string
// Note: unless created by JS format itself, this can be quite unreliable
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

// 3rd -> pass in Date({year}, {month}, {day}, {hour}, {minute}, {second})
// Note: Month is 0 base
console.log(new Date(2037, 10, 19, 15, 23, 5));
// JS auto-corrects the date by adding extra days over
console.log(new Date(2037, 10, 33)); // Returns Dec 03

// 4th -> amount of milliseconds passed since the Unix time -> Jan 1 1970
console.log(new Date(0));
// Convert to day to million second -> 24 hours, 60 minutes, 60 seconds, 1000 ms
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Dates are Objects -> Methods
// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

// Get different parts of the date
// Note: Always use .getFullYear instead of getYear
console.log(future.getFullYear());
console.log(future.getMonth()); // 0 base
console.log(future.getDate()); // returns day of the month
console.log(future.getDay()); // returns day of the week -> 1 is Monday
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

// format to string
console.log(future.toISOString());

// get timestamp
console.log(future.toTime()); // MS since Jan 1 1970
console.log(new Date(future.toTime()));

// Current timestamp
console.log(Date.now());

// Set version -> Mutate date
future.setFullYear(2040);
future.setMonth(10);
// ... same for Date, Hours, etc
