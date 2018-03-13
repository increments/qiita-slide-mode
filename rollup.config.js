import buble from "rollup-plugin-buble"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"
import postcss from "rollup-plugin-postcss"

export default {
  plugins: [
    postcss({
      modules: true,
      extract: true
    }),
    buble({ jsx: "h" }),
    resolve(),
    commonjs(),
    uglify()
  ]
}
