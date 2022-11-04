import './App.css';
import { useState } from 'react';

function Counter(props) {
  const { delta } = props;
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    const newCounterValue = counter + delta;
    setCounter(newCounterValue);    
  }

  return (<div>
    <div>Counter is:</div>
    <div>{counter}</div>
    <button onClick={increaseCounter}>Increase Counter</button>
  </div>)
}

function App() {
  const [counterDelta, setCounterDelta] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <div>Counter delta: {counterDelta}</div>
        <button onClick={
          () => { setCounterDelta(counterDelta + 1)}}>
            Increase Counter Delta
        </button>
        <Counter delta={counterDelta} />
      </header>
    </div>
  );
}

export default App;
