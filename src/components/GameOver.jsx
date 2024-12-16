export default function GameOver({ name }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{name} won!</p>
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
