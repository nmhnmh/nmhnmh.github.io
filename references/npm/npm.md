---
id: npm
title: NPM Cheatsheet
date: 2017-09-26
tags:
  - Javascript
---

## User & Team & Access Management

npm command | alias | note
-|-|-
npm [access] | | access control on packages
npm [team] | | manage team
npm [owner] | | manage package owner
npm [whoami] | | print current username
npm [adduser] | login |  authenticate a user to a registry
npm [logout] | | logout a user from registry, invalidate current session

## NPM Management

npm command | alias | note
-|-|-
npm [config] | c | manage npm configuration, with `set`, `get`, `list`, `delete`, `edit` operands
npm [cache] | | manage local npm cache
npm [bin] | | print the path where package **executables**(local or global) are installed
npm [prefix] | | print closet path with a package.json file inside it
npm [root] | | print the effective **node_modules** path
npm [ls] | list, la, ll |  list installed packages, locally(default) or globally(with `-g` option)

## Package Management

npm command | alias | note
-|-|-
npm [install] | i | install a package
npm [install-test] | it | run `npm install` followed by `npm test`
npm [uninstall] | remove, rm, r, un, unlink | uninstall a package
npm [dedupe] | find-dupes, ddp | reduce duplication by optimize the local package tree
npm [outdated] | | check for outdated package
npm [update] | up, upgrade | update all packages specified to latest version
npm [prune] | | remove local packages that are not listed in package.json any more, or devDependencies not needed any more(with `--production` flag)
npm [edit] | | edit an installed package and rebuild it afterword
npm [publish] | | publish a package to registry
npm [unpublish] | | remove a package on the registry
npm [build] | | build a package, usually when `npm install` or `npm link`
npm [rebuild] | rb | runs `npm build` on matching folder
npm [dist-tag] | dist-tags | add, remove, and enumerate distribution tags on a package, typical tags include: `latest`, `stable`, `beta`, `dev`, `canary`, `next`
npm [deprecate] | | mark package version or version ranges to be deprecated, with a warning message
npm [star] | | mark a package as favourite
npm [stars] | | view packages marked as favourite

## Package Development

npm command | alias | note
-|-|-
npm [init] | | create a `package.json` file
npm [shrinkwrap] | | lock down dependency versions for publication
npm [version] | | bump the version of a package
npm [start] | | run `start` scripts if it exists or `node server.js`
npm [restart] | | run `stop`, `restart`, `start` scripts and related pre- or post- scripts orderly
npm [stop] | | run `stop` script if provided
npm [run-script] | run | run arbitrary package script
npm [test] | t, tst | run `test` script
npm [link] | | create symbolic link to a package, useful for local development
npm [pack] | | save package to an archive file for upload or publish etc

## Package Information

npm command | alias | note
-|-|-
npm [search] | s, se, find | search packages on the registry
npm [docs] | | open a package's documentation website
npm [explore] | | run a command inside a package's folder
npm [repo] | | show the source code repo of a package
npm [view] | info, show, v | show the detailed registry information data for a package
npm [bugs] | issues | open the issue/bug report page of a package

## Miscelleous

npm command | alias | note
-|-|-
npm [doctor] | | diagnose local npm installation and configuration issues
npm [ping] | | Ping the specified or default registry and verify authentication
npm [completion] | | print the bash completion snippet
npm [help] | | show help for specified topic or command
npm [help-search] | | search help for specified topic or command

[access]: https://docs.npmjs.com/cli/access
[adduser]: https://docs.npmjs.com/cli/adduser
[doctor]: https://docs.npmjs.com/cli/doctor
[ping]: https://docs.npmjs.com/cli/ping
[bugs]: https://docs.npmjs.com/cli/bugs
[repo]: https://docs.npmjs.com/cli/repo
[view]: https://docs.npmjs.com/cli/view
[explore]: https://docs.npmjs.com/cli/explore
[docs]: https://docs.npmjs.com/cli/docs
[bin]: https://docs.npmjs.com/cli/bin
[prefix]: https://docs.npmjs.com/cli/prefix
[search]: https://docs.npmjs.com/cli/search
[team]: https://docs.npmjs.com/cli/team
[owner]: https://docs.npmjs.com/cli/owner
[whoami]: https://docs.npmjs.com/cli/whoami
[logout]: https://docs.npmjs.com/cli/logout
[config]: https://docs.npmjs.com/cli/config
[cache]: https://docs.npmjs.com/cli/cache
[ls]: https://docs.npmjs.com/cli/ls
[root]: https://docs.npmjs.com/cli/root
[install]: https://docs.npmjs.com/cli/install
[install-test]: https://docs.npmjs.com/cli/install-test
[uninstall]: https://docs.npmjs.com/cli/uninstall
[dedupe]: https://docs.npmjs.com/cli/dedupe
[outdated]: https://docs.npmjs.com/cli/outdated
[update]: https://docs.npmjs.com/cli/update
[prune]: https://docs.npmjs.com/cli/prune
[edit]: https://docs.npmjs.com/cli/edit
[publish]: https://docs.npmjs.com/cli/publish
[unpublish]: https://docs.npmjs.com/cli/unpublish
[build]: https://docs.npmjs.com/cli/build
[rebuild]: https://docs.npmjs.com/cli/rebuild
[dist-tag]: https://docs.npmjs.com/cli/dist-tag
[deprecate]: https://docs.npmjs.com/cli/deprecate
[star]: https://docs.npmjs.com/cli/star
[stars]: https://docs.npmjs.com/cli/stars
[init]: https://docs.npmjs.com/cli/init
[shrinkwrap]: https://docs.npmjs.com/cli/shrinkwrap
[version]: https://docs.npmjs.com/cli/version
[start]: https://docs.npmjs.com/cli/start
[restart]: https://docs.npmjs.com/cli/restart
[stop]: https://docs.npmjs.com/cli/stop
[run-script]: https://docs.npmjs.com/cli/run-script
[test]: https://docs.npmjs.com/cli/test
[link]: https://docs.npmjs.com/cli/link
[pack]: https://docs.npmjs.com/cli/pack
[completion]: https://docs.npmjs.com/cli/completion
[help]: https://docs.npmjs.com/cli/help
[help-search]: https://docs.npmjs.com/cli/help-search
