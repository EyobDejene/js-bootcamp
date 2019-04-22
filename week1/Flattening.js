// #########   EXERCISE Flattening ######### //

// define arrays
let arrays = [[1, 2, 3], [4, 5], [6]];

// flat the arrays
var flat =
    arrays.reduce(function(a, b) {
        // return the result
        return a.concat(b);
    });

// calls the flat function
console.log(flat);


// define loop function
function loop(value, update, execute) {
    // if the value is bigger then 0 run
    if (value > 0) {
        // run the execute function
        execute(value);
        // return the loop
        return loop(update(value),update, execute);
    }
}

// define the update function
var update = function (n) {
    // get the state value and take one off
    // return the result
    return n - 1;
};

// call the loop function
loop(3,update, console.log);