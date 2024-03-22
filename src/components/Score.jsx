export default function Score({ streak, guess, highScore, guessMax }) {
  return (
    <div className="flex justify-between w-[300px] lg:w-1/3 font-semibold">
      <div className="flex flex-col lg:flex-row w-1/2 justify-around">
        <span>Streak: {streak}</span>
        <span>
          Guess: {guess}/{guessMax}
        </span>
      </div>
      <span>Best score: {highScore}</span>
    </div>
  );
}
