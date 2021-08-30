import { useDispatch,useSelector } from "react-redux";
import { Theme } from "../Actions/Index";

const ColourChane=()=>{
    const theme=useSelector(state=>state.theme);
    const dispatch=useDispatch();
    return (
    <div className="yash">
<button className={theme?"bansal1":"bansal2"} onClick={()=>{
    dispatch(Theme());
}}>{theme? "Dark": "Light" }</button>
    </div>
    )
};
export default ColourChane;