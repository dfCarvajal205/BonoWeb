import React from 'react';
import './App.css';
import { Marvel } from './components/Marvel';
import { Joke } from './components/Joke';

function App() {
  return (
    <div className="App">    
      <Joke/>
      <Marvel/>
    </div>
  );
}

export default App;
