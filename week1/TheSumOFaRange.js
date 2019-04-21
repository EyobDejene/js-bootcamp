// #########   EXERCISE The Sum of a Range ######### //


//###### First step #### //
//create an empty array
let array = [];

// function with a start and a end
function range(start, end) {
    // loop trough the range and add them in the array
    for (let i = 1; i <= end; i++) {
        array.push(i);
    }
    // return the result
    return array;
}


//###### Second step #### //
//create an empty array
let array2 = [];

// function with a start and a end
function range_2(start, end) {
    // loop trough the range and add them in the array
    for (let i = 1; i <= end; i++) {
        array2.push(i);
    }
    // return the result
    return array2
}

// sum function
function sum(array2) {
    // return the sum of the array values
    return array2.reduce(function (a, b) {
        return a + b;
    }, 0);
}


//###### Third step #### //
//create an empty array
let array3 = [];

function range_3(start, end, steps) {
    // check if steps not empty
    if (!steps) {

        // loop trough the range and add them to the array
        for (let i = 1; i <= end; i++) {
            array3.push(i);
        }
        // return the results
        return array3

    } else {
        // if there are steps run this

        // check if the start range is smaller then the end
        if (start < end) {
            // loop trough the range and when the integer is smaller or equal to the end number i +=steps
            for (let i = start; i <= end; i += steps) {
                //push the the integer into the array
                array3.push(i);
            }
        } else if (start > end) {
            // loop trough the range and when the integer is bigger or equal to the end number i +=steps
            for (var i = start; i >= end; i += steps) {
                //push the the integer into the array
                array3.push(i);
            }
        }
    }

    // return the results
    return array3;
}

console.log(range(1, 10));
console.log(sum(range_2(1, 10)));
console.log(range_3(5, 2, -1));
