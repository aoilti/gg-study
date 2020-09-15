// 构造函数继承
function Parent(name) {
    this.name = name;
}

Parent.prototype.getAge = function () {
    return 18;
}

function Child(name) {
    Parent.apply(this, arguments);
    this.name = name;
}
new Child('tom').getAge();

// 原型实例继承
function Parent(name) {
    this.name = name;
}

Parent.prototype.getAge = function () {
    return 18;
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child(name) {
    this.name = name;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
new Child('tom');

// 组合式继承
function Parent(name) {
    this.name = name;
}

Parent.prototype.getAge = function () {
    return 18;
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child(name) {
    Parent.apply(this, arguments);
    this.name = name;
}

Child.prototype = new Parent();

// 原型继承
function Parent(name) {
    this.name = name;
}

Parent.prototype.getAge = function () {
    return 18;
}

Parent.prototype.getName = function () {
    return this.name;
}

function createObj(o) {
    function f() {

    }
    f.prototype = o;
    return new f();
}

function Child(name) {
    this.name = name;
}

Child.prototype = createObj(Parent);
Child.prototype.constructor = Child;
child = new Child('tom');


// 寄生式组合继承
function inheritObject(superClass, childClass) {
    const prototype = Object(superClass.prototype);
    prototype.constructor = childClass;
    childClass.prototype = prototype;
}

function Parent(name) {
    this.name = name;
}

Parent.prototype.getAge = function () {
    return 18;
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child(name) {
    this.name = name;
}
inheritObject(Parent, Child);
Child.prototype.getName = function () {
    return this.name + ' tim'
}
child = new Child('Tom');


Function.prototype.myApply = function (context, args) {
    context.fn = this;
    const result = context.fn(args);
    delete context.fn;
    return result;
}