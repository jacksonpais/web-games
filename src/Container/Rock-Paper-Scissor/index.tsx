import Board from "./Board";

const RockPaperScissor = () => {
  return (
    <div className="h-screen bg-gray-900">
      <div className="w-full border border-white text-white p-3 flex items-center justify-between">
        <a href="/" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
          Back
        </a>
        <h1 className="text-xl text-center flex-1">Rock Paper Scissor</h1>
        <div className="w-24"></div>
      </div>
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <Board />
      </div>
    </div>
  );
};
export default RockPaperScissor;
