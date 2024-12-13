import { useState, React } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X")); 
  } //this function is passed to GameBoard's children component custom prop onSelectSquare

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Yuliya" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Vadim" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>

      {/* LOG */}
    </main>
  );
}

export default App;
