function debounce(fn, wait) {
  let timer = null;

  return function () {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(fn, wait);
  };
}

function throttle(fn, delay) {
  let prev = new Date().getTime();
  return function () {
    let context = this;
    let args = arguments;
    let now = new Date().now();
    if (now - prev >= delay) {
      fn.apply(context, args);
      prev = Date.now();
    }
  };
}
