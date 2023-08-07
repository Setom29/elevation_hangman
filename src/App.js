import logo from "./logo.svg";
import "./App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import EndGame from "./components/EndGame";
import React, { useEffect, useState } from "react";
import getWord from "./words"

const generateLetterStatuses = () => {
  let lettersStatus = {};
  for (let i = 65; i <= 90; i++) {
    lettersStatus[String.fromCharCode(i)] = false;
  }
  return lettersStatus;
};

function App() {
  const [plusStep, minusStep] = [5, 10]
  const [endGame, setEndGame] = useState({ isEndGame: false, isWon: false });
  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
  const [solution, setSolution] = useState(getWord());
  const [score, setScore] = useState(100);

  const selectLetter = (letter) => {
    if (letterStatus[letter] === true) {
      return;
    }
    setLetterStatus({ ...letterStatus, [letter]: true });
    if (solution.word.includes(letter)) {
      setScore(score + plusStep);
    } else {
      if (score - minusStep <= 0) {
        setEndGame({ isEndGame: true, status: false });
      } else {
        setScore(score - minusStep);
      }
    }
  };

  useEffect(() => {
    if (
      solution.word.split("").filter((letter) => letterStatus[letter] === false)
        .length === 0
    ) {
      setEndGame({ isEndGame: true, status: true });
    }
  }, [letterStatus]);

  function restartGame(){
    setEndGame({ isEndGame: false, isWon: false })
    setLetterStatus(generateLetterStatuses())
    setSolution(getWord())
    setScore(100)
  }
  
  return (
    <div>
      {endGame.isEndGame ? (
        <EndGame restartGame={restartGame} word={solution.word} status={endGame.status} />
      ) : (
        <>
          <Score score={score} />
          <Solution letterStatus={letterStatus} solution={solution} />
          <Letters appSelectLetter={selectLetter} letterStatus={letterStatus} />
        </>
      )}
    </div>
  );
}

export default App;
