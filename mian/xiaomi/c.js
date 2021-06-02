// // a.js
// console.log('a starting');
// exports.done = false;
// const b = require('./b.js');
// console.log('in a, b.done = %j', b.done);
// exports.done = true;
// console.log('a done');

// // b.js
// console.log('b starting');
// exports.done = false;
// const a = require('./a.js');
// console.log('in b, a.done = %j', a.done);
// exports.done = true;
// console.log('b done');

//c.js
console.log('main starting');
const a = require('./a.js');
console.log(a, '-------')
const b = require('./b.js');
console.log(b, '-------')
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);


// node c.js