//import logo from './logo.svg';
import './App.css';
import Chess from './Chess';

function App() {
  return (
    <div className="App">
      <Chess />
      <h2 style={{marginLeft: "550px",
  marginTop:"25px",background:'cyan',height:50,width:420,textAlign:'center'}}><b>CHESS BOARD Using Inline CSS</b></h2>
    </div>
  /*return (
    <div className="App">
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
