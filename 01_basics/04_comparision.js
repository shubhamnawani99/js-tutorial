// console.log(2 > 1);
// console.log(2 == 1);

// console.log("2" > 1);
// before comparision make sure the data types are same
// console.log("02" > 1);

console.log("===== Null =====");
console.log(null > 0);
console.log(null == 0);     // equlity check does not convert NULL to 0
console.log(null < 0);
console.log(null >= 0);     // other operators >, <, >=, <= convert NULL to 0
console.log(null <= 0);     // other operators >, <, >=, <= convert NULL to 0

console.log("===== Undefined =====");
console.log(undefined == 0);    // False
console.log(undefined <= 0);    // False
console.log(undefined == null); // True??

console.log("===== Strict Check =====");
// === checks both values and data-type
console.log("2" === 2);     // False




