let months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function monthPrinter(month){
    switch (month) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        // default is not executed if break are not included in the upper code
        default:
            console.log("Invalid Value");
            break;
    }
}
const month1 = 3
const month2 = "true"
monthPrinter(month1)    // March
monthPrinter(month2)    // Invalid Value