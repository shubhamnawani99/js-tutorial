// const for Constant Variables, cannot be changes
// for eg: const PI = 3.14159265
const accountId = 42355;    
let accountEmail = "xyz@yahoo.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState

// accountId = 2 
// TypeError: Assignment to constant variable.
// console.log(accountId);

accountEmail = "sn@snail.com"
console.log(accountEmail) // prints "sn@snail.com"

accountPassword = "35734689324"
console.table([accountPassword]) // prints "35734689324"

accountCity = "Manipur"
console.log(accountCity); // prints "Manipur"

// LET vs VAR
// Scope of `let` is local whereas scope of `var` is global
// hence it is recommended to use `let` keyword.

console.log(accountState); // prints - undefined
