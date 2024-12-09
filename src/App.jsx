import React from "react";
import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Yuliya" symbol="X" />
          <Player name="Vadim" symbol="O" />
        </ol>
        {/* Game Board */}
      </div>

      {/* LOG */}
    </main>
  );
}

export default App;
