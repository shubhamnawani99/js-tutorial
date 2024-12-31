class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(email){
        this._email = email
    }
    get password(){
        return `The password is ${this._password.toUpperCase()}` 
        //  TypeError: Cannot set property password of #<User> which has only a getter
        //  Soln: Need a setter()
    }
    set password(password){
        this._password = password    //  RangeError: Maximum call stack size exceeded
    }
    // both constructor and set_password are setting the password, thus call stack is exceeded
    // Race Situation
    // Solution: added _ to the variable i.e. _password, used to identify as private
}

const hitesh = new User("shubham@email.com","abc")
console.log(hitesh.password);   //  The password is ABC
// When accessing the prop directly it calls the get password() method
console.log(hitesh.email);