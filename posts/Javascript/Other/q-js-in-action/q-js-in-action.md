---
id: q-js-in-action
title: Q.js In Action
date:
summary: "Promise is a powerful feature in modern js. This post introduces one of the most popular js Promise implementation q.js"
tags: 
  - Promise
  - q.js
  - Todo
---


Q.js Promise chaining
================================================================================

Promise could be chained in two ways: with or without nested handlers

```javascript
return getUserName()
.then(function(username){
  return getUser(username);
})
.then(function(user){
  //do something with user
  //username is not available here
})
```
or:

```javascript
return getUserName()
.then(function(username){
  return getUser(username)
  .then(function(user){
    //do something with user
    //both user and username is available
  });
})
```
The second example has nested then handlers, it reminds me of the callback hells,
so I prefer to use the flat one, but as you can see, if you nest the hanlers, you
can capture more results, like the username in the example above, if you use the
flat one, you don't have access to the username in the final handler.

Q.js Promise combination
================================================================================

## Q.allSettled() ##

## Q.any() ##

## Q.all() ##
This method will create a new Promise based on multiple existing Promise.
The fulfilled value for the new Promise will be an array of all its source promises.
If any source Promise is rejected or failed somehow, the new Promise will fail.
To wait for all promises to be settled, use `Q.allSettled()`.

## Q.spread() ##

```javascript
Q.when(['https://github.com', 'http://vimcast.org', 'https://www.bing.com'])
.then(function(urls){
  //return a mixture of values or promise, Q.spread() will call Q.all()
  //to get an array of resolved values, no need to call Q.all() manually.
  return [
    'Titles',
    getUrlTitle(urls[0]),
    getUrlTitle(urls[1]),
    getUrlTitle(urls[2])
  ];
})
.spread(function(header, github, vimcast, nytimes){
  console.log(chalk.bold.green(header));
  console.log(chalk.green(extractTitle(github.text)));
  console.log(chalk.green(extractTitle(vimcast.text)));
  console.log(chalk.green(extractTitle(nytimes.text)));
}, function(err){
  console.log(chalk.red(err.message));
})
```

## Q.when() ##

## Q.then() ##

Error Handling
================================================================================

## Q.fail() ##
`Q.fail()` is a ultimate error handler, it handles rejected promised values wihtout
error handler, it also handles errors thrown inside resolve handler or reject hanler.

```javascript
doSomething().fail(function(err){
  //when the promise has no handlers, fail() will get the error
  //but the resolved value is not handled here
})
```
is same as:
```javascript
doSomething()
.then(function(v){
  //do something
  thow new Error('Resolve handler error!');
}, function(err){
  //do something 
  thow new Error('Reject handler error!');
})
.fail(function(err){
  //Get all the errors
})
```

//TODO(minghao, 2016-08-25 15:14): What about .catch(), what is the difference

## Q.fin() ##

```javascript

var outputPromise = getInputPromise().fin(function () {
    // do some cleanup, close files, database connections, stop servers etc
});
```

`Q.fin()` is like the `finally` block in traditional `try...catch` block.
It will be called at the end, with no arguments. The result of `getInputPromise()`
will be passed to outputPromise unless the finally handler fails. Any value returned
by the finally handler or resolved value of its returned promise will be ignored.
Any error thrown by the finally handler or its returned promise will be forwarded
to the outputPormise.

Note: `Q.fin()` doesn't handle any error.

Promise chain
================================================================================

## The End of chain ##

At the end of promise chain, if any error occurred and is not handled, it be silently
ignored, this is bad. So it is recommended to either add a finally `fail()` handler,
or call `done()` at the end of the chain, calling `done()` will ensure that if
there is any unhandled issues, it will be rethrown and reported.

## Make a Promise ##

### Q.fcall() ###

```javascript
return Q.fcall(function(){
  return 'ok';
});
```

### Q.defer() ###

```javascript
var doSomething = function(){
  var df = Q.defer();
  fs.readFile("foo.txt", "utf-8", function (error, text) {
    if (error) {
      deferred.reject(new Error(error));
    } else {
      deferred.resolve(text);
    }
  });
  return df.promise;
}
```

### Q.Promise ###

```javascript
return new Q.Promise(function(resolve, reject, notify){
  //do some job...

  if(all_right){
    resolve('ok');
  } else {
    reject(new Error('Something wrong!'));
  }
})
```

Q.js promise method static equivalent
================================================================================

The static alternative for `then()` is `Q.when()`.

```javascript
function eventualAdd(a, b) {
    return Q.spread([a, b], function (a, b) {
        return a + b;
    })
}
```

```javascript
return Q.all(['a', 'b']);
```
and 

```javascript
return Q.fcall(function(){
  return ['a', 'b'];
})
.all();
```
are equivalent.

Miscs
================================================================================

Convert a partial promise to a q.js promise:
```javascript
return Q($.ajax(...));
```
```javascript
return Q.invoke($, 'ajax', ...);
```

Some times, code could be more concise if we use promise as a proxy for resolved
values:
```javascript
return Q.fcall(function () {
    return [{ foo: "bar" }, { foo: "baz" }];
})
.then(function (value) {
    return value[0].foo;
});
```
vs
```javascript
return Q.fcall(function () {
    return [{ foo: "bar" }, { foo: "baz" }];
}).get(0).get("foo");
```
what about error handling?

Q.js with Node.js
================================================================================

`Q.nfcall()` and `Q.nfapply()` works with node.js style callback pattern
`function(err, result)`.

```javascript
return Q.nfcall(FS.readFile, "foo.txt", "utf-8");
return Q.nfapply(FS.readFile, ["foo.txt", "utf-8"]);
//with methods
return Q.ninvoke(redisClient, "get", "user:1:id");
return Q.npost(redisClient, "get", ["user:1:id"]);
//create reusable wrappers
var readFile = Q.denodeify(FS.readFile);
return readFile("foo.txt", "utf-8");
var redisClientGet = Q.nbind(redisClient.get, redisClient);
return redisClientGet("user:1:id");
//node.js + deffered
var deferred = Q.defer();
FS.readFile("foo.txt", "utf-8", deferred.makeNodeResolver());
return deferred.promise;
```

Q.js debug
================================================================================

`Q.longStackSupport = true;` or set `Q_DEBUG=1` environment variable will make
stack trace more readable.
