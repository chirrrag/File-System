function f3() {
    console.log("I am f3");
    return "returned from f3";
}
function f2() {
    console.log("I am f2");
    return "returned from f2";
}
function f1() {
    console.log("I am f1");
    return "returned from f1";
}

console.log("REturned value are" , f1(), f2(), f3());

// output will be:-
// I am f1
// I am f2
// I am f3
// REturned value are returned from f1 returned from f2 returned from f3