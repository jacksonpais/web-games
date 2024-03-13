interface IScoreBoardProps {
  PlayerOneName: string;
  PlayerTwoName: string;
  PlayerOneScore: number;
  PlayerTwoScore: number;
}
const ScoreBoard = (props: IScoreBoardProps) => {
  return (
    <div className="border-2 border-yellow-600 rounded-lg p-5 text-yellow-400 text-center mx-5">
      <p>Score</p>
      <div className="flex flex-row justify-evenly">
        <div className="w-64 border-b-2 border-yellow-500 text-white">
          <span className="float-start p-2 bg-yellow-500 w-28">
            {props.PlayerOneName}
          </span>
          {props.PlayerOneScore}
        </div>
        <div className="w-64 border-b-2 border-yellow-500 text-white">
          <span className="float-end  p-2 bg-yellow-500 w-28">
            {props.PlayerTwoName}
          </span>
          {props.PlayerTwoScore}
        </div>
      </div>
    </div>
  );
};
export default ScoreBoard;
