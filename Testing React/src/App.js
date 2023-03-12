import Counters from "./components/Counters";
import './App.css';
import { useState } from "react";

function App({ helloWorld, initCounters }) {

  const [counters, setCounters] = useState(initCounters || [{ value: 10 }, { value: 10 }, { value: 10 }]);

  function onIncrement(index) {
    counters[index].value++;
    setCounters([...counters]);
  }

  function onDecrement(index) {
    counters[index].value--;
    setCounters([...counters]);
  }

  function onDelete(index) {
    counters.splice(index, 1);
    setCounters([...counters]);
  }

  function refresh() {
    setCounters([{ value: 10 }, { value: 10 }, { value: 10 }]);
  }

  return (
    <div className="App">
      <Counters counters={counters} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} />
      <button className="refresh" aria-label="refresh" disabled={counters.length !== 0 ? 'disabled' : ''} onClick={refresh}>Refresh</button>

      <button data-testid="test-text" className="hello-button" onClick={() => {
        helloWorld();
      }}>
        <span className="inner-elem">Hello World!</span>
      </button>
    </div>
  );
}

export default App;
