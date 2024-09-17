const checkForSequence = (option1, option2, option3) => {
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
            return true; // Ensure this return exits the function
        }
    }

    for (let i = 0; i < 3; i += 1) {
        if(checkForSequence(board[i], board[i + 3], board[i + 6])) {
            console.log("Row Winner");
            console.log("COLUMN winner");
            return true; // Ensure this return exits the function
        }
    }

    // diagnols 1
    if (checkForSequence(board[0], board[4], board[8])) {
        console.log("Diagonal Winner 1");
        return true;
    }
    
    // diagonals 2
    if (checkForSequence(board[2], board[4], board[6])) {
        console.log("Diagonal Winner 2");
        return true;
    }

    // No winner found
    return false;
}