---
id: js-console-api
title: Javascript Console API
date: 2017-03-27
---

**console** is a special global object in js global namespace, available in both browser and nodejs envirment(though the nodejs version only provides basic features). Nowadays, it is getting even more powerful, more display options, groups, tables, timing support etc. This post is about the features and api of **console** object, using **Google Chrome** browser.

# A List of All console.* functions

To see all the console.* functions, just run `console.dir(console)`:
![console.* functions](console.api.png)

# String substitution and formatting

Almost all console.* api who accept string or labels support string substitution and formatting, a list of supported format specifier are listed below:

Format Specifier | Output
---|---
%s | Print the value as a string
%i or %d | print the value as an integer
%f | print as floating point value
%o | print as HTML-like object
%O | print as JS-like object
%c | apply css styles

# Logging and Display

* console.log()
* console.info()
* console.debug()
* console.warn()
* console.error()
* console.trace(): print a stack trace
* console.clear(): clears console output

These are all functions for logging output, but they support styles and variable substitutions, which makes them funny to use.

```js
console.log("Node count:", document.body.childNodes.length, "and the current time is:", Date.now());
console.log(1, 2, 3);
console.log(document);
console.log("%c Text with styles!", "color: red; font-size: large");
```

![console.log](console.log.png)
<img src="console.log.png" class="left right" alt="hello there">

# Visualization

* console.dir()
* console.dirxml()
* console.table()
* console.group()
* console.groupCollapsed()
* console.groupEnd()

`console.dir()` and `console.dirxml()` provide interactive data view, but in different formats, the former shows js object view, the later shows html element tree view. See the different result on `document.body`.

![console.dir() vs console.dirxml()](console.dir.dirxml.png)


`console.table()` display data with tables:

![console.table](console.table.png)

Note: Chrome's `console.table()` requires data being wrapped within an array, Firefox does't have the restriction, you could just give it an object.

`console.group()` is one of my favourite, usually console output get messy when there are many prints, grouping them together makes console output look way much better, especially when there are multiple chunks of data.

![console.group](console.group.png)

# Timming & Profile

* console.profile()
* console.profileEnd()
* console.time()
* console.timeEnd()
* console.timeStamp()
* ~~console.markTimeline()~~
* ~~console.timeline()~~
* ~~console.timelineEnd()~~

`console.profile()` starts a Javascript CPU profile, `console.profileEnd()` end an in progress profile and add the result to **Profile** panle in DevTools.

![console.profile](console.profile.png)
![console.profile.panel](console.profile.panel.png)

`console.time()` and `console.timeEnd()` gives you a timer to keep track of elapsed time, to use multiple timer, give each of them a unique label.

![console.time](console.time.png)

`console.timeStamp()` add an event to **Timeline** panel in DevTools when recording.

# Miscellaneous

* console.assert(expression, object | string)
* console.count()
* console.memory

`console.assert()` provides a basic assert utility, when exprion evaluates to false, it will call `console.error` to print the error message or object.

![console.assert](console.assert.png)

`console.count(label)` provide a simple yet useful counting mechanism, it takes an optional label, it will associate a counter to each unique label.
![console.count](console.count.png)

`console.memory` shows current tab's js process memory information.

![console.memory](console.memory.png)

# Fun

You can even print image inside console and have some fun.

See [console.image](https://github.com/adriancooney/console.image),[console.meme](https://github.com/escusado/console.meme), [console.snapshot](https://github.com/adriancooney/console.snapshot)
