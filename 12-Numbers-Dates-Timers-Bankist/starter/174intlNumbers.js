'use strict';

// Internationalizing Numbers
const num = 3884764.23;

// Intl.NumberFormat({locale}).format({value})
console.log('US: ', new Intl.NumberFormat('en-US').format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY').format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);

// Options -> explore options in MDN documentation
let options = {
  style: 'unit',
  unit: 'mile-per-hour',
};
console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

let options = {
  style: 'currency',
  currency: 'EUR',
  // useGrouping: false, // separators
};
console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
