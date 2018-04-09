import buble from "rollup-plugin-buble"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"

export default {
  plugins: [buble({ jsx: "h" }), resolve(), commonjs(), uglify()]
}
