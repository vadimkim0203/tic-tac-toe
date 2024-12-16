import { useState, React } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

      // if there're no turns previously then the function will not change the curent state from x to o and vice versa
      if (gameTurns.length > 0 && gameTurns[0].player === "X") {
       currentPlayer = "O";
      }
      return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  } //this function is passed to GameBoard's children component custom prop onSelectSquare

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Yuliya"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Vadim"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>

      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
