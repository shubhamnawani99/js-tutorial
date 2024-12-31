const User = {
    _email: 'default@email.com',
    _password: "pspspspsps",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){   // used as a property as opposed to a method
        this._email = value
    }
}

const u = Object.create(User)
console.log(u.email);   //  DEFAULT@EMAIL.COM
// console.log(u.email()); //  TypeError: u.email is not a function
