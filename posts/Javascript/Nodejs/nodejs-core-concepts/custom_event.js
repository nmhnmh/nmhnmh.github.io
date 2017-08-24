const EventEmitter = require('events');

class MyEmitter extends EventEmitter{
  constructor() {
    super();
    //say hello
    this.on('hello', ()=>{
      console.log("Hello!");
    });
    //count to three
    this.on('count', ()=>{
      console.log("1");
    });
    this.on('count', ()=>{
      console.log("2");
    });
    this.on('count', ()=>{
      console.log("3");
    });
    //say something
    this.on('say', ()=>{
      console.log("Firstly...");
    });
    this.on('say', ()=>{
      console.log("Secondly...");
      // handlers after this one will not be called
      throw new Error('Ops!');
    });
    this.on('say', ()=>{
      console.log("Lastly...");
    });
  }
}

try{
  const my = new MyEmitter();
  console.log("Say Hello:");
  my.emit('hello');
  console.log("Counting:");
  my.emit('count');
  console.log("Say something:");
  my.emit('say');
} catch(e){
  console.log(e.message);
} finally{
  console.log("Done!");
}
