import { useDispatch,useSelector } from 'react-redux';
import { addPlace,show } from '../Actions/Index';

const Inputfield=()=>{
    const place= useSelector((state)=>state.place);
    const dispatch=useDispatch();
    const theme=useSelector(state=>state.theme);
return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input type="text" value={place}
          placeholder="Input City Name"
          onChange={(e)=>{
              dispatch(addPlace(e.target.value));
            //setPlace(e.target.value);
        }}/>
          <button className={theme?"bansal1":"bansal2"}
         onClick={()=>{
            dispatch(show(place));
         }
          }
          >
              Submit</button>
        </div>
        </div>
        </div>
)
}
export default Inputfield;