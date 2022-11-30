import React, { useState } from "react";
import { createMove, boardReset } from "../../api/moveApi";
import { Square } from "../square/Square";
import "./gameBoard.css";

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");

  const setBoardValues = (pos) => {
    const boardCopy = [...board];
    boardCopy[pos] = player;
    setBoard(boardCopy);

    let nextPlayer = player === "X" ? "O" : "X";
    setPlayer(nextPlayer);

    const moveData = {
      tile: pos + 1,
    };

    createMove(moveData)
      .then((response) => {
        if (response.data?.player) {
          alert(response.data?.player);
          window.location.reload(false);
        }
      })
      .catch((error) => {
        console.log("ERROR", error.response);
      });
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(""));
    boardReset();
  };

  return (
    <div>
      <h1 className="mt-3">TIC TAC TOE</h1>
      <div className="main-div">
        {[...Array(9)].map((_, pos) => (
          <Square
            key={pos}
            name={pos}
            onClick={() => setBoardValues(pos)}
            value={board[pos]}
          />
        ))}
      </div>
      <button className="mt-3" onClick={resetBoard}>
        Reset Board
      </button>
    </div>
  );
};

export default GameBoard;
