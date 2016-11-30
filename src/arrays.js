'use strict';
/* globals console */

// Arrays

// Iterable
const frameworks = ['React', 'Angular', 'Ember', 'Vue', 'Backbone'];

const modified = Array.from(frameworks, (framework) => {
  return framework + '.js';
});

console.log(modified);

/*
const timeout = setTimeout( () => {
  console.log('timeout fired');
}, 1000);
*/

// Non-interable
const frameworksArrLike = {
  length: 5,
  0: 'React',
  1: 'Angular',
  2: 'Ember',
  3: 'Vue',
  4: 'Backbone'
};

const iterableFrameworks = Array.from(frameworksArrLike);
//console.log(iterableFrameworks);
for (const f of iterableFrameworks) {
  //console.log(f);
}

const finder = Array.from(frameworks).find( (f) => f === 'Angular');

//console.log(Array.from(iterableFrameworks.keys()));
//console.log(Array.from(iterableFrameworks.entries()));
//console.log(finder);

