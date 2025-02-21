let score = 500
// console.log(score);

const balance = new Number(500)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

let othernumber  =123.894
// console.log(othernumber.toPrecision(3));


let hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));



// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++//

// console.log(Math);
// console.log(Math.abs(-7));
// console.log(Math.round(4.8));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

console.log(Math.min(1,2,3,4,5,6,7));
console.log(Math.max(1,2,3,4,5,6,7));

console.log(Math.random());
console.log(Math.floor(Math.random() *10) + 1);

let min =10
const max=20
console.log(Math.floor(Math.random() *(max-min+1)) + min);