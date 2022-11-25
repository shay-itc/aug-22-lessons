import { useState, useReducer } from "react"

function myReducer(state, action) {
    switch (action.type) {
        case 'increase':
            return { counter: state.counter + 1, counter2: state.counter2 + 1 };
        case 'decrease':
            return { ...state, counter: state.counter - 1 };
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
        <button onClick={() => {
            dispatch({ type: 'decrease' })
            // setCounter(counter - 1)
        }}>Decrease</button>
        {state.counter}
        {state.counter2}
    </>)
}