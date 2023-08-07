import React from "react";

export default function Score(props) {
  const colorClasses = {
    1: { class: "green", range: 80 },
    2: { class: "yellow", range: 50 },
    3: { class: "red", range: 0 },
  };
  const getColorClass = () => {
    if (props.score >= colorClasses[1].range) {
      return colorClasses[1].class;
    } else if (props.score >= colorClasses[2].range) {
      return colorClasses[2].class;
    } else {
      return colorClasses[3].class;
    }
  };
  return <div className={getColorClass()}>{props.score}</div>;
}
