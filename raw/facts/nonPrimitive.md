nonPrimitives in javaScript are Arrays, Functoins, and objects
<!-- --------------------------------------------------------------------- -->
<!-- Arrays -->
in java array is collecion of homogenous types, but
in js arrays are collection of anything!

function inside an Array will return the object of the function like :[Function: inside]
To call that function from inside array:- type "arr[arr.length - 1]()"


<!-- Important -->
if we print arr[arr.length] then it will give us UNDEFINED, it will not show us index out of bound 

<!-- push pop shift unshift -->

push-> add element at end of array
pop-> remove element from end of array
shift->removeFirst
unshift->addFirst

<!-- slice, splice -->

slice create the copy of the array
array.slice(starting idx, endidx);
here starting idx is inclusive and end idx is exclusive

SPLICE remove element from thr array and push it into another array
array.splice(startIdx, DeleteCount);
starting idx se lekr kitne element delete karne hain!!!!

<!-- ------------------------------------------------------------------------ -->
<!-- Functions -->
function always returns single Value
we use to invoke function to make a function Run
1. if we donot return anything form the functon, it will default returns UNDEFINED
function hi() {

}
let rv = hi();
console.log(rv) ==> will return undefined



<!-- Objects -->

Objects are key value Pair