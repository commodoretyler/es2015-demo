// http://exploringjs.com/es2016-es2017/

'use strict';

// Array.includes()

const arr = ['expedia', 'orbitz', 'cheaptickets', 'hotwire', 'hotels', 'trivago'];
// const arr = ['expedia', NaN, 'cheaptickets', 'hotwire', 'hotels', 'trivago'];
// const arr = ['expedia', 'orbitz', , 'hotwire', 'hotels', 'trivago'];

let expedia = arr.includes('expedia');
let priceline = arr.includes('priceline');

// arr.includes('expedia') = arr.indexOf('expedia') > -1
// includes will also find NaN and undefined

console.log('expedia is included: ', expedia);
console.log('priceline is included: ', priceline);

// Exponentiation operator

// const squared = 3 ** 2;
// console.log(squared);