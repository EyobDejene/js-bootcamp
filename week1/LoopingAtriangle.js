// #########   EXERCISE Looping A Triangle ######### //

// define variables
let triangle = "#";
let layers = 7;

// loop trough the layers
for (let i = 0; i < layers; i++) {

    // if the length is smaller or equal to the layers show and add a "#" for the next loop
    if (triangle.length <= layers) {

        // display the triangle
        console.log(triangle);

        // add a # to the triangle
        triangle += "#";
    }
}



