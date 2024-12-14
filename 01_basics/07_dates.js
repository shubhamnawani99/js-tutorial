// Dates are calculated in milliseconds from 1st Jan 1970 (epoch time)
// Future proposal is Temporal class, which would be used as Math class

/* General Date Methods
let myDate = new Date();
console.log(myDate); // 2024-12-14T10:09:00.887Z
console.log(myDate.toString()); // Sat Dec 14 2024 10:10:16 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Sat Dec 14 2024
console.log(myDate.toISOString()); // 2024-12-14T10:10:55.438Z
console.log(myDate.toJSON()); // 2024-12-14T10:11:09.041Z
console.log(myDate.toLocaleDateString()); // 12/14/2024
console.log(typeof myDate); // object
*/

/*  Set Specific Date
let myCreatedDate = new Date(2024, 0, 23);  // Month Starts from 0 index, Tue Jan 23 2024
let myDate = new Date("2024-01-14"); // Sat Jan 14 2024
let mmDate = new Date("2024-Feb-14"); // Wed Feb 14 2024

// TimeStamps
let myTimeStamp = Date.now()
console.log(myTimeStamp);   // 1734171381990 in milliseconds
console.log(myCreatedDate.getTime());   // gives the time in milliseconds
console.log( Math.floor(Date.now() / 1000));    // seconds
*/

/*
let newDate = new Date();
console.log(newDate.toDateString());    // Sat Dec 14 2024
console.log(newDate.getMonth());    // 11 -> December (indexing is from 0)
console.log(newDate.getDay());  // 6 => Saturday
console.log(newDate.getDate()); // 14
*/

// Customized Format for Date
console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));    // prints Staturday














