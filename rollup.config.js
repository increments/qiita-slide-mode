import buble from "rollup-plugin-buble"
import commonjs from "rollup-plugin-commonjs"
import typescript from 'rollup-plugin-typescript'

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    typescript(),
    buble({ jsx: "h" })
  ]
}
