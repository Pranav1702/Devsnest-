import React,{useState} from 'react';
import './Food.css'

function Food({index,cards,setCards,foods,calorie,EditCards}) {
    const [edit,setEdit]=useState(false);
    const EditCard = (index,foods,calorie) => {
        setCards(prevState => {
          return prevState.map((x, i) => {
            if (i === index) return {foods , calorie};
            return x;
          });
        });
      };
    return (
        <div className="yash">
            {edit ? (<div>
              <label style={{fontSize:15,marginTop:-15,marginLeft:13,position:'absolute',padding:'auto'}} for="foods" class="form-label">Food Name:-</label>
                <h2>
                <input className='y1' style={{width:200,height:15,marginTop:-20}} type='text' lable='Food Name' placeholder='Enter Food Name'
                 multiline value={foods} onChange={(e)=>{
        e.preventDefault();
        EditCard(index,e.target.value,calorie);
      }}></input>
                </h2>
                <label style={{fontSize:15,marginTop:-25,marginLeft:13,position:'absolute',padding:'auto'}} for="calorie" class="form-label">Calorie Value:-</label>
                <h3>
                <input className='y1' style={{width:80,marginTop:-30}} type='number' placeholder='Enter your calorie' 
                value={calorie} onChange={(e)=>{
        e.preventDefault();
        EditCard(index,foods,e.target.value);
      }}></input>
                </h3>
                <button onClick={()=>{
                    setEdit(false);
                }}>
                    save
                </button>
                </div>
                ):(
            <div>
            <h2>
             {foods || "junk food"} <br/>
            </h2>
            <h3>"You have consumed {calorie || "1500 "} cals today"</h3>
            <button onClick={()=>{
              const newCards=cards.filter((x,i)=>(i!==index
              ))
              setCards(newCards);
            }}>delete</button>
            <button className="s1" style={{marginLeft:205,marginTop:-93,position:'absolute',background:'blue',width:50,marginRight:150}} onClick={()=>{
            setEdit(true);
            }}>Edit</button>
            </div>
          ) }
        </div>
    )
  }
  export default Food;