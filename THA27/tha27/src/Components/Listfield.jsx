import { useSelector,useDispatch } from "react-redux";
import { removeItems } from "../Actions";
//import TodoReducers from "../Reducers/TodoReducers";


const Listfield=()=>{
      const dispatch=useDispatch();
    const Todo=useSelector((state=>state.todo));
    return(
        <div>
            {Todo.map((todo,index)=>(
                <div key={index}>
                <h4 style={{display:"inline-block"}}>{todo.name}</h4>
            <button onClick={()=>{
                dispatch(removeItems(index));
            }}>
                Delete
            </button>
            </div>
            ))}
        </div>
    );
};
export default Listfield;