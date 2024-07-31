//types of variable decleration in js
const accountId=6969
let accountEmail='akashyadavsihma@gmail.com'
var accountPass ='12345'
accountCity='jaipur' 
let accountState;//undefined

// values changed here

// accountId=232 cant change the value if its in const
accountCity="mahendergarh"
accountEmail="AkashYadav"
accountPass="974234"

// prefer not to use var because of issue in block scope and functional scope
console.log(accountId)
console.table([accountId,accountEmail,accountPass,accountCity])