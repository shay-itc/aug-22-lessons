
import { useState, useContext } from 'react';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import Button from './components/Button';
import TextInput from './components/TextInput';
import Home from './views/Home';
import Contact from './views/Contact';
import Search from './views/Search';
import './App.css';
import { SomeContext, SomeContextProvider } from './SomeContext'
import Login from './views/Login';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { login } = useContext(SomeContext);

  const navigate = useNavigate();

  return (
    <div className="App">
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
      <nav className='navbar'>
        <div className='item'><Link to='/'>Home</Link></div>
        <div className='item'><Link to='/login'>Login</Link></div>
        <div className='item'><Link to='/contact/id/param2/param2'>Contact</Link></div>

        <input type="text" onChange={(e) => {
          setSearchTerm(e.target.value);
        }} value={searchTerm} />

        <button onClick={() => {
          console.log(searchTerm);
          navigate('/search/' + searchTerm)
        }}>Search</button>

        {login}

      </nav>
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact/catalog/:type/:model' element={<Contact />} />
          <Route path='/search/:term' element={<Search />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


// http://domain.com/catalog/:id?key=value