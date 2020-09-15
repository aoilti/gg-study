class CustomPlugin {
  constructor(doneCallback, failCallback) {
    this.doneCallback = doneCallback;
    this.failCallback = failCallback;
  }
  apply(complier) {
    complier.hooks.done.tap("CustomPlugin", (stats) => {
      console.log("CustomPlugin done");
      this.doneCallback(stats);
    });

    complier.hooks.failed.tap("CustomPlugin", (err) => {
      this.failCallback(err);
    });
  }
}

module.exports = CustomPlugin;
