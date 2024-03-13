import { useState } from "react";
import Square from "./Square";
import ScoreBoard from "../../Score/TwoPlayerScore/ScoreBoard";

interface IScoreBoard {
  myScore: number;
  computerScore: number;
}

const defaultScoreBoardProps = {
  myScore: 0,
  computerScore: 0,
};

interface IGameData {
  IsGameOver: boolean;
  Winner: string | null;
  WinningLogic: number[];
}

const defaultGameDataProps = {
  IsGameOver: false,
  Winner: null,
  WinningLogic: [],
};

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [score, setScore] = useState<IScoreBoard>(defaultScoreBoardProps);
  const [gameData, setGameData] = useState<IGameData>(defaultGameDataProps);

  const getGameData = (gameArr: any[]): IGameData => {
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
    let data: IGameData = defaultGameDataProps;
    data.IsGameOver = gameArr.every((a) => a !== null);
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        gameArr[a] !== null &&
        gameArr[a] === gameArr[b] &&
        gameArr[b] === gameArr[c]
      ) {
        data.IsGameOver = true;
        data.Winner = gameArr[a];
        data.WinningLogic = logic;
        return data;
      }
    }
    return data;
  };

  const winnerData: IGameData = getGameData(state);

  const handleClick = (index: number) => {
    if (!gameData.IsGameOver) {
      if (state[index] !== null) {
        return;
      }
      let newState = [...state];

      newState[index] = turn;
      setState(newState);
      let gameData: IGameData = getGameData(newState);
      if (gameData.IsGameOver) {
        let gameScore: IScoreBoard = { ...score };
        gameScore.myScore =
          gameData.Winner === "X"
            ? (gameScore.myScore += 10)
            : (gameScore.myScore += 0);
        gameScore.computerScore =
          gameData.Winner === "Y"
            ? (gameScore.computerScore += 10)
            : (gameScore.computerScore += 0);
        setScore(gameScore);
        setGameData(gameData);
      } else {
        let nextTurn = turn === "X" ? "Y" : "X";
        setTurn(nextTurn);
      }
    }
  };

  const handleResetBoardClick = () => {
    resetBoard();
  };

  const handleResetGameClick = () => {
    resetBoard();
    setScore(defaultScoreBoardProps);
  };

  const resetBoard = () => {
    setState(Array(9).fill(null));
    setTurn("X");
    setGameData(defaultGameDataProps);
  };

  const highlight = (id: number):boolean => {
    const [a, b, c] = gameData.WinningLogic;
    if (id === a || id === b || id === c) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div>
        <div className="w-full mb-5">
          <ScoreBoard
            PlayerOneName="X"
            PlayerOneScore={score.myScore}
            PlayerTwoName="O"
            PlayerTwoScore={score.computerScore}
          />
        </div>
        <div className="flex flex-row justify-center">
          <Square
            handleClick={() => handleClick(0)}
            value={state[0]}
            highlight={highlight(0)}
          />
          <Square
            handleClick={() => handleClick(1)}
            value={state[1]}
            highlight={highlight(1)}
          />
          <Square
            handleClick={() => handleClick(2)}
            value={state[2]}
            highlight={highlight(2)}
          />
        </div>
        <div className="flex flex-row justify-center">
          <Square
            handleClick={() => handleClick(3)}
            value={state[3]}
            highlight={highlight(3)}
          />
          <Square
            handleClick={() => handleClick(4)}
            value={state[4]}
            highlight={highlight(4)}
          />
          <Square
            handleClick={() => handleClick(5)}
            value={state[5]}
            highlight={highlight(5)}
          />
        </div>
        <div className="flex flex-row justify-center">
          <Square
            handleClick={() => handleClick(6)}
            value={state[6]}
            highlight={highlight(6)}
          />
          <Square
            handleClick={() => handleClick(7)}
            value={state[7]}
            highlight={highlight(7)}
          />
          <Square
            handleClick={() => handleClick(8)}
            value={state[8]}
            highlight={highlight(8)}
          />
        </div>
        <div className="w-full mt-5">
          {winnerData.IsGameOver && winnerData.Winner === null ? (
            <div className="border-2 border-yellow-600 rounded-lg p-4 text-yellow-400 text-center mx-5">
              <span className="font-bold text-white">
                Game Over! Match is draw.
              </span>
            </div>
          ) : winnerData.IsGameOver && winnerData.Winner ? (
            <div className="border-2 border-yellow-600 rounded-lg p-4 text-yellow-400 text-center mx-5">
              <span className="font-bold text-white">
                Game Over! Winner is {winnerData.Winner}
              </span>
            </div>
          ) : (
            <div className="border-2 border-yellow-600 rounded-lg p-4 text-yellow-400 text-center mx-5">
              <span className="font-bold text-white">{turn}'s Turn</span>
            </div>
          )}
          <div className="text-center mt-5">
            <button
              className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200"
              onClick={handleResetBoardClick}
            >
              Reset Board
            </button>
            <button
              className="border-2 border-yellow-600 rounded-lg px-3 py-2 ml-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200"
              onClick={handleResetGameClick}
            >
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Board;
