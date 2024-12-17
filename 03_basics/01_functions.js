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