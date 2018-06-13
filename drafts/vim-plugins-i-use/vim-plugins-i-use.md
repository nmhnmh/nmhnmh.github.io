Basic configuration for (vim and gvim)
================================================================================

Basic editor settings: **.vimrc**
--------------------------------------------------------------------------------
Essential setting for vim editor itself.

Editor settings for GUI: **.gvimrc**
--------------------------------------------------------------------------------
Essential setting for GUI, this is used for MacVim or Gvim. It is sourced by .vimrc.

Vim Plugins Management with [Plug](https://github.com/junegunn/vim-plug)
--------------------------------------------------------------------------------
Install, uninstall, update plugins.

Vim enhancements
================================================================================

[tpope/vim-fugitive](https://github.com/tpope/vim-fugitive)
--------------------------------------------------------------------------------
Git inside Vim.

[tpope/vim-repeat](https://github.com/tpope/vim-repeat)
--------------------------------------------------------------------------------
Make Vim repeat more powerful, support repeat for plugin commands.

[tpope/vim-surround](https://github.com/tpope/vim-surround)
--------------------------------------------------------------------------------
Surrounding made easy, works with quotes parenthesis bracket etc. Especially useful
when changing existing surroundings or adding new surrounding for some text. This
plugin is much more powerful when working hand-in-hand with 
[repeat.vim](https://github.com/tpope/vim-repeat)

- **Change surroundings**: `cs<old><new>`, e.g: `cs"'` will change surrounding from
quote to single quote, `cs'<q>` will change surround it with `<q></q>`. `cst"` will
make it to be surrounded by quote.
- **Add surroudings**: `ys<text-object><sur>`, e.g: `ysiw[`, `yssb`, `yss)`
- **Remove surroundings**: `ds<sur>`, e.g: `ds"`
- **Visual Model**: enter visual model with `V`, then `S<sur>`

[tpope/vim-unimpaired]()
--------------------------------------------------------------------------------
A bunch of command mappings, add Faster jump & navigate within buffers, files, locations etc.

[tpope/vim-speeddating]()
--------------------------------------------------------------------------------
Vim has <C-a> and <C-x> to increase or decrease a numeric value, by default, it can
not work with complex date string like '1990-1-12', tpope's speeddating make it possible.

[tpope/vim-commentary]()
--------------------------------------------------------------------------------
A very simple plugin to toggle comment on some text object.

[Lokaltog/vim-easymotion](https://github.com/Lokaltog/vim-easymotion)
--------------------------------------------------------------------------------
Move or jump within editor easily. You must try this! It is funny to use!

[terryma/vim-multiple-cursors](https://github.com/terryma/vim-multiple-cursors)
--------------------------------------------------------------------------------
Multiple cursor editing inspired by sublime text.

[kien/ctrlp.vim](https://github.com/kien/ctrlp.vim)
--------------------------------------------------------------------------------
Fuzzy search files with filenames, tags etc.

[bling/vim-airline](), [vim-airline/vim-airline-themes]()
--------------------------------------------------------------------------------
Lightweight alternative for [Powerline](https://github.com/powerline/powerline).
It gives you a much more powerful status line, and it works with many other plugins.

[junegunn/vim-easy-align](https://github.com/junegunn/vim-easy-align)
--------------------------------------------------------------------------------
Easily tweak alignment for multiple lines.

[flazz/vim-colorschemes]()
--------------------------------------------------------------------------------
It is a repo with many colorscheme scripts in it. After installing this plugin, you
don't need to download the colorscheme files by yourself, you could swith colorsheme
 with a single command.

[mileszs/ack.vim]()
--------------------------------------------------------------------------------
This plugin enables Vim to work seamlessly with [ack](http://beyondgrep.com/) command,
 which is a powerful alternative for grep.

[rstacruz/sparkup]()
--------------------------------------------------------------------------------
This is a **must-have** plugin if you write html code! It enables you to write html markups
like `html > body > div`, and it will expand it into something like:
`html
<html>
  <body>
    <div></div>
  </body>
</html>
`
[PeterRincker/vim-argumentative]()
--------------------------------------------------------------------------------
Sometimes you want to tweak function arguments, change their names or change the order
of the arguments, it takes some keystrokes to do this. This plugin can make it a
lot easier.

[mhinz/vim-signify]()
--------------------------------------------------------------------------------
If you work with Version Control System like Git or Mercurial, you should have
this plugin, it visualize the changes inside the editor, typically by show different
background color for the line number, this make it easy to see lines changed, added and deleted.

[Raimondi/delimitMate]()
--------------------------------------------------------------------------------
This is a simple auto-pair plugin, it enables you to insert quotes brackets parenthesis
in pair, and place the cursor inside.

[SirVer/ultisnips]() and [honza/vim-snippets]()
--------------------------------------------------------------------------------
A especially powerful snippet engine. Snippets are really powerful, but you should
spend some time to get familiar with it.

[Valloric/YouCompleteMe]()
--------------------------------------------------------------------------------
Auto-completion enhancement. It also integrates with snippet plugin like [SirVer/ultisnips]().

[scrooloose/nerdtree]()
--------------------------------------------------------------------------------
Add the missing file explorer to Vim editor.

[scrooloose/syntastic]()
--------------------------------------------------------------------------------
Show warnings when there are syntax issues.

Language and File Plugins
================================================================================

[leafgarland/typescript-vim]()
--------------------------------------------------------------------------------
Add support for TypeScript language.

[editorconfig/editorconfig-vim]()
--------------------------------------------------------------------------------
Add support for the **[editorconfig](http://editorconfig.org/)** file,
which is a cross-platform and cross-editor coding style definition file.

[digitaltoad/vim-pug]()
--------------------------------------------------------------------------------
Add support for the popular js template markup.

[nmhnmh/vim-toggle-comment](https://githbu.com/nmhnmh/vim-hide-comment)
--------------------------------------------------------------------------------
TODO(minghao, 2016-08-30 14:20): Finish this plugin.
Simple plugin to show/hide comments in current buffer. 
It is useful when you are reading a long source code file, with all the comments shown, 
there are too many lines, the readability is poor.
