const loaderUtils = require("loader-utils");

module.exports = function (source) {
  console.log("loader start");
  const options = loaderUtils.getOptions(this);
  const result = source.replace("PHP", options.name);
  return result;
};
