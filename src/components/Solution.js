import React from "react";
import Hint from "./Hint";
import Letter from "./Letter";

export default function Solution(props) {
  return (
    <div>
      <div className="solution-letters">
        {props.solution.word.split("").map((letter) => (
          <Letter
            class={"active-letter"}
            letter={props.letterStatus[letter] ? letter : "_"}
          />
        ))}
      </div>
      
      <Hint hint={props.solution.hint} />
    </div>
  );
}
