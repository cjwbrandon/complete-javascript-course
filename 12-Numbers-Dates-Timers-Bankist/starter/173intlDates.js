'use strict';

// Internationalizing Dates -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
// Internationalization API -> Easily format numbers and strings according to different languages & countries
// Accomodate to different users around the world
const now = new Date();

// Intl.DateTimeFormat({locale}).format({date})
// List of Locale: http://www.lingoes.net/en/translator/langcode.htm
const date = new Intl.DateTimeFormat('en-US').format(now); // US
console.log(date);

const date2 = new Intl.DateTimeFormat('en-GB').format(now); // Great Britain
console.log(date2);

// More options
// Note: if you pass options, you must specify every field including default values such as day, year, month
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // returns month spelt out i.e. 8 -> August
  year: '2-digit',
  weekday: 'short', // wed
};
const datetime = new Intl.DateTimeFormat('en-US', options).format(now);
console.log(datetime);

// Getting the locale from the user's browser
const locale = navigator.language;
console.log(locale);
const dateDynamic = new Intl.DateTimeFormat(locale, options).format(now);
console.log(dateDynamic);
