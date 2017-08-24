---
id: angularjs-e2e-testing
title: Writing End-to-End testing for AngularsJS
date:
tags: 
  - Testing
---

## What is ngMock?

The ngMock module provides support to inject and mock Angular services into unit tests. In addition, ngMock also extends various core ng services such that they can be inspected and controlled in a synchronous manner within test code.

## ngMock services

- $exceptionHandler
- $log
- $interval
- $timeout
- $animate
- $httpBackend
- $controller
- $componentController

## ngMock Types

- angular.mock.TzDate: js date like object with fixed timezone offset
- $rootScope.Scope: Scope decorated with helper methods for testing

## ```flush()``` when using $timeout() or $interval()

In testing, $timeout or $interval will not run its callbacks automatically, you must call $timeout.flush() or $interval.flush() to run them. You can also verify pending callbacks with verifyNoPendingTasks().

## ngMock functions

- use ```angular.mock.dump()``` to dump data
- use ```angular.mock.module()``` or its shorthand function ```module()``` to register module
- use ```angular.mock.inject()``` or its shorthand function ```inject()``` to inject module
- use ```angular.mock.module.sharedInjector()``` to share injector within tests


## use _$compile_ for $compile when injecting dependencies

ngMock will inject the underscored names with right components, using underscored names will not hide their original names, so you can use normal component names like $compile in your tests.

## Jasmine share variables with ```this```

In each test suite, beforeEach(), afterEach(), it() all share same ```this```. So no global variables needed to share values.

## Does proper cleanup after eash test

Empty DOM after eash test.
