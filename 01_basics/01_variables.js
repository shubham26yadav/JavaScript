const accountId = 144553
let accountEmail = "shubham123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2   not allowed (Assignment to constant variable

accountEmail = "ksy@.com"
accountPassword = "2131231"
accountCity = "Noida"

console.log(accountId);

/*
Perver not to use var
because of issue in blok  scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

