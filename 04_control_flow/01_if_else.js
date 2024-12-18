// if-else
if (true) {
    // run this code if condition above is true
}
else {
    // run the other code if condition was false
}

const isLoggedIn = true
if (isLoggedIn){
}

// > (greater-than), < (less-than), >= (greateer-than-or-equal)
// <= (less-than-orequal), == (equal values), === (equal values and types)
// != (not-equal), !== (not-equal with types)

if (2 == "2"){ console.log("Not strict checking");} //  Not strict checking
if (2 === 2){ console.log("Strict Checking");}   //  Strict Checking

/* const score = 200
if (score > 100){
    const power = "Fly"
    console.log(`Power is ${power}`);
}
console.log(`Power is ${power}`); //ReferenceError: power is not defined */

// Short-hand-notation
const balance = 1000
// if (balance > 500)  console.log("Implicit Scope");

/* if (balance < 500){
    console.log("Insufficient Balance");
}
else if (balance < 750){
    console.log("Less than 750");
}
else if (balance < 900){
    console.log("Less than 900");
}
else{
    console.log("Sufficient Balance");
} */

// && for AND condition and || for OR condition
const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard){
    console.log("Allowed to buy any course");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User is logged in");
}