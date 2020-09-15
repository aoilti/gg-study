const path = require("path");
const CustomPlugin = require("./custom.plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, "./custom.loader.js"),
          options: {
            name: "JavaScript", //这里就是你要替换的值
          },
        },
      },
    ],
  },
  plugins: [
    new CustomPlugin(
      () => {
        console.log("成功监听到结束事件，可以执行你想要的函数！");
      },
      (error) => {
        console.log(error);
      }
    ),
  ],
};
