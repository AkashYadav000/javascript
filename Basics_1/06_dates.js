let mydate=new Date;
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toTimeString());
// console.log(typeof mydate);

let mycreatedate=new Date(2024,0  , 1,23,7,3)
// console.log(mycreatedate.toString());

let mytimestamp=Date.now();
// console.log(mytimestamp);
// console.log(mycreatedate.getTime());
// console.log(Date.now()/1000);

mydate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})
