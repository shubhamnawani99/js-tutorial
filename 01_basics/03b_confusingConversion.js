let value = 3
let negValue = -value
// console.log(negValue); // prints -3

// Add, subtract, multiply, divide, modulo work as expected
add = 2+2 
sub = 2-2
mul = 2*2
div = 2/2
rem = 2%3
power = 2**3
// console.table([add,sub,mul,div,rem,power]);

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2 // concatenation
console.log(str3); // prints "hello world"

// Complex situtaions handled as per ECMA Script
console.log("===== Complex Conversions =====");
console.log("1" + 2); // prints "12"
console.log(1 + "2"); // prints "12"
console.log("1" + 2 + 3); // prints "123", the first element determines the data-type
// since "1" is string, all elements that follow are treated as string
console.log("1" + 2 - 3); // minus(-) is not suported by strings, thus "1" + 2 results in "12"
// and "12" - 3 results in 9
console.log(1 + 2 + "3"); // prints 33, 1+2 = 3, 3 + "3" = 33

console.log("===== Special Conversions =====");
console.log(true); // prints true
console.log(+true); // prints 1, "" + true = 0 + 1 = 1
console.log(+""); // prints 0

let num1, num2, num3
num1 = num2 = num3 = 2+2 // not-desired

console.log("===== Prefix/Postfix =====");
let gameCounter = 100
console.log(gameCounter++); // print then increment, thus prints 100, then changes 100 => 101
console.log(++gameCounter); // increment then print, thus prints 101 + 1 = 102
let x = 20
console.log(++x + x++); // ++x => 20 => 21, then addition eval of 21 + 21 = 42 happens, then x becomes 22
console.log(x); // prints 22
let y = 20
console.log(y++ + ++y); // prints 42










