let score = '33'

console.log(typeof score); // string

// Convert String to Number 
console.log("===== Numbers =====");
let scoreNumber = Number(score) // Constructor to convert to Number
console.log('Type of scoreNumber is', typeof scoreNumber); // mumber

let alphanumeric = '123abc'
let alphanumericToNumber = Number(alphanumeric) // this works! and does not throw error
console.log('alphanumericToNumber is', alphanumericToNumber); // prints NaN - Not a Number
console.log('typeof alphanumericToNumbe is', typeof alphanumericToNumber); // but it's type is Number :/
console.log('isNaN(alphanumericToNumber) is', isNaN(alphanumericToNumber)); // prints true

// Convert to Boolean
console.log("===== Booleans =====");
console.log("1 is", Boolean(1)); // prints true
console.log("0 is", Boolean(0)); // prints false
console.log('"" is', Boolean("")); // prints false
console.log('"hello" is', Boolean("Hello")); // prints true
console.log("undefined is", Boolean(undefined)); // prints false
console.log("null is", Boolean(null)); // prints false

// Convert to String
console.log("===== Strings =====");
console.log("33 is", String(33)); // prints 33
console.log("Type of", String(33), "is", typeof String(33)); // Type is string
