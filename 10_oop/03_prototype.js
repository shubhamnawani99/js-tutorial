let myHeros = ["Thor", "IronMan"]
let heroPower = {
    Thor: "Hammer",
    IronMan: "Laser",
    getThorPower: function(){
        console.log(`Thor power is ${this.Thor}`);
        
    }
}

// heroPower.shubham()  //  TypeError: heroPower.hitesh is not a function
Object.prototype.shubham = function (){
    console.log("Shubham is present in all objects");
}
// heroPower.shubham()  //  Shubham is present in all objects

Array.prototype.hey = function(){
    console.log("Hey!");
}
// heroPower.hey() //  heroPower.hey is not a function
// myHeros.hey() // Hey!

// Prototype-inheritence
const User = {
    name: "User",
    email: "User@gmail.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport  //  Prototypal Inheritence (Old-approach)
}
Teacher.__proto__ = User // Old-approach

// Modern 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Chai aur code       "
String.prototype.trueLength = function (){
    console.log(`${this.trim().length}`)
}
anotherUsername.trueLength()    //  13