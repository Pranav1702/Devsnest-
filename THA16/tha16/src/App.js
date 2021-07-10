//import logo from './logo.svg';
import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Card from "./Card";
import Chess from './Chess';


function App() {
  return (
   <div className="App">
     <Card />
     <Chess/>
     <h3 ><b>CHESS BOARD</b></h3>
   </div>
//function App() {
  //return (
   // <div className="App">
     /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Card name="meme.jpg"/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
     //     Learn React
      //  </a>
     // </header>*/
    //</div>
  );
}

export default App;
