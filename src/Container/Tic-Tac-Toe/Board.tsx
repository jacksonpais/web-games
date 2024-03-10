import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  const checkIfWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkIfWinner();

  const handleClick = (index: number) => {
    if (state[index] !== null) {
      return;
    }
    let newState = [...state];

    newState[index] = turn;
    setState(newState);
    let nextTurn = turn === "X" ? "Y" : "X";
    setTurn(nextTurn);
  };

  const handleResetClick = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>
      {isWinner ? (
        <>
          <div className="w-full">
            <p className="border-2 border-yellow-600 rounded-lg p-5 text-yellow-400 text-center mx-5">
              Winner is {isWinner}
            </p>
            <div className="text-center mt-5">
              <button
                className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200"
                onClick={handleResetClick}
              >
                Reset Game
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="flex flex-row">
            <Square handleClick={() => handleClick(0)} value={state[0]} />
            <Square handleClick={() => handleClick(1)} value={state[1]} />
            <Square handleClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="flex flex-row">
            <Square handleClick={() => handleClick(3)} value={state[3]} />
            <Square handleClick={() => handleClick(4)} value={state[4]} />
            <Square handleClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="flex flex-row">
            <Square handleClick={() => handleClick(6)} value={state[6]} />
            <Square handleClick={() => handleClick(7)} value={state[7]} />
            <Square handleClick={() => handleClick(8)} value={state[8]} />
          </div>
        </div>
      )}
    </>
  );
};
export default Board;
