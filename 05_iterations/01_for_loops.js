// For Loop
for (let i = 1; i <= 10; i++){
    if (i == 5){
        console.log("5 is best number");
        continue;   // skips the next console.log()
    }
    else if(i == 9){
        console.log("9 ends the loop");
        break;  // Stops the present loop execution
    }
    console.log(i);
}

// 2D Loops
const matrix = [[1,2,3],[4,5,6]]
for(let i = 0; i < matrix.length; i++){ // inner-loop
    for(let j = 0; j < matrix[i].length; j++){  // inner-loop
        console.log(`The present value is: ${matrix[i][j]}`);
    }
    console.log("Outer-loop-ends");
}
