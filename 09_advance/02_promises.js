// 1. Creation of Promise
const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // Database Calls, Cryptography tasks, File IOs, Network calls
    setTimeout(() => {
       console.log("Async Task is complete");
       resolve() // connected to .then()
    }, 1000);
})    // new instance of a object

// Consumption of Promise
promiseOne.then(function() {
    console.log("Promise consumed");
})   // .then() is connected with resolve

// 2. Chaining
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async Task 2 is complete");
        resolve()
    }, 1000);
}).then(()=>{
    console.log("Async Task 2 is resolved");
    
})

// 3. Passing data using resolve
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve({username: "Chai", email: "eg@gmail.com"}) // passing data using resolve
  },1000)  
})
promiseThree.then((user)=>{
    console.log(user);
})

// 4. Error-throwing
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(error) {
            reject("ERROR: Something went wrong")
        }
        else{
            resolve({username: "Shubham", email: "sn@gmail.com"})
        }
    }, 1000);
})
promiseFour
.then((user)=>{
    console.log(user);  //  { username: 'Shubham', email: 'sn@gmail.com' }
    return user.username
})
.then((username)=>{
    // console.log(username);  //  Shubham
    return username
})
.catch((error)=>{
    console.log(error); //  ERROR: Something went wrong
})
.finally(()=>{
    console.log("Promise is over");
})

// 5. Async-await
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if(error) {
            reject("ERROR: JS went wrong")
        }
        else{
            resolve({username: "JavaScript", password: "123"})
        }
    }, 1000);
});
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(`The Promise Five response is ${response}`);
    } catch (error) {
        console.log(error); //  ERROR: JS went wrong
    }
}
consumePromiseFive()    // calling-async-await

// 6. Using fetch with async-await
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // returns a promise
        const data = await response.json()  // using await because json() takes time
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// getAllUsers()

// 7. API using fetch
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.catch((error)=>{
    console.log("Error Handed", error);
})
.then((data)=>{
    console.log(data);
})
.finally(()=>{"Fetch is over"})
