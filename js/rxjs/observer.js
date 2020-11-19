function Producer() {
  if (!(this instanceof Producer)) {
    throw new Error("please use new Producer()!");
  }

  this.listeners = [];
}

Producer.prototype.addListener = function (listener) {
  if (typeof listener === "function") {
    this.listeners.push(listener);
  } else {
    throw new Error("listener must be function");
  }
};

Producer.prototype.removeListener = function (listener) {
  this.listeners.splice(this.listeners.indexOf(listener), 1);
};

Producer.prototype.notify = function (message) {
  this.listeners.forEach((listener) => {
    listener(message);
  });
};

// Iterator Pattern
function IteratorFromArray(arr) {
  this._array = arr;
  this._cursor = 0;
}

IteratorFromArray.prototype.next = function () {
  return this._cursor < this._array.length
    ? { value: this._array[this._cursor++], done: false }
    : { done: true };
};

// 等价于Es6
class IteratorFromArray {
  constructor(arr) {
    this._array = arr;
    this._cursor = 0;
  }

  next() {
    return this._cursor < this._array.length
      ? { value: this._array[this._cursor++], done: false }
      : { done: true };
  }

  map(callback) {
      const iterator = new IteratorFromArray(this._array);

      return {
          next: () => {
              const { done, value } = iterator.next();

              return { done, value: done ? undefined : callback(value) }
          }
      }
  }
}
