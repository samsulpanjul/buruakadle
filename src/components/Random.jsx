export default function Random({ selectedList, random, guess, guessMax }) {
  return (
    <div className="flex flex-col items-center font-semibold text-xl">
      {guess === guessMax || (selectedList.length != 0 && random.name === selectedList[0].name) ? (
        <>
          <img className="w-[150px] md:w-[182px]" src={random.img} alt={random.name} />
          {guess === guessMax && random.name !== selectedList[0].name ? <p>Skill issue</p> : <p>Nice!</p>}
          <p>the answer is</p>
          <p>{random.name}</p>
        </>
      ) : (
        <>
          <img className="w-[150px] md:w-[182px]" src="/images/NPC_Portrait_Null.png" alt="Null" />
          <p>???</p>
        </>
      )}
    </div>
  );
}
