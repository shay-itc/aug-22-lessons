import { useContext, useReducer, useState } from 'react';
import { CounterContext, COUNTER_INCREASE, COUNTER_DECREASE } from './CounterContext';
import CustomInput from './CustomInput';
import './App.css';

function themeReducer(state, action) {

  switch (action.type) {
    case 'toggleMode':
      state.isDarkMode = !state.isDarkMode;
      return { ...state };
  }

  return state;
}

function App() {

  const { state, dispatch } = useContext(CounterContext);

  // const [state, dispatch] = useReducer(themeReducer, { isDarkMode: false })
  const [inputValue, parentValueChanged] = useState('');

  console.log('inside parent', inputValue)

  return (
    <div className="App" style={{ backgroundColor: state.isDarkMode ? '#333' : '#fff' }}>

      <CustomInput parentValueChanged={parentValueChanged} />
      {/* <button onClick={() => { 
        dispatch({ type: COUNTER_INCREASE, payload: { value: 'Hi there' } }) }
        }>Increase</button>
      <button onClick={() => { dispatch({ type: COUNTER_DECREASE }) }}>Decrease</button>
      {state.counter}
      <br /><br /> */}
      {/* <input type="checkbox" onChange={(e) => { dispatch({ type: 'toggleMode' }) }} /> */}
    </div>
  );
}

export default App;

// Create an compoenent that only has an text input, this component should have a
// state that contains the value of the input field and updates when onChange is called
// This component should also receive state function from its parent as a prop, and 
// this function should be called onChange also