const user = {
    username: "Shubham",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){ // Arrow functions, can't be used when using this-keyword
        // console.log("Got user details from DB");
        console.log(`The username is ${this.username}`);
    }
}
console.log(user.username);         // Shubham
console.log(user.getUserDetails()); //  The username is Shubham

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}
console.log(new User("A",1,true));  //  User { username: 'A', loginCount: 1, isLoggedIn: true }
console.log(User("A",1,false)); //  <ref *1> Object [global]

// new keyword is used to give a copy of instance
// const userOne = User("A",1,true)
// const userTwo = User("B",2,false)
// userTwo will override the values set by userOne, this is basically working as a setter for the whole function

