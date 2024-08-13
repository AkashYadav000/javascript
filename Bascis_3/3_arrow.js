const user={
    username:"Akash",
    age:23,
     WelcomeMessage:function(){
        console.log(`${this.username},Welcome sir`);
        // console.log(this);
        
    }
}
// user.WelcomeMessage()
user.username="yadav";
// user.WelcomeMessage()
  
function chai(){
    console.log(this);
    
}
// chai()

const addfunc=(num1,num2)=>({username:"Akash Yadav"})
    // num1+num2;//arrow function
console.log(addfunc(23,34));
