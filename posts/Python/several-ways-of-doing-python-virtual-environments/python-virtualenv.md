---
id: several-ways-of-doing-python-virtual-environments
title: Python的虚拟运行环境
date: 2018-05-20
---

## 什么是Python的虚拟环境（Vritual Environments）？

Python的虚拟环境指的是有自己独立的Python解释器实例和包安装路径的Python运行环境，由于解释器实例和包安装路径都独立，我们可以同时创建多个不同的虚拟环境，这在日常开发和测试过程中十分有用。简单来说，Python的虚拟环境主要解决两个问题：**多版本管理**和**环境隔离**。

## Python的多版本管理

Python的版本管理是一个比较常见的问题了，如同其他所有脚本语言一样，Python有着众多的版本可供选择，而且Python还有一个很特殊的2.x vs 3.x的问题（Python 2.x 和Python 3.x存在着很大的差异，导致诸多库和代码都无法直接兼容，由于历史遗留问题，多数系统暂时还是默认安装了Python2.x，少数系统比如ArchLinux已经完成了切换到Python3.x的过程，而一些较新的软件需要Python3.x来运行）。所以，在相当一段时间内，我们不得不面临机器上同时安装使用多个不同版本Python的问题，并且要能够灵活方便的进行切换使用，保证他们互不影响。

这个多版本管理和切换是很多脚本语言都面临的问题，除了本文中关于Python的一些方案外，Node.js也有[nvm](https://github.com/creationix/nvm)，Ruby也有[rvm](https://rvm.io/)，这些工具的存在都是为了安装和管理多个不同版本的脚本语言运行环境。

## Python运行的环境隔离

简单来说就是，Python等脚本语言通常需要安装一些第三方包(Package)来完成某些工作，达到代码复用的目的。这个时候就引入了一个新的问题，安装的某一个第三方包很可能会有很多不同的版本，如果我们有两个不同的应用，两者都需要同一个第三方包A，一个需要包A的1.x版本，另一个需要2.x版本，此时就会出现问题，我们如果要让这两个应用同时运行起来，便如需要同时提供包A的1.x和2.x版本。这在默认的Python环境下并不容易实现，因为Python默认是将所有的包安装到同一个地方，无法同时安装包A的两个版本。此时我们就需要创建两个完全隔离的Python环境，然后各自安装自己所需要的包（比如1.x和2.x），运行时从两个不同的Python环境下来运行，各自使用不同包甚至是不同的Python版本。另外一个原因是，由于Python会将所有包安装到系统默认的路径下，这在很多情况下可能并不是我们希望的，比如我们在测试时，可能会安装很多第三方包，我们并不希望这些包直接安装到系统默认的Python下，我们更希望能有一个独立的环境来安装和运行这些Python包，而不是对主机系统自带的Python环境造成影响。

除了上面所说的版本问题，有时候我们也会遇到权限问题，默认情况下Python会将所有包安装到默认的路径下，这个默认路径有时候是我们没有权限去修改的（比如共享主机），或者我们不希望去修改的。这个时候，我们也希望能够将Python包安装到一些指定的路径下面，来解决这个问题。

这个运行环境隔离问题其实算是Python独有的，算是Python包管理系统的缺陷吧。比较新的包管理系统多数都避免了这种缺陷，比如Node.js以及PHP的包管理系统，都是默认将一个项目所需要的第三方包安装到项目本地的一个目录下（Node.js是`.node_modules`目录，PHP Composer是安装到一个用户可以指定的目录下比如`verdor/`），而不是一些全局的路径，这样避免了不同项目下第三方依赖互相影响的情况发生，也避免了需要写入一些系统路径的权限。

当然，以上这些问题现在也有一些别的的解决思路，比如Docker。

下面就来看看Python常见的虚拟环境解决方案吧。

## 一等公民：[venv](https://docs.python.org/3/library/venv.html?highlight=venv)，轻量级解决方案

venv之所以称之为一等公民(first class citizen)，主要是因为这个方案从Python3.3开始，成为了Python标准库的一部分，也就意味着，Python3.3以及之后的版本都自带了这一功能，不需要安装任何额外的东西了。 venv的使用非常简单直接，直接调用venv命令，默认只需要提供一个目标路径即可，venv会在该路径下创建一个虚拟环境。该虚拟环境下一般有`bin`, `lib`, `include`, `pyvenv.cfg`等多个目录和文件，分别包含了该虚拟环境的解释器、库目录、头文件等内容。如果要使用某一个虚拟环境也非常简单，直接调用`bin`目录下的`activate`脚本即可，该脚本运行之后，会将当前shell环境下的`python` `pip`等绑定到当前虚拟环境的版本，并且将pip安装的包路径也重新指定到当前虚拟环境下的`lib`目录下。通过这些设置，该虚拟环境下的python就和系统自带的python以及其他虚拟环境下的python完全隔离开了。

```python
python3 -m venv /path/to/new/virtual/environment
```

但是venv一个不足的地方是，他的功能稍微显得简单了一些，除了一些比较基础的选项设置外，缺乏完整而独立的python版本管理和安装功能，比如如果我想创建一个Python2.x虚拟环境或者一个Python3.3之前版本的虚拟环境，似乎无法直接用venv来解决。

综合来讲，如果像我一样只使用最新的Python版本，那么venv显然是个非常好的选择，简单实用，这也符合venv的定位，即轻量级(lightweight)的虚拟环境管理。但是如果需要同时实用Python2.x和Python3.x，那么用venv来进行虚拟环境创建和管理可能并不能解决所有的问题，你很可能需要其它更完善的方案。

## 更完善的解决方案：[virtualenv](https://github.com/pypa/virtualenv)

virtualenv是一个独立的Python Package，使用前，需要手动安装它。它的通用性更强，在venv之前，更多的情况下，virtualenv应该是此类工作的首选解决方案。他的整体功能类似于venv，主要是虚拟环境的创建。但是他的功能细节上要略强于venv，提供更多的配置选项，比如可以指定需要安装的虚拟环境的Python解释器版本等。兼容性上可能也比venv更强。使用方法上也与venv类似，或者更准确地说，可能是venv借鉴了virtualenv的使用方法。

```bash
pip install virtualenv
virtualenv YOUR_NEW_ENV_PATH
```

## 再进一步的方案： [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/)

virtualenvwrapper也是一个独立的Python Package，但是他比较特殊。首先如他的名字所说的，他是上面我们介绍的virtualenv的一个wrapper，顾名思义，他是不能独立工作的，他需要有安装virtualenv的情况下才能使用（他的依赖中有virtualenv，安装virtualenvwrapper时会自动安装virtualenv）。virtualenvwrapper虽然是一个Python Package，但是他的大部分功能都是通过shell脚本来实现的，他的多数功能和使用常见也都是在shell环境下，真正的虚拟环境创建和管理工作是通过调用virtualenv来实现的。virtualenvwrapper所做的工作简单来讲就是：首先提供一个集中的可以容纳你所有虚拟环境的地方（通常是你的Home目录下的一个目录，你也可以指定其它的地方），然后你可以在这里创建多个不同的虚拟环境。然后你可以非常方便的使用virtualenvwrapper提供的各种shell命令来列举、查看、切换、删除你的所有虚拟环境。

在安装完virtualenvwrapper后，我们一般还需要在我们的shell启动文件中（如.bashrc）引用virtualenvwrapper的启动脚本，这个脚本会在我们的shell中设置一些命令和变量，这些都是virtualenvwrapper功能的基础，比如我们的shell中会多出一个`workon`命令（更准确说是一个shell function），我们切换不同的虚拟环境是，只要调用这个workon命令，并指定目标虚拟环境的名字即可。

总的来讲，virtualenvwrapper的目的就是让Python虚拟环境的使用管理更加方便快捷，达到一个随时可用，触手可得的境界。尤其是那些日常工作中，需要频繁使用Python虚拟环境，并且来回切换的用户，会觉得virtualenvwrapper非常实用。抛开方便快捷来看，其实virtualenvwrapper并不是必不可少的，对于基本的虚拟环境功能来讲，virtualenv就足够了。

由于这个包的多数功能都是基于shell来实现的，所以自然就有他自己的限制，比如他只支持bash兼容的shell，所以Windows下默认是不能支持的（有移植的其它类似包实现）。而且，由于他要在shell下进行一些设置，也会影响shell启动加载的速度。

```bash
pip install virtualenvwrapper
source /usr/local/bin/virtualenvwrapper.sh
```

## 纯shell虚拟环境切换方案：[pyenv](https://github.com/pyenv/pyenv)

pyenv是由纯粹的shell脚本实现的，本身不依赖python。他的工作原理也很简单：他需要随着shell启动而加载（比如通过.bashrc来调用），启动之后，他会替换当前shell中的`python`, `pip`等命令。然后当你调用`python`或者`pip`等命令时，会根据你当时所处的目录（当前目录下的`.python-version`文件或者根目录下的`$(pyenv root)/version`文件）或者环境变量（`PYENV_VERSION`）设置，来帮你调用对应的Python虚拟环境，从而达到虚拟环境切换的目的。

pyenv的侧重点在于虚拟环境的切换，它本身明没有虚拟环境的创建和管理功能，你需要类似于virtualenv之类的包来完成这些工作，一般会配合[pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv)来使用。从这点上来讲，pyenv与virtualenvwrapper更类似，工作方式也更接近。

同时，pyenv的工作方式也很类似于Node.js的`nvm`，Ruby的`rvm`，对于经常在本地shell中使用python的人来讲，还是非常实用的。

## pip与virtualenv的融合[pipenv](https://github.com/pypa/pipenv)

pipenv有点特殊，它其实是一个pip的升级版，或者说，一个更为理想化的pip，是想象中python包管理系统应该有的样子。它弥补了python自带的包管理系统的很多缺陷，融合并借鉴了很多其它包管理系统的优点。它提供了`Pipfile`和`Pipfile.lock`的组合来进行依赖声明和版本锁定，这很明显是借鉴了Node.js的`package.json`和`package.lock.json`的组合，抛弃了原先pip自己的`requirements.txt`方式。同时它默认为自动为每一个项目创建一个本地的虚拟环境（使用virtualenv），然后将该项目的所有依赖都安装到该虚拟环境下，从而达到了Node.js体系下`node_modules`的作用。

## 使用虚拟环境进行测试：[tox](https://tox.readthedocs.io/en/latest/)

tox其实本身跟本文内容关系不大，但是由于虚拟环境最大的应用场景就是测试，而tox又是目前python测试中用的最多的一个基础工具，所以有必要提及。其实tox作用上来讲和之前的virtualenvwrapper很相似，都是基于virtualenv进行多虚拟环境创建和管理的一个工具，不同于virtualenvwrapper侧重于命令行环境下手动使用，tox一般都是基于配置文件进行工作，这也是现在自动化测试和集成的典型场景。一般会在`tox.ini`文件中指定需要的测试环境和python版本，然后由tox进行这些环境的创建，然后在这些环境下分别运行测试内容。

## 总结

使用场景场景|选择工具|优缺点
----|----|----
不需要兼容Python2.x版本，使用最新的Python版本，轻度使用 | venv | 系统自带，简单实用
需要兼容多个不同的Python版本，轻度使用 | virtualenv | 兼容性好，功能丰富
需要兼容多个不同的Python版本，命令行环境下使用，手动切换 | 方案一：virtualenv + virtualenvwrapper| 兼容性好，功能丰富，使用方便
需要兼容多个不同的Python版本，命令行环境下使用，手动切换 | 方案二：virtualenv + pyenv| 兼容性好，功能丰富，使用方便
需要兼容多个不同的Python版本，以项目为单位进行虚拟环境管理 | virtualenv + pipenv + pyenv| 兼容性好，使用较方便
需要兼容多个不同的Python版本，以项目为单位，用于测试环境 | virtualenv + tox | 兼容性好，主流方案，成熟稳定
