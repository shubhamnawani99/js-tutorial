// Objects using constructor (Singleton)
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //  { id: '123abc', name: 'John', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        user_full_name: {
            first_name: "John",
            middle_name: "",
            last_name: "Doe"
        }
    }
}

// console.log(regularUser.fullname.user_full_name.first_name);    // John

// Object Combination
const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "A", 4: "B"}

const obj3 = {obj1, obj2}
console.log(obj3);  // { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'A', '4': 'B' } }

const obj4 = {...obj1, ...obj2} // concat using spread operator, 
// const obj5 = Object.assign(obj1, obj2)
console.log(obj4);  //  { '1': 'A', '2': 'B', '3': 'A', '4': 'B' }
// console.log(obj5);  //  { '1': 'A', '2': 'B', '3': 'A', '4': 'B' }

console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ]

