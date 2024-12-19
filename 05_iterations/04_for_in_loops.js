// for-in loop for Object Iteration
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}
for (const key in myObject) {
    console.log(`Key = ${key} and Value = ${myObject[key]}`);
}
/* Key = js and Value = JavaScript
Key = cpp and Value = C++
Key = rb and Value = Ruby
Key = swift and Value = Swift by Apple */

// for-in loop for Arrays
const programming = ["JS", "Ruby", "Python", "Java", "C++"]
for(const key in programming){
    console.log(key, programming[key]);  // keys = [0,1,2,3,4], values = ["JS", "Ruby", "Python", "Java", "C++"]
}