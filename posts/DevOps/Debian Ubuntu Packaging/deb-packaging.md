## Debian/Ubuntu Package

### Concepts
Name | Note
--- | ---
Source | 
PPA | Personal Package Archive, only available to Ubuntu Users, hosted on https://launchpad.net
GPG | 
GPG Signature | 
Upstream Source | 
Package Maintainer | 
apt-get | 
apt | 
apt-file | 
apt-cache | 
dpkg |

**deb* files are just **ar** archives, it includes only binary files, not source files,
source files, if needed, could be downloaded with commands like: `apt source <package>`.

* View **deb** package file contents: `ar tv <package-name>.deb`
* Donload package binary files(installable): `apt download <package-name>`
* Donload package source files(compilable): `apt source <package-name>`

### Typical Debian Binary Package Contents
```bash
ar tv wget_1.17.1-1ubuntu1.1_amd64.deb
rw-r--r-- 0/0      4 Jun 14 08:18 2016 debian-binary
rw-r--r-- 0/0   1360 Jun 14 08:18 2016 control.tar.gz
rw-r--r-- 0/0 296876 Jun 14 08:18 2016 data.tar.xz
```

### Typical Debian Source Package Contents

## dpkg, dpkg-source, dpkg-deb, dpkg-query
## apt-get
## aptitude
## launchpad

## Package Tools

* apt-get build-dep <package>
* mk-build-deps
* debchange: (also dch)
* debuild
* dpkg-buildpackage
* dpkg-genchanges
* pbuilder
* cowbuilder
* ccache
* distcc
* schroot
* sbuild
* debi
* debc
* debdiff
* lintian
* dput
* dget
* debconf
* uscan
* uupdate
* debcheckout
* debcommit
* debrelease
* adt-run
* dh_make
* uscan

## Package format: quilt vs native
The format is specified in `debian/format` file, it could be one of these:
* 3.0 (native) for Debian native packages (no upstream version)
* 3.0 (quilt) for packages with a separate upstream tarball
* 1.0 for packages wishing to explicitly declare the default format
For more information about new 3.0 source format, see [debsrc-3][].


## Useful Development Packages

* ubuntu-dev-tools, a collection of tools to help Ubuntu Developers make their packaging works easier
* packaging-dev, a meta-package, essential to build package
* binutils
* build-essential
* dpkg-dev
* fakeroot
* equivs
* bzr-builddeb
* apt-file
* pbuiler
* quilt
* autopkgtest
* dh-make
* apt-file
* apt
* check-all-the-things
* piuparts
* lintian
* debhelper
* maint-guide
* dh-make

[debsrc-3]: https://wiki.debian.org/Projects/DebSrc3.0
[autopkgtest-doc]: http://anonscm.debian.org/cgit/autopkgtest/autopkgtest.git/tree/doc/README.package-tests.rst
[ubuntu_packaging]: http://packaging.ubuntu.com/ "Ubuntu Packaging Guide"
[debian_packing]: https://wiki.debian.org/Packaging "Debian Packaging"
[how_to_package_debian]: https://wiki.debian.org/HowToPackageForDebian "How To Package For Debian"
[debian_new_maintainer_guide]: https://www.debian.org/doc/manuals/maint-guide/ "Debian New Maintainers' Guide"
[debian-best-pkging-practices]: https://www.debian.org/doc/manuals/developers-reference/best-pkging-practices.html "Best Packaging Practices"
[debian-packaging-tutorial]: https://www.debian.org/doc/manuals/packaging-tutorial/
[debian-policy]: https://www.debian.org/doc/debian-policy/ "Debian Policy"
[quilt]: https://wiki.debian.org/UsingQuilt "Using Quilt"
[auto-pkg-tools]: https://wiki.debian.org/AutomaticPackagingTools
