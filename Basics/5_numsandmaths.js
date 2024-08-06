const score=100
console.log(score);//*? this is not defining that this is number

const number=new Number(100)// *!this is defining this is number//
console.log(number);
console.log(number.toString().length);// length of number
console.log(number.toFixed(2));//**decimal after no */

const precision=123.567;
console.log(precision.toPrecision(5));

const commas=1000000;
console.log(commas.toLocaleString('en-IN'));//*! comma in between

// Maths Libraray //

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.9));
// console.log(Math.ceil(4.39));
// console.log(Math.floor(4.9));
// console.log(Math.min(5,6,7,9,2,4,6,7,3,4,));
// console.log(Math.max(5,6,7,9,2,4,6,7,3,4,99));

console.log(Math.random());//*!   value come inly in between 1 and 0
console.log(Math.random()*10+1);
console.log((Math.random()*10)+1);//value between 1 and 9

const  min=10;
const max=23;
console.log(Math.floor(Math.random()*(max-min+1)+min));




