const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {

  //the data is derived from updatedTurns from the App file
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const {square, player } = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  };

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

  //     return updatedBoard;
  //   });

  //   onSelectSquare(); //nested function that is passed to the parent component as a props
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => {onSelectSquare(rowIndex, colIndex)}}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
