---
id: cutting-edge-js
title: Cutting Edge Javascript
date: 2016-10-12
tags:
  - Javascript
---

This is a page to keep track of some useful **Javascript** stuff. It will be updated and curated periodically, it is not guaranteed to be always up to date, nor comprehensive.

# Community

[js.org](https://js.org/)
[stats.js.org](https://stats.js.org/), js library trends
[news.js.org](http://news.js.org), js news
[dns.js.org](http://news.js.org), free js.org subdomain for your projects
[wasm.news](https://wasm.news/), Web Assembly News

# FRP(Functional Reactive Programming)

Name | Note
--- | ---
[RxJS](https://github.com/Reactive-Extensions/RxJS), [RxJS 5.x and above](https://github.com/ReactiveX/RxJS) | An API for asynchronous programming with **observable streams**, in Javascript
[Immutable.js](https://facebook.github.io/immutable-js/) | Immutable collections for JavaScript, by Facebook
[Bacon.js](https://baconjs.github.io/) | A small functional reactive programming lib for JavaScript

# Libraries

Name | Note
--- | ---
[jQuery](http://jquery.com/) | Legendary js library
[Zepto](http://zeptojs.com/) | A minimalist JavaScript library for modern browsers with a largely **jQuery-compatible** API
[Moment.js](http://momentjs.com/) | A great library to **Parse, validate, manipulate, and display dates** in JavaScript, works with both browser and nodejs!
[passport.js](http://passportjs.org/) | Simple, unobtrusive authentication for Node.js, supports almost many different kinds of authentication methods and platforms, a must-have lib for many js projects

# Related languages

Name | Note
--- | ---
[TypeScript](http://www.typescriptlang.org/) | A super set of javascript, with static check and more, developed by Microsoft, popular recently
[CoffeeScript](http://coffeescript.org/) | a little language that compiles to javascript.
[Dart](https://www.dartlang.org/) | A language that compiles to javascript, but it is not javascript, developed and used by Google.
[Elm](http://elm-lang.org/) | I don't know much about this yet
[ClojureScript](https://clojurescript.org/) | Another new one?

## TypeScript Resources

Name | Note
--- | ---
[TypeScript Deep Dive](https://www.gitbook.com/book/basarat/typescript) | A great online book about TypeScript

# Testing

## Test Runner

Name | Note
--- | ---
[Karma](https://karma-runner.github.io/1.0/index.html) | A popular js test runner(for **unit tests**), run your tests inside several different Browsers(based on **iframes**), and generate reports
[Protractor](http://www.protractortest.org/) | An **e2e**(end-to-end) js test runner, using [WebDriver][] APIs to interact with Browsers
[webdriveio](http://webdriver.io/) | A Selenium 2.0 bindings for NodeJS
https://wallabyjs.com/ | **Commercial, requires license**, a unit test runner, has great integration with code editors, runs your tests in **realtime** and show the results in your code editor

## Test Services

Name | Note
--- | ---
[Selenium](http://www.seleniumhq.org/) |
[CodeClimate](https://codeclimate.com/) | 
[Appium](http://appium.io/) | 
[SauceLab](https://saucelabs.com/) |
[BrowserStack](https://www.browserstack.com/)| 
[TestingBot](https://testingbot.com/) | 

## Test Frameworks

Name | Note
--- | ---
[Jasmine][] | [BDD][] style testing framework, support works with Nodejs and Browser, battery included, built-in Spy Mock etc
[Mocha][] | Another popular testing framework, works with Nodejs and Browser, with great Promise support, needs external assertion libraries like [Chai.js][]
[ava][] | Another test runner, with concurrent support
[Jest](https://facebook.github.io/jest/) | A battery-included test framework/runner, with many features like Mocking or Coverage built in, native support for React projects, built by Facebook

## Mock && Stub
Name | Note
--- | ---
[supertest](https://github.com/visionmedia/supertest) | Fluent test apis for node HTTP test
[nock](https://github.com/node-nock/nock) | HTTP mocking and expectations library
[sinon](https://github.com/sinonjs/sinon) | Js test spy, stub, mocks

## Assert Library

Name | Note
--- | ---
[assert][] | 
[should.js][] | 
[Chai.js][] | 
[expect.js](https://github.com/Automattic/expect.js)|
[better-assert][] |
[unexpected.js][] |

# Code Coverage

Name | Note
--- | ---
[istanbul](https://github.com/gotwarlost/istanbul) | Code coverage tool, supports **html** and **cov** output
[Coveralls](https://coveralls.io/) | Online code coverage service

# Tools

## Online JS & HTML & CSS Playground

Name | Note
--- | ---
http://codepen.io/ | Heavily used by **css-tricks.com**, 👍 
https://runkit.com | Online **Node.js** playground, 👍
https://jsfiddle.net/ | Maybe the oldest one?
http://plnkr.co/ | Angular Team use it.
https://jsbin.com/ | Another online playground.

## AST(Abstract Syntax Tree) Parser

Name | Note
--- | ---
[AST Explorer](https://astexplorer.net/) | an **online** AST parsing and exploration service, using a wide range of AST parsers for JS, Html, CSS etc
[Esprima](http://esprima.org/) | an js parser written in js

## Javascript with Types
Name | Note
--- | ---
[TypeScript](http://www.typescriptlang.org/) | A Typed Super Set of Javascript, by Microsoft
[Flow](https://flowtype.org/) | A Static Type Checker for Javascript, by Facebook
[rtype](https://github.com/ericelliott/rtype) | Intuitive structural type notation for JavaScript
[jsig](https://github.com/jsigbiz/spec) | JavaScript signature notation

## Compilers & Transpilers

[Babel](http://babeljs.io/) | A Javascript compiler that enables you to use next generation javascript today.
[Traceur](https://github.com/google/traceur-compiler) | Another js.future to js.today compiler like Babel, by Google.


## Linter & Hinter & Auto-Completion
Name | Note
--- | ---
[JSHint](http://jshint.com/) | a js lint tool, read the document of jshint will also let you know more about js quirks
[ESLint](http://eslint.org/) | 
[XO][] | Beautiful js style linter, uses ESLint
[JSLint](http://www.jslint.com/) | js code quality tool by Douglas Crockford
[Ternjs](http://ternjs.net/) | a stand-alone js code analysis engine, usually used for code autocompletion

## NPM Related Tools & Services

Name | Note
--- | ---
https://npms.io | A better package search engine for NPM
https://david-dm.org | NPM package dependency status monitor
https://nodesecurity.io/ | Continuous Node Security Platform

## Modules

- [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)
- [CommonJS](http://www.commonjs.org/)
- [ES6](http://exploringjs.com/es6/ch_modules.html)
- [UMD](https://github.com/umdjs/umd)
- [Isomorphic](http://isomorphic.net/)

## Package manager
- [NPM](https://www.npmjs.com/), the de-facto and default node.js package manager.
- [Yarn](https://yarnpkg.com/), another package manager by Facebook, compatible with NPM and Bower packages.
- [Bower](https://bower.io/)

## Module Bundler
- [Webpack1](https://webpack.github.io/)
- [Webpack2](https://webpack.js.org/)
- [RequireJS](http://requirejs.org/)
- [SystemJS](https://github.com/systemjs/systemjs)
- [Browserify](https://github.com/systemjs/systemjs)
- [Rollup](https://github.com/rollup/rollup): Next-generation ES6 module bundler
- [jspm](http://jspm.io/): Frictionless browser package management

## Task runner
- [Gulp](http://gulpjs.com/)
- [Grunt](http://gruntjs.com/)
- [Broccoli](http://broccolijs.com/)
- [Make](https://www.gnu.org/software/make/)
- [NPM](https://www.npmjs.com/)

## Code Compression, Uglify, Obscuration

Name | Note
--- | ---
[YUI Compressor](http://yui.github.io/yuicompressor/) | classic js compressor, written in java.
[Uglify](https://github.com/mishoo/UglifyJS) | JavaScript parser / mangler / compressor / beautifier library for NodeJS
[Uglify2](https://github.com/mishoo/UglifyJS2) | JavaScript parser / mangler / compressor / beautifier toolkit
[Closure Compiler](https://developers.google.com/closure/compiler/) | parse analyze and optimize your js, download and run faster, by Google.

## Documentation

- [JsDoc](http://usejsdoc.org/)
- [EsDoc](https://esdoc.org/)
- [Dgeni](https://github.com/angular/dgeni): Flexible JavaScript documentation generator used by AngularJS, Protractor and other JS projects

## Editors

Name | Note
--- | ---
[Atom](https://atom.io/) | A hackable text editor by Github, based on Github's [electron][] platfrom.
[Visual Studio Code](https://code.visualstudio.com/) | another hackable text editor, powered by Microsoft, also built upon [electron][] platform. My personal choice for typescript code.
[Nuclide](https://nuclide.io/) | A text editor build on top of **Atom**, optimized for javascript development.
[alm](https://github.com/alm-tools/alm) | A cloud ready IDE for TypeScript
[WebStrom](https://www.jetbrains.com/webstorm/) | Smart javascript IDE built by JetBrains.


## WebComponents Solutions

Name | Note
--- | ---
[Polymer](https://www.polymer-project.org/1.0/) | A framework uses **Web Components**, **Shadown Dom**, **HTML Import** etc, still by Google, though it is not as popular as Angular React or Vue.js etc, but the design and concepts are really cool!
[skate.js](http://skatejs.github.io/) | A functional, featherweight and cross-framework compatible web component library built on W3C specs.
[svelte](https://svelte.technology/) | "The magical disappearing UI framework" -- Svelte Website
[stencil](https://stenciljs.com/) | The magical, reusable web component generator, built by Ionic.

# Frontend Frameworks

Name | For
--- | ---
[Angular1](https://angularjs.org/) | A popular and old js app framework, by Google
[Angular2](https://angular.io/) | The new Angularjs framework, with many improvements over its predecessor, by Google
[React](https://facebook.github.io/react/) | Facebook's js app framework.
[React Native](https://facebook.github.io/react-native/) | 
[Aurelia](http://aurelia.io/) | 
[Vue.js](http://vuejs.org/) | Lightweight, component based, not really a framework like Angular2
[Meteor.js](https://www.meteor.com/) | 
[NativeScript](https://www.nativescript.org/) | 
[Ionic Framework](http://ionicframework.com/) | 

## Angular2 Resources

Name | For
--- | ---
[Angular CLI](https://cli.angular.io/) | Official Command Line Utility for Angular2
Code Snippets | for [vim snippets](https://github.com/mhartington/vim-angular2-snippets), [vscode](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2), [atom](https://atom.io/packages/angular-2-typescript-snippets), [sublime text](https://github.com/orizens/sublime-angular2-snippets)
[codelyzer](https://github.com/mgechev/codelyzer) | A set of [tslint][] rules for Angular TypeScript projects
[Angular2 Material](https://github.com/angular/material2) | Official material UI components for Angular2, also great examples for Angular2 code
[ui-router](https://ui-router.github.io/) | Full featured front end router component, supports Angular1, Angular2, React Apps

# Node.js

## Data Fetching
[RESTful API](https://en.wikipedia.org/wiki/Representational_state_transfer) | Popular and easy to use data fetching mechanism
[GraphQL](http://graphql.org/) | A query language for your API, by Facebook
[Falcor](https://netflix.github.io/falcor/) | A JavaScript library for efficient data fetching, by Netflix

## Web Frameworks

Name | For
--- | ---
[express](http://expressjs.com/) | Fast, unopinionated, minimalist web framework for Node.js
[koa](http://koajs.com/) | next generation web framework for Node.js

## Useful packages

Name | For
--- | ---
[chalk](https://github.com/chalk/chalk) | Add color to your terminal output!
[request](https://github.com/request/request) | HTTP Request Client
[superagent](https://github.com/visionmedia/superagent) | HTTP Request Library

## Great JS & Node.js Books
- [Javascript: The Good Parts](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) by Douglas Crockford
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS), free online reading, by Kyle Simpson
- [Node Patterns](http://nodepatternsbooks.com/), great articles about Node.js apps
- https://blog.yld.io, great resources about Nodejs
- https://nodesource.com/blog


[tslint]: https://palantir.github.io/tslint/ "An extensible linter for the TypeScript language"
[electron]: http://electron.atom.io/
[WebDriver]: https://www.w3.org/TR/webdriver/
[Chai.js]: http://chaijs.com/
[should.js]: https://github.com/shouldjs/should.js "BDD style assertions for node.js, test framework agnostic"
[Mocha]: http://mochajs.org/
[ava]: https://github.com/avajs/ava
[xo]: https://github.com/sindresorhus/xo
[Jasmine]: https://jasmine.github.io/
[BDD]: https://en.wikipedia.org/wiki/Behavior-driven_development