const buildHelper = require("../../config/build-helper");

const defaultOptions = {
  input: "./src/react-flicking/index.ts",
  tsconfig: "tsconfig.build.json",
  sourcemap: true,
};
export default buildHelper([
  {
    ...defaultOptions,
    format: "esm",
    output: "./dist/flicking.esm.js",
    exports: "named"
  },
  {
    ...defaultOptions,
    format: "cjs",
    output: "./dist/flicking.cjs.js"
  },
]);
