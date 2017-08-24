const EventEmitter = require('events');
const e = new EventEmitter();

e.on('do-it', function(){
  console.log("Doing it now!");
});
e.on('do-it-later', function(){
  setImmediate(function(){
    console.log("Doing it later!");
  });
});
e.on('do-it-later-again', function(){
  process.nextTick(function(){
    console.log("Doing it later again!");
  });
});

console.log("Do something please: ");
e.emit('do-it');
e.emit('do-it-later');
e.emit('do-it-later-again');
e.emit('do-it');
console.log("Done!");
