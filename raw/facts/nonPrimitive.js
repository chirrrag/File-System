function sayHi(param) {
    console.log("Hey there! How are You??? :/");
    console.log("Parameter is", param);
    return "some value";
}

// sayHi("Chirag Sapra");
// sayHi(10);
// let returnedVal = sayHi([1,2,2.3,4.5]);
// console.log("value returned is", returnedVal);

function eww() {
    console.log("The name is, Chirrrag Sapra <3 ");
    let rv = Math.random() > 0.5 ? "Good" : false;
    // rv -> returned value
    return rv;
}

// let val = eww();
// console.log("Returned", val);

// --------------------------------------------------------------------
// Arrays

let arr = [1,2.3,
     "String", 'Single Quotes',
      [1,2,3,4,5],
       function inside() {
        console.log("I am function inside an Array :3 ");
        return "CHIRAG SAPRA";
        },
         {firstName: "Chirag", lastName : "Sapra"}
];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[arr.length-1]);
// console.log(arr[arr.length-1].firstName);
// console.log(arr[arr.length-1].lastName);

// calling the function from inside of an Array
// console.log(arr[arr.length - 2]());

let array = [1,2.3, "String", "pop"];
// console.log(array);
// array.push(20);
// console.log(array);
// array.pop();
// console.log(array);
// array.unshift(300);
// console.log(array);
// array.shift();
// console.log(array);
let slicedArr = array.slice(2,5);
console.log(array);
console.log(slicedArr);

let splicedArr = array.splice(2, 2);
console.log(array);
console.log(slicedArr);


