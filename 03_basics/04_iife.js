// Immediately Invoked Function Expressions (IIFE)
(function chai(){   // Named IIFE
    console.log("DB Connected");    //  DB Connected
})();   // ; is added to end the scope of IIFE

// 1st (function definition here) => Function Definition
// 2nd () => Function Call

((name) => {    // Anon IIFE with params
    console.log(`DB Connected TWO ${name}`);    //  DB Connected TWO John
})("John"); // Param Passed here