class User {
    profession = ""
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`The username is ${this.username}`);
    }
    setProfession(profession){
        this.profession = profession
    }
    getProfession(){
        return this.profession
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username) // Calling the parent constructor ==> super.username = username
        this.email = email
        this.password = password
        super.setProfession("Teacher")  // Using a method defined in Parent Class
    }
}

const teacher1 = new Teacher("teacher1", "teacher@gmail.com","123")
teacher1.logMe()    //  The username is teacher1
console.log(teacher1.getProfession())   //  Teacher