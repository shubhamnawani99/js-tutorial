/*
const score = 400
console.log(score); // prints 400

// Explicit def.
const balance = new Number(100);
console.log(balance); // prints [Number:100]

console.log(balance.toString().length);
console.log(balance.toFixed(2));    // fix the precision values, prints 100.00

const otherNumber = 123.3462
console.log(otherNumber.toPrecision(3));    // precise value from LHS, prints 123

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // Auto-commas as per US standard, prints 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // Auto-commas as per Indian standard, prints 10,00,000

console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
*/

// ==================== MATHS ====================
console.log(Math.abs(-22.7))    // prints 22.7
console.log(Math.round(44.32)); // prints 44
console.log(Math.ceil(44.32));  // prints 45
console.log(Math.floor(44.78)); // prints 44
console.log(Math.min(3,4,5,6,7,8,125,45,15,56,15,1));

console.log(Math.random()); // generate value from 0 to 1
console.log(Math.random()*10 + 1); // set min val 1

const min = 10
const max = 20
// Generate randoms within a range
for (let index = 0; index < 10; index++) {
    console.log(min + Math.floor((Math.random()*(max - min + 1))));
}



