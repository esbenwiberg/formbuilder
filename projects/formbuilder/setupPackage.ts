// import fs from "fs";

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

async function main() {
    const fs = await import("fs");
    const source = fs.readFileSync(__dirname + "/../package.json").toString('utf-8');
    const sourceObj = JSON.parse(source);

    delete sourceObj.scripts;
    delete sourceObj.devDependencies;
    delete sourceObj.files;
    delete sourceObj.config;

    sourceObj.main = sourceObj.main.replace("./dist/", "./src/");
    sourceObj.types = sourceObj.types.replace("./dist/", "./src/");

    sourceObj.peerDependencies = {...sourceObj.dependencies};
    delete sourceObj.dependencies;

    fs.writeFileSync(__dirname + "/package.json", Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8") );
    fs.copyFileSync(__dirname + "/../.npmignore", __dirname + "/.npmignore");

    fs.copyFileSync(__dirname + "/../CHANGELOG.md", __dirname + "/CHANGELOG.md");
    fs.copyFileSync(__dirname + "/../../../README.md", __dirname + "/README.md");
    fs.copyFileSync(__dirname + "/../../../LICENSE", __dirname + "/LICENSE");
}

main();