const name = "Shubham"
const repoCount = 26
// console.log(name + " " + repoCount);    // concatenate

// Backticks are used with placeholders - Modren way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// using String class
const playlist = new String("Chai With JS")
console.log(playlist.toString());   // Print the String object using toString() method
console.log(playlist[0]);           // Print C
console.log('The length is ', playlist.length);     // Prints 10
console.log(playlist.toUpperCase());                // Prints "CHAIWITHJS"
playlist[0] = "E"               // Trying to set 'C' to 'E'
console.log(playlist[0]);       // Strings are immutable

// Slicing using sub-string
console.log(playlist.substring(0, 4));  // Prints Chai, 4th index is exclusive
// Convert to list of words using split()
const list = playlist.split(" ")
console.log(list);  // Prints [ 'Chai', 'With', 'JS' ]
// Trim method to remove spaces
const inputData = "               Input Data is entered          "
console.log('Without Trim() => ', inputData);   //  prints "               Input Data is entered          "
console.log('With Trim() => ', inputData.trim()); // prints "Input Data is entered"
// Replace method
const url = "https://shubham.com/shubham%20is%20awesome" // spaces are encoded as %20 in url
console.log(url.replace('%20', "-")) // replaces first instance, prints `https://shubham.com/shubham-is%20awesome`
console.log(url.replaceAll('%20', "-")) // replaces All instances, prints `https://shubham.com/shubham-is-awesome`





