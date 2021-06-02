var MyModules = (function Manager() {
  var modules = {};

  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return modules[name];
  }

  return {
    get,
    define,
  };
})();

MyModules.define("bar", [], function () {
  function hello(who) {
    return "hello " + who;
  }

  return {
    hello,
  };
});

MyModules.define("foo", ["bar"], function (bar) {
  function awesome() {
    console.log(bar.hello("tom"));
  }

  return { awesome };
});

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");
console.log(bar.hello("jim"));

foo.awesome();
