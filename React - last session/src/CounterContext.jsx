import { useState, useReducer } from "react";
import { createContext } from "react";

export const COUNTER_INCREASE = 'increase_counter';
export const COUNTER_DECREASE = 'decrease_counter';

function CounterReducer(state, action) {

    switch (action.type) {
        case COUNTER_INCREASE:
            state.counter++;
            return { ...state };
        case COUNTER_DECREASE:
            state.counter--;
            return { ...state };
        default:
            return state;
    }
}

export const CounterContext = createContext()

export default function CounterContextProvider({ children }) {

    const [state, dispatch] = useReducer(CounterReducer, { counter: 0 })

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}

// Replace the counter state with a reducer with the following functionalities: 
// increase and decrease
// replace the setCounter inside of the app component with this new functionality 
