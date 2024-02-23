import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './player'
import './App.test'
import Card from 'react-bootstrap/Card';
import React from 'react';

import PlayersList from './playerslist';


function App() {
  return (
    <div className="App">
      <h1>Players List</h1>
      <PlayersList />
    </div>
  );
}

export default App;
