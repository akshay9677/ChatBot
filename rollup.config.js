import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/App",
    plugins: [
      babel({
        babelrc: true,
        exclude: ["node_modules/**"],
        runtimeHelpers: true,
      }),
      resolve(),
      commonjs(),
      json(),
      nodePolyfills(),
      postcss(),
    ],
    external: ["react"],
    output: [
      {
        file: "dist/bundle.js",
        format: "umd",
        name: "MyLib",
        exports: "named",
        globals: { react: "React" },
      },
    ],
  },
];
