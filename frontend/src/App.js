import React, { useState } from 'react';

import Header from './Header';

// JSX (JavaScript XML)

function App() {
  let [counter, setCounter] = useState(0);

  // useState returns an Array [value, updateFunction];

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>   
      <Header>counter: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
