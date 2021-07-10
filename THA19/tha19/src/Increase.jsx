import React ,{useState} from 'react';
import './Increase.css';

function Increase(){
    const [count,setCount]=useState(0);
    return(
        <button onClick={() =>{
            setCount(count+1);
        }}>{count}</button>
    )
}
export default Increase;