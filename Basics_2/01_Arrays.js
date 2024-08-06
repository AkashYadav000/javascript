const arry=[0,1,2,3,4,5];
// console.log(arry[7]);

// console.log(arry.length);

// arry.push(901)
// arry.push(90)
arry.unshift(90)//element shifts at zero index and because of that all elements have to shift
arry.shift();//removed unshift elements

// console.log(arry.includes(9));
// console.log(arry.indexOf(9));


// console.log(arry.length);   

// console.log(arry);
// console.log(arry.length);   

console.log("A",arry);

const myarr1=arry.slice(1,3);
console.log(myarr1);
console.log("B",arry);


const myarr2=arry.splice(1,3);
console.log("C",arry);
console.log(myarr2);

