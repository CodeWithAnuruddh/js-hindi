const accountId  = 14454
let accountEmail ="aps902770@gamil.com";
var accountPassword = "00grytyof"
accountcity = "jaipur";
let accountstate;//if you did declare it or give value as nothihg then it gives result as undefined.

// let accountId =23;//we can not redeclare the constant again
accountEmail = "newaccount@gmail.com";
accountPassword = "newpassword";
accountcity = "sulatanpur"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountcity);
console.table([accountId, accountEmail,accountPassword,accountcity,accountstate])
/*for multiline comment
prefer not to use var because it is a global scope variable and let is a block scope which can be declared in a block to does not giving its output outside */



