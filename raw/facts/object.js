
// hashmap, dict, unordered map
// time complexity of getting element from hasmap is O(1) thatswhy they are unordered
// they are key:value pair, key is always identical in single object

// object declaration
// let cap = {};


// everything in web is in the form of JSON
// JSON -> JavaScript Object Notation

let cap = {
    name: "Steve",
    lastName : "Rogers",
    friends : ["Tony", "Peter", "Bruce"],
    isAvenger : true,
    age : 35,
    address : {
        state : "New York",
        city : "Manhattan"
    },
    sayHi : function() {
        console.log("cap says Hello!!! :)");
        return "sends blessings";
    }
};

// console.log(cap);
// console.log(cap.lastName);
// console.log(cap.address.city);
// console.log(cap.address);

// console.log(cap.sayHi);
// console.log(cap.sayHi());

// ---------------------------------------------------------------------
// ------------------------IMPORTANT-----------------------------------
// this loop will print all the MediaKeySession, will search for the key in varibale key 
for(let key in cap) {
    console.log("key:", key, "value:", cap[key]);
}
// is loop me undefined print hoega kyuki ye "key" naam ka key dhunhdega pure code me jo exist nahi karta 
// agar koi key exist nahi karti objext me toh js usme undefined print karti hain!!!!

for(let key in cap) {
    console.log("key:", key, "value:", cap.key);
}

// ---------------------------------------
// GET
// 2 ways to get
// 1. cap.abc => will print undefined because key named "abc" doesnot exist in our object
// 2. let key = "lastName"
//  cap[key] will print lastname from the obejct



// -----------------------------------------------------------
// object -> value -> property boltey hai unhe
// object -> functions -> method boltey hain unhe

// in object adding key:"value" as abc:null is possible but adding null:null is not possible

// ------------------------------------------------------------------
// Create and Update

console.log(cap);
cap.isAvenger = false;
// above line will update the isAvenger key to false
cap.movies = ["firstAvenger", "captian ameica"];
// above line will add movies key in our object
console.log(cap);


// delete
delete cap.age;
console.log(cap);