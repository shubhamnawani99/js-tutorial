// while-loop
let i = 0
while(i < 5){
    console.log(i);
    i++;    // increment the iterator
}

// do-while loop - run's at least once
let j = 10
do{
    console.log(j);
    j += 10;    // increment the iterator
}while(j <= 50);

// Difference between while and do-while loops
let k = 10
while(k < 0){
    console.log("Inside While Loop");   // Does not execute
    k++;
}
k = 10
do{
    console.log("Inside do-while loop");    // Prints - Inside do-while loop
    k++;
} while (k < 0);