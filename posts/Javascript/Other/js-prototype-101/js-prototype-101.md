---
id: js-prototype-101
title: JS Prototype 101
date:
tags:
  - Todo
---
constructor() and instance relationship
https://stackoverflow.com/questions/8453887/why-is-it-necessary-to-set-the-prototype-constructor
Object.create()
Object.prototype.__proto__
Object.setPrototypeOf()
`Object.prototype.constructor()`
class
extends
super

The raw prototypical way
```js
function Animal(name){
  this.name = name;
}
Animal.prototype.speak = function(word){
  console.log(this.name + ": " + word);
}
var a = new Animal("Marven");
a.speak('Hello');

function Dog(name){
  Animal.call(this, name);//call parent class constructor
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function(word){
  console.log("Dog " + this.name + ": " + word);
}

var d = new Dog("Robbin");
d.speak("wow");
```

