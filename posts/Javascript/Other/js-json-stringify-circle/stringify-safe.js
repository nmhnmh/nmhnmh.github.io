const stringify = require('./json-stringify-safe.js');
const circularObj = {};
circularObj.circularRef = circularObj;
circularObj.list = [ circularObj, circularObj ];

const book = {
  name: 'Js The Good Parts',
  author: 'Crockford',
  reader: {
    test: [
      circularObj
    ]
  }
};

console.log(stringify(circularObj, null, 2));
console.log(stringify(book, null, 2));
