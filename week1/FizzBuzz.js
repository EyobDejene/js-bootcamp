// #########   EXERCISE FIZZBUZZ ######### //

// define variables
let output = null;
let i = 1;

//create a while loop for numbers between 1 .. 100
while (i <= 100) {
    // if the number can be divide by 3 or 5 change output
    if (i % 3 === 0 && i % 5 === 0) {
        output = " Fizz-Buzz";
        // if the number can be divide by 3 change output
    } else if (i % 3 === 0) {
        output = " Fizz";
        // if the number can be divide by 5 change output
    } else if (i % 5 === 0) {
        output = " Buzz";
        // else the output is the number
    } else {
        output = i;
    }
    i++;

    // display message output
    console.log(output);
}

