import Board from "./Board";

const TicTacToe = () => {
  return (
    <div className="h-screen bg-gray-900">
      <div className="w-full border border-white text-center p-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-white">Tic Tac Toe</h1>
      </div>
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <Board />
      </div>
    </div>
  );
};
export default TicTacToe;
