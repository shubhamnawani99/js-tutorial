function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// console.log(sayMyName) // reference - [Function: sayMyName]
// sayMyName() // function call

function addTwoNumbers(x, y){    // (x,y) are `parameters`
    return x + y    // return keyword returns a value
    console.log("Unreachable Code");   
}
addTwoNumbers(1, 2);    // prints 3 // (1,2) are `arguements`

function loginUserMessage(user_name = "Sam"){  // assigning default values using '='
    if(!user_name){   // user_name === undefined
        return "Please enter a username";
    }
    return `${user_name} just logged in`
}
console.log(loginUserMessage("User1")); // User1 just logged in
console.log(loginUserMessage()); // Sam just logged in 

// Spread and Rest operators
function calculateCartPrice(...prices){
    return prices
}
console.log(calculateCartPrice(200, 400, 500)); // [ 200, 400, 500 ]

// Objects and Functions
const user = {
    user_name: "John",
    price: 199
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.user_name} and price is ${anyObj.price}`);
}
handleObject(user)  // Username is John and price is 199
handleObject({user_name: "Doe", price: "799"})  // Username is Doe and price is 799

const myNewArray = [200, 400, 100, 650]
function returnSecondVal(getArray){
    return getArray[1]
}
console.log(returnSecondVal(myNewArray));   // 400
