// For-each loop for array
const programming = ["JS", "Ruby", "Python", "Java", "C++"]
programming.forEach(element => {
    console.log(`The programming langauge is ${element}`);
});/* 
The programming langauge is JS
The programming langauge is Ruby
The programming langauge is Python
The programming langauge is Java
The programming langauge is C++ */

programming.forEach((item, index, array) => {
    console.log(item, index, array);
})
/* JS 0 [ 'JS', 'Ruby', 'Python', 'Java', 'C++' ]
Ruby 1 [ 'JS', 'Ruby', 'Python', 'Java', 'C++' ]
Python 2 [ 'JS', 'Ruby', 'Python', 'Java', 'C++' ]
Java 3 [ 'JS', 'Ruby', 'Python', 'Java', 'C++' ]
C++ 4 [ 'JS', 'Ruby', 'Python', 'Java', 'C++' ] */

const myCoding = [
    {langName:"Javascript", langFile: "JS"}, 
    {langName:"Java", langFile: "java"}, 
    {langName:"Python", langFile: "py"}
]

myCoding.forEach((item, index) => {
    console.log(`The Language Name is ${item.langName} and the Language File is ${item.langFile}`);
})
/* The Language Name is Javascript and the Language File is JS
The Language Name is Java and the Language File is java
The Language Name is Python and the Language File is py */