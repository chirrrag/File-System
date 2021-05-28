let fs = require("fs");


function checkFileOrFolder(path) {
    return fs.lstatSync(path).isFile();
    // it returns whether the path is file or not
}
function readContent(path) {
    let content = fs.readFileSync(path);
    console.log(content + "***");
}
let defPath = "C:\\Users\\sapra\\Desktop\\WEBDEV\\01_Js_Intro\\raw\\f10";



function printPath(path) {
    // check whether path is file or folder(directory)
    // if it is file => print its content 
    // if it is folder than, make further loops and print its name only

    let isFile = checkFileOrFolder(path);

    if(isFile == true) {
        readContent(path);
        // console.log(path, "***");
    }
    else {
        let dirName = path.split("\\");
        dirName = dirName[dirName.length - 1];
        console.log(dirName);

        let children = fs.readdirSync(path);

        for(let i = 0; i < children.length; i++) {
            printPath(path + "\\" + children[i]);
        }
    }
}

printPath(defPath);