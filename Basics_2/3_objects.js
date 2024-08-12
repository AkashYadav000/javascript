//literals
const caste= Symbol("rao");
const user={
myName:"Akash yadav",
[caste]:"yadav",
"Age":"20",
email:"akashyadav@gmail.com"

}
// object.email="akashyadavchatgpt"
// object.freeze(user)
// console.log(user.email);
// console.log(user["Age"]);
// console.log(typeof user.caste);

user.greetings=function(){
    console.log("helo user");
    

}

user.meeting=function(){
    console.log(`hello user, ${this.myName}`);
    

}
console.log(user.greetings());
console.log(user.meeting());

