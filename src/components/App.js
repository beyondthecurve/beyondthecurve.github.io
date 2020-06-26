import React from 'react';
import loading from '../imgs/loading.png';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loading} className="App-logo" alt="logo" />
        <p>
          Beyond The Curve's website is currently in progress- check back soon!
        </p>
      </header>
    </div>
  );
}

export default App;
