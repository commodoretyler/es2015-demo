'use strict';
/* globals console */

// Arrow functions

const frameworks = ['React', 'Angular', 'Ember', 'Vue', 'Backbone'];
const modified = frameworks.map( (framework) => {
  return framework + '.js';
});

/*
const timeout = setTimeout( () => {
  console.log('timeout fired');
}, 1000);
*/

console.log(modified);
