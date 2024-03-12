import Header from "../../Home/header";
import Board from "./Board";

const TicTacToe = () => {
  return (
    <div className="h-screen bg-gray-900">
      <Header title="Tic Tac Toe"/>
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <Board />
      </div>
    </div>
  );
};
export default TicTacToe;
