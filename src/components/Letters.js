import React from "react";
import Letter from "./Letter";

export default function Letters(props) {
  return (
    <div>
      <div>Available letters</div>
      <div  className="letters">
        {Object.keys(props.letterStatus).map((letter) => (
            <Letter
            appSelectLetter={props.appSelectLetter}
            class={props.letterStatus[letter] ? "used-letter" : "active-letter"}
            letter={letter}
            key={letter}
            />
        ))}
      </div>
      
    </div>
  );
}
