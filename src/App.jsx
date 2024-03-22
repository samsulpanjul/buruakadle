import { useState } from "react";
import { AutoComplete, Button } from "antd";
import { useLocalStorage } from "./hooks/useLocalStorage";
import List from "./components/List";
import Random from "./components/Random";
import Score from "./components/Score";
import students from "./data/students.json";

function App() {
  const [random, setRandom] = useLocalStorage("random", students[Math.floor(Math.random() * students.length)]);
  const [selectedList, setSelectedList] = useLocalStorage("selectedList", []);
  const [guess, setGuess] = useLocalStorage("guess", 0);
  const [disableGuessed, setDisableGuessed] = useLocalStorage("disabledGuessed", false);
  const [inputValue, setInputValue] = useState("");
  const [streak, setStreak] = useLocalStorage("streak", 0);
  const [highScore, setHighScore] = useLocalStorage("highScore", 0);
  const guessMax = 7;

  function guessedCharacter(student) {
    setDisableGuessed(student.name === random.name ? true : false);
    if (student.name === random.name) {
      setStreak(streak + 1);
      if (streak === highScore) setHighScore(highScore + 1);
    } else if (guess == guessMax - 1) {
      setStreak(0);
    }
  }

  function handleSelect(item) {
    const selectedItem = students.find((student) => student.name == item);
    setInputValue("");
    if (selectedList.includes(selectedItem)) return;

    setSelectedList((prevItem) => [selectedItem, ...prevItem]);
    setGuess(guess + 1);
    guessedCharacter(selectedItem);
  }

  function handleNextButton() {
    setRandom(students[Math.floor(Math.random() * students.length)]);
    setGuess(0);
    setSelectedList([]);
    setDisableGuessed(false);
  }

  return (
    <>
      <div className="bg-cover bg-center fixed -z-50 h-screen w-full blur-md" style={{ backgroundImage: "url(/images/BG_AronaRoom.jpg)" }}></div>
      <div className="flex flex-col gap-5 items-center justify-center pt-10 text-black">
        {random && <Random selectedList={selectedList} random={random} guess={guess} guessMax={guessMax} />}
        <AutoComplete
          style={{
            width: 400,
          }}
          value={inputValue}
          onChange={(value) => setInputValue(value)}
          options={students.map((student) => ({
            value: student.name,
            label: (
              <div className="flex items-center">
                <img src={student.img} alt={student.name} className="h-[48px] mr-[8px]" />
                <span className="text-lg">{student.name}</span>
              </div>
            ),
          }))}
          placeholder="Search student..."
          filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
          onSelect={handleSelect}
          disabled={disableGuessed || guess === guessMax ? true : false}
          className={disableGuessed || guess === guessMax ? "bg-slate-200 rounded-lg" : "false"}
          listHeight={300}
        />
        <Score streak={streak} guess={guess} highScore={highScore} guessMax={guessMax} />
        {guess !== guessMax && !!selectedList.length && random.name === selectedList[0].name && (
          <Button size="large" onClick={handleNextButton} type="primary" className="btn">
            Next
          </Button>
        )}
        {guess === guessMax && (
          <Button size="large" onClick={handleNextButton} type="primary" className="btn">
            Restart
          </Button>
        )}
        <List selectedList={selectedList} random={random} />
        <div className="flex w-[300px] justify-between mb-14">
          <div className="flex items-center gap-2">
            <div className="w-[15px] h-[15px] bg-green-400 border border-black"></div>
            <span>Correct</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[15px] h-[15px] bg-red-500 border border-black"></div>
            <span>Incorrect</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
