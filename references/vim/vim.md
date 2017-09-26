---
id: vim
title: Vim Cheatsheet
date: 2017-09-26
tags:
  - Vim
---

# Vim and Plguins Cheatsheet

## [vim-plug]: Modern Vim plugin manager

See all vim plug commands starts with `:Plug<Tab>`

command | usage
--------|------
:PlugInstall | install all registered plugins
:PlugUpgrade | self upgrade
:PlugUpdate | update managed plugins
:PlugStatus | check managed plugins
:PlugClean | find and delete invalid plugins
:PlugDiff | Examine changes from the previous update and the pending changes
:PlugSnapshot | Generate script to restore the current snapshot of the plugins

## [vim-surround]: Surroundings made easy

command | from | to | mode | note
---------|--------|-----------|-----------|----
`cs"'`     | "hello" | 'hello' | normal | change surrounding
`cs"<q>`     | "hello" | `<q>hello</q>` | normal | change surrounding
`cst"`     | `<q>hello</q>` | "hello" | normal | change surrounding from tag
`dst`     | `<q>hello</q>` | hello | normal | delete surrounding tag
`ds"`     | "hello" | hello | normal | delete surrounding
`ysiw[`     | hello | [ hello ] | normal | add surrounding(with space)
`ysiw]`     | hello | [hello] | normal | add surrounding(no-space)
`yssb`     | hello world | (hello world) | normal | wrap entire paragraph inside parenthesis
`yss)`     | hello world | ( hello world ) | normal | wrap entire paragraph inside parenthesis
`ysiw<em>`     | hello world | `<em>hello</em> world` | normal | wrap word inside tag
`S<p class="a">` | hello world | `<p class="muted">hello world</p>` | visual | add tags in visual mode

`:help surround` for more information.

[vim-surround]: https://github.com/tpope/vim-surround
[vim-plug]: https://github.com/junegunn/vim-plug
[vim-easy-align]: https://github.com/junegunn/vim-easy-align
