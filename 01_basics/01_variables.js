const accountId =144553
let accountEmail="chitranshjain2025@gmail.com"
var accountPassword="12345"
accountCity="Faridabad"// it is also possible but not to use
let accountState;

// accountId=2 // not allowed

accountEmail="cj@cj.com"
accountPassword="21212121"
accountCity="Gurugram"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/