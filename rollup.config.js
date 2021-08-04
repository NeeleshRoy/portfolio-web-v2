import path from "path";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from 'rollup-plugin-copy'
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

const dotenv = require('dotenv');

const isProduction = process.env.BUILD === "production";
const isDev = process.env.BUILD === "development";
const plugins = [
    postcss({
        extensions: [".sass"],
        plugins:[
            simplevars(),
            nested(),
            cssnext({ warnForDuplicates: false }),
            cssnano()
        ]
    }),
    replace({
        'process.env.NODE_ENV': JSON.stringify(dotenv.config().parsed.NODE_ENV),
        preventAssignment: true
    }),
    nodeResolve({
        extensions: ['.js', '.jsx']
    }),
    json(),
    babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
        envName: "client",
        configFile: path.resolve(__dirname, "babel.config.js")
    }),
    commonjs(),
    isProduction && terser(),
    copy({
        targets: [
            { src: 'public/index.html', dest: 'dist' },
        //   { src: ['assets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
        //   { src: 'assets/images/**/*', dest: 'dist/public/images' }
        ]
    })
];

if (isDev) {
    const serverOptions = {
        open: true,
        verbose: true,
        contentBase: ["dist"],
        historyApiFallback: true,
        host: 'localhost',
        port: 3000
    };
    plugins.push(serve(serverOptions));
    plugins.push(livereload({ watch: 'dist' }));
}

export default {
    input: path.resolve(__dirname, "src/index.js"),
    plugins,
    output: {
        file: path.resolve(__dirname, "dist/bundle.js"),
        format: "iife",
        name: "bundle"
    }
}