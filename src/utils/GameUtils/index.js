const checkForSequence = (option1, option2, option3) => {
    if(option1 === null || option2 === null || option3 === null){
        return false;
    }
    return option1 === option2 && option2 === option3;
}

export const checkForWinner = (board) => {
    console.log("IN here");
    // 012
    // 345
    // 678

    // rows
    for (let i = 0; i < 9; i += 3) {
        if(checkForSequence(board[i], board[i + 1], board[i + 2])) {
            console.log("Row Winner");
            return [i, i + 1, i + 2]; // Ensure this return exits the function
        }
    }

    for (let i = 0; i < 3; i += 1) {
        if(checkForSequence(board[i], board[i + 3], board[i + 6])) {
            console.log("COLUMN winner");
            return [i, i + 3, i + 6]; // Ensure this return exits the function
        }
    }

    // diagnols 1
    if(checkForSequence(board[0], board[4], board[8])) {
        console.log("DIAGNOL Winner 1");
        return [0, 4, 8];
    }
  
    // diagonals 2
    if (checkForSequence(board[2], board[4], board[6])) {
        console.log("Diagonal Winner 2");
        return [2, 4, 6];
    }
    // if (board[1] === board[4] && board[4] === board[6]) {
    //     console.log("Diagonal Winner");
    //     return true;
    // }
  // check if the game has drawn
//   console.log(board)
  if(board.includes(null)) {
    return "draw"
  }

    return false;
};