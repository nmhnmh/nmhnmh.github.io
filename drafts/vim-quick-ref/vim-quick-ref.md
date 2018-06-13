---
id: vim-quick-ref
title: VIM速查手册
date: 2018-06-12
---

Vim是我最喜欢的文本编辑器，也是用的最多的。Vim是个很特别的编辑器(Vim和Emacs应该是文本编辑器领域的两个特殊的存在)，他的操作方式非常特别，合理使用的话，能大大提高编辑效率和乐趣，但是不好的地方就是他过于复杂，以至于有专门的书来介绍Vim编辑器的使用，这确实有点疯狂，按理说一个文本编辑器是不应该有这么高的学习门槛的。这篇的目的就是整理出Vim编辑器的一些核心概念和用法（这并不是一片适合初学者的Vim入门指南，强烈推荐Vim自带的入门教程`:h vimtutor`，或者其在线版本[vimtutor](http://vimhelp.appspot.com/usr_01.txt.html)），以便日后能时常查阅参考，从而能够时刻保持对Vim的熟练使用。

# 获取帮助和信息

VIM的帮助系统是非完善的，也是系统学习VIM最权威最完整的信息来源。通过`:help <topic>`命令，可以获得关于某个主题、命令、操作的详细说明。VIM的文档撰写格式也很特别，但是格式非常严密，文档内容也很详细。日常使用中遇到问题，可以第一时间查阅该帮助系统的里面的文档，所以我觉得这是应该首先掌握的，列在第一条。除此之外，VIM命令本身也有一些命令行参数，关于这些命令行参数的完整列表，可以通过`vim --help`来获取到。VIM的文档是带有简单格式的纯文本，一般都是在VIM编辑器内直接打开阅读，跳转和翻页都是用的普通的VIM命令，当然也可以选择对于初学者更加友好的在线版本[vimhelp](http://vimhelp.appspot.com/)。虽然和帮助系统无关，但是有一些命令也能给我们提供非常有用的信息，比如`:version`可以显示当前Vim的版本号和功能列表等信息，`:script`可以显示当前加在的插件或者Vim脚本，`：messages`可以显示运行或者启动过程中的一些提示信息。很多时候，我们可能会希望通过这些命令来获得这些信息来帮助我们解决一些问题。

# 编辑模式(Mode)

## Insert Mode
Insert special character like horizontal tab with **<C-v>+^I** or **<C-k>+HT**.

## Command Mode

## Commands

<C-A> or <C-X> to increase or decrease a number. 
With the help of tpope's [speeddating]() plugin,
it could be used on date strings like "1999-01-02".

# 寄存器(Registers)

Registers are flexible and powerful in Vim, it is use for copy/paste, macros,
history and many others. You can inspect all register values with **:registers**.
Insert the content of the register in **insert model** with <C-r> plus register name.
In **normal model**, insert register content with normal copy paste commands.
There are caveats in Vim's register design, the copy/paste/cut concept is not working
in reasonably, see more in [Registers: the Good, the Bad, and the Ugly Parts](vimcast-register-good-bad-ugly).
 And [vim-easyclip]() provides some work-arounds for Vim's registers.

## Special registers
- **@-**: small delete register
- **@/**: last search pattern
- **@:**: last Ex command
- **@.**: last insert command
- **@%**: last filename(relative to working directory) of current buffer

# 缓冲区(Buffer)

# 窗口分割(Split)

# 窗口标签页(Tabs）

# 宏命令 (Macros)

# 在文本中移动 (Movements)

# Normal Mode下的命令

# 简化命令

简化命令|可被替代的命令|备注
----|----|----
`C`|`c$`|
`s`|`cl`|
`S`|`^C`|
`I`|`^i`|
`A`|`$a`|
`o`|`A<cr>`|
`O`|`ko`|

# 字符串模式匹配 (Pattern & Regular Expressions)
================================================================================
Vim has support for several different flavours of RegExp.
Use **/v** to use (){} etc as normal characters, save the trouble for escaping.

# Vim高效编辑的原理

## 快速高效移动光标

## 避免低效率操作

## 将操作原子化、步骤化，然后反复重复之前的操作

[vimcast-register-good-bad-ugly]: http://vimcasts.org/blog/2013/11/registers-the-good-the-bad-and-the-ugly-parts/
[vim-easy-clip]: https://github.com/svermeulen/vim-easyclip
[speeddating]: https://github.com/tpope/vim-speeddating 
[learn-viml-the-hard-way](http://learnvimscriptthehardway.stevelosh.com/)
