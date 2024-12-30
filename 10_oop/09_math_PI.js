// console.log(Object.getOwnPropertyDescriptor(Math, "PI"))
/* {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
} */

const chai = {
    name: "Ginger",
    price: 25,
    isAvailable: true,
    orderChai: function(){
        console.log("Issue");
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
/* {
    value: 'Ginger',
    writable: true,
    enumerable: true,
    configurable: true
} */
Object.defineProperty(chai, "name", {writable: false, enumerable: false})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
/* {
    value: 'Ginger',
    writable: false,
    enumerable: false,
    configurable: true
} */
chai.name = "Hello"
console.log(chai.name); //  Ginger

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`The key is: ${key} and value is: ${value}`);
        /* 
        The key is: price and value is: 25
        The key is: isAvailable and value is: true 
        */
    }
}

// Object.defineProperty(Math, "PI", {writable:true})  //   Cannot redefine property: PI