Js code is kind of different, and it has some special patterns.

Async callback pattern
--------------------------------------------------------------------------------
it('should have a name', function(done){
  ...
  done();//test is done
})

gulp.task('build', function(done){
  ...
  done();//task is done
})

Function as a value
--------------------------------------------------------------------------------
```javascript
var hello = function(name){
  console.log("Hello " + name);
}
```

Node.js style callback
--------------------------------------------------------------------------------
fs.readFile('test.txt', function(err, data){
  //err will be null if everything all right
})

No implicit exit for script
--------------------------------------------------------------------------------
Unlike other script language such as python or php, the script process will not
exit at the end of the script, it will hang there. To exit you need to call 
`process.exit()` explicitly.
