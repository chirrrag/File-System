Applications are of 2 types:- CLI and GUI. we are making Command line application, Unix is a Command line based application...!!!

So, we will write a Command line utility
such that we will write commandds in terminal:- 
1. node mycli view <tree/flat> foldername :- will show the tree or flat view of all directories and files present in them!!
2. node mycli orgranize <folderName/default>:- will organize the files in various directories or the default directory
3. node mycli help :- will show us all the commmands

here mycli is command line utility, joo hum cmd me dalege toh vo samjh jaega ki is se kuch kaam karna hain!!!!
<!-- -------------------------------------------------------------- -->
make a pep.bat file and write:- 
 echo "hello"
 into it and run the file in terminal as pep.bat, it will first print the entire content into terminal than print "hello" coz it's written under echo

<!-- ------------------------------------------------------------------ -->
<!-- ------------------------ORDER---------------------------------- -->
<!-- ------------------------------------------------------------------ -->
1. mycli.js
2. MAKE DIRECTORY NAMED COMMANDS, INTO IT MAKE FILES:- 
 a. help.js
 c. view.js
    parts of view.js are viewFlat.js and viewTree.js respectively
 b. organize.js
    parts of organize.js are util.js

<!-- --------------------------------------------------------------------- -->
<!-- --------------------------------------------------------------------- -->
<!-- ------------------------------MODULE----------------------- -->
modules used are fileSystem and path(builtin module of nodejs, no need to install them)
to use them
1. let fs = require("fs");
2. let path = require("path");
 
    * Functions used are *
fs.lstatSync(path).isFile()
fs.lstatSync(path).isDirectory()
    *** They both will return boolean value whether the specified path is File or Directory ***

fs.readDirSync(path) *** will read the content of the specified path of file and feed it into a variable ***

path.join(src, "name") 
    *** will join the path and return that path ***

path.basename(src)
    *** will tell about the base name of specified path ***


<!-- ----------------------------------------------------------------------- -->
<!-- ----------------HOW THE PROJECT WORKS                          -->
<!-- ----------------------------------------------------------------------- -->

we have made the project file system with which we learnt about using little bit of javascript and learnt 2 basic modules of Node.js that area :- FILESYSTEM and PATH modules. we have also used recursion in viewFlat.js and viewTree.js file
the recursion is in the treee format. and have written 3 main commands using these modules. the commands are
help, organize, and view(flat and tree)
`List of commands available are:-
                1. node myCmd.js view dirname flat
                2. node myCmd.js view dirname tree
                3. node myCmd.js organize dirname
                4. node myCmd.js help`
we have also made our project global by using shebang syntax for node and the project can be run easily  by typing :-4
    *** 1. mycmd view <dirname> flat ***
    *** 2. mycmd view <dirname> tree ***
    *** 3. mycmd organize <dirname/ donot give any path to run it into the current working directory ***
    *** 4. mycmd help`    ***

to run our project in current working directory, we have added command that if filePath is not given, than we have types <!-- process.cwd() --> such that our code can run in current working directory

view flat will give:- flat file view
view tree will give:- tree file view
organize command will organize the files into various folder in the directory name "organized_FILES" here the media will be into stored into direcoty of media, docs will be stores into directory named documents and the unknown files will be stored in the directory named "others". This is done via we have stored the extension of media, doc, archives and app related files into object and we filter them via these extension stored in object
    *** ----------------------------------------------------------------- *** 
    *** ----------------------------------------------------------------- *** 
    *** --------- STEPS FOR MAKING PROJECT GLOBAL-------------------------- ***
    1. npm init -y :- this will create the package.json file in which we can check and write bin file
    2. write shebang syntax of node into main file, i.e. in our case myCmd.js
    Shebanf syntax of node is :- #! /usr/bin/env node
    3. add bin property into package.json file
    here we added 
    "bin": {
        "mycmd": "myCmd.js"
    }

    here mycmd is the name which we will use in terminal to run our file instead of typing node mycmd.js, and the file which we want to run is mycmd.js when mycmd is entered!!!!


    THANKYOU <3
