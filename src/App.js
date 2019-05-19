import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='App-title'>Meteor Explorer</h1>
        </header>
        <p className='App-intro'>
          Track <b>Meteor Strikes</b> around the World
        </p>
      
    </div>
  );
}

export default Explorer;
