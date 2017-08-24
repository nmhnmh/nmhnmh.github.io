---
id: ng-router-vs-ui-router
title: Angular Router vs UI-Router
date: 
---

When your Angular apps needs routing, there are two popular choices: [Angular Router][ng-router] and [UI-Router][ui-router-ng2]. The Angular Router is provided by the offcial Angular team. The UI-Router is a standalone project, which is evolved from the original [AngularUI Router][ui-router-ng1], which is for AngularJS only at the beginning, but now, the project has been refactored into four parts, providing routing features for AngularJS Angular and React: [ui-router-core][], [ui-router-ng1][], [ui-router-ng2][], [ui-router-react][], the core contains framework agnostic routing features, the later three contain framework specific stuff and all depend on the core. 

Router \ Framework | AngularJS | Angular | React
---|---|---|---
Official Router | [ng1-router][] | [ng-router][] | n/a
UI-Router | [ui-router-ng1] | [ui-router-ng2][] | [ui-router-react][]

This post only compares routing with Angular Router and UI-Router in Angular App. Routing in AngularJS and React is not included here.

Feature \ Router | Angular Router | UI-Router
---|---|---
**Directives** | [RouterOutlet][], [RouterLink][], [RouterLinkActive][] | [UIView][], [UISref][], [UISrefActive][]
**URL Params** | ActivatedRouter, Params | 
**resolve** | | 
**state** | N/A | 
**transition hooks** | CanActivate, CanDeactivate | TransitionHook
**url** | Location | Location
**Navigate** | Router.navigate() | StateService.go()
**trace** | | 


[RouterOutlet]: https://angular.io/docs/ts/latest/api/router/index/RouterOutlet-directive.html
[RouterLink]: https://angular.io/docs/ts/latest/api/router/index/RouterLink-directive.html
[RouterLinkActive]: https://angular.io/docs/ts/latest/api/router/index/RouterLinkActive-directive.html
[UIView]: https://ui-router.github.io/ng2/docs/latest/classes/directives.uiview.html
[UISref]: https://ui-router.github.io/ng2/docs/latest/classes/directives.uisref.html
[UISrefActive]: https://ui-router.github.io/ng2/docs/latest/classes/directives.uisrefactive.html

[angular-ui]: https://angular-ui.github.io/ "AngularUI"
[ng1-router]: https://docs.angularjs.org/api/ngRoute "AngularJS Router"
[ng-router]: https://angular.io/docs/ts/latest/guide/router.html "Angular Router and Navigation"
[ui-router-core]: https://github.com/ui-router/core "UI-Router Core: Framework agnostic, State-based routing for JavaScript Single Page Apps"
[ui-router-ng1]: https://github.com/angular-ui/ui-router "UI-Router for AngularJS"
[ui-router-ng2]: https://github.com/ui-router/ng2 "UI-Router for Angular(2+)"
[ui-router-react]: https://github.com/ui-router/react "UI-Router for React"