#! /usr/bin/env node
// const { dirname } = require("node:path");
const path = require("path");
const fs = require("fs");
// shebang synntax of node js :- #!/usr/bin/node

// #!/usr/bin/node

let helperFile = require("./commands/help");
let organizerFiler = require("./commands/organize");
let viewerFiler = require("./commands/view");



let input = process.argv.slice(2);

let command = input[0];
let dirName = input[1];
let mode = input[2];


if(dirName == undefined) {
    dirName = process.cwd();
}

switch(command) {
    case "view" :
        // console.log("view command Implemented!!! ");
        viewerFiler.fun(dirName, mode);
        break;
    case "organize" :
        // console.log("organize command implemented!!!");
        organizerFiler.fun(dirName);

        console.log("--------------------------------------------------------");
        console.log("Completed Organizing the Files <3");
        console.log("--------------------------------------------------------");
        break;
    case "help" :
        // console.log("help command implemented!!!");
        helperFile.fun();
        break;
    default:
        console.log("WRONG COMMAND ENTERED!!!! :/ ");
        break;
}