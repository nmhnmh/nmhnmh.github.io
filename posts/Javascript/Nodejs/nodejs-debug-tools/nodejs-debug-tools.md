---
id: nodejs-debugger-tools
title: Nodejs Debugger Tools
date: 
tags:
  - TODO
---

## Nodejs Built-in Debugger

Start the built-in debugger with `node debug yourscript.js`, optionally insert breakpoints with `debugger;` statements. Alternatively, start node process with `node --debug yourscript.js` or `kill -s SIGUSR1 <pid>`, then attach the external debugger with `node debug -p <pid>` or `node debug <URI>`, typical URL looks like `localhost:5858`, the port number 5858 may varies, the real debugger port used is printed out when the debugger starts. The built-in debugger client is very simple command line client, looks like the default GDB interface, with support for common debug utilities like `run puase step-in step-out watch unwatch continue setBreakpoint repl exec restart kill ...`, for more details see [Debugger][node-debugger].

```bash
$ node --debug server.js
Debugger listening on [::]:5858
Working in DEFAULT model.
Listen on port 3000...
```

```bash
$ node debug localhost:5858
connecting to localhost:5858 ... ok
```

# Nodejs Built-in V8 Inspector

Start the V8 inspector with `node --inspect yourscript.js`, then attach the familiar **Chrome DevTools** to Nodejs instances for debugging and profiling. To debug with a custom port, use `--inspect=<custom_port_number>`, to break on first line after start, add an additional option `--debug-brk`. This is my preferred way to debug node code, since it uses only built-in inspector, no external dependencies, and it works with the great Chrome DevTools UI, it is really helpful and easy to use. Typically, you will see something like this:

```bash
[15:40:44] [nodemon] starting `node --inspect server.js`
Debugger listening on port 9229.
Warning: This is an experimental feature and could change at any time.
To start debugging, open the following URL in Chrome:
    chrome-devtools://devtools/remote/serve_file/@60cd6e859b9f557d2312f5bf532f6aec5f284980/inspector.html?experiments=true&v8only=true&ws=localhost:9229/8d45e3ea-cbec-468d-8ecb-7cdf3096a160
Working in DEFAULT model.
Listen on port 3000...
```

Now, just open the `chrome-devtools://devtools/remote/serve_file/@60cd6e859b9f557d2312f5bf532f6aec5f284980/inspector.html?experiments=true&v8only=true&ws=localhost:9229/8d45e3ea-cbec-468d-8ecb-7cdf3096a160` in Chrome browser, the DevTools will open and be ready.

# [hihat][] and [devtool][]

# [node-inspector][]

# [iron-node][]

# [dtrace][]

# Visual Stuido Code

# Atom

# WebStorm

[node-debugger]: https://nodejs.org/api/debugger.html "Nodejs Built-in Debugger"
[hihat]: https://github.com/Jam3/hihat
[devtool]: https://github.com/Jam3/devtool
[node-inspector]: https://github.com/node-inspector/node-inspector
[iron-node]: https://github.com/s-a/iron-node
[vscode]: https://code.visualstudio.com "Visual Studio Code"
[chrome-debug-protocol]: https://chromedevtools.github.io/debugger-protocol-viewer/tot/Debugger/ "Chrome Debugging Protocol"
[v8-debug-protocol]: https://github.com/v8/v8/wiki/Debugging-Protocol "V8 Debugging Protocol"

https://www.joyent.com/node-js/production/debug
