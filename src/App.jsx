import React from "react";
import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Yuliya" symbol="X" />
          <Player initialName="Vadim" symbol="O" />
        </ol>
        {/* Game Board */}
      </div>

      {/* LOG */}
    </main>
  );
}

export default App;
