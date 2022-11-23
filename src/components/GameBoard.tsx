import LocationColumn from "./LocationColumn";

const GameBoard = () => {
  return (
    <div className="game-board">
      <LocationColumn></LocationColumn>
      <LocationColumn></LocationColumn>
      <LocationColumn></LocationColumn>
    </div>
  );
};

export default GameBoard;
