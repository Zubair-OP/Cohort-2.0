let prompt = require('prompt-sync')();

let a = 10;
let b = 20;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log("After swapping: a =", a, ", b =", b);
[a,b] = [b,a];
console.log("After swapping using destructuring: a =", a, ", b =", b);