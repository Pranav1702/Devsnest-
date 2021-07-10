//import logo from './logo.svg';
import './App.css';
import Increase from './Increase';

function App() {

  return (
    <div className="App">
      <h2>OnClick Button the Count is Increase</h2>
      <div className="yash">
    <Increase/>
    <Increase/>
    <Increase/>
    <Increase/>
    <Increase/>
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
