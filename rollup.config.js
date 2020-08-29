import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import nodePolyfills from "rollup-plugin-node-polyfills";

export default [
  {
    input: "src/App",
    plugins: [babel(), resolve(), commonjs(), json(), nodePolyfills()],
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
