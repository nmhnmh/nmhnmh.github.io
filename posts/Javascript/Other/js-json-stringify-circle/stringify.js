var circularObj = {};
circularObj.circularRef = circularObj;
circularObj.list = [ circularObj, circularObj ];
// TypeError: Converting circular structure to JSON
console.log(JSON.stringify(circularObj, null, 2));
