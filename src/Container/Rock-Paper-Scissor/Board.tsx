import { useState } from "react";
import Circle from "./Circle";
import ScoreBoard from "../../Score/TwoPlayerScore/ScoreBoard";

interface IScoreBoard {
  myScore: number;
  computerScore: number;
}

const defaultScoreBoardProps = {
  myScore: 0,
  computerScore: 0,
};

const Board = () => {
  const [selectedItemId, setSelectedItemId] = useState<null | number>(null);
  const [computerSelectedItemId, setComputerSelectedItemId] = useState<
    null | number
  >(null);
  const [result, setResult] = useState<null | string>(null);
  const [score, setScore] = useState<IScoreBoard>(defaultScoreBoardProps);

  const getRandomNumber = (minNumber: number, maxNumber: number): number => {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  };

  const getComputerSelectedItemId = (): number => {
    return getRandomNumber(0, 2);
  };

  const getSelectedItemFromId = (id: number): string => {
    const obj: any = {
      0: "rock",
      1: "paper",
      2: "scissor",
    };
    return obj[id];
  };

  const handleClick = (id: number) => {
    setSelectedItemId(id);
    let compSelcted = getComputerSelectedItemId();
    setComputerSelectedItemId(compSelcted);
    const gameLogic = [
      ["X", "0", "1"],
      ["1", "X", "0"],
      ["0", "1", "X"],
    ];
    let resultId: string = gameLogic[id][compSelcted];
    if (resultId === "X") {
      setResult("No one");
    } else {
      let gameScore: IScoreBoard = { ...score };
      gameScore.myScore =
        resultId === "1" ? (gameScore.myScore += 10) : (gameScore.myScore += 0);
      gameScore.computerScore =
        resultId === "0"
          ? (gameScore.computerScore += 10)
          : (gameScore.computerScore += 0);
      setScore(gameScore);
      setResult(resultId === "0" ? "Computer" : "You");
    }
  };

  const handleResetClick = () => {
    setComputerSelectedItemId(null);
    setResult(null);
    setSelectedItemId(null);
    setScore(defaultScoreBoardProps);
  };

  return (
    <>
      <div>
        <div className="w-full mb-10">
          <ScoreBoard
            PlayerOneName="You"
            PlayerOneScore={score.myScore}
            PlayerTwoName="Computer"
            PlayerTwoScore={score.computerScore}
          />
        </div>
        <div className="flex flex-row">
          <Circle
            value="rock"
            handleClick={() => handleClick(0)}
            selected={selectedItemId == 0}
          />
          <Circle
            value="paper"
            handleClick={() => handleClick(1)}
            selected={selectedItemId == 1}
          />
          <Circle
            value="scissor"
            handleClick={() => handleClick(2)}
            selected={selectedItemId == 2}
          />
        </div>
        <div className="w-full mt-10">
          {selectedItemId === null && computerSelectedItemId === null ? null : (
            <>
              <div className="border-2 border-yellow-600 rounded-lg p-4 text-yellow-400 text-center mx-5">
                You selected{" "}
                <span className="font-bold text-white">
                  {getSelectedItemFromId(selectedItemId as number)}
                </span>
                , Computer selected{" "}
                <span className="font-bold text-white">
                  {getSelectedItemFromId(computerSelectedItemId as number)}
                </span>
                {result === null ? null : <p>{result} won!!</p>}
              </div>
            </>
          )}
          {result === null ? null : (
            <div className="text-center mt-5">
              <button
                className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200"
                onClick={handleResetClick}
              >
                Reset Game
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Board;
