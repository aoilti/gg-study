const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const options = require("../webpack.config");
const { transformFromAst } = require("@babel/core");
const path = require("path");

const Parser = {
  getAst(path) {
    const content = fs.readFileSync(path, "utf-8");

    return parser.parse(content, {
      sourceType: "module",
    });
  },
  getDependencies(content, fileName) {
    const dependencies = {};
    traverse(ast, {
      ImportDeclaration({ node }) {
        const dirname = path.dirname(fileName);
        const filePath = `./${path.join(dirname, node.source.value)}`;
        dependencies[node.source.value] = filePath;
      },
    });

    return dependencies;
  },
  getCode(ast) {
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"],
    });

    return code;
  },
};

class Compiler {
  constructor(option) {
    const { entry, output } = option;
    this.entry = entry;
    this.output = output;
    this.modules = [];
  }

  run() {
    const { getAst, getDependencies, getCode } = Parser;
    const ast = getAst(this.entry);
    const dependencies = getDependencies(ast, this.entry);
    const code = getCode(ast);
  }

  generate() {}
}
