//import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Food from './Food';

function App() {
  const [cards,setCards]=useState([{foods:'burger', calorie:'1200'},{foods:'pizza', calorie:'200'},{foods:'Fried Rice', calorie:'250'},
  {foods:'Pani Puri', calorie:'50'},{foods:'Browne', calorie:'350'}, {foods:"Sandwich", calorie:"100"},{foods:"Coke", calorie:"200"}]);
  const [food,setFood]=useState('');
  const [cal,setCal]=useState('');
  
  return (
    <div className="App">
      <div className="bansal">
        <label style={{fontSize:12,marginTop:-7,marginLeft:13,position:'absolute',padding:'auto'}} for="foods" class="form-label">Food Name:-</label>
      <input type='text' placeholder='Enter Food Name' value={food} multiline  onChange={(e)=>{
        setFood(e.target.value);
      }}></input>
       <label style={{fontSize:12,marginTop:-7,marginLeft:13,position:'absolute',padding:'auto'}} for="calorie" class="form-label">Calorie Value:-</label>
      <input type='number' placeholder='Enter your calorie' value={cal} onChange={(e)=>{
        setCal(e.target.value);
      }}></input>
      <button className="t1" onClick={()=>{
        const obj=[...cards,{foods:food ,calorie:cal}];
        setCards(obj);
        setFood('');
        setCal('');

      }}>Add</button>
      </div>
      
      <h1>Calorie Read Only</h1>
      <div className="container">
      {cards.map((x,index)=>(
          <Food key={index} cards={cards} setCards={setCards} foods={x.foods}  calorie={x.calorie} index={index}/>
     ))}
      </div>
    </div>
  );
}

export default App;
