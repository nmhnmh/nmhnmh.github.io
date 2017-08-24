const EventEmitter = require('events');
const e = new EventEmitter();

try{
  // without an error handler defined
  // errors will throw and may halt the process
  // if not catched
  e.emit('error');
} catch(e){
  console.log('Global Error, ' + e);
}

// an error handler will prevent the error event
// from being thrown
e.on('error', function(e){
  console.log('Oops, something is wrong: ' + e.message);
});

// now the error event will not throw
e.emit('error', new Error("It's ranning outside!"));
