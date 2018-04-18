import buble from "rollup-plugin-buble"
import commonjs from "rollup-plugin-commonjs"

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    buble({ jsx: "h" })
  ]
}
