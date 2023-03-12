import Counter from "./Counter";

function Counters({ counters, onIncrement, onDecrement, onDelete }) {

    return (
        <div>
            {
                counters.map((counter, index) => {
                    return (<Counter
                        key={index}
                        index={index}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                        counter={counter}
                    />)
                })
            }
        </div>
    );
}

export default Counters;
