---
id: jquery-plugin-templates
title: jQuery Plugin Templates
date: 2016-11-20
---

There are so many jQuery plugins out there, and so many articles about writing your own jQuery plugin. This post is another one with simple examples, and some short explainations.

jQuery plugins has some pattern(not rules), and plugins should follow it to achieve maxium compatibility, in fact, almost all plugins does follow the pattern. It is describled below:

* extends jQuery.fn and attach plugin function to it, so the plugin is accessible on all jQuery objects
* return original jQuery object at the end of plugin function, to suppport call chaining, be compatible with standard jQuery
* support optional and default plugin options, optional options are usually passed as parameters to plugin function

Some examples demonstrating the pattern:

```js
[[file: basic-template.js]]
```

```js
[[file: extend-template.js]]
```

```js
[[file: complex-template.js]]
```
