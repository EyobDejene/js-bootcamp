// #########   EXERCISE Bean Counting ######### //


//  function Count the B in string  with one parameter with the string
function countBs(string) {
    // spit the string and count the "B" characters in the string and return the result
    return string.split("B").length - 1;
}

// call the function
console.log(countBs("BBC"));


let counterCharcaters = null;
//  function Count the B in string  with one parameter with the string
let countChar = function (string, character) {
    // for loop till string length
    for (var i = 0; i <= string.length; i++) {
        // if the letter is equal to character add +1 to the counterCharacters
        if (string[i] === character) {
            counterCharcaters++
        }
    }

    //return the counter
    return counterCharcaters;
}
// call the function
console.log(countChar("kakkerlak", "k"));