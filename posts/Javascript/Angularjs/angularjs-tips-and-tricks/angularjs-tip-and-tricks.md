---
id: angularjs-tips-and-tricks
title: Angularjs Tips and Tricks
---

## Directives
See the official [Directive Guide](https://docs.angularjs.org/guide/directive) and [\$compile](https://docs.angularjs.org/api/ng/service/$compile) API reference.

## ```Components```
See the official [Component guide](https://docs.angularjs.org/guide/component).
In most cases, the two are interchangable, but components is preferred, it is more straghtforward, and easier to migrate to Angular2.

## [angular.element](https://docs.angularjs.org/api/ng/function/angular.element)

```angular.element``` is a jQuery-like element, when jQuery is available it is an alias for jQuery() function, if not, it delegates to angular's built-in **jqLite**, which has some basic jQuery support.
All elements in angularjs is an instance of angular.element.

## Scope inheritence

A child scope inherits from its parent scope.
```js
var parent = $rootScope;
var child = parent.$new();

parent.salutation = "Hello";
expect(child.salutation).toEqual('Hello');

child.salutation = "Welcome";
expect(child.salutation).toEqual('Welcome');
expect(parent.salutation).toEqual('Hello');
```

And the inheritence is prototypical(works in the same way with js prototype), this is confusing sometimes.
```js
var parent = $rootScope;
var child = parent.$new();

parent.salutation = "Hello";
parent.data = {name: 'parent'};

//child scope inherit from parent
expect(child.salutation).toEqual('Hello');
expect(child.data.name).toEqual('parent');

//set data through child
child.salutation = "Welcome";
child.data.name = "child";
//prototype inheritence
expect(parent.salutation).toEqual('Hello');
expect(child.salutation).toEqual('Welcome');
expect(child.data.name).toEqual('child');
expect(parent.data.name).toEqual('child');
```

A detailed explaination is on [Stackoverflow](http://stackoverflow.com/questions/14049480/what-are-the-nuances-of-scope-prototypal-prototypical-inheritance-in-angularjs?noredirect=1&lq=1)

## Use angularjs wrapper objects instead of raw js objects

- use ```$window``` instead of ```window```
- use ```$document``` instead of ```document```
- use ```$interval``` instead of ```setInterval()```
- use ```$timeout``` instead of ```setTimeout()```
- use ```$log``` instead of ```console```
- use ```$http``` instead of ```XMLHttpRequest```
- use ```$location``` instead of ```window.location```

