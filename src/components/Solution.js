import React from "react";
import Hint from "./Hint";

export default function Solution(){
    return (
        <div>
            {["_", "_", "_", "_"].map(el => <span>{` ${el} `}</span>)}
            <Hint />
        </div>

    )
}

