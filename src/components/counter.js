import React from "react";
import { useCounter } from "../contexts/useCounter";

function Counter() {
    const {state, dispatch} = useCounter();

    const handleState = (ele) => {
        const dispatchKey = ele.target.id;
        dispatch(dispatchKey);
    }
  return <div className="reducer-hook-example">
    <p>
        Count is : {state}
    </p>
    <div>
        <button id="Increment" onClick={handleState}>
            Increment
        </button>
        <button id="Decrement" onClick={handleState}>
            Decrement
        </button>
    </div>
  </div>;
}

export default Counter;
