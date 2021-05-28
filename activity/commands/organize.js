const fs = require("fs");
const path = require("path");
let types = require("./util");


// let types = {
//     media: ["mp4", "mkv"],
//     archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
//     documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
//     app: ['exe', 'dmg', 'pkg', "deb"]
// }

function checkFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}

function readContent(src) {
    return fs.readdirSync(src);
}

function checkExtension(ext) {
    // let types = util;
    for(let type in types ) {
        for(let i=0 ; i < types[type].length; i++) {
            if(ext == types[type][i]) {
                return type;
            }
        }
    }
    return "others";
}
function copyTheFiles(src, dest, extensionFolder) {
    // check whether the folder exists or not
    // console.log("dest is", dest);
    // console.log("ext is", extensionFolder);
    let folderToMake = path.join(dest, extensionFolder);
    if(fs.existsSync(folderToMake) == false) {
        fs.mkdirSync(folderToMake);
    }
    let pathOfDestFile = path.join(folderToMake, path.basename(src));
    // copy the files
    fs.copyFileSync(src, pathOfDestFile);
}


function organizer(src) {
    // console.log("Organize command implemented on directory", dirName);
    // check if folder exists or not
    // if doesnot exists, than make one
    let folderToMake = path.join(src, "Organized_Files");
    if(fs.existsSync(folderToMake) == false) {
        fs.mkdirSync(folderToMake);
    }

    organizeFiles(src, folderToMake);

}

function organizeFiles(src, dest) {
    // check whether the path is file or Not
    let isFile = checkFileOrNot(src);

    if(isFile == true) {
        // check extension
        let ext = src.split(".").pop(); // src ko split karlia and uska last element nikal liya jo split karke array bana hoga
        let extensionFolder = checkExtension(ext);
        // check whether extension folder exist of not and copy files
        copyTheFiles(src, dest, extensionFolder);
    }
    else {
        // they are directory, read their content and make recursion calls basedd on the content!!!
        let children = readContent(src);

        for(let i = 0; i < children.length; i++) {
            let childPath = path.join(src, children[i]);
            organizeFiles(childPath, dest);
        }
    }
}

// organizer("C:\\Users\\sapra\\Desktop\\WEBDEV\\01_Js_Intro\\raw\\f10");
// organizer("C:\\Users\\sapra\\Desktop\\WEBDEV\\01_Js_Intro");
// export 

module.exports = {
    fun : organizer
};