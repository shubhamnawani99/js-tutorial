const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const myNumbersIncremented = myNumbers.map((x) => x+10)
console.log(myNumbersIncremented);
/* [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
] */

// Chaining
const newNums = myNumbers.map((num) => num * 10).map(x => x+1).filter(x => x > 50)
console.log(newNums); //  [ 51, 61, 71, 81, 91, 101 ]
