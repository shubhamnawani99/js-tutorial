// Reduce - uses an accumulator (AC) and current value to compute
// The value is stored in AC, AC initially has some default value that is set after the callback
// Syntax => 
// array.reduce((AC, Object) => (AC operation_on(+,-,/,*) Object.key), Default_Value)
// The result is stored in AC

const myNums = [1,2,3,4,5,6]
initValue = 0
const myTotal = myNums.reduce((acc, currentValue) => 
    {
        console.log(`The Accumulator is ${acc} and the Current Value is ${currentValue}`);
        return acc + currentValue
    }, 
    initValue)
console.log(myTotal);   //  21

// In-short
const myTotalShort = myNums.reduce((a,c) => (a+c), 0)
console.log(myTotalShort); //  21

const shoppingCart = [
    {
        itemName: "JS Course", price: 2999
    },
    {
        itemName: "Python Course", price: 2499
    },
    {
        itemName: "Android Dev", price: 5999
    },
    {
        itemName: "AI and ML", price: 12999
    }
]

// Add prices in shopping cart
const totalCost = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(`The total price is ${totalCost}`); // The total price is 24496
