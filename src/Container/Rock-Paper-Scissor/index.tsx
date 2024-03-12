import Header from "../../Home/header";
import Board from "./Board";

const RockPaperScissor = () => {
  return (
    <div className="h-screen bg-gray-900">
      <Header title="Rock Paper Scissor" />
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <Board />
      </div>
    </div>
  );
};
export default RockPaperScissor;
