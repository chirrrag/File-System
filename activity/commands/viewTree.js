let fs = require("fs");
let path = require("path");
// path, fs both are module

// let input = process.argv.slice(2);
// let dirName = input[0];

function checkFileOrNot(path) {
    return fs.lstatSync(path).isFile();
    // it will return boolean value whether it is file or not!!!
}

function readContent(path) {
    return fs.readdirSync(path);
    // will return an Array!!!
}

function viewTree(src, indent) {
    // checkFile or Not
    let isFile = checkFileOrNot(src);
    let baseName = path.basename(src);
    if(isFile == true) {
        // print path with*
        console.log(indent, baseName);
    }else {
        // print the path and traverse the directory using readContent and with the help of recursion
        console.log(indent, baseName);

        // readContent of directory
        let children = readContent(src);
        // the read content function will read all the content of directory and fill it into an array, which we can traverse for recursion
        for(let i = 0; i < children.length; i++) {
            // recursion call
            let dest = path.join(src, children[i]);
            viewTree(dest, indent + "\t");
        }
    }
}


// viewTree(dirName, "");


module.exports = {
    fun : viewTree
};