import React, { useState } from 'react';

import './global.css'

import Routes from './routes';

// JSX (JavaScript XML)

function App() {
  let [counter, setCounter] = useState(0);

  // useState returns an Array [value, updateFunction];

  function increment() {
    setCounter(counter + 1);
  }

  return (
      <Routes />
  );
}

export default App;
