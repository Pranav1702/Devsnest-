//import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import useCustomhooks from './Custom';

function App() {
  const data=useCustomhooks();
  const [toggle,setToggle]=useState();
  return (
    <div className="App">
    <div className="cont">
    {toggle ? 'The light is on!' : 'Hey who turned off the lights'}
   <h1>Count up: {data.count}</h1>
   <button type="button" onClick={data.handleIncrement}>Increment</button>
   <button onClick={setToggle}>
        toggle
      </button>
    </div>
      
    </div>
  );
}

export default App;
