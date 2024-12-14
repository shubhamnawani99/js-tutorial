// Shallow Copies, Dynamic, Re-sizable having mixed values
const myArray = [0,1,2,3,4,5]
// Array elements can be mixed
const mixedArray = [0,'a',"Abc",true,false, new Date(), Math.random(), 22.7, Math.PI]
console.log(mixedArray.toLocaleString()); // 0,a,Abc,true,false,12/14/2024, 10:41:39 AM,0.265,22.7,3.142

/* Shallow-Copy
const newArray = myArray;
console.log(myArray);   // [ 0, 1, 2, 3, 4, 5 ]
newArray[0] = 1     // the first element has been changed from 0 to 1
console.log(myArray);   // [ 1, 1, 2, 3, 4, 5 ]
*/

/* Array Methods
myArray.push(6) // adds element to the end of array
console.log(myArray); //  [0, 1, 2, 3, 4, 5, 6]
myArray.pop()   // removes last value from array

myArray.unshift(12) // Insert at the begin of array
console.log(myArray);//  [12, 0, 1, 2, 3, 4, 5]
myArray.shift(); // Remove the first element of array

const newArray = myArray.join()
console.log(typeof myArray);    // object
console.log(typeof newArray);   // string
*/

console.log("A ", myArray)  //  A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArray.slice(0, 2);
console.log(myn1);  // [ 0, 1 ]
console.log("B", myArray);  // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArray.splice(0, 2);  // arr[0:1] is removed from array 
console.log(myn2);  // [ 0, 1 ]
console.log("C", myArray);  // B [ 2, 3, 4, 5 ]



