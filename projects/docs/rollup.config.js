// @ts-check

import { terser } from "rollup-plugin-terser";
import typescript2 from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import pkg from "./package.json";
import commonjs from "@rollup/plugin-commonjs";
import jsonPlugin from "@rollup/plugin-json";
import cssbundle from 'rollup-plugin-css-bundle';
import mdx from '@mdx-js/rollup'

/**
 * Comment with library information to be appended in the generated bundles.
 */
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${pkg.author}
 * Released under the ${pkg.license} License.
 */
`;

/**
 * Creates an output options object for Rollup.js.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
function createOutputOptions(options) {
    return {
        banner,
        name: "[libraryCamelCaseName]",
        exports: "named",
        sourcemap: true,
        ...options,
    };
}

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
    input: "./src/index.ts",
    output: [
        // createOutputOptions({
        //     file: "./dist/index.js",
        //     format: "commonjs",
        //     plugins: [terser()],
        // }),
        createOutputOptions({
            file: "./dist/index.js",
            format: "esm",
            plugins: [terser()],
        }),
        // createOutputOptions({
        //   file: './dist/index.umd.js',
        //   format: 'umd',
        // }),
        // createOutputOptions({
        //     file: "./dist/index.umd.min.js",
        //     format: "umd",
        //     plugins: [terser()],
        // }),
    ],
    plugins: [
        jsonPlugin(),
        nodeResolve({
          browser: true
        }),
        commonjs({
            include: /node_modules/,
        }),
        typescript2({
            clean: true,
            useTsconfigDeclarationDir: true,
            tsconfig: "./tsconfig.bundle.json",
            // tsconfigDefaults: "./tsconfig.json",

            // rollupCommonJSResolveHack: true,
            // objectHashIgnoreUnknownHack: true,
        }),
        cssbundle(),
        mdx({})
    ],
};

export default options;
