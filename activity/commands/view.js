let viewerFlat = require("./viewFlat");
let viewerTree = require("./viewTree");


function view(dirName, mode) {
    if(mode == "flat") {
        console.log("Flat mode is implemented on directory", dirName);
        console.log(`----------------------------------------------------------`);
        viewerFlat.fun(dirName);
        console.log(`----------------------------------------------------------`);
    }
    else if(mode == "tree") {
        console.log("Tree mode is implemented on directory", dirName);
        console.log(`----------------------------------------------------------`);
        viewerTree.fun(dirName, "");
        console.log(`----------------------------------------------------------`);
    }
    else {
        console.log(`Wrong mode Entered!!!!!
                    type 
                    node myCmd.js help
                    for all list of commands`);
    }
}


// export it
module.exports = {
    fun : view
};