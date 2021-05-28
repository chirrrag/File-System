let input = process.argv.slice(2);
console.log(input);

let num = input[0];
let flag = true;

for(let div = 2; div*div <= num; div++) {
    if(num % div == 0) {
        flag = false;
    }
}

if(flag == true) {
    console.log(num, "is prime");
}
else {
    console.log(num, "is not prime");
}