import React, { useState } from 'react';
import './App.css';

function App() {
  const [textState,setTextState] = useState(false);
  const handleToggle = ()=>{
    setTextState(!textState)
  }
  return (
    <div className="App">
        <button onClick={handleToggle}>Toggle Text</button>
        {
          textState?
          <p>Demo Text</p>
          :""
        }
    </div>
  );
}

export default App;
