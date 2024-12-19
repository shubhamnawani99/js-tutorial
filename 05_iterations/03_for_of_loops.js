// for-of loops
const array = [1,2,3,4,5]
for (const element of array) {
    // console.log(element);
}
const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Current character is ${greet}`);
}
// Maps - hold key: value pairs, remember the order
const map = new Map()
map['State'] = 'Delhi'  // State: 'Delhi', this is not a Key
map.set('Country','India')  //  'Country' => 'India', this is a key
console.log(map);   // Map(1) { 'Country' => 'India', State: 'Delhi' }

for(const key of map.keys()){
    console.log(key);   // Country
}
for(const [key, value] of map){
    console.log(key, value);    // Country India
}

// Objects
const myObject = {
    'game_1': "NFS",
    'game_2': "GTAVI"
}
/* for(const [key, value] of myObject){
     console.log(key, value);    // TypeError: myObject is not iterable
} */