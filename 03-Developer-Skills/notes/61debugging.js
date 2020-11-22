"use strict";

// Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    //C) FIX
    // value: Number(prompt("Degrees celsius:")),
  };
  // B) FIND
  console.log(measurement);
  // console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// Using browser
// Navigate to Debugger beside Console
// Add breakpoints by clicking on the left on the line
// Breakpoints runs the code to that point and view the state then

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;

  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    // debugger; // you can add breakpoints in code too
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTITY
console.log(amplitudeBug);

// Using the browser debugger is useful especially for loops
// Add Breakpoints in the loop and you can run each iteration and check the states
