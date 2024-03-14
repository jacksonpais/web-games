import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Store/ThemeContext";
import { useContext } from "react";
import { ThemeContextType } from "../@types/ThemeContextType";

const Home = () => {
  const { setTheme } = useContext(ThemeContext) as ThemeContextType;
  const navigate = useNavigate();
  const handleClick = (url: string) => {
    setTheme("blue");
    navigate("/" + url);
  };

  return (
    <div className="bg-gray-900">
      <div className="w-full h-screen">
        <div className="flex h-screen">
          <div className="m-auto flex flex-col gap-6">
            <a
              className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200 text-center"
              onClick={() => handleClick("tic-tac-toe")}
            >
              Tic Tac Toe
            </a>

            <a
              className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200 text-center"
              onClick={() => handleClick("rock-paper-scissor")}
            >
              Rock Paper Scissor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
