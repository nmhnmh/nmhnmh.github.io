Python built-ins
================================================================================

Constants
--------------------------------------------------------------------------------
- True
- False
- None
- NotImplemented (evaluates to true)
- Ellipsis
- __debug__

Other constants imported by **site** package:
- **quit** or **exit**, both are callable object of type *site.Quitter*, with a **__call__**
special method
- copyright
- license
- credits


Objects & Types
--------------------------------------------------------------------------------

### Numbers
- int
- bool
- float
- complex

### Sequence
- list
- tuple
- str
- bytes, bytearray

### Set
- set, frozenset

### Dictionary
- dict

### Iterator & Generator
iter(), next(), StopIteration
enumerate()
range()
yield
slice(), itertools.islice()

Functions 
--------------------------------------------------------------------------------

- Numbers related: abs(), bin(), hex(), oct(), min(), max(), pow(), round(), sum()
- String related: chr(), ord(), format()
- Sequence related: len(), enumerate(), slice(), zip()
- Iterable realted: all(), any(), filter(), iter(), map(), next(), reversed(), sorted()
- Object related: ascii(), repr(), callable(), classmethod(), staticmethod(), property()
  hash(), isinstance(), issubclass(), super(), type()
- Object attributes: delattr(), getattr(), hasattr(), setattr()
- Type related: range(), bytes(), bytearray(), dict(), set(), frozenset(), bool(), complex(), float()
  int(), list(), tuple(), memoryview(), object(), str()
- Others: compile(), eval(), exec(), input(), open(), __import__()
- Inspection: dir(), id(), help(), globals(), locals(), vars()

Statements
--------------------------------------------------------------------------------

- del
- print
- is
- pass

Exceptions & Errors
--------------------------------------------------------------------------------

**BaseException** is base class for all built-in exceptions and errors, for user-defined
exceptions or errors, use **Exception**.

<pre>
BaseException
 +-- SystemExit
 +-- KeyboardInterrupt
 +-- GeneratorExit
 +-- Exception
      +-- StopIteration
      +-- StandardError
      |    +-- BufferError
      |    +-- ArithmeticError
      |    |    +-- FloatingPointError
      |    |    +-- OverflowError
      |    |    +-- ZeroDivisionError
      |    +-- AssertionError
      |    +-- AttributeError
      |    +-- EnvironmentError
      |    |    +-- IOError
      |    |    +-- OSError
      |    |         +-- WindowsError (Windows)
      |    |         +-- VMSError (VMS)
      |    +-- EOFError
      |    +-- ImportError
      |    +-- LookupError
      |    |    +-- IndexError
      |    |    +-- KeyError
      |    +-- MemoryError
      |    +-- NameError
      |    |    +-- UnboundLocalError
      |    +-- ReferenceError
      |    +-- RuntimeError
      |    |    +-- NotImplementedError
      |    +-- SyntaxError
      |    |    +-- IndentationError
      |    |         +-- TabError
      |    +-- SystemError
      |    +-- TypeError
      |    +-- ValueError
      |         +-- UnicodeError
      |              +-- UnicodeDecodeError
      |              +-- UnicodeEncodeError
      |              +-- UnicodeTranslateError
      +-- Warning
           +-- DeprecationWarning
           +-- PendingDeprecationWarning
           +-- RuntimeWarning
           +-- SyntaxWarning
           +-- UserWarning
           +-- FutureWarning
	   +-- ImportWarning
	   +-- UnicodeWarning
	   +-- BytesWarning
</pre>

Python Special packages
================================================================================

- site
- builtins
- math
- importlib

Python Callables
================================================================================

User defined methods
--------------------------------------------------------------------------------

Instance methods
--------------------------------------------------------------------------------

Class static methods
--------------------------------------------------------------------------------
@staticmethod

Class methods
--------------------------------------------------------------------------------
@classmethod

Generator funtions
--------------------------------------------------------------------------------
Functions with **yield**

Coroutine functions
--------------------------------------------------------------------------------
Functions with **async** or **await**

Built-in functions
--------------------------------------------------------------------------------

Built-in methods
--------------------------------------------------------------------------------

Classes
--------------------------------------------------------------------------------
Classes are callable, typically they are factory for themselves. When called,
arguments are passed to __new__ or __init__ to allocate and initialize instance.

Class instances
--------------------------------------------------------------------------------
Instances with **__call__** method in their class.
