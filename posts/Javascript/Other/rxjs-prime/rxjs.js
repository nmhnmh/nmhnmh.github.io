var Rx = require('rxjs');

var count = 42;
var foo = Rx.Observable.create(function (observer) {
  console.log('Setup...' + observer.toString());
  observer.next(count++);
});

foo.subscribe(function (x) {
  console.log(x);
});
foo.subscribe(function (y) {
  console.log(y);
});
