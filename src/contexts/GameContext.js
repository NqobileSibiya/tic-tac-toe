import { createContext, useState } from "react";
import { genConfig } from 'react-nice-avatar';

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
    const [game, setGame]= useState({
        board: [null, null, null, null, null, null, null, null, null],
        player1:{
            choice: "X",
            name: "Player1",
            score: 0,
            color: "#8437f9",
            AvatarConfig: genConfig()
        },

        player2: {
            choice: "O", // Capitalize the "O" for consistency
            name: "Player2",
            score: 0,
            color: "#f9c811",
            AvatarConfig: genConfig()
        },
        turn: "X",
          roundWinner: "",
          winningCombo: []
    });

    const updatedBoard = (index) => {
        let updatedBoard = game.board;
        updatedBoard[index] = game.turn
        setGame({
            ...game,
            board: updatedBoard,
            turn: game.turn === "X" ? "O" : "X"
        });
    };

    const resetBoard = () => {
        setGame({
            ...game,
            board: [null, null, null, null, null, null, null, null, null],
            turn:"X",
            winningCombo: [],
             resetWinner: ''
        });
    };

    const restartGame = () => {
        setGame ({
            board: [null, null, null, null, null, null, null, null, null],

        player1:{
            choice: "X",
            name: "Player1",
            score: 0,
            color: "#8437f9",
            AvatarConfig: genConfig()
        },

        player2: {
            choice: "O", // Capitalize the "O" for consistency
            name: "Player2",
            score: 0,
            color: "#f9c811",
            AvatarConfig: genConfig()
        },
        turn: "X",
          roundWinner: "",
          winningCombo: []
        });
        
    }
    const toggleChoice = (choice) => choice === "X" ? "O" : "X";
    const SwitchTurn = () => {
        setGame(prevGame => ({
            ...prevGame,
            player1: {
                ...prevGame.player1,
                choice: toggleChoice(prevGame.player1.choice)
            },
            player2: {
                ...prevGame.player2,
                choice: toggleChoice(prevGame.player2.choice)
            },
            turn: "X"
        }));
    }
    const updateScore = (winner, result) => {
        //  winner should be "player1", "player2", or "draw"

        if(winner === "draw") {
            setGame(prevGame => ({
                ...prevGame,
                player1: {
                    ...prevGame.player1,  // Access winner correctly
                    score: prevGame.player1.score + 0.5,  // Update the score
                },
                player2: {
                    ...prevGame.player2,  // Access winner correctly
                    score: prevGame.player2.score + 0.5,  // Update the score
                },
                roundWinner: "",
                winningCombo: [0, 1, 2, 3, 4, 5, 6, 7, 8 ] // Set the round winner as the winner's name
            }));
        }else {
            setGame(prevGame => ({
                ...prevGame,
                [winner]: {
                    ...prevGame[winner],  // Access winner correctly
                    score: prevGame[winner].score + 1,  // Update the score
                },
                roundWinner: prevGame[winner],  // Set the round winner as the winner's name
                winningCombo: result
            })); 
        }
    };

    const roundComplete = (result) => {
        if(game.turn === game.player1.choice && result !== "draw") {
            updateScore("player1", result)
        }else if(game.turn === game.player2.choice  && result !== "draw"){
            updateScore("player2", result);
        }else {
            console.log("DRAW");
            updateScore("draw", result)
        }
        SwitchTurn();
    }

return (
    <GameContext.Provider 
    value={{
        game,
        updatedBoard,
        resetBoard,
        roundComplete,
        SwitchTurn,
        restartGame
    }}
    >
        {props.children}
    </GameContext.Provider>
);
};

