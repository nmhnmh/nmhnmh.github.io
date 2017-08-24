---
id: learning-python
title: Learning Python
edition: 5
date: 2017-08-24
isbn: "9781449355739"
publisher: O'REILLY
tags:
  - python
---
<img src="cover.jpg" alt="Book Cover" class="book-cover"> 

# Modules and Packages

## **Module** vs **Package**
Module is an importable component in python. It could be any python source file, or it could be python extensions written in other languages like C or C++. Package to Module is what Directory to File, although not exactly the same. In real world use cases, package is used to reuse and distribute code, since it is more flexible, powerful in many ways.

## **Regular Pakcages** vs **Namespace Packages**

## **Normal Imports(import outside packages)** vs **Package Imports(import inside packages)**

Normal imports are all **absolute imports**, Package Imports are **relative-then-absolute imports** in version before python3.3 and **absolute-only** in versions after python3.3.

## The rule of thumb for python imports

1. First, what is the running python version?

    Python 2.x has old style python import, no relative import.

2. Is it import inside packages?

3. Is it relative import or absolute import?

## **Relative Import** vs **Absolute Import** vs **Relative-then-Absolute Import**

### Relative Imports searches only inside current package

The only valid relative import is like:
```python
from . import xxx
#or
from .. import xxx
#or
from .dir import xxx
```
It is always a *from* style import, the from string always starts with one or two dots. And only use relative imports inside a package, or it will generate an error.
An **ImportError** will be generated if search fails inside current package.

### Absolute Imports searches only paths inside **sys.path** list

Absolute imports looks like this:
```python
import os
from os import path
from os.path import isdir
```

### Relative-then-Absolute Imports searches current package first, if not found, then searches **sys.path**

This Relative-then-Absolute behaviours is only available in Python 2.x, it has the exactly same style with absolute imports.

## Namespace packages

This is only available in Python3.3+.
Namespace package requires no **__init__.py** files, and it is a vritual package, its content could span multiple phisical locations.

## Tips about modules and packages

1. Hide variables using underscore name styles or with **__all__** special varaible
2. **__all__** could be used inside a module or inside **__init__.py** file
3. **__name__** is a special variable inside a module
4. **__future__** is another special variable
5. **sys.path** is package or module search path, **sys.modules** contains all loaded packages or modules
6. **__dict__**, **__name__**, **__file__** is a special attribute on a module object, to see more, use **dir()** function

## Other Tips
1. **types** package is a special package containing types utility for comparing and dynamic creation data of different types
