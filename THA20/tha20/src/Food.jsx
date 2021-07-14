import React from 'react';
import './Food.css'

function Food({index,cards,setCards,foods,calorie}) {
    
    return (
        <div className="yash">
            <h2>
             {foods || "junk food"} <br/>
            </h2>
            <h3>"You have consumed {calorie || "1500 "} cals today"</h3>
            <button onClick={()=>{
              const newCards=cards.filter((x,i)=>(i!==index
              ))
              setCards(newCards);
            }}>delete</button>
        </div>
    ) 
  }
  export default Food;