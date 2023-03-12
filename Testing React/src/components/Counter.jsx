import "./Counter.css"

function Counter({ index, onIncrement, onDecrement, onDelete, counter }) {

    return (
        <div className="counter-container">
            <span data-testid="counter-number">{counter.value}</span>
            <button data-testid="increment-button" className="increment" onClick={() => { onIncrement(index) }}>+</button>
            <button data-testid="decrement-button" className="decrement" onClick={() => { onDecrement(index) }}>-</button>
            <button className="delete" onClick={() => { onDelete(index) }}>Delete</button>
        </div>
    );
}

// Create a new test file for the counter component
// make sure the component launches and dont crash
// check that the plus button exist and has a plus sign in it

export default Counter;
