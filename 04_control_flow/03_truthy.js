// # Truthy and Falsy Values
function truthyOrFalsy(value){
    if(value){
        console.log("Truthy");
    }
    else{
        console.log("Falsy");
    }
}

const emptyString = ""
const emptyArray = []
const emptyObject = {}
const zero = 0
const one = 1
const zeroString = "0"

truthyOrFalsy(false) // Falsy
truthyOrFalsy(emptyString)  // Falsy
truthyOrFalsy(zero) // Falsy
truthyOrFalsy(null) // Falsy
truthyOrFalsy(undefined)    // Falsy
truthyOrFalsy(NaN)  // Falsy
truthyOrFalsy(-0)   // Falsy

truthyOrFalsy(emptyArray)   // Truthy
truthyOrFalsy(emptyObject)  // Truthy
truthyOrFalsy(one)  // Truthy
truthyOrFalsy(zeroString)   // Truthy
truthyOrFalsy(function(){}) // Truthy

// check Empty Object
if (Object.keys(emptyObject).length === 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined - for error-handling
let val1;
val1 = 5 ?? 10  // if reponse is null then 10 will be assigned
console.log(val1);  //  5
let val2
val2 = null ?? 10
console.log(val2);  //  10

// Terniary Operator - condition ? true : false
const num1 = 10
const num2 = 20
const larger = num1 > num2 ? num1 : num2 
console.log(`The larger number is ${larger}`);