const accountId = 14454;
let accountEmail = "piyush@gmail.com";
var accountPassword = "321";
// try not to use var
accountCity = "sirsa";

let accountState;

// accountId=654
// console.log(accountId);  you cannot update the value of a constant

accountEmail = "jangra@gmail.com";
accountPassword = "6548798";
accountCity = "hisar";

console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]);
