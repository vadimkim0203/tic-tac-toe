import React from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Yuliya" symbol="X" />
          <Player initialName="Vadim" symbol="O" />
        </ol>
        <GameBoard/>
      </div>

      {/* LOG */}
    </main>
  );
}

export default App;
