function setUsername(username){
    this.username = username
    return this
}
function createUser(username, email, password){
    setUsername.call(this, username)
    // this.username = setUsername(username).username // equivalent code
    this.email = email
    this.password = password
}

const user1 = new createUser("Shubham", "SN@gmail.com", "1234")
console.log(user1);
/* createUser {
    username: 'Shubham',
    email: 'SN@gmail.com',
    password: '1234'
  } */
