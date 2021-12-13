import fs from "fs";

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
    const source = fs.readFileSync(__dirname + "/../package.json").toString('utf-8');
    const sourceObj = JSON.parse(source);

    delete sourceObj.scripts;
    delete sourceObj.devDependencies;
    delete sourceObj.files;
    delete sourceObj.config;

    sourceObj.main = sourceObj.main.replace("./dist/", "./formbuilder/");
    sourceObj.types = sourceObj.types.replace("./dist/", "./formbuilder/");

    sourceObj.peerDependencies = {...sourceObj.dependencies};
    delete sourceObj.dependencies;

    fs.writeFileSync(__dirname + "/package.json", Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8") );
    fs.copyFileSync(__dirname + "/../.npmignore", __dirname + "/.npmignore");
}

main();