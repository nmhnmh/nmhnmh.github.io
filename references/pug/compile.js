#!/usr/bin/env node
var pug = require('pug');
var glob = require('glob');
var fs = require('fs');
var argv = process.argv;

if(argv.length<3){
  console.log("Usage: compile.js <target1> <target2> <target3> ...");
} else {
  argv.shift();
  argv.shift();
  for(let arg of argv){
    var files = glob.sync(arg);
    for(let file of files){
      console.log(file)
      var output = pug.renderFile(file, {
        pretty: true,
        doctype: 'html',
      });
      fs.writeFileSync(file+'.html', output);
    }
  }
}
