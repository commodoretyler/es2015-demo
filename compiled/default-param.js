'use strict';

// Default parameters

const forceParam = () => {
  throw new Error('Function requires at least 2 parameters.');
};

const multiply = (a, b = 1) => {
  return a * b;
};

/*
const multiply = (a, b = forceParam()) => {
  return a * b;
};
*/

console.log(multiply(5));
console.log(multiply(999, 400));