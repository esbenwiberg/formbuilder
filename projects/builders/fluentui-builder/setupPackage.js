// import fs from "fs";

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

const fs = require("fs")
const path = require("path")

/**
 * Look ma, it's cp -R.
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
var copyRecursiveSync = function(src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(function(childItemName) {
        copyRecursiveSync(path.join(src, childItemName),
                            path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
};

async function main() {
    const source = fs.readFileSync(__dirname + "/package.json").toString('utf-8');
    const sourceObj = JSON.parse(source);

    delete sourceObj.scripts;
    delete sourceObj.devDependencies;
    delete sourceObj.files;
    delete sourceObj.config;

    sourceObj.peerDependencies = {...sourceObj.dependencies};
    delete sourceObj.dependencies;

    
    fs.rmSync("publish", { recursive: true, force: true });
    fs.mkdirSync("publish");

    copyRecursiveSync("./src", "./publish/src");
    copyRecursiveSync("./dist", "./publish/dist");

    fs.writeFileSync(__dirname + "/publish/package.json", Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8") );
    fs.copyFileSync(__dirname + "/.npmignore", __dirname + "/publish/.npmignore");

    fs.copyFileSync(__dirname + "/CHANGELOG.md", __dirname + "/publish/CHANGELOG.md");
    fs.copyFileSync(__dirname + "/../../../README.md", __dirname + "/publish/README.md");
    fs.copyFileSync(__dirname + "/../../../LICENSE", __dirname + "/publish/LICENSE");
}

main();