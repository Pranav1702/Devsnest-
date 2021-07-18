//import logo from './logo.svg';
import { useState,useEffect } from 'react';
import Template from './Template';
import Meme from './Meme';
import './App.css';

function App() {
const [Memes,setMemes]=useState([]);
const [yash,setYash]=useState(null);
useEffect(()=>{
  fetch("https://api.imgflip.com/get_memes")
  .then(res=>res.json())
  .then(data => {
    setMemes(data.data.memes); 
  });
},[]);
  return (
    <div className="App">
<h1>Meme Generator</h1>
{yash===null?(<Template Memes={Memes} setYash={setYash}/>):(<Meme yash={yash} setYash={setYash}/>)}
   
  </div>
  );
}

export default App;
