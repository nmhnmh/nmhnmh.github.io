---
id: external-editors-with-angularjs
title: Integrate External Eidtors with Angularjs
date: 2016-11-08
---
JS editors like [TinyMCE][], [CodeMirror][], [SimpleMDE][] are editors for html, code, markdown text respectively, they works fine one their own, but when used with angularjs, some glue code is needed to hook them together. Here is a summary of what is needed:

- **directive binding**, usually we need to create a new directive and place it on some html tags as attribute, or use it as an custom html element name, to tell angularjs that we want an editor instance, manual instantiation is possible, but not necessary if we could let angularjs do it for us.
- **value synchronization**, this is also essential, in angularjs we usually use `ngModel`, as a two way data binding mechanism on `textarea` or `input`, but it will not automatically set or get value from the eidtor instances, so we need to add data binding to make data flow between `ngModel` and the editor instance.
- **instance management**, create instance, assign id, working with multiple instances on same page etc
- **configuration**, most of the editors need some kind of configuration, usually passed as an configuration object, when used with angularjs, this configuration object need to be passed, and watched for changes.
- **construction** and **destruction**: remove event listeners, do some clean up

Take [SimpleMDE][] as example, we walk through those steps one by one:

## 1. Module & Directive
```js
//create directive "ui-simplemde"
angular.module('uiSimplemde', [])
.directive('uiSimplemde', function($window, $timeout){
  //...
});
```
the code is simple and self-explanatory, we create its own module `uiSimplemde`, and define the new directive on the module, now you use this as an external dependency for your angularjs app, and you must include this module in your app module dependency list: `angular.module('myApp', ['uiSimplemde']);`. Now just add the directive as attribute to the target html element:
```html
<!--create tinymce instance, bind it to the textarea, configuration is supposed to be an configuration object defined on current $scope-->
<textrea ui-simplemde="configuration"></textarea>
<!-- or sometimes, with an inline configuration object-->
<textrea ui-simplemde="{autofocus: true}"></textarea>
```

## 2. Editor Construction
This step is simple enough, just create an editor instance and bind it to target DOM element(where the `ui-simplemde` directive is set), here we do this binding by passing the element to the `SimpleMDE()` constructor function as configuration value, other editors may has their own way to do this, like an explicit `bindTo(ele)` or `attachTo(ele)` api.
```js
function createEditorInstance(options, element){
  //create and bind editor instance by pass element to constructor
  options['element']= element;
  var editor = new SimpleMDE(options);
  //load default value inside target textarea element
  var default_value = angular.element(element).val();
  if(default_value.trim())
    editor.value(default_value);
  return editor;
}
```

## 3. Value Synchronization
We need to do **bi-directional data binding**, when editor value is changed or set/reset, say, by invoking editor commands or shortcuts etc, we want the `ngModel` to be updated accordingly, and vice versa, when `ngModel` is set by our app code, the editor instance should update or refresh itself. `ngModel` is extremely flexible and powerful, it also has two customizable `$formatters` `$parsers` `$validators` and `$asyncValidators` arrays, you can push your own formatters or parsers or validators into them, those formatters or parsers or validators will be called when `value` is synced between `ngModel.$viewValue` to `ngModel.$modelValue`, read the [docs](https://docs.angularjs.org/api/ng/type/ngModel.NgModelController) if you want to know more about this.
```js
function syncWithNgModel(editor, ngModel, scope){
  if(!ngModel)
    return;
  //model->editor
  ngModel.$render = function(){
    editor.value(ngModel.$viewValue);
  };
  //editor->model
  editor.codemirror.on('changes', function(){
    var newValue = editor.value();
    if(newValue !== ngModel.$viewValue){
      scope.$evalAsync(function(){
        ngModel.$setViewValue(newValue);
      })
    }
  });
}
```

## 4. Watch for Configuration changes
Sometimes, when we may change editor settings on-the-fly, in which case, we may want to watch the configuration object, and get notified when it's changed, and apply the changes accordingly, this can be done by add a listener with `$scope.watch()`.
```js
function watchConfigurations(scope, attrs, editor){
  scope.$watch(attrs.uiSimplemde, function(newVal, oldVal){
    if(newVal !== oldVal){
      //update SimpleMDE configurations
    }
  });
}
```

## 5. Cleanup
Most of the angularjs stuff is hooked on the `$scope` object, so no manual cleanup is necessary. But the external editors usually has its own resources that need to be cleaned up(especially those event listener registered globally), fail to do so will keep those resources hanging around and thus cause `memory leaks`. In our editor's case, the leak is not so obvious unless you create tens of editors on the page. But we should always remember to check this and do it if necessary.
```js
//cleanup when $scope is destroyed
scope.$on('$destroy', function(){
  //destroy editor instance, restore to original textarea
  scope.$mde.toTextArea();
});
```

## The End
With all these tasks done, we call now hook them together, create our `ui-simplemde` directive. 
```js
angular.module('ui.simplemde', [])
.value('simpleMdeConfig', {
})
.directive('uiSimplemde', uiSimplemdeDirective);

function uiSimplemdeDirective($timeout, $window, simpleMdeConfig){
  return {
    require: '?ngModel',
    restrict: 'A',
    priority: 599,
    link: function(scope, element, attrs, ngModel){
      if(angular.isUndefined($window.SimpleMDE)){
        throw new Error("SimpleMDE is not defined! Is simplemde.js included?");
      }
      //create editor instance
      var default_options = simpleMdeConfig || {};
      var current_options = scope.$eval(attrs.uiSimplemde);
      var options = angular.extend({}, default_options, current_options);
      var editor = createEditorInstance(options, element[0]);
      scope.$mde = editor;
      //setup value synchronization
      syncWithNgModel(editor, ngModel, scope);
      //watch configuration changes
      watchConfigurations(scope, attrs, editor);
      //cleanup
      scope.$on('$destroy', function(){
        //destroy editor instance
        scope.$mde.toTextArea();
      });
    }
  };
}
```
Besides what we mentioned above, there is one more thing, the **configuration**, in our directive, we allow you to pass configuration with something like `<textarea ui-simplemde="configObj"></textarea>` or `<textarea ui-simplemde="{name: '', style: ''}"></textarea>`, this enables you to configure each editor instance with different options, we also register an global **simpleMdeConfig** value object, it's has the lower priority, if you want to provide a application-wide configuration for all editor instances, you may override this value or decorate it:

```js
//override the value, by providing new global configuration
angular.module('jsb-admin').value('simplemdeconfig', {
  autodownloadfontawesome: false
  //more options...
});

//or extend the existing global cnfiguration by decorating it
angular.module('jsb-admin').decorator('simplemdeconfig', function($delegate){
  var newcfg = angular.extend({}, $delegate, {
    autodownloadfontawesome: false,
    //more options...
  });
  return newcfg;
});
```
Decorator for values is not documented in angularjs official document(which only show examples for services directive and filters), but it also works.

## What next?

This is just a simple walk through of the angularjs editor integration process, we cover the essentials steps here, but there are many other missing features like **debounce**, **validation check**, support for `disabled` attributes etc. There are many examples of angularjs integrations with external editors out there, especially those from [angular-ui.github.io](http://angular-ui.github.io/), [ng-tinymce](https://github.com/angular-ui/ui-tinymce), [ng-codemirror](https://github.com/angular-ui/ui-codemirror), [ng-ace](https://github.com/angular-ui/ui-ace) etc, they are good references and examples.

[TinyMCE]: https://www.tinymce.com/
[CodeMirror]: https://codemirror.net/
[SimpleMDE]: https://simplemde.com/
