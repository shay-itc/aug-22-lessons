import { useState, useEffect } from 'react'
import Counter from './components/Counter';
import './App.css';

function App() {

  const [defaultCounter, setDefaultCounter] = useState(0);
  // const [defaultCounter2, setDefaultCounter2] = useState(0);

  // useEffect(() => {
  //   console.log('Only first')
  // }, [])

  // useEffect(() => {
  //   console.log('defaultCounter changed')
  // }, [defaultCounter])

  // useEffect(() => {
  //   console.log('defaultCounter2 changed')
  // }, [defaultCounter2])

  // console.log(defaultCounter)

  return (
    <div>

      <input
        type="number"
        value={defaultCounter}
        onChange={(e) => {
          console.log(e.currentTarget);
          setDefaultCounter(e.current.value)
        }} />

      {/* <button onClick={() => {
        setDefaultCounter(defaultCounter + 1)
      }}>Change Default</button>

      <button onClick={() => {
        setDefaultCounter2(defaultCounter2 + 1)
      }}>Change Default2</button> */}

      <br />
      <br />
      <br />

      <Counter defaultCounter={defaultCounter} />
    </div>
  );
}

export default App;

