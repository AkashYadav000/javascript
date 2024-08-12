const arr=["arr4","sdf","sdfsd","fddsf"];
const arr2=["nitnn","vitin","bitnin"];
const yadav=arr.concat(arr2);
// console.log(yadav); // way of merging

const spread=[...arr,...arr2];//way of merging
// console.log(spread);


const array=[1,2,[34.45,56,],2,3,2,34,5565,[11,222,33,44,55],[23,45,56,67,78,89,90],12];
const  print=array.flat(Infinity);
// console.log(print);
console.log(Array.isArray("AKASH YADAV"));
console.log(Array.from("AKASH YADAV"));
console.log(Array.from({name:"AKASH YADAV"}));