// singleton
// Object Literals

const mySym = Symbol("Key1")    // Symbol

// Object.create()
const JSUser  = {
    name: "Shubham",
    "Full Name": "Shubham Nawani",
    [mySym]: "myKey1",  // use square brackets to access as Symbol
    age: 35,
    location: "Delhi",
    email: "temp@temp.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}  // key: value pairs, can be any data type or method

console.log(JSUser["name"]);    // Shubham
console.log(JSUser.name);   // Shubham

console.log(JSUser["Full Name"]);    // Shubham Nawani
// console.log(JSUser.full name);   // Not Allowed

console.log(JSUser[mySym]); // myKey1

JSUser.email = "newemail@tmp.in"
console.log(JSUser["email"]);   // newemail@tmp.in

// Object.freeze(JSUser)   //  to make read-only

JSUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JSUser.greeting); // [Function (anonymous)] (Callback)
JSUser.greeting(); // Hello JS User

JSUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["Full Name"]}`)  
    /*   Using backticks `` you can access variables and using 'this' 
    keyword we can access the elements of current object */
}

JSUser.returnGreeting = function(){
    return "Hello Greeting with Return"
}
JSUser.greetingTwo();  //  Hello JS User, Shubham Nawani
console.log(JSUser.returnGreeting());   // Hello Greeting with Return, here we are using log to print the returned string
