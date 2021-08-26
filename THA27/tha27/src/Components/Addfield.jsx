import { useState } from "react";
import {useDispatch} from 'react-redux';
import { addItems,clearAll } from "../Actions";
const Addfield=()=>{
    const [items,setItems]=useState("");
    const dispatch=useDispatch();
    return(
     <div>
         <label>
            Items:
         </label>
         <input type="text" placeholder="Add items" value={items} 
         onChange={(e)=>{
          setItems(e.target.value);
         }}></input>
         <button onClick={()=>{
             dispatch(addItems({
                name:items,
                done:false,
             })
             );
             setItems("");
         }}>Add</button>
         <button onClick={() => { dispatch(clearAll())}}>
             CLEAR
         </button>
     </div>
    )
}

export default Addfield;