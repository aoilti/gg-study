function handleFetchQueue(urls, max, callback) {
  const urlCount = urls.length;
  let i = 0;
  const queue = [];

  function handleFetch(url) {
    const req = fetch(url).then((res) => {
      callback && callback(res);
      queue.shift();
      if (i < urlCount - 1) {
        handleFetch(urls[++i]);
      }
    });
    queue.push(req);

    if (queue.length < max) {
      handleFetch(urls[++i]);
    }
  }

  handleFetch(urls[i]);
}

function fetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("-----" + url + " done------");
    }, Math.random() * 5000);
  });
}

handleFetchQueue(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  8,
  (res) => {
    console.log(res);
  }
);
