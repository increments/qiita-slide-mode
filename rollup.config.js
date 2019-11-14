import buble from "rollup-plugin-buble"
import commonjs from "rollup-plugin-commonjs"
import typescript from 'rollup-plugin-typescript'

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    commonjs(),
    buble({ jsx: "h" })
  ]
}
