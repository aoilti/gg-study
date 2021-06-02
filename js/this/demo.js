// 硬绑定
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
};

var bar = function () {
  foo.call(this);
};

bar(); // 2
setTimeout(bar, 200); // 2
bar.call(window);

// API调用的上下文
function foo(el) {
  console.log(el, this.id);
}

var obj = {
  id: "awesome",
};

[1, 2, 3].forEach(foo, obj); // 1 awesome   2 awesome    3 awesome

// 隐式绑定和显式绑定优先级测试
function foo() {
  console.log(this.a);
}

var obj1 = {
  a: 2,
  foo,
};

var obj2 = {
  a: 3,
  foo,
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2
// 结论： 显式大于隐式

// new绑定与隐式绑定优先级测试
function foo(something) {
  this.a = something;
}

var obj1 = {
  foo,
};

var obj2 = {};

obj1.foo(2);
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

var bar = new obj1.foo(4);
console.log(bar.a); // 4
console.log(obj1.a); // 2
