import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const handleCounter = () =>{
    setCount(prev=>prev+1);
  }
  
  return (
    <div className="App">
      <button onClick={handleCounter}>Counter</button>
      <p>Counter Value: {count}</p>
    </div>
  );
}

export default App;
