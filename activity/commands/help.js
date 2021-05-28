function helperFun() {
    console.log(`List of commands available are:-
                1. node myCmd.js view dirname flat
                2. node myCmd.js view dirname tree
                3. node myCmd.js organize dirname
                4. node myCmd.js help`);
}

// export
module.exports = {
    fun : helperFun
};