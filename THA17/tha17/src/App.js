//import logo from './logo.svg';
import './App.css';
import Food from './Food';

function App() {
  return (
    <div className="App">
      <h1>Calorie Read Only</h1>
      <div className="container">
        <Food foods="Pizza" calorie="150"/>
        <Food foods="Burger" calorie="200"/>
        <Food foods="Coke" calorie="100"/>
        <Food foods="Fried Rice" calorie="250"/>
        <Food foods="Pani Puri" calorie="50"/>
        <Food foods="Browne" calorie="350"/>
        <Food foods="Spring Roll" calorie="400"/>
      </div>
    </div>
  );
}

export default App;
