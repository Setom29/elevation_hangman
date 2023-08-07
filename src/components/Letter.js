import React from "react";

export default function Letter(props) {
  return (
    <span
      className={props.class}
      onClick={() => {
        props.appSelectLetter(props.letter);
      }}
    >
      {props.letter}
    </span>
  );
}
