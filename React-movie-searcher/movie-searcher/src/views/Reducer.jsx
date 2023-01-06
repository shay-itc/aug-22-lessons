import { useState, useReducer } from "react"

function myReducer(state, action) {
    console.log('action', action)
    switch (action.type) {
        case 'increase':

            if (state.counter + 1 > 10) {
                return state;
            }
            return { counter: state.counter + 1, counter2: state.counter2 + 1 };
        case 'decrease':
            return { ...state, counter: state.counter - 1 };
        // case 'setCounter':
        //     return { ...state, counter: action.payload.counter };
        case 'multiply':
            action.payload.func();
            return { ...state, counter: state.counter * action.payload.multi };
    }
}

export default function Reducer() {

    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(myReducer, { counter: 0, counter2: 0 })

    return (<>
        <br /><br /><br /><br />
        <button onClick={() => {
            // setCounter(counter + 1)
            dispatch({ type: 'increase' })
        }}>Increase</button>
        <br />
        <button onClick={() => {
            dispatch({ type: 'decrease' })
            // setCounter(counter - 1)
        }}>Decrease</button>
        <br />
        <button onClick={() => {
            // setCounter(counter + 1)
            dispatch({ type: 'setCounter', payload: { counter: 5 } })
        }}>Set Counter</button>
        <br />
        <button onClick={() => {
            // setCounter(counter + 1)
            dispatch({ type: 'multiply', payload: { multi: 2, func: () => { console.log('Hi!') } } })
        }}>Multiply</button>
        <br />
        Counter 1: {state.counter}
        <br />
        Counter 2: {state.counter2}
    </>)
}



