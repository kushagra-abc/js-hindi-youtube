const accountId = 144553
let accountEmail = "kushagra@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


//accountId = 2 not allowed

accountEmail = "hchc@hc.com"

accountPassword = "2121"

accountCity = "Bengaluru"

console.log(accountId);

/*
Prefered not to use var
coz of issue in block issue and functional scope
*/

console.table([accountId, accountEmail , accountPassword, accountCity, accountState])
