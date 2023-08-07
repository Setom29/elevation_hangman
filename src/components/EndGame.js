import React from "react";

export default function EndGame(props) {
  return (
  <>
    <div>{props.status ? "Congratulations!" : `You lose! The word was: ${props.word}`}</div>
    <button onClick={props.restartGame}>Restart</button>
  </>   
  );
}
