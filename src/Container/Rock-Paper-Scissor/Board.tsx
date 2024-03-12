import { useState } from "react";
import Circle from "./Circle";

const Board = () => {
  const [selectedItemId, setSelectedItemId] = useState("");
  const [computerSelectedItemId, setComputerSelectedItemId] = useState("");
  const [result, setResult] = useState("");

  const getRandomNumber = (minNumber: number, maxNumber: number): number => {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  };

  const getComputerSelectedItemId = () => {
    return getRandomNumber(0, 2);
  };

  const getSelectedItemFromId = (id: number) => {
    const obj: any = {
      0: "rock",
      1: "paper",
      2: "scissor",
    };
    return obj[id];
  };

  const handleClick = (id: number) => {
    setSelectedItemId(id.toString());
    let compSelcted = getComputerSelectedItemId();
    setComputerSelectedItemId(compSelcted.toString());
    const gameLogic = [
      ["X", "0", "1"],
      ["1", "X", "0"],
      ["0", "1", "X"],
    ];
    let resultId: string = gameLogic[id][compSelcted];
    if (resultId === "X") {
      setResult("No one");
    } else {
      setResult(resultId === "0" ? "Computer" : "You");
    }
  };

  const handleResetClick = () => {
    setComputerSelectedItemId("");
    setResult("");
    setSelectedItemId("");
  };

  return (
    <>
      <div>
        <div className="w-full mb-10">
          <div className="border-2 border-yellow-600 rounded-lg p-5 text-yellow-400 text-center mx-5"></div>
        </div>
        <div className="flex flex-row">
          <Circle value="rock" handleClick={() => handleClick(0)} />
          <Circle value="paper" handleClick={() => handleClick(1)} />
          <Circle value="scissor" handleClick={() => handleClick(2)} />
        </div>
        <div className="w-full mt-10">
          {selectedItemId === "" && computerSelectedItemId === "" ? null : (
            <>
              <div className="border-2 border-yellow-600 rounded-lg p-5 text-yellow-400 text-center mx-5">
                You selected{" "}
                <span className="font-bold text-white">
                  {getSelectedItemFromId(parseInt(selectedItemId))}
                </span>
                , Computer selected{" "}
                <span className="font-bold text-white">
                  {getSelectedItemFromId(parseInt(computerSelectedItemId))}
                </span>
                {result === "" ? null : <p>{result} won!!</p>}
              </div>
            </>
          )}
          {result === "" ? null : (
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
