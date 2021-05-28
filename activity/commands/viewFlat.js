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

function viewFlat(src) {
    // checkFile or Not
    let isFile = checkFileOrNot(src);

    if(isFile == true) {
        // print path with*
        console.log(src, "*****");
    }else {
        // print the path and traverse the directory using readContent and with the help of recursion
        console.log(src);

        // readContent of directory
        let children = readContent(src);
        // the read content function will read all the content of directory and fill it into an array, which we can traverse for recursion
        for(let i = 0; i < children.length; i++) {
            // recursion call
            let dest = path.join(src, children[i]);
            viewFlat(dest);
        }
    }
}


// viewFlat(dirName);


module.exports = {
    fun : viewFlat
};