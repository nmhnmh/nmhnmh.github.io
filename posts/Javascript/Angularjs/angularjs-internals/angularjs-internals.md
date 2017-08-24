DI(Dependency Injection): the key to modular and testable code

$injector: the `DI` containers for angularjs
$injector.invoke(), $injector.instaniate()

$inject

$provide: provide shorthand methods to work with `$injector`, so that you don't need to write boilerplate code to define your own service

module

provider, service, constant, value, factory, service, decorator
The order of creation of these objects, and the impact of the order(constant can be used in providers and services, but values can only used in services, not in providers).

Register your own service, for simple ones without configurations, use shorthand methods on `$provide`, otherwise, create your own `Service Provider`.
