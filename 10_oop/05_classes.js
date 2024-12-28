// ES6
class User {
    // data
    username = ""
    // methods
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encrpytPassword(){
        return `${this.password}abc`
    }
}

const user1 = new User("user","user@user.com","user@123")
console.log(user1.encrpytPassword());   //  user@123abc

// Behind the scenes
/* 
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encrpytPassword = function(){
    return `${this.password}abc`
}
const user2 = new User("user2", "user2@user.com", "user2@456")
console.log(user2.encrpytPassword());   //  user2@456abc 
*/