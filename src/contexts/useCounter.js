import React, { createContext, useContext, useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case "Increment":
            return state + 1;
        case "Decrement": 
            return state - 1;
        default:
            return state;
    }

}

const counterContext = createContext();
export const useCounter = () => useContext(counterContext);

export function CounterContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState, (state) =>  state + 20 );
    const value = {state, dispatch};

    return (
        <counterContext.Provider value={value}>
            {props.children}
        </counterContext.Provider>
    )
}




// const [state, dispatch] = useReducer(reducer, initialArg, init?)

// Parameters 
// reducer: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
// initialArg: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
// optional init: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).

// Returns 
// useReducer returns an array with exactly two values:

// The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).
// The dispatch function that lets you update the state to a different value and trigger a re-render.