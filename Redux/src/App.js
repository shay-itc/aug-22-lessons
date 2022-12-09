import React from 'react';
import './App.css';
import Login from './features/Auth/Login';
import Header from './features/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
