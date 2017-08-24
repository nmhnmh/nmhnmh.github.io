---
id: cutting-edge-python
title: Cutting Edge Python
date: 2016-10-24
tags:
  - Python
---
Python Virtual Environment Management
================================================================================

[virtualenv][]: create isolated python environments
--------------------------------------------------------------------------------
Usually you don't want to mess your system python with project dependencies,
you can use this to create an isolated python environment, the new environment has
its own `bin`, `lib`, `include`, it also has its own `pip` and `setuptools` packages,
all other packages will be installed inside its own folders.

### Create and Activate virtualenv
Run `virtualenv YOUR_NEW_ENV_DIR` to create a new environment. 
To use or work with such isolated environments, usually you need to tweak your `PATH` environment  variable, it give it precedence over system default python.  But you don't need to do it manually, each virtual environment has a bash script inside its own `bin` directory, with all settings necessary to activate it, all you need to do is to run `source bin/activate`.

### Deactivate and Remove virtualenv
Run `deactivate` to deactivate current virtualenv.
Run `rm -r /path/to/your_virtualenv` to delete the virtualenv folder.

To make it easier to use, you could use some tools like [virtualenvwrapper][].

[virtualenvwrapper][]: virtualenv extension and utility
--------------------------------------------------------------------------------
Basically, virtualenvwrapper provides utilities to do virtualenv and project management, the most important ones include:
- workon: switch between different virtual environments, setup path and environment variables
- mkvirtualenv: create a new python environment
- mkproject: create a new python project directory, link to a virtualenv

It also has tools like: cdvirtualenv, cdsitepackages, setvirtualenvproject, cdproject, lsvirtualenv and many others. It create all your python einvironment in the same place like `~/.virtualenv`(this is customizable). It also manage all your python projects inside a project root directory(customizable). Since I always use the latest python3.x for my own projects, I don't use this tool a lot.

[pyenv][]: Pure shell utility to manage python versions
--------------------------------------------------------------------------------
pyenv is something different, it is pure shell script, no python dependencies.
It can install different versions and flavors of python, which could be grouped like this:
```
python 2.x
python 3.x
pypy2
pypy3
stackless
miniconda
anaconda
ironpython
jython
```
it will download the specified python installation files from official websites, and install them to `~/.pyenv`(this is customizable).
To use a specific python version or flavor for your specific project, you simply either put a `.python-version` file inside the project root folder, when you enter this project folder, pyenv will get the version specified in this `.python-version` file, and switch to use the right binaries and packages, if you `.python-version` file contains `3.0.1`, then `python` will be using `python3.0.1`, it is really handy. You could even override system default python by setting `PYENV_VERSION` in your `.bashrc` or put a `.python-version` file in the root the filesystem.

[tox][]: A virtualenv manager and a test utility
--------------------------------------------------------------------------------
tox aims to automate and standardize testing in python.
It does basically only three things:
- create virtualenv
- install dependencies like pytest, and your package under test
- run the tests
it is extremely useful if you want to test your code against many different versions or flavours of python.

Python Profile Tools
================================================================================
[function profiler](https://docs.python.org/3/library/profile.html)
[line profiler](http://packages.python.org/line_profiler/)
[memory profiler](https://github.com/fabianp/memory_profiler)
[objgraph](http://mg.pov.lt/objgraph/), Object inspector

ipython profile & benchmark shortcuts:
%mprun
%lprun
%timeit
%time

Python Test Tools
================================================================================
- [unittest][]
- [doctest][]
- [nose2][]
- [pytest][]

Python Source Code Tools
================================================================================
- [pylint][]
- [pyflakes][]
- [pycodestyle][], aka PEP8
- [flake8][]
- python

Python Documentation Tools
================================================================================
[reStructuredText][]: a lightweight markup language to write documents
[Sphinx][]: the Python Documentation Generator

Python Packaging Tools
================================================================================
- [setuptools][]
- [Python Packaging Guide][]
- [Python Packaging][]
- [easyinstall][]
- [pip][]

Python C/Cpp Extension, JIT, Runtime
================================================================================
- [ctypes][]
- [Cython][]
- [PyPy][]
- [Jython][]
- [IronPython][]

[ctypes]: https://docs.python.org/3/library/ctypes.html
[Cython]: http://cython.org
[PyPy]: http://pypy.org/
[Jython]: http://www.jython.org/
[IronPython]: http://ironpython.net/

[virtualenv]: https://github.com/pypa/virtualenv
[virtualenvwrapper]: https://virtualenvwrapper.readthedocs.io
[pyenv]: https://github.com/yyuu/pyenv
[tox]: https://tox.readthedocs.io/en/latest/
[doctest]: https://docs.python.org/3/library/doctest.html
[unittest]: https://docs.python.org/3/library/unittest.html 
[nose2]: https://github.com/nose-devs/nose2
[pytest]: http://doc.pytest.org/en/latest/
[reStructuredText]: http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html
[Sphinx]: http://www.sphinx-doc.org/
[setuptools]: https://setuptools.readthedocs.io/en/latest/index.html
[Python Packaging Guide]: https://packaging.python.org/
[Python Packaging]: https://python-packaging.readthedocs.io/en/latest/index.html
[pip]: https://pip.pypa.io/en/stable/
[easyinstall]: http://setuptools.readthedocs.io/en/latest/easy_install.html
[pylint]: http://pylint.readthedocs.io/
[flake8]: https://flake8.readthedocs.io
[pyflakes]: https://github.com/PyCQA/pyflakes
[pycodestyle]: http://pep8.readthedocs.io/
[pep8]: http://pep8.readthedocs.io/
