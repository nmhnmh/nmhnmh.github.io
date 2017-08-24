Registers
================================================================================
Registers are flexible and powerful in Vim, it is use for copy/paste, macros,
history and many others. You can inspect all register values with **:registers**.
Insert the content of the register in **insert model** with <C-r> plus register name.
In **normal model**, insert register content with normal copy paste commands.
There are caveats in Vim's register design, the copy/paste/cut concept is not working
in reasonably, see more in [Registers: the Good, the Bad, and the Ugly Parts](vimcast-register-good-bad-ugly).
 And [vim-easyclip]() provides some work-arounds for Vim's registers.

Special registers
--------------------------------------------------------------------------------
- **@-**: small delete register
- **@/**: last search pattern
- **@:**: last Ex command
- **@.**: last insert command
- **@%**: last filename(relative to working directory) of current buffer

Buffers
================================================================================

Splits
================================================================================

Tabs
================================================================================


Macros
================================================================================

Movements
================================================================================

Move by line
--------------------------------------------------------------------------------

Move by paragraph
--------------------------------------------------------------------------------

Move by objects
--------------------------------------------------------------------------------

Regular Expressions
================================================================================
Vim has support for several different flavours of RegExp.
Use **/v** to use (){} etc as normal characters, save the trouble for escaping.

Models
================================================================================

Insert Model
--------------------------------------------------------------------------------
Insert special character like horizontal tab with **<C-v>+^I** or **<C-k>+HT**.

Ex commands
================================================================================

Commands
================================================================================
<C-A> or <C-X> to increase or decrease a number. 
With the help of tpope's [speeddating]() plugin,
it could be used on date strings like "1999-01-02".

VimL: Vim Script
================================================================================

[vimcast-register-good-bad-ugly]: http://vimcasts.org/blog/2013/11/registers-the-good-the-bad-and-the-ugly-parts/
[vim-easy-clip]: https://github.com/svermeulen/vim-easyclip
[speeddating]: https://github.com/tpope/vim-speeddating 
[learn-viml-the-hard-way](http://learnvimscriptthehardway.stevelosh.com/)
