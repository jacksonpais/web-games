import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/home";
import TicTacToe from "./Container/Tic-Tac-Toe";
import RockPaperScissor from "./Container/Rock-Paper-Scissor";
import ThemeProvider from "./Store/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tic-tac-toe" element={<TicTacToe />}></Route>
        <Route
          path="/rock-paper-scissor"
          element={<RockPaperScissor />}
        ></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
