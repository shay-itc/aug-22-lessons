
import { useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import Button from './components/Button';
import TextInput from './components/TextInput';
import Home from './views/Home';
import Contact from './views/Contact';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');

  console.log(inputValue)

  const funct1 = () => {
    const promiseArr = [];
    for (let i = 0; i < 10; i++) {
      promiseArr.push(fetch('https://www.omdbapi.com/?apikey=87dd0709&type=movie&s=superman'));
    }
    Promise.allSettled(promiseArr).then((values) => {
      values.forEach((item) => {
        item.value.json().then((value) => {
          console.log(value)
        })
      })
    })
  }
  const funct2 = (e) => {
    console.log('funct2')
  }



  return (
    <div className="App">
      <Button text="My Button" type="danger" disabled={false} onClick={funct1} />
      {/* <br /><br />
      <Button text="My Button" type="primary" onClick={funct2} />
      <br /><br />
      <TextInput
        label={'My Input'}
        // type='number'
        defaultValue={'deafult value'}
        minimumChars={5}
        onInputChange={(value) => {
          setInputValue(value)
        }} /> */}
      <div>
        This is static
        <Link to='/'>Home</Link> |
        <Link to='/contact'>Contact</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
