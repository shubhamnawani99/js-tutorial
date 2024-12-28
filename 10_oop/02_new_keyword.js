function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2   // ???
console.log(multiplyBy5(5))         //  25
console.log(multiplyBy5.power);     //  2
console.log(multiplyBy5.prototype); //  {}

function createUser(username, score){
    this.username = username
    this.score = score
    this.showScore = function(){
        console.log(`The score of user: ${this.username} is ${this.score}`);
    }
    // this.increment = function(){this.score--;}
    return this;
}
const userOne = new createUser("Shubham", 12);
const userTwo = new createUser("Raju", 250)

// Injecting functionality
createUser.prototype.increment = function(){
    this.score++;
}
userOne.showScore()     // The score of user: Shubham is 12
userTwo.showScore()     // The score of user: Raju is 250
userOne.increment()     // increments the score of User object by 1, userTwo is not affected
userOne.showScore()     // The score of user: Shubham is 13
userTwo.showScore()     // The score of user: Raju is 250

/* Without the new keyword
const userOne = createUser("Shubham", 12);
// And after injecting the additional functionality
createUser.prototype.increment = function(){
    this.score++;
}
// if we access the following 
userOne.increment() 
// we get the following error
``` TypeError: userOne.increment is not a function ```
// Why??
// Since, the `new` keyword is what binds the injected functionality to the object
// Thus, new keyword is important to attach to propagrate the injected func.
*/