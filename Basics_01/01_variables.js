const accountId = 12344
let accountEmail = "matinmulla3435@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"

//accountId = 343634 this is not allowed becoz It is a Constant variable
accountEmail = "ana@banana.com"
accountPassword = "9968"
accountCity = "satara"

//so for calling all these funtion one by one using this below method is way too Boring
console.log(accountEmail);
//instead of this we can use tables such as below
console.table([accountId,accountEmail,accountPassword,accountCity]);

/*
Prefer Not to use "Var" keyword Because The JavaScript has a Issue in Block scope And in Funtional scope
*/

