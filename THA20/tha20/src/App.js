//import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Food from './Food';

function App() {
  const [cards,setCards]=useState([{foods:'burger', calorie:'1200'},{foods:'pizza', calorie:'200'},{foods:'Fried Rice', calorie:'250'},
  {foods:'Pani Puri', calorie:'50'},{foods:'Browne', calorie:'350'}, {foods:"Sandwich", calorie:"100"},{foods:"Coke", calorie:"200"}]);
  return (
    <div className="App">
      <h1>Calorie Read Only</h1>
      <div className="container">
      {cards.map((x,index)=>(
          <Food key={index} cards={cards} setCards={setCards} foods={x.foods} calorie={x.calorie} index={index}/>
     ))}
      </div>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
