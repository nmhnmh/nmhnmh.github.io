---
id: bash-here-documents
title: Bash Here Documents
date: 2016-11-14
---

# What Is Here Document?

Here Document enables you to "embed" some text chunks inside your scripts, without needing to worry about escaping, line breaks, concatenations etc. It is especially useful when you want to keep some configuration file chunks inside your script file or when you want to write a multiple line text chunk on command line.

Here Doc used on command line:
```bash
cat <<END
some text
another new line with variable ${PATH}
the third line 
END
```

Here Doc used inside script file, write Apache configuration file chunks:
```bash
[[file: site_conf.sh]]
```


But you must understand how does it work behind the scene, though it looks like a long paragraph of text, **Here Doc is passed as a temporary file, not a string**, so when using Here Doc, choose tools and utilities that works with files(like `cat`, `wc`, `less`), those who expecting string(like `echo`, `tr`) will not work!

An error seen many times: use echo with Here Doc
```bash
[[file: examples.sh]]
```

By default, Here Doc support variable interpolation, if you don't want this, add single quote to the opening Mark, Here Doc without variable interpolation is also called **Now Document**.

```bash
[[file: here-doc-now-doc.sh]]
```

# What Is Here String?

Here String is something different, it is a string, so generally less useful, thus less famous.
```bash
read a b c <<< "A B C"
echo $a $b $c
```

# Here Document In Other Languages

Languages like PHP, Perl support Here Doc and Now Doc that is kinda compatible with Bash.

Languages like C++ has raw string literals which serves similar purpose:
```cpp
const char *p = R"(
a
b
c
)";
```

Languages like Javascript also has string template:
```js
var name = 'jack';
console.log(`
    Hi, my name is: ${name}!
    Nice to meet you!
`)
```
