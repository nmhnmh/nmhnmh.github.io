---
id: pug-reference
title: Javascript Pug Template Cheatsheet
date: 2016-12-19
tags:
  - Javascript
  - Todo
---

This is a reference for Pug template language only(based on official docs), it tends to be short and compact.
For API or more detailed reference, refer to [Pug][] website.
This reference contains latest Pug features only, deprecated features and some dangerous features
are not included, again, got to [Pug][] if you need these.

Html
================================================================================

Tags
--------------------------------------------------------------------------------
```pug
[[file: tag.pug]]
```

Attributes
--------------------------------------------------------------------------------
```pug
[[file: attributes.pug]]
```

Texts
--------------------------------------------------------------------------------
```pug
[[file: text.pug]]
```
output is:

Class Literals & ID Literals
--------------------------------------------------------------------------------
```pug
[[file: literal.pug]]
```
output is:

Logic And Control
================================================================================

Code
--------------------------------------------------------------------------------
```pug
[[file: code.pug]]
```
output is:

Conditionals
--------------------------------------------------------------------------------
```pug
[[file: conditional.pug]]
```
output is:

Switch & Case
--------------------------------------------------------------------------------
The difference between pug `switch` and js `switch` however is that while fall through happens whenever a break statement is not explicitly included in JavaScript, in Pug it only happens when a block is **completely missing**. If you would like to not output anything in a specific case, add an explicit unbuffered break to avoid fall through.
```pug
[[file: switch_case.pug]]
```
output is:

Loops & Iteration
--------------------------------------------------------------------------------
```pug
[[file: loop_iteration.pug]]
```
output is:

Templates
================================================================================

Comments
--------------------------------------------------------------------------------
`//` to include normal comment, `//-` to include hidden comment(will not show up in output).
```pug
[[file: comments.pug]]
```
output is:

Interpolation
--------------------------------------------------------------------------------
```pug
[[file: interpolation.pug]]
```
output is:

Extends & Inheritance
--------------------------------------------------------------------------------
Use `block` to defined named blocks in a template, use `extends` to inherit from
an existing template, and use `block` to define named blocks to override parent blocks.
If not overrided, the default content from parent template will be used.
Pug also allows **replace** (default), **prepend**, or **append** for blocks.

```pug
[[file: layout.pug]]
[[file: extends.pug]]
```

Mixins
--------------------------------------------------------------------------------
```pug
[[file: mixins.pug]]
```
For more advanced `mixin` usages, go to [Pug][] docs.

Filters
--------------------------------------------------------------------------------
Filters let you use other languages(markdown, coffeescript, sass, less, typescript etc) within a Pug template. They take a block of plain text as an input. To pass options to the filter, add them inside parentheses after the filter name:
```pug
:markdown-it(linkify langPrefix='highlight-')
  # Markdown

  Markdown document with http://links.com and

  ```js
  var codeBlocks;
  ```
script
  :coffee-script
    console.log 'This is coffee script'
```
custom filters are also supported, refer to [Pug][] docs for more information.

Includes
--------------------------------------------------------------------------------
Includes allow you to insert the contents of one file(pug, html, css, js, txt, xml etc) into another.
If included file is pug, its rendered output will be included, if not, the raw content will be included.

[Pug]: https://pugjs.org/api/getting-started.html
