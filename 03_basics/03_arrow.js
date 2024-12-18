const user = {
    username: "John",
    price: 999,
    welcomeMsg: function() {
        console.log(`${this.username}, welcome to website`); // this keyword used to refer currnet context     
        console.log(this);  //  { username: 'John', price: 999, welcomeMsg: [Function: welcomeMsg] }   
    }
}

// user.welcomeMsg()   //  John, welcome to website
// user.username = "Sam"
// user.welcomeMsg()   // Sam, welcome to website

console.log(this);  // {}, there is no context in Global here in Node (not in browser)

/*
function chai(){
    let username = "John"
    console.log(this)   // gives function definitions
    console.log(this.username); // undefined
}
chai()

const chai = () => {    // arrow function
    let username = "John"
    console.log(this);  //  {}
    console.log(this.username); // undefined
    
}
chai()*/

// Arrow Functions
const addTwo = (num1, num2) => {
    return num1 + num2  // Explicit Return
}
console.log(addTwo(37,74));   //  111

// Implicit return
const addThree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree(324,563,523));    //  1410

// Requirement of Paranthesis ()
const returnObject = () => ({username: "John"})  //  () paranthesis are COMPULSORY to return objects
console.log(returnObject()); //  { username: 'John' }