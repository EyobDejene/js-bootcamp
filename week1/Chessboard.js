// #########   EXERCISE CHESSBOARD ######### //

// define variables
let chessBoard = "";
let boardSize = 8;

//create a loop for the Y line of the board
for (let lineY = 0; lineY < boardSize; lineY++) {

    //create a loop for the X line of the board
    for (let lineX = 0; lineX < boardSize; lineX++) {
        //if the  X line  + the Y line of the board divide by 2 is true show empty string
        if ((lineX + lineY) % 2 === 0) {
            chessBoard += " ";
        }
        //else add add # to the chessBoard
        else {
            chessBoard += "#";
        }
    }
    // add to the board a new line
    chessBoard += "\n";
}

// show the board
console.log(chessBoard);