import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/home";
import TicTacToe from "./Container/Tic-Tac-Toe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tic-tac-toe" element={<TicTacToe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
