if (true){
    let a = 10      // local scope, literal can be changed
    const b = 20    // local scope, literal cannot be changed
    var c = 30      // global scope, literal can be changed
}

// {} => Scope
// console.log(a);  //  ReferenceError: a is not defined
// console.log(b);  //  ReferenceError: b is not defined
console.log(c);     //  30

// Working of "Let"
let outside_scope = 10
if (true) {
    let inside_scope = 100;
    console.log(outside_scope); //  10
    outside_scope = 20
}
// console.log(inside_scope);  //  ReferenceError: inside_scope is not defined
console.log(outside_scope); // 20, since let literals can be changed

// Working of "Const"
const outside_const_scope = 3.14
if (true) {
    outside_const_scope = 22.7  //  TypeError: Assignment to constant variable.
}



