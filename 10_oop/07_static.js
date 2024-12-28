class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`The username is ${this.username}`);   
    }
    static createId(){  
        return '123'
    }
}
const user = new User("Shubham")
// console.log(user.createId());   //  user.createId is not a functionm since user was made using new keyword
// Statically declared functions can only be accessed directly by Classes without delcaring using new keyword
console.log(User.createId());   //  123

class Teacher extends User{
    constructor(username){
        super(username)
    }
}
console.log(Teacher.createId());    //  123
