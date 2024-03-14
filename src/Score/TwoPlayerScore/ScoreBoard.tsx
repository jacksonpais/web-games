import { useContext } from "react";
import { ThemeContext } from "../../Store/ThemeContext";
import { ThemeContextType } from "../../@types/ThemeContextType";

interface IScoreBoardProps {
  PlayerOneName: string;
  PlayerTwoName: string;
  PlayerOneScore: number;
  PlayerTwoScore: number;
}
const ScoreBoard = (props: IScoreBoardProps) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className={`border-2 border-${theme}-600 rounded-lg p-5 text-${theme}-400 text-center mx-5`}>
      <p>Score</p>
      <div className="flex flex-row justify-evenly">
        <div className={`w-64 border-b-2 border-${theme}-600 text-white`}>
          <span className={`float-start p-2 bg-${theme}-500 w-28`}>
            {props.PlayerOneName}
          </span>
          {props.PlayerOneScore}
        </div>
        <div className={`w-64 border-b-2 border-${theme}-600 text-white`}>
          <span className={`float-end  p-2 bg-${theme}-500 w-28`}>
            {props.PlayerTwoName}
          </span>
          {props.PlayerTwoScore}
        </div>
      </div>
    </div>
  );
};
export default ScoreBoard;
