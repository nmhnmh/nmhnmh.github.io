const EventEmitter = require('events');
const e = new EventEmitter();

e.on('say', function(words){
  console.log("Say: " + words);
});

e.on('write', function(words, count){
  console.log(`Write ${words} ${count} times!`);
});

e.on('what-is-this', function(){
  console.log(this);
});

e.on('what-is-arrow-this', ()=>{
  console.log(this);
});

e.emit('say', 'Hello!');
e.emit('write', 'Welcome', 3);
e.emit('write', 'Bonjour', 6);
e.emit('what-is-this');
e.emit('what-is-arrow-this');
