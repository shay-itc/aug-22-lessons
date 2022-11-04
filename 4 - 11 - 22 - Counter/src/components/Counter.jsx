import { useState, useEffect } from 'react'

function Counter(props) {

    const { defaultCounter } = props;

    const [counter, setCounter] = useState(defaultCounter)

    useEffect(() => {
        setCounter(defaultCounter)

        console.log('Called after');

        return () => {
            console.log('Called before')
        }
    })

    return (
        <div>
            <button onClick={() => {
                // setCounter(counter + 1);
            }}>Click me</button>
            {defaultCounter}
        </div>
    )
}

export default Counter;