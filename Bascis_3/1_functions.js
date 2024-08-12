function akash(){
    console.log("y");
    console.log("a");
    console.log("d");
    console.log("a");
    console.log("v");
}

// akash();

// function addTwoNumbers(no1,no2){
//    console.log
//     (no1+no2);
// }

// addTwoNumbers(5,10);

function addTwoNumbers(no1,no2){
    
    //  let result=no1+no2;
    //  return result

    return no1+no2;
 }

 const result=addTwoNumbers(52,10);
// console.log("Result",result)

function user(username){
    // if(username===undefined)
        if(!username){

        console.log("please enter your name");
        return
        
    }
    return `${username} just logged in `

}
console.log(user());
